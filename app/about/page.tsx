'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { ArrowRight, CheckCircle, Star, Users, Award, Globe, Shield, Zap, Brain, Target, Clock, DollarSign } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function AboutPage() {
  const values = [
    {
      icon: <Brain className="w-8 h-8 text-blue-500" />,
      title: 'Innovation',
      description: 'We constantly push the boundaries of technology to deliver cutting-edge solutions that give our clients a competitive advantage.'
    },
    {
      icon: <Shield className="w-8 h-8 text-green-500" />,
      title: 'Security',
      description: 'Security is at the core of everything we do. We implement enterprise-grade security measures to protect your data and systems.'
    },
    {
      icon: <Users className="w-8 h-8 text-purple-500" />,
      title: 'Collaboration',
      description: 'We work closely with our clients as partners, understanding their unique needs and delivering tailored solutions.'
    },
    {
      icon: <Zap className="w-8 h-8 text-orange-500" />,
      title: 'Excellence',
      description: 'We strive for excellence in every project, delivering high-quality solutions that exceed expectations.'
    }
  ]

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '50+', label: 'Happy Clients' },
    { number: '5+', label: 'Years Experience' },
    { number: '99%', label: 'Client Satisfaction' }
  ]

  const team = [
    {
      name: 'Dr. Sarah Johnson',
      role: 'CEO & Founder',
      image: '/api/placeholder/300/300',
      bio: 'AI and Machine Learning expert with 15+ years of experience in enterprise solutions.'
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      image: '/api/placeholder/300/300',
      bio: 'Full-stack developer and cloud architecture specialist with expertise in scalable systems.'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Design',
      image: '/api/placeholder/300/300',
      bio: 'UX/UI designer focused on creating intuitive and accessible digital experiences.'
    },
    {
      name: 'David Kim',
      role: 'Lead Developer',
      image: '/api/placeholder/300/300',
      bio: 'React and TypeScript specialist with a passion for clean, maintainable code.'
    }
  ]

  return (
    <>
      <Helmet>
        <title>About Us - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Learn about Zion Tech Group's mission, values, and team. We deliver cutting-edge AI and IT solutions to help businesses thrive in the digital age." />
        <meta name="keywords" content="about us, team, mission, values, AI solutions, IT services, technology company" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Zion Tech Group</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              We are a forward-thinking technology company dedicated to delivering innovative AI and IT solutions that transform businesses and drive digital success.
            </p>
            <div className="flex flex-wrap justify-center gap-8 mt-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-white mb-6">Our Mission</h2>
                <p className="text-lg text-gray-300 mb-6">
                  To empower businesses with cutting-edge AI and IT solutions that drive innovation, efficiency, and growth. We believe technology should be accessible, reliable, and transformative.
                </p>
                <p className="text-lg text-gray-300 mb-8">
                  Our team of experts combines deep technical knowledge with business acumen to deliver solutions that not only meet today's needs but anticipate tomorrow's challenges.
                </p>
                <Link 
                  to="/contact" 
                  className="inline-flex items-center bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
                >
                  Get in Touch
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-white mb-4">Why Choose Us?</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center text-white">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      Proven track record of successful projects
                    </li>
                    <li className="flex items-center text-white">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      Cutting-edge technology expertise
                    </li>
                    <li className="flex items-center text-white">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      Dedicated support and maintenance
                    </li>
                    <li className="flex items-center text-white">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      Competitive pricing and flexible solutions
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 px-4 bg-black/20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Our Values</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                These core values guide everything we do and shape our approach to delivering exceptional solutions.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center p-6 bg-white/5 rounded-xl backdrop-blur-sm">
                  <div className="flex justify-center mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Meet Our Team</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our diverse team of experts brings together years of experience in AI, software development, and business strategy.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <div key={index} className="text-center">
                  <div className="w-48 h-48 mx-auto mb-6 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 p-1">
                    <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center">
                      <span className="text-4xl font-bold text-white">{member.name.split(' ').map(n => n[0]).join('')}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                  <p className="text-purple-400 mb-4">{member.role}</p>
                  <p className="text-gray-300 text-sm">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our AI and IT solutions can help you achieve your goals and drive digital transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="inline-flex items-center bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
              >
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link 
                to="/ai-services" 
                className="inline-flex items-center border border-purple-400 text-purple-400 px-8 py-3 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300"
              >
                Explore Our Services
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}