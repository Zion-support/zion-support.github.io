<<<<<<< HEAD
import React from 'react';
import { Helmet } from 'react-helmet-async';

const AboutPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>About - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group's mission, values, and commitment to delivering cutting-edge AI and IT solutions." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              About Zion Tech Group
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              We are a leading technology company dedicated to transforming businesses through innovative AI and IT solutions.
=======
'use client';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, Users, Shield, Globe, Brain, Cloud, CheckCircle, Award, Zap, Code, Star
} from 'lucide-react';

const AboutPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    { number: '500+', label: 'Projects Completed', icon: CheckCircle },
    { number: '50+', label: 'Happy Clients', icon: Users },
    { number: '99%', label: 'Client Satisfaction', icon: Star },
    { number: '24/7', label: 'Support Available', icon: Award },
  ];

  const values = [
    {
      icon: <Brain className="w-8 h-8 text-purple-400" />,
      title: 'Innovation First',
      description: 'We stay at the forefront of technology, constantly exploring new AI and IT solutions to solve complex business challenges.'
    },
    {
      icon: <Users className="w-8 h-8 text-blue-400" />,
      title: 'Client-Centric',
      description: 'Your success is our priority. We build lasting partnerships through exceptional service and measurable results.'
    },
    {
      icon: <Shield className="w-8 h-8 text-red-400" />,
      title: 'Security & Trust',
      description: 'We implement enterprise-grade security measures and maintain the highest standards of data protection and compliance.'
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      title: 'Agile Delivery',
      description: 'We deliver solutions quickly and efficiently, adapting to your changing needs with agile methodologies.'
    },
    {
      icon: <Code className="w-8 h-8 text-green-400" />,
      title: 'Technical Excellence',
      description: 'Our team of expert developers and engineers ensures every solution meets the highest technical standards.'
    },
    {
      icon: <Cloud className="w-8 h-8 text-cyan-400" />,
      title: 'Scalable Solutions',
      description: 'We build solutions that grow with your business, ensuring long-term value and performance.'
    }
  ];

  const team = [
    {
      name: 'Dr. Sarah Chen',
      role: 'Chief Technology Officer',
      image: '/images/team/sarah-chen.jpg',
      bio: 'AI researcher with 15+ years experience in machine learning and neural networks.',
      expertise: ['Machine Learning', 'Deep Learning', 'Computer Vision']
    },
    {
      name: 'Michael Rodriguez',
      role: 'Lead Software Architect',
      image: '/images/team/michael-rodriguez.jpg',
      bio: 'Full-stack developer specializing in scalable cloud architectures and microservices.',
      expertise: ['Cloud Architecture', 'Microservices', 'DevOps']
    },
    {
      name: 'Dr. Priya Patel',
      role: 'Head of AI Research',
      image: '/images/team/priya-patel.jpg',
      bio: 'NLP expert with extensive experience in large language models and conversational AI.',
      expertise: ['Natural Language Processing', 'LLMs', 'Conversational AI']
    },
    {
      name: 'James Thompson',
      role: 'Cybersecurity Director',
      image: '/images/team/james-thompson.jpg',
      bio: 'Security expert with certifications in ethical hacking and enterprise security.',
      expertise: ['Cybersecurity', 'Penetration Testing', 'Risk Assessment']
    }
  ];

  const achievements = [
    {
      year: '2024',
      title: 'AI Innovation Award',
      description: 'Recognized for breakthrough work in enterprise AI automation'
    },
    {
      year: '2023',
      title: 'Best IT Solutions Provider',
      description: 'Industry recognition for outstanding client service and technical excellence'
    },
    {
      year: '2022',
      title: 'Cloud Migration Excellence',
      description: 'Awarded for successful large-scale cloud transformation projects'
    },
    {
      year: '2021',
      title: 'Cybersecurity Leadership',
      description: 'Recognized for innovative security solutions and threat prevention'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <Helmet>
        <title>About Us - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Learn about Zion Tech Group's mission, values, and team of experts delivering cutting-edge AI and IT solutions." />
        <meta name="keywords" content="about us, AI company, IT solutions, team, mission, values" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Zion Tech Group</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              We are a team of passionate technologists dedicated to transforming businesses through innovative AI and IT solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center gap-2"
              >
                Get in Touch <ArrowRight className="w-5 h-5" />
              </Link>
              <Link 
                to="/services" 
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <stat.icon className="w-12 h-12 text-blue-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-gray-300 text-lg mb-6">
                To democratize advanced AI and IT technologies, making them accessible to businesses of all sizes while maintaining the highest standards of security, performance, and innovation.
              </p>
              <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-gray-300 text-lg">
                To be the global leader in AI-powered business transformation, creating a future where technology seamlessly enhances human potential and drives sustainable growth.
              </p>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
                <Globe className="w-16 h-16 text-blue-400 mx-auto mb-6" />
                <h3 className="text-xl font-semibold text-white text-center mb-4">Global Impact</h3>
                <p className="text-gray-300 text-center">
                  Serving clients across 25+ countries with localized expertise and 24/7 support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Our Core Values</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              These principles guide everything we do and shape our culture of excellence.
>>>>>>> cursor/fix-errors-and-merge-to-main-7b79
            </p>
          </div>
        </div>
<<<<<<< HEAD
      </div>
    </>
=======
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Meet Our Team</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Our diverse team of experts brings together decades of experience in AI, software development, and IT solutions.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="w-24 h-24 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">{member.name.split(' ').map(n => n[0]).join('')}</span>
                </div>
                <h3 className="text-xl font-semibold text-white text-center mb-2">{member.name}</h3>
                <p className="text-blue-400 text-center mb-3">{member.role}</p>
                <p className="text-gray-300 text-sm text-center mb-4">{member.bio}</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {member.expertise.map((skill, skillIndex) => (
                    <span key={skillIndex} className="bg-blue-600/20 text-blue-300 px-2 py-1 rounded text-xs">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Our Achievements</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Recognition from industry leaders and satisfied clients worldwide.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">{achievement.year}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{achievement.title}</h3>
                <p className="text-gray-300">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Join hundreds of companies that have already revolutionized their operations with our AI and IT solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Start Your Project <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              to="/services" 
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-7b79
  );
};

export default AboutPage;