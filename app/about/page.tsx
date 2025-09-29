import React from 'react'
import Link from 'next/link'

export const metadata = {
  title: "About | Zion Tech Group",
  description: "Learn about Zion Tech Group's mission to deliver enterprise-grade AI, micro SaaS, and IT solutions that drive real business results.",
}

export default function AboutPage() {
  const values = [
    {
      title: 'Innovation',
      description: 'We constantly push the boundaries of what\'s possible with cutting-edge technology and creative solutions.',
      icon: '💡'
    },
    {
      title: 'Excellence',
      description: 'We maintain the highest standards in everything we do, from code quality to customer service.',
      icon: '⭐'
    },
    {
      title: 'Collaboration',
      description: 'We work closely with our clients as partners, ensuring solutions that truly meet their needs.',
      icon: '🤝'
    },
    {
      title: 'Integrity',
      description: 'We conduct business with honesty, transparency, and respect for all stakeholders.',
      icon: '🛡️'
    }
  ]

  const stats = [
    { label: 'Years of Experience', value: '10+' },
    { label: 'Projects Delivered', value: '500+' },
    { label: 'Happy Clients', value: '200+' },
    { label: 'Team Members', value: '50+' }
  ]

  return (
    <div className="animate-fade-in">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Zion Tech Group</h1>
          <p className="text-xl text-gray-600">
            Delivering enterprise-grade AI, micro SaaS, and IT solutions that drive real business results.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-gray-600 mb-4">
                We empower businesses to thrive in the digital age by providing cutting-edge AI solutions, 
                innovative micro SaaS platforms, and comprehensive IT services that deliver measurable results.
              </p>
              <p className="text-gray-600">
                Our team of experts combines deep technical knowledge with business acumen to create 
                solutions that not only meet today's challenges but anticipate tomorrow's opportunities.
              </p>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <h3 className="font-semibold text-blue-900 mb-2">Why Choose Us</h3>
              <p className="text-blue-800 text-sm">
                We combine technical excellence with business understanding to deliver solutions 
                that drive real value for your organization.
              </p>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Expertise</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="text-2xl">🤖</div>
                <div>
                  <h3 className="font-semibold text-gray-900">AI Solutions</h3>
                  <p className="text-gray-600 text-sm">
                    Custom AI implementations that automate processes and provide intelligent insights.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="text-2xl">💻</div>
                <div>
                  <h3 className="font-semibold text-gray-900">Micro SaaS</h3>
                  <p className="text-gray-600 text-sm">
                    Scalable software solutions designed for specific business needs.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="text-2xl">☁️</div>
                <div>
                  <h3 className="font-semibold text-gray-900">IT Services</h3>
                  <p className="text-gray-600 text-sm">
                    Comprehensive IT infrastructure and support services.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Ready to transform your business?</p>
          <Link 
            href="/contact" 
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Get Started Today
          </Link>
        </div>
      </div>
    </div>
  )
}