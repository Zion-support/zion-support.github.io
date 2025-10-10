'use client';

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, MapPin, Clock, Users, Award, Heart, Zap, Shield, Globe, Star, Target } from 'lucide-react';

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
        'Experience with cloud platforms (AWS, GCP, Azure)',
        'Strong problem-solving and communication skills'
      ],
      benefits: [
        'Competitive salary and equity',
        'Health, dental, and vision insurance',
        'Flexible work arrangements',
        'Professional development budget',
        'Unlimited PTO'
      ]
    },
    {
      id: 2,
      title: 'Cloud Solutions Architect',
      department: 'Engineering',
      location: 'New York, NY',
      type: 'Full-time',
      experience: '7+ years',
      description: 'Design and implement scalable cloud infrastructure solutions for enterprise clients.',
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        '7+ years of cloud architecture experience',
        'Certifications in AWS, Azure, or GCP',
        'Experience with DevOps and CI/CD',
        'Strong leadership and client-facing skills'
      ],
      benefits: [
        'Competitive salary and equity',
        'Health, dental, and vision insurance',
        'Flexible work arrangements',
        'Professional development budget',
        'Unlimited PTO'
      ]
    },
    {
      id: 3,
      title: 'Data Scientist',
      department: 'Data',
      location: 'Remote',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Analyze complex data sets to drive business insights and decision-making.',
      requirements: [
        'Master\'s degree in Data Science, Statistics, or related field',
        '3+ years of data science experience',
        'Proficiency in Python, R, SQL',
        'Experience with machine learning algorithms',
        'Strong analytical and communication skills'
      ],
      benefits: [
        'Competitive salary and equity',
        'Health, dental, and vision insurance',
        'Flexible work arrangements',
        'Professional development budget',
        'Unlimited PTO'
      ]
    },
    {
      id: 4,
      title: 'DevOps Engineer',
      department: 'Engineering',
      location: 'San Francisco, CA',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Build and maintain scalable infrastructure and deployment pipelines.',
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        '4+ years of DevOps experience',
        'Experience with Docker, Kubernetes, Terraform',
        'Proficiency in scripting languages (Bash, Python)',
        'Experience with monitoring and logging tools'
      ],
      benefits: [
        'Competitive salary and equity',
        'Health, dental, and vision insurance',
        'Flexible work arrangements',
        'Professional development budget',
        'Unlimited PTO'
      ]
    },
    {
      id: 5,
      title: 'Product Manager',
      department: 'Product',
      location: 'Remote',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Lead product strategy and roadmap for AI-powered solutions.',
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
      ]
    },
    {
      id: 6,
      title: 'UX Designer',
      department: 'Design',
      location: 'Remote',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Design intuitive and engaging user experiences for AI-powered applications.',
      requirements: [
        'Bachelor\'s degree in Design, HCI, or related field',
        '3+ years of UX design experience',
        'Proficiency in Figma, Sketch, Adobe Creative Suite',
        'Experience with user research and testing',
        'Portfolio demonstrating AI/ML product design'
      ],
      benefits: [
        'Competitive salary and equity',
        'Health, dental, and vision insurance',
        'Flexible work arrangements',
        'Professional development budget',
        'Unlimited PTO'
      ]
    }
  ];

  const departments = ['all', 'Engineering', 'Data', 'Product', 'Design', 'Sales', 'Marketing'];

  const companyValues = [
    {
      icon: Heart,
      title: 'Passion',
      description: 'We love what we do and are passionate about creating innovative solutions.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and diverse perspectives.'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'We constantly push boundaries and embrace new technologies.'
    },
    {
      icon: Shield,
      title: 'Integrity',
      description: 'We maintain the highest ethical standards in everything we do.'
    },
    {
      icon: Globe,
      title: 'Impact',
      description: 'We create solutions that make a positive difference in the world.'
    },
    {
      icon: Star,
      title: 'Excellence',
      description: 'We strive for excellence in every project and interaction.'
    }
  ];

  const filteredJobs = selectedDepartment === 'all' 
    ? jobOpenings 
    : jobOpenings.filter(job => job.department === selectedDepartment);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Careers - Zion Tech Group | Join Our Team</title>
        <meta name="description" content="Join Zion Tech Group and work on cutting-edge AI and IT solutions. Explore open positions, benefits, and our company culture." />
        <meta name="keywords" content="careers, jobs, AI engineer, cloud architect, data scientist, DevOps, remote work, tech jobs" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
              Join Our
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                {' '}Team
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Work on cutting-edge AI and IT solutions that transform businesses 
              and make a real impact in the world.
            </p>
          </div>

          {/* Company Values */}
          <section className="py-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Our Values</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                These core values guide everything we do and shape our company culture.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {companyValues.map((value, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Job Openings */}
          <section className="py-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Open Positions</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Explore our current job openings and find the perfect role for you.
              </p>
              
              {/* Department Filter */}
              <div className="flex flex-wrap justify-center gap-2 mb-8">
                {departments.map((dept) => (
                  <button
                    key={dept}
                    onClick={() => setSelectedDepartment(dept)}
                    className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                      selectedDepartment === dept
                        ? 'bg-cyan-500 text-white'
                        : 'bg-white/10 text-gray-300 hover:bg-white/20'
                    }`}
                  >
                    {dept === 'all' ? 'All Departments' : dept}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredJobs.map((job) => (
                <div
                  key={job.id}
                  className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {job.title}
                    </h3>
                    <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full">
                      {job.department}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-4 text-gray-400 text-sm mb-4">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{job.type}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Award className="w-4 h-4" />
                      <span>{job.experience}</span>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-6">{job.description}</p>

                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Key Requirements:</h4>
                    <ul className="space-y-2">
                      {job.requirements.slice(0, 3).map((req, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between">
                    <Link
                      to={`/careers/${job.id}`}
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold transition-colors"
                    >
                      View Details
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                    <Link
                      to="/contact"
                      className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300"
                    >
                      Apply Now
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Benefits Section */}
          <section className="py-16 bg-white/5 rounded-2xl">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-white mb-6">Why Work With Us?</h2>
              <p className="text-xl text-gray-300 mb-8">
                We offer competitive benefits and a supportive work environment that helps you grow and succeed.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  'Competitive salary and equity',
                  'Health, dental, and vision insurance',
                  'Flexible work arrangements',
                  'Professional development budget',
                  'Unlimited PTO',
                  '401(k) with company matching',
                  'Home office stipend',
                  'Learning and development opportunities',
                  'Team building events'
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Don't See the Right Role?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              We're always looking for talented individuals to join our team. Send us your resume and let us know how you can contribute.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center"
              >
                <Target className="w-5 h-5 mr-2" />
                Send Your Resume
              </Link>
              <Link
                to="/contact"
                className="bg-white/10 hover:bg-white/20 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center"
              >
                <Users className="w-5 h-5 mr-2" />
                Learn More
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CareersPage;