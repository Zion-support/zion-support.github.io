const fs = require('fs');
const path = require('path');

// Fix all remaining corrupted files
const filesToFix = [
  {
    path: 'components/Sidebar.tsx',
    content: `import React, { useState } from 'react';
import { Menu, X, Home, Settings, User, LogOut } from 'lucide-react';
import Link from 'next/link';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const menuItems = [
    { icon: Home, label: 'Dashboard', href: '/' },
    { icon: User, label: 'Profile', href: '/profile' },
    { icon: Settings, label: 'Settings', href: '/settings' },
  ];

  return (
    <div className={\`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform \${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out\`}>
      <div className="flex items-center justify-between h-16 px-4 border-b">
        <h2 className="text-lg font-semibold">Menu</h2>
        <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded">
          <X className="h-5 w-5" />
        </button>
      </div>
      <nav className="mt-4">
        {menuItems.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-100"
            onClick={onClose}
          >
            <item.icon className="h-5 w-5 mr-3" />
            {item.label}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;`
  },
  {
    path: 'components/SimpleLayout.tsx',
    content: `import React from 'react';
import Header from './Header';
import Footer from './layout/Footer';

interface SimpleLayoutProps {
  children: React.ReactNode;}

const SimpleLayout: React.FC<SimpleLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default SimpleLayout;`
  },
  {
    path: 'components/SkeletonLoader.tsx',
    content: `import React from 'react';

interface SkeletonLoaderProps {
  className?: string;
  lines?: number;
}
const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({ 
  className = '', 
  lines = 3 
}) => {
  return (
    <div className={\`animate-pulse \${className}\`}>
      {Array.from({ length: lines }).map((_, index) => (
        <div
          key={index}
          className="h-4 bg-gray-200 rounded mb-2"
          style={{ width: \`\${Math.random() * 40 + 60}%\` }}
        />
      ))}
    </div>
  );
};

export default SkeletonLoader;`
  },
  {
    path: 'components/layout/EnhancedFooter.tsx',
    content: `import React from 'react';import { Building, Mail, Phone, MapPin } from 'lucide-react';
import Link from 'next/link';

const EnhancedFooter: React.FC = () => {
  return (    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <Building className="h-8 w-8 text-blue-400 mr-2" />
              <span className="text-xl font-bold">Zion Tech Group</span>
            </div>
            <p className="text-gray-300 mb-4">
              Leading provider of innovative technology solutions for modern businesses.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center text-gray-300">
                <Mail className="h-4 w-4 mr-2" />
                <span>contact@ziontechgroup.com</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link href="/ai-services" className="text-gray-300 hover:text-white">AI & ML</Link></li>
              <li><Link href="/cybersecurity" className="text-gray-300 hover:text-white">Cybersecurity</Link></li>
              <li><Link href="/blockchain" className="text-gray-300 hover:text-white">Blockchain</Link></li>
              <li><Link href="/micro-saas" className="text-gray-300 hover:text-white">Micro SaaS</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-300 hover:text-white">About</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-white">Contact</Link></li>
              <li><Link href="/pricing" className="text-gray-300 hover:text-white">Pricing</Link></li>
              <li><Link href="/terms" className="text-gray-300 hover:text-white">Terms</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2024 Zion Tech Group. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
export default EnhancedFooter;`
  },
  {
    path: 'components/layout/Footer.tsx',
    content: `import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p>&copy; 2024 Zion Tech Group. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;`
  },
  {
    path: 'components/layout/Header.tsx',
    content: `import React from 'react';
import Link from 'next/link';
const Header: React.FC = () => {
  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-bold">
            Zion Tech Group
          </Link>
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600">Home</Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600">About</Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600">Contact</Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;`
  },
  {
    path: 'components/layout/Layout.tsx',
    content: `import React from 'react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;`
  },
  {
    path: 'components/layout/MainLayout.tsx',
    content: `import React from 'react';
import Header from '../Header';
import Footer from './Footer';

interface MainLayoutProps {
  children: React.ReactNode;}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;`
  },
  {
    path: 'components/performance/LazyComponent.tsx',
    content: `import React, { Suspense, lazy } from 'react';
import SkeletonLoader from '../SkeletonLoader';

interface LazyComponentProps {
  component: () => Promise<{ default: React.ComponentType<any> }>;
  fallback?: React.ReactNode;
}

const LazyComponent: React.FC<LazyComponentProps> = ({ 
  component, 
  fallback = <SkeletonLoader /> 
}) => {
  const LazyLoadedComponent = lazy(component);

  return (
    <Suspense fallback={fallback}>
      <LazyLoadedComponent />
    </Suspense>
  );
};

export default LazyComponent;`
  },
  {
    path: 'components/performance/OptimizedImage.tsx',
    content: `import React from 'react';
import Image from 'next/image';

interface OptimizedImageProps {
  src: string;
  alt: string;  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  quality?: number;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width = 800,
  height = 600,
  className = '',
  priority = false,
  quality = 75,
}) => {
  return (
    <div className={\`relative overflow-hidden \${className}\`}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        quality={quality}
        className="object-cover w-full h-full"
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
      />
    </div>
  );
};

export default OptimizedImage;`
  },
  {
    path: 'components/ui/EnhancedMarketplaceCard.tsx',
    content: `import React from 'react';
import Image from 'next/image';import Link from 'next/link';
import { Star, Users, Calendar } from 'lucide-react';

interface EnhancedMarketplaceCardProps {
  title: string;
  description: string;
  image: string;
  price: string;
  rating: number;
  users: number;
  category: string;
  href: string;}

const EnhancedMarketplaceCard: React.FC<EnhancedMarketplaceCardProps> = ({
  title,
  description,
  image,
  price,
  rating,
  users,
  category,
  href,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-48">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
        <div className="absolute top-2 left-2 bg-blue-600 text-white px-2 py-1 rounded text-sm">
          {category}
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-3">{description}</p>
        
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="ml-1 text-sm">{rating}</span>
          </div>
          <div className="flex items-center text-gray-500">
            <Users className="h-4 w-4 mr-1" />
            <span className="text-sm">{users}</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-blue-600">{price}</span>
          <Link
            href={href}
            className="bg-blue-600 text-white px-4 py-2 rounded text-sm hover:bg-blue-700 transition-colors"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EnhancedMarketplaceCard;`
  },
  {
    path: 'components/ui/InteractiveNavigation.tsx',
    content: `import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, ChevronRight } from 'lucide-react';

interface NavigationItem {
  label: string;
  href?: string;  children?: NavigationItem[];
}

interface InteractiveNavigationProps {
  items: NavigationItem[];
  className?: string;}

const InteractiveNavigation: React.FC<InteractiveNavigationProps> = ({ 
  items, 
  className = '' 
}) => {
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());

  const toggleItem = (label: string) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(label)) {
      newExpanded.delete(label);
    } else {
      newExpanded.add(label);
    }
    setExpandedItems(newExpanded);
  };

  const renderItem = (item: NavigationItem, level = 0) => {
    const hasChildren = item.children && item.children.length > 0;
    const isExpanded = expandedItems.has(item.label);
    const paddingLeft = level * 16;

    return (
      <div key={item.label}>
        <div
          className={\`flex items-center py-2 px-3 hover:bg-gray-100 cursor-pointer\`}
          style={{ paddingLeft: \`\${paddingLeft}px\` }}
          onClick={() => hasChildren && toggleItem(item.label)}
        >
          {hasChildren && (
            <div className="mr-2">
              {isExpanded ? (
                <ChevronDown className="h-4 w-4" />
              ) : (
                <ChevronRight className="h-4 w-4" />
              )}
            </div>
          )}
          {item.href ? (
            <Link href={item.href} className="flex-1 text-gray-700 hover:text-blue-600">
              {item.label}
            </Link>
          ) : (
            <span className="flex-1 text-gray-700">{item.label}</span>
          )}
        </div>
        {hasChildren && isExpanded && (
          <div>
            {item.children!.map(child => renderItem(child, level + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <nav className={\`bg-white border rounded-lg \${className}\`}>
      {items.map(item => renderItem(item))}
    </nav>
  );
};

export default InteractiveNavigation;`
  },
  {
    path: 'components/ui/NotificationSystem.tsx',
    content: `import React, { useState, useEffect } from 'react';
import { X, CheckCircle, AlertCircle, Info, XCircle } from 'lucide-react';

interface Notification {
  id: string;
  type: 'success' | 'error' | 'warning' | 'info';
  title: string;
  message: string;  duration?: number;
}

interface NotificationSystemProps {
  notifications: Notification[];
  onRemove: (id: string) => void;}

const NotificationSystem: React.FC<NotificationSystemProps> = ({ 
  notifications, 
  onRemove 
}) => {
  const getIcon = (type: Notification['type']) => {
    switch (type) {
      case 'success':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'error':
        return <XCircle className="h-5 w-5 text-red-500" />;
      case 'warning':
        return <AlertCircle className="h-5 w-5 text-yellow-500" />;
      case 'info':
        return <Info className="h-5 w-5 text-blue-500" />;
    }
  };

  const getBgColor = (type: Notification['type']) => {
    switch (type) {
      case 'success':
        return 'bg-green-50 border-green-200';
      case 'error':
        return 'bg-red-50 border-red-200';
      case 'warning':
        return 'bg-yellow-50 border-yellow-200';
      case 'info':
        return 'bg-blue-50 border-blue-200';
    }
  };

  return (
    <div className="fixed top-4 right-4 z-50 space-y-2">
      {notifications.map(notification => (
        <div
          key={notification.id}
          className={\`max-w-sm w-full border rounded-lg p-4 shadow-lg \${getBgColor(notification.type)}\`}
        >
          <div className="flex items-start">
            <div className="flex-shrink-0">
              {getIcon(notification.type)}
            </div>
            <div className="ml-3 flex-1">
              <h3 className="text-sm font-medium text-gray-900">
                {notification.title}
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                {notification.message}
              </p>
            </div>
            <div className="ml-4 flex-shrink-0">
              <button
                onClick={() => onRemove(notification.id)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NotificationSystem;`
  }
];

// Write all files
filesToFix.forEach(file => {
  const fullPath = path.join('/workspace', file.path);
  fs.writeFileSync(fullPath, file.content);
  console.log(`Fixed ${file.path}`);
});

console.log('All remaining files fixed!');