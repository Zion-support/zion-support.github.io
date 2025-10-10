'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Star, Users, Heart, Award, MapPin, Clock, Briefcase, CheckCircle, ArrowRight, Zap } from 'lucide-react';

const CareersPage: React.FC = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('all');

  const jobOpenings = [
    {
      id: 1,
      title: 'Senior AI Engineer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Lead the development of cutting-edge AI solutions and machine learning models.',
      requirements: [
        'Master\'s degree in Computer Science or related field',
        '5+ years of experience in AI/ML',
        'Proficiency in Python, TensorFlow, PyTorch',
        'Experience with cloud platforms (AWS, Azure, GCP)',
        'Strong problem-solving and communication skills'
      ],
      benefits: [
        'Competitive salary and equity',
        'Health, dental, and vision insurance',
        'Flexible work arrangements',
        'Professional development budget',
        'Unlimited PTO'
      ],
      posted: '2024-01-15',
      featured: true
    },
    {
      id: 2,
      title: 'Cloud Solutions Architect',
      department: 'Engineering',
      location: 'San Francisco, CA',
      type: 'Full-time',
      experience: '7+ years',
      description: 'Design and implement scalable cloud infrastructure solutions for enterprise clients.',
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        '7+ years of cloud architecture experience',
        'Expertise in AWS, Azure, and GCP',
        'Experience with containerization (Docker, Kubernetes)',
        'Strong understanding of microservices architecture'
      ],
      benefits: [
        'Competitive salary and equity',
        'Health, dental, and vision insurance',
        'Flexible work arrangements',
        'Professional development budget',
        'Unlimited PTO'
      ],
      posted: '2024-01-10',
      featured: false
    },
    {
      id: 3,
      title: 'Cybersecurity Specialist',
      department: 'Security',
      location: 'Remote',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Protect our clients\' digital assets with advanced security solutions and threat detection.',
      requirements: [
        'Bachelor\'s degree in Cybersecurity or related field',
        '4+ years of cybersecurity experience',
        'Certifications: CISSP, CISM, or equivalent',
        'Experience with SIEM tools and incident response',
        'Knowledge of compliance frameworks (SOC 2, GDPR)'
      ],
      benefits: [
        'Competitive salary and equity',
        'Health, dental, and vision insurance',
        'Flexible work arrangements',
        'Professional development budget',
        'Unlimited PTO'
      ],
      posted: '2024-01-08',
      featured: false
    },
    {
      id: 4,
      title: 'Data Scientist',
      department: 'Analytics',
      location: 'New York, NY',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Extract insights from complex datasets to drive business decisions and AI model development.',
      requirements: [
        'Master\'s degree in Data Science, Statistics, or related field',
        '3+ years of data science experience',
        'Proficiency in Python, R, SQL',
        'Experience with machine learning libraries',
        'Strong statistical and analytical skills'
      ],
      benefits: [
        'Competitive salary and equity',
        'Health, dental, and vision insurance',
        'Flexible work arrangements',
        'Professional development budget',
        'Unlimited PTO'
      ],
      posted: '2024-01-05',
      featured: false
    },
    {
      id: 5,
      title: 'Product Manager',
      department: 'Product',
      location: 'Remote',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Lead product strategy and roadmap for our AI and IT solutions portfolio.',
      requirements: [
        'Bachelor\'s degree in Business, Engineering, or related field',
        '5+ years of product management experience',
        'Experience with AI/ML products',
        'Strong analytical and communication skills',
        'Experience with agile development methodologies'
      ],
      benefits: [
        'Competitive salary and equity',
        'Health, dental, and vision insurance',
        'Flexible work arrangements',
        'Professional development budget',
        'Unlimited PTO'
      ],
      posted: '2024-01-03',
      featured: false
    },
    {
      id: 6,
      title: 'Sales Engineer',
      department: 'Sales',
      location: 'Remote',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Help clients understand and implement our AI and IT solutions through technical sales support.',
      requirements: [
        'Bachelor\'s degree in Engineering or related field',
        '3+ years of sales engineering experience',
        'Technical background in AI/ML or cloud computing',
        'Excellent presentation and communication skills',
        'Experience with enterprise sales processes'
      ],
      benefits: [
        'Competitive salary and equity',
        'Health, dental, and vision insurance',
        'Flexible work arrangements',
        'Professional development budget',
        'Unlimited PTO'
      ],
      posted: '2024-01-01',
      featured: false
    }
  ];

  const departments = [
    { id: 'all', name: 'All Departments' },
    { id: 'Engineering', name: 'Engineering' },
    { id: 'Security', name: 'Security' },
    { id: 'Analytics', name: 'Analytics' },
    { id: 'Product', name: 'Product' },
    { id: 'Sales', name: 'Sales' }
  ];

  const companyValues = [
    {
      icon: Star,
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, delivering the highest quality solutions to our clients.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and collaboration to achieve extraordinary results.'
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'We are passionate about technology and its potential to transform businesses and improve lives.'
    },
    {
      icon: Award,
      title: 'Innovation',
      description: 'We constantly push the boundaries of what\'s possible with cutting-edge technology and creative thinking.'
    }
  ];

  const benefits = [
    'Competitive salary and equity package',
    'Comprehensive health, dental, and vision insurance',
    'Flexible work arrangements and remote options',
    'Professional development and learning budget',
    'Unlimited paid time off',
    '401(k) with company matching',
    'Stock options for all employees',
    'Wellness programs and gym memberships',
    'Team building events and company retreats',
    'Cutting-edge technology and tools'
  ];

  const filteredJobs = selectedDepartment === 'all' 
    ? jobOpenings 
    : jobOpenings.filter(job => job.department === selectedDepartment);

  const featuredJob = jobOpenings.find(job => job.featured);
  const regularJobs = filteredJobs.filter(job => !job.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Careers | Zion Tech Group</title>
        <meta name="description" content="Join our team of AI and technology experts. Explore career opportunities at Zion Tech Group and help us build the future of technology." />
        <meta name="keywords" content="careers, jobs, AI engineer, cloud architect, data scientist, technology careers" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Join Our <span className="text-cyan-400">Team</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Be part of a team that's shaping the future of AI and technology. 
            Join us in building innovative solutions that transform businesses worldwide.
          </p>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyValues.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-slate-900" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Why Work With Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              {benefits.slice(0, 5).map((benefit, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
            <div className="space-y-4">
              {benefits.slice(5).map((benefit, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Open Positions</h2>
          
          {/* Department Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {departments.map((department) => (
              <button
                key={department.id}
                onClick={() => setSelectedDepartment(department.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedDepartment === department.id
                    ? 'bg-cyan-500 text-white'
                    : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                }`}
              >
                {department.name}
              </button>
            ))}
          </div>

          {/* Featured Job */}
          {featuredJob && (
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-white mb-6">Featured Position</h3>
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="text-2xl font-bold text-white mb-2">{featuredJob.title}</h4>
                    <div className="flex items-center space-x-4 text-sm text-gray-400 mb-4">
                      <div className="flex items-center">
                        <Briefcase className="w-4 h-4 mr-1" />
                        {featuredJob.department}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {featuredJob.location}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {featuredJob.type}
                      </div>
                    </div>
                  </div>
                  <span className="bg-cyan-500 text-white text-sm font-bold px-3 py-1 rounded-full">
                    Featured
                  </span>
                </div>
                <p className="text-gray-300 mb-6">{featuredJob.description}</p>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-400">
                    Posted: {new Date(featuredJob.posted).toLocaleDateString()}
                  </div>
                  <button className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors">
                    Apply Now
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Job Listings */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularJobs.map((job) => (
              <div key={job.id} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 hover:border-slate-600 transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <h4 className="text-xl font-bold text-white mb-2">{job.title}</h4>
                  <span className="bg-slate-700 text-cyan-400 text-xs font-medium px-2 py-1 rounded">
                    {job.department}
                  </span>
                </div>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-400">
                    <MapPin className="w-4 h-4 mr-2" />
                    {job.location}
                  </div>
                  <div className="flex items-center text-sm text-gray-400">
                    <Clock className="w-4 h-4 mr-2" />
                    {job.type} • {job.experience}
                  </div>
                </div>
                <p className="text-gray-300 mb-4 line-clamp-3">{job.description}</p>
                <div className="flex items-center justify-between">
                  <div className="text-xs text-gray-400">
                    Posted: {new Date(job.posted).toLocaleDateString()}
                  </div>
                  <button className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors text-sm">
                    View Details
                    <ArrowRight className="w-3 h-3 ml-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-3xl p-12 border border-slate-700">
            <h2 className="text-4xl font-bold text-white mb-6">
              Don't See the Right Role?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              We're always looking for talented individuals to join our team. 
              Send us your resume and let us know how you'd like to contribute.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                Send Your Resume
              </button>
              <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
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
