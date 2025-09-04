import Link from 'next/link';
import { useRouter } from 'next/router';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

export default function Breadcrumb() {
  const router = useRouter();
  const pathSegments = router.asPath.split('/').filter(segment => segment !== '');
  const breadcrumbs: BreadcrumbItem[] = [
    { label: 'Home', href: '/'  }
  ];

  // Build breadcrumbs from path segments
  let currentPath = '';
  pathSegments.forEach((segment, index) => {
    currentPath += `/${segment}`;
    const isLast = index === pathSegments.length - 1;
    
    // Convert segment to readable label
    const label = segment
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
    
    breadcrumbs.push({
      label, href: isLast ? undefined : currentPath
    });
  });

  // Don't show breadcrumbs on home page
  if (breadcrumbs.length <= 1) { return null; }

  return (
    <nav className="bg-slate-900/50 border-b border-white/10" aria-label="Breadcrumb">
      <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">
        <ol className="flex items-center space-x-2 py-3 text-sm">
          {breadcrumbs.map((item, index) => (
            <li key={index} className="flex items-center">
              {index > 0 && (
                <svg
                  className="h-4 w-4 text-slate-400 mx-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              )}
              {item.href ? (
                <Link
                  href={item.href}
                  className="text-slate-300 hover: text-white transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-white font-medium" aria-current="page">
                  {item.label}
                </span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}