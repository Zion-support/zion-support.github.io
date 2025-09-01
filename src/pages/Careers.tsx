import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
  Search,
  MapPin,
  Clock,
  DollarSign,
  Star,
  Settings,
  Palette,
  BarChart3,
  Atom,
  Wifi
} from 'lucide-react';

interface JobPosition {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  salary: string;
  experience: string;
  description: string;
  requirements: string[];
  benefits: string[];
  icon: React.ComponentType<any>;
  color: string;
  urgent?: boolean;
  posted: string;
  applications: number;
}

interface Department {
  id: string;
  name: string;
  icon: React.ComponentType<any>;
  count: number;
}

interface Location {
  id: string;
  name: string;
  icon: React.ComponentType<any>;
  count: number;
}

export function Careers() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [expandedJob, setExpandedJob] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const departments: Department[] = [
    { id: 'all', name: 'All Departments', icon: Briefcase, count: 12 },
    { id: 'engineering', name: 'Engineering', icon: Code, count: 6 },
    { id: 'ai-ml', name: 'AI & Machine Learning', icon: Brain, count: 3 },
    { id: 'sales', name: 'Sales & Business Development', icon: Target, count: 2 },
    { id: 'marketing', name: 'Marketing', icon: Lightbulb, count: 1 },
    { id: 'operations', name: 'Operations', icon: Settings, count: 1 },
    { id: 'design', name: 'Design & UX', icon: Palette, count: 1 },
    { id: 'data', name: 'Data Science', icon: BarChart3, count: 1 },
    { id: 'security', name: 'Cybersecurity', icon: Shield, count: 2 },
    { id: 'quantum', name: 'Quantum Computing', icon: Atom, count: 1 },
  ];

  const locations: Location[] = [
    { id: 'all', name: 'All Locations', icon: Globe, count: 12 },
    { id: 'remote', name: 'Remote', icon: Wifi, count: 8 },
    { id: 'middletown', name: 'Middletown, DE', icon: MapPin, count: 3 },
    { id: 'san-francisco', name: 'San Francisco, CA', icon: MapPin, count: 1 },
  ];

  const openPositions: JobPosition[] = [
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
        'Experience with Python, TensorFlow, PyTorch',
        'Knowledge of computer vision and NLP',
        'Experience with cloud platforms (AWS, Azure, GCP)',
        'PhD in Computer Science or related field preferred'
      ],
      benefits: [
        'Competitive salary and equity',
        'Flexible work arrangements',
        'Professional development budget',
        'Health, dental, and vision insurance',
        '401(k) with company match'
      ],
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      urgent: true,
      posted: '2 days ago',
      applications: 45
    },
    {
      id: 'quantum-computing-researcher',
      title: 'Quantum Computing Researcher',
      department: 'engineering',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      salary: '$150,000 - $200,000',
      experience: '3+ years',
      description: 'Research and develop quantum algorithms and quantum machine learning solutions.',
      requirements: [
        'PhD in Physics, Computer Science, or related field',
        'Experience with quantum computing frameworks',
        'Knowledge of quantum algorithms and quantum ML',
        'Strong mathematical and analytical skills',
        'Experience with Qiskit, Cirq, or similar platforms'
      ],
      benefits: [
        'Competitive salary and equity',
        'Research publication support',
        'Conference attendance funding',
        'Collaboration with leading quantum research institutions',
        'Comprehensive benefits package'
      ],
      icon: Zap,
      color: 'from-blue-500 to-cyan-500',
      urgent: false,
      posted: '1 week ago',
      applications: 23
    },
    {
      id: 'cybersecurity-architect',
      title: 'Cybersecurity Architect',
      department: 'engineering',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      salary: '$130,000 - $180,000',
      experience: '7+ years',
      description: 'Design and implement enterprise-grade security solutions for our clients.',
      requirements: [
        'Expertise in security architecture and design',
        'Experience with zero-trust security models',
        'Knowledge of compliance frameworks (SOC 2, ISO 27001)',
        'Experience with cloud security and DevSecOps',
        'CISSP, CISM, or similar certifications preferred'
      ],
      benefits: [
        'Competitive salary and equity',
        'Security certification support',
        'Professional development opportunities',
        'Health and wellness benefits',
        'Flexible work arrangements'
      ],
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      urgent: true,
      posted: '3 days ago',
      applications: 38
    },
    {
      id: 'cloud-infrastructure-engineer',
      title: 'Cloud Infrastructure Engineer',
      department: 'engineering',
      location: 'Remote',
      type: 'Full-time',
      salary: '$110,000 - $160,000',
      experience: '4+ years',
      description: 'Build and maintain scalable cloud infrastructure solutions.',
      requirements: [
        'Experience with AWS, Azure, or Google Cloud',
        'Knowledge of infrastructure as code (Terraform, CloudFormation)',
        'Experience with containerization and Kubernetes',
        'Understanding of DevOps practices and CI/CD',
        'Experience with monitoring and logging tools'
      ],
      benefits: [
        'Competitive salary and equity',
        'Cloud certification support',
        'Professional development budget',
        'Health and dental insurance',
        'Remote work flexibility'
      ],
      icon: Cloud,
      color: 'from-green-500 to-emerald-500',
      urgent: false,
      posted: '1 week ago',
      applications: 29
    },
    {
      id: 'senior-software-engineer',
      title: 'Senior Software Engineer',
      department: 'engineering',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      salary: '$100,000 - $150,000',
      experience: '5+ years',
      description: 'Develop high-quality software solutions using modern technologies and best practices.',
      requirements: [
        'Strong programming skills in multiple languages',
        'Experience with modern web frameworks and APIs',
        'Knowledge of software design patterns and architecture',
        'Experience with testing and quality assurance',
        'Understanding of agile development methodologies'
      ],
      benefits: [
        'Competitive salary and equity',
        'Professional development opportunities',
        'Health and wellness benefits',
        'Flexible work arrangements',
        'Collaborative team environment'
      ],
      icon: Code,
      color: 'from-indigo-500 to-purple-500',
      urgent: false,
      posted: '2 weeks ago',
      applications: 52
    },
    {
      id: 'business-development-manager',
      title: 'Business Development Manager',
      department: 'sales',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      salary: '$80,000 - $120,000 + Commission',
      experience: '3+ years',
      description: 'Drive business growth by identifying and developing strategic partnerships.',
      requirements: [
        'Experience in B2B sales and business development',
        'Knowledge of technology industry and trends',
        'Strong communication and negotiation skills',
        'Experience with CRM systems and sales processes',
        'Ability to build and maintain client relationships'
      ],
      benefits: [
        'Competitive base salary plus commission',
        'Performance-based bonuses',
        'Professional development support',
        'Health and dental insurance',
        'Flexible work arrangements'
      ],
      icon: Users,
      color: 'from-blue-500 to-indigo-500',
      urgent: false,
      posted: '1 week ago',
      applications: 31
    }
  ];

  const filteredJobs = openPositions.filter(job => {
    const matchesSearch = 
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment = 
      selectedDepartment === 'all' || job.department === selectedDepartment;
    const matchesLocation = 
      selectedLocation === 'all' ||
      (selectedLocation === 'remote' && job.location.includes('Remote')) ||
      (selectedLocation === 'middletown' && job.location.includes('Middletown')) ||
      (selectedLocation === 'san-francisco' && job.location.includes('San Francisco'));
    
    return matchesSearch && matchesDepartment && matchesLocation;
  });

  const lifeAtZion = [
    {
      title: 'Modern Office Spaces',
      description: 'Collaborative workspaces designed for innovation',
      image: '🏢',
      category: 'Work Environment'
    },
    {
      title: 'Team Events',
      description: 'Regular team building and social activities',
      image: '🎉',
      category: 'Culture'
    },
    {
      title: 'Learning Sessions',
      description: 'Knowledge sharing and skill development workshops',
      image: '📚',
      category: 'Development'
    },
    {
      title: 'Innovation Labs',
      description: 'Dedicated spaces for experimentation and prototyping',
      image: '🔬',
      category: 'Innovation'
    }
  ];

  const toggleJob = (jobId: string) => {
    setExpandedJob(expandedJob === jobId ? null : jobId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
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
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search job titles, skills, or keywords..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
            />
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
                {locations.map((loc) => (
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
          className="max-w-6xl mx-auto space-y-6"
        >
          {filteredJobs.length === 0 ? (
            <div className="text-center py-16">
              <Briefcase className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">
                No jobs found
              </h3>
              <p className="text-gray-400">
                Try adjusting your search terms or filters.
              </p>
            </div>
          ) : (
            filteredJobs.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="p-6">
                  {/* Job Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start space-x-4">
                      <div
                        className={`w-16 h-16 bg-gradient-to-r ${job.color} rounded-xl flex items-center justify-center flex-shrink-0`}
                      >
                        <job.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-xl font-bold text-white">
                            {job.title}
                          </h3>
                          {job.urgent && (
                            <span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 text-xs rounded-full flex items-center gap-1">
                              <Zap className="w-3 h-3" />
                              Urgent
                            </span>
                          )}
                        </div>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-300">
                          <div className="flex items-center space-x-1">
                            <Briefcase className="w-4 h-4" />
                            <span>{job.department}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MapPin className="w-4 h-4" />
                            <span>{job.location}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="w-4 h-4" />
                            <span>{job.type}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <DollarSign className="w-4 h-4" />
                            <span>{job.salary}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() => toggleJob(job.id)}
                      className="text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      {expandedJob === job.id ? (
                        <ArrowRight className="w-6 h-6 transform rotate-90" />
                      ) : (
                        <ArrowRight className="w-6 h-6" />
                      )}
                    </button>
                  </div>

                  {/* Job Description */}
                  <p className="text-gray-300 mb-4">{job.description}</p>

                  {/* Job Meta */}
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <span>Posted {job.posted}</span>
                    <span>{job.applications} applications</span>
                  </div>

                  {/* Expandable Content */}
                  <AnimatePresence>
                    {expandedJob === job.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="border-t border-white/20 pt-4 space-y-6"
                      >
                        {/* Requirements */}
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                            <CheckCircle className="w-5 h-5 text-cyan-400 mr-2" />
                            Requirements
                          </h4>
                          <ul className="space-y-2">
                            {job.requirements.map((req, idx) => (
                              <li
                                key={idx}
                                className="flex items-start space-x-2 text-gray-300"
                              >
                                <Star className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                                <span>{req}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Benefits */}
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                            <Heart className="w-5 h-5 text-cyan-400 mr-2" />
                            Benefits
                          </h4>
                          <ul className="space-y-2">
                            {job.benefits.map((benefit, idx) => (
                              <li
                                key={idx}
                                className="flex items-start space-x-2 text-gray-300"
                              >
                                <Star className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                                <span>{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Apply Button */}
                        <div className="pt-4">
                          <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-3 px-6 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 transform hover:-translate-y-1 shadow-lg hover:shadow-xl">
                            Apply for this Position
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))
          )}
        </motion.div>

        {/* Why Work With Us */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-6">
              Why Work With Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join a team that's passionate about innovation and making a real
              impact in the world of technology.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {lifeAtZion.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 text-center"
              >
                <div className="text-4xl mb-4">{item.image}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-slate-300 text-sm mb-3">{item.description}</p>
                <span className="inline-block px-3 py-1 bg-slate-700 text-slate-300 text-xs rounded-full">
                  {item.category}
                </span>
              </motion.div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Innovation First
              </h3>
              <p className="text-gray-300">
                Work on cutting-edge technologies that are shaping the future of
                business and society.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Global Impact
              </h3>
              <p className="text-gray-300">
                Your work will help businesses worldwide transform their
                operations and achieve their goals.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Rocket className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Career Growth
              </h3>
              <p className="text-gray-300">
                Continuous learning opportunities and clear career progression
                paths for ambitious professionals.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-lg rounded-2xl p-12 border border-cyan-500/30">
            <h2 className="text-3xl font-bold text-white mb-6">
              Don't See the Right Role?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals to join our team.
              Send us your resume and let's discuss how you can contribute to
              our mission.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8 max-w-2xl mx-auto">
              <div className="flex items-center justify-center space-x-3 text-gray-300">
                <Mail className="w-5 h-5 text-cyan-400" />
                <span>careers@ziontechgroup.com</span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-gray-300">
                <Phone className="w-5 h-5 text-cyan-400" />
                <span>+1 302 464 0950</span>
              </div>
            </div>

            <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 transform hover:-translate-y-1 shadow-lg hover:shadow-xl">
              Send Your Resume
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Careers;