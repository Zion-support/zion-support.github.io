'use client'
import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, Users, Target, Award, Shield, Globe } from 'lucide-react'

const AboutPage: React.FC = () => {
  const values = [
    {
      icon: Target,
      title: 'Innovation',
      description: 'We constantly push the boundaries of technology to deliver cutting-edge solutions.'
    },
    {
      icon: Shield,
      title: 'Security',
      description: 'Your data and systems are protected with enterprise-grade security measures.'
    },
    {
      icon: Globe,
      title: 'Excellence',
      description: 'We strive for perfection in every project, ensuring the highest quality standards.'
    }
  ]

  return (
    <>
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl font-bold mb-6">About Zion Tech Group</h1>
              <p className="text-xl text-blue-100">
                Leading technology solutions provider helping businesses transform their digital presence
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
                <p className="text-xl text-gray-600">
                  To empower businesses with cutting-edge technology solutions that drive growth, 
                  innovation, and success in the digital age.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
                <p className="text-xl text-gray-600">
                  The principles that guide everything we do
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {values.map((value, index) => (
                  <div key={index} className="bg-white p-8 rounded-lg shadow-lg text-center">
                    <value.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {value.title}
                    </h3>
                    <p className="text-gray-600">
                      {value.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  )
}

export default AboutPage