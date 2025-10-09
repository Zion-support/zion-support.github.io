import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Zap, Shield, Clock, Users, TrendingUp, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, Bot, Database, Network, Cloud, Code, Settings, Monitor, HardDrive, Wifi, Lock, ArrowRight } from 'lucide-react';

const ServicesPage: React.FC = () => {
  const serviceCategories = [
    {
      title: 'AI Services',
      description: 'Advanced artificial intelligence solutions including machine learning, NLP, computer vision, and AI automation.',
      icon: Brain,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
      hoverColor: 'hover:border-purple-300',
      services: [
        { name: 'AI Strategy & Consulting', price: '$3,500/month', features: ['AI readiness assessment', 'Technology evaluation', 'ROI analysis', 'Implementation roadmap'] },
        { name: 'Machine Learning Development', price: '$2,800/month', features: ['Custom ML models', 'Data preprocessing', 'Model deployment', 'Performance monitoring'] },
        { name: 'Natural Language Processing', price: '$2,200/month', features: ['Text analysis', 'Chatbots', 'Translation', 'Document processing'] },
        { name: 'Computer Vision', price: '$2,500/month', features: ['Image recognition', 'Object detection', 'OCR', 'Medical imaging'] },
        { name: 'AI Analytics & Insights', price: '$1,800/month', features: ['Predictive analytics', 'Anomaly detection', 'Customer analysis', 'Real-time dashboards'] },
        { name: 'AI Process Automation', price: '$2,200/month', features: ['Workflow automation', 'Document processing', 'Decision automation', 'Exception handling'] }
      ],
      link: '/ai-services'
    },
    {
      title: 'IT Services',
      description: 'Comprehensive IT solutions including cloud infrastructure, cybersecurity, software development, and system integration.',
      icon: Cloud,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      hoverColor: 'hover:border-blue-300',
      services: [
        { name: 'Cloud Infrastructure Management', price: '$2,500/month', features: ['Multi-cloud architecture', 'Auto-scaling', 'Disaster recovery', '24/7 monitoring'] },
        { name: 'DevOps & CI/CD Pipeline', price: '$1,800/month', features: ['Automated pipelines', 'Infrastructure automation', 'Deployment strategies', 'Performance optimization'] },
        { name: 'Cybersecurity Assessment', price: '$3,500/month', features: ['Vulnerability assessment', 'Penetration testing', 'Security architecture', 'Compliance auditing'] },
        { name: 'Custom Software Development', price: '$2,800/month', features: ['Web applications', 'Mobile apps', 'API development', 'Legacy modernization'] },
        { name: '24/7 IT Support', price: '$1,800/month', features: ['Technical support', 'Remote assistance', 'Troubleshooting', 'Asset management'] },
        { name: 'Data Analytics & BI', price: '$2,200/month', features: ['Data warehouse', 'ETL pipelines', 'Interactive dashboards', 'Predictive analytics'] }
      ],
      link: '/it-services'
    },
    {
      title: 'Micro SAAS Solutions',
      description: 'Affordable, powerful AI-driven tools for modern businesses with 50+ ready-to-use applications.',
      icon: Code,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      hoverColor: 'hover:border-green-300',
      services: [
        { name: 'AI Code Review Assistant', price: '$89/month', features: ['Automated code review', 'Security scanning', 'Performance optimization', 'Git integration'] },
        { name: 'AI SEO Optimizer Pro', price: '$199/month', features: ['Content optimization', 'Keyword research', 'Competitor analysis', 'Rank tracking'] },
        { name: 'AI Social Media Manager', price: '$129/month', features: ['Content generation', 'Optimal posting', 'Hashtag optimization', 'Engagement tracking'] },
        { name: 'AI Analytics Dashboard', price: '$199/month', features: ['Real-time visualization', 'Predictive analytics', 'Custom reports', 'Alert system'] },
        { name: 'AI Invoice Generator', price: '$79/month', features: ['Automated billing', 'Payment tracking', 'Financial analytics', 'Tax calculations'] },
        { name: 'AI Project Management', price: '$159/month', features: ['Task automation', 'Resource optimization', 'Risk prediction', 'Team collaboration'] }
      ],
      link: '/micro-saas'
    },
    {
      title: 'Specialized Solutions',
      description: 'Cutting-edge technologies including quantum computing, blockchain, IoT, and autonomous systems.',
      icon: Zap,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200',
      hoverColor: 'hover:border-orange-300',
      services: [
        { name: 'Quantum Computing', price: 'Custom Pricing', features: ['Quantum algorithms', 'Optimization problems', 'Cryptography', 'Research collaboration'] },
        { name: 'Blockchain & Web3', price: '$2,500/month', features: ['Smart contracts', 'DeFi protocols', 'NFT platforms', 'DApp development'] },
        { name: 'IoT & Edge Computing', price: '$1,800/month', features: ['Sensor networks', 'Edge analytics', 'Real-time processing', 'Device management'] },
        { name: 'Autonomous Systems', price: '$3,200/month', features: ['Self-managing systems', 'Predictive maintenance', 'Automated operations', 'Performance optimization'] },
        { name: 'Business Intelligence', price: '$1,500/month', features: ['Data visualization', 'KPI tracking', 'Trend analysis', 'Executive dashboards'] },
        { name: 'Robotics Solutions', price: '$2,800/month', features: ['Industrial automation', 'Service robots', 'AI integration', 'Maintenance systems'] }
      ],
      link: '/specialized-solutions'
    }
  ];

  const keyBenefits = [
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security and compliance for your critical data and infrastructure',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      icon: Zap,
      title: 'Rapid Deployment',
      description: 'Get your solutions up and running quickly with minimal disruption to your business',
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    {
      icon: Target,
      title: 'Cost-Effective',
      description: 'Save up to 50% compared to market rates while getting superior solutions',
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    },
    {
      icon: BarChart,
      title: 'Proven ROI',
      description: 'Average 300% ROI within 6 months of implementation across all services',
      color: 'text-orange-600',
      bgColor: 'bg-orange-100'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Certified professionals with proven track records in cutting-edge technologies',
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-100'
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock support and monitoring to ensure maximum uptime and reliability',
      color: 'text-red-600',
      bgColor: 'bg-red-100'
    }
  ];

  const pricingTiers = [
    {
      name: 'Starter',
      price: '$1,500',
      period: '/month',
      description: 'Perfect for small businesses getting started with AI and IT solutions',
      features: [
        'Basic AI tools and automation',
        'Standard IT support',
        'Email support',
        'Basic reporting',
        'Up to 5 users',
        'Monthly consultations'
      ],
      color: 'border-gray-300',
      buttonColor: 'bg-gray-600 hover:bg-gray-700'
    },
    {
      name: 'Professional',
      price: '$3,500',
      period: '/month',
      description: 'Ideal for growing businesses that need comprehensive solutions',
      features: [
        'Advanced AI and ML solutions',
        'Full IT infrastructure management',
        'Priority support',
        'Advanced analytics',
        'Up to 25 users',
        'Weekly consultations',
        'Custom integrations'
      ],
      color: 'border-blue-500',
      buttonColor: 'bg-blue-600 hover:bg-blue-700',
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'pricing',
      description: 'Tailored solutions for large organizations with complex requirements',
      features: [
        'Custom AI development',
        'Dedicated infrastructure',
        '24/7 dedicated support',
        'Custom analytics and reporting',
        'Unlimited users',
        'Daily consultations',
        'Full customization',
        'On-site support'
      ],
      color: 'border-purple-500',
      buttonColor: 'bg-purple-600 hover:bg-purple-700'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI, IT, and micro SAAS services designed to transform your business. From artificial intelligence to cloud infrastructure, we provide cutting-edge solutions." />
        <meta name="keywords" content="AI services, IT services, micro saas, cloud infrastructure, cybersecurity, software development, digital transformation" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Our Services
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
                Comprehensive AI, IT, and micro SAAS solutions designed to transform your business operations and drive growth
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:+13024640950"
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center"
                >
                  📞 +1 302 464 0950
                </a>
                <a 
                  href="mailto:kleber@ziontechgroup.com"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                >
                  ✉️ Get Free Consultation
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Our Services?
              </h2>
              <p className="text-xl text-gray-600">
                Expert solutions delivered by certified professionals with proven track records
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {keyBenefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className={`${benefit.bgColor} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <benefit.icon className={`w-8 h-8 ${benefit.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Categories */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Service Categories
              </h2>
              <p className="text-xl text-gray-600">
                Comprehensive solutions across AI, IT, micro SAAS, and specialized technologies
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {serviceCategories.map((category, index) => (
                <div key={index} className={`bg-white rounded-lg shadow-lg p-8 border-2 ${category.borderColor} ${category.hoverColor} transition-all duration-300 hover:shadow-xl`}>
                  <div className="flex items-center mb-6">
                    <div className={`${category.bgColor} w-12 h-12 rounded-lg flex items-center justify-center mr-4`}>
                      <category.icon className={`w-6 h-6 ${category.color}`} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{category.title}</h3>
                      <p className="text-gray-600">{category.description}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4 mb-6">
                    {category.services.slice(0, 3).map((service, serviceIndex) => (
                      <div key={serviceIndex} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div>
                          <h4 className="font-semibold text-gray-900">{service.name}</h4>
                          <div className="text-sm text-gray-600">
                            {service.features.slice(0, 2).join(' • ')}
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-gray-900">{service.price}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-600">
                      +{category.services.length - 3} more services
                    </div>
                    <a 
                      href={category.link}
                      className={`inline-flex items-center ${category.color} hover:underline font-semibold`}
                    >
                      View All Services
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Tiers */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Flexible Pricing Plans
              </h2>
              <p className="text-xl text-gray-600">
                Choose the plan that best fits your business needs and budget
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingTiers.map((tier, index) => (
                <div key={index} className={`relative bg-white rounded-lg shadow-lg p-8 border-2 ${tier.color} ${tier.popular ? 'ring-2 ring-blue-500' : ''}`}>
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                        MOST POPULAR
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                    <div className="text-4xl font-bold text-gray-900 mb-2">
                      {tier.price}
                      <span className="text-lg text-gray-600">{tier.period}</span>
                    </div>
                    <p className="text-gray-600">{tier.description}</p>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a 
                    href="/contact"
                    className={`w-full ${tier.buttonColor} text-white py-3 px-6 rounded-lg font-semibold text-center transition-colors`}
                  >
                    Get Started
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Contact our experts for a free consultation and custom solution design
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a 
                href="tel:+13024640950"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center"
              >
                📞 +1 302 464 0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                ✉️ kleber@ziontechgroup.com
              </a>
            </div>
            <div className="text-sm text-blue-200">
              <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
              <p className="mt-2">🌐 https://ziontechgroup.com</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ServicesPage;