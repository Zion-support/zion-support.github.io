import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Wifi, Zap, Shield, Globe, Cpu, Network } from 'lucide-react'

const FiveGSolutionsPage: React.FC = () => {
  const solutions = [
    {
      icon: Wifi,
      title: '5G Network Implementation',
      description: 'Deploy high-speed 5G networks with ultra-low latency and massive connectivity.',
      features: ['Ultra-low Latency', 'High Bandwidth', 'Massive IoT Support', 'Network Slicing']
    },
    {
      icon: Zap,
      title: '5G Edge Computing',
      description: 'Leverage edge computing capabilities for real-time processing and reduced latency.',
      features: ['Real-time Processing', 'Reduced Latency', 'Local Data Processing', 'Edge Analytics']
    },
    {
      icon: Shield,
      title: '5G Security Solutions',
      description: 'Comprehensive security measures to protect your 5G infrastructure and data.',
      features: ['Network Security', 'Data Encryption', 'Threat Detection', 'Compliance']
    },
    {
      icon: Globe,
      title: '5G IoT Integration',
      description: 'Connect and manage millions of IoT devices with 5G technology.',
      features: ['Device Management', 'Data Collection', 'Real-time Monitoring', 'Scalable Connectivity']
    },
    {
      icon: Cpu,
      title: '5G Smart City Solutions',
      description: 'Transform cities with smart infrastructure powered by 5G technology.',
      features: ['Smart Traffic', 'Environmental Monitoring', 'Public Safety', 'Energy Management']
    },
    {
      icon: Network,
      title: '5G Private Networks',
      description: 'Deploy dedicated 5G networks for enterprise and industrial applications.',
      features: ['Dedicated Infrastructure', 'Custom Configuration', 'Enhanced Security', 'Priority Access']
    }
  ]

  return (
    <>
      <Helmet>
        <title>5G Solutions - Zion Tech Group</title>
        <meta name="description" content="Transform your business with cutting-edge 5G solutions. Ultra-fast connectivity, edge computing, and IoT integration." />
        <meta name="keywords" content="5G solutions, 5G technology, edge computing, IoT, smart cities, private networks" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              5G Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with ultra-fast 5G connectivity and cutting-edge technology
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
              <button className="border border-cyan-500 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Solutions Grid */}
        <div className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our 5G Solutions
              </h2>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                From network implementation to smart city solutions, we provide comprehensive 5G services
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solutions.map((solution, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 group">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <solution.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors">
                      {solution.title}
                    </h3>
                  </div>
                  <p className="text-gray-300 mb-4">
                    {solution.description}
                  </p>
                  <ul className="space-y-2">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                        <div className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Embrace 5G?
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Contact our 5G experts today for a consultation and discover how 5G can transform your business
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                Contact Us
              </button>
              <button className="border border-cyan-500 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300">
                View Portfolio
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FiveGSolutionsPage