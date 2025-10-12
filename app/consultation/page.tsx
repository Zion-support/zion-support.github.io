import React from 'react'
import { Helmet } from 'react-helmet-async'
import { ArrowRight, CheckCircle, Star, Users, Award, Zap, Shield, Brain, Cloud, Code, Sparkles, Cpu, Target, Globe, Database, Smartphone, Lock, TrendingUp, Settings, Calendar, CheckSquare, FileText, MessageCircle, Heart, DollarSign, Box, Monitor, Link as LinkIcon, Server, Package, Mic, Workflow, Eye, Wifi, MessageSquare, ShoppingCart } from 'lucide-react'

const ConsultationPage = () => {
  const consultationTypes = [
    {
      icon: Brain,
      title: 'AI Strategy Consultation',
      description: 'Get expert advice on implementing AI solutions in your business.',
      duration: '60 minutes',
      price: '$299',
      features: ['AI readiness assessment', 'Strategy development', 'Implementation roadmap', 'ROI analysis']
    },
    {
      icon: Cloud,
      title: 'Cloud Migration Consultation',
      description: 'Plan and execute your cloud migration with our experts.',
      duration: '90 minutes',
      price: '$399',
      features: ['Infrastructure analysis', 'Migration planning', 'Cost optimization', 'Security assessment']
    },
    {
      icon: Shield,
      title: 'Cybersecurity Audit',
      description: 'Comprehensive security assessment and recommendations.',
      duration: '120 minutes',
      price: '$599',
      features: ['Security assessment', 'Vulnerability analysis', 'Compliance review', 'Remediation plan']
    },
    {
      icon: Code,
      title: 'Technical Architecture Review',
      description: 'Review and optimize your technical architecture.',
      duration: '75 minutes',
      price: '$349',
      features: ['Architecture review', 'Performance analysis', 'Scalability assessment', 'Best practices']
    }
  ]

  const process = [
    {
      step: 1,
      title: 'Initial Assessment',
      description: 'We analyze your current situation and identify opportunities'
    },
    {
      step: 2,
      title: 'Strategy Development',
      description: 'Create a customized strategy based on your specific needs'
    },
    {
      step: 3,
      title: 'Implementation Plan',
      description: 'Develop a detailed roadmap for executing the strategy'
    },
    {
      step: 4,
      title: 'Ongoing Support',
      description: 'Provide continuous support and guidance throughout implementation'
    }
  ]

  return (
    <>
      <Helmet>
        <title>Consultation - Zion Tech Group</title>
        <meta name="description" content="Get expert consultation on AI and IT solutions. Schedule a consultation with our experts to transform your business." />
      </Helmet>

      <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Expert Consultation
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Get personalized advice from our AI and IT experts. Transform your business with strategic guidance and implementation support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition-colors">
                Schedule Consultation
                <ArrowRight className="ml-2 h-5 w-5 inline" />
              </button>
              <button className="border border-purple-400 text-purple-400 px-8 py-3 rounded-lg hover:bg-purple-400 hover:text-white transition-colors">
                View Packages
              </button>
            </div>
          </div>

          {/* Consultation Types */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Consultation Types</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {consultationTypes.map((consultation, index) => (
                <div key={index} className="bg-slate-800/50 p-8 rounded-lg hover:bg-slate-800/70 transition-colors">
                  <consultation.icon className="h-12 w-12 text-purple-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-4">
                    {consultation.title}
                  </h3>
                  <p className="text-gray-300 mb-6">
                    {consultation.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {consultation.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-2xl font-bold text-purple-400">{consultation.price}</div>
                      <div className="text-gray-400 text-sm">{consultation.duration}</div>
                    </div>
                    <button className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors">
                      Book Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Process Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Our Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {process.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">{step.step}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-8 rounded-lg text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Schedule a consultation with our experts and start your transformation journey today.
            </p>
            <button className="bg-white text-purple-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default ConsultationPage