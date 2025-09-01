import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Briefcase,
  Users,
  Heart,
  Zap,
  Brain,
  Shield,
  Cloud,
  Code,
  Rocket,
  ArrowRight,
  CheckCircle,
  Star,
  Globe,
  Award,
  Lightbulb,
  Mail,
  Phone,
  MapPin,
  Clock,
  Search
} from 'lucide-react';

const Careers: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');

  const departments = [
    { id: 'all', name: 'All Departments', count: 45 },
    { id: 'engineering', name: 'Engineering', count: 20 },
    { id: 'ai-ml', name: 'AI & Machine Learning', count: 12 },
    { id: 'cybersecurity', name: 'Cybersecurity', count: 8 },
    { id: 'sales', name: 'Sales & Business Development', count: 5 }
  ];

  const locationFilters = [
    { id: 'all', name: 'All Locations', count: 45 },
    { id: 'remote', name: 'Remote', count: 25 },
    { id: 'middletown', name: 'Middletown, DE', count: 15 },
    { id: 'new-york', name: 'New York, NY', count: 3 },
    { id: 'san-francisco', name: 'San Francisco, CA', count: 2 }
  ];

  const jobListings = [
    {
      id: 1,
      title: 'Senior AI Engineer',
      department: 'ai-ml',
      location: 'Remote',
      type: 'Full-time',
      experience: '5+ years',
      salary: '$120,000 - $180,000',
      description: 'Lead the development of cutting-edge AI solutions for enterprise clients.',
      skills: ['Python', 'TensorFlow', 'PyTorch', 'MLOps', 'Cloud Computing'],
      benefits: ['Competitive salary', 'Health insurance', 'Remote work', 'Professional development']
    },
    {
      id: 2,
      title: 'Cybersecurity Specialist',
      department: 'cybersecurity',
      location: 'Middletown, DE',
      type: 'Full-time',
      experience: '3+ years',
      salary: '$90,000 - $130,000',
      description: 'Protect our clients from evolving cyber threats with advanced security solutions.',
      skills: ['Network Security', 'Penetration Testing', 'Incident Response', 'Compliance'],
      benefits: ['Competitive salary', 'Health insurance', 'Flexible hours', 'Training programs']
    },
    {
      id: 3,
      title: 'Full Stack Developer',
      department: 'engineering',
      location: 'Remote',
      type: 'Full-time',
      experience: '4+ years',
      salary: '$100,000 - $150,000',
      description: 'Build scalable web applications using modern technologies.',
      skills: ['React', 'Node.js', 'TypeScript', 'AWS', 'Docker'],
      benefits: ['Competitive salary', 'Health insurance', 'Remote work', 'Flexible hours']
    }
  ];

  const filteredJobs = jobListings.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesDepartment = selectedDepartment === 'all' || job.department === selectedDepartment;
    const matchesLocation = selectedLocation === 'all' || job.location === selectedLocation;
    
    return matchesSearch && matchesDepartment && matchesLocation;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      <div className="container mx-auto px-4 py-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-white mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Join Our Team
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-300 leading-relaxed">
            Be part of a team that's shaping the future of technology. Work on
            cutting-edge AI, quantum computing, and cybersecurity solutions that
            transform businesses worldwide.
          </p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-6xl mx-auto mb-12"
        >
          {/* Search Bar */}
          <div className="relative mb-8">
            <input
              type="text"
              placeholder="Search job titles, skills, or keywords..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          </div>

          {/* Filters */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Department Filter */}
            <div>
              <label className="block text-white font-medium mb-3">
                Department
              </label>
              <select
                value={selectedDepartment}
                onChange={(e) => setSelectedDepartment(e.target.value)}
                className="w-full px-4 py-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
              >
                {departments.map((dept) => (
                  <option
                    key={dept.id}
                    value={dept.id}
                    className="bg-gray-800 text-white"
                  >
                    {dept.name} ({dept.count})
                  </option>
                ))}
              </select>
            </div>

            {/* Location Filter */}
            <div>
              <label className="block text-white font-medium mb-3">
                Location
              </label>
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-full px-4 py-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
              >
                {locationFilters.map((loc) => (
                  <option
                    key={loc.id}
                    value={loc.id}
                    className="bg-gray-800 text-white"
                  >
                    {loc.name} ({loc.count})
                  </option>
                ))}
              </select>
            </div>
          </div>
        </motion.div>

        {/* Job Listings */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-6xl mx-auto"
        >
          <div className="grid gap-6">
            {filteredJobs.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-6 hover:bg-white/15 transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{job.title}</h3>
                    <div className="flex flex-wrap gap-2 text-sm text-gray-300">
                      <span className="flex items-center gap-1">
                        <Briefcase className="w-4 h-4" />
                        {job.department}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {job.type}
                      </span>
                    </div>
                  </div>
                  <div className="mt-4 lg:mt-0 text-right">
                    <div className="text-2xl font-bold text-cyan-400 mb-1">{job.salary}</div>
                    <div className="text-sm text-gray-300">{job.experience} experience</div>
                  </div>
                </div>

                <p className="text-gray-300 mb-4">{job.description}</p>

                <div className="mb-4">
                  <h4 className="text-white font-semibold mb-2">Required Skills:</h4>
                  <div className="flex flex-wrap gap-2">
                    {job.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-cyan-500/20 border border-cyan-500/30 rounded-full text-cyan-300 text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="text-white font-semibold mb-2">Benefits:</h4>
                  <div className="flex flex-wrap gap-2">
                    {job.benefits.map((benefit, benefitIndex) => (
                      <span
                        key={benefitIndex}
                        className="px-3 py-1 bg-green-500/20 border border-green-500/30 rounded-full text-green-300 text-sm flex items-center gap-1"
                      >
                        <CheckCircle className="w-3 h-3" />
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 flex items-center gap-2">
                    Apply Now
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button className="px-4 py-2 text-cyan-400 hover:text-cyan-300 transition-colors">
                    View Details
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredJobs.length === 0 && (
            <div className="text-center text-gray-400 py-12">
              <Search className="w-16 h-16 mx-auto mb-4 opacity-50" />
              <p className="text-xl">No jobs found matching your criteria.</p>
              <p className="text-sm">Try adjusting your search terms or filters.</p>
            </div>
          )}
        </motion.div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-4xl mx-auto mt-20 text-center"
        >
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-8">
            <h2 className="text-3xl font-bold text-white mb-4">Don't See the Right Fit?</h2>
            <p className="text-gray-300 mb-6">
              We're always looking for talented individuals to join our team. Send us your resume
              and we'll keep you in mind for future opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Mail className="w-4 h-4" />
                Send Resume
              </a>
              <a
                href="tel:+13024640950"
                className="px-6 py-3 border border-cyan-500 text-cyan-400 rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                Call Us
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Careers;
