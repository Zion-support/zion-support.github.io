'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import { CheckCircle, Star, Zap, Shield, Clock, Users, TrendingUp, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, Phone, Mail, MapPin, Calendar, FileText, GitBranch, PieChart, Activity, AlertCircle, Settings, Users2, Target as TargetIcon, BarChart3, Clock3, DollarSign, Award, Lock, Database, Cloud, Code, Smartphone, Settings as SettingsIcon, BarChart as BarChartIcon, FileText as FileTextIcon, Search, Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar as CalendarIcon, Compass, Globe2, Map, Navigation as NavigationIcon, TrendingDown, UserCheck, UserPlus, UserX, UserCog, UserSearch, UserEdit, UserMinus, UserClock, UserStar, UserShield, UserHeart, UserCheck2, UserPlus2, UserX2, UserCog2, UserSearch2, UserEdit2, UserMinus2, UserClock2, UserStar2, UserShield2, UserHeart2 } from 'lucide-react';

const AIHRManagementPage: React.FC = () => {
  const features = [
    'AI-powered candidate screening and matching',
    'Intelligent resume parsing and skill extraction',
    'Automated interview scheduling and coordination',
    'Predictive analytics for employee retention',
    'Smart performance evaluation and feedback',
    'Automated payroll processing and benefits management',
    'Employee engagement monitoring and insights',
    'Compliance tracking and reporting',
    'Learning and development recommendations',
    'Advanced workforce analytics and reporting'
  ];

  const benefits = [
    'Reduce hiring time by 50%',
    'Improve candidate quality by 35%',
    'Increase employee retention by 40%',
    'Reduce HR administrative tasks by 60%',
    'Enhance employee satisfaction scores',
    'Save 25+ hours per week on HR tasks',
    'Improve compliance and reduce risks',
    'Optimize workforce planning and allocation'
  ];

  const pricing = [
    {
      name: 'Startup',
      price: '$199/month',
      description: 'Perfect for small teams',
      features: [
        'Up to 50 employees',
        'Basic AI screening',
        'Standard integrations',
        'Email support',
        'Core HR features',
        'Mobile app access'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$399/month',
      description: 'Ideal for growing companies',
      features: [
        'Up to 200 employees',
        'Advanced AI analytics',
        'All integrations',
        'Priority support',
        'Custom workflows',
        'Advanced reporting',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$799/month',
      description: 'For large organizations',
      features: [
        'Unlimited employees',
        'AI-powered insights',
        'Custom integrations',
        'Dedicated support',
        'Advanced security',
        'Custom training',
        'White-label options',
        'Multi-tenant support'
      ],
      popular: false
    }
  ];

  const integrations = [
    'LinkedIn', 'Indeed', 'Glassdoor', 'ZipRecruiter', 'Monster', 'CareerBuilder',
    'Slack', 'Microsoft Teams', 'Google Workspace', 'Microsoft 365', 'Zoom',
    'ADP', 'Paychex', 'Workday', 'BambooHR', 'Greenhouse', 'Zapier'
  ];

  return (
    <>
      <SEOOptimizer
        title="AI HR Management System - Zion Tech Group"
        description="Revolutionary AI-powered HR management with intelligent recruitment, performance analytics, and employee engagement. Reduce hiring time by 50% and improve retention by 40%."
        keywords={['AI HR management', 'HR software', 'recruitment automation', 'employee management', 'performance analytics', 'workforce optimization']}
        canonicalUrl="https://ziontechgroup.com/ai-hr-management"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        <main className="pt-16">
          {/* Hero Section */}
          <section className="container mx-auto px-4 py-16 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
                AI HR Management System
              </h1>
              <p className="text-xl md:text-2xl text-cyan-400 mb-8">
                Intelligent human resources management powered by artificial intelligence
              </p>
              <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
                Transform your HR operations with AI-driven recruitment, performance management, 
                and employee engagement. Reduce hiring time by 50% while improving retention by 40%.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                <a
                  href="tel:+13024640950"
                  className="cyber-button flex items-center space-x-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call (302) 464-0950</span>
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="cyber-button flex items-center space-x-2"
                  style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
                >
                  <Mail className="w-5 h-5" />
                  <span>Get Free Demo</span>
                </a>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-16 px-4">
            <div className="container mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
                Comprehensive HR Features
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                    <div className="flex items-center mb-4">
                      <CheckCircle className="w-6 h-6 text-green-400 mr-3" />
                      <h3 className="text-lg font-bold text-white">{feature}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="py-16 px-4 bg-gradient-to-r from-purple-600/20 to-blue-600/20">
            <div className="container mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
                Measurable Results
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="cyber-card p-6 text-center">
                    <div className="text-3xl font-bold text-cyan-400 mb-2 neon-text">
                      {benefit.split(' ')[0]}
                    </div>
                    <div className="text-gray-300">{benefit}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Pricing Section */}
          <section className="py-16 px-4">
            <div className="container mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
                Scalable Pricing Plans
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {pricing.map((plan, index) => (
                  <div key={index} className={`cyber-card p-8 relative ${plan.popular ? 'ring-2 ring-cyan-400' : ''}`}>
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                          Most Popular
                        </span>
                      </div>
                    )}
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                      <p className="text-gray-300 mb-4">{plan.description}</p>
                      <div className="text-4xl font-bold text-cyan-400 mb-2">{plan.price}</div>
                    </div>
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <a
                      href={`mailto:kleber@ziontechgroup.com?subject=Interest in ${plan.name} Plan`}
                      className="w-full cyber-button text-center block"
                    >
                      Get Started
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Integrations Section */}
          <section className="py-16 px-4 bg-gradient-to-r from-purple-600/20 to-blue-600/20">
            <div className="container mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
                Seamless Integrations
              </h2>
              <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto">
                Connect with your existing HR tools, job boards, and communication platforms for a unified HR experience.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {integrations.map((integration, index) => (
                  <div key={index} className="cyber-card p-4 text-center hover:scale-105 transition-all duration-300">
                    <div className="text-2xl mb-2">🔗</div>
                    <div className="text-white font-medium">{integration}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="container mx-auto px-4 py-16 text-center">
            <div className="cyber-card p-12 max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
                Ready to Transform Your HR Operations?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join hundreds of companies already using AI to optimize their human resources management
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="cyber-button flex items-center justify-center space-x-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call (302) 464-0950</span>
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="cyber-button flex items-center justify-center space-x-2"
                  style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
                >
                  <Mail className="w-5 h-5" />
                  <span>Get Free Demo</span>
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

export default AIHRManagementPage;