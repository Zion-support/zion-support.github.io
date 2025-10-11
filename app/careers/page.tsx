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
        'Previous experience in enterprise cloud migrations'
      ],
      benefits: [
        'Competitive salary: $140,000 - $200,000',
        'Comprehensive health benefits',
        '401k with company matching',
        'Flexible work arrangements'
      ],
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
      description: 'Protect our clients\' digital assets and infrastructure from cyber threats.',
      requirements: [
        '4+ years experience in cybersecurity',
        'Certifications: CISSP, CISM, or equivalent',
        'Experience with security tools and frameworks',
        'Knowledge of compliance standards (SOC 2, ISO 27001)',
        'Strong analytical and problem-solving skills'
      ],
      benefits: [
        'Competitive salary: $100,000 - $150,000',
        'Professional development opportunities',
        'Health and dental insurance',
        'Remote work options'
      ],
      posted: '3 days ago',
      featured: true
    }
  ];

  const benefits = [
    {
      icon: <Star className="w-8 h-8 text-yellow-500" />,
      title: 'Competitive Compensation',
      description: 'We offer competitive salaries and equity participation to reward your contributions.'
    },
    {
      icon: <Users className="w-8 h-8 text-blue-500" />,
      title: 'Collaborative Culture',
      description: 'Work with talented professionals in a supportive and inclusive environment.'
    },
    {
      icon: <Heart className="w-8 h-8 text-red-500" />,
      title: 'Work-Life Balance',
      description: 'Flexible schedules and remote work options to support your personal life.'
    },
    {
      icon: <Award className="w-8 h-8 text-green-500" />,
      title: 'Growth Opportunities',
      description: 'Continuous learning and career development through training and mentorship.'
    }
  ];

  const stats = [
    { number: '150+', label: 'Team Members' },
    { number: '25+', label: 'Countries' },
    { number: '98%', label: 'Employee Satisfaction' },
    { number: '50+', label: 'Open Positions' }
  ];

  return (
    <>
      <Helmet>
        <title>Careers - Join Our Team | Zion Tech Group</title>
        <meta name="description" content="Join Zion Tech Group and be part of a team that's shaping the future of technology. Explore career opportunities in AI, cloud computing, and cybersecurity." />
        <meta name="keywords" content="careers, jobs, technology careers, AI jobs, cloud computing jobs, cybersecurity jobs" />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Join Our Team
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                Build the future of technology with us. We're looking for passionate individuals who want to make a difference.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  to="#positions"
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
                >
                  View Open Positions
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  to="/contact"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Work With Us */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
                Why Work With Us?
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="text-center">
                    <div className="flex justify-center mb-4">
                      {benefit.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
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
        </section>

        {/* Open Positions */}
        <section id="positions" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
                Open Positions
              </h2>
              <div className="space-y-8">
                {openPositions.map((position) => (
                  <div key={position.id} className={`bg-white rounded-lg shadow-lg p-8 border-l-4 ${position.featured ? 'border-blue-500' : 'border-gray-300'}`}>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                          {position.title}
                        </h3>
                        <div className="flex flex-wrap items-center gap-4 text-gray-600">
                          <div className="flex items-center">
                            <Briefcase className="w-4 h-4 mr-2" />
                            <span>{position.department}</span>
                          </div>
                          <div className="flex items-center">
                            <MapPin className="w-4 h-4 mr-2" />
                            <span>{position.location}</span>
                          </div>
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-2" />
                            <span>{position.type}</span>
                          </div>
                          <div className="flex items-center">
                            <GraduationCap className="w-4 h-4 mr-2" />
                            <span>{position.experience}</span>
                          </div>
                        </div>
                      </div>
                      <div className="mt-4 md:mt-0">
                        <span className="text-sm text-gray-500">Posted {position.posted}</span>
                        {position.featured && (
                          <span className="ml-2 bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                            Featured
                          </span>
                        )}
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-6">
                      {position.description}
                    </p>

                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Requirements:</h4>
                        <ul className="space-y-2">
                          {position.requirements.map((req, index) => (
                            <li key={index} className="flex items-start">
                              <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                              <span className="text-gray-600 text-sm">{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Benefits:</h4>
                        <ul className="space-y-2">
                          {position.benefits.map((benefit, index) => (
                            <li key={index} className="flex items-start">
                              <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                              <span className="text-gray-600 text-sm">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <Link
                        to={`/careers/${position.id}`}
                        className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center justify-center"
                      >
                        Apply Now
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                      <Link
                        to={`/careers/${position.id}`}
                        className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-center"
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Don't See Your Perfect Role?
              </h2>
              <p className="text-xl mb-8 text-blue-100">
                We're always looking for talented individuals. Send us your resume and let's start a conversation.
              </p>
              <Link
                to="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
              >
                Contact Us
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CareersPage;