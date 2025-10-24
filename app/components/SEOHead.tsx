'use client';

import React from 'react';
<<<<<<< HEAD
import { Helmet } from 'react-helmet-async';
interface SEOHeadProps {title?: string;}
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  structuredData?: object;}}
const SEOHead: React.FC<SEOHeadProps> = ({,
    title = 'Zion Tech Group - Advanced AI & IT Solutions',
  description = 'Transform your business with cutting-edge artificial intelligence, cloud infrastructure, and innovative technology solutions. Expert AI and IT consulting services.',
  keywords = 'AI solutions, IT consulting, cloud infrastructure, cybersecurity, automation, machine learning, artificial intelligence, business transformation',
  canonical,
=======

>>>>>>> 95f63d1bffe2d416304750c17f0532b44f8a7886

interface SEOHeadProps {
  // Add props here
}

const SEOHead: React.FC<SEOHeadProps> = (_props) => {
  return (
    <div>
      {/* Component content */}
    </div>
  );
};

export default SEOHead;
