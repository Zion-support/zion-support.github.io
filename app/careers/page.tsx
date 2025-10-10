'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Star, Users, Heart, Award, MapPin, Clock, Briefcase, CheckCircle, ArrowRight, GraduationCap, Zap } from 'lucide-react';

const CareersPage: React.FC = () => {
  const openPositions = [
    {
      id: '1',
      title: 'Senior AI Engineer',
      department: 'Engineering',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Lead the development of cutting-edge AI solutions and machine learning models.',
      requirements: [
        'Master\'s degree in Computer Science or related field',
        '5+ years experience in AI/ML development',
        'Proficiency in Python, TensorFlow, PyTorch',
        'Experience with cloud platforms (AWS, Azure, GCP)',
        'Strong problem-solving and communication skills'
      ],
      benefits: ['Competitive salary', 'Health insurance', '401k matching', 'Flexible work hours', 'Professional development']
    },
    {
      id: '2',
      title: 'Cloud Solutions Architect',
      department: 'Infrastructure',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '7+ years',
      description: 'Design and implement scalable cloud infrastructure solutions for enterprise clients.',
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        '7+ years experience in cloud architecture',
        'Certifications in AWS, Azure, or GCP',
        'Experience with containerization and orchestration',
        'Strong understanding of security best practices'
      ],
      benefits: ['Competitive salary', 'Health insurance', '401k matching', 'Flexible work hours', 'Professional development']
    },
    {
      id: '3',
      title: 'Cybersecurity Specialist',
      department: 'Security',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Protect our clients\' digital assets with advanced security solutions and threat detection.',
      requirements: [
        'Bachelor\'s degree in Cybersecurity or related field',
        '4+ years experience in cybersecurity',
        'Certifications in CISSP, CISM, or similar',
        'Experience with SIEM tools and incident response',
        'Knowledge of compliance frameworks (SOC2, ISO27001)'
      ],
      benefits: ['Competitive salary', 'Health insurance', '401k matching', 'Flexible work hours', 'Professional development']
    },
    {
      id: '4',
      title: 'Data Scientist',
      department: 'Analytics',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Extract insights from complex data sets to drive business decisions and AI model development.',
      requirements: [
        'Master\'s degree in Data Science, Statistics, or related field',
        '3+ years experience in data science',
        'Proficiency in Python, R, SQL',
        'Experience with machine learning libraries',
        'Strong statistical and analytical skills'
      ],
      benefits: ['Competitive salary', 'Health insurance', '401k matching', 'Flexible work hours', 'Professional development']
    }
  ];

  const benefits = [
    {
      icon: Star,
      title: 'Competitive Compensation',
      description: 'We offer competitive salaries and performance-based bonuses'
    },
    {
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance and wellness programs'
    },
    {
      icon: GraduationCap,
      title: 'Professional Development',
      description: 'Continuous learning opportunities and skill development'
    },
    {
      icon: Users,
      title: 'Collaborative Culture',
      description: 'Work with talented professionals in a supportive environment'
    },
    {
      icon: Zap,
      title: 'Cutting-Edge Technology',
      description: 'Work with the latest AI and technology tools'
    },
    {
      icon: Award,
      title: 'Career Growth',
      description: 'Clear career paths and advancement opportunities'
    }
  ];

  const values = [
    {
      title: 'Innovation',
      description: 'We encourage creative thinking and embrace new ideas'
    },
    {
      title: 'Excellence',
      description: 'We strive for the highest quality in everything we do'
    },
    {
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and mutual support'
    },
    {
      title: 'Integrity',
      description: 'We maintain the highest ethical standards in all our work'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Careers - Zion Tech Group</title>
        <meta name="description" content="Join our team of AI and IT experts. Explore career opportunities at Zion Tech Group and help us shape the future of technology." />
        <meta name="keywords" content="careers, jobs, employment, AI engineer, cloud architect, cybersecurity, data scientist, technology careers" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Join Our Team
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Be part of a team that's shaping the future of AI and IT solutions. Join us in transforming businesses worldwide.
            </p>
          </section>

          {/* Why Work With Us */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center text-white mb-12">Why Work With Us?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-6 text-center">
                  <benefit.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Our Values */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center text-white mb-12">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <div key={index} className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Open Positions */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center text-white mb-12">Open Positions</h2>
            <div className="space-y-6">
              {openPositions.map((position) => (
                <div key={position.id} className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-8 hover:border-cyan-400 transition-all duration-300">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-semibold text-white mb-2">{position.title}</h3>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-4">
                        <span className="flex items-center space-x-1">
                          <Briefcase className="w-4 h-4" />
                          <span>{position.department}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <MapPin className="w-4 h-4" />
                          <span>{position.location}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{position.type}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <Award className="w-4 h-4" />
                          <span>{position.experience}</span>
                        </span>
                      </div>
                    </div>
                    <Link
                      to={`/careers/${position.id}`}
                      className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center space-x-2"
                    >
                      <span>Apply Now</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                  
                  <p className="text-gray-300 mb-6">{position.description}</p>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Requirements:</h4>
                      <ul className="space-y-2">
                        {position.requirements.map((requirement, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-gray-300">{requirement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Benefits:</h4>
                      <ul className="space-y-2">
                        {position.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-gray-300">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Application Process */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center text-white mb-12">Application Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-cyan-400">1</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Apply</h3>
                <p className="text-gray-300 text-sm">Submit your application and resume</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-purple-400">2</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Review</h3>
                <p className="text-gray-300 text-sm">Our team reviews your application</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-pink-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-pink-400">3</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Interview</h3>
                <p className="text-gray-300 text-sm">Technical and cultural fit interviews</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-400">4</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Offer</h3>
                <p className="text-gray-300 text-sm">Receive your offer and join our team</p>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Join Us?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Don't see a position that matches your skills? We're always looking for talented individuals to join our team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Send Us Your Resume
              </Link>
              <a
                href="mailto:careers@ziontechgroup.com"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300"
              >
                Email Us
              </a>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default CareersPage;