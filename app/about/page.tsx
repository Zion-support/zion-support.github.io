'use client';
<<<<<<< HEAD
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

=======
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckCircle, Users, Award, Zap, Brain, Shield, ArrowRight, Star } from 'lucide-react';

const AboutPage: React.FC = () => {
>>>>>>> cursor/fix-errors-and-merge-to-main-ba0d
  const stats = [
    { number: '500+', label: 'Projects Completed', icon: CheckCircle },
    { number: '50+', label: 'Happy Clients', icon: Users },
    { number: '99%', label: 'Client Satisfaction', icon: Star },
    { number: '24/7', label: 'Support Available', icon: Award },
  ];

  const values = [
    {
      icon: Brain,
      title: 'Innovation First',
<<<<<<< HEAD
      description: 'We stay at the forefront of technology, constantly exploring new AI and IT solutions to solve complex business challenges.'
    },
    {
      icon: <Users className="w-8 h-8 text-blue-400" />,
      title: 'Client-Centric',
      description: 'Your success is our priority. We build lasting partnerships through exceptional service and measurable results.'
=======
      description: 'We stay at the forefront of technology, constantly exploring new ways to solve complex problems and deliver cutting-edge solutions.'
>>>>>>> cursor/fix-errors-and-merge-to-main-ba0d
    },
    {
      icon: <Shield className="w-8 h-8 text-red-400" />,
      title: 'Security & Trust',
      description: 'Your data and systems are protected with enterprise-grade security measures and compliance standards.'
    },
    {
      icon: Users,
      title: 'Client-Centric',
      description: 'We build lasting partnerships by understanding your business goals and delivering solutions that drive real value.'
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      title: 'Agile Delivery',
<<<<<<< HEAD
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
=======
      description: 'Fast, iterative development processes that deliver results quickly while maintaining the highest quality standards.'
>>>>>>> cursor/fix-errors-and-merge-to-main-ba0d
    }
  ];

  const team = [
    {
<<<<<<< HEAD
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
=======
      name: 'Kleber Santos',
      role: 'CEO & Founder',
      description: 'Visionary leader with 15+ years in AI and technology innovation.',
      image: '/team/kleber.jpg'
    },
    {
      name: 'Sarah Johnson',
      role: 'CTO',
      description: 'Expert in cloud architecture and AI system design.',
      image: '/team/sarah.jpg'
    },
    {
      name: 'Michael Chen',
      role: 'Lead Developer',
      description: 'Full-stack developer specializing in modern web technologies.',
      image: '/team/michael.jpg'
    },
    {
      name: 'Emily Rodriguez',
      role: 'AI Research Lead',
      description: 'PhD in Machine Learning with focus on business applications.',
      image: '/team/emily.jpg'
>>>>>>> cursor/fix-errors-and-merge-to-main-ba0d
    }
  ];

  return (
<<<<<<< HEAD
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
=======
    <>
      <Helmet>
        <title>About Zion Tech Group - Leading AI & IT Solutions Company</title>
        <meta name="description" content="Learn about Zion Tech Group's mission to transform businesses through innovative AI solutions, cloud infrastructure, and cutting-edge technology services." />
        <meta name="keywords" content="about us, AI company, technology leadership, team expertise, company values" />
        <meta property="og:title" content="About Zion Tech Group - Leading AI & IT Solutions" />
        <meta property="og:description" content="Discover our mission, values, and the expert team behind Zion Tech Group's innovative technology solutions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/about" />
      </Helmet>

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                About
                <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Zion Tech Group
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                We are a leading technology company dedicated to transforming businesses through innovative AI solutions, 
                cloud infrastructure, and cutting-edge software development.
              </p>
            </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-ba0d
          </div>
        </section>

<<<<<<< HEAD
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
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
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
=======
        {/* Stats Section */}
        <section className="py-16 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-4">
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 bg-gradient-to-br from-slate-900 to-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Our Mission
                </h2>
                <p className="text-lg text-gray-300 mb-6">
                  To empower businesses with cutting-edge AI and technology solutions that drive innovation, 
                  efficiency, and growth. We believe technology should be accessible, secure, and transformative.
                </p>
                <p className="text-lg text-gray-300 mb-8">
                  Our team of expert engineers, data scientists, and technology consultants work tirelessly 
                  to deliver solutions that not only meet today's challenges but anticipate tomorrow's opportunities.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
                >
                  Work With Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-white mb-4">Why Choose Us?</h3>
                  <ul className="space-y-4">
                    <li className="flex items-center text-white">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                      <span>15+ years of technology expertise</span>
                    </li>
                    <li className="flex items-center text-white">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                      <span>Proven track record with 500+ projects</span>
                    </li>
                    <li className="flex items-center text-white">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                      <span>Cutting-edge AI and cloud solutions</span>
                    </li>
                    <li className="flex items-center text-white">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                      <span>24/7 support and maintenance</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-gradient-to-br from-purple-900 to-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Values
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                The principles that guide everything we do and shape our company culture.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="group">
                  <div className="bg-gray-800 rounded-xl p-6 h-full hover:bg-gray-700 transition-all duration-300 transform hover:scale-105">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg mb-4">
                      <value.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                    <p className="text-gray-300">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-gradient-to-br from-slate-900 to-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Meet Our Team
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                The brilliant minds behind our innovative solutions and exceptional service delivery.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <div key={index} className="group">
                  <div className="bg-gray-800 rounded-xl p-6 h-full hover:bg-gray-700 transition-all duration-300 transform hover:scale-105">
                    <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-2xl font-bold text-white">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2 text-center">{member.name}</h3>
                    <p className="text-purple-400 text-center mb-3">{member.role}</p>
                    <p className="text-gray-300 text-center text-sm">{member.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-cyan-900/50 to-purple-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-12 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5"></div>
              <div className="relative z-10">
                <h2 className="text-4xl font-bold text-white mb-6">
                  Ready to Work Together?
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Let's discuss how our team can help transform your business with innovative technology solutions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/contact"
                    className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
                  >
                    Start Your Project
                  </Link>
                  <Link 
                    to="/services"
                    className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-105"
                  >
                    View Our Services
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
>>>>>>> cursor/fix-errors-and-merge-to-main-ba0d
  );
};

export default AboutPage;