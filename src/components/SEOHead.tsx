<<<<<<< HEAD
'use client';
:all-pages-backup/components/SEOHead.tsx
import React from 'react';

interface SEOHeadProps {
  className?: string;
}

const SEOHead: React.FC<SEOHeadProps> = ({ className = '' }) => {
  return (
    <div className={className}>
      <h2>SEOHead</h2>
      <p>This component is under construction.</p>
    </div>
=======
import React from "react";

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title = "Default Title",
  description = "Default Description",
  keywords = "default, keywords"
}) => {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content="{description}" />
      <meta name="keywords" content="{keywords}" />
    </>
>>>>>>> origin/main
  );
};

export default SEOHead;
