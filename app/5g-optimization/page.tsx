import React, { Suspense } from 'react'
import { ArrowRight, CheckCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
import EnhancedSEO from '../components/EnhancedSEO'





const FiveG Optimization Page: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
        
      <EnhancedSEO 
        title="5G Optimization Services | Zion TechGroup"
        description="Expert 5G network optimization services to maximize performance, efficiency, andcost-effectiveness."
        keywords="5G optimization, network optimization, performance tuning, 5G efficiency"
      />
      
      {/* Hero Section */}
  )
      <section>
        
        <div className="containermx-autopx-4">
        
          <div className="max-w-4xl mx-autotext-center">
        
            <h1>
          
              5G Optimization Services
            </h1>
            <p>
          
              Maximize your 5G network performance with our expert optimization services
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center bg-emerald-6 0 0hover:bg-emerald-7 0 0text-white font-semiboldpy-4 px-8rounded-lgtransition-colors"
            >
              Optimize Now
              <ArrowRight className="ml-2 w-5h-5" />
            </Link>
            </div>
          </div>
      </section>

      {/* Services Section */}
  )
      <section>
        
        <div className="containermx-autopx-4">
        
          <div className="text-center mb-16">
        
            <h2>
          
              Our 5G Optimization Services
            </h2>
            <p>
          
              Comprehensive optimization solutions to enhance your 5G network performance
            </p>
            </div>

          <div className="gridmd:grid-cols-3 gap-8">
        
            <div className="bg-whitep-8rounded-lgshadow-lg">
        
              <CheckCircle className="w-1 2h-1 2 text-emerald-6 0 0mb-4" />
              <h3>
          
                Network Performance Tuning
              </h3>
              <p>
          
                Advanced performance optimization to maximize throughput and minimize latency
              </p>
              </div>

            <div className="bg-whitep-8rounded-lgshadow-lg">
        
              <CheckCircle className="w-1 2h-1 2 text-emerald-6 0 0mb-4" />
              <h3>
          
                Coverage Optimization
              </h3>
              <p>
          
                Strategic antenna placement and power optimization for maximum coverage
              </p>
              </div>

            <div className="bg-whitep-8rounded-lgshadow-lg">
        
              <CheckCircle className="w-1 2h-1 2 text-emerald-6 0 0mb-4" />
              <h3>
          
                Capacity Planning
              </h3>
              <p>
          
                Intelligent capacity management to handle peak loads efficiently
              </p>
              </div>
            </div>
          </div>
      </section>

      {/* CT A Section */}
  )
      <section>
        
        <div className="containermx-autopx-4text-center">
        
          <h2>
          
            Ready to Optimize Your 5G Network?
          </h2>
          <p>
          
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
            className="inline-flex items-center bg-emerald-6 0 0hover:bg-emerald-7 0 0text-white font-semiboldpy-4 px-8rounded-lgtransition-colors"
          >
            Get Started
            <ArrowRight className="ml-2 w-5h-5" />
          </Link>
          </div>
      </section>
    </div>
  )
  }
  )
export default FiveG;; Optimization Page
