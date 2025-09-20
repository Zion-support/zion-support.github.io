import React from 'react'
import { Users, Target, Award, TrendingUp } from 'lucide-react'

export default function AboutPage() {
  const stats = [
    { icon: Users, value: '500+', label: 'Clients Served' },
    { icon: Target, value: '99%', label: 'Project Success Rate' },
    { icon: Award, value: '50+', label: 'Awards Won' },
    { icon: TrendingUp, value: '200%', label: 'Average ROI' }
  ]

  const values = [
    {
      title: 'Innovation',
      description: 'We stay at the forefront of technology, constantly exploring new solutions and approaches to solve complex business challenges.'
    },
    {
      title: 'Excellence',
      description: 'We are committed to delivering the highest quality solutions that exceed our clients\' expectations and drive measurable results.'
    },
    {
      title: 'Collaboration',
      description: 'We work closely with our clients as partners, ensuring their vision and goals are at the center of every solution we develop.'
    },
    {
      title: 'Integrity',
      description: 'We conduct business with the highest ethical standards, maintaining transparency and trust in all our relationships.'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">About Zion Tech Group</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are a leading technology company dedicated to transforming businesses through innovative solutions and cutting-edge technology.
            </p>
          </div>
        </div>
      </div>

      {/* Company Overview */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Our Story</h2>
            <div className="prose prose-lg mx-auto text-gray-600">
              <p className="mb-6">
                Founded in 2020, Zion Tech Group has emerged as a trusted partner for businesses seeking to leverage technology for growth and innovation. Our team of experienced professionals combines deep technical expertise with a passion for solving complex challenges.
              </p>
              <p className="mb-6">
                We specialize in artificial intelligence, cloud computing, cybersecurity, and digital transformation services. Our mission is to empower organizations to achieve their goals through technology that is both powerful and accessible.
              </p>
              <p>
                With offices across multiple continents and a global team of experts, we serve clients ranging from startups to Fortune 500 companies, helping them navigate the digital landscape and achieve sustainable growth.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <div key={index} className="text-center">
                  <Icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Work With Us?</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help your business achieve its technology goals.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-3 border border-white text-white font-medium rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  )
}