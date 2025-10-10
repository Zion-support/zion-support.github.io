'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { MapPin, Clock, CheckCircle, Star, Users, Heart, Award, ArrowRight, Briefcase, GraduationCap, Zap } from 'lucide-react';

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
      description: 'Lead development of cutting-edge AI solutions and machine learning models for enterprise clients.',
      requirements: ['Python, TensorFlow, PyTorch', '5+ years ML experience', 'PhD in Computer Science or related field', 'Experience with cloud platforms'],
      benefits: ['Competitive salary: $120,000 - $180,000', 'Equity participation', 'Flexible remote work', 'Professional development budget'],
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
      requirements: ['AWS, Azure, GCP expertise', '7+ years cloud experience', 'Kubernetes, Docker', 'Infrastructure as Code'],
      benefits: ['Salary: $140,000 - $200,000', 'Health insurance', '401k matching', 'Flexible PTO'],
      posted: '1 week ago',
      featured: false
    },
    {
      id: '3',
      title: 'Cybersecurity Specialist',
      department: 'Security',
      location: 'San Francisco, CA',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Protect our clients from cyber threats and implement security best practices.',
      requirements: ['CISSP, CISM certifications', '4+ years security experience', 'Penetration testing', 'Security architecture'],
      benefits: ['Salary: $100,000 - $150,000', 'Stock options', 'Health benefits', 'Training budget'],
      posted: '3 days ago',
      featured: true
    }
  ];

  const benefits = [
    'Competitive salary and equity',
    'Comprehensive health insurance',
    'Flexible remote work options',
    'Professional development budget',
    '401k with company matching',
    'Unlimited PTO policy',
    'Stock options for all employees',
    'Learning and development opportunities'
  ];

  const values = [
    {
      title: 'Innovation',
      description: 'We push the boundaries of technology to solve complex problems.',
      icon: <Zap className="w-8 h-8 text-blue-500" />
    },
    {
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and diverse perspectives.',
      icon: <Users className="w-8 h-8 text-green-500" />
    },
    {
      title: 'Excellence',
      description: 'We strive for the highest quality in everything we do.',
      icon: <Award className="w-8 h-8 text-purple-500" />
    },
    {
      title: 'Growth',
      description: 'We invest in our people and their professional development.',
      icon: <GraduationCap className="w-8 h-8 text-orange-500" />
    }
  ];

  return (
    <>
      <Helmet>
        <title>Careers - Zion Tech Group | Join Our Team</title>
        <meta name="description" content="Join Zion Tech Group and be part of a team that's shaping the future of AI and IT solutions. Explore our open positions and benefits." />
        <meta name="keywords" content="careers, jobs, AI engineer, cloud architect, cybersecurity, Zion Tech Group" />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-blue-900 via-purple-900 to-blue-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center">
              <h1 className="text-5xl font-bold mb-6">
                Join Our Team
              </h1>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Be part of a team that's revolutionizing the future of AI and IT solutions. 
                We're looking for passionate individuals who want to make a difference.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-900 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors">
                  View Open Positions
                </button>
                <button className="border border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white hover:text-blue-900 transition-colors">
                  Learn About Our Culture
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Company Values */}
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
              <p className="text-xl text-gray-600">The principles that guide everything we do</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Open Positions */}
        <div className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Open Positions</h2>
              <p className="text-xl text-gray-600">Find your next career opportunity with us</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {openPositions.map((position) => (
                <div key={position.id} className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{position.title}</h3>
                      <div className="flex items-center text-sm text-gray-500 mb-2">
                        <Briefcase className="w-4 h-4 mr-2" />
                        <span>{position.department}</span>
                        <span className="mx-2">•</span>
                        <MapPin className="w-4 h-4 mr-1" />
                        <span>{position.location}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="w-4 h-4 mr-2" />
                        <span>{position.type}</span>
                        <span className="mx-2">•</span>
                        <span>{position.experience}</span>
                      </div>
                    </div>
                    {position.featured && (
                      <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                        Featured
                      </span>
                    )}
                  </div>
                  <p className="text-gray-600 mb-4">{position.description}</p>
                  <div className="mb-4">
                    <h4 className="font-medium text-gray-900 mb-2">Requirements:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {position.requirements.slice(0, 3).map((req, index) => (
                        <li key={index} className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Posted {position.posted}</span>
                    <button className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
                      Apply Now
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Work With Us?</h2>
              <p className="text-xl text-gray-600">We offer comprehensive benefits and a great work environment</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center p-4 bg-gray-50 rounded-lg">
                  <Heart className="w-6 h-6 text-red-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Join Our Team?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Don't see a position that matches your skills? We're always looking for talented individuals. 
              Send us your resume and let's start a conversation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors">
                Submit Your Resume
              </button>
              <button className="border border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white hover:text-blue-600 transition-colors">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CareersPage;
