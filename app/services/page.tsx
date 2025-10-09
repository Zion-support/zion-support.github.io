'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Code, 
  Zap, 
  BarChart, 
  Smartphone, 
  Database, 
  Network, 
  Lock, 
  Cpu, 
  Globe,
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  TrendingUp,
  Clock,
  Award
} from 'lucide-react';

const ServicesPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const serviceCategories = [
    {
      title: 'AI-Powered Micro SAAS',
      icon: Brain,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/20',
      borderColor: 'border-purple-500/30',
      services: [
        {
          name: 'AI Customer Support Bot',
          description: 'Intelligent 24/7 customer support with natural language processing, sentiment analysis, and seamless human handoff.',
          price: '$299/month',
          features: ['10,000+ conversations', 'Multi-language support', 'Sentiment analysis', 'Human handoff'],
          icon: Brain,
          link: '/ai-customer-support'
        },
        {
          name: 'AI Sales Predictor',
          description: 'Advanced sales forecasting with 95% accuracy, lead scoring, and revenue optimization recommendations.',
          price: '$199/month',
          features: ['6-month predictions', 'Lead scoring', 'Revenue optimization', 'Real-time analytics'],
          icon: TrendingUp,
          link: '/ai-sales-automation'
        },
        {
          name: 'AI Mobile App Builder',
          description: 'Create native iOS and Android apps with AI assistance, drag-and-drop interface, and instant deployment.',
          price: '$499/month',
          features: ['Unlimited apps', 'Drag-and-drop builder', 'AI code generation', 'Instant deployment'],
          icon: Smartphone,
          link: '/ai-mobile-app-development'
        },
        {
          name: 'AI Content Generator',
          description: 'Revolutionary AI-powered content creation for blogs, social media, emails, and marketing materials.',
          price: '$199/month',
          features: ['Unlimited content', 'SEO optimization', 'Multi-format output', 'Brand voice training'],
          icon: Code,
          link: '/ai-content-generation'
        }
      ]
    },
    {
      title: 'Enterprise IT Solutions',
      icon: Cloud,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/20',
      borderColor: 'border-blue-500/30',
      services: [
        {
          name: 'Cloud Migration Pro',
          description: 'Seamless cloud migration with zero downtime, automated testing, and 99.9% uptime guarantee.',
          price: 'Starting at $1,999',
          features: ['Zero downtime', 'Automated testing', '99.9% uptime', '24/7 support'],
          icon: Cloud,
          link: '/cloud-services'
        },
        {
          name: 'DevOps Automation',
          description: 'Complete CI/CD pipeline setup with automated testing, deployment, and monitoring for any tech stack.',
          price: '$799/month',
          features: ['CI/CD pipelines', 'Automated testing', '24/7 monitoring', 'Multi-cloud support'],
          icon: Cpu,
          link: '/devops'
        },
        {
          name: 'Enterprise Security Suite',
          description: 'Comprehensive security solution with threat detection, compliance monitoring, and incident response.',
          price: '$1,299/month',
          features: ['SOC 2 Type II', 'Threat detection', 'Compliance monitoring', 'Incident response'],
          icon: Shield,
          link: '/cybersecurity'
        },
        {
          name: 'Database Optimization',
          description: 'Advanced database management with performance optimization, backup solutions, and scaling capabilities.',
          price: '$599/month',
          features: ['Performance tuning', 'Automated backups', 'Auto-scaling', 'Query optimization'],
          icon: Database,
          link: '/database'
        }
      ]
    },
    {
      title: 'Specialized AI Services',
      icon: Zap,
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-500/20',
      borderColor: 'border-cyan-500/30',
      services: [
        {
          name: 'AI Workflow Automation',
          description: 'Automate complex business processes with intelligent decision-making and exception handling.',
          price: '$599/month',
          features: ['Unlimited workflows', 'Smart routing', 'Exception handling', 'Process analytics'],
          icon: Zap,
          link: '/ai-workflow-automation'
        },
        {
          name: 'AI Data Visualization',
          description: 'Transform complex data into interactive dashboards and reports with AI-powered insights.',
          price: '$399/month',
          features: ['Real-time dashboards', 'AI insights', 'Custom visualizations', 'Export capabilities'],
          icon: BarChart,
          link: '/ai-data-visualization'
        },
        {
          name: 'Quantum Computing API',
          description: 'Access quantum computing power through our API for optimization, cryptography, and complex calculations.',
          price: '$2,999/month',
          features: ['Enterprise access', 'Quantum algorithms', 'API integration', 'Expert support'],
          icon: Globe,
          link: '/quantum-computing'
        },
        {
          name: 'AI Healthcare Solutions',
          description: 'Cutting-edge AI solutions for medical imaging, drug discovery, and personalized medicine.',
          price: 'Starting at $1,999/month',
          features: ['Medical imaging', 'Drug discovery', 'Personalized medicine', 'HIPAA compliant'],
          icon: Shield,
          link: '/ai-healthcare'
        }
      ]
    }
  ];

  const stats = [
    { number: '500+', label: 'Active Clients', icon: Users },
    { number: '99.9%', label: 'Uptime Guarantee', icon: Award },
    { number: '24/7', label: 'Expert Support', icon: Clock },
    { number: '300%', label: 'Average ROI', icon: TrendingUp }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid-enhanced neural-network energy-field">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-md shadow-lg cyber-glow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center energy-pulse">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-white font-bold text-xl neon-text">Zion Tech Group</span>
            </Link>
            <div className="flex space-x-8">
              <Link href="/" className="text-white hover:text-cyan-400 transition-colors font-medium">
                Home
              </Link>
              <Link href="/about" className="text-white hover:text-cyan-400 transition-colors font-medium">
                About
              </Link>
              <Link href="/contact" className="cyber-button inline-flex items-center">
                Get Started
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 holographic-text cyber-text glitch quantum-entanglement">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium neon-glow">
              Real Solutions for Real Business Problems
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
              We provide production-ready AI and IT solutions that deliver measurable results. 
              From micro SAAS applications to enterprise-scale transformations, we have the expertise to accelerate your business.
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center energy-pulse">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2 neon-text">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Services Categories */}
        {serviceCategories.map((category, categoryIndex) => (
          <section key={categoryIndex} className="container mx-auto px-4 py-16">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center mb-4">
                <div className={`w-12 h-12 ${category.bgColor} ${category.borderColor} border rounded-lg flex items-center justify-center mr-4`}>
                  <category.icon className={`w-6 h-6 ${category.color}`} />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white neon-text">
                  {category.title}
                </h2>
              </div>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                {category.title === 'AI-Powered Micro SAAS' && 'Ready-to-use AI applications that solve specific business problems with immediate value.'}
                {category.title === 'Enterprise IT Solutions' && 'Comprehensive IT infrastructure and services designed for enterprise-scale operations.'}
                {category.title === 'Specialized AI Services' && 'Advanced AI solutions for complex business challenges requiring specialized expertise.'}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {category.services.map((service, serviceIndex) => (
                <div key={serviceIndex} className="quantum-card p-6 energy-pulse hover:scale-105 transition-all duration-300">
                  <div className="flex items-start mb-4">
                    <div className={`w-12 h-12 ${category.bgColor} ${category.borderColor} border rounded-lg flex items-center justify-center mr-4`}>
                      <service.icon className={`w-6 h-6 ${category.color}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2 neon-text">{service.name}</h3>
                      <div className="text-2xl font-bold text-cyan-400 mb-3">{service.price}</div>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex space-x-4">
                    <Link
                      href={service.link}
                      className="flex-1 cyber-button text-center"
                    >
                      Learn More
                    </Link>
                    <Link
                      href="/contact"
                      className="flex-1 border-2 border-cyan-400 text-cyan-400 px-4 py-2 rounded-lg font-medium hover:bg-cyan-400 hover:text-white transition-all duration-300 text-center"
                    >
                      Get Quote
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}

        {/* CTA Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="quantum-card p-8 text-center energy-pulse">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Let our experts help you choose the perfect solution for your business needs. 
              Get a free consultation and see how we can accelerate your growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="cyber-button text-lg px-8 py-4"
              >
                Get Free Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <a
                href="tel:+13024640950"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300 text-lg"
              >
                📞 Call: (302) 464-0950
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ServicesPage;