'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Clock, Users, Zap, CheckCircle, Award, Briefcase } from 'lucide-react';

const CareersPage: React.FC = () => {
  const positions = [
    {
      id: 1,
      title: 'Senior AI Engineer',
      department: 'AI & Machine Learning',
      location: 'Remote / New York',
      type: 'Full-time',
      posted: '2 days ago',
      description: 'Lead the development of cutting-edge AI solutions and machine learning models.',
      requirements: ['5+ years AI/ML experience', 'Python, TensorFlow, PyTorch', 'PhD in Computer Science preferred']
    },
    {
      id: 2,
      title: 'Cloud Solutions Architect',
      department: 'Cloud Infrastructure',
      location: 'San Francisco',
      type: 'Full-time',
      posted: '1 week ago',
      description: 'Design and implement scalable cloud architectures for enterprise clients.',
      requirements: ['AWS/Azure certification', 'Kubernetes expertise', '7+ years cloud experience']
    },
    {
      id: 3,
      title: 'Cybersecurity Specialist',
      department: 'Security',
      location: 'Remote',
      type: 'Full-time',
      posted: '3 days ago',
      description: 'Protect our clients from evolving cyber threats with advanced security solutions.',
      requirements: ['CISSP certification', 'Penetration testing experience', '5+ years security experience']
    },
    {
      id: 4,
      title: 'Frontend Developer',
      department: 'Engineering',
      location: 'Remote / London',
      type: 'Full-time',
      posted: '5 days ago',
      description: 'Build beautiful, responsive user interfaces for our AI-powered applications.',
      requirements: ['React, TypeScript expertise', 'UI/UX design skills', '3+ years frontend experience']
    }
  ];

  const values = [
    {
      title: 'Innovation First',
      description: 'We push the boundaries of what\'s possible with technology',
      icon: Zap,
      color: 'text-purple-400'
    },
    {
      title: 'Collaborative Culture',
      description: 'Work with brilliant minds in an open, supportive environment',
      icon: Users,
      color: 'text-blue-400'
    },
    {
      title: 'Growth Opportunities',
      description: 'Continuous learning and career advancement opportunities',
      icon: Award,
      color: 'text-green-400'
    },
    {
      title: 'Work-Life Balance',
      description: 'Flexible schedules and remote work options',
      icon: CheckCircle,
      color: 'text-yellow-400'
    }
  ];

  const benefits = [
    'Competitive salary and equity',
    'Comprehensive health insurance',
    '401(k) with company matching',
    'Unlimited PTO',
    'Professional development budget',
    'Top-tier equipment and tools',
    'Flexible work arrangements',
    'Team building events'
  ];

  const stats = [
    { stat: '50+', label: 'Team Members', description: 'Growing rapidly' },
    { stat: '15+', label: 'Countries', description: 'Remote team' },
    { stat: '99%', label: 'Employee Satisfaction', description: 'Based on surveys' },
    { stat: '4.8/5', label: 'Glassdoor Rating', description: 'Employee reviews' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Careers - Zion Tech Group</title>
        <meta name="description" content="Join our team of innovators and help shape the future of AI and technology. Explore career opportunities at Zion Tech Group." />
        <meta name="keywords" content="careers, jobs, AI engineer, cloud architect, cybersecurity, remote work, tech jobs" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Join Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Mission</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            Help us build the future of AI and technology. Join a team of passionate innovators working on cutting-edge solutions.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-white mb-2">{item.stat}</div>
                <div className="text-gray-400 text-sm">{item.label}</div>
                <div className="text-gray-500 text-xs mt-1">{item.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Our Values</h2>
            <p className="text-gray-300 text-lg">What drives us forward every day</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center hover:border-purple-400 transition-all duration-300">
                <div className={`w-16 h-16 ${value.color} bg-white/10 rounded-full mx-auto mb-6 flex items-center justify-center`}>
                  <value.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                <p className="text-gray-300 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Benefits & Perks</h2>
            <p className="text-gray-300 text-lg">We take care of our team</p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
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

      {/* Open Positions */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Open Positions</h2>
            <p className="text-gray-300 text-lg">Find your next opportunity</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {positions.map((position) => (
              <div
                key={position.id}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-center gap-2 mb-4">
                  <Briefcase className="w-5 h-5 text-purple-400" />
                  <span className="text-purple-400 text-sm font-medium">{position.department}</span>
                </div>

                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{position.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-gray-400">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {position.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {position.type}
                      </div>
                    </div>
                  </div>
                  <span className="text-gray-500 text-sm">Posted {position.posted}</span>
                </div>

                <p className="text-gray-300 mb-4">{position.description}</p>

                <div className="flex items-center gap-4 mb-6 text-sm text-gray-400">
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    {position.requirements.length} requirements
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    Full-time
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300">
                  Apply Now
                </button>
              </div>
            ))}
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
              We're always looking for talented individuals. Send us your resume and let us know how you can contribute to our mission.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105">
                <Zap className="w-5 h-5" />
                Send Resume
              </button>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;