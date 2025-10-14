import React, { Suspense } from 'react'
import { ArrowRight, CheckCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
import EnhancedSEO from '../components/EnhancedSEO'





const FiveG Optimization Page: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-6782
      <EnhancedSEO 
        title="5G Optimization Services | Zion TechGroup"
        description="Expert 5G network optimization services to maximize performance, efficiency, andcost-effectiveness."
        keywords="5G optimization, network optimization, performance tuning, 5G efficiency"
      />
      
      {/* Hero Section */}
<<<<<<< HEAD
  )
      <section>
        
        <div className="containermx-autopx-4">
        
          <div className="max-w-4xl mx-autotext-center">
        
            <h1>
          
              5G Optimization Services
            </h1>
            <p>
          
=======
      <section className="bg-gradient-to-r from-emerald-900 to-teal-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4 xl mx-auto text-center">
            <h1 className="text-4 xl md:text-6xl font-bold mb-6">
              5G Optimization Services
            </h1>
            <p className="text-xl md:text-2 xl mb-8 text-emerald-100">
              Maximize your 5G network performance with our expert optimization services
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-4 px-8 rounded-lg transition-colors"
            >
              Optimize Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            </div>
          </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3 xl font-bold text-gray-900 mb-6">
              Our 5G Optimization Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3 xl mx-auto">
              Comprehensive optimization solutions to enhance your 5G network performance
            </p>
            </div>

          <div className="gridmd:grid-cols-3 gap-8">
            <div className="bg-whitep-8 rounded-lgshadow-lg">
              <CheckCircle className="w-1 2 h-1 2 text-emerald-6 0 0mb-4" />
              <h3 className="text-xlfont-semiboldtext-gray-900 mb-4">
                Network Performance Tuning
              </h3>
              <p>
          
                Advanced performance optimization to maximize throughput and minimize latency
              </p>
              </div>

            <div className="bg-whitep-8 rounded-lgshadow-lg">
              <CheckCircle className="w-1 2 h-1 2 text-emerald-6 0 0mb-4" />
              <h3 className="text-xlfont-semiboldtext-gray-900 mb-4">
                Coverage Optimization
              </h3>
              <p>
          
                Strategic antenna placement and power optimization for maximum coverage
              </p>
              </div>

            <div className="bg-whitep-8 rounded-lgshadow-lg">
              <CheckCircle className="w-1 2 h-1 2 text-emerald-6 0 0mb-4" />
              <h3 className="text-xlfont-semiboldtext-gray-900 mb-4">
                Capacity Planning
              </h3>
              <p>
          
                Intelligent capacity management to handle peak loads efficiently
              </p>
              </div>
            </div>
          </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-90 0 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3 xlfont-boldmb-6">
            Ready to Optimize Your 5G Network?
          </h2>
          <p className="text-xlmb-8 text-gray-30 0">
            Contact us today for a comprehensive 5G optimization assessment
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {service.description}
              </p>
              <Link 
                to="/contact" 
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
              >
                Learn More
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Link 
            to="/contact" 
            className="inline-flex items-center bg-emerald-600 hover:bg-emerald-700text-white font-semiboldpy-4 px-8rounded-lg transition-colors"
          >
            Get Started
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
          </div>
      </section>
    </div>
  )
  }
  )
export default FiveG;; Optimization Page
