'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Star, Users, Heart, Award, MapPin, Clock, CheckCircle, ArrowRight, Briefcase, GraduationCap, Zap } from 'lucide-react';

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
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const jobPositions: JobPosition[] = [
    {
      id: '1',
      title: 'Senior AI Engineer',
      department: 'Engineering',
      location: 'San Francisco, CA',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Lead the development of cutting-edge AI solutions and machine learning models.',
      requirements: [
        'Master\'s degree in Computer Science or related field',
        '5+ years of experience in AI/ML development',
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
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      experience: '7+ years',
      description: 'Design and implement scalable cloud infrastructure solutions for enterprise clients.',
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        '7+ years of cloud architecture experience',
        'Certifications in AWS, Azure, or GCP',
        'Experience with containerization and orchestration',
        'Strong understanding of security best practices'
      ],
      benefits: [
        'Competitive salary and equity',
        'Comprehensive health insurance',
        'Remote work flexibility',
        'Professional development budget',
        '401(k) with company matching'
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
      experience: '3+ years',
      description: 'Protect our clients\' digital assets and implement security best practices.',
      requirements: [
        'Bachelor\'s degree in Cybersecurity or related field',
        '3+ years of cybersecurity experience',
        'Certifications in CISSP, CISM, or similar',
        'Experience with security tools and frameworks',
        'Strong analytical and problem-solving skills'
      ],
      benefits: [
        'Competitive salary and equity',
        'Comprehensive health insurance',
        'Flexible work arrangements',
        'Professional development budget',
        '401(k) with company matching'
      ],
      posted: '2024-01-10',
      featured: false
    },
    {
      id: '4',
      title: 'Product Manager - AI Solutions',
      department: 'Product',
      location: 'San Francisco, CA',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Drive product strategy and roadmap for our AI-powered solutions.',
      requirements: [
        'Bachelor\'s degree in Business, Engineering, or related field',
        '4+ years of product management experience',
        'Experience with AI/ML products preferred',
        'Strong analytical and communication skills',
        'Experience with agile development methodologies'
      ],
      benefits: [
        'Competitive salary and equity',
        'Comprehensive health insurance',
        'Flexible work arrangements',
        'Professional development budget',
        '401(k) with company matching'
      ],
      posted: '2024-01-08',
      featured: false
    }
  ];

  const departments = ['all', ...Array.from(new Set(jobPositions.map(job => job.department)))];

  const filteredJobs = jobPositions.filter(job => {
    const matchesDepartment = selectedDepartment === 'all' || job.department === selectedDepartment;
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.department.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesDepartment && matchesSearch;
  });

  const featuredJobs = jobPositions.filter(job => job.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Careers - Zion Tech Group | Join Our Team</title>
        <meta name="description" content="Join Zion Tech Group and help shape the future of AI and technology. Explore our open positions and be part of our innovative team." />
        <meta name="keywords" content="careers, jobs, AI engineer, cloud architect, cybersecurity, product manager, tech jobs" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Join Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Innovative Team</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Help us build the future of AI and technology. We're looking for passionate individuals 
            who want to make a difference in the world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              View Open Positions
              <ArrowRight className="inline-block ml-2 w-5 h-5" />
            </button>
            <button className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
              Learn About Our Culture
            </button>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Work With Us?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We offer more than just a job - we offer a chance to be part of something bigger
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Great Culture</h3>
              <p className="text-gray-300">
                Work in a supportive, inclusive environment where your ideas matter and your growth is prioritized.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Cutting-Edge Technology</h3>
              <p className="text-gray-300">
                Work with the latest AI, cloud, and cybersecurity technologies that are shaping the future.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Growth Opportunities</h3>
              <p className="text-gray-300">
                Continuous learning opportunities, mentorship programs, and clear career advancement paths.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Jobs */}
      {featuredJobs.length > 0 && (
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-6">Featured Positions</h2>
              <p className="text-xl text-gray-300">Check out our most exciting open positions</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredJobs.map((job) => (
                <div key={job.id} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-blue-400/50 transition-all duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{job.title}</h3>
                      <p className="text-gray-300">{job.department}</p>
                    </div>
                    <span className="bg-yellow-500/20 text-yellow-300 px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-400">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Briefcase className="w-4 h-4" />
                      <span>{job.type}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <GraduationCap className="w-4 h-4" />
                      <span>{job.experience}</span>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-6">{job.description}</p>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">Posted {job.posted}</span>
                    <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-2 px-6 rounded-lg transition-all duration-300">
                      Apply Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Jobs */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 mb-12">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search positions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <select
              value={selectedDepartment}
              onChange={(e) => setSelectedDepartment(e.target.value)}
              className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              {departments.map(dept => (
                <option key={dept} value={dept}>
                  {dept === 'all' ? 'All Departments' : dept}
                </option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredJobs.map((job) => (
              <div key={job.id} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-2">{job.title}</h3>
                <p className="text-gray-300 mb-4">{job.department}</p>
                
                <div className="flex flex-wrap gap-2 mb-4 text-sm text-gray-400">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {job.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Briefcase className="w-4 h-4" />
                    {job.type}
                  </span>
                </div>

                <p className="text-gray-300 text-sm mb-4 line-clamp-3">{job.description}</p>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">Posted {job.posted}</span>
                  <button className="text-blue-400 hover:text-blue-300 font-medium transition-colors">
                    View Details
                    <ArrowRight className="inline-block ml-1 w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredJobs.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">No positions found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Don't See the Right Role?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              We're always looking for talented individuals. Send us your resume and let us know how you can contribute to our mission.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Send Your Resume
              </button>
              <button className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;