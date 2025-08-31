import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { motion } from 'framer-motion';

interface BreadcrumbItem {
  label: string;
  path: string;
  isCurrent?: boolean;
}

interface BreadcrumbNavigationProps {
  items?: BreadcrumbItem[];
  className?: string;
  showHome?: boolean;
}

export const BreadcrumbNavigation: React.FC<BreadcrumbNavigationProps> = ({
  items = [],
  className = '',
  showHome = true
}) => {
  const location = useLocation();
  
  // Generate breadcrumbs from current location if no items provided
  const generateBreadcrumbs = (): BreadcrumbItem[] => {
    const pathSegments = location.pathname.split('/').filter(Boolean);
    const breadcrumbs: BreadcrumbItem[] = [];
    
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
        label,
        path: currentPath,
        isCurrent: isLast
      });
    });
    
    return breadcrumbs;
  };
  
  const breadcrumbItems = items.length > 0 ? items : generateBreadcrumbs();
  
  if (breadcrumbItems.length === 0) {
    return null;
  }
  
  return (
    <nav 
      className={`flex items-center space-x-2 text-sm text-gray-600 ${className}`}
      aria-label="Breadcrumb"
    >
      {showHome && (
        <>
          <Link 
            to="/" 
            className="flex items-center hover:text-cyan-600 transition-colors duration-200"
            aria-label="Go to home page"
          >
            <Home className="w-4 h-4" />
          </Link>
          <ChevronRight className="w-4 h-4 text-gray-400" />
        </>
      )}
      
      {breadcrumbItems.map((item, index) => (
        <React.Fragment key={item.path}>
          {item.isCurrent ? (
            <motion.span
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-cyan-600 font-medium"
              aria-current="page"
            >
              {item.label}
            </motion.span>
          ) : (
            <Link
              to={item.path}
              className="hover:text-cyan-600 transition-colors duration-200"
            >
              {item.label}
            </Link>
          )}
          
          {index < breadcrumbItems.length - 1 && (
            <ChevronRight className="w-4 h-4 text-gray-400" />
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};

// Enhanced Breadcrumb with Structured Data
export const EnhancedBreadcrumbNavigation: React.FC<BreadcrumbNavigationProps> = (props) => {
  const breadcrumbItems = props.items || [];
  
  // Generate structured data for breadcrumbs
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbItems.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.label,
      "item": `https://ziontechgroup.com${item.path}`
    }))
  };
  
  return (
    <>
      <BreadcrumbNavigation {...props} />
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </>
  );
};