import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  CheckCircleIcon,
  UserGroupIcon,
  LightBulbIcon,
  ShieldCheckIcon,
  RocketLaunchIcon,
  HeartIcon,
  ArrowRightIcon,
  StarIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon
} from '@heroicons/react/24/outline';

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>About Us - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group, a leading provider of AI and IT solutions, cybersecurity, and digital transformation services." />
      </Helmet>
      
      <div className="min-h-screen bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Zion Tech Group</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We are a leading technology company specializing in AI solutions, cybersecurity, 
              and digital transformation services that help businesses thrive in the digital age.
            </p>
          </div>

          {/* Mission Section */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-gray-300 mb-6">
                To empower businesses with cutting-edge technology solutions that drive innovation, 
                enhance security, and accelerate digital transformation.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircleIcon className="w-6 h-6 text-green-400 mr-3 mt-1" />
                  <span className="text-gray-300">Innovation-driven approach</span>
                </div>
                <div className="flex items-start">
                  <CheckCircleIcon className="w-6 h-6 text-green-400 mr-3 mt-1" />
                  <span className="text-gray-300">Client-focused solutions</span>
                </div>
                <div className="flex items-start">
                  <CheckCircleIcon className="w-6 h-6 text-green-400 mr-3 mt-1" />
                  <span className="text-gray-300">Cutting-edge technology</span>
                </div>
              </div>
            </div>
            <div className="bg-slate-800/50 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4">Our Values</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <HeartIcon className="w-6 h-6 text-red-400 mr-3" />
                  <span className="text-gray-300">Passion for excellence</span>
                </div>
                <div className="flex items-center">
                  <ShieldCheckIcon className="w-6 h-6 text-blue-400 mr-3" />
                  <span className="text-gray-300">Security first</span>
                </div>
                <div className="flex items-center">
                  <LightBulbIcon className="w-6 h-6 text-yellow-400 mr-3" />
                  <span className="text-gray-300">Innovation mindset</span>
                </div>
                <div className="flex items-center">
                  <UserGroupIcon className="w-6 h-6 text-green-400 mr-3" />
                  <span className="text-gray-300">Team collaboration</span>
                </div>
              </div>
            </div>
          </div>

          {/* Team Section */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Our Team</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              We are a team of passionate professionals dedicated to delivering exceptional 
              technology solutions and outstanding customer service.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-slate-800/50 rounded-lg p-8">
                <UserGroupIcon className="w-16 h-16 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Expert Team</h3>
                <p className="text-gray-300">Highly skilled professionals with years of experience</p>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-8">
                <RocketLaunchIcon className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Innovation</h3>
                <p className="text-gray-300">Always pushing the boundaries of what's possible</p>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-8">
                <StarIcon className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Excellence</h3>
                <p className="text-gray-300">Committed to delivering the highest quality solutions</p>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="bg-slate-800/50 rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
            <p className="text-xl text-gray-300 mb-8">
              Ready to transform your business? Let's discuss how we can help.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a 
                href="tel:+1-302-464-0950"
                className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300"
              >
                <PhoneIcon className="w-5 h-5 mr-2" />
                Call Us
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-purple-400 text-purple-300 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300"
              >
                <EnvelopeIcon className="w-5 h-5 mr-2" />
                Email Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}