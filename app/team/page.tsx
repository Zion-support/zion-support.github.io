'use client';

import React from 'react';
import { Linkedin, Twitter, Github, Mail } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const TeamPage: React.FC = () => {
  const teamMembers = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      bio: 'Visionary leader with 15+ years in AI and technology innovation.',
      image: '/api/placeholder/300/300',
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#'
      }
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      bio: 'Technology expert specializing in cloud architecture and AI systems.',
      image: '/api/placeholder/300/300',
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#'
      }
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of AI Research',
      bio: 'Leading AI researcher with expertise in machine learning and neural networks.',
      image: '/api/placeholder/300/300',
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#'
      }
    },
    {
      name: 'David Kim',
      role: 'Head of Cybersecurity',
      bio: 'Security expert with extensive experience in enterprise cybersecurity solutions.',
      image: '/api/placeholder/300/300',
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#'
      }
    }
  ];

  return (
    <>
      <Helmet>
        <title>Our Team | Zion Tech Group</title>
        <meta name="description" content="Meet the talented team behind Zion Tech Group - experts in AI, cybersecurity, cloud computing, and technology innovation." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Meet Our
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Team
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              The brilliant minds behind our innovative solutions and cutting-edge technology.
            </p>
          </div>
        </section>

        <section className="py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 text-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-blue-400 mb-3">{member.role}</p>
                  <p className="text-gray-300 text-sm mb-4">{member.bio}</p>
                  <div className="flex justify-center space-x-4">
                    <a href={member.social.linkedin} className="text-gray-400 hover:text-blue-400 transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a href={member.social.twitter} className="text-gray-400 hover:text-blue-400 transition-colors">
                      <Twitter className="w-5 h-5" />
                    </a>
                    <a href={member.social.github} className="text-gray-400 hover:text-blue-400 transition-colors">
                      <Github className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default TeamPage;
