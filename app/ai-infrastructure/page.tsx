import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Server, 
  Cloud, 
  Shield, 
  Zap, 
  BarChart3, 
  CheckCircle, 
  ArrowRight,
  Cpu,
  Database,
  Network,
  Monitor,
  Settings,
  AlertTriangle,
  TrendingUp,
  Users,
  Globe
} from 'lucide-react';

const AIInfrastructurePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Infrastructure Management - Zion Tech Group</title>
        <meta name="description" content="Intelligent infrastructure optimization with AI-powered monitoring, automated scaling, and predictive maintenance for enterprise systems." />
        <meta name="keywords" content="AI infrastructure, intelligent monitoring, automated scaling, predictive maintenance, enterprise IT, cloud optimization" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(0,255,255,0.1)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.1)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          
          <div className="max-w-7xl mx-auto relative">
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-2 bg-cyan-500/10 text-cyan-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Server className="w-4 h-4" />
                <span>AI Infrastructure Management</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Intelligent Infrastructure
                <span className="block bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Optimization
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Transform your infrastructure with AI-powered monitoring, automated scaling, 
                and predictive maintenance. Reduce costs by 40% while improving performance and reliability.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 inline-flex items-center">
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 font-bold py-4 px-8 rounded-lg transition-all duration-300 inline-flex items-center">
                  View Demo
                </button>
              </div>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
              <div className="bg-slate-800/50 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">40%</div>
                <div className="text-gray-300">Cost Reduction</div>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm border border-purple-400/20 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">99.9%</div>
                <div className="text-gray-300">Uptime</div>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm border border-pink-400/20 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-pink-400 mb-2">60%</div>
                <div className="text-gray-300">Faster Deployments</div>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm border border-green-400/20 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">24/7</div>
                <div className="text-gray-300">Monitoring</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                AI-Powered Infrastructure Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Leverage advanced AI algorithms to optimize your infrastructure performance, 
                predict failures, and automate scaling decisions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-slate-800/50 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-8 hover:border-cyan-400/40 transition-all duration-300">
                <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-6">
                  <Monitor className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Intelligent Monitoring</h3>
                <p className="text-gray-300 mb-4">
                  Real-time monitoring with AI-powered anomaly detection and predictive alerts.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Anomaly detection
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Predictive alerts
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Real-time dashboards
                  </li>
                </ul>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm border border-purple-400/20 rounded-xl p-8 hover:border-purple-400/40 transition-all duration-300">
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-6">
                  <Zap className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Auto Scaling</h3>
                <p className="text-gray-300 mb-4">
                  Automatically scale resources based on demand patterns and performance metrics.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Demand-based scaling
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Cost optimization
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Performance tuning
                  </li>
                </ul>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm border border-pink-400/20 rounded-xl p-8 hover:border-pink-400/40 transition-all duration-300">
                <div className="w-12 h-12 bg-pink-500/20 rounded-lg flex items-center justify-center mb-6">
                  <BarChart3 className="w-6 h-6 text-pink-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Predictive Analytics</h3>
                <p className="text-gray-300 mb-4">
                  Advanced analytics to predict failures and optimize resource allocation.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Failure prediction
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Resource optimization
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Performance insights
                  </li>
                </ul>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm border border-green-400/20 rounded-xl p-8 hover:border-green-400/40 transition-all duration-300">
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-6">
                  <Shield className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Security Monitoring</h3>
                <p className="text-gray-300 mb-4">
                  AI-powered security monitoring and threat detection across your infrastructure.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Threat detection
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Vulnerability scanning
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Compliance monitoring
                  </li>
                </ul>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm border border-blue-400/20 rounded-xl p-8 hover:border-blue-400/40 transition-all duration-300">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-6">
                  <Database className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Database Optimization</h3>
                <p className="text-gray-300 mb-4">
                  Intelligent database monitoring and optimization for peak performance.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Query optimization
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Index management
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Performance tuning
                  </li>
                </ul>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm border border-yellow-400/20 rounded-xl p-8 hover:border-yellow-400/40 transition-all duration-300">
                <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center mb-6">
                  <Settings className="w-6 h-6 text-yellow-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Automated Management</h3>
                <p className="text-gray-300 mb-4">
                  Fully automated infrastructure management with minimal human intervention.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Automated deployments
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Self-healing systems
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Configuration management
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Optimize Your Infrastructure?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join hundreds of enterprises already using AI to optimize their infrastructure. 
              Get started with a free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 inline-flex items-center">
                Schedule Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 font-bold py-4 px-8 rounded-lg transition-all duration-300 inline-flex items-center">
                Download Whitepaper
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIInfrastructurePage;