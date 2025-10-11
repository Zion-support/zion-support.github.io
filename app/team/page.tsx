'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Users, Award, Code, Brain, Cloud, Shield, Mail, Phone, MapPin, Linkedin, Github, Twitter } from 'lucide-react';

const TeamPage: React.FC = () => {
  const teamMembers = [
    {
      name: 'Dr. Kleber Santos',
      role: 'CEO & Founder',
      expertise: 'AI & Quantum Computing',
      bio: 'Visionary leader with 15+ years in AI research and quantum computing. PhD in Computer Science from MIT.',
      image: '/images/team/kleber-santos.jpg',
      social: {
        linkedin: 'https://linkedin.com/in/kleber-santos',
        github: 'https://github.com/kleber-santos',
        twitter: 'https://twitter.com/kleber_santos'
      }
    },
    {
      name: 'Sarah Chen',
      role: 'CTO',
      expertise: 'Cloud Infrastructure & DevOps',
      bio: 'Expert in scalable cloud architectures and DevOps practices. Former AWS Solutions Architect.',
      image: '/images/team/sarah-chen.jpg',
      social: {
        linkedin: 'https://linkedin.com/in/sarah-chen',
        github: 'https://github.com/sarah-chen'
      }
    },
    {
      name: 'Michael Rodriguez',
      role: 'Head of AI Research',
      expertise: 'Machine Learning & Neural Networks',
      bio: 'Leading AI researcher with expertise in deep learning and computer vision. PhD in AI from Stanford.',
      image: '/images/team/michael-rodriguez.jpg',
      social: {
        linkedin: 'https://linkedin.com/in/michael-rodriguez',
        github: 'https://github.com/michael-rodriguez'
      }
    },
    {
      name: 'Emily Johnson',
      role: 'Head of Cybersecurity',
      expertise: 'Cybersecurity & Threat Intelligence',
      bio: 'Cybersecurity expert with 12+ years protecting enterprise systems. CISSP certified.',
      image: '/images/team/emily-johnson.jpg',
      social: {
        linkedin: 'https://linkedin.com/in/emily-johnson',
        twitter: 'https://twitter.com/emily_cyber'
      }
    },
    {
      name: 'David Kim',
      role: 'Lead Developer',
      expertise: 'Full-Stack Development & Microservices',
      bio: 'Full-stack developer specializing in microservices architecture and modern web technologies.',
      image: '/images/team/david-kim.jpg',
      social: {
        linkedin: 'https://linkedin.com/in/david-kim',
        github: 'https://github.com/david-kim'
      }
    },
    {
      name: 'Lisa Wang',
      role: 'Head of Product',
      expertise: 'Product Strategy & UX Design',
      bio: 'Product strategist with expertise in SaaS platforms and user experience design.',
      image: '/images/team/lisa-wang.jpg',
      social: {
        linkedin: 'https://linkedin.com/in/lisa-wang',
        twitter: 'https://twitter.com/lisa_product'
      }
    }
  ];

  const values = [
    {
      icon: Brain,
      title: 'Innovation First',
      description: 'We constantly push the boundaries of what\'s possible with cutting-edge technology.'
    },
    {
      icon: Users,
      title: 'Collaborative Spirit',
      description: 'We believe in the power of teamwork and diverse perspectives to solve complex problems.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, from code quality to client relationships.'
    },
    {
      icon: Code,
      title: 'Technical Mastery',
      description: 'We maintain the highest standards of technical expertise and continuous learning.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Our Team - Zion Tech Group | Meet the Experts</title>
        <meta name="description" content="Meet the talented team behind Zion Tech Group. Our experts in AI, cloud computing, cybersecurity, and software development are dedicated to delivering exceptional solutions." />
        <meta name="keywords" content="team, experts, AI researchers, cloud architects, cybersecurity specialists, software developers, leadership" />
        <link rel="canonical" href="https://ziontechgroup.com/team" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        <main className="pt-20">
          {/* Hero Section */}
          <section className="py-20 px-4">
            <div className="max-w-7xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Meet Our <span className="text-cyan-400">Expert Team</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Our diverse team of AI researchers, cloud architects, cybersecurity specialists, 
                and software developers work together to deliver cutting-edge solutions.
              </p>
            </div>
          </section>

          {/* Team Members */}
          <section className="py-16 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {teamMembers.map((member, index) => (
                  <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 hover:scale-105">
                    <div className="text-center mb-6">
                      <div className="w-32 h-32 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Users className="w-16 h-16 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                      <p className="text-cyan-400 font-semibold mb-2">{member.role}</p>
                      <p className="text-gray-300 text-sm">{member.expertise}</p>
                    </div>
                    <p className="text-gray-300 mb-6 leading-relaxed text-center">
                      {member.bio}
                    </p>
                    <div className="flex justify-center space-x-4">
                      {member.social.linkedin && (
                        <a
                          href={member.social.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-cyan-400 hover:text-cyan-300 transition-colors"
                        >
                          <Linkedin className="w-5 h-5" />
                        </a>
                      )}
                      {member.social.github && (
                        <a
                          href={member.social.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-cyan-400 hover:text-cyan-300 transition-colors"
                        >
                          <Github className="w-5 h-5" />
                        </a>
                      )}
                      {member.social.twitter && (
                        <a
                          href={member.social.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-cyan-400 hover:text-cyan-300 transition-colors"
                        >
                          <Twitter className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Our Values */}
          <section className="py-20 bg-gradient-to-br from-slate-800/50 to-slate-900/50">
            <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Our <span className="text-cyan-400">Values</span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  The principles that guide our team and shape our culture
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {values.map((value, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <value.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Join Our Team CTA */}
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4">
              <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-lg rounded-3xl p-12 text-center border border-cyan-500/20">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Join Our Team
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                  We're always looking for talented individuals who share our passion for innovation 
                  and excellence. Explore our open positions and become part of our mission.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/careers"
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 text-lg"
                  >
                    View Open Positions
                  </a>
                  <a
                    href="/contact"
                    className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300 text-lg"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Information */}
          <section className="py-16 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
                <h2 className="text-2xl font-bold text-white mb-6 text-center">Get in Touch</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-6 h-6 text-cyan-400" />
                    <div>
                      <div className="text-white font-semibold">Email</div>
                      <a href="mailto:team@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">
                        team@ziontechgroup.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-6 h-6 text-cyan-400" />
                    <div>
                      <div className="text-white font-semibold">Phone</div>
                      <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300">
                        +1 (302) 464-0950
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-6 h-6 text-cyan-400" />
                    <div>
                      <div className="text-white font-semibold">Address</div>
                      <div className="text-gray-300">364 E Main St STE 1008, Middletown, DE 19709</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default TeamPage;