'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe, Cpu, Bot, Wrench } from 'lucide-react'

const RoboticsPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Robotics',
      description: 'Advanced AI algorithms integrated into robotic systems for intelligent automation and decision-making'
    },
    {
      icon: Cpu,
      title: 'Smart Processing',
      description: 'High-performance computing capabilities for real-time robotic control and data processing'
    },
    {
      icon: Shield,
      title: 'Safety First',
      description: 'Comprehensive safety protocols and fail-safe mechanisms for secure robotic operations'
    },
    {
      icon: Bot,
      title: 'Autonomous Systems',
      description: 'Self-learning robotic systems that adapt and improve performance over time'
    }
  ]

  const benefits = [
    'Increased operational efficiency and productivity',
    'Reduced human error and improved accuracy',
    '24/7 continuous operation capabilities',
    'Cost-effective automation solutions',
    'Scalable robotic systems for any industry',
    'Advanced sensor integration and monitoring',
    'Easy maintenance and remote diagnostics',
    'Compliance with industry safety standards'
  ]

  const services = [
    {
      title: 'Industrial Robotics',
      description: 'Automated manufacturing and assembly line solutions',
      features: ['Precision assembly', 'Quality control', 'Material handling', 'Welding automation']
    },
    {
      title: 'Service Robotics',
      description: 'Customer service and hospitality robotic solutions',
      features: ['Reception assistance', 'Cleaning automation', 'Security patrol', 'Delivery services']
    },
    {
      title: 'Medical Robotics',
      description: 'Healthcare and surgical robotic systems',
      features: ['Surgical assistance', 'Rehabilitation therapy', 'Patient monitoring', 'Laboratory automation']
    },
    {
      title: 'Agricultural Robotics',
      description: 'Farming and agricultural automation solutions',
      features: ['Crop monitoring', 'Precision planting', 'Harvest automation', 'Livestock management']
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Robotics Solutions | Zion Tech Group</title>
        <meta name="description" content="Advanced robotics solutions by Zion Tech Group. AI-powered robotic systems for industrial, service, medical, and agricultural applications." />
        <meta name="keywords" content="robotics, AI robotics, industrial automation, service robots, medical robotics, agricultural robots, Zion Tech Group" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Advanced <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Robotics Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your operations with cutting-edge AI-powered robotic systems. 
              From industrial automation to service robotics, we deliver intelligent solutions for every industry.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center">
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="border border-white/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Robotics Solutions?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our robotics systems combine advanced AI, cutting-edge hardware, and proven engineering to deliver exceptional results.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Robotics Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive robotic solutions tailored to your specific industry needs and requirements.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <h3 className="text-2xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Transform Your Business with Robotics
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Our robotics solutions deliver measurable improvements in efficiency, accuracy, and cost-effectiveness across all industries.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <CheckCircle className="w-6 h-6 text-green-400 mr-4 flex-shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl p-8 border border-white/10">
              <div className="text-center">
                <Wrench className="w-16 h-16 text-purple-400 mx-auto mb-4" />
                <h3 className="text-2xl font-semibold text-white mb-4">Ready to Automate?</h3>
                <p className="text-gray-300 mb-6">
                  Contact our robotics experts to discuss your automation needs and discover how our solutions can transform your operations.
                </p>
                <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300">
                  Schedule Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Revolutionize Your Operations?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join hundreds of companies already using our robotics solutions to improve efficiency, reduce costs, and enhance productivity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
              Start Your Robotics Journey
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button className="border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
              View Case Studies
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default RoboticsPage