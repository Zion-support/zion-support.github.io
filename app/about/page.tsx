'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  Brain,
  Cloud,
  Shield,
  Code,
  BarChart,
  Users,
  Target,
  Zap,
  Globe,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Award,
  Briefcase,
  TrendingUp,
  Star
} from 'lucide-react';

const AboutPage: React.FC = () => {
  const teamMembers = [
    {
      name: 'Kleber Santos',
      role: 'CEO & Founder',
      image: 'KS',
      bio: 'Visionary leader with 15+ years in AI and technology innovation.',
      expertise: ['AI Strategy', 'Leadership', 'Innovation']
    },
    {
      name: 'Dr. Sarah Chen',
      role: 'Chief Technology Officer',
      image: 'SC',
      bio: 'AI research expert with PhD in Machine Learning from MIT.',
      expertise: ['Machine Learning', 'Research', 'Architecture']
    },
    {
      name: 'Michael Rodriguez',
      role: 'Head of Engineering',
      image: 'MR',
      bio: 'Full-stack engineer specializing in scalable AI systems.',
      expertise: ['Software Engineering', 'AI Systems', 'Cloud Architecture']
    },
    {
      name: 'Lisa Johnson',
      role: 'Head of Operations',
      image: 'LJ',
      bio: 'Operations expert ensuring smooth project delivery and client satisfaction.',
      expertise: ['Project Management', 'Operations', 'Client Relations']
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
      title: 'Client-Centric',
      description: 'Your success is our success. We tailor every solution to your specific needs.'
    },
    {
      icon: Shield,
      title: 'Security & Trust',
      description: 'We maintain the highest standards of security and data protection.'
    },
    {
      icon: Target,
      title: 'Results-Driven',
      description: 'We measure our success by the tangible value we deliver to your business.'
    }
  ];

  const achievements = [
    { number: '500+', label: 'Projects Completed', icon: Briefcase },
    { number: '50+', label: 'Happy Clients', icon: Users },
    { number: '99%', label: 'Success Rate', icon: Award },
    { number: '24/7', label: 'Support Available', icon: Shield }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>About Us - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group, a leading AI and IT solutions provider. Meet our team and discover our mission to transform businesses with cutting-edge technology." />
        <meta name="keywords" content="about us, AI company, IT solutions, team, mission, values, Zion Tech Group" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight">
              About
              <span className="block bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Zion Tech Group
              </span>
            </h1>
            <p className="text-gray-300 text-lg max-w-4xl mx-auto mb-8 leading-relaxed">
              We are a team of passionate technologists, AI experts, and innovators dedicated to transforming businesses through cutting-edge technology solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Our Mission
              </h2>
              <p className="text-gray-300 text-lg mb-6">
                To democratize AI and advanced technology, making it accessible and beneficial for businesses of all sizes. We believe that every company, regardless of size or industry, should have access to the transformative power of artificial intelligence.
              </p>
              <p className="text-gray-300 text-lg mb-8">
                Our mission drives us to create innovative solutions that not only solve today's challenges but also prepare our clients for tomorrow's opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/contact" 
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 text-center"
                >
                  Get in Touch
                </Link>
                <Link 
                  to="/services" 
                  className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 text-center"
                >
                  Our Services
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center p-6 bg-slate-800/50 rounded-xl border border-cyan-500/20">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-cyan-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <achievement.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-cyan-400 mb-2">{achievement.number}</div>
                  <div className="text-gray-300 text-sm">{achievement.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Our Values
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              These core values guide everything we do and shape how we work with our clients and each other.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 bg-slate-800/50 rounded-xl border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-cyan-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-gray-300 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Meet Our Team
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Our diverse team of experts brings together decades of experience in AI, technology, and business innovation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center p-6 bg-slate-800/50 rounded-xl border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300">
                <div className="w-20 h-20 bg-gradient-to-r from-cyan-400 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">{member.image}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-cyan-400 text-sm mb-3">{member.role}</p>
                <p className="text-gray-300 text-sm mb-4">{member.bio}</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {member.expertise.map((skill, idx) => (
                    <span key={idx} className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Work With Us?
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-3xl mx-auto">
            Let's discuss how we can help transform your business with our AI and technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+13024640950" 
              className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 text-center"
            >
              Call +1 302 464 0950
            </a>
            <a 
              href="mailto:kleber@ziontechgroup.com" 
              className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 text-center"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;