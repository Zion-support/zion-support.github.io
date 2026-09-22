import React, { act } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import CatalogBrowser from '../app/components/CatalogBrowser';

(globalThis as { IS_REACT_ACT_ENVIRONMENT?: boolean }).IS_REACT_ACT_ENVIRONMENT = true;

describe('CatalogBrowser', () => {
  let container: HTMLDivElement;
  let root: Root;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    root = createRoot(container);
  });

  afterEach(() => {
    act(() => {
      root.unmount();
    });
    container.remove();
  });

  it('renders featured and standard catalog cards', () => {
    act(() => {
      root.render(
        <CatalogBrowser
          items={[
            { href: '/blog/a/', title: 'Cloud FinOps', excerpt: 'Cut spend', topics: ['Cloud'], featured: true },
            { href: '/blog/b/', title: 'SOC automation', excerpt: 'Triage alerts', topics: ['Security'] },
          ]}
        />
      );
    });

    expect(container.textContent).toContain('Cloud FinOps');
    expect(container.textContent).toContain('SOC automation');
    expect(container.textContent).toContain('2 guides');
    expect(container.textContent).toContain('Featured');
    expect(container.querySelectorAll('a').length).toBeGreaterThan(0);
  });
});
