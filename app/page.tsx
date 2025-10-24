<<<<<<< HEAD
<<<<<<< HEAD
"use client"
import React from "react"
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import { ArrowRight, Brain, BarChart, Target, TrendingUp, CheckCircle, Send, BarChart3, Shield, Zap, Globe, DollarSign, Clock, Star, Activity, Lock, FileText, CreditCard, Database, Building2, Sparkles, PieChart } from 'lucide-react'
export default function HomePage() {
  const features = [
    {
      title: "AI-Powered Solutions",
      description: "Cutting-edge artificial intelligence to transform your business operations with machine learning, natural language processing, and predictive analytics",
      icon: Brain,
      benefits: [
        "Machine Learning Implementation",
        "Natural Language Processing",
        "Predictive Analytics",
    "Automated Decision Making"
  ]
},
    {
      title: "IT Services",
      description: "Comprehensive technology solutions including cloud infrastructure, cybersecurity, and digital transformation for modern businesses",
      icon: BarChart,
      benefits: [
        "Cloud Infrastructure Setup",
        "Cybersecurity Solutions",
        "Digital Transformation",
    "24/7 Technical Support"
  ]
},
    {
      title: "Micro SaaS",
      description: "Scalable software-as-a-service solutions designed for rapid deployment and growth, perfect for startups and enterprises",
      icon: Target,
      benefits: [
        "Rapid Deployment",
        "Scalable Architecture",
        "Custom Development",
    "Ongoing Maintenance"
  ]
},
    {
      title: "Business Intelligence",
      description: "Advanced analytics and reporting tools to help you make data-driven decisions and optimize your business performance",
      icon: TrendingUp,
      benefits: [
        "Data Visualization",
        "Performance Analytics",
        "Custom Dashboards",
    "Real-time Reporting"
  ]
}
  ]
  const benefits = [
  "Increase efficiency by up to 50%",
      "Reduce costs by 30% with automation",
      "Improve decision-making with AI insights",
      "Scale operations without proportional staff increases",
    'Gain competitive advantage with advanced technology'
  ]
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Navigation />
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-blue-600/20"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md: text-6xl font-bold text-gray-900 mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-600">Zion Tech Group</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Advanced AI and IT solutions for modern businesses. We help you leverage cutting-edge technology to drive growth and innovation.
          </p>
          <div className="flex flex-col sm: flex-row gap-4 justify-center">
            <button className="bg-emerald-600 hover: bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center">
              Get Started
              <ArrowRight className="w-8 h-8" />
            </button>
            <button className="border border-emerald-400 text-emerald-400 hover: bg-emerald-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
              Learn More
            </button>
=======
'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRightIcon, SparklesIcon, CpuChipIcon, CloudIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

const AppPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="relative z-10 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <SparklesIcon className="h-8 w-8 text-purple-400" />
            <span className="text-2xl font-bold text-white">Zion Tech Group</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <Link href="/about" className="text-gray-300 hover:text-white transition-colors">About</Link>
            <Link href="/ai-services" className="text-gray-300 hover:text-white transition-colors">AI Services</Link>
            <Link href="/it-services" className="text-gray-300 hover:text-white transition-colors">IT Services</Link>
            <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Transform Your Business with
              <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                AI-Powered Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Leading technology solutions provider helping businesses transform their digital infrastructure 
              with cutting-edge AI, cloud architecture, and innovative development services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="inline-flex items-center px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors"
              >
                Get Started
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                href="/ai-services" 
                className="inline-flex items-center px-8 py-3 border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-semibold rounded-lg transition-colors"
              >
                Explore AI Services
              </Link>
            </div>
>>>>>>> 1c3bcb5bf864
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4 bg-slate-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Core Services</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Comprehensive technology solutions designed to accelerate your digital transformation
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700 hover:border-purple-500 transition-colors">
                <CpuChipIcon className="h-12 w-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">AI Solutions</h3>
                <p className="text-gray-300 mb-4">
                  Advanced artificial intelligence services including machine learning, natural language processing, 
                  and computer vision to automate and optimize your business processes.
                </p>
                <Link href="/ai-services" className="text-purple-400 hover:text-purple-300 font-medium">
                  Learn More →
                </Link>
              </div>
              
              <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700 hover:border-blue-500 transition-colors">
                <CloudIcon className="h-12 w-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Cloud Architecture</h3>
                <p className="text-gray-300 mb-4">
                  Scalable cloud infrastructure solutions with AWS, Azure, and Google Cloud to ensure 
                  high availability, security, and performance for your applications.
                </p>
                <Link href="/it-services" className="text-blue-400 hover:text-blue-300 font-medium">
                  Learn More →
                </Link>
              </div>
              
              <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700 hover:border-green-500 transition-colors">
                <ShieldCheckIcon className="h-12 w-12 text-green-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Cybersecurity</h3>
                <p className="text-gray-300 mb-4">
                  Comprehensive security solutions to protect your digital assets with advanced threat detection, 
                  encryption, and compliance management.
                </p>
                <Link href="/cybersecurity" className="text-green-400 hover:text-green-300 font-medium">
                  Learn More →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our AI and technology solutions can drive your success.
            </p>
            <Link 
              href="/contact" 
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold rounded-lg transition-all transform hover:scale-105"
            >
              Start Your Project Today
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-700 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <SparklesIcon className="h-6 w-6 text-purple-400" />
                <span className="text-xl font-bold text-white">Zion Tech Group</span>
              </div>
              <p className="text-gray-400">
                Leading technology solutions provider transforming businesses with AI and innovation.
              </p>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                <li><Link href="/ai-services" className="text-gray-400 hover:text-white transition-colors">AI Solutions</Link></li>
                <li><Link href="/it-services" className="text-gray-400 hover:text-white transition-colors">IT Services</Link></li>
                <li><Link href="/cloud-solutions" className="text-gray-400 hover:text-white transition-colors">Cloud Solutions</Link></li>
                <li><Link href="/cybersecurity" className="text-gray-400 hover:text-white transition-colors">Cybersecurity</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="/team" className="text-gray-400 hover:text-white transition-colors">Our Team</Link></li>
                <li><Link href="/careers" className="text-gray-400 hover:text-white transition-colors">Careers</Link></li>
                <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><Link href="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</Link></li>
                <li><Link href="/docs" className="text-gray-400 hover:text-white transition-colors">Documentation</Link></li>
                <li><Link href="/help" className="text-gray-400 hover:text-white transition-colors">Help Center</Link></li>
                <li><Link href="/support" className="text-gray-400 hover:text-white transition-colors">Support</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-700 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 Zion Tech Group. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AppPage;
=======
"use client"
import React from "react"
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import { ArrowRight, Brain, BarChart, Target, TrendingUp, CheckCircle, Send, BarChart3, Shield, Zap, Globe, DollarSign, Clock, Star, Activity, Lock, FileText, CreditCard, Database, Building2, Sparkles, PieChart } from 'lucide-react'
export default function HomePage() {
  const features = [
    {
      title: "AI-Powered Solutions",
      description: "Cutting-edge artificial intelligence to transform your business operations with machine learning, natural language processing, and predictive analytics",
      icon: Brain,
      benefits: [
        "Machine Learning Implementation",
        "Natural Language Processing",
        "Predictive Analytics",
    "Automated Decision Making"
  ]
},
    {
      title: "IT Services",
      description: "Comprehensive technology solutions including cloud infrastructure, cybersecurity, and digital transformation for modern businesses",
      icon: BarChart,
      benefits: [
        "Cloud Infrastructure Setup",
        "Cybersecurity Solutions",
        "Digital Transformation",
    "24/7 Technical Support"
  ]
},
    {
      title: "Micro SaaS",
      description: "Scalable software-as-a-service solutions designed for rapid deployment and growth, perfect for startups and enterprises",
      icon: Target,
      benefits: [
        "Rapid Deployment",
        "Scalable Architecture",
        "Custom Development",
    "Ongoing Maintenance"
  ]
},
    {
      title: "Business Intelligence",
      description: "Advanced analytics and reporting tools to help you make data-driven decisions and optimize your business performance",
      icon: TrendingUp,
      benefits: [
        "Data Visualization",
        "Performance Analytics",
        "Custom Dashboards",
    "Real-time Reporting"
  ]
}
  ]
  const benefits = [
  "Increase efficiency by up to 50%",
      "Reduce costs by 30% with automation",
      "Improve decision-making with AI insights",
      "Scale operations without proportional staff increases",
    'Gain competitive advantage with advanced technology'
  ]
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Navigation />
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-blue-600/20"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md: text-6xl font-bold text-gray-900 mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-600">Zion Tech Group</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Advanced AI and IT solutions for modern businesses. We help you leverage cutting-edge technology to drive growth and innovation.
          </p>
          <div className="flex flex-col sm: flex-row gap-4 justify-center">
            <button className="bg-emerald-600 hover: bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center">
              Get Started
              <ArrowRight className="w-8 h-8" />
            </button>
            <button className="border border-emerald-400 text-emerald-400 hover: bg-emerald-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
              Learn More
            </button>
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md: text-4xl font-bold text-gray-900 mb-4">
              Our Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive AI and IT solutions designed to transform your business.
            </p>
          </div>
          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover: shadow-xl transition-shadow duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-lg mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-8 h-8" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Benefits Section */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md: text-4xl font-bold text-gray-900 mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our proven track record and innovative approach deliver measurable results.
            </p>
          </div>
          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="w-8 h-8" />
                <p className="text-gray-700 text-lg">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md: text-4xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let&apos;s discuss how our AI and IT solutions can help you achieve your goals.
          </p>
          <button className="bg-blue-600 hover: bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center mx-auto">
            Start Your Journey
            <ArrowRight className="w-8 h-8" />
          </button>
        </div>
      </section>
      <Footer />
    </div>
  )
<<<<<<< HEAD
=======
import React from 'react';

export const metadata = {
  title: 'Zion Tech Group - AI & IT Solutions',
  description: 'Leading provider of AI and IT solutions. Transform your business with our cutting-edge technology and expert services.',
  keywords: 'AI solutions, IT services, cybersecurity, cloud infrastructure, business transformation',
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-white mb-6">
          Zion Tech Group
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          AI & IT Solutions
        </p>
        <div className="flex gap-4 justify-center">
          <a href="/contact" className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg font-semibold text-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300">
            Get Started
          </a>
          <a href="/about" className="px-8 py-4 border border-purple-500 text-purple-400 rounded-lg font-semibold text-lg hover:bg-purple-500/10 transition-all duration-300">
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
>>>>>>> main
}
=======
}
>>>>>>> 0a8d6a0455c0 (Fix TypeScript syntax errors and component export issues)
>>>>>>> 1c3bcb5bf864
