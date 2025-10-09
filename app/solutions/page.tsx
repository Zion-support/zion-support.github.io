'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Brain, Cloud, Shield, Zap, Target, Users, BarChart, Globe } from 'lucide-react';

const SolutionsPage: React.FC = () => {
  const solutions = [
    {
      title: 'AI-Powered Business Intelligence',
      description: 'Transform your data into actionable insights with our advanced AI analytics platform.',
      icon: <Brain className="w-12 h-12 text-purple-600" />,
      features: ['Predictive Analytics', 'Real-time Dashboards', 'Automated Reporting', 'Data Visualization'],
      benefits: ['Increase efficiency by 40%', 'Reduce decision time by 60%', 'Improve accuracy by 85%'],
      price: 'Starting at $1,500/month'
    },
    {
      title: 'Cloud Infrastructure Solutions',
      description: 'Scalable, secure, and cost-effective cloud solutions for modern businesses.',
      icon: <Cloud className="w-12 h-12 text-blue-600" />,
      features: ['Multi-cloud Strategy', 'Auto-scaling', 'Disaster Recovery', 'Security Hardening'],
      benefits: ['99.9% uptime guarantee', 'Reduce costs by 30%', 'Scale instantly'],
      price: 'Starting at $999/month'
    },
    {
      title: 'Cybersecurity & Compliance',
      description: 'Comprehensive security solutions to protect your business from cyber threats.',
      icon: <Shield className="w-12 h-12 text-green-600" />,
      features: ['Threat Detection', 'Vulnerability Assessment', 'Compliance Monitoring', 'Incident Response'],
      benefits: ['Zero security breaches', '100% compliance', '24/7 monitoring'],
      price: 'Starting at $799/month'
    },
    {
      title: 'Process Automation',
      description: 'Streamline your operations with intelligent automation solutions.',
      icon: <Zap className="w-12 h-12 text-yellow-600" />,
      features: ['Workflow Automation', 'RPA Implementation', 'API Integration', 'Custom Solutions'],
      benefits: ['Reduce manual work by 70%', 'Increase productivity by 50%', 'Eliminate errors'],
      price: 'Starting at $599/month'
    },
    {
      title: 'Digital Transformation',
      description: 'Complete digital transformation services to modernize your business.',
      icon: <Target className="w-12 h-12 text-red-600" />,
      features: ['Strategy Development', 'Technology Migration', 'Change Management', 'Training & Support'],
      benefits: ['Modernize operations', 'Improve customer experience', 'Increase competitiveness'],
      price: 'Custom pricing'
    },
    {
      title: 'Enterprise Integration',
      description: 'Seamlessly connect all your business systems and applications.',
      icon: <Globe className="w-12 h-12 text-indigo-600" />,
      features: ['API Development', 'System Integration', 'Data Synchronization', 'Legacy Modernization'],
      benefits: ['Unified data flow', 'Improved efficiency', 'Better decision making'],
      price: 'Starting at $1,299/month'
    }
  ];

  const industries = [
    { name: 'Healthcare', icon: '🏥', description: 'AI-powered medical solutions and patient care optimization' },
    { name: 'Finance', icon: '💰', description: 'Advanced fintech solutions and risk management' },
    { name: 'Manufacturing', icon: '🏭', description: 'Smart manufacturing and supply chain optimization' },
    { name: 'Retail', icon: '🛒', description: 'E-commerce solutions and customer experience enhancement' },
    { name: 'Education', icon: '🎓', description: 'EdTech solutions and learning management systems' },
    { name: 'Government', icon: '🏛️', description: 'Public sector digital transformation and citizen services' }
  ];

  return (
    <>
      <Helmet>
        <title>Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI and IT solutions for modern businesses. Transform your operations with our cutting-edge technology." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Comprehensive AI and IT solutions designed to transform your business operations and drive growth
            </p>
          </section>

          {/* Solutions Grid */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Core Solutions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solutions.map((solution, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-center mb-4">
                    {solution.icon}
                    <h3 className="text-xl font-semibold text-gray-900 ml-4">{solution.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{solution.description}</p>
                  <ul className="text-sm text-gray-500 mb-4">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center mb-1">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="border-t pt-4">
                    <div className="text-lg font-bold text-blue-600 mb-2">{solution.price}</div>
                    <div className="text-sm text-gray-500">
                      {solution.benefits.map((benefit, idx) => (
                        <div key={idx} className="mb-1">✓ {benefit}</div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Industries Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Industries We Serve</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {industries.map((industry, index) => (
                <div key={index} className="bg-gray-800 rounded-lg p-6 text-center hover:bg-gray-700 transition-colors">
                  <div className="text-4xl mb-4">{industry.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">{industry.name}</h3>
                  <p className="text-gray-300">{industry.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Get a free consultation and discover how our solutions can help your business grow
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Get Free Consultation
              </a>
              <a
                href="tel:+13024640950"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Call: (302) 464-0950
              </a>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default SolutionsPage;
