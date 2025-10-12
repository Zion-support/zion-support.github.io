import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight, MapPin, Clock, Users, Brain, Code, Shield, Cloud, Zap, CheckCircle, Star } from 'lucide-react'

export default function CareersPage() {
  const openPositions = [
    {
      title: 'Senior AI Engineer',
      department: 'AI Research',
      location: 'San Francisco, CA',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Lead development of cutting-edge AI solutions and machine learning models.',
      requirements: [
        'PhD in Computer Science or related field',
        '5+ years experience in AI/ML',
        'Expertise in Python, TensorFlow, PyTorch',
        'Experience with cloud platforms (AWS, GCP, Azure)',
        'Strong problem-solving and communication skills'
      ],
      icon: <Brain className="w-6 h-6 text-cyan-400" />
    },
    {
      title: 'Cloud Solutions Architect',
      department: 'Infrastructure',
      location: 'Remote',
      type: 'Full-time',
      experience: '7+ years',
      description: 'Design and implement scalable cloud infrastructure solutions for enterprise clients.',
      requirements: [
        '7+ years cloud architecture experience',
        'AWS/Azure/GCP certifications preferred',
        'Experience with Kubernetes, Docker',
        'Knowledge of DevOps practices',
        'Strong leadership and mentoring skills'
      ],
      icon: <Cloud className="w-6 h-6 text-blue-400" />
    },
    {
      title: 'Cybersecurity Specialist',
      department: 'Security',
      location: 'New York, NY',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Protect our clients from cyber threats and ensure compliance with security standards.',
      requirements: [
        '4+ years cybersecurity experience',
        'CISSP, CISM, or similar certifications',
        'Experience with security tools and frameworks',
        'Knowledge of compliance standards (SOC2, GDPR)',
        'Strong analytical and problem-solving skills'
      ],
      icon: <Shield className="w-6 h-6 text-red-400" />
    },
    {
      title: '5G Network Engineer',
      department: '5G Technology',
      location: 'Austin, TX',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Implement and optimize 5G networks and IoT solutions for enterprise clients.',
      requirements: [
        '3+ years 5G/telecommunications experience',
        'Knowledge of 5G protocols and standards',
        'Experience with network optimization',
        'Understanding of IoT and edge computing',
        'Strong technical documentation skills'
      ],
      icon: <Zap className="w-6 h-6 text-yellow-400" />
    },
    {
      title: 'Full Stack Developer',
      department: 'Engineering',
      location: 'Seattle, WA',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Build and maintain web applications and microservices for our platform.',
      requirements: [
        '3+ years full-stack development experience',
        'Proficiency in React, Node.js, TypeScript',
        'Experience with databases (PostgreSQL, MongoDB)',
        'Knowledge of API design and development',
        'Strong collaboration and communication skills'
      ],
      icon: <Code className="w-6 h-6 text-purple-400" />
    },
    {
      title: 'Product Manager',
      department: 'Product',
      location: 'Remote',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Drive product strategy and roadmap for our AI and IT service offerings.',
      requirements: [
        '5+ years product management experience',
        'Experience with AI/ML products preferred',
        'Strong analytical and strategic thinking',
        'Excellent communication and leadership skills',
        'MBA or technical background preferred'
      ],
      icon: <Users className="w-6 h-6 text-green-400" />
    }
  ]

  const benefits = [
    {
      title: 'Competitive Compensation',
      description: 'Above-market salaries with performance bonuses and equity options',
      icon: <Star className="w-6 h-6 text-yellow-400" />
    },
    {
      title: 'Health & Wellness',
      description: 'Comprehensive health, dental, and vision insurance for you and your family',
      icon: <CheckCircle className="w-6 h-6 text-green-400" />
    },
    {
      title: 'Flexible Work',
      description: 'Remote work options and flexible hours to support work-life balance',
      icon: <Clock className="w-6 h-6 text-blue-400" />
    },
    {
      title: 'Learning & Development',
      description: 'Annual learning budget, conference attendance, and professional development',
      icon: <Brain className="w-6 h-6 text-purple-400" />
    },
    {
      title: 'Cutting-Edge Technology',
      description: 'Work with the latest AI, cloud, and 5G technologies',
      icon: <Zap className="w-6 h-6 text-cyan-400" />
    },
    {
      title: 'Team Culture',
      description: 'Collaborative environment with regular team events and retreats',
      icon: <Users className="w-6 h-6 text-pink-400" />
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      <Helmet>
        <title>Careers - Zion Tech Group</title>
        <meta name="description" content="Join our team of experts in AI, cloud services, cybersecurity, and 5G solutions. Explore career opportunities at Zion Tech Group." />
        <meta name="keywords" content="careers, jobs, AI engineer, cloud architect, cybersecurity, 5G engineer, remote work" />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Join Our{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Mission
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Help us transform businesses with cutting-edge AI, cloud services, cybersecurity, and 5G solutions. 
            Be part of a team that's shaping the future of technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="#open-positions"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
            >
              View Open Positions
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Why Work With Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-cyan-500/30 transition-all duration-300">
                <div className="flex items-center mb-4">
                  {benefit.icon}
                  <h3 className="text-xl font-semibold text-white ml-3">{benefit.title}</h3>
                </div>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Open Positions */}
        <div id="open-positions" className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Open Positions</h2>
          <div className="space-y-8">
            {openPositions.map((position, index) => (
              <div key={index} className="bg-slate-800/50 rounded-xl p-8 border border-slate-700 hover:border-cyan-500/30 transition-all duration-300">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center">
                    {position.icon}
                    <div className="ml-4">
                      <h3 className="text-2xl font-semibold text-white mb-2">{position.title}</h3>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                        <span className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {position.location}
                        </span>
                        <span className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {position.type}
                        </span>
                        <span className="flex items-center">
                          <Users className="w-4 h-4 mr-1" />
                          {position.experience}
                        </span>
                      </div>
                    </div>
                  </div>
                  <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                    Apply Now
                  </button>
                </div>
                
                <p className="text-gray-300 mb-6">{position.description}</p>
                
                <div>
                  <h4 className="text-lg font-semibold text-white mb-4">Requirements:</h4>
                  <ul className="space-y-2">
                    {position.requirements.map((requirement, reqIndex) => (
                      <li key={reqIndex} className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{requirement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Culture Section */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-slate-800/50 to-purple-900/30 rounded-2xl p-8 border border-cyan-500/20">
            <h2 className="text-3xl font-bold text-white text-center mb-8">Our Culture</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Innovation</h3>
                <p className="text-gray-300">We encourage creative thinking and experimentation with new technologies.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Collaboration</h3>
                <p className="text-gray-300">We believe in the power of diverse teams working together toward common goals.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-yellow-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Excellence</h3>
                <p className="text-gray-300">We strive for the highest quality in everything we do and deliver.</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl p-8 border border-cyan-500/30">
            <h2 className="text-3xl font-bold text-white mb-4">
              Don't See Your Role?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals. Send us your resume and let us know how you can contribute to our mission.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Send Your Resume
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/about"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Learn About Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}