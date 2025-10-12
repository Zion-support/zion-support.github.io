import React from 'react'
import { Helmet } from 'react-helmet-async'
import Layout from '../layout'

const RoboticsPage: React.FC = () => {
  return (
    <Layout
      title="Robotics Solutions - Zion Tech Group"
      description="Advanced robotics solutions including automation, AI-powered robots, and intelligent systems for industrial and commercial applications."
      keywords="robotics, automation, AI robots, industrial automation, intelligent systems"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Robotics
              </span>
              <br />
              <span className="text-white">Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your business with our advanced robotics solutions. 
              Powered by cutting-edge AI technology and industry expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-4">Industrial Automation</h3>
              <p className="text-gray-300 mb-4">
                Advanced robotic systems for manufacturing, assembly, and industrial processes.
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>• Automated assembly lines</li>
                <li>• Quality control systems</li>
                <li>• Material handling robots</li>
                <li>• Process optimization</li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-4">AI-Powered Robots</h3>
              <p className="text-gray-300 mb-4">
                Intelligent robots with advanced AI capabilities for complex tasks and decision-making.
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>• Machine learning integration</li>
                <li>• Computer vision systems</li>
                <li>• Natural language processing</li>
                <li>• Autonomous navigation</li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-4">Service Robots</h3>
              <p className="text-gray-300 mb-4">
                Specialized robots for customer service, healthcare, and commercial applications.
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>• Customer service robots</li>
                <li>• Healthcare assistants</li>
                <li>• Security robots</li>
                <li>• Cleaning automation</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default RoboticsPage