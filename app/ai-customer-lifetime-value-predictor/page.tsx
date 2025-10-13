import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ChartBarIcon, 
  CurrencyDollarIcon, 
  UserGroupIcon,
  ArrowRightIcon,
  CheckIcon,
  StarIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon
} from '@heroicons/react/24/outline';

export default function AICustomerLifetimeValuePredictorPage() {
  return (
    <>
      <Helmet>
        <title>AI Customer Lifetime Value Predictor - Zion Tech Group</title>
        <meta name="description" content="Predict customer lifetime value with AI-powered analytics. Increase revenue by 30% with our advanced CLV prediction micro SaaS solution." />
        <meta name="keywords" content="customer lifetime value, CLV prediction, AI analytics, customer segmentation, revenue optimization" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-gradient-to-br from-purple-900/20 to-cyan-900/20"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
              AI Customer Lifetime Value Predictor
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Predict Customer Lifetime Value with 95% Accuracy Using Advanced AI
            </p>
            <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto">
              Transform your customer data into actionable insights. Our AI-powered CLV predictor helps you identify high-value customers, optimize marketing spend, and increase revenue by up to 30%.
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
              Powerful Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced AI algorithms that analyze customer behavior patterns to predict lifetime value with unprecedented accuracy
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <ChartBarIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">95% Accuracy Prediction</h3>
              <p className="text-gray-300 mb-6">
                Our advanced machine learning models achieve 95% accuracy in predicting customer lifetime value using behavioral and transactional data.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-cyan-500 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <UserGroupIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Customer Segmentation</h3>
              <p className="text-gray-300 mb-6">
                Automatically segment customers into high, medium, and low-value groups for targeted marketing campaigns and retention strategies.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-green-500 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <CurrencyDollarIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Revenue Optimization</h3>
              <p className="text-gray-300 mb-6">
                Identify opportunities to increase customer value through personalized recommendations and targeted upselling strategies.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-yellow-500 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <ChartBarIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Real-time Analytics</h3>
              <p className="text-gray-300 mb-6">
                Get instant insights with real-time dashboards and automated reports that update as new customer data comes in.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-pink-500 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-rose-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <UserGroupIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Churn Prediction</h3>
              <p className="text-gray-300 mb-6">
                Identify customers at risk of churning and take proactive measures to retain them before they leave.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-indigo-500 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <ChartBarIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Marketing ROI</h3>
              <p className="text-gray-300 mb-6">
                Optimize your marketing spend by focusing on customers with the highest predicted lifetime value and growth potential.
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
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your business needs. All plans include our core CLV prediction features.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Starter Plan */}
            <div className="bg-slate-800 p-8 rounded-xl border border-slate-600">
              <h3 className="text-2xl font-bold text-white mb-4">Starter</h3>
              <div className="text-4xl font-bold text-purple-400 mb-6">$99<span className="text-lg text-gray-400">/month</span></div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckIcon className="w-5 h-5 text-green-400 mr-3" />
                  Up to 10,000 customers
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckIcon className="w-5 h-5 text-green-400 mr-3" />
                  Basic CLV predictions
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckIcon className="w-5 h-5 text-green-400 mr-3" />
                  Email support
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckIcon className="w-5 h-5 text-green-400 mr-3" />
                  Basic analytics dashboard
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
              <div className="text-4xl font-bold text-white mb-6">$299<span className="text-lg text-purple-200">/month</span></div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-white">
                  <CheckIcon className="w-5 h-5 text-green-300 mr-3" />
                  Up to 100,000 customers
                </li>
                <li className="flex items-center text-white">
                  <CheckIcon className="w-5 h-5 text-green-300 mr-3" />
                  Advanced CLV predictions
                </li>
                <li className="flex items-center text-white">
                  <CheckIcon className="w-5 h-5 text-green-300 mr-3" />
                  Customer segmentation
                </li>
                <li className="flex items-center text-white">
                  <CheckIcon className="w-5 h-5 text-green-300 mr-3" />
                  Churn prediction
                </li>
                <li className="flex items-center text-white">
                  <CheckIcon className="w-5 h-5 text-green-300 mr-3" />
                  Priority support
                </li>
                <li className="flex items-center text-white">
                  <CheckIcon className="w-5 h-5 text-green-300 mr-3" />
                  API access
                </li>
              </ul>
              <Link 
                to="/contact" 
                className="w-full bg-white text-purple-600 py-3 rounded-lg font-semibold text-center block hover:bg-gray-100 transition-all duration-300"
              >
                Get Started
              </Link>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-slate-800 p-8 rounded-xl border border-slate-600">
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
              <div className="text-4xl font-bold text-purple-400 mb-6">Custom</div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckIcon className="w-5 h-5 text-green-400 mr-3" />
                  Unlimited customers
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
                  Dedicated support
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckIcon className="w-5 h-5 text-green-400 mr-3" />
                  On-premise deployment
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
              Why Choose Our CLV Predictor?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join hundreds of businesses that have increased their revenue by up to 30% using our AI-powered customer lifetime value predictions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">30%</div>
              <div className="text-gray-300">Average Revenue Increase</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">95%</div>
              <div className="text-gray-300">Prediction Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">500+</div>
              <div className="text-gray-300">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">24/7</div>
              <div className="text-gray-300">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Ready to Predict Your Customer Value?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Start your free trial today and see how AI can transform your customer analytics
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