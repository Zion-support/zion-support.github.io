'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Code, 
  Calendar, 
  Target, 
  Users, 
  BarChart3, 
  Mail, 
  Bot, 
  Palette, 
  DollarSign, 
  Zap, 
  FileText, 
  ArrowRight, 
  Star, 
  CheckCircle,
  Play,
  Award,
  Clock,
  Sparkles,
  Rocket,
  Cpu,
  Database,
  Globe,
  Shield,
  Activity,
  Heart,
  Mic,
  TrendingUp,
  Settings,
  Lock,
  Eye,
  Music,
  FlaskConical
} from 'lucide-react';

export default function MicroSaasPage() {
  const microSaasServices = [
    {
      title: 'AI Smart Calendar Pro',
      description: 'Intelligent calendar management with AI-powered scheduling and optimization',
      price: '$29/month',
      features: ['AI Scheduling', 'Meeting Optimization', 'Time Blocking', 'Smart Reminders'],
      icon: Calendar,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      href: '/ai-smart-calendar'
    },
    {
      title: 'AI Project Manager',
      description: 'Advanced project management with AI-driven insights and automation',
      price: '$49/month',
      features: ['Task Automation', 'Resource Planning', 'Progress Tracking', 'Risk Analysis'],
      icon: Target,
      color: 'text-green-400',
      bgColor: 'bg-green-500/10',
      href: '/ai-project-manager'
    },
    {
      title: 'AI Social Media Manager',
      description: 'Automated social media management with AI content creation and scheduling',
      price: '$39/month',
      features: ['Content Creation', 'Post Scheduling', 'Analytics', 'Engagement Optimization'],
      icon: Users,
      color: 'text-pink-400',
      bgColor: 'bg-pink-500/10',
      href: '/ai-social-media-manager'
    },
    {
      title: 'AI Analytics Dashboard',
      description: 'Comprehensive business analytics with AI-powered insights and reporting',
      price: '$59/month',
      features: ['Real-time Analytics', 'Predictive Insights', 'Custom Reports', 'Data Visualization'],
      icon: BarChart3,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      href: '/ai-analytics-dashboard'
    },
    {
      title: 'AI Email Marketing Suite',
      description: 'Intelligent email marketing with AI-driven personalization and automation',
      price: '$79/month',
      features: ['Email Automation', 'Personalization', 'A/B Testing', 'Performance Analytics'],
      icon: Mail,
      color: 'text-orange-400',
      bgColor: 'bg-orange-500/10',
      href: '/ai-email-marketing'
    },
    {
      title: 'AI Customer Support Bot',
      description: '24/7 AI-powered customer support with natural language processing',
      price: '$99/month',
      features: ['24/7 Support', 'Multi-language', 'Sentiment Analysis', 'Escalation Management'],
      icon: Bot,
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-500/10',
      href: '/ai-customer-support-bot'
    },
    {
      title: 'AI Content Studio',
      description: 'Creative content generation with AI-powered writing and design tools',
      price: '$69/month',
      features: ['Content Writing', 'Image Generation', 'Video Creation', 'Brand Consistency'],
      icon: Palette,
      color: 'text-indigo-400',
      bgColor: 'bg-indigo-500/10',
      href: '/ai-content-studio'
    },
    {
      title: 'AI Financial Advisor',
      description: 'Personal financial planning and investment advice with AI insights',
      price: '$89/month',
      features: ['Portfolio Analysis', 'Investment Advice', 'Budget Planning', 'Risk Assessment'],
      icon: DollarSign,
      color: 'text-green-400',
      bgColor: 'bg-green-500/10',
      href: '/ai-financial-advisor'
    },
    {
      title: 'AI Workflow Automation',
      description: 'Streamline business processes with intelligent workflow automation',
      price: '$79/month',
      features: ['Process Automation', 'Workflow Optimization', 'Error Reduction', 'Cost Savings'],
      icon: Zap,
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-500/10',
      href: '/ai-workflow-automation'
    },
    {
      title: 'AI Content Writer',
      description: 'Professional content writing with AI-powered research and optimization',
      price: '$49/month',
      features: ['SEO Writing', 'Research Assistance', 'Content Optimization', 'Plagiarism Check'],
      icon: FileText,
      color: 'text-red-400',
      bgColor: 'bg-red-500/10',
      href: '/ai-content-writer'
    },
    {
      title: 'AI Voice Cloning Studio',
      description: 'Create natural-sounding voice clones with advanced AI technology',
      price: '$29/month',
      features: ['Neural Voice Synthesis', 'Multi-language Support', 'High-Quality Audio', 'Real-Time Processing'],
      icon: Mic,
      color: 'text-pink-400',
      bgColor: 'bg-pink-500/10',
      href: '/ai-voice-cloning-studio'
    },
    {
      title: 'AI Code Security Auditor',
      description: 'Secure your codebase with AI-powered vulnerability detection',
      price: '$49/month',
      features: ['Vulnerability Detection', 'Compliance Checking', 'Real-Time Scanning', 'Team Collaboration'],
      icon: Shield,
      color: 'text-red-400',
      bgColor: 'bg-red-500/10',
      href: '/ai-code-security-auditor'
    },
    {
      title: 'AI Mental Health Companion',
      description: '24/7 AI-powered mental health support and wellness planning',
      price: '$29/month',
      features: ['AI Therapy Sessions', 'Mood Tracking', 'Crisis Intervention', 'Wellness Planning'],
      icon: Heart,
      color: 'text-pink-400',
      bgColor: 'bg-pink-500/10',
      href: '/ai-mental-health-companion'
    },
    {
      title: 'AI Smart Home Controller',
      description: 'Intelligent home automation with AI-powered device control',
      price: '$29/month',
      features: ['Universal Device Control', 'AI Automation', 'Energy Optimization', 'Voice Control'],
      icon: Globe,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      href: '/ai-smart-home-controller'
    },
    {
      title: 'AI Investment Optimizer',
      description: 'Maximize investment returns with AI-powered portfolio analysis',
      price: '$49/month',
      features: ['Portfolio Analysis', 'Risk Assessment', 'Tax Optimization', 'Real-Time Intelligence'],
      icon: TrendingUp,
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-500/10',
      href: '/ai-investment-optimizer'
    }
  ];

  const stats = [
    { number: "100+", label: "Micro SaaS Apps", icon: Code },
    { number: "50k+", label: "Active Users", icon: Users },
    { number: "99.9%", label: "Uptime SLA", icon: Shield },
    { number: "24/7", label: "Support Available", icon: Clock }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
      <Helmet>
        <title>Micro SaaS - AI-Powered Business Tools | Zion Tech Group</title>
        <meta 
          name="description" 
          content="Powerful micro SaaS applications for modern businesses. AI-powered tools for project management, analytics, content creation, and automation. Starting at $29/month." 
        />
        <meta 
          name="keywords" 
          content="micro SaaS, business tools, AI applications, project management, analytics, content creation, automation, productivity tools" 
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(34,197,94,0.1)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(0,255,255,0.1)_0%,transparent_50%)]" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-300 text-sm font-medium mb-6">
              <Code className="w-4 h-4 mr-2" />
              Micro SaaS Solutions
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Micro SaaS
              <span className="block bg-gradient-to-r from-green-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Applications
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Powerful micro SaaS applications designed to streamline your business operations. 
              From project management to content creation, our AI-powered tools help you work 
              smarter and more efficiently.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-green-400 mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Micro SaaS Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Our Micro SaaS
              <span className="block bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
                Application Suite
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover our comprehensive collection of micro SaaS applications designed 
              to solve specific business challenges and boost productivity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSaasServices.map((service, index) => (
              <a
                key={index}
                href={service.href}
                className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-green-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 ${service.bgColor} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className={`w-6 h-6 ${service.color}`} />
                  </div>
                  <div className={`${service.color} font-bold text-lg`}>{service.price}</div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{service.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex items-center text-green-400 group-hover:text-green-300 transition-colors">
                  <span className="text-sm font-medium">Learn More</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-900/50 to-cyan-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Boost Your
            <span className="block bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
              Business Productivity?
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Start using our micro SaaS applications today and experience the power of 
            AI-driven business tools. Get started with a free trial and transform your workflow.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/consultation"
              className="group bg-gradient-to-r from-green-600 to-cyan-600 hover:from-green-700 hover:to-cyan-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-green-500/25 flex items-center"
            >
              <Code className="w-5 h-5 mr-2" />
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a
              href="/demo"
              className="group border-2 border-green-400 text-green-300 hover:bg-green-400 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 flex items-center"
            >
              <Play className="w-5 h-5 mr-2" />
              View Demo
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}