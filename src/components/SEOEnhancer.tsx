<<<<<<< HEAD
'use client';
:all-pages-backup/components/SEOEnhancer.tsx
import Footer from './Footer';
import Navigation from './Navigation';
import React from 'react';

interface SEOEnhancerProps {
  className?: string;
}

const SEOEnhancer: React.FC<SEOEnhancerProps> = ({ className = '' }) => {
  return (
    <div className={className}>
      <h2>SEOEnhancer</h2>
      <p>This component is under construction.</p>
    </div>
=======
import React from "react";

interface SEOEnhancerProps {
  title?: string;
  description?: string;
  keywords?: string;
}

const SEOEnhancer: React.FC<SEOEnhancerProps> = ({
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

export default SEOEnhancer;
