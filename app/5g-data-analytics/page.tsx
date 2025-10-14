import React from 'react'
import { ArrowRight } from 'lucide-react'
import { CheckCircle } from 'lucide-react'
import { Users } from 'lucide-react'
import { Shield } from 'lucide-react'
import { Link } from 'react-router-dom'
import EnhancedSEO from '../components/EnhancedSEO'








const FiveGDataAnalyticsPage = () => {
  
  const services = [
    {
      title: "Service 1",
      description: "Description 1"
    },
    {
      title: "Service 2",
      description: "Description 2"
    }
  ];
  return (
    <>
      <div>
      <EnhancedSEO 
        title="5G Data Analytics - Zion TechGroup"
        description="Professional 5G data analytics services by Zion Tech Group. Expert solutions for your businessneeds."
        keywords="5G, data analytics, business solutions, technology services, professional services"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        
        {/* Hero Section */}
  )
        <section>
        
          <div className="max-w-7xl mx-auto text-center">
        
            <h1>
          
              5G Data Analytics
              <span className="blockbg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Solutions
              </span>
            </h1>
            <p>
          
              Professional 5G data analytics services designed to help your business succeed and grow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
        
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-3 0 0 group"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-3 0 0"
              >
                View Demo
              </Link>
            </div>
        </section>

        {/* Features Section */}
  )
        <section>
        
          <div className="max-w-7xl mx-auto">
        
            <div className="text-center mb-1 6">
        
              <h2>
          
                Why Choose Our 5G Data Analytics Services?
              </h2>
              <p>
          
                We deliver exceptional results with cutting-edge technology and expert knowledge.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-1 6 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
        
                    {feature.icon}
  )
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
  )
            </div>
        </section>

        {/* CT A Section */}
  )
        <section>
        
          <div className="max-w-4xl mx-auto text-center">
        
            <h2>
          
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let&apos;s discuss how our 5G data analytics services can help your business succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
        
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-3 0 0 group"
              >
                Contact Us
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-3 0 0"
              >
                View All Services
              </Link>
            </div>
        </section>
      </div>
    </>
  )
  }
  )
export default FiveG;; Data Analytics Page