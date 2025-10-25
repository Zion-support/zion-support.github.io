'use client';
import React, { useState } from 'react';
import {
  ArrowRight,
  CheckCircle,
  Star,
  Clock,
  Users,
  TrendingUp,
  BarChart,
  Shield,
  Brain,
  Cloud,
  Code,
  Target,
  Award,
  Phone,
  Mail,
  MapPin,
  Eye,
  MessageCircle,
  ExternalLink,
  Zap,
  Globe,
  Lock,
  Settings,
  Rocket
} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const MicroSaasPage: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState('starter');

  const features = [
    {
      icon: Rocket,
      title: 'Rapid Deployment',
      description: 'Get your SaaS application up and running in days, not months.'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption, authentication, and compliance.'
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Optimized for speed and scalability to handle growing user bases.'
    },
    {
      icon: Settings,
      title: 'Easy Customization',
      description: 'Flexible architecture that adapts to your specific business needs.'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Built for international markets with multi-language support.'
    },
    {
      icon: Lock,
      title: 'Data Protection',
      description: 'GDPR compliant with advanced data protection and privacy controls.'
    }
  ];

  const plans = [
    {
      name: 'Starter',
      price: '$2,999',
      period: 'one-time',
      description: 'Perfect for small businesses and startups',
      features: [
        'Up to 1,000 users',
        'Basic analytics dashboard',
        'Email support',
        'Standard security',
        'Mobile responsive design',
        'Basic integrations'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$4,999',
      period: 'one-time',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 10,000 users',
        'Advanced analytics',
        'Priority support',
        'Enhanced security',
        'Custom branding',
        'API access',
        'Advanced integrations',
        'Performance monitoring'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'contact us',
      description: 'For large organizations',
      features: [
        'Unlimited users',
        'Custom analytics',
        '24/7 dedicated support',
        'Enterprise security',
        'White-label solution',
        'Custom integrations',
        'SLA guarantee',
        'Dedicated infrastructure'
      ],
      popular: false
    }
  ];

  const stats = [
    { icon: Shield, value: '100%', label: 'Secure' },
    { icon: Clock, value: '99.9%', label: 'Uptime' },
    { icon: Users, value: '10K+', label: 'Happy Users' },
    { icon: Award, value: '50+', label: 'Projects Delivered' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOOptimizer
        title="Micro SaaS Solutions - Zion Tech Group"
        description="Build and launch your SaaS application quickly with our micro SaaS development services. Scalable, secure, and ready for market."
        keywords="micro saas, saas development, software as a service, web application, cloud software, saas platform"
      />
      <Navigation />
      <main className="pt-20">
        <div className="container mx-auto px-4 py-12">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              Micro <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">SaaS Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Launch your SaaS application in record time with our comprehensive micro SaaS development services. Built for scale, security, and success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-200 transform hover:scale-105">
                Start Your Project
              </button>
              <button className="px-8 py-3 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-200">
                View Portfolio
              </button>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Features Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Why Choose Our Micro SaaS Solutions?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-purple-600/20 rounded-lg">
                      <feature.icon className="w-6 h-6 text-purple-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                  </div>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Pricing Plans</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {plans.map((plan, index) => (
                <div key={index} className={`bg-white/5 rounded-2xl p-8 border transition-all duration-300 ${
                  plan.popular 
                    ? 'border-purple-500 bg-gradient-to-b from-purple-600/20 to-transparent' 
                    : 'border-white/10 hover:bg-white/10'
                }`}>
                  {plan.popular && (
                    <div className="text-center mb-4">
                      <span className="px-4 py-2 bg-purple-600 text-white text-sm font-medium rounded-full">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="text-4xl font-bold text-white mb-2">{plan.price}</div>
                    <div className="text-gray-400">{plan.period}</div>
                    <p className="text-gray-300 text-sm mt-2">{plan.description}</p>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-200 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700'
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}>
                    {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl p-8 border border-white/10 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Launch Your SaaS?</h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Let's discuss your project requirements and create a custom micro SaaS solution that fits your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-200 transform hover:scale-105">
                Start Your Project
              </button>
              <button className="px-8 py-3 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-200">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MicroSaasPage;