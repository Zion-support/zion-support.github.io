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
        'Experience with Kubernetes and Docker',
        'Strong knowledge of microservices architecture',
        'Previous experience with enterprise migrations'
      ],
      benefits: [
        'Competitive salary: $140,000 - $200,000',
        'Comprehensive health benefits',
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
        'Certifications: CISSP, CISM, or equivalent',
        'Experience with security tools and frameworks',
        'Knowledge of compliance standards (SOC 2, ISO 27001)',
        'Strong analytical and problem-solving skills'
      ],
      benefits: [
        'Competitive salary: $100,000 - $150,000',
        'Health, dental, and vision insurance',
        'Professional development opportunities',
        'Work-life balance initiatives'
      ],
      posted: '3 days ago',
      featured: false
    },
    {
      id: '4',
      title: 'DevOps Engineer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Streamline our development and deployment processes with modern DevOps practices.',
      requirements: [
        '3+ years experience in DevOps',
        'Proficiency in CI/CD pipelines',
        'Experience with infrastructure as code',
        'Knowledge of monitoring and logging tools',
        'Strong scripting skills (Bash, Python)'
      ],
      benefits: [
        'Competitive salary: $90,000 - $130,000',
        'Remote work flexibility',
        'Learning and development budget',
        'Stock options'
      ],
      posted: '5 days ago',
      featured: false
    },
    {
      id: '5',
      title: 'Data Scientist',
      department: 'Data Analytics',
      location: 'Boston, MA',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Extract insights from complex datasets to drive business decisions.',
      requirements: [
        '3+ years experience in data science',
        'Proficiency in Python, R, and SQL',
        'Experience with machine learning frameworks',
        'Strong statistical analysis skills',
        'Previous experience with big data technologies'
      ],
      benefits: [
        'Competitive salary: $110,000 - $160,000',
        'Comprehensive benefits package',
        'Flexible work schedule',
        'Professional development opportunities'
      ],
      posted: '1 week ago',
      featured: false
    },
    {
      id: '6',
      title: 'Frontend Developer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      experience: '2+ years',
      description: 'Build beautiful and responsive user interfaces for our web applications.',
      requirements: [
        '2+ years experience in frontend development',
        'Proficiency in React, TypeScript, and CSS',
        'Experience with modern build tools',
        'Knowledge of responsive design principles',
        'Strong attention to detail and user experience'
      ],
      benefits: [
        'Competitive salary: $80,000 - $120,000',
        'Remote work options',
        'Health and wellness benefits',
        'Professional growth opportunities'
      ],
      posted: '4 days ago',
      featured: false
    }
  ];

  const companyValues = [
    {
      icon: <Users className="w-8 h-8 text-purple-400" />,
      title: 'Collaborative Culture',
      description: 'We believe in the power of teamwork and open communication.'
    },
    {
      icon: <Heart className="w-8 h-8 text-red-400" />,
      title: 'Work-Life Balance',
      description: 'We support our team members in maintaining a healthy work-life balance.'
    },
    {
      icon: <Award className="w-8 h-8 text-yellow-400" />,
      title: 'Excellence',
      description: 'We strive for excellence in everything we do and encourage continuous learning.'
    },
    {
      icon: <Zap className="w-8 h-8 text-cyan-400" />,
      title: 'Innovation',
      description: 'We embrace new technologies and innovative approaches to problem-solving.'
    }
  ];

  const benefits = [
    'Competitive salaries and equity participation',
    'Comprehensive health, dental, and vision insurance',
    '401(k) with company matching',
    'Flexible work arrangements and remote options',
    'Professional development and learning budget',
    'Generous paid time off and holidays',
    'Modern office spaces with cutting-edge technology',
    'Team building events and company retreats',
    'Mentorship programs and career growth opportunities',
    'Wellness programs and fitness stipends'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Careers - Zion Tech Group | Join Our Team</title>
        <meta name="description" content="Join Zion Tech Group and be part of a team that's shaping the future of technology. Explore our open positions and benefits." />
        <meta name="keywords" content="tech careers, AI jobs, cloud computing jobs, cybersecurity careers, remote work" />
      </Helmet>

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-cyan-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Join Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Team</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Be part of a team that's revolutionizing technology and creating solutions that matter. 
              We're looking for passionate individuals who want to make a difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300">
                View Open Positions
              </button>
              <button className="border border-purple-400 text-purple-400 px-8 py-3 rounded-lg font-semibold hover:bg-purple-400/10 transition-all duration-300">
                Learn About Our Culture
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Company Values */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Our Values</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            These core values guide everything we do and shape our company culture.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {companyValues.map((value, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">
                {value.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{value.title}</h3>
              <p className="text-gray-300">{value.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-slate-800/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Why Work With Us</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              We offer comprehensive benefits and a supportive work environment that helps you grow both personally and professionally.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-gray-300">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Open Positions */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Open Positions</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Discover exciting opportunities to join our team and make an impact in the tech industry.
          </p>
        </div>
        <div className="space-y-6">
          {openPositions.map((position) => (
            <div key={position.id} className={`bg-slate-800/50 backdrop-blur-sm border rounded-xl p-6 hover:border-purple-400/50 transition-all duration-300 ${
              position.featured ? 'border-purple-400/50' : 'border-slate-700'
            }`}>
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-xl font-semibold text-white">{position.title}</h3>
                    {position.featured && (
                      <span className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded-full text-sm">
                        Featured
                      </span>
                    )}
                  </div>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-3">
                    <div className="flex items-center gap-1">
                      <Briefcase className="w-4 h-4" />
                      <span>{position.department}</span>
                    </div>
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
                  <p className="text-gray-300 mb-4">{position.description}</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-2 mt-4 lg:mt-0">
                  <button className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300">
                    Apply Now
                  </button>
                  <button className="border border-slate-600 text-gray-300 px-6 py-2 rounded-lg font-semibold hover:bg-slate-700 transition-all duration-300">
                    View Details
                  </button>
                </div>
              </div>
              <div className="text-sm text-gray-400">
                Posted {position.posted}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-purple-600/20 to-cyan-600/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Don't See the Right Role?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals. Send us your resume and let us know how you can contribute to our team.
            </p>
            <button className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300">
              Send Your Resume
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareersPage;