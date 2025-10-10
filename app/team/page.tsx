'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Users, Award, Globe, Mail, Linkedin, Github, Twitter } from 'lucide-react';

const TeamPage: React.FC = () => {
  const teamMembers = [
    {
      id: '1',
      name: 'Dr. Sarah Chen',
      role: 'Chief Technology Officer',
      bio: 'AI and machine learning expert with 15+ years of experience in enterprise solutions.',
      image: '/images/team/sarah-chen.jpg',
      social: {
        linkedin: 'https://linkedin.com/in/sarahchen',
        twitter: 'https://twitter.com/sarahchen',
        email: 'sarah@ziontechgroup.com'
      }
    },
    {
      id: '2',
      name: 'Michael Rodriguez',
      role: 'Lead Cloud Architect',
      bio: 'Cloud infrastructure specialist with expertise in AWS, Azure, and Google Cloud.',
      image: '/images/team/michael-rodriguez.jpg',
      social: {
        linkedin: 'https://linkedin.com/in/michaelrodriguez',
        github: 'https://github.com/michaelrodriguez',
        email: 'michael@ziontechgroup.com'
      }
    },
    {
      id: '3',
      name: 'Alex Thompson',
      role: 'Head of Cybersecurity',
      bio: 'Cybersecurity expert with extensive experience in threat detection and prevention.',
      image: '/images/team/alex-thompson.jpg',
      social: {
        linkedin: 'https://linkedin.com/in/alexthompson',
        twitter: 'https://twitter.com/alexthompson',
        email: 'alex@ziontechgroup.com'
      }
    },
    {
      id: '4',
      name: 'Emma Wilson',
      role: 'Senior AI Engineer',
      bio: 'Full-stack developer specializing in AI applications and machine learning models.',
      image: '/images/team/emma-wilson.jpg',
      social: {
        linkedin: 'https://linkedin.com/in/emmawilson',
        github: 'https://github.com/emmawilson',
        email: 'emma@ziontechgroup.com'
      }
    }
  ];

  const values = [
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and open communication.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, from code to customer service.'
    },
    {
      icon: Globe,
      title: 'Innovation',
      description: 'We embrace new technologies and innovative approaches to solve complex problems.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Our Team - Zion Tech Group | Meet the Experts</title>
        <meta name="description" content="Meet the talented team behind Zion Tech Group. Learn about our experts in AI, cloud computing, cybersecurity, and software development." />
        <meta name="keywords" content="team, experts, AI engineers, cloud architects, cybersecurity specialists, software developers" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Team</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              The talented individuals behind Zion Tech Group. We're passionate about technology and committed to delivering exceptional solutions.
            </p>
          </div>
        </section>

        {/* Team Members */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Our Experts
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Meet the brilliant minds driving innovation at Zion Tech Group.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member) => (
                <div key={member.id} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/20 transition-all duration-300 group text-center">
                  <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-purple-400 text-sm mb-4">{member.role}</p>
                  <p className="text-gray-300 text-sm mb-6">{member.bio}</p>
                  <div className="flex justify-center space-x-3">
                    {member.social.linkedin && (
                      <a
                        href={member.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-blue-400 transition-colors"
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                    )}
                    {member.social.twitter && (
                      <a
                        href={member.social.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-blue-400 transition-colors"
                      >
                        <Twitter className="w-5 h-5" />
                      </a>
                    )}
                    {member.social.github && (
                      <a
                        href={member.social.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                    {member.social.email && (
                      <a
                        href={`mailto:${member.social.email}`}
                        className="text-gray-400 hover:text-purple-400 transition-colors"
                      >
                        <Mail className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Company Values */}
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Our Values
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                The principles that guide our work and shape our culture.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center group">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-12 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6">
                Join Our Team
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                We're always looking for talented individuals to join our growing team. Explore our open positions and be part of our mission.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/careers"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
                >
                  <Users className="w-5 h-5" />
                  View Open Positions
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <Mail className="w-5 h-5" />
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default TeamPage;
