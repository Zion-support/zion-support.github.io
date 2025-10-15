<<<<<<< HEAD
'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Wifi, Zap, Shield, Globe, Smartphone, Router } from 'lucide-react';

const FiveGImplementationPage: React.FC = () => {
  const features = [
    {
      icon: Wifi,
      title: '5G Network Design',
      description: 'Complete 5G network design and implementation with optimal coverage and performance.',
      benefits: ['Ultra-low latency', 'High-speed connectivity', 'Massive device support', 'Network slicing']
    },
    {
      icon: Zap,
      title: 'Edge Computing Integration',
      description: 'Seamless integration of edge computing with 5G networks for real-time processing.',
      benefits: ['Real-time processing', 'Reduced latency', 'Local data processing', 'Enhanced security']
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'Enterprise-grade security measures and compliance with industry standards.',
      benefits: ['End-to-end encryption', 'Network security', 'Compliance standards', 'Threat monitoring']
    },
    {
      icon: Globe,
      title: 'Global Connectivity',
      description: 'Worldwide 5G network deployment with seamless roaming capabilities.',
      benefits: ['Global coverage', 'Seamless roaming', 'Multi-carrier support', 'International standards']
    },
    {
      icon: Smartphone,
      title: 'IoT Integration',
      description: 'Comprehensive IoT device integration and management solutions.',
      benefits: ['Device management', 'Data analytics', 'Remote monitoring', 'Scalable architecture']
    },
    {
      icon: Router,
      title: 'Infrastructure Management',
      description: 'Complete infrastructure setup and ongoing management services.',
      benefits: ['Hardware deployment', 'Network monitoring', 'Maintenance support', 'Performance optimization']
    }
  ];

  return (
    <>
      <Helmet>
        <title>5G Network Implementation - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Complete 5G network implementation services with ultra-low latency, high-speed connectivity, and advanced features for modern applications and IoT ecosystems." />
        <meta name="keywords" content="5G implementation, network design, ultra-low latency, IoT connectivity, wireless infrastructure" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              5G Network <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Implementation</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Complete 5G network implementation services with ultra-low latency, high-speed connectivity, and advanced features for modern applications and IoT ecosystems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300">
                Get Started
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Advanced 5G Features
              </h2>
              <p className="text-xl text-gray-300">
                Cutting-edge 5G technology for the next generation of connectivity
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <feature.icon className="w-8 h-8 text-blue-400 mr-3" />
                    <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  {feature.benefits && (
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="text-sm text-gray-400 flex items-center">
                          <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Implement 5G?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact our experts to discuss your 5G implementation needs and get started today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300">
                Contact Us
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default FiveGImplementationPage;
=======
<<<<<<< HEAD
import React from 'react;'
import { Helmet } from 'react-helmet-async;'
'use client;''
export default function Page() {
  return (
    <div className="min-h-screen bg-white">""
      <Helmet>
        <title>Page - Zion Tech Group</title>
        <meta name="description" content="Professional page services by Zion Tech Group." />""
      </Helmet>
      <div className="container mx-auto px-4 py-16">;""
        <div className="text-center">;""
          <h1 className="text-4xl font-bold text-gray-900 mb-8">;""
            Page;
          </h1>
          <p className="text-xl text-gray-600 mb-8">;""
            Professional page solutions tailored to your business needs.;
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">;""
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">;""
              <h3 className="text-lg font-semibold text-blue-900 mb-2">;""
                Expert Solutions;
              </h3>
              <p className="text-blue-700">;""
                Our team of experts delivers cutting-edge page solutions.;
              </p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">;""
              <h3 className="text-lg font-semibold text-green-900 mb-2">;""
                Custom Implementation;
              </h3>
              <p className="text-green-700">;""
                Tailored page implementations for your specific requirements.;
              </p>
            </div>
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">;""
              <h3 className="text-lg font-semibold text-purple-900 mb-2">;""
                24/7 Support;
              </h3>
              <p className="text-purple-700">;""
                Round-the-clock support for all your page needs.;
              </p>
            </div>
          </div>
          <div className="mt-12">;""
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">;""
              Get Started Today;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
=======

import React from 'react';

import React from 'react';;

import SEOHead from '../components/SEOHead';

const G5gImplementationPage: React.FC = () => {
  return (
    <>

      <SEOHead
        title="5G Implementation - Zion Tech Group"
        description="Advanced 5G implementation solutions for modern businesses"

      />
      <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">5G Implementation</h1>
          <p className="text-gray-300">Advanced 5G implementation solutions coming soon...</p>

      <SEOHead title ="5G Implementation - Zion Tech Group"";
        description="Advanced 5G implementation solutions for modern businesses"";
      />
      <div className ="min-h-screen bg-slate-900 text-white flex items-center justify-center">";
        <div className ="text-center">";
          <h1 className ="text-4xl font-bold mb-4">5G Implementation</h1>";
          <p className ="text-gray-300">Advanced solutions coming soon...</p>";

        </div>
      </div>
    </>
  ),
};

export default G5gImplementationPage;
>>>>>>> main
>>>>>>> main
