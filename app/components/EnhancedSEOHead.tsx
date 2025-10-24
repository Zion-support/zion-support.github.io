'use client';
<<<<<<< HEAD

=======
>>>>>>> cursor/fix-errors-and-merge-to-main-d028
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface EnhancedSEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  className?: string;
}

const EnhancedSEOHead: React.FC<EnhancedSEOHeadProps> = ({ 
<<<<<<< HEAD
  title = 'Zion Tech Group',
  description = 'Advanced AI and IT solutions for modern businesses',
  keywords = 'AI, artificial intelligence, IT solutions, technology',
  className: _className = '' 
=======
  title = "Zion Tech Group - AI Solutions",
  description = "Leading provider of AI solutions and intelligent automation for modern businesses",
  keywords = "AI, artificial intelligence, automation, business solutions, technology",
  _className = '' 
>>>>>>> cursor/fix-errors-and-merge-to-main-d028
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
};

<<<<<<< HEAD
export default EnhancedSEOHead;
=======
export default EnhancedSEOHead;
>>>>>>> cursor/fix-errors-and-merge-to-main-d028
