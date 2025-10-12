<<<<<<< HEAD
import React from 'react';
import { CheckCircle, Users, Target, Award, Globe, Zap, Shield, Database, ArrowRight, Star, Clock, TrendingUp } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
=======
'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { ArrowRight, CheckCircle, Star, Users, Award, Globe, Shield, Zap, Brain, Target, Clock, DollarSign } from 'lucide-react'
import { Link } from 'react-router-dom'
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-386b

export default function AboutPage() {
  const values = [
    {
      icon: <Brain className="w-8 h-8 text-blue-500" />,
      title: 'Innovation',
<<<<<<< HEAD
      description: 'We constantly push the boundaries of technology to deliver cutting-edge solutions that drive real business value.'
    },
    {
      icon: <Shield className="w-8 h-8 text-green-500" />,
      title: 'Reliability',
      description: 'Our solutions are built with enterprise-grade security and reliability, ensuring your business operations run smoothly.'
=======
      description: 'We constantly push the boundaries of technology to deliver cutting-edge solutions that give our clients a competitive advantage.'
    },
    {
      icon: <Shield className="w-8 h-8 text-green-500" />,
      title: 'Security',
      description: 'Security is at the core of everything we do. We implement enterprise-grade security measures to protect your data and systems.'
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-386b
    },
    {
      icon: <Users className="w-8 h-8 text-purple-500" />,
      title: 'Collaboration',
<<<<<<< HEAD
      description: 'We work closely with our clients as partners, understanding their unique challenges and delivering tailored solutions.'
=======
      description: 'We work closely with our clients as partners, understanding their unique needs and delivering tailored solutions.'
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-386b
    },
    {
      icon: <Zap className="w-8 h-8 text-orange-500" />,
      title: 'Excellence',
<<<<<<< HEAD
      description: 'We maintain the highest standards of quality in everything we do, from initial consultation to ongoing support.'
=======
      description: 'We strive for excellence in every project, delivering high-quality solutions that exceed expectations.'
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-386b
    }
  ]

  const team = [
    {
      name: 'Kleber Santos',
<<<<<<< HEAD
      role: 'CEO & Founder',
      description: 'Visionary leader with 15+ years in AI and technology innovation.',
      image: '/team/kleber.jpg'
    },
    {
      name: 'Sarah Johnson',
      role: 'CTO',
      description: 'Technical architect specializing in scalable AI solutions and cloud infrastructure.',
      image: '/team/sarah.jpg'
    },
    {
      name: 'Michael Chen',
      role: 'Head of AI Research',
      description: 'AI researcher and machine learning expert with PhD in Computer Science.',
      image: '/team/michael.jpg'
=======
      position: 'CEO & Founder',
      description: 'Technology visionary with 15+ years of experience in AI and IT solutions.',
      avatar: 'KS'
    },
    {
      name: 'Sarah Johnson',
      position: 'CTO',
      description: 'Expert in cloud architecture and AI implementation with a passion for innovation.',
      avatar: 'SJ'
    },
    {
      name: 'Michael Chen',
      position: 'Head of AI',
      description: 'Leading AI researcher specializing in machine learning and natural language processing.',
      avatar: 'MC'
    },
    {
      name: 'Emily Rodriguez',
      position: 'Head of Security',
      description: 'Cybersecurity expert with extensive experience in enterprise security solutions.',
      avatar: 'ER'
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-386b
    }
  ]

<<<<<<< HEAD
  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '50+', label: 'Enterprise Clients' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '24/7', label: 'Support Available' }
  ];
=======
  const achievements = [
    {
      icon: <Award className="w-6 h-6 text-yellow-500" />,
      title: '500+ Projects Completed',
      description: 'Successfully delivered projects across various industries and technologies'
    },
    {
      icon: <Users className="w-6 h-6 text-blue-500" />,
      title: '50+ Enterprise Clients',
      description: 'Trusted by leading companies worldwide for their technology needs'
    },
    {
      icon: <Star className="w-6 h-6 text-purple-500" />,
      title: '99% Client Satisfaction',
      description: 'Consistently high satisfaction ratings from our clients'
    },
    {
      icon: <Globe className="w-6 h-6 text-green-500" />,
      title: 'Global Presence',
      description: 'Serving clients across North America, Europe, and Asia'
    }
  ]

  const stats = [
    { number: '15+', label: 'Years Experience', icon: <Clock className="w-6 h-6" /> },
    { number: '50+', label: 'Team Members', icon: <Users className="w-6 h-6" /> },
    { number: '99.9%', label: 'Uptime Guarantee', icon: <Shield className="w-6 h-6" /> },
    { number: '24/7', label: 'Support Available', icon: <Zap className="w-6 h-6" /> }
  ]

  const timeline = [
    {
      year: '2009',
      title: 'Company Founded',
      description: 'Zion Tech Group was established with a vision to revolutionize business technology.'
    },
    {
      year: '2012',
      title: 'First AI Project',
      description: 'Successfully implemented our first AI-powered solution for a major client.'
    },
    {
      year: '2015',
      title: 'Cloud Migration Expertise',
      description: 'Became a certified partner for major cloud providers and specialized in cloud migrations.'
    },
    {
      year: '2018',
      title: 'Micro SAAS Launch',
      description: 'Launched our first suite of micro SAAS applications for small businesses.'
    },
    {
      year: '2021',
      title: 'AI Innovation Center',
      description: 'Opened our AI Innovation Center to develop cutting-edge AI solutions.'
    },
    {
      year: '2024',
      title: 'Global Expansion',
      description: 'Expanded operations globally with offices in multiple countries.'
    }
  ]
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-386b

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
<<<<<<< HEAD
        <title>About Us - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group's mission to transform businesses through AI and IT solutions. Meet our team and discover our values." />
        <meta name="keywords" content="about us, team, mission, values, AI company, IT solutions" />
      </Helmet>

=======
        <title>About Us - Zion Tech Group | Leading AI and IT Solutions Provider</title>
        <meta name="description" content="Learn about Zion Tech Group, a leading provider of AI and IT solutions. Our mission, values, team, and commitment to delivering innovative technology solutions." />
        <meta name="keywords" content="about Zion Tech Group, AI company, IT solutions provider, technology team, company history" />
      </Helmet>
      
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-386b
      {/* Hero Section */}
      <section className="pt-20 px-4 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
<<<<<<< HEAD
              About <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Zion Tech Group</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
              We're a leading technology company dedicated to transforming businesses through innovative AI solutions and comprehensive IT services.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center px-2">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">{stat.number}</div>
                <div className="text-gray-300 text-xs sm:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-lg text-gray-300 mb-6">
                To empower businesses with cutting-edge AI and IT solutions that drive growth, enhance efficiency, and unlock new possibilities in the digital age.
              </p>
              <p className="text-lg text-gray-300 mb-8">
                We believe technology should be accessible, powerful, and transformative. Our team of experts works tirelessly to deliver solutions that not only meet today's challenges but anticipate tomorrow's opportunities.
              </p>
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 inline-flex items-center"
=======
              About <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Zion Tech Group</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
              We are a leading technology company specializing in AI-powered solutions, IT services, 
              and digital transformation. Our mission is to help businesses leverage cutting-edge technology 
              to achieve their goals and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#team" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-386b
              >
                Meet Our Team
                <ArrowRight className="w-5 h-5 ml-2" />
<<<<<<< HEAD
              </Link>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-4">Why Choose Us?</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">Proven track record with 500+ successful projects</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">Expert team with deep industry knowledge</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">Cutting-edge technology and innovation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">24/7 support and maintenance</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">Scalable solutions that grow with your business</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Our Values</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 text-center">
                <div className="mb-4 flex justify-center">{value.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
=======
              </a>
              <a 
                href="/contact" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Get In Touch
              </a>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center px-2">
                <div className="text-blue-400 mb-2 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">{stat.number}</div>
                <div className="text-gray-300 text-xs sm:text-sm">{stat.label}</div>
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-386b
              </div>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Team Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Meet Our Team</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              The experts behind our innovative solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                <p className="text-purple-400 font-medium mb-4">{member.role}</p>
                <p className="text-gray-300">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Ready to Work With Us?</h2>
              <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                Let's discuss how our expertise can help transform your business with innovative AI and IT solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center"
                >
                  Start a Project
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link 
                  to="/ai-services" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  View Our Services
                </Link>
=======
      {/* Mission Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-lg text-gray-300 mb-6">
                To empower businesses with innovative AI and IT solutions that drive growth, enhance efficiency, 
                and create competitive advantages in the digital age.
              </p>
              <p className="text-lg text-gray-300 mb-8">
                We believe that technology should be accessible, secure, and transformative. Our team of experts 
                works tirelessly to deliver solutions that not only meet our clients' current needs but also 
                position them for future success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/services"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-center"
                >
                  Our Services
                </a>
                <a
                  href="/contact"
                  className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors text-center"
                >
                  Contact Us
                </a>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-4">Why Choose Us?</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span>15+ years of industry experience</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span>Expert team of AI and IT professionals</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span>Proven track record of success</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span>24/7 support and maintenance</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span>Cutting-edge technology solutions</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span>Competitive pricing and flexible plans</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Our Values</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-20">
            {values.map((value, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group text-center">
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300 flex justify-center">{value.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-300 transition-colors">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Meet Our Team</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              Experienced professionals dedicated to delivering exceptional results
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-20">
            {team.map((member, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  {member.avatar}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">{member.name}</h3>
                <p className="text-blue-400 font-medium mb-3">{member.position}</p>
                <p className="text-gray-300 text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Our Achievements</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              Milestones that showcase our commitment to excellence
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-20">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group text-center">
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300 flex justify-center">{achievement.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-300 transition-colors">{achievement.title}</h3>
                <p className="text-gray-300 text-sm">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Our Journey</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              Key milestones in our company's growth and evolution
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500"></div>
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                      <div className="text-2xl font-bold text-blue-400 mb-2">{item.year}</div>
                      <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                      <p className="text-gray-300">{item.description}</p>
                    </div>
                  </div>
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm relative z-10">
                    {index + 1}
                  </div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Ready to Work With Us?</h2>
              <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                Let's discuss how we can help transform your business with our innovative technology solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center"
                >
                  Get In Touch
                </a>
                <a
                  href="/services"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  View Our Services
                </a>
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-386b
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
<<<<<<< HEAD
  );
=======
  )
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-386b
}