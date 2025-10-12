import React from 'react'
import { Link } from 'react-router-dom'
import { Calendar, Users, Zap, ArrowRight } from 'lucide-react'
import Layout from '../layout'

export default function AISmartSchedulerPage() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              AI Smart Scheduler
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Intelligent scheduling powered by AI to optimize your time and maximize productivity
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <Calendar className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Smart Calendar</h3>
              <p className="text-gray-600">AI-powered calendar management with intelligent scheduling</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <Users className="h-12 w-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Team Coordination</h3>
              <p className="text-gray-600">Seamless team scheduling and collaboration tools</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <Zap className="h-12 w-12 text-yellow-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Instant Optimization</h3>
              <p className="text-gray-600">Real-time schedule optimization and conflict resolution</p>
            </div>
          </div>

          <div className="text-center">
            <Link 
              to="/contact" 
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}

