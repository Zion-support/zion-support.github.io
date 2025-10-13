import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Zap, ArrowRight, CheckCircle, Star, Cloud, BarChart3, Users, Clock, DollarSign, Shield, Code, Database, Mail, Smartphone, Globe, Cpu, FileText, TrendingUp, Heart, Receipt, Network, Monitor, Package } from 'lucide-react';

const MicroSaasPage: React.FC = () => {
  const microSaasProducts = [
    {
      id: 1,
      name: 'Zion Analytics Pro',
      description: 'Advanced business intelligence and analytics platform with AI-powered insights.',
      icon: BarChart3,
      features: ['Real-time Analytics', 'AI Insights', 'Custom Dashboards', 'Data Visualization'],
      price: '$99/month',
      href: '/zion-analytics-pro',
      popular: true
    },
    {
      id: 2,
      name: 'Zion Security Shield',
      description: 'Comprehensive cybersecurity solution for small to medium businesses.',
      icon: Shield,
      features: ['Threat Detection', 'Firewall Management', 'Security Monitoring', 'Incident Response'],
      price: '$149/month',
      href: '/zion-security-shield'
    },
    {
      id: 3,
      name: 'Zion Cloud Vault',
      description: 'Secure cloud storage and file management with advanced encryption.',
      icon: Cloud,
      features: ['Secure Storage', 'File Encryption', 'Collaboration Tools', 'Version Control'],
      price: '$79/month',
      href: '/zion-cloud-vault'
    },
    {
      id: 4,
      name: 'Zion Content Studio',
      description: 'AI-powered content creation and management platform.',
      icon: FileText,
      features: ['AI Writing', 'Content Planning', 'SEO Optimization', 'Multi-format Support'],
      price: '$129/month',
      href: '/zion-content-studio'
    },
    {
      id: 5,
      name: 'Zion AI Video Generator',
      description: 'Create professional videos with AI-powered automation.',
      icon: Monitor,
      features: ['AI Video Creation', 'Template Library', 'Voice Synthesis', 'Auto-editing'],
      price: '$199/month',
      href: '/zion-ai-video-generator'
    },
    {
      id: 6,
      name: 'Zion AI Invoice Generator',
      description: 'Automated invoice generation and financial management.',
      icon: Receipt,
      features: ['Auto Invoicing', 'Payment Tracking', 'Tax Calculations', 'Financial Reports'],
      price: '$89/month',
      href: '/zion-ai-invoice-generator'
    }
  ];

  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast Setup',
      description: 'Get up and running in minutes with our intuitive setup process.'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with end-to-end encryption and compliance.'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Built-in collaboration tools for seamless team coordination.'
    },
    {
      icon: BarChart3,
      title: 'Advanced Analytics',
      description: 'Comprehensive insights and reporting for data-driven decisions.'
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock support from our expert technical team.'
    },
    {
      icon: DollarSign,
      title: 'Cost Effective',
      description: 'Affordable pricing with no hidden fees or long-term contracts.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Micro SAAS Solutions - Innovative Software as a Service | Zion Tech Group</title>
        <meta name="description" content="Discover our comprehensive suite of micro SAAS solutions designed to streamline business operations, enhance productivity, and drive growth with cutting-edge technology." />
        <meta name="keywords" content="micro SAAS, software as a service, business automation, productivity tools, cloud software, business solutions, SaaS platform" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              Micro SAAS Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Powerful, focused software solutions designed to solve specific business challenges. 
              Our micro SAAS products are built for modern businesses that need efficiency, scalability, and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/demo"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-bold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 group"
              >
                <span>Start Free Trial</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-bold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300"
              >
                <span>Contact Sales</span>
              </Link>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Products Grid */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Our Micro SAAS Products
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaasProducts.map((product) => (
                <div key={product.id} className={`bg-white/10 backdrop-blur-lg rounded-xl p-6 border transition-all duration-300 hover:scale-105 ${
                  product.popular 
                    ? 'border-cyan-400/50 ring-2 ring-cyan-400/20' 
                    : 'border-white/20 hover:border-cyan-400/50'
                }`}>
                  {product.popular && (
                    <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-cyan-500/20 text-cyan-300 mb-4">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </div>
                  )}
                  
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mr-4">
                      <product.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{product.name}</h3>
                      <p className="text-2xl font-bold text-cyan-400">{product.price}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4">{product.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to={product.href}
                    className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold py-3 px-4 rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 group"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-lg rounded-xl p-8 border border-cyan-400/30 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join thousands of businesses already using our micro SAAS solutions to streamline operations and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/demo"
                className="inline-flex items-center px-8 py-4 bg-white text-slate-900 font-bold rounded-lg hover:bg-gray-100 transition-all duration-300 group"
              >
                <span>Start Free Trial</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 border border-white text-white font-bold rounded-lg hover:bg-white hover:text-slate-900 transition-all duration-300"
              >
                <span>Schedule Demo</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MicroSaasPage;