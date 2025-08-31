import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SEO } from '@/components/SEO';
import {
  Briefcase,
  Users,
  Globe,
  Zap,
  Heart,
  Award,
  ArrowRight,
  MapPin,
  Clock,
  DollarSign,
  Brain,
  Shield,
  Cloud,
  Database,
  Target,
  CheckCircle,
  Mail,
  Phone,
  ExternalLink,
  Star,
  Lightbulb,
  Rocket,
  Code,
  BarChart3,
  Server,
  Network,
  BarChart,
  PieChart,
  LineChart,
  Calendar,
  Settings,
  Tool,
  Home,
  Building,
  Car,
  Truck,
  Plane,
  Ship,
  Leaf,
  Gauge,
  ShieldAlert,
  UserCheck,
  Users2,
  UserPlus,
  UserMinus,
  UserX,
  UserCog,
  UserEdit,
  UserSearch,
  UserVoice,
  UserCheck2,
  UserClock,
  UserStar,
  UserHeart,
  UserShield,
  UserZap,
  UserTrendingUp,
  UserTrendingDown,
  UserPlus2,
  UserMinus2,
  UserX2,
  UserCog2,
  UserEdit2,
  UserSearch2,
  UserVoice2,
  UserCheck3,
  UserClock2,
  UserStar2,
  UserHeart2,
  UserShield2,
  UserZap2,
  UserTrendingUp2,
  UserTrendingDown2
} from 'lucide-react';

const Careers: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [expandedJob, setExpandedJob] = useState<string | null>(null);

  const departments = [
    { id: 'all', name: 'All Departments', count: 12 },
    { id: 'engineering', name: 'Engineering', count: 5 },
    { id: 'sales', name: 'Sales & Business Development', count: 3 },
    { id: 'marketing', name: 'Marketing', count: 2 },
    { id: 'operations', name: 'Operations', count: 2 }
  ];

  const locations = [
    { id: 'all', name: 'All Locations', count: 12 },
    { id: 'remote', name: 'Remote', count: 8 },
    { id: 'san-francisco', name: 'San Francisco, CA', count: 2 },
    { id: 'new-york', name: 'New York, NY', count: 1 },
    { id: 'middletown', name: 'Middletown, DE', count: 1 }
  ];

  const jobListings = [
    {
      id: 'senior-ai-engineer',
      title: 'Senior AI Engineer',
      department: 'engineering',
      location: 'Remote / San Francisco, CA',
      type: 'Full-time',
      salary: '$120,000 - $180,000',
      experience: '5+ years',
      description: 'Join our AI team to develop cutting-edge machine learning solutions and autonomous systems.',
      requirements: [
        'Strong background in machine learning and deep learning',
        'Experience with Python, TensorFlow, and PyTorch',
        'Knowledge of cloud platforms (AWS, Azure, GCP)',
        'Experience with large-scale data processing',
        'Excellent problem-solving and communication skills'
      ],
      benefits: [
        'Competitive salary and equity package',
        'Flexible work arrangements',
        'Professional development opportunities',
        'Health, dental, and vision insurance',
        '401(k) with company match'
      ]
    },
    {
      id: 'cloud-architect',
      title: 'Cloud Solutions Architect',
      department: 'engineering',
      location: 'Remote',
      type: 'Full-time',
      salary: '$130,000 - $190,000',
      experience: '7+ years',
      description: 'Design and implement scalable cloud infrastructure solutions for enterprise clients.',
      requirements: [
        'Expert knowledge of AWS, Azure, and Google Cloud',
        'Experience with containerization (Docker, Kubernetes)',
        'Strong understanding of microservices architecture',
        'Experience with infrastructure as code (Terraform, CloudFormation)',
        'Excellent client-facing and presentation skills'
      ],
      benefits: [
        'Competitive salary and equity package',
        'Remote work flexibility',
        'Latest technology and tools',
        'Comprehensive benefits package',
        'Professional certification support'
      ]
    },
    {
      id: 'cybersecurity-specialist',
      title: 'Cybersecurity Specialist',
      department: 'engineering',
      location: 'Remote / New York, NY',
      type: 'Full-time',
      salary: '$100,000 - $150,000',
      experience: '4+ years',
      description: 'Protect our clients\' digital assets and infrastructure from cyber threats.',
      requirements: [
        'Experience with security tools and frameworks',
        'Knowledge of penetration testing and vulnerability assessment',
        'Understanding of compliance standards (SOC 2, ISO 27001)',
        'Experience with incident response and threat hunting',
        'Relevant certifications (CISSP, CEH, etc.)'
      ],
      benefits: [
        'Competitive salary and benefits',
        'Continuous learning opportunities',
        'Cutting-edge security tools',
        'Professional development budget',
        'Flexible work arrangements'
      ]
    },
    {
      id: 'sales-director',
      title: 'Sales Director',
      department: 'sales',
      location: 'Remote / San Francisco, CA',
      type: 'Full-time',
      salary: '$140,000 - $200,000 + Commission',
      experience: '8+ years',
      description: 'Lead our sales team and drive revenue growth through strategic partnerships.',
      requirements: [
        'Proven track record in B2B technology sales',
        'Experience managing sales teams',
        'Strong understanding of AI and cloud technologies',
        'Excellent negotiation and relationship-building skills',
        'Experience with CRM systems and sales processes'
      ],
      benefits: [
        'Competitive base salary plus commission',
        'Unlimited earning potential',
        'Professional development opportunities',
        'Comprehensive benefits package',
        'Performance-based bonuses'
      ]
    },
    {
      id: 'marketing-manager',
      title: 'Marketing Manager',
      department: 'marketing',
      location: 'Remote',
      type: 'Full-time',
      salary: '$90,000 - $130,000',
      experience: '5+ years',
      description: 'Develop and execute marketing strategies to promote our AI solutions.',
      requirements: [
        'Experience in B2B technology marketing',
        'Knowledge of digital marketing channels',
        'Experience with marketing automation tools',
        'Strong analytical and creative skills',
        'Experience with content marketing and SEO'
      ],
      benefits: [
        'Competitive salary and benefits',
        'Creative freedom and autonomy',
        'Professional development opportunities',
        'Flexible work arrangements',
        'Performance-based bonuses'
      ]
    },
    {
      id: 'operations-manager',
      title: 'Operations Manager',
      department: 'operations',
      location: 'Middletown, DE',
      type: 'Full-time',
      salary: '$80,000 - $120,000',
      experience: '6+ years',
      description: 'Oversee day-to-day operations and ensure smooth service delivery.',
      requirements: [
        'Experience in technology operations management',
        'Strong project management skills',
        'Experience with process improvement',
        'Excellent organizational and leadership skills',
        'Knowledge of IT service management frameworks'
      ],
      benefits: [
        'Competitive salary and benefits',
        'Leadership development opportunities',
        'Comprehensive benefits package',
        'Professional development budget',
        'Performance-based bonuses'
      ]
    }
  ];

  const companyValues = [
    {
      value: 'Innovation',
      description: 'We push the boundaries of what\'s possible with AI and technology',
      icon: Lightbulb
    },
    {
      value: 'Excellence',
      description: 'We strive for excellence in everything we do',
      icon: Star
    },
    {
      value: 'Collaboration',
      description: 'We believe in the power of teamwork and diverse perspectives',
      icon: Users
    },
    {
      value: 'Integrity',
      description: 'We operate with honesty, transparency, and ethical practices',
      icon: Shield
    }
  ];

  const benefits = [
    {
      title: 'Health & Wellness',
      description: 'Comprehensive health, dental, and vision insurance',
      icon: Heart
    },
    {
      title: 'Professional Growth',
      description: 'Continuous learning and career development opportunities',
      icon: Brain
    },
    {
      title: 'Work-Life Balance',
      description: 'Flexible work arrangements and generous time off',
      icon: Clock
    },
    {
      title: 'Financial Security',
      description: 'Competitive salary, equity, and 401(k) with company match',
      icon: DollarSign
    }
  ];

  const filteredJobs = jobListings.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment = selectedDepartment === 'all' || job.department === selectedDepartment;
    const matchesLocation = selectedLocation === 'all' || job.location.toLowerCase().includes(selectedLocation);
    
    return matchesSearch && matchesDepartment && matchesLocation;
  });

  const toggleJobExpansion = (jobId: string) => {
    setExpandedJob(expandedJob === jobId ? null : jobId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO
        title="Careers - Zion Tech Group"
        description="Join Zion Tech Group's team of innovators. Explore exciting career opportunities in AI, cloud computing, cybersecurity, and digital transformation."
        keywords="careers, jobs, employment, Zion Tech Group, AI jobs, technology careers, remote work"
      />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, currentColor 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Join Our Team
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Be part of a team that's shaping the future of AI and technology. 
              We're looking for passionate individuals who want to make a difference.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Values */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Our Values</h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              These core values guide everything we do and shape our company culture.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {companyValues.map((value, index) => (
              <motion.div
                key={value.value}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-600/20 text-center"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{value.value}</h3>
                <p className="text-gray-300 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Why Work With Us</h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              We offer comprehensive benefits and a supportive work environment to help you thrive.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-600/20"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                    <benefit.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white">{benefit.title}</h3>
                </div>
                <p className="text-gray-300 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Search */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Open Positions</h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Find the perfect role that matches your skills and career goals.
            </p>
          </motion.div>

          {/* Search and Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-600/20 mb-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Search Jobs</label>
                <input
                  type="text"
                  placeholder="Search by title or keywords..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-2 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Department</label>
                <select
                  value={selectedDepartment}
                  onChange={(e) => setSelectedDepartment(e.target.value)}
                  className="w-full px-4 py-2 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {departments.map(dept => (
                    <option key={dept.id} value={dept.id}>
                      {dept.name} ({dept.count})
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Location</label>
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="w-full px-4 py-2 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {locations.map(loc => (
                    <option key={loc.id} value={loc.id}>
                      {loc.name} ({loc.count})
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </motion.div>

          {/* Job Listings */}
          <div className="space-y-6">
            {filteredJobs.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
                className="bg-slate-800/80 backdrop-blur-sm rounded-2xl border border-slate-600/20 overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">{job.title}</h3>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-300 mb-4">
                        <div className="flex items-center gap-2">
                          <Briefcase className="w-4 h-4" />
                          <span>{job.department}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          <span>{job.type}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <DollarSign className="w-4 h-4" />
                          <span>{job.salary}</span>
                        </div>
                      </div>
                      <p className="text-gray-300 text-sm">{job.description}</p>
                    </div>
                    <button
                      onClick={() => toggleJobExpansion(job.id)}
                      className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
                    >
                      {expandedJob === job.id ? 'Hide Details' : 'View Details'}
                    </button>
                  </div>

                  {expandedJob === job.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-6 pt-6 border-t border-slate-600/20"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-3">Requirements</h4>
                          <ul className="space-y-2">
                            {job.requirements.map((req, reqIndex) => (
                              <li key={reqIndex} className="flex items-start gap-2">
                                <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-300 text-sm">{req}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-3">Benefits</h4>
                          <ul className="space-y-2">
                            {job.benefits.map((benefit, benefitIndex) => (
                              <li key={benefitIndex} className="flex items-start gap-2">
                                <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-300 text-sm">{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div className="mt-6 flex flex-col sm:flex-row gap-4">
                        <a
                          href={`mailto:careers@ziontechgroup.com?subject=Application for ${job.title}`}
                          className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
                        >
                          <Mail className="w-4 h-4 mr-2" />
                          Apply Now
                        </a>
                        <Link
                          to="/contact"
                          className="inline-flex items-center justify-center px-6 py-3 border border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white font-semibold rounded-lg transition-colors"
                        >
                          <Phone className="w-4 h-4 mr-2" />
                          Contact Us
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {filteredJobs.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="text-center py-12"
            >
              <p className="text-gray-300 text-lg">No positions match your current filters.</p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedDepartment('all');
                  setSelectedLocation('all');
                }}
                className="mt-4 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
              >
                Clear Filters
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.6 }}
            className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl p-8 text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Don't See the Right Fit?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals to join our team. 
              Send us your resume and let's discuss how you can contribute to our mission.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:careers@ziontechgroup.com?subject=General Application"
                className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors"
              >
                <Mail className="w-5 h-5 mr-2" />
                Send Resume
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-xl transition-colors"
              >
                <Phone className="w-5 h-5 mr-2" />
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
