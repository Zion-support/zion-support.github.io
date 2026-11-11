/** @jest-environment node */
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import PageShell from './PageShell';

describe('PageShell restoration', () => {
  it('renders the page content and default navigation without a nested main landmark', () => {
    const html = renderToStaticMarkup(
      <PageShell title="Field services" description="On-site support">
        <p>Service details</p>
      </PageShell>
    );
    expect(html).toContain('Field services');
    expect(html).toContain('On-site support');
    expect(html).toContain('Service details');
    expect(html).toContain('href="/contact/"');
    expect(html).toContain('href="/services/"');
    expect(html).not.toContain('<main');
  });

  it('honors optional content, alignment, custom classes and CTA suppression', () => {
    const html = renderToStaticMarkup(
      <PageShell title="Support" eyebrow="Services" eyebrowIcon="+" align="center"
        className="custom-shell" contentClassName="custom-content"
        actions={<a href="/help/">Help</a>} showCta={false} />
    );
    expect(html).toContain('page-hero--center');
    expect(html).toContain('custom-shell');
    expect(html).toContain('custom-content');
    expect(html).toContain('Services');
    expect(html).toContain('href="/help/"');
    expect(html).not.toContain('Get a custom proposal');
    expect(html).not.toContain('application/ld+json');
  });

  it.each([
    { '@type': 'Service', name: 'Field services' },
    [{ '@type': 'Service', name: 'Field services' }, { '@type': 'Organization', name: 'Zion' }],
  ].map((data) => [data]))('preserves object and array JSON-LD payloads', (data) => {
    const html = renderToStaticMarkup(<PageShell title="Support" jsonLd={data} />);
    const script = html.match(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/);
    expect(script).not.toBeNull();
    expect(JSON.parse(script[1])).toEqual(data);
  });

  it('renders caller-provided CTA copy', () => {
    const html = renderToStaticMarkup(
      <PageShell title="Support" ctaTitle="Send your scope" ctaDescription="Continue by email." />
    );
    expect(html).toContain('Send your scope');
    expect(html).toContain('Continue by email.');
    expect(html).not.toContain('Ready to get started?');
  });
});
