import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'About Us - Zion Tech Group',
  description: 'Learn about Zion Tech Group, a leading provider of AI solutions, micro SaaS development, and enterprise IT services.',
};

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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            About Zion Tech Group
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Leading the future of technology with innovative AI solutions, 
            micro SaaS development, and enterprise IT services.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
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

        <div className="text-center">
          <p className="text-gray-600 mb-4">Ready to transform your business?</p>
          <Link 
            href="/contact" 
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
          >
            Get in Touch
            <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
