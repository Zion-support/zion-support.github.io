import { Search } from 'lucide-react';
import { Code } from 'lucide-react';

interface StructuredDataProps {
  type: 'Organization' | 'WebSite' | 'WebPage' | 'Service' | 'FAQPage' | 'BreadcrumbList' | 'SoftwareApplication';
  data: any;
=======
import React from 'react';

interface StructureddataProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Structureddata({ className = '', children, ...props }: StructureddataProps) {
  return (
    <div className={`structureddata-component ${className}`} {...props}>
      {children}
    </div>
  );
}
