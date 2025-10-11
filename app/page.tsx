'use client';
import React from 'react'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import {ArrowRight, CheckCircle, Brain, Cloud, Shield, Code} from 'lucide-react'

const HomePage: React.FC = () => {
  
  const features = [
    {
      icon: Wifi,
      title: 'Feature 1',
      description: 'Description for feature 1.',
      benefits: ['Benefit 1', 'Benefit 2', 'Benefit 3']

    },
    { icon: Cloud,
      title: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud solutions tailored to your business needs.',
      benefits: ['AWS Integration', 'Azure Services', 'Google Cloud', 'Hybrid Solutions']},
    { icon: Shield,
      title: 'Cybersecurity',
      description: 'Protect your digital assets with our comprehensive security solutions.',
      benefits: ['Threat Detection', 'Data Protection', 'Compliance', 'Risk Assessment']},
    { icon: Code,
      title: 'Custom Development',
      description: 'Bespoke software solutions designed to meet your unique requirements.',
      benefits: ['Web Applications', 'Mobile Apps', 'API Development', 'System Integration']}

  ]

  const stats = [
    { number: '500+', label: 'Projects Completed'},
    { number: '100+', label: 'Happy Clients'},
    { number: '99.9%', label: 'Uptime Guarantee'},
    { number: '24/7', label: 'Support Available'}

  ]

  return (
    <>
<div>
      <Navigation />
      <main className="pt-16">
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700">
          <div>
          <div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Home Page
              </h1>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Transform your business with our cutting-edge AI and IT solutions designed for the modern enterprise.
              </p>
              <div>
                <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                  Get Started
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}

        <section className="py-16 px-4 sm: px-6 lg: px-8 bg-slate-800/30">
          <div>
          <div>
              {stats.map((stat, index) => (
                <div>
          <div>
                    {stat.number}

                  </div>
                  <div>
                    {stat.label}

                  </div>
                </div>
              ))}

            </div></div></section>

        {/* Features Section */}

        <section className="py-20 px-4 sm: px-6 lg: px-8">
          <div>
          <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Key Features
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover the powerful features that make our solutions stand out.
              </p>
            </div><div>
              {features.map((feature, index) => (
                <div>
          <div>
                    <feature.icon className="w-8 h-8 text-cyan-400 mr-3" />
                    <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                  </div><p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <CheckCircle />
                        {benefit}

                      </li>
                    ))}

                  </ul>
                </div>
              ))}

            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-100">
          <div>
          <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Us
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Experience the benefits of working with industry leaders.
              </p>
            </div>
            
            <div>
              {benefits.map((benefit, index) => (
                <div>
          <div>
                    <CheckCircle />
                    <span className="text-lg font-medium text-gray-900">{benefit}</span>
                  </div>
                </div>
              ))}

            </div>
          </div>
        </section>

        <section className="py-20">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Contact us today to learn how our solutions can transform your business.
            </p>
            <div>
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Contact Us
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors">
                Schedule Demo
              </button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
    </>
  )
}

export default HomePage
