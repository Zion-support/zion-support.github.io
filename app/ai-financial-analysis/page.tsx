<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c
import React from 'react';
<<<<<<< HEAD
import { Helmet } from 'react-helmet-async';
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7665

<<<<<<< HEAD
export default function aiFinancialAnalysis() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Helmet>
        <title>Ai Financial Analysis - Zion Tech Group</title>
        <meta name="description" content="Ai Financial Analysis solutions by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-8">Ai Financial Analysis</h1>
          <p className="text-xl text-gray-300 mb-8">
=======
export default function AiFinancialAnalysisPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Helmet>
        <title>Ai Financial Analysis - Zion Tech Group</title>
        <meta name="description" content="Advanced ai financial analysis solutions by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
<<<<<<< HEAD
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Ai Financial Analysis
=======

        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Page
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c
          </h1>
          <p className="text-xl text-gray-600 mb-8">
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-ef50
            This page is under development. Please check back later.
=======

export default function AifinancialanalysisPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Ai Financial Analysis</h1>
          <p className="text-xl text-gray-600 mb-8">
            Advanced AI and IT solutions for your business needs.
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-5a44
          </p>
<<<<<<< HEAD
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Feature 1</h3>
            <p className="text-gray-600">
              Comprehensive solution for your business requirements.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Feature 2</h3>
            <p className="text-gray-600">
              Advanced technology integration and optimization.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Feature 3</h3>
            <p className="text-gray-600">
              Scalable and secure implementation.
            </p>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Get Started
          </button>
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c
        </div>
      </div>
    </div>
  );
}
<<<<<<< HEAD
=======
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { TrendingUp, ArrowRight, Sparkles, CheckCircle, PieChart, Activity, Shield, BarChart3, DollarSign, Star } from 'lucide-react';
=======
import { useState, useEffect } from 'react';
import { DollarSign, TrendingUp, PieChart, Shield, CheckCircle, ArrowRight, Star } from 'lucide-react';
import { Helmet } from "react-helmet-async";
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-d081
import EnhancedSEO from "../components/EnhancedSEO";
import StructuredData from "../components/StructuredData";
import FuturisticBackgroundEnhanced from "../components/FuturisticBackgroundEnhanced";
import FuturisticCardEnhanced from "../components/FuturisticCardEnhanced";
import FuturisticButtonEnhanced from "../components/FuturisticButtonEnhanced";
import FuturisticTextEnhanced from "../components/FuturisticTextEnhanced";
import ResponsiveContainer from "../components/ResponsiveContainer";
import EnhancedAccessibility from "../components/EnhancedAccessibility";
import PerformanceOptimizer from "../components/PerformanceOptimizer";
<<<<<<< HEAD
=======
import React from 'react';
import { Helmet } from 'react-helmet-async';
<<<<<<< HEAD
import { TrendingUp } from 'lucide-react';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-07e8

=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-34b5
const AIFinancialAnalysisPage = () => {
  const benefits = [
    "Increase investment returns by 25%",
    "Reduce financial risk by 60%",
    "Automate 90% of analysis tasks",
    "Real-time market monitoring",
    "Advanced fraud detection",
    "Comprehensive compliance reporting"
  ];
=======
import { TrendingUp, BarChart3, DollarSign, Target, Zap, Brain } from 'lucide-react';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b707

export default function AIFinancialAnalysisPage() {
=======
import { TrendingUp, BarChart3, DollarSign, Target, Zap, Brain } from 'lucide-react';

const AIFinancialAnalysisPage = () => {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-6cf2
  const features = [
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Predictive Analytics",
      description: "Advanced machine learning models predict market trends and investment opportunities with 95% accuracy.",
      color: "from-blue-500 to-cyan-500"
    },
    {
=======

const AIFinancialAnalysisZionTechGroup = () => {
  const features = [
    {
      title: "Financial Forecasting",
      description: "Predict future financial performance with advanced AI models and machine learning",
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-d081
      icon: <TrendingUp className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Risk Assessment",
<<<<<<< HEAD
      description: "Comprehensive risk analysis using AI to identify potential threats and opportunities in real-time.",
      color: "from-green-500 to-emerald-500"
=======
      description: "Identify and analyze financial risks with comprehensive risk modeling tools",
      icon: <Shield className="w-8 h-8" />,
      color: "from-red-500 to-orange-500"
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-d081
    },
    {
      title: "Portfolio Analysis",
      description: "Optimize investment portfolios with AI-powered analysis and recommendations",
      icon: <PieChart className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Real-time Monitoring",
      description: "Monitor financial metrics and market conditions in real-time",
      icon: <DollarSign className="w-8 h-8" />,
<<<<<<< HEAD
      title: "Portfolio Optimization",
      description: "AI-driven portfolio management that automatically rebalances investments for maximum returns.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Fraud Detection",
      description: "Advanced AI algorithms detect fraudulent activities and suspicious patterns in real-time.",
      color: "from-orange-500 to-red-500"
=======
      color: "from-purple-500 to-pink-500"
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-d081
    }
  ];

  const pricingPlans = [
    {
<<<<<<< HEAD
      name: "Starter",
      price: "$149",
      period: "month",
      description: "Perfect for individual investors",
      features: [
        "Basic portfolio analysis",
        "Market trend predictions",
        "Email support",
        "Standard reporting"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$299",
      period: "month",
      description: "Ideal for financial advisors",
      features: [
        "Advanced analytics & predictions",
        "Risk assessment tools",
        "Priority support",
        "Custom reporting",
        "API access",
        "Client management"
=======
      name: "Professional",
      price: "$299",
      period: "month",
      description: "For financial professionals",
      features: [
        "Advanced forecasting models",
        "Risk analysis tools",
        "Portfolio optimization",
        "Email support",
        "Basic reporting"
      ],
      popular: false
    },
    {
      name: "Enterprise",
      price: "$699",
      period: "month",
      description: "For financial institutions",
      features: [
        "Everything in Professional",
        "Custom AI models",
        "Real-time data feeds",
        "Priority support",
        "Compliance tools",
        "SLA guarantee"
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-d081
      ],
      popular: true
    },
    {
<<<<<<< HEAD
      name: "Enterprise",
      price: "$599",
      period: "month",
      description: "For financial institutions",
      features: [
        "Custom AI models",
        "White-label solution",
        "Dedicated support team",
        "Advanced security",
        "SLA guarantee",
        "Compliance reporting"
=======
      name: "Custom",
      price: "Contact",
      period: "us",
      description: "Tailored solutions",
      features: [
        "Everything in Enterprise",
        "Custom development",
        "Dedicated support",
        "On-premise deployment",
        "White-label solution"
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-d081
      ],
      popular: false
    }
  ];
=======
import { Helmet } from 'react-helmet-async';
import { TrendingUp, BarChart3, DollarSign, Target, Zap, Brain } from 'lucide-react';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-61d5

<<<<<<< HEAD
<<<<<<< HEAD
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Investment Advisor",
      company: "Wealth Management Inc",
      content: "Zion AI Financial Analysis has transformed our investment strategy. The predictions are incredibly accurate.",
      rating: 5,
      avatar: "SC"
    },
    {
      name: "Michael Rodriguez",
      role: "Portfolio Manager",
      company: "Capital Partners",
      content: "The risk assessment tools have helped us avoid major losses. Our returns have improved by 30%.",
      rating: 5,
      avatar: "MR"
    },
    {
      name: "Emily Johnson",
      role: "Financial Analyst",
      company: "Investment Group",
      content: "The fraud detection capabilities are outstanding. We've caught several suspicious activities early.",
      rating: 5,
      avatar: "EJ"
    }
  ];

=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-d081
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Zion AI Financial Analysis",
<<<<<<< HEAD
    "description": "AI-powered financial analysis platform with predictive analytics and risk assessment",
=======
    "description": "AI-powered financial analysis platform with forecasting, risk assessment, and portfolio optimization",
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-d081
    "url": "https://ziontechgroup.com/ai-financial-analysis",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web, Windows, macOS, Linux",
    "offers": {
      "@type": "Offer",
<<<<<<< HEAD
      "price": "299",
      "priceCurrency": "USD",
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "price": "299",
        "priceCurrency": "USD",
        "unitText": "MONTH"
      }
    },
    "provider": {
      "@type": "Organization",
      "name": "Zion Tech Group",
      "url": "https://ziontechgroup.com"
=======
      "price": "699",
      "priceCurrency": "USD"
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-d081
    }
  };

  return (
    <PerformanceOptimizer>
      <EnhancedAccessibility>
        <FuturisticBackgroundEnhanced>
          <EnhancedSEO
            title="AI Financial Analysis - Zion Tech Group"
<<<<<<< HEAD
            description="Advanced AI-powered financial analysis platform with predictive analytics, risk assessment, and portfolio optimization for better investment decisions."
            keywords="AI financial analysis, investment analytics, risk assessment, portfolio optimization, financial predictions, fraud detection"
            canonical="https://ziontechgroup.com/ai-financial-analysis"
          />
          <StructuredData data={structuredData} />
          
          <main className="min-h-screen">
            {/* Hero Section */}
            <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
              </div>
              
              <ResponsiveContainer className="text-center relative z-10">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-500/20 to-cyan-500/20 border border-green-500/30 mb-6">
                  <Sparkles className="w-4 h-4 text-green-400 mr-2" />
                  <span className="text-green-400 text-sm font-medium">AI-Powered Financial Analysis</span>
                </div>
                
                <FuturisticTextEnhanced
                  variant="display"
                  size="5xl"
                  gradient={true}
                  glow={true}
                  className="mb-6 leading-tight">
                  Zion AI Financial Analysis
                </FuturisticTextEnhanced>
                
                <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed text-center">
                  Make smarter investment decisions with AI-powered financial analysis, predictive analytics, 
                  and advanced risk assessment tools.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                  <FuturisticButtonEnhanced
                    href="#pricing"
                    variant="primary"
                    size="lg"
                    icon={BarChart3}
                    iconPosition="left">
                    Start Free Trial
                  </FuturisticButtonEnhanced>
                  <FuturisticButtonEnhanced
                    href="#demo"
                    variant="outline"
                    size="lg"
                    icon={ArrowRight}
                    iconPosition="left">
                    Watch Demo
                  </FuturisticButtonEnhanced>
                </div>
              </ResponsiveContainer>
            </section>

            {/* Features Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
              <ResponsiveContainer>
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                    Powerful Financial Features
                  </h2>
                  <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                    Harness the power of AI to analyze financial data and make better investment decisions.
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {features.map((feature, index) => (
                    <FuturisticCardEnhanced
                      key={index}
                      className="text-center">
                      <div
                        className={`w-12 h-12 md:w-16 md:h-16 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}
                        aria-hidden="true">
                        {feature.icon}
                      </div>
                      <h3 className="text-lg md:text-xl font-semibold text-white mb-3 group-hover:text-green-400 transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                        {feature.description}
                      </p>
                    </FuturisticCardEnhanced>
                  ))}
                </div>
              </ResponsiveContainer>
            </section>

            {/* Pricing Section */}
            <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-green-800/50">
              <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Choose Your Plan
                  </h2>
                  <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                    Flexible pricing options to fit your financial analysis needs
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {pricingPlans.map((plan, index) => (
                    <FuturisticCardEnhanced
                      key={index}
                      className={`relative ${plan.popular ? 'ring-2 ring-green-500' : ''}`}>
                      {plan.popular && (
                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                          <span className="bg-gradient-to-r from-green-500 to-cyan-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                            Most Popular
                          </span>
                        </div>
                      )}
                      <div className="text-center mb-6">
                        <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                        <div className="text-4xl font-bold text-green-400 mb-2">
                          {plan.price}<span className="text-lg text-gray-400">/{plan.period}</span>
                        </div>
                        <p className="text-gray-300">{plan.description}</p>
                      </div>
                      <ul className="space-y-3 mb-8">
                        {plan.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-gray-300">
                            <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <FuturisticButtonEnhanced
                        variant={plan.popular ? "primary" : "outline"}
                        size="lg"
                        icon={<ArrowRight className="w-5 h-5" />}
                        iconPosition="right"
                        className="w-full">
                        Get Started
                      </FuturisticButtonEnhanced>
                    </FuturisticCardEnhanced>
                  ))}
                </div>
              </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
              <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Trusted by Financial Professionals
                  </h2>
                  <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                    See what financial professionals are saying about Zion AI Financial Analysis
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {testimonials.map((testimonial, index) => (
                    <div
                      key={index}
                      className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/10 relative overflow-hidden">
                      <div className="flex items-center mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <p className="text-gray-300 mb-4 italic leading-relaxed">"{testimonial.content}"</p>
                      <div>
                        <div className="font-semibold text-white">{testimonial.name}</div>
                        <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-900/30 to-cyan-900/30">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                  Ready to Transform Your Financial Analysis?
                </h2>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Join thousands of financial professionals using Zion AI Financial Analysis 
                  to make better investment decisions. Start your free trial today.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <FuturisticButtonEnhanced
                    href="/contact"
                    variant="primary"
                    size="lg"
                    icon={ArrowRight}
                    iconPosition="right">
                    Start Free Trial
                  </FuturisticButtonEnhanced>
                  <FuturisticButtonEnhanced
                    href="/demo"
                    variant="outline"
                    size="lg"
                    icon={BarChart3}
                    iconPosition="right">
                    Schedule Demo
                  </FuturisticButtonEnhanced>
                </div>
              </div>
            </section>
=======
            description="AI-powered financial analysis platform with forecasting, risk assessment, portfolio optimization, and real-time monitoring for financial professionals."
            keywords="AI financial analysis, financial forecasting, risk assessment, portfolio optimization, financial modeling"
            canonicalUrl="https://ziontechgroup.com/ai-financial-analysis"
          />
          <StructuredData data={structuredData} />
          
          <Helmet>
            <title>AI Financial Analysis - Zion Tech Group</title>
            <meta name="description" content="AI-powered financial analysis platform with forecasting, risk assessment, and portfolio optimization." />
            <meta name="keywords" content="AI financial analysis, financial forecasting, risk assessment, portfolio optimization" />
            <link rel="canonical" href="https://ziontechgroup.com/ai-financial-analysis" />
          </Helmet>

          <main>
            {/* Hero Section */}
            <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-emerald-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
              </div>
              
              <ResponsiveContainer>
                <div className="text-center relative z-10">
                  <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 mb-6">
                    <DollarSign className="w-4 h-4 text-green-400 mr-2" />
                    <span className="text-green-400 text-sm font-medium">AI-Powered Financial Analysis</span>
                  </div>
                  
                  <FuturisticTextEnhanced
                    variant="display"
                    size="5xl"
                    gradient={true}
                    glow={true}
                    className="mb-6">
                    AI Financial Analysis
                  </FuturisticTextEnhanced>
                  
                  <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
                    Transform your financial decision-making with our advanced AI-powered analysis platform. 
                    Forecasting, risk assessment, and portfolio optimization powered by machine learning.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <FuturisticButtonEnhanced
                      href="/contact"
                      variant="primary"
                      size="lg"
                      icon={ArrowRight}
                      iconPosition="right">
                      Start Free Trial
                    </FuturisticButtonEnhanced>
                    <FuturisticButtonEnhanced
                      href="/demo"
                      variant="outline"
                      size="lg"
                      icon={PieChart}
                      iconPosition="right">
                      View Demo
                    </FuturisticButtonEnhanced>
                  </div>
                </div>
              </ResponsiveContainer>
            </section>

            {/* Features Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
              <ResponsiveContainer>
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                    Advanced Financial Tools
                  </h2>
                  <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                    Harness the power of AI to make smarter financial decisions and optimize your investments.
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {features.map((feature, index) => (
                    <FuturisticCardEnhanced
                      key={index}
                      className="text-center">
                      <div
                        className={`w-12 h-12 md:w-16 md:h-16 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}
                      >
                        {feature.icon}
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        {feature.description}
                      </p>
                    </FuturisticCardEnhanced>
                  ))}
                </div>
              </ResponsiveContainer>
            </section>

            {/* Pricing Section */}
            <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-green-800/50">
              <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Choose Your Plan
                  </h2>
                  <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                    Flexible pricing options to fit your financial analysis needs
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {pricingPlans.map((plan, index) => (
                    <FuturisticCardEnhanced
                      key={index}
                      className={`relative ${plan.popular ? 'ring-2 ring-green-500' : ''}`}>
                      {plan.popular && (
                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                          <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                            Most Popular
                          </span>
                        </div>
                      )}
                      <div className="text-center mb-6">
                        <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                        <div className="flex items-baseline justify-center">
                          <span className="text-4xl font-bold text-white">{plan.price}</span>
                          <span className="text-gray-400 ml-1">/{plan.period}</span>
                        </div>
                        <p className="text-gray-300 mt-2">{plan.description}</p>
                      </div>
                      <ul className="space-y-3 mb-8">
                        {plan.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center">
                            <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                            <span className="text-gray-300">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <FuturisticButtonEnhanced
                        href="/contact"
                        variant={plan.popular ? "primary" : "outline"}
                        size="lg"
                        className="w-full">
                        Get Started
                      </FuturisticButtonEnhanced>
                    </FuturisticCardEnhanced>
                  ))}
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-900/30 to-emerald-900/30">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                  Ready to Optimize Your Finances?
                </h2>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Join thousands of financial professionals using Zion AI Financial Analysis to make better decisions. 
                  Start your free trial today.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <FuturisticButtonEnhanced
                    href="/contact"
                    variant="primary"
                    size="lg"
                    icon={ArrowRight}
                    iconPosition="right">
                    Start Free Trial
                  </FuturisticButtonEnhanced>
                  <FuturisticButtonEnhanced
                    href="/demo"
                    variant="outline"
                    size="lg"
                    icon={PieChart}
                    iconPosition="right">
                    View Demo
                  </FuturisticButtonEnhanced>
                </div>
              </div>
            </section>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-d081
          </main>
        </FuturisticBackgroundEnhanced>
      </EnhancedAccessibility>
    </PerformanceOptimizer>
  );
<<<<<<< HEAD
};

<<<<<<< HEAD
export default AIFinancialAnalysisPage;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c
=======
}

}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-07e8
=======
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function PagePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Page - Zion Tech Group</title>
        <meta name="description" content="Professional page services by Zion Tech Group." />
      </Helmet>
      
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">
            Page
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            Professional page services coming soon.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
=======
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-6">
            AI Financial Analysis
          </h1>
          <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
            Advanced AI-powered financial analysis solutions to optimize your investment strategies and risk management.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-colors">
              <div className="flex items-center mb-4">
                {feature.icon}
                <h3 className="text-xl font-semibold text-white ml-3">{feature.title}</h3>
              </div>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="flex items-center mb-2">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                <span className="text-white font-medium">{benefit}</span>
              </div>
            </div>
          ))}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b707
        </div>
      </div>
    </div>
  );
}
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2fa5
=======
export default AIFinancialAnalysisZionTechGroup;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-d081
=======
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-34b5
