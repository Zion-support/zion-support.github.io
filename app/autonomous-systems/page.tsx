import React from 'react'
import { Helmet } from 'react-helmet-async'

const AutonomousSystemsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Autonomous Systems - Zion Tech Group</title>
        <meta name="description" content="Advanced autonomous systems and robotics solutions for modern businesses" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Autonomous Systems
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Cutting-edge autonomous systems and robotics solutions that revolutionize how businesses operate
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-4">Robotic Process Automation</h3>
              <p className="text-gray-300">
                Automate repetitive tasks with intelligent robotic systems that learn and adapt.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-4">Autonomous Vehicles</h3>
              <p className="text-gray-300">
                Self-driving technology for logistics, transportation, and industrial applications.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-4">Smart Manufacturing</h3>
              <p className="text-gray-300">
                Intelligent manufacturing systems that optimize production and quality control.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AutonomousSystemsPage