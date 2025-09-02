import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Users, ArrowRight, Search, Filter, Briefcase, Star, Globe } from 'lucide-react';

const Careers = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('all');
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
        '5+ years experience in AI/ML development',
        'Proficiency in Python, TensorFlow, PyTorch',
        'Experience with cloud platforms (AWS, Azure, GCP)'
      ],
      benefits: ['Competitive salary', 'Health insurance', 'Remote work', 'Learning budget'],
      posted: '2 days ago',
      featured: true
    },
    {
      id: 2,
      title: 'Cybersecurity Specialist',
      department: 'Security',
      location: 'New York, NY',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Protect our systems and data from cyber threats with advanced security solutions.',
      requirements: [
        'Bachelor\'s degree in Cybersecurity or related field',
        '3+ years experience in cybersecurity',
        'Certifications: CISSP, CISM, or equivalent',
        'Experience with security tools and frameworks'
      ],
      benefits: ['Competitive salary', 'Health insurance', 'Flexible hours', 'Professional development'],
      posted: '1 week ago',
      featured: false
    },
    {
      id: 3,
      title: 'Cloud Solutions Architect',
      department: 'Engineering',
      location: 'San Francisco, CA',
      type: 'Full-time',
      experience: '7+ years',
      description: 'Design and implement scalable cloud architectures for enterprise clients.',
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        '7+ years experience in cloud architecture',
        'Expert knowledge of AWS, Azure, and GCP',
        'Experience with DevOps and containerization'
      ],
      benefits: ['Competitive salary', 'Health insurance', 'Stock options', 'Flexible PTO'],
      posted: '3 days ago',
      featured: true
    },
    {
      id: 4,
      title: 'Product Manager',
      department: 'Product',
      location: 'Remote',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Drive product strategy and roadmap for our AI-powered solutions.',
      requirements: [
        'Bachelor\'s degree in Business or related field',
        '4+ years experience in product management',
        'Experience with AI/ML products',
        'Strong analytical and communication skills'
      ],
      benefits: ['Competitive salary', 'Health insurance', 'Remote work', 'Career growth'],
      posted: '5 days ago',
      featured: false
    }
  ];

  const locations = [
    { id: 'all', name: 'All Locations', count: 12 },
    { id: 'remote', name: 'Remote', count: 8 },
    { id: 'new-york', name: 'New York, NY', count: 2 },
    { id: 'san-francisco', name: 'San Francisco, CA', count: 2 }
  ];

  const departments = [
    { id: 'all', name: 'All Departments', count: 12 },
    { id: 'engineering', name: 'Engineering', count: 6 },
    { id: 'security', name: 'Security', count: 2 },
    { id: 'product', name: 'Product', count: 2 },
    { id: 'marketing', name: 'Marketing', count: 2 }
  ];

  const filteredJobs = jobOpenings.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         job.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesLocation = selectedLocation === 'all' || job.location.toLowerCase().includes(selectedLocation);
    const matchesDepartment = selectedDepartment === 'all' || job.department.toLowerCase() === selectedDepartment;
    return matchesSearch && matchesLocation && matchesDepartment;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Join Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Team</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Build the future of technology with us. Explore exciting career opportunities at Zion Tech Group.
          </p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 mb-12"
        >
          <div className="grid md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search jobs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400"
              />
            </div>
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="px-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-white focus:outline-none focus:border-blue-400"
            >
              {locations.map(location => (
                <option key={location.id} value={location.id} className="bg-gray-800">
                  {location.name} ({location.count})
                </option>
              ))}
            </select>
            <select
              value={selectedDepartment}
              onChange={(e) => setSelectedDepartment(e.target.value)}
              className="px-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-white focus:outline-none focus:border-blue-400"
            >
              {departments.map(department => (
                <option key={department.id} value={department.id} className="bg-gray-800">
                  {department.name} ({department.count})
                </option>
              ))}
            </select>
            <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 flex items-center justify-center gap-2">
              <Filter className="w-4 h-4" />
              Filter
            </button>
          </div>
        </motion.div>

        {/* Job Listings */}
        <div className="space-y-6">
          {filteredJobs.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`bg-white/10 backdrop-blur-md rounded-2xl p-6 border ${
                job.featured ? 'border-purple-500/50 shadow-lg shadow-purple-500/10' : 'border-white/20'
              } hover:border-white/40 transition-all duration-300 group`}
            >
              {job.featured && (
                <div className="flex items-center gap-2 mb-4">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-yellow-400 text-sm font-semibold">Featured Job</span>
                </div>
              )}
              
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                    {job.title}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    {job.description}
                  </p>
                  
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-4">
                    <div className="flex items-center gap-1">
                      <Briefcase className="w-4 h-4" />
                      {job.department}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {job.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {job.type}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {job.experience}
                    </div>
                    <span className="text-gray-500">Posted {job.posted}</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {job.benefits.slice(0, 3).map((benefit, benefitIndex) => (
                      <span
                        key={benefitIndex}
                        className="px-3 py-1 bg-blue-500/20 text-blue-300 text-sm rounded-full"
                      >
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex flex-col gap-3">
                  <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 flex items-center gap-2">
                    Apply Now
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button className="bg-white/10 text-white px-6 py-3 rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300">
                    View Details
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Why Work With Us */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">Why Work With Us?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Global Impact</h3>
              <p className="text-gray-300">
                Work on projects that shape the future of technology and impact millions of users worldwide.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Collaborative Culture</h3>
              <p className="text-gray-300">
                Join a diverse team of experts who value innovation, collaboration, and continuous learning.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Growth Opportunities</h3>
              <p className="text-gray-300">
                Advance your career with mentorship, training programs, and opportunities to lead cutting-edge projects.
              </p>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Don't See the Right Role?
            </h3>
            <p className="text-gray-300 mb-6">
              We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
            </p>
            <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300">
              Submit Your Resume
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Careers;