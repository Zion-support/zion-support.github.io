import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Users, Target, Award, Globe } from 'lucide-react'

export default function AboutPage() {
  const stats = [
    { icon: <Users className="w-8 h-8 text-blue-500" />, number: '500+', label: 'Happy Clients' },
    { icon: <Target className="w-8 h-8 text-green-500" />, number: '1000+', label: 'Projects Completed' },
    { icon: <Award className="w-8 h-8 text-purple-500" />, number: '50+', label: 'Awards Won' },
    { icon: <Globe className="w-8 h-8 text-orange-500" />, number: '25+', label: 'Countries Served' }
  ]

  return (
    <>
      <Helmet>
        <title>About Us - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group, a leading provider of AI solutions, cloud migration, cybersecurity, and IT services. Discover our mission and values." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              About <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Zion Tech Group</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              We are a leading technology company specializing in AI solutions, cloud migration, cybersecurity, and IT services.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                To empower businesses with cutting-edge technology solutions that drive innovation, enhance security, and accelerate digital transformation.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}