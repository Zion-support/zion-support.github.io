import React from 'react';
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
  const features = [
    {
      icon: Brain,
      title: 'Intelligent Monitoring',
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
    },
    {
      icon: Shield,
      title: 'Security Integration',
      description: 'Built-in security monitoring and threat detection with automated response capabilities.',
      benefits: ['Threat detection', 'Automated security patches', 'Compliance monitoring']
    }
  ];

  const capabilities = [
    {
      title: 'Infrastructure Monitoring',
      description: 'Comprehensive monitoring of servers, networks, applications, and cloud resources.',
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
    },
    {
      title: 'Cost Optimization',
      description: 'AI-driven cost analysis and optimization recommendations for cloud resources.',
      icon: Settings
    }
  ];

  return (
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
                  View Demo
                </button>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">99.9%</div>
                <div className="text-gray-300">Uptime Guarantee</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">90%</div>
                <div className="text-gray-300">Reduction in Downtime</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-pink-400 mb-2">50%</div>
                <div className="text-gray-300">Faster Issue Resolution</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">24/7</div>
                <div className="text-gray-300">Automated Monitoring</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
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

        {/* Capabilities Grid */}
        <section className="py-20 px-4 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
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
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIOpsPage;