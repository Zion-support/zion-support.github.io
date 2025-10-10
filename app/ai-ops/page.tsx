<<<<<<< HEAD
import React from 'react';
import { Brain, Cpu, Database, Shield, Zap, TrendingUp, CheckCircle, ArrowRight, Settings, BarChart, Users, Clock, Target, Award, Star, Globe, Phone, Mail, MapPin, Calendar, MessageSquare } from 'lucide-react';

export default function AIOpsPage() {
  const features = [
    {
      icon: Brain,
      title: 'Intelligent Monitoring',
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
    }
  ];

  const capabilities = [
    {
      title: 'Infrastructure Monitoring',
      description: 'Comprehensive monitoring of servers, networks, applications, and cloud resources.',
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
    },
    {
      title: 'Cost Optimization',
      description: 'AI-driven cost analysis and optimization recommendations for cloud resources.',
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
>>>>>>> origin/main
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
<<<<<<< HEAD
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
>>>>>>> origin/main
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
>>>>>>> origin/main
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
}
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
>>>>>>> origin/main
