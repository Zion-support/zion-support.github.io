'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe } from 'lucide-react';

const ARVRPlatformPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered AR/VR',
      description: 'Advanced AI technology to create immersive augmented and virtual reality experiences'
    },
    {
      icon: Zap,
      title: 'Real-Time Rendering',
      description: 'Lightning-fast 3D rendering and real-time interaction for optimal user experience'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption and compliance standards for your AR/VR data'
    },
    {
      icon: Globe,
      title: 'Cross-Platform Support',
      description: 'Deploy across multiple devices and platforms for maximum reach and accessibility'
    }
  ];

  const benefits = [
    'Advanced AR/VR technology integration',
    'Real-time 3D rendering and interaction',
    'Enterprise-grade security and compliance',
    'Cross-platform deployment capabilities',
    '24/7 technical support',
    'Easy integration with existing systems',
    'Cost-effective pricing plans',
    'Proven track record of success'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AR/VR Platform | Zion Tech Group</title>
        <meta name="description" content="Professional AR/VR Platform services by Zion Tech Group. Advanced AI and IT solutions for your business." />