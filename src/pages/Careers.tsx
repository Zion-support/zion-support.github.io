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
  Globe,
  Building,
  GraduationCap,
  TrendingUp,
  Lightbulb,
  Target,
  Users2,
  Coffee,
  Gamepad2,
  BookOpen,
  Calendar,
  MessageCircle,
  Mail,
  Phone,
  Search
} from 'lucide-react';
import { contactInfo } from '../data/services.js';

export default function Careers() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [expandedJob, setExpandedJob] = useState<string | null>(null);

  const jobOpenings = [
    {
      id: '1',
      title: 'Senior AI Engineer',
      department: 'Engineering',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Lead the development of cutting-edge AI solutions and machine learning models.',
      requirements: [
        'PhD/MS in Computer Science, AI, or related field',
        '5+ years of experience in machine learning',
        'Proficiency in Python, TensorFlow, PyTorch',
        'Experience with cloud platforms (AWS, Azure, GCP)'
      ],
      benefits: ['Competitive salary', 'Equity package', 'Health insurance', 'Remote work']
    },
    {
      id: '2',
      title: 'Cybersecurity Specialist',
      department: 'Security',
      location: 'Hybrid / Middletown, DE',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Protect our clients and infrastructure with advanced security solutions.',
      requirements: [
        'BS in Cybersecurity or related field',
        '3+ years in cybersecurity',
        'Security certifications (CISSP, CEH, etc.)',
        'Experience with penetration testing'
      ],
      benefits: ['Competitive salary', 'Professional development', 'Health insurance', 'Flexible schedule']
    },
    {
      id: '3',
      title: 'Quantum Computing Researcher',
      department: 'Research',
      location: 'On-site / Middletown, DE',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Pioneer quantum computing solutions and algorithms for enterprise applications.',
      requirements: [
        'PhD in Physics, Mathematics, or Computer Science',
        'Experience with quantum computing frameworks',
        'Strong mathematical background',
        'Research publication experience'
      ],
      benefits: ['Research budget', 'Conference attendance', 'Equity package', 'Health insurance']
    },
    {
      id: '4',
      title: 'Cloud Solutions Architect',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      experience: '6+ years',
      description: 'Design and implement scalable cloud infrastructure solutions.',
      requirements: [
        'BS in Computer Science or related field',
        '6+ years in cloud architecture',
        'AWS/Azure/GCP certifications',
        'Experience with DevOps practices'
      ],
      benefits: ['Competitive salary', 'Training budget', 'Health insurance', 'Remote work']
    },
    {
      id: '5',
      title: 'Product Manager - AI Services',
      department: 'Product',
      location: 'Hybrid / Middletown, DE',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Drive product strategy and roadmap for our AI service offerings.',
      requirements: [
        'MBA or equivalent experience',
        '4+ years in product management',
        'Experience with AI/ML products',
        'Strong analytical skills'
      ],
      benefits: ['Competitive salary', 'Equity package', 'Health insurance', 'Flexible schedule']
    },
    {
      id: '6',
      title: 'DevOps Engineer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Build and maintain CI/CD pipelines and infrastructure automation.',
      requirements: [
        'BS in Computer Science or related field',
        '3+ years in DevOps/SRE',
        'Experience with Kubernetes, Docker',
        'Infrastructure as Code experience'
      ],
      benefits: ['Competitive salary', 'Professional development', 'Health insurance', 'Remote work']
    }
  ];

  const departments = ['all', 'Engineering', 'Security', 'Research', 'Product', 'Sales', 'Marketing'];
  const locations = ['all', 'Remote', 'On-site / Middletown, DE', 'Hybrid / Middletown, DE'];

  const filteredJobs = jobOpenings.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment = selectedDepartment === 'all' || job.department === selectedDepartment;
    const matchesLocation = selectedLocation === 'all' || job.location === selectedLocation;
    return matchesSearch && matchesDepartment && matchesLocation;
  });

  const companyBenefits = [
    { icon: Heart, title: 'Health & Wellness', description: 'Comprehensive health insurance and wellness programs' },
    { icon: GraduationCap, title: 'Learning & Development', description: 'Continuous learning opportunities and skill development' },
    { icon: Coffee, title: 'Work-Life Balance', description: 'Flexible schedules and remote work options' },
    { icon: Rocket, title: 'Innovation Culture', description: 'Work on cutting-edge technology and innovative projects' },
    { icon: Users2, title: 'Collaborative Team', description: 'Work with talented professionals from diverse backgrounds' },
    { icon: TrendingUp, title: 'Career Growth', description: 'Clear career progression paths and promotion opportunities' }
  ];

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
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Join Our
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 block">
              Innovation Team
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Be part of a revolutionary team that's shaping the future of technology. 
            Build your career while solving tomorrow's challenges today.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>{contactInfo.mobile}</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>{contactInfo.email}</span>
            </div>
            <div className="flex items-center gap-2">
              <Building className="w-4 h-4" />
              <span>Middletown, DE & Remote</span>
            </div>
          </div>
        </motion.div>

        {/* Company Benefits */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Why Work at Zion Tech Group?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {companyBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300"
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Job Search and Filters */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            Open Positions
          </h2>
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search positions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                />
              </div>
              <select
                value={selectedDepartment}
                onChange={(e) => setSelectedDepartment(e.target.value)}
                className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
              >
                {departments.map(dept => (
                  <option key={dept} value={dept} className="bg-slate-800">
                    {dept === 'all' ? 'All Departments' : dept}
                  </option>
                ))}
              </select>
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
              >
                {locations.map(loc => (
                  <option key={loc} value={loc} className="bg-slate-800">
                    {loc === 'all' ? 'All Locations' : loc}
                  </option>
                ))}
              </select>
              <div className="text-center text-gray-300">
                {filteredJobs.length} positions found
              </div>
            </div>
          </div>
        </motion.section>

        {/* Job Listings */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="space-y-6"
        >
          {filteredJobs.map((job, index) => (
            <motion.div
              key={job.id}
              className="bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 hover:border-cyan-400/50 transition-all duration-300 overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div
                className="p-6 cursor-pointer"
                onClick={() => setExpandedJob(expandedJob === job.id ? null : job.id)}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h3 className="text-xl font-semibold text-white">{job.title}</h3>
                      <span className="px-3 py-1 bg-cyan-400/20 text-cyan-400 rounded-full text-sm">
                        {job.department}
                      </span>
                      <span className="px-3 py-1 bg-blue-400/20 text-blue-400 rounded-full text-sm">
                        {job.type}
                      </span>
                    </div>
                    <p className="text-gray-300 mb-3">{job.description}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                      <div className="flex items-center gap-1">
                        <Building className="w-4 h-4" />
                        {job.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <GraduationCap className="w-4 h-4" />
                        {job.experience}
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <motion.button
                      className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-2 rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 flex items-center gap-2"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {expandedJob === job.id ? 'Collapse' : 'View Details'}
                      <ArrowRight className={`w-4 h-4 transition-transform ${expandedJob === job.id ? 'rotate-90' : ''}`} />
                    </motion.button>
                  </div>
                </div>
              </div>

              {/* Expanded Job Details */}
              {expandedJob === job.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="border-t border-white/20 p-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Requirements</h4>
                      <ul className="space-y-2">
                        {job.requirements.map((req, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Benefits</h4>
                      <ul className="space-y-2">
                        {job.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-gray-300">
                            <Heart className="w-4 h-4 text-pink-400 mt-0.5 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="mt-6 flex flex-wrap gap-4">
                    <a
                      href={`mailto:${contactInfo.email}?subject=Application for ${job.title}&body=Dear Zion Tech Group Team,%0D%0A%0D%0AI am interested in applying for the ${job.title} position.`}
                      className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-2 rounded-lg hover:from-green-600 hover:to-green-700 transition-all duration-200 flex items-center gap-2"
                    >
                      <Mail className="w-4 h-4" />
                      Apply Now
                    </a>
                    <a
                      href={`tel:${contactInfo.mobile}`}
                      className="border border-cyan-400 text-cyan-400 px-6 py-2 rounded-lg hover:bg-cyan-400/10 transition-all duration-200 flex items-center gap-2"
                    >
                      <Phone className="w-4 h-4" />
                      Call to Discuss
                    </a>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.section>

        {/* No jobs found message */}
        {filteredJobs.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-semibold text-white mb-4">
                No positions found
              </h3>
              <p className="text-gray-300 mb-6">
                Try adjusting your search criteria or check back later for new opportunities.
              </p>
              <a
                href={`mailto:${contactInfo.email}?subject=Future Opportunities&body=Dear Zion Tech Group Team,%0D%0A%0D%0AI am interested in future opportunities at your company.`}
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-200 inline-flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                Get Notified of Future Openings
              </a>
            </div>
          </motion.div>
        )}

        {/* Contact Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-lg rounded-xl p-8 border border-cyan-400/30">
            <h2 className="text-3xl font-bold text-white mb-4">
              Don't See the Right Role?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              We're always looking for exceptional talent. Send us your resume and let us know 
              how you'd like to contribute to our mission of technological innovation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={`mailto:${contactInfo.email}?subject=General Application&body=Dear Zion Tech Group Team,%0D%0A%0D%0AI am interested in opportunities at your company.`}
                className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-3 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 flex items-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Send Your Resume
              </a>
              <a
                href={`tel:${contactInfo.mobile}`}
                className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-medium hover:bg-cyan-400/10 transition-all duration-200 flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call Us
              </a>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}