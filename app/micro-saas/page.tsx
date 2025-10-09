'use client';

import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import { 
  Zap, 
  Brain, 
  Cloud, 
  Code, 
  BarChart, 
  Shield, 
  Users, 
  Globe,
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp,
  Clock,
  DollarSign,
  Target,
  Settings,
  Database,
  Smartphone,
  ShoppingCart,
  Lock,
  Workflow,
  Cpu,
  Sparkles,
  Rocket,
  Award,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

const MicroSAASPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Real micro SAAS services with market pricing
  const microSAASServices = [
    {
      category: 'AI-Powered Tools',
      services: [
        {
          name: 'AI Content Generator Pro',
          description: 'Advanced AI content creation for blogs, social media, emails, and marketing materials with 50+ templates.',
          features: ['GPT-4 Integration', '50+ Templates', 'Multi-language Support', 'SEO Optimization', 'Brand Voice Training'],
          price: '$99/month',
          originalPrice: '$199/month',
          savings: '50% OFF',
          icon: Brain,
          color: 'from-purple-500 to-pink-500',
          popular: true,
          link: 'https://ziontechgroup.com/ai-content-generator'
        },
        {
          name: 'Smart Analytics Dashboard',
          description: 'Real-time business analytics with AI-powered insights and predictive forecasting.',
          features: ['Real-time Analytics', 'Predictive Forecasting', 'Custom Dashboards', 'API Integration', 'Automated Reports'],
          price: '$149/month',
          originalPrice: '$299/month',
          savings: '50% OFF',
          icon: BarChart,
          color: 'from-blue-500 to-cyan-500',
          popular: false,
          link: 'https://ziontechgroup.com/smart-analytics'
        },
        {
          name: 'AI Customer Support Bot',
          description: 'Intelligent chatbot with natural language processing for 24/7 customer support.',
          features: ['24/7 Support', 'Multi-language', 'CRM Integration', 'Sentiment Analysis', 'Live Handoff'],
          price: '$79/month',
          originalPrice: '$159/month',
          savings: '50% OFF',
          icon: Users,
          color: 'from-green-500 to-emerald-500',
          popular: true,
          link: 'https://ziontechgroup.com/ai-support-bot'
        },
        {
          name: 'AI Email Marketing Suite',
          description: 'Automated email campaigns with AI-powered personalization and optimization.',
          features: ['AI Personalization', 'A/B Testing', 'Automated Sequences', 'Analytics', 'Template Library'],
          price: '$129/month',
          originalPrice: '$259/month',
          savings: '50% OFF',
          icon: Mail,
          color: 'from-orange-500 to-red-500',
          popular: false,
          link: 'https://ziontechgroup.com/ai-email-marketing'
        }
      ]
    },
    {
      category: 'Business Automation',
      services: [
        {
          name: 'Workflow Automation Pro',
          description: 'Automate repetitive tasks with visual workflow builder and 100+ integrations.',
          features: ['Visual Builder', '100+ Integrations', 'Custom Triggers', 'Error Handling', 'Analytics'],
          price: '$199/month',
          originalPrice: '$399/month',
          savings: '50% OFF',
          icon: Workflow,
          color: 'from-indigo-500 to-purple-500',
          popular: true,
          link: 'https://ziontechgroup.com/workflow-automation'
        },
        {
          name: 'AI Sales Assistant',
          description: 'Intelligent sales automation with lead scoring, follow-up reminders, and CRM integration.',
          features: ['Lead Scoring', 'Auto Follow-ups', 'CRM Integration', 'Sales Forecasting', 'Performance Analytics'],
          price: '$179/month',
          originalPrice: '$359/month',
          savings: '50% OFF',
          icon: Target,
          color: 'from-yellow-500 to-orange-500',
          popular: false,
          link: 'https://ziontechgroup.com/ai-sales-assistant'
        },
        {
          name: 'Smart Inventory Manager',
          description: 'AI-powered inventory management with demand forecasting and automated reordering.',
          features: ['Demand Forecasting', 'Auto Reordering', 'Multi-location', 'Barcode Scanning', 'Analytics'],
          price: '$159/month',
          originalPrice: '$319/month',
          savings: '50% OFF',
          icon: Database,
          color: 'from-teal-500 to-blue-500',
          popular: true,
          link: 'https://ziontechgroup.com/smart-inventory'
        },
        {
          name: 'AI HR Management Suite',
          description: 'Complete HR solution with AI-powered recruitment, onboarding, and performance management.',
          features: ['AI Recruitment', 'Automated Onboarding', 'Performance Tracking', 'Compliance', 'Analytics'],
          price: '$229/month',
          originalPrice: '$459/month',
          savings: '50% OFF',
          icon: Users,
          color: 'from-pink-500 to-rose-500',
          popular: false,
          link: 'https://ziontechgroup.com/ai-hr-suite'
        }
      ]
    },
    {
      category: 'E-commerce Solutions',
      services: [
        {
          name: 'AI E-commerce Platform',
          description: 'Complete e-commerce solution with AI-powered recommendations and automated marketing.',
          features: ['AI Recommendations', 'Automated Marketing', 'Inventory Management', 'Payment Processing', 'Analytics'],
          price: '$299/month',
          originalPrice: '$599/month',
          savings: '50% OFF',
          icon: ShoppingCart,
          color: 'from-emerald-500 to-green-500',
          popular: true,
          link: 'https://ziontechgroup.com/ai-ecommerce'
        },
        {
          name: 'Smart Pricing Optimizer',
          description: 'AI-powered dynamic pricing optimization based on market conditions and competitor analysis.',
          features: ['Dynamic Pricing', 'Competitor Analysis', 'Market Trends', 'Profit Optimization', 'A/B Testing'],
          price: '$199/month',
          originalPrice: '$399/month',
          savings: '50% OFF',
          icon: TrendingUp,
          color: 'from-amber-500 to-yellow-500',
          popular: false,
          link: 'https://ziontechgroup.com/smart-pricing'
        },
        {
          name: 'AI Product Catalog Manager',
          description: 'Automated product catalog management with AI-powered categorization and SEO optimization.',
          features: ['Auto Categorization', 'SEO Optimization', 'Bulk Import', 'Image Processing', 'Analytics'],
          price: '$149/month',
          originalPrice: '$299/month',
          savings: '50% OFF',
          icon: Database,
          color: 'from-violet-500 to-purple-500',
          popular: true,
          link: 'https://ziontechgroup.com/ai-catalog-manager'
        }
      ]
    },
    {
      category: 'Security & Compliance',
      services: [
        {
          name: 'AI Security Monitor',
          description: 'Advanced security monitoring with AI-powered threat detection and automated response.',
          features: ['Threat Detection', 'Automated Response', 'Real-time Monitoring', 'Compliance Reports', 'Incident Management'],
          price: '$249/month',
          originalPrice: '$499/month',
          savings: '50% OFF',
          icon: Shield,
          color: 'from-red-500 to-pink-500',
          popular: true,
          link: 'https://ziontechgroup.com/ai-security-monitor'
        },
        {
          name: 'GDPR Compliance Suite',
          description: 'Automated GDPR compliance management with data mapping and consent management.',
          features: ['Data Mapping', 'Consent Management', 'Privacy Policies', 'Audit Trails', 'Compliance Reports'],
          price: '$179/month',
          originalPrice: '$359/month',
          savings: '50% OFF',
          icon: Lock,
          color: 'from-slate-500 to-gray-500',
          popular: false,
          link: 'https://ziontechgroup.com/gdpr-compliance'
        }
      ]
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: 'Instant Setup',
      description: 'Get started in minutes with our one-click deployment and pre-configured templates.'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with SOC 2 compliance and 99.9% uptime guarantee.'
    },
    {
      icon: Cloud,
      title: 'Scalable Infrastructure',
      description: 'Auto-scaling cloud infrastructure that grows with your business needs.'
    },
    {
      icon: Users,
      title: '24/7 Support',
      description: 'Round-the-clock expert support with average response time under 2 minutes.'
    }
  ];

  const stats = [
    { number: '50+', label: 'Ready-to-Use Apps' },
    { number: '10,000+', label: 'Happy Customers' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '24/7', label: 'Expert Support' }
  ];

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      <Navigation />
      
      <main className="relative z-10">
        {/* Hero Section */}
        <section className="relative py-20 px-4 text-center overflow-hidden">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 neon-text cyber-text">
              Micro SAAS Solutions
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium cyber-glow">
              50+ AI-Powered Business Applications
            </p>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
              Transform your business with our comprehensive suite of micro SAAS applications. 
              Each tool is designed to solve specific business challenges with AI-powered automation and intelligence.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {stats.map((stat, index) => (
                <div key={index} className="cyber-card hologram-card p-6 text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:+13024640950"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Call: (302) 464-0950</span>
              </a>
              <a 
                href="/contact"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300"
              >
                Get Free Demo
              </a>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
              Why Choose Our Micro SAAS Solutions?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="cyber-card hologram-card p-6 text-center">
                  <benefit.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services by Category */}
        {microSAASServices.map((category, categoryIndex) => (
          <section key={categoryIndex} className="py-16 px-4">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
                {category.category}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.services.map((service, serviceIndex) => (
                  <div key={serviceIndex} className="cyber-card hologram-card p-6 relative group hover:scale-105 transition-all duration-300">
                    {service.popular && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-1 rounded-full text-sm font-bold flex items-center space-x-1">
                          <Star className="w-4 h-4" />
                          <span>MOST POPULAR</span>
                        </div>
                      </div>
                    )}
                    
                    <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4 text-center group-hover:text-cyan-400 transition-colors">
                      {service.name}
                    </h3>
                    
                    <p className="text-gray-300 mb-6 text-center leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="space-y-3 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="text-center mb-6">
                      <div className="flex items-center justify-center space-x-2 mb-2">
                        <span className="text-3xl font-bold text-white">{service.price}</span>
                        <span className="text-lg text-gray-400 line-through">{service.originalPrice}</span>
                        <span className="bg-red-500 text-white px-2 py-1 rounded text-xs font-bold">{service.savings}</span>
                      </div>
                      <div className="text-sm text-gray-400">per month, billed annually</div>
                    </div>
                    
                    <div className="space-y-3">
                      <a
                        href={service.link}
                        className="block w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 rounded-lg font-semibold text-center hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center space-x-2"
                      >
                        <span>Start Free Trial</span>
                        <ArrowRight className="w-4 h-4" />
                      </a>
                      <a
                        href="/contact"
                        className="block w-full border border-cyan-400 text-cyan-400 py-3 rounded-lg font-semibold text-center hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300"
                      >
                        Contact Sales
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* Contact Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-gray-900/50 to-slate-900/50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 neon-text">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Get started with our micro SAAS solutions today and see the difference AI can make.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="cyber-card hologram-card p-6">
                <Phone className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Call Us</h3>
                <p className="text-gray-300 mb-4">Speak with our experts</p>
                <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300 font-semibold">
                  +1 302 464 0950
                </a>
              </div>
              
              <div className="cyber-card hologram-card p-6">
                <Mail className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Email Us</h3>
                <p className="text-gray-300 mb-4">Get detailed information</p>
                <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300 font-semibold">
                  kleber@ziontechgroup.com
                </a>
              </div>
              
              <div className="cyber-card hologram-card p-6">
                <MapPin className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Visit Us</h3>
                <p className="text-gray-300 mb-4">Our headquarters</p>
                <p className="text-cyan-400 font-semibold">
                  364 E Main St STE 1008<br />
                  Middletown, DE 19709
                </p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
              >
                Get Free Consultation
              </a>
              <a
                href="/contact"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300"
              >
                Schedule Demo
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default MicroSAASPage;