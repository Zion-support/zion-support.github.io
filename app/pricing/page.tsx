'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Check, Star, Brain, Cloud, Shield, Code, Users, Cpu, Globe, FileText, MessageCircle, Eye, Mic, BarChart, ArrowRight, Phone } from 'lucide-react';

const PricingPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('ai');

  const aiServices = [
    {
      name: 'AI Analytics Dashboard',
      description: 'Advanced business intelligence with real-time analytics and predictive insights',
      features: ['Real-time dashboards', 'Predictive analytics', 'Custom reports', 'API integration', '24/7 support'],
      price: '$299',
      period: '/month',
      popular: true,
      icon: Brain
    },
    {
      name: 'AI Content Generation Pro',
      description: 'Professional content creation with AI-powered writing and editing tools',
      features: ['Blog posts', 'Social media content', 'Email campaigns', 'SEO optimization', 'Multi-language support'],
      price: '$199',
      period: '/month',
      popular: false,
      icon: FileText
    },
    {
      name: 'AI Customer Support Pro',
      description: 'Enterprise-grade AI chatbot with advanced natural language processing',
      features: ['24/7 chatbot', 'Multi-channel support', 'Sentiment analysis', 'Custom training', 'Analytics dashboard'],
      price: '$399',
      period: '/month',
      popular: true,
      icon: MessageCircle
    },
    {
      name: 'AI Video Editor Pro',
      description: 'Professional video editing with AI-powered automation and effects',
      features: ['Auto-editing', 'Smart cuts', 'Color correction', 'Audio enhancement', 'Export options'],
      price: '$149',
      period: '/month',
      popular: false,
      icon: Eye
    },
    {
      name: 'AI Translation Service',
      description: 'Real-time language translation with 100+ language support',
      features: ['100+ languages', 'Real-time translation', 'Document translation', 'API access', 'Custom models'],
      price: '$99',
      period: '/month',
      popular: false,
      icon: Globe
    },
    {
      name: 'AI Voice Assistant Pro',
      description: 'Enterprise voice solutions with custom voice models and integrations',
      features: ['Custom voice models', 'Voice commands', 'Integration APIs', 'Analytics', 'Multi-platform'],
      price: '$249',
      period: '/month',
      popular: false,
      icon: Mic
    }
  ];

  const itServices = [
    {
      name: 'Cloud Infrastructure Management',
      description: 'Complete cloud infrastructure setup and management for AWS, Azure, and GCP',
      features: ['Multi-cloud setup', 'Auto-scaling', 'Security monitoring', 'Cost optimization', '24/7 support'],
      price: '$1,999',
      period: '/month',
      popular: true,
      icon: Cloud
    },
    {
      name: 'Cybersecurity Solutions',
      description: 'Comprehensive security solutions with threat detection and prevention',
      features: ['Threat monitoring', 'Vulnerability scanning', 'Incident response', 'Compliance reporting', 'Security training'],
      price: '$2,499',
      period: '/month',
      popular: true,
      icon: Shield
    },
    {
      name: 'Web Development',
      description: 'Modern web applications with responsive design and advanced features',
      features: ['Responsive design', 'SEO optimization', 'Performance tuning', 'Security features', 'Maintenance'],
      price: '$3,999',
      period: '/project',
      popular: false,
      icon: Code
    },
    {
      name: 'Mobile Development',
      description: 'Native and cross-platform mobile applications for iOS and Android',
      features: ['Native development', 'Cross-platform', 'App store optimization', 'Push notifications', 'Analytics'],
      price: '$4,999',
      period: '/project',
      popular: false,
      icon: Users
    },
    {
      name: 'API Development',
      description: 'RESTful and GraphQL APIs with comprehensive documentation and testing',
      features: ['RESTful APIs', 'GraphQL', 'API documentation', 'Testing suite', 'Rate limiting'],
      price: '$1,499',
      period: '/month',
      popular: false,
      icon: Code
    },
    {
      name: 'DevOps & CI/CD',
      description: 'Automated deployment pipelines with monitoring and scaling capabilities',
      features: ['CI/CD pipelines', 'Container orchestration', 'Monitoring', 'Auto-scaling', 'Backup solutions'],
      price: '$1,799',
      period: '/month',
      popular: false,
      icon: Cpu
    }
  ];

  const microSaasServices = [
    {
      name: 'Zion Analytics Pro',
      description: 'Business intelligence platform with advanced analytics and reporting',
      features: ['Real-time dashboards', 'Custom reports', 'Data visualization', 'API integration', 'Team collaboration'],
      price: '$49',
      period: '/month',
      popular: true,
      icon: BarChart
    },
    {
      name: 'Zion Chat AI',
      description: 'AI-powered customer support chatbot with natural language processing',
      features: ['24/7 chatbot', 'Multi-channel', 'Custom training', 'Analytics', 'Integration'],
      price: '$29',
      period: '/month',
      popular: false,
      icon: MessageCircle
    },
    {
      name: 'Zion Security Shield',
      description: 'Cybersecurity monitoring and threat detection for small businesses',
      features: ['Threat monitoring', 'Vulnerability scanning', 'Incident alerts', 'Security reports', 'Compliance'],
      price: '$79',
      period: '/month',
      popular: false,
      icon: Shield
    },
    {
      name: 'Zion Cloud Vault',
      description: 'Cloud backup and recovery solution with automated data protection',
      features: ['Automated backups', 'Data recovery', 'Version control', 'Encryption', 'Multi-cloud'],
      price: '$39',
      period: '/month',
      popular: false,
      icon: Cloud
    },
    {
      name: 'Zion Content Studio',
      description: 'AI-powered content creation platform for blogs, social media, and marketing',
      features: ['Content generation', 'SEO optimization', 'Social media', 'Email campaigns', 'Analytics'],
      price: '$59',
      period: '/month',
      popular: true,
      icon: FileText
    },
    {
      name: 'Zion CRM Intelligence',
      description: 'AI-enhanced CRM with predictive analytics and automation',
      features: ['Lead scoring', 'Predictive analytics', 'Automation', 'Integration', 'Reporting'],
      price: '$69',
      period: '/month',
      popular: false,
      icon: Users
    }
  ];

  const getCurrentServices = () => {
    switch (activeTab) {
      case 'ai': return aiServices;
      case 'it': return itServices;
      case 'microsaas': return microSaasServices;
      default: return aiServices;
    }
  };

  const getTabTitle = () => {
    switch (activeTab) {
      case 'ai': return 'AI Services';
      case 'it': return 'IT Services';
      case 'microsaas': return 'Micro SAAS Solutions';
      default: return 'AI Services';
    }
  };

  return (
    <>
      <Helmet>
        <title>Pricing - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Transparent pricing for AI and IT solutions. Professional services with competitive rates and flexible plans." />
        <meta name="keywords" content="pricing, AI solutions, IT services, micro saas, business intelligence, cloud computing" />
        <meta property="og:title" content="Pricing - Zion Tech Group | AI & IT Solutions" />
        <meta property="og:description" content="Transparent pricing for AI and IT solutions. Professional services with competitive rates and flexible plans." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/pricing" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Pricing - Zion Tech Group",
            "description": "Transparent pricing for AI and IT solutions",
            "url": "https://ziontechgroup.com/pricing",
            "mainEntity": {
              "@type": "Organization",
              "name": "Zion Tech Group",
              "url": "https://ziontechgroup.com",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-302-464-0950",
                "contactType": "customer service",
                "email": "kleber@ziontechgroup.com"
              }
            }
          })}
        </script>
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Transparent Pricing
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Professional AI and IT solutions with competitive pricing and flexible plans. 
              Choose the perfect solution for your business needs.
            </p>
            
            {/* Contact Info */}
            <div className="bg-gradient-to-r from-cyan-900/50 to-purple-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 max-w-2xl mx-auto">
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8">
                <div className="flex items-center text-cyan-400">
                  <Users className="w-5 h-5 mr-2" />
                  <span className="font-semibold">Free Consultation</span>
                </div>
                <div className="flex items-center text-purple-400">
                  <Phone className="w-5 h-5 mr-2" />
                  <span className="font-semibold">+1 302 464 0950</span>
                </div>
                <div className="flex items-center text-green-400">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  <span className="font-semibold">kleber@ziontechgroup.com</span>
                </div>
              </div>
            </div>
          </div>

          {/* Service Tabs */}
          <div className="flex flex-wrap justify-center mb-12">
            <button
              onClick={() => setActiveTab('ai')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 m-2 ${
                activeTab === 'ai'
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg shadow-cyan-500/25'
                  : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 border border-gray-600/50'
              }`}
            >
              <Brain className="w-5 h-5 inline mr-2" />
              AI Services
            </button>
            <button
              onClick={() => setActiveTab('it')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 m-2 ${
                activeTab === 'it'
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg shadow-cyan-500/25'
                  : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 border border-gray-600/50'
              }`}
            >
              <Cloud className="w-5 h-5 inline mr-2" />
              IT Services
            </button>
            <button
              onClick={() => setActiveTab('microsaas')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 m-2 ${
                activeTab === 'microsaas'
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg shadow-cyan-500/25'
                  : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 border border-gray-600/50'
              }`}
            >
              <Cpu className="w-5 h-5 inline mr-2" />
              Micro SAAS
            </button>
          </div>

          {/* Services Grid */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              {getTabTitle()}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {getCurrentServices().map((service, index) => (
                <div
                  key={index}
                  className={`relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border rounded-xl p-8 hover:border-cyan-400/40 transition-all duration-300 group hover:transform hover:scale-105 ${
                    service.popular ? 'border-cyan-500/50 shadow-lg shadow-cyan-500/25' : 'border-gray-700/50'
                  }`}
                >
                  {service.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                        <Star className="w-4 h-4 mr-1" />
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ${
                      service.popular 
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-500' 
                        : 'bg-gradient-to-r from-gray-600 to-gray-700'
                    }`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{service.name}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
                  </div>

                  <div className="text-center mb-6">
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{service.price}</span>
                      <span className="text-gray-400 ml-2">{service.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    service.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:from-cyan-600 hover:to-purple-600 shadow-lg shadow-cyan-500/25'
                      : 'bg-slate-700/50 text-gray-300 hover:bg-slate-600/50 border border-gray-600/50'
                  }`}>
                    Get Started
                    <ArrowRight className="w-4 h-4 inline ml-2" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Enterprise Solutions */}
          <div className="bg-gradient-to-r from-cyan-900/50 to-purple-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Need a Custom Solution?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              We offer enterprise-grade solutions tailored to your specific needs. 
              Contact us for a personalized quote and consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25">
                Contact Sales
              </button>
              <button className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-105">
                Schedule Demo
              </button>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Frequently Asked Questions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-slate-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">What's included in the pricing?</h3>
                <p className="text-gray-300">
                  All our plans include setup, configuration, training, and ongoing support. 
                  Enterprise plans also include dedicated account management and priority support.
                </p>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">Can I change my plan later?</h3>
                <p className="text-gray-300">
                  Yes, you can upgrade or downgrade your plan at any time. 
                  Changes take effect at the next billing cycle.
                </p>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">Do you offer custom pricing?</h3>
                <p className="text-gray-300">
                  Yes, we offer custom pricing for enterprise clients with specific requirements. 
                  Contact our sales team for a personalized quote.
                </p>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">What payment methods do you accept?</h3>
                <p className="text-gray-300">
                  We accept all major credit cards, bank transfers, and can arrange custom payment terms 
                  for enterprise clients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PricingPage;