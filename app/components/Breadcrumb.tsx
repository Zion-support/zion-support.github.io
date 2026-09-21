'use client';

import SiteBreadcrumbs from './SiteBreadcrumbs';

export default function Breadcrumb({
  items,
  className,
}: {
  items: Array<{ label: string; href?: string }>;
  className?: string;
}) {
  return <SiteBreadcrumbs items={items} className={className} />;
}
