'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

const HOME_LABEL = 'Home';

function pathToSegments(pathname: string): BreadcrumbItem[] {
  const segments: BreadcrumbItem[] = [];

  // Home
  if (pathname !== '/') {
    segments.push({ label: HOME_LABEL, href: '/' });
  }

  const raw = pathname === '/' ? [] : pathname.split('/').filter(Boolean);

  for (let i = 0; i < raw.length; i++) {
    const segment = raw[i];
    const href = '/' + raw.slice(0, i + 1).join('/');
    const label = decodeURIComponent(segment)
      .replace(/-/g, ' ')
      .replace(/\b\w/g, (c) => c.toUpperCase());

    // Last segment is the current page (no link)
    const isLast = i === raw.length - 1;
    segments.push({
      label,
      href: isLast ? undefined : href,
    });
  }

  return segments;
}

const TRUNCATE_LENGTH = 28;

function truncateLabel(label: string): string {
  if (label.length <= TRUNCATE_LENGTH) return label;
  return label.slice(0, TRUNCATE_LENGTH) + '…';
}

export default function Breadcrumb({ className }: { className?: string }) {
  const pathname = usePathname();
  const items = pathToSegments(pathname);

  if (pathname === '/' || items.length === 0) {
    return (
      <nav aria-label="Breadcrumb" className={className}>
        <span className="text-sm text-slate-500">Home</span>
      </nav>
    );
  }

  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol className="flex items-center flex-wrap gap-x-1 gap-y-0.5 text-sm text-slate-500">
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          const content = (
            <>
              {isLast ? (
                <span className="text-slate-200 font-medium" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href!}
                  className="text-blue-400 hover:text-blue-300 transition-colors truncated"
                  aria-current={undefined}
                >
                  {item.label}
                </Link>
              )}
            </>
          );

          return (
            <li key={i} className="inline-flex items-center">
              <span className="inline-flex items-center">
                {i > 0 && (
                  <svg
                    className="w-4 h-4 text-slate-600 mx-1 shrink-0"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                )}
                {content}
              </span>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export function BreadcrumbLink({ href, label, current }: { href: string; label: string; current?: boolean }) {
  if (current) {
    return (
      <span className="text-slate-200 font-medium" aria-current="page">
        {label}
      </span>
    );
  }
  return (
    <Link href={href} className="text-blue-400 hover:text-blue-300 transition-colors">
      {label}
    </Link>
  );
}

export function useBreadcrumb() {
  const pathname = usePathname();
  return pathToSegments(pathname);
}
