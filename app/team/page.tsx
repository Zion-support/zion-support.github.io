'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Users, Award, Globe, Code, Brain, Cloud, Shield, CheckCircle, ArrowRight, Mail, Linkedin, Github } from 'lucide-react';

const TeamPage: React.FC = () => {
  const teamMembers = [
    {
      name: 'Kleber Santos',
      role: 'CEO & Founder',
      bio: 'Visionary leader with 15+ years in AI and technology innovation.',
      image: '/images/team/kleber.jpg',
      expertise: ['AI Strategy', 'Leadership', 'Innovation'],
      social: {
        linkedin: 'https://linkedin.com/in/kleber-santos',
        email: 'kleber@ziontechgroup.com'
      }
    },
    {
      name: 'Sarah Johnson',
      role: 'CTO',
      bio: 'Technical architect specializing in scalable AI solutions and cloud infrastructure.',
      image: '/images/team/sarah.jpg',
      expertise: ['Cloud Architecture', 'AI Engineering', 'DevOps'],
      social: {
        linkedin: 'https://linkedin.com/in/sarah-johnson',
        github: 'https://github.com/sarah-johnson'
      }
    },
    {
      name: 'Michael Chen',
      role: 'Lead AI Engineer',
      bio: 'Machine learning expert with expertise in deep learning and neural networks.',
      image: '/images/team/michael.jpg',
      expertise: ['Machine Learning', 'Deep Learning', 'NLP'],
      social: {
        linkedin: 'https://linkedin.com/in/michael-chen',
        github: 'https://github.com/michael-chen'
      }
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Product',
      bio: 'Product strategist focused on user experience and market innovation.',
      image: '/images/team/emily.jpg',
      expertise: ['Product Strategy', 'UX Design', 'Market Research'],
      social: {
        linkedin: 'https://linkedin.com/in/emily-rodriguez'
      }
    },
    {
      name: 'David Kim',
      role: 'Lead Developer',
      bio: 'Full-stack developer with expertise in modern web technologies and APIs.',
      image: '/images/team/david.jpg',
      expertise: ['Full-Stack Development', 'API Design', 'React/Node.js'],
      social: {
        linkedin: 'https://linkedin.com/in/david-kim',
        github: 'https://github.com/david-kim'
      }
    },
    {
      name: 'Lisa Wang',
      role: 'Data Scientist',
      bio: 'Data science expert specializing in predictive analytics and business intelligence.',
      image: '/images/team/lisa.jpg',
      expertise: ['Data Science', 'Analytics', 'Business Intelligence'],
      social: {
        linkedin: 'https://linkedin.com/in/lisa-wang'
      }
    }
  ];

  const values = [
    {
      title: 'Innovation',
      description: 'We push the boundaries of what\'s possible with technology',
      icon: Brain
    },
    {
      title: 'Excellence',
      description: 'We strive for the highest quality in everything we do',
      icon: Award
    },
    {
      title: 'Collaboration',
      description: 'We work together to achieve extraordinary results',
      icon: Users
    },
    {
      title: 'Impact',
      description: 'We create solutions that make a real difference',
      icon: Globe
    }
  ];

  const stats = [
    { number: '50+', label: 'Team Members' },
    { number: '15+', label: 'Years Experience' },
    { number: '500+', label: 'Projects Delivered' },
    { number: '99%', label: 'Client Satisfaction' }
  ];

  return (
    <>
      <Helmet>
        <title>Our Team - Zion Tech Group | Meet the Experts</title>
        <meta name="description" content="Meet the talented team behind Zion Tech Group. Our experts in AI, cloud computing, and software development are dedicated to delivering exceptional solutions." />
        <meta name="keywords" content="team, experts, AI engineers, cloud architects, developers, data scientists, leadership" />
        <link rel="canonical" href="https://ziontechgroup.com/team" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Meet Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Team</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              We're a diverse group of passionate experts in AI, cloud computing, and software development, 
              united by our mission to transform businesses through technology.
            </p>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Members */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Our Experts</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Meet the talented individuals who make our success possible
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 group">
                  <div className="text-center mb-6">
                    <div className="w-24 h-24 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <Users className="w-12 h-12 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                    <p className="text-cyan-400 font-semibold mb-4">{member.role}</p>
                    <p className="text-gray-300 text-sm leading-relaxed">{member.bio}</p>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-3">Expertise</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((skill, skillIndex) => (
                        <span key={skillIndex} className="px-3 py-1 bg-slate-800 text-cyan-400 text-xs rounded-full">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-center space-x-4">
                    {member.social.linkedin && (
                      <a
                        href={member.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-cyan-400 transition-colors"
                        aria-label={`${member.name} LinkedIn`}
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                    )}
                    {member.social.github && (
                      <a
                        href={member.social.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-cyan-400 transition-colors"
                        aria-label={`${member.name} GitHub`}
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                    {member.social.email && (
                      <a
                        href={`mailto:${member.social.email}`}
                        className="text-gray-400 hover:text-cyan-400 transition-colors"
                        aria-label={`Email ${member.name}`}
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

        {/* Values */}
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Our Values</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Join Our Team */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Join Our Team
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                We're always looking for talented individuals who share our passion for innovation and excellence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/careers"
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                >
                  View Open Positions
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
                <a
                  href="/contact"
                  className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"
                >
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