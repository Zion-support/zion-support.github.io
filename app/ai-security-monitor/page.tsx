'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Shield, AlertTriangle, Eye, Lock, Zap, Users, Clock, Star, CheckCircle, ArrowRight, Sparkles, Activity, BarChart, Target, Rocket, Phone, Mail, MapPin } from 'lucide-react';

const AISecurityMonitorPage: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: 'Real-time Threat Detection',
      description: 'AI-powered monitoring that identifies security threats as they happen',
      color: 'text-red-400'
    },
    {
      icon: Eye,
      title: '24/7 Surveillance',
      description: 'Continuous monitoring of your entire infrastructure and applications',
      color: 'text-blue-400'
    },
    {
      icon: AlertTriangle,
      title: 'Instant Alerts',
      description: 'Immediate notifications when security incidents are detected',
      color: 'text-yellow-400'
    },
    {
      icon: Lock,
      title: 'Automated Response',
      description: 'AI automatically responds to threats and implements countermeasures',
      color: 'text-green-400'
    },
    {
      icon: Activity,
      title: 'Behavioral Analysis',
      description: 'Advanced AI analyzes user behavior to detect anomalies',
      color: 'text-purple-400'
    },
    {
      icon: BarChart,
      title: 'Security Analytics',
      description: 'Comprehensive reports and insights into your security posture',
      color: 'text-cyan-400'
    }
  ];

  const pricingPlans = [
    {
      name: 'Basic',
      price: '$199',
      period: '/month',
      description: 'Perfect for small businesses and startups',
      features: [
        'Real-time threat monitoring',
        'Basic AI detection',
        'Email alerts',
        'Standard support',
        '1TB log storage',
        'Up to 10 devices'
      ],
      color: 'border-gray-600',
      buttonColor: 'bg-gray-600 hover:bg-gray-700'
    },
    {
      name: 'Professional',
      price: '$399',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Advanced AI threat detection',
        'Automated incident response',
        'SMS & email alerts',
        'Priority support',
        '5TB log storage',
        'Up to 50 devices',
        'Custom security rules',
        'Compliance reporting'
      ],
      color: 'border-red-500',
      buttonColor: 'bg-red-500 hover:bg-red-600',
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$799',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Enterprise-grade AI monitoring',
        'Full automated response',
        'Multi-channel alerts',
        '24/7 dedicated support',
        'Unlimited log storage',
        'Unlimited devices',
        'Custom integrations',
        'Advanced analytics',
        'SOC integration'
      ],
      color: 'border-purple-500',
      buttonColor: 'bg-purple-500 hover:bg-purple-600'
    }
  ];

  const securityStats = [
    { label: 'Threats Blocked', value: '99.9%', icon: Shield },
    { label: 'Response Time', value: '< 30s', icon: Zap },
    { label: 'Uptime', value: '99.99%', icon: Clock },
    { label: 'Customer Satisfaction', value: '4.9/5', icon: Star }
  ];

  const testimonials = [
    {
      name: 'David Kim',
      role: 'CISO',
      company: 'TechCorp',
      content: 'AI Security Monitor has prevented multiple sophisticated attacks. The AI detection is incredibly accurate.',
      rating: 5
    },
    {
      name: 'Lisa Martinez',
      role: 'IT Director',
      company: 'FinanceFirst',
      content: 'We\'ve reduced our security incidents by 95% since implementing this solution. Highly recommended!',
      rating: 5
    },
    {
      name: 'James Wilson',
      role: 'Security Manager',
      company: 'HealthTech',
      content: 'The automated response capabilities have saved us countless hours and prevented potential breaches.',
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Security Monitor - Advanced Threat Detection | Zion Tech Group</title>
        <meta name="description" content="Protect your business with AI-powered security monitoring. Real-time threat detection, automated response, and 24/7 surveillance." />
        <meta name="keywords" content="AI security, threat detection, cybersecurity, security monitoring, automated response, threat intelligence" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-security-monitor" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid-advanced neural-network-bg matrix-rain data-stream">
        <Navigation />
        
        <main className="pt-24">
          {/* Hero Section */}
          <section className="container mx-auto px-4 py-16">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 holographic-text cyber-text glitch quantum-float hologram-flicker">
                AI Security Monitor
              </h1>
              <p className="text-xl md:text-2xl text-red-400 mb-8 font-medium cyber-glow neon-advanced cyber-scan-overlay">
                Advanced Threat Detection & Response
              </p>
              <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-12">
                Protect your business with AI-powered security monitoring that detects threats in real-time, 
                responds automatically, and provides comprehensive security analytics.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="#pricing"
                  className="cyber-button-advanced w-full sm:w-auto text-center cyber-pulse"
                >
                  <Shield className="w-5 h-5 mr-2 inline" />
                  Start Free Trial
                </a>
                <a
                  href="#demo"
                  className="cyber-button-advanced w-full sm:w-auto text-center cyber-pulse"
                >
                  <Activity className="w-5 h-5 mr-2 inline" />
                  View Demo
                </a>
              </div>
            </div>
          </section>

          {/* Security Stats */}
          <section className="container mx-auto px-4 py-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              {securityStats.map((stat, index) => (
                <div key={index} className="cyber-card-advanced quantum-hologram p-6 text-center quantum-float">
                  <stat.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4 quantum-entanglement" />
                  <div className="text-3xl font-bold text-white mb-2 neon-advanced">{stat.value}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Features Section */}
          <section className="container mx-auto px-4 py-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-advanced hologram-flicker cyber-scan-overlay">
              Advanced Security Features
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="cyber-card-advanced quantum-hologram p-6 hover:scale-105 transition-all duration-300 quantum-float">
                  <feature.icon className={`w-12 h-12 ${feature.color} mb-4 quantum-entanglement`} />
                  <h3 className="text-xl font-bold text-white mb-3 neon-advanced">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Pricing Section */}
          <section id="pricing" className="container mx-auto px-4 py-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-advanced hologram-flicker cyber-scan-overlay">
              Choose Your Security Plan
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`cyber-card-advanced quantum-hologram p-8 relative ${plan.color} ${plan.popular ? 'ring-2 ring-red-500 scale-105' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-red-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="text-4xl font-bold text-red-400 mb-2">
                      {plan.price}
                      <span className="text-lg text-gray-400">{plan.period}</span>
                    </div>
                    <p className="text-gray-300">{plan.description}</p>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-3 px-6 rounded-lg font-medium text-white transition-all duration-300 ${plan.buttonColor}`}>
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="container mx-auto px-4 py-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-advanced hologram-flicker cyber-scan-overlay">
              Trusted by Security Professionals
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="cyber-card-advanced quantum-hologram p-6 quantum-float">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role} at {testimonial.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="container mx-auto px-4 py-16">
            <div className="cyber-card-advanced quantum-hologram p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-advanced">
                Secure Your Business Today
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Don't wait for a security breach. Protect your business with AI-powered security monitoring 
                that works 24/7 to keep your data and systems safe.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="cyber-button-advanced w-full sm:w-auto text-center cyber-pulse"
                >
                  <Phone className="w-5 h-5 mr-2 inline" />
                  Call: (302) 464-0950
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="cyber-button-advanced w-full sm:w-auto text-center cyber-pulse"
                >
                  <Mail className="w-5 h-5 mr-2 inline" />
                  Email Us
                </a>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default AISecurityMonitorPage;