
'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import { Wifi, Smartphone, Shield, Zap, CheckCircle, ArrowRight } from 'lucide-react';

const solutions = [
  {
    title: '5G Network Infrastructure',
    description: 'Deploy high-speed 5G networks with ultra-low latency and massive connectivity.',
    icon: <Wifi className="w-8 h-8" />,
  },
  {
    title: 'Edge Computing',
    description: 'Process data at the edge for real-time applications and reduced latency.',
    icon: <Zap className="w-8 h-8" />,
  },
  {
    title: 'IoT Connectivity',
    description: 'Connect millions of devices with reliable 5G IoT solutions.',
    icon: <Smartphone className="w-8 h-8" />,
  },
  {
    title: 'Security Solutions',
    description: 'Comprehensive security for 5G networks and connected devices.',
    icon: <Shield className="w-8 h-8" />,
  },
];


const PagePage = () => {
  return (
