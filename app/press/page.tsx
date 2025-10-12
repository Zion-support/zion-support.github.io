import React from 'react'

import Layout from '../layout'

const PressPage: React.FC = () => {
  return (
    <Layout
      title="Press Kit - Zion Tech Group"
      description="Press releases, media resources, and company information for journalists and media professionals."
      keywords="press kit, media resources, press releases, company news, Zion Tech Group"
    >
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-4">Company Information</h3>
              <div className="text-gray-300 space-y-4">
                <p><strong>Company Name:</strong> Zion Tech Group</p>
                <p><strong>Founded:</strong> 2024</p>
                <p><strong>Industry:</strong> AI and IT Solutions</p>
                <p><strong>Headquarters:</strong> Middletown, DE</p>
                <p><strong>Contact:</strong> kleber@ziontechgroup.com</p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-4">Media Resources</h3>
              <div className="text-gray-300 space-y-4">
                <p>• Company logo and branding assets</p>
                <p>• Executive headshots and bios</p>
                <p>• Product screenshots and demos</p>
                <p>• Company fact sheet</p>
                <p>• Press release archive</p>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <h3 className="text-2xl font-semibold text-white mb-6">Recent Press Releases</h3>
            <div className="space-y-6">
              <div className="border-b border-white/10 pb-4">
                <h4 className="text-lg font-semibold text-white mb-2">Zion Tech Group Launches Advanced AI Solutions Platform</h4>
                <p className="text-gray-300 text-sm">January 2024</p>
                <p className="text-gray-300">Zion Tech Group announces the launch of its comprehensive AI solutions platform, offering cutting-edge artificial intelligence services for businesses of all sizes.</p>
              </div>
              <div className="border-b border-white/10 pb-4">
                <h4 className="text-lg font-semibold text-white mb-2">Company Expands IT Services Portfolio</h4>
                <p className="text-gray-300 text-sm">December 2023</p>
                <p className="text-gray-300">Zion Tech Group expands its IT services portfolio to include cloud migration, cybersecurity, and digital transformation solutions.</p>
              </div>
            </div>
          </div>
        </div>
