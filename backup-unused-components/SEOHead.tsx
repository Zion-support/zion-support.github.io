import React from 'react';
<<<<<<< HEAD
=======
import { Helmet } from 'react-helmet-async';
interface SEOHeadProps;
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-5a44

interface SEOHeadProps {
  className?: string;
  children?: React.ReactNode;
}

export default function SEOHead({ className = '', children }: SEOHeadProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
}