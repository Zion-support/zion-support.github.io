'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/EnhancedNavigation';
import Footer from '../components/EnhancedFooter';
import Link from 'next/link';
import { 
  CheckCircle, 
  Star, 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Brain,
  Cloud,
  Code,
  Zap,
  Shield,
  Globe,
  Users,
  TrendingUp,
  Award,
  ArrowRight,
  Mic,
  Video,
  DollarSign,
  FileText,
  BarChart,
  Target,
  Settings,
  Database,
  Cpu,
  Smartphone,
  Instagram,
  Twitter,
  Facebook,
  Linkedin,
  Youtube
} from 'lucide-react';

const PricingPage: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const aiServices = [
    {
      name: 'AI Voice Assistant',
      description: 'Intelligent voice solutions with 99.5% accuracy',
      monthlyPrice: 199,
      yearlyPrice: 1990,
      features: ['50+ languages', 'Real-time translation', 'Custom voices', 'API access'],
      icon: Mic,
      popular: true
    },
    {
      name: 'AI Social Media Manager',
      description: 'Automated social media management',
      monthlyPrice: 99,
      yearlyPrice: 990,
      features: ['6 platforms', 'AI content', 'Analytics', 'Scheduling'],
      icon: Instagram,
      popular: false
    },
    {
      name: 'AI Financial Planner',
      description: 'Smart financial planning and optimization',
      monthlyPrice: 49,
      yearlyPrice: 490,
      features: ['Portfolio optimization', 'Goal tracking', 'Risk analysis', 'Reports'],
      icon: DollarSign,
      popular: false
    },
    {
      name: 'AI Code Generator',
      description: 'Generate code 10x faster in 50+ languages',
      monthlyPrice: 79,
      yearlyPrice: 790,
      features: ['50+ languages', 'Auto completion', 'Documentation', 'Bug detection'],
      icon: Code,
      popular: false
    },
    {
      name: 'AI Video Creator',
      description: 'Create professional videos with AI',
      monthlyPrice: 99,
      yearlyPrice: 990,
      features: ['Auto editing', 'AI voiceover', 'Templates', 'Multi-format'],
      icon: Video,
      popular: false
    },
    {
      name: 'AI Writing Assistant',
      description: 'AI-powered content creation',
      monthlyPrice: 29,
      yearlyPrice: 290,
      features: ['Content generation', 'Grammar check', 'SEO optimization', 'Templates'],
      icon: FileText,
      popular: false
    },
    {
      name: 'AI Data Analytics',
      description: 'Advanced data analysis and insights',
      monthlyPrice: 399,
      yearlyPrice: 3990,
      features: ['Real-time dashboards', 'Predictive analytics', 'Custom reports', 'API access'],
      icon: BarChart,
      popular: false
    },
    {
      name: 'AI Marketing Automation',
      description: 'AI-powered marketing campaigns',
      monthlyPrice: 199,
      yearlyPrice: 1990,
      features: ['Campaign optimization', 'A/B testing', 'Lead scoring', 'Analytics'],
      icon: Target,
      popular: false
    }
  ];

  const itServices = [
    {
      name: 'IT Infrastructure',
      description: 'Enterprise-grade infrastructure solutions',
      monthlyPrice: 2500,
      yearlyPrice: 25000,
      features: ['Cloud migration', '24/7 support', 'Security', 'Monitoring'],
      icon: Cloud,
      popular: false
    },
    {
      name: 'Cybersecurity Suite',
      description: 'Advanced security solutions',
      monthlyPrice: 1500,
      yearlyPrice: 15000,
      features: ['Threat detection', 'Compliance', 'Monitoring', 'Incident response'],
      icon: Shield,
      popular: false
    },
    {
      name: 'DevOps & CI/CD',
      description: 'Development operations automation',
      monthlyPrice: 1200,
      yearlyPrice: 12000,
      features: ['Automation', 'Monitoring', 'Deployment', 'Testing'],
      icon: Settings,
      popular: false
    },
    {
      name: 'Database Management',
      description: 'Database optimization and management',
      monthlyPrice: 800,
      yearlyPrice: 8000,
      features: ['Performance tuning', 'Backup', 'Migration', 'Monitoring'],
      icon: Database,
      popular: false
    }
  ];

  const enterprisePlans = [
    {
      name: 'Starter',
      description: 'Perfect for small businesses',
      monthlyPrice: 199,
      yearlyPrice: 1990,
      features: [
        'Up to 5 AI services',
        'Basic AI capabilities',
        'Email support',
        'Standard integrations',
        '1 user account',
        'Basic analytics'
      ],
      popular: false,
      color: 'border-gray-600'
    },
    {
      name: 'Professional',
      description: 'Most popular for growing businesses',
      monthlyPrice: 599,
      yearlyPrice: 5990,
      features: [
        'Up to 15 AI services',
        'Advanced AI capabilities',
        'Priority support',
        'Custom integrations',
        'Team collaboration (5 users)',
        'Advanced analytics',
        'API access',
        'Custom training'
      ],
      popular: true,
      color: 'border-cyan-400'
    },
    {
      name: 'Enterprise',
      description: 'For large organizations',
      monthlyPrice: 1999,
      yearlyPrice: 19990,
      features: [
        'Unlimited AI services',
        'Custom AI development',
        '24/7 dedicated support',
        'White-label solutions',
        'Unlimited team members',
        'Custom integrations',
        'SLA guarantee',
        'On-premise deployment'
      ],
      popular: false,
      color: 'border-purple-400'
    }
  ];

  const contactInfo = {
    phone: '+1 (302) 464-0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008, Middletown, DE 19709',
    hours: 'Mon-Fri: 9AM-6PM EST'
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0
    }).format(price);
  };

  return (
    <>
      <Helmet>
        <title>Pricing - Zion Tech Group | AI & IT Solutions Pricing</title>
        <meta name="description" content="Transparent pricing for AI services, IT solutions, and Micro SAAS applications. Starting at $29/month. Choose the plan that fits your business needs." />
        <meta name="keywords" content="AI pricing, IT services pricing, Micro SAAS pricing, enterprise solutions, business AI" />
        <link rel="canonical" href="https://ziontechgroup.com/pricing" />
      </Helmet>
      
      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid-enhanced neural-network-bg matrix-rain-effect">
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 holographic-text-enhanced cyber-text glitch">
              Pricing
            </h1>
            <p className="text-xl text-cyan-400 mb-8 font-medium cyber-glow neon-text">
              Transparent Pricing for AI & IT Solutions
            </p>
            <p className="text-lg text-gray-300 mb-8 max-w-4xl mx-auto">
              Choose the perfect plan for your business. All plans include our core features with no hidden fees.
            </p>
            
            {/* Billing Toggle */}
            <div className="flex items-center justify-center mb-12">
              <div className="bg-slate-800 rounded-lg p-1 flex">
                <button
                  onClick={() => setBillingCycle('monthly')}
                  className={`px-6 py-2 rounded-md font-semibold transition-all duration-300 ${
                    billingCycle === 'monthly'
                      ? 'bg-cyan-500 text-white'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setBillingCycle('yearly')}
                  className={`px-6 py-2 rounded-md font-semibold transition-all duration-300 ${
                    billingCycle === 'yearly'
                      ? 'bg-cyan-500 text-white'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  Yearly (Save 20%)
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Enterprise Plans */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-12 text-center neon-text">
              Enterprise Plans
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {enterprisePlans.map((plan, index) => (
                <div key={index} className={`cyber-card-advanced p-8 relative ${plan.popular ? 'border-2 border-cyan-400 scale-105' : `border ${plan.color}`}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </div>
                    </div>
                  )}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-cyan-400">
                        {formatPrice(billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice)}
                      </span>
                      <span className="text-gray-400 ml-2">
                        /{billingCycle === 'monthly' ? 'month' : 'year'}
                      </span>
                    </div>
                    {billingCycle === 'yearly' && (
                      <div className="text-green-400 text-sm font-semibold mt-2">
                        Save {formatPrice(plan.monthlyPrice * 12 - plan.yearlyPrice)}
                      </div>
                    )}
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className={`w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'cyber-button-enhanced'
                        : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Services Pricing */}
        <section className="py-16 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-12 text-center neon-text">
              AI Services Pricing
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {aiServices.map((service, index) => (
                <div key={index} className={`cyber-card p-6 hover:scale-105 transition-all duration-300 ${service.popular ? 'border-2 border-cyan-400' : ''}`}>
                  {service.popular && (
                    <div className="absolute -top-2 -right-2">
                      <div className="bg-cyan-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                        Popular
                      </div>
                    </div>
                  )}
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">{service.name}</h3>
                      <div className="text-cyan-400 font-semibold">
                        {formatPrice(billingCycle === 'monthly' ? service.monthlyPrice : service.yearlyPrice)}
                        /{billingCycle === 'monthly' ? 'mo' : 'yr'}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-xs text-gray-400">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={service.name.toLowerCase().replace(/\s+/g, '-')}
                    className="w-full text-center py-2 px-4 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300 text-sm"
                  >
                    Learn More
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* IT Services Pricing */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-12 text-center neon-text">
              IT Services Pricing
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {itServices.map((service, index) => (
                <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mr-4">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">{service.name}</h3>
                      <div className="text-cyan-400 font-semibold">
                        {formatPrice(billingCycle === 'monthly' ? service.monthlyPrice : service.yearlyPrice)}
                        /{billingCycle === 'monthly' ? 'mo' : 'yr'}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-xs text-gray-400">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className="w-full text-center py-2 px-4 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300 text-sm"
                  >
                    Contact Sales
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 px-4 bg-white/5">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Need Custom Pricing?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact our sales team for custom enterprise solutions and volume discounts.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="cyber-card p-6">
                <Phone className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Call Us</h3>
                <p className="text-gray-300 mb-4">{contactInfo.phone}</p>
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="text-cyan-400 hover:text-cyan-300 font-semibold"
                >
                  Call Now
                </a>
              </div>
              <div className="cyber-card p-6">
                <Mail className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Email Us</h3>
                <p className="text-gray-300 mb-4">{contactInfo.email}</p>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-cyan-400 hover:text-cyan-300 font-semibold"
                >
                  Send Email
                </a>
              </div>
              <div className="cyber-card p-6">
                <MapPin className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Visit Us</h3>
                <p className="text-gray-300 mb-4">{contactInfo.address}</p>
                <a
                  href="https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 font-semibold"
                >
                  Get Directions
                </a>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="cyber-button-enhanced inline-flex items-center text-lg px-8 py-4"
              >
                <Phone className="w-5 h-5 mr-2" />
                Get Free Consultation
              </Link>
              <a
                href="tel:+13024640950"
                className="px-8 py-4 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300"
              >
                Call: (302) 464-0950
              </a>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </>
  );
};

export default PricingPage;