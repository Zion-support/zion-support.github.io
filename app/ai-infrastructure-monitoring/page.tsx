'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Activity, Brain, TrendingUp, CheckCircle, ArrowRight, BarChart, Users, Lock, Eye, Target, Server, Zap } from 'lucide-react';

const AIInfrastructureMonitoringPro: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-400 text-sm font-medium mb-6">
              <Activity className="w-4 h-4 mr-2" />
              AI Infrastructure Monitoring
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              AI Infrastructure Monitoring
              <span className="block bg-gradient-to-r from-blue-400 via-purple-500 to-pink-600 bg-clip-text text-transparent">
                Pro
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
              Advanced AI-powered infrastructure monitoring that prevents 99.9% of outages, 
              reduces downtime by 80%, and provides predictive maintenance with real-time insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 inline-flex items-center">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border border-gray-600 text-white hover:bg-white/10 font-bold py-4 px-8 rounded-lg transition-all duration-300 inline-flex items-center">
                <Eye className="w-5 h-5 mr-2" />
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Intelligent Infrastructure Monitoring
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI system provides comprehensive monitoring of your entire infrastructure stack 
              with predictive analytics and automated incident response.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                title: 'Predictive Analytics',
                description: 'AI-powered prediction of infrastructure issues',
                features: ['Anomaly Detection', 'Failure Prediction', 'Capacity Planning']
              },
              {
                icon: Server,
                title: 'Server Monitoring',
                description: 'Comprehensive server health and performance monitoring',
                features: ['CPU Monitoring', 'Memory Tracking', 'Disk Analysis']
              },
              {
                icon: Zap,
                title: 'Real-time Alerts',
                description: 'Instant notifications for critical issues',
                features: ['Smart Alerting', 'Escalation Rules', 'Mobile Notifications']
              },
              {
                icon: BarChart,
                title: 'Performance Analytics',
                description: 'Detailed performance metrics and reporting',
                features: ['Trend Analysis', 'Capacity Reports', 'Performance Dashboards']
              },
              {
                icon: Target,
                title: 'Automated Response',
                description: 'Automated incident response and remediation',
                features: ['Auto-healing', 'Script Execution', 'Workflow Automation']
              },
              {
                icon: Lock,
                title: 'Security Monitoring',
                description: 'Advanced security threat detection',
                features: ['Threat Detection', 'Vulnerability Scanning', 'Compliance Monitoring']
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-6">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.features.map((item, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Proven Infrastructure Results
            </h2>
            <p className="text-xl text-gray-300">
              Our clients have achieved remarkable improvements in infrastructure reliability and performance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { metric: '99.9%', label: 'Uptime Reliability', icon: Activity },
              { metric: '80%', label: 'Downtime Reduction', icon: TrendingUp },
              { metric: '70%', label: 'Cost Savings', icon: BarChart },
              { metric: '95%', label: 'Issue Prevention', icon: Target }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-white mb-2">{stat.metric}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Flexible Pricing Plans
            </h2>
            <p className="text-xl text-gray-300">
              Choose the plan that fits your infrastructure size and monitoring needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Small Business',
                price: '$1,800',
                period: '/month',
                description: 'Perfect for small businesses',
                features: [
                  'Up to 50 servers',
                  'Basic monitoring',
                  'Email support',
                  'Standard reporting',
                  'API access'
                ],
                popular: false
              },
              {
                name: 'Enterprise',
                price: '$2,500',
                period: '/month',
                description: 'Ideal for growing enterprises',
                features: [
                  'Up to 500 servers',
                  'Advanced AI features',
                  'Priority support',
                  'Custom reporting',
                  'Real-time analytics',
                  'Integration support'
                ],
                popular: true
              },
              {
                name: 'Global',
                price: 'Custom',
                period: '',
                description: 'For large global operations',
                features: [
                  'Unlimited servers',
                  'Custom AI models',
                  '24/7 dedicated support',
                  'White-label solution',
                  'Multi-region support',
                  'Custom integrations'
                ],
                popular: false
              }
            ].map((plan, index) => (
              <div key={index} className={`relative bg-white/5 backdrop-blur-sm border rounded-xl p-8 ${plan.popular ? 'border-blue-500/50 ring-2 ring-blue-500/20' : 'border-white/10'}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-300 ${
                  plan.popular 
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white' 
                    : 'border border-gray-600 text-white hover:bg-white/10'
                }`}>
                  {plan.name === 'Global' ? 'Contact Sales' : 'Get Started'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-slate-800 to-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Monitor Your Infrastructure?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join organizations worldwide who trust our AI-powered infrastructure monitoring solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 inline-flex items-center">
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="border border-gray-600 text-white hover:bg-white/10 font-bold py-4 px-8 rounded-lg transition-all duration-300 inline-flex items-center">
              <Users className="w-5 h-5 mr-2" />
              Schedule Demo
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIInfrastructureMonitoringPro;