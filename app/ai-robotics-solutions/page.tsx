import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, Zap, Shield, Globe, Cloud, Database, Smartphone, Brain, Cpu, Wifi, Star, Sparkles, Rocket, Bot, Eye, Navigation, Wrench, Factory } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function AIRoboticsSolutionsPage() {
  const features = [
    {
      icon: <Bot className="w-8 h-8 text-cyan-400" />,
      title: 'Autonomous Robots',
      description: 'AI-powered autonomous robots for various applications with advanced navigation and decision-making capabilities.',
      benefits: ['Service Robots - $25,000/unit', 'Navigation Systems - $8,000/setup', 'Object Recognition - $5,000/month', 'Path Planning - $3,000/implementation']
    },
    {
      icon: <Wrench className="w-8 h-8 text-purple-400" />,
      title: 'Robotic Process Automation',
      description: 'Intelligent automation of repetitive tasks with robotic arms and AI-powered decision making.',
      benefits: ['Industrial Arms - $50,000/unit', 'Task Automation - $15,000/setup', 'Quality Control - $10,000/month', 'Assembly Lines - $30,000/implementation']
    },
    {
      icon: <Eye className="w-8 h-8 text-green-400" />,
      title: 'Computer Vision Integration',
      description: 'Advanced computer vision systems for object detection, tracking, and recognition in robotics.',
      benefits: ['Vision Systems - $12,000/setup', 'Object Detection - $8,000/month', 'Quality Inspection - $15,000/implementation', 'Real-time Tracking - $6,000/month']
    },
    {
      icon: <Navigation className="w-8 h-8 text-orange-400" />,
      title: 'Autonomous Navigation',
      description: 'AI-powered navigation systems for mobile robots with obstacle avoidance and path optimization.',
      benefits: ['SLAM Technology - $20,000/setup', 'Obstacle Avoidance - $8,000/implementation', 'Route Optimization - $5,000/month', 'Multi-robot Coordination - $15,000/setup']
    },
    {
      icon: <Wrench className="w-8 h-8 text-pink-400" />,
      title: 'Maintenance Robots',
      description: 'Specialized robots for inspection, maintenance, and repair tasks in challenging environments.',
      benefits: ['Inspection Robots - $35,000/unit', 'Maintenance Automation - $20,000/setup', 'Predictive Maintenance - $12,000/month', 'Remote Operation - $8,000/implementation']
    },
    {
      icon: <Factory className="w-8 h-8 text-blue-400" />,
      title: 'Manufacturing Robotics',
      description: 'Complete robotic solutions for manufacturing with AI-powered optimization and quality control.',
      benefits: ['Production Lines - $100,000/setup', 'Quality Control - $25,000/implementation', 'Material Handling - $30,000/setup', 'Process Optimization - $15,000/month']
    }
  ]

  const applications = [
    {
      title: 'Healthcare Robotics',
      description: 'Surgical robots, rehabilitation devices, and patient care automation.',
      icon: <Bot className="w-6 h-6" />,
      price: 'Starting at $150,000',
      features: ['Surgical Assistance', 'Rehabilitation', 'Patient Monitoring', 'Medication Delivery']
    },
    {
      title: 'Warehouse Automation',
      description: 'Automated storage and retrieval systems with intelligent inventory management.',
      icon: <Factory className="w-6 h-6" />,
      price: 'Starting at $200,000',
      features: ['Automated Picking', 'Inventory Management', 'Sorting Systems', 'Fleet Management']
    },
    {
      title: 'Agricultural Robotics',
      description: 'Autonomous farming equipment and crop monitoring robots.',
      icon: <Globe className="w-6 h-6" />,
      price: 'Starting at $80,000',
      features: ['Crop Monitoring', 'Precision Farming', 'Harvesting Automation', 'Soil Analysis']
    },
    {
      title: 'Service Robotics',
      description: 'Customer service robots and hospitality automation solutions.',
      icon: <Star className="w-6 h-6" />,
      price: 'Starting at $40,000',
      features: ['Customer Service', 'Cleaning Robots', 'Security Patrol', 'Delivery Systems']
    }
  ]

  const technologies = [
    'ROS (Robot Operating System)',
    'Machine Learning',
    'Computer Vision',
    'SLAM (Simultaneous Localization and Mapping)',
    'Path Planning Algorithms',
    'Sensor Fusion',
    'Real-time Control',
    'Human-Robot Interaction'
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Robotics Solutions - Zion Tech Group</title>
        <meta name="description" content="Advanced robotics solutions powered by AI. Autonomous robots, robotic process automation, computer vision, and manufacturing robotics." />
        <meta name="keywords" content="robotics solutions, autonomous robots, RPA, computer vision, manufacturing robotics, AI robotics" />
      </Helmet>
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.2)_50%,transparent_75%,transparent_100%)] bg-[length:60px_60px] animate-pulse"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 mb-6">
              <Bot className="w-4 h-4 text-blue-400 mr-2" />
              <span className="text-blue-300 text-sm font-medium">Intelligent Robotics</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              AI-Powered <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent animate-pulse">Robotics Solutions</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto mb-8 px-4 leading-relaxed">
              Build the future with intelligent robots powered by AI. From autonomous navigation to manufacturing automation, 
              our robotics solutions combine cutting-edge AI with advanced mechanical engineering.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="group bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25"
              >
                Start Robotics Project
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/ai-services" 
                className="group border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm"
              >
                Explore AI Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Robotics <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Solutions</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
              Comprehensive robotics development services enhanced with AI capabilities
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-20">
            {features.map((feature, index) => (
              <div key={index} className="group">
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-blue-400/50 transition-all duration-300 group-hover:bg-white/15 group-hover:shadow-2xl group-hover:shadow-blue-500/20 transform group-hover:scale-105">
                  <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                    <div className="p-4 rounded-xl bg-gradient-to-r from-blue-500/20 to-cyan-500/20 inline-block">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-blue-300 transition-colors">{feature.title}</h3>
                  <p className="text-gray-300 mb-6 group-hover:text-white transition-colors">{feature.description}</p>
                  <ul className="space-y-2 mb-6">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300 group-hover:text-white transition-colors">
                        <CheckCircle className="w-4 h-4 text-emerald-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Industry <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Applications</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
              Robotics solutions tailored for various industries and applications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {applications.map((application, index) => (
              <div key={index} className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20">
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 mr-4">
                    {application.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{application.title}</h3>
                    <p className="text-cyan-400 font-medium">{application.price}</p>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed mb-4">{application.description}</p>
                <div className="grid grid-cols-2 gap-2">
                  {application.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-lg p-2 text-center">
                      <span className="text-white text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Technologies Section */}
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Technologies We Use</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {technologies.map((tech, index) => (
                <div key={index} className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-lg p-4 text-center">
                  <span className="text-white font-medium">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-blue-600 via-cyan-600 to-purple-600 rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.3),transparent_50%)]"></div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.3),transparent_50%)]"></div>
              
              <div className="relative">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 px-4">
                  Ready to Build the Future?
                </h2>
                <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-3xl mx-auto px-4">
                  Transform your business with intelligent robotics solutions. Get started with a free robotics consultation and prototype.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/contact" 
                    className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                  >
                    Get Robotics Consultation
                  </Link>
                  <Link 
                    to="/ai-services" 
                    className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                  >
                    View All AI Services
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}