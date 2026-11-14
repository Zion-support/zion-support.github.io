import React, { act } from 'react';
import { createRoot, Root } from 'react-dom/client';
import ServiceBrowser from '../app/components/ServiceBrowser';

describe('ServiceBrowser category interaction', () => {
  let container: HTMLDivElement;
  let root: Root;
  const originalFetch = global.fetch;
  const env = globalThis as typeof globalThis & { IS_REACT_ACT_ENVIRONMENT?: boolean };
  const originalAct = env.IS_REACT_ACT_ENVIRONMENT;
  const services = ['cloud', 'security'].flatMap(category => Array.from({length: 10}, (_, i) => ({
    id: category + i, title: category + ' service ' + i, description: 'Fixture service',
    href: '/services/' + category + i, category, industry: 'general',
  })));
  beforeEach(async () => {
    env.IS_REACT_ACT_ENVIRONMENT = true;
    global.fetch = jest.fn().mockResolvedValue({ok: true, json: async () => ({services})});
    container = document.createElement('div');
    document.body.appendChild(container);
    root = createRoot(container);
    await act(async () => root.render(<ServiceBrowser />));
  });
  afterEach(async () => {
    await act(async () => root.unmount());
    container.remove();
    global.fetch = originalFetch;
    env.IS_REACT_ACT_ENVIRONMENT = originalAct;
  });
  const header = (label: string) => Array.from(container.querySelectorAll<HTMLElement>('[role="button"]'))
    .find(element => element.querySelector('h3')?.textContent === label)!;
  const cards = (element: HTMLElement) => element.parentElement!.querySelectorAll('a');

  it('collapses on the first click and restores all cards through Show more', async () => {
    const cloud = header('Cloud & DevOps');
    const security = header('Security');
    expect(cloud.getAttribute('aria-expanded')).toBe('true');
    expect(cards(cloud)).toHaveLength(10);
    await act(async () => cloud.click());
    expect(cloud.getAttribute('aria-expanded')).toBe('false');
    expect(cloud.textContent).toContain('Show all (10)');
    expect(cards(cloud)).toHaveLength(9);
    expect(cards(security)).toHaveLength(10);
    expect(security.getAttribute('aria-expanded')).toBe('true');
    const more = cloud.parentElement!.querySelector('button')!;
    expect(more.textContent).toContain('+1 more Cloud & DevOps services');
    await act(async () => more.click());
    expect(cloud.getAttribute('aria-expanded')).toBe('true');
    expect(cards(cloud)).toHaveLength(10);
    expect(cloud.parentElement!.querySelector('button')).toBeNull();
  });

  it('toggles each category independently on successive header clicks', async () => {
    const cloud = header('Cloud & DevOps');
    const security = header('Security');
    await act(async () => { cloud.click(); security.click(); });
    expect(cards(cloud)).toHaveLength(9);
    expect(cards(security)).toHaveLength(9);
    await act(async () => cloud.click());
    expect(cards(cloud)).toHaveLength(10);
    expect(cards(security)).toHaveLength(9);
    await act(async () => cloud.click());
    expect(cards(cloud)).toHaveLength(9);
    expect(cloud.getAttribute('aria-expanded')).toBe('false');
  });
});
