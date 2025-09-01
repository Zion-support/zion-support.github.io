import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Briefcase, 
  Users, 
  MapPin, 
  Clock, 
  Star, 
  Award, 
  Heart, 
  Zap, 
  Brain, 
  Cloud, 
  Shield, 
  Cpu, 
  Network, 
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
  ExternalLink,
  Filter,
  Search,
  Grid,
  List
} from 'lucide-react';
import { SEO } from '../components/SEO';

export const Careers: React.FC = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const departments = [
    {
      id: 'all',
      name: 'All Departments',
      icon: Building,
      color: 'from-blue-600 to-cyan-600',
      count: '25+'
    },
    {
      id: 'ai-services',
      name: 'AI Services',
      icon: Brain,
      color: 'from-purple-600 to-pink-600',
      count: '8+'
    },
    {
      id: 'cloud-devops',
      name: 'Cloud & DevOps',
      icon: Cloud,
      color: 'from-green-600 to-emerald-600',
      count: '6+'
    },
    {
      id: 'security',
      name: 'Security',
      icon: Shield,
      color: 'from-red-600 to-orange-600',
      count: '5+'
    },
    {
      id: 'quantum',
      name: 'Quantum Tech',
      icon: Cpu,
      color: 'from-indigo-600 to-purple-600',
      count: '3+'
    },
    {
      id: 'iot-edge',
      name: 'IoT & Edge',
      icon: Network,
      color: 'from-yellow-600 to-orange-600',
      count: '3+'
    }
  ];

  const locations = [
    { id: 'all', name: 'All Locations', count: '25+' },
    { id: 'remote', name: 'Remote', count: '15+' },
    { id: 'new-york', name: 'New York, NY', count: '5+' },
    { id: 'san-francisco', name: 'San Francisco, CA', count: '3+' },
    { id: 'boston', name: 'Boston, MA', count: '2+' }
  ];

  const jobTypes = [
    { id: 'all', name: 'All Types', count: '25+' },
    { id: 'full-time', name: 'Full Time', count: '18+' },
    { id: 'part-time', name: 'Part Time', count: '3+' },
    { id: 'contract', name: 'Contract', count: '4+' }
  ];

  const openPositions = [
    {
      title: 'Senior AI Solutions Architect',
      department: 'AI Services',
      location: 'Remote',
      type: 'Full Time',
      experience: '5+ years',
      description: 'Lead the design and implementation of AI solutions for enterprise clients',
      requirements: [
        'Advanced degree in Computer Science, AI, or related field',
        '5+ years experience in AI/ML solution architecture',
        'Expertise in Python, TensorFlow, PyTorch',
        'Experience with cloud platforms (AWS, Azure, GCP)',
        'Strong communication and client-facing skills'
      ],
      benefits: [
        'Competitive salary + equity',
        'Flexible remote work',
        'Professional development budget',
        'Health, dental, vision insurance',
        '401(k) with company match'
      ],
      posted: '2 days ago',
      applications: 45,
      urgent: true,
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      link: '/careers/senior-ai-solutions-architect'
    },
    {
      title: 'Cloud Infrastructure Engineer',
      department: 'Cloud & DevOps',
      location: 'New York, NY',
      type: 'Full Time',
      experience: '3+ years',
      description: 'Build and maintain scalable cloud infrastructure for our global platform',
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        '3+ years experience with AWS, Azure, or GCP',
        'Experience with Terraform, Kubernetes, Docker',
        'Knowledge of CI/CD pipelines and DevOps practices',
        'Strong problem-solving and troubleshooting skills'
      ],
      benefits: [
        'Competitive salary',
        'Hybrid work model',
        'Learning and certification support',
        'Comprehensive benefits package',
        'Team events and activities'
      ],
      posted: '1 week ago',
      applications: 32,
      urgent: false,
      icon: Cloud,
      color: 'from-green-500 to-emerald-500',
      link: '/careers/cloud-infrastructure-engineer'
    },
    {
      title: 'Cybersecurity Specialist',
      department: 'Security',
      location: 'Remote',
      type: 'Full Time',
      experience: '4+ years',
      description: 'Protect our systems and data from cyber threats and vulnerabilities',
      requirements: [
        'Bachelor\'s degree in Cybersecurity, IT, or related field',
        '4+ years experience in cybersecurity',
        'Certifications: CISSP, CISM, or equivalent',
        'Experience with security tools and frameworks',
        'Knowledge of compliance standards (SOC2, ISO27001)'
      ],
      benefits: [
        'Competitive salary + bonus',
        'Remote work flexibility',
        'Security certification support',
        'Health and wellness benefits',
        'Professional development opportunities'
      ],
      posted: '3 days ago',
      applications: 28,
      urgent: true,
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      link: '/careers/cybersecurity-specialist'
    },
    {
      title: 'Quantum Computing Researcher',
      department: 'Quantum Tech',
      location: 'San Francisco, CA',
      type: 'Full Time',
      experience: '2+ years',
      description: 'Research and develop quantum computing algorithms and applications',
      requirements: [
        'PhD in Physics, Computer Science, or related field',
        '2+ years experience in quantum computing research',
        'Experience with Qiskit, Cirq, or similar frameworks',
        'Strong mathematical and analytical skills',
        'Published research in quantum computing'
      ],
      benefits: [
        'Competitive research salary',
        'State-of-the-art quantum lab access',
        'Conference and publication support',
        'Collaboration with leading researchers',
        'Comprehensive benefits package'
      ],
      posted: '2 weeks ago',
      applications: 15,
      urgent: false,
      icon: Cpu,
      color: 'from-indigo-500 to-purple-500',
      link: '/careers/quantum-computing-researcher'
    },
    {
      title: 'IoT Solutions Developer',
      department: 'IoT & Edge',
      location: 'Boston, MA',
      type: 'Full Time',
      experience: '3+ years',
      description: 'Develop innovative IoT solutions for edge computing and smart devices',
      requirements: [
        'Bachelor\'s degree in Computer Science or Engineering',
        '3+ years experience in IoT development',
        'Experience with embedded systems and sensors',
        'Knowledge of edge computing and 5G networks',
        'Programming skills in C++, Python, JavaScript'
      ],
      benefits: [
        'Competitive salary',
        'Hybrid work model',
        'Hardware and development tools provided',
        'Professional development support',
        'Team collaboration opportunities'
      ],
      posted: '1 week ago',
      applications: 22,
      urgent: false,
      icon: Network,
      color: 'from-yellow-500 to-orange-500',
      link: '/careers/iot-solutions-developer'
    },
    {
      title: 'DevOps Engineer',
      department: 'Cloud & DevOps',
      location: 'Remote',
      type: 'Contract',
      experience: '2+ years',
      description: 'Optimize our development and deployment processes',
      requirements: [
        '2+ years experience in DevOps engineering',
        'Experience with CI/CD tools (Jenkins, GitLab CI)',
        'Knowledge of containerization and orchestration',
        'Experience with monitoring and logging tools',
        'Strong scripting skills (Bash, Python)'
      ],
      benefits: [
        'Competitive hourly rate',
        'Remote work flexibility',
        'Project-based learning',
        'Networking opportunities',
        'Potential for full-time conversion'
      ],
      posted: '5 days ago',
      applications: 38,
      urgent: false,
      icon: Cloud,
      color: 'from-green-500 to-emerald-500',
      link: '/careers/devops-engineer'
    }
  ];

  const companyValues = [
    {
      title: 'Innovation First',
      description: 'We push the boundaries of what\'s possible in technology',
      icon: Lightbulb,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Collaboration',
      description: 'Great ideas come from working together and sharing knowledge',
      icon: Users2,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Continuous Learning',
      description: 'We invest in your growth and development',
      icon: GraduationCap,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Impact-Driven',
      description: 'We solve real-world problems that make a difference',
      icon: Target,
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const benefits = [
    {
      title: 'Health & Wellness',
      icon: Heart,
      description: 'Comprehensive health, dental, and vision coverage',
      color: 'from-red-500 to-pink-500'
    },
    {
      title: 'Flexible Work',
      icon: Globe,
      description: 'Remote work options and flexible schedules',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Professional Growth',
      icon: TrendingUp,
      description: 'Learning budgets, certifications, and career development',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Team Culture',
      icon: Users,
      description: 'Collaborative environment with regular team events',
      color: 'from-purple-500 to-pink-500'
    }
  ];

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

  const filteredJobs = () => {
    let jobs = openPositions;
    
    if (selectedDepartment !== 'all') {
      jobs = jobs.filter(job => job.department.toLowerCase().includes(selectedDepartment));
    }
    
    if (selectedLocation !== 'all') {
      jobs = jobs.filter(job => job.location.toLowerCase().includes(selectedLocation));
    }
    
    if (selectedType !== 'all') {
      jobs = jobs.filter(job => job.type.toLowerCase().includes(selectedType));
    }
    
    return jobs;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Careers - Zion Tech Group"
        description="Join our team of innovators and help shape the future of technology. Explore career opportunities at Zion Tech Group."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Join Our
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Innovation Team
              </span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Help us shape the future of technology. Join a team of passionate innovators working on cutting-edge AI, quantum computing, and emerging technologies.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="#open-positions"
                className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
              >
                View Open Positions
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300"
              >
                Contact Recruiting
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Our Values</h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              The principles that guide our work and shape our culture.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {companyValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{value.title}</h3>
                <p className="text-slate-300 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Why Work With Us</h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              We invest in our people because they are our greatest asset.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-slate-300 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Life at Zion */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Life at Zion Tech Group</h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Experience our collaborative culture and innovative work environment.
            </p>
          </motion.div>
          
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
        </div>
      </section>

      {/* Open Positions */}
      <section id="open-positions" className="py-16 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Open Positions</h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Find your next opportunity to make an impact in technology.
            </p>
          </motion.div>

          {/* Filters */}
          <div className="mb-8">
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              {departments.map((dept) => (
                <button
                  key={dept.id}
                  onClick={() => setSelectedDepartment(dept.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg border transition-all duration-300 ${
                    selectedDepartment === dept.id
                      ? 'border-cyan-400 bg-cyan-400/20 text-cyan-400'
                      : 'border-slate-600 text-slate-300 hover:border-slate-500 hover:text-white'
                  }`}
                >
                  <dept.icon className="w-4 h-4" />
                  <span>{dept.name}</span>
                  <span className="text-xs bg-slate-700 px-2 py-1 rounded">
                    {dept.count}
                  </span>
                </button>
              ))}
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              {locations.map((location) => (
                <button
                  key={location.id}
                  onClick={() => setSelectedLocation(location.id)}
                  className={`px-4 py-2 rounded-lg border transition-all duration-300 ${
                    selectedLocation === location.id
                      ? 'border-cyan-400 bg-cyan-400/20 text-cyan-400'
                      : 'border-slate-600 text-slate-300 hover:border-slate-500 hover:text-white'
                  }`}
                >
                  {location.name} ({location.count})
                </button>
              ))}
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              {jobTypes.map((type) => (
                <button
                  key={type.id}
                  onClick={() => setSelectedType(type.id)}
                  className={`px-4 py-2 rounded-lg border transition-all duration-300 ${
                    selectedType === type.id
                      ? 'border-cyan-400 bg-cyan-400/20 text-cyan-400'
                      : 'border-slate-600 text-slate-300 hover:border-slate-500 hover:text-white'
                  }`}
                >
                  {type.name} ({type.count})
                </button>
              ))}
            </div>
          </div>

          {/* View Mode Toggle */}
          <div className="flex justify-between items-center mb-6">
            <div className="text-white">
              <span className="text-slate-400">Showing </span>
              <span className="font-semibold">{filteredJobs().length}</span>
              <span className="text-slate-400"> positions</span>
            </div>
            
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'grid' 
                    ? 'bg-cyan-400 text-white' 
                    : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                }`}
              >
                <Grid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'list' 
                    ? 'bg-cyan-400 text-white' 
                    : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                }`}
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>
          
          {/* Job Listings */}
          <div className={`grid gap-6 ${
            viewMode === 'grid' 
              ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
              : 'grid-cols-1'
          }`}>
            {filteredJobs().map((job, index) => (
              <motion.div
                key={job.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Link to={job.link}>
                  <div className={`bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-cyan-400/50 transition-all duration-300 hover:bg-slate-800/70 h-full ${
                    viewMode === 'list' ? 'flex items-start space-x-4' : ''
                  }`}>
                    {job.urgent && (
                      <div className="flex items-center space-x-2 mb-3">
                        <Zap className="w-4 h-4 text-yellow-400" />
                        <span className="text-xs text-yellow-400 font-medium">Urgent Hiring</span>
                      </div>
                    )}
                    
                    <div className={`w-12 h-12 bg-gradient-to-br ${job.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform ${
                      viewMode === 'list' ? 'mb-0 flex-shrink-0' : ''
                    }`}>
                      <job.icon className="w-6 h-6 text-white" />
                    </div>
                    
                    <div className={viewMode === 'list' ? 'flex-1' : ''}>
                      <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                        {job.title}
                      </h3>
                      
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center space-x-2 text-sm text-slate-400">
                          <Building className="w-4 h-4" />
                          <span>{job.department}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-slate-400">
                          <MapPin className="w-4 h-4" />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-slate-400">
                          <Briefcase className="w-4 h-4" />
                          <span>{job.type}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-slate-400">
                          <Clock className="w-4 h-4" />
                          <span>{job.experience}</span>
                        </div>
                      </div>
                      
                      <p className="text-slate-300 text-sm mb-4">{job.description}</p>
                      
                      <div className="flex items-center justify-between text-sm text-slate-400 mb-4">
                        <span>Posted {job.posted}</span>
                        <span>{job.applications} applications</span>
                      </div>
                      
                      <div className="text-cyan-400 group-hover:text-cyan-300 transition-colors">
                        <span className="text-sm font-medium">View Details</span>
                        <ArrowRight className="w-4 h-4 ml-2 inline group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Application Process</h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Our streamlined process to get you started on your journey with us.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: '1',
                title: 'Apply',
                description: 'Submit your application through our portal',
                icon: Mail
              },
              {
                step: '2',
                title: 'Review',
                description: 'Our team reviews your application',
                icon: CheckCircle
              },
              {
                step: '3',
                title: 'Interview',
                description: 'Meet with our team members',
                icon: Users
              },
              {
                step: '4',
                title: 'Offer',
                description: 'Receive and accept your offer',
                icon: Award
              }
            ].map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">{step.step}</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-slate-300 text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-2xl p-8 border border-slate-600 text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Join Our Team?</h2>
            <p className="text-slate-300 max-w-2xl mx-auto mb-8">
              Don't see the perfect role? Send us your resume and we'll keep you in mind for future opportunities.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
              >
                Contact Recruiting
              </Link>
              <Link
                to="/careers/general-application"
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300"
              >
                Submit General Application
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
