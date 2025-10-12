

'use client';
import React from 'react';

import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Shield, Cloud } from 'lucide-react';

  const features = [

      icon: <Cloud className="w-12h-12text-cyan-400" />,
      title: "Cloud Integration",
      description: "Seamlessly integrate with all major cloud platforms and services."
    },
      icon: <Zap className="w-12h-12text-purple-400" />,
      title: "Real-time Sync",
      description: "Keep all your systems synchronized with real-time data updates."
    },
      icon: <Shield className="w-12h-12text-green-400" />,

      title: "Secure & Reliable",
      description: "Enterprise-grade security ensures your data is protected during integration."
  ];

  return (
    <>
      <Helmet>
        <title>5G Data Analytics - Zion Tech Group</title>
        <title>System Integration - Zion Tech Group</title>

        {/* Hero Section */}
    
                System Integration

              Professional system integration services by Zion Tech Group. Expert solutions tailored to your business needs.
    
                Get Started

                Learn More

        {/* Features Section */}
    
                Why Choose Our System Integration Services?

                Our expert team helps you connect and optimize all your business systems

 (

                    {feature.icon}

                  <h3 className="text-xl font-semiboldtext-whitemb-4">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>

              ))}

        {/* CTA Section */}
    
                Ready to Get Started?

                Contact us to learn more about our solutions and how we can help your business.

                  Contact Us
    
                  View All Services

  );
};

export default Page;

import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function SystemIntegrationPage() {
  return (
    <>
      <Helmet>
        <title>System Integration - Zion Tech Group</title>
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">System Integration</h1>
        <p className="text-lg text-gray-300 mb-8">Professional system integration services coming soon.</p>
          <Link to="/contact" className="bg-cyan-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-600 transition-all duration-300">

            Contact Us

          </Link>
        </div>
      </div>
    </>
  );

