import React, { act } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import PageShell from '../app/components/PageShell';

(globalThis as { IS_REACT_ACT_ENVIRONMENT?: boolean }).IS_REACT_ACT_ENVIRONMENT = true;

describe('PageShell', () => {
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

  it('renders a consistent title, description, breadcrumb, and CTA', () => {
    act(() => {
      root.render(
        <PageShell
          title="Pricing"
          description="Transparent engagement models"
          eyebrow="Transparent Pricing"
          align="center"
          breadcrumbs={[
            { label: 'Home', href: '/' },
            { label: 'Pricing' },
          ]}
        >
          <p>Pricing models</p>
        </PageShell>
      );
    });

    expect(container.querySelector('h1')?.textContent).toBe('Pricing');
    expect(container.textContent).toContain('Transparent engagement models');
    expect(container.textContent).toContain('Transparent Pricing');
    expect(container.querySelector('[aria-label="Breadcrumb"]')).toBeTruthy();
    expect(container.textContent).toContain('Get a custom proposal');
    expect(container.textContent).toContain('Browse services');
    expect(container.textContent).toContain('Pricing models');
  });

  it('adds blog breadcrumbs from the canonical URL', () => {
    act(() => {
      root.render(
        <PageShell
          title="Autonomous Code Deployment"
          description="Practical guide"
          canonical="https://ziontechgroup.com/blog/autonomous-code-deployment-2026-6936/"
        />
      );
    });

    expect(container.textContent).toContain('Blog');
    expect(container.textContent).toContain('Autonomous Code Deployment');
  });
});
