'use client'
import React from 'react'
import { ExternalLink, Award, Globe, Users } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

interface Partner {
  id: string
  name: string
  description: string
  category: string
  logo: string
  website: string
  tier: 'preferred' | 'strategic' | 'certified'
}

const PartnersPage: React.FC = () => {
  const partners: Partner[] = [
    {
      id: '1',
      name: 'Microsoft',
      description: 'Advanced cloud computing and AI platform solutions',
      category: 'Cloud & AI',
      logo: '/images/partners/microsoft.png',
      website: 'https://microsoft.com',
      tier: 'preferred'
    },
    {
      id: '2',
      name: 'Google Cloud',
      description: 'Certified partner for machine learning and data analytics',
      category: 'Cloud',
      logo: '/images/partners/google-cloud.png',
      website: 'https://cloud.google.com',
      tier: 'preferred'
    },
    {
      id: '3',
      name: 'Amazon Web Services',
      description: 'Strategic partner for enterprise cloud infrastructure',
      category: 'Cloud',
      logo: '/images/partners/aws.png',
      website: 'https://aws.amazon.com',
      tier: 'strategic'
    },
    {
      id: '4',
      name: 'IBM',
      description: 'AI and quantum computing solutions partner',
      category: 'AI & Quantum',
      logo: '/images/partners/ibm.png',
      website: 'https://ibm.com',
      tier: 'certified'
    },
    {
      id: '5',
      name: 'NVIDIA',
      description: 'GPU computing and AI acceleration partner',
      category: 'AI Hardware',
      logo: '/images/partners/nvidia.png',
      website: 'https://nvidia.com',
      tier: 'certified'
    },
    {
      id: '6',
      name: 'Salesforce',
      description: 'CRM and business automation solutions',
      category: 'Business Software',
      logo: '/images/partners/salesforce.png',
      website: 'https://salesforce.com',
      tier: 'certified'
    }
  ]

  const tiers = {
    preferred: { label: 'Preferred Partner', color: 'text-cyan-400', bgColor: 'bg-cyan-500/20' },
    strategic: { label: 'Strategic Partner', color: 'text-purple-400', bgColor: 'bg-purple-500/20' },
    certified: { label: 'Certified Partner', color: 'text-green-400', bgColor: 'bg-green-500/20' }
  }

  const categories = [...new Set(partners.map(partner => partner.category))]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            <span className="neon-text">Our Partners</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            We work with industry leaders to deliver cutting-edge solutions and drive innovation.
          </p>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner) => (
              <div key={partner.id} className="cyber-card p-6 group hover:scale-105 transition-transform">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center">
                    <Globe className="h-8 w-8 text-cyan-400" />
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${tiers[partner.tier].color} ${tiers[partner.tier].bgColor}`}>
                    {tiers[partner.tier].label}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {partner.name}
                </h3>
                
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {partner.description}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-cyan-400 font-medium">{partner.category}</span>
                  <a
                    href={partner.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    Visit Website
                    <ExternalLink className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-16 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">
            Partnership Benefits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Certified Expertise</h3>
              <p className="text-gray-300">Our team holds certifications from leading technology partners.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Global Reach</h3>
              <p className="text-gray-300">Access to worldwide partner networks and resources.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Collaborative Innovation</h3>
              <p className="text-gray-300">Working together to create cutting-edge solutions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="cyber-card hologram-card p-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Interested in Partnering With Us?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Join our network of partners and help us deliver innovative solutions to businesses worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="cyber-button px-8 py-4 text-lg font-semibold">
                Become a Partner
              </button>
              <button className="cyber-button-secondary px-8 py-4 text-lg font-semibold">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default PartnersPage
