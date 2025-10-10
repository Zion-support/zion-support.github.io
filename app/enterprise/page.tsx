'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import { CheckCircle, TrendingUp, Phone, Mail, MapPin, Building, Shield, Users, Globe, Zap, Database, Cloud, Code, Settings, Lock, BarChart, Target, Award, Clock, Star, ArrowRight, Brain, Cpu, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, Navigation as NavIcon, PieChart, TrendingDown, Activity, MessageSquare, Eye, Sparkles } from 'lucide-react';

const EnterprisePage: React.FC = () => {
  const enterpriseFeatures = [
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with end-to-end encryption, multi-factor authentication, and compliance with industry standards.',
      features: ['SOC 2 Type II', 'ISO 27001', 'GDPR Compliant', 'HIPAA Ready']
    },
    {
      icon: Users,
      title: 'Scalable Architecture',
      description: 'Built to handle millions of users and transactions with auto-scaling capabilities and high availability.',
      features: ['Auto-scaling', '99.9% Uptime', 'Global CDN', 'Load Balancing']
    },
    {
      icon: Globe,
      title: 'Global Deployment',
      description: 'Deploy across multiple regions with local data residency and compliance requirements.',
      features: ['Multi-region', 'Data Residency', 'Local Compliance', 'Edge Computing']
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Optimized for speed and efficiency with sub-second response times and real-time processing.',
      features: ['Sub-second Response', 'Real-time Processing', 'Edge Optimization', 'Caching Strategy']
    }
  ];

  const solutions = [
    {
      category: 'AI & Machine Learning',
      icon: Brain,
      services: [
        'Enterprise AI Platform',
        'Custom ML Models',
        'Predictive Analytics',
        'Natural Language Processing',
        'Computer Vision',
        'Recommendation Engines'
      ]
    },
    {
      category: 'Cloud & Infrastructure',
      icon: Cloud,
      services: [
        'Cloud Migration',
        'Multi-cloud Strategy',
        'Container Orchestration',
        'Serverless Architecture',
        'DevOps Automation',
        'Infrastructure as Code'
      ]
    },
    {
      category: 'Data & Analytics',
      icon: Database,
      services: [
        'Data Lake Solutions',
        'Real-time Analytics',
        'Business Intelligence',
        'Data Warehousing',
        'ETL/ELT Pipelines',
        'Data Governance'
      ]
    },
    {
      category: 'Security & Compliance',
      icon: Lock,
      services: [
        'Identity & Access Management',
        'Threat Detection',
        'Compliance Automation',
        'Security Monitoring',
        'Penetration Testing',
        'Incident Response'
      ]
    }
  ];

  const industries = [
    {
      name: 'Healthcare',
      icon: Stethoscope,
      description: 'HIPAA-compliant solutions for patient care, medical research, and healthcare operations.',
      clients: '50+ Healthcare Organizations'
    },
    {
      name: 'Financial Services',
      icon: BarChart,
      description: 'Secure, compliant solutions for banking, insurance, and fintech companies.',
      clients: '30+ Financial Institutions'
    },
    {
      name: 'Manufacturing',
      icon: Factory,
      description: 'IoT and AI solutions for smart manufacturing and supply chain optimization.',
      clients: '25+ Manufacturing Companies'
    },
    {
      name: 'Retail & E-commerce',
      icon: ShoppingCart,
      description: 'Omnichannel solutions for personalized customer experiences and inventory management.',
      clients: '40+ Retail Brands'
    },
    {
      name: 'Education',
      icon: GraduationCap,
      description: 'Learning management systems and educational technology solutions.',
      clients: '60+ Educational Institutions'
    },
    {
      name: 'Government',
      icon: Building,
      description: 'Secure, scalable solutions for government agencies and public sector organizations.',
      clients: '15+ Government Agencies'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOOptimizer
        title="Enterprise Solutions - Zion Tech Group"
        description="Comprehensive enterprise-grade AI and IT solutions for large-scale business operations. Scalable, secure, and designed for enterprise needs."
        keywords={['enterprise solutions', 'enterprise software', 'large-scale solutions', 'enterprise integration', 'business solutions', 'enterprise AI', 'Zion Tech Group']}
        canonicalUrl="https://ziontechgroup.com/enterprise"
      />
      <Navigation />
      
      <main className="relative">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Enterprise <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Comprehensive, scalable, and secure AI and IT solutions designed specifically for large-scale 
              enterprise operations. Transform your business with enterprise-grade technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                Get Enterprise Consultation
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                Download Enterprise Guide
              </button>
            </div>
          </div>
        </section>

        {/* Enterprise Features */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              Built for <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">Enterprise</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {enterpriseFeatures.map((feature, index) => (
                <div key={feature.title} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                  <feature.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm">{feature.description}</p>
                  <ul className="space-y-1">
                    {feature.features.map((item, idx) => (
                      <li key={idx} className="flex items-center text-xs text-gray-400">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions by Category */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              Enterprise <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">Solutions</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {solutions.map((solution, index) => (
                <div key={solution.category} className="cyber-card p-8 hover:scale-105 transition-all duration-300">
                  <div className="flex items-center mb-6">
                    <solution.icon className="w-8 h-8 text-cyan-400 mr-4" />
                    <h3 className="text-2xl font-bold text-white">{solution.category}</h3>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {solution.services.map((service, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        <span>{service}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries We Serve */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              Industries We <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">Serve</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry, index) => (
                <div key={industry.name} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                  <industry.icon className="w-12 h-12 text-cyan-400 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">{industry.name}</h3>
                  <p className="text-gray-300 mb-4 text-sm">{industry.description}</p>
                  <p className="text-cyan-400 text-sm font-semibold">{industry.clients}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enterprise Stats */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="cyber-card p-8">
              <h2 className="text-3xl font-bold text-white text-center mb-12">
                Enterprise <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">Impact</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-cyan-400 mb-2">500+</div>
                  <div className="text-gray-300">Enterprise Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-cyan-400 mb-2">99.9%</div>
                  <div className="text-gray-300">Uptime Guarantee</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-cyan-400 mb-2">24/7</div>
                  <div className="text-gray-300">Support Available</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-cyan-400 mb-2">15+</div>
                  <div className="text-gray-300">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Scale Your Enterprise?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let our enterprise experts help you design and implement solutions that scale with your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                Schedule Enterprise Demo
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                Contact Sales Team
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default EnterprisePage;