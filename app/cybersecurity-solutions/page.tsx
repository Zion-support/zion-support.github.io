'use client'
import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { Shield, CheckCircle, ArrowRight } from 'lucide-react'

const CybersecuritySolutionsPage: React.FC  = () => {const features = [
    'Threat detection',
    'Data protection',
    'Compliance management',
    'Incident response',
    'Security monitoring',
    'Risk assessment'
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <Navigation />
                {/* Hero Section */}
                <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8"></section>
        <div className="max-w-7xl mx-auto"></div>
          <div className="text-center"></div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6"></h1>
              Cybersecurity <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Solutions</span>
                </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"></p>
              Protect your business with comprehensive cybersecurity solutions.
            </p>
                </div>
        </div>
                </section>
                {/* Features Section */}
                <section className="py-16 px-4 sm:px-6 lg:px-8"></section>
        <div className="max-w-7xl mx-auto"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4"></h2>
              Security Features
            </h2>
            <p className="text-xl text-gray-300"></p>
              Comprehensive security solutions to protect your business.
            </p>
                </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"></div>
                {features.map((feature, index) => (
              <div key={index} className="flex items-center text-gray-300"></div>
                <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                <span></span>
                {feature}
                </span>
                </div>
            ))}
                </div>
                </div>
      </section>
                {/* CTA Section */}
                <section className="py-16 px-4 sm:px-6 lg:px-8"></section>
        <div className="max-w-4xl mx-auto text-center"></div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6"></h2>
            Secure Your Business
          </h2>
          <p className="text-xl text-gray-300 mb-8"></p>
            Get started with our comprehensive cybersecurity solutions.
          </p>
          <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 flex items-center mx-auto"></button>
            <ArrowRight className="w-5 h-5 mr-2" />
            Get Started
          </button>
                </div>
      </section>

      <Footer />
    </div>
  )
}

export default CybersecuritySolutionsPage;