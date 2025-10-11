'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Users, Award, Globe, Code, Brain, Shield, TrendingUp, Heart, Star, CheckCircle, ArrowRight, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const TeamPage: React.FC = () => {
  const teamMembers = [
    {
      name: 'Kleber Santos',
      role: 'CEO & Founder',
      bio: 'Visionary leader with 15+ years in AI and technology innovation. Passionate about transforming businesses through cutting-edge solutions.',
      image: '/images/team/kleber-santos.jpg',
      linkedin: 'https://linkedin.com/in/klebersantos',
      twitter: 'https://twitter.com/klebersantos',
      expertise: ['AI Strategy', 'Business Development', 'Technology Leadership']
    },
    {
      name: 'Dr. Sarah Chen',
      role: 'Chief Technology Officer',
      bio: 'Quantum computing expert with PhD from MIT. Leading our research and development initiatives in next-generation technologies.',
      image: '/images/team/sarah-chen.jpg',
      linkedin: 'https://linkedin.com/in/sarahchen',
      twitter: 'https://twitter.com/sarahchen',
      expertise: ['Quantum Computing', 'Machine Learning', 'Research & Development']
    },
    {
      name: 'Michael Rodriguez',
      role: 'Head of AI Solutions',
      bio: 'AI specialist with expertise in natural language processing and computer vision. Building intelligent systems that solve real-world problems.',
      image: '/images/team/michael-rodriguez.jpg',
      linkedin: 'https://linkedin.com/in/michaelrodriguez',
      twitter: 'https://twitter.com/michaelrodriguez',
      expertise: ['Artificial Intelligence', 'NLP', 'Computer Vision']
    },
    {
      name: 'Emily Johnson',
      role: 'Lead Software Architect',
      bio: 'Full-stack developer and system architect with expertise in scalable cloud solutions and microservices architecture.',
      image: '/images/team/emily-johnson.jpg',
      linkedin: 'https://linkedin.com/in/emilyjohnson',
      twitter: 'https://twitter.com/emilyjohnson',
      expertise: ['Cloud Architecture', 'Microservices', 'Full-Stack Development']
    },
    {
      name: 'David Kim',
      role: 'Head of Cybersecurity',
      bio: 'Cybersecurity expert with extensive experience in threat detection, incident response, and security architecture design.',
      image: '/images/team/david-kim.jpg',
      linkedin: 'https://linkedin.com/in/davidkim',
      twitter: 'https://twitter.com/davidkim',
      expertise: ['Cybersecurity', 'Threat Detection', 'Security Architecture']
    },
    {
      name: 'Lisa Wang',
      role: 'Head of Data Science',
      bio: 'Data science leader with expertise in predictive analytics, machine learning, and big data processing technologies.',
      image: '/images/team/lisa-wang.jpg',
      linkedin: 'https://linkedin.com/in/lisawang',
      twitter: 'https://twitter.com/lisawang',
      expertise: ['Data Science', 'Predictive Analytics', 'Big Data']
    }
  ];

  const values = [
    {
      icon: Brain,
      title: 'Innovation',
      description: 'We constantly push the boundaries of technology to deliver cutting-edge solutions that drive real business value.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and work closely with our clients to understand their unique challenges and goals.'
    },
    {
      icon: Shield,
      title: 'Integrity',
      description: 'We maintain the highest standards of ethical conduct and transparency in all our business relationships.'
    },
    {
      icon: TrendingUp,
      title: 'Excellence',
      description: 'We are committed to delivering exceptional results and continuously improving our services and solutions.'
    }
  ];

  const stats = [
    { number: '50+', label: 'Team Members' },
    { number: '15+', label: 'Years Experience' },
    { number: '25+', label: 'Countries Served' },
    { number: '99%', label: 'Client Satisfaction' }
  ];

  return (
    <>
      <Helmet>
        <title>Our Team - Zion Tech Group | Expert Technology Professionals</title>
        <meta name="description" content="Meet our expert team of AI specialists, software architects, cybersecurity experts, and technology leaders driving innovation at Zion Tech Group." />
        <meta name="keywords" content="team, experts, AI specialists, software architects, cybersecurity, technology leaders, Zion Tech Group" />
        <meta property="og:title" content="Our Team - Zion Tech Group" />
        <meta property="og:description" content="Expert technology professionals driving innovation" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://ziontechgroup.com/team" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        <main className="pt-20">
          {/* Hero Section */}
          <section className="py-20 px-4">
            <div className="max-w-7xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Meet Our <span className="text-cyan-400">Team</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Our diverse team of experts brings together decades of experience in AI, software development, cybersecurity, and business innovation.
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                    <div className="text-gray-300 text-sm md:text-base">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Team Members */}
          <section className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Our <span className="text-cyan-400">Leadership</span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Experienced leaders driving innovation and excellence in technology solutions
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {teamMembers.map((member, index) => (
                  <div key={index} className="group bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 hover:scale-105">
                    <div className="text-center mb-6">
                      <div className="w-32 h-32 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                        <span className="text-white font-bold text-2xl">{member.name.split(' ').map(n => n[0]).join('')}</span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                      <p className="text-cyan-400 font-medium mb-4">{member.role}</p>
                      <p className="text-gray-300 text-sm leading-relaxed">{member.bio}</p>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-cyan-400 mb-3">Expertise:</h4>
                      <div className="flex flex-wrap gap-2">
                        {member.expertise.map((skill, idx) => (
                          <span key={idx} className="bg-white/10 text-gray-300 px-3 py-1 rounded-full text-xs">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex justify-center space-x-4">
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                      <a
                        href={member.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Values Section */}
          <section className="py-20 bg-gradient-to-br from-slate-800/50 to-slate-900/50">
            <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Our <span className="text-cyan-400">Values</span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  The principles that guide everything we do and shape our company culture
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

          {/* CTA Section */}
          <section className="py-20 px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Join Our <span className="text-cyan-400">Team</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                We're always looking for talented individuals who share our passion for innovation and excellence.
                Explore career opportunities and join our growing team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/careers"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 text-lg"
                >
                  View Careers
                  <ArrowRight className="w-5 h-5 ml-2 inline" />
                </a>
                <a
                  href="mailto:careers@ziontechgroup.com"
                  className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300 text-lg"
                >
                  Send Resume
                </a>
              </div>
              <div className="mt-8 text-gray-400 text-sm">
                <div className="flex items-center justify-center space-x-6">
                  <div className="flex items-center">
                    <Mail className="w-4 h-4 mr-2" />
                    careers@ziontechgroup.com
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-4 h-4 mr-2" />
                    (302) 464-0950
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