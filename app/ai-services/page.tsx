"use client"
import React from "react"
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { Brain, Zap, Target, BarChart, CheckCircle, ArrowRight } from 'lucide-react'

export default function AIServicesPage() {
  const services = [
    {
      title: "Machine Learning Solutions",
      description: "Custom ML models tailored to your business needs with advanced algorithms and data processing capabilities.",
      icon: Brain,
      features: [
        "Predictive Analytics",
        "Pattern Recognition",
        "Automated Decision Making",
        "Real-time Processing"
      ],
      price: "Starting at $5,000/month"
    },
    {
      title: "Natural Language Processing",
      description: "Advanced NLP solutions for text analysis, chatbots, and language understanding applications.",
      icon: Zap,
      features: [
        "Sentiment Analysis",
        "Language Translation",
        "Chatbot Development",
        "Text Summarization"
      ],
      price: "Starting at $3,000/month"
    },
    {
      title: "Computer Vision",
      description: "Image and video analysis solutions for automation, quality control, and visual recognition tasks.",
      icon: Target,
      features: [
        "Object Detection",
        "Image Classification",
        "Facial Recognition",
        "Quality Control"
      ],
      price: "Starting at $4,000/month"
    },
    {
      title: "Business Intelligence",
      description: "AI-powered analytics and reporting tools to transform your data into actionable business insights.",
      icon: BarChart,
      features: [
        "Data Visualization",
        "Predictive Modeling",
        "Automated Reporting",
        "Performance Analytics"
      ],
      price: "Starting at $2,500/month"
    }
  ]

  const benefits = [
    "Reduce operational costs by up to 40%",
    "Increase efficiency and productivity",
    "Improve decision-making with data insights",
    "Automate repetitive tasks",
    "Scale operations without proportional staff increases"
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-blue-600/20"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-600">AI Services</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Transform your business with cutting-edge artificial intelligence solutions. 
            From machine learning to natural language processing, we deliver AI that works.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
              View Pricing
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our AI Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive AI services designed to solve real business challenges.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-lg mb-6">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                      <CheckCircle className="h-5 w-5 text-emerald-500 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-lg font-semibold text-emerald-600 mb-4">{service.price}</div>
                <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our AI Services?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our proven approach delivers measurable results for businesses of all sizes.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-emerald-500 mt-1 flex-shrink-0" />
                <p className="text-gray-700 text-lg">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Implement AI in Your Business?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let&apos;s discuss how our AI solutions can transform your operations and drive growth.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center mx-auto">
            Start Your AI Journey
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </section>
      
      <Footer />
    </div>
  )
}