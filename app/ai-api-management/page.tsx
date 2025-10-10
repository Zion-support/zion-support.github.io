<<<<<<< HEAD
import React from 'react';
import { Helmet } from 'react-helmet-async';

const aiapimanagementPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Ai Api Management | Zion Tech Group</title>
        <meta name="description" content="Professional ai api management services by Zion Tech Group. Advanced AI and IT solutions for your business." />
        <meta name="keywords" content="ai api management, AI solutions, IT services, Zion Tech Group" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Ai Api Management
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Professional ai api management services powered by advanced AI and cutting-edge technology.
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-12">
              <h2 className="text-2xl font-semibold text-white mb-4">Why Choose Zion Tech Group?</h2>
              <div className="grid md:grid-cols-3 gap-6 text-left">
                <div className="bg-cyan-500/20 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-cyan-400 mb-2">Advanced AI</h3>
                  <p className="text-gray-300">Cutting-edge artificial intelligence solutions</p>
                </div>
                <div className="bg-purple-500/20 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-purple-400 mb-2">Expert Team</h3>
                  <p className="text-gray-300">Experienced professionals with proven track record</p>
                </div>
                <div className="bg-pink-500/20 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-pink-400 mb-2">24/7 Support</h3>
                  <p className="text-gray-300">Round-the-clock technical support and monitoring</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <a 
                href="/contact" 
                className="inline-block bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
              >
                Get Started Today
              </a>
              <div>
                <a 
                  href="/" 
                  className="text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  ← Back to Home
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default aiapimanagementPage;
=======
'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Settings, Brain, TrendingUp, CheckCircle, ArrowRight, BarChart, Users, Lock, Eye, Target, Zap, Shield } from 'lucide-react';

const AIAPIManagementPro: React.FC = () => {
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
              <Settings className="w-4 h-4 mr-2" />
              AI API Management Platform
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              AI API Management
              <span className="block bg-gradient-to-r from-blue-400 via-purple-500 to-pink-600 bg-clip-text text-transparent">
                Pro
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
              Advanced AI-powered API management platform that optimizes performance by 60%, 
              reduces latency by 40%, and provides intelligent monitoring and analytics.
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
              Intelligent API Management
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI-powered platform provides comprehensive API management with intelligent 
              optimization, security, and monitoring capabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                title: 'AI Optimization',
                description: 'Intelligent API performance optimization',
                features: ['Load Balancing', 'Caching Strategies', 'Traffic Management']
              },
              {
                icon: Shield,
                title: 'Advanced Security',
                description: 'Comprehensive API security and protection',
                features: ['Authentication', 'Rate Limiting', 'Threat Detection']
              },
              {
                icon: Zap,
                title: 'Performance Monitoring',
                description: 'Real-time API performance monitoring',
                features: ['Latency Tracking', 'Error Monitoring', 'Usage Analytics']
              },
              {
                icon: BarChart,
                title: 'Analytics Dashboard',
                description: 'Comprehensive API analytics and insights',
                features: ['Usage Reports', 'Performance Metrics', 'Trend Analysis']
              },
              {
                icon: Target,
                title: 'Auto-scaling',
                description: 'Automatic scaling based on demand',
                features: ['Dynamic Scaling', 'Resource Optimization', 'Cost Management']
              },
              {
                icon: Lock,
                title: 'Compliance',
                description: 'Built-in compliance and governance',
                features: ['API Governance', 'Audit Trails', 'Policy Enforcement']
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
              Proven API Management Results
            </h2>
            <p className="text-xl text-gray-300">
              Our clients have achieved significant improvements in API performance and management
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { metric: '60%', label: 'Performance Improvement', icon: TrendingUp },
              { metric: '40%', label: 'Latency Reduction', icon: Zap },
              { metric: '50%', label: 'Cost Savings', icon: BarChart },
              { metric: '99.9%', label: 'API Uptime', icon: Shield }
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
              Choose the plan that fits your API management needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Starter',
                price: '$1,400',
                period: '/month',
                description: 'Perfect for small applications',
                features: [
                  'Up to 10 APIs',
                  'Basic monitoring',
                  'Email support',
                  'Standard analytics',
                  'API access'
                ],
                popular: false
              },
              {
                name: 'Professional',
                price: '$2,200',
                period: '/month',
                description: 'Ideal for growing businesses',
                features: [
                  'Up to 100 APIs',
                  'Advanced AI features',
                  'Priority support',
                  'Custom analytics',
                  'Real-time monitoring',
                  'Integration support'
                ],
                popular: true
              },
              {
                name: 'Enterprise',
                price: 'Custom',
                period: '',
                description: 'For large-scale operations',
                features: [
                  'Unlimited APIs',
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
                  {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
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
            Ready to Optimize Your APIs?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join organizations worldwide who trust our AI-powered API management platform.
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

export default AIAPIManagementPro;
>>>>>>> origin/cursor/website-audit-and-update-with-deployment-d464
