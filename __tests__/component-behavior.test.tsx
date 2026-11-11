import React, { act } from 'react';
import { createRoot, Root } from 'react-dom/client';
import ServiceBrowser from '../app/components/ServiceBrowser';
import GlobalErrorBoundary from '../components/GlobalErrorBoundary';

const sampleServices = [
  {id: 'cloud-1', title: 'Cloud resilience', description: 'Restore critical workloads', href: '/services/cloud-resilience/', category: 'cloud', industry: 'general'},
  {id: 'security-1', title: 'Security assessment', description: 'Identify exposure', href: '/services/security-assessment/', category: 'security', industry: 'general'},
];

describe('ServiceBrowser user behavior', () => {
  let container: HTMLDivElement;
  let root: Root;
  const originalFetch = global.fetch;
  const originalAct = (globalThis as typeof globalThis & { IS_REACT_ACT_ENVIRONMENT?: boolean }).IS_REACT_ACT_ENVIRONMENT;

  beforeEach(() => {
    (globalThis as typeof globalThis & { IS_REACT_ACT_ENVIRONMENT?: boolean }).IS_REACT_ACT_ENVIRONMENT = true;
    container = document.createElement('div');
    document.body.appendChild(container);
    root = createRoot(container);
    global.fetch = jest.fn();
  });
  afterEach(async () => {
    await act(async () => root.unmount());
    container.remove();
    global.fetch = originalFetch;
    (globalThis as typeof globalThis & { IS_REACT_ACT_ENVIRONMENT?: boolean }).IS_REACT_ACT_ENVIRONMENT = originalAct;
    jest.restoreAllMocks();
    jest.useRealTimers();
  });
  const mockFetch = () => global.fetch as jest.Mock;
  async function mount() {
    await act(async () => root.render(<ServiceBrowser />));
  }

  it('shows loading, then real category content and destination links', async () => {
    let resolveRequest!: (response: unknown) => void;
    mockFetch().mockReturnValue(new Promise(resolve => { resolveRequest = resolve; }));
    await mount();
    expect(container.textContent).toContain('Loading');
    expect(mockFetch()).toHaveBeenCalledWith('/data/services.json', expect.objectContaining({signal: expect.any(AbortSignal)}));
    await act(async () => resolveRequest({ok: true, json: async () => ({services: sampleServices})}));
    expect(container.textContent).not.toContain('Loading');
    expect(container.textContent).toContain('All 2 Services');
    for (const service of sampleServices) {
      // Next's Jest runtime normalizes trailing slashes without the production build env.
      const link = container.querySelector('a[href="' + service.href.replace(/\/$/, '') + '"]');
      expect(link).not.toBeNull();
      expect(link?.textContent).toContain(service.title);
      expect(link?.textContent).toContain(service.description);
    }
  });

  it.each([404, 503])('shows HTTP %s failure instead of an empty successful catalog', async status => {
    mockFetch().mockResolvedValue({ok: false, status});
    await mount();
    expect(container.textContent).toContain('Failed to load services: HTTP ' + status);
    expect(container.querySelector('a')).toBeNull();
  });

  it('surfaces a rejected network request', async () => {
    mockFetch().mockRejectedValue(new Error('network unavailable'));
    await mount();
    expect(container.textContent).toContain('Failed to load services: network unavailable');
  });

  it('surfaces invalid JSON instead of reporting a successful empty feed', async () => {
    mockFetch().mockResolvedValue({ok: true, json: async () => { throw new SyntaxError('invalid service feed'); }});
    await mount();
    expect(container.textContent).toContain('Failed to load services: invalid service feed');
  });

  it('renders an explicitly empty catalog without inventing services', async () => {
    mockFetch().mockResolvedValue({ok: true, json: async () => ({services: []})});
    await mount();
    expect(container.textContent).toContain('All 0 Services');
    expect(container.querySelector('a')).toBeNull();
    expect(container.textContent).not.toContain('Failed to load');
  });

  it('aborts a stalled request at eight seconds and displays the failure', async () => {
    jest.useFakeTimers();
    const schedule = jest.spyOn(global, 'setTimeout');
    const clear = jest.spyOn(global, 'clearTimeout');
    let signal!: AbortSignal;
    mockFetch().mockImplementation((_url, options) => {
      signal = options.signal;
      return new Promise((_resolve, reject) => {
        signal.addEventListener('abort', () => reject(new Error('request aborted')));
      });
    });
    await mount();
    await act(async () => { jest.advanceTimersByTime(7999); });
    expect(signal.aborted).toBe(false);
    await act(async () => { jest.advanceTimersByTime(1); });
    expect(signal.aborted).toBe(true);
    expect(container.textContent).toContain('Failed to load services: request aborted');
    const requestTimerIndex = schedule.mock.calls.findIndex(([, delay]) => delay === 8000);
    expect(requestTimerIndex).toBeGreaterThanOrEqual(0);
    expect(clear).toHaveBeenCalledWith(schedule.mock.results[requestTimerIndex].value);
  });

  it('aborts on unmount and ignores a late successful response', async () => {
    jest.useFakeTimers();
    const schedule = jest.spyOn(global, 'setTimeout');
    const clear = jest.spyOn(global, 'clearTimeout');
    let signal!: AbortSignal;
    let resolveRequest!: (response: unknown) => void;
    mockFetch().mockImplementation((_url, options) => {
      signal = options.signal;
      return new Promise(resolve => { resolveRequest = resolve; });
    });
    await mount();
    await act(async () => root.unmount());
    expect(signal.aborted).toBe(true);
    await act(async () => resolveRequest({ok: true, json: async () => ({services: sampleServices})}));
    expect(container.textContent).toBe('');
    const requestTimerIndex = schedule.mock.calls.findIndex(([, delay]) => delay === 8000);
    expect(requestTimerIndex).toBeGreaterThanOrEqual(0);
    expect(clear).toHaveBeenCalledWith(schedule.mock.results[requestTimerIndex].value);
  });
  it.each(['success', 'error'] as const)('StrictMode ignores a stale %s after the active request succeeds', async outcome => {
    const requests: Array<{ signal: AbortSignal; resolve: (response: unknown) => void; reject: (reason: Error) => void }> = [];
    mockFetch().mockImplementation((_url, options) => new Promise((resolve, reject) => {
      requests.push({signal: options.signal, resolve, reject});
    }));
    await act(async () => root.render(<React.StrictMode><ServiceBrowser /></React.StrictMode>));
    expect(requests).toHaveLength(2);
    expect(requests[0].signal.aborted).toBe(true);
    expect(requests[1].signal.aborted).toBe(false);
    await act(async () => requests[1].resolve({ok: true, json: async () => ({services: sampleServices})}));
    expect(container.textContent).toContain('All 2 Services');
    expect(container.textContent).toContain('Cloud resilience');
    // The aborted transport may already have a response queued. Exercise both
    // callbacks while the replayed effect still owns a mounted component.
    await act(async () => {
      if (outcome === 'success') {
        requests[0].resolve({ok: true, json: async () => ({services: [{...sampleServices[0], title: 'Obsolete catalog'}]})});
      } else {
        requests[0].reject(new Error('obsolete request failed'));
      }
    });
    expect(container.textContent).toContain('All 2 Services');
    expect(container.textContent).toContain('Cloud resilience');
    expect(container.textContent).toContain('Security assessment');
    expect(container.textContent).not.toContain('Obsolete catalog');
    expect(container.textContent).not.toContain('Failed to load');
  });

});

describe('GlobalErrorBoundary recovery', () => {
  let container: HTMLDivElement;
  let root: Root;
  let errorLog: jest.SpyInstance;
  const originalAct = (globalThis as typeof globalThis & { IS_REACT_ACT_ENVIRONMENT?: boolean }).IS_REACT_ACT_ENVIRONMENT;
  beforeEach(() => {
    (globalThis as typeof globalThis & { IS_REACT_ACT_ENVIRONMENT?: boolean }).IS_REACT_ACT_ENVIRONMENT = true;
    container = document.createElement('div');
    document.body.appendChild(container);
    root = createRoot(container);
    errorLog = jest.spyOn(console, 'error').mockImplementation(() => {});
  });
  afterEach(async () => {
    await act(async () => root.unmount());
    errorLog.mockRestore();
    container.remove();
    (globalThis as typeof globalThis & { IS_REACT_ACT_ENVIRONMENT?: boolean }).IS_REACT_ACT_ENVIRONMENT = originalAct;
  });

  it('preserves healthy children', async () => {
    await act(async () => root.render(<GlobalErrorBoundary><button>Continue inquiry</button></GlobalErrorBoundary>));
    expect(container.textContent).toBe('Continue inquiry');
    expect(errorLog).not.toHaveBeenCalled();
  });

  it('shows fallback after a render failure and retries the actual child', async () => {
    let fail = true;
    const failure = new Error('fixture render failure');
    function Child() {
      if (fail) throw failure;
      return <p>Inquiry restored</p>;
    }
    await act(async () => root.render(<GlobalErrorBoundary><Child /></GlobalErrorBoundary>));
    expect(container.textContent).toContain('Something went wrong');
    expect(errorLog).toHaveBeenCalledWith('GlobalErrorBoundary caught an error:', failure, expect.any(Object));
    fail = false;
    const retry = Array.from(container.querySelectorAll('button')).find(button => button.textContent === 'Try Again');
    expect(retry).toBeDefined();
    await act(async () => retry!.click());
    expect(container.textContent).toBe('Inquiry restored');
  });

  it('passes the actual error and reset callback to a custom fallback', async () => {
    let fail = true;
    const failure = new Error('custom recovery');
    function Child() {
      if (fail) throw failure;
      return <p>Recovered child</p>;
    }
    function Fallback({error, resetError}: {error?: Error; resetError: () => void}) {
      return <button onClick={resetError}>Retry {error?.message}</button>;
    }
    await act(async () => root.render(<GlobalErrorBoundary fallback={Fallback}><Child /></GlobalErrorBoundary>));
    expect(container.textContent).toBe('Retry custom recovery');
    fail = false;
    await act(async () => container.querySelector('button')!.click());
    expect(container.textContent).toBe('Recovered child');
  });
});
