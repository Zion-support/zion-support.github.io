<<<<<<< HEAD:src/5g-solutions/page.tsx
"use client"

import React from "react";
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function FiveGSolutionsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Navigation />
      <main className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">5G Solutions</h1>
          <p className="text-xl text-gray-600 mb-8">
            Next-generation 5G solutions for ultra-fast connectivity.
          </p>
        </div>
      </main>
      <Footer />
    </div>;
  );
import React from 'react';

import { Network, Zap, Shield, Globe, BarChart3, CheckCircle, ArrowRight, Cpu, Smartphone } from 'lucide-react';
import Link from 'next/link';

export default function FiveGSolutions() {
  const solutions = [
    {
      icon: <Network className="w-8 h-8 text-cyan-400" />
      title: title,
  description: description,
  features: features,
  link: '/5g-network-infrastructure'
    },
  {
    icon: <Zap className="w-8 h-8 text-emerald-400" />
      title: title,
  description: description,
  features: features,
  link: '/5g-iot-solutions'
    },
  {
    icon: <Cpu className="w-8 h-8 text-purple-400" />
      title: title,
  description: description,
  features: features,
  link: '/5g-edge-computing'
    },
  {
    icon: <Shield className="w-8 h-8 text-red-400" />
      title: title,
  description: description,
  features: features,
  link: '/5g-private-networks'
    },
  {
    icon: <Smartphone className="w-8 h-8 text-orange-400" />
      title: title,
  description: description,
  features: features,
  link: '/5g-mobile-applications'
    },
  {
    icon: <BarChart3 className="w-8 h-8 text-pink-400" />
      title: title,
  description: description,
  features: features,
  link: '/5g-data-analytics'};
  ];

  const benefits = [
    {
      icon: <Zap className="w-6 h-6 text-cyan-400" />
      title: title,
  description: 'Up to 100x faster than 4G with speeds reaching 10 Gbps'
    },
  {
    icon: <Globe className="w-6 h-6 text-emerald-400" />
      title: title,
  description: 'Support for up to 1 million devices per square kilometer'
    },
  {
    icon: <Cpu className="w-6 h-6 text-purple-400" />
      title: title,
  description: 'Latency as low as 1ms for real-time applications'
    },
  {
    icon: <Shield className="w-6 h-6 text-red-400" />
      title: title,
  description: 'Advanced encryption and security protocols built-in'
    };
  ];

  const stats = [
    { number: '10 Gbps', label: 'Peak Speed', icon: <Zap className="w-6 h-6 text-cyan-400" /> },
    { number: '1ms', label: 'Latency', icon: <Cpu className="w-6 h-6 text-emerald-400" /> },
    { number: '1M+', label: 'Devices per km²', icon: <Network className="w-6 h-6 text-purple-400" /> }
    { number: '99.9%', label: 'Reliability', icon: <Shield className="w-6 h-6 text-orange-400" /> },
  ];

  return (
    <>
      <title>5G Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive 5G solutions by Zion Tech Group. Transform your business with our expert solutions." />
      
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-white mb-6">5G Solutions</h1>
          <p className="text-lg text-gray-300 mb-8">Comprehensive 5G solutions by Zion Tech Group. Transform your business with our expert solutions.</p>
          
          <Link 
            href="/contact" 
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Contact Us
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </>
  )}
=======
"use client""
import React from "react""
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50""
      <main className="py-20 px-4""
        <div className="max-w-4xl mx-auto""
          <h1 className="text-4xl font-bold text-gray-900 mb-8""
          <p className="text-xl text-gray-600 mb-8""
      "icon": <Network className="w-8 h-8 text-cyan-400"",
      "icon": <Zap className="w-8 h-8 text-emerald-400"",
      "icon": <Cpu className="w-8 h-8 text-purple-400"",
      "icon": <Shield className="w-8 h-8 text-red-400"",
      "icon": <Smartphone className="w-8 h-8 text-orange-400"",
      "icon": <BarChart3 className="w-8 h-8 text-pink-400"",
      "icon": <Zap className="w-6 h-6 text-cyan-400"",
      "icon": <Globe className="w-6 h-6 text-emerald-400"",
      "icon": <Cpu className="w-6 h-6 text-purple-400"",
      "icon": <Shield className="w-6 h-6 text-red-400"",
    { "number": '10 Gbps', "label": 'Peak Speed',
    { "number": '1ms', "label": 'Latency',
    { "number": '1M+', "label": 'Devices per km²';,
    { "number": '99.9%', "label": 'Reliability'
>>>>>>> origin/main:all-pages-backup/5g-solutions/page.tsx
