'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Lock, 
  Shield, 
  Key, 
  Eye, 
  Smartphone, 
  Globe,
  ArrowRight,
  Star,
  Calendar,
  Target,
  TrendingUp,
  Brain,
  Download,
  CreditCard,
  PieChart,
  FileText,
  Bell,
  Zap,
  CheckCircle
} from 'lucide-react';
import AnimatedBackground from '../components/AnimatedBackground';
import NeonButton from '../components/NeonButton';
import FuturisticCard from '../components/FuturisticCard';

export default function AIPasswordManagerPage() {
  const features = [
    {
      title: 'AI Password Generation',
      description: 'Generate ultra-secure passwords using advanced AI algorithms',
      icon: <Key className="w-8 h-8 text-cyan-400" />,
      details: ['AI-powered generation', 'Custom complexity', 'Pattern recognition', 'Memorable options']
    },
    {
      title: 'Breach Monitoring',
      description: 'Real-time monitoring of data breaches and compromised accounts',
      icon: <Shield className="w-8 h-8 text-red-400" />,
      details: ['Dark web monitoring', 'Breach alerts', 'Account security', 'Risk assessment']
    },
    {
      title: '2FA Integration',
      description: 'Seamless two-factor authentication with all major platforms',
      icon: <Lock className="w-8 h-8 text-green-400" />,
      details: ['TOTP support', 'SMS backup', 'Hardware keys', 'Biometric auth']
    },
    {
      title: 'Secure Sharing',
      description: 'Safely share passwords and credentials with team members',
      icon: <Globe className="w-8 h-8 text-purple-400" />,
      details: ['Encrypted sharing', 'Access controls', 'Audit trails', 'Time limits']
    },
    {
      title: 'Cross-Platform Sync',
      description: 'Access your passwords securely across all devices',
      icon: <Smartphone className="w-8 h-8 text-blue-400" />,
      details: ['Multi-device sync', 'Offline access', 'Cloud backup', 'Auto-sync']
    },
    {
      title: 'Enterprise Security',
      description: 'Bank-level encryption with advanced security features',
      icon: <Shield className="w-8 h-8 text-yellow-400" />,
      details: ['Zero-knowledge architecture', 'End-to-end encryption', 'SSO integration', 'Compliance tools']
    }
  ];

  const pricingPlans = [
    {
      name: 'Personal',
      price: '$15',
      period: '/month',
      description: 'Perfect for individuals and families',
      features: [
        'Unlimited passwords',
        'AI generation',
        'Breach monitoring',
        'Mobile apps',
        'Email support',
        '1GB storage'
      ],
      popular: false
    },
    {
      name: 'Family',
      price: '$25',
      period: '/month',
      description: 'Ideal for families and small teams',
      features: [
        'Up to 6 users',
        'Family sharing',
        'Advanced 2FA',
        'Priority support',
        '5GB storage',
        'Secure sharing'
      ],
      popular: true
    },
    {
      name: 'Business',
      price: '$45',
      period: '/month',
      description: 'For businesses and organizations',
      features: [
        'Unlimited users',
        'Admin controls',
        'SSO integration',
        'Audit logs',
        'Unlimited storage',
        'Dedicated support'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Alex Thompson',
      company: 'Software Engineer',
      content: 'The AI password generation is incredible. I never have to think about passwords again.',
      rating: 5,
      avatar: 'AT'
    },
    {
      name: 'Maria Garcia',
      company: 'Marketing Director',
      content: 'The breach monitoring saved us from a potential security disaster. Highly recommended!',
      rating: 5,
      avatar: 'MG'
    },
    {
      name: 'Robert Chen',
      company: 'IT Manager',
      content: 'Enterprise features are top-notch. Our security posture improved dramatically.',
      rating: 5,
      avatar: 'RC'
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Password Manager - Secure Password Management | Zion Tech Group</title>
        <meta name="description" content="Secure your digital life with AI-powered password management, breach monitoring, and 2FA integration. Start your free trial today!" />
        <meta name="keywords" content="password manager, cybersecurity, 2FA, breach monitoring, password generation, digital security" />
      </Helmet>
      
      <div className="min-h-screen relative">
        <AnimatedBackground />
        
        {/* Hero Section */}
        <section className="relative pt-20 px-4 py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-red-500/10 border border-red-500/20 rounded-full text-red-400 text-sm font-medium mb-6">
                <Shield className="w-4 h-4 mr-2" />
                Enterprise Security
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
                AI Password Manager
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
                Secure your digital life with AI-powered password management, real-time breach monitoring, 
                and seamless 2FA integration. Bank-level security for your most important data.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <NeonButton to="/contact" variant="primary" size="lg">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </NeonButton>
                <NeonButton to="#demo" variant="secondary" size="lg">
                  Watch Demo
                </NeonButton>
              </div>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-20">
              <div className="text-center px-2">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-red-400 mb-1 sm:mb-2">256-bit</div>
                <div className="text-gray-300 text-xs sm:text-sm">Encryption</div>
              </div>
              <div className="text-center px-2">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-cyan-400 mb-1 sm:mb-2">99.9%</div>
                <div className="text-gray-300 text-xs sm:text-sm">Uptime</div>
              </div>
              <div className="text-center px-2">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-400 mb-1 sm:mb-2">Zero</div>
                <div className="text-gray-300 text-xs sm:text-sm">Data Breaches</div>
              </div>
              <div className="text-center px-2">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-400 mb-1 sm:mb-2">1M+</div>
                <div className="text-gray-300 text-xs sm:text-sm">Passwords Secured</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Advanced Security Features</h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
                Everything you need to secure your digital identity and protect your data
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 lg:mb-20">
              {features.map((feature, index) => (
                <FuturisticCard
                  key={index}
                  title={feature.title}
                  description={feature.description}
                  icon={feature.icon}
                  link="#"
                  features={feature.details}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Simple Pricing</h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
                Choose the security plan that fits your needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`relative bg-white/10 backdrop-blur-lg rounded-2xl p-6 sm:p-8 border ${
                  plan.popular ? 'border-red-400/50 bg-red-500/5' : 'border-white/20'
                } hover:bg-white/15 transition-all duration-300`}>
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-red-500 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-semibold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 text-sm mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <NeonButton 
                    to="/contact" 
                    variant={plan.popular ? "primary" : "secondary"} 
                    size="md"
                    className="w-full justify-center"
                  >
                    Get Started
                  </NeonButton>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">What Our Users Say</h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
                Join millions of users who trust us with their digital security
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 sm:p-8 border border-white/20">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400">★</span>
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-pink-600 rounded-full flex items-center justify-center text-white font-semibold text-sm mr-3">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <p className="font-semibold text-white">{testimonial.name}</p>
                      <p className="text-gray-400 text-sm">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="bg-gradient-to-r from-red-600 to-pink-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Ready to Secure Your Digital Life?</h2>
                <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                  Start your free 14-day trial today. No credit card required.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <NeonButton to="/contact" variant="accent" size="lg">
                    Start Free Trial
                  </NeonButton>
                  <NeonButton to="/contact" variant="secondary" size="lg">
                    Contact Sales
                  </NeonButton>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}