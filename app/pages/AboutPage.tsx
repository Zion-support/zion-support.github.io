import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Target, Users, Award, Lightbulb, Shield, Zap, ArrowRight, CheckCircle } from 'lucide-react';

export default function AboutPage() {
  const values = [
    {
      icon: Target,
      title: 'Mission-Driven',
      description: 'We are committed to delivering innovative solutions that drive real business value and transformation.'
    },
    {
      icon: Users,
      title: 'Client-Focused',
      description: 'Our success is measured by our clients\' success. We build lasting partnerships based on trust and results.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We maintain the highest standards of quality and continuously strive for excellence in everything we do.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We embrace cutting-edge technologies and creative approaches to solve complex business challenges.'
    },
    {
      icon: Shield,
      title: 'Integrity',
      description: 'We conduct business with honesty, transparency, and ethical practices in all our interactions.'
    },
    {
      icon: Zap,
      title: 'Agility',
      description: 'We adapt quickly to changing market conditions and client needs to deliver optimal solutions.'
    }
  ];

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      description: '20+ years in technology leadership and business transformation.',
      image: '/api/placeholder/300/300'
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      description: 'Expert in AI/ML and cloud architecture with 15+ years experience.',
      image: '/api/placeholder/300/300'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of AI Solutions',
      description: 'Leading AI researcher and implementation specialist.',
      image: '/api/placeholder/300/300'
    },
    {
      name: 'David Kim',
      role: 'Head of IT Services',
      description: 'Cybersecurity and infrastructure expert with global experience.',
      image: '/api/placeholder/300/300'
    }
  ];

  const achievements = [
    '500+ Successful Projects',
    '99.9% Client Satisfaction Rate',
    '50+ Expert Team Members',
    '15+ Years of Experience',
    '24/7 Support Available',
    'Global Client Base'
  ];

  return (
    <>
      <Helmet>
        <title>About Us - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group's mission, values, and team. We're dedicated to transforming businesses through innovative AI and IT solutions." />
        <meta name="keywords" content="about us, company, team, mission, values, AI solutions, IT services" />
        <link rel="canonical" href="/about" />
      </Helmet>

      <div className="min-h-screen bg-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-cyan-900/20"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                About
                <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Zion Tech Group
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                We are a leading technology company dedicated to transforming businesses 
                through innovative AI and IT solutions. Our mission is to help organizations 
                thrive in the digital age.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Our Mission
                </h2>
                <p className="text-xl text-gray-300 mb-6">
                  To empower businesses with cutting-edge technology solutions that drive 
                  innovation, efficiency, and sustainable growth. We believe that every 
                  organization deserves access to world-class AI and IT capabilities.
                </p>
                <p className="text-lg text-gray-400 mb-8">
                  Through our expertise in artificial intelligence, cloud computing, 
                  cybersecurity, and digital transformation, we help our clients stay 
                  ahead of the competition and achieve their strategic objectives.
                </p>
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 inline-flex items-center"
                >
                  Work With Us
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 rounded-3xl p-8">
                  <div className="text-center">
                    <Target className="w-24 h-24 text-cyan-400 mx-auto mb-6" />
                    <h3 className="text-2xl font-bold text-white mb-4">
                      Driving Innovation
                    </h3>
                    <p className="text-gray-300">
                      We combine deep technical expertise with business acumen to deliver 
                      solutions that create real value for our clients.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-700/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Values
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
                    <div className="w-16 h-16 mb-6 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center text-white">
                      <Icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-4">
                      {value.title}
                    </h3>
                    <p className="text-gray-300">
                      {value.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Meet Our Team
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experienced professionals dedicated to your success
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <div key={index} className="text-center">
                  <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white text-4xl font-bold">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {member.name}
                  </h3>
                  <p className="text-cyan-400 mb-4">
                    {member.role}
                  </p>
                  <p className="text-gray-300 text-sm">
                    {member.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-700/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Achievements
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Numbers that speak to our commitment to excellence
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-gray-300 text-sm">
                    {achievement}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 rounded-3xl p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Work Together?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Let's discuss how our team can help transform your business with 
                innovative AI and IT solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 flex items-center justify-center"
                >
                  Get In Touch
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  to="/services"
                  className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-3 px-8 rounded-full transition-all duration-300"
                >
                  View Our Services
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}