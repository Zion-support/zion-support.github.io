<<<<<<< HEAD
<<<<<<< HEAD
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Users } from 'lucide-react';
import { Star } from 'lucide-react';
import { Shield } from 'lucide-react';
import { Zap } from 'lucide-react';
import { Brain } from 'lucide-react';
import { Settings } from 'lucide-react';
import { BarChart3 } from 'lucide-react';
import { Mail } from 'lucide-react';
import { MessageSquare } from 'lucide-react';
import { Hand } from 'lucide-react';
"use client";
=======
"use client";
import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  MessageSquare,
  Brain,
  Shield,
  Zap,
  Star,
  Mail,
  BarChart3,
  Settings,
  Users,
} from "lucide-react";
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0458

<<<<<<< HEAD
export default function AIEmailAssistant() {
  return (
<<<<<<< HEAD
    <div>
=======
    <React.Fragment>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361
      <Helmet>
        <title>AI Analytics - Zion Tech Group</title>
        <meta name="description" content="Advanced AI analytics platform with real-time insights and predictive modeling." />
        <meta name="keywords" content="AI analytics, data analysis, business intelligence, machine learning" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-analytics" />
      </Helmet>

<<<<<<< HEAD
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">AI-Powered Analytics</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              AI Analytics Platform
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Transform your data into actionable insights with our advanced AI analytics platform. 
            Get real-time predictions, automated reporting, and intelligent recommendations.
          </p>
<<<<<<< HEAD

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
            >
              Get Started
              <Zap className="w-5 h-5 ml-2" />
            </Link>
            <Link 
              to="/demo" 
              className="inline-flex items-center px-8 py-4 border border-cyan-500/30 text-cyan-400 font-semibold rounded-full hover:bg-cyan-500/10 transition-all duration-300"
            >
              View Demo
              <Target className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Powerful Analytics Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI analytics platform provides everything you need to make data-driven decisions
            </p>
=======
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-violet-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' ,}} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Ai Email Assistant
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Advanced AI-powered ai email assistant solution for modern businesses.
=======
const AiEmailAssistantPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <SEOOptimizer
        title="AI Email Assistant - Zion Tech Group"
        description="Intelligent email management with AI-powered organization, responses, and productivity optimization."
        keywords={["email AI","email management","email automation","email productivity","smart email"]}
        canonicalUrl="https: //ziontechgroup.com/ai-email-assistant",
      />,
      <Navigation />,
      <main className="container mx-auto px-4 py-16 pt-24">,
        {/* Hero Section */}
        <section className="text-center mb-16"></section>
          <div className="max-w-4xl mx-auto"></section>
            <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6"></div>
              <Mail className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md: text-6xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"></h1>
              AI Email Assistant;
            </h1>,
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">,
              Intelligent email management with AI-powered organization, responses, and productivity optimization.
            </p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center items-center"></div>
              <a;
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">AI Email Assistant</h1><p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">Intelligent email management with AI-powered organization, responses, and productivity optimization.</p>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center"></div>
              <a
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300"
              ></a>
                Get Started Today;
              </a>
              <a;
                href="tel:+13024640950"
                className="flex items-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              ></a>
                <Phone className="w-5 h-5" />
                +1 302 464 0950;
              </a>
            </div>
          </div>,
        </section>,
,
        {/* Features Section */}
        <section className="mb-16"></section>
            <h2 className="text-3xl md: text-4xl font-bold text-white mb-4"></h2>
              Key Features;
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto"></p>
              Powerful capabilities designed to transform your business;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-violet-500 to-blue-600 hover:from-violet-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
              <button className="border border-violet-400 text-violet-400 hover:bg-violet-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                View Demo
              </button>
            </div></div></div></div></div>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361
          </div>

<<<<<<< HEAD
<<<<<<< HEAD
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-slate-800/50 to-purple-800/20 p-8 rounded-2xl border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mb-6">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Real-time Analytics</h3>
              <p className="text-gray-300">
                Get instant insights from your data with real-time processing and visualization
              </p>
            </div>

          {/* Pricing Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Pricing Plans
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`bg-white/10 backdrop-blur-sm rounded-lg p-8 relative ${plan.popular ? "ring-2 ring-cyan-500" : ""}`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-cyan-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {plan.name}
                    </h3>
                    <div className="text-4xl font-bold text-cyan-400 mb-2">
                      {plan.price}
                      <span className="text-lg text-gray-300">
                        {plan.period}
                      </span>
                    </div>
                    <p className="text-gray-300">{plan.description}</p>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="text-gray-300 flex items-center"
                      >
                        <Star className="w-4 h-4 text-yellow-400 mr-2 flex-shrink-0" />
                        {feature.title}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={`w-full block text-center py-3 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? "bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:from-cyan-600 hover:to-purple-600"
                        : "border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10"
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-slate-800/50 to-purple-800/20 p-8 rounded-2xl border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Secure & Compliant</h3>
              <p className="text-gray-300">
                Enterprise-grade security with full compliance and data protection
              </p>
=======
        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Key Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Advanced AI technology that drives results
              </p>
            </div></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div></div></div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  {feature.benefits && (
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
=======
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"></div>
            <div className="bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 border border-cyan-400/20 hover:border-cyan-400/60 transition-all duration-300"></div>
          <div className="text-center mb-12"></section>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Key Features</h2><p className="text-lg text-gray-300 max-w-2xl mx-auto">Powerful capabilities designed to transform your business</p>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"></div>

            <div className="bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 border border-cyan-400/20 hover:border-cyan-400/60 transition-all duration-300"></div>
              <CheckCircle className="w-8 h-8 text-green-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Smart Organization</h3><p className="text-gray-300">Advanced smart organization capabilities powered by AI</p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 border border-cyan-400/20 hover:border-cyan-400/60 transition-all duration-300"></div>
              <CheckCircle className="w-8 h-8 text-green-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Auto Responses</h3><p className="text-gray-300">Advanced auto responses capabilities powered by AI</p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 border border-cyan-400/20 hover:border-cyan-400/60 transition-all duration-300"></div>
              <CheckCircle className="w-8 h-8 text-green-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Priority Sorting</h3><p className="text-gray-300">Advanced priority sorting capabilities powered by AI</p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 border border-cyan-400/20 hover:border-cyan-400/60 transition-all duration-300"></div>
              <CheckCircle className="w-8 h-8 text-green-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Spam Detection</h3><p className="text-gray-300">Advanced spam detection capabilities powered by AI</p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 border border-cyan-400/20 hover:border-cyan-400/60 transition-all duration-300"></div>
              <CheckCircle className="w-8 h-8 text-green-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Email Analytics</h3><p className="text-gray-300">Advanced email analytics capabilities powered by AI</p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 border border-cyan-400/20 hover:border-cyan-400/60 transition-all duration-300"></div>
              <CheckCircle className="w-8 h-8 text-green-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Scheduling Integration</h3><p className="text-gray-300">Advanced scheduling integration capabilities powered by AI</p>
            </div>
          </div>,
        </section>,
,
        {/* Benefits Section */}
        <section className="mb-16"></section>
            <h2 className="text-3xl md: text-4xl font-bold text-white mb-4"></h2>
              Why Choose Our AI Email Assistant?
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto"></p>
              Proven results and measurable impact for your business;
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"></div>
            <div className="bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 border border-purple-400/20 hover:border-purple-400/60 transition-all duration-300"></div>
          <div className="text-center mb-12"></section>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Our AI Email Assistant?</h2><p className="text-lg text-gray-300 max-w-2xl mx-auto">Proven results and measurable impact for your business</p>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"></div>

            <div className="bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 border border-purple-400/20 hover:border-purple-400/60 transition-all duration-300"></div>
              <TrendingUp className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">50% Time Savings</h3><p className="text-gray-300">Measurable improvement in your business metrics</p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 border border-purple-400/20 hover:border-purple-400/60 transition-all duration-300"></div>
              <TrendingUp className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Better Organization</h3><p className="text-gray-300">Measurable improvement in your business metrics</p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 border border-purple-400/20 hover:border-purple-400/60 transition-all duration-300"></div>
              <TrendingUp className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Reduced Spam</h3><p className="text-gray-300">Measurable improvement in your business metrics</p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 border border-purple-400/20 hover:border-purple-400/60 transition-all duration-300"></div>
              <TrendingUp className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Improved Productivity</h3><p className="text-gray-300">Measurable improvement in your business metrics</p>
            </div>
          </div>,
        </section>,
,
        {/* Pricing Section */}
        <section className="mb-16"></section>
            <h2 className="text-3xl md: text-4xl font-bold text-white mb-4"></h2>
              Pricing;
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto"></p>
              Transparent pricing with no hidden fees;
            </p>
          </div>

          <div className="max-w-md mx-auto"></div>
            <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-8 border border-cyan-400/20 text-center"></div>
          <div className="text-center mb-12"></section>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Pricing</h2><p className="text-lg text-gray-300 max-w-2xl mx-auto">Transparent pricing with no hidden fees</p>
            </p>
          </div>

          <div className="max-w-md mx-auto"></div>
            <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-8 border border-cyan-400/20 text-center"></div>
              <h3 className="text-2xl font-bold text-white mb-4">AI Email Assistant</h3><div className="text-4xl font-bold text-cyan-400 mb-4">$99/month</div>
              <p className="text-gray-300 mb-6">per month</p><a
                href="/contact"
                className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white py-3 px-6 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 inline-block"
              >Get Started</a>
              <h3 className="text-2xl font-bold text-white mb-4">AI Email Assistant</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-4">$99/month</div>
              <p className="text-gray-300 mb-6">per month</p>
              <a;
                href="/contact"
                className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white py-3 px-6 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 inline-block"
              ></a>
                Get Started;
              </a>
            </div>)
          </div>)
        </section>)
),
        {/* Contact Section */}
        <section className="mb-16"></section>
            <h2 className="text-3xl md: text-4xl font-bold text-white mb-4"></h2>
              Ready to Get Started?
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto"></p>
              Contact our experts to discuss your specific needs;
          <div className="text-center mb-12"></section>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Get Started?</h2><p className="text-lg text-gray-300 max-w-2xl mx-auto">Contact our experts to discuss your specific needs</p>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"></div>
            <div className="text-center bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 border border-cyan-400/20"></div>
              <Phone className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Call Us</h3>
              <p className="text-gray-300 mb-4">Speak directly with our experts</p>
              <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300 text-lg font-semibold"></a>
                +1 302 464 0950;
              <h3 className="text-xl font-bold text-white mb-2">Call Us</h3><p className="text-gray-300 mb-4">Speak directly with our experts</p><a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300 text-lg font-semibold">+1 302 464 0950</a>
              </a>
            </div>

            <div className="text-center bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 border border-purple-400/20"></div>
              <Mail className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Email Us</h3>
              <p className="text-gray-300 mb-4">Send us your requirements</p>
              <a href="mailto:kleber@ziontechgroup.com" className="text-purple-400 hover:text-purple-300 text-lg font-semibold"></a>
                kleber@ziontechgroup.com;
              <h3 className="text-xl font-bold text-white mb-2">Email Us</h3><p className="text-gray-300 mb-4">Send us your requirements</p><a href="mailto:kleber@ziontechgroup.com" className="text-purple-400 hover:text-purple-300 text-lg font-semibold">kleber@ziontechgroup.com</a>
              </a>
            </div>

            <div className="text-center bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 border border-pink-400/20"></div>
              <MapPin className="w-12 h-12 text-pink-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Visit Us</h3><p className="text-gray-300 mb-4">Our headquarters location</p>
              <p className="text-pink-400 text-sm"></p>
                364 E Main St STE 1008</p><br >Middletown DE 19709</br>
              </br>
                364 E Main St STE 1008<br />
                Middletown DE 19709;
              </p>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Benefits Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Our Solution?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Proven results that drive business growth and efficiency
              </p>
            </div></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div></div></div>
                  <p className="text-lg text-white font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact our experts to discuss your requirements and get started today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-violet-500 to-blue-600 hover:from-violet-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Contact Us
                </button>
                <button className="border border-violet-400 text-violet-400 hover:bg-violet-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                  Learn More
                </button>
              </div></div></div>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361
            </div>
          </div>
        </div>
      </div>
</div>
=======
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
      <Footer />
<<<<<<< HEAD
    </div>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0210
=======
    </React.Fragment>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361
  );
=======
      <Footer />,
    </div>);
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
};

export default Page;
=======


  const features = [{icon: Mail,
      title: 'Smart Classification',
      description: 'Automatically categorize and prioritize emails based on content and sender.'},
    {icon: MessageSquare,
      title: 'Auto-Responses',
      description: 'Generate intelligent responses using AI to handle common inquiries.'},
    {icon: Brain,
      title: 'Sentiment Analysis',
      description: 'Analyze email tone and sentiment to provide better customer service.'},
    {icon: Settings,
      title: 'Workflow Automation',
      description: 'Create automated workflows to streamline your email management.'}];
  const useCases = [{title: 'Customer Support',
      description: 'Automate responses to common customer inquiries and support tickets.',
      icon: Users;},
    {title: 'Sales Follow-up',
      description: 'Automatically follow up with leads and prospects based on their behavior.',
      icon: BarChart3;},
    {title: 'Email Marketing',
      description: 'Personalize and optimize email campaigns for better engagement.',
      icon: Zap;},
    {title: 'Internal Communication',
      description: 'Streamline internal email workflows and team communication.',
      icon: Shield;}];
  return (
    <><  />
      <Helmet></Helmet>
        <title>AI Email Assistant - Zion Tech Group</title>
        <meta const name = "description" content="Transform your email management with our AI Email Assistant. Smart classification, auto-responses, sentiment analysis, and automated workflows." /    /></meta>
        <meta name="keywords" content="AI email assistant, email automation, smart email management, auto-responses, email classification"   /></meta>
      </Helmet>
      <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
        {/* Hero Section */}
        <section className="w-5h-5ml-2"   /></section>
          <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
            <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
              <h1 className="w-5h-5ml-2"   /></h1>
                AI <span className="w-5h-5ml-2"   />Email Assistant</span>
              </h1>
              <p className="w-5h-5ml-2">Transform your email management with intelligent automation, smart classification,
                and AI-powered responses that save time and improve productivity.
              </p>
              <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
                <Link to="/contact" className="bg-gradient-to-rfrom-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300transformhover:scale-105">Start Building;
                </Link>
                <Link to="/ai-services" className="borderborder-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300transformhover:scale-105">View All AI Services;
                </Link>
              </div>
          </div>
        </section>
        {/* Features Section */}
        <section className="w-5h-5ml-2"   /></section>
          <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
            <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
              <h2 className="w-5h-5ml-2"   /></h2>
                Powerful <span className="w-5h-5ml-2"   />Features</span>
              </h2>
              <p className="w-5h-5ml-2">Everything you need to automate and optimize your email management;
              </p>
            </div>
            <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
              {features.map((feature, index) => (
                <div key={index} className="text-centergroup"   /></div>
                  <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
                    {feature.icon}
                  </div>
                  <h3 className="w-5h-5ml-2"   />{feature.title}</h3>
                  <p className="w-5h-5ml-2">{feature.description}</p>
                </div>
  ))}
            </div>
        </section>
        {/* Use Cases Section */}
        <section className="w-5h-5ml-2"   /></section>
          <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
            <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
              <h2 className="w-5h-5ml-2"   /></h2>
                Use <span className="w-5h-5ml-2"   />Cases</span>
              </h2>
              <p className="w-5h-5ml-2">Discover how our AI email assistant can transform your communication workflows;
              </p>
            </div>
            <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover: border-cyan-400/40 transition-all duration-300 grouphover: transformhove,
  r:scale-105"   /></div>
                  <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
                    {useCase.icon}
                  </div>
                  <h3 className="w-5h-5ml-2"   />{useCase.title}
                  </h3>
                  <p className="w-5h-5ml-2">{useCase.description}
                  </p>
                </div>
  ))}
            </div>
        </section>
        {/* CTA Section */}
        <section className="w-5h-5ml-2"   /></section>
          <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
            <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
              <h2 className="w-5h-5ml-2"   />Ready to Transform Your Email Management?
              </h2>
              <p className="w-5h-5ml-2">Start automating your email workflows and boost productivity with AI-powered assistance.
              </p>
              <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
                <Link to="/contact" className="bg-gradient-to-rfrom-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300transformhover:scale-105">Start Building Now;
                </Link>
                <Link to="/about" className="borderborder-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300transformhover:scale-105">Learn More About Us;
                </Link>
              </div>
          </div>
        </section>
      </div>
    <  />
  );
};

export default AIEmailAssistantPage;

import React from 'react';
import {Helmet} from 'react-helmet-async';
import {Link} from 'react-router-dom';
import {ArrowRight} from 'lucide-react';

export default function AiEmailAssistant() {return (
    <>
      <title>AiEmailAssistant - Zion Tech Group</title>

            <h1 className="text-4xl font-bold text-white mb-6">AiEmailAssistant</h1>
            <p className="text-lg text-gray-300 mb-8">Professional aiemailassistant services coming soon.</p>

              Contact Us

      <  />
  );}

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f
