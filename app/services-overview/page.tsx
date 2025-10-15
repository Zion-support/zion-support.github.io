'use client';
import React from 'react';
import SEOHead from '../components/SEOHead';
import { Link } from 'react-router-dom';
import { 
  CpuChipIcon, 
  CheckCircleIcon, 
  ArrowRightIcon,
  SparklesIcon,
  ChartBarIcon,
  GlobeAltIcon,
  CogIcon,
  UserGroupIcon,
  ShareIcon,
  VideoCameraIcon,
  ScaleIcon,
  HeartIcon,
  ShieldCheckIcon,
  CloudIcon,
  RocketLaunchIcon,
  BoltIcon,
  EyeIcon,
  DocumentTextIcon,
  MicrophoneIcon,
  BeakerIcon,
  CurrencyDollarIcon,
  StarIcon,
  ClockIcon
} from '@heroicons/react/24/outline';

const ServicesOverviewPage: React.FC = () => {
  const serviceCategories = [
    {
      title: 'AI-Powered Micro SAAS Solutions',
      description: 'Revolutionary AI services that solve specific business challenges with real functionality',
      services: [
        {
          name: 'AI Code Assistant',
          description: 'Generate, optimize, and collaborate on code in 50+ programming languages',
          price: '$29/mo',
          features: ['50+ languages', 'Real-time collaboration', 'Security scanning', 'Code optimization'],
          icon: CpuChipIcon,
          href: '/ai-code-assistant',
          gradient: 'from-blue-500 to-purple-500',
          popular: true
        },
        {
          name: 'AI Translator',
          description: 'Break language barriers with 100+ language support and 99% accuracy',
          price: '$19/mo',
          features: ['100+ languages', 'Voice translation', 'Document translation', 'Real-time processing'],
          icon: GlobeAltIcon,
          href: '/ai-translator',
          gradient: 'from-green-500 to-blue-500',
          popular: true
        },
        {
          name: 'AI Video Generator',
          description: 'Create professional videos from text prompts using advanced AI',
          price: '$39/mo',
          features: ['Text-to-video', '50+ templates', 'Voice synthesis', '4K quality'],
          icon: VideoCameraIcon,
          href: '/ai-video-generator',
          gradient: 'from-purple-500 to-pink-500',
          popular: true
        },
        {
          name: 'AI Legal Assistant',
          description: 'Contract analysis, document generation, and legal research with 95% accuracy',
          price: '$99/mo',
          features: ['Contract analysis', 'Document generation', 'Legal research', 'Compliance monitoring'],
          icon: ScaleIcon,
          href: '/ai-legal-assistant',
          gradient: 'from-amber-500 to-orange-500',
          popular: false
        },
        {
          name: 'AI Medical Assistant',
          description: 'Symptom analysis, health monitoring, and medical record management',
          price: '$49/mo',
          features: ['Symptom analysis', 'Health monitoring', 'Medical records', 'Vital tracking'],
          icon: HeartIcon,
          href: '/ai-medical-assistant',
          gradient: 'from-red-500 to-pink-500',
          popular: false
        },
        {
          name: 'AI Content Generator',
          description: 'Generate high-quality content for blogs, social media, and marketing',
          price: '$199/mo',
          features: ['Unlimited content', 'SEO optimization', 'Multi-language', 'Brand voice'],
          icon: SparklesIcon,
          href: '/ai-content-generator',
          gradient: 'from-cyan-500 to-blue-500',
          popular: true
        }
      ]
    },
    {
      title: 'Enterprise AI Solutions',
      description: 'Advanced AI solutions for large organizations and complex business needs',
      services: [
        {
          name: 'AI CRM Optimizer',
          description: 'Transform your sales process with AI-powered lead scoring and analytics',
          price: '$299/mo',
          features: ['Lead scoring', 'Predictive analytics', 'Sales automation', 'Performance insights'],
          icon: UserGroupIcon,
          href: '/ai-crm-optimizer',
          gradient: 'from-purple-500 to-pink-500',
          popular: false
        },
        {
          name: 'AI Data Visualizer',
          description: 'Transform complex data into stunning visualizations with AI insights',
          price: '$149/mo',
          features: ['50+ chart types', 'AI insights', 'Real-time dashboards', 'Custom reports'],
          icon: ChartBarIcon,
          href: '/ai-data-visualizer',
          gradient: 'from-cyan-500 to-blue-500',
          popular: false
        },
        {
          name: 'AI Fraud Detection',
          description: 'Advanced fraud detection and prevention using machine learning',
          price: '$399/mo',
          features: ['Real-time detection', 'Pattern recognition', 'Risk scoring', 'Alert system'],
          icon: ShieldCheckIcon,
          href: '/ai-fraud-detection',
          gradient: 'from-red-500 to-orange-500',
          popular: false
        },
        {
          name: 'AI Predictive Analytics',
          description: 'Predict future trends and behaviors with advanced analytics',
          price: '$499/mo',
          features: ['Trend prediction', 'Behavior analysis', 'Risk assessment', 'Forecasting'],
          icon: ChartBarIcon,
          href: '/ai-predictive-analytics',
          gradient: 'from-green-500 to-teal-500',
          popular: false
        }
      ]
    },
    {
      title: 'IT Infrastructure & Cloud Solutions',
      description: 'Comprehensive technology infrastructure and cloud services',
      services: [
        {
          name: 'Cloud Infrastructure',
          description: 'Scalable cloud solutions and infrastructure management',
          price: '$199/mo',
          features: ['AWS/Azure/GCP', 'Auto-scaling', 'Monitoring', 'Security'],
          icon: CloudIcon,
          href: '/cloud-infrastructure',
          gradient: 'from-blue-500 to-cyan-500',
          popular: true
        },
        {
          name: 'DevOps Automation',
          description: 'Automate your development and deployment processes',
          price: '$299/mo',
          features: ['CI/CD pipelines', 'Container orchestration', 'Monitoring', 'Security'],
          icon: CogIcon,
          href: '/devops-automation',
          gradient: 'from-orange-500 to-red-500',
          popular: false
        },
        {
          name: '5G Solutions',
          description: 'Next-generation 5G technology solutions for ultra-fast connectivity',
          price: '$599/mo',
          features: ['5G networks', 'IoT connectivity', 'Edge computing', 'Low latency'],
          icon: BoltIcon,
          href: '/5g-solutions',
          gradient: 'from-pink-500 to-rose-500',
          popular: false
        },
        {
          name: 'Blockchain Solutions',
          description: 'Secure blockchain implementations and smart contract development',
          price: '$799/mo',
          features: ['Smart contracts', 'DeFi solutions', 'NFT platforms', 'Security audits'],
          icon: ShieldCheckIcon,
          href: '/blockchain-solutions',
          gradient: 'from-purple-500 to-indigo-500',
          popular: false
        }
      ]
    }
  ];

  const pricingTiers = [
    {
      name: 'Starter',
      price: '$19',
      period: '/month',
      description: 'Perfect for individuals and small teams',
      features: [
        'Basic AI features',
        'Standard support',
        '1 user account',
        'Email support',
        'Basic templates'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$99',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Advanced AI features',
        'Priority support',
        '5 user accounts',
        'API access',
        'Custom integrations',
        'Advanced analytics'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$299',
      period: '/month',
      description: 'For large organizations',
      features: [
        'All AI features',
        '24/7 dedicated support',
        'Unlimited users',
        'Custom development',
        'On-premise deployment',
        'White-label solutions'
      ],
      popular: false
    }
  ];

  return (
    <>
      <SEOHead 
        title="Complete Services Overview - Zion Tech Group"
        description="Explore our comprehensive range of AI-powered micro SAAS solutions, enterprise services, and IT infrastructure. From AI code assistants to cloud solutions, we have everything you need."
        keywords="AI services, micro SAAS, enterprise solutions, cloud infrastructure, AI development, technology services, business automation"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-slate-900 to-cyan-900/30"></div>
          <div className="absolute inset-0 cyber-grid opacity-20"></div>
          <div className="floating-particles">
            {[...Array(30)].map((_, i) => (
              <div key={i} className="particle" style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 15}s`,
                animationDuration: `${15 + Math.random() * 10}s`
              }}></div>
            ))}
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 holographic">
                Complete Services Overview
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Discover our comprehensive range of AI-powered micro SAAS solutions, enterprise services, and cutting-edge technology infrastructure designed to transform your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact"
                  className="cyber-button px-8 py-4 text-lg"
                >
                  Get Started Today
                  <ArrowRightIcon className="w-5 h-5 ml-2" />
                </Link>
                <Link to="/pricing"
                  className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300"
                >
                  View Pricing
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Service Categories */}
        {serviceCategories.map((category, categoryIndex) => (
          <section key={categoryIndex} className={`py-20 ${categoryIndex % 2 === 0 ? 'bg-slate-800/30' : ''}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                  {category.title}
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  {category.description}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {category.services.map((service, serviceIndex) => (
                  <div key={serviceIndex} className="group holographic-card p-6 hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${service.gradient} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform neon-border-animated`}>
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                      {service.popular && (
                        <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                          Popular
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                      {service.description}
                    </p>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-bold text-purple-400 neon-text">{service.price}</span>
                      <div className="flex items-center text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <StarIcon key={i} className="w-4 h-4 fill-current" />
                        ))}
                      </div>
                    </div>
                    <div className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Link to={service.href}
                      className="block w-full cyber-button text-center py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                    >
                      Learn More
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* Pricing Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Simple <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Pricing</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the perfect plan for your business needs. All plans include our core AI features and 24/7 support.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingTiers.map((plan, index) => (
                <div key={index} className={`holographic-card p-8 relative ${plan.popular ? 'ring-2 ring-purple-500' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-purple-500 to-cyan-500 text-white hover:from-purple-600 hover:to-cyan-600' 
                      : 'border-2 border-purple-400 text-purple-300 hover:bg-purple-400 hover:text-white'
                  }`}>
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-20 bg-gradient-to-r from-purple-900/40 via-slate-900 to-cyan-900/40">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact us today to discuss how our solutions can accelerate your digital transformation and drive growth.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📞</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Phone</h3>
                <p className="text-gray-300">+1 302 464 0950</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">✉️</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Email</h3>
                <p className="text-gray-300">kleber@ziontechgroup.com</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📍</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Address</h3>
                <p className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact"
                className="cyber-button px-8 py-4 text-lg"
              >
                Contact Us Now
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </Link>
              <Link to="/demo"
                className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ServicesOverviewPage;