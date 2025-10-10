<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
import { Helmet } from 'react-helmet-async';
import { 
  Brain, 
  Server, 
  Shield, 
  Zap, 
  BarChart, 
  AlertTriangle, 
  CheckCircle, 
  Clock,
  TrendingUp,
  Cpu,
  Database,
  Network,
  Activity,
  Settings,
  Monitor
} from 'lucide-react';

const AIOpsPage: React.FC = () => {
=======
import { Brain, Cpu, Database, Shield, Zap, TrendingUp, CheckCircle, ArrowRight, Settings, BarChart, Users, Clock, Target, Award, Star, Globe, Phone, Mail, MapPin, Calendar, MessageSquare } from 'lucide-react';

export default function AIOpsPage() {
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-aedf
=======
import { Brain, Cpu, Database, Shield, Zap, TrendingUp, CheckCircle, ArrowRight, Settings, BarChart, Users, Clock, Target, Award, Star, Globe, Phone, Mail, MapPin, Calendar, MessageSquare } from 'lucide-react';

export default function AIOpsPage() {
>>>>>>> origin/cursor/website-audit-and-update-with-deployment-a369
=======
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Brain, 
  Cpu, 
  BarChart3, 
  Shield, 
  Zap, 
  TrendingUp, 
  CheckCircle, 
  ArrowRight,
  Server,
  Database,
  Network,
  Monitor,
  AlertTriangle,
  Activity,
  Settings,
  Users
} from 'lucide-react';

const AIOpsPage: React.FC = () => {
>>>>>>> origin/cursor/website-audit-and-update-with-deployment-63f8
  const features = [
    {
      icon: Brain,
      title: 'Intelligent Monitoring',
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      description: 'AI-powered infrastructure monitoring with predictive analytics and anomaly detection.',
      benefits: ['Predictive failure detection', 'Automated root cause analysis', 'Real-time performance insights']
    },
    {
      icon: Zap,
      title: 'Automated Remediation',
      description: 'Self-healing infrastructure that automatically resolves common issues without human intervention.',
      benefits: ['Auto-scaling based on demand', 'Automated failover', 'Self-healing systems']
    },
    {
      icon: BarChart,
      title: 'Advanced Analytics',
      description: 'Comprehensive analytics dashboard with ML-driven insights and performance optimization.',
      benefits: ['Performance trend analysis', 'Capacity planning', 'Cost optimization recommendations']
=======
      description: 'AI-powered system monitoring that predicts issues before they impact your business operations.',
      benefits: ['Predictive analytics', 'Anomaly detection', 'Automated alerting', 'Performance optimization']
    },
    {
      icon: Cpu,
      title: 'Automated Remediation',
      description: 'Self-healing infrastructure that automatically resolves common issues without human intervention.',
      benefits: ['Auto-scaling', 'Self-recovery', 'Resource optimization', 'Incident response']
    },
    {
      icon: BarChart3,
      title: 'Advanced Analytics',
      description: 'Comprehensive insights into your IT infrastructure performance and optimization opportunities.',
      benefits: ['Performance metrics', 'Capacity planning', 'Cost optimization', 'Trend analysis']
>>>>>>> origin/cursor/website-audit-and-update-with-deployment-63f8
    },
    {
      icon: Shield,
      title: 'Security Integration',
<<<<<<< HEAD
      description: 'Built-in security monitoring and threat detection with automated response capabilities.',
      benefits: ['Threat detection', 'Automated security patches', 'Compliance monitoring']
=======
=======
>>>>>>> origin/cursor/website-audit-and-update-with-deployment-a369
      description: 'AI-powered system monitoring that predicts and prevents issues before they impact your business.',
      benefits: ['Predictive Analytics', 'Anomaly Detection', 'Automated Alerts']
    },
    {
      icon: Cpu,
      title: 'Automated Operations',
      description: 'Self-healing infrastructure that automatically resolves common issues and optimizes performance.',
      benefits: ['Auto-Remediation', 'Performance Tuning', 'Resource Optimization']
    },
    {
      icon: Database,
      title: 'Data-Driven Insights',
      description: 'Advanced analytics and reporting to help you understand and optimize your IT operations.',
      benefits: ['Real-time Dashboards', 'Custom Reports', 'Trend Analysis']
    },
    {
      icon: Shield,
      title: 'Enhanced Security',
      description: 'AI-powered security monitoring and threat detection to protect your infrastructure.',
      benefits: ['Threat Detection', 'Security Analytics', 'Compliance Monitoring']
<<<<<<< HEAD
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-aedf
=======
>>>>>>> origin/cursor/website-audit-and-update-with-deployment-a369
=======
      description: 'Built-in security monitoring and threat detection across your entire IT environment.',
      benefits: ['Threat detection', 'Vulnerability scanning', 'Compliance monitoring', 'Security automation']
>>>>>>> origin/cursor/website-audit-and-update-with-deployment-63f8
    }
  ];

  const capabilities = [
<<<<<<< HEAD
    {
      title: 'Infrastructure Monitoring',
      description: 'Comprehensive monitoring of servers, networks, applications, and cloud resources.',
<<<<<<< HEAD
<<<<<<< HEAD
      icon: Monitor
    },
    {
      title: 'Log Analysis',
      description: 'AI-powered log analysis to identify patterns, anomalies, and potential issues.',
      icon: Database
    },
    {
      title: 'Performance Optimization',
      description: 'Continuous performance monitoring and optimization recommendations.',
      icon: TrendingUp
    },
    {
      title: 'Incident Management',
      description: 'Automated incident detection, classification, and resolution workflows.',
      icon: AlertTriangle
    },
    {
      title: 'Capacity Planning',
      description: 'Predictive capacity planning based on usage patterns and growth projections.',
      icon: BarChart
=======
=======
>>>>>>> origin/cursor/website-audit-and-update-with-deployment-a369
      icon: '🖥️'
    },
    {
      title: 'Performance Optimization',
      description: 'Automatic performance tuning and resource allocation based on AI analysis.',
      icon: '⚡'
    },
    {
      title: 'Incident Management',
      description: 'Intelligent incident detection, classification, and automated response workflows.',
      icon: '🚨'
    },
    {
      title: 'Capacity Planning',
      description: 'Predictive capacity planning to ensure optimal resource utilization.',
      icon: '📊'
<<<<<<< HEAD
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-aedf
=======
>>>>>>> origin/cursor/website-audit-and-update-with-deployment-a369
    },
    {
      title: 'Cost Optimization',
      description: 'AI-driven cost analysis and optimization recommendations for cloud resources.',
<<<<<<< HEAD
<<<<<<< HEAD
      icon: Settings
=======
=======
>>>>>>> origin/cursor/website-audit-and-update-with-deployment-a369
      icon: '💰'
    },
    {
      title: 'Compliance Monitoring',
      description: 'Automated compliance checking and reporting for various industry standards.',
      icon: '✅'
    }
  ];

  const benefits = [
    {
      metric: '99.9%',
      label: 'Uptime Guarantee',
      description: 'AI-powered monitoring ensures maximum system availability'
    },
    {
      metric: '75%',
      label: 'Faster Resolution',
      description: 'Automated incident response reduces mean time to resolution'
    },
    {
      metric: '40%',
      label: 'Cost Reduction',
      description: 'Intelligent optimization reduces operational costs'
    },
    {
      metric: '24/7',
      label: 'Monitoring',
      description: 'Continuous AI-powered monitoring and alerting'
<<<<<<< HEAD
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-aedf
=======
>>>>>>> origin/cursor/website-audit-and-update-with-deployment-a369
=======
'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, Star, Zap, Settings, Clock, Users, Shield, BarChart, ArrowRight, Phone, Mail } from 'lucide-react';

const AIOpsPage: React.FC = () => {
  const features = [
    {
      icon: Settings,
      title: 'Intelligent IT Operations',
      description: 'AI-powered IT operations that automatically detect, diagnose, and resolve issues before they impact your business.',
      benefits: ['Proactive monitoring', 'Automated remediation', 'Predictive analytics']
    },
    {
      icon: Zap,
      title: 'Automated Incident Response',
      description: 'Automatically respond to incidents with intelligent root cause analysis and resolution recommendations.',
      benefits: ['Faster resolution', 'Reduced downtime', 'Smart diagnostics']
    },
    {
      icon: Clock,
      title: '24/7 Monitoring',
      description: 'Continuous monitoring of your entire IT infrastructure with real-time alerts and notifications.',
      benefits: ['Always-on monitoring', 'Instant alerts', 'Comprehensive coverage']
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Enable seamless collaboration between IT teams with shared dashboards and communication tools.',
      benefits: ['Team coordination', 'Shared visibility', 'Efficient workflows']
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption, audit trails, and compliance features for IT operations.',
      benefits: ['Data protection', 'Audit compliance', 'Secure operations']
    },
    {
      icon: BarChart,
      title: 'Performance Analytics',
      description: 'Comprehensive analytics to track IT performance and identify optimization opportunities.',
      benefits: ['Performance insights', 'Trend analysis', 'Optimization recommendations']
>>>>>>> origin/cursor/website-audit-and-update-with-deployment-db70
    }
  ];

  return (
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    <>
      <Helmet>
        <title>AI IT Operations (AIOps) - Zion Tech Group</title>
        <meta name="description" content="Transform your IT operations with AI-powered monitoring, automation, and intelligent insights. Reduce downtime, optimize performance, and achieve 99.9% uptime." />
        <meta name="keywords" content="AIOps, IT operations, infrastructure monitoring, automated remediation, AI-powered IT, performance optimization" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-ops" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(0,255,255,0.1)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.1)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          
          <div className="max-w-7xl mx-auto relative">
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-2 bg-cyan-500/10 text-cyan-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Brain className="w-4 h-4" />
                <span>AI-Powered IT Operations</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 cyber-text">
                AI IT Operations
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500">
                  (AIOps)
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
                Transform your IT operations with AI-powered monitoring, automation, and intelligent insights. 
                Reduce downtime by 90% and achieve 99.9% uptime with our advanced AIOps platform.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="neon-button hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 inline-flex items-center">
                  Get Started
                  <Zap className="w-4 h-4 ml-2" />
                </button>
                <button className="px-8 py-4 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400/10 transition-all">
=======
    'Infrastructure as Code (IaC) automation',
    'Multi-cloud monitoring and management',
    'Container orchestration optimization',
    'Database performance tuning',
    'Network traffic analysis',
    'Log aggregation and analysis',
    'Incident management automation',
    'Change management workflows',
    'Capacity planning and forecasting',
    'Cost optimization recommendations'
  ];

  return (
    <>
      <Helmet>
        <title>AI IT Operations (AIOps) - Zion Tech Group</title>
        <meta name="description" content="Transform your IT operations with AI-powered automation, monitoring, and optimization. Reduce downtime, improve efficiency, and scale intelligently." />
        <meta name="keywords" content="AIOps, IT operations, automation, monitoring, infrastructure, AI, machine learning, DevOps" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,119,198,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          
          <div className="max-w-7xl mx-auto relative">
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-2 bg-purple-500/10 border border-purple-500/20 rounded-full px-4 py-2 mb-6">
                <Brain className="w-5 h-5 text-purple-400" />
                <span className="text-purple-300 text-sm font-medium">AI IT Operations</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Intelligent IT
                <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                  Operations
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                Transform your IT operations with AI-powered automation, predictive monitoring, 
                and intelligent optimization. Reduce downtime by 90% and improve efficiency by 300%.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 inline-flex items-center">
                  Start AIOps Journey
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button className="border border-purple-400 text-purple-300 hover:bg-purple-400/10 px-8 py-4 rounded-lg font-semibold transition-all duration-300">
>>>>>>> origin/cursor/website-audit-and-update-with-deployment-63f8
                  View Demo
                </button>
              </div>
            </div>

            {/* Stats */}
<<<<<<< HEAD
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">99.9%</div>
                <div className="text-gray-300">Uptime Guarantee</div>
              </div>
=======
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-16">
>>>>>>> origin/cursor/website-audit-and-update-with-deployment-63f8
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">90%</div>
                <div className="text-gray-300">Reduction in Downtime</div>
              </div>
              <div className="text-center">
<<<<<<< HEAD
                <div className="text-4xl font-bold text-pink-400 mb-2">50%</div>
                <div className="text-gray-300">Faster Issue Resolution</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">24/7</div>
                <div className="text-gray-300">Automated Monitoring</div>
              </div>
=======
                <div className="text-4xl font-bold text-pink-400 mb-2">300%</div>
                <div className="text-gray-300">Efficiency Improvement</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">24/7</div>
                <div className="text-gray-300">Automated Monitoring</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">99.9%</div>
                <div className="text-gray-300">System Uptime</div>
              </div>
>>>>>>> origin/cursor/website-audit-and-update-with-deployment-63f8
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
<<<<<<< HEAD
                Powerful AIOps Capabilities
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI-powered IT operations platform provides comprehensive monitoring, 
                automation, and intelligent insights to optimize your infrastructure.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 hover:border-cyan-400/50 transition-all">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                      <p className="text-gray-300 mb-4">{feature.description}</p>
                      <ul className="space-y-2">
                        {feature.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center text-sm text-gray-400">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            {benefit}
=======
                AI-Powered IT Operations
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AIOps platform combines machine learning, automation, and intelligent analytics 
                to revolutionize how you manage your IT infrastructure.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-purple-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                      <p className="text-gray-300 mb-6 leading-relaxed">{feature.description}</p>
                      <ul className="space-y-2">
                        {feature.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center space-x-2 text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                            <span>{benefit}</span>
>>>>>>> origin/cursor/website-audit-and-update-with-deployment-63f8
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Capabilities Grid */}
=======
        {/* Capabilities Section */}
>>>>>>> origin/cursor/website-audit-and-update-with-deployment-63f8
        <section className="py-20 px-4 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
<<<<<<< HEAD
                Complete AIOps Solution
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to modernize and optimize your IT operations with AI.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {capabilities.map((capability, index) => (
                <div key={index} className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-cyan-400/50 transition-all group">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <capability.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">{capability.title}</h3>
                  <p className="text-gray-300 text-sm">{capability.description}</p>
=======
                Comprehensive AIOps Capabilities
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From infrastructure monitoring to automated remediation, our AIOps platform 
                covers every aspect of modern IT operations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {capabilities.map((capability, index) => (
                <div key={index} className="bg-slate-700/50 backdrop-blur-sm border border-slate-600 rounded-lg p-6 hover:border-purple-500/50 transition-all duration-300">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center">
                      <Activity className="w-4 h-4 text-purple-400" />
                    </div>
                    <span className="text-white font-medium">{capability}</span>
                  </div>
>>>>>>> origin/cursor/website-audit-and-update-with-deployment-63f8
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your IT Operations?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
<<<<<<< HEAD
              Join hundreds of companies already using our AIOps platform to achieve 
              better performance, reliability, and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="neon-button hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 inline-flex items-center">
                Start Free Trial
                <Zap className="w-4 h-4 ml-2" />
              </button>
              <button className="px-8 py-4 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400/10 transition-all">
                Schedule Demo
=======
              Join leading enterprises that have revolutionized their IT operations with AI-powered automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 inline-flex items-center">
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border border-purple-400 text-purple-300 hover:bg-purple-400/10 px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                Schedule Consultation
>>>>>>> origin/cursor/website-audit-and-update-with-deployment-63f8
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

<<<<<<< HEAD
export default AIOpsPage;
=======
=======
>>>>>>> origin/cursor/website-audit-and-update-with-deployment-a369
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 cyber-text neon-pulse">
              AI IT Operations (AIOps)
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
              Transform your IT operations with AI-powered automation, intelligent monitoring, 
              and predictive analytics that keep your systems running at peak performance.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center space-x-2 bg-cyan-500/20 px-4 py-2 rounded-lg">
                <Brain className="w-5 h-5 text-cyan-400" />
                <span className="text-white font-medium">AI-Powered</span>
              </div>
              <div className="flex items-center space-x-2 bg-purple-500/20 px-4 py-2 rounded-lg">
                <Zap className="w-5 h-5 text-purple-400" />
                <span className="text-white font-medium">Automated</span>
              </div>
              <div className="flex items-center space-x-2 bg-green-500/20 px-4 py-2 rounded-lg">
                <Shield className="w-5 h-5 text-green-400" />
                <span className="text-white font-medium">Secure</span>
              </div>
            </div>
=======
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,119,198,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            AI IT Operations
            <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              (AIOps)
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Transform your IT operations with AI-powered automation, intelligent monitoring, and predictive analytics. 
            Reduce downtime, improve efficiency, and ensure optimal performance across your entire infrastructure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25">
              Get Started Today
              <ArrowRight className="inline-block ml-2 w-5 h-5" />
            </button>
            <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
              Schedule Demo
            </button>
>>>>>>> origin/cursor/website-audit-and-update-with-deployment-db70
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              AI-Powered Operations
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Leverage artificial intelligence to automate, optimize, and secure your IT infrastructure
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 rounded-lg p-6 text-center group hover:bg-slate-700/50 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{feature.description}</p>
                <div className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center space-x-2 text-sm text-cyan-400">
                      <CheckCircle className="w-4 h-4" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Comprehensive AIOps Capabilities
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Everything you need to modernize and optimize your IT operations
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <div key={index} className="bg-slate-900/50 rounded-lg p-6 hover:bg-slate-800/50 transition-all duration-300">
                <div className="text-4xl mb-4">{capability.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{capability.title}</h3>
                <p className="text-gray-300">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Measurable Results
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              See the impact of AI-powered operations on your business
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-cyan-400 mb-2">
                  {benefit.metric}
                </div>
                <div className="text-xl font-bold text-white mb-2">
                  {benefit.label}
                </div>
                <div className="text-gray-300 text-sm">
                  {benefit.description}
                </div>
=======
      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Powerful AI Operations Features</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI-powered IT operations solution designed for modern enterprises
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-cyan-400/50 transition-all duration-300 group">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
>>>>>>> origin/cursor/website-audit-and-update-with-deployment-db70
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
<<<<<<< HEAD
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-purple-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Transform Your IT Operations?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Let our AI-powered solutions optimize your infrastructure and reduce operational costs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors inline-flex items-center"
            >
              <MessageSquare className="w-5 h-5 mr-2" />
              Get Started Today
            </a>
            <a
              href="/consultation"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-cyan-600 transition-colors inline-flex items-center"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Free Consultation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
<<<<<<< HEAD
}
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-aedf
=======
}
>>>>>>> origin/cursor/website-audit-and-update-with-deployment-a369
=======
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your IT Operations?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of enterprises already using AIOps to optimize their IT infrastructure
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              Start Free Trial
            </button>
            <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
              Contact Sales
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIOpsPage;
>>>>>>> origin/cursor/website-audit-and-update-with-deployment-db70
=======
export default AIOpsPage;
>>>>>>> origin/cursor/website-audit-and-update-with-deployment-63f8
