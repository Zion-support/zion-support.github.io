'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { MapPin, Clock, CheckCircle, Star, Users, Heart, Award, ArrowRight, Briefcase, GraduationCap, Zap } from 'lucide-react';

const CareersPage: React.FC = () => {
  const openPositions = [
    {
      title: 'Senior AI Engineer',
      department: 'AI Solutions',
      location: 'Remote',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Lead the development of cutting-edge AI solutions and machine learning models for enterprise clients.',
      requirements: ['Python, TensorFlow, PyTorch', '5+ years ML experience', 'PhD in AI/ML preferred', 'Cloud platform expertise']
    },
    {
      title: 'Cloud Architect',
      department: 'Cloud Services',
      location: 'New York, NY',
      type: 'Full-time',
      experience: '7+ years',
      description: 'Design and implement scalable cloud infrastructure solutions for enterprise clients.',
      requirements: ['AWS, Azure, GCP', '7+ years cloud experience', 'Architecture certifications', 'Kubernetes expertise']
    },
    {
      title: 'Data Scientist',
      department: 'Data Analytics',
      location: 'San Francisco, CA',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Extract insights from complex datasets and build predictive models for business intelligence.',
      requirements: ['Python, R, SQL', '4+ years data science', 'Statistical modeling', 'Big data technologies']
    },
    {
      title: 'DevOps Engineer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Automate deployment pipelines and maintain infrastructure for high-availability systems.',
      requirements: ['Docker, Kubernetes', 'CI/CD pipelines', '3+ years DevOps', 'Infrastructure as Code']
    },
    {
      title: 'Frontend Developer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Build responsive and interactive user interfaces for our AI and IT solutions.',
      requirements: ['React, TypeScript', '3+ years frontend', 'UI/UX design', 'Modern web technologies']
    },
    {
      title: 'Product Manager',
      department: 'Product',
      location: 'Remote',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Drive product strategy and roadmap for our AI-powered solutions and platforms.',
      requirements: ['5+ years PM experience', 'AI/ML product knowledge', 'Strategic thinking', 'Cross-functional leadership']
    }
  ];

  const benefits = [
    'Competitive salary and equity',
    'Comprehensive health insurance',
    'Flexible work arrangements',
    'Professional development budget',
    'Top-tier equipment and tools',
    'Team building events',
    'Career growth opportunities',
    '401k with company matching',
    'Unlimited PTO',
    'Remote work options'
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

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
              Join Our Team
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Work on cutting-edge AI and IT solutions that transform businesses worldwide. 
              Be part of a team that's shaping the future of technology.
            </p>
          </section>

          {/* Open Positions */}
          <section className="mb-16">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">Open Positions</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {openPositions.map((position, index) => (
                  <div
                    key={index}
                    className="cyber-card hologram-card p-6 hover:scale-105 transition-all duration-300"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">
                          {position.title}
                        </h3>
                        <p className="text-cyan-400 text-sm">{position.department}</p>
                      </div>
                      <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full">
                        {position.type}
                      </span>
                    </div>

                    <p className="text-gray-300 mb-4 text-sm">{position.description}</p>

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
                      <h4 className="text-white font-semibold mb-3 text-sm">Key Requirements:</h4>
                      <ul className="space-y-1">
                        {position.requirements.map((req, reqIndex) => (
                          <li key={reqIndex} className="text-gray-300 text-xs flex items-center">
                            <CheckCircle className="w-3 h-3 text-cyan-400 mr-2 flex-shrink-0" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <button className="w-full cyber-button text-center py-2 text-sm">
                      Apply Now
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Company Values */}
          <section className="mb-16">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">Our Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {values.map((value, index) => (
                  <div key={index} className="cyber-card hologram-card p-6 text-center hover:scale-105 transition-all duration-300">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <value.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                    <p className="text-gray-300 text-sm">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Benefits */}
          <section className="mb-16">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">Benefits & Perks</h2>
              <div className="cyber-card hologram-card p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Why Join Us */}
          <section className="mb-16">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">Why Join Zion Tech Group?</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="cyber-card hologram-card p-6 text-center">
                  <Briefcase className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">Meaningful Work</h3>
                  <p className="text-gray-300">Work on projects that make a real impact on businesses and society.</p>
                </div>
                <div className="cyber-card hologram-card p-6 text-center">
                  <GraduationCap className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">Continuous Learning</h3>
                  <p className="text-gray-300">Stay at the forefront of technology with ongoing education and training.</p>
                </div>
                <div className="cyber-card hologram-card p-6 text-center">
                  <Zap className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">Fast Growth</h3>
                  <p className="text-gray-300">Be part of a rapidly growing company with endless opportunities.</p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <div className="cyber-card hologram-card p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Join Our Team?</h3>
              <p className="text-gray-300 mb-6">
                Don't see a position that matches your skills? We're always looking for talented individuals. 
                Send us your resume and let's start a conversation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="cyber-button text-center py-3 px-8"
                >
                  Contact Us
                </Link>
                <a
                  href="mailto:careers@ziontechgroup.com"
                  className="border-2 border-cyan-500 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
                >
                  Send Resume
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default CareersPage;
