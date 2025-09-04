import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Shield, Users, Zap, Globe, BarChart3, CheckCircle } from 'lucide-react';

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
      title: 'Digital Transformation',
      description: 'End-to-end digital transformation services to modernize your enterprise infrastructure and processes.',
      features: ['Cloud Migration', 'Process Automation', 'Legacy Modernization', 'Change Management']
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'AI & Automation',
      description: 'Intelligent automation solutions to streamline operations and enhance decision-making capabilities.',
      features: ['Machine Learning', 'Process Automation', 'Predictive Analytics', 'Intelligent Workflows']
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Global Infrastructure',
      description: 'Scalable, secure infrastructure solutions designed for global enterprise operations.',
      features: ['Multi-Cloud Architecture', 'Global CDN', 'Disaster Recovery', '24/7 Monitoring']
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: 'Business Intelligence',
      description: 'Advanced analytics and reporting solutions to drive data-driven decision making.',
      features: ['Real-time Analytics', 'Custom Dashboards', 'Predictive Modeling', 'Data Visualization']
    }
  ];

  const contact = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    site: 'https://ziontechgroup.com'
  };

  return (
    <>
      <Head>
        <title>Enterprise Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive enterprise solutions for large organizations. Security, digital transformation, AI automation, and global infrastructure services." />
        <link rel="canonical" href={`${contact.site}/enterprise`} />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 py-16">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Enterprise Solutions
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Comprehensive technology solutions designed for large organizations. 
              Scale your business with our enterprise-grade security, infrastructure, and automation services.
            </p>
          </div>

          {/* Solutions Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-blue-400/50 transition-all duration-300">
                <div className="text-blue-400 mb-4">
                  {solution.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{solution.title}</h3>
                <p className="text-slate-300 mb-6">{solution.description}</p>
                <ul className="space-y-2">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-slate-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Enterprise?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let our enterprise solutions team help you scale your business with cutting-edge technology and proven methodologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                Get Started
              </Link>
              <a href={`tel:${contact.phone}`} className="px-8 py-4 bg-blue-700 text-white rounded-lg font-semibold hover:bg-blue-800 transition-colors">
                Call {contact.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}