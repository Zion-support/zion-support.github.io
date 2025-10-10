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
  const features = [
    {
      icon: Brain,
      title: 'Intelligent Monitoring',
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
    },
    {
      icon: Shield,
      title: 'Security Integration',
      description: 'Built-in security monitoring and threat detection across your entire IT environment.',
      benefits: ['Threat detection', 'Vulnerability scanning', 'Compliance monitoring', 'Security automation']
    }
  ];

  const capabilities = [
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
                  View Demo
                </button>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-16">
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">90%</div>
                <div className="text-gray-300">Reduction in Downtime</div>
              </div>
              <div className="text-center">
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
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
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

        {/* Capabilities Section */}
        <section className="py-20 px-4 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
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
              Join leading enterprises that have revolutionized their IT operations with AI-powered automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 inline-flex items-center">
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border border-purple-400 text-purple-300 hover:bg-purple-400/10 px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIOpsPage;