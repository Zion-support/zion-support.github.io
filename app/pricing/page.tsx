'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Star, Zap, Shield, Brain, Cloud, Code, BarChart, Users, Target, TrendingUp, Phone, Mail, MapPin } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

interface PricingPlan {
  id: string;
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular: boolean;
  category: string;
  cta: string;
  icon: React.ReactNode;
}

const PricingPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const pricingPlans: PricingPlan[] = [
    {
      id: '1',
      name: 'Starter',
      price: '$299',
      period: '/month',
      description: 'Perfect for small businesses getting started with AI and IT solutions',
      features: [
        'Basic AI analytics dashboard',
        'Email support',
        '5 user accounts',
        'Standard security features',
        'Basic reporting',
        'Mobile app access'
      ],
      popular: false,
      category: 'AI',
      cta: 'Start Free Trial',
      icon: <Zap className="w-8 h-8 text-blue-500" />
    },
    {
      id: '2',
      name: 'Professional',
      price: '$799',
      period: '/month',
      description: 'Ideal for growing businesses that need advanced AI and IT capabilities',
      features: [
        'Advanced AI analytics',
        'Priority support',
        '25 user accounts',
        'Advanced security features',
        'Custom reporting',
        'API access',
        'Integration support',
        'Training sessions'
      ],
      popular: true,
      category: 'AI',
      cta: 'Start Free Trial',
      icon: <Brain className="w-8 h-8 text-purple-500" />
    },
    {
      id: '3',
      name: 'Enterprise',
      price: '$1,999',
      period: '/month',
      description: 'Complete solution for large enterprises with complex requirements',
      features: [
        'Full AI suite access',
        '24/7 dedicated support',
        'Unlimited user accounts',
        'Enterprise security',
        'Custom AI models',
        'White-label options',
        'Dedicated account manager',
        'Custom integrations',
        'SLA guarantee'
      ],
      popular: false,
      category: 'AI',
      cta: 'Contact Sales',
      icon: <Shield className="w-8 h-8 text-green-500" />
    },
    {
      id: '4',
      name: 'IT Infrastructure',
      price: '$2,500',
      period: '/month',
      description: 'Complete IT infrastructure management and support',
      features: [
        'Cloud infrastructure setup',
        '24/7 monitoring',
        'Security management',
        'Backup and recovery',
        'Performance optimization',
        'Compliance support',
        'Disaster recovery planning',
        'IT consulting'
      ],
      popular: false,
      category: 'IT',
      cta: 'Get Quote',
      icon: <Cloud className="w-8 h-8 text-cyan-500" />
    },
    {
      id: '5',
      name: 'Development',
      price: '$5,000',
      period: '/project',
      description: 'Custom web and mobile application development',
      features: [
        'Custom web applications',
        'Mobile app development',
        'UI/UX design',
        'API development',
        'Database design',
        'Testing and QA',
        'Deployment support',
        '3 months maintenance'
      ],
      popular: false,
      category: 'Development',
      cta: 'Start Project',
      icon: <Code className="w-8 h-8 text-orange-500" />
    },
    {
      id: '6',
      name: 'Micro SaaS',
      price: '$49',
      period: '/month',
      description: 'Access to our suite of micro SaaS tools and applications',
      features: [
        '10 micro SaaS tools',
        'Basic analytics',
        'Email support',
        'Standard integrations',
        'Mobile access',
        'Basic customization',
        'Monthly updates',
        'Community support'
      ],
      popular: false,
      category: 'Micro SaaS',
      cta: 'Try Free',
      icon: <BarChart className="w-8 h-8 text-pink-500" />
    }
  ];

  const categories = ['All', 'AI', 'IT', 'Development', 'Micro SaaS'];

  const filteredPlans = selectedCategory === 'All' 
    ? pricingPlans 
    : pricingPlans.filter(plan => plan.category === selectedCategory);

  const features = [
    {
      icon: <CheckCircle className="w-6 h-6 text-green-400" />,
      title: 'No Setup Fees',
      description: 'Start immediately without any upfront costs'
    },
    {
      icon: <Shield className="w-6 h-6 text-blue-400" />,
      title: '99.9% Uptime',
      description: 'Enterprise-grade reliability and security'
    },
    {
      icon: <Users className="w-6 h-6 text-purple-400" />,
      title: '24/7 Support',
      description: 'Round-the-clock expert assistance'
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-orange-400" />,
      title: 'Scalable',
      description: 'Grow with your business needs'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Pricing - Zion Tech Group | Transparent AI & IT Solutions Pricing</title>
        <meta name="description" content="Transparent pricing for AI and IT solutions. Choose from flexible plans designed for businesses of all sizes." />
        <meta name="keywords" content="pricing, AI services pricing, IT services pricing, business solutions, enterprise pricing" />
        <meta property="og:title" content="Pricing - Zion Tech Group" />
        <meta property="og:description" content="Transparent pricing for AI and IT solutions" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/pricing" />
      </Helmet>

      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Transparent <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Pricing</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Choose the perfect plan for your business needs. All plans include our core AI and IT services with no hidden fees.
            </p>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full font-semibold transition-colors duration-200 ${
                    category === selectedCategory
                      ? 'bg-cyan-600 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Plans */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPlans.map((plan) => (
                <div
                  key={plan.id}
                  className={`glass-card quantum-field group ${
                    plan.popular ? 'ring-2 ring-cyan-500' : ''
                  }`}
                >
                  {plan.popular && (
                    <div className="flex justify-center mb-4">
                      <span className="bg-cyan-100 text-cyan-800 text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1">
                        <Star className="w-3 h-3" />
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <div className="flex justify-center mb-4">
                      {plan.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-center justify-center gap-1 mb-4">
                      <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                      <span className="text-gray-400">{plan.period}</span>
                    </div>
                    <span className="bg-white/10 px-2 py-1 rounded-full text-sm text-gray-400">
                      {plan.category}
                    </span>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button className="w-full bg-cyan-600 text-white px-4 py-3 rounded-lg hover:bg-cyan-700 transition-colors duration-200 flex items-center justify-center gap-2 text-sm font-semibold">
                    {plan.cta}
                    <ArrowRight size={16} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="holographic-card p-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Need a Custom Solution?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact our experts to discuss your specific requirements and get a tailored quote.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center gap-2">
                  <Phone className="w-5 h-5" />
                  Contact Sales
                </button>
                <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400/10 transition-all duration-300 flex items-center justify-center gap-2">
                  <Mail className="w-5 h-5" />
                  Get Quote
                </button>
              </div>
              
              {/* Contact Info */}
              <div className="mt-12 pt-8 border-t border-cyan-500/20">
                <div className="flex flex-wrap justify-center items-center gap-8 text-gray-400">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-cyan-400" />
                    <span>+1 302 464 0950</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-cyan-400" />
                    <span>kleber@ziontechgroup.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-cyan-400" />
                    <span>Middletown, DE</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default PricingPage;