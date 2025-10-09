'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Zap, Shield, Clock, Users, TrendingUp, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, Phone, Mail, MapPin, DollarSign, Award, Lock, Database, Cloud, Code, Smartphone, Settings, BarChart3, FileText, Search, Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, Globe2, Map, Navigation, PieChart, TrendingDown, Activity, Zap as Lightning, Target as Crosshair, Shield as Security, Users as People, Star as StarIcon, CheckCircle as Check, ArrowRight as Arrow, Phone as PhoneIcon, Mail as MailIcon, MapPin as Location } from 'lucide-react';

const AIHRAssistantPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI Resume Screening',
      description: 'Intelligent resume analysis and candidate matching using advanced machine learning algorithms',
      benefits: ['95% screening accuracy', '50% faster hiring', 'Reduced bias in selection']
    },
    {
      icon: Users,
      title: 'Candidate Matching',
      description: 'AI-powered job-candidate matching based on skills, experience, and cultural fit',
      benefits: ['Better job fits', 'Reduced turnover', 'Improved retention']
    },
    {
      icon: MessageSquare,
      title: 'Automated Interviews',
      description: 'AI-powered initial screening interviews with natural language processing',
      benefits: ['24/7 availability', 'Consistent evaluation', 'Time savings']
    },
    {
      icon: BarChart,
      title: 'HR Analytics',
      description: 'Comprehensive HR analytics and insights for data-driven decision making',
      benefits: ['Performance insights', 'Trend analysis', 'Predictive analytics']
    },
    {
      icon: Shield,
      title: 'Compliance Management',
      description: 'Automated compliance tracking and reporting for HR regulations and policies',
      benefits: ['Reduced compliance risk', 'Automated reporting', 'Policy enforcement']
    },
    {
      icon: Clock,
      title: 'Employee Onboarding',
      description: 'Streamlined onboarding process with AI-powered personalization and automation',
      benefits: ['Faster onboarding', 'Better experience', 'Reduced administrative work']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$89/month',
      description: 'Perfect for small businesses with basic HR needs',
      features: [
        'Up to 50 employees',
        'Basic AI screening',
        'Standard analytics',
        'Email support',
        'Basic compliance',
        'Standard onboarding'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$179/month',
      description: 'Ideal for growing companies with complex HR requirements',
      features: [
        'Up to 200 employees',
        'Advanced AI features',
        'Comprehensive analytics',
        'Priority support',
        'Advanced compliance',
        'Custom onboarding',
        'Performance tracking'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$349/month',
      description: 'Complete solution for large organizations',
      features: [
        'Unlimited employees',
        'Custom AI models',
        'White-label solution',
        'Dedicated support',
        'Custom development',
        'API access',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  const hrFunctions = [
    {
      title: 'Recruitment',
      description: 'Streamline your hiring process with AI-powered candidate screening and matching',
      icon: Users,
      benefits: ['50% faster hiring', 'Better candidate quality', 'Reduced costs']
    },
    {
      title: 'Performance Management',
      description: 'Track and analyze employee performance with AI-powered insights and recommendations',
      icon: TrendingUp,
      benefits: ['Objective evaluations', 'Performance insights', 'Goal tracking']
    },
    {
      title: 'Employee Engagement',
      description: 'Monitor and improve employee satisfaction with AI-powered engagement analytics',
      icon: Heart,
      benefits: ['Higher retention', 'Better satisfaction', 'Reduced turnover']
    },
    {
      title: 'Learning & Development',
      description: 'Personalized training recommendations and skill development tracking',
      icon: GraduationCap,
      benefits: ['Personalized learning', 'Skill tracking', 'Career development']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      <Helmet>
        <title>AI HR Assistant - Zion Tech Group</title>
        <meta name="description" content="AI-powered HR management with automated screening, candidate matching, and performance analytics. Starting at $89/month." />
        <meta name="keywords" content="ai hr assistant, hr management, recruitment ai, employee analytics, hr automation, talent management" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-purple-600/20 text-purple-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Brain className="w-4 h-4" />
            <span>AI-Powered HR Intelligence</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
            AI HR Assistant
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your HR operations with AI-powered recruitment, performance management, 
            and employee analytics. Streamline processes and make data-driven HR decisions.
          </p>
          
          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card">
              <div className="text-3xl font-bold text-cyan-400 mb-2">95%</div>
              <div className="text-gray-300">Screening Accuracy</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card">
              <div className="text-3xl font-bold text-green-400 mb-2">50%</div>
              <div className="text-gray-300">Faster Hiring</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card">
              <div className="text-3xl font-bold text-purple-400 mb-2">40%</div>
              <div className="text-gray-300">Cost Reduction</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card">
              <div className="text-3xl font-bold text-orange-400 mb-2">24/7</div>
              <div className="text-gray-300">AI Support</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:kleber@ziontechgroup.com?subject=AI HR Assistant Demo Request"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all cyber-button"
            >
              Get Free Demo
            </a>
            <a
              href="tel:+13024640950"
              className="bg-transparent border-2 border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-medium hover:bg-cyan-500 hover:text-white transition-all"
            >
              Call (302) 464-0950
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Powerful AI Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 cyber-card">
                <feature.icon className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HR Functions Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600/20 to-blue-600/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            HR Functions Covered
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {hrFunctions.map((function_, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card">
                <function_.icon className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{function_.title}</h3>
                <p className="text-gray-300 mb-4">{function_.description}</p>
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-cyan-400">Key Benefits:</h4>
                  <ul className="space-y-1">
                    {function_.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Simple, Transparent Pricing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-lg p-8 hover:bg-white/20 transition-all duration-300 cyber-card ${plan.popular ? 'ring-2 ring-cyan-500' : ''}`}>
                {plan.popular && (
                  <div className="bg-cyan-500 text-white text-sm font-medium px-3 py-1 rounded-full text-center mb-4">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-300 mb-4">{plan.description}</p>
                <div className="text-4xl font-bold text-cyan-400 mb-6">{plan.price}</div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href={`mailto:kleber@ziontechgroup.com?subject=AI HR Assistant - ${plan.name} Plan`}
                  className="block w-full text-center bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all"
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your HR Operations?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Join leading companies using AI HR Assistant to streamline their human resources management.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:kleber@ziontechgroup.com?subject=AI HR Assistant - Ready to Start"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Start Free Trial
            </a>
            <a
              href="tel:+13024640950"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-purple-600 transition-colors"
            >
              Call (302) 464-0950
            </a>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-8 px-4 bg-slate-900/50">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
            <div className="flex items-center space-x-2">
              <Phone className="w-5 h-5 text-cyan-400" />
              <span className="text-white font-medium">+1 302 464 0950</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-5 h-5 text-cyan-400" />
              <span className="text-white font-medium">kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-5 h-5 text-cyan-400" />
              <span className="text-white font-medium">Middletown, DE</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIHRAssistantPage;