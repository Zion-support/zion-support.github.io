import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight, Download, Mail, Phone, MapPin } from 'lucide-react'

const PressPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Press Kit - Zion Tech Group</title>
        <meta name="description" content="Press releases, media resources, and company information for journalists and media professionals." />
        <meta name="keywords" content="press kit, media resources, press releases, company news, Zion Tech Group" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Press Kit
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Media resources and press information for Zion Tech Group.
            </p>
          </div>

          {/* Press Releases */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8">Press Releases</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-semibold text-white mb-4">Zion Tech Group Launches AI Quantum Financial Oracle</h3>
                <p className="text-gray-300 mb-4">Revolutionary quantum-powered financial oracle with 99.97% prediction accuracy.</p>
                <div className="flex items-center justify-between">
                  <span className="text-cyan-400 text-sm">December 2024</span>
                  <button className="text-cyan-400 hover:text-cyan-300 transition-colors">
                    <Download className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-semibold text-white mb-4">AI Holographic Workspace Revolutionizes Productivity</h3>
                <p className="text-gray-300 mb-4">New 3D computing platform increases team productivity by 95%.</p>
                <div className="flex items-center justify-between">
                  <span className="text-cyan-400 text-sm">November 2024</span>
                  <button className="text-cyan-400 hover:text-cyan-300 transition-colors">
                    <Download className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-semibold text-white mb-4">Space Mission Optimizer Achieves 99.8% Success Rate</h3>
                <p className="text-gray-300 mb-4">AI-powered space operations deliver unprecedented mission success.</p>
                <div className="flex items-center justify-between">
                  <span className="text-cyan-400 text-sm">October 2024</span>
                  <button className="text-cyan-400 hover:text-cyan-300 transition-colors">
                    <Download className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Media Resources */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8">Media Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-semibold text-white mb-4">Company Logo</h3>
                <p className="text-gray-300 mb-6">High-resolution logos and brand assets for media use.</p>
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center">
                  <Download className="w-5 h-5 mr-2" />
                  Download Assets
                </button>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-semibold text-white mb-4">Executive Photos</h3>
                <p className="text-gray-300 mb-6">Professional headshots and team photos for media use.</p>
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center">
                  <Download className="w-5 h-5 mr-2" />
                  Download Photos
                </button>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h2 className="text-3xl font-bold text-white mb-8">Media Contact</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex items-center space-x-3">
                <Mail className="w-6 h-6 text-cyan-400" />
                <div>
                  <p className="text-white font-semibold">Email</p>
                  <p className="text-gray-300">kleber@ziontechgroup.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-6 h-6 text-cyan-400" />
                <div>
                  <p className="text-white font-semibold">Phone</p>
                  <p className="text-gray-300">+1 302 464 0950</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-6 h-6 text-cyan-400" />
                <div>
                  <p className="text-white font-semibold">Address</p>
                  <p className="text-gray-300">364 E Main St STE 1008, Middletown DE 19709</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PressPage