'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  CheckCircle, 
  Shield, 
  Lock, 
  Key,
  Eye,
  EyeOff,
  Zap,
  ArrowRight,
  Star,
  Sparkles,
  Settings,
  Smartphone,
  Globe,
  Users,
  FileText,
  Bell,
  Target,
  BarChart3,
  Clock,
  AlertTriangle
} from 'lucide-react';

export default function AIPasswordManagerPage() {
  const features = [
    {
      title: 'AI-Powered Password Generation',
      description: 'Generate ultra-secure passwords using advanced AI algorithms that adapt to each site\'s requirements',
      icon: <Key className="w-6 h-6 text-cyan-400" />,
      benefits: ['Unbreakable passwords', 'Site-specific optimization', 'Zero human bias']
    },
    {
      title: 'Smart Password Analysis',
      description: 'AI continuously analyzes your passwords for weaknesses and suggests improvements',
      icon: <Brain className="w-6 h-6 text-purple-400" />,
      benefits: ['Real-time security scoring', 'Weakness detection', 'Improvement suggestions']
    },
    {
      title: 'Breach Detection & Alerts',
      description: 'AI monitors the dark web and notifies you instantly if your passwords are compromised',
      icon: <AlertTriangle className="w-6 h-6 text-red-400" />,
      benefits: ['Instant breach alerts', 'Dark web monitoring', 'Proactive security']
    },
    {
      title: 'Biometric Authentication',
      description: 'Advanced biometric security with AI-powered fraud detection and anti-spoofing',
      icon: <Eye className="w-6 h-6 text-green-400" />,
      benefits: ['Face recognition', 'Fingerprint scanning', 'Anti-spoofing protection']
    },
    {
      title: 'Smart Auto-Fill',
      description: 'AI learns your patterns to provide intelligent, context-aware password filling',
      icon: <Zap className="w-6 h-6 text-yellow-400" />,
      benefits: ['Context-aware filling', 'Learning algorithms', 'Reduced friction']
    },
    {
      title: 'Security Analytics',
      description: 'Comprehensive security dashboard with AI-generated insights and recommendations',
      icon: <BarChart3 className="w-6 h-6 text-blue-400" />,
      benefits: ['Security score tracking', 'Risk assessment', 'Compliance reporting']
    }
  ];

  const pricingPlans = [
    {
      name: 'Personal',
      price: '$4.99',
      period: '/month',
      description: 'Perfect for individuals',
      features: [
        'Unlimited passwords',
        'AI password generation',
        'Basic breach monitoring',
        'Mobile & desktop apps',
        'Cloud sync',
        'Email support'
      ],
      popular: false
    },
    {
      name: 'Family',
      price: '$12.99',
      period: '/month',
      description: 'Ideal for families',
      features: [
        'Everything in Personal',
        'Up to 6 family members',
        'Advanced AI features',
        'Family sharing',
        'Priority support',
        'Advanced analytics',
        'Secure sharing'
      ],
      popular: true
    },
    {
      name: 'Business',
      price: '$39.99',
      period: '/month',
      description: 'For teams and businesses',
      features: [
        'Everything in Family',
        'Unlimited team members',
        'Admin dashboard',
        'SSO integration',
        'Advanced security',
        'Dedicated support',
        'Compliance tools'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Robert Johnson',
      company: 'Tech Consultant',
      role: 'Security Expert',
      content: 'AI Password Manager has revolutionized my security practices. The AI-generated passwords are incredibly strong and the breach detection is spot-on.',
      rating: 5,
      avatar: 'RJ'
    },
    {
      name: 'Maria Garcia',
      company: 'Small Business Owner',
      role: 'CEO',
      content: 'The family plan is perfect for us. Our entire family can share passwords securely, and the AI ensures everything stays protected.',
      rating: 5,
      avatar: 'MG'
    },
    {
      name: 'James Wilson',
      company: 'IT Director',
      role: 'Security Manager',
      content: 'The business features are outstanding. The admin dashboard gives us complete control, and the compliance tools save us hours.',
      rating: 5,
      avatar: 'JW'
    }
  ];

  const securityFeatures = [
    { name: 'End-to-End Encryption', icon: '🔐' },
    { name: 'Zero-Knowledge Architecture', icon: '🔒' },
    { name: 'Multi-Factor Authentication', icon: '🔑' },
    { name: 'Biometric Security', icon: '👁️' },
    { name: 'Hardware Security Keys', icon: '🔧' },
    { name: 'SOC 2 Compliance', icon: '✅' },
    { name: 'GDPR Compliant', icon: '🇪🇺' },
    { name: 'Regular Security Audits', icon: '🔍' }
  ];

  const stats = [
    { number: '99.9%', label: 'Security Uptime', icon: <Shield className="w-6 h-6" /> },
    { number: '256-bit', label: 'AES Encryption', icon: <Lock className="w-6 h-6" /> },
    { number: '0', label: 'Data Breaches', icon: <AlertTriangle className="w-6 h-6" /> },
    { number: '1M+', label: 'Passwords Protected', icon: <Key className="w-6 h-6" /> }
  ];

  return (
    <>
      <Helmet>
        <title>AI Password Manager - Advanced Security Solution | Zion Tech Group</title>
        <meta name="description" content="Protect your digital life with AI-powered password management, breach detection, and biometric security. Enterprise-grade security for everyone." />
        <meta name="keywords" content="AI password manager, password security, breach detection, biometric authentication, digital security" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="AI Password Manager - Advanced Security Solution" />
        <meta property="og:description" content="Protect your digital life with AI-powered password management, breach detection, and biometric security." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/ai-password-manager" />
        <meta property="og:image" content="https://ziontechgroup.com/og-ai-password-manager.jpg" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Password Manager - Advanced Security Solution" />
        <meta name="twitter:description" content="Protect your digital life with AI-powered password management, breach detection, and biometric security." />
        <meta name="twitter:image" content="https://ziontechgroup.com/twitter-ai-password-manager.jpg" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 px-4 py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-full mb-6">
                <Shield className="w-8 h-8 text-red-400" />
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                AI Password Manager
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Protect your digital life with AI-powered password management, 
                real-time breach detection, and biometric security that keeps you safe from cyber threats.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-gradient-to-r from-red-500 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-600 hover:to-orange-700 transition-all duration-300 flex items-center justify-center"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link 
                  to="#demo" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Watch Demo
                </Link>
              </div>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-full mb-4">
                    <stat.icon className="w-6 h-6 text-red-400" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                Advanced Security Features
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
                Leverage AI and cutting-edge security technology to protect your digital identity
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 sm:p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    {feature.icon}
                    <h3 className="text-xl font-semibold text-white ml-3">{feature.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <Sparkles className="w-4 h-4 text-yellow-400 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Security Features Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                Enterprise-Grade Security
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
                Built with the highest security standards to protect your most sensitive data
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
              {securityFeatures.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-4 text-center hover:bg-white/15 transition-all duration-300">
                  <div className="text-2xl mb-2">{feature.icon}</div>
                  <div className="text-white text-sm font-medium">{feature.name}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                How It Works
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
                Get started in minutes with our simple setup process
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-full mb-6">
                  <Key className="w-8 h-8 text-red-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">1. Import & Generate</h3>
                <p className="text-gray-300">
                  Import your existing passwords or let our AI generate ultra-secure new ones for all your accounts.
                </p>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-full mb-6">
                  <Brain className="w-8 h-8 text-red-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">2. AI Analysis</h3>
                <p className="text-gray-300">
                  Our AI continuously analyzes your passwords for weaknesses and monitors for data breaches.
                </p>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-full mb-6">
                  <Shield className="w-8 h-8 text-red-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">3. Stay Protected</h3>
                <p className="text-gray-300">
                  Enjoy peace of mind with real-time alerts, automatic updates, and biometric security.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                Simple, Secure Pricing
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
                Choose the plan that fits your security needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`bg-white/10 backdrop-blur-lg rounded-2xl p-6 sm:p-8 border transition-all duration-300 ${
                  plan.popular 
                    ? 'border-red-500/50 bg-gradient-to-br from-red-500/10 to-orange-500/10' 
                    : 'border-white/20 hover:bg-white/15'
                }`}>
                  {plan.popular && (
                    <div className="bg-gradient-to-r from-red-500 to-orange-600 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400">{plan.period}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-red-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center ${
                      plan.popular
                        ? 'bg-gradient-to-r from-red-500 to-orange-600 text-white hover:from-red-600 hover:to-orange-700'
                        : 'border-2 border-white text-white hover:bg-white/10'
                    }`}
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                What Our Users Say
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
                Join millions of users who trust AI Password Manager with their security
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 sm:p-8 border border-white/20">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-orange-600 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-gray-400 text-sm">{testimonial.role}</div>
                      <div className="text-red-400 text-sm">{testimonial.company}</div>
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
              <div className="bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 border border-red-500/30">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                  Ready to Secure Your Digital Life?
                </h2>
                <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                  Start your free 30-day trial today. No credit card required.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/contact" 
                    className="bg-gradient-to-r from-red-500 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-600 hover:to-orange-700 transition-all duration-300 flex items-center justify-center"
                  >
                    Start Free Trial
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                  <Link 
                    to="/contact" 
                    className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                  >
                    Schedule Demo
                  </Link>
                </div>
                <div className="mt-8 text-white/80 text-sm">
                  <p>📞 Questions? Call us: <a href="tel:+13024640950" className="underline hover:text-white">+1 302 464 0950</a></p>
                  <p>✉️ Email: <a href="mailto:kleber@ziontechgroup.com" className="underline hover:text-white">kleber@ziontechgroup.com</a></p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}