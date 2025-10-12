import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight, Globe, Zap, Users, BarChart3, Shield, Code } from 'lucide-react'

export default function WebDevelopmentPage() {
  const features = [
    {
      icon: <Globe className="w-8 h-8 text-blue-500" />,
      title: 'Modern Web Applications',
      description: 'Build responsive, fast, and scalable web applications using the latest technologies and frameworks.'
    },
    {
      icon: <Zap className="w-8 h-8 text-purple-500" />,
      title: 'High Performance',
      description: 'Optimized for speed and performance with modern development practices and best practices.'
    },
    {
      icon: <Users className="w-8 h-8 text-green-500" />,
      title: 'User Experience Focus',
      description: 'Intuitive and engaging user interfaces that provide exceptional user experiences.'
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-red-500" />,
      title: 'Analytics & SEO',
      description: 'Built-in analytics, SEO optimization, and performance monitoring for maximum visibility.'
    },
    {
      icon: <Shield className="w-8 h-8 text-yellow-500" />,
      title: 'Security & Compliance',
      description: 'Enterprise-grade security with compliance features and regular security audits.'
    },
    {
      icon: <Code className="w-8 h-8 text-indigo-500" />,
      title: 'Scalable Architecture',
      description: 'Future-proof architecture that scales with your business and handles growing traffic.'
    }
  ]

const WebDevelopmentPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Web Development - Zion Tech Group</title>
        <meta name="description" content="Web Development services by Zion Tech Group. Professional AI and IT solutions." />
        <meta name="keywords" content="web-development, AI solutions, IT services" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Web Development
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Professional web development services by Zion Tech Group.
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-900/50 to-blue-900/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Coming Soon</h2>
            <p className="text-gray-300 mb-6">
              We're working on bringing you comprehensive web development solutions. 
              Contact us to learn more about our services.
            </p>
            <button className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default WebDevelopmentPage;