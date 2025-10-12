'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { CheckCircle, ArrowRight, Users, Award, Target, Globe, Clock, Star, Zap, Shield, Brain, Cloud } from 'lucide-react'
import { Link } from 'react-router-dom'

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
      icon: <Globe className="w-8 h-8 text-purple-500" />,
      title: 'Global Perspective',
      description: 'We understand diverse markets and deliver solutions that work across different cultures and regions.'
    }
  ]

  const team = [
    {
      name: 'Kleber Santos',
      role: 'CEO & Founder',
      bio: 'Visionary leader with 15+ years in AI and technology innovation.',
      image: 'KS'
    },
    {
      name: 'Sarah Johnson',
      role: 'CTO',
      bio: 'Expert in cloud architecture and AI system design.',
      image: 'SJ'
    },
    {
      name: 'Michael Chen',
      role: 'Head of Security',
      bio: 'Cybersecurity specialist with deep expertise in threat detection.',
      image: 'MC'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Lead AI Engineer',
      bio: 'Machine learning expert focused on practical AI applications.',
      image: 'ER'
    }
  ]

  const stats = [
    { number: '500+', label: 'Projects Delivered' },
    { number: '150+', label: 'Happy Clients' },
    { number: '99.8%', label: 'Client Satisfaction' },
    { number: '24/7', label: 'Support Available' }
  ]

  return (
    <>
      <Helmet>
        <title>About Us - Zion Tech Group | AI & IT Solutions Company</title>
        <meta name="description" content="Learn about Zion Tech Group's mission to transform businesses with cutting-edge AI and IT solutions. Meet our expert team and discover our values." />
        <meta name="keywords" content="about us, AI company, IT solutions, team, mission, values" />
        <meta property="og:title" content="About Us - Zion Tech Group" />
        <meta property="og:description" content="Learn about our mission to transform businesses with AI and IT solutions" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/about" />
      </Helmet>

      <div className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                About <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Zion Tech Group</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                We are a leading technology company specializing in AI, cloud services, cybersecurity, and 5G solutions. 
                Our mission is to transform businesses through innovative technology and expert consulting.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-white mb-6">Our Mission</h2>
                <p className="text-lg text-gray-300 mb-6">
                  To empower businesses with cutting-edge AI and IT solutions that drive innovation, 
                  efficiency, and growth. We believe technology should be accessible, secure, and 
                  transformative for organizations of all sizes.
                </p>
                <p className="text-lg text-gray-300 mb-8">
                  Our team of experts combines deep technical knowledge with industry experience 
                  to deliver solutions that not only meet current needs but also prepare our clients 
                  for future challenges and opportunities.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
                >
                  Get in Touch
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center p-6 bg-slate-800/50 rounded-2xl border border-slate-700/50">
                    <div className="text-3xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                    <div className="text-gray-300">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Our Values</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                These core values guide everything we do and shape our relationships with clients and partners.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center group">
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-slate-800/50 rounded-2xl border border-slate-700/50 group-hover:border-cyan-500/50 transition-all duration-300">
                      {value.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-gray-300 group-hover:text-gray-200 transition-colors">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Meet Our Team</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our diverse team of experts brings together deep technical knowledge and industry experience.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <div key={index} className="text-center group">
                  <div className="w-24 h-24 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4 group-hover:scale-110 transition-transform">
                    {member.image}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-cyan-400 mb-3">{member.role}</p>
                  <p className="text-gray-300 text-sm group-hover:text-gray-200 transition-colors">
                    {member.bio}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-500/10 to-purple-500/10">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Work With Us?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how we can help transform your business with our AI and IT solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
              >
                Start a Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/careers"
                className="inline-flex items-center border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-white transition-all duration-300"
              >
                Join Our Team
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default AboutPage