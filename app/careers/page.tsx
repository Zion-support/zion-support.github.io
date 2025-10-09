'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, MapPin, Clock, Users, Award, Zap } from 'lucide-react';

const CareersPage: React.FC = () => {
  const openPositions = [
    {
      title: 'Senior AI Engineer',
      department: 'AI Research',
      location: 'Remote / Delaware',
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
      benefits: [
        'Competitive salary and equity',
        'Health, dental, and vision insurance',
        'Flexible work arrangements',
        'Professional development budget',
        '401(k) with company matching'
      ]
    },
    {
      title: 'Full-Stack Developer',
      department: 'Engineering',
      location: 'Remote / Delaware',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Build scalable web applications and APIs for our AI platform.',
      requirements: [
        'Bachelor\'s degree in Computer Science',
        '3+ years full-stack development experience',
        'Proficiency in React, Node.js, TypeScript',
        'Experience with databases (PostgreSQL, MongoDB)',
        'Knowledge of cloud services and DevOps'
      ],
      benefits: [
        'Competitive salary',
        'Comprehensive health benefits',
        'Remote work flexibility',
        'Learning and development opportunities',
        'Team building events'
      ]
    },
    {
      title: 'AI Product Manager',
      department: 'Product',
      location: 'Remote / Delaware',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Drive product strategy and roadmap for our AI solutions.',
      requirements: [
        'Bachelor\'s degree in Business or Technical field',
        '4+ years product management experience',
        'Experience with AI/ML products',
        'Strong analytical and communication skills',
        'MBA preferred'
      ],
      benefits: [
        'Competitive salary and bonus',
        'Health and wellness benefits',
        'Flexible PTO policy',
        'Professional development opportunities',
        'Stock options'
      ]
    },
    {
      title: 'DevOps Engineer',
      department: 'Infrastructure',
      location: 'Remote / Delaware',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Manage cloud infrastructure and deployment pipelines.',
      requirements: [
        '3+ years DevOps experience',
        'Expertise in AWS, Docker, Kubernetes',
        'Experience with CI/CD pipelines',
        'Knowledge of monitoring and logging tools',
        'Scripting skills (Python, Bash)'
      ],
      benefits: [
        'Competitive salary',
        'Health insurance',
        'Remote work options',
        'Certification reimbursement',
        'Performance bonuses'
      ]
    }
  ];

  const companyValues = [
    {
      icon: '🚀',
      title: 'Innovation',
      description: 'We push the boundaries of what\'s possible with AI and technology.'
    },
    {
      icon: '🤝',
      title: 'Collaboration',
      description: 'We believe in the power of diverse teams working together.'
    },
    {
      icon: '📈',
      title: 'Growth',
      description: 'We invest in our people\'s professional and personal development.'
    },
    {
      icon: '⚡',
      title: 'Impact',
      description: 'We create solutions that make a real difference in the world.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Join Our Team
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
              Build the future of AI and technology with us
            </p>
            <p className="text-lg mb-8 text-gray-300 max-w-4xl mx-auto">
              We're looking for passionate individuals who want to make a real impact 
              in the world of artificial intelligence and enterprise technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="#open-positions"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                View Open Positions
              </Link>
              <Link 
                to="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600">
              What drives us every day
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyValues.map((value, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Work With Us?
            </h2>
            <p className="text-xl text-gray-600">
              We offer more than just a job - we offer a career and a community
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-4">
                <Award className="w-8 h-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Competitive Benefits</h3>
              </div>
              <p className="text-gray-600">
                Health insurance, 401(k) matching, flexible PTO, and professional development opportunities.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-4">
                <Users className="w-8 h-8 text-green-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Great Culture</h3>
              </div>
              <p className="text-gray-600">
                Collaborative environment with smart, passionate people who love what they do.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-4">
                <Zap className="w-8 h-8 text-purple-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Cutting-Edge Work</h3>
              </div>
              <p className="text-gray-600">
                Work on the latest AI technologies and solve complex, real-world problems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="open-positions" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Open Positions
            </h2>
            <p className="text-xl text-gray-600">
              Find your next opportunity with us
            </p>
          </div>
          <div className="space-y-8">
            {openPositions.map((position, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{position.title}</h3>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {position.location}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {position.type}
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        {position.experience}
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 lg:mt-0">
                    <Link 
                      to="/contact"
                      className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center"
                    >
                      Apply Now
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6">{position.description}</p>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Requirements:</h4>
                    <ul className="space-y-2">
                      {position.requirements.map((req, reqIndex) => (
                        <li key={reqIndex} className="flex items-start">
                          <span className="text-blue-600 mr-2">•</span>
                          <span className="text-gray-600 text-sm">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Benefits:</h4>
                    <ul className="space-y-2">
                      {position.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-start">
                          <span className="text-green-600 mr-2">•</span>
                          <span className="text-gray-600 text-sm">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Don't See the Right Role?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            We're always looking for talented individuals. Send us your resume and let's talk!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
            >
              Send Your Resume
            </Link>
            <Link 
              to="/about"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
            >
              Learn About Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;
