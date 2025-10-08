
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SEOOptimizer: React.FC = () => {
  const location = useLocation();
//   const pathname = location.pathname;

  useEffect(() => {
    // Update page title based on route
    const titles: Record<string, string> = {
      '/': 'Zion Tech Group - Advanced AI and IT Solutions',
      '/services': 'Services - Zion Tech Group',
      '/about': 'About Us - Zion Tech Group',
      '/contact': 'Contact - Zion Tech Group',
    };

    document.title = titles[pathname || '/'] || 'Zion Tech Group';
  }, [pathname]);

  return null;

};

export default SEOOptimizer;