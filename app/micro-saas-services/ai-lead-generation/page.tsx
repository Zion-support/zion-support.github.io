
import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Target, Users, TrendingUp } from 'lucide-react'
import Layout from '../../../layout'

export default function AiLeadGenerationPage() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-teal-900 via-cyan-900 to-blue-900 flex items-center justify-center">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">AI Lead Generation</h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Professional AI lead generation solutions for business growth
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-white">
              <Target className="h-12 w-12 text-teal-400 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Smart Targeting</h3>
              <p className="text-gray-300">AI-powered lead identification and qualification</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-white">
              <Users className="h-12 w-12 text-cyan-400 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Lead Scoring</h3>
              <p className="text-gray-300">Intelligent lead scoring and prioritization</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-white">
              <TrendingUp className="h-12 w-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Growth Analytics</h3>
              <p className="text-gray-300">Comprehensive analytics and performance tracking</p>
            </div>
          </div>

          <div className="text-center">
            <Link 
              to="/contact" 
              className="inline-flex items-center px-8 py-4 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition-colors"
            >
              Contact Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}
