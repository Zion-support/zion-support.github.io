import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Space Technology Solutions 2025 - Advanced Aerospace & Satellite Systems',
  description: 'Revolutionary space technology solutions including satellite systems, space infrastructure, advanced aerospace technologies, and space-based AI systems.',
  keywords: ['Space Technology', 'Satellite Systems', 'Aerospace', 'Space Infrastructure', 'Space AI', 'Satellite Communication'],
  openGraph: {
    title: 'Space Technology Solutions 2025 - Advanced Aerospace & Satellite Systems',
    description: 'Revolutionary space technology solutions including satellite systems and space-based AI systems.',
    images: ['/og-space-technology-2025.png'],
  },
};

export default function SpaceTechnologySolutions2025() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-600/10 to-blue-600/10"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-slate-500 to-blue-500 text-white text-sm font-semibold mb-6 animate-pulse">
            🚀 SPACE TECHNOLOGY 2025
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Space Technology
            <span className="block bg-gradient-to-r from-slate-600 to-blue-600 bg-clip-text text-transparent">
              Solutions 2025
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
            Pioneer the final frontier with our revolutionary space technology solutions. 
            Advanced satellite systems, space infrastructure, and space-based AI platforms 
            that are transforming how we explore and utilize space.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="#space-systems" 
              className="px-8 py-4 bg-gradient-to-r from-slate-600 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Explore Space Systems
            </Link>
            <Link 
              href="#satellite-solutions" 
              className="px-8 py-4 border-2 border-slate-600 text-slate-600 rounded-lg font-semibold hover:bg-slate-600 hover:text-white transition-all duration-300"
            >
              View Satellite Solutions
            </Link>
          </div>
        </div>
      </section>

      {/* Space Systems Showcase */}
      <section id="space-systems" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Advanced Space Systems
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cutting-edge space technology systems that are revolutionizing space exploration and utilization
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Satellite Constellation */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="text-4xl mb-4">🛰️</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Satellite Constellation</h3>
              <p className="text-gray-600 mb-6">
                Next-generation satellite constellation providing global coverage with advanced communication and Earth observation capabilities.
              </p>
              <div className="bg-white rounded-lg p-4 mb-6">
                <div className="h-32 bg-gradient-to-r from-blue-200 to-indigo-200 rounded-lg flex items-center justify-center">
                  <span className="text-gray-500">Satellite Network Demo</span>
                </div>
              </div>
              <div className="space-y-2 mb-6">
                <div className="flex justify-between text-sm">
                  <span>Satellites:</span>
                  <span className="font-semibold text-blue-600">1,000+ Units</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Coverage:</span>
                  <span className="font-semibold text-indigo-600">Global</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Latency:</span>
                  <span className="font-semibold text-green-600">&lt;20ms</span>
                </div>
              </div>
              <Link 
                href="/demos/satellite-constellation" 
                className="inline-block w-full text-center px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                View Satellite Demo
              </Link>
            </div>

            {/* Space-Based AI */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Space-Based AI</h3>
              <p className="text-gray-600 mb-6">
                Autonomous AI systems operating in space for real-time decision making and mission control.
              </p>
              <div className="bg-white rounded-lg p-4 mb-6">
                <div className="h-32 bg-gradient-to-r from-purple-200 to-pink-200 rounded-lg flex items-center justify-center">
                  <span className="text-gray-500">Space AI Demo</span>
                </div>
              </div>
              <div className="space-y-2 mb-6">
                <div className="flex justify-between text-sm">
                  <span>Processing Power:</span>
                  <span className="font-semibold text-purple-600">1000 TFLOPs</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Autonomy Level:</span>
                  <span className="font-semibold text-pink-600">99.9%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Response Time:</span>
                  <span className="font-semibold text-green-600">&lt;1ms</span>
                </div>
              </div>
              <Link 
                href="/demos/space-ai" 
                className="inline-block w-full text-center px-6 py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors"
              >
                Try Space AI
              </Link>
            </div>

            {/* Space Manufacturing */}
            <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="text-4xl mb-4">🏭</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Space Manufacturing</h3>
              <p className="text-gray-600 mb-6">
                Zero-gravity manufacturing facilities producing advanced materials and components in space.
              </p>
              <div className="bg-white rounded-lg p-4 mb-6">
                <div className="h-32 bg-gradient-to-r from-green-200 to-teal-200 rounded-lg flex items-center justify-center">
                  <span className="text-gray-500">Space Factory Demo</span>
                </div>
              </div>
              <div className="space-y-2 mb-6">
                <div className="flex justify-between text-sm">
                  <span>Production Rate:</span>
                  <span className="font-semibold text-green-600">10x Faster</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Quality:</span>
                  <span className="font-semibold text-teal-600">99.99%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Material Purity:</span>
                  <span className="font-semibold text-blue-600">100%</span>
                </div>
              </div>
              <Link 
                href="/demos/space-manufacturing" 
                className="inline-block w-full text-center px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                View Space Factory
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Satellite Solutions */}
      <section id="satellite-solutions" className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Satellite Solutions for Global Impact
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive satellite solutions transforming industries and connecting the world
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Earth Observation */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="text-3xl mr-4">🌍</div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Earth Observation</h3>
                  <p className="text-gray-600">Advanced Environmental Monitoring</p>
                </div>
              </div>
              <div className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-lg p-4 mb-6">
                <div className="text-3xl font-bold text-green-600">Real-Time</div>
                <div className="text-green-700">environmental monitoring</div>
              </div>
              <p className="text-gray-600 mb-6">
                High-resolution satellite imagery and sensors providing real-time environmental data, 
                climate monitoring, and disaster response capabilities.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Climate Monitoring</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Disaster Response</span>
                <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">Agriculture</span>
              </div>
              <Link 
                href="/solutions/earth-observation" 
                className="inline-block px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                Explore Earth Observation
              </Link>
            </div>

            {/* Global Communications */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="text-3xl mr-4">📡</div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Global Communications</h3>
                  <p className="text-gray-600">Worldwide Connectivity Solutions</p>
                </div>
              </div>
              <div className="bg-gradient-to-r from-blue-100 to-indigo-100 rounded-lg p-4 mb-6">
                <div className="text-3xl font-bold text-blue-600">99.99%</div>
                <div className="text-blue-700">global connectivity uptime</div>
              </div>
              <p className="text-gray-600 mb-6">
                High-speed satellite internet and communication networks providing reliable connectivity 
                to remote areas and mobile platforms worldwide.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Internet Access</span>
                <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">Mobile Communications</span>
                <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">IoT Connectivity</span>
              </div>
              <Link 
                href="/solutions/global-communications" 
                className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Explore Global Communications
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Space Technology Capabilities */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Space Technology Capabilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced space technologies pushing the boundaries of what's possible
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '🛰️', title: 'Satellite Networks', desc: 'Global coverage with advanced communication systems' },
              { icon: '🌍', title: 'Earth Observation', desc: 'Real-time environmental and climate monitoring' },
              { icon: '🚀', title: 'Space Launch', desc: 'Reliable and cost-effective space access solutions' },
              { icon: '🏭', title: 'Space Manufacturing', desc: 'Zero-gravity production of advanced materials' },
            ].map((capability, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300">
                <div className="text-4xl mb-4">{capability.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{capability.title}</h3>
                <p className="text-gray-600">{capability.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-slate-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Reach for the Stars?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join the space technology revolution and transform your business with cutting-edge aerospace solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="px-8 py-4 bg-white text-slate-600 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Launch Your Space Mission
            </Link>
            <Link 
              href="/space-technology-implementation-guide-2025" 
              className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-slate-600 transition-all duration-300"
            >
              Download Space Guide
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}