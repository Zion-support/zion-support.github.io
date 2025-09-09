import React from 'react';
import { SEO } from '@/components/SEO';
import ComprehensiveServicesOverview from '@/components/ComprehensiveServicesOverview';

export default function AllServices() {
  return (
    <>
      <SEO 
        title="All Services - Complete Portfolio | Zion Tech Group" 
        description="Explore our complete portfolio of micro SAAS services, AI solutions, and emerging technology platforms. From core business solutions to cutting-edge innovations." 
        canonical="/all-services" 
        url="https://ziontechgroup.com/all-services"
      />
      <ComprehensiveServicesOverview />
    </>
  );
}