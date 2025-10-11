'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { MapPin, Clock, Users, ArrowRight, CheckCircle, Star, Heart, Zap, Briefcase, Award, GraduationCap } from 'lucide-react';

const CareersPage: React.FC = () => {
  const jobOpenings = [
    {
      title: 'Senior AI Engineer',
      department: 'AI Solutions',
      location: 'Remote / Delaware',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Lead development of cutting-edge AI solutions and machine learning models.',
      requirements: [
        'PhD in Computer Science or related field',
        '5+ years experience in machine learning',
        'Expertise in Python, TensorFlow, PyTorch',
        'Experience with cloud platforms (AWS, GCP, Azure)',
        'Strong problem-solving and communication skills'
      ],
      benefits: [
        'Competitive salary ($120k - $180k)',
        'Comprehensive health insurance',
        'Remote work flexibility',
        'Professional development budget',
        'Stock options'
      ],
      posted: '2024-01-15',
      featured: true
    },
    {
      title: 'Full Stack Developer',
      department: 'Engineering',
      location: 'Remote / Delaware',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Build scalable web applications using modern technologies.',
      requirements: [
        'Bachelor\'s degree in Computer Science',
        '3+ years full-stack development experience',
        'Proficiency in React, Node.js, TypeScript',
        'Experience with databases (PostgreSQL, MongoDB)',
        'Knowledge of cloud services and DevOps'
      ],
      benefits: [
        'Competitive salary ($80k - $120k)',
        'Health and dental insurance',
        'Flexible work hours',
        'Learning and development opportunities',
        '401(k) with company matching'
      ],
      posted: '2024-01-12',
      featured: false
    },
    {
      title: 'Cloud Solutions Architect',
      department: 'Cloud Services',
      location: 'Remote / Delaware',
      type: 'Full-time',
      experience: '7+ years',
      description: 'Design and implement cloud infrastructure solutions for enterprise clients.',
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        '7+ years cloud architecture experience',
        'Expertise in AWS, Azure, or GCP',
        'Experience with infrastructure as code',
        'Strong understanding of security best practices'
      ],
      benefits: [
        'Competitive salary ($130k - $200k)',
        'Comprehensive benefits package',
        'Remote work options',
        'Certification reimbursement',
        'Performance bonuses'
      ],
      posted: '2024-01-10',
      featured: false
    },
    {
      title: 'Cybersecurity Specialist',
      department: 'Security',
      location: 'Remote / Delaware',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Protect our clients\' digital assets and ensure compliance with security standards.',
      requirements: [
        'Bachelor\'s degree in Cybersecurity or related field',
        '4+ years cybersecurity experience',
        'Certifications (CISSP, CISM, or equivalent)',
        'Experience with security tools and frameworks',
        'Knowledge of compliance standards (SOC 2, ISO 27001)'
      ],
      benefits: [
        'Competitive salary ($90k - $140k)',
        'Health and life insurance',
        'Professional development budget',
        'Security conference attendance',
        'Flexible work arrangements'
      ],
      posted: '2024-01-08',
      featured: false
    }
  ];

  const companyValues = [
    {
      icon: Heart,
      title: 'People First',
      description: 'We believe our team is our greatest asset and invest in their growth and well-being.'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'We encourage creative thinking and embrace new technologies to solve complex problems.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We work together as a team, sharing knowledge and supporting each other\'s success.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for the highest quality in everything we do, from code to customer service.'
    }
  ];

  const perks = [
    'Competitive salaries and equity',
    'Comprehensive health insurance',
    'Remote work flexibility',
    'Professional development budget',
    'Flexible PTO policy',
    '401(k) with company matching',
    'Home office stipend',
    'Learning and conference budget',
    'Team building events',
    'Mentorship programs'
  ];

  return (
    <>
      <Helmet>
        <title>Careers - Zion Tech Group</title>
        <meta name="description" content="Join our team of passionate technologists. Explore career opportunities at Zion Tech Group and help us build the future of AI and technology." />
        <meta name="keywords" content="careers, jobs, employment, AI, technology, remote work" />
      </Helmet>
      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Join Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Team</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Be part of a team that's shaping the future of AI and technology. We're looking for passionate individuals who want to make a difference.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                  View Open Positions
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
                <button className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                  Learn About Our Culture
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Company Values */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Values
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                The principles that guide everything we do and shape our company culture.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {companyValues.map((value, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Perks & Benefits */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Perks & Benefits
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We offer comprehensive benefits and perks to support our team's well-being and professional growth.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {perks.map((perk, index) => (
                <div key={index} className="flex items-center bg-slate-800/50 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">{perk}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Open Positions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our current job openings and find the perfect role for you.
              </p>
            </div>

            <div className="space-y-6">
              {jobOpenings.map((job, index) => (
                <div key={index} className={`bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border transition-all duration-300 hover:border-cyan-400/30 ${
                  job.featured ? 'border-cyan-400/50 shadow-lg shadow-cyan-400/20' : 'border-white/10'
                }`}>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-xl font-semibold text-white">{job.title}</h3>
                        {job.featured && (
                          <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
                            <Star className="w-4 h-4 mr-1" />
                            Featured
                          </span>
                        )}
                      </div>
                      <div className="flex flex-wrap items-center space-x-4 text-sm text-gray-400 mb-3">
                        <div className="flex items-center">
                          <Briefcase className="w-4 h-4 mr-2" />
                          {job.department}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-2" />
                          {job.location}
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-2" />
                          {job.type}
                        </div>
                        <div className="flex items-center">
                          <GraduationCap className="w-4 h-4 mr-2" />
                          {job.experience}
                        </div>
                      </div>
                      <p className="text-gray-300 mb-4">{job.description}</p>
                    </div>
                    <div className="mt-4 md:mt-0 md:ml-6">
                      <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center">
                        Apply Now
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Requirements</h4>
                      <ul className="space-y-2">
                        {job.requirements.map((requirement, reqIndex) => (
                          <li key={reqIndex} className="flex items-start text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                            {requirement}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Benefits</h4>
                      <ul className="space-y-2">
                        {job.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-start text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-white/10">
                    <p className="text-sm text-gray-400">
                      Posted on {new Date(job.posted).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Don't See Your Perfect Role?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              We're always looking for talented individuals. Send us your resume and let us know how you'd like to contribute.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                Send Your Resume
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                Contact HR
              </button>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </>
  );
};

export default CareersPage;