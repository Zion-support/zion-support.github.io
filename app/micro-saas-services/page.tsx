<<<<<<< HEAD
export default function MicroSaasServices() {
=======
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Zap, Cloud, Shield, Database, Users, BarChart, Settings, Mail, MessageSquare, FileText, Phone, MapPin, Sparkles, Cpu, Target, Lock, TrendingUp, Calendar, CheckSquare, MessageCircle, Heart, DollarSign, Box, Monitor, Link as LinkIcon, Server, Package, Mic, Workflow, Eye, ShoppingCart } from 'lucide-react';

const MicroSaasServicesPage: React.FC = () => {
  const saasProducts = [
    {
      icon: BarChart,
      title: 'Zion Analytics Pro',
      description: 'Advanced business intelligence and analytics platform',
      features: ['Real-time Dashboards', 'Custom Reports', 'Data Visualization', 'API Integration'],
      color: 'from-cyan-500 to-blue-500',
      url: '/zion-analytics-pro'
    },
    {
      icon: MessageSquare,
      title: 'Zion Chat AI',
      description: 'Intelligent chatbot solution for customer support',
      features: ['Natural Language Processing', 'Multi-channel Support', 'Analytics', 'Custom Training'],
      color: 'from-purple-500 to-pink-500',
      url: '/zion-chat-ai'
    },
    {
      icon: Shield,
      title: 'Zion Security Shield',
      description: 'Comprehensive cybersecurity monitoring and protection',
      features: ['Threat Detection', 'Vulnerability Scanning', 'Compliance Monitoring', 'Incident Response'],
      color: 'from-red-500 to-orange-500',
      url: '/zion-security-shield'
    },
    {
      icon: Cloud,
      title: 'Zion Cloud Vault',
      description: 'Secure cloud storage and file management solution',
      features: ['Encrypted Storage', 'File Sharing', 'Version Control', 'Access Management'],
      color: 'from-green-500 to-emerald-500',
      url: '/zion-cloud-vault'
    },
    {
      icon: FileText,
      title: 'Zion Content Studio',
      description: 'AI-powered content creation and management platform',
      features: ['Content Generation', 'SEO Optimization', 'Multi-format Support', 'Team Collaboration'],
      color: 'from-indigo-500 to-purple-500',
      url: '/zion-content-studio'
    },
    {
      icon: Users,
      title: 'Zion CRM Intelligence',
      description: 'Smart customer relationship management with AI insights',
      features: ['Lead Scoring', 'Automated Follow-ups', 'Sales Analytics', 'Integration Hub'],
      color: 'from-yellow-500 to-orange-500',
      url: '/zion-crm-intelligence'
    }
  ];

  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Optimized for speed and performance with sub-second response times'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with end-to-end encryption and compliance'
    },
    {
      icon: Settings,
      title: 'Easy Integration',
      description: 'Seamless integration with your existing tools and workflows'
    },
    {
      icon: Users,
      title: '24/7 Support',
      description: 'Round-the-clock support from our expert team'
    }
  ];

  const pricingTiers = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for small teams',
      features: ['Up to 5 users', 'Basic analytics', 'Email support', 'Standard integrations'],
      color: 'from-gray-500 to-gray-600'
    },
    {
      name: 'Professional',
      price: '$99',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: ['Up to 25 users', 'Advanced analytics', 'Priority support', 'Custom integrations'],
      color: 'from-cyan-500 to-blue-500',
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$299',
      period: '/month',
      description: 'For large organizations',
      features: ['Unlimited users', 'Custom analytics', 'Dedicated support', 'White-label options'],
      color: 'from-purple-500 to-pink-500'
    }
  ];

>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0e37
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
<<<<<<< HEAD
        <title>Micro SaaS Services - Zion Tech Group</title>
        <meta name="description" content="Advanced micro SaaS services by Zion Tech Group" />
    }
  ]
        <title>Micro SAAS Services - Zion Tech Group</title>
        <meta name="description" content="Discover our powerful micro SAAS applications designed to streamline your business operations with AI-powered tools." />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            Micro SaaS Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Advanced micro SaaS services for modern businesses
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <h2 className="text-2xl font-semibold text-white mb-4">Coming Soon</h2>
            <p className="text-gray-300">
              Our micro SaaS services page is under development. Please check back later for updates.
            </p>
          </div>
        </div>
=======
        <title>Micro SAAS Services - Zion Tech Group</title>
        <meta name="description" content="Powerful micro SAAS solutions for modern businesses. Streamline operations with our suite of AI-powered tools and applications." />
        <meta name="keywords" content="micro saas, business tools, productivity software, AI applications, cloud solutions" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Micro <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">SAAS Solutions</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Powerful, focused applications designed to solve specific business challenges. 
                Our micro SAAS suite provides everything you need to streamline operations and boost productivity.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
                >
                  Start Free Trial
                </Link>
                <Link 
                  to="/about"
                  className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300"
                >
                  View All Products
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">SAAS Products</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Specialized tools designed to address specific business needs with precision and efficiency
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {saasProducts.map((product, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-cyan-400/40 transition-all duration-300 group hover:transform hover:scale-105"
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${product.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <product.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    {product.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-400 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link 
                    to={product.url}
                    className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium group-hover:translate-x-1 inline-block"
                  >
                    Learn More →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gradient-to-r from-slate-800/30 to-slate-900/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">SAAS Solutions</span>?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Built with modern technology and designed for maximum efficiency and user experience
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center group">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-10 h-10 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Simple <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Pricing</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your needs. All plans include our core features and 24/7 support.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingTiers.map((tier, index) => (
                <div 
                  key={index}
                  className={`bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border rounded-xl p-8 relative ${
                    tier.popular 
                      ? 'border-cyan-400/50 ring-2 ring-cyan-400/20' 
                      : 'border-gray-700/50'
                  }`}
                >
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                    <p className="text-gray-400 mb-4">{tier.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{tier.price}</span>
                      <span className="text-gray-400 ml-1">{tier.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link 
                    to="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 transform hover:scale-105 ${
                      tier.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:from-cyan-600 hover:to-purple-600'
                        : 'border border-gray-600 text-gray-300 hover:border-cyan-400 hover:text-cyan-400'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              ))}
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
                  Start your free trial today and experience the power of our micro SAAS solutions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/contact"
                    className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
                  >
                    Start Free Trial
                  </Link>
                  <Link 
                    to="/about"
                    className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-105"
                  >
                    Schedule Demo
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0e37
      </div>
    </div>
  );
<<<<<<< HEAD
}
=======
};

export default MicroSaasServicesPage;
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0e37
