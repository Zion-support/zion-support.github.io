<<<<<<< HEAD
import React from 'react'
import { Helmet } from 'react-helmet-async'

const CareersPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Careers - Zion Tech Group</title>
        <meta name="description" content="Careers services by Zion Tech Group. Advanced AI and IT solutions for your business." />
=======
'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { MapPin, Clock, Users, Star, ArrowRight, CheckCircle, Zap, Heart, Brain, Rocket } from 'lucide-react';

interface JobPosition {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  posted: string;
  description: string;
  requirements: string[];
  featured: boolean;
}

const CareersPage: React.FC = () => {
  const positions: JobPosition[] = [
    {
      id: '1',
      title: 'Senior AI Engineer',
      department: 'AI Solutions',
      location: 'Remote / New York',
      type: 'Full-time',
      experience: '5+ years',
      posted: '2 days ago',
      description: 'Lead the development of cutting-edge AI solutions and machine learning models for enterprise clients.',
      requirements: ['PhD in Computer Science or related field', '5+ years ML/AI experience', 'Expert in Python, TensorFlow, PyTorch'],
      featured: true
    },
    {
      id: '2',
      title: 'Quantum Computing Researcher',
      department: 'Research & Development',
      location: 'San Francisco, CA',
      type: 'Full-time',
      experience: '3+ years',
      posted: '1 week ago',
      description: 'Research and develop quantum algorithms and applications for real-world problems.',
      requirements: ['PhD in Physics or Computer Science', 'Quantum computing experience', 'Strong mathematical background'],
      featured: true
    },
    {
      id: '3',
      title: 'DevOps Engineer',
      department: 'Infrastructure',
      location: 'Austin, TX',
      type: 'Full-time',
      experience: '4+ years',
      posted: '3 days ago',
      description: 'Design and maintain cloud infrastructure for scalable AI and IT solutions.',
      requirements: ['AWS/Azure/GCP certification', 'Kubernetes experience', 'Infrastructure as Code'],
      featured: false
    },
    {
      id: '4',
      title: 'UX Designer',
      department: 'Design',
      location: 'Remote',
      type: 'Full-time',
      experience: '3+ years',
      posted: '5 days ago',
      description: 'Create intuitive user experiences for complex AI and technology products.',
      requirements: ['Portfolio of AI/tech products', 'Figma expertise', 'User research experience'],
      featured: false
    },
    {
      id: '5',
      title: 'Data Scientist',
      department: 'AI Solutions',
      location: 'Boston, MA',
      type: 'Full-time',
      experience: '2+ years',
      posted: '1 week ago',
      description: 'Analyze complex datasets and build predictive models for business insights.',
      requirements: ['Masters in Data Science', 'Python/R expertise', 'Statistical modeling'],
      featured: false
    },
    {
      id: '6',
      title: 'Product Manager',
      department: 'Product',
      location: 'Seattle, WA',
      type: 'Full-time',
      experience: '5+ years',
      posted: '4 days ago',
      description: 'Lead product strategy and development for AI-powered enterprise solutions.',
      requirements: ['Technical background', 'Product management experience', 'AI/ML knowledge'],
      featured: false
    }
  ];

  const benefits = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Competitive Salary',
      description: 'Above-market compensation with performance bonuses'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Health & Wellness',
      description: 'Comprehensive health, dental, and mental health coverage'
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'Learning & Development',
      description: 'Annual learning budget and conference attendance'
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: 'Career Growth',
      description: 'Clear promotion paths and mentorship programs'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Careers - Zion Tech Group | Join Our Team</title>
        <meta name="description" content="Join Zion Tech Group and work on cutting-edge AI, quantum computing, and autonomous systems. Explore open positions and career opportunities." />
        <meta name="keywords" content="tech careers, AI jobs, quantum computing jobs, software engineering, remote work, tech company" />
        <link rel="canonical" href="https://ziontechgroup.com/careers" />
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0fac
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
<<<<<<< HEAD
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Careers
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Coming soon - Advanced Careers solutions by Zion Tech Group
            </p>
          </div>
        </div>
=======
        {/* Hero Section */}
        <section className="pt-32 pb-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Join Our Team
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Build the future of technology with us. We're looking for passionate individuals to join our mission of advancing AI, quantum computing, and autonomous systems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105">
                View Open Positions
              </button>
              <button className="border border-white/30 text-white hover:bg-white/10 font-semibold py-4 px-8 rounded-xl transition-all duration-300">
                Learn About Our Culture
              </button>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">50+</div>
                <div className="text-gray-300">Team Members</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">15+</div>
                <div className="text-gray-300">Countries</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-pink-400 mb-2">100%</div>
                <div className="text-gray-300">Remote Friendly</div>
              </div>
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Open Positions
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {positions.map((position) => (
                <div
                  key={position.id}
                  className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 border ${
                    position.featured ? 'border-purple-400 shadow-2xl shadow-purple-500/25' : 'border-white/20'
                  } hover:border-purple-400 transition-all duration-300 group`}
                >
                  {position.featured && (
                    <div className="flex items-center gap-2 mb-4">
                      <Star className="w-5 h-5 text-yellow-400 fill-current" />
                      <span className="text-yellow-400 text-sm font-semibold">Featured Position</span>
                    </div>
                  )}

                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                        {position.title}
                      </h3>
                      <p className="text-cyan-400 font-medium">{position.department}</p>
                    </div>
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-400 text-sm rounded-full">
                      {position.type}
                    </span>
                  </div>

                  <p className="text-gray-300 mb-6">{position.description}</p>

                  <div className="flex items-center gap-4 mb-6 text-sm text-gray-400">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{position.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{position.experience}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      <span>Posted {position.posted}</span>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <button className="px-6 py-2 bg-gradient-to-r from-purple-500 to-cyan-500 text-white rounded-lg hover:from-purple-600 hover:to-cyan-600 transition-all duration-300 font-medium">
                      Apply Now
                    </button>
                    <button className="px-6 py-2 border border-white/30 text-white rounded-lg hover:bg-white/10 transition-all duration-300">
                      Learn More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              Why Join Zion Tech Group?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-300 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Culture Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-12 border border-white/10">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-white mb-6">Our Culture</h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  We foster an environment of innovation, collaboration, and continuous learning. 
                  Our team is diverse, inclusive, and passionate about pushing the boundaries of technology.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-10 h-10 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Innovation First</h3>
                  <p className="text-gray-300">We encourage experimentation and bold ideas that challenge the status quo.</p>
                </div>

                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-10 h-10 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Collaborative Spirit</h3>
                  <p className="text-gray-300">We believe the best solutions come from diverse teams working together.</p>
                </div>

                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-pink-500/20 to-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Rocket className="w-10 h-10 text-pink-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Growth Mindset</h3>
                  <p className="text-gray-300">We invest in our team's development and provide opportunities to learn and grow.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-12 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6">
                Don't See Your Dream Job?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                We're always looking for exceptional talent. Send us your resume and let us know how you'd like to contribute to our mission.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105">
                  Send Your Resume
                </button>
                <button className="border border-white/30 text-white hover:bg-white/10 font-semibold py-4 px-8 rounded-xl transition-all duration-300">
                  Contact HR Team
                </button>
              </div>
            </div>
          </div>
        </section>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0fac
      </div>
    </>
  )
}

export default CareersPage
