'use client';

import Link from 'next/link';
import type { ReactNode } from 'react';
import JsonLd from './JsonLd';
import SiteBreadcrumbs from './SiteBreadcrumbs';

export type PageShellBreadcrumb = { label: string; href?: string };

export type PageShellProps = {
  title: string;
  description?: string;
  eyebrow?: string;
  eyebrowIcon?: string;
  canonical?: string;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
  breadcrumbs?: PageShellBreadcrumb[];
  actions?: ReactNode;
  align?: 'center' | 'left';
  showCta?: boolean;
  ctaTitle?: string;
  ctaDescription?: string;
  children?: ReactNode;
  className?: string;
  contentClassName?: string;
};

function defaultBreadcrumbs(title: string, canonical?: string): PageShellBreadcrumb[] {
  const items: PageShellBreadcrumb[] = [{ label: 'Home', href: '/' }];
  if (canonical?.includes('/blog/')) {
    items.push({ label: 'Blog', href: '/blog' });
  } else if (canonical?.includes('/services/')) {
    items.push({ label: 'Services', href: '/services' });
  } else if (canonical?.includes('/industries/')) {
    items.push({ label: 'Industries', href: '/industries' });
  } else if (canonical?.includes('/tools/')) {
    items.push({ label: 'Tools', href: '/tools' });
  } else if (canonical?.includes('/ai/')) {
    items.push({ label: 'AI Lab', href: '/ai' });
  }
  items.push({ label: title });
  return items;
}

export default function PageShell({
  title,
  description,
  eyebrow,
  eyebrowIcon = '✦',
  canonical,
  jsonLd,
  breadcrumbs,
  actions,
  align = 'left',
  showCta = true,
  ctaTitle = 'Ready to get started?',
  ctaDescription = 'Share your scope and constraints. We will return a tailored proposal with pricing, timeline, and expected ROI.',
  children,
  className = '',
  contentClassName = '',
}: PageShellProps) {
  const crumbs = breadcrumbs?.length ? breadcrumbs : defaultBreadcrumbs(title, canonical);
  const isCentered = align === 'center';

  return (
    <div className={`page-shell ${className}`.trim()}>
      {jsonLd ? <JsonLd data={jsonLd} /> : null}
      <div className={`container-page ${contentClassName}`.trim()}>
        <SiteBreadcrumbs items={crumbs} className="mb-8" />

        <header className={`page-hero ${isCentered ? 'page-hero--center' : ''}`}>
          {eyebrow ? (
            <div className="page-eyebrow">
              <span aria-hidden="true">{eyebrowIcon}</span>
              <span>{eyebrow}</span>
            </div>
          ) : null}
          <h1 className="page-title">
            {isCentered ? (
              <>
                <span className="gradient-text">{title}</span>
              </>
            ) : (
              title
            )}
          </h1>
          {description ? <p className="page-lede">{description}</p> : null}
          {actions ? <div className="page-actions">{actions}</div> : null}
        </header>

        {children ? <div className="page-body">{children}</div> : null}

        {showCta ? (
          <section className="page-cta" aria-label="Get started">
            <h2>{ctaTitle}</h2>
            <p>{ctaDescription}</p>
            <div className="page-actions">
              <Link href="/contact/" className="btn-primary">
                Get a custom proposal
              </Link>
              <Link href="/services/" className="btn-secondary">
                Browse services
              </Link>
            </div>
          </section>
        ) : null}
      </div>
    </div>
  );
}
