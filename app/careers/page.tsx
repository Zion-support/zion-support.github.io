'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { MapPin, Clock, Users, ArrowRight, CheckCircle, Star, Briefcase, GraduationCap } from 'lucide-react';

interface JobPosition {
  id: number;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  posted: string;
  description: string;
  requirements: string[];
  benefits: string[];
  featured: boolean;
}

const CareersPage: React.FC = () => {
  const [selectedDepartment, setSelectedDepartment] = useState<string>('all');
  const [selectedLocation, setSelectedLocation] = useState<string>('all');

  const openPositions: JobPosition[] = [
    {
      id: 1,
      title: 'Senior AI Engineer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      experience: '5+ years',
      posted: '2 days ago',
      description: 'Lead the development of cutting-edge AI solutions and machine learning models.',
      requirements: [
        'Master\'s degree in Computer Science or related field',
        '5+ years of experience in AI/ML development',
        'Proficiency in Python, TensorFlow, PyTorch',
        'Experience with cloud platforms (AWS, GCP, Azure)',
        'Strong problem-solving and communication skills'
      ],
      benefits: [
        'Competitive salary and equity',
        'Health, dental, and vision insurance',
        'Flexible work arrangements',
        'Professional development budget',
        '401(k) with company matching'
      ],
      featured: true
    },
    {
      id: 2,
      title: 'Frontend Developer',
      department: 'Engineering',
      location: 'New York, NY',
      type: 'Full-time',
      experience: '3+ years',
      posted: '1 week ago',
      description: 'Build beautiful and responsive user interfaces for our AI-powered applications.',
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        '3+ years of React/Next.js experience',
        'Proficiency in TypeScript and modern CSS',
        'Experience with design systems',
        'Knowledge of accessibility best practices'
      ],
      benefits: [
        'Competitive salary',
        'Health insurance',
        'Remote work options',
        'Learning and development opportunities',
        'Team building events'
      ],
      featured: false
    },
    {
      id: 3,
      title: 'AI Product Manager',
      department: 'Product',
      location: 'San Francisco, CA',
      type: 'Full-time',
      experience: '4+ years',
      posted: '3 days ago',
      description: 'Drive product strategy and roadmap for our AI solutions portfolio.',
      requirements: [
        'Bachelor\'s degree in Business or Technical field',
        '4+ years of product management experience',
        'Experience with AI/ML products',
        'Strong analytical and communication skills',
        'MBA preferred'
      ],
      benefits: [
        'Competitive salary and equity',
        'Comprehensive health benefits',
        'Flexible PTO',
        'Stock options',
        'Professional development'
      ],
      featured: true
    },
    {
      id: 4,
      title: 'DevOps Engineer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      experience: '4+ years',
      posted: '5 days ago',
      description: 'Manage and scale our cloud infrastructure and deployment pipelines.',
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        '4+ years of DevOps experience',
        'Proficiency in AWS, Docker, Kubernetes',
        'Experience with CI/CD pipelines',
        'Knowledge of monitoring and logging tools'
      ],
      benefits: [
        'Competitive salary',
        'Health and dental insurance',
        'Remote work flexibility',
        'Equipment allowance',
        'Conference attendance budget'
      ],
      featured: false
    }
  ];

  const departments = ['all', 'Engineering', 'Product', 'Sales', 'Marketing'];
  const locations = ['all', 'Remote', 'New York, NY', 'San Francisco, CA', 'Austin, TX'];

  const filteredPositions = openPositions.filter(position => {
    const departmentMatch = selectedDepartment === 'all' || position.department === selectedDepartment;
    const locationMatch = selectedLocation === 'all' || position.location === selectedLocation;
    return departmentMatch && locationMatch;
  });

  const companyBenefits = [
    {
      icon: Users,
      title: 'Collaborative Culture',
      description: 'Work with talented individuals in a supportive and inclusive environment'
    },
    {
      icon: Star,
      title: 'Career Growth',
      description: 'Opportunities for professional development and career advancement'
    },
    {
      icon: Heart,
      title: 'Work-Life Balance',
      description: 'Flexible schedules and remote work options to support your lifestyle'
    },
    {
      icon: Award,
      title: 'Recognition',
      description: 'Regular recognition and rewards for outstanding performance'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Careers - Zion Tech Group</title>
        <meta name="description" content="Join our team of AI and technology experts. Explore career opportunities at Zion Tech Group." />
        <meta name="keywords" content="careers, jobs, AI engineer, software developer, remote work" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Join Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Team</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Be part of the future of AI and technology. We're looking for passionate individuals to help us build the next generation of intelligent solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
              <span className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                50+ Open Positions
              </span>
              <span className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                Remote Friendly
              </span>
              <span className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                Competitive Benefits
              </span>
            </div>
          </div>
        </section>

        {/* Company Benefits */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Why Work With Us
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {companyBenefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-slate-900" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-400">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Job Filters */}
        <section className="py-8 px-4 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap gap-4 justify-center">
              <div className="flex items-center space-x-2">
                <Briefcase className="w-5 h-5 text-cyan-400" />
                <select
                  value={selectedDepartment}
                  onChange={(e) => setSelectedDepartment(e.target.value)}
                  className="bg-slate-700 text-white rounded-lg px-4 py-2 border border-slate-600 focus:border-cyan-400 focus:outline-none"
                >
                  {departments.map(dept => (
                    <option key={dept} value={dept}>
                      {dept === 'all' ? 'All Departments' : dept}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5 text-cyan-400" />
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="bg-slate-700 text-white rounded-lg px-4 py-2 border border-slate-600 focus:border-cyan-400 focus:outline-none"
                >
                  {locations.map(location => (
                    <option key={location} value={location}>
                      {location === 'all' ? 'All Locations' : location}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Open Positions
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {filteredPositions.map((position) => (
                <div
                  key={position.id}
                  className={`bg-slate-800/50 backdrop-blur-sm border rounded-xl p-6 hover:border-cyan-400 transition-all duration-300 ${
                    position.featured ? 'border-cyan-400 shadow-lg shadow-cyan-400/20' : 'border-slate-700'
                  }`}
                >
                  {position.featured && (
                    <div className="flex items-center mb-4">
                      <Star className="w-4 h-4 text-yellow-400 mr-2" />
                      <span className="text-yellow-400 text-sm font-medium">Featured</span>
                    </div>
                  )}
                  
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold text-white">{position.title}</h3>
                    <span className="text-sm text-gray-400">{position.posted}</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-400">
                    <span className="flex items-center">
                      <Briefcase className="w-4 h-4 mr-1" />
                      {position.department}
                    </span>
                    <span className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {position.location}
                    </span>
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {position.type}
                    </span>
                    <span className="flex items-center">
                      <GraduationCap className="w-4 h-4 mr-1" />
                      {position.experience}
                    </span>
                  </div>
                  
                  <p className="text-gray-300 mb-4">{position.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {position.requirements.slice(0, 3).map((req, index) => (
                      <span
                        key={index}
                        className="bg-slate-700 text-gray-300 px-3 py-1 rounded-full text-xs"
                      >
                        {req.split(' ')[0]} {req.split(' ')[1]}
                      </span>
                    ))}
                    {position.requirements.length > 3 && (
                      <span className="bg-slate-700 text-gray-300 px-3 py-1 rounded-full text-xs">
                        +{position.requirements.length - 3} more
                      </span>
                    )}
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-900 font-semibold py-2 px-4 rounded-lg hover:from-cyan-300 hover:to-purple-300 transition-all duration-300 flex items-center justify-center">
                    Apply Now
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              ))}
            </div>
            
            {filteredPositions.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-400 text-lg">No positions found matching your criteria.</p>
                <button
                  onClick={() => {
                    setSelectedDepartment('all');
                    setSelectedLocation('all');
                  }}
                  className="mt-4 text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Don't See Your Perfect Role?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-900 font-semibold rounded-lg hover:from-cyan-300 hover:to-purple-300 transition-all duration-300">
                Submit Resume
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="inline-flex items-center justify-center px-8 py-3 border border-slate-600 text-white font-semibold rounded-lg hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300">
                Contact HR
                <Users className="w-5 h-5 ml-2" />
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CareersPage;