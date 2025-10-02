import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Zion Tech Group - AI & IT Solutions Leader',
  description: 'Learn about Zion Tech Group\'s mission to transform businesses through cutting-edge AI, micro SaaS, and IT solutions. Our expertise drives innovation.',
  keywords: 'about Zion Tech Group, AI company, IT solutions, enterprise technology, company mission',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 px-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            About Zion Tech Group
          </h1>
          <p className="text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Pioneering the future of business through revolutionary AI technology, 
            micro SaaS innovation, and enterprise-grade IT solutions.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                To democratize advanced AI technology and make it accessible to businesses of all sizes. 
                We believe that every organization should have the power to transform their operations 
                through intelligent automation and cutting-edge technology.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our mission is to bridge the gap between complex AI capabilities and practical business 
                applications, delivering solutions that drive real results and measurable ROI.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                To become the global leader in AI-powered business transformation, enabling organizations 
                to achieve unprecedented levels of efficiency, innovation, and growth.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">Democratize AI technology</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">Drive measurable business outcomes</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-purple-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">Foster innovation and growth</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Impact
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Numbers that reflect our commitment to delivering exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl">
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <p className="text-gray-700 font-semibold">Projects Delivered</p>
              <p className="text-sm text-gray-600 mt-2">Successful implementations worldwide</p>
            </div>
            <div className="text-center bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-xl">
              <div className="text-4xl font-bold text-green-600 mb-2">$2.3B</div>
              <p className="text-gray-700 font-semibold">Cost Savings Generated</p>
              <p className="text-sm text-gray-600 mt-2">Across all client implementations</p>
            </div>
            <div className="text-center bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-xl">
              <div className="text-4xl font-bold text-purple-600 mb-2">156%</div>
              <p className="text-gray-700 font-semibold">Average ROI</p>
              <p className="text-sm text-gray-600 mt-2">Within first year of implementation</p>
            </div>
            <div className="text-center bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-xl">
              <div className="text-4xl font-bold text-orange-600 mb-2">99.9%</div>
              <p className="text-gray-700 font-semibold">Uptime Guarantee</p>
              <p className="text-sm text-gray-600 mt-2">Reliable service delivery</p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the visionaries driving innovation and transformation at Zion Tech Group
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="text-center mb-6">
                <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">K</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Kleber</h3>
                <p className="text-blue-600 font-semibold">Founder & CEO</p>
              </div>
              <p className="text-gray-600 leading-relaxed">
                With over 15 years of experience in AI and enterprise technology, Kleber founded Zion Tech Group 
                with a vision to make advanced AI accessible to businesses of all sizes. His expertise spans 
                machine learning, cloud architecture, and digital transformation.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="text-center mb-6">
                <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-teal-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">ZT</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Zion Tech Group</h3>
                <p className="text-green-600 font-semibold">Expert Team</p>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Our diverse team of AI engineers, data scientists, cloud architects, and business strategists 
                work together to deliver cutting-edge solutions. We combine deep technical expertise with 
                practical business acumen to drive real results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">💡</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Innovation</h3>
              <p className="text-gray-600">We constantly push the boundaries of what's possible with AI and technology, always seeking new ways to solve complex business challenges.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">🎯</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Results-Driven</h3>
              <p className="text-gray-600">Every solution we deliver is designed to produce measurable business outcomes and tangible value for our clients.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">🤝</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Partnership</h3>
              <p className="text-gray-600">We work closely with our clients as trusted partners, understanding their unique needs and challenges to deliver tailored solutions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how Zion Tech Group can help transform your business with cutting-edge AI and technology solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
            >
              Call +1 302 464 0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}