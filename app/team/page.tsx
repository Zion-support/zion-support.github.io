'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Twitter, 
  Github,
  Award,
  Users,
  Brain,
  Code,
  Shield,
  Cloud,
  BarChart3,
  CheckCircle,
  Star
} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const TeamPage: React.FC = () => {
  const teamMembers = [
    {
      name: 'Kleber Santos',
      position: 'CEO & Founder',
      bio: 'Visionary leader with 15+ years in AI and technology innovation. Expert in quantum computing and autonomous systems.',
      image: '/api/placeholder/300/300',
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950',
      linkedin: 'https://linkedin.com/in/kleber-santos',
      twitter: 'https://twitter.com/kleber_santos',
      github: 'https://github.com/kleber-santos',
      expertise: ['AI Strategy', 'Quantum Computing', 'Leadership', 'Innovation'],
      achievements: ['Forbes 30 Under 30', 'Tech Innovator Award', 'AI Pioneer']
    },
    {
      name: 'Dr. Sarah Chen',
      position: 'Chief Technology Officer',
      bio: 'Leading AI researcher with PhD in Machine Learning. Specializes in neural networks and quantum algorithms.',
      image: '/api/placeholder/300/300',
      email: 'sarah@ziontechgroup.com',
      phone: '+1 302 464 0951',
      linkedin: 'https://linkedin.com/in/sarah-chen',
      twitter: 'https://twitter.com/sarah_chen',
      github: 'https://github.com/sarah-chen',
      expertise: ['Machine Learning', 'Neural Networks', 'Quantum Algorithms', 'Research'],
      achievements: ['IEEE Fellow', 'Nobel Prize Nominee', 'AI Research Excellence']
    },
    {
      name: 'Michael Rodriguez',
      position: 'Head of Engineering',
      bio: 'Full-stack architect with expertise in cloud infrastructure and scalable systems design.',
      image: '/api/placeholder/300/300',
      email: 'michael@ziontechgroup.com',
      phone: '+1 302 464 0952',
      linkedin: 'https://linkedin.com/in/michael-rodriguez',
      twitter: 'https://twitter.com/michael_rod',
      github: 'https://github.com/michael-rodriguez',
      expertise: ['Cloud Architecture', 'System Design', 'DevOps', 'Scalability'],
      achievements: ['AWS Solutions Architect', 'Cloud Excellence Award', 'Tech Leadership']
    },
    {
      name: 'Dr. Emily Watson',
      position: 'Head of AI Research',
      bio: 'Renowned AI researcher specializing in natural language processing and computer vision.',
      image: '/api/placeholder/300/300',
      email: 'emily@ziontechgroup.com',
      phone: '+1 302 464 0953',
      linkedin: 'https://linkedin.com/in/emily-watson',
      twitter: 'https://twitter.com/emily_watson',
      github: 'https://github.com/emily-watson',
      expertise: ['NLP', 'Computer Vision', 'Deep Learning', 'AI Ethics'],
      achievements: ['Google AI Research Award', 'MIT Technology Review', 'AI Ethics Pioneer']
    },
    {
      name: 'David Kim',
      position: 'Head of Cybersecurity',
      bio: 'Cybersecurity expert with 20+ years protecting enterprise systems and implementing zero-trust architectures.',
      image: '/api/placeholder/300/300',
      email: 'david@ziontechgroup.com',
      phone: '+1 302 464 0954',
      linkedin: 'https://linkedin.com/in/david-kim',
      twitter: 'https://twitter.com/david_kim',
      github: 'https://github.com/david-kim',
      expertise: ['Cybersecurity', 'Zero Trust', 'Threat Intelligence', 'Compliance'],
      achievements: ['CISSP Certified', 'Security Excellence Award', 'Cyber Defense Expert']
    },
    {
      name: 'Lisa Thompson',
      position: 'Head of Product',
      bio: 'Product strategist with a passion for user experience and market-driven innovation.',
      image: '/api/placeholder/300/300',
      email: 'lisa@ziontechgroup.com',
      phone: '+1 302 464 0955',
      linkedin: 'https://linkedin.com/in/lisa-thompson',
      twitter: 'https://twitter.com/lisa_thompson',
      github: 'https://github.com/lisa-thompson',
      expertise: ['Product Strategy', 'UX Design', 'Market Research', 'Innovation'],
      achievements: ['Product Excellence Award', 'UX Innovation', 'Market Leadership']
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
        <meta name="description" content="Meet our world-class team of AI experts, engineers, and technology professionals driving innovation at Zion Tech Group." />
        <meta name="keywords" content="team, AI experts, engineers, technology professionals, leadership, innovation" />
        <meta property="og:title" content="Our Team - Zion Tech Group" />
        <meta property="og:description" content="World-class technology professionals driving innovation" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://ziontechgroup.com/team" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Our Team
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium">
              World-Class Technology Professionals
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Meet the brilliant minds behind Zion Tech Group. Our diverse team of experts 
              brings together decades of experience in AI, quantum computing, cybersecurity, 
              and cutting-edge technology innovation.
            </p>
          </section>

          {/* Stats Section */}
          <section className="mb-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                  <div className="text-gray-300 text-sm md:text-base">{stat.label}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Team Members Grid */}
          <section className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 hover:scale-105"
                >
                  <div className="text-center mb-6">
                    <div className="w-32 h-32 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Users className="w-16 h-16 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                    <p className="text-cyan-400 font-medium mb-4">{member.position}</p>
                    <p className="text-gray-300 text-sm leading-relaxed">{member.bio}</p>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Expertise</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Achievements</h4>
                    <ul className="space-y-1">
                      {member.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="flex items-center text-sm text-gray-300">
                          <Award className="w-4 h-4 text-yellow-400 mr-2 flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex justify-center space-x-4">
                    <a
                      href={`mailto:${member.email}`}
                      className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                    >
                      <Mail className="w-5 h-5 text-white" />
                    </a>
                    <a
                      href={`tel:${member.phone}`}
                      className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                    >
                      <Phone className="w-5 h-5 text-white" />
                    </a>
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                    >
                      <Linkedin className="w-5 h-5 text-white" />
                    </a>
                    <a
                      href={member.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gradient-to-r from-sky-500 to-sky-700 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                    >
                      <Twitter className="w-5 h-5 text-white" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-lg rounded-3xl p-12 border border-cyan-500/20">
              <h2 className="text-4xl font-bold text-white mb-6">
                Join Our Team
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                We're always looking for talented individuals who share our passion for 
                innovation and cutting-edge technology. Join us in shaping the future.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/careers"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 text-lg"
                >
                  View Open Positions
                </Link>
                <a
                  href="mailto:careers@ziontechgroup.com"
                  className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300 text-lg"
                >
                  Send Your Resume
                </a>
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
