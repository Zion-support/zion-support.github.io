import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Shield, Users, Zap, CheckCircle, ArrowRight } from 'lucide-react';

export default function Enterprise() {
  const solutions = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Enterprise Security',
      description: 'Comprehensive cybersecurity solutions including threat detection, compliance management, and data protection.',
      features: ['Advanced Threat Detection', 'Compliance Automation', 'Data Encryption', 'Security Monitoring']
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Team Collaboration',
      description: 'Advanced collaboration tools and platforms to enhance team productivity and communication.',
      features: ['Unified Communication', 'Project Management', 'Document Sharing', 'Real-time Collaboration']
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Performance Optimization',
      description: 'Optimize your enterprise systems for maximum performance and efficiency.',
      features: ['System Monitoring', 'Performance Analytics', 'Automated Scaling', 'Resource Optimization']
    }
  ];

  return (
    <>
      <Head>
        <title>Enterprise Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive enterprise solutions for large organizations including security, collaboration, and performance optimization." />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 py-16">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Enterprise Solutions
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive technology solutions designed for large organizations. 
              Scale your business with our enterprise-grade services and support.
            </p>
          </div>

          {/* Solutions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="text-blue-600 mb-4">
                  {solution.icon}
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {solution.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {solution.description}
                </p>
                <ul className="space-y-2">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Transform Your Enterprise?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how our enterprise solutions can help your organization 
              achieve its technology goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
                Contact Enterprise Team
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link href="/schedule-demo" className="inline-flex items-center px-8 py-4 bg-transparent text-white border-2 border-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold">
                Schedule Demo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}