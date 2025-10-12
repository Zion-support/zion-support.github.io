import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, Bot, Cpu, Zap, Shield, BarChart3, Users, Globe } from 'lucide-react'

export default function RoboticsPage() {
  const features = [
    {
      icon: <Bot className="w-8 h-8 text-blue-500" />,
      title: 'Autonomous Robotics',
      description: 'Advanced autonomous robotic systems for industrial automation and smart manufacturing.'
    },
    {
      icon: <Cpu className="w-8 h-8 text-green-500" />,
      title: 'AI-Powered Control',
      description: 'Intelligent control systems powered by machine learning and computer vision.'
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: 'High Performance',
      description: 'High-speed, precision robotics with real-time processing and response capabilities.'
    },
    {
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: 'Safety Systems',
      description: 'Advanced safety protocols and fail-safe mechanisms for secure robotic operations.'
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-purple-500" />,
      title: 'Analytics & Monitoring',
      description: 'Real-time monitoring and analytics for robotic performance optimization.'
    },
    {
      icon: <Users className="w-8 h-8 text-indigo-500" />,
      title: 'Human-Robot Collaboration',
      description: 'Safe and efficient human-robot collaboration systems for enhanced productivity.'
    }
  ]

  const pricingPlans = [
    {
      name: 'Robotics Assessment',
      price: '$10,000',
      period: 'one-time',
      description: 'Comprehensive robotics feasibility study',
      features: [
        'Current process analysis',
        'Robotics opportunity assessment',
        'ROI calculations',
        'Implementation roadmap',
        'Technology recommendations',
        'Cost-benefit analysis'
      ],
      popular: false
    },
    {
      name: 'Robotics Implementation',
      price: '$100,000',
      period: 'one-time',
      description: 'Complete robotics system implementation',
      features: [
        'Custom robot design',
        'System integration',
        'Safety implementation',
        'Staff training',
        '6-month support',
        'Performance monitoring',
        'Maintenance planning',
        'Documentation'
      ],
      popular: true
    },
    {
      name: 'Robotics as a Service',
      price: '$15,000',
      period: '/month',
      description: 'Managed robotics solutions',
      features: [
        'Robot leasing options',
        'Maintenance & support',
        'Performance optimization',
        'Regular updates',
        '24/7 monitoring',
        'Scalable solutions',
        'Flexible contracts',
        'Technology upgrades'
      ],
      popular: false
    }
  ]

  const roboticsServices = [
    'Industrial Automation',
    'Service Robotics',
    'Medical Robotics',
    'Agricultural Robotics',
    'Logistics Automation',
    'Quality Inspection',
    'Assembly Line Robotics',
    'Maintenance Robotics'
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Robotics Solutions - Zion Tech Group | Advanced Robotic Systems</title>
        <meta name="description" content="Cutting-edge robotics solutions for industrial automation, AI-powered control systems, and autonomous robotic applications." />
        <meta name="keywords" content="robotics, industrial automation, autonomous robots, AI robotics, robotic systems, manufacturing automation" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              Robotics Solutions
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Advanced robotics solutions powered by AI and machine learning. 
              Transform your operations with intelligent, autonomous robotic systems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/demo"
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                View Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Advanced Robotics Technology
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Cutting-edge robotics solutions for modern industrial applications
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Robotics Solutions Packages
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Flexible robotics solutions tailored to your automation needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 border-2 transition-all duration-300 ${
                plan.popular 
                  ? 'border-purple-500 bg-gradient-to-br from-purple-500/20 to-blue-500/20' 
                  : 'border-white/20 hover:border-white/40'
              }`}>
                {plan.popular && (
                  <div className="bg-gradient-to-r from-purple-500 to-blue-600 text-white text-sm font-semibold px-4 py-2 rounded-full text-center mb-6">
                    Most Popular
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-300 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-300 mt-2">{plan.description}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`block w-full text-center py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-500 to-blue-600 text-white hover:from-purple-600 hover:to-blue-700'
                      : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 lg:p-12 border border-white/20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Robotics Applications
              </h2>
              <p className="text-xl text-gray-300">
                Diverse robotics solutions for various industries and applications
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {roboticsServices.map((service, index) => (
                <div key={index} className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-sm">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-6 sm:p-8 lg:p-12 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Automate with Robotics?
            </h2>
            <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Transform your operations with our advanced robotics solutions and AI-powered automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300"
              >
                Get Started Today
              </Link>
              <Link
                to="/it-services"
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300"
              >
                View All IT Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}