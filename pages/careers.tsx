import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Users, MapPin, Clock, Briefcase, Heart, Zap, Award, Globe } from 'lucide-react';

export default function Careers() {
  const benefits = [
    {
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance, mental health support, and wellness programs.'
    },
    {
      icon: Zap,
      title: 'Flexible Work',
      description: 'Remote work options, flexible hours, and work-life balance initiatives.'
    },
    {
      icon: Award,
      title: 'Growth Opportunities',
      description: 'Professional development, training programs, and career advancement paths.'
    },
    {
      icon: Globe,
      title: 'Global Impact',
      description: 'Work on projects that make a difference for businesses worldwide.'
    }
  ];

  const openPositions = [
    {
      title: 'Senior AI Engineer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      description: 'Lead AI model development and implementation for enterprise clients.'
    },
    {
      title: 'Full Stack Developer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      description: 'Build scalable web applications using modern technologies.'
    },
    {
      title: 'Cloud Solutions Architect',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      description: 'Design and implement cloud infrastructure solutions.'
    },
    {
      title: 'Product Manager',
      department: 'Product',
      location: 'Remote',
      type: 'Full-time',
      description: 'Drive product strategy and roadmap for our technology solutions.'
    },
    {
      title: 'Sales Engineer',
      department: 'Sales',
      location: 'Remote',
      type: 'Full-time',
      description: 'Technical sales support and client relationship management.'
    },
    {
      title: 'UX/UI Designer',
      department: 'Design',
      location: 'Remote',
      type: 'Full-time',
      description: 'Create intuitive and engaging user experiences for our products.'
    }
  ];

  const values = [
    'Innovation and creativity in everything we do',
    'Collaboration and teamwork across all departments',
    'Continuous learning and professional growth',
    'Client success as our primary focus',
    'Transparency and open communication',
    'Work-life balance and employee well-being'
  ];

  return (
    <>
      <Head>
        <title>Careers - Zion Tech Group</title>
        <meta name="description" content="Join Zion Tech Group and be part of a team that's transforming businesses with cutting-edge technology solutions." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-6">
                Join Our Team
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Be part of a dynamic team that's revolutionizing how businesses use technology. We're looking for passionate individuals who want to make a real impact.
              </p>
            </div>
          </div>
        </section>

        {/* Why Work With Us */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Work With Us?</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                At Zion Tech Group, we believe our people are our greatest asset. Here's what makes us special.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <benefit.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Company Culture */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Culture</h2>
                <p className="text-lg text-gray-600 mb-8">
                  We foster an environment where innovation thrives, collaboration is encouraged, and every team member has the opportunity to grow and make a meaningful impact.
                </p>
                <div className="space-y-4">
                  {values.map((value, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-4"></div>
                      <span className="text-gray-700">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Join Our Mission</h3>
                <p className="text-lg mb-6">
                  We're not just building software – we're building the future. Every project we work on has the potential to transform entire industries and improve how businesses operate.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Users className="w-5 h-5 mr-3" />
                    <span>Collaborative team environment</span>
                  </div>
                  <div className="flex items-center">
                    <Briefcase className="w-5 h-5 mr-3" />
                    <span>Exciting project opportunities</span>
                  </div>
                  <div className="flex items-center">
                    <Award className="w-5 h-5 mr-3" />
                    <span>Recognition and growth</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Open Positions</h2>
              <p className="text-lg text-gray-600">
                Explore our current openings and find the perfect role for you.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {openPositions.map((position, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-semibold text-gray-900">{position.title}</h3>
                    <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                      {position.type}
                    </span>
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-gray-600">
                      <Briefcase className="w-4 h-4 mr-2" />
                      <span className="text-sm">{position.department}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span className="text-sm">{position.location}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6">{position.description}</p>
                  
                  <Link 
                    href="/contact" 
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center block"
                  >
                    Apply Now
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Don't See Your Perfect Role?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals. Send us your resume and let us know how you'd like to contribute to our mission.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Send Resume
              </Link>
              <Link href="/about" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Learn More About Us
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}