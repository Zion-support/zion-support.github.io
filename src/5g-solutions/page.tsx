"use client"

import React from "react";
import Navigation from '../components/Navigation';
import Footer from '../../../../components/Footer';

export default function FiveGSolutionsPage() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Navigation />
      <main className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-6">5G Solutions</h1>
          <p className="text-lg text-gray-300 mb-8">
            Next-generation 5G solutions for ultra-fast connectivity.
          
        
      </p>
      <Footer />
</>
  );
import React from 'react';

import { Network, Zap, Shield, Globe, BarChart3, CheckCircle, ArrowRight, Cpu, Smartphone } from 'lucide-react';
import Link from 'next/link';

export default function FiveGSolutions() {
  const solutions = [
    {
      icon: <Network className="w-8 h-8 text-cyan-400" />
      titl
  e: title
  description: description
  features: features
  link: '/5g-network-infrastructure'
    },</Network>
  {</Network>
    icon: <Zap className="w-8 h-8 text-emerald-400" />
      titl
  e: title
  description: description
  features: features
  link: '/5g-iot-solutions'
    },</Zap>
  {</Zap>
    icon: <Cpu className="w-8 h-8 text-purple-400" />
      titl
  e: title
  description: description
  features: features
  link: '/5g-edge-computing'
    },</Cpu>
  {</Cpu>
    icon: <Shield className="w-8 h-8 text-red-400" />
      titl
  e: title
  description: description
  features: features
  link: '/5g-private-networks'
    },</Shield>
  {</Shield>
    icon: <Smartphone className="w-8 h-8 text-orange-400" />
      titl
  e: title
  description: description
  features: features
  link: '/5g-mobile-applications'
    },</Smartphone>
  {</Smartphone>
    icon: <BarChart3 className="w-8 h-8 text-pink-400" />
      titl
  e: title
  description: description
  features: features,;
  link: '/5g-data-analytics'};
  ];

  const benefits = [</BarChart3>
    {</BarChart3>
      icon: <Zap className="w-6 h-6 text-cyan-400" />
      titl
  e: title
  description: 'Up to 100x faster than 4G with speeds reaching 10 Gbps'
    },</Zap>
  {</Zap>
    icon: <Globe className="w-6 h-6 text-emerald-400" />
      titl
  e: title
  description: 'Support for up to 1 million devices per square kilometer'
    },</Globe>
  {</Globe>
    icon: <Cpu className="w-6 h-6 text-purple-400" />
      titl
  e: title
  description: 'Latency as low as 1ms for real-time applications'
    },</Cpu>
  {</Cpu>
    icon: <Shield className="w-6 h-6 text-red-400" />
      titl
  e: title
  description: 'Advanced encryption and security protocols built-in';
    };
  ];
  const stats = [</Shield>
    { number: '10 Gbps', label: 'Peak Speed', icon: <Zap className="w-6 h-6 text-cyan-400" /> },</Zap>
    { number: '1ms', label: 'Latency', icon: <Cpu className="w-6 h-6 text-emerald-400" /> },</Cpu>
    { number: '1M+', label: 'Devices per km²', icon: <Network className="w-6 h-6 text-purple-400" /> }</Network>
    { number: '99.9%', label: 'Reliability', icon: <Shield className="w-6 h-6 text-orange-400" /> },;
  ];
  return (</Shield>
    <>
      <title>5G Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive 5G solutions by Zion Tech Group. Transform your business with our expert solutions." />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <h1 className="text-4xl font-bold text-white mb-6">5G Solutions</h1>
          <p className="text-lg text-gray-300 mb-8">Comprehensive 5G solutions by Zion Tech Group. Transform your business with our expert solutions.</p>
          
          <Link ;
            href="/contact" 
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          ></Link>
            Contact Us</Link>
  )}
}