'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Brain, Zap, Target, BarChart, Users, Clock, CheckCircle, ArrowRight, Sparkles, Cpu, Shield, Globe, Code, TrendingUp, Star, Settings, Calendar, CheckSquare, FileText, Mail, Database, Cloud, Lock, Smartphone, BarChart3, PieChart, LineChart, Activity, Bot, Cog, Workflow, Automation, Process, Integration, Api, Webhook, Schedule, Monitor, Alert, Success, Error, Warning, Info, Lightbulb, Rocket, Award, Trophy, Medal, Crown, Diamond, Gem, Star2, Sparkle, Flash, Thunder, Lightning, Bolt, Fire, Flame, Sun, Moon, Planet, Galaxy, Universe, Cosmos, Space, Time, Infinity, Loop, Cycle, Repeat, Refresh, Sync, Connect, Link, Chain, Network, Web, Grid, Matrix, Pattern, Structure, Framework, Architecture, Design, Blueprint, Plan, Strategy, Method, Approach, Solution, Innovation, Technology, Future, Next, Advanced, Cutting, Edge, State, Art, Modern, Contemporary, Revolutionary, Breakthrough, Game, Changer, Disruptive, Transformative, Revolutionary, Innovative, Creative, Original, Unique, Special, Exclusive, Premium, Elite, Professional, Expert, Master, Guru, Specialist, Consultant, Advisor, Mentor, Coach, Trainer, Teacher, Instructor, Guide, Leader, Pioneer, Visionary, Entrepreneur, Innovator, Creator, Builder, Developer, Engineer, Architect, Designer, Artist, Craftsman, Artisan, Play } from 'lucide-react';

const AIAutomationPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'Intelligent Process Automation',
      description: 'AI-powered automation that learns and adapts to your business processes, making them more efficient and accurate over time.',
      benefits: ['Reduces manual errors by 95%', 'Increases processing speed by 300%', 'Learns from patterns and improves automatically']
    },
    {
      icon: Zap,
      title: 'Workflow Optimization',
      description: 'Automatically identify bottlenecks and optimize workflows using machine learning algorithms and predictive analytics.',
      benefits: ['Identifies inefficiencies automatically', 'Suggests optimal workflow patterns', 'Reduces processing time by 40%']
    },
    {
      icon: Target,
      title: 'Smart Decision Making',
      description: 'AI-driven decision support systems that analyze data and provide recommendations for better business outcomes.',
      benefits: ['Data-driven insights', 'Predictive recommendations', 'Real-time decision support']
    },
    {
      icon: BarChart,
      title: 'Performance Analytics',
      description: 'Comprehensive analytics and reporting on automation performance, ROI, and business impact.',
      benefits: ['Real-time performance monitoring', 'Detailed ROI analysis', 'Custom reporting dashboards']
    },
    {
      icon: Users,
      title: 'Human-AI Collaboration',
      description: 'Seamless integration between human workers and AI systems for optimal productivity and efficiency.',
      benefits: ['Enhanced human productivity', 'AI-assisted decision making', 'Smooth workflow transitions']
    },
    {
      icon: Clock,
      title: '24/7 Operations',
      description: 'Round-the-clock automation that works continuously to process tasks and maintain business operations.',
      benefits: ['Never stops working', 'Handles peak loads automatically', 'Maintains consistent performance']
    }
  ];

  const useCases = [
    {
      title: 'Customer Service Automation',
      description: 'Automate customer inquiries, ticket routing, and response generation using AI chatbots and intelligent routing systems.',
      icon: Users,
      metrics: ['90% faster response times', '85% customer satisfaction', '60% cost reduction']
    },
    {
      title: 'Document Processing',
      description: 'Automatically extract, classify, and process documents using OCR, NLP, and machine learning technologies.',
      icon: FileText,
      metrics: ['95% accuracy rate', '80% time savings', '99% compliance rate']
    },
    {
      title: 'Financial Operations',
      description: 'Automate invoice processing, expense management, and financial reporting with AI-powered validation and reconciliation.',
      icon: TrendingUp,
      metrics: ['70% faster processing', '98% accuracy', '50% cost reduction']
    },
    {
      title: 'HR & Recruitment',
      description: 'Streamline recruitment processes, candidate screening, and employee onboarding with intelligent automation.',
      icon: Users,
      metrics: ['75% faster hiring', '90% better candidate matching', '65% time savings']
    },
    {
      title: 'Supply Chain Management',
      description: 'Optimize inventory management, demand forecasting, and logistics coordination using AI and machine learning.',
      icon: Globe,
      metrics: ['40% inventory reduction', '85% demand accuracy', '60% cost savings']
    },
    {
      title: 'Marketing Automation',
      description: 'Automate campaign management, lead scoring, and personalized content delivery using AI and data analytics.',
      icon: Target,
      metrics: ['200% increase in leads', '150% better conversion', '80% time savings']
    }
  ];

  const technologies = [
    { name: 'Machine Learning', description: 'Advanced ML algorithms for pattern recognition and predictive analytics' },
    { name: 'Natural Language Processing', description: 'AI-powered text analysis and language understanding' },
    { name: 'Computer Vision', description: 'Image and video analysis for automated visual processing' },
    { name: 'Robotic Process Automation', description: 'Rule-based automation for repetitive tasks' },
    { name: 'Predictive Analytics', description: 'Data-driven forecasting and trend analysis' },
    { name: 'API Integration', description: 'Seamless connectivity with existing systems and platforms' }
  ];

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-2 bg-cyan-500/10 text-cyan-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Zap className="w-4 h-4" />
                <span>AI-Powered Automation</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
                Intelligent Process
                <span className="block bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  Automation
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                Transform your business operations with AI-powered automation that learns, adapts, and optimizes your workflows for maximum efficiency and productivity.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="cyber-button px-8 py-4 text-lg">
                  <Sparkles className="w-5 h-5 mr-2" />
                  Start Automation Journey
                </button>
                <button className="cyber-button-secondary px-8 py-4 text-lg">
                  <Play className="w-5 h-5 mr-2" />
                  Watch Demo
                </button>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">95%</div>
                <div className="text-gray-300">Error Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">300%</div>
                <div className="text-gray-300">Speed Increase</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">60%</div>
                <div className="text-gray-300">Cost Savings</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-400 mb-2">24/7</div>
                <div className="text-gray-300">Operations</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Powerful Automation Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI automation platform provides comprehensive tools and capabilities to transform your business processes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="cyber-card p-8 hover:scale-105 transition-transform duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-6">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-6">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-400">
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

        {/* Use Cases Section */}
        <section className="py-16 px-4 bg-slate-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Real-World Applications</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See how AI automation is transforming businesses across different industries and use cases.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="cyber-card p-8">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-600 rounded-lg flex items-center justify-center mb-6">
                    <useCase.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{useCase.title}</h3>
                  <p className="text-gray-300 mb-6">{useCase.description}</p>
                  <div className="space-y-2">
                    {useCase.metrics.map((metric, metricIndex) => (
                      <div key={metricIndex} className="flex items-center text-sm text-cyan-400">
                        <TrendingUp className="w-4 h-4 mr-2" />
                        {metric}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Advanced Technologies</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Built on cutting-edge AI and machine learning technologies for maximum performance and reliability.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {technologies.map((tech, index) => (
                <div key={index} className="cyber-card p-6 text-center">
                  <h3 className="text-lg font-semibold text-white mb-2">{tech.name}</h3>
                  <p className="text-gray-400 text-sm">{tech.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="cyber-card p-12">
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Automate Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of businesses that have transformed their operations with AI-powered automation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="cyber-button px-8 py-4 text-lg">
                  <Rocket className="w-5 h-5 mr-2" />
                  Get Started Today
                </button>
                <button className="cyber-button-secondary px-8 py-4 text-lg">
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule Demo
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default AIAutomationPage;
