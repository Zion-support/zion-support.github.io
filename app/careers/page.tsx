'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { MapPin, Clock, Users, ArrowRight, CheckCircle, Heart, Zap, Brain } from 'lucide-react';

const CareersPage: React.FC = () => {
  const openPositions = [
    {
      title: 'Senior AI Engineer',
      department: 'AI Development',
      location: 'Remote / Delaware',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Lead AI model development and implementation for enterprise clients',
      requirements: [
        'Master\'s degree in Computer Science or related field',
        '5+ years experience with machine learning frameworks',
        'Expertise in Python, TensorFlow, PyTorch',
        'Experience with cloud platforms (AWS, Azure, GCP)',
        'Strong problem-solving and communication skills'
      ],
      benefits: [
        'Competitive salary and equity',
        'Health, dental, and vision insurance',
        'Flexible work arrangements',
        'Professional development budget',
        '401(k) with company matching'
      ],
      icon: Brain,
      color: 'from-cyan-500 to-blue-600'
    },
    {
      title: 'DevOps Engineer',
      department: 'Infrastructure',
      location: 'Remote / Delaware',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Build and maintain scalable cloud infrastructure and CI/CD pipelines',
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        '3+ years experience with DevOps tools and practices',
        'Expertise in Docker, Kubernetes, Terraform',
        'Experience with AWS, Azure, or GCP',
        'Knowledge of monitoring and logging tools'
      ],
      benefits: [
        'Competitive salary and equity',
        'Health, dental, and vision insurance',
        'Flexible work arrangements',
        'Professional development budget',
        '401(k) with company matching'
      ],
      icon: Zap,
      color: 'from-purple-500 to-pink-600'
    },
    {
      title: 'Frontend Developer',
      department: 'Web Development',
      location: 'Remote / Delaware',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Create beautiful and responsive user interfaces for our AI and IT solutions',
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        '3+ years experience with React, TypeScript',
        'Experience with modern CSS frameworks',
        'Knowledge of responsive design principles',
        'Experience with version control and testing'
      ],
      benefits: [
        'Competitive salary and equity',
        'Health, dental, and vision insurance',
        'Flexible work arrangements',
        'Professional development budget',
        '401(k) with company matching'
      ],
      icon: Users,
      color: 'from-green-500 to-emerald-600'
    }
  ];

  const benefits = [
    {
      title: 'Competitive Compensation',
      description: 'Above-market salaries and equity participation',
      icon: Heart
    },
    {
      title: 'Health & Wellness',
      description: 'Comprehensive health, dental, and vision coverage',
      icon: Heart
    },
    {
      title: 'Flexible Work',
      description: 'Remote work options and flexible schedules',
      icon: Clock
    },
    {
      title: 'Learning & Growth',
      description: 'Professional development budget and training opportunities',
      icon: Brain
    },
    {
      title: 'Team Culture',
      description: 'Collaborative environment with talented professionals',
      icon: Users
    },
    {
      title: 'Innovation',
      description: 'Work on cutting-edge AI and IT projects',
      icon: Zap
    }
  ];

  return (
    <>
      <Helmet>
        <title>Careers - Zion Tech Group</title>
        <meta name="description" content="Join our team of AI and IT experts. Explore career opportunities at Zion Tech Group." />
        <meta name="keywords" content="careers, jobs, AI engineer, DevOps, frontend developer, remote work" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16 pt-24">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Join Our <span className="text-cyan-400">Team</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Be part of a team that's shaping the future with AI and IT solutions. Work on cutting-edge projects and grow your career with us.
            </p>
          </div>

          {/* Why Work With Us */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Why Work With Us?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Open Positions */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Open Positions</h2>
            <div className="space-y-8">
              {openPositions.map((position, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-400/30 transition-all duration-300">
                  <div className="md:flex md:items-start md:justify-between">
                    <div className="md:w-2/3">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className={`w-12 h-12 bg-gradient-to-r ${position.color} rounded-xl flex items-center justify-center`}>
                          <position.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-white">{position.title}</h3>
                          <p className="text-cyan-400">{position.department}</p>
                        </div>
                      </div>
                      
                      <p className="text-gray-300 mb-6">{position.description}</p>
                      
                      <div className="flex flex-wrap gap-4 mb-6">
                        <div className="flex items-center text-sm text-gray-400">
                          <MapPin className="w-4 h-4 mr-1" />
                          {position.location}
                        </div>
                        <div className="flex items-center text-sm text-gray-400">
                          <Clock className="w-4 h-4 mr-1" />
                          {position.type}
                        </div>
                        <div className="flex items-center text-sm text-gray-400">
                          <Users className="w-4 h-4 mr-1" />
                          {position.experience}
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="text-lg font-semibold text-cyan-400 mb-3">Requirements</h4>
                          <ul className="space-y-2">
                            {position.requirements.map((req, reqIndex) => (
                              <li key={reqIndex} className="flex items-start text-sm text-gray-300">
                                <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                                {req}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-cyan-400 mb-3">Benefits</h4>
                          <ul className="space-y-2">
                            {position.benefits.map((benefit, benefitIndex) => (
                              <li key={benefitIndex} className="flex items-start text-sm text-gray-300">
                                <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                                {benefit}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="md:w-1/3 md:pl-8 mt-6 md:mt-0">
                      <button className="w-full py-3 px-6 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center group">
                        Apply Now
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Culture Section */}
          <div className="mb-16 bg-gradient-to-r from-slate-800/50 to-purple-900/50 rounded-3xl p-12 border border-cyan-500/20">
            <h2 className="text-3xl font-bold text-white text-center mb-8">Our Culture</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Innovation First</h3>
                <p className="text-gray-300 mb-6">
                  We encourage experimentation and innovation. Our team is always exploring new technologies 
                  and approaches to solve complex problems for our clients.
                </p>
                <h3 className="text-xl font-bold text-white mb-4">Collaborative Environment</h3>
                <p className="text-gray-300">
                  We believe in the power of collaboration. Our team works together to share knowledge, 
                  support each other, and deliver exceptional results.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Continuous Learning</h3>
                <p className="text-gray-300 mb-6">
                  Technology evolves rapidly, and so do we. We provide opportunities for continuous learning 
                  and professional development to keep our team at the forefront of innovation.
                </p>
                <h3 className="text-xl font-bold text-white mb-4">Work-Life Balance</h3>
                <p className="text-gray-300">
                  We understand the importance of work-life balance. Our flexible work arrangements and 
                  supportive culture help our team thrive both professionally and personally.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Don't See Your Perfect Role?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              We're always looking for talented individuals to join our team. Send us your resume and 
              let us know how you'd like to contribute to our mission.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center group shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40 transform hover:scale-105"
              >
                Send Your Resume
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="mailto:careers@ziontechgroup.com"
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center group"
              >
                Contact HR Team
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CareersPage;