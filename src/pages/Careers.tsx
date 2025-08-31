import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Briefcase,
  Users,
  Heart,
  Zap,
  Globe,
  Award,
  Mail,
  MapPin,
  Clock,
  DollarSign,
  ChevronDown,
  ArrowRight,
  GraduationCap,
  Code,
  Brain,
  Shield,
  Cloud,
  Database,
  Target,
  CheckCircle,
  Phone,
  ExternalLink,
  Rocket
} from 'lucide-react';

const Careers: React.FC = () => {
  const [expandedJob, setExpandedJob] = useState<any>(null);
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');

  const departments = [
    { id: 'all', name: 'All Departments', icon: Briefcase },
    { id: 'engineering', name: 'Engineering', icon: Code },
    { id: 'ai-ml', name: 'AI & Machine Learning', icon: Brain },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield },
    { id: 'cloud', name: 'Cloud & DevOps', icon: Cloud },
    { id: 'product', name: 'Product Management', icon: Rocket }
  ];

  const jobOpenings = [
    {
      id: 1,
      title: 'Senior Full Stack Developer',
      department: 'engineering',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '5+ years',
      salary: '$120k - $180k',
      description: 'Join our engineering team to build cutting-edge web applications and AI-powered platforms.',
      requirements: [
        'Expertise in React, Node.js, and TypeScript',
        'Experience with cloud platforms (AWS, Azure, GCP)',
        'Knowledge of microservices architecture',
        'Strong problem-solving and communication skills'
      ],
      benefits: [
        'Competitive salary and equity',
        'Flexible remote work options',
        'Health, dental, and vision insurance',
        'Professional development opportunities'
      ]
    },
    {
      id: 2,
      title: 'AI Research Engineer',
      department: 'ai-ml',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '3+ years',
      salary: '$130k - $200k',
      description: 'Work on cutting-edge AI research and development projects.',
      requirements: [
        'PhD in Computer Science, AI, or related field',
        'Experience with PyTorch, TensorFlow, or similar',
        'Strong mathematical and algorithmic skills',
        'Published research in top AI conferences'
      ],
      benefits: [
        'Competitive salary and equity',
        'Research publication support',
        'Conference attendance opportunities',
        'Collaboration with leading AI researchers'
      ]
    },
    {
      id: 3,
      title: 'Cybersecurity Specialist',
      department: 'cybersecurity',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '4+ years',
      salary: '$110k - $170k',
      description: 'Protect our systems and data from cyber threats.',
      requirements: [
        'Certifications: CISSP, CEH, or similar',
        'Experience with security tools and frameworks',
        'Knowledge of threat detection and response',
        'Strong analytical and problem-solving skills'
      ],
      benefits: [
        'Competitive salary and equity',
        'Security certification support',
        'Latest security tools and training',
        'Work with cutting-edge security technologies'
      ]
    }
  ];

  const filteredJobs = jobOpenings.filter(job => {
    const departmentMatch = selectedDepartment === 'all' || job.department === selectedDepartment;
    const locationMatch = selectedLocation === 'all' || job.location.includes(selectedLocation);
    return departmentMatch && locationMatch;
  });

  const toggleJobExpansion = (jobId: number) => {
    setExpandedJob(expandedJob === jobId ? null : jobId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-50 via-white to-zion-50 dark:from-zion-slate-900 dark:via-zion-slate-800 dark:to-zion-slate-900">
      {/* Header */}
      <div className="bg-white dark:bg-zion-slate-800 border-b border-zion-slate-200 dark:border-zion-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-zion-slate-900 dark:text-white mb-6"
          >
            Join Our Team
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-zion-slate-600 dark:text-zion-slate-400 max-w-3xl mx-auto"
          >
            Build the future of technology with us. We're looking for passionate individuals who want to make a difference.
          </motion.p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filters */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-zion-slate-700 dark:text-zion-slate-300 mb-2">
                Department
              </label>
              <select
                value={selectedDepartment}
                onChange={(e) => setSelectedDepartment(e.target.value)}
                className="w-full px-3 py-2 border border-zion-slate-300 dark:border-zion-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-zion-500 focus:border-transparent bg-white dark:bg-zion-slate-700 text-zion-slate-900 dark:text-white"
              >
                {departments.map((dept) => (
                  <option key={dept.id} value={dept.id}>
                    {dept.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-zion-slate-700 dark:text-zion-slate-300 mb-2">
                Location
              </label>
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-full px-3 py-2 border border-zion-slate-300 dark:border-zion-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-zion-500 focus:border-transparent bg-white dark:bg-zion-slate-700 text-zion-slate-900 dark:text-white"
              >
                <option value="all">All Locations</option>
                <option value="Remote">Remote</option>
                <option value="Middletown">Middletown, DE</option>
              </select>
            </div>
          </div>
        </div>

        {/* Job Listings */}
        <div className="space-y-6">
          {filteredJobs.map((job) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white dark:bg-zion-slate-800 rounded-xl shadow-lg border border-zion-slate-200 dark:border-zion-slate-700 overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <span className="px-3 py-1 bg-zion-100 dark:bg-zion-700 text-zion-700 dark:text-zion-300 text-sm font-medium rounded-full">
                        {departments.find(d => d.id === job.department)?.name}
                      </span>
                      <span className="px-3 py-1 bg-green-100 dark:bg-green-700 text-green-700 dark:text-green-300 text-sm font-medium rounded-full">
                        {job.type}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-zion-slate-900 dark:text-white mb-2">
                      {job.title}
                    </h3>
                    <div className="flex items-center space-x-6 text-sm text-zion-slate-600 dark:text-zion-slate-400 mb-4">
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{job.experience}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <DollarSign className="w-4 h-4" />
                        <span>{job.salary}</span>
                      </div>
                    </div>
                    <p className="text-zion-slate-600 dark:text-zion-slate-400 mb-4">
                      {job.description}
                    </p>
                  </div>
                  <button
                    onClick={() => toggleJobExpansion(job.id)}
                    className="ml-4 p-2 hover:bg-zion-slate-100 dark:hover:bg-zion-slate-700 rounded-lg transition-colors"
                  >
                    <ChevronDown
                      className={`w-5 h-5 text-zion-slate-500 transition-transform ${
                        expandedJob === job.id ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                </div>

                {/* Expanded Job Details */}
                {expandedJob === job.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="border-t border-zion-slate-200 dark:border-zion-slate-700 pt-6 mt-6"
                  >
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-zion-slate-900 dark:text-white mb-3">Requirements</h4>
                        <ul className="space-y-2">
                          {job.requirements.map((req, index) => (
                            <li key={index} className="flex items-start space-x-2">
                              <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                              <span className="text-zion-slate-600 dark:text-zion-slate-400">{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-zion-slate-900 dark:text-white mb-3">Benefits</h4>
                        <ul className="space-y-2">
                          {job.benefits.map((benefit, index) => (
                            <li key={index} className="flex items-start space-x-2">
                              <Heart className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                              <span className="text-zion-slate-600 dark:text-zion-slate-400">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="mt-6 flex flex-col sm:flex-row gap-3">
                      <button className="px-6 py-3 bg-zion-500 hover:bg-zion-600 text-white rounded-lg transition-colors flex items-center justify-center space-x-2">
                        <Mail className="w-4 h-4" />
                        <span>Apply Now</span>
                      </button>
                      <button className="px-6 py-3 border border-zion-slate-300 dark:border-zion-slate-600 text-zion-slate-700 dark:text-zion-slate-300 rounded-lg hover:bg-zion-slate-50 dark:hover:bg-zion-slate-700 transition-colors flex items-center justify-center space-x-2">
                        <ExternalLink className="w-4 h-4" />
                        <span>Learn More</span>
                      </button>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* No Jobs Message */}
        {filteredJobs.length === 0 && (
          <div className="text-center py-12">
            <Briefcase className="w-16 h-16 text-zion-slate-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-zion-slate-900 dark:text-white mb-2">
              No positions available
            </h3>
            <p className="text-zion-slate-600 dark:text-zion-slate-400">
              Check back later for new opportunities or send us your resume for future positions.
            </p>
          </div>
        )}

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-16 bg-gradient-to-r from-zion-500 to-zion-600 rounded-2xl p-8 text-center text-white"
        >
          <h3 className="text-2xl font-bold mb-4">
            Don't see a position that fits?
          </h3>
          <p className="text-zion-100 mb-6 max-w-2xl mx-auto">
            We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-white text-zion-600 font-semibold rounded-lg hover:bg-zion-50 transition-colors flex items-center justify-center space-x-2">
              <Mail className="w-4 h-4" />
              <span>Send Resume</span>
            </button>
            <Link
              to="/contact"
              className="px-6 py-3 border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-zion-600 transition-colors flex items-center justify-center space-x-2"
            >
              <Phone className="w-4 h-4" />
              <span>Contact Us</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Careers;
