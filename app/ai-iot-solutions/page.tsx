import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, Zap, Shield, Globe, Cloud, Database, Smartphone, Brain, Cpu, Wifi, Star, Sparkles, Rocket, Wifi as IoTIcon, Home, Car, Factory, Heart, TreePine, Camera } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function AIIoTSolutionsPage() {
  const features = [
    {
      icon: <IoTIcon className="w-8 h-8 text-cyan-400" />,
      title: 'Smart Device Integration',
      description: 'Connect and manage thousands of IoT devices with AI-powered analytics and automation.',
      benefits: ['Device Management - $2,000/month', 'Real-time Monitoring - $1,500/month', 'Predictive Maintenance - $3,000/setup', 'Data Analytics - $2,500/month']
    },
    {
      icon: <Home className="w-8 h-8 text-purple-400" />,
      title: 'Smart Home Solutions',
      description: 'Complete smart home automation with AI-driven energy optimization and security.',
      benefits: ['Home Automation - $5,000/setup', 'Energy Management - $200/month', 'Security Systems - $3,000/installation', 'Voice Control - $1,000/setup']
    },
    {
      icon: <Factory className="w-8 h-8 text-green-400" />,
      title: 'Industrial IoT',
      description: 'Manufacturing optimization with AI-powered predictive analytics and quality control.',
      benefits: ['Production Monitoring - $8,000/month', 'Quality Control - $5,000/setup', 'Asset Tracking - $3,000/month', 'Supply Chain - $6,000/implementation']
    },
    {
      icon: <Car className="w-8 h-8 text-orange-400" />,
      title: 'Connected Vehicles',
      description: 'Fleet management and autonomous vehicle integration with AI-powered route optimization.',
      benefits: ['Fleet Tracking - $15/vehicle/month', 'Route Optimization - $2,000/month', 'Predictive Maintenance - $5,000/setup', 'Driver Analytics - $1,500/month']
    },
    {
      icon: <Heart className="w-8 h-8 text-pink-400" />,
      title: 'Healthcare IoT',
      description: 'Medical device integration and patient monitoring with AI-powered health analytics.',
      benefits: ['Patient Monitoring - $10,000/setup', 'Medical Device Integration - $15,000/project', 'Health Analytics - $3,000/month', 'Emergency Response - $5,000/implementation']
    },
    {
      icon: <TreePine className="w-8 h-8 text-blue-400" />,
      title: 'Environmental Monitoring',
      description: 'Smart environmental sensors with AI-powered climate and pollution monitoring.',
      benefits: ['Air Quality Monitoring - $2,000/setup', 'Water Quality - $3,000/installation', 'Climate Tracking - $1,500/month', 'Pollution Alerts - $800/month']
    }
  ]

  const industries = [
    {
      title: 'Smart Cities',
      description: 'Comprehensive IoT solutions for urban infrastructure and citizen services.',
      icon: <Globe className="w-6 h-6" />,
      price: 'Starting at $100,000',
      features: ['Traffic Management', 'Waste Management', 'Public Safety', 'Energy Grid']
    },
    {
      title: 'Manufacturing',
      description: 'Industrial IoT for smart factories and production optimization.',
      icon: <Factory className="w-6 h-6" />,
      price: 'Starting at $75,000',
      features: ['Production Monitoring', 'Quality Control', 'Predictive Maintenance', 'Supply Chain']
    },
    {
      title: 'Healthcare',
      description: 'Medical IoT solutions for patient care and hospital management.',
      icon: <Heart className="w-6 h-6" />,
      price: 'Starting at $120,000',
      features: ['Patient Monitoring', 'Medical Devices', 'Health Analytics', 'Emergency Response']
    },
    {
      title: 'Agriculture',
      description: 'Smart farming solutions with precision agriculture and crop monitoring.',
      icon: <TreePine className="w-6 h-6" />,
      price: 'Starting at $50,000',
      features: ['Crop Monitoring', 'Soil Analysis', 'Irrigation Control', 'Livestock Tracking']
    }
  ]

  const technologies = [
    'MQTT & CoAP Protocols',
    'Edge Computing',
    'Machine Learning',
    'Computer Vision',
    '5G Connectivity',
    'Cloud Platforms',
    'Real-time Analytics',
    'Security & Encryption'
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI IoT Solutions - Zion Tech Group</title>
        <meta name="description" content="Intelligent IoT solutions powered by AI. Smart devices, industrial automation, connected vehicles, and environmental monitoring." />
        <meta name="keywords" content="IoT solutions, smart devices, industrial IoT, connected vehicles, smart home, environmental monitoring, AI IoT" />
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
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 mb-6">
              <IoTIcon className="w-4 h-4 text-orange-400 mr-2" />
              <span className="text-orange-300 text-sm font-medium">Intelligent Internet of Things</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              AI-Powered <span className="bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent animate-pulse">IoT Solutions</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto mb-8 px-4 leading-relaxed">
              Connect, monitor, and optimize your world with intelligent IoT solutions. From smart homes to industrial automation, 
              our AI-powered IoT platform transforms data into actionable insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="group bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-orange-600 hover:to-red-700 transition-all duration-300 flex items-center justify-center transform hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/25"
              >
                Start IoT Project
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
              IoT <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">Solutions</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
              Comprehensive IoT development services enhanced with AI capabilities
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-20">
            {features.map((feature, index) => (
              <div key={index} className="group">
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-orange-400/50 transition-all duration-300 group-hover:bg-white/15 group-hover:shadow-2xl group-hover:shadow-orange-500/20 transform group-hover:scale-105">
                  <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                    <div className="p-4 rounded-xl bg-gradient-to-r from-orange-500/20 to-red-500/20 inline-block">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-orange-300 transition-colors">{feature.title}</h3>
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

      {/* Industries Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Industry <span className="bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">Applications</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
              IoT solutions tailored for various industries and use cases
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {industries.map((industry, index) => (
              <div key={index} className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-red-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/20">
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-full bg-gradient-to-r from-red-500/20 to-pink-500/20 mr-4">
                    {industry.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{industry.title}</h3>
                    <p className="text-red-400 font-medium">{industry.price}</p>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed mb-4">{industry.description}</p>
                <div className="grid grid-cols-2 gap-2">
                  {industry.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="bg-gradient-to-r from-red-500/10 to-pink-500/10 rounded-lg p-2 text-center">
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
                <div key={index} className="bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-lg p-4 text-center">
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
            <div className="bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.3),transparent_50%)]"></div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(249,115,22,0.3),transparent_50%)]"></div>
              
              <div className="relative">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 px-4">
                  Ready to Connect Everything?
                </h2>
                <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-3xl mx-auto px-4">
                  Transform your business with intelligent IoT solutions. Get started with a free IoT consultation and prototype.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/contact" 
                    className="bg-white text-orange-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                  >
                    Get IoT Consultation
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