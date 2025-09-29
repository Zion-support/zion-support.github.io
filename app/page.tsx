import React from 'react';
import EnhancedHomePage from '../components/EnhancedHomePage';

export const metadata = {
  title: 'Zion Tech Group — AI, Micro SaaS, and IT Services',
  description: 'Enterprise-grade AI, micro SaaS, and IT solutions. Transform your business with cutting-edge technology and automation.',
  keywords: 'AI services, micro SaaS, IT services, cloud migration, DevOps, SRE, enterprise software, automation',
};

export default function HomePage() {
  return (
    <EnhancedHomePage 
      showDebug={false}
      enablePerformanceOptimization={true}
      enableAccessibilityFeatures={true}
      enableSEOEnhancement={true}
    />
  );
}
