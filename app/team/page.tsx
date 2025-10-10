'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Users, Award, CheckCircle, ArrowRight, Mail, Linkedin, Github } from 'lucide-react';

const TeamPage: React.FC = () => {
  const teamMembers = [
    {
      name: 'Dr. Sarah Chen',
      role: 'Chief Executive Officer',
      expertise: 'AI Strategy & Leadership',
      image: '/images/team/sarah-chen.jpg',
      bio: 'Leading AI expert with 15+ years in enterprise technology solutions.',
      email: 'sarah@ziontechgroup.com',
      linkedin: 'https://linkedin.com/in/sarahchen',
      github: 'https://github.com/sarahchen'
    },
    {
      name: 'Michael Rodriguez',
      role: 'Chief Technology Officer',
      expertise: 'Cloud Architecture & AI',
      image: '/images/team/michael-rodriguez.jpg',
      bio: 'Technology visionary specializing in scalable cloud solutions and AI implementation.',
      email: 'michael@ziontechgroup.com',
      linkedin: 'https://linkedin.com/in/michaelrodriguez',
      github: 'https://github.com/michaelrodriguez'
    },
    {
      name: 'Alex Thompson',
      role: 'Head of Security',
      expertise: 'Cybersecurity & Compliance',
      image: '/images/team/alex-thompson.jpg',
      bio: 'Cybersecurity expert ensuring our solutions meet the highest security standards.',
      email: 'alex@ziontechgroup.com',
      linkedin: 'https://linkedin.com/in/alexthompson',
      github: 'https://github.com/alexthompson'
    },
    {
      name: 'Dr. Maria Garcia',
      role: 'Head of AI Research',
      expertise: 'Machine Learning & Quantum Computing',
      image: '/images/team/maria-garcia.jpg',
      bio: 'Research scientist pushing the boundaries of AI and quantum computing applications.',
      email: 'maria@ziontechgroup.com',
      linkedin: 'https://linkedin.com/in/mariagarcia',
      github: 'https://github.com/mariagarcia'
    }
  ];

  const values = [
    'Innovation and continuous learning',
    'Collaboration and teamwork',
    'Excellence in everything we do',
    'Customer-centric approach',
    'Ethical AI development',
    'Diversity and inclusion'
  ];

  return (
    <>
      <Helmet>
        <title>Our Team - Zion Tech Group | Meet Our Experts</title>
        <meta name="description" content="Meet the talented team behind Zion Tech Group. Our experts in AI, technology, and business solutions are here to help you succeed." />
        <meta name="keywords" content="team, experts, AI specialists, technology leaders, Zion Tech Group team" />
        <meta property="og:title" content="Our Team - Zion Tech Group" />
        <meta property="og:description" content="Meet our team of AI and technology experts" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/team" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Team</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              Our diverse team of experts brings together decades of experience in AI, cloud computing, cybersecurity, and business innovation to deliver exceptional solutions.
            </p>
          </div>
        </section>

        {/* Team Members */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Leadership Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-purple-400 transition-all duration-300 group">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Users className="w-12 h-12 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-cyan-400 font-medium mb-2">{member.role}</p>
                    <p className="text-gray-300 text-sm mb-4">{member.expertise}</p>
                    <p className="text-gray-400 text-sm mb-4">{member.bio}</p>
                    <div className="flex justify-center space-x-4">
                      <a
                        href={`mailto:${member.email}`}
                        className="text-gray-400 hover:text-cyan-400 transition-colors"
                      >
                        <Mail className="w-5 h-5" />
                      </a>
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-cyan-400 transition-colors"
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                      <a
                        href={member.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-cyan-400 transition-colors"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div key={index} className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">{value}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-12 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6">
                Join Our Team
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                We're always looking for talented individuals to join our growing team. Explore career opportunities with us.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/careers"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
                >
                  <Users className="w-5 h-5" />
                  View Careers
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <ArrowRight className="w-5 h-5" />
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default TeamPage;