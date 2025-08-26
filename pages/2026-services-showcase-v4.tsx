import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import UltraFuturisticBackground2026 from '../components/ui/UltraFuturisticBackground2026';
import UltraAdvancedNavigation2026 from '../components/layout/UltraAdvancedNavigation2026';
import Enhanced2026ServicesShowcaseV4 from '../components/sections/Enhanced2026ServicesShowcaseV4';
import { innovative2026MicroSaasServicesV4 } from '../data/innovative-2026-micro-saas-v4';
import { emergingTech2026ServicesV2 as emergingTech2026ServicesV4 } from '../data/emerging-tech-2026-services-v2';
import { innovative2026AIServicesV4 } from '../data/innovative-2026-ai-services-v4';

export default function ServicesShowcase2026V4() {
  const allServices = [
    ...innovative2026MicroSaasServicesV4,
    ...emergingTech2026ServicesV4,
    ...innovative2026AIServicesV4
  ];

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  return (
    <UltraFuturisticBackground2026>
      <div className="min-h-screen">
        <Head>
          <title>2026 Revolutionary Services V4 - Zion Tech Group | Cutting-Edge AI & Quantum Solutions</title>
          <meta name="description" content="Experience the future with our revolutionary 2026 services including AI consciousness interface, quantum AI hybrid computing, neuromorphic computing, and more. Contact: +1 302 464 0950" />
          <meta name="keywords" content="2026 services, AI consciousness, quantum AI, neuromorphic computing, synthetic biology, holographic displays, autonomous drones, zero-trust security, data governance" />
          <meta name="author" content="Zion Tech Group" />
          <meta name="robots" content="index, follow" />
          <meta property="og:title" content="2026 Revolutionary Services V4 - Zion Tech Group" />
          <meta property="og:description" content="Cutting-edge AI, quantum computing, and emerging technology services for 2026" />
          <meta property="og:url" content="https://ziontechgroup.com/2026-services-showcase-v4" />
          <meta property="og:type" content="website" />
          <link rel="canonical" href="https://ziontechgroup.com/2026-services-showcase-v4" />
        </Head>

        <UltraAdvancedNavigation2026 />

        <Enhanced2026ServicesShowcaseV4 services={allServices} contact={contactInfo} />
      </div>
    </UltraFuturisticBackground2026>
  );
}