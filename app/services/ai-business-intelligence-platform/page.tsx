// import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, BarChart3, TrendingUp, DollarSign, Clock, Shield, Database, Zap, Users, Target } from 'lucide-react';

export default function AIBusinessIntelligencePlatform() {
  return (
    <>
      <Helmet>
        <title>AI Business Intelligence Platform | Zion Tech Group</title>
        <meta name="description" content="Transform your data into actionable insights with AI-powered business intelligence. Get predictive analytics, automated reporting, and real-time dashboards." />
        <meta name="keywords" content="AI business intelligence, predictive analytics, data visualization, automated reporting, business insights" />
        <link rel="canonical" href="https://ziontechgroup.com/services/ai-business-intelligence-platform" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-blue-600/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                AI Business Intelligence Platform
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your data into actionable insights with AI-powered business intelligence. Get predictive analytics, automated reporting, and real-time dashboards that drive growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#pricing" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                  View Pricing
                </a>
                <a href="/contact" className="border border-white text-white hover:bg-white hover:text-slate-900 px-8 py-3 rounded-lg font-semibold transition-colors">
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="py-20 bg-slate-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Powerful AI Features</h2>
              <p className="text-xl text-gray-300">Everything you need to turn data into competitive advantage</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
                <BarChart3 className="h-12 w-12 text-emerald-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Predictive Analytics</h3>
                <p className="text-gray-300">Forecast trends, customer behavior, and business outcomes with advanced AI algorithms.</p>
              </div>
              
              <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
                <Database className="h-12 w-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Data Integration</h3>
                <p className="text-gray-300">Connect and analyze data from multiple sources including CRM, ERP, and external APIs.</p>
              </div>
              
              <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
                <Zap className="h-12 w-12 text-yellow-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Automated Insights</h3>
                <p className="text-gray-300">AI automatically identifies patterns, anomalies, and opportunities in your data.</p>
              </div>
              
              <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
                <TrendingUp className="h-12 w-12 text-green-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Real-time Dashboards</h3>
                <p className="text-gray-300">Monitor KPIs and metrics in real-time with customizable, interactive dashboards.</p>
              </div>
              
              <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
                <Target className="h-12 w-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Smart Alerts</h3>
                <p className="text-gray-300">Get notified of important changes and opportunities through intelligent alerting.</p>
              </div>
              
              <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
                <Shield className="h-12 w-12 text-red-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Enterprise Security</h3>
                <p className="text-gray-300">Bank-level security with role-based access control and data encryption.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Transform Your Business Intelligence</h2>
              <p className="text-xl text-gray-300">See how AI-powered insights drive better decisions and growth</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="h-6 w-6 text-green-400 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Make Decisions 10x Faster</h3>
                      <p className="text-gray-300">Get instant insights instead of waiting days or weeks for manual analysis.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="h-6 w-6 text-green-400 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Increase Revenue by 25%</h3>
                      <p className="text-gray-300">Identify new opportunities and optimize existing processes with AI insights.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="h-6 w-6 text-green-400 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Reduce Costs by 30%</h3>
                      <p className="text-gray-300">Optimize operations and eliminate inefficiencies with predictive analytics.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="h-6 w-6 text-green-400 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Improve Accuracy by 95%</h3>
                      <p className="text-gray-300">AI eliminates human error and provides consistent, reliable insights.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-emerald-600 to-blue-600 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-white mb-6">ROI Calculator</h3>
                <div className="space-y-4">
                  <div className="flex justify-between text-white">
                    <span>Time Saved per Month:</span>
                    <span className="font-semibold">80 hours</span>
                  </div>
                  <div className="flex justify-between text-white">
                    <span>Revenue Increase:</span>
                    <span className="font-semibold">25%</span>
                  </div>
                  <div className="flex justify-between text-white">
                    <span>Cost Reduction:</span>
                    <span className="font-semibold">30%</span>
                  </div>
                  <div className="flex justify-between text-white">
                    <span>Average Monthly Savings:</span>
                    <span className="font-semibold">$15,000</span>
                  </div>
                  <div className="border-t border-white/20 pt-4">
                    <div className="flex justify-between text-white text-lg font-bold">
                      <span>Annual ROI:</span>
                      <span className="text-green-300">2,400%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Use Cases Section */}
        <div className="py-20 bg-slate-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Perfect For Every Industry</h2>
              <p className="text-xl text-gray-300">AI business intelligence solutions tailored to your sector</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-slate-800 p-6 rounded-lg border border-slate-700 text-center">
                <DollarSign className="h-12 w-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Financial Services</h3>
                <p className="text-gray-300">Risk assessment, fraud detection, and investment optimization with AI analytics.</p>
              </div>
              
              <div className="bg-slate-800 p-6 rounded-lg border border-slate-700 text-center">
                <Users className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Retail & E-commerce</h3>
                <p className="text-gray-300">Customer behavior analysis, inventory optimization, and demand forecasting.</p>
              </div>
              
              <div className="bg-slate-800 p-6 rounded-lg border border-slate-700 text-center">
                <BarChart3 className="h-12 w-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Manufacturing</h3>
                <p className="text-gray-300">Predictive maintenance, quality control, and supply chain optimization.</p>
              </div>
              
              <div className="bg-slate-800 p-6 rounded-lg border border-slate-700 text-center">
                <Target className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Healthcare</h3>
                <p className="text-gray-300">Patient outcomes prediction, resource allocation, and treatment optimization.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div id="pricing" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Flexible Pricing Plans</h2>
              <p className="text-xl text-gray-300">Choose the plan that matches your data volume and analytics needs</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Starter Plan */}
              <div className="bg-slate-800 p-8 rounded-lg border border-slate-700">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">Starter</h3>
                  <div className="text-4xl font-bold text-emerald-400 mb-2">$199</div>
                  <div className="text-gray-300">per month</div>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                    Up to 1M data points
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                    5 data sources
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                    Basic dashboards
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                    Email support
                  </li>
                </ul>
                <a href="/contact" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-lg font-semibold transition-colors block text-center">
                  Get Started
                </a>
              </div>
              
              {/* Professional Plan */}
              <div className="bg-gradient-to-br from-emerald-600 to-blue-600 p-8 rounded-lg border-2 border-emerald-500 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-emerald-500 text-white px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span>
                </div>
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">Professional</h3>
                  <div className="text-4xl font-bold text-white mb-2">$499</div>
                  <div className="text-emerald-100">per month</div>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center text-white">
                    <CheckCircle className="h-5 w-5 text-green-300 mr-3" />
                    Up to 10M data points
                  </li>
                  <li className="flex items-center text-white">
                    <CheckCircle className="h-5 w-5 text-green-300 mr-3" />
                    Unlimited data sources
                  </li>
                  <li className="flex items-center text-white">
                    <CheckCircle className="h-5 w-5 text-green-300 mr-3" />
                    Advanced analytics
                  </li>
                  <li className="flex items-center text-white">
                    <CheckCircle className="h-5 w-5 text-green-300 mr-3" />
                    Predictive models
                  </li>
                  <li className="flex items-center text-white">
                    <CheckCircle className="h-5 w-5 text-green-300 mr-3" />
                    Priority support
                  </li>
                </ul>
                <a href="/contact" className="w-full bg-white hover:bg-gray-100 text-emerald-600 py-3 rounded-lg font-semibold transition-colors block text-center">
                  Get Started
                </a>
              </div>
              
              {/* Enterprise Plan */}
              <div className="bg-slate-800 p-8 rounded-lg border border-slate-700">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">Enterprise</h3>
                  <div className="text-4xl font-bold text-blue-400 mb-2">$999</div>
                  <div className="text-gray-300">per month</div>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                    Unlimited data points
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                    Custom AI models
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                    White-label solution
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                    API access
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                    Dedicated support
                  </li>
                </ul>
                <a href="/contact" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors block text-center">
                  Contact Sales
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-20 bg-slate-800/50">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Data into Insights?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join industry leaders using AI to make smarter, faster business decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Start Free Trial
              </a>
              <a href="tel:+13024640950" className="border border-white text-white hover:bg-white hover:text-slate-900 px-8 py-3 rounded-lg font-semibold transition-colors">
                Call: +1 302 464 0950
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}