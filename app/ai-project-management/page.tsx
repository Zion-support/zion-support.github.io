'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import { CheckCircle, Star, Zap, Shield, Clock, Users, TrendingUp, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, Phone, Mail, MapPin, Calendar, FileText, GitBranch, PieChart, Activity, AlertCircle, Settings, Users2, Target as TargetIcon, BarChart3, Clock3, DollarSign, Award, Lock, Database, Cloud, Code, Smartphone, Settings as SettingsIcon, BarChart as BarChartIcon, FileText as FileTextIcon, Search, Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar as CalendarIcon, Compass, Globe2, Map, Navigation as NavigationIcon, TrendingDown } from 'lucide-react';

const AIProjectManagementPage: React.FC = () => {
  const features = [
    'AI-powered task prioritization and scheduling',
    'Intelligent resource allocation and workload balancing',
    'Predictive project timeline forecasting',
    'Automated risk assessment and mitigation',
    'Smart team collaboration and communication',
    'Real-time progress tracking and analytics',
    'Automated status reporting and updates',
    'Integration with 50+ popular tools',
    'Custom workflow automation',
    'Advanced project templates and best practices'
  ];

  const benefits = [
    'Increase project success rate by 40%',
    'Reduce project delivery time by 30%',
    'Improve team productivity by 50%',
    'Minimize project risks and delays',
    'Save 20+ hours per week on project management',
    'Enhance team collaboration and communication',
    'Make data-driven project decisions',
    'Scale project management across teams'
  ];

  const pricing = [
    {
      name: 'Starter',
      price: '$99/month',
      description: 'Perfect for small teams',
      features: [
        'Up to 5 team members',
        '10 active projects',
        'Basic AI insights',
        'Standard integrations',
        'Email support'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$199/month',
      description: 'Ideal for growing teams',
      features: [
        'Up to 25 team members',
        'Unlimited projects',
        'Advanced AI analytics',
        'All integrations',
        'Priority support',
        'Custom workflows'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$399/month',
      description: 'For large organizations',
      features: [
        'Unlimited team members',
        'Unlimited projects',
        'AI-powered insights',
        'Custom integrations',
        'Dedicated support',
        'Advanced security',
        'Custom training'
      ],
      popular: false
    }
  ];

  const integrations = [
    'Slack', 'Microsoft Teams', 'Jira', 'Asana', 'Trello', 'Monday.com',
    'GitHub', 'GitLab', 'Bitbucket', 'Azure DevOps', 'Google Workspace',
    'Microsoft 365', 'Salesforce', 'HubSpot', 'Zapier', 'Webhook'
  ];

  return (
    <>
      <SEOOptimizer
        title="AI Project Management Platform - Zion Tech Group"
        description="Revolutionary AI-powered project management with intelligent task prioritization, resource allocation, and predictive analytics. Increase project success by 40%."
        keywords={['AI project management', 'project management software', 'team collaboration', 'project planning', 'resource management', 'project analytics']}
        canonicalUrl="https://ziontechgroup.com/ai-project-management"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        <main className="pt-16">
          {/* Hero Section */}
          <section className="container mx-auto px-4 py-16 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
                AI Project Management Platform
              </h1>
              <p className="text-xl md:text-2xl text-cyan-400 mb-8">
                Revolutionary project management powered by artificial intelligence
              </p>
              <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
                Transform your project management with AI-driven insights, intelligent resource allocation, 
                and predictive analytics. Increase project success rates by 40% while saving 20+ hours per week.
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
                Powerful AI Features
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
                Proven Benefits
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
                Simple, Transparent Pricing
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
                Connect with your favorite tools and platforms for a unified project management experience.
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
                Ready to Transform Your Project Management?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of teams already using AI to manage their projects more effectively
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

export default AIProjectManagementPage;