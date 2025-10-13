<<<<<<< HEAD
import { Helmet } from 'react-helmet-async';
<<<<<<< HEAD
=======
import { Search } from 'lucide-react';
import { Code } from 'lucide-react';

>>>>>>> 2fda46b8c81d66ef34322b3dc826b41bdfbc86e8
interface StructuredDataProps {
  type: 'Organization' | 'WebSite' | 'WebPage' | 'Service' | 'FAQPage' | 'BreadcrumbList' | 'SoftwareApplication';
  data: any;
=======
import React from 'react';

interface StructureddataProps {
  className?: string;
  children?: React.ReactNode;
>>>>>>> 1768cb0a99d39a994ad89c8211ed1a93ecd366f9
}

export default function Structureddata({ className = '', children, ...props }: StructureddataProps) {
  return (
    <div className={`structureddata-component ${className}`} {...props}>
      {children}
    </div>
  );
}
