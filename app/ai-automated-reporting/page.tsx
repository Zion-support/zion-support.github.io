<<<<<<< HEAD
'use client'
import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings, Check, Send, BarChart3, DollarSign, Activity, Lock, FileText, CreditCard, Building2, Sparkles, PieChart } from 'lucide-react'
const AiAutomatedReportingPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
    title: 'AI-Powered Intelligence',
      description: 'Advanced AI algorithms that provide intelligent insights and recommendations.',
    benefits: ['Smart recommendations', 'Predictive analytics', 'Automated insights', 'Real-time analysis']
},
    {
  icon: BarChart,
    title: 'Advanced Analytics',
      description: 'Comprehensive analytics dashboard with real-time data visualization.',
    benefits: ['Real-time dashboards', 'Custom reports', 'Data visualization', 'Performance metrics']
},
    {
  icon: Target,
    title: 'Precision Targeting',
      description: 'Target specific goals and objectives with precision and accuracy.',
    benefits: ['Goal tracking', 'Performance optimization', 'Strategic planning', 'Success metrics']
},
    {
  icon: TrendingUp,
    title: 'Growth Optimization',
      description: 'Optimize your business growth with data-driven strategies.',
    benefits: ['Growth strategies', 'Market analysis', 'Competitive insights', 'ROI optimization']
}
  ]
  const benefits = [
  "Increase efficiency by up to 50%",
      "Reduce costs by 30% with automation",
      "Improve decision-making with AI insights",
      "Scale operations without proportional staff increases",
    'Gain competitive advantage with advanced technology'
  ]
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-blue-600/20"></div>
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md: text-7xl font-bold text-white mb-6 leading-tight">
              Page
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Advanced Page solution for modern businesses.
            </p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center">
              <button className="bg-emerald-600 hover: bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center">
                Get Started
                <ArrowRight className="w-8 h-8" />
              </button>
              <button className="border border-emerald-400 text-emerald-400 hover: bg-emerald-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
                Learn More
              </button>
            </div>
          </div>
        </section>
        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Key Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Powerful AI-driven features designed to transform your business operations
              </p>
            </div>
            <div className="grid md: grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <feature.icon className="h-12 w-12 text-emerald-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-8 h-8" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Benefits Section */}
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our Solution</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the benefits of cutting-edge AI technology
              </p>
            </div>
            <div className="grid md: grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <CheckCircle className="w-8 h-8" />
                  <p className="text-gray-300 text-lg">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses already using our AI solutions
            </p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center">
              <button className="bg-emerald-600 hover: bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
                Start Free Trial
              </button>
              <button className="border border-emerald-400 text-emerald-400 hover: bg-emerald-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
                Contact Sales
=======
'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { BarChart, TrendingUp, FileText, Zap, Brain, CheckCircle, ArrowRight, Star, Users, Clock, Shield, Target } from 'lucide-react';

const AIAutomatedReportingPage: React.FC = () => {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-8">
                <Brain className="w-5 h-5 text-cyan-400 mr-2" />
                <span className="text-cyan-400 font-medium">AI-Powered Intelligence</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                AI Automated
                <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Reporting
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your business intelligence with AI-powered automated reporting. 
                Generate comprehensive insights, analytics, and reports automatically 
                with our advanced AI reporting solutions.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25">
                  Get Started Free
                  <ArrowRight className="w-5 h-5 ml-2 inline" />
                </button>
                <button className="px-8 py-4 border border-cyan-500/30 text-cyan-400 rounded-xl font-semibold hover:bg-cyan-500/10 transition-all duration-300">
                  View Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Intelligent Reporting Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI-powered reporting platform delivers comprehensive insights 
                and automated analytics for data-driven decision making.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-6">
                  <BarChart className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Real-time Analytics</h3>
                <p className="text-gray-300 mb-4">
                  Generate real-time reports and analytics with live data integration 
                  and instant insights for immediate decision making.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                    Live data streaming
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                    Instant report generation
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                    Real-time dashboards
                  </li>
                </ul>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-6">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Automated Report Generation</h3>
                <p className="text-gray-300 mb-4">
                  AI automatically generates comprehensive reports based on your data, 
                  saving hours of manual work and ensuring consistency.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-purple-400 mr-2" />
                    Scheduled reporting
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-purple-400 mr-2" />
                    Custom templates
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-purple-400 mr-2" />
                    Multi-format export
                  </li>
                </ul>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-green-500/20 hover:border-green-500/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mb-6">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Predictive Insights</h3>
                <p className="text-gray-300 mb-4">
                  Leverage AI to predict trends, identify patterns, and forecast 
                  future performance with advanced machine learning algorithms.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Trend forecasting
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Anomaly detection
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Performance predictions
                  </li>
                </ul>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl flex items-center justify-center mb-6">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Smart Automation</h3>
                <p className="text-gray-300 mb-4">
                  Automate complex reporting workflows with intelligent scheduling, 
                  data processing, and distribution to stakeholders.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-orange-400 mr-2" />
                    Workflow automation
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-orange-400 mr-2" />
                    Smart scheduling
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-orange-400 mr-2" />
                    Auto-distribution
                  </li>
                </ul>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mb-6">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Data Security</h3>
                <p className="text-gray-300 mb-4">
                  Enterprise-grade security ensures your data and reports are protected 
                  with advanced encryption and compliance standards.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-blue-400 mr-2" />
                    End-to-end encryption
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-blue-400 mr-2" />
                    Access controls
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-blue-400 mr-2" />
                    Audit trails
                  </li>
                </ul>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-pink-500/20 hover:border-pink-500/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Custom Dashboards</h3>
                <p className="text-gray-300 mb-4">
                  Create personalized dashboards with drag-and-drop functionality 
                  and customizable widgets for your specific reporting needs.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-pink-400 mr-2" />
                    Drag-and-drop builder
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-pink-400 mr-2" />
                    Custom widgets
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-pink-400 mr-2" />
                    Interactive charts
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Why Choose AI Automated Reporting?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Transform your reporting process with intelligent automation 
                and gain competitive advantages through data-driven insights.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Save 80% Time on Reporting</h3>
                      <p className="text-gray-300">
                        Automate repetitive reporting tasks and focus on strategic analysis 
                        instead of manual data compilation and formatting.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Enhanced Collaboration</h3>
                      <p className="text-gray-300">
                        Share insights across teams with automated distribution, 
                        real-time collaboration, and role-based access controls.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Better Decision Making</h3>
                      <p className="text-gray-300">
                        Access comprehensive insights and predictions to make 
                        informed decisions faster and with greater confidence.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-cyan-500/20">
                <h3 className="text-2xl font-bold text-white mb-6">Key Metrics</h3>
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Report Generation Time</span>
                    <span className="text-cyan-400 font-bold">-80%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Data Accuracy</span>
                    <span className="text-green-400 font-bold">99.9%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">User Productivity</span>
                    <span className="text-purple-400 font-bold">+150%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Cost Reduction</span>
                    <span className="text-orange-400 font-bold">-60%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Reporting?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses already using AI-powered automated reporting 
              to drive better decisions and accelerate growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 inline" />
              </button>
              <button className="px-8 py-4 border border-cyan-500/30 text-cyan-400 rounded-xl font-semibold hover:bg-cyan-500/10 transition-all duration-300">
                Schedule Demo
>>>>>>> main
              </button>
            </div>
          </div>
        </section>
<<<<<<< HEAD
      </div>
      <Footer />
</>
  )
}
export default AiAutomatedReportingPage
=======
        
        <Footer />
      </div>
    </>
  );
};

export default AIAutomatedReportingPage;
>>>>>>> main
