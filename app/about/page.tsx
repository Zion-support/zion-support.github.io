import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | Zion Tech Group',
  description: 'Learn about Zion Tech Group\'s mission, vision, and commitment to delivering cutting-edge AI, micro SaaS, and IT solutions.',
  keywords: 'about, company, mission, vision, AI solutions, micro SaaS, IT services',
};

<<<<<<< HEAD
export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Zion Tech Group
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are a leading technology company dedicated to transforming businesses 
            through innovative AI solutions, micro SaaS platforms, and comprehensive IT services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-lg text-gray-600 mb-6">
              To empower businesses with cutting-edge technology solutions that drive 
              innovation, efficiency, and growth. We believe in the transformative power 
              of AI and technology to solve complex business challenges.
            </p>
            <p className="text-lg text-gray-600">
              Our team of experts is committed to delivering exceptional value through 
              personalized solutions that meet the unique needs of each client.
            </p>
          </div>
<<<<<<< HEAD
<<<<<<< HEAD
          <div className="bg-gray-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                </div>
                <span className="text-gray-700">Innovation through simplicity</span>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                </div>
                <span className="text-gray-700">Client success is our success</span>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                </div>
                <span className="text-gray-700">Transparency in everything we do</span>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                </div>
                <span className="text-gray-700">Continuous learning and improvement</span>
              </li>
            </ul>
=======
          
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Our Vision</h2>
            <p className="text-gray-300 text-lg mb-6">
              To be the world&apos;s most trusted technology partner, known for our 
              innovation, reliability, and commitment to client success.
            </p>
            <p className="text-gray-300 text-lg">
              We envision a future where technology seamlessly integrates with 
              business operations to create unprecedented value and opportunities.
            </p>
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
            <p className="text-lg text-gray-600 mb-6">
              To be the global leader in AI-powered business solutions, setting the 
              standard for innovation, reliability, and customer satisfaction in the 
              technology services industry.
            </p>
            <p className="text-lg text-gray-600">
              We envision a future where every business can leverage advanced technology 
              to achieve unprecedented success and growth.
            </p>
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Innovation</h3>
              <p className="text-gray-600">
                We continuously push the boundaries of what's possible with technology, 
                always seeking new and better ways to solve problems.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Excellence</h3>
              <p className="text-gray-600">
                We are committed to delivering the highest quality solutions and 
                maintaining the highest standards in everything we do.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Partnership</h3>
              <p className="text-gray-600">
                We work closely with our clients as partners, understanding their 
                goals and challenges to deliver tailored solutions.
              </p>
            </div>
=======
export const metadata = {
  title: 'About | Zion Tech Group',
  description: 'Learn about Zion Tech Group\'s mission to deliver enterprise-grade AI, micro SaaS, and IT solutions that drive real business results.'
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About Zion Tech Group
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We are a leading technology company specializing in AI, autonomous systems, quantum computing, and innovative business solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
            <p className="text-gray-300 mb-6">
              To democratize access to cutting-edge AI and technology solutions, empowering businesses of all sizes to compete and thrive in the digital age.
            </p>
            <p className="text-gray-300 mb-6">
              We combine technical expertise with business acumen to create solutions that drive real results for our clients.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/contact"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center"
              >
                Get in Touch
              </a>
              <a
                href="/services"
                className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors text-center"
              >
                Our Services
              </a>
            </div>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Why Choose Us?</h3>
            <ul className="space-y-4">
              <li className="flex items-center text-gray-300">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                1000+ successful projects delivered
              </li>
              <li className="flex items-center text-gray-300">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                24/7 technical support
              </li>
              <li className="flex items-center text-gray-300">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                Enterprise-grade security
              </li>
              <li className="flex items-center text-gray-300">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                Custom solutions for every need
              </li>
            </ul>
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
          </div>
        </div>
      </div>
    </div>
  );
}