import React from 'react';
import { Search } from 'lucide-react';
import { Code } from 'lucide-react';

interface StructuredDataProps {
  type: 'Organization' | 'WebSite' | 'WebPage' | 'Service' | 'FAQPage' | 'BreadcrumbList' | 'SoftwareApplication';
  data: any;
  className?: string;
  children?: React.ReactNode;
}

export default function StructuredData({ className = '', children, ...props }: StructuredDataProps) {
  return (
    <div className={`structureddata-component ${className}`} {...props}>
      {children}
    </div>
  );
}