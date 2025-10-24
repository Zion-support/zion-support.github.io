'use client'

import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, Shield, Cloud, Zap, Globe, Target } from 'lucide-react'

const BackupRecoveryPage: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: 'Secure Backup',
      description: 'Enterprise-grade security with encryption and compliance standards for your data'
    },
    {
      icon: Cloud,
      title: 'Cloud Storage',
      description: 'Reliable cloud-based backup solutions with global redundancy'
    },
    {
      icon: Zap,
      title: 'Fast Recovery',
      description: 'Quick data recovery with minimal downtime for your business'
    }
  ]

  const benefits = [
    'Enterprise-grade security and compliance',
    'Automated backup scheduling',
    'Cross-platform compatibility',
    '24/7 monitoring and support',
    'Cost-effective pricing plans',
    'Proven track record of success'
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl font-bold text-white mb-6">
                Backup & Recovery
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Protect your data with our comprehensive backup and recovery solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                  Get Started
                </button>
                <button className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-gray-900 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-white text-center mb-16">
                Backup & Recovery Features
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-center">
                    <feature.icon className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-white mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-white/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-white text-center mb-16">
                Why Choose Our Backup & Recovery
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}

export default BackupRecoveryPage
