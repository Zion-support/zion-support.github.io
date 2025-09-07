'use client';

<<<<<<< HEAD
export const metadata = {
  title: 'About | Zion Tech Group',
  description:
    "Learn about Zion Tech Group's mission to deliver enterprise-grade AI, micro SaaS, and IT solutions that drive real business results.",
};
=======
import React, { useState } from 'react';
import { 
  CheckCircleIcon, 
  UserGroupIcon, 
  LightBulbIcon, 
  ShieldCheckIcon,
  RocketLaunchIcon,
  ChartBarIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-625f

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState('mission');

  const values = [
    {
      icon: LightBulbIcon,
      title: 'Innovation',
      description: 'We constantly push the boundaries of what\'s possible with technology, always seeking new ways to solve complex problems.'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Reliability',
      description: 'Our solutions are built with enterprise-grade security and reliability, ensuring your business operations never skip a beat.'
    },
    {
      icon: UserGroupIcon,
      title: 'Collaboration',
      description: 'We work closely with our clients as partners, understanding their unique needs and delivering tailored solutions.'
    },
    {
      icon: RocketLaunchIcon,
      title: 'Growth',
      description: 'Our solutions are designed to scale with your business, supporting your growth journey every step of the way.'
    }
  ];

  const team = [
    {
      name: 'Sarah Chen',
      role: 'CEO & Co-Founder',
      bio: 'Former Google AI researcher with 15+ years in machine learning and business strategy.',
      image: '/team/sarah-chen.jpg'
    },
    {
      name: 'Michael Rodriguez',
      role: 'CTO & Co-Founder',
      bio: 'Ex-Microsoft architect specializing in cloud infrastructure and scalable systems.',
      image: '/team/michael-rodriguez.jpg'
    },
    {
      name: 'Dr. Emily Watson',
      role: 'Head of AI Research',
      bio: 'PhD in Computer Science from MIT, leading our AI innovation initiatives.',
      image: '/team/emily-watson.jpg'
    },
    {
      name: 'David Kim',
      role: 'VP of Engineering',
      bio: 'Former Amazon engineer with expertise in microservices and DevOps automation.',
      image: '/team/david-kim.jpg'
    }
  ];

  return (
<<<<<<< HEAD
    <div className='min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900'>
      <div className='container mx-auto px-4 py-16'>
        <div className='text-center mb-16'>
          <h1 className='text-4xl md:text-5xl font-bold text-white mb-6'>
            About Zion Tech Group
          </h1>
          <p className='text-xl text-gray-300 max-w-3xl mx-auto'>
            We are a leading technology company specializing in AI, autonomous
            systems, quantum computing, and innovative business solutions.
          </p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
          <div>
            <h2 className='text-3xl font-bold text-white mb-6'>Our Mission</h2>
            <p className='text-gray-300 mb-6'>
              To democratize access to cutting-edge AI and technology solutions,
              empowering businesses of all sizes to compete and thrive in the
              digital age.
            </p>
            <p className='text-gray-300 mb-6'>
              We combine technical expertise with business acumen to create
              solutions that drive real results for our clients.
            </p>
            <div className='flex flex-col sm:flex-row gap-4'>
              <a
                href='/contact'
                className='bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center'
              >
                Get in Touch
              </a>
              <a
                href='/services'
                className='border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors text-center'
              >
                Our Services
              </a>
            </div>
          </div>

          <div className='bg-gray-800 rounded-lg p-8'>
            <h3 className='text-2xl font-bold text-white mb-6'>
              Why Choose Us?
            </h3>
            <ul className='space-y-4'>
              <li className='flex items-center text-gray-300'>
                <span className='w-2 h-2 bg-blue-500 rounded-full mr-3'></span>
                1000+ successful projects delivered
              </li>
              <li className='flex items-center text-gray-300'>
                <span className='w-2 h-2 bg-blue-500 rounded-full mr-3'></span>
                24/7 technical support
              </li>
              <li className='flex items-center text-gray-300'>
                <span className='w-2 h-2 bg-blue-500 rounded-full mr-3'></span>
                Enterprise-grade security
              </li>
              <li className='flex items-center text-gray-300'>
                <span className='w-2 h-2 bg-blue-500 rounded-full mr-3'></span>
                Custom solutions for every need
              </li>
            </ul>
=======
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About Zion Tech Group
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We are a leading technology company specializing in AI, autonomous systems, quantum computing, and innovative business solutions that transform how companies operate.
          </p>
        </div>

        {/* Mission, Vision, Values Tabs */}
        <div className="mb-16">
          <div className="flex flex-wrap justify-center mb-8">
            {[
              { id: 'mission', label: 'Mission' },
              { id: 'vision', label: 'Vision' },
              { id: 'values', label: 'Values' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 mx-2 rounded-lg transition-colors ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="bg-slate-800 rounded-xl p-8 max-w-4xl mx-auto">
            {activeTab === 'mission' && (
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
                <p className="text-gray-300 mb-6 text-lg">
                  To democratize access to cutting-edge AI and technology solutions, empowering businesses of all sizes to compete and thrive in the digital age.
                </p>
                <p className="text-gray-300 mb-6">
                  We combine technical expertise with business acumen to create solutions that drive real results for our clients, helping them achieve their goals faster and more efficiently.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-start">
                    <CheckCircleIcon className="h-6 w-6 text-green-400 mr-3 mt-1" />
                    <span className="text-gray-300">Proven track record of successful projects</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircleIcon className="h-6 w-6 text-green-400 mr-3 mt-1" />
                    <span className="text-gray-300">Expert team with deep industry knowledge</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'vision' && (
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Our Vision</h2>
                <p className="text-gray-300 mb-6 text-lg">
                  To be the world's leading provider of AI-powered business solutions, creating a future where technology seamlessly integrates with human potential.
                </p>
                <p className="text-gray-300 mb-6">
                  We envision a world where every business, regardless of size, has access to enterprise-grade AI tools that level the playing field and drive innovation.
                </p>
                <div className="bg-blue-600/20 border border-blue-600/30 rounded-lg p-6">
                  <p className="text-blue-200 italic">
                    "By 2030, we aim to have helped over 10,000 businesses transform their operations through AI and automation."
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'values' && (
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Our Values</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {values.map((value, index) => (
                    <div key={index} className="flex items-start">
                      <div className="bg-blue-600 p-3 rounded-lg mr-4">
                        <value.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2">{value.title}</h3>
                        <p className="text-gray-300">{value.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Meet Our Team</h2>
            <p className="text-gray-300">The brilliant minds behind our innovative solutions</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-slate-800 rounded-xl p-6 text-center hover:bg-slate-700 transition-colors">
                <div className="w-24 h-24 bg-gray-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <UserGroupIcon className="h-12 w-12 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                <p className="text-blue-400 mb-3">{member.role}</p>
                <p className="text-gray-300 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-slate-800 rounded-xl p-8 mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">By the Numbers</h2>
            <p className="text-gray-300">Our impact in the technology industry</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">500+</div>
              <div className="text-gray-300">Companies Served</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">1,200+</div>
              <div className="text-gray-300">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">10+</div>
              <div className="text-gray-300">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">25+</div>
              <div className="text-gray-300">Countries</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Work With Us?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how our team can help transform your business with cutting-edge technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center">
              Get Started
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </button>
            <button className="border border-blue-600 text-blue-400 px-8 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition-colors">
              View Our Services
            </button>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-625f
          </div>
        </div>
      </div>
    </div>
  );
}
