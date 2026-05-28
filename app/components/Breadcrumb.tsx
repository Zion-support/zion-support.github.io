'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Breadcrumb() {
  const pathname = usePathname();

  // Parse pathname into breadcrumb segments
  const segments = pathname.split('/').filter(Boolean);

  if (segments.length === 0) return null;

  return (
    <nav aria-label="Breadcrumb" style={{ padding: '0.75rem 0', color: '#94a3b8', fontSize: '0.875rem' }}>
      <Link href="/" style={{ color: '#64748b', textDecoration: 'none' }}>Home</Link>
      {segments.map((segment, index) => {
        const isLast = index === segments.length - 1;
        const segmentPath = '/' + segments.slice(0, index + 1).join('/');
        const label = segment.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());

        return (
          <span key={segment} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}>
            <span style={{ margin: '0 0.5rem', color: '#475569' }}>›</span>
            {isLast ? (
              <span style={{ color: '#e2e8f0' }}>{label}</span>
            ) : (
              <Link href={segmentPath} style={{ color: '#64748b', textDecoration: 'none' }}>
                {label}
              </Link>
            )}
          </span>
        );
      })}
    </nav>
  );
}