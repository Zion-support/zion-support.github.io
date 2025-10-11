'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Brain, BarChart, CheckCircle, ArrowRight, Zap, Shield, Target, Globe, Server, Cloud } from 'lucide-react';
const AiContentDeliveryNetworkPage: React.FC = () => {
  const features = [
    {
      icon: Globe,
      title: 'Global CDN',
      description: 'Worldwide content delivery network with edge locations for optimal performance.',
      benefits: ['Global coverage', 'Low latency', 'High availability', 'Edge caching']
    },
    {
      icon: Brain,
      title: 'AI-Powered Optimization',
      description: 'Intelligent content optimization and delivery based on user behavior and preferences.',
      benefits: ['Smart caching', 'Predictive delivery', 'Content optimization', 'Performance analytics']
    },
    {
      icon: Server,
      title: 'High Performance',
      description: 'Lightning-fast content delivery with advanced caching and compression.',
      benefits: ['Fast loading', 'Compression', 'Caching strategies', 'Bandwidth optimization']
    },
    {
      icon: Cloud,
      title: 'Scalable Infrastructure',
      description: 'Auto-scaling infrastructure that handles traffic spikes and growing demands.',
      benefits: ['Auto-scaling', 'Load balancing', 'Traffic management', 'Resource optimization']
    }
  ];
      <Footer />
    </>
  );
};
export default AiContentDeliveryNetworkPage;
