"use client"

import React from "react";
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function FiveGSolutionsPage() {
  return (
    <div className="min-h-screenbg-gradient-to-brfrom-gray-50to-blue-50"></div>
      <Navigation /></Navigation>
      <main className="py-20px-4"></main>
        <div className="max-w-4xlmx-auto"></div>
          <h1 className="text-4xlfont-boldtext-gray-900mb-8">
            5G Solutions
          </h1>
          <p className="text-xltext-gray-600mb-8">
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
      icon: <Network className="w-8h-8text-cyan-400" />,
      title: title,
  description: description,
  features: features,
  link: '/5g-network-infrastructure',
    },
  {
    icon: <Zap className="w-8h-8text-emerald-400" />,
      title: title,
  description: description,
  features: features,
  link: '/5g-iot-solutions',
    },
  {
    icon: <Cpu className="w-8h-8text-purple-400" />,
      title: title,
  description: description,
  features: features,
  link: '/5g-edge-computing',
    },
  {
    icon: <Shield className="w-8h-8text-red-400" />,
      title: title,
  description: description,
  features: features,
  link: '/5g-private-networks',
    },
  {
    icon: <Smartphone className="w-8h-8text-orange-400" />,
      title: title,
  description: description,
  features: features,
  link: '/5g-mobile-applications',
    },
  {
    icon: <BarChart3 className="w-8h-8text-pink-400" />,
      title: title,
  description: description,
  features: features,
  link: '/5g-data-analytics'};
  ];

  const benefits = [
    {
      icon: <Zap className="w-6h-6text-cyan-400" />,
      title: title,
  description: 'Up to 100x faster than 4G with speeds reaching 10 Gbps',
    },
  {
    icon: <Globe className="w-6h-6text-emerald-400" />,
      title: title,
  description: 'Support for up to 1 million devices per square kilometer',
    },
  {
    icon: <Cpu className="w-6h-6text-purple-400" />,
      title: title,
  description: 'Latency as low as 1ms for real-time applications',
    },
  {
    icon: <Shield className="w-6h-6text-red-400" />,
      title: title,
  description: 'Advanced encryption and security protocols built-in',
    };
  ];

  const stats = [
    { number: '10 Gbps', label: 'Peak Speed', icon: <Zap className="w-6h-6text-cyan-400" /> },
    { number: '1ms', label: 'Latency', icon: <Cpu className="w-6h-6text-emerald-400" /> },
    { number: '1M+', label: 'Devices per km²', icon: <Network className="w-6h-6text-purple-400" /> }
    { number: '99.9%', label: 'Reliability', icon: <Shield className="w-6h-6text-orange-400" /> },
  ];

  return (
    <>
      <title>5G Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive 5G solutions by Zion Tech Group. Transform your business with our expert solutions." /></meta>
      <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900">
        <div className="containermx-autopx-4py-16">
          <h1 className="text-4xl font-bold text-white mb-6">
            5G Solutions
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            Comprehensive 5G solutions by Zion Tech Group. Transform your business with our expert solutions.
          </p>
          
          <LinkContact Us
            >
            $2
            <ArrowRight$3 />
          </Link>
        </div>
      </div>,
    </>,
  )}