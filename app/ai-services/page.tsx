<<<<<<< HEAD
<<<<<<<< HEAD:app/ai-services/page.tsx
"use client";
import React from "react";
import { Brain, Zap, Target, BarChart, CheckCircle, ArrowRight } from "lucide-react";
const AIServicesPage: React.FC = () => {
  const services = [
  {
      icon: Brain,
    title: "Machine Learning Solutions",
      description: "Custom ML models tailored to your business needs",
    features: [
        "Predictive Analytics",
        "Pattern Recognition",
        "Automated Decision Making",
    "Real-time Processing"
      ],
      price: "Starting at $5,000"
},
  {
    icon: Zap,
    title: "AI Automation",
      description: "Streamline operations with intelligent automation",
    features: [
        "Process Automation",
        "Workflow Optimization",
        "Intelligent Routing",
    "Error Reduction"
      ],
      price: "Starting at $3,000"
},
  {
    icon: Target,
    title: "Natural Language Processing",
      description: "Understand and process human language at scale",
    features: [
        "Text Analysis",
        "Sentiment Analysis",
        "Language Translation",
    "Chatbot Development"
      ],
      price: "Starting at $4,000"
},
  {
    icon: BarChart,
    title: "Computer Vision",
      description: "Extract insights from images and videos",
    features: [
        "Image Recognition",
        "Object Detection",
        "Video Analysis",
    "Quality Control"
      ],
      price: "Starting at $6,000"
    }
  ]
  const process = [
    {
      step: "1",
      title: "Discovery & Analysis",
      description: "We analyze your business needs and data to understand the best AI approach."
    },
    {
      step: "2",
      title: "Solution Design",
      description: "Our team designs a custom AI solution tailored to your specific requirements."
    },
    {
      step: "3",
      title: "Development & Training",
      description: "We develop and train your AI models using the latest technologies and best practices."
    },
    {
      step: "4",
      title: "Integration & Deployment",
      description: "We integrate the solution into your existing systems and deploy it securely."
    },
    {
      step: "5",
    title: "Monitoring & Optimization",
    description: "We continuously monitor performance and optimize the solution for better results."}
  ]
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-blue-600/20"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md: text-6xl font-bold text-gray-900 mb-6">
            AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-600">Services</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Transform your business with cutting-edge artificial intelligence solutions designed to drive growth and efficiency.
          </p>
          <div className="flex flex-col sm: flex-row gap-4 justify-center">
            <button className="bg-emerald-600 hover: bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="border border-emerald-400 text-emerald-400 hover: bg-emerald-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
              View Case Studies
            </button>
          </div>
        </div>
      </section>
      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md: text-4xl font-bold text-gray-900 mb-4">
              Our AI Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive AI services to solve your most complex business challenges.
            </p>
          </div>
          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover: shadow-xl transition-shadow duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-lg mb-4">
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-4">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-emerald-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-emerald-600 font-semibold mb-4">{service.price}</div>
                <button className="w-full bg-emerald-600 hover: bg-emerald-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200">
                  Learn More
                </button>
=======
import React from 'react';
import Link from 'next/link';
import { Brain, ArrowRight, CheckCircle } from 'lucide-react';

export default function AIServicesPage() {
  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'Feature 1',
      description: 'Description of the first key feature.',
      benefits: ['Benefit 1', 'Benefit 2', 'Benefit 3', 'Benefit 4']
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'Feature 2',
      description: 'Description of the second key feature.',
      benefits: ['Benefit 1', 'Benefit 2', 'Benefit 3', 'Benefit 4']
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'Feature 3',
      description: 'Description of the third key feature.',
      benefits: ['Benefit 1', 'Benefit 2', 'Benefit 3', 'Benefit 4']
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'Feature 4',
      description: 'Description of the fourth key feature.',
      benefits: ['Benefit 1', 'Benefit 2', 'Benefit 3', 'Benefit 4']
    }
  ];

  const stats = [
    { number: '95%', label: 'Success Rate' },
    { number: '80%', label: 'Efficiency Gain' },
    { number: '1000+', label: 'Projects Completed' },
    { number: '99.9%', label: 'Uptime Guarantee' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            AI Services
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Comprehensive AI solutions for your business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              href="/demo"
              className="border border-gray-300 text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              View Demo
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Key Features</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="text-blue-400 mr-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
>>>>>>> origin/main
              </div>
            ))}
          </div>
        </div>
<<<<<<< HEAD
      </section>
      {/* Process Section */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md: text-4xl font-bold text-gray-900 mb-4">
              Our Process
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A proven methodology for delivering successful AI solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 md: grid-cols-5 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md: text-4xl font-bold text-gray-900 mb-4">
            Ready to Harness the Power of AI?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let&apos;s discuss how our AI solutions can transform your business operations.
          </p>
          <div className="flex flex-col sm: flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-emerald-600 hover: bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center"
            >
              Start Your AI Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="/about"
              className="border border-emerald-400 text-emerald-400 hover: bg-emerald-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200"
            >
              Learn More About Us
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
export default AIServicesPage
========
import React from "react""
import { Brain, Zap, Target, BarChart, CheckCircle, ArrowRight } from "lucide-react""
"use client""
    "title": "Machine Learning Solutions"",
      "description": "Custom ML models tailored to your business needs"",
        "Predictive Analytics""
        "Pattern Recognition""
        "Automated Decision Making""
    "Real-time Processing""
      "price": "Starting at $5,000""
    "title": "AI Automation"",
      "description": "Streamline operations with intelligent automation"",
        "Process Automation""
        "Workflow Optimization""
        "Intelligent Routing""
    "Error Reduction""
      "price": "Starting at $3,000""
    "title": "Natural Language Processing"",
      "description": "Understand and process human language at scale"",
        "Text Analysis""
        "Sentiment Analysis""
        "Language Translation""
    "Chatbot Development""
      "price": "Starting at $4,000""
    "title": "Computer Vision"",
      "description": "Extract insights from images and videos"",
        "Image Recognition""
        "Object Detection""
        "Video Analysis""
    "Quality Control""
      "price": "Starting at $6,000""
      "step": "1"",
    "title": "Discovery & Analysis"",
      "description": "We analyze your business needs and data to understand the best AI approach."",
      "step": "2"",
    "title": "Solution Design"",
      "description": "Our team designs a custom AI solution tailored to your specific requirements."",
      "step": "3"",
    "title": "Development & Training"",
      "description": "We develop and train your AI models using the latest technologies and best practices."",
      "step": "4"",
    "title": "Integration & Deployment"",
      "description": "We integrate the solution into your existing systems and deploy it securely."",
      "step": "5"",
    "title": "Monitoring & Optimization"",
    "description": "We continuously monitor performance and optimize the solution for better results."",
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50""
      <section className="relative py-20 px-4 overflow-hidden""
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-blue-600/20""
        <div className="relative max-w-7xl mx-auto text-center""
          <h1 className="text-4xl "md": text-6xl font-bold text-gray-900 mb-6"",
            AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-600""
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto""
          <div className="flex flex-col "sm": flex-row gap-4 justify-center"",
            <button className="bg-emerald-600 "hover": bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center"",
              <ArrowRight className="ml-2 h-5 w-5""
            <button className="border border-emerald-400 text-emerald-400 "hover": bg-emerald-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200"",
      <section className="py-20 px-4""
        <div className="max-w-7xl mx-auto""
          <div className="text-center mb-16""
            <h2 className="text-3xl "md": text-4xl font-bold text-gray-900 mb-4"",
            <p className="text-xl text-gray-600 max-w-2xl mx-auto""
          <div className="grid grid-cols-1 "md": grid-cols-2 lg:grid-cols-4 gap-8"",
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg "hover": shadow-xl transition-shadow duration-300"",
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-lg mb-4""
                  <service.icon className="h-6 w-6 text-white""
                <h3 className="text-xl font-semibold text-gray-900 mb-2""
                <p className="text-gray-600 mb-4""
                <ul className="space-y-2 mb-4""
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600""
                      <CheckCircle className="h-4 w-4 text-emerald-500 mr-2""
                <div className="text-emerald-600 font-semibold mb-4""
                <button className="w-full bg-emerald-600 "hover": bg-emerald-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200"",
      <section className="py-20 px-4 bg-white/5""
        <div className="max-w-7xl mx-auto""
          <div className="text-center mb-16""
            <h2 className="text-3xl "md": text-4xl font-bold text-gray-900 mb-4"",
            <p className="text-xl text-gray-600 max-w-2xl mx-auto""
          <div className="grid grid-cols-1 "md": grid-cols-5 gap-8"",
              <div key={index} className="text-center""
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4""
                <h3 className="text-lg font-semibold text-gray-900 mb-2""
                <p className="text-gray-600 text-sm""
      <section className="py-20 px-4""
        <div className="max-w-4xl mx-auto text-center""
          <h2 className="text-3xl "md": text-4xl font-bold text-gray-900 mb-4"",
          <p className="text-xl text-gray-600 mb-8""
          <div className="flex flex-col "sm": flex-row gap-4 justify-center"",
              href="/contact""
              className="bg-emerald-600 "hover": bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center"",
              <ArrowRight className="ml-2 h-5 w-5""
              href="/about"";
              className="border border-emerald-400 text-emerald-400 "hover": bg-emerald-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200""
>>>>>>>> origin/main:app-backup/ai-services/page.tsx
=======

        <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-8">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-gray-300 mb-6">Contact us today to learn more about our solutions.</p>
          <Link
            href="/contact"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center"
          >
            Get Started Now
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
>>>>>>> origin/main
