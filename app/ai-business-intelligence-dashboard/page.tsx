import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ChartBarIcon, 
  CpuChipIcon, 
  DatabaseIcon,
  ArrowRightIcon,
  CheckIcon,
  StarIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  TrendingUpIcon,
  EyeIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline';

export default function AIBusinessIntelligenceDashboardPage() {
  return (
    <>
      <Helmet>
        <title>AI Business Intelligence Dashboard - Zion Tech Group</title>
        <meta name="description" content="Transform your data into actionable insights with our AI-powered business intelligence dashboard. Real-time analytics, predictive insights, and automated reporting." />
        <meta name="keywords" content="business intelligence, AI analytics, data visualization, predictive analytics, business dashboard, KPI tracking" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-gradient-to-br from-purple-900/20 to-cyan-900/20"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
              AI Business Intelligence Dashboard
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Transform Your Data Into Actionable Business Insights with AI
            </p>
            <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto">
              Make data-driven decisions with our advanced AI-powered business intelligence platform. Get real-time insights, predictive analytics, and automated reports that help you understand your business performance and identify growth opportunities.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                to="/contact" 
                className="group bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
              >
                Start Free Trial
                <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/demo" 
                className="group border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300 flex items-center gap-2"
              >
                Watch Demo
                <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Powerful AI Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced AI algorithms that analyze your business data and provide actionable insights for better decision-making
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <ChartBarIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Real-time Analytics</h3>
              <p className="text-gray-300 mb-6">
                Monitor your business performance in real-time with live dashboards that update automatically as new data comes in.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-cyan-500 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <CpuChipIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Predictive Analytics</h3>
              <p className="text-gray-300 mb-6">
                Get AI-powered predictions about future trends, customer behavior, and business performance to make proactive decisions.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-green-500 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <DatabaseIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Data Integration</h3>
              <p className="text-gray-300 mb-6">
                Connect all your data sources including CRM, ERP, marketing tools, and databases for a unified view of your business.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-yellow-500 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <TrendingUpIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">KPI Tracking</h3>
              <p className="text-gray-300 mb-6">
                Track and monitor key performance indicators with customizable dashboards and automated alerts for important metrics.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-pink-500 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-rose-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <EyeIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Visual Analytics</h3>
              <p className="text-gray-300 mb-6">
                Create stunning visualizations and interactive charts that make complex data easy to understand and share with your team.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-indigo-500 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <ShieldCheckIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Secure & Compliant</h3>
              <p className="text-gray-300 mb-6">
                Enterprise-grade security with SOC 2 compliance, data encryption, and role-based access control to protect your sensitive data.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Start with our free plan and scale as your business grows
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Starter Plan */}
            <div className="bg-slate-800 p-8 rounded-xl border border-slate-600">
              <h3 className="text-2xl font-bold text-white mb-4">Starter</h3>
              <div className="text-4xl font-bold text-purple-400 mb-6">$199<span className="text-lg text-gray-400">/month</span></div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckIcon className="w-5 h-5 text-green-400 mr-3" />
                  Up to 5 data sources
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckIcon className="w-5 h-5 text-green-400 mr-3" />
                  Basic dashboards
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckIcon className="w-5 h-5 text-green-400 mr-3" />
                  Standard reports
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckIcon className="w-5 h-5 text-green-400 mr-3" />
                  Email support
                </li>
              </ul>
              <Link 
                to="/contact" 
                className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white py-3 rounded-lg font-semibold text-center block hover:from-purple-700 hover:to-cyan-700 transition-all duration-300"
              >
                Get Started
              </Link>
            </div>

            {/* Professional Plan */}
            <div className="bg-gradient-to-br from-purple-600 to-cyan-600 p-8 rounded-xl border-2 border-purple-400 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
              <div className="text-4xl font-bold text-white mb-6">$499<span className="text-lg text-purple-200">/month</span></div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-white">
                  <CheckIcon className="w-5 h-5 text-green-300 mr-3" />
                  Up to 20 data sources
                </li>
                <li className="flex items-center text-white">
                  <CheckIcon className="w-5 h-5 text-green-300 mr-3" />
                  Advanced dashboards
                </li>
                <li className="flex items-center text-white">
                  <CheckIcon className="w-5 h-5 text-green-300 mr-3" />
                  Predictive analytics
                </li>
                <li className="flex items-center text-white">
                  <CheckIcon className="w-5 h-5 text-green-300 mr-3" />
                  Custom reports
                </li>
                <li className="flex items-center text-white">
                  <CheckIcon className="w-5 h-5 text-green-300 mr-3" />
                  API access
                </li>
                <li className="flex items-center text-white">
                  <CheckIcon className="w-5 h-5 text-green-300 mr-3" />
                  Priority support
                </li>
              </ul>
              <Link 
                to="/contact" 
                className="w-full bg-white text-purple-600 py-3 rounded-lg font-semibold text-center block hover:bg-gray-100 transition-all duration-300"
              >
                Start Pro Trial
              </Link>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-slate-800 p-8 rounded-xl border border-slate-600">
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
              <div className="text-4xl font-bold text-purple-400 mb-6">Custom</div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckIcon className="w-5 h-5 text-green-400 mr-3" />
                  Unlimited data sources
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckIcon className="w-5 h-5 text-green-400 mr-3" />
                  Custom AI models
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckIcon className="w-5 h-5 text-green-400 mr-3" />
                  White-label solution
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckIcon className="w-5 h-5 text-green-400 mr-3" />
                  On-premise deployment
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckIcon className="w-5 h-5 text-green-400 mr-3" />
                  Dedicated support
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckIcon className="w-5 h-5 text-green-400 mr-3" />
                  Custom integrations
                </li>
              </ul>
              <Link 
                to="/contact" 
                className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white py-3 rounded-lg font-semibold text-center block hover:from-purple-700 hover:to-cyan-700 transition-all duration-300"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Proven Business Impact
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join hundreds of businesses that have transformed their decision-making with our AI-powered BI platform
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">40%</div>
              <div className="text-gray-300">Faster Decision Making</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">25%</div>
              <div className="text-gray-300">Revenue Increase</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">60%</div>
              <div className="text-gray-300">Time Saved on Reporting</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">500+</div>
              <div className="text-gray-300">Enterprise Clients</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Ready to Transform Your Data?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Start your free trial today and discover the power of AI-driven business intelligence
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="flex items-center justify-center gap-4 text-gray-300">
                <PhoneIcon className="w-6 h-6 text-purple-400" />
                <span>+1-302-464-0950</span>
              </div>
              <div className="flex items-center justify-center gap-4 text-gray-300">
                <EnvelopeIcon className="w-6 h-6 text-purple-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center justify-center gap-4 text-gray-300">
                <MapPinIcon className="w-6 h-6 text-purple-400" />
                <span>Middletown, DE</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300"
              >
                Start Free Trial
              </Link>
              <Link 
                to="/demo" 
                className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}