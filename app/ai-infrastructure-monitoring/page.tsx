<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
import { Helmet } from 'react-helmet-async';

const aiinfrastructuremonitoringPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Ai Infrastructure Monitoring | Zion Tech Group</title>
        <meta name="description" content="Professional ai infrastructure monitoring services by Zion Tech Group. Advanced AI and IT solutions for your business." />
        <meta name="keywords" content="ai infrastructure monitoring, AI solutions, IT services, Zion Tech Group" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Ai Infrastructure Monitoring
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Professional ai infrastructure monitoring services powered by advanced AI and cutting-edge technology.
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-12">
              <h2 className="text-2xl font-semibold text-white mb-4">Why Choose Zion Tech Group?</h2>
              <div className="grid md:grid-cols-3 gap-6 text-left">
                <div className="bg-cyan-500/20 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-cyan-400 mb-2">Advanced AI</h3>
                  <p className="text-gray-300">Cutting-edge artificial intelligence solutions</p>
                </div>
                <div className="bg-purple-500/20 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-purple-400 mb-2">Expert Team</h3>
                  <p className="text-gray-300">Experienced professionals with proven track record</p>
                </div>
                <div className="bg-pink-500/20 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-pink-400 mb-2">24/7 Support</h3>
                  <p className="text-gray-300">Round-the-clock technical support and monitoring</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <a 
                href="/contact" 
                className="inline-block bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
              >
                Get Started Today
              </a>
              <div>
                <a 
                  href="/" 
                  className="text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  ← Back to Home
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default aiinfrastructuremonitoringPage;
=======
'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Activity, Brain, TrendingUp, CheckCircle, ArrowRight, BarChart, Users, Lock, Eye, Target, Server, Zap } from 'lucide-react';

const AIInfrastructureMonitoringPro: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-400 text-sm font-medium mb-6">
              <Activity className="w-4 h-4 mr-2" />
              AI Infrastructure Monitoring
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              AI Infrastructure Monitoring
              <span className="block bg-gradient-to-r from-blue-400 via-purple-500 to-pink-600 bg-clip-text text-transparent">
                Pro
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
              Advanced AI-powered infrastructure monitoring that prevents 99.9% of outages, 
              reduces downtime by 80%, and provides predictive maintenance with real-time insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 inline-flex items-center">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border border-gray-600 text-white hover:bg-white/10 font-bold py-4 px-8 rounded-lg transition-all duration-300 inline-flex items-center">
                <Eye className="w-5 h-5 mr-2" />
                Watch Demo
              </button>
=======
import React from 'react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import SEOOptimizer from '../../components/SEOOptimizer';
import { Activity, Shield, CheckCircle, Star, ArrowRight, Zap, Brain, Globe, Phone, Mail, MapPin, Award, TrendingUp, MessageSquare, Cpu, Database, Smartphone, Settings, FileText, Star as StarIcon, Award as AwardIcon, Shield as ShieldIcon, Users as UsersIcon } from 'lucide-react';

export default function AIInfrastructureMonitoringPage() {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Monitoring',
      description: 'Advanced machine learning algorithms that predict and prevent infrastructure issues before they occur.'
    },
    {
      icon: Activity,
      title: 'Real-Time Analytics',
      description: 'Comprehensive monitoring of servers, networks, applications, and cloud infrastructure in real-time.'
    },
    {
      icon: Shield,
      title: 'Predictive Security',
      description: 'AI-driven security monitoring that detects threats and vulnerabilities before they impact your systems.'
    },
    {
      icon: Cpu,
      title: 'Performance Optimization',
      description: 'Intelligent resource allocation and performance tuning based on usage patterns and predictions.'
    },
    {
      icon: Database,
      title: 'Automated Remediation',
      description: 'AI-powered automated fixes for common issues, reducing downtime and manual intervention.'
    },
    {
      icon: Globe,
      title: 'Multi-Cloud Support',
      description: 'Monitor infrastructure across AWS, Azure, GCP, and on-premises environments from a single dashboard.'
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$299',
      period: '/month',
      description: 'Perfect for small teams',
      features: [
        'Up to 50 servers',
        'Basic AI monitoring',
        'Email alerts',
        'Standard support',
        'Basic analytics'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$799',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 200 servers',
        'Advanced AI features',
        'Multi-channel alerts',
        'Priority support',
        'Advanced analytics',
        'Custom dashboards'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$1,800',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited servers',
        'Full AI capabilities',
        'Custom integrations',
        '24/7 support',
        'Dedicated manager',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'DevOps Manager, CloudTech Solutions',
      content: 'AI Infrastructure Monitoring has revolutionized our operations. We\'ve reduced downtime by 80% and improved performance significantly.',
      rating: 5,
      avatar: '/images/testimonials/sarah-johnson.jpg'
    },
    {
      name: 'Michael Chen',
      role: 'CTO, DataFlow Inc',
      content: 'The predictive capabilities are incredible. Issues are resolved before they become problems, saving us thousands in downtime costs.',
      rating: 5,
      avatar: '/images/testimonials/michael-chen.jpg'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Infrastructure Director, ScaleUp Corp',
      content: 'The AI insights have helped us optimize our infrastructure costs by 30% while improving performance. Highly recommended!',
      rating: 5,
      avatar: '/images/testimonials/emily-rodriguez.jpg'
    }
  ];

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008, Middletown, DE 19709'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOOptimizer 
        title="AI Infrastructure Monitoring Pro - Intelligent Infrastructure Management | Zion Tech Group"
        description="Advanced AI-powered infrastructure monitoring with predictive analytics, automated remediation, and performance optimization. Reduce downtime by 80% with intelligent monitoring."
        keywords="AI infrastructure monitoring, predictive analytics, infrastructure management, automated remediation, performance monitoring, cloud monitoring"
      />
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-full px-4 py-2 mb-6">
              <Activity className="w-4 h-4 text-cyan-400" />
              <span className="text-cyan-400 text-sm font-medium">AI Infrastructure Monitoring Pro</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 cyber-text neon-pulse">
              AI Infrastructure Monitoring Pro
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
              Advanced AI-powered infrastructure monitoring with predictive analytics, automated remediation, 
              and performance optimization. Reduce downtime by 80% with intelligent monitoring.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center space-x-2 bg-cyan-500/20 px-4 py-2 rounded-lg">
                <Star className="w-5 h-5 text-cyan-400" />
                <span className="text-white font-medium">4.8/5 Rating</span>
              </div>
              <div className="flex items-center space-x-2 bg-purple-500/20 px-4 py-2 rounded-lg">
                <Activity className="w-5 h-5 text-purple-400" />
                <span className="text-white font-medium">12,000+ Servers Monitored</span>
              </div>
              <div className="flex items-center space-x-2 bg-green-500/20 px-4 py-2 rounded-lg">
                <TrendingUp className="w-5 h-5 text-green-400" />
                <span className="text-white font-medium">80% Downtime Reduction</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 inline-flex items-center"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a
                href="tel:+13024640950"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call: (302) 464-0950
              </a>
>>>>>>> origin/cursor/website-audit-and-update-with-deployment-f003
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
<<<<<<< HEAD
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Intelligent Infrastructure Monitoring
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI system provides comprehensive monitoring of your entire infrastructure stack 
              with predictive analytics and automated incident response.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                title: 'Predictive Analytics',
                description: 'AI-powered prediction of infrastructure issues',
                features: ['Anomaly Detection', 'Failure Prediction', 'Capacity Planning']
              },
              {
                icon: Server,
                title: 'Server Monitoring',
                description: 'Comprehensive server health and performance monitoring',
                features: ['CPU Monitoring', 'Memory Tracking', 'Disk Analysis']
              },
              {
                icon: Zap,
                title: 'Real-time Alerts',
                description: 'Instant notifications for critical issues',
                features: ['Smart Alerting', 'Escalation Rules', 'Mobile Notifications']
              },
              {
                icon: BarChart,
                title: 'Performance Analytics',
                description: 'Detailed performance metrics and reporting',
                features: ['Trend Analysis', 'Capacity Reports', 'Performance Dashboards']
              },
              {
                icon: Target,
                title: 'Automated Response',
                description: 'Automated incident response and remediation',
                features: ['Auto-healing', 'Script Execution', 'Workflow Automation']
              },
              {
                icon: Lock,
                title: 'Security Monitoring',
                description: 'Advanced security threat detection',
                features: ['Threat Detection', 'Vulnerability Scanning', 'Compliance Monitoring']
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-6">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.features.map((item, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Proven Infrastructure Results
            </h2>
            <p className="text-xl text-gray-300">
              Our clients have achieved remarkable improvements in infrastructure reliability and performance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { metric: '99.9%', label: 'Uptime Reliability', icon: Activity },
              { metric: '80%', label: 'Downtime Reduction', icon: TrendingUp },
              { metric: '70%', label: 'Cost Savings', icon: BarChart },
              { metric: '95%', label: 'Issue Prevention', icon: Target }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-white mb-2">{stat.metric}</div>
                <div className="text-gray-300">{stat.label}</div>
=======
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Intelligent Monitoring Features
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Everything you need for comprehensive infrastructure monitoring and management
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 rounded-lg p-6 hover:bg-slate-700/50 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
>>>>>>> origin/cursor/website-audit-and-update-with-deployment-f003
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
<<<<<<< HEAD
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Flexible Pricing Plans
            </h2>
            <p className="text-xl text-gray-300">
              Choose the plan that fits your infrastructure size and monitoring needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Small Business',
                price: '$1,800',
                period: '/month',
                description: 'Perfect for small businesses',
                features: [
                  'Up to 50 servers',
                  'Basic monitoring',
                  'Email support',
                  'Standard reporting',
                  'API access'
                ],
                popular: false
              },
              {
                name: 'Enterprise',
                price: '$2,500',
                period: '/month',
                description: 'Ideal for growing enterprises',
                features: [
                  'Up to 500 servers',
                  'Advanced AI features',
                  'Priority support',
                  'Custom reporting',
                  'Real-time analytics',
                  'Integration support'
                ],
                popular: true
              },
              {
                name: 'Global',
                price: 'Custom',
                period: '',
                description: 'For large global operations',
                features: [
                  'Unlimited servers',
                  'Custom AI models',
                  '24/7 dedicated support',
                  'White-label solution',
                  'Multi-region support',
                  'Custom integrations'
                ],
                popular: false
              }
            ].map((plan, index) => (
              <div key={index} className={`relative bg-white/5 backdrop-blur-sm border rounded-xl p-8 ${plan.popular ? 'border-blue-500/50 ring-2 ring-blue-500/20' : 'border-white/10'}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium">
=======
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your infrastructure monitoring needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-slate-800/50 rounded-lg p-8 relative ${plan.popular ? 'ring-2 ring-cyan-400' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium">
>>>>>>> origin/cursor/website-audit-and-update-with-deployment-f003
                      Most Popular
                    </span>
                  </div>
                )}
<<<<<<< HEAD
                <div className="text-center mb-8">
=======
                
                <div className="text-center mb-6">
>>>>>>> origin/cursor/website-audit-and-update-with-deployment-f003
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                </div>
<<<<<<< HEAD
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-300 ${
                  plan.popular 
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white' 
                    : 'border border-gray-600 text-white hover:bg-white/10'
                }`}>
                  {plan.name === 'Global' ? 'Contact Sales' : 'Get Started'}
                </button>
=======
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <a
                  href="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                      : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              What Our Customers Say
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Join thousands of satisfied customers who trust us with their infrastructure monitoring
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-800/50 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="text-white font-semibold">{testimonial.name}</div>
                    <div className="text-gray-400 text-sm">{testimonial.role}</div>
                  </div>
                </div>
>>>>>>> origin/cursor/website-audit-and-update-with-deployment-f003
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
<<<<<<< HEAD
      <section className="py-20 px-4 bg-gradient-to-r from-slate-800 to-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Monitor Your Infrastructure?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join organizations worldwide who trust our AI-powered infrastructure monitoring solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 inline-flex items-center">
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="border border-gray-600 text-white hover:bg-white/10 font-bold py-4 px-8 rounded-lg transition-all duration-300 inline-flex items-center">
              <Users className="w-5 h-5 mr-2" />
              Schedule Demo
            </button>
=======
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-purple-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Optimize Your Infrastructure?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Start your free trial today and experience the power of AI-driven infrastructure monitoring.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors inline-flex items-center"
            >
              <Activity className="w-5 h-5 mr-2" />
              Start Free Trial
            </a>
            <a
              href="tel:+13024640950"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-cyan-600 transition-colors inline-flex items-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call: (302) 464-0950
            </a>
>>>>>>> origin/cursor/website-audit-and-update-with-deployment-f003
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
<<<<<<< HEAD
};

export default AIInfrastructureMonitoringPro;
>>>>>>> origin/cursor/website-audit-and-update-with-deployment-d464
=======
}
>>>>>>> origin/cursor/website-audit-and-update-with-deployment-f003
