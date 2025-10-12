import React from 'react'
import { Helmet } from 'react-helmet-async'

const AutonomousSystemsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Autonomous Systems - Zion Tech Group</title>
        <meta name="description" content="Autonomous Systems services by Zion Tech Group. Advanced AI and IT solutions for your business." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Autonomous Systems
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Coming soon - Advanced Autonomous Systems solutions by Zion Tech Group
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default AutonomousSystemsPage
