'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { CheckCircle, ArrowRight, Users, Award, Target, Globe, Clock, Star, Zap, Shield, Brain, Cloud, Phone, Mail, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'
import { NeonText, NeonCard, NeonButton } from '../components/NeonEffects'

const AboutPage: React.FC = () => {
  const values = [
    {
      icon: <Users className="w-8 h-8 text-blue-500" />,
      title: 'Client-First Approach',
      description: 'We prioritize our clients\' success and work closely with them to achieve their goals.'
    },
    {
      icon: <Award className="w-8 h-8 text-orange-500" />,
      title: 'Excellence in Delivery',
      description: 'We maintain the highest standards in all our projects and deliver exceptional results.'
    },
    {
      icon: <Target className="w-8 h-8 text-green-500" />,
      title: 'Innovation Focus',
      description: 'We stay at the forefront of technology and bring innovative solutions to our clients.'
    },
    {
      icon: <Shield className="w-8 h-8 text-purple-500" />,
      title: 'Security & Trust',
      description: 'We ensure the highest levels of security and maintain complete trust with our clients.'
    }
  ]

  const stats = [
    { number: '1,200+', label: 'Projects Completed', icon: <Zap className="w-8 h-8" /> },
    { number: '99.8%', label: 'Client Satisfaction', icon: <Star className="w-8 h-8" /> },
    { number: '24/7', label: 'Support Available', icon: <Clock className="w-8 h-8" /> },
    { number: '150+', label: 'Expert Team Members', icon: <Users className="w-8 h-8" /> },
    { number: '50+', label: 'Countries Served', icon: <Globe className="w-8 h-8" /> },
    { number: '300%', label: 'Average ROI', icon: <Target className="w-8 h-8" /> }
  ]

  const team = [
    {
      name: 'Kleber Santos',
      role: 'CEO & Founder',
      description: 'Visionary leader with 15+ years in AI and technology innovation.',
      image: '/api/placeholder/300/300'
    },
    {
      name: 'Sarah Johnson',
      role: 'CTO',
      description: 'Technical expert specializing in AI architecture and cloud solutions.',
      image: '/api/placeholder/300/300'
    },
    {
      name: 'Michael Chen',
      role: 'Head of AI',
      description: 'AI research lead with expertise in machine learning and NLP.',
      image: '/api/placeholder/300/300'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Security',
      description: 'Cybersecurity expert ensuring enterprise-grade protection.',
      image: '/api/placeholder/300/300'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      <Helmet>
        <title>About Us - Zion Tech Group | AI & IT Solutions Experts</title>
        <meta name="description" content="Learn about Zion Tech Group, a leading provider of AI and IT solutions. Discover our mission, values, and expert team." />
        <meta name="keywords" content="about us, company, team, mission, values, AI experts, IT solutions, Zion Tech Group" />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            About{' '}
            <NeonText intensity="high">Zion Tech Group</NeonText>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            We are a leading technology company specializing in AI and IT solutions that transform businesses and drive innovation.
          </p>
        </div>

        {/* Mission Section */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                <NeonText intensity="medium">Our Mission</NeonText>
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                To empower businesses with cutting-edge AI and IT solutions that drive growth, 
                improve efficiency, and create competitive advantages in today's digital landscape.
              </p>
              <p className="text-lg text-gray-300 mb-8">
                We believe technology should be accessible, powerful, and transformative. 
                Our mission is to make advanced AI and IT solutions available to businesses of all sizes.
              </p>
              <NeonButton 
                variant="primary" 
                size="lg"
                onClick={() => window.location.href = '/contact'}
                className="group"
              >
                Get in Touch
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </NeonButton>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {stats.slice(0, 4).map((stat, index) => (
                <NeonCard key={index} className="text-center group hover:scale-105 transition-all duration-300">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">
                    <NeonText intensity="medium">{stat.number}</NeonText>
                  </div>
                  <div className="text-gray-300">{stat.label}</div>
                </NeonCard>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              <NeonText intensity="medium">Our Values</NeonText>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <NeonCard key={index} className="text-center group hover:scale-105 transition-all duration-300">
                <div className="mb-4 flex justify-center">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </NeonCard>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              <NeonText intensity="medium">Meet Our Team</NeonText>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              The experts behind our innovative solutions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <NeonCard key={index} className="text-center group hover:scale-105 transition-all duration-300">
                <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                <p className="text-cyan-400 font-medium mb-3">{member.role}</p>
                <p className="text-gray-300 text-sm">{member.description}</p>
              </NeonCard>
            ))}
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              <NeonText intensity="medium">Why Choose Us?</NeonText>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              What sets us apart from the competition
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <NeonCard className="p-6">
              <div className="flex items-center mb-4">
                <Brain className="w-8 h-8 text-cyan-400 mr-3" />
                <h3 className="text-xl font-semibold text-white">AI Expertise</h3>
              </div>
              <p className="text-gray-300">
                Deep expertise in artificial intelligence, machine learning, and advanced analytics.
              </p>
            </NeonCard>
            <NeonCard className="p-6">
              <div className="flex items-center mb-4">
                <Cloud className="w-8 h-8 text-blue-400 mr-3" />
                <h3 className="text-xl font-semibold text-white">Cloud Mastery</h3>
              </div>
              <p className="text-gray-300">
                Comprehensive cloud solutions across AWS, Azure, and Google Cloud platforms.
              </p>
            </NeonCard>
            <NeonCard className="p-6">
              <div className="flex items-center mb-4">
                <Shield className="w-8 h-8 text-green-400 mr-3" />
                <h3 className="text-xl font-semibold text-white">Security First</h3>
              </div>
              <p className="text-gray-300">
                Enterprise-grade security measures and compliance with industry standards.
              </p>
            </NeonCard>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            <NeonText intensity="high">Ready to Work With Us?</NeonText>
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how our AI and IT solutions can transform your business and drive growth.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <Phone className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
              <p className="text-white font-semibold">Call Us</p>
              <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                +1 302 464 0950
              </a>
            </div>
            <div className="text-center">
              <Mail className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
              <p className="text-white font-semibold">Email Us</p>
              <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                kleber@ziontechgroup.com
              </a>
            </div>
            <div className="text-center">
              <MapPin className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
              <p className="text-white font-semibold">Visit Us</p>
              <p className="text-gray-300 text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <NeonButton 
              variant="accent" 
              size="lg"
              onClick={() => window.location.href = '/contact'}
              className="bg-white text-purple-600 hover:bg-gray-100"
            >
              Get Free Consultation
            </NeonButton>
            <NeonButton 
              variant="secondary" 
              size="lg"
              onClick={() => window.location.href = '/services'}
              className="border-2 border-white text-white hover:bg-white/10"
            >
              View Our Services
            </NeonButton>
          </div>
        </section>
      </div>
    </div>
  )
}

export default AboutPage