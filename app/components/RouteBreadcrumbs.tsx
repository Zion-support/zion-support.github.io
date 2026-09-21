'use client';

import { usePathname } from 'next/navigation';
import SiteBreadcrumbs from './SiteBreadcrumbs';
import { buildBreadcrumbItems } from '../lib/breadcrumbs';

export default function RouteBreadcrumbs() {
  const pathname = usePathname() || '/';
  const items = buildBreadcrumbItems(pathname);
  if (items.length === 0) return null;

  return (
    <div className="route-breadcrumbs container-page pt-8">
      <SiteBreadcrumbs items={items} />
    </div>
  );
}
