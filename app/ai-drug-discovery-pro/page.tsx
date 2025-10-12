import React from 'react'
<<<<<<< HEAD


import { ArrowRight } from 'lucide-react'
=======
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, Brain, Flask, Zap, Users, BarChart3, Clock, Shield, Target, Activity } from 'lucide-react'

export default function AIDrugDiscoveryProPage() {
  const features = [
    {
      icon: <Flask className="w-8 h-8 text-blue-500" />,
      title: 'AI-Powered Drug Discovery',
      description: 'Accelerate drug discovery with advanced AI algorithms that predict molecular interactions and drug efficacy.'
    },
    {
      icon: <Target className="w-8 h-8 text-green-500" />,
      title: 'Target Identification',
      description: 'Identify and validate drug targets using machine learning models trained on vast biological datasets.'
    },
    {
      icon: <Activity className="w-8 h-8 text-purple-500" />,
      title: 'Molecular Design',
      description: 'Design novel drug molecules with optimal properties using generative AI and molecular modeling.'
    },
    {
      icon: <Shield className="w-8 h-8 text-orange-500" />,
      title: 'Safety Prediction',
      description: 'Predict drug safety profiles and potential side effects before clinical trials using AI models.'
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-red-500" />,
      title: 'Clinical Trial Optimization',
      description: 'Optimize clinical trial design and patient selection using predictive analytics and AI insights.'
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: 'Real-time Analysis',
      description: 'Process complex biological data in real-time to accelerate research and development timelines.'
    }
  ]

  const applications = [
    'Oncology drug discovery',
    'Neurological disease treatment',
    'Infectious disease research',
    'Rare disease therapeutics',
    'Personalized medicine',
    'Drug repurposing',
    'Biomarker identification',
    'Clinical trial design'
  ]
>>>>>>> cursor/website-audit-and-update-with-deployment-a621

export default function AiDrugDiscoveryProPage() {
  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      <Helmet>
        <title>Ai Drug Discovery Pro - Zion Tech Group</title>
        <meta name="description" content="Professional ai drug discovery pro services by Zion Tech Group. Transform your business with our expert solutions." />
      </Helmet>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="text-4xl font-bold text-white mb-6">Ai Drug Discovery Pro</h1>
        <p className="text-lg text-gray-300 mb-8">Professional ai drug discovery pro services coming soon.</p>
        <Link
          to="/contact"
          className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit"
        >
          Contact Us
          <ArrowRight className="w-5 h-5 ml-2" />
        </Link>
      </div>
=======
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Drug Discovery Pro - Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered drug discovery platform. Accelerate pharmaceutical research with advanced machine learning and molecular modeling." />
        <meta name="keywords" content="AI drug discovery, pharmaceutical AI, molecular modeling, drug development, clinical trials, biotechnology" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              AI Drug Discovery Pro
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Revolutionize pharmaceutical research with our advanced AI-powered drug discovery platform. 
              Accelerate drug development, reduce costs, and improve success rates with cutting-edge technology.
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
                Request Demo
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
              Advanced Drug Discovery Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Cutting-edge AI technology to accelerate pharmaceutical research and development.
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

      {/* Applications Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 lg:p-12 border border-white/20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Research Applications
              </h2>
              <p className="text-xl text-gray-300">
                Our AI drug discovery platform supports research across multiple therapeutic areas
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {applications.map((application, index) => (
                <div key={index} className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-sm">{application}</span>
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
              Ready to Accelerate Drug Discovery?
            </h2>
            <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Transform your pharmaceutical research with our AI-powered drug discovery platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300"
              >
                Contact Our Experts
              </Link>
              <Link
                to="/ai-services"
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300"
              >
                View All AI Services
              </Link>
            </div>
          </div>
        </div>
      </section>
>>>>>>> cursor/website-audit-and-update-with-deployment-a621
    </div>
  )
}