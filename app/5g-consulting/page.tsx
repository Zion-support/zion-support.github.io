import React from 'react'
import { ArrowRight, CheckCircle, Shield, Users } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

const FiveGConsultingPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>5G Consulting Services - Zion Tech Group</title>
        <meta name="description" content="Expert 5G consulting services for strategy development, security assessment, and team training." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-white mb-6">
              5G Consulting Services
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Expert guidance for your 5G transformation journey
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <Shield className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">5G Strategy Development</h3>
              <p className="text-gray-300 mb-4">
                Comprehensive 5G implementation strategies tailored to your business needs.
              </p>
              <Link to="/contact" className="text-blue-400 hover:text-blue-300 flex items-center">
                Learn More <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <CheckCircle className="w-12 h-12 text-green-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Security Assessment</h3>
              <p className="text-gray-300 mb-4">
                Complete security evaluation for 5G network implementation.
              </p>
              <Link to="/contact" className="text-blue-400 hover:text-blue-300 flex items-center">
                Learn More <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <Users className="w-12 h-12 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Team Training</h3>
              <p className="text-gray-300 mb-4">
                Expert training for your team on 5G technologies and best practices.
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

export default FiveGConsultingPage