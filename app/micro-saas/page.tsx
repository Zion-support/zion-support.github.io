<<<<<<< HEAD
import React from "react";
import { ArrowRight, CheckCircle, Star, Zap, Shield, BarChart3, Cloud, Database, Mail, Users, Globe, Smartphone, TrendingUp, Settings, Monitor, MessageSquare, Share, Award, Cpu, Video, Calculator, Grid, Star as StarIcon, Package, Receipt, Workflow } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import EnhancedSEO from '../components/EnhancedSEO';
=======
<<<<<<< HEAD
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Users, Shield, Cloud, Star, CheckCircle, Award } from 'lucide-react';
>>>>>>> origin/main

const MicroSaasPage: React.FC = () => {
  const microSaasServices = [
    {
<<<<<<< HEAD
      title: "Project Management Pro",
      description: "Advanced project management with AI-powered insights and automation",
      icon: <Workflow className="w-8 h-8 text-cyan-400" />,
      features: ["AI Task Assignment", "Real-time Collaboration", "Progress Tracking", "Resource Management"],
      href: "/project-management-pro",
      price: "$29/month",
      popular: true
    },
    {
      title: "AI CRM Pro",
      description: "Intelligent customer relationship management with predictive analytics",
      icon: <Users className="w-8 h-8 text-purple-400" />,
      features: ["AI Lead Scoring", "Automated Follow-ups", "Sales Forecasting", "Customer Insights"],
      href: "/zion-ai-crm-pro",
      price: "$39/month",
      popular: false
    },
    {
      title: "Inventory Smart",
      description: "Smart inventory management with demand forecasting and optimization",
      icon: <Package className="w-8 h-8 text-green-400" />,
      features: ["Demand Forecasting", "Auto Reordering", "Stock Optimization", "Analytics Dashboard"],
      href: "/zion-inventory-smart",
      price: "$24/month",
      popular: false
    },
    {
      title: "Financial Analytics Pro",
      description: "Advanced financial reporting and analysis with AI insights",
      icon: <BarChart3 className="w-8 h-8 text-blue-400" />,
      features: ["AI Financial Insights", "Automated Reports", "Cash Flow Analysis", "Risk Assessment"],
      href: "/ai-financial-analytics-pro",
      price: "$34/month",
      popular: false
    },
    {
      title: "Performance Monitor",
      description: "Employee performance tracking and analytics platform",
      icon: <Monitor className="w-8 h-8 text-orange-400" />,
      features: ["Performance Metrics", "Goal Tracking", "Team Analytics", "Feedback System"],
      href: "/zion-performance-monitor",
      price: "$19/month",
      popular: false
    },
    {
      title: "Email Automation",
      description: "Intelligent email marketing and automation platform",
      icon: <Mail className="w-8 h-8 text-pink-400" />,
      features: ["AI Email Templates", "Automated Campaigns", "A/B Testing", "Analytics Dashboard"],
      href: "/zion-email-automation",
      price: "$29/month",
      popular: false
    }
  ];

  const features = [
    {
      title: "AI-Powered Automation",
      description: "Leverage artificial intelligence to automate repetitive tasks and optimize workflows",
      icon: <Zap className="w-6 h-6 text-cyan-400" />
    },
    {
      title: "Enterprise Security",
      description: "Bank-level security with end-to-end encryption and compliance standards",
      icon: <Shield className="w-6 h-6 text-purple-400" />
    },
    {
      title: "Cloud Infrastructure",
      description: "Scalable cloud-based solutions that grow with your business",
      icon: <Cloud className="w-6 h-6 text-blue-400" />
    },
    {
      title: "Real-time Analytics",
      description: "Comprehensive analytics and reporting for data-driven decisions",
      icon: <BarChart3 className="w-6 h-6 text-green-400" />
    },
    {
      title: "Mobile Access",
      description: "Access your tools anywhere with our responsive mobile interface",
      icon: <Smartphone className="w-6 h-6 text-orange-400" />
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock customer support and technical assistance",
      icon: <Users className="w-6 h-6 text-pink-400" />
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      role: "CEO",
      content: "Zion's micro SAAS solutions transformed our operations. The AI-powered insights helped us increase efficiency by 40%.",
      rating: 5
    },
    {
      name: "Michael Chen",
      company: "DataFlow Solutions",
      role: "CTO",
      content: "The project management tool is incredible. It's like having a personal AI assistant for every project.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      company: "GrowthCorp",
      role: "Operations Manager",
      content: "The inventory management system saved us thousands in costs and reduced stockouts by 60%.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="Micro SAAS Solutions - Zion Tech Group"
        description="Discover our comprehensive suite of micro SAAS solutions designed to streamline your business operations with AI-powered automation and intelligent insights."
        keywords="micro SAAS, business automation, AI solutions, project management, CRM, inventory management, financial analytics"
        canonical="https://ziontechgroup.com/micro-saas"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Micro SAAS Solutions
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Streamline your business operations with our comprehensive suite of micro SAAS solutions. 
            Each tool is designed to solve specific business challenges with AI-powered automation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/demo"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              View Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Our Micro SAAS Solutions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSaasServices.map((service, index) => (
              <div
                key={index}
                className={`bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 ${
                  service.popular ? 'ring-2 ring-cyan-400/50' : ''
                }`}
              >
                {service.popular && (
                  <div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
                    Most Popular
                  </div>
                )}
                <div className="flex items-center space-x-3 mb-4">
                  {service.icon}
                  <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-white">{service.price}</span>
                  <span className="text-sm text-gray-400">per month</span>
                </div>
                <Link
                  to={service.href}
                  className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 text-center block"
                >
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Why Choose Our Micro SAAS Solutions?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <p className="text-white font-semibold">{testimonial.name}</p>
                  <p className="text-gray-400 text-sm">{testimonial.role}, {testimonial.company}</p>
=======
      title: 'AI-Powered Project Management',
      description: 'Streamline your projects with intelligent task management and automated workflows.',
      features: [
        'Smart task prioritization',
        'Automated progress tracking',
        'Team collaboration tools',
        'AI-powered insights'
      ],
      pricing: '$29/month',
      icon: <Zap className="w-8 h-8 text-blue-500" />
    },
    {
      title: 'Customer Relationship Manager',
      description: 'Build stronger relationships with AI-driven customer insights and automation.',
      features: [
        'Contact management',
        'Sales pipeline tracking',
        'Email automation',
        'Performance analytics'
      ],
      pricing: '$39/month',
      icon: <Users className="w-8 h-8 text-green-500" />
    },
    {
      title: 'Inventory Management Pro',
      description: 'Optimize your inventory with predictive analytics and automated reordering.',
      features: [
        'Real-time inventory tracking',
        'Predictive analytics',
        'Automated reordering',
        'Multi-location support'
      ],
      pricing: '$49/month',
      icon: <Shield className="w-8 h-8 text-purple-500" />
    },
    {
      title: 'Financial Analytics Dashboard',
      description: 'Get comprehensive financial insights with automated reporting and forecasting.',
      features: [
        'Real-time financial tracking',
        'Automated reporting',
        'Budget forecasting',
        'Expense categorization'
      ],
      pricing: '$59/month',
      icon: <Cloud className="w-8 h-8 text-yellow-500" />
    },
    {
      title: 'Employee Management System',
      description: 'Streamline HR processes with automated workflows and performance tracking.',
      features: [
        'Employee database',
        'Time tracking',
        'Performance reviews',
        'Payroll integration'
      ],
      pricing: '$34/month',
      icon: <Award className="w-8 h-8 text-red-500" />
    },
    {
      title: 'Social Media Scheduler',
      description: 'Manage all your social media accounts with AI-powered content optimization.',
      features: [
        'Multi-platform posting',
        'Content calendar',
        'AI content suggestions',
        'Analytics dashboard'
      ],
      pricing: '$24/month',
      icon: <Star className="w-8 h-8 text-indigo-500" />
    }
  ];

  const benefits = [
    {
      icon: <Zap className="w-6 h-6 text-blue-400" />,
      title: 'Quick Setup',
      description: 'Get up and running in minutes with our intuitive setup process.'
    },
    {
      icon: <Shield className="w-6 h-6 text-green-400" />,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security with 99.9% uptime guarantee.'
    },
    {
      icon: <Cloud className="w-6 h-6 text-purple-400" />,
      title: 'Cloud-Based',
      description: 'Access your tools from anywhere with our cloud infrastructure.'
    },
    {
      icon: <Users className="w-6 h-6 text-yellow-400" />,
      title: '24/7 Support',
      description: 'Get help when you need it with our dedicated support team.'
    }
  ];
=======
<<<<<<< HEAD
'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
<<<<<<< HEAD
'use client''
import React from 'react';
import { Helmet } from 'react-helmet-async';
"use client"
export default function Page() {return (
    <div className="min-h-screen bg-white">"
=======
export default function Page() {
=======
import React from 'react';
import { Helmet } from 'react-helmet-async';
>>>>>>> origin/main
>>>>>>> origin/main

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
>>>>>>> origin/main
      <Helmet>
<<<<<<< HEAD
        <title>Micro SaaS Solutions - Zion Tech Group</title>
        <meta name="description" content="Discover our collection of powerful micro SaaS applications designed to streamline your business operations. Affordable, scalable, and easy to use." />
      </Helmet>

      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Micro SaaS Solutions
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Powerful, affordable, and easy-to-use software solutions designed to streamline your business operations. 
            Choose from our collection of specialized micro SaaS applications.
          </p>
        </div>

        {/* Benefits Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Why Choose Our Micro SaaS?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Micro SaaS Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSaasProducts.map((product, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center mb-4">
                  {product.icon}
                  <h3 className="text-xl font-semibold text-white ml-3">{product.title}</h3>
                </div>
                
                <p className="text-gray-300 mb-4">{product.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-white">{product.pricing}</div>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors">
                    Try Free
                  </button>
>>>>>>> origin/main
                </div>
              </div>
            ))}
          </div>
        </div>

<<<<<<< HEAD
      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Start your journey with our micro SAAS solutions today and experience the power of AI-driven automation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>Get Started Now</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/demo"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              Schedule Demo
            </Link>
=======
        {/* Pricing Plans */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Simple Pricing Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Starter</h3>
              <div className="text-4xl font-bold text-white mb-6">$19<span className="text-lg text-gray-400">/month</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  1 Micro SaaS Product
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Basic Support
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Standard Features
                </li>
              </ul>
              <button className="w-full bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                Get Started
              </button>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border-2 border-blue-500 text-center relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
              <div className="text-4xl font-bold text-white mb-6">$49<span className="text-lg text-gray-400">/month</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Up to 3 Micro SaaS Products
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Priority Support
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Advanced Features
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  API Access
                </li>
              </ul>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                Get Started
              </button>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
              <div className="text-4xl font-bold text-white mb-6">$99<span className="text-lg text-gray-400">/month</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Unlimited Products
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  24/7 Premium Support
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  All Features
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Custom Integrations
                </li>
              </ul>
              <button className="w-full bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                Contact Sales
              </button>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
          <p className="text-gray-300 mb-8">
            Start with a free trial and see how our micro SaaS solutions can streamline your operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center">
              Start Free Trial
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
            <Link
              to="/contact"
              className="border border-white/30 hover:bg-white/10 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Contact Sales
            </Link>
=======
        <title>Page - Zion Tech Group</title>
<<<<<<< HEAD
        <meta name="description" content="Professional page services by Zion Tech Group." />"
      </Helmet>
      <div className="container mx-auto px-4 py-16">"
        <div className="text-center">"
          <h1 className="text-4xl font-bold text-gray-900 mb-8">"
            Page;
          </h1>
          <p className="text-xl text-gray-600 mb-8">"
            Professional page solutions tailored to your business needs.;
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">"
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">"
              <h3 className="text-lg font-semibold text-blue-900 mb-2">"
                Expert Solutions;
              </h3>
              <p className="text-blue-700">"
                Our team of experts delivers cutting-edge page solutions.;
=======
<<<<<<< HEAD
        <meta name="description" content="Professional services by Zion Tech Group." />
=======
        <meta name="description" content="Learn more about page" />
>>>>>>> origin/main
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Page</h1>
          <p className="text-gray-300 text-xl mb-8">Learn more about page</p>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-8 border border-gray-700">
              <h2 className="text-2xl font-semibold text-white mb-4">Coming Soon</h2>
              <p className="text-gray-300 mb-6">
                This page is currently under development. We're working hard to bring you the best experience.
>>>>>>> origin/main
              </p>
              <div className="flex justify-center space-x-4">
                <a 
                  href="/" 
                  className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-lg transition-colors duration-300"
                >
                  Go Home
                </a>
                <a 
                  href="/contact" 
                  className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg transition-colors duration-300"
                >
                  Contact Us
                </a>
              </div>
            </div>
<<<<<<< HEAD
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">"
              <h3 className="text-lg font-semibold text-green-900 mb-2">"
                Custom Implementation;
              </h3>
              <p className="text-green-700">"
                Tailored page implementations for your specific requirements.;
              </p>
            </div>
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">"
              <h3 className="text-lg font-semibold text-purple-900 mb-2">"
                24/7 Support;
              </h3>
              <p className="text-purple-700">"
                Round-the-clock support for all your page needs.;
              </p>
            </div>
          </div>
          <div className="mt-12">"
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">"
              Get Started Today;
            </button>
=======
>>>>>>> origin/main
>>>>>>> origin/main
>>>>>>> origin/main
          </div>
        </div>
      </div>
    </div>
<<<<<<< HEAD
=======
<<<<<<< HEAD
  )
=======
<<<<<<< HEAD
  ); }
>>>>>>> origin/main
            Page</h1>
          <p className="text-xl text-gray-600 mb-8">"
            Professional page solutions tailored to your business needs.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">"
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">"
              <h3 className="text-lg font-semibold text-blue-900 mb-2">"
                Expert Solutions</h3>
              <p className="text-blue-700">"
                Our team of experts delivers cutting-edge page solutions.</p></div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">"
              <h3 className="text-lg font-semibold text-green-900 mb-2">"
                Custom Implementation</h3>
              <p className="text-green-700">"
                Tailored page implementations for your specific requirements.</p></div>
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">"
              <h3 className="text-lg font-semibold text-purple-900 mb-2">"
                24/7 Support</h3>
              <p className="text-purple-700">"
                Round-the-clock support for all your page needs.</p></div></div>
          <div className="mt-12">"
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">"
              Get Started Today</button></div></div></div></div>
  )
            </button>
          </div>
        </div>
      </div>
    </div>
  )}
<<<<<<< HEAD
}''
=======
            </button>;
          </div>
        </div>
      </div>
    </div>
  );}
}'
=======
>>>>>>> origin/main
  );
<<<<<<< HEAD
};

<<<<<<< HEAD
export default MicroSaasPage;
=======
export default MicroSaasPage;
=======
<<<<<<< HEAD
}
  );
=======
}
>>>>>>> origin/main
>>>>>>> origin/main
>>>>>>> origin/main
>>>>>>> origin/main
>>>>>>> origin/main
