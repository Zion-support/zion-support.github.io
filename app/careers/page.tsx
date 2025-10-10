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
  salary: string;
  posted: string;
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
        'Competitive salary and equity',
        'Health, dental, and vision insurance',
        'Flexible work arrangements',
        'Professional development budget',
        'Unlimited PTO'
      ],
      salary: '$120,000 - $180,000',
      posted: '2024-01-15'
    },
    {
      id: '2',
      title: 'Cloud Solutions Architect',
      department: 'Cloud Services',
      location: 'San Francisco, CA',
      type: 'Full-time',
      experience: '7+ years',
      description: 'Design and implement scalable cloud architectures for enterprise clients across multiple cloud providers.',
      requirements: [
        '7+ years in cloud architecture',
        'Expertise in AWS, Azure, and GCP',
        'Experience with containerization (Docker, Kubernetes)',
        'Strong knowledge of infrastructure as code',
        'Previous consulting experience preferred'
      ],
      benefits: [
        'Competitive salary and equity',
        'Health, dental, and vision insurance',
        'Flexible work arrangements',
        'Professional development budget',
        'Unlimited PTO'
      ],
      salary: '$140,000 - $200,000',
      posted: '2024-01-12'
    },
    {
      id: '3',
      title: 'Cybersecurity Specialist',
      department: 'Security',
      location: 'New York, NY',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Protect our clients\' digital assets through comprehensive security assessments and implementations.',
      requirements: [
        '4+ years in cybersecurity',
        'Certifications: CISSP, CISM, or equivalent',
        'Experience with security frameworks (NIST, ISO 27001)',
        'Knowledge of penetration testing tools',
        'Strong communication skills'
      ],
      benefits: [
        'Competitive salary and equity',
        'Health, dental, and vision insurance',
        'Flexible work arrangements',
        'Professional development budget',
        'Unlimited PTO'
      ],
      salary: '$100,000 - $150,000',
      posted: '2024-01-10'
    }
  ];

  const companyValues = [
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: 'Collaborative Culture',
      description: 'We believe in the power of teamwork and open communication.'
    },
    {
      icon: <Heart className="h-8 w-8 text-red-600" />,
      title: 'Work-Life Balance',
      description: 'Flexible schedules and remote work options to support your lifestyle.'
    },
    {
      icon: <Award className="h-8 w-8 text-yellow-600" />,
      title: 'Growth Opportunities',
      description: 'Continuous learning and career advancement opportunities.'
    },
    {
      icon: <Zap className="h-8 w-8 text-purple-600" />,
      title: 'Innovation Focus',
      description: 'Work on cutting-edge technologies and groundbreaking projects.'
    }
  ];

  const perks = [
    'Competitive salary and equity packages',
    'Comprehensive health, dental, and vision insurance',
    'Flexible work arrangements and remote options',
    'Professional development and conference budget',
    'Unlimited paid time off',
    'Top-tier equipment and home office setup',
    'Wellness programs and gym memberships',
    'Team building events and company retreats',
    '401(k) with company matching',
    'Stock options and performance bonuses'
  ];

  return (
    <>
      <Helmet>
        <title>Careers - Join Our Team | Zion Tech Group</title>
        <meta name="description" content="Join Zion Tech Group and be part of a team that's shaping the future of AI and technology. Explore open positions and discover why we're a great place to work." />
        <meta name="keywords" content="tech careers, AI jobs, software engineering, cloud computing, cybersecurity jobs" />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center">
              <h1 className="text-5xl font-bold mb-6">
                Join Our Team
              </h1>
              <p className="text-xl mb-8 max-w-3xl mx-auto">
                Be part of a team that's revolutionizing the future of AI and technology. 
                We're looking for passionate individuals who want to make a real impact.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  View Open Positions
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
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
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Work With Us?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We're not just building technology – we're building the future. 
                Join a team that values innovation, collaboration, and personal growth.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {companyValues.map((value, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Perks & Benefits */}
        <div className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Perks & Benefits</h2>
              <p className="text-xl text-gray-600">
                We offer comprehensive benefits to support your personal and professional growth.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {perks.map((perk, index) => (
                <div key={index} className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{perk}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Open Positions */}
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Open Positions</h2>
              <p className="text-xl text-gray-600">
                Discover exciting opportunities to join our growing team.
              </p>
            </div>
            <div className="space-y-6">
              {openPositions.map((position) => (
                <div key={position.id} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{position.title}</h3>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                          <Briefcase className="h-4 w-4" />
                          {position.department}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {position.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {position.type}
                        </div>
                        <div className="flex items-center gap-1">
                          <GraduationCap className="h-4 w-4" />
                          {position.experience}
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 lg:mt-0 text-right">
                      <div className="text-lg font-semibold text-gray-900">{position.salary}</div>
                      <div className="text-sm text-gray-500">Posted {new Date(position.posted).toLocaleDateString()}</div>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{position.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                      {position.department}
                    </span>
                    <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
                      {position.type}
                    </span>
                    <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm font-medium rounded-full">
                      {position.experience}
                    </span>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button className="flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                      Apply Now
                      <ArrowRight className="h-4 w-4" />
                    </button>
                    <button className="flex items-center justify-center gap-2 border border-gray-300 text-gray-700 px-6 py-2 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-16 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Don't See the Right Role?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals. Send us your resume and let us know how you'd like to contribute.
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Send Us Your Resume
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CareersPage;