'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import FuturisticBackground from '../components/FuturisticBackground';
import NeonButton from '../components/NeonButton';
import AnimatedCard from '../components/AnimatedCard';
import { 
  BarChart3, 
  Shield, 
  Cloud, 
  Users, 
  ShoppingCart, 
  MessageSquare, 
  Zap, 
  Database,
  Smartphone,
  Globe,
  Lock,
  TrendingUp,
  CheckCircle,
  Star,
  ArrowRight
} from 'lucide-react';

const MicroSaaSSolutionsPage: React.FC = () => {
  const microSaasServices = [
    {
      id: 'zion-analytics-pro',
      name: 'Zion Analytics Pro',
      description: 'Advanced business intelligence and analytics platform with real-time dashboards, predictive analytics, and automated reporting.',
      icon: BarChart3,
      features: [
        'Real-time dashboards',
        'Predictive analytics',
        'Automated reporting',
        'Custom KPI tracking',
        'Data visualization',
        'Export capabilities'
      ],
      pricing: {
        starter: { price: 29, period: 'month', features: ['5 dashboards', '1GB data storage', 'Email support'] },
        professional: { price: 79, period: 'month', features: ['Unlimited dashboards', '10GB data storage', 'Priority support', 'API access'] },
        enterprise: { price: 199, period: 'month', features: ['Custom dashboards', 'Unlimited storage', '24/7 support', 'White-label options'] }
      },
      href: '/zion-analytics-pro',
      category: 'Analytics',
      rating: 4.9,
      users: '2,500+'
    },
    {
      id: 'zion-security-shield',
      name: 'Zion Security Shield',
      description: 'Comprehensive cybersecurity monitoring and threat detection system with real-time alerts and automated response.',
      icon: Shield,
      features: [
        'Real-time threat detection',
        'Automated incident response',
        'Vulnerability scanning',
        'Compliance monitoring',
        'Security reporting',
        '24/7 monitoring'
      ],
      pricing: {
        starter: { price: 49, period: 'month', features: ['5 assets', 'Basic monitoring', 'Email alerts'] },
        professional: { price: 129, period: 'month', features: ['25 assets', 'Advanced monitoring', 'SMS alerts', 'API access'] },
        enterprise: { price: 299, period: 'month', features: ['Unlimited assets', 'Full monitoring', 'Custom alerts', 'Dedicated support'] }
      },
      href: '/zion-security-shield',
      category: 'Security',
      rating: 4.8,
      users: '1,800+'
    },
    {
      id: 'zion-cloud-vault',
      name: 'Zion Cloud Vault',
      description: 'Secure cloud storage and file management system with advanced encryption, collaboration tools, and version control.',
      icon: Cloud,
      features: [
        'End-to-end encryption',
        'File versioning',
        'Team collaboration',
        'Access controls',
        'Backup automation',
        'Mobile access'
      ],
      pricing: {
        starter: { price: 19, period: 'month', features: ['100GB storage', '5 users', 'Basic encryption'] },
        professional: { price: 49, period: 'month', features: ['1TB storage', '25 users', 'Advanced encryption', 'API access'] },
        enterprise: { price: 99, period: 'month', features: ['Unlimited storage', 'Unlimited users', 'Custom encryption', 'Dedicated support'] }
      },
      href: '/zion-cloud-vault',
      category: 'Storage',
      rating: 4.7,
      users: '3,200+'
    },
    {
      id: 'zion-ai-inventory-manager',
      name: 'Zion AI Inventory Manager',
      description: 'Intelligent inventory management system with AI-powered demand forecasting, automated reordering, and real-time tracking.',
      icon: Database,
      features: [
        'AI demand forecasting',
        'Automated reordering',
        'Real-time tracking',
        'Multi-location support',
        'Barcode scanning',
        'Analytics dashboard'
      ],
      pricing: {
        starter: { price: 39, period: 'month', features: ['1,000 SKUs', 'Basic forecasting', 'Email support'] },
        professional: { price: 89, period: 'month', features: ['10,000 SKUs', 'Advanced AI', 'Priority support', 'API access'] },
        enterprise: { price: 199, period: 'month', features: ['Unlimited SKUs', 'Custom AI models', '24/7 support', 'White-label options'] }
      },
      href: '/zion-ai-inventory-manager',
      category: 'Inventory',
      rating: 4.9,
      users: '1,500+'
    },
    {
      id: 'zion-hr-assistant-pro',
      name: 'Zion HR Assistant Pro',
      description: 'AI-powered human resources management system with automated recruitment, employee onboarding, and performance tracking.',
      icon: Users,
      features: [
        'AI recruitment matching',
        'Automated onboarding',
        'Performance tracking',
        'Time & attendance',
        'Payroll integration',
        'Employee self-service'
      ],
      pricing: {
        starter: { price: 59, period: 'month', features: ['50 employees', 'Basic HR tools', 'Email support'] },
        professional: { price: 129, period: 'month', features: ['200 employees', 'Advanced AI', 'Priority support', 'API access'] },
        enterprise: { price: 249, period: 'month', features: ['Unlimited employees', 'Custom AI', '24/7 support', 'White-label options'] }
      },
      href: '/zion-hr-assistant-pro',
      category: 'HR',
      rating: 4.8,
      users: '2,100+'
    },
    {
      id: 'zion-ecommerce-optimizer',
      name: 'Zion E-commerce Optimizer',
      description: 'AI-powered e-commerce optimization platform with conversion tracking, A/B testing, and automated marketing campaigns.',
      icon: ShoppingCart,
      features: [
        'Conversion optimization',
        'A/B testing automation',
        'Customer behavior analysis',
        'Personalized recommendations',
        'Marketing automation',
        'Revenue analytics'
      ],
      pricing: {
        starter: { price: 79, period: 'month', features: ['1 store', 'Basic optimization', 'Email support'] },
        professional: { price: 179, period: 'month', features: ['5 stores', 'Advanced AI', 'Priority support', 'API access'] },
        enterprise: { price: 399, period: 'month', features: ['Unlimited stores', 'Custom AI', '24/7 support', 'White-label options'] }
      },
      href: '/zion-ecommerce-optimizer',
      category: 'E-commerce',
      rating: 4.9,
      users: '1,900+'
    },
    {
      id: 'zion-ai-chatbot-builder',
      name: 'Zion AI Chatbot Builder',
      description: 'No-code AI chatbot creation platform with natural language processing, multi-channel deployment, and analytics.',
      icon: MessageSquare,
      features: [
        'No-code builder',
        'Natural language processing',
        'Multi-channel deployment',
        'Analytics dashboard',
        'Custom integrations',
        'Live chat handoff'
      ],
      pricing: {
        starter: { price: 29, period: 'month', features: ['1 chatbot', '1,000 conversations', 'Basic AI'] },
        professional: { price: 79, period: 'month', features: ['5 chatbots', '10,000 conversations', 'Advanced AI', 'API access'] },
        enterprise: { price: 199, period: 'month', features: ['Unlimited chatbots', 'Unlimited conversations', 'Custom AI', 'Dedicated support'] }
      },
      href: '/zion-ai-chatbot-builder',
      category: 'AI',
      rating: 4.8,
      users: '3,500+'
    },
    {
      id: 'zion-ai-workflow-automation',
      name: 'Zion AI Workflow Automation',
      description: 'Intelligent workflow automation platform with AI-powered process optimization, task scheduling, and integration management.',
      icon: Zap,
      features: [
        'AI process optimization',
        'Task automation',
        'Integration management',
        'Workflow analytics',
        'Custom triggers',
        'Team collaboration'
      ],
      pricing: {
        starter: { price: 49, period: 'month', features: ['10 workflows', 'Basic automation', 'Email support'] },
        professional: { price: 119, period: 'month', features: ['50 workflows', 'Advanced AI', 'Priority support', 'API access'] },
        enterprise: { price: 249, period: 'month', features: ['Unlimited workflows', 'Custom AI', '24/7 support', 'White-label options'] }
      },
      href: '/zion-ai-workflow-automation',
      category: 'Automation',
      rating: 4.7,
      users: '2,300+'
    }
  ];

  const categories = ['All', 'Analytics', 'Security', 'Storage', 'Inventory', 'HR', 'E-commerce', 'AI', 'Automation'];

  return (
    <>
      <SEOHead 
        title="Micro SAAS Solutions - Zion Tech Group"
        description="Discover our comprehensive suite of micro SAAS solutions designed to streamline your business operations. From analytics to automation, we have the tools you need."
        keywords="micro saas, business software, analytics, automation, cloud storage, inventory management, HR software, e-commerce tools"
      />
      
      <div className="min-h-screen bg-slate-900 text-white relative overflow-hidden">
        <FuturisticBackground />
        
        {/* Hero Section */}
        <section className="relative z-10 py-20 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 lg:mb-8">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Micro SAAS Solutions
                </span>
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-8 lg:mb-12 max-w-4xl mx-auto leading-relaxed">
                Powerful, affordable micro SAAS tools designed to streamline your business operations and drive growth. 
                Choose from our comprehensive suite of intelligent solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <NeonButton href="/contact" size="lg">
                  Get Started Today
                </NeonButton>
                <NeonButton href="/demo" variant="secondary" size="lg">
                  View Demo
                </NeonButton>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="relative z-10 py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 lg:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Micro SAAS Suite</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from our comprehensive collection of micro SAAS solutions, each designed to solve specific business challenges.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
              {microSaasServices.map((service) => (
                <AnimatedCard key={service.id} href={service.href} glowColor="cyan">
                  <div className="space-y-4">
                    {/* Service Header */}
                    <div className="flex items-start justify-between">
                      <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-300">{service.rating}</span>
                      </div>
                    </div>
                    
                    {/* Service Info */}
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                        {service.name}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed mb-3">
                        {service.description}
                      </p>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-cyan-400 font-medium">{service.category}</span>
                        <span className="text-gray-500">{service.users} users</span>
                      </div>
                    </div>
                    
                    {/* Pricing */}
                    <div className="border-t border-slate-700 pt-4">
                      <div className="flex items-baseline space-x-2">
                        <span className="text-2xl font-bold text-white">${service.pricing.starter.price}</span>
                        <span className="text-gray-400 text-sm">/{service.pricing.starter.period}</span>
                        <span className="text-xs text-gray-500">starting</span>
                      </div>
                    </div>
                    
                    {/* Features Preview */}
                    <div className="space-y-2">
                      {service.features.slice(0, 3).map((feature, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                          <span className="text-sm text-gray-300">{feature}</span>
                        </div>
                      ))}
                      <div className="text-sm text-cyan-400 font-medium">
                        +{service.features.length - 3} more features
                      </div>
                    </div>
                    
                    {/* CTA */}
                    <div className="pt-4">
                      <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors">
                        <span className="text-sm font-medium">Learn More</span>
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="relative z-10 py-16 lg:py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 lg:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                Simple, <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Transparent Pricing</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the perfect plan for your business. All plans include our core features with no hidden fees.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
              {['Starter', 'Professional', 'Enterprise'].map((plan, index) => (
                <AnimatedCard key={plan} glowColor={index === 1 ? 'purple' : 'cyan'} className={index === 1 ? 'ring-2 ring-purple-400' : ''}>
                  <div className="text-center space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{plan}</h3>
                      <p className="text-gray-400">Perfect for {plan === 'Starter' ? 'small businesses' : plan === 'Professional' ? 'growing companies' : 'large enterprises'}</p>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="text-4xl font-bold text-white">
                        $29<span className="text-lg text-gray-400">/month</span>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="w-5 h-5 text-green-400" />
                          <span className="text-gray-300">Access to all micro SAAS tools</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="w-5 h-5 text-green-400" />
                          <span className="text-gray-300">24/7 customer support</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="w-5 h-5 text-green-400" />
                          <span className="text-gray-300">Regular updates & new features</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="w-5 h-5 text-green-400" />
                          <span className="text-gray-300">API access & integrations</span>
                        </div>
                        {index > 0 && (
                          <div className="flex items-center space-x-2">
                            <CheckCircle className="w-5 h-5 text-green-400" />
                            <span className="text-gray-300">Priority support</span>
                          </div>
                        )}
                        {index === 2 && (
                          <div className="flex items-center space-x-2">
                            <CheckCircle className="w-5 h-5 text-green-400" />
                            <span className="text-gray-300">White-label options</span>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <NeonButton 
                      href="/contact" 
                      variant={index === 1 ? 'accent' : 'primary'} 
                      size="lg" 
                      className="w-full"
                    >
                      Get Started
                    </NeonButton>
                  </div>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative z-10 py-16 lg:py-20">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-8 lg:mb-12">
              Join thousands of businesses already using our micro SAAS solutions to streamline operations and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <NeonButton href="/contact" size="lg">
                Start Free Trial
              </NeonButton>
              <NeonButton href="/demo" variant="secondary" size="lg">
                Schedule Demo
              </NeonButton>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MicroSaaSSolutionsPage;