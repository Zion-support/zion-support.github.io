'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { MapPin, Clock, Users, ArrowRight, CheckCircle, Star, Heart, Briefcase, Award, Zap } from 'lucide-react';

const CareersPage: React.FC = () => {
  const openPositions = [
    {
      title: 'Senior AI Engineer',
      department: 'Engineering',
      location: 'Remote / New York',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Lead development of cutting-edge AI solutions and machine learning models.',
      requirements: ['Python, TensorFlow, PyTorch', '5+ years ML experience', 'PhD in AI/ML preferred']
    },
    {
      title: 'Cloud Solutions Architect',
      department: 'Infrastructure',
      location: 'San Francisco',
      type: 'Full-time',
      experience: '7+ years',
      description: 'Design and implement scalable cloud infrastructure solutions for enterprise clients.',
      requirements: ['AWS, Azure, GCP', '7+ years cloud experience', 'Architecture certifications']
    },
    {
      title: 'Data Scientist',
      department: 'Analytics',
      location: 'Remote / Austin',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Extract insights from complex datasets and build predictive models.',
      requirements: ['Python, R, SQL', '3+ years data science', 'Statistics background']
    },
    {
      title: 'DevOps Engineer',
      department: 'Engineering',
      location: 'Seattle',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Automate deployment pipelines and manage infrastructure at scale.',
      requirements: ['Kubernetes, Docker, CI/CD', '4+ years DevOps', 'Infrastructure as Code']
    },
    {
      title: 'Frontend Developer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Build beautiful and responsive user interfaces for our AI applications.',
      requirements: ['React, TypeScript, Next.js', '3+ years frontend', 'UI/UX experience']
    },
    {
      title: 'Product Manager',
      department: 'Product',
      location: 'New York',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Lead product strategy and roadmap for our AI and cloud solutions.',
      requirements: ['5+ years PM experience', 'Technical background', 'AI/ML knowledge']
    }
  ];

  const benefits = [
    'Competitive salary and equity',
    'Comprehensive health insurance',
    'Flexible work arrangements',
    'Professional development budget',
    'Unlimited PTO',
    'Top-tier equipment and tools',
    'Team building events',
    'Career growth opportunities'
  ];

  const values = [
    {
      icon: Star,
      title: 'Innovation',
      description: 'We push the boundaries of what\'s possible with technology'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We work together to achieve extraordinary results'
    },
    {
      icon: Heart,
      title: 'Impact',
      description: 'We create solutions that make a real difference'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for the highest quality in everything we do'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Careers - Zion Tech Group | Join Our Team</title>
        <meta name="description" content="Join Zion Tech Group and work on cutting-edge AI and IT solutions. Explore open positions, benefits, and our company culture." />
        <meta name="keywords" content="careers, jobs, AI engineer, cloud architect, data scientist, DevOps, remote work, tech jobs" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        <div className="container mx-auto px-4 py-16">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              Join Our <span className="text-cyan-400">Team</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Work on cutting-edge AI and IT solutions that are transforming industries. 
              Join a team of passionate innovators building the future of technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Heart className="w-5 h-5" />
                <span>Apply Now</span>
              </Link>
              <Link
                to="/about"
                className="border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
              >
                Learn About Us
              </Link>
            </div>
          </div>

          {/* Why Work With Us */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-white mb-8 text-center">Why Work With Us?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-gradient-to-r from-cyan-500 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Innovation First</h3>
                <p className="text-gray-300">
                  Work on the latest technologies and be part of groundbreaking projects that shape the future.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-gradient-to-r from-cyan-500 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Great Team</h3>
                <p className="text-gray-300">
                  Collaborate with talented professionals who share your passion for technology and innovation.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-gradient-to-r from-cyan-500 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Work-Life Balance</h3>
                <p className="text-gray-300">
                  Flexible work arrangements and comprehensive benefits to support your personal and professional growth.
                </p>
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-white mb-8 text-center">Benefits & Perks</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 text-center"
                >
                  <CheckCircle className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
                  <p className="text-white font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Our Values */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-white mb-8 text-center">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Open Positions */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-white mb-8 text-center">Open Positions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {openPositions.map((position, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-400/50 transition-all duration-300 group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                        {position.title}
                      </h3>
                      <p className="text-gray-300">{position.department}</p>
                    </div>
                    <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full">
                      {position.type}
                    </span>
                  </div>

                  <p className="text-gray-300 mb-4">{position.description}</p>

                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-400">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{position.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{position.experience}</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-2">Key Requirements:</h4>
                    <ul className="space-y-1">
                      {position.requirements.map((req, reqIndex) => (
                        <li key={reqIndex} className="text-gray-300 text-sm flex items-center">
                          <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
                    Apply Now
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl p-12 text-center backdrop-blur-lg border border-white/10">
            <h2 className="text-4xl font-bold text-white mb-4">
              Don't See Your Role?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals to join our team. 
              Send us your resume and let's discuss how you can contribute.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
              >
                Send Your Resume
              </Link>
              <Link
                to="/about"
                className="border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
              >
                Learn About Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CareersPage;