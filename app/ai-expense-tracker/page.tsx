'use client';


import React from 'react'
import { Receipt, ArrowRight, Bot, RotateCcw, RotateCw } from 'lucide-react'
import { Link } from 'react-router-dom'
  )

'use client';
import React from 'react';

import React from 'react';

import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

      icon: <Brain className="w-12h-12text-cyan-400" />,
      title: "AI-Powered Analysis",
      description: "Advanced AI algorithms analyze your spending patterns and provide intelligent insights."
    },
      icon: <TrendingUp className="w-12h-12text-purple-400" />,
      title: "Real-time Tracking",
      description: "Track your expenses in real-time with automatic categorization and smart notifications."
    },
      icon: <Shield className="w-12h-12text-green-400" />,

      title: "Secure & Private",
      description: "Bank-level security ensures your financial data is protected and private."
  ];

  return (

import { ArrowRight, CheckCircle, Star, Users, Award, Zap, Shield, Brain, Cloud, Code, DollarSign, TrendingUp, PieChart, BarChart3, Receipt, CreditCard, Smartphone, Clock, Globe, Target, Lightbulb, Bot, Cpu, Database, Lock, Eye, Search, Filter, Download, Upload, Share, MessageCircle, Mail, Phone, MapPin, Calendar, Timer, Battery, Wifi, Signal, Bluetooth, Camera, Mic, Headphones, Speaker, Volume2, VolumeX, Play, Pause, SkipForward, SkipBack, Repeat, Shuffle, Heart, ThumbsUp, ThumbsDown, Bookmark, Flag, AlertTriangle, Info, HelpCircle, Plus, Minus, Edit, Trash2, Save, Copy, Paste, Cut, Undo, Redo, RefreshCw, RotateCcw, RotateCw, Move, Maximize, Minimize, Square, Circle, Triangle, Hexagon, Octagon, Pentagon, Star2, Heart2, Smile, Frown, Meh, Laugh, Angry, Surprised, Confused, Wink, Kiss, Tongue, FileText, Package, Brain, Clock, Target } from 'lucide-react';

export default function AIExpenseTracker() {
  const features = [
      icon: <Brain className="w-6 h-6 text-cyan-400" />,
      title: 'AI-Powered Expense Recognition',
      description: 'Automatically categorize and track expenses using advanced machine learning algorithms'
    },
      icon: <Zap className="w-6 h-6 text-purple-400" />,
      title: 'Real-time Tracking',
      description: 'Track expenses in real-time with instant categorization and budget alerts'
    },
      icon: <Shield className="w-6 h-6 text-yellow-400" />,
      title: 'Secure & Private',
      description: 'Bank-level security with end-to-end encryption to protect your financial data'
    },
      icon: <BarChart3 className="w-6 h-6 text-green-400" />,
      title: 'Advanced Analytics',
      description: 'Comprehensive insights into spending patterns, trends, and budget optimization'
  ];

  return (
    
        <title>AI Expense Tracker - Zion Tech Group</title>

        {/* Hero Section */

                AI Expense Tracker
              Revolutionize your expense management with AI-powered tracking. 
              Automate categorization, optimize budgets, and gain valuable insights into your spending.
                Get Started
                View All Services

        {/* Features Section */
                Why Choose Our AI Expense Tracker?
              <p className="w-5 h-5ml-2">Our advanced AI technology helps you manage your finances more efficiently
            
 (
                    {feature.icon
                  <h3 className="w-5 h-5ml-2" />{feature.title}</h3>
                  <p className="w-5 h-5ml-2">{feature.description}</p>
              ))

        {/* Features Section */
              Powerful Features
 (
                    {feature.icon
                    {feature.title
                    {feature.description
              ))

        {/* CTA Section */

              Ready to Transform Your Expense Management?
              Join thousands of users already using our AI-powered expense tracking solutions to better manage their finances.
              Contact Us Today

  );

        <title>5G Data Analytics - Zion Tech Group</title>

        {/* Hero Section */
    
                AI Expense Tracker

              Professional AI expense tracking services by Zion Tech Group. Expert solutions tailored to your business needs.
    
                Get Started

                Learn More

        {/* Features Section */
    
                Why Choose Our AI Expense Tracker?

                Our advanced AI technology helps you manage your finances more efficiently

 (

                    {feature.icon

                  <h3 className="text-xl font-semiboldtext-whitemb-4">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>

              ))

        {/* CTA Section */
    
                Ready to Get Started?

                Contact us to learn more about our solutions and how we can help your business.

                  Contact Us
    
                  View All Services

  );

import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Shield, Zap, CheckCircle, ArrowRight, Star, Users, Award, Brain, Cloud } from 'lucide-react';
import { Link } from 'react-router-dom'

export default function AIExpenseTrackerZionTechGroup() {
  return (
    <>
      <Helmet>
        <title>AI Expense Tracker - Zion Tech Group</title>
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">AI Expense Tracker</h1>
          <p className="text-lg text-gray-300 mb-8">Professional AI expense tracking services coming soon.</p>
          <Link 
            to="/contact" 
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </>
  );
}