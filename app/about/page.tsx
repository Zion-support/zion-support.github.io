'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Zap, Shield, Globe, Users, Award, Target } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const AboutPage: React.FC = () => {
  const values = [
    {
      icon: <Zap className="w-8 h-8 text-blue-500" />,
      title: 'Innovation',
      description: 'We constantly push the boundaries of technology to deliver cutting-edge solutions that drive business growth.'
    },
    {
      icon: <Shield className="w-8 h-8 text-green-500" />,
      title: 'Security',
      description: 'Enterprise-grade security measures ensure your data and systems are protected with the highest standards.'
    },
    {
      icon: <Globe className="w-8 h-8 text-purple-500" />,
      title: 'Global Reach',
      description: 'Serving clients worldwide with 24/7 support and localized solutions for international markets.'
    },
    {
      icon: <Users className="w-8 h-8 text-orange-500" />,
      title: 'Expert Team',
      description: 'Our diverse team of engineers, designers, and strategists brings decades of combined experience.'
    },
    {
      icon: <Award className="w-8 h-8 text-red-500" />,
      title: 'Excellence',
      description: 'Committed to delivering exceptional results that exceed expectations and drive measurable success.'
    },
    {
      icon: <Target className="w-8 h-8 text-cyan-500" />,
      title: 'Results-Driven',
      description: 'Every solution is designed with clear objectives and measurable outcomes for your business success.'
    }
  ]

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '50+', label: 'Happy Clients' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '24/7', label: 'Support Available' }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>About Us - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group's mission to deliver cutting-edge AI and IT solutions for modern businesses." />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              About <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Zion Tech Group</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We are a leading technology company specializing in AI-powered solutions, IT services, and digital transformation for businesses worldwide.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
                <p className="text-lg text-gray-600 mb-6">
                  To empower businesses with cutting-edge AI and IT solutions that drive innovation, efficiency, and growth. We believe technology should be accessible, secure, and transformative.
                </p>
                <p className="text-lg text-gray-600">
                  Our team of experts works tirelessly to deliver solutions that not only meet today's challenges but anticipate tomorrow's opportunities.
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Why Choose Us?</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Zap className="w-5 h-5 mr-3" />
                    Cutting-edge AI technology
                  </li>
                  <li className="flex items-center">
                    <Shield className="w-5 h-5 mr-3" />
                    Enterprise-grade security
                  </li>
                  <li className="flex items-center">
                    <Globe className="w-5 h-5 mr-3" />
                    Global support network
                  </li>
                  <li className="flex items-center">
                    <Users className="w-5 h-5 mr-3" />
                    Expert team of professionals
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                These core values guide everything we do and shape how we work with our clients and partners.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center p-6 bg-gray-50 rounded-lg">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Work With Us?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how our expertise can help transform your business and drive success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
              >
                Get in Touch
              </a>
              <a
                href="/services"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Our Services
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}

export default AboutPage