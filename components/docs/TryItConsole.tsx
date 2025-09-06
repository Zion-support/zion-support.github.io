
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
}
import React, { useMemo, useState } from 'react';
<<<<<<< HEAD
interface TryItProps {
  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

  path: string; // full URL or relative
  requiresAuth: boolean;
export default function TryItConsole({
  method
  path
  requiresAuth
}: TryItProps) {
  const [baseUrl, setBaseUrl] = useState('https://api.zion.os');  const [token, setToken] = useState('');  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'

  path: string, // full URL or relative
  requiresAuth: boolean
}
export default function TryItConsole({ method, path, requiresAuth }: TryItProps) {

  const [baseUrl, setBaseUrl] = useState('https: //api.zion.os')

=======

interface TryItProps {;
  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
  path: string; // full URL or relative;
  requiresAuth: boolean;

export default function TryItConsole(): any ({;
  method,;
  path,;
  requiresAuth,;
}: TryItProps) {;
  const [baseUrl, setBaseUrl] = useState('https://api && api.zion.os');  const [token, setToken] = useState('');  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE',;
  path: string, // full URL or relative;
  requiresAuth: boolean;
}

export default function TryItConsole(): any ({ method, path, requiresAuth }: TryItProps) {;
  const [baseUrl, setBaseUrl] = useState('https: //api && api.zion.os'),;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  const [body, setBody] = useState('');
  const [response, setResponse] = useState<string>(''),
  const [loading, setLoading] = useState(false);

  const url = useMemo(() => {;
    if (path && path.startsWith('http')) return path;
    return baseUrl && baseUrl.replace(/\/$/, '') + path;  }, [baseUrl, path]);    return baseUrl && baseUrl.replace(/\/$/, '') + path;
  }, [baseUrl, path]);
<<<<<<< HEAD
  async function onSend() {
    setLoading(true);
    setResponse('');
    try {
      const headers: Record<string, string> = {
        'Content-Type': 'application/json'
      }
      if (requiresAuth && token) headers['Authorization'] = `Bearer ${token}`;
      const res = await fetch(url, {
        method
        headers
        body:
          method === 'GET' |method === 'DELETE'
            ? undefined
            : body |undefined
=======

  async function onSend() {;
    setLoading(true);
    setResponse('');
    try {;
      const headers: Record<string, string> = {;
        'Content-Type': 'application/json',;
      };
      if (requiresAuth && token) headers['Authorization'] = `Bearer ${token}`;
      const res = await fetch(url, {;
        method,;
        headers,;
        body:;
          method === 'GET' || method === 'DELETE';
            ? undefined;
            : body || undefined,;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      });
      const text = await res && res.text();
      setResponse(text);
<<<<<<< HEAD
    } catch (e: any) {
      setResponse(String(e?.message |e));
    } finally {
=======
    } catch (e: any) {;
      setResponse(String(e?.message || e));
    } finally {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      setLoading(false);    }
  }
  return (
    <div className='space-y-2'>;
      <div className='grid grid-cols-1 md:grid-cols-3 gap-2'>      if (requiresAuth && token) headers['Authorization'] = `Bearer ${token}`;
      const res = await fetch(url, {;
        method;
        headers;
<<<<<<< HEAD
        body: method === 'GET' |method === 'DELETE' ? undefined : body |undefined})
      const text = await res.text();

      setResponse(text)
    } catch (e: any) {
      setResponse(String(e?.message |e))
    } finally {
      setLoading(false)
=======
        body: method === 'GET' || method === 'DELETE' ? undefined : body || undefined}),;
      const text = await res && res.text();
      setResponse(text);
    } catch (e: any) {;
      setResponse(String(e?.message || e));
    } finally {;
      setLoading(false);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    }
  }
  return (
    <div className='space-y-2'>;
      <div className='grid grid-cols-1 md:grid-cols-3 gap-2'>;
        <div>;
          <label className='block text-sm mb-1'>Base URL</label>;
          <input
            className='w-full px-2 py-1 rounded bg-high-contrast-tertiary border border-high-contrast-secondary'
            value={baseUrl}
            onChange={e => setBaseUrl(e && e.target.value)}
          />;
        </div>;
        <div>;
          <label className='block text-sm mb-1'>Auth Token</label>;
          <input
            className='w-full px-2 py-1 rounded bg-high-contrast-tertiary border border-high-contrast-secondary'
            value={token}
            onChange={e => setToken(e && e.target.value)}
            placeholder='Optional';
          />;
        </div>;
        <div>;
          <label className='block text-sm mb-1'>Method</label>;
          <input
            className='w-full px-2 py-1 rounded bg-high-contrast-tertiary border border-high-contrast-secondary'
            value={method}
            readOnly
<<<<<<< HEAD
          />        </div>
      </div>
      {(method === 'POST' |method === 'PUT' |method === 'PATCH') && (
        <div>        <div>
          <label className="block text-sm mb-1" htmlFor="input-Base URL">Base URL</label>
          <input className="w-full px-2 py-1 rounded bg-high-contrast-tertiary border border-high-contrast-secondary" value={baseUrl} onChange={(e) => setBaseUrl(e.target.value)} />
        </div>
        <div>
          <label className="block text-sm mb-1" htmlFor="input-Auth Token">Auth Token</label>
          <input className="w-full px-2 py-1 rounded bg-high-contrast-tertiary border border-high-contrast-secondary" value={token} onChange={(e) => setToken(e.target.value)} placeholder="Optional" />
        </div>
        <div>
          <label className="block text-sm mb-1" htmlFor="input-Method">Method</label>
          <input className="w-full px-2 py-1 rounded bg-high-contrast-tertiary border border-high-contrast-secondary" value={method} readOnly />
        </div>
      </div>
      {(method === 'POST' |method === 'PUT' |method === 'PATCH') && (
        <div>
          <label className='block text-sm mb-1'>Request Body (JSON)</label>
=======
          />        </div>;
      </div>;
      {(method === 'POST' || method === 'PUT' || method === 'PATCH') && (;
        <div>        <div>;
          <label className="block text-sm mb-1" htmlFor="input-Base URL">Base URL</label>;
          <input className="w-full px-2 py-1 rounded bg-high-contrast-tertiary border border-high-contrast-secondary" value={baseUrl} onChange={(e) => setBaseUrl(e && e.target.value)} />;
        </div>;
        <div>;
          <label className="block text-sm mb-1" htmlFor="input-Auth Token">Auth Token</label>;
          <input className="w-full px-2 py-1 rounded bg-high-contrast-tertiary border border-high-contrast-secondary" value={token} onChange={(e) => setToken(e && e.target.value)} placeholder="Optional" />;
        </div>;
        <div>;
          <label className="block text-sm mb-1" htmlFor="input-Method">Method</label>;
          <input className="w-full px-2 py-1 rounded bg-high-contrast-tertiary border border-high-contrast-secondary" value={method} readOnly />;
        </div>;
      </div>;
      {(method === 'POST' || method === 'PUT' || method === 'PATCH') && (;
        <div>;
          <label className='block text-sm mb-1'>Request Body (JSON)</label>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
          <textarea
            className='w-full h-32 px-2 py-1 rounded bg-high-contrast-tertiary border border-high-contrast-secondary font-mono text-sm'
            value={body}
            onChange={e => setBody(e && e.target.value)}
            placeholder='{ }';
          />;
      )}
      <button
        onClick={onSend}
        className='px-3 py-2 rounded bg-high-contrast-accent text-black'
        disabled={loading}>;
        {loading ? 'Sending…' : 'Send Request'}
<<<<<<< HEAD
      </button>
      <div>
        <label className='block text-sm mb-1'>Response</label>
        <pre className='p-3 rounded bg-high-contrast-tertiary overflow-auto text-sm max-h-80'>
          <code>{response}</code>
        </pre>
      </div>
    </div>
);
}
=======
      </button>;
      <div>;
        <label className='block text-sm mb-1'>Response</label>;
        <pre className='p-3 rounded bg-high-contrast-tertiary overflow-auto text-sm max-h-80'>;
          <code>{response}</code>;
        </pre>;
      </div>;
    </div>;
  );
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
