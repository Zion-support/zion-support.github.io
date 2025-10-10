'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Phone, Mail, Shield, Brain, Globe, Zap } from 'lucide-react';

const BlockchainPage: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: 'Secure Blockchain Solutions',
      description: 'Advanced blockchain technology with enterprise-grade security and compliance'
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Lightning-fast blockchain transactions and smart contract execution'
    },
    {
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Intelligent blockchain solutions powered by advanced AI technology'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Worldwide blockchain deployment and support for international businesses'
    }
  ];

  const benefits = [
    'Advanced blockchain technology integration',
    'Real-time transaction processing',
    'Enterprise-grade security and compliance',
    'Scalable and flexible blockchain solutions',
    '24/7 technical support',
    'Easy integration with existing systems',
    'Cost-effective pricing plans',
    'Proven track record of success'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Blockchain Solutions | Zion Tech Group</title>
        <meta name="description" content="Professional Blockchain Solutions by Zion Tech Group. Advanced AI and IT solutions for your business." />
        <meta name="keywords" content="blockchain solutions, blockchain technology, IT services, Zion Tech Group, smart contracts" />
      </Helmet>
