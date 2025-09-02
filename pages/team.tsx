import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Users, Award, Globe, Mail, Linkedin, Github, Twitter, MapPin, Calendar, Briefcase } from 'lucide-react';

export default function Team() {
  const teamMembers = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      bio: 'Visionary leader with 15+ years in technology innovation and business strategy.',
      image: '/images/team/sarah-johnson.jpg',
      location: 'San Francisco, CA',
      experience: '15+ years',
      linkedin: 'https://linkedin.com/in/sarahjohnson',
      twitter: 'https://twitter.com/sarahjohnson'
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      bio: 'Technical architect specializing in AI/ML and cloud infrastructure solutions.',
      image: '/images/team/michael-chen.jpg',
      location: 'Seattle, WA',
      experience: '12+ years',
      linkedin: 'https://linkedin.com/in/michaelchen',
      github: 'https://github.com/michaelchen'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of AI Services',
      bio: 'AI researcher and machine learning expert with a passion for ethical AI.',
      image: '/images/team/emily-rodriguez.jpg',
      location: 'Austin, TX',
      experience: '10+ years',
      linkedin: 'https://linkedin.com/in/emilyrodriguez',
      twitter: 'https://twitter.com/emilyrodriguez'
    },
    {
      name: 'David Kim',
      role: 'Lead Developer',
      bio: 'Full-stack developer with expertise in modern web technologies and microservices.',
      image: '/images/team/david-kim.jpg',
      location: 'New York, NY',
      experience: '8+ years',
      linkedin: 'https://linkedin.com/in/davidkim',
      github: 'https://github.com/davidkim'
    },
    {
      name: 'Lisa Thompson',
      role: 'Head of Operations',
      bio: 'Operations specialist focused on scaling businesses and optimizing processes.',
      image: '/images/team/lisa-thompson.jpg',
      location: 'Chicago, IL',
      experience: '12+ years',
      linkedin: 'https://linkedin.com/in/lisathompson'
    },
    {
      name: 'James Wilson',
      role: 'Senior AI Engineer',
      bio: 'Deep learning specialist with expertise in computer vision and NLP.',
      image: '/images/team/james-wilson.jpg',
      location: 'Boston, MA',
      experience: '9+ years',
      linkedin: 'https://linkedin.com/in/jameswilson',
      github: 'https://github.com/jameswilson'
    }
  ];

  const stats = [
    { number: '50+', label: 'Team Members' },
    { number: '15+', label: 'Countries Represented' },
    { number: '200+', label: 'Years Combined Experience' },
    { number: '95%', label: 'Employee Satisfaction' }
  ];

  return (
    <>
      <Head>
        <title>Our Team - Zion Tech Group</title>
        <meta name="description" content="Meet the talented team behind Zion Tech Group. Our experts are dedicated to delivering cutting-edge technology solutions." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://ziontechgroup.com/team" />
      </Head>
      
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-6">
                Meet Our <span className="text-blue-600">Expert Team</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Our diverse team of technology experts, innovators, and problem-solvers 
                is dedicated to delivering exceptional results for our clients.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Leadership Team</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our leadership team brings together decades of experience in technology, 
                business strategy, and innovation.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                      <Users className="w-16 h-16 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
                    <p className="text-blue-600 font-semibold mb-4">{member.role}</p>
                    <p className="text-gray-600 mb-6">{member.bio}</p>
                    
                    <div className="space-y-2 mb-6">
                      <div className="flex items-center justify-center text-sm text-gray-500">
                        <MapPin className="w-4 h-4 mr-2" />
                        {member.location}
                      </div>
                      <div className="flex items-center justify-center text-sm text-gray-500">
                        <Briefcase className="w-4 h-4 mr-2" />
                        {member.experience}
                      </div>
                    </div>
                    
                    <div className="flex justify-center space-x-4">
                      {member.linkedin && (
                        <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                          <Linkedin className="w-5 h-5" />
                        </a>
                      )}
                      {member.twitter && (
                        <a href={member.twitter} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600">
                          <Twitter className="w-5 h-5" />
                        </a>
                      )}
                      {member.github && (
                        <a href={member.github} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800">
                          <Github className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Culture Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Culture</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We foster a culture of innovation, collaboration, and continuous learning.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Award className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Excellence</h3>
                <p className="text-gray-600">We strive for excellence in everything we do, from code quality to client relationships.</p>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Collaboration</h3>
                <p className="text-gray-600">We believe in the power of teamwork and diverse perspectives to solve complex problems.</p>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Globe className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Global Impact</h3>
                <p className="text-gray-600">We're committed to using technology to make a positive impact on the world.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Join Our Team
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals who share our passion for technology and innovation.
            </p>
            <Link href="/careers" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              View Open Positions
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}