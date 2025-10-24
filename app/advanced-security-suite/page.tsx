'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import { Shield, Lock, Eye, AlertTriangle, CheckCircle, ArrowRight } from 'lucide-react';

const securityFeatures = [
  {
    title: 'Advanced Threat Detection',
    description: 'AI-powered threat detection and prevention using machine learning algorithms.',
    icon: <Shield className="w-8 h-8" />,
  },
  {
    title: 'Data Encryption',
    description: 'End-to-end encryption for all data at rest and in transit.',
    icon: <Lock className="w-8 h-8" />,
  },
  {
    title: 'Real-time Monitoring',
    description: '24/7 security monitoring with instant alerts and response.',
    icon: <Eye className="w-8 h-8" />,
  },
  {
    title: 'Incident Response',
    description: 'Automated incident response and recovery procedures.',
    icon: <AlertTriangle className="w-8 h-8" />,
  },
];

const AdvancedSecuritySuitePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <SEOOptimizer
        title="Advanced Security Suite - ZionTechGroup"
        description="Comprehensive security solutions with advanced threat detection, data encryption, and 24/7 monitoring."
        keywords="security, cybersecurity, threat detection, data encryption, monitoring"
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Advanced <span className="text-blue-600">Security Suite</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Comprehensive security solutions designed to protect your business from evolving threats 
              with cutting-edge technology and expert monitoring.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Security Features
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our advanced security suite provides comprehensive protection for your digital assets.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {securityFeatures.map((feature, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Secure Your Business?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Get comprehensive security solutions tailored to your business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="/services"
              className="inline-flex items-center px-8 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AdvancedSecuritySuitePage;