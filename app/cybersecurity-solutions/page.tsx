'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { ArrowRight, CheckCircle, Star, Users, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Settings, Smartphone, Calendar, FileText, MessageCircle, Heart, DollarSign, Box, Monitor, Package, Mic, Workflow, Eye, Wifi, MessageSquare, ShoppingCart } from 'lucide-react';

const CybersecuritySolutionsPage: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: 'Advanced Threat Protection',
      description: 'Comprehensive security solutions to protect against all types of cyber threats.',
      benefits: ['Real-time threat detection', 'AI-powered analysis', 'Automated response', '24/7 monitoring']
    },
    {
      icon: Brain,
      title: 'AI-Powered Security',
      description: 'Leverage artificial intelligence to detect and prevent sophisticated cyber attacks.',
      benefits: ['Machine learning algorithms', 'Behavioral analysis', 'Predictive security', 'Smart automation']
    },
    {
      icon: BarChart,
      title: 'Security Analytics',
      description: 'Advanced analytics and reporting to understand your security posture and risks.',
      benefits: ['Risk assessment', 'Compliance reporting', 'Security metrics', 'Trend analysis']
    },
    {
      icon: Target,
      title: 'Incident Response',
      description: 'Rapid response and recovery services to minimize damage from security incidents.',
      benefits: ['24/7 incident response', 'Forensic analysis', 'Recovery planning', 'Post-incident review']
    }
  ];

  const services = [
    {
      icon: Shield,
      title: 'Security Assessment',
      description: 'Comprehensive evaluation of your current security posture and vulnerabilities.',
      price: 'From $2,500',
      duration: '2-4 weeks'
    },
    {
      icon: Brain,
      title: 'Penetration Testing',
      description: 'Simulated cyber attacks to identify weaknesses in your systems and defenses.',
      price: 'From $5,000',
      duration: '1-2 weeks'
    },
    {
      icon: BarChart,
      title: 'Compliance Audit',
      description: 'Ensure your organization meets industry standards and regulatory requirements.',
      price: 'From $3,500',
      duration: '2-3 weeks'
    },
    {
      icon: Target,
      title: 'Security Training',
      description: 'Educate your team on cybersecurity best practices and threat awareness.',
      price: 'From $1,500',
      duration: '1-2 days'
    }
  ];

  const benefits = [
    'Protect against 99.9% of known threats',
    'Reduce security incidents by 80%',
    'Ensure compliance with industry standards',
    '24/7 monitoring and support',
    'Rapid incident response',
    'Cost-effective security solutions'
  ];

  const compliance = [
    'SOC 2 Type II',
    'ISO 27001',
    'PCI DSS',
    'HIPAA',
    'GDPR',
    'NIST Framework'
  ];

  return (
    <>
      <Helmet>
        <title>Cybersecurity Solutions | Zion Tech Group</title>
        <meta name="description" content="Comprehensive cybersecurity solutions to protect your business from cyber threats. Advanced threat protection, AI-powered security, and compliance services." />
        <meta name="keywords" content="cybersecurity, security solutions, threat protection, penetration testing, compliance, security audit" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Cybersecurity Solutions
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Protect your business from cyber threats with our comprehensive security solutions. Advanced threat protection, AI-powered security, and compliance services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-cyan-700 transition-colors duration-300">
                  Get Security Assessment
                  <ArrowRight className="w-5 h-5 ml-2 inline" />
                </button>
                <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Security Features
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Comprehensive security solutions designed to protect your business from all types of cyber threats.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-1">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="text-sm text-gray-400">
                        • {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Security Services
              </h2>
              <p className="text-xl text-cyan-100 max-w-2xl mx-auto">
                Comprehensive security services to protect your business and ensure compliance.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white rounded-lg p-6 text-center">
                  <service.icon className="w-12 h-12 text-cyan-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="text-2xl font-bold text-cyan-600 mb-2">{service.price}</div>
                  <div className="text-sm text-gray-500">{service.duration}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our Security Solutions?
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Experience the benefits of comprehensive cybersecurity protection for your business.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center text-white">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Compliance & Standards
              </h2>
              <p className="text-xl text-cyan-100 max-w-2xl mx-auto">
                We help you meet and maintain compliance with industry standards and regulations.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {compliance.map((standard, index) => (
                <div key={index} className="bg-white rounded-lg p-4 text-center">
                  <div className="text-sm font-semibold text-gray-900">{standard}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Secure Your Business?
            </h2>
            <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
              Get a free security assessment and discover how we can protect your business from cyber threats.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
                Get Free Assessment
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-300">
                Contact Security Team
              </button>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </>
  );
};

export default CybersecuritySolutionsPage;