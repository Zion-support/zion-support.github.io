'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Users, Award, Zap, Shield, Brain, Cloud, Code, FileText, BarChart, Target, Clock, DollarSign, Phone, Mail, MapPin, Home, Stethoscope, Package, Gavel, TrendingUp, Activity, Truck, Scale, Building } from 'lucide-react';

const MicroSaasPage: React.FC = () => {
  const microSaasServices = [
    {
      name: 'AI Legal Assistant',
      href: '/micro-saas/ai-legal-assistant',
      icon: Gavel,
      description: 'AI-powered contract analysis and legal research',
      price: 'Starting at $299/month',
      category: 'Legal'
    },
    {
      name: 'AI Real Estate Analyzer',
      href: '/micro-saas/ai-real-estate-analyzer',
      icon: Home,
      description: 'Market analysis and property valuation with AI',
      price: 'Starting at $199/month',
      category: 'Real Estate'
    },
    {
      name: 'AI Healthcare Diagnostics',
      href: '/micro-saas/ai-healthcare-diagnostics',
      icon: Stethoscope,
      description: 'Medical image analysis and diagnostic support',
      price: 'Starting at $499/month',
      category: 'Healthcare'
    },
    {
      name: 'AI Supply Chain Optimizer',
      href: '/micro-saas/ai-supply-chain-optimizer',
      icon: Package,
      description: 'Inventory optimization and logistics management',
      price: 'Starting at $399/month',
      category: 'Logistics'
    },
    {
      name: 'Zion Analytics Pro',
      href: '/micro-saas/analytics-dashboard',
      icon: BarChart,
      description: 'Business intelligence platform with AI insights',
      price: 'Starting at $199/month',
      category: 'Analytics'
    },
    {
      name: 'Zion Chat AI',
      href: '/micro-saas/support-bot',
      icon: Brain,
      description: 'AI customer support and chatbot solutions',
      price: 'Starting at $149/month',
      category: 'Customer Service'
    },
    {
      name: 'Zion Security Shield',
      href: '/micro-saas/advanced-security-suite',
      icon: Shield,
      description: 'Cybersecurity monitoring and threat detection',
      price: 'Starting at $299/month',
      category: 'Security'
    },
    {
      name: 'Zion Cloud Vault',
      href: '/micro-saas/cloud-backup',
      icon: Cloud,
      description: 'Cloud backup and disaster recovery solutions',
      price: 'Starting at $99/month',
      category: 'Cloud'
    },
    {
      name: 'Zion Content Studio',
      href: '/micro-saas/content-generator',
      icon: FileText,
      description: 'AI content creation and management platform',
      price: 'Starting at $199/month',
      category: 'Content'
    },
    {
      name: 'Zion CRM Intelligence',
      href: '/micro-saas/ai-crm-assistant',
      icon: Users,
      description: 'AI-enhanced customer relationship management',
      price: 'Starting at $249/month',
      category: 'CRM'
    },
    {
      name: 'Zion Data Sync',
      href: '/micro-saas/data-integration',
      icon: Code,
      description: 'Data integration and synchronization platform',
      price: 'Starting at $179/month',
      category: 'Data'
    },
    {
      name: 'Zion Lead Magnet',
      href: '/micro-saas/lead-scoring',
      icon: Target,
      description: 'Lead generation and scoring platform',
      price: 'Starting at $149/month',
      category: 'Marketing'
    }
  ];

  const categories = ['All', 'Legal', 'Real Estate', 'Healthcare', 'Logistics', 'Analytics', 'Customer Service', 'Security', 'Cloud', 'Content', 'CRM', 'Data', 'Marketing'];

  return (
    <>
      <Helmet>
        <title>Micro SAAS Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive micro SAAS solutions by Zion Tech Group. AI-powered tools for legal, healthcare, real estate, and more. Starting at $99/month." />
        <meta name="keywords" content="micro-saas, AI solutions, business tools, legal AI, healthcare AI, real estate AI, supply chain AI" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Micro SAAS Solutions
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Powerful AI-powered micro SAAS tools designed to transform your business operations and drive growth
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Link 
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center group"
                >
                  Explore All Solutions
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  to="/pricing"
                  className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-105"
                >
                  View Pricing
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Micro SAAS Solutions</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from our comprehensive suite of AI-powered business tools
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {microSaasServices.map((service, index) => (
                <Link
                  key={index}
                  to={service.href}
                  className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-cyan-400/40 transition-all duration-300 group hover:transform hover:scale-105"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="mb-2">
                    <span className="inline-block px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs font-semibold rounded-full">
                      {service.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    {service.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="text-cyan-400 font-semibold text-lg">
                      {service.price}
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gradient-to-r from-slate-800/30 to-slate-900/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Our Micro SAAS Solutions</span>?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center group">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-10 h-10 text-cyan-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Instant Setup</h3>
                <p className="text-gray-300 leading-relaxed">
                  Get up and running in minutes with our intuitive setup process and comprehensive documentation.
                </p>
              </div>

              <div className="text-center group">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-10 h-10 text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Enterprise Security</h3>
                <p className="text-gray-300 leading-relaxed">
                  Bank-level security with end-to-end encryption, compliance certifications, and regular security audits.
                </p>
              </div>

              <div className="text-center group">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                  <DollarSign className="w-10 h-10 text-green-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Cost Effective</h3>
                <p className="text-gray-300 leading-relaxed">
                  Affordable pricing starting from $99/month with no hidden fees and flexible payment options.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-cyan-900/50 to-purple-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-12 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5"></div>
              <div className="relative z-10">
                <h2 className="text-4xl font-bold text-white mb-6">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Join thousands of businesses already using our micro SAAS solutions to streamline operations and drive growth.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/contact"
                    className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
                  >
                    Start Free Trial
                  </Link>
                  <Link 
                    to="/demo"
                    className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-105"
                  >
                    Schedule Demo
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-gradient-to-r from-slate-800/30 to-slate-900/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Get in Touch</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Ready to revolutionize your business with our micro SAAS solutions? Contact us today for a personalized consultation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Call Us</h3>
                <p className="text-gray-300">+1 (302) 464-0950</p>
              </div>

              <div className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Email Us</h3>
                <p className="text-gray-300">kleber@ziontechgroup.com</p>
              </div>

              <div className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Visit Us</h3>
                <p className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MicroSaasPage;