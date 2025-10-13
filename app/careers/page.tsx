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
        'Expertise in AWS, Azure, and GCP',
        'Certifications in cloud platforms',
        'Experience with containerization and orchestration',
        'Strong understanding of security best practices'
      ],
      benefits: [
        'Competitive salary: $140,000 - $200,000',
        'Equity participation',
        'Health and dental insurance',
        'Professional development opportunities'
      ],
      posted: '1 week ago',
      featured: false
    },
    {
      id: '3',
      title: 'Quantum Computing Researcher',
      department: 'Research & Development',
      location: 'San Francisco, CA',
      type: 'Full-time',
      experience: 'PhD + 3 years',
      description: 'Conduct cutting-edge research in quantum computing algorithms and applications.',
      requirements: [
        'PhD in Physics, Computer Science, or related field',
        '3+ years experience in quantum computing research',
        'Publications in top-tier journals',
        'Experience with quantum programming languages',
        'Strong mathematical background'
      ],
      benefits: [
        'Competitive salary: $150,000 - $220,000',
        'Research budget and resources',
        'Conference attendance opportunities',
        'Collaboration with leading researchers'
      ],
      posted: '3 days ago',
      featured: true
    }
  ];

  const benefits = [
    'Competitive salary and equity',
    'Comprehensive health insurance',
    'Flexible work arrangements',
    'Professional development budget',
    'Top-tier equipment and tools',
    'Unlimited vacation policy',
    'Mental health support',
    'Learning and development opportunities'
  ];

  const values = [
    {
      icon: Heart,
      title: 'Work-Life Balance',
      description: 'We believe in sustainable work practices that support both personal and professional growth.'
    },
    {
      icon: Users,
      title: 'Collaborative Culture',
      description: 'Join a team of passionate individuals who value collaboration and knowledge sharing.'
    },
    {
      icon: Award,
      title: 'Recognition & Growth',
      description: 'Your contributions are recognized and rewarded with opportunities for advancement.'
    },
    {
      icon: Zap,
      title: 'Innovation Focus',
      description: 'Work on cutting-edge projects that push the boundaries of technology.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Careers - Join Our Team | Zion Tech Group</title>
        <meta name="description" content="Join Zion Tech Group and work on cutting-edge AI, quantum computing, and cloud solutions. Explore open positions and career opportunities." />
        <meta name="keywords" content="careers, jobs, AI engineer, cloud architect, quantum computing, tech jobs, remote work" />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Join Our Mission
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                Build the future of technology with a team that values innovation, collaboration, and excellence
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="#open-positions"
                  className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  View Open Positions
                </Link>
                <Link
                  to="#culture"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors"
                >
                  Learn About Our Culture
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Company Values */}
        <section id="culture" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
                Why Work With Us
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {values.map((value, index) => (
                  <div key={index} className="text-center">
                    <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <value.icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">
                      {value.title}
                    </h3>
                    <p className="text-gray-600">
                      {value.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
                Benefits & Perks
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section id="open-positions" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
                Open Positions
              </h2>
              <div className="space-y-8">
                {openPositions.map((position) => (
                  <div
                    key={position.id}
                    className={`bg-white rounded-lg shadow-lg p-8 border-l-4 ${
                      position.featured ? 'border-purple-500' : 'border-blue-500'
                    } hover:shadow-xl transition-shadow`}
                  >
                    {position.featured && (
                      <div className="flex items-center gap-2 mb-4">
                        <Star className="w-5 h-5 text-purple-500 fill-current" />
                        <span className="text-purple-600 text-sm font-semibold">Featured Position</span>
                      </div>
                    )}

                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                          {position.title}
                        </h3>
                        <p className="text-blue-600 font-medium mb-2">{position.department}</p>
                        <p className="text-gray-600 mb-4">{position.description}</p>
                      </div>
                      <div className="flex flex-col sm:flex-row gap-4 lg:ml-8">
                        <span className="px-4 py-2 bg-blue-100 text-blue-800 text-sm rounded-full text-center">
                          {position.type}
                        </span>
                        <span className="px-4 py-2 bg-gray-100 text-gray-800 text-sm rounded-full text-center">
                          {position.experience}
                        </span>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Requirements</h4>
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
                        <h4 className="font-semibold text-gray-900 mb-3">Benefits</h4>
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

                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pt-6 border-t border-gray-200">
                      <div className="flex items-center gap-4 text-sm text-gray-500 mb-4 sm:mb-0">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{position.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>Posted {position.posted}</span>
                        </div>
                      </div>
                      <Link
                        to={`/careers/apply/${position.id}`}
                        className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center"
                      >
                        Apply Now
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-900 to-purple-900 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">
                Don't See Your Dream Job?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                We're always looking for talented individuals. Send us your resume and let us know how you can contribute to our mission.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Send Your Resume
                </Link>
                <Link
                  to="/about"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors"
                >
                  Learn More About Us
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CareersPage;