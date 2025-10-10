'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer'
import { CheckCircle, Zap, Cpu, Globe, Shield, ArrowRight, Cloud, Database, Wifi, Server } from 'lucide-react'
const EdgeComputingPage: React.FC = () => {
    const features = [
    {
      icon: Cpu,
      title: 'Edge Processing',
      description: 'Process data locally at the edge for ultra-low latency and real-time responsiveness.',
      benefits: ['Sub-millisecond latency', 'Real-time processing', 'Local data processing', 'Reduced bandwidth usage']
  },
    {
    icon: Globe,
      title: 'Global Distribution',
      description: 'Deploy edge nodes worldwide for optimal performance and coverage.',
      benefits: ['Global edge network', 'Geographic distribution', 'CDN integration', 'Multi-region support']
  },
    {
    icon: Shield,
      title: 'Edge Security',
      description: 'Advanced security measures designed specifically for edge computing environments.',
      benefits: ['Zero-trust architecture', 'Encrypted communications', 'Secure boot', 'Threat detection']
  },
    {
    icon: Database,
      title: 'Edge Storage',
      description: 'Distributed storage solutions optimized for edge computing workloads.',
      benefits: ['Local data storage', 'Distributed databases', 'Data synchronization', 'Backup strategies']
  },
    {
    icon: Wifi,
      title: 'IoT Integration',
      description: 'Seamless integration with IoT devices and sensors for comprehensive edge solutions.',
      benefits: ['Device management', 'Protocol support', 'Data collection', 'Real-time monitoring']
  },
    {
    icon: Server,
      title: 'Edge Infrastructure',
      description: 'Robust infrastructure designed for edge computing requirements and scalability.',
      benefits: ['High availability', 'Auto-scaling', 'Load balancing', 'Fault tolerance']
  }
    ]

    'Improved Reliability',

    'Enhanced Security',

    'Real-time Processing',

        <meta name="description" content="AI-powered solution" />
            Bring computing power closer to your data and users with our advanced edge computing solutions.;
                  <feature />
      <Footer />
  ),
};

export default EdgeComputingPage;
