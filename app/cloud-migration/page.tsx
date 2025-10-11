import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Shield, Cloud, Zap, Users, Globe, Lock } from 'lucide-react'

export default function CloudMigrationPage() {
  const features = [
    {
      icon: Shield,
      title: 'Secure Cloud Migration',
      description: 'Enterprise-grade security protocols ensure your data remains protected throughout the migration process.',
    },
    {
      icon: Cloud,
      title: 'Multi-Cloud Solutions',
      description: 'Support for AWS, Azure, Google Cloud, and hybrid cloud environments.',
    },
    {
      icon: Zap,
      title: 'Zero-Downtime Migration',
      description: 'Advanced migration strategies that minimize business disruption.',
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Certified cloud architects and migration specialists.',
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Migration services available across multiple regions and time zones.',
    },
    {
      icon: Lock,
      title: 'Compliance Ready',
      description: 'Full compliance with GDPR, HIPAA, SOX, and other regulatory requirements.',
    },
  ]

  const benefits = [
    'Advanced cloud migration technology',
    'Real-time migration monitoring',
    'Enterprise-grade security and compliance',
    'Scalable and flexible migration solutions',
    '24/7 technical support',
    'Easy integration with existing systems',
    'Cost-effective pricing plans',
  ]

  return (
    <>
      <Helmet>
        <title>Cloud Migration | Zion Tech Group</title>
        <meta name="description" content="Professional Cloud Migration services by Zion Tech Group. Advanced AI and IT solutions for your business." />
        <meta name="keywords" content="cloud migration, AWS, Azure, Google Cloud, hybrid cloud, enterprise solutions" />
      </Helmet>
      
      <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Cloud Migration
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Professional Cloud Migration services by Zion Tech Group. 
            Powered by cutting-edge AI technology and industry expertise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300">
              Get Started
            </button>
            <button className="border border-white/30 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all duration-300">
              View Demo
            </button>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Migration Features</h2>
            <p className="text-xl text-gray-300">Comprehensive cloud migration solutions tailored to your needs</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-purple-500 transition-all duration-300">
                <feature.icon className="w-12 h-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-gradient-to-r from-purple-900 to-blue-900">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Why Choose Our Cloud Migration Services?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Experience seamless cloud migration with our expert team and cutting-edge technology.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-4"></div>
                  <p className="text-white text-lg">{benefit}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}