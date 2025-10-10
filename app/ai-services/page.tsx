'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Brain, 
  Cloud, 
  Code, 
  Zap, 
  ArrowRight, 
  Star, 
  TrendingUp, 
  Shield, 
  Target,
  Sparkles,
  Rocket,
  Cpu,
  Database,
  Globe,
  BarChart3,
  Users,
  CheckCircle,
  Play,
  Award,
  Clock,
  DollarSign,
  Mic,
  Activity,
  Heart,
  Mail,
  Bot,
  Palette,
  FileText,
  Settings,
  Lock,
  Eye,
  Music,
  FlaskConical
} from 'lucide-react';

export default function AIServicesPage() {
  const aiServices = [
    {
      title: 'AI Workflow Automation',
      description: 'Automate complex business processes with intelligent AI workflows',
      price: '$299/month',
      features: ['Process Automation', 'Workflow Optimization', 'Error Reduction', 'Cost Savings'],
      icon: Zap,
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-500/10',
      href: '/ai-workflow-automation'
    },
    {
      title: 'AI Customer Support',
      description: '24/7 intelligent customer support with natural language processing',
      price: '$199/month',
      features: ['24/7 Support', 'Multi-language', 'Sentiment Analysis', 'Escalation Management'],
      icon: Users,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      href: '/ai-customer-support'
    },
    {
      title: 'AI Data Analytics',
      description: 'Advanced data analysis and insights with machine learning algorithms',
      price: '$399/month',
      features: ['Predictive Analytics', 'Real-time Insights', 'Data Visualization', 'Custom Reports'],
      icon: BarChart3,
      color: 'text-green-400',
      bgColor: 'bg-green-500/10',
      href: '/ai-data-analytics'
    },
    {
      title: 'AI Content Generation',
      description: 'Create high-quality content with AI-powered writing and design tools',
      price: '$149/month',
      features: ['Content Writing', 'Image Generation', 'SEO Optimization', 'Brand Consistency'],
      icon: FileText,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      href: '/ai-content-generation'
    },
    {
      title: 'AI Healthcare Solutions',
      description: 'Revolutionary healthcare AI for diagnosis, treatment, and patient care',
      price: '$999/month',
      features: ['Medical Diagnosis', 'Treatment Planning', 'Drug Discovery', 'Patient Monitoring'],
      icon: Activity,
      color: 'text-red-400',
      bgColor: 'bg-red-500/10',
      href: '/ai-healthcare'
    },
    {
      title: 'AI Fintech Platform',
      description: 'Advanced financial AI for trading, risk management, and fraud detection',
      price: '$799/month',
      features: ['Algorithmic Trading', 'Risk Assessment', 'Fraud Detection', 'Compliance Monitoring'],
      icon: DollarSign,
      color: 'text-green-400',
      bgColor: 'bg-green-500/10',
      href: '/ai-fintech'
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
    },
    {
      title: 'AI Quantum Computing',
      description: 'Next-generation quantum computing solutions for complex problems',
      price: '$2,999/month',
      features: ['Quantum Algorithms', 'Optimization Problems', 'Cryptography', 'Research Support'],
      icon: Cpu,
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-500/10',
      href: '/ai-quantum-computing'
    }
  ];

  const stats = [
    { number: "500+", label: "AI Models Deployed", icon: Brain },
    { number: "99.9%", label: "Accuracy Rate", icon: Target },
    { number: "24/7", label: "AI Support", icon: Clock },
    { number: "50+", label: "Industries Served", icon: Globe }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Services - Artificial Intelligence Solutions | Zion Tech Group</title>
        <meta 
          name="description" 
          content="Comprehensive AI services including machine learning, natural language processing, computer vision, and automation. Transform your business with our advanced AI solutions." 
        />
        <meta 
          name="keywords" 
          content="AI services, artificial intelligence, machine learning, NLP, computer vision, automation, AI consulting, AI development" 
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(139,92,246,0.1)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(0,255,255,0.1)_0%,transparent_50%)]" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm font-medium mb-6">
              <Brain className="w-4 h-4 mr-2" />
              Advanced AI Solutions
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              AI Services
              <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                & Solutions
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Transform your business with our comprehensive AI services. From machine learning 
              to natural language processing, we provide cutting-edge AI solutions that drive 
              innovation and growth.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-purple-400 mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Our AI
              <span className="block bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Service Portfolio
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our comprehensive range of AI services designed to solve complex 
              business challenges and drive digital transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service, index) => (
              <a
                key={index}
                href={service.href}
                className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 ${service.bgColor} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className={`w-6 h-6 ${service.color}`} />
                  </div>
                  <div className={`${service.color} font-bold text-lg`}>{service.price}</div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
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

                <div className="flex items-center text-purple-400 group-hover:text-purple-300 transition-colors">
                  <span className="text-sm font-medium">Learn More</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900/50 to-cyan-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Harness the Power of
            <span className="block bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Artificial Intelligence?
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let our AI experts help you identify the best AI solutions for your business. 
            Get a free consultation and discover how AI can transform your operations.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/consultation"
              className="group bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 flex items-center"
            >
              <Brain className="w-5 h-5 mr-2" />
              Get Free AI Consultation
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a
              href="/demo"
              className="group border-2 border-purple-400 text-purple-300 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 flex items-center"
            >
              <Play className="w-5 h-5 mr-2" />
              View AI Demo
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}