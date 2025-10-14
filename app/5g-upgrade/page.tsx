import React from 'react'
import { ArrowRight, CheckCircle, Shield, Users } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

const FiveGUpgradePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>5G Upgrade Services - Zion Tech Group</title>
        <meta name="description" content="Professional 5g upgrade services for enterprise 5G solutions." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-white mb-6">
              5G Upgrade Services
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Professional 5g upgrade services for your 5G infrastructure
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <Shield className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Expert Consultation</h3>
              <p className="text-gray-300 mb-4">
                Get expert guidance for your 5G implementation needs.
              </p>
              <Link to="/contact" className="text-blue-400 hover:text-blue-300 flex items-center">
                Learn More <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <CheckCircle className="w-12 h-12 text-green-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Quality Assurance</h3>
              <p className="text-gray-300 mb-4">
                Comprehensive quality checks and validation processes.
              </p>
              <Link to="/contact" className="text-blue-400 hover:text-blue-300 flex items-center">
                Learn More <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <Users className="w-12 h-12 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">24/7 Support</h3>
              <p className="text-gray-300 mb-4">
                Round-the-clock support for your 5G infrastructure.
              </p>
              <Link to="/contact" className="text-blue-400 hover:text-blue-300 flex items-center">
                Learn More <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FiveGUpgradePage
