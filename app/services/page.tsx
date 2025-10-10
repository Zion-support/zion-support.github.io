'use client';
import React, { useState, useCallback, memo } from 'react';
import { Helmet } from 'react-helmet-async';
import { Brain, Cloud, Code, Zap, Shield, Target, Users, Globe, Clock, DollarSign, CheckCircle, ArrowRight, Phone, MessageSquare, Star, TrendingUp, BarChart, Settings, Database, Lock, Eye, Activity } from 'lucide-react';

const ServicesPage: React.FC = memo(() => {
  const [isLoaded, setIsLoaded] = useState(false);

  React.useEffect(() => {
    setIsLoaded(true);
  }, []);

  const serviceCategories = [
    {
      title: 'AI Services',
      icon: Brain,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/20',
      services: [
        {
          name: 'AI Sentiment Analyzer',
          description: 'Analyze customer sentiment with 95% accuracy',
          price: '$99/month',
          features: ['Real-time analysis', 'Multi-channel support', 'Custom AI models'],
          link: '/ai-sentiment-analyzer'
        },
        {
          name: 'AI Video Generator',
          description: 'Create professional videos from text prompts',
          price: '$49/month',
          features: ['4K quality', 'Custom branding', 'Multiple formats'],
          link: '/ai-video-generator'
        },
        {
          name: 'AI Code Assistant',
          description: 'Boost coding productivity with AI assistance',
          price: '$29/month',
          features: ['50+ languages', 'Smart debugging', 'Code generation'],
          link: '/ai-code-assistant'
        },
        {
          name: 'AI Social Media Scheduler',
          description: 'Streamline social media management',
          price: '$19/month',
          features: ['6 platforms', 'AI content generation', 'Analytics'],
          link: '/ai-social-media-scheduler'
        },
        {
          name: 'AI Cybersecurity Monitor',
          description: 'Advanced threat detection and response',
          price: '$299/month',
          features: ['99.9% accuracy', 'Real-time monitoring', 'Automated response'],
          link: '/ai-cybersecurity-monitor'
        },
        {
          name: 'AI Expense Tracker',
          description: 'Smart expense management with receipt scanning',
          price: '$9/month',
          features: ['OCR scanning', 'AI categorization', 'Budget tracking'],
          link: '/ai-expense-tracker'
        }
      ]
    },
    {
      title: 'IT Services',
      icon: Cloud,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/20',
      services: [
        {
          name: 'IT Infrastructure',
          description: 'Enterprise-grade infrastructure solutions',
          price: '$999/month',
          features: ['99.9% uptime', '24/7 support', 'Scalable solutions'],
          link: '/it-infrastructure'
        },
        {
          name: 'Cloud Migration',
          description: 'Seamless cloud migration services',
          price: '$2,499/project',
          features: ['Zero downtime', 'Data security', 'Cost optimization'],
          link: '/cloud-migration'
        },
        {
          name: 'Cybersecurity Audit',
          description: 'Comprehensive security assessment',
          price: '$1,999/audit',
          features: ['Vulnerability scanning', 'Compliance check', 'Action plan'],
          link: '/cybersecurity-audit'
        }
      ]
    },
    {
      title: 'Micro SAAS Solutions',
      icon: Code,
      color: 'text-green-400',
      bgColor: 'bg-green-500/20',
      services: [
        {
          name: 'Micro SAAS Platform',
          description: '50+ ready-to-use business applications',
          price: '$79/month',
          features: ['50+ apps', 'Custom branding', 'API access'],
          link: '/micro-saas'
        },
        {
          name: 'Developer Tools',
          description: 'Essential tools for developers',
          price: '$49/month',
          features: ['Code generators', 'Testing tools', 'Documentation'],
          link: '/developer-tools'
        },
        {
          name: 'Business Apps',
          description: 'Custom business applications',
          price: '$199/month',
          features: ['Custom development', 'Integration', 'Support'],
          link: '/business-apps'
        }
      ]
    },
    {
      title: 'Specialized Solutions',
      icon: Zap,
      color: 'text-orange-400',
      bgColor: 'bg-orange-500/20',
      services: [
        {
          name: 'Quantum Computing',
          description: 'Next-generation quantum solutions',
          price: 'Custom pricing',
          features: ['Quantum algorithms', 'Optimization', 'Research support'],
          link: '/quantum-computing'
        },
        {
          name: 'Autonomous Systems',
          description: 'AI-powered autonomous solutions',
          price: '$4,999/month',
          features: ['Machine learning', 'Real-time processing', 'Safety systems'],
          link: '/autonomous-systems'
        },
        {
          name: 'Blockchain & Web3',
          description: 'Decentralized application development',
          price: '$3,999/month',
          features: ['Smart contracts', 'DeFi solutions', 'NFT platforms'],
          link: '/blockchain-web3'
        }
      ]
    }
  ];

  const stats = [
    { metric: '500+', label: 'Active Clients', color: 'text-purple-400' },
    { metric: '99.9%', label: 'Uptime Guarantee', color: 'text-blue-400' },
    { metric: '24/7', label: 'Support Available', color: 'text-green-400' },
    { metric: '50+', label: 'AI Services', color: 'text-orange-400' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Our Services - AI & IT Solutions | Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI and IT services including sentiment analysis, video generation, code assistance, cybersecurity, and more. Transform your business today." />
        <meta name="keywords" content="AI services, IT solutions, micro SAAS, cybersecurity, cloud services, business automation" />
        <meta property="og:title" content="Our Services - AI & IT Solutions" />
        <meta property="og:description" content="Comprehensive AI and IT services to transform your business." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/services" />
      </Helmet>

      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-purple-600/20 text-purple-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Settings className="w-4 h-4" />
            <span>Comprehensive Solutions</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Our Services
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your business with our comprehensive suite of AI and IT solutions. 
            From cutting-edge AI services to robust infrastructure, we have everything you need to succeed.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call: (302) 464-0950
            </a>
            <a
              href="/contact"
              className="border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300"
            >
              Get Free Consultation
            </a>
          </div>
        </section>

        {/* Stats */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="bg-slate-800/50 p-6 rounded-lg border border-purple-500/20 text-center">
                <div className={`text-3xl font-bold ${stat.color} mb-2`}>{stat.metric}</div>
                <div className="text-white font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Service Categories */}
        {serviceCategories.map((category, categoryIndex) => (
          <section key={categoryIndex} className="mb-16">
            <div className="flex items-center space-x-3 mb-8">
              <div className={`p-3 rounded-lg ${category.bgColor}`}>
                <category.icon className={`w-6 h-6 ${category.color}`} />
              </div>
              <h2 className="text-3xl font-bold text-white">{category.title}</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.services.map((service, serviceIndex) => (
                <div key={serviceIndex} className="bg-slate-800/30 p-6 rounded-lg border border-gray-700 hover:border-purple-500/50 transition-all duration-300">
                  <h3 className="text-xl font-semibold text-white mb-3">{service.name}</h3>
                  <p className="text-gray-400 mb-4">{service.description}</p>
                  
                  <div className="mb-4">
                    <div className="text-2xl font-bold text-purple-400 mb-2">{service.price}</div>
                    <div className="text-sm text-gray-500">Starting price</div>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <a
                    href={service.link}
                    className="w-full block text-center bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
                  >
                    Learn More
                  </a>
                </div>
              ))}
            </div>
          </section>
        ))}

        {/* CTA Section */}
        <section className="text-center bg-gradient-to-r from-purple-600/20 to-blue-600/20 p-12 rounded-lg border border-purple-500/30">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Choose from our comprehensive suite of AI and IT services. 
            Our experts are ready to help you find the perfect solution for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call: (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
            >
              <MessageSquare className="w-5 h-5 mr-2" />
              Email Us
            </a>
          </div>
        </section>
      </div>
    </div>
  );
});

ServicesPage.displayName = 'ServicesPage';

export default ServicesPage;