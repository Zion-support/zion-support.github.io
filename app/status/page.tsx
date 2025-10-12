'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { CheckCircle, ArrowRight, AlertCircle, Clock, Star, Zap, Globe, Database, Cpu } from 'lucide-react'
import { Link } from 'react-router-dom'

const StatusPage: React.FC = () => {
  const services = [
    {
      name: 'API Services',
      status: 'Operational',
      uptime: '99.9%',
      color: 'text-green-400'
    },
    {
      name: 'Website',
      status: 'Operational',
      uptime: '99.8%',
      color: 'text-green-400'
    },
    {
      name: 'Database',
      status: 'Operational',
      uptime: '99.9%',
      color: 'text-green-400'
    },
    {
      name: 'CDN',
      status: 'Operational',
      uptime: '99.7%',
      color: 'text-green-400'
    }
  ]

  const incidents = [
    {
      title: 'Scheduled Maintenance',
      status: 'Resolved',
      date: '2024-01-15',
      description: 'Routine maintenance completed successfully.'
    }
  ]

  return (
    <>
      <Helmet>
        <title>System Status - Zion Tech Group | Service Status</title>
        <meta name="description" content="Check the current status of Zion Tech Group services and systems." />
        <meta name="keywords" content="system status, service status, uptime, Zion Tech Group status" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 px-4 py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
                System Status
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
                Real-time status of our services and systems. 
                We're committed to providing reliable and consistent service.
              </p>
            </div>
          </div>
        </section>

        {/* Services Status Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Service Status</h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
                Current status of all our services
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-white">{service.name}</h3>
                    <div className={`flex items-center ${service.color}`}>
                      <CheckCircle className="w-5 h-5 mr-2" />
                      {service.status}
                    </div>
                  </div>
                  <div className="text-gray-300">
                    <div className="flex justify-between">
                      <span>Uptime (30 days):</span>
                      <span className="font-semibold">{service.uptime}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Incidents Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Recent Incidents</h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
                Latest updates on any service issues
              </p>
            </div>
            <div className="space-y-6">
              {incidents.map((incident, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-semibold text-white">{incident.title}</h3>
                    <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm">
                      {incident.status}
                    </span>
                  </div>
                  <p className="text-gray-300 mb-2">{incident.description}</p>
                  <div className="text-gray-400 text-sm">{incident.date}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                  Need Help?
                </h2>
                <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                  If you're experiencing issues not reflected in our status page, 
                  please contact our support team.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/support" 
                    className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  >
                    Contact Support
                  </Link>
                  <Link 
                    to="/contact" 
                    className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                  >
                    Report Issue
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default StatusPage