'use client'
import React from 'react'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import { Shield, Zap, Users, ArrowRight } from 'lucide-react';

const HomePage: React.FC = () => {
  const features = [
    {
      icon: Zap,
      title: 'AI-Powered Solutions',
      description: 'Cutting-edge artificial intelligence to transform your business operations and drive innovation.'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security measures to protect your data and ensure compliance with industry standards.'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Experienced developers and consultants dedicated to delivering exceptional results for your projects.'
    }
  ]

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '50+', label: 'Happy Clients' },
    { number: '99%', label: 'Client Satisfaction' },
    { number: '24/7', label: 'Support Available' }
  ]

  return (
    <>
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-rfrom-blue-600to-purple-600text-white py-20">
          <div className="containermx-autopx-4">
            <div className="max-w-4xlmx-autotext-center">
              <h1 className="text-5xlfont-boldmb-6">
                Transform Your Business with 
                <span className="blocktext-yellow-300">Cutting-Edge Technology</span>
              </h1>
              <p className="text-xlmb-8text-blue-100">
                Leading technology solutions provider helping businesses transform their digital
                presence with AI, cloud architecture, and innovative development services.
              </p>
              <div className="flexflex-colsm:flex-rowgap-4 justify-center">
                <button className="bg-whitetext-blue-600px-8py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center">
                  Get Started
                  <ArrowRight className="ml-2w-5h-5" />
                </button>
                <button className="border-2border-whitetext-whitepx-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20bg-gray-50">
          <div className="containermx-autopx-4">
            <div className="max-w-6xlmx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-boldtext-gray-900mb-4">
                  Why Choose Zion Tech Group?
                </h2>
                <p className="text-xltext-gray-600">
                  We deliver exceptional results through innovative technology solutions
                </p>
              </div>
              
              <div className="gridgrid-cols-1md:grid-cols-3gap-8">
                {features.map((feature, index) => (
                  <div key={index} className="bg-whitep-8rounded-lgshadow-lg hover:shadow-xl transition-shadow">
                    <feature.icon className="w-12h-12text-blue-600mb-4" />
                    <h3 className="text-xlfont-semiboldtext-gray-900mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20bg-blue-600text-white">
          <div className="containermx-autopx-4">
            <div className="max-w-4xlmx-auto">
              <div className="text-centermb-12">
                <h2 className="text-4xl font-boldmb-4">
                  Our Impact in Numbers
                </h2>
                <p className="text-xltext-blue-100">
                  Delivering measurable results for our clients
                </p>
              </div>
              
              <div className="gridgrid-cols-2md:grid-cols-4gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-4xl font-boldmb-2">
                      {stat.number}
                    </div>
                    <div className="text-blue-100">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20bg-gray-900text-white">
          <div className="containermx-autopx-4">
            <div className="max-w-4xlmx-autotext-center">
              <h2 className="text-4xl font-boldmb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xltext-gray-300mb-8">
                Let's discuss how our technology solutions can drive your success
              </p>
              <div className="flexflex-colsm:flex-rowgap-4 justify-center">
                <button className="bg-blue-600text-whitepx-8py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center">
                  Start Your Project
                  <ArrowRight className="ml-2w-5h-5" />
                </button>
                <button className="border-2border-whitetext-whitepx-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors">
                  Schedule Consultation
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  )
}

export default HomePage