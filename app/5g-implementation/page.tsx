'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Wifi, Zap, Shield, Globe, CheckCircle, ArrowRight, Phone, Mail, MapPin, Clock, Users, BarChart } from 'lucide-react';
const FiveGImplementationPage: React.FC = () => {
  const features = [
    {
      icon: Wifi,
      title: '5G Network Design',
      description: 'Complete 5G network design and implementation with optimal coverage and performance.',
      benefits: ['Network planning', 'Coverage optimization', 'Performance tuning']
    },
    {
      icon: Zap,
      title: 'Ultra-Low Latency',
      description: 'Ultra-low latency 5G networks for real-time applications and mission-critical operations.',
      benefits: ['< 1 ms latency', 'Real-time apps', 'Mission critical']
    },
    {
      icon: Clock,
      title: '24/7 Network Monitoring',
      description: 'Continuous monitoring of 5G network performance with real-time analytics and alerts.',
      benefits: ['Network monitoring', 'Performance analytics', 'Proactive maintenance']
    },
    {
      icon: Users,
      title: 'Scalable Infrastructure',
      description: 'Scalable 5G infrastructure that grows with your business needs and user demands.',
      benefits: ['Auto-scaling', 'Capacity planning', 'Future-proof design']
    },
    {
      icon: Shield,
      title: 'Enhanced Security',
      description: 'Advanced encryption and security protocols for enterprise-grade protection',
      benefits: ['End-to-end encryption', 'Security protocols', 'Threat detection']
    },
    {
      icon: BarChart,
      title: 'Performance Analytics',
      description: 'Advanced analytics and reporting for 5G network performance and optimization.',
      benefits: ['Performance insights', 'Usage analytics', 'Optimization recommendations']
    }
  ];
  return (
    <>
      <Helmet>
        <title>5G Network Implementation - Zion Tech Group | Zion Tech Group - AI & IT Solutions</title>
        <meta name="description" content="Complete 5G network implementation services with ultra-low latency, high-speed connectivity, and advanced features for modern applications and IoT ecosystems." />
        <meta name="keywords" content="5G implementation, 5G network, ultra-low latency, high-speed connectivity, IoT, network infrastructure, wireless technology" />
        <meta property="og:title" content="5G Network Implementation - Zion Tech Group" />
        <meta property="og:description" content="Complete 5G network implementation services with ultra-low latency, high-speed connectivity, and advanced features for modern applications and IoT ecosystems." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="5G Network Implementation - Zion Tech Group" />
        <meta name="twitter:description" content="Complete 5G network implementation services with ultra-low latency, high-speed connectivity, and advanced features for modern applications and IoT ecosystems." />
      </Helmet>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white">
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl font-bold mb-6">
                5G Network Implementation
              </h1>
              <p className="text-xl mb-8">
                Transform your business with ultra-fast, reliable 5G network infrastructure designed for the future
              </p>
              <div className="flex flex-col sm: flex-row gap-4 justify-center">
                <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Get Started
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Features Section */}
        <div className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                Our 5G Implementation Services
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-md p-6 hover: shadow-lg transition-shadow">
                    <div className="flex items-center mb-4">
                      <feature.icon className="h-8 w-8 text-blue-600 mr-3" />
                      <h3 className="text-xl font-semibold text-gray-900">
                        {feature.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 mb-4">
                      {feature.description}
                    </p>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* CTA Section */}
        <div className="bg-blue-600 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Implement 5G?
            </h2>
            <p className="text-xl mb-8">
              Contact our experts to discuss your 5G network implementation needs
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover: bg-gray-100 transition-colors">
              Contact Us Today
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default FiveGImplementationPage;