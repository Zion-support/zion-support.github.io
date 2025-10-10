'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
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
      description: 'Design and implement cutting-edge AI solutions for enterprise clients. Lead development of machine learning models and AI-powered applications.',
      requirements: [
        'Master\'s degree in Computer Science or related field',
        '5+ years experience in AI/ML development',
        'Proficiency in Python, TensorFlow, PyTorch',
        'Experience with cloud platforms (AWS, Azure, GCP)',
        'Strong problem-solving and communication skills'
      ],
      benefits: [
        'Competitive salary and equity',
        'Comprehensive health insurance',
        'Flexible work arrangements',
        'Professional development budget',
        '401(k) with company matching'
      ],
      posted: '2024-01-15',
      featured: true
    },
    {
      id: '2',
      title: 'Cloud Solutions Architect',
      department: 'Cloud Infrastructure',
      location: 'San Francisco, CA',
      type: 'Full-time',
      experience: '7+ years',
      description: 'Design and implement scalable cloud solutions for enterprise clients. Lead cloud migration projects and optimize infrastructure performance.',
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        '7+ years experience in cloud architecture',
        'Certifications in AWS, Azure, or GCP',
        'Experience with DevOps and CI/CD',
        'Strong leadership and client management skills'
      ],
      benefits: [
        'Competitive salary and bonus',
        'Health, dental, and vision insurance',
        'Unlimited PTO',
        'Learning and development opportunities',
        'Stock options'
      ],
      posted: '2024-01-12',
      featured: true
    },
    {
      id: '3',
      title: 'Cybersecurity Specialist',
      department: 'Security',
      location: 'New York, NY',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Protect client systems and data from cyber threats. Conduct security assessments and implement security best practices.',
      requirements: [
        'Bachelor\'s degree in Cybersecurity or related field',
        '4+ years experience in cybersecurity',
        'Certifications (CISSP, CISM, CEH) preferred',
        'Experience with security tools and frameworks',
        'Strong analytical and problem-solving skills'
      ],
      benefits: [
        'Competitive salary',
        'Comprehensive benefits package',
        'Remote work options',
        'Security training and certifications',
        '401(k) with matching'
      ],
      posted: '2024-01-10',
      featured: false
    },
    {
      id: '4',
      title: 'Full Stack Developer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Develop end-to-end web applications using modern technologies. Work on diverse projects across different industries.',
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        '3+ years full-stack development experience',
        'Proficiency in React, Node.js, and databases',
        'Experience with cloud platforms',
        'Strong problem-solving skills'
      ],
      benefits: [
        'Competitive salary',
        'Health and dental insurance',
        'Flexible work schedule',
        'Professional development budget',
        '401(k) with company matching'
      ],
      posted: '2024-01-08',
      featured: false
    },
    {
      id: '5',
      title: 'DevOps Engineer',
      department: 'Engineering',
      location: 'Austin, TX',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Automate deployment processes and maintain infrastructure. Ensure system reliability and performance.',
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        '4+ years DevOps experience',
        'Experience with Docker, Kubernetes, and CI/CD',
        'Proficiency in scripting languages',
        'Strong troubleshooting skills'
      ],
      benefits: [
        'Competitive salary and equity',
        'Comprehensive health insurance',
        'Flexible work arrangements',
        'Learning and development opportunities',
        'Stock options'
      ],
      posted: '2024-01-05',
      featured: false
    },
    {
      id: '6',
      title: 'Data Scientist',
      department: 'AI Solutions',
      location: 'Remote',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Analyze complex data sets and develop predictive models. Extract insights to drive business decisions.',
      requirements: [
        'Master\'s degree in Data Science or related field',
        '4+ years data science experience',
        'Proficiency in Python, R, and SQL',
        'Experience with machine learning frameworks',
        'Strong statistical and analytical skills'
      ],
      benefits: [
        'Competitive salary',
        'Health, dental, and vision insurance',
        'Remote work options',
        'Professional development budget',
        '401(k) with matching'
      ],
      posted: '2024-01-03',
      featured: false
    }
  ];

  const companyValues = [
    {
      icon: <Star className="w-8 h-8 text-yellow-400" />,
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, delivering high-quality solutions that exceed expectations.'
    },
    {
      icon: <Users className="w-8 h-8 text-blue-400" />,
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and foster a collaborative environment where everyone can contribute.'
    },
    {
      icon: <Heart className="w-8 h-8 text-red-400" />,
      title: 'Passion',
      description: 'We are passionate about technology and its potential to transform businesses and improve lives.'
    },
    {
      icon: <Award className="w-8 h-8 text-purple-400" />,
      title: 'Innovation',
      description: 'We embrace innovation and encourage creative thinking to solve complex challenges.'
    }
  ];

  const benefits = [
    'Competitive salary and equity',
    'Comprehensive health insurance',
    'Flexible work arrangements',
    'Professional development budget',
    '401(k) with company matching',
    'Unlimited PTO',
    'Stock options',
    'Learning and development opportunities'
  ];

  const featuredPositions = openPositions.filter(position => position.featured);
  const regularPositions = openPositions.filter(position => !position.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Careers - Zion Tech Group | Join Our Team</title>
        <meta name="description" content="Join Zion Tech Group and be part of a team that's shaping the future of technology. Explore career opportunities in AI, cloud computing, cybersecurity, and more." />
        <meta name="keywords" content="tech careers, AI jobs, cloud computing jobs, cybersecurity careers, software engineering jobs" />
        <meta property="og:title" content="Careers - Zion Tech Group" />
        <meta property="og:description" content="Join our team and shape the future of technology" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/careers" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Join Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Team</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Be part of a team that's shaping the future of technology. Work on cutting-edge projects and make a real impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2">
                <Briefcase className="w-5 h-5" />
                View Open Positions
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors">
                Learn About Our Culture
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyValues.map((value, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Why Work With Us?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Positions */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Featured Positions</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredPositions.map((position) => (
              <div key={position.id} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-purple-400/50 transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{position.title}</h3>
                    <p className="text-purple-400 font-medium">{position.department}</p>
                  </div>
                  <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm font-semibold py-1 px-3 rounded-full">
                    Featured
                  </div>
                </div>
                
                <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span>{position.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{position.type}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <GraduationCap className="w-4 h-4" />
                    <span>{position.experience}</span>
                  </div>
                </div>

                <p className="text-gray-300 mb-6">{position.description}</p>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-3">Key Requirements:</h4>
                  <ul className="space-y-2">
                    {position.requirements.slice(0, 3).map((requirement, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{requirement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">Posted: {new Date(position.posted).toLocaleDateString()}</span>
                  <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center gap-2">
                    Apply Now
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Positions */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">All Open Positions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPositions.map((position) => (
              <div key={position.id} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-purple-400/50 transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-2">{position.title}</h3>
                <p className="text-purple-400 font-medium mb-3">{position.department}</p>
                
                <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span>{position.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{position.type}</span>
                  </div>
                </div>

                <p className="text-gray-300 mb-4 text-sm line-clamp-3">{position.description}</p>

                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-400">{position.experience}</span>
                  <button className="text-purple-400 hover:text-purple-300 font-medium flex items-center gap-1 text-sm">
                    View Details
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Don't See the Right Role?</h2>
            <p className="text-xl text-purple-100 mb-8">
              We're always looking for talented individuals. Send us your resume and let's start a conversation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2">
                <Zap className="w-5 h-5" />
                Submit Your Resume
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors">
                Learn About Our Culture
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;