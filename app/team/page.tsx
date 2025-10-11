'use client';
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Brain, Cloud, Shield, Code, Users, Mail, Phone, MapPin, Award, CheckCircle, ArrowRight, Star, Zap, Target, Globe, Database, Smartphone, Settings, BarChart } from 'lucide-react';

const TeamPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const teamMembers = [
    {
      name: 'Dr. Kleber Santos',
      role: 'CEO & Founder',
      expertise: 'AI Strategy & Enterprise Solutions',
      image: '/api/placeholder/300/300',
      bio: 'Visionary leader with 15+ years in AI and enterprise technology. Former CTO at Fortune 500 companies.',
      achievements: ['PhD in Computer Science', '50+ Patents', 'Forbes 30 Under 30']
    },
    {
      name: 'Sarah Chen',
      role: 'CTO',
      expertise: 'Cloud Infrastructure & DevOps',
      image: '/api/placeholder/300/300',
      bio: 'Cloud architecture expert with deep experience in AWS, Azure, and GCP. Led infrastructure for 100M+ users.',
      achievements: ['AWS Solutions Architect', 'Kubernetes Expert', '10+ Years Experience']
    },
    {
      name: 'Marcus Johnson',
      role: 'Head of AI Research',
      expertise: 'Machine Learning & Deep Learning',
      image: '/api/placeholder/300/300',
      bio: 'AI researcher with expertise in neural networks, computer vision, and natural language processing.',
      achievements: ['PhD in Machine Learning', 'Published 50+ Papers', 'Turing Award Nominee']
    },
    {
      name: 'Elena Rodriguez',
      role: 'Head of Cybersecurity',
      expertise: 'Cybersecurity & Compliance',
      image: '/api/placeholder/300/300',
      bio: 'Cybersecurity expert with certifications in CISSP, CISM, and extensive experience in threat detection.',
      achievements: ['CISSP Certified', 'CISM Certified', '15+ Years Security Experience']
    },
    {
      name: 'David Kim',
      role: 'Lead Developer',
      expertise: 'Full-Stack Development',
      image: '/api/placeholder/300/300',
      bio: 'Full-stack developer with expertise in React, Node.js, Python, and modern web technologies.',
      achievements: ['10+ Years Experience', 'Open Source Contributor', 'Tech Speaker']
    },
    {
      name: 'Lisa Wang',
      role: 'Head of Product',
      expertise: 'Product Strategy & UX Design',
      image: '/api/placeholder/300/300',
      bio: 'Product strategist with a focus on user experience and business growth. Led products used by millions.',
      achievements: ['MBA from Stanford', 'Product Management Expert', 'UX Design Specialist']
    }
  ];

  const values = [
    {
      icon: Brain,
      title: 'Innovation First',
      description: 'We constantly push the boundaries of what\'s possible with AI and technology.'
    },
    {
      icon: Users,
      title: 'Client Success',
      description: 'Our clients\' success is our success. We go above and beyond to deliver results.'
    },
    {
      icon: Shield,
      title: 'Security & Trust',
      description: 'We maintain the highest standards of security and data protection.'
    },
    {
      icon: Zap,
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, from code quality to client service.'
    }
  ];

  const stats = [
    { number: '50+', label: 'Team Members' },
    { number: '15+', label: 'Years Experience' },
    { number: '100+', label: 'Certifications' },
    { number: '24/7', label: 'Support Available' }
  ];

  return (
    <>
      <Helmet>
        <title>Our Team - Zion Tech Group | Expert AI & IT Professionals</title>
        <meta name="description" content="Meet our world-class team of AI experts, cloud architects, cybersecurity specialists, and technology leaders driving innovation at Zion Tech Group." />
        <meta name="keywords" content="team, AI experts, cloud architects, cybersecurity specialists, technology leaders, Zion Tech Group" />
        <meta property="og:title" content="Our Team - Zion Tech Group" />
        <meta property="og:description" content="Meet our world-class team of AI and IT professionals" />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className={`text-center mb-16 transition-all duration-1000 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Our Team
            </h1>
            <p className="text-xl text-cyan-400 mb-8 font-medium">
              World-Class AI & IT Professionals
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
              Meet the brilliant minds behind Zion Tech Group. Our diverse team of experts brings together decades of experience 
              in artificial intelligence, cloud computing, cybersecurity, and enterprise technology to deliver exceptional results for our clients.
            </p>
          </section>

          {/* Stats Section */}
          <section className="mb-16">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                {stats.map((stat, index) => (
                  <div key={index}>
                    <div className="text-4xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                    <div className="text-gray-300">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Team Members */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center text-white mb-12">
              Meet Our Experts
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 text-center"
                >
                  <div className="w-32 h-32 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-16 h-16 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-cyan-400 font-medium mb-2">{member.role}</p>
                  <p className="text-gray-300 text-sm mb-4">{member.expertise}</p>
                  <p className="text-gray-400 text-sm mb-4">{member.bio}</p>
                  <div className="space-y-1">
                    {member.achievements.map((achievement, achievementIndex) => (
                      <div key={achievementIndex} className="flex items-center text-xs text-gray-300">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {achievement}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Values Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center text-white mb-12">
              Our Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="mb-16">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 text-center border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-6">Join Our Team</h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                We're always looking for talented individuals who share our passion for innovation and excellence. 
                Explore career opportunities and become part of our mission to transform businesses with AI and technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/careers"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center"
                >
                  View Open Positions
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
                <Link
                  to="/contact"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default TeamPage;