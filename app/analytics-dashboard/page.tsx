<<<<<<< HEAD
'use client'
import React from 'react'
import SEOHead from '../components/SEOHead'
=======
<<<<<<< HEAD
'use client";";";";
import React from 'react";";";";
import { Link } from 'react-router-dom";";";";
import SEOHead from '../components/SEOHead";
import {
=======
'use client';";
import React from 'react';";
import { Link } from 'react-router-dom';";
import SEOHead from '../components/SEOHead';";
>>>>>>> main
import { 
>>>>>>> main
  ChartBarIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  ClockIcon,
  CurrencyDollarIcon,
  UserGroupIcon,
  ShieldCheckIcon,
<<<<<<< HEAD
  CpuChipIcon,";
  GlobeAltIcon,";";
  DevicePhoneMobileIcon;";";";
} from '@heroicons/react/24/outline";";
const AnalyticsDashboardPage: React.FC  =  () => {";";
  const features = [";";,";
    'Real-time data visualization",";";";
    'Custom dashboard creation",";";";
    'Predictive analytics and forecasting",";";";
    'Multi-source data integration",";";";
    'Advanced reporting tools",";";";
    'Mobile-responsive design",";";";
    'API access for custom integrations",";";";
    'Automated alerts and notifications",";";";
    'Data export capabilities",";";";
    'Team collaboration features",";";";
    'White-label options",";";";
    '24/7 customer support";
  ];";
  const pricingPlans  =  [";";
    {";";";
      name: 'Starter",";";";
      price: '$99",";";";
      period: '/month",";";";
      description: 'Perfect for small businesses",";";
      features: [";";";
        '5 dashboards",";";";
        'Basic data sources",";";";
        'Standard reports",";";";
        'Email support",";";";
        '1 user account"
      ],
      popular: false";
    },";";
    {";";";
      name: 'Pro",";";";
      price: '$349",";";";
      period: '/month",";";";
      description: 'Ideal for growing businesses",";";
      features: [";";";
        'Unlimited dashboards",";";";
        'All data sources",";";";
        'Advanced analytics",";";";
        'Priority support",";";";
        'Up to 10 users",";";";
        'API access",";";";
        'Custom integrations"
      ],
      popular: true";
    },";";
    {";";";
      name: 'Enterprise",";";";
      price: '$999",";";";
      period: '/month",";";";
      description: 'For large organizations",";";
      features: [";";";
        'Everything in Pro",";";";
        'Unlimited users",";";";
        'White-label solution",";";";
        'Dedicated support",";";";
        'Custom development",";";";
        'SLA guarantee",";";";
        'On-premise deployment"
      ],
      popular: false
    };
  ];
  return (";
    <>";";
      <SEOHead ";";";
        title="Business Analytics Dashboard Pro - Real-time Data Visualization"
        description="Comprehensive business intelligence platform with real-time insights, predictive analytics, and custom reporting. Transform your data into actionable insights."
        keywords="business analytics, data visualization, business intelligence, dashboard, reporting, predictive analytics"
      />"
      <div className="min-h-screen bg-slate-900 text-white">";";";
        {/* Hero Section */}"
        <section className="relative overflow-hidden py-20 lg: py-32">"
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-slate-900 to-pink-900/30"></div>"
          <div className="absolute inset-0 opacity-20" style={{",";
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23A855F7' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`";";";
          }}></div>"
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">"
            <div className="text-center">"
              <div className="flex items-center justify-center mb-6">"
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">"
                  <ChartBarIcon className="w-8 h-8 text-white" />";";
                </div>";";";
              </div>"
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">"
                Business Analytics <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Dashboard Pro</span>";";";
              </h1>"
              <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto mb-8">";";
                Transform your data into actionable insights with our comprehensive business intelligence platform. Real-time dashboards, predictive analytics, and custom reporting for data-driven decisions.";";";
              </p>"
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">";";";
                <Link "
                  to="/contact"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105">";
                  Start Free Trial";";
                </Link>";";";
                <Link "
                  to="#demo"
                  className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300">
                  View Demo";
                </Link>";";
              </div>";";";
              {/* Stats */}"
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">"
                <div className="text-center">"
                  <div className="text-3xl font-bold text-purple-400 mb-2">50K+</div>"
                  <div className="text-gray-300">Dashboards Created</div>";";";
                </div>"
                <div className="text-center">"
                <div className="text-3xl font-bold text-purple-400 mb-2">200+</div>"
                  <div className="text-gray-300">Data Sources</div>";";";
                </div>"
                <div className="text-center">"
                  <div className="text-3xl font-bold text-purple-400 mb-2">99.9%</div>"
                  <div className="text-gray-300">Uptime</div>";";";
                </div>"
                <div className="text-center">"
                  <div className="text-3xl font-bold text-purple-400 mb-2">150%</div>"
                  <div className="text-gray-300">ROI Increase</div>
                </div>
              </div>
            </div>";
          </div>";";
        </section>";";";
        {/* Features Section */}"
        <section className="py-16 sm:py-20 bg-slate-800/30">"
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">"
            <div className="text-center mb-16">"
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">"
                Powerful Analytics <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Features</span>";";";
              </h2>"
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">";
                Everything you need to analyze, visualize, and act on your business data.";";
              </p>";";";
            </div>"
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">";
              {features.map((feature, index) => (";";
                <div ";";";
                  key={index}"
                  className="flex items-start space-x-3 p-6 bg-slate-800/50 rounded-lg hover:bg-slate-700/50 transition-all duration-300 group">"
                  <CheckCircleIcon className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />";";";
                  <div>"
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">
                      {feature};
                    </h3>
                  </div>
                </div>
              ))};
            </div>";
          </div>";";
        </section>";";";
        {/* Pricing Section */}"
        <section className="py-16 sm:py-20">"
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">"
            <div className="text-center mb-16">"
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">"
                Choose Your <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Analytics Plan</span>";";";
              </h2>"
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">";
                Flexible pricing options to fit your business needs and budget.";";
              </p>";";";
            </div>"
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div 
                  key={index};";
                  className={`relative bg-slate-800/50 rounded-xl p-8 border transition-all duration-300 hover: scale-105 ${";";
                    plan.popular ";";";
                      ? 'border-purple-500 shadow-xl shadow-purple-500/20" ";";";
                      : 'border-slate-700 hover:border-purple-500",";
                  }`};";";
                >";";";
                  {plan.popular && ("
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">"
                      <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular";
                      </span>";";
                    </div>";";";
                  )}"
                  <div className="text-center mb-8">"
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>"
                    <p className="text-gray-400 mb-4">{plan.description}</p>"
                    <div className="flex items-baseline justify-center">"
                      <span className="text-4xl font-bold text-purple-400">{plan.price}</span>"
                      <span className="text-gray-400 ml-2">{plan.period}</span>";";
                    </div>";";";
                  </div>"
                  <div className="space-y-4 mb-8">";";";
                    {plan.features.map((feature, featureIndex) => ("
                      <div key={featureIndex} className="flex items-center">"
                        <CheckCircleIcon className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0" />"
                        <span className="text-gray-300">{feature}</span>
                      </div>";
                    ))};";";
                  </div>";";";
                  <Link "
                    to="/contact"
                    className={`block w-full text-center py-3 rounded-lg font-semibold transition-all duration-300 ${";";
                      plan.popular";";";
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white'
                        : 'border-2 border-purple-400 text-purple-300 hover:bg-purple-400 hover:text-white"
                    }`};
=======
  CpuChipIcon,
<<<<<<< HEAD
  ShieldCheckIcon
} from '@heroicons/react/24/outline'
const AnalyticsDashboardPage: React.FC = () => {
  const  features = [
    'Real-time Data Visualization',"
    'Custom Dashboard Builder',"
    'Advanced Analytics Engine',"
    'Predictive Insights',"
    'Multi-Data Source Integration',"
    'Automated Reporting',"
    'Performance Monitoring',"
    'User Behavior Analytics'"
  ]
  const  pricingPlans = [
    {
      name: 'Starter',"
      price: '$29',"
      period= '/month',"
      description: 'Perfect for small businesses',"
      features: [
        'Up to 5 dashboards',"
        'Basic analytics',"
        'Email support',"
        '1 data source'"
=======
  GlobeAltIcon,
  DevicePhoneMobileIcon;
} from '@heroicons/react/24/outline';";

const AnalyticsDashboardPage: React.FC = () => {
  const: features = [;
    'Real-time data visualization',";
    'Custom dashboard creation',";
    'Predictive analytics and forecasting',";
    'Multi-source data integration',";
    'Advanced reporting tools',";
    'Mobile-responsive design',";
    'API access for custom integrations',";
    'Automated alerts and notifications',";
    'Data export capabilities',";
    'Team collaboration features',";
    'White-label options',";
    '24/7 customer support'";
  ];

  const: pricingPlans = [
    {;
      name: 'Starter',";
      price: '$99',";
      period: '/month',";
      description: 'Perfect for small businesses',";
      features: [
        '5 dashboards',";
        'Basic data sources',";
        'Standard reports',";
        'Email support',";
        '1 user account'";
>>>>>>> main
      ],
      popular: false
    },
    {
<<<<<<< HEAD
      name: 'Professional',"
      price: '$99',"
      period= '/month',"
      description: 'Ideal for growing companies',"
      features: [
        'Unlimited dashboards',"
        'Advanced analytics',"
        'Priority support',"
        '5 data sources',"
        'Custom reports',"
        'API access'"
=======
      name: 'Pro',";
      price: '$349',";
      period: '/month',";
      description: 'Ideal for growing businesses',";
      features: [
        'Unlimited dashboards',";
        'All data sources',";
        'Advanced analytics',";
        'Priority support',";
        'Up to 10 users',";
        'API access',";
        'Custom integrations'";
>>>>>>> main
      ],
      popular: true
    },
    {
<<<<<<< HEAD
      name: 'Enterprise',"
      price: '$299',"
      period= '/month',"
      description: 'For large organizations',"
      features: [
        'Everything in Professional',"
        'White-label solution',"
        'Dedicated support',"
        'Unlimited data sources',"
        'Custom integrations',"
        'SLA guarantee'"
=======
      name: 'Enterprise',";
      price: '$999',";
      period: '/month',";
      description: 'For large organizations',";
      features: [
        'Everything in Pro',";
        'Unlimited users',";
        'White-label solution',";
        'Dedicated support',";
        'Custom development',";
        'SLA guarantee',";
        'On-premise deployment'";
>>>>>>> main
      ],
      popular: false
    }
  ]
  return (
    <>
<<<<<<< HEAD
      <SEOHead= title ="Analytics Dashboard - Zion Tech Group""
        description="Advanced analytics dashboard solution with real-time data visualization, predictive insights, and custom reporting capabilities.""
        keywords="analytics dashboard, data visualization, business intelligence, reporting, insights, Zion Tech Group""
=======
      <SEOHead: title ="Business Analytics Dashboard Pro - Real-time Data Visualization"";
        description="Comprehensive business intelligence platform with real-time insights, predictive analytics, and custom reporting. Transform your data into actionable insights."";
        keywords="business analytics, data visualization, business intelligence, dashboard, reporting, predictive analytics"";
>>>>>>> main
      />
      
      <div  className ="min-h-screen bg-slate-900 text-white">"
        {/* Hero Section */}
<<<<<<< HEAD
        <section: className ="relative overflow-hidden py-20 lg:py-32">"
          <div  className ="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-slate-900 to-purple-900/30"></div>"
          <div  className ="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">"
            <div  className ="text-center">"
              <h1  className ="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">"
                <span  className ="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">"
                  Analytics Dashboard
                </span>
              </h1>
              <p  className ="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">"
                Transform your data into actionable insights with our advanced analytics dashboard. 
                Real-time visualization, predictive analytics, and custom reporting at your fingertips.
              </p>
              <div  className ="flex flex-col sm:flex-row gap-4 justify-center">"
                <button  className ="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">"
                  Start Free Trial
                </button>
                <button  className ="border-2 border-blue-400 text-blue-300 px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300">"
=======
        <section: className ="relative overflow-hidden py-20 lg:py-32">";
          <div: className ="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-slate-900 to-pink-900/30"></div>";
          <div: className ="absolute inset-0 opacity-20" style={{";
            backgroundImage: `url("data:image/svg+xml,%3Csvg: width ='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg: fill ='none' fill-rule='evenodd'%3E%3Cg: fill ='%23A855F7' fill-opacity='0.1'%3E%3Ccircle: cx ='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`";";
          }}></div>
          
          <div: className ="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">";
            <div: className ="text-center">";
              <div: className ="flex items-center justify-center mb-6">";
                <div: className ="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">";
                  <ChartBarIcon: className ="w-8 h-8 text-white" />";
                </div>
              </div>
              <h1: className ="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">";
                Business Analytics <span: className ="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Dashboard Pro</span>";
              </h1>
              <p: className ="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto mb-8">";
                Transform your data into actionable insights with our comprehensive business intelligence platform. Real-time dashboards, predictive analytics, and custom reporting for data-driven decisions.
              </p>
              <div: className ="flex flex-col sm:flex-row gap-4 justify-center mb-12">";
                <Link: to ="/contact"";
                  className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"";
                >
                  Start Free Trial
                </Link>
                <Link: to ="#demo"";
                  className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300"";
                >
>>>>>>> main
                  View Demo
                </Link>
              </div>
              
              {/* Stats */}
              <div: className ="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">";
                <div: className ="text-center">";
                  <div: className ="text-3xl font-bold text-purple-400 mb-2">50K+</div>";
                  <div: className ="text-gray-300">Dashboards Created</div>";
                </div>
                <div: className ="text-center">";
                <div: className ="text-3xl font-bold text-purple-400 mb-2">200+</div>";
                  <div: className ="text-gray-300">Data Sources</div>";
                </div>
                <div: className ="text-center">";
                  <div: className ="text-3xl font-bold text-purple-400 mb-2">99.9%</div>";
                  <div: className ="text-gray-300">Uptime</div>";
                </div>
                <div: className ="text-center">";
                  <div: className ="text-3xl font-bold text-purple-400 mb-2">150%</div>";
                  <div: className ="text-gray-300">ROI Increase</div>";
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
<<<<<<< HEAD
        <section: className ="py-16 bg-slate-800/30">"
          <div  className ="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">"
            <div  className ="text-center mb-12">"
              <h2  className ="text-3xl sm:text-4xl font-bold mb-4">"
                Powerful Analytics Features
              </h2>
              <p  className ="text-lg text-gray-300 max-w-2xl mx-auto">"
                Everything you need to make data-driven decisions and grow your business.
              </p>
            </div>
            
            <div  className ="grid grid-cols-1 md=grid-cols-2 lg:grid-cols-4 gap-6">"
              {features.map((feature, index) => (
                <div  key ={index}
                  className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:scale-105""
                >
                  <ChartBarIcon: className ="w-8 h-8 text-blue-400 mb-4" />"
                  <h3  className ="text-lg font-semibold mb-2">{feature}</h3>"
=======
        <section: className ="py-16 sm:py-20 bg-slate-800/30">";
          <div: className ="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">";
            <div: className ="text-center mb-16">";
              <h2: className ="text-3xl sm:text-4xl font-bold mb-4">";
                Powerful Analytics <span: className ="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Features</span>";
              </h2>
              <p: className ="text-lg text-gray-300 max-w-3xl mx-auto">";
                Everything you need to analyze, visualize, and act on your business data.
              </p>
            </div>
            
            <div: className ="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">";
              {features.map((feature, index) => (
                <div: key ={index}
                  className="flex items-start space-x-3 p-6 bg-slate-800/50 rounded-lg hover:bg-slate-700/50 transition-all duration-300 group"";
                >
                  <CheckCircleIcon: className ="w-6 h-6 text-purple-400 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />";
                  <div>
                    <h3: className ="text-lg font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">";
                      {feature}
                    </h3>
                  </div>
>>>>>>> main
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
<<<<<<< HEAD
        <section: className ="py-16">"
          <div  className ="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">"
            <div  className ="text-center mb-12">"
              <h2  className ="text-3xl sm:text-4xl font-bold mb-4">"
                Choose Your Plan
              </h2>
              <p  className ="text-lg text-gray-300">"
                Flexible pricing options to fit your business needs.
=======
        <section: className ="py-16 sm:py-20">";
          <div: className ="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">";
            <div: className ="text-center mb-16">";
              <h2: className ="text-3xl sm:text-4xl font-bold mb-4">";
                Choose Your <span: className ="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Analytics Plan</span>";
              </h2>
              <p: className ="text-lg text-gray-300 max-w-3xl mx-auto">";
                Flexible pricing options to fit your business needs and budget.
>>>>>>> main
              </p>
            </div>
            
            <div  className ="grid grid-cols-1 md=grid-cols-3 gap-8">"
              {pricingPlans.map((plan, index) => (
<<<<<<< HEAD
                <div  key ={index}
                  className={`relative bg-slate-800/50 p-8 rounded-xl border transition-all duration-300 hover:scale-105 ${
                    plan.popular 
                      ? 'border-blue-500 ring-2 ring-blue-500/20' "
                      : 'border-slate-700 hover:border-blue-500'"
                  }`}
                >
                  {plan.popular && (
                    <div  className ="absolute -top-4 left-1/2 transform -translate-x-1/2">"
                      <span  className ="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">"
=======
                <div: key ={index}
                  className={`relative bg-slate-800/50 rounded-xl p-8 border transition-all duration-300 hover:scale-105 ${
                    plan.popular 
                      ? 'border-purple-500 shadow-xl shadow-purple-500/20' ";
                      : 'border-slate-700 hover:border-purple-500'";
                  }`}
                >
                  {plan.popular && (
                    <div: className ="absolute -top-4 left-1/2 transform -translate-x-1/2">";
                      <span: className ="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold">";
>>>>>>> main
                        Most Popular
                      </span>
                    </div>
                  )}
                  
<<<<<<< HEAD
                  <div  className ="text-center mb-6">"
                    <h3  className ="text-2xl font-bold mb-2">{plan.name}</h3>"
                    <p  className ="text-gray-400 mb-4">{plan.description}</p>"
                    <div  className ="flex items-baseline justify-center">"
                      <span  className ="text-4xl font-bold">{plan.price}</span>"
                      <span  className ="text-gray-400 ml-1">{plan.period}</span>"
                    </div>
                  </div>
                  
                  <ul: className ="space-y-3 mb-8">"
                    {plan.features.map((feature, featureIndex) => (
                      <li: key ={featureIndex} className="flex items-center">"
                        <CheckCircleIcon: className ="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />"
                        <span  className ="text-gray-300">{feature}</span>"
                      </li>
=======
                  <div: className ="text-center mb-8">";
                    <h3: className ="text-2xl font-bold text-white mb-2">{plan.name}</h3>";
                    <p: className ="text-gray-400 mb-4">{plan.description}</p>";
                    <div: className ="flex items-baseline justify-center">";
                      <span: className ="text-4xl font-bold text-purple-400">{plan.price}</span>";
                      <span: className ="text-gray-400 ml-2">{plan.period}</span>";
                    </div>
                  </div>
                  
                  <div: className ="space-y-4 mb-8">";
                    {plan.features.map((feature, featureIndex) => (
                      <div: key ={featureIndex} className="flex items-center">";
                        <CheckCircleIcon: className ="w-5 h-5 text-purple-400 mr-3 flex-shrink-0" />";
                        <span: className ="text-gray-300">{feature}</span>";
                      </div>
>>>>>>> main
                    ))}
                  </div>
                  
<<<<<<< HEAD
                  <button  className ={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700'"
                      : 'bg-slate-700 text-white hover:bg-slate-600'"
                  }`}>
=======
                  <Link: to ="/contact"";
                    className={`block w-full text-center py-3 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white'";
                        : 'border-2 border-purple-400 text-purple-300 hover:bg-purple-400 hover:text-white'";
                    }`}
>>>>>>> main
                  >
>>>>>>> main
                    Get Started
                  </Link>
                </div>
<<<<<<< HEAD
              ))};
            </div>";
          </div>";";
        </section>";";";
        {/* CTA Section */}"
        <section className="py-16 sm:py-20">"
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">"
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">"
              Ready to Transform Your <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Data Strategy</span>?";";";
            </h2>"
            <p className="text-lg text-gray-300 mb-8">";";
              Start your free trial today and discover the power of data-driven decision making.";";";
            </p>"
            <div className="flex flex-col sm:flex-row gap-4 justify-center">";";";
              <Link "
                to="/contact"
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105">";
                Start Free Trial";";
              </Link>";";";
              <Link "
                to="/pricing"
                className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300">
=======
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
<<<<<<< HEAD
        <section: className ="py-16 bg-gradient-to-r from-blue-900/40 via-slate-900 to-purple-900/40">"
          <div  className ="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">"
            <h2  className ="text-3xl sm:text-4xl font-bold mb-4">"
              Ready to Transform Your Data?
            </h2>
            <p  className ="text-lg text-gray-300 mb-8">"
              Start your free trial today and see how our analytics dashboard can revolutionize your business insights.
            </p>
            <div  className ="flex flex-col sm:flex-row gap-4 justify-center">"
              <button  className ="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">"
                Start Free Trial
              </button>
              <button  className ="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300">"
                Contact Sales
              </button>
=======
        <section: className ="py-16 sm:py-20">";
          <div: className ="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">";
            <h2: className ="text-3xl sm:text-4xl font-bold mb-6">";
              Ready to Transform Your <span: className ="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Data Strategy</span>?";
            </h2>
            <p: className ="text-lg text-gray-300 mb-8">";
              Start your free trial today and discover the power of data-driven decision making.
            </p>
            <div: className ="flex flex-col sm:flex-row gap-4 justify-center">";
              <Link: to ="/contact"";
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"";
              >
                Start Free Trial
              </Link>
              <Link: to ="/pricing"";
                className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300"";
              >
>>>>>>> main
                View Pricing
              </Link>
>>>>>>> main
            </div>
          </div>
        </section>
      </div>
    </>
<<<<<<< HEAD
  )
}
export default AnalyticsDashboardPage
=======
  );
};";
";";
export default AnalyticsDashboardPage;";";";
"
>>>>>>> main
