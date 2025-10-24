'use client';

export const dynamic = 'force-dynamic';

import React from 'react';
import Link from 'next/link';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import { Brain, BarChart, Target, CheckCircle, Shield, Lock, Eye, AlertTriangle } from 'lucide-react';

const Page: React.FC = () => {
  // Set document title for SEO
  React.useEffect(() => {
    document.title = 'Cybersecurity Audit - Zion Tech Group';
  }, []);

  const features = [
    {
      icon: 'shield',
      title: 'Comprehensive Security Assessment',
      description: 'Thorough evaluation of your current security posture and vulnerabilities.',
      benefits: ['Vulnerability scanning', 'Penetration testing', 'Risk assessment', 'Compliance review']
    },
    {
      icon: 'lock',
      title: 'Advanced Threat Detection',
      description: 'AI-powered threat detection and monitoring systems.',
      benefits: ['Real-time monitoring', 'Anomaly detection', 'Threat intelligence', 'Incident response']
    },
    {
      icon: 'eye',
      title: 'Security Compliance',
      description: 'Ensure compliance with industry standards and regulations.',
      benefits: ['GDPR compliance', 'HIPAA compliance', 'SOC 2 audit', 'ISO 27001']
    }
  ];

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'shield':
        return <Shield className="w-12 h-12 text-emerald-400 mb-4" />;
      case 'lock':
        return <Lock className="w-12 h-12 text-emerald-400 mb-4" />;
      case 'eye':
        return <Eye className="w-12 h-12 text-emerald-400 mb-4" />;
      default:
        return <Shield className="w-12 h-12 text-emerald-400 mb-4" />;
    }
  };

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Cybersecurity Audit
            </h1>
            <p className="text-xl text-emerald-400 max-w-3xl mx-auto">
              Professional cybersecurity audit services and solutions from Zion Tech Group.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800 p-6 rounded-lg">
                {renderIcon(feature.icon)}
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-emerald-400 mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="bg-slate-800 p-8 rounded-lg mb-16">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">Our Audit Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">1</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Discovery</h3>
                <p className="text-gray-300 text-sm">Identify all systems and assets</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">2</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Assessment</h3>
                <p className="text-gray-300 text-sm">Evaluate security controls and vulnerabilities</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">3</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Analysis</h3>
                <p className="text-gray-300 text-sm">Analyze findings and prioritize risks</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">4</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Recommendations</h3>
                <p className="text-gray-300 text-sm">Provide actionable security improvements</p>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Link 
              href="/contact" 
              className="bg-emerald-600 text-white px-8 py-3 rounded-lg hover:bg-emerald-700 transition-colors inline-flex items-center"
            >
              Get Started
              <span className="ml-2">→</span>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Page;