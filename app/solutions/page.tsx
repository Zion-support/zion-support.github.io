import React from 'react';
<<<<<<< HEAD
import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
=======

export const metadata = {
  title: "Solutions | Zion Tech Group",
  description: "Comprehensive AI and technology solutions designed to transform your business operations.",
};
>>>>>>> 1b0ff75f26ae1bc706319f2d3337325807103eaa

export default function SolutionsPage() {
  const solutions = [
    {
      title: 'AI-Powered Automation',
      description: 'Streamline your operations with intelligent automation solutions.',
      icon: '🤖',
      features: ['Process Automation', 'Intelligent Workflows', 'Predictive Analytics']
    },
    {
      title: 'Digital Transformation',
      description: 'Modernize your business with comprehensive digital solutions.',
      icon: '🔄',
      features: ['Legacy System Migration', 'Cloud Adoption', 'Process Optimization']
    },
    {
      title: 'Enterprise Security',
      description: 'Protect your business with advanced cybersecurity solutions.',
      icon: '🔒',
      features: ['Security Audits', 'Threat Detection', 'Compliance Management']
    },
    {
      title: 'Data Intelligence',
      description: 'Transform data into actionable business insights.',
      icon: '📊',
      features: ['Data Analytics', 'Business Intelligence', 'Real-time Dashboards']
    },
    {
      title: 'Cloud Infrastructure',
      description: 'Scalable and reliable cloud solutions for your business.',
      icon: '☁️',
      features: ['Cloud Migration', 'DevOps Automation', 'Infrastructure Management']
    },
    {
      title: 'Custom Development',
      description: 'Tailored software solutions for your specific needs.',
      icon: '💻',
      features: ['Web Applications', 'Mobile Apps', 'API Development']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Our Solutions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive technology solutions designed to address your business challenges
            and drive growth across all industries.
          </p>
        </div>

<<<<<<< HEAD
        <div className="max-w-6xl mx-auto">
          {/* Solutions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex items-center mb-6">
                  <span className="text-4xl mr-4">{solution.icon}</span>
                  <h3 className="text-xl font-semibold text-gray-900">{solution.title}</h3>
                </div>
                <p className="text-gray-600 mb-6">{solution.description}</p>
                <ul className="space-y-2">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Industry Focus */}
          <div className="bg-white rounded-xl shadow-lg p-12 mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Industry Focus</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏥</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Healthcare</h3>
                <p className="text-sm text-gray-600">HIPAA-compliant solutions for healthcare providers</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💰</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Finance</h3>
                <p className="text-sm text-gray-600">Secure financial technology solutions</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🛒</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">E-commerce</h3>
                <p className="text-sm text-gray-600">Scalable online retail platforms</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏭</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Manufacturing</h3>
                <p className="text-sm text-gray-600">IoT and automation solutions</p>
              </div>
            </div>
          </div>

          {/* Process Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
                <h3 className="font-semibold text-gray-900 mb-2">Discovery</h3>
                <p className="text-sm text-gray-600">Understanding your business needs and challenges</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
                <h3 className="font-semibold text-gray-900 mb-2">Strategy</h3>
                <p className="text-sm text-gray-600">Developing a customized solution strategy</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
                <h3 className="font-semibold text-gray-900 mb-2">Implementation</h3>
                <p className="text-sm text-gray-600">Building and deploying your solution</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">4</div>
                <h3 className="font-semibold text-gray-900 mb-2">Support</h3>
                <p className="text-sm text-gray-600">Ongoing maintenance and optimization</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-white rounded-xl shadow-lg p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's discuss your specific needs and create a custom solution
              that drives real business value.
=======
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="bg-gray-800 rounded-lg p-6 text-center">
            <div className="text-4xl font-bold text-blue-400 mb-2">01</div>
            <h3 className="text-xl font-bold text-white mb-4">Discovery & Assessment</h3>
            <p className="text-gray-300">
              We analyze your current systems, identify opportunities, and develop a comprehensive AI strategy.
>>>>>>> 1b0ff75f26ae1bc706319f2d3337325807103eaa
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center"
              >
                Get Started
                <ArrowRightIcon className="h-5 w-5 ml-2" />
              </Link>
              <Link
                href="/services"
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:border-blue-400 hover:text-blue-600 transition-colors"
              >
                View All Services
              </Link>
            </div>
          </div>
<<<<<<< HEAD
=======

          <div className="bg-gray-800 rounded-lg p-6 text-center">
            <div className="text-4xl font-bold text-blue-400 mb-2">02</div>
            <h3 className="text-xl font-bold text-white mb-4">Solution Design</h3>
            <p className="text-gray-300">
              Our experts design custom AI solutions tailored to your specific business needs and objectives.
            </p>
          </div>

          <div className="bg-gray-800 rounded-lg p-6 text-center">
            <div className="text-4xl font-bold text-blue-400 mb-2">03</div>
            <h3 className="text-xl font-bold text-white mb-4">Development & Testing</h3>
            <p className="text-gray-300">
              We develop and rigorously test your AI solution to ensure optimal performance and reliability.
            </p>
          </div>

          <div className="bg-gray-800 rounded-lg p-6 text-center">
            <div className="text-4xl font-bold text-blue-400 mb-2">04</div>
            <h3 className="text-xl font-bold text-white mb-4">Deployment & Training</h3>
            <p className="text-gray-300">
              Seamless deployment with comprehensive training for your team to maximize solution adoption.
            </p>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss your project and discover how our solutions can accelerate your business growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Get Started
            </a>
            <a
              href="/services"
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors"
            >
              View Services
            </a>
          </div>
>>>>>>> 1b0ff75f26ae1bc706319f2d3337325807103eaa
        </div>
      </div>
    </div>
  );
}