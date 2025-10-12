import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Code, 
  Zap, 
  Shield, 
  BarChart, 
  Users, 
  Mail, 
  Calendar, 
  CreditCard, 
  Lock, 
  Globe, 
  Smartphone, 
  FileText,
  ArrowRight,
  CheckCircle,
  Star,
  Clock,
  DollarSign
} from 'lucide-react';

const MicroSAASServicesPage = () => {
  const services = [
    {
      icon: <Users className="w-8 h-8 text-blue-400" />,
      title: 'AI-Powered CRM',
      description: 'Intelligent customer relationship management with AI insights and automation',
      price: '$99/month',
      features: ['Lead scoring', 'Automated follow-ups', 'Sales forecasting', 'Integration APIs'],
      path: '/ai-crm',
      popular: true
    },
    {
      icon: <BarChart className="w-8 h-8 text-green-400" />,
      title: 'Smart Analytics',
      description: 'AI-driven analytics platform for data-driven decision making',
      price: '$149/month',
      features: ['Real-time dashboards', 'Predictive modeling', 'Custom metrics', 'Export capabilities'],
      path: '/smart-analytics'
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      title: 'Automated Testing',
      description: 'AI-powered automated testing suite for web and mobile applications',
      price: '$199/month',
      features: ['Test generation', 'Cross-browser testing', 'Performance testing', 'Bug detection'],
      path: '/ai-automated-testing'
    },
    {
      icon: <FileText className="w-8 h-8 text-purple-400" />,
      title: 'Content Management',
      description: 'AI-enhanced content management system with intelligent organization',
      price: '$79/month',
      features: ['Auto-tagging', 'Content optimization', 'Workflow automation', 'Multi-user support'],
      path: '/ai-content-management'
    },
    {
      icon: <Mail className="w-8 h-8 text-red-400" />,
      title: 'Email Marketing',
      description: 'AI-powered email marketing automation with personalization',
      price: '$129/month',
      features: ['Smart segmentation', 'A/B testing', 'Personalization', 'Analytics'],
      path: '/ai-email-marketing'
    },
    {
      icon: <Globe className="w-8 h-8 text-cyan-400" />,
      title: 'Social Media Manager',
      description: 'Automated social media management with AI content creation',
      price: '$159/month',
      features: ['Content scheduling', 'Hashtag optimization', 'Engagement tracking', 'Multi-platform'],
      path: '/ai-social-media-manager'
    },
    {
      icon: <Calendar className="w-8 h-8 text-orange-400" />,
      title: 'AI Task Manager',
      description: 'Intelligent task management with AI-powered prioritization',
      price: '$89/month',
      features: ['Smart prioritization', 'Time tracking', 'Team collaboration', 'Progress analytics'],
      path: '/ai-task-manager'
    },
    {
      icon: <CreditCard className="w-8 h-8 text-pink-400" />,
      title: 'AI Expense Tracker',
      description: 'Automated expense tracking with AI categorization and insights',
      price: '$69/month',
      features: ['Auto-categorization', 'Receipt scanning', 'Budget alerts', 'Financial insights'],
      path: '/ai-expense-tracker'
    }
  ];

  const features = [
    {
      icon: <Zap className="w-6 h-6 text-blue-400" />,
      title: 'Lightning Fast Setup',
      description: 'Get up and running in minutes with our streamlined onboarding process'
    },
    {
      icon: <Shield className="w-6 h-6 text-green-400" />,
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption, backups, and compliance standards'
    },
    {
      icon: <BarChart className="w-6 h-6 text-purple-400" />,
      title: 'Real-time Analytics',
      description: 'Comprehensive insights and reporting to track your business performance'
    },
    {
      icon: <Globe className="w-6 h-6 text-yellow-400" />,
      title: 'Global Scalability',
      description: 'Scale your operations worldwide with our cloud-based infrastructure'
    }
  ];

  const pricingTiers = [
    {
      name: 'Starter',
      price: '$29',
      period: 'per month',
      description: 'Perfect for small businesses getting started',
      features: [
        'Up to 5 users',
        'Basic AI features',
        'Email support',
        '5GB storage',
        'Standard integrations'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$99',
      period: 'per month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 25 users',
        'Advanced AI features',
        'Priority support',
        '50GB storage',
        'All integrations',
        'Custom workflows'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$299',
      period: 'per month',
      description: 'For large organizations',
      features: [
        'Unlimited users',
        'Premium AI features',
        '24/7 support',
        'Unlimited storage',
        'Custom integrations',
        'Dedicated account manager'
      ],
      popular: false
    }
  ];

  return (
    <>
      <Helmet>
        <title>Micro SAAS Services - Zion Tech Group</title>
        <meta name="description" content="Specialized micro SAAS solutions designed to solve specific business challenges with AI integration. Affordable, scalable, and powerful." />
        <meta name="keywords" content="micro SAAS, AI solutions, business software, automation, productivity tools" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Micro SAAS Solutions
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Specialized software solutions designed to solve specific business challenges. 
                Affordable, scalable, and powered by AI to boost your productivity.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                  Start Free Trial
                </button>
                <button className="border border-white/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
                  View Pricing
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Our Micro SAAS Solutions</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from our comprehensive suite of specialized business tools
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div key={index} className={`bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 group relative ${service.popular ? 'ring-2 ring-blue-500' : ''}`}>
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <div className="text-3xl font-bold text-blue-400 mb-6">{service.price}</div>
                  <ul className="space-y-2 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={service.path}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our Micro SAAS?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Built with modern technology and designed for maximum efficiency
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Simple, Transparent Pricing</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your business needs. No hidden fees, no surprises.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingTiers.map((tier, index) => (
                <div key={index} className={`bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 relative ${tier.popular ? 'ring-2 ring-blue-500 scale-105' : ''}`}>
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                    <p className="text-gray-300 mb-4">{tier.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-white">{tier.price}</span>
                      <span className="text-gray-400 ml-2">{tier.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                    tier.popular 
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700'
                      : 'border-2 border-white/20 text-white hover:bg-white/10'
                  }`}>
                    {tier.popular ? 'Get Started' : 'Choose Plan'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Boost Your Productivity?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start your free trial today and experience the power of AI-driven micro SAAS solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                Start Free Trial
              </button>
              <button className="border border-white/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MicroSAASServicesPage;