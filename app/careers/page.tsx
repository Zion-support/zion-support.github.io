'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { CheckCircle, ArrowRight, Briefcase, Users, Clock, Star, Zap, Globe, Database, Cpu } from 'lucide-react'
import { Link } from 'react-router-dom'

const CareersPage: React.FC = () => {
  const jobOpenings = [
    {
      title: 'Senior Software Engineer',
      location: 'Remote',
      type: 'Full-time',
      department: 'Engineering'
    },
    {
      title: 'AI/ML Engineer',
      location: 'San Francisco, CA',
      type: 'Full-time',
      department: 'AI & Research'
    },
    {
      title: 'DevOps Engineer',
      location: 'Remote',
      type: 'Full-time',
      department: 'Infrastructure'
    },
    {
      title: 'Product Manager',
      location: 'New York, NY',
      type: 'Full-time',
      department: 'Product'
    }
  ]

  const benefits = [
    'Competitive salary',
    'Health insurance',
    '401(k) matching',
    'Flexible work hours',
    'Remote work options',
    'Professional development',
    'Team building events',
    'Unlimited PTO'
  ]

  return (
    <>
      <Helmet>
        <title>Careers - Zion Tech Group | Join Our Team</title>
        <meta name="description" content="Join the Zion Tech Group team. Explore career opportunities in technology, AI, and innovation." />
        <meta name="keywords" content="careers, jobs, technology careers, AI jobs, software engineering, Zion Tech Group" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 px-4 py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
                Join Our Team
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
                Build the future of technology with us. Join a team of passionate innovators 
                working on cutting-edge AI and IT solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center"
                >
                  View Openings
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link 
                  to="/contact" 
                  className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Job Openings Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Open Positions</h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
                Explore current job opportunities
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {jobOpenings.map((job, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <h3 className="text-xl font-semibold text-white mb-4">{job.title}</h3>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-gray-300">
                      <Briefcase className="w-4 h-4 mr-2" />
                      {job.department}
                    </div>
                    <div className="flex items-center text-gray-300">
                      <Globe className="w-4 h-4 mr-2" />
                      {job.location}
                    </div>
                    <div className="flex items-center text-gray-300">
                      <Clock className="w-4 h-4 mr-2" />
                      {job.type}
                    </div>
                  </div>
                  <Link 
                    to="/contact"
                    className="text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    Apply Now →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Benefits & Perks</h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
                We offer competitive benefits and a great work environment
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 text-center">
                  <CheckCircle className="w-6 h-6 text-green-500 mx-auto mb-3" />
                  <p className="text-gray-300">{benefit}</p>
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
                  Ready to Join Our Team?
                </h2>
                <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                  Don't see a position that matches your skills? We're always looking for talented individuals. 
                  Send us your resume and let's talk.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/contact" 
                    className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  >
                    Send Resume
                  </Link>
                  <Link 
                    to="/contact" 
                    className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                  >
                    Contact Us
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

export default CareersPage