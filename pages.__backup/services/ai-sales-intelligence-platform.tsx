import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Target,
  TrendingUp,
  Users,
  BarChart3,
  CheckCircle,
  ArrowRight,
  Search,
  Globe,
  Database,
  Zap,
  Star,
  Brain,
  Shield,
  DollarSign,
} from 'lucide-react';

export default function AISalesIntelligencePlatform() {
  const features = [
    {
      icon: Target,
      title: 'Lead Scoring & Prioritization',
      description:
        'AI-powered lead scoring that identifies the most promising prospects for your sales team.',
    },
    {
      icon: TrendingUp,
      title: 'Predictive Analytics',
      description:
        'Forecast sales outcomes and identify opportunities before they become apparent.',
    },
    {
      icon: Users,
      title: 'Customer Segmentation',
      description:
        'Intelligent customer segmentation for personalized sales strategies and messaging.',
    },
    {
      icon: BarChart3,
      title: 'Sales Performance Analytics',
      description:
        'Comprehensive analytics and insights to optimize your sales process and team performance.',
    },
    {
      icon: Search,
      title: 'Market Intelligence',
      description:
        'Real-time market insights and competitive intelligence to inform your sales strategy.',
    },
    {
      icon: Brain,
      title: 'AI-Powered Recommendations',
      description:
        'Intelligent recommendations for next best actions and sales opportunities.',
    },
  ];

  const benefits = [
    'Increase sales conversion rates by up to 35%',
    'Reduce sales cycle time by 25%',
    'Improve lead qualification accuracy by 80%',
    'Boost sales team productivity by 40%',
    'Identify new market opportunities automatically',
    'Optimize pricing strategies with AI insights',
  ];

  const salesProcesses = [
    {
      name: 'Lead Generation',
      description: 'AI-powered lead generation and qualification.',
      icon: Target,
    },
    {
      name: 'Opportunity Management',
      description:
        'Track and manage sales opportunities with predictive insights.',
      icon: TrendingUp,
    },
    {
      name: 'Account Management',
      description: 'Comprehensive account management and expansion strategies.',
      icon: Users,
    },
    {
      name: 'Sales Forecasting',
      description: 'Accurate sales forecasting and pipeline management.',
      icon: BarChart3,
    },
  ];

  const industries = [
    'B2B Software & SaaS',
    'Financial Services',
    'Healthcare & Medical',
    'Manufacturing',
    'Real Estate',
    'Professional Services',
    'E-commerce & Retail',
    'Technology & IT',
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50">
      {/* Hero Section */}
      <section className="py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                AI Sales Intelligence Platform
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600 lg:text-xl">
                Transform your sales process with AI-powered intelligence that
                identifies opportunities, optimizes performance, and drives
                revenue growth.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="rounded-md bg-green-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                >
                  Boost Sales Today
                </Link>
                <Link
                  href="/services"
                  className="text-sm font-semibold leading-6 text-gray-900 hover:text-green-600"
                >
                  View All Services{' '}
                  <ArrowRight className="ml-2 h-5 w-5 inline" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Platform Features
            </h2>
            <p className="mt-6 text-lg text-gray-600">
              Our AI sales intelligence platform provides comprehensive tools to
              optimize every aspect of your sales process.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="text-center group"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 sm:py-32 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
                Why Choose AI Sales Intelligence?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our platform delivers measurable results that directly impact
                your sales performance and revenue growth.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-4 h-full">
                  <div className="space-y-4">
                    <div className="h-20 bg-white rounded-lg shadow-sm flex items-center justify-center">
                      <Target className="h-8 w-8 text-green-600" />
                    </div>
                    <div className="h-16 bg-white rounded-lg shadow-sm flex items-center justify-center">
                      <TrendingUp className="h-6 w-6 text-emerald-600" />
                    </div>
                  </div>
                  <div className="space-y-4 pt-8">
                    <div className="h-16 bg-white rounded-lg shadow-sm flex items-center justify-center">
                      <Users className="h-6 w-6 text-blue-600" />
                    </div>
                    <div className="h-20 bg-white rounded-lg shadow-sm flex items-center justify-center">
                      <BarChart3 className="h-8 w-8 text-purple-600" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sales Processes Section */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Optimize Your Sales Process
            </h2>
            <p className="mt-6 text-lg text-gray-600">
              From lead generation to closing deals, our platform optimizes
              every step of your sales journey.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {salesProcesses.map((process, index) => (
              <motion.div
                key={process.name}
                className="text-center group"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 mb-6 group-hover:scale-110 transition-transform duration-300">
                  <process.icon className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {process.name}
                </h3>
                <p className="text-gray-600 text-sm">{process.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-24 sm:py-32 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-8">
              Industries We Serve
            </h2>
            <p className="text-lg text-gray-600 mb-12">
              Our AI sales intelligence platform works across industries,
              providing tailored solutions for your specific sales challenges.
            </p>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {industries.map((industry, index) => (
                <motion.div
                  key={industry}
                  className="bg-white p-6 rounded-xl shadow-sm border border-gray-200"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500" />
                    <span className="font-medium text-gray-900">
                      {industry}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 sm:py-32 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white">
              Ready to Transform Your Sales?
            </h2>
            <p className="mt-6 text-lg leading-8 text-green-100">
              Let's discuss how our AI sales intelligence platform can boost
              your sales performance and drive revenue growth.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-green-600 shadow-sm hover:bg-green-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Schedule Demo
              </Link>
              <Link
                href="/case-studies"
                className="text-sm font-semibold leading-6 text-white hover:text-green-100"
              >
                View Sales Case Studies
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
