import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function TeamPage() {
  const teamMembers = [
    {
      name: 'Dr. Kleber Santos',
      role: 'CEO & AI Research Director',
      bio: 'Leading expert in AI and machine learning with over 15 years of experience in enterprise transformation.',
      image: '/api/placeholder/300/300',
      expertise: ['AI Research', 'Enterprise Strategy', 'Digital Transformation']
    },
    {
      name: 'Sarah Johnson',
      role: 'CTO & Technical Director',
      bio: 'Technology visionary specializing in scalable AI systems and cloud architecture.',
      image: '/api/placeholder/300/300',
      expertise: ['Cloud Architecture', 'AI Systems', 'DevOps']
    },
    {
      name: 'Michael Chen',
      role: 'Head of AI Solutions',
      bio: 'Expert in implementing AI solutions that deliver measurable business value and ROI.',
      image: '/api/placeholder/300/300',
      expertise: ['AI Implementation', 'Business Intelligence', 'Data Science']
    }
  ];

  return (
    <>
      <Helmet>
        <title>Our Team - Zion Tech Group AI Experts</title>
        <meta name="description" content="Meet the expert team at Zion Tech Group. Our AI specialists, engineers, and business leaders are dedicated to delivering cutting-edge AI solutions for enterprise transformation." />
        <meta name="keywords" content="AI team, machine learning experts, enterprise AI, technology leadership, AI specialists" />
        <meta property="og:title" content="Our Team - Zion Tech Group AI Experts" />
        <meta property="og:description" content="Meet the expert team at Zion Tech Group. Our AI specialists, engineers, and business leaders are dedicated to delivering cutting-edge AI solutions." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://zion.app/team" />
      </Helmet>
      <div className='min-h-screen bg-gray-50 py-16'>
        <div className='container mx-auto px-4'>
        <div className='text-center mb-16'>
          <h1 className='text-4xl font-bold text-gray-900 mb-6'>Meet Our Expert Team</h1>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
            Our team of AI experts and technology professionals is dedicated to delivering exceptional results for your business transformation.
          </p>
        </div>
        
        <div className='grid md:grid-cols-3 gap-8'>
          {teamMembers.map((member, index) => (
            <div key={index} className='bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300'>
              <div className='h-64 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center'>
                <span className='text-white text-4xl font-bold'>
                  {member.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <div className='p-6'>
                <h2 className='text-xl font-semibold text-gray-900 mb-2'>{member.name}</h2>
                <p className='text-blue-600 font-medium mb-3'>{member.role}</p>
                <p className='text-gray-600 mb-4'>{member.bio}</p>
                <div className='flex flex-wrap gap-2'>
                  {member.expertise.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className='bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold'
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className='text-center mt-16'>
          <div className='bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16 rounded-2xl'>
            <h2 className='text-3xl font-bold mb-4'>Join Our Team</h2>
            <p className='text-xl mb-8'>We're always looking for talented individuals to join our mission of transforming businesses with AI.</p>
            <button className='bg-white text-blue-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-300'>
              View Open Positions
            </button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
