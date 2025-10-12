<<<<<<< HEAD
<<<<<<< HEAD
=======

'use client';

>>>>>>> cursor/fix-errors-and-merge-to-main-b882
import React from 'react'
import { Receipt, ArrowRight, Bot, RotateCcw, RotateCw } from 'lucide-react'
import { Link } from 'react-router-dom'
  )
<<<<<<< HEAD
}
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-0a63
'use client';
import React from 'react';
=======

import React from 'react';

>>>>>>> cursor/fix-errors-and-merge-to-main-b882
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
import { ArrowRight, Shield, Brain, TrendingUp } from 'lucide-react';

  const features = [
<<<<<<< HEAD
    {
      icon: <Brain className="w-5 h-5ml-2" />,
      title: "AI-Powered Analysis",
      description: "Advanced AI algorithms analyze your spending patterns and provide intelligent insights."
    },
    {
      icon: <TrendingUp className="w-5 h-5ml-2" />,
      title: "Real-time Tracking",
      description: "Track your expenses in real-time with automatic categorization and smart notifications."
    },
    {
      icon: <Shield className="w-5 h-5ml-2" />,
=======
      icon: <Brain className="w-12h-12text-cyan-400" />,
      title: "AI-Powered Analysis",
      description: "Advanced AI algorithms analyze your spending patterns and provide intelligent insights."
    },
      icon: <TrendingUp className="w-12h-12text-purple-400" />,
      title: "Real-time Tracking",
      description: "Track your expenses in real-time with automatic categorization and smart notifications."
    },
      icon: <Shield className="w-12h-12text-green-400" />,
>>>>>>> cursor/fix-errors-and-merge-to-main-b882
      title: "Secure & Private",
      description: "Bank-level security ensures your financial data is protected and private."
  ];

  return (
<<<<<<< HEAD
    <>
      <Helmet>
        <title />AI Expense Tracker - Zion Tech Group</title>
        <meta name="description" content="Professional AI expense tracking services by Zion Tech Group. Expert solutions tailored to your business needs." />
        <meta name="keywords" content="AI expense tracking, financial management, Zion Tech Group" />
=======
import { ArrowRight, CheckCircle, Star, Users, Award, Zap, Shield, Brain, Cloud, Code, DollarSign, TrendingUp, PieChart, BarChart3, Receipt, CreditCard, Smartphone, Clock, Globe, Target, Lightbulb, Bot, Cpu, Database, Lock, Eye, Search, Filter, Download, Upload, Share, MessageCircle, Mail, Phone, MapPin, Calendar, Timer, Battery, Wifi, Signal, Bluetooth, Camera, Mic, Headphones, Speaker, Volume2, VolumeX, Play, Pause, SkipForward, SkipBack, Repeat, Shuffle, Heart, ThumbsUp, ThumbsDown, Bookmark, Flag, AlertTriangle, Info, HelpCircle, Plus, Minus, Edit, Trash2, Save, Copy, Paste, Cut, Undo, Redo, RefreshCw, RotateCcw, RotateCw, Move, Maximize, Minimize, Square, Circle, Triangle, Hexagon, Octagon, Pentagon, Star2, Heart2, Smile, Frown, Meh, Laugh, Angry, Surprised, Confused, Wink, Kiss, Tongue, FileText, Package } from 'lucide-react';

export default function AIExpenseTracker() {
  const features = [
    {
      icon: <Brain className="w-6 h-6 text-cyan-400" />,
      title: 'AI-Powered Expense Recognition',
      description: 'Automatically categorize and track expenses using advanced machine learning algorithms'
    },
    {
      icon: <Zap className="w-6 h-6 text-purple-400" />,
      title: 'Real-time Tracking',
      description: 'Track expenses in real-time with instant categorization and budget alerts'
    },
    {
      icon: <Shield className="w-6 h-6 text-yellow-400" />,
      title: 'Secure & Private',
      description: 'Bank-level security with end-to-end encryption to protect your financial data'
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-green-400" />,
      title: 'Advanced Analytics',
      description: 'Comprehensive insights into spending patterns, trends, and budget optimization'
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Expense Tracker - Zion Tech Group</title>
        <meta name="description" content="Professional AI expense tracking services by Zion Tech Group. Expert solutions tailored to your business needs." />
        <meta name="keywords" content="AI expense tracker, financial management, automation, Zion Tech Group" />
>>>>>>> cursor/fix-errors-and-merge-to-main-0a63
        <meta property="og:title" content="AI Expense Tracker - Zion Tech Group" />
        <meta property="og:description" content="Professional AI expense tracking services by Zion Tech Group. Expert solutions tailored to your business needs." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/ai-expense-tracker" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
        {/* Hero Section */}
<<<<<<< HEAD
        <section className="w-5 h-5ml-2" />
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
            <h1 className="w-5 h-5ml-2" />
              <span className="w-5 h-5ml-2" />
                AI Expense Tracker
              </span>
            </h1>
            <p className="w-5 h-5ml-2">Professional AI expense tracking services by Zion Tech Group. Expert solutions tailored to your business needs.
            </p>
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
              <Link
          to="/contact"
          className="bg-gradient-to-r from-cyan-500to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-centerjustify-centergroup"
        >
          Get Started
                
          <ArrowRight className="w-5 h-5ml-2" />
        </Link>
              <Link to="/contact" className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300transformhover:scale-105" />
                Learn More
=======
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                AI Expense Tracker
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Revolutionize your expense management with AI-powered tracking. 
              Automate categorization, optimize budgets, and gain valuable insights into your spending.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/services"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300 flex items-center justify-center"
              >
                View All Services
>>>>>>> cursor/fix-errors-and-merge-to-main-0a63
              </Link>
            </div>
        </section>

        {/* Features Section */}
        <section className="w-5 h-5ml-2" />
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
              <h2 className="w-5 h-5ml-2" />
                Why Choose Our AI Expense Tracker?
              </h2>
              <p className="w-5 h-5ml-2">Our advanced AI technology helps you manage your finances more efficiently
              </p>
            </div>
            
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 text-center hover:border-cyan-500/50transition-allduration-300" />
                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
                    {feature.icon}
                  </div>
                  <h3 className="w-5 h-5ml-2" />{feature.title}</h3>
                  <p className="w-5 h-5ml-2">{feature.description}</p>
                </div>
              ))}
            </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-16">
              Powerful Features
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
                  <div className="mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
<<<<<<< HEAD
        <section className="w-5 h-5ml-2" />
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
              <h2 className="w-5 h-5ml-2" />
                Ready to Get Started?
              </h2>
              <p className="w-5 h-5ml-2">Contact us to learn more about our solutions and how we can help your business.
              </p>
              <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
                <Link to="/contact" className="bg-gradient-to-r from-cyan-500to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105shadow-lghover:shadow-cyan-500/25" />
                  Contact Us
                </Link>
                <Link to="/services" className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300transformhover:scale-105" />
                  View All Services
                </Link>
              </div>
=======
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Expense Management?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of users already using our AI-powered expense tracking solutions to better manage their finances.
            </p>
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 inline-flex items-center"
            >
              Contact Us Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
>>>>>>> cursor/fix-errors-and-merge-to-main-0a63
          </div>
        </section>
      </div>
    </>
  );
<<<<<<< HEAD
};

export default Page;
=======
}
>>>>>>> cursor/fix-errors-and-merge-to-main-0a63
=======

        <title>5G Data Analytics - Zion Tech Group</title>
        <title>AI Expense Tracker - Zion Tech Group</title>

        {/* Hero Section */}
    
                AI Expense Tracker

              Professional AI expense tracking services by Zion Tech Group. Expert solutions tailored to your business needs.
    
                Get Started

                Learn More

        {/* Features Section */}
    
                Why Choose Our AI Expense Tracker?

                Our advanced AI technology helps you manage your finances more efficiently

 (

                    {feature.icon}

                  <h3 className="text-xl font-semiboldtext-whitemb-4">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>

              ))}

        {/* CTA Section */}
    
                Ready to Get Started?

                Contact us to learn more about our solutions and how we can help your business.

                  Contact Us
    
                  View All Services

  );

import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Shield, Zap, CheckCircle, ArrowRight, Star, Users, Award, Brain, Cloud } from 'lucide-react';
import { Link } from 'react-router-dom'

export default function AIExpenseTracker() {
  return (
        <title>AI Expense Tracker - Zion Tech Group</title>
        <h1 className="text-4xl font-bold text-white mb-6">AI Expense Tracker</h1>
        <p className="text-lg text-gray-300 mb-8">Professional AI expense tracking services coming soon.</p>
          Contact Us
  );

>>>>>>> cursor/fix-errors-and-merge-to-main-b882
