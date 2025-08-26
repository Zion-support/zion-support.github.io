
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { EnhancedAbout } from '@/components/EnhancedAbout';

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Us - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group - a leading technology solutions provider specializing in AI, cloud services, cybersecurity, and digital transformation." />
        <meta name="keywords" content="about us, technology company, AI solutions, cloud services, digital transformation" />
        <link rel="canonical" href="https://ziontechgroup.com/about" />
      </Helmet>
      
      <EnhancedAbout />
    </>
  );
}
