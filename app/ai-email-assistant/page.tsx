<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
=======
"use client";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Star, Zap } from "lucide-react";
export default function AIEmailAssistant() {

  const useCases = [
    {
      title: "Customer Support",
      description:
        "Handle customer inquiries efficiently with AI-powered responses and routing.",
      icon: <Users className="w-8 h-8 text-blue-400" />,
    },
    {
      title: "Sales Outreach",
      description:
        "Generate personalized sales emails and follow-up sequences automatically.",
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
    },
    {
      title: "Email Marketing",
      description:
        "Create compelling marketing campaigns with AI-generated content and optimization.",
      icon: <BarChart3 className="w-8 h-8 text-green-400" />,
    },
    {
      title: "Internal Communications",
      description:
        "Streamline internal email processes and improve team collaboration.",
      icon: <Shield className="w-8 h-8 text-purple-400" />,
    },
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$29",
      period: "/month",
      description: "Perfect for small teams",
      features: [
        "Up to 1,000 emails/month",
        "Basic AI features",
        "Email classification",
        "Auto-responses",
        "Email support",
        "Basic analytics",
      ],
      popular: false,
    },
    {
      name: "Professional",
      price: "$79",
      period: "/month",
      description: "Ideal for growing businesses",
      features: [
        "Up to 10,000 emails/month",
        "Advanced AI features",
        "Sentiment analysis",
        "Workflow automation",
        "Priority support",
        "Advanced analytics",
        "API access",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "$199",
      period: "/month",
      description: "For large organizations",
      features: [
        "Unlimited emails",
        "Custom AI training",
        "White-label solution",
        "Dedicated support",
        "Custom integrations",
        "Advanced security",
        "SLA guarantee",
      ],
      popular: false,
    },
  ];

  const testimonials = [
    {
      name: "Jennifer Smith",
      company: "Customer Service Manager",
      content:
        "AI Email Assistant reduced our response time by 60% and improved customer satisfaction significantly.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      company: "Sales Director",
      content:
        "The automated email generation has increased our outreach efficiency by 3x while maintaining personalization.",
      rating: 5,
    },
    {
      name: "Sarah Wilson",
      company: "Marketing Manager",
      content:
        "Our email campaigns are now more effective thanks to AI-powered content optimization and targeting.",
      rating: 5,
    },
  ];
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0ff3

export default function AiemailassistantPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      <Helmet>
=======
'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings } from 'lucide-react';
const AiEmailAssistantPage: React.FC = () => {
  const features = [
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
      benefits: ['Growth strategies', 'Market analysis', 'Competitive insights', 'ROI optimization']}]
const benefits = [
    'Increase efficiency by up to 50%',
    'Reduce costs by 30% with automation',
    'Improve decision-making with AI insights',
    'Scale operations without proportional staff increases',
    'Gain competitive advantage with advanced technology';
  ]
return (
    <>
  <Helmet />
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1232
        <title>Ai Email Assistant - Zion Tech Group</title>
        <meta name="description" content="Professional ai email assistant services by Zion Tech Group. Transform your business with our expert solutions." />
      </Helmet>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="text-4xl font-bold text-white mb-6">Ai Email Assistant</h1>
        <p className="text-lg text-gray-300 mb-8">Professional ai email assistant services coming soon.</p>
        <Link
          to="/contact"
          className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit"
        >
          Contact Us
          <ArrowRight className="w-5 h-5 ml-2" />
        </Link>
      </div>
    </div>
  );
}
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0e37
=======
import { ArrowRight } from 'lucide-react'
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0f1c
