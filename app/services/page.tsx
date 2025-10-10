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

export default function ServicesPage() {
  const serviceCategories = [
    {
      title: 'AI Services',
      icon: Brain,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      description: 'Cutting-edge artificial intelligence solutions for modern businesses',
      services: [
        { name: 'AI Workflow Automation', href: '/ai-workflow-automation', icon: Zap },
        { name: 'AI Customer Support', href: '/ai-customer-support', icon: Users },
        { name: 'AI Data Analytics', href: '/ai-data-analytics', icon: BarChart3 },
        { name: 'AI Content Generation', href: '/ai-content-generation', icon: Code },
        { name: 'AI Healthcare Solutions', href: '/ai-healthcare', icon: Activity },
        { name: 'AI Fintech Platform', href: '/ai-fintech', icon: DollarSign },
        { name: 'AI Voice Cloning Studio', href: '/ai-voice-cloning-studio', icon: Mic },
        { name: 'AI Code Security Auditor', href: '/ai-code-security-auditor', icon: Shield },
        { name: 'AI Mental Health Companion', href: '/ai-mental-health-companion', icon: Heart },
        { name: 'AI Smart Home Controller', href: '/ai-smart-home-controller', icon: Globe },
        { name: 'AI Investment Optimizer', href: '/ai-investment-optimizer', icon: TrendingUp }
      ]
    },
    {
      title: 'IT Services',
      icon: Cloud,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      description: 'Comprehensive IT infrastructure and cloud solutions',
      services: [
        { name: 'Cloud Migration & Setup', href: '/cloud-migration', icon: Cloud },
        { name: 'Enterprise Cybersecurity', href: '/cybersecurity', icon: Shield },
        { name: 'IT Infrastructure Design', href: '/it-infrastructure', icon: Settings },
        { name: '24/7 IT Support', href: '/it-support', icon: Users },
        { name: 'Custom Development', href: '/custom-development', icon: Code },
        { name: 'DevOps & CI/CD', href: '/devops-cicd', icon: Zap },
        { name: 'Database Management', href: '/database-management', icon: Database },
        { name: 'Network Design', href: '/network-design', icon: Globe },
        { name: 'Cloud Infrastructure Management', href: '/cloud-infrastructure-management', icon: Cloud },
        { name: 'Cybersecurity Solutions', href: '/cybersecurity-solutions', icon: Shield }
      ]
    },
    {
      title: 'Micro SaaS',
      icon: Code,
      color: 'text-green-400',
      bgColor: 'bg-green-500/10',
      description: 'Powerful micro software-as-a-service solutions for businesses',
      services: [
        { name: 'AI Smart Calendar Pro', href: '/ai-smart-calendar', icon: Clock },
        { name: 'AI Project Manager', href: '/ai-project-manager', icon: Target },
        { name: 'AI Social Media Manager', href: '/ai-social-media-manager', icon: Users },
        { name: 'AI Analytics Dashboard', href: '/ai-analytics-dashboard', icon: BarChart3 },
        { name: 'AI Email Marketing Suite', href: '/ai-email-marketing', icon: Mail },
        { name: 'AI Customer Support Bot', href: '/ai-customer-support-bot', icon: Bot },
        { name: 'AI Content Studio', href: '/ai-content-studio', icon: Palette },
        { name: 'AI Financial Advisor', href: '/ai-financial-advisor', icon: DollarSign },
        { name: 'AI Workflow Automation', href: '/ai-workflow-automation', icon: Zap },
        { name: 'AI Content Writer', href: '/ai-content-writer', icon: FileText }
      ]
    },
    {
      title: 'Emerging Technologies',
      icon: Zap,
      color: 'text-orange-400',
      bgColor: 'bg-orange-500/10',
      description: 'Next-generation technologies for the future',
      services: [
        { name: 'Quantum Computing Solutions', href: '/ai-quantum-computing', icon: Cpu },
        { name: 'AI Autonomous Systems', href: '/ai-autonomous-systems', icon: Bot },
        { name: 'AI Blockchain Solutions', href: '/ai-blockchain-solutions', icon: Lock },
        { name: 'AI Holographic Workspace', href: '/ai-holographic-workspace', icon: Eye },
        { name: 'AI Energy Management', href: '/ai-energy', icon: Zap },
        { name: 'AI Music Composition', href: '/ai-music-composition', icon: Music },
        { name: 'Digital Transformation', href: '/digital-transformation', icon: Rocket },
        { name: 'Innovation Labs', href: '/innovation-labs', icon: FlaskConical }
      ]
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Completed", icon: CheckCircle },
    { number: "99.9%", label: "Client Satisfaction", icon: Star },
    { number: "24/7", label: "Support Available", icon: Clock },
    { number: "50+", label: "Countries Served", icon: Globe }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Our Services - AI & IT Solutions | Zion Tech Group</title>
        <meta 
          name="description" 
          content="Comprehensive AI and IT services including AI solutions, cloud infrastructure, cybersecurity, and micro SaaS applications. Transform your business with our expert services." 
        />
        <meta 
          name="keywords" 
          content="AI services, IT services, cloud solutions, cybersecurity, micro SaaS, digital transformation, enterprise solutions" 
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(139,92,246,0.1)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(0,255,255,0.1)_0%,transparent_50%)]" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 mr-2" />
              Comprehensive Solutions
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Our
              <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                Services
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Discover our comprehensive suite of AI and IT services designed to transform 
              your business and drive innovation across all industries.
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

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {serviceCategories.map((category, index) => (
              <div key={index} className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300">
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`w-12 h-12 ${category.bgColor} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className={`w-6 h-6 ${category.color}`} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{category.title}</h3>
                    <p className="text-gray-300">{category.description}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {category.services.map((service, serviceIndex) => (
                    <a
                      key={serviceIndex}
                      href={service.href}
                      className="group flex items-center space-x-3 p-3 rounded-lg hover:bg-slate-700/50 transition-all duration-200"
                    >
                      <service.icon className="w-5 h-5 text-purple-400 group-hover:scale-110 transition-transform" />
                      <span className="text-gray-300 group-hover:text-white transition-colors text-sm">
                        {service.name}
                      </span>
                      <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-purple-400 group-hover:translate-x-1 transition-all ml-auto" />
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900/50 to-cyan-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your
            <span className="block bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Business?
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let our expert team help you choose the perfect services for your business needs. 
            Get a free consultation and discover how we can accelerate your growth.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/contact"
              className="group bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 flex items-center"
            >
              <Rocket className="w-5 h-5 mr-2" />
              Get Free Consultation
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a
              href="/demo"
              className="group border-2 border-purple-400 text-purple-300 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 flex items-center"
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