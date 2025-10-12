'use client'
import React from 'react'
import { Play, ArrowRight, CheckCircle } from 'lucide-react';
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const DemoPage: React.FC = () => {
  const demos = [
    {
      id: '1',
      title: 'AI Analytics Dashboard',
      description: 'See how our AI-powered analytics can transform your data into actionable insights.',
      features: [
        'Real-time data visualization',
        'Predictive analytics',
        'Custom reporting',
        'Automated insights'
      ],
      duration: '5 min'
    },
    {
      id: '2',
      title: 'Cloud Migration Tool',
      description: 'Experience our seamless cloud migration process with live demonstrations.',
      features: [
        'Automated migration',
        'Zero downtime',
        'Data integrity checks',
        'Rollback capabilities'
      ],
      duration: '8 min'
    },
    {
      id: '3',
      title: 'Cybersecurity Scanner',
      description: 'Watch our AI-powered security scanner identify and resolve vulnerabilities.',
      features: [
        'Automated scanning',
        'Threat detection',
        'Vulnerability assessment',
        'Remediation suggestions'
      ],
      duration: '6 min'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            <span className="neon-text">See Our Solutions in Action</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Experience our AI and IT solutions through interactive demos. See how our technology can transform your business.
          </p>
        </div>
      </section>

      {/* Demo Cards */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {demos.map((demo) => (
              <div key={demo.id} className="cyber-card p-8 group hover:scale-105 transition-transform">
                <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg mb-6 flex items-center justify-center">
                  <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 text-white ml-1" />
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                  {demo.title}
                </h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {demo.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {demo.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">{demo.duration}</span>
                  <button className="cyber-button px-6 py-3 text-sm font-semibold inline-flex items-center">
                    <Play className="w-4 h-4 mr-2" />
                    Watch Demo
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="cyber-card hologram-card p-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to See More?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Schedule a personalized demo with our experts to see how our solutions can work for your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="cyber-button px-8 py-4 text-lg font-semibold inline-flex items-center justify-center">
                Schedule Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="cyber-button-secondary px-8 py-4 text-lg font-semibold">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default DemoPage
