'use client';

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { MapPin, Clock, Users, CheckCircle, ArrowRight, Briefcase, GraduationCap, Heart } from 'lucide-react';

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
  featured?: boolean;
}

const CareersPage: React.FC = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('all');

  const departments = [
    { id: 'all', name: 'All Departments' },
    { id: 'engineering', name: 'Engineering' },
    { id: 'ai', name: 'AI & Machine Learning' },
    { id: 'design', name: 'Design' },
    { id: 'marketing', name: 'Marketing' },
    { id: 'sales', name: 'Sales' },
    { id: 'operations', name: 'Operations' }
  ];

  const jobPositions: JobPosition[] = [
    {
      id: '1',
      title: 'Senior AI Engineer',
      department: 'ai',
      location: 'Remote / New York',
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
      ],
      featured: true
    },
    {
      id: '2',
      title: 'Full Stack Developer',
      department: 'engineering',
      location: 'San Francisco, CA',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Build scalable web applications and APIs using modern technologies.',
      requirements: [
        'Bachelor\'s degree in Computer Science',
        '3+ years of full-stack development experience',
        'Proficiency in React, Node.js, TypeScript',
        'Experience with databases (PostgreSQL, MongoDB)',
        'Knowledge of cloud services and DevOps'
      ],
      benefits: [
        'Competitive salary',
        'Comprehensive health benefits',
        '401(k) with company matching',
        'Learning and development opportunities',
        'Team building events'
      ]
    },
    {
      id: '3',
      title: 'UX/UI Designer',
      department: 'design',
      location: 'Remote',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Create intuitive and beautiful user experiences for our AI-powered products.',
      requirements: [
        'Bachelor\'s degree in Design or related field',
        '4+ years of UX/UI design experience',
        'Proficiency in Figma, Sketch, Adobe Creative Suite',
        'Experience with user research and testing',
        'Portfolio demonstrating strong design skills'
      ],
      benefits: [
        'Competitive salary',
        'Health and wellness benefits',
        'Design tools and software',
        'Creative freedom and autonomy',
        'Collaborative team environment'
      ]
    }
  ];

  const companyValues = [
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and open communication.'
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'We\'re driven by our love for technology and innovation.'
    },
    {
      icon: GraduationCap,
      title: 'Learning',
      description: 'We encourage continuous learning and personal growth.'
    },
    {
      icon: CheckCircle,
      title: 'Excellence',
      description: 'We strive for excellence in everything we do.'
    }
  ];

  const filteredPositions = selectedDepartment === 'all' 
    ? jobPositions 
    : jobPositions.filter(position => position.department === selectedDepartment);

  return (
    <>
      <Helmet>
        <title>Careers - Zion Tech Group | Join Our Team</title>
        <meta name="description" content="Join our team of innovators and help shape the future of AI and IT solutions. Explore career opportunities at Zion Tech Group." />
        <meta name="keywords" content="careers, jobs, AI engineer, software developer, tech jobs, remote work, Zion Tech Group" />
        <meta property="og:title" content="Careers - Zion Tech Group" />
        <meta property="og:description" content="Join our team of innovators and help shape the future of AI and IT solutions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/careers" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Join Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Team</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              Be part of the future of technology. Join our team of innovators, creators, and problem-solvers who are building the next generation of AI and IT solutions.
            </p>
          </div>
        </section>

        {/* Company Values */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {companyValues.map((value, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-slate-900" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Job Openings */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">Open Positions</h2>
              <p className="text-gray-300 mb-8">Find the perfect role for your skills and interests</p>
              
              {/* Department Filter */}
              <div className="flex flex-wrap justify-center gap-4">
                {departments.map((dept) => (
                  <button
                    key={dept.id}
                    onClick={() => setSelectedDepartment(dept.id)}
                    className={`px-6 py-2 rounded-full transition-all duration-300 ${
                      selectedDepartment === dept.id
                        ? 'bg-cyan-400 text-slate-900 font-semibold'
                        : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                    }`}
                  >
                    {dept.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredPositions.map((position) => (
                <div key={position.id} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-6 hover:border-cyan-500/50 transition-all duration-300">
                  {position.featured && (
                    <div className="flex items-center gap-2 mb-4">
                      <span className="px-3 py-1 bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-900 text-sm rounded-full font-semibold">
                        Featured
                      </span>
                    </div>
                  )}
                  
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{position.title}</h3>
                      <div className="flex items-center gap-4 text-sm text-gray-400">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {position.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {position.type}
                        </div>
                        <div className="flex items-center gap-1">
                          <Briefcase className="w-4 h-4" />
                          {position.experience}
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-4">{position.description}</p>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Requirements:</h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      {position.requirements.slice(0, 3).map((req, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-400">
                      {position.benefits.length} benefits included
                    </div>
                    <button className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-900 px-4 py-2 rounded-lg font-semibold hover:from-cyan-300 hover:to-purple-300 transition-all duration-300">
                      Apply Now
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {filteredPositions.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-400 text-lg">No positions found in this department.</p>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Don't See Your Perfect Role?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              We're always looking for talented individuals. Send us your resume and let us know how you'd like to contribute.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-900 px-8 py-3 rounded-lg font-semibold hover:from-cyan-300 hover:to-purple-300 transition-all duration-300"
              >
                Get in Touch
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CareersPage;
