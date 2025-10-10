'use client';

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import {
  Brain,
  Cpu,
  Shield,
  Cloud,
  Database,
  Zap,
  Target,
  CheckCircle,
  ArrowRight,
  Star,
  Users,
  Settings,
  BarChart,
  TrendingUp,
  Clock,
  Phone,
  Mail,
  MessageCircle,
  Calendar,
  ExternalLink,
  Play,
  Pause,
  RefreshCw,
  AlertTriangle,
  CheckCircle2,
  XCircle
} from 'lucide-react';

const AIOpsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isMonitoring, setIsMonitoring] = useState(true);

  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Monitoring',
      description: 'Intelligent monitoring that learns from your infrastructure patterns and predicts issues before they occur.',
      benefits: ['Predictive analytics', 'Anomaly detection', 'Automated alerting', 'Self-healing systems']
    },
    {
      icon: Zap,
      title: 'Automated Incident Response',
      description: 'Instant response to incidents with automated remediation and escalation procedures.',
      benefits: ['Auto-remediation', 'Smart escalation', 'Root cause analysis', 'Incident correlation']
    },
    {
      icon: Cloud,
      title: 'Cloud-Native Architecture',
      description: 'Built for modern cloud environments with seamless integration across platforms.',
      benefits: ['Multi-cloud support', 'Container orchestration', 'Serverless integration', 'Auto-scaling']
    },
    {
      icon: Shield,
      title: 'Advanced Security',
      description: 'Comprehensive security monitoring and threat detection with AI-enhanced protection.',
      benefits: ['Threat detection', 'Vulnerability scanning', 'Compliance monitoring', 'Security analytics']
    }
  ];

  const capabilities = [
    {
      category: 'Monitoring & Observability',
      items: [
        'Real-time infrastructure monitoring',
        'Application performance monitoring (APM)',
        'Log aggregation and analysis',
        'Distributed tracing',
        'Custom metrics and dashboards',
        'Synthetic monitoring'
      ]
    },
    {
      category: 'AI & Machine Learning',
      items: [
        'Anomaly detection algorithms',
        'Predictive failure analysis',
        'Intelligent alerting',
        'Pattern recognition',
        'Automated root cause analysis',
        'Self-learning systems'
      ]
    },
    {
      category: 'Automation & Orchestration',
      items: [
        'Automated incident response',
        'Self-healing infrastructure',
        'Automated scaling',
        'Deployment automation',
        'Configuration management',
        'Workflow orchestration'
      ]
    },
    {
      category: 'Security & Compliance',
      items: [
        'Security event monitoring',
        'Vulnerability management',
        'Compliance reporting',
        'Threat intelligence',
        'Access control monitoring',
        'Audit trail management'
      ]
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: '99.9% Uptime',
      description: 'Achieve exceptional reliability with AI-powered monitoring and automated response.'
    },
    {
      icon: Clock,
      title: '50% Faster Resolution',
      description: 'Reduce mean time to resolution with intelligent automation and predictive analytics.'
    },
    {
      icon: Target,
      title: '90% Cost Reduction',
      description: 'Optimize resource utilization and reduce operational costs through intelligent automation.'
    },
    {
      icon: Users,
      title: '24/7 Operations',
      description: 'Round-the-clock monitoring and response without human intervention.'
    }
  ];

  const metrics = [
    { label: 'Systems Monitored', value: '10,000+', trend: '+15%' },
    { label: 'Incidents Resolved', value: '99.2%', trend: '+5%' },
    { label: 'Mean Time to Resolution', value: '2.3 min', trend: '-40%' },
    { label: 'Cost Savings', value: '$2.5M', trend: '+25%' }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechCorp Inc.',
      role: 'VP of Operations',
      content: 'AIOps has transformed our operations. We now have complete visibility and automated response capabilities that we never had before.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      company: 'DataFlow Systems',
      role: 'CTO',
      content: 'The AI-powered monitoring and automation has reduced our operational overhead by 60% while improving reliability.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      company: 'CloudScale Ltd.',
      role: 'Head of DevOps',
      content: 'Outstanding platform. The predictive analytics and automated remediation have been game-changers for our team.',
      rating: 5
    }
  ];

  const monitoringData = [
    { service: 'Web Servers', status: 'healthy', uptime: '99.9%', response: '120ms' },
    { service: 'Database', status: 'healthy', uptime: '99.8%', response: '45ms' },
    { service: 'API Gateway', status: 'warning', uptime: '99.5%', response: '250ms' },
    { service: 'Cache Layer', status: 'healthy', uptime: '99.9%', response: '15ms' },
    { service: 'Message Queue', status: 'healthy', uptime: '99.7%', response: '80ms' }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'healthy':
        return <CheckCircle2 className="h-5 w-5 text-green-400" />;
      case 'warning':
        return <AlertTriangle className="h-5 w-5 text-yellow-400" />;
      case 'critical':
        return <XCircle className="h-5 w-5 text-red-400" />;
      default:
        return <Clock className="h-5 w-5 text-gray-400" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'healthy':
        return 'text-green-400';
      case 'warning':
        return 'text-yellow-400';
      case 'critical':
        return 'text-red-400';
      default:
        return 'text-gray-400';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Operations (AIOps) - Zion Tech Group | Intelligent IT Operations</title>
        <meta name="description" content="Transform your IT operations with AI-powered monitoring, automation, and intelligent incident response. Achieve 99.9% uptime with Zion Tech Group's AIOps solutions." />
        <meta name="keywords" content="AIOps, AI operations, IT monitoring, automated incident response, intelligent operations, Zion Tech Group" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                AI Operations
              </span>
              <br />
              <span className="text-white">(AIOps)</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your IT operations with AI-powered monitoring, automation, and intelligent 
              incident response. Achieve unprecedented reliability and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#features"
                className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
              >
                <Brain className="mr-2 h-5 w-5" />
                Explore AIOps
              </a>
              <a
                href="/contact"
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 flex items-center justify-center"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { id: 'overview', label: 'Overview', icon: BarChart },
              { id: 'monitoring', label: 'Live Monitoring', icon: Settings },
              { id: 'capabilities', label: 'Capabilities', icon: Cpu },
              { id: 'benefits', label: 'Benefits', icon: Target }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-purple-500 to-blue-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                <tab.icon className="mr-2 h-5 w-5" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Overview Tab */}
      {activeTab === 'overview' && (
        <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                AI-Powered Operations
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AIOps platform combines artificial intelligence, machine learning, and automation 
                to revolutionize your IT operations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center mr-4">
                      <feature.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">{feature.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-6">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Monitoring Tab */}
      {activeTab === 'monitoring' && (
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Live System Monitoring
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Real-time monitoring dashboard with AI-powered insights and automated response.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 mb-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-white">System Status</h3>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <div className={`w-3 h-3 rounded-full ${isMonitoring ? 'bg-green-400' : 'bg-red-400'}`}></div>
                    <span className="text-gray-300">
                      {isMonitoring ? 'Monitoring Active' : 'Monitoring Paused'}
                    </span>
                  </div>
                  <button
                    onClick={() => setIsMonitoring(!isMonitoring)}
                    className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center"
                  >
                    {isMonitoring ? <Pause className="h-4 w-4 mr-2" /> : <Play className="h-4 w-4 mr-2" />}
                    {isMonitoring ? 'Pause' : 'Resume'}
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {metrics.map((metric, index) => (
                  <div key={index} className="bg-white/5 rounded-lg p-4">
                    <div className="text-2xl font-bold text-white mb-1">{metric.value}</div>
                    <div className="text-gray-300 text-sm mb-1">{metric.label}</div>
                    <div className="text-green-400 text-sm flex items-center">
                      <TrendingUp className="h-3 w-3 mr-1" />
                      {metric.trend}
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-4">
                {monitoringData.map((service, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                    <div className="flex items-center space-x-4">
                      {getStatusIcon(service.status)}
                      <div>
                        <div className="text-white font-semibold">{service.service}</div>
                        <div className="text-gray-400 text-sm">Uptime: {service.uptime}</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-6">
                      <div className="text-right">
                        <div className="text-white font-semibold">{service.response}</div>
                        <div className="text-gray-400 text-sm">Response Time</div>
                      </div>
                      <div className={`text-sm font-semibold ${getStatusColor(service.status)}`}>
                        {service.status.toUpperCase()}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Capabilities Tab */}
      {activeTab === 'capabilities' && (
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Comprehensive Capabilities
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AIOps platform provides end-to-end capabilities for modern IT operations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {capabilities.map((capability, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                  <h3 className="text-xl font-bold text-white mb-6">{capability.category}</h3>
                  <ul className="space-y-3">
                    {capability.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-3 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Benefits Tab */}
      {activeTab === 'benefits' && (
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Measurable Benefits
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See the real impact of AIOps on your operations and bottom line.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full mx-auto mb-4">
                    <benefit.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our satisfied clients have to say about our AIOps solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-semibold">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="text-white font-semibold">{testimonial.name}</p>
                    <p className="text-gray-400 text-sm">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Operations?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Let's discuss how AIOps can revolutionize your IT operations and drive unprecedented efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center"
              >
                <Brain className="mr-2 h-5 w-5" />
                Get Started
              </a>
              <a
                href="/consultation"
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Free Consultation
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIOpsPage;