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
        'Comprehensive health insurance',
        'Flexible work arrangements',
        'Professional development budget',
        'Unlimited PTO'
      ],
      salary: '$120,000 - $180,000',
      posted: '2024-01-15'
    },
    {
      id: '2',
      title: 'Cybersecurity Specialist',
      department: 'Security',
      location: 'San Francisco, CA',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Protect our clients\' digital assets and infrastructure from cyber threats.',
      requirements: [
        '3+ years in cybersecurity',
        'Certifications: CISSP, CISM, or equivalent',
        'Experience with security tools and frameworks',
        'Knowledge of compliance standards',
        'Strong analytical and problem-solving skills'
      ],
      benefits: [
        'Competitive salary and equity',
        'Comprehensive health insurance',
        'Flexible work arrangements',
        'Professional development budget',
        'Unlimited PTO'
      ],
      salary: '$90,000 - $140,000',
      posted: '2024-01-12'
    },
    {
      id: '3',
      title: 'Cloud Solutions Architect',
      department: 'Cloud Services',
      location: 'Remote',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Design and implement scalable cloud solutions for enterprise clients.',
      requirements: [
        '4+ years cloud architecture experience',
        'Expertise in AWS, Azure, or GCP',
        'Experience with containerization (Docker, Kubernetes)',
        'Strong communication skills',
        'Previous client-facing experience'
      ],
      benefits: [
        'Competitive salary and equity',
        'Comprehensive health insurance',
        'Flexible work arrangements',
        'Professional development budget',
        'Unlimited PTO'
      ],
      salary: '$110,000 - $160,000',
      posted: '2024-01-10'
    },
    {
      id: '4',
      title: 'DevOps Engineer',
      department: 'Engineering',
      location: 'New York, NY',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Streamline our development and deployment processes with automation and best practices.',
      requirements: [
        '3+ years DevOps experience',
        'Proficiency in CI/CD pipelines',
        'Experience with infrastructure as code',
        'Knowledge of monitoring and logging tools',
        'Scripting skills (Python, Bash, etc.)'
      ],
      benefits: [
        'Competitive salary and equity',
        'Comprehensive health insurance',
        'Flexible work arrangements',
        'Professional development budget',
        'Unlimited PTO'
      ],
      salary: '$95,000 - $145,000',
      posted: '2024-01-08'
    },
    {
      id: '5',
      title: 'Data Scientist',
      department: 'Data Analytics',
      location: 'Remote',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Extract insights from complex data to drive business decisions and product development.',
      requirements: [
        '4+ years data science experience',
        'Expertise in Python, R, SQL',
        'Experience with machine learning libraries',
        'Strong statistical knowledge',
        'Previous experience with big data tools'
      ],
      benefits: [
        'Competitive salary and equity',
        'Comprehensive health insurance',
        'Flexible work arrangements',
        'Professional development budget',
        'Unlimited PTO'
      ],
      salary: '$100,000 - $150,000',
      posted: '2024-01-05'
    },
    {
      id: '6',
      title: 'Frontend Developer',
      department: 'Engineering',
      location: 'Austin, TX',
      type: 'Full-time',
      experience: '2+ years',
      description: 'Build beautiful and responsive user interfaces for our web applications.',
      requirements: [
        '2+ years frontend development experience',
        'Proficiency in React, TypeScript, CSS',
        'Experience with modern build tools',
        'Understanding of UX/UI principles',
        'Previous experience with responsive design'
      ],
      benefits: [
        'Competitive salary and equity',
        'Comprehensive health insurance',
        'Flexible work arrangements',
        'Professional development budget',
        'Unlimited PTO'
      ],
      salary: '$75,000 - $120,000',
      posted: '2024-01-03'
    }
  ];

  const companyValues = [
    {
      icon: <Star className="w-8 h-8 text-yellow-500" />,
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, delivering exceptional results for our clients.'
    },
    {
      icon: <Users className="w-8 h-8 text-blue-500" />,
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and collaboration to achieve great things together.'
    },
    {
      icon: <Heart className="w-8 h-8 text-red-500" />,
      title: 'Passion',
      description: 'We are passionate about technology and its potential to transform businesses and lives.'
    },
    {
      icon: <Award className="w-8 h-8 text-purple-500" />,
      title: 'Innovation',
      description: 'We embrace innovation and continuously push the boundaries of what\'s possible.'
    }
  ];

  const perks = [
    {
      icon: <Zap className="w-6 h-6 text-blue-600" />,
      title: 'Flexible Work',
      description: 'Work from anywhere with flexible hours'
    },
    {
      icon: <GraduationCap className="w-6 h-6 text-green-600" />,
      title: 'Learning Budget',
      description: '$2,000 annual learning and development budget'
    },
    {
      icon: <Heart className="w-6 h-6 text-red-600" />,
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance and wellness programs'
    },
    {
      icon: <Award className="w-6 h-6 text-purple-600" />,
      title: 'Career Growth',
      description: 'Clear career paths and promotion opportunities'
    },
    {
      icon: <Users className="w-6 h-6 text-orange-600" />,
      title: 'Team Events',
      description: 'Regular team building and social events'
    },
    {
      icon: <Star className="w-6 h-6 text-yellow-600" />,
      title: 'Equity',
      description: 'Stock options for all employees'
    }
  ];

    return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Careers - Zion Tech Group</title>
        <meta name="description" content="Join our team of innovative technologists and help shape the future of AI, cybersecurity, and cloud computing." />
        <meta name="keywords" content="tech careers, AI jobs, cybersecurity jobs, cloud computing jobs, remote work" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Join Our Team
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Build the future of technology with us. We're looking for passionate individuals who want to make a difference.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Remote & On-site
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                Flexible Hours
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4" />
                Competitive Benefits
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {companyValues.map((value, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Perks & Benefits */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Perks & Benefits</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {perks.map((perk, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center gap-4">
                    {perk.icon}
                    <div>
                      <h3 className="font-semibold text-gray-900">{perk.title}</h3>
                      <p className="text-gray-600 text-sm">{perk.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Open Positions</h2>
            <div className="space-y-6">
              {openPositions.map((position) => (
                <div key={position.id} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{position.title}</h3>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-3">
                        <span className="flex items-center gap-1">
                          <Briefcase className="w-4 h-4" />
                          {position.department}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {position.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {position.type}
                        </span>
                        <span className="text-green-600 font-medium">{position.salary}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <span>Posted {new Date(position.posted).toLocaleDateString()}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{position.description}</p>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Requirements</h4>
                      <ul className="space-y-1">
                        {position.requirements.slice(0, 3).map((req, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                            {req}
                          </li>
                        ))}
                        {position.requirements.length > 3 && (
                          <li className="text-sm text-gray-500">
                            +{position.requirements.length - 3} more requirements
                          </li>
                        )}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Benefits</h4>
                      <ul className="space-y-1">
                        {position.benefits.slice(0, 3).map((benefit, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                        {position.benefits.length > 3 && (
                          <li className="text-sm text-gray-500">
                            +{position.benefits.length - 3} more benefits
                          </li>
                        )}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500">
                      <span className="font-medium">{position.experience}</span> experience required
                    </div>
                    <Link
                      to={`/careers/${position.id}`}
                      className="flex items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Apply Now
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Don't See Your Dream Job?</h2>
            <p className="text-xl mb-8 text-blue-100">
              We're always looking for talented individuals. Send us your resume and let's start a conversation.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get in Touch
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;
