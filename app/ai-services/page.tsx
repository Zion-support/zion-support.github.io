import React from 'react';
import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Brain, Cloud, Shield, BarChart, Code, Smartphone, ArrowRight, CheckCircle, Star, Zap } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const AiServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const filteredServices = services.filter(service => 
    selectedCategory === 'all' || service.category === selectedCategory
  )

  return (
    <>
      <Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              </button>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Proven Results</h3>
                <p className="text-gray-300">
                  Our AI solutions have helped clients achieve 300% average ROI and 50% reduction in operational costs.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Expert Team</h3>
                <p className="text-gray-300">
                  Our team includes PhD-level AI researchers and engineers with decades of combined experience.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Enterprise Security</h3>
                <p className="text-gray-300">
                  All our solutions are built with enterprise-grade security and compliance standards.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
              </button>
            </div>
          </div>
        </section>
export default AiServicesPage