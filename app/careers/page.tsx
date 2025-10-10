'use client';

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { MapPin, Clock, Users, CheckCircle, ArrowRight, Search, Filter } from 'lucide-react';

const CareersPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('all');

  const jobs = [
    {
      id: '1',
      title: 'Senior AI Engineer',
      department: 'AI & Machine Learning',
      location: 'San Francisco, CA',
      type: 'Full-time',
      experience: '5+ years',
      posted: '2 days ago',
      featured: true,
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
      ]
    },
    {
      id: '2',
      title: 'Cloud Architect',
      department: 'Cloud Services',
      location: 'New York, NY',
      type: 'Full-time',
      experience: '7+ years',
      posted: '1 week ago',
      featured: false,
      description: 'Design and implement scalable cloud infrastructure solutions for enterprise clients.',
      requirements: [
        'AWS, Azure, GCP expertise',
        '7+ years cloud experience',
        'Architecture certifications',
        'Kubernetes expertise'
      ],
      benefits: [
        'Competitive salary: $130,000 - $200,000',
        'Health insurance',
        '401k matching',
        'Flexible PTO'
      ]
    },
    {
      id: '3',
      title: 'Data Scientist',
      department: 'Analytics',
      location: 'San Francisco, CA',
      type: 'Full-time',
      experience: '3+ years',
      posted: '3 days ago',
      featured: false,
      description: 'Extract insights from complex datasets and build predictive models for business intelligence.',
      requirements: [
        'Python, R, SQL expertise',
        '3+ years data science experience',
        'Statistics background',
        'Machine learning expertise'
      ],
      benefits: [
        'Competitive salary: $90,000 - $140,000',
        'Remote work options',
        'Learning budget',
        'Health benefits'
      ]
    },
    {
      id: '4',
      title: 'DevOps Engineer',
      department: 'Infrastructure',
      location: 'Remote',
      type: 'Full-time',
      experience: '4+ years',
      posted: '5 days ago',
      featured: false,
      description: 'Automate deployment pipelines and maintain high-availability systems.',
      requirements: [
        'Docker, Kubernetes expertise',
        '4+ years DevOps experience',
        'CI/CD expertise',
        'Monitoring tools knowledge'
      ],
      benefits: [
        'Competitive salary: $100,000 - $150,000',
        'Fully remote',
        'Equipment allowance',
        'Professional development'
      ]
    },
    {
      id: '5',
      title: 'Frontend Developer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      experience: '3+ years',
      posted: '1 week ago',
      featured: false,
      description: 'Build responsive and interactive user interfaces for our AI-powered applications.',
      requirements: [
        'React, TypeScript expertise',
        '3+ years frontend experience',
        'UI/UX design skills',
        'Modern web technologies'
      ],
      benefits: [
        'Competitive salary: $80,000 - $120,000',
        'Remote work',
        'Design tools provided',
        'Team collaboration tools'
      ]
    },
    {
      id: '6',
      title: 'Cybersecurity Specialist',
      department: 'Security',
      location: 'Remote',
      type: 'Full-time',
      experience: '5+ years',
      posted: '2 weeks ago',
      featured: false,
      description: 'Protect our systems and client data from cyber threats and ensure compliance.',
      requirements: [
        'Security certifications',
        '5+ years security experience',
        'Penetration testing skills',
        'Compliance knowledge'
      ],
      benefits: [
        'Competitive salary: $110,000 - $160,000',
        'Security training budget',
        'Certification support',
        'Health insurance'
      ]
    }
  ];

  const departments = ['all', ...Array.from(new Set(jobs.map(job => job.department)))];

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.requirements.some(req => req.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesDepartment = selectedDepartment === 'all' || job.department === selectedDepartment;
    return matchesSearch && matchesDepartment;
  });

  const featuredJobs = jobs.filter(job => job.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Careers - Zion Tech Group | Join Our Team</title>
        <meta name="description" content="Join Zion Tech Group and work on cutting-edge AI and IT solutions. Explore open positions, benefits, and career opportunities." />
        <meta name="keywords" content="careers, jobs, AI engineer, cloud architect, data scientist, remote work, tech careers" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Join Our <span className="text-cyan-400">Team</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            Be part of the future of AI and IT solutions. Work with cutting-edge technology, 
            collaborate with brilliant minds, and make a real impact on businesses worldwide.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">50+</div>
              <div className="text-gray-400">Team Members</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">15+</div>
              <div className="text-gray-400">Countries</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">100%</div>
              <div className="text-gray-400">Remote Friendly</div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search jobs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
              />
            </div>
            <div className="flex gap-2">
              <Filter className="w-5 h-5 text-gray-400 mt-3" />
              <select
                value={selectedDepartment}
                onChange={(e) => setSelectedDepartment(e.target.value)}
                className="px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
              >
                {departments.map(dept => (
                  <option key={dept} value={dept} className="bg-slate-800">
                    {dept === 'all' ? 'All Departments' : dept}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Jobs */}
      {featuredJobs.length > 0 && (
        <section className="py-8 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-6">Featured Positions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {featuredJobs.map((job) => (
                <div key={job.id} className="bg-gradient-to-r from-cyan-400/10 to-purple-400/10 backdrop-blur-sm border border-cyan-400/30 rounded-xl p-6 hover:border-cyan-400/50 transition-all duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{job.title}</h3>
                      <p className="text-cyan-400 text-sm">{job.department}</p>
                    </div>
                    <span className="bg-cyan-400 text-slate-900 px-3 py-1 rounded-full text-xs font-semibold">
                      Featured
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {job.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {job.posted}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {job.experience}
                    </span>
                  </div>
                  
                  <p className="text-gray-300 text-sm mb-4">{job.description}</p>
                  
                  <button className="w-full flex items-center justify-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors font-semibold">
                    View Details
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Jobs */}
      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-6">
            {selectedDepartment === 'all' ? 'All Positions' : `${selectedDepartment} Positions`}
          </h2>
          
          {filteredJobs.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">No jobs found matching your criteria.</p>
            </div>
          ) : (
            <div className="space-y-6">
              {filteredJobs.map((job) => (
                <div key={job.id} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{job.title}</h3>
                      <p className="text-cyan-400 text-sm">{job.department}</p>
                    </div>
                    <span className="text-gray-400 text-sm">{job.posted}</span>
                  </div>
                  
                  <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {job.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {job.type}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {job.experience}
                    </span>
                  </div>
                  
                  <p className="text-gray-300 text-sm mb-4">{job.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {job.requirements.slice(0, 3).map((req, index) => (
                        <span key={index} className="bg-white/10 text-white px-2 py-1 rounded text-xs">
                          {req}
                        </span>
                      ))}
                      {job.requirements.length > 3 && (
                        <span className="text-gray-400 text-xs">
                          +{job.requirements.length - 3} more
                        </span>
                      )}
                    </div>
                    <button className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors font-semibold">
                      Apply Now
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Why Work With Us?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-slate-900" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Competitive Benefits</h3>
              <p className="text-gray-300 text-sm">Health insurance, 401k matching, and comprehensive benefits package</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-slate-900" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Remote First</h3>
              <p className="text-gray-300 text-sm">Work from anywhere with flexible hours and remote-first culture</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <ArrowRight className="w-8 h-8 text-slate-900" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Growth Opportunities</h3>
              <p className="text-gray-300 text-sm">Professional development budget and career advancement opportunities</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-slate-900" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Work-Life Balance</h3>
              <p className="text-gray-300 text-sm">Flexible PTO, mental health support, and family-friendly policies</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-cyan-400/10 to-purple-400/10 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Don't See Your Perfect Role?
            </h2>
            <p className="text-gray-300 mb-8">
              We're always looking for talented individuals to join our team. 
              Send us your resume and let's discuss how you can contribute to our mission.
            </p>
            <button className="px-8 py-3 bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-900 font-semibold rounded-lg hover:from-cyan-300 hover:to-purple-300 transition-all duration-300">
              Send Your Resume
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;
