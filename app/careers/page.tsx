'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Star, Users, Heart, Award, MapPin, Clock, Briefcase, ArrowRight } from 'lucide-react';

const CareersPage: React.FC = () => {
  const openPositions = [
    {
      title: 'Senior AI Engineer',
      department: 'AI Solutions',
      location: 'Remote',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Design and implement cutting-edge AI solutions for enterprise clients.',
        requirements: ['Python, TensorFlow, PyTorch', '5+ years AI experience', 'Machine Learning expertise']
    },
    {
      title: 'Cloud Architect',
      department: 'Cloud Services',
      location: 'New York, NY',
      type: 'Full-time',
      experience: '7+ years',
      description: 'Design and implement scalable cloud infrastructure solutions for enterprise clients.',
      requirements: ['AWS, Azure, GCP', '7+ years cloud experience', 'Architecture certifications']
    },
    {
      title: 'Data Scientist',
      department: 'Data Analytics',
      location: 'San Francisco, CA',
      type: 'Full-time',
      experience: '3+ years',
        description: 'Extract insights from complex datasets to drive business decisions.',
        requirements: ['Python, R, SQL', '3+ years data science experience', 'Statistical analysis skills']
      }
    ];

  const benefits = [
    'Competitive salary and equity',
    'Comprehensive health insurance',
    'Flexible work arrangements',
    'Professional development budget',
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
        <meta name="description" content="Join our team of AI and IT experts. Explore career opportunities at Zion Tech Group and be part of the future of technology." />
        <meta name="keywords" content="careers, jobs, AI engineer, IT specialist, technology careers, remote work" />
      </Helmet>
      
      <div className="min-h-screen pt-16">
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Join Our Team
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Work on cutting-edge AI and IT solutions that transform businesses worldwide.
            </p>
          </div>
        </section>

        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Open Positions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {openPositions.map((position, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-lg rounded-lg p-6 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-white">{position.title}</h3>
                    <span className="text-sm text-cyan-400 bg-cyan-500/20 px-3 py-1 rounded-full">
                      {position.type}
                    </span>
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-gray-400">
                      <Briefcase className="w-4 h-4 mr-2" />
                      {position.department}
                    </div>
                    <div className="flex items-center text-gray-400">
                      <MapPin className="w-4 h-4 mr-2" />
                      {position.location}
                    </div>
                    <div className="flex items-center text-gray-400">
                      <Clock className="w-4 h-4 mr-2" />
                      {position.experience}
                    </div>
                  </div>

                  <p className="text-gray-300 mb-4">{position.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-2">Requirements:</h4>
                    <ul className="space-y-1">
                      {position.requirements.map((req, reqIndex) => (
                        <li key={reqIndex} className="text-sm text-gray-400 flex items-center">
                          <ArrowRight className="w-3 h-3 text-cyan-400 mr-2 flex-shrink-0" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                    Apply Now
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-8">Why Work With Us?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {values.map((value, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </div>
              ))}
            </div>

            <div className="bg-slate-800/50 backdrop-blur-lg rounded-lg p-8 border border-cyan-500/20">
              <h3 className="text-2xl font-bold text-white mb-4">Benefits & Perks</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                    {benefit}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CareersPage;
