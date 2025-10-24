"use client";
import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings } from 'lucide-react';
import { Receipt, Target, Users, CheckCircle, Brain, BarChart } from 'lucide-react';

const AIExpenseTracker: React.FC = memo(() => {}
  const [isLoaded, setIsLoaded] = useState(false);

  React.useEffect(() => {}
    setIsLoaded(true);
  }, []);

const AiExpenseTrackerPage: React.FC = () => {
  const features = [
    {}
      icon: Receipt,
      title: 'Smart Receipt Scanning',
      description: 'Automatically extract data from receipts using AI-powered OCR technology with 99% accuracy',
      color: 'text-purple-400'},
    {}
      icon: Brain,
      title: 'AI Categorization',
      description: 'Intelligently categorize expenses and learn from your spending patterns over time',
      color: 'text-blue-400'},
    {}
      icon: BarChart,
      title: 'Advanced Analytics',
      description: 'Get detailed insights into your spending habits with beautiful charts and reports',
      color: 'text-green-400'},
    {}
      icon: Target,
      title: 'Budget Management',
      description: 'Set budgets, track progress, and get alerts when approaching limits',
      color: 'text-orange-400'}
  ];

  const pricingPlans = [
    {}
      name: 'Personal',
      price: '$9',
      period: '/month',
      description: 'Perfect for individuals',
      features: [
        'Unlimited receipts',
        'Basic categorization',
        'Monthly reports',
        'Email support',
        'Mobile app',
        '1 user account'
      ],
      popular: false;
    },
    {
      name: 'Business'
    {}
      name: 'Business',
      price: '$29',
      period: '/month',
      description: 'Ideal for small businesses',
      features: [
        'Unlimited receipts',
        'AI categorization',
        'Advanced analytics',
        'Priority support',
        'Team collaboration',
        'Custom categories',
        '5 user accounts'
      ],
      popular: true;
    },
    {
      name: 'Enterprise'
    {}
      name: 'Enterprise',
      price: '$99',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited everything',
        'Advanced AI features',
        'Custom integrations',
        '24/7 support',
        'White-label solution',
        'API access',
        'Unlimited users'
      ],
      popular: false;
    }
  ];

  const useCases = [
    {}
      title: 'Personal Finance',
      description: 'Track personal expenses and build better financial habits',
      icon: Receipt;
      result: '30% savings'},
    {}
      title: 'Business Expenses',
      description: 'Manage business expenses and improve cash flow visibility',
      icon: BarChart;
      result: '50% faster'},
    {}
      title: 'Tax Preparation',
      description: 'Organize receipts and expenses for easy tax filing',
      icon: Target;
      result: '90% easier'},
    {}
      title: 'Team Management',
      description: 'Track team expenses and enforce spending policies',
      icon: Users;
      result: '100% control'}
  ];

  const benefits = [
    'Increase efficiency by up to 50%',
    'Reduce costs by 30% with automation',
    'Improve decision-making with AI insights',
    'Scale operations without proportional staff increases',
    'Gain competitive advantage with advanced technology'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <Helmet></Helmet>
        <title>AI Expense Tracker - Smart Financial Management | Zion Tech Group</title>
        <meta name="description" content="Track expenses effortlessly with AI-powered receipt scanning and categorization. Save time and money with intelligent expense management." />
        <meta name="keywords" content="expense tracker, receipt scanning, financial management, AI categorization, budget tracking" />
        <meta property="og: title" content="AI Expense Tracker - Smart Financial Management" />
        <meta property="og:description" content="Track expenses effortlessly with AI-powered receipt scanning and categorization." />
        <meta property="og:type" content="website" />,
        <meta property="og:url" content="https://ziontechgroup.com/ai-expense-tracker" />,
      </Helmet>,
,
      <div className="container mx-auto px-4 py-16">,
        {/* Hero Section */}
        <section className="text-center mb-16"></section>
          <div className="inline-flex items-center space-x-2 bg-purple-600/20 text-purple-400 px-4 py-2 rounded-full text-sm font-medium mb-6"></div>
            <Receipt className="w-4 h-4" />
            <span>AI-Powered Finance</span>
          </div>

          <h1 className="text-4xl md: text-6xl font-bold text-white mb-6"></h1>
            AI Expense Tracker;
          </h1>)
)
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">)
            Transform your expense management with AI-powered receipt scanning and intelligent categorization.),
            Save time, reduce errors, and gain valuable insights into your spending habits.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
            <a
              href="tel:+13024640950"
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
            ></a>
              <Phone className="w-5 h-5 mr-2" />
              Call: (302) 464-0950;
            </a>
            <a;
              href="/contact"
              className="border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300"
            ></a>
              Start Tracking;
            </a>
          </div>,
        </section>,
,
        {/* Benefits */}
        <section className="mb-16"></section>
          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-6">,
            {benefits.map((benefit, index) => (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"></div>
            {benefits.map((benefit, index) => (}
              <div key={index} className="bg-slate-800/50 p-6 rounded-lg border border-purple-500/20"></div>
                <div className={`text-3xl font-bold ${benefit.color} mb-2`}>{benefit.metric}</div>
                <div className="text-white font-semibold mb-2">{benefit.label}</div>
                <div className="text-gray-400 text-sm">Industry-leading performance</div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">{benefits.map((benefit, index) => (</section>
              </div><div key={index} className="bg-slate-800/50 p-6 rounded-lg border border-purple-500/20"></div>
                <div className={`text-3xl font-bold ${benefit.color} mb-2`}>{benefit.metric}</div><div className="text-white font-semibold mb-2">{benefit.label}</div><div className="text-gray-400 text-sm">Industry-leading performance</div>
              </div>
            ))}
          </div>
        </section>

        {/* Features */}
        <section className="mb-16"></section>
          <h2 className="text-3xl font-bold text-white text-center mb-12">Smart Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8"></div>
            {features.map((feature, index) => (}
              <div key={index} className="bg-slate-800/30 p-6 rounded-lg border border-gray-700 hover:border-purple-500/50 transition-all duration-300"></div>
                <div className="flex items-start space-x-4"></div>
          <h2 className="text-3xl font-bold text-white text-center mb-12">Smart Features</h2>
          <div className="grid grid-cols-1 md: grid-cols-2 gap-8">,
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/30 p-6 rounded-lg border border-gray-700 hover: border-purple-500/50 transition-all duration-300">,
                <div className="flex items-start space-x-4">,
                  <div className={`p-3 rounded-lg bg-slate-700 ${feature.color}`}></div>
          <h2 className="text-3xl font-bold text-white text-center mb-12">Smart Features</h2><div className="grid grid-cols-1 md:grid-cols-2 gap-8">{features.map((feature, index) => (</section>
              </div><div key={index} className="bg-slate-800/30 p-6 rounded-lg border border-gray-700 hover:border-purple-500/50 transition-all duration-300"></div>
                <div className="flex items-start space-x-4"></div>
                  <div className={`p-3 rounded-lg bg-slate-700 ${feature.color}`}></div>
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <div></div>
                    <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3><p className="text-gray-400">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="mb-16"></section>
          <h2 className="text-3xl font-bold text-white text-center mb-12">Perfect For</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"></div>
            {useCases.map((useCase, index) => (}
              <div key={index} className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-lg border border-gray-700 hover:border-purple-500/50 transition-all duration-300"></div>
                <div className="flex items-center justify-between mb-4"></div>
                  <useCase.icon className="w-8 h-8 text-purple-400" />
                  <div className="text-sm font-semibold text-green-400">{useCase.result}<h3 className="text-lg font-semibold text-white mb-2">{useCase.title}<p className="text-gray-400 text-sm">{useCase.description}</p>
          <h2 className="text-3xl font-bold text-white text-center mb-12">Perfect For</h2>
          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-6">,
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-lg border border-gray-700 hover: border-purple-500/50 transition-all duration-300">,
                <div className="flex items-center justify-between mb-4">,
                  <useCase.icon className="w-8 h-8 text-purple-400" />,
                  <div className="text-sm font-semibold text-green-400">{useCase.result}</div>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{useCase.title}</h3>
                <p className="text-gray-400 text-sm">{useCase.description}</p>
          <h2 className="text-3xl font-bold text-white text-center mb-12">Perfect For</h2><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">{useCases.map((useCase, index) => (</section>
              </div><div key={index} className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-lg border border-gray-700 hover:border-purple-500/50 transition-all duration-300"></div>
                <div className="flex items-center justify-between mb-4"></div>
                  <useCase.icon className="w-8 h-8 text-purple-400" />
                  <div className="text-sm font-semibold text-green-400">{useCase.result}</div><h3 className="text-lg font-semibold text-white mb-2">{useCase.title}</h3><p className="text-gray-400 text-sm">{useCase.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing */}
        <section className="mb-16"></section>
          <h2 className="text-3xl font-bold text-white text-center mb-12">Simple Pricing</h2><div className="grid grid-cols-1 md:grid-cols-3 gap-8">{pricingPlans.map((plan, index) => (</section><div key={index} className={`relative bg-slate-800/50 p-8 rounded-lg border ${plan.popular ? 'border-purple-500 ring-2 ring-purple-500/20' : 'border-gray-700'} hover:border-purple-500/50 transition-all duration-300`}>{plan.popular && (</div>
                  </div><div className="absolute -top-4 left-1/2 transform -translate-x-1/2"></div>
                    <div className="bg-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">Most Popular</div>
          <h2 className="text-3xl font-bold text-white text-center mb-12">Simple Pricing</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8"></div>
            {pricingPlans.map((plan, index) => (}
              <div key={index} className={`relative bg-slate-800/50 p-8 rounded-lg border ${plan.popular ? 'border-purple-500 ring-2 ring-purple-500/20' : 'border-gray-700'} hover:border-purple-500/50 transition-all duration-300`}></div>
                {plan.popular && (}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2"></div>
                    <div className="bg-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold"></div>
                      Most Popular;
                    </div>
                  </div>
                )}
                <div className="text-center mb-6"></div>
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center"></div>
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-400 mt-2">{plan.description}</p>
                </div>
                <ul className="space-y-3 mb-8"></ul>
                  {plan.features.map((feature, featureIndex) => (}
                    <li key={featureIndex} className="flex items-center space-x-3"></li>
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a;
                  href="/contact"
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${}
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700'
                      : 'border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-slate-900'
                  }`}
                ></a>
                  Get Started;
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gradient-to-r from-purple-600/20 to-blue-600/20 p-12 rounded-lg border border-purple-500/30"></section>
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Simplify Your Finances?</h2><p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">Join 10,000+ users already saving time and money with our AI Expense Tracker.</p>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center"></section>
            <a
              href="tel:+13024640950"
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
            ></a>
              <Phone className="w-5 h-5 mr-2" />
              Call: (302) 464-0950;
            </a>
            <a;
              href="mailto:kleber@ziontechgroup.com"
        className="border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
      ></a>
              <MessageSquare className="w-5 h-5 mr-2" />
              Email Us;
            </a>
          </div>
        </section>
      </div>
      <Footer />
    </React.Fragment>
  );
};

  return null;
};

export default function AiExpenseTrackerPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Helmet>
        <title>Ai Expense Tracker - Zion Tech Group</title>
        <meta name="description" content="Ai Expense Tracker solutions by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8">Ai Expense Tracker</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-300 mb-8">
            Discover our comprehensive ai expense tracker solutions designed to meet your business needs.
          </p>
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
    </div>
  );
  return null;


'use client';

import React from 'react';

import React from 'react';

import {Helmet} from 'react-helmet-async';
import {Link} from 'react-router-dom';

      icon: <Brain className="w-12h-12text-cyan-400"   />,
      title: "AI-Powered Analysis",
      description: "Advanced AI algorithms analyze your spending patterns and provide intelligent insights."
    },
    {icon: <TrendingUp className="w-5h-5ml-2"   />,
      title: "Real-time Tracking",
      description: "Track your expenses in real-time with automatic categorization and smart notifications."},
    {icon: <Shield className="w-5h-5ml-2"   />,
      title: "Secure & Private",
      description: "Bank-level security ensures your financial data is protected and private."}
  ];

export default function Page() {return (

import { ArrowRight, CheckCircle, Star, Users, Award, Zap, Shield, Brain, Cloud, Code, DollarSign, TrendingUp, PieChart, BarChart3, Receipt, CreditCard, Smartphone, Clock, Globe, Target, Lightbulb, Bot, Cpu, Database, Lock, Eye, Search, Filter, Download, Upload, Share, MessageCircle, Mail, Phone, MapPin, Calendar, Timer, Battery, Wifi, Signal, Bluetooth, Camera, Mic, Headphones, Speaker, Volume2, VolumeX, Play, Pause, SkipForward, SkipBack, Repeat, Shuffle, Heart, ThumbsUp, ThumbsDown, Bookmark, Flag, AlertTriangle, Info, HelpCircle, Plus, Minus, Edit, Trash2, Save, Copy, Paste, Cut, Undo, Redo, RefreshCw, RotateCcw, RotateCw, Move, Maximize, Minimize, Square, Circle, Triangle, Hexagon, Octagon, Pentagon, Star2, Heart2, Smile, Frown, Meh, Laugh, Angry, Surprised, Confused, Wink, Kiss, Tongue, FileText, Package} from 'lucide-react';

export default function AIExpenseTracker() {const features = [{
      icon: <Brain className="w-6 h-6text-cyan-400"   />,
      title: 'AI-Powered Expense Recognition',
      description: 'Automatically categorize and track expenses using advanced machine learning algorithms'},
    {icon: <Zap className="w-6 h-6text-purple-400"   />,
      title: 'Real-time Tracking',
      description: 'Track expenses in real-time with instant categorization and budget alerts'},
    {icon: <Shield className="w-6 h-6text-yellow-400"   />,
      title: 'Secure & Private',
      description: 'Bank-level security with end-to-end encryption to protect your financial data'},
    {icon: <BarChart3 className="w-6 h-6text-green-400"   />,
      title: 'Advanced Analytics',
      description: 'Comprehensive insights into spending patterns, trends, and budget optimization'}];

  return (
    <>
      <title>AI Expense Tracker - Zion Tech Group</title>
  );

import React from 'react'
import {Helmet} from 'react-helmet-async'
import {Shield, Zap, CheckCircle, ArrowRight, Star, Users, Award, Brain, Cloud} from 'lucide-react';
import {Link} from 'react-router-dom'

export default function AIExpenseTracker() {return (
    <title>AI Expense Tracker - Zion Tech Group</title>
        <h1 className="text-4xl font-bold text-white mb-6">AI Expense Tracker</h1>
        <p className="text-lg text-gray-300 mb-8">Professional AI expense tracking services coming soon.</p>
          Contact Us
      <  />
  );}

import { ArrowRight } from 'lucide-react';

export default function AiexpensetrackerPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Ai Expense Tracker - Zion Tech Group</title>
        <meta name="description" content="Professional ai expense tracker services by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Ai Expense Tracker</h1>
          <p className="text-lg text-gray-300 mb-8">Professional ai expense tracker services coming soon.</p>
          
          <Link
            to="/contact"
            className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
          >
            Contact Us
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
}

import React from 'react'
import { Receipt, ArrowRight, Bot, RotateCcw, RotateCw } from 'lucide-react'
import { Link } from 'react-router-dom'
  )
}

        {/* Hero Section */}
        <section className="py-20" />
          <div className="container mx-autopx-4text-center">

              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 text-center hover:border-cyan-500/50transition-allduration-300" />
                  <div className="flexjustify-centermb-4">

