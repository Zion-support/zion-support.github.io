'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Lock, 
  Shield, 
  Key, 
  Eye, 
  CheckCircle, 
  ArrowRight, 
  Star,
  Globe,
  Smartphone,
  Mail,
  Phone,
  MapPin,
  Brain,
  Cpu,
  BarChart3,
  MessageSquare,
  FileText,
  Camera,
  CreditCard,
  Wallet,
  Target,
  Zap,
  Fingerprint,
  Smartphone as Mobile
} from 'lucide-react';

export default function AIPasswordManagerPage() {
  const features = [
    {
      title: 'AI-Powered Password Generation',
      description: 'Generate ultra-secure passwords using advanced AI algorithms that adapt to each site\'s requirements.',
      icon: <Key className="w-8 h-8 text-cyan-400" />,
      benefits: ['Context-aware generation', 'Custom complexity rules', 'Bulk password creation', 'Pattern recognition']
    },
    {
      title: 'Zero-Knowledge Architecture',
      description: 'Your passwords are encrypted locally and never stored on our servers. Only you can access your data.',
      icon: <Shield className="w-8 h-8 text-purple-400" />,
      benefits: ['End-to-end encryption', 'Local encryption keys', 'Zero-knowledge proof', 'GDPR compliant']
    },
    {
      title: 'Smart Security Monitoring',
      description: 'AI-powered security monitoring that detects breaches, weak passwords, and security vulnerabilities in real-time.',
      icon: <Eye className="w-8 h-8 text-green-400" />,
      benefits: ['Breach detection', 'Weak password alerts', 'Security scoring', 'Vulnerability scanning']
    },
    {
      title: 'Biometric Authentication',
      description: 'Secure access using fingerprint, face recognition, and other biometric authentication methods.',
      icon: <Fingerprint className="w-8 h-8 text-yellow-400" />,
      benefits: ['Fingerprint unlock', 'Face recognition', 'Voice authentication', 'Multi-factor security']
    }
  ];

  const pricingPlans = [
    {
      name: 'Personal',
      price: '$4.99',
      period: '/month',
      description: 'Perfect for individuals and families',
      features: [
        'Unlimited password storage',
        'AI password generation',
        'Cross-device sync',
        'Mobile apps (iOS & Android)',
        'Basic security monitoring',
        '2FA support',
        'Emergency access',
        'Up to 5 family members'
      ],
      popular: false
    },
    {
      name: 'Family',
      price: '$9.99',
      period: '/month',
      description: 'Ideal for families and small teams',
      features: [
        'Everything in Personal',
        'Advanced security monitoring',
        'Family sharing (up to 10 members)',
        'Priority support',
        'Advanced 2FA options',
        'Secure sharing',
        'Password inheritance',
        'Custom security policies'
      ],
      popular: true
    },
    {
      name: 'Business',
      price: '$19.99',
      period: '/month',
      description: 'For businesses and organizations',
      features: [
        'Everything in Family',
        'Team management dashboard',
        'Admin controls & policies',
        'SSO integration',
        'Advanced reporting',
        'API access',
        'Dedicated support',
        'Custom deployment options',
        'Compliance reporting'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Thompson',
      company: 'Marketing Director',
      content: 'AI Password Manager has completely transformed our security posture. The AI-generated passwords are incredibly strong and the breach monitoring gives us peace of mind.',
      rating: 5,
      avatar: 'ST'
    },
    {
      name: 'Michael Chen',
      company: 'IT Security Manager',
      content: 'The zero-knowledge architecture and biometric authentication make this the most secure password manager we\'ve used. The team management features are excellent.',
      rating: 5,
      avatar: 'MC'
    },
    {
      name: 'Emily Rodriguez',
      company: 'Small Business Owner',
      content: 'Finally, a password manager that my whole family can use easily. The AI suggestions are spot-on and the security monitoring has caught several potential issues.',
      rating: 5,
      avatar: 'ER'
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Password Manager - Advanced Security & Zero-Knowledge Architecture | Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered password manager with zero-knowledge architecture, biometric authentication, and smart security monitoring. Start your free trial today!" />
        <meta name="keywords" content="AI password manager, password security, zero-knowledge, biometric authentication, password generation, cybersecurity" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="AI Password Manager - Advanced Security & Zero-Knowledge Architecture" />
        <meta property="og:description" content="Revolutionary AI-powered password manager with zero-knowledge architecture and biometric authentication." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/ai-password-manager" />
        <meta property="og:image" content="https://ziontechgroup.com/og-ai-password-manager.jpg" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "AI Password Manager",
            "description": "AI-powered password manager with zero-knowledge architecture and biometric authentication",
            "url": "https://ziontechgroup.com/ai-password-manager",
            "applicationCategory": "SecurityApplication",
            "operatingSystem": "Web, iOS, Android, Windows, macOS",
            "offers": {
              "@type": "Offer",
              "price": "4.99",
              "priceCurrency": "USD",
              "priceSpecification": {
                "@type": "PriceSpecification",
                "price": "4.99",
                "priceCurrency": "USD",
                "unitText": "MONTH"
              }
            },
            "provider": {
              "@type": "Organization",
              "name": "Zion Tech Group",
              "url": "https://ziontechgroup.com"
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 px-4 py-16 sm:py-20 lg:py-24">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-red-500 to-orange-600 rounded-2xl mb-8">
                <Lock className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
                AI Password Manager
              </h1>
              <p className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Revolutionary AI-powered password security with zero-knowledge architecture, 
                biometric authentication, and intelligent threat monitoring.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Link 
                  to="/contact" 
                  className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-700 hover:to-orange-700 transition-all duration-300 flex items-center justify-center"
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
              
              {/* Key Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-400 mb-2">100K+</div>
                  <div className="text-gray-300">Active Users</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-400 mb-2">Zero</div>
                  <div className="text-gray-300">Data Breaches</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">256-bit</div>
                  <div className="text-gray-300">Encryption</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400 mb-2">4.9/5</div>
                  <div className="text-gray-300">User Rating</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Advanced Security Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Enterprise-grade security with AI-powered intelligence and zero-knowledge architecture
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="mb-6">{feature.icon}</div>
                  <h3 className="text-2xl font-semibold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-6">{feature.description}</p>
                  <ul className="space-y-3">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Secure Pricing Plans</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your security needs. All plans include a 30-day free trial.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 border ${
                  plan.popular ? 'border-red-500/50 ring-2 ring-red-500/20' : 'border-white/20'
                } hover:bg-white/15 transition-all duration-300 relative`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-red-500 to-orange-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-2">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link 
                    to="/contact" 
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-red-600 to-orange-600 text-white hover:from-red-700 hover:to-orange-700' 
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
        <section className="py-16 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">What Our Users Say</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join thousands of security-conscious users who trust AI Password Manager
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">{testimonial.name}</h4>
                      <p className="text-gray-400 text-sm">{testimonial.company}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <blockquote className="text-gray-300 italic">
                    "{testimonial.content}"
                  </blockquote>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-3xl p-8 sm:p-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                  Ready to Secure Your Digital Life?
                </h2>
                <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
                  Join 100,000+ users who have secured their passwords with AI Password Manager. 
                  Start your free trial today - no credit card required.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/contact" 
                    className="bg-white text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center"
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
                <div className="mt-8 text-white/80 text-sm">
                  <p>✓ 30-day free trial • ✓ Zero-knowledge architecture • ✓ Cancel anytime</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-12 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-8">Get in Touch</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex items-center justify-center">
                  <Mail className="w-6 h-6 text-cyan-400 mr-3" />
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <p className="text-white">kleber@ziontechgroup.com</p>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <Phone className="w-6 h-6 text-purple-400 mr-3" />
                  <div>
                    <p className="text-sm text-gray-400">Phone</p>
                    <p className="text-white">+1 (302) 464-0950</p>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-green-400 mr-3" />
                  <div>
                    <p className="text-sm text-gray-400">Location</p>
                    <p className="text-white">364 E Main St STE 1008, Middletown DE 19709</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}