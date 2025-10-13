import React from 'react'
import { Helmet , DollarSign, TrendingUp, PieChart, BarChart3, Receipt, CreditCard, Smartphone, Shield, Zap, CheckCircle, ArrowRight, Star, Users, Clock, Globe, Award, Target, Lightbulb, Bot, Brain, Cpu, Database, Cloud, Lock, Eye, Search, Filter, Download, Upload, Share, MessageCircle, Mail, Phone, MapPin, Calendar, Timer, Battery, Wifi2, Signal, Bluetooth, Camera, Mic, Headphones, Speaker, Volume2, VolumeX, Play, Pause, SkipForward, SkipBack, Repeat, Shuffle, Heart, ThumbsUp, ThumbsDown, Bookmark, Flag, AlertTriangle, Info, HelpCircle, Plus, Minus, Edit, Trash2, Save, Copy, Paste, Cut, Undo, Redo, RefreshCw, RotateCcw, RotateCw, Move, Maximize, Minimize, Square, Circle, Triangle, Hexagon, Octagon, Pentagon, Star2, Heart2, Smile, Frown, Meh, Laugh, Angry, Surprised, Confused, Wink, Kiss, Tongue, Wink2, Kiss2, Tongue2, Wink3, Kiss3, Tongue3, Wink4, Kiss4, Tongue4, Wink5, Kiss5, Tongue5, Wink6, Kiss6, Tongue6, Wink7, Kiss7, Tongue7, Wink8, Kiss8, Tongue8, Wink9, Kiss9, Tongue9, Wink10, Kiss10, Tongue10, FileText, Package  } from "react-helmet-async";import { Link } from 'react-router-dom'
  )
"use client";
import { Helmet , Link  } from "react-helmet-async";
import { CheckCircle, Star, Brain } from "lucide-react";
export default function AIExpenseTracker() {
  const capabilities = [
    {
      title: "Automatic Categorization",
      description:
        "AI automatically categorizes your expenses into predefined categories like food, transportation, entertainment, etc.",
      icon: <Bot className="w-8 h-8 text-blue-400" />,
    },
    {
      title: "Receipt Scanning",
      description:
        "Simply take a photo of your receipt and let AI extract all the relevant information automatically.",
      icon: <Receipt className="w-8 h-8 text-green-400" />,
    },
    {
      title: "Budget Management",
      description:
        "Set budgets for different categories and get alerts when you're approaching your limits.",
      icon: <DollarSign className="w-8 h-8 text-yellow-400" />,
    },
    {
      title: "Expense Insights",
      description:
        "Get personalized insights and recommendations to help you save money and manage finances better.",
      icon: <Brain className="w-8 h-8 text-purple-400" />,
    },
  ];
  const pricingPlans = [
    {
      name: "Basic",
      price: "$9.99",
      period: "/month",
      description: "Perfect for personal use",
      features: [
        "Unlimited expense tracking",
        "Basic AI categorization",
        "Receipt scanning (50/month)",
        "Basic reports",
        "Mobile app access",
        "Email support",
      ],
      popular: false,
    },
    {
      name: "Pro",
      price: "$19.99",
      period: "/month",
      description: "Ideal for professionals",
      features: [
        "Everything in Basic",
        "Advanced AI insights",
        "Unlimited receipt scanning",
        "Advanced analytics",
        "Budget management",
        "Priority support",
        "API access",
      ],
      popular: true,
    },
    {
      name: "Business",
      price: "$49.99",
      period: "/month",
      description: "For small businesses",
      features: [
        "Everything in Pro",
        "Team collaboration",
        "Multi-user accounts",
        "Advanced reporting",
        "Integration with accounting software",
        "Dedicated support",
        "Custom categories",
      ],
      popular: false,
    },
  ];
  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "Freelance Designer",
      content:
        "AI Expense Tracker has completely transformed how I manage my finances. The automatic categorization saves me hours every week.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      company: "Small Business Owner",
      content:
        "The receipt scanning feature is incredible. I just take a photo and everything is automatically entered and categorized.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      company: "Marketing Manager",
      content:
        "The insights and reports help me understand my spending patterns and make better financial decisions.",
      rating: 5,
    },
  ];
  return (
    <>
      <Helmet /><title>AI Expense Tracker - Zion Tech Group</title>
        <meta;
          name="description"
          content="Smart expense tracking with AI-powered categorization, receipt scanning, and financial insights."
        />
'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
    {
      icon: Brain,
      title: 'AI-Powered Intelligence',
      description: 'Advanced AI algorithms that provide intelligent insights and recommendations.',
      benefits: ['Smart recommendations', 'Predictive analytics', 'Automated insights', 'Real-time analysis']},
    {icon: BarChart,
      title: 'Advanced Analytics',
      description: 'Comprehensive analytics dashboard with real-time data visualization.',
      benefits: ['Real-time dashboards', 'Custom reports', 'Data visualization', 'Performance metrics']},
    {icon: Target,
      title: 'Precision Targeting',
      description: 'Target specific goals and objectives with precision and accuracy.',
      benefits: ['Goal tracking', 'Performance optimization', 'Strategic planning', 'Success metrics']},
    {icon: TrendingUp,
      title: 'Growth Optimization',
description: 'Optimize your business growth with data-driven strategies.',
const benefits = [
];
    'Increase efficiency by up to 50%',
    'Reduce costs by 30% with automation',
    'Improve decision-making with AI insights',
    'Scale operations without proportional staff increases',
'Gain competitive advantage with advanced technology'
              </div>
            ))}
          </div>
          {/* Capabilities Section */}
          <div className="mb-16" /><h2 className="text-3xl font-bold text-white text-center mb-12">
              Key Capabilities</h2>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {capabilities.map((capability, index) => (
                </div><div;
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center"
                 /><div className="flex justify-center mb-4">
                    {capability.icon}</div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {capability.title}</h3>
                  </h3>
                  <p className="text-gray-300">{capability.description}</p>
                </div>
              ))}
            </div>
          </div>
</section>
      </div>
      <Footer />
;