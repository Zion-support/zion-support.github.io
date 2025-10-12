'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Users, Award, Target, Globe, Zap, Shield } from 'lucide-react';
import FuturisticBackground from '../components/FuturisticBackground';
import FuturisticCard from '../components/FuturisticCard';

export default function AboutPage() {
  const teamMembers = [
    {
      name: 'Dr. Kleber Santos',
      role: 'Founder & CEO',
      description: 'AI and Technology Visionary with 15+ years of experience',
      image: '/team/kleber-santos.jpg'
    },
    {
      name: 'Sarah Johnson',
      role: 'CTO',
      description: 'Cloud Architecture and DevOps Expert',
      image: '/team/sarah-johnson.jpg'
    },
    {
      name: 'Michael Chen',
      role: 'Head of AI Research',
      description: 'Machine Learning and Neural Networks Specialist',
      image: '/team/michael-chen.jpg'
    }
  ];

  const values = [
    {
      icon: <Zap className="w-8 h-8 text-cyan-400" />,
      title: 'Innovation First',
      description: 'We push the boundaries of what\'s possible with cutting-edge technology'
    },
    {
      icon: <Shield className="w-8 h-8 text-green-400" />,
      title: 'Security & Trust',
      description: 'Your data and privacy are our top priorities in everything we build'
    },
    {
      icon: <Globe className="w-8 h-8 text-purple-400" />,
      title: 'Global Impact',
      description: 'We create solutions that make a positive difference worldwide'
    },
    {
      icon: <Users className="w-8 h-8 text-pink-400" />,
      title: 'Client Success',
      description: 'Your success is our success - we\'re committed to your growth'
    }
  ];

  return (
    <>
      <Helmet>
        <title>About Zion Tech Group - Leading AI and Technology Solutions</title>
        <meta name="description" content="Learn about Zion Tech Group's mission to revolutionize business through AI, cloud computing, and cutting-edge technology solutions. Meet our expert team." />
        <meta name="keywords" content="about Zion Tech Group, AI company, technology team, cloud solutions, artificial intelligence experts" />
      </Helmet>

      <FuturisticBackground variant="hero">
        <section className="pt-20 px-4 py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
                About Zion Tech Group
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-6 sm:mb-8 px-4">
                We're a team of passionate technologists dedicated to transforming businesses through 
                innovative AI solutions, cloud computing, and cutting-edge technology.
              </p>
            </div>

            {/* Mission Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              <FuturisticCard variant="feature">
                <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
                <p className="text-gray-300 mb-6">
                  To democratize access to advanced AI and technology solutions, enabling businesses 
                  of all sizes to compete and thrive in the digital age. We believe technology should 
                  be accessible, powerful, and transformative.
                </p>
                <div className="flex items-center text-cyan-400">
                  <Target className="w-5 h-5 mr-2" />
                  <span className="font-semibold">Empowering Digital Transformation</span>
                </div>
              </FuturisticCard>

              <FuturisticCard variant="feature">
                <h2 className="text-2xl font-bold text-white mb-4">Our Vision</h2>
                <p className="text-gray-300 mb-6">
                  To be the world's leading provider of AI-powered business solutions, creating a 
                  future where technology seamlessly integrates with human potential to solve 
                  complex challenges and unlock unprecedented opportunities.
                </p>
                <div className="flex items-center text-purple-400">
                  <Award className="w-5 h-5 mr-2" />
                  <span className="font-semibold">Leading Innovation</span>
                </div>
              </FuturisticCard>
            </div>

            {/* Values Section */}
            <section className="mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center mb-12">
                Our Core Values
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {values.map((value, index) => (
                  <FuturisticCard key={index} variant="service">
                    <div className="mb-4">{value.icon}</div>
                    <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                    <p className="text-gray-300">{value.description}</p>
                  </FuturisticCard>
                ))}
              </div>
            </section>

            {/* Team Section */}
            <section className="mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center mb-12">
                Meet Our Team
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {teamMembers.map((member, index) => (
                  <FuturisticCard key={index} variant="testimonial">
                    <div className="text-center">
                      <div className="w-24 h-24 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <Users className="w-12 h-12 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                      <p className="text-cyan-400 font-medium mb-3">{member.role}</p>
                      <p className="text-gray-300 text-sm">{member.description}</p>
                    </div>
                  </FuturisticCard>
                ))}
              </div>
            </section>

            {/* Stats Section */}
            <section className="text-center">
              <FuturisticCard variant="feature">
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">
                  Our Impact in Numbers
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div>
                    <div className="text-3xl font-bold text-cyan-400 mb-2">1,200+</div>
                    <div className="text-gray-300">Projects Completed</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-purple-400 mb-2">99.8%</div>
                    <div className="text-gray-300">Client Satisfaction</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-green-400 mb-2">50+</div>
                    <div className="text-gray-300">Countries Served</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-pink-400 mb-2">24/7</div>
                    <div className="text-gray-300">Support Available</div>
                  </div>
                </div>
              </FuturisticCard>
            </section>
          </div>
        </section>
      </FuturisticBackground>
    </>
  );
}
