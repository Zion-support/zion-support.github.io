'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  CpuChipIcon, 
  ShieldCheckIcon, 
  CloudIcon, 
  ChartBarIcon,
  GlobeAltIcon,
  CogIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

export default function SolutionsPage() {
  const solutions = [
    {
      title: 'AI Solutions',
      description: 'Advanced artificial intelligence solutions for business automation and intelligence.',
      icon: CpuChipIcon,
      href: '/ai-solutions',
      features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics']
    },
    {
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets and infrastructure.',
      icon: ShieldCheckIcon,
      href: '/cybersecurity',
      features: ['Threat Detection', 'Security Monitoring', 'Compliance Management', 'Incident Response']
    },
    {
      title: 'Cloud Infrastructure',
      description: 'Scalable cloud solutions and infrastructure management for optimal performance.',
      icon: CloudIcon,
      href: '/cloud-infrastructure',
      features: ['Cloud Migration', 'Infrastructure as Code', 'Auto-scaling', 'Cost Optimization']
    },
    {
      title: 'Digital Transformation',
      description: 'Strategic digital transformation services to modernize your business processes.',
      icon: ChartBarIcon,
      href: '/digital-transformation',
      features: ['Process Automation', 'Data Analytics', 'Customer Experience', 'Operational Efficiency']
    },
    {
      title: '5G Solutions',
      description: 'Next-generation 5G technology solutions for enhanced connectivity and IoT.',
      icon: GlobeAltIcon,
      href: '/5g-solutions',
      features: ['Network Infrastructure', 'IoT Applications', 'Edge Computing', 'Ultra-low Latency']
    },
    {
      title: 'Micro SaaS',
      description: 'Custom micro SaaS solutions designed to solve specific business challenges.',
      icon: CogIcon,
      href: '/micro-saas-solutions',
      features: ['Custom Development', 'API Integration', 'Scalable Architecture', 'Maintenance Support']
    }
  ];

  return (
    <>
      <Helmet>
        <title>Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive technology solutions including AI, cybersecurity, cloud infrastructure, and digital transformation services." />
        <meta name="keywords" content="AI solutions, cybersecurity, cloud computing, digital transformation, 5G solutions, micro SaaS" />
      </Helmet>
      
      <div className="min-h-screen bg-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
                Technology Solutions
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Comprehensive technology solutions designed to accelerate your business growth and digital transformation.
              </p>
              <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto">
                From AI and cybersecurity to cloud infrastructure and 5G solutions, we provide end-to-end technology services 
                that help businesses innovate, scale, and succeed in the digital age.
              </p>
            </div>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="py-20 bg-slate-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover our comprehensive range of technology solutions tailored to your business needs
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solutions.map((solution) => {
                const Icon = solution.icon;
                return (
                  <div key={solution.title} className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{solution.title}</h3>
                    <p className="text-gray-300 mb-6">
                      {solution.description}
                    </p>
                    <ul className="space-y-2 mb-6">
                      {solution.features.map((feature, index) => (
                        <li key={index} className="text-gray-400 flex items-center">
                          <ArrowRightIcon className="w-4 h-4 mr-2 text-purple-400" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link 
                      to={solution.href} 
                      className="text-purple-400 hover:text-purple-300 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all"
                    >
                      Learn More <ArrowRightIcon className="w-4 h-4" />
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-slate-900 to-purple-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-12">
                Let's discuss how our technology solutions can drive your business forward
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300"
                >
                  Get Started Today
                </Link>
                <Link 
                  to="/demo" 
                  className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300"
                >
                  Schedule Demo
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
