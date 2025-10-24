'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe } from 'lucide-react';

const ARVRPlatformPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered AR/VR',
      description: 'Advanced AI technology to enhance augmented and virtual reality experiences'
    },
    {
      icon: Zap,
      title: 'Real-Time Rendering',
      description: 'Lightning-fast 3D rendering and real-time interaction for immersive experiences'
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
    'Cross-platform compatibility',
    'Enterprise-grade security',
    'Scalable cloud infrastructure',
    'Custom development solutions',
    'Multi-device support',
    'Proven track record of success'
  ];

  return (
    <div className="min-h-screenbg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AR/VR Platform | Zion Tech Group</title>
        <meta name="description" content="Advanced AR/VR platform solutions for immersive experiences and enterprise applications." />
        <meta name="keywords" content="AR platform, VR platform, augmented reality, virtual reality, immersive technology" />
      </Helmet>
      
      <div className="containermx-autopx-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xlfont-boldtext-white mb-6">AR/VR Platform</h1>
          <p className="text-xltext-gray-300max-w-3xl mx-auto">
            Create immersive augmented and virtual reality experiences with our advanced platform
            powered by cutting-edge technology and AI.
          </p>
        </div>

        <div className="gridgrid-cols-1md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-white/5backdrop-blur-smrounded-xl p-6 border border-white/10">
              <feature.icon className="w-12h-12text-purple-400 mb-4" />
              <h3 className="text-xlfont-semiboldtext-white mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mb-16">
          <h2 className="text-3xlmd:text-4xl font-bold text-white mb-4">
            Key Benefits
          </h2>
          <p className="text-xltext-gray-300max-w-3xl mx-auto">Experience the power of our AR/VR platform for your business.</p>
        </div>

        <div className="gridgrid-cols-1md:grid-cols-2 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="flexitems-centerspace-x-3">
              <CheckCircle className="w-6h-6text-green-400 flex-shrink-0" />
              <span className="text-gray-300">{benefit}</span>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="bg-gradient-to-rfrom-purple-600to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
            Get Started with AR/VR
          </button>
        </div>
      </div>
    </div>
  );
};

export default ARVRPlatformPage;
