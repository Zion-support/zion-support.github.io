import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Quantum Computing Solutions Showcase - Revolutionary Quantum AI Technology',
  description: 'Explore breakthrough quantum computing solutions with interactive demos, real-world applications, and revolutionary quantum AI technologies.',
  keywords: ['Quantum Computing', 'Quantum AI', 'Quantum Solutions', 'Interactive Demos', 'Quantum Technology', 'Revolutionary Computing'],
  openGraph: {
    title: 'Quantum Computing Solutions Showcase - Revolutionary Quantum AI Technology',
    description: 'Explore breakthrough quantum computing solutions with interactive demos and real-world applications.',
    images: ['/og-quantum-computing.png'],
  },
};

export default function QuantumComputingSolutionsShowcase() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-sm font-semibold mb-6 animate-pulse">
            ⚛️ QUANTUM BREAKTHROUGH
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Quantum Computing
            <span className="block bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Solutions Showcase
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
            Experience the future of computing with our revolutionary quantum solutions. 
            Interactive demos, real-world applications, and breakthrough technologies 
            that are reshaping the digital landscape.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="#interactive-demos" 
              className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Explore Interactive Demos
            </Link>
            <Link 
              href="#quantum-applications" 
              className="px-8 py-4 border-2 border-indigo-600 text-indigo-600 rounded-lg font-semibold hover:bg-indigo-600 hover:text-white transition-all duration-300"
            >
              View Applications
            </Link>
          </div>
        </div>
      </section>

      {/* Quantum Technology Overview */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Revolutionary Quantum Technology
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Harness the power of quantum mechanics to solve problems that are impossible 
              for classical computers
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: '⚛️',
                title: 'Quantum Supremacy',
                desc: 'Exponential speed advantages over classical computing',
                metric: '10,000x',
                metricDesc: 'Faster Processing'
              },
              {
                icon: '🔬',
                title: 'Quantum Entanglement',
                desc: 'Instantaneous correlation between quantum particles',
                metric: '∞',
                metricDesc: 'Speed of Light'
              },
              {
                icon: '🌊',
                title: 'Quantum Superposition',
                desc: 'Multiple states existing simultaneously',
                metric: '2^n',
                metricDesc: 'Parallel States'
              },
              {
                icon: '🔮',
                title: 'Quantum Tunneling',
                desc: 'Particles passing through energy barriers',
                metric: '99.9%',
                metricDesc: 'Efficiency'
              }
            ].map((tech, index) => (
              <div key={index} className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="text-5xl mb-4">{tech.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{tech.title}</h3>
                <p className="text-gray-600 mb-6">{tech.desc}</p>
                <div className="bg-white rounded-lg p-4">
                  <div className="text-3xl font-bold text-indigo-600 mb-1">{tech.metric}</div>
                  <div className="text-sm text-gray-600">{tech.metricDesc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Demos Section */}
      <section id="interactive-demos" className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Interactive Quantum Demos
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience quantum computing through hands-on interactive demonstrations
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Quantum Algorithm Demo */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-4xl mb-6">🧮</div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Quantum Algorithm Simulator</h3>
              <p className="text-gray-600 mb-8">
                Experience the power of quantum algorithms through our interactive simulator. 
                Compare quantum vs classical performance in real-time.
              </p>
              
              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6 mb-8">
                <h4 className="text-xl font-bold text-gray-900 mb-4">Algorithm Comparison</h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Classical Processing</span>
                    <div className="flex items-center">
                      <div className="w-32 bg-gray-200 rounded-full h-2 mr-3">
                        <div className="bg-gray-400 h-2 rounded-full" style={{width: '20%'}}></div>
                      </div>
                      <span className="text-sm text-gray-500">2.3 hours</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Quantum Processing</span>
                    <div className="flex items-center">
                      <div className="w-32 bg-gray-200 rounded-full h-2 mr-3">
                        <div className="bg-gradient-to-r from-indigo-500 to-purple-500 h-2 rounded-full" style={{width: '100%'}}></div>
                      </div>
                      <span className="text-sm text-gray-500">0.8 seconds</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">10,350x</div>
                  <div className="text-sm text-gray-600">Speed Improvement</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">99.97%</div>
                  <div className="text-sm text-gray-600">Accuracy Rate</div>
                </div>
              </div>
              
              <Link 
                href="/demos/quantum-algorithm-simulator" 
                className="w-full text-center px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
              >
                Try Quantum Simulator
              </Link>
            </div>

            {/* Quantum Optimization Demo */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-4xl mb-6">🎯</div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Quantum Optimization Engine</h3>
              <p className="text-gray-600 mb-8">
                Solve complex optimization problems using quantum annealing. 
                Experience how quantum computing tackles NP-hard problems.
              </p>
              
              <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-6 mb-8">
                <h4 className="text-xl font-bold text-gray-900 mb-4">Problem: Traveling Salesman</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Cities</span>
                    <span className="font-semibold">50</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Possible Routes</span>
                    <span className="font-semibold">3.04 × 10^64</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Quantum Solution Time</span>
                    <span className="font-semibold text-green-600">0.3 seconds</span>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">Optimal</div>
                  <div className="text-sm text-gray-600">Solution Found</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">∞</div>
                  <div className="text-sm text-gray-600">Classical Time</div>
                </div>
              </div>
              
              <Link 
                href="/demos/quantum-optimization" 
                className="w-full text-center px-6 py-3 bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
              >
                Try Optimization Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quantum Applications Section */}
      <section id="quantum-applications" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Real-World Quantum Applications
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how quantum computing is transforming industries and solving 
              previously impossible problems
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '🏥',
                title: 'Drug Discovery',
                desc: 'Accelerating pharmaceutical research through quantum molecular simulation',
                impact: '10,000x faster drug discovery',
                applications: ['Protein folding', 'Molecular dynamics', 'Drug interaction modeling']
              },
              {
                icon: '💰',
                title: 'Financial Modeling',
                desc: 'Revolutionary risk analysis and portfolio optimization',
                impact: '99.9% accuracy in risk prediction',
                applications: ['Monte Carlo simulation', 'Portfolio optimization', 'Fraud detection']
              },
              {
                icon: '🔐',
                title: 'Cryptography',
                desc: 'Quantum-resistant security and quantum key distribution',
                impact: 'Unbreakable encryption',
                applications: ['Quantum key distribution', 'Post-quantum cryptography', 'Secure communication']
              },
              {
                icon: '🌍',
                title: 'Climate Modeling',
                desc: 'Advanced climate simulation and weather prediction',
                impact: '1000x more accurate predictions',
                applications: ['Weather forecasting', 'Climate change modeling', 'Environmental optimization']
              },
              {
                icon: '🚀',
                title: 'Space Exploration',
                desc: 'Optimizing space missions and satellite operations',
                impact: 'Optimal mission planning',
                applications: ['Trajectory optimization', 'Satellite constellation design', 'Resource allocation']
              },
              {
                icon: '🧬',
                title: 'Genetics Research',
                desc: 'Quantum-enhanced DNA analysis and genetic research',
                impact: 'Exponential research acceleration',
                applications: ['DNA sequencing', 'Genetic analysis', 'Personalized medicine']
              }
            ].map((app, index) => (
              <div key={index} className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="text-5xl mb-6">{app.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{app.title}</h3>
                <p className="text-gray-600 mb-6">{app.desc}</p>
                
                <div className="bg-white rounded-lg p-4 mb-6">
                  <div className="text-lg font-bold text-indigo-600 mb-2">Impact</div>
                  <div className="text-gray-700">{app.impact}</div>
                </div>
                
                <div>
                  <div className="text-lg font-bold text-gray-900 mb-3">Applications</div>
                  <div className="space-y-2">
                    {app.applications.map((application, appIndex) => (
                      <div key={appIndex} className="flex items-center text-sm text-gray-600">
                        <span className="text-indigo-500 mr-2">•</span>
                        {application}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quantum vs Classical Comparison */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Quantum vs Classical Computing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how quantum computing compares to classical computing across different metrics
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-4 px-6 font-semibold text-gray-900">Metric</th>
                    <th className="text-center py-4 px-6 font-semibold text-gray-900">Classical Computing</th>
                    <th className="text-center py-4 px-6 font-semibold text-gray-900">Quantum Computing</th>
                    <th className="text-center py-4 px-6 font-semibold text-gray-900">Improvement</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {[
                    { metric: 'Processing Speed', classical: '1 GHz', quantum: '10^15 Hz', improvement: '10^12x' },
                    { metric: 'Parallel Processing', classical: '8-64 cores', quantum: '2^n qubits', improvement: 'Exponential' },
                    { metric: 'Memory Efficiency', classical: 'Linear growth', quantum: 'Logarithmic growth', improvement: 'Exponential' },
                    { metric: 'Problem Solving', classical: 'Polynomial time', quantum: 'Exponential speedup', improvement: 'Revolutionary' },
                    { metric: 'Energy Consumption', classical: 'High', quantum: 'Ultra-low', improvement: '99% reduction' },
                    { metric: 'Error Rate', classical: '1 in 10^9', quantum: '1 in 10^15', improvement: '1Mx better' }
                  ].map((row, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="py-4 px-6 font-medium text-gray-900">{row.metric}</td>
                      <td className="py-4 px-6 text-center text-gray-600">{row.classical}</td>
                      <td className="py-4 px-6 text-center text-indigo-600 font-semibold">{row.quantum}</td>
                      <td className="py-4 px-6 text-center text-green-600 font-bold">{row.improvement}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready for the Quantum Revolution?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join the quantum computing revolution and transform your business with 
            unprecedented computational power
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="px-8 py-4 bg-white text-indigo-600 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Start Quantum Journey
            </Link>
            <Link 
              href="/quantum-implementation-guide" 
              className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300"
            >
              Download Quantum Guide
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}