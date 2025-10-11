'use client'
import React from 'react'
import Link from 'next/link'
import { ChevronRight, Home } from 'lucide-react'

interface BreadcrumbProps {
  items?: Array<{
    label: string;
    href?: string;
  }>;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items = [] }) => {
  return (
    <nav className="flex items-center space-x-2 text-sm text-gray-400 mb-6">
      <Link href="/" className="hover:text-white transition-colors">
        <Home className="w-4 h-4" />
      </Link>
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <ChevronRight className="w-4 h-4" />
          {item.href ? (
            <Link href={item.href} className="hover:text-white transition-colors">
              {item.label}
            </Link>
          ) : (
            <span className="text-white">{item.label}</span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};

export default Breadcrumb;