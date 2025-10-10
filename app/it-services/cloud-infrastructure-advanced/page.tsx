'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Cloud, Server, Shield, Database, Zap, CheckCircle, ArrowRight, Star, Brain, Smartphone, Globe, Settings, DollarSign, Award, Rocket, TrendingUp, Cpu, Eye, Mic, Workflow, Heart, Lock, Monitor, Package, Wifi, Printer, Router, Box, Headphones, MessageCircle, CheckSquare, ShoppingCart, Link as LinkIcon, Mail, Phone, MapPin, Search, Users, Calendar, FileText, BarChart3, Target, MessageSquare } from 'lucide-react';
import Navigation from '../../components/EnhancedNavigation';
import Footer from '../../components/Footer';

const CloudInfrastructureAdvanced: React.FC = () => {
  const features = [
    'Multi-cloud architecture design',
    'AWS, Azure, and GCP expertise',
    'Container orchestration with Kubernetes',
    'Serverless computing implementation',
    'Microservices architecture design',
    'Auto-scaling and load balancing',
    'Disaster recovery and backup solutions',
    'Cloud security and compliance',
    'Cost optimization and monitoring',
    'Cloud migration and modernization',
    'Infrastructure as Code (IaC)',
    'DevOps and CI/CD pipeline setup',
    'Cloud-native application development',
    'Performance monitoring and optimization',
    '24/7 cloud infrastructure support',
    'Cloud governance and best practices',
    'Hybrid cloud solutions',
    'Edge computing implementation',
    'Cloud cost management',
    'Security compliance (SOC2, HIPAA, GDPR)'
  ];

  const benefits = [
    '99.9% uptime guarantee',
    'Reduce infrastructure costs by 40%',
    'Scale resources automatically',
    'Improve application performance by 60%',
    'Enhanced security and compliance',
    'Faster deployment cycles',
    'Better disaster recovery',
    'Reduced operational overhead',
    'Improved scalability',
    'Future-proof infrastructure'
  ];

  const pricingTiers = [
    {
      name: 'Cloud Assessment',
      price: '$2,500',
      period: 'one-time',
      description: 'Comprehensive cloud readiness assessment',
      features: [
        'Current infrastructure analysis',
        'Cloud migration strategy',
        'Cost optimization recommendations',
        'Security assessment',
        'Performance evaluation',
        'Migration roadmap'
      ],
      popular: false
    },
    {
      name: 'Cloud Migration',
      price: '$15,000',
      period: 'project',
      description: 'Complete cloud migration service',
      features: [
        'Full infrastructure migration',
        'Application modernization',
        'Data migration and validation',
        'Security implementation',
        'Performance optimization',
        'Training and documentation',
        '30-day support included'
      ],
      popular: true
    },
    {
      name: 'Cloud Management',
      price: '$5,000',
      period: '/month',
      description: 'Ongoing cloud infrastructure management',
      features: [
        '24/7 monitoring and support',
        'Performance optimization',
        'Security updates and patches',
        'Cost monitoring and optimization',
        'Backup and disaster recovery',
        'Compliance management',
        'Monthly reporting'
      ],
      popular: false
    }
  ];

  const cloudProviders = [
    { name: 'Amazon Web Services', icon: Cloud, description: 'Leading cloud platform' },
    { name: 'Microsoft Azure', icon: Server, description: 'Enterprise cloud solutions' },
    { name: 'Google Cloud Platform', icon: Globe, description: 'AI and data analytics' },
    { name: 'IBM Cloud', icon: Cpu, description: 'Hybrid cloud solutions' },
    { name: 'Oracle Cloud', icon: Database, description: 'Database and enterprise apps' },
    { name: 'Alibaba Cloud', icon: Cloud, description: 'Global cloud services' }
  ];

  const services = [
    {
      title: 'Cloud Architecture Design',
      description: 'Design scalable, secure, and cost-effective cloud architectures tailored to your business needs.',
      icon: Server,
      price: 'Starting at $5,000'
    },
    {
      title: 'Cloud Migration Services',
      description: 'Seamless migration of your applications and data to the cloud with zero downtime.',
      icon: Cloud,
      price: 'Starting at $15,000'
    },
    {
      title: 'Container Orchestration',
      description: 'Implement Kubernetes and container solutions for modern application deployment.',
      icon: Package,
      price: 'Starting at $8,000'
    },
    {
      title: 'Serverless Computing',
      description: 'Build and deploy serverless applications for maximum efficiency and cost savings.',
      icon: Zap,
      price: 'Starting at $6,000'
    },
    {
      title: 'Cloud Security',
      description: 'Implement comprehensive security measures and compliance frameworks.',
      icon: Shield,
      price: 'Starting at $10,000'
    },
    {
      title: 'Cost Optimization',
      description: 'Analyze and optimize your cloud spending to reduce costs by up to 40%.',
      icon: DollarSign,
      price: 'Starting at $3,000'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Advanced Cloud Infrastructure Services - Zion Tech Group</title>
        <meta name="description" content="Expert cloud infrastructure services including AWS, Azure, GCP migration, container orchestration, and cloud management. 99.9% uptime guarantee and 40% cost reduction." />
        <meta name="keywords" content="cloud infrastructure, cloud migration, AWS, Azure, GCP, Kubernetes, cloud architecture, cloud management" />
        <link rel="canonical" href="https://ziontechgroup.com/it-services/cloud-infrastructure-advanced" />
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6">
                <Cloud className="w-5 h-5 text-blue-400" />
                <span className="text-blue-400 font-medium">Advanced Cloud Infrastructure</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 neon-text-enhanced">
                Advanced Cloud Infrastructure
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your business with expert cloud infrastructure services. We provide 99.9% uptime guarantee, 
                40% cost reduction, and seamless migration to AWS, Azure, and GCP.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <a
                  href="#pricing"
                  className="bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/25"
                >
                  Get Free Consultation
                </a>
                <a
                  href="#services"
                  className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
                >
                  View Services
                </a>
              </div>
              
              <div className="flex items-center justify-center space-x-8 text-gray-400">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>99.9% uptime guarantee</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>40% cost reduction</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>24/7 support</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cloud Providers Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Multi-Cloud Expertise
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  We work with all major cloud providers to give you the best solution for your needs.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {cloudProviders.map((provider, index) => (
                  <div key={index} className="bg-slate-800/50 rounded-lg p-6 hover:bg-slate-800/70 transition-all duration-300 group text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <provider.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{provider.name}</h3>
                    <p className="text-gray-300 text-sm">{provider.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 bg-slate-800/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Our Cloud Services
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Comprehensive cloud infrastructure services to transform your business.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                  <div key={index} className="bg-slate-800/50 rounded-lg p-6 hover:bg-slate-800/70 transition-all duration-300 group">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                        <p className="text-cyan-400 font-semibold">{service.price}</p>
                      </div>
                    </div>
                    <p className="text-gray-300 mb-4">{service.description}</p>
                    <a
                      href="/contact"
                      className="text-cyan-400 hover:text-cyan-300 font-medium flex items-center"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Why Choose Our Cloud Services
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  We provide comprehensive cloud solutions with proven results and expert support.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <div key={index} className="bg-slate-800/50 rounded-lg p-6 hover:bg-slate-800/70 transition-all duration-300 group">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                        <CheckCircle className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold text-white">{feature}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Measurable Results
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  See dramatic improvements in your infrastructure performance and costs.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <TrendingUp className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{benefit}</h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Transparent Pricing
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Choose the service that fits your needs. All services include expert consultation and support.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {pricingTiers.map((tier, index) => (
                  <div key={index} className={`relative bg-slate-800/50 rounded-2xl p-8 ${
                    tier.popular ? 'ring-2 ring-blue-500 shadow-lg shadow-blue-500/25' : ''
                  }`}>
                    {tier.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                          Most Popular
                        </span>
                      </div>
                    )}
                    
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                      <p className="text-gray-400 mb-4">{tier.description}</p>
                      <div className="flex items-baseline justify-center">
                        <span className="text-5xl font-bold text-white">{tier.price}</span>
                        <span className="text-gray-400 ml-2">{tier.period}</span>
                      </div>
                    </div>
                    
                    <ul className="space-y-4 mb-8">
                      {tier.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <a
                      href="/contact"
                      className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                        tier.popular
                          ? 'bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white'
                          : 'border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-slate-900'
                      }`}
                    >
                      Get Started
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-2xl p-12 border border-blue-500/20">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Ready to Transform Your Infrastructure?
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Get a free consultation and discover how our cloud infrastructure services can 
                  transform your business. Contact us today.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contact"
                    className="bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
                  >
                    Get Free Consultation
                  </a>
                  <a
                    href="tel:+13024640950"
                    className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
                  >
                    Call: (302) 464-0950
                  </a>
                </div>
                <div className="mt-6 text-gray-400">
                  <p>Questions? Email us at <a href="mailto:kleber@ziontechgroup.com" className="text-blue-400 hover:text-blue-300">kleber@ziontechgroup.com</a></p>
                  <p className="mt-2">Address: 364 E Main St STE 1008, Middletown DE 19709</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default CloudInfrastructureAdvanced;