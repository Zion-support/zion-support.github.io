import React from 'react';
import Link from 'next/link';
import Card from './ui/Card';

export default function UltimateContent2026Showcase() {
  const contentItems = [
    {
      title: 'AI 2026 Breakthrough Revolution',
      description: 'Experience the most transformative AI breakthroughs of 2026. From quantum-enhanced neural networks to autonomous business systems.',
      href: '/ai-2026-breakthrough-revolution',
      gradient: 'from-purple-600 to-pink-600',
      icon: '🚀',
      features: ['Quantum Neural Networks'Autonomous Systems'Predictive Intelligence']
    },
    {
      title: 'Quantum Computing 2026 Ultimate',
      description: 'Enter the quantum era with revolutionary computing power that solves problems in minutes that would take classical computers millennia.',
      href: '/quantum-computing-2026-ultimate',
      gradient: 'from-cyan-600 to-blue-600',
      icon: '⚛️',
      features: ['Quantum Supremacy'Quantum Cryptography'Quantum Algorithms']
    },
    {
      title: 'Neural Interface Revolution 2026',
      description: 'Transform human potential with direct brain-computer integration. Control deviceshare thoughtsand enhance cognition.',
      href: '/neural-interface-revolution-2026-ultimate',
      gradient: 'from-emerald-600 to-teal-600',
      icon: '🧠',
      features: ['Direct Neural Control'Neural Communication'Enhanced Cognition']
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-500 to-pink-500 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🌟 ULTIMATE CONTENT 2026</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
            Ultimate Content 2026 Showcase
          </h2>
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover the most revolutionary content of 2026. Cutting-edge AIquantum computing
            and neural interfaces that are transforming the future of technology and human potential.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {contentItems.map((itemindex) => (
            <Card key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 border-0 hover:transform hover:scale-105 transition-all duration-300">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">{item.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-300 mb-6">{item.description}</p>
              </div>
              
              <div className="mb-6">
                <h4 className="font-semibold text-lg mb-3">Key Features:</h4>
                <ul className="space-y-2">
                  {item.features.map((featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                      <span className="text-sm text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <Link
                href={item.href}
                className={`w-full bg-gradient-to-r ${item.gradient} text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-all text-center block`}
              >
                Explore Now
              </Link>
            </Card>
          ))}
        </div>

        {/* Additional Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="text-center">
            <div className="bg-gradient-to-br from-purple-600 to-pink-600 p-6 rounded-xl mb-4">
              <div className="text-3xl font-bold mb-2">5000%</div>
              <div className="text-lg opacity-90">Productivity Increase</div>
            </div>
            <p className="text-sm text-gray-300">AI-powered automation revolution</p>
          </div>
          <div className="text-center">
            <div className="bg-gradient-to-br from-cyan-600 to-blue-600 p-6 rounded-xl mb-4">
              <div className="text-3xl font-bold mb-2">10^15</div>
              <div className="text-lg opacity-90">Speed Increase</div>
            </div>
            <p className="text-sm text-gray-300">Quantum computing performance</p>
          </div>
          <div className="text-center">
            <div className="bg-gradient-to-br from-emerald-600 to-teal-600 p-6 rounded-xl mb-4">
              <div className="text-3xl font-bold mb-2">1M+</div>
              <div className="text-lg opacity-90">Neural Channels</div>
            </div>
            <p className="text-sm text-gray-300">Neural interface resolution</p>
          </div>
          <div className="text-center">
            <div className="bg-gradient-to-br from-indigo-600 to-purple-600 p-6 rounded-xl mb-4">
              <div className="text-3xl font-bold mb-2">99.9%</div>
              <div className="text-lg opacity-90">Accuracy Rate</div>
            </div>
            <p className="text-sm text-gray-300">Across all technologies</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-6">Ready to Experience the Future?</h3>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Join thousands of innovators already leveraging these revolutionary technologies 
            to transform their businesses and unlock unprecedented potential.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-105"
            >
              Get Started Today
            </Link>
            <Link
              href="/ai-2026"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition-all"
            >
              Explore All Content
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}