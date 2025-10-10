'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Users, Award, Code, Brain, Globe, Star, CheckCircle, ArrowRight } from 'lucide-react';

const TeamPage: React.FC = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Kleber Santos',
      role: 'CEO & Founder',
      bio: 'Visionary leader with 15+ years in AI and technology innovation.',
      image: '/images/team/kleber.jpg',
      expertise: ['AI Strategy', 'Leadership', 'Innovation'],
      linkedin: 'https://linkedin.com/in/kleber-santos'
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      role: 'CTO',
      bio: 'Technical architect specializing in scalable AI systems and cloud infrastructure.',
      image: '/images/team/sarah.jpg',
      expertise: ['AI Architecture', 'Cloud Computing', 'System Design'],
      linkedin: 'https://linkedin.com/in/sarah-johnson'
    },
    {
      id: 3,
      name: 'Michael Chen',
      role: 'Lead AI Engineer',
      bio: 'Machine learning expert with deep expertise in neural networks and NLP.',
      image: '/images/team/michael.jpg',
      expertise: ['Machine Learning', 'Neural Networks', 'NLP'],
      linkedin: 'https://linkedin.com/in/michael-chen'
    },
    {
      id: 4,
      name: 'Emily Rodriguez',
      role: 'Head of Product',
      bio: 'Product strategist focused on user experience and market-driven solutions.',
      image: '/images/team/emily.jpg',
      expertise: ['Product Strategy', 'UX Design', 'Market Analysis'],
      linkedin: 'https://linkedin.com/in/emily-rodriguez'
    }
  ];

  const values = [
    {
      icon: Brain,
      title: 'Innovation',
      description: 'We constantly push the boundaries of what\'s possible with AI and technology.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and diverse perspectives.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for the highest quality in everything we deliver.'
    },
    {
      icon: Globe,
      title: 'Impact',
      description: 'We focus on creating solutions that make a real difference in the world.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Our Team - Zion Tech Group</title>
        <meta name="description" content="Meet the talented team behind Zion Tech Group's AI and IT solutions. Learn about our experts and their expertise." />
        <meta name="keywords" content="team, leadership, AI experts, IT professionals, Zion Tech Group team" />
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
              The brilliant minds behind our innovative AI and IT solutions. 
              We're a diverse team of experts passionate about transforming businesses through technology.
            </p>
          </div>
        </section>

        {/* Team Members */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-12 text-center">Leadership Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member) => (
                <div key={member.id} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300">
                  <div className="w-24 h-24 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 text-center">{member.name}</h3>
                  <p className="text-cyan-400 text-center mb-4">{member.role}</p>
                  <p className="text-gray-300 text-sm mb-4 text-center">{member.bio}</p>
                  <div className="flex flex-wrap gap-2 justify-center mb-4">
                    {member.expertise.map((skill, index) => (
                      <span key={index} className="px-2 py-1 bg-slate-700 text-cyan-400 text-xs rounded">
                        {skill}
                      </span>
                    ))}
                  </div>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center"
                  >
                    Connect
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-12 text-center">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
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
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  View Open Positions
                  <ArrowRight className="inline-block ml-2 w-5 h-5" />
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
