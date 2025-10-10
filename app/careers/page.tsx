'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Star, Users, Heart, Award, MapPin, Clock, Briefcase, CheckCircle, ArrowRight, GraduationCap, Zap } from 'lucide-react';

interface JobPosition {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  description: string;
  requirements: string[];
  benefits: string[];
  posted: string;
  featured: boolean;
}

const CareersPage: React.FC = () => {
  const openPositions: JobPosition[] = [
    {
      id: '1',
      title: 'Senior AI Engineer',
      department: 'AI Solutions',
      location: 'Remote',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Lead the development of cutting-edge AI solutions and machine learning models for enterprise clients.',
      requirements: [
        '5+ years experience in AI/ML development',
        'Expertise in Python, TensorFlow, PyTorch',
        'Experience with cloud platforms (AWS, Azure, GCP)',
        'Strong understanding of deep learning algorithms',
        'Previous experience in production AI systems'
      ],
      benefits: [
        'Competitive salary: $120,000 - $180,000',
        'Equity participation',
        'Flexible remote work',
        'Professional development budget'
      ],
      posted: '2 days ago',
      featured: true
    },
    {
      id: '2',
      title: 'Cloud Architect',
      department: 'Cloud Services',
      location: 'New York, NY',
      type: 'Full-time',
      experience: '7+ years',
      description: 'Design and implement scalable cloud infrastructure solutions for enterprise clients.',
      requirements: [
        '7+ years experience in cloud architecture',
        'Expertise in AWS, Azure, or GCP',
        'Experience with containerization (Docker, Kubernetes)',
        'Strong understanding of microservices architecture',
        'Certifications in cloud platforms preferred'
      ],
      benefits: [
        'Competitive salary: $140,000 - $200,000',
        'Health, dental, and vision insurance',
        '401(k) with company matching',
        'Flexible work arrangements'
      ],
      posted: '1 week ago',
      featured: true
    },
    {
      id: '3',
      title: 'Cybersecurity Specialist',
      department: 'Security',
      location: 'San Francisco, CA',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Protect our clients\' digital assets and infrastructure from cyber threats.',
      requirements: [
        '4+ years experience in cybersecurity',
        'Knowledge of security frameworks (NIST, ISO 27001)',
        'Experience with penetration testing',
        'Certifications (CISSP, CISM, CEH) preferred',
        'Strong analytical and problem-solving skills'
      ],
      benefits: [
        'Competitive salary: $100,000 - $150,000',
        'Professional development opportunities',
        'Health and wellness benefits',
        'Remote work options'
      ],
      posted: '3 days ago',
      featured: false
    },
    {
      id: '4',
      title: 'Full Stack Developer',
      department: 'Development',
      location: 'Remote',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Build and maintain web applications using modern technologies and best practices.',
      requirements: [
        '3+ years experience in full-stack development',
        'Proficiency in React, Node.js, and TypeScript',
        'Experience with databases (PostgreSQL, MongoDB)',
        'Knowledge of cloud platforms and DevOps practices',
        'Strong problem-solving and communication skills'
      ],
      benefits: [
        'Competitive salary: $80,000 - $120,000',
        'Flexible remote work',
        'Learning and development budget',
        'Health insurance and 401(k)'
      ],
      posted: '5 days ago',
      featured: false
    }
  ];

  const benefits = [
    {
      icon: <Star className="h-8 w-8 text-yellow-500" />,
      title: 'Competitive Compensation',
      description: 'We offer competitive salaries and equity participation to reward your contributions.'
    },
    {
      icon: <Users className="h-8 w-8 text-blue-500" />,
      title: 'Collaborative Culture',
      description: 'Work with talented professionals in a supportive and inclusive environment.'
    },
    {
      icon: <Heart className="h-8 w-8 text-red-500" />,
      title: 'Work-Life Balance',
      description: 'Flexible work arrangements and generous time off to maintain a healthy balance.'
    },
    {
      icon: <Award className="h-8 w-8 text-green-500" />,
      title: 'Professional Growth',
      description: 'Continuous learning opportunities and career development programs.'
    },
    {
      icon: <GraduationCap className="h-8 w-8 text-purple-500" />,
      title: 'Learning Budget',
      description: 'Annual budget for courses, conferences, and professional development.'
    },
    {
      icon: <Zap className="h-8 w-8 text-orange-500" />,
      title: 'Cutting-Edge Technology',
      description: 'Work with the latest technologies and innovative solutions.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Careers - Zion Tech Group</title>
        <meta name="description" content="Join our team of innovative professionals and help shape the future of technology. Explore career opportunities at Zion Tech Group." />
        <meta name="keywords" content="tech careers, AI jobs, cloud computing jobs, cybersecurity careers, software development jobs" />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Join Our Team
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                Help us build the future of technology. We're looking for passionate individuals who want to make a difference.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="#open-positions"
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
                >
                  View Open Positions
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="#culture"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                >
                  Learn About Our Culture
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Why Work With Us */}
        <div id="culture" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Work With Us?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We're not just a company - we're a community of innovators, creators, and problem-solvers.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
                  <div className="flex justify-center mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Open Positions */}
        <div id="open-positions" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Open Positions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover exciting career opportunities and find your perfect role with us.
              </p>
            </div>

            <div className="space-y-8">
              {openPositions.map((position) => (
                <div
                  key={position.id}
                  className={`bg-white rounded-lg shadow-sm p-8 hover:shadow-md transition-shadow ${
                    position.featured ? 'ring-2 ring-blue-500' : ''
                  }`}
                >
                  {position.featured && (
                    <div className="flex items-center mb-4">
                      <Star className="h-5 w-5 text-yellow-500 mr-2" />
                      <span className="text-sm font-medium text-yellow-600">Featured Position</span>
                    </div>
                  )}
                  
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {position.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4">
                        <div className="flex items-center">
                          <Briefcase className="h-4 w-4 mr-1" />
                          {position.department}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          {position.location}
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {position.type}
                        </div>
                        <div className="flex items-center">
                          <Award className="h-4 w-4 mr-1" />
                          {position.experience}
                        </div>
                      </div>
                      <p className="text-gray-700 mb-4">
                        {position.description}
                      </p>
                    </div>
                    <div className="mt-4 lg:mt-0 lg:ml-6">
                      <span className="text-sm text-gray-500">Posted {position.posted}</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Requirements</h4>
                      <ul className="space-y-2">
                        {position.requirements.map((requirement, index) => (
                          <li key={index} className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{requirement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Benefits</h4>
                      <ul className="space-y-2">
                        {position.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      to={`/careers/apply/${position.id}`}
                      className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center justify-center"
                    >
                      Apply Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                    <Link
                      to={`/careers/${position.id}`}
                      className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors inline-flex items-center justify-center"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {openPositions.length === 0 && (
              <div className="text-center py-12">
                <Briefcase className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No open positions at the moment</h3>
                <p className="text-gray-600 mb-6">
                  We're always looking for talented individuals. Check back soon or send us your resume.
                </p>
                <Link
                  to="/contact"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center"
                >
                  Contact Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-blue-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Don't See Your Perfect Role?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              We're always looking for exceptional talent. Send us your resume and let us know how you can contribute to our mission.
            </p>
            <Link
              to="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
            >
              Send Us Your Resume
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CareersPage;