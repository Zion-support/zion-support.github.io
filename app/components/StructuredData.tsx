import { Search } from 'lucide-react';
import { Code } from 'lucide-react';
<<<<<<< HEAD

=======
import React from 'react';
>>>>>>> cursor/fix-errors-and-merge-to-main-fbfa
interface StructuredDataProps {
  type: 'Organization' | 'WebSite' | 'WebPage' | 'Service' | 'FAQPage' | 'BreadcrumbList' | 'SoftwareApplication';
  data: any;
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