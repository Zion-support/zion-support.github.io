"use client";
import React from "react";
import Head from "next/head";
import Link from "next/link";
import {
  Home,
  ArrowLeft,
  Search,
  AlertTriangle,
  RefreshCw,
} from "lucide-react";

export default function Custom404() {
  return (
    <>

      <Head>
        <title>404 - Page Not Found | Zion Tech Group</title>
        <meta name="robots" content="noindex, nofollow" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Zion Tech Group - AI & IT Solutions" />
        <meta property="og:description" content="Advanced AI and IT solutions for modern businesses" />
        <meta property="og:image" content="/og-image.jpg" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
        <div className="max-w-2xl w-full text-center">
          {/* 404 Animation */}
          <div className="relative mb-8">
            <div className="text-9xl font-bold text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text animate-pulse">
              404
            </div>
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-red-500/20 rounded-full animate-bounce">
              <AlertTriangle className="w-6 h-6 text-red-400" />
'use client'
import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings, Check } from 'lucide-react'

const NotFoundPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Intelligence',
      description: 'Advanced AI algorithms that provide intelligent insights and recommendations.',
      benefits: ['Smart recommendations', 'Predictive analytics', 'Automated insights', 'Real-time analysis']
    },
    {
      icon: BarChart,
      title: 'Advanced Analytics',
      description: 'Comprehensive analytics dashboard with real-time data visualization.',
      benefits: ['Real-time dashboards', 'Custom reports', 'Data visualization', 'Performance metrics']
    },
    {
      icon: Target,
      title: 'Precision Targeting',
      description: 'Target specific goals and objectives with precision and accuracy.',
      benefits: ['Goal tracking', 'Performance optimization', 'Strategic planning', 'Success metrics']
    },
    {
      icon: TrendingUp,
      title: 'Growth Optimization',
      description: 'Optimize your business growth with data-driven strategies.',
      benefits: ['Growth strategies', 'Market analysis', 'Competitive insights', 'ROI optimization']
    }
  ]

  const benefits = [
    'Increase efficiency by up to 50%',
    'Reduce costs by 30% with automation',
    'Improve decision-making with AI insights',
    'Scale operations without proportional staff increases',
    'Gain competitive advantage with advanced technology'
  ]

  return (
    <>

      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-blue-600/20"></div>
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              404
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              noindex, nofollow
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
                Learn More
              </button>
            </div>
          </div>
        </section>

          {/* Error Message */}
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Page Not Found
          </h1>

          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Oops! The page you're looking for seems to have vanished into the
            digital void. Don't worry, even our AI can't predict everything!
          </p>

          {/* Search Suggestion */}
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 mb-8">
            <div className="flex items-center justify-center mb-4">
              <Search className="w-6 h-6 text-cyan-400 mr-2" />
              <h2 className="text-lg font-semibold text-white">What were you looking for?</h2>
            </div>
            <p className="text-gray-300 text-sm mb-4">Try searching for one of these popular pages:</p>
            <div className="flex flex-wrap gap-2 justify-center">
              {[
                { name: "Home", path: "/" },
                { name: "About", path: "/about" },
                { name: "Services", path: "/services" },
                { name: "Contact", path: "/contact" }
              ].map((item, index) => (
                <Link
                  key={index}
                  href={item.path}
                  className="px-4 py-2 bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 text-purple-300 rounded-lg hover:from-purple-600/30 hover:to-blue-600/30 transition-all duration-300">
                  {item.name}
                </Link>
        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Key Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Powerful AI-driven features designed to transform your business operations
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <feature.icon className="h-12 w-12 text-emerald-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="h-4 w-4 text-emerald-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/"
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
              <Home className="w-5 h-5 mr-2" />
              Go Home
            </Link>
            <button
              onClick={() => window.history.back()}
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Go Back
            </button>
          </div>

          {/* Help Section */}
          <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-white mb-3">Still can't find what you need?</h3>
            <p className="text-gray-300 text-sm mb-4">
              Our support team is here to help you navigate our services and
              find exactly what you're looking for.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                <RefreshCw className="w-4 h-4 mr-2" />
                Contact Support
              </Link>
              <a
                href="mailto:support@ziontechgroup.com"
                className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center">
                Send Email
              </a>
        {/* Benefits Section */}
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our Solution</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the benefits of cutting-edge AI technology
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-emerald-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-300 text-lg">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

          {/* Fun Fact */}
          <div className="mt-8 p-4 bg-slate-800/30 rounded-lg">
            <p className="text-sm text-gray-400">
              <span className="text-cyan-400">Fun Fact:</span> Even our AI gets
              confused sometimes. That&apos;s why we have humans to help when things
              go wrong! 🤖
        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses already using our AI solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
                Start Free Trial
              </button>
              <button className="border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
};

export default NotFoundPage;
