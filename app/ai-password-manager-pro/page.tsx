'use client';

import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Lock, 
  Shield, 
  CheckCircle, 
  Star, 
  ArrowRight, 
  Download, 
  Upload, 
  BarChart3, 
  Target, 
  Calendar,
  Key,
  Eye,
  EyeOff,
  Copy,
  RefreshCw,
  AlertTriangle,
  Zap,
  Smartphone,
  Globe,
  Users,
  Award,
  MessageSquare,
  Phone,
  Mail,
  MapPin,
  Settings,
  Bot,
  Palette,
  Send,
  FileText,
  Edit,
  Trash2,
  Share2,
  Clock,
  TrendingUp,
  PieChart,
  Database,
  Cpu,
  Wifi,
  WifiOff
} from 'lucide-react';

const AIPasswordManagerPro: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    document.title = 'AI Password Manager Pro - Advanced Security Management | Zion Tech Group';
  }, []);

  const features = [
    {
      icon: Lock,
      title: "AI-Powered Password Generation",
      description: "Generate ultra-secure passwords using AI that learns your security preferences and creates unique combinations",
      benefits: ["Smart generation", "Custom rules", "Strength analysis", "Pattern learning"]
    },
    {
      icon: Shield,
      title: "Zero-Knowledge Architecture",
      description: "Your passwords are encrypted locally and never stored on our servers. Only you can access your data",
      benefits: ["Local encryption", "Zero-knowledge", "End-to-end security", "Privacy first"]
    },
    {
      icon: Zap,
      title: "Smart Auto-Fill",
      description: "AI-powered auto-fill that learns your login patterns and adapts to different websites and applications",
      benefits: ["Intelligent filling", "Pattern recognition", "Cross-platform sync", "Context awareness"]
    },
    {
      icon: BarChart3,
      title: "Security Analytics",
      description: "Comprehensive security insights with breach monitoring, weak password detection, and security scoring",
      benefits: ["Breach monitoring", "Weak password alerts", "Security scoring", "Risk assessment"]
    },
    {
      icon: Smartphone,
      title: "Universal Access",
      description: "Access your passwords securely across all devices with biometric authentication and cloud sync",
      benefits: ["Biometric auth", "Cloud sync", "Offline access", "Multi-device"]
    },
    {
      icon: Globe,
      title: "Dark Web Monitoring",
      description: "Continuous monitoring of the dark web for your credentials and immediate breach notifications",
      benefits: ["Dark web scans", "Breach alerts", "Identity protection", "Real-time monitoring"]
    }
  ];

  const pricingPlans = [
    {
      name: "Personal",
      price: "$9",
      period: "per month",
      description: "Perfect for individuals and families",
      features: [
        "Unlimited passwords",
        "5 devices",
        "Basic auto-fill",
        "Password generator",
        "Secure sharing",
        "Dark web monitoring",
        "Mobile apps",
        "Email support"
      ],
      popular: false,
      cta: "Start Free Trial"
    },
    {
      name: "Family",
      price: "$19",
      period: "per month",
      description: "Ideal for families and small teams",
      features: [
        "Everything in Personal",
        "10 devices",
        "Advanced auto-fill",
        "Family sharing",
        "Priority support",
        "Advanced analytics",
        "Custom categories",
        "API access"
      ],
      popular: true,
      cta: "Start Free Trial"
    },
    {
      name: "Business",
      price: "$49",
      period: "per month",
      description: "For businesses and organizations",
      features: [
        "Everything in Family",
        "Unlimited devices",
        "Team management",
        "Admin dashboard",
        "SSO integration",
        "Advanced security",
        "Compliance reporting",
        "Dedicated support"
      ],
      popular: false,
      cta: "Contact Sales"
    }
  ];

  const testimonials = [
    {
      name: "Rachel Green",
      role: "IT Security Manager",
      company: "SecureCorp",
      content: "AI Password Manager Pro reduced our security incidents by 95%. The AI-powered breach monitoring is incredibly effective.",
      rating: 5,
      avatar: "RG"
    },
    {
      name: "Mark Thompson",
      role: "Small Business Owner",
      company: "Thompson Consulting",
      content: "Finally, a password manager that actually understands my needs. The AI auto-fill works perfectly across all my devices.",
      rating: 5,
      avatar: "MT"
    },
    {
      name: "Sarah Johnson",
      role: "Family User",
      company: "Personal",
      content: "The family sharing feature is amazing. My kids can access their accounts safely, and I have complete control.",
      rating: 5,
      avatar: "SJ"
    }
  ];

  const stats = [
    { number: "100,000+", label: "Passwords Protected", icon: Lock },
    { number: "99.9%", label: "Uptime Guarantee", icon: Shield },
    { number: "95%", label: "Security Improvement", icon: TrendingUp },
    { number: "4.9/5", label: "User Rating", icon: Star }
  ];

  const securityFeatures = [
    {
      icon: Database,
      title: "AES-256 Encryption",
      description: "Military-grade encryption protects your data with the same standard used by banks and governments"
    },
    {
      icon: Cpu,
      title: "Zero-Knowledge Architecture",
      description: "Your master password is never transmitted or stored. Only you can decrypt your data"
    },
    {
      icon: Wifi,
      title: "Secure Sync",
      description: "End-to-end encrypted synchronization across all your devices with perfect forward secrecy"
    },
    {
      icon: AlertTriangle,
      title: "Breach Monitoring",
      description: "Continuous monitoring of data breaches and immediate alerts if your credentials are compromised"
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Password Manager Pro - Advanced Security Management | Zion Tech Group</title>
        <meta name="description" content="Ultimate AI-powered password manager with zero-knowledge architecture, smart auto-fill, and dark web monitoring. Protect your digital life with military-grade security. Starting at $9/month." />
        <meta name="keywords" content="AI password manager, password security, password generator, dark web monitoring, zero-knowledge encryption, password vault" />
        <meta property="og:title" content="AI Password Manager Pro - Advanced Security Management" />
        <meta property="og:description" content="Ultimate AI-powered password manager with zero-knowledge architecture, smart auto-fill, and dark web monitoring." />
        <meta property="og:url" content="https://ziontechgroup.com/ai-password-manager-pro" />
        <meta property="og:type" content="product" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Password Manager Pro - Advanced Security Management" />
        <meta name="twitter:description" content="Ultimate AI-powered password manager with zero-knowledge architecture, smart auto-fill, and dark web monitoring." />
        <link rel="canonical" href="https://ziontechgroup.com/ai-password-manager-pro" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-20 pb-16">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(0,255,255,0.1)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.1)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-400 text-sm font-medium mb-8">
                <Shield className="w-4 h-4 mr-2" />
                AI-Powered Security Management
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                AI Password Manager
                <span className="block bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Pro
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                Protect your digital life with AI-powered password management. Zero-knowledge architecture, 
                smart auto-fill, and dark web monitoring keep your credentials secure and accessible.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 inline-flex items-center">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 inline-flex items-center">
                  <Download className="w-5 h-5 mr-2" />
                  Download App
                </button>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="flex items-center justify-center w-12 h-12 bg-cyan-500/10 rounded-lg mx-auto mb-3">
                      <stat.icon className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div className="text-2xl font-bold text-white mb-1">{stat.number}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Advanced AI Security Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI technology provides intelligent password management that adapts to your 
                security needs while maintaining the highest levels of protection.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 hover:border-cyan-400/50 transition-all duration-300 group">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg mb-6 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{feature.description}</p>
                  
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
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
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Military-Grade Security
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Your passwords are protected with the same encryption standards used by 
                banks, governments, and military organizations worldwide.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {securityFeatures.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 text-center hover:border-cyan-400/50 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-400">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Simple, Secure Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your security needs. All plans include our core AI features 
                with a 30-day free trial and no setup fees.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`relative bg-slate-800/50 backdrop-blur-sm border rounded-xl p-8 ${plan.popular ? 'border-cyan-400 scale-105' : 'border-slate-700'}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-2">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-300 ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white transform hover:scale-105' 
                      : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white'
                  }`}>
                    {plan.cta}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Trusted by Security Professionals
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See how AI Password Manager Pro is protecting digital identities 
                for individuals and organizations worldwide.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">"{testimonial.content}"</p>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-sm text-gray-400">{testimonial.role}</div>
                      <div className="text-sm text-cyan-400">{testimonial.company}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-500/10 to-purple-600/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Secure Your Digital Life?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join millions of users who trust AI Password Manager Pro to protect their most sensitive data.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 inline-flex items-center">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 inline-flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                Call +1 302 464 0950
              </button>
            </div>
            
            <div className="mt-8 text-sm text-gray-400">
              <p>30-day free trial • No credit card required • Cancel anytime</p>
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-12 bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex items-center justify-center text-gray-300">
                  <Phone className="w-5 h-5 mr-2 text-cyan-400" />
                  <a href="tel:+13024640950" className="hover:text-cyan-400 transition-colors">
                    +1 302 464 0950
                  </a>
                </div>
                <div className="flex items-center justify-center text-gray-300">
                  <Mail className="w-5 h-5 mr-2 text-cyan-400" />
                  <a href="mailto:kleber@ziontechgroup.com" className="hover:text-cyan-400 transition-colors">
                    kleber@ziontechgroup.com
                  </a>
                </div>
                <div className="flex items-center justify-center text-gray-300">
                  <MapPin className="w-5 h-5 mr-2 text-cyan-400" />
                  <span>364 E Main St STE 1008, Middletown, DE 19709</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIPasswordManagerPro;