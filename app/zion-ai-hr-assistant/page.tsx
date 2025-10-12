'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, CheckCircle, Star, Users, Award, Zap, Shield, Brain, Cloud, Code, 
  BarChart, FileText, MessageCircle, Target, CheckSquare, DollarSign, Box, 
  Settings, Heart, Eye, Mic, Workflow, Link as LinkIcon, Wifi, Package, 
  TrendingUp, Calendar, ShoppingCart, Sparkles, Cpu, Globe, Database, 
  Smartphone, Lock, Monitor, Server, Mail, Phone, MapPin, Clock, 
  UserCheck, UserPlus, UserX, Briefcase, GraduationCap, ClipboardList,
  PieChart, Activity, RefreshCw, Download, Upload, Maximize, Minimize
} from 'lucide-react';

const ZionAiHrAssistantPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  React.useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: <Brain className="w-8 h-8 text-cyan-400" />,
      title: 'AI Resume Screening',
      description: 'Automatically screen and rank resumes using AI to identify the best candidates based on job requirements and cultural fit.',
      benefits: ['95% screening accuracy', '50% faster hiring', 'Bias reduction', 'Cultural fit analysis']
    },
    {
      icon: <UserCheck className="w-8 h-8 text-green-400" />,
      title: 'Smart Candidate Matching',
      description: 'AI-powered candidate matching that analyzes skills, experience, and personality to find the perfect fit for your roles.',
      benefits: ['Intelligent matching', 'Skills gap analysis', 'Personality assessment', 'Retention prediction']
    },
    {
      icon: <MessageCircle className="w-8 h-8 text-purple-400" />,
      title: 'AI Interview Assistant',
      description: 'Conduct intelligent interviews with AI-generated questions, real-time analysis, and automated follow-up recommendations.',
      benefits: ['Dynamic questions', 'Real-time analysis', 'Consistent evaluation', 'Automated scoring']
    },
    {
      icon: <BarChart className="w-8 h-8 text-orange-400" />,
      title: 'HR Analytics Dashboard',
      description: 'Comprehensive analytics on employee performance, engagement, turnover prediction, and workforce planning insights.',
      benefits: ['Performance insights', 'Engagement tracking', 'Turnover prediction', 'Workforce planning']
    },
    {
      icon: <GraduationCap className="w-8 h-8 text-blue-400" />,
      title: 'Learning & Development',
      description: 'AI-powered learning recommendations, skill gap analysis, and personalized training paths for employee development.',
      benefits: ['Personalized learning', 'Skill gap analysis', 'Progress tracking', 'Certification management']
    },
    {
      icon: <ClipboardList className="w-8 h-8 text-pink-400" />,
      title: 'Performance Management',
      description: 'Automated performance reviews, goal tracking, feedback collection, and development planning with AI insights.',
      benefits: ['Automated reviews', 'Goal tracking', '360 feedback', 'Development planning']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$89',
      period: '/month',
      description: 'Perfect for small teams',
      features: [
        'Up to 50 employees',
        'Basic AI screening',
        'Simple analytics',
        'Email support',
        'Mobile app access',
        'Basic integrations',
        'Standard templates'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$179',
      period: '/month',
      description: 'Ideal for growing companies',
      features: [
        'Up to 200 employees',
        'Advanced AI features',
        'Interview assistant',
        'Priority support',
        'Advanced analytics',
        'Custom integrations',
        'Team collaboration',
        'Learning management',
        'Performance tracking'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$349',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited employees',
        'Premium AI features',
        'Custom AI models',
        'Dedicated support',
        'Advanced reporting',
        'API access',
        'White-label options',
        'Custom workflows',
        'Multi-location support'
      ],
      popular: false
    }
  ];

  const stats = [
    { number: '200+', label: 'Companies Using', icon: <Users className="w-6 h-6 text-cyan-400" /> },
    { number: '50%', label: 'Faster Hiring Process', icon: <TrendingUp className="w-6 h-6 text-green-400" /> },
    { number: '95%', label: 'Screening Accuracy', icon: <Target className="w-6 h-6 text-purple-400" /> },
    { number: '30%', label: 'Reduced Turnover', icon: <UserCheck className="w-6 h-6 text-orange-400" /> }
  ];

  return (
    <>
      <Helmet>
        <title>Zion AI HR Assistant - AI-Powered Human Resources Platform | Zion Tech Group</title>
        <meta name="description" content="Transform your HR with Zion AI HR Assistant. AI resume screening, smart candidate matching, interview assistance, and performance management to streamline your HR processes." />
        <meta name="keywords" content="AI HR assistant, resume screening, candidate matching, interview automation, HR analytics, performance management, learning development" />
        <link rel="canonical" href="https://ziontechgroup.com/zion-ai-hr-assistant" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-20 pb-16">
          <div className="absolute inset-0 opacity-20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className={`text-4xl md:text-6xl font-bold text-white mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                Zion AI HR
                <span className="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Assistant
                </span>
              </h1>
              <p className={`text-xl text-gray-300 mb-8 max-w-3xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                Revolutionize your human resources with AI-powered resume screening, smart candidate matching, 
                and automated performance management. Streamline HR processes and hire better talent faster.
              </p>
              <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-600 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <a
                  href="tel:+13024640950"
                  className="inline-flex items-center px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300 transform hover:scale-105"
                >
                  Call +1 302 464 0950
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gray-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gradient-to-br from-slate-900 to-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                AI-Powered HR Intelligence
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Leverage cutting-edge artificial intelligence to optimize every aspect of your human resources operations
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="group">
                  <div className="bg-gray-800 rounded-xl p-6 h-full hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 border border-gray-700">
                    <div className="flex items-center mb-4">
                      {feature.icon}
                      <h3 className="text-xl font-semibold text-white ml-3">{feature.title}</h3>
                    </div>
                    <p className="text-gray-300 mb-4">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
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
        <section className="py-20 bg-gradient-to-br from-purple-900 to-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Choose Your Plan
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Flexible pricing options to fit your organization size and HR needs
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-gray-800 rounded-xl p-8 hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 border ${
                    plan.popular ? 'border-cyan-500 ring-2 ring-cyan-500/20' : 'border-gray-700'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-600 to-purple-600 text-white hover:from-cyan-700 hover:to-purple-700'
                        : 'bg-gray-700 text-white hover:bg-gray-600'
                    }`}
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-gray-900 to-purple-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your HR?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join hundreds of companies already using Zion AI HR Assistant to streamline their HR processes and hire better talent.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-600 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                Call +1 302 464 0950
              </a>
            </div>
            <div className="mt-8 text-gray-400">
              <p>Email: kleber@ziontechgroup.com</p>
              <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ZionAiHrAssistantPage;
