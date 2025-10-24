import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { ArrowRight, Users, Shield, Globe, Brain, CheckCircle, Award, Star } from 'lucide-react'

const AboutPage = () => {
  const stats = [
    { icon: Users, value: '100+', label: 'Happy Clients' },
    { icon: Award, value: '50+', label: 'Awards Won' },
    { icon: Star, value: '1000+', label: 'Projects Completed' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-blue-600/20"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            About Zion Tech Group
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            We are a leading technology company specializing in AI and IT solutions that help businesses transform and grow.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <stat.icon className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                To empower businesses with cutting-edge AI and IT solutions that drive innovation, 
                efficiency, and growth. We believe technology should be accessible, powerful, and transformative.
              </p>
              <p className="text-lg text-gray-600">
                Our team of experts works tirelessly to deliver solutions that not only meet your 
                current needs but also prepare you for the future of technology.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Us?</h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-emerald-600 mr-3" />
                  <span className="text-gray-700">Expert team with 10+ years experience</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-emerald-600 mr-3" />
                  <span className="text-gray-700">Cutting-edge technology solutions</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-emerald-600 mr-3" />
                  <span className="text-gray-700">24/7 support and maintenance</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-emerald-600 mr-3" />
                  <span className="text-gray-700">Proven track record of success</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  )
}

export default AboutPage