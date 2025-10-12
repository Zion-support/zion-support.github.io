import React from 'react'
import { Link } from 'react-router-dom'
import { Shield, ArrowRight, Lock, Eye } from 'lucide-react'
import Layout from '../layout'

export default function CybersecurityConsultingPage() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-100">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Cybersecurity Consulting
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Protect your business with our comprehensive cybersecurity solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <Shield className="h-12 w-12 text-red-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Security Assessment</h3>
              <p className="text-gray-600">Comprehensive security audits and vulnerability assessments</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <Lock className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Data Protection</h3>
              <p className="text-gray-600">Advanced encryption and data security protocols</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <Eye className="h-12 w-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Monitoring</h3>
              <p className="text-gray-600">24/7 security monitoring and threat detection</p>
            </div>
          </div>

          <div className="text-center">
            <Link 
              to="/contact" 
              className="inline-flex items-center px-8 py-4 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors"
            >
              Get Protected
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}

