'use client'
import React from 'react'
import SEOHead from '../components/SEOHead'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, ArrowRight, Bot, Cpu, Zap, Shield, Users, BarChart3, Cloud, Database, Globe, Target } from 'lucide-react'

const RoboticsPage: React.FC = () => {
  const solutions = [
    {
      icon: <Bot className="w-8 h-8 text-blue-500" />,
      title: 'Industrial Robotics',
      description: 'Advanced industrial robotics solutions for manufacturing and automation.',
      features: ['Automated Assembly', 'Quality Control', 'Material Handling', 'Process Optimization'],
      price: 'Starting at $299/hour'
    },
    {
      icon: <Cpu className="w-8 h-8 text-green-500" />,
      title: 'AI-Powered Robots',
      description: 'Intelligent robots with AI capabilities for complex tasks.',
      features: ['Machine Learning', 'Computer Vision', 'Natural Language Processing', 'Autonomous Navigation'],
      price: 'Starting at $399/hour'
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: 'Service Robotics',
      description: 'Robots designed for customer service and support applications.',
      features: ['Customer Interaction', 'Information Retrieval', 'Task Automation', '24/7 Availability'],
      price: 'Starting at $249/hour'
    },
    {
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: 'Security Robotics',
      description: 'Robotic security solutions for surveillance and protection.',
      features: ['Patrol Systems', 'Threat Detection', 'Emergency Response', 'Remote Monitoring'],
      price: 'Starting at $349/hour'
    },
    {
      icon: <Users className="w-8 h-8 text-purple-500" />,
      title: 'Healthcare Robotics',
      description: 'Medical robots for surgery, rehabilitation, and patient care.',
      features: ['Surgical Assistance', 'Rehabilitation Support', 'Patient Monitoring', 'Medication Management'],
      price: 'Starting at $499/hour'
    },
    {
      icon: <Globe className="w-8 h-8 text-cyan-500" />,
      title: 'Agricultural Robotics',
      description: 'Farming robots for precision agriculture and crop management.',
      features: ['Crop Monitoring', 'Automated Harvesting', 'Soil Analysis', 'Pest Control'],
      price: 'Starting at $199/hour'
    }
  ]

  const benefits = [
    {
      icon: <Target className="w-6 h-6 text-green-500" />,
      title: 'Increased Efficiency',
      description: 'Improve operational efficiency by up to 70% with robotic automation'
    },
    {
      icon: <Shield className="w-6 h-6 text-blue-500" />,
      title: 'Enhanced Safety',
      description: 'Reduce workplace accidents and improve safety standards'
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-purple-500" />,
      title: 'Better Quality',
      description: 'Achieve consistent, high-quality results with precision robotics'
    },
    {
      icon: <Users className="w-6 h-6 text-orange-500" />,
      title: 'Cost Reduction',
      description: 'Reduce operational costs by up to 50% with robotic solutions'
    }
  ]

  const applications = [
    'Manufacturing', 'Healthcare', 'Agriculture', 'Logistics', 'Security', 'Retail', 'Construction', 'Education'
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOHead 
        title="Robotics Solutions - Zion Tech Group"
        description="Advanced robotics solutions including industrial automation, AI-powered robots, and service robotics. Transform your business with cutting-edge robotic technology."
        keywords="robotics, industrial automation, AI robots, service robotics, robotic solutions, automation, Zion Tech Group"
      />
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Robotics <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Solutions</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your business with advanced robotics solutions. From industrial automation to AI-powered robots, 
            we deliver cutting-edge robotic technology for modern enterprises.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#solutions" 
              className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center"
            >
              Explore Solutions
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a 
              href="/contact" 
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              Get Started
            </a>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Robotics Solutions?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our robotics solutions are designed to improve efficiency, safety, and productivity across industries.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center mb-4">
                  {benefit.icon}
                  <h3 className="text-lg font-semibold text-white ml-3">{benefit.title}</h3>
                </div>
                <p className="text-gray-300 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Robotics Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive robotics solutions designed to meet the specific needs of your industry.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center mb-4">
                  {solution.icon}
                  <h3 className="text-xl font-semibold text-white ml-3">{solution.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{solution.description}</p>
                <ul className="space-y-2 mb-6">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between">
                  <span className="text-white font-semibold">{solution.price}</span>
                  <a 
                    href="/contact" 
                    className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our robotics solutions are used across various industries to improve efficiency and productivity.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {applications.map((application, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 hover:bg-white/20 transition-all duration-300 text-center">
                <p className="text-gray-300 text-sm font-medium">{application}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Automate with Robotics?
              </h2>
              <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                Let's discuss how our robotics solutions can help transform your business operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact" 
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center"
                >
                  Get Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
                <a 
                  href="/pricing" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  View Pricing
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default RoboticsPage
