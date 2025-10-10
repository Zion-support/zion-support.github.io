'use client';

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { MapPin, Clock, Users, Star, ArrowRight, CheckCircle, Briefcase, GraduationCap, Heart } from 'lucide-react';

interface JobPosition {
  id: string;
  title: string;
  department: string;
  type: string;
  location: string;
  experience: string;
  posted: string;
  description: string;
  featured: boolean;
}

const CareersPage: React.FC = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('all');

  const jobPositions: JobPosition[] = [
    {
      id: '1',
      title: 'Senior AI Engineer',
      department: 'Engineering',
      type: 'Full-time',
      location: 'Remote',
      experience: '5+ years',
      posted: '2 days ago',
      description: 'Lead the development of cutting-edge AI solutions and machine learning models for enterprise clients.',
      featured: true
    },
    {
      id: '2',
      title: 'Cloud Solutions Architect',
      department: 'Engineering',
      type: 'Full-time',
      location: 'New York, NY',
      experience: '7+ years',
      posted: '1 week ago',
      description: 'Design and implement scalable cloud infrastructure solutions using AWS, Azure, and GCP.',
      featured: false
    },
    {
      id: '3',
      title: 'Blockchain Developer',
      department: 'Engineering',
      type: 'Full-time',
      location: 'San Francisco, CA',
      experience: '3+ years',
      posted: '3 days ago',
      description: 'Develop decentralized applications and smart contracts for blockchain platforms.',
      featured: true
    },
    {
      id: '4',
      title: 'DevOps Engineer',
      department: 'Engineering',
      type: 'Full-time',
      location: 'Remote',
      experience: '4+ years',
      posted: '5 days ago',
      description: 'Build and maintain CI/CD pipelines and infrastructure automation tools.',
      featured: false
    },
    {
      id: '5',
      title: 'Product Manager',
      department: 'Product',
      type: 'Full-time',
      location: 'Austin, TX',
      experience: '6+ years',
      posted: '1 week ago',
      description: 'Drive product strategy and roadmap for our AI-powered enterprise solutions.',
      featured: false
    },
    {
      id: '6',
      title: 'UX Designer',
      department: 'Design',
      type: 'Full-time',
      location: 'Remote',
      experience: '4+ years',
      posted: '4 days ago',
      description: 'Create intuitive and engaging user experiences for our digital products.',
      featured: false
    }
  ];

  const departments = ['all', 'Engineering', 'Product', 'Design', 'Marketing', 'Sales'];

  const filteredPositions = selectedDepartment === 'all' 
    ? jobPositions 
    : jobPositions.filter(position => position.department === selectedDepartment);

  const benefits = [
    'Competitive salary and equity',
    'Comprehensive health coverage',
    'Flexible work arrangements',
    'Professional development budget',
    'Unlimited PTO',
    '401(k) with company matching',
    'Stock options',
    'Remote work support'
  ];

  return (
    <>
      <Helmet>
        <title>Careers - Zion Tech Group | Join Our Team</title>
        <meta name="description" content="Join Zion Tech Group and help shape the future of AI, blockchain, and cloud computing. Explore open positions and career opportunities." />
        <meta name="keywords" content="careers, jobs, AI engineer, blockchain developer, cloud architect, tech jobs" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Join Our
              <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Mission
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Help us build the future of technology. We're looking for passionate individuals 
              who want to make a difference in AI, blockchain, and cloud computing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center space-x-2">
                <Briefcase className="w-5 h-5" />
                <span>View Open Positions</span>
              </button>
              <button className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 flex items-center justify-center space-x-2">
                <Heart className="w-5 h-5" />
                <span>Why Join Us</span>
              </button>
            </div>
          </div>
        </section>

        {/* Department Filter */}
        <section className="py-8 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-2">
              {departments.map((department) => (
                <button
                  key={department}
                  onClick={() => setSelectedDepartment(department)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    selectedDepartment === department
                      ? 'bg-purple-600 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  {department}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Job Positions */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                Open Positions
              </h2>
              <p className="text-xl text-gray-300">
                Find your next career opportunity with us
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPositions.map((position) => (
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

                  <button className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300">
                    Apply Now
                  </button>
                </div>
              ))}
            </div>

            {filteredPositions.length === 0 && (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-semibold text-white mb-2">No positions found</h3>
                <p className="text-gray-400">Try selecting a different department or check back later.</p>
              </div>
            )}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                Why Work With Us?
              </h2>
              <p className="text-xl text-gray-300">
                We offer competitive benefits and a great work environment
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300">
                  <CheckCircle className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
                  <p className="text-gray-300">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-purple-600 to-cyan-600 rounded-2xl p-8">
              <h3 className="text-3xl font-bold text-white mb-4">
                Don't See Your Dream Job?
              </h3>
              <p className="text-xl text-white/90 mb-8">
                We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2">
                  <GraduationCap className="w-5 h-5" />
                  <span>Send Resume</span>
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors flex items-center justify-center space-x-2">
                  <ArrowRight className="w-5 h-5" />
                  <span>Learn More</span>
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CareersPage;