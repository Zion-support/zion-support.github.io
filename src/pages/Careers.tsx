import React, { useState } from 'react';
import { motion } from 'framer-motion';

;
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
  Search
} from 'lucide-react';
;
export { function };
export default function Careers(...args: unknown[]): unknown {
  const [searchTerm, setSearchTerm] = useState<typeof ''>('');
  const [selectedDepartment, setSelectedDepartment] = useState<typeof 'all'>('all');
  const [selectedLocation, setSelectedLocation] = useState<typeof 'all'>('all');
  const [expandedJob, setExpandedJob] = useState<string | null>(null);


  const departments = [
    { id: 'all', name: 'All Departments', icon: Briefcase },
    { id: 'engineering', name: 'Engineering', icon: Code },
    { id: 'ai-ml', name: 'AI & Machine Learning', icon: Brain },
    { id: 'sales', name: 'Sales & Business Development', icon: Target },
    { id: 'marketing', name: 'Marketing', icon: Lightbulb },
    { id: 'operations', name: 'Operations', icon: Settings },
    { id: 'design', name: 'Design & UX', icon: Palette },
    { id: 'data', name: 'Data Science', icon: BarChart3 },
    { id: 'security', name: 'Cybersecurity', icon: Shield },
    { id: 'quantum', name: 'Quantum Computing', icon: Atom }
  ];

  const locations = [
    { id: 'all', name: 'All Locations', icon: Globe },
    { id: 'remote', name: 'Remote', icon: Wifi },
    { id: 'middletown', name: 'Middletown, DE', icon: MapPin },
    { id: 'new-york', name: 'New York, NY', icon: MapPin },
    { id: 'san-francisco', name: 'San Francisco, CA', icon: MapPin },
    { id: 'london', name: 'London, UK', icon: MapPin },
    { id: 'singapore', name: 'Singapore', icon: MapPin }
  ];


  const locationFilters = [
    { id: 'all', name: 'All Locations', count: 12 },
    { id: 'remote', name: 'Remote', count: 8 },
    { id: 'middletown', name: 'Middletown, DE', count: 3 },
    { id: 'san-francisco', name: 'San Francisco, CA', count: 1 }
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
      color: 'from-purple-500 to-pink-500'
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
      color: 'from-blue-500 to-cyan-500'
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
      color: 'from-red-500 to-orange-500'
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
      color: 'from-green-500 to-emerald-500'
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
      color: 'from-indigo-500 to-purple-500'
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
      color: 'from-blue-500 to-indigo-500'

    }
  ];

  const filteredJobs = jobListings.filter(job => {

    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment = selectedDepartment === 'all' || job.department === selectedDepartment;
    const matchesLocation = selectedLocation === 'all' || 
                           (selectedLocation === 'remote' && job.location.includes('Remote')) ||
                           (selectedLocation === 'middletown' && job.location.includes('Middletown')) ||
                           (selectedLocation === 'san-francisco' && job.location.includes('San Francisco'));
    
    return matchesSearch && matchesDepartment && matchesLocation;
  });

  const toggleJob = (...args: unknown[]): unknown => {
    setExpandedJob(expandedJob === jobId ? null : jobId);
  };

  return 
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
            Be part of a team that's shaping the future of technology. Work on cutting-edge AI, 
            quantum computing, and cybersecurity solutions that transform businesses worldwide.
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
              onChange={(e setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          </div>

          {/* Filters */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Department Filter */}
            <div>
              <label className="block text-white font-medium mb-3">Department</label>
              <select
                value={selectedDepartment}
                onChange={e: unknown setSelectedDepartment(e.target.value)}
                className="w-full px-4 py-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
              >
                {departments.map(dept: unknown (
                  <option key={dept.id} value={dept.id} className="bg-gray-800 text-white">
                    {dept.name} ({dept.count})
                  </option>
                ))}
              </select>
            </div>

            {/* Location Filter */}
            <div>
              <label className="block text-white font-medium mb-3">Location</label>
              <select
                value={selectedLocation}
                onChange={e: unknown setSelectedLocation(e.target.value)}
                className="w-full px-4 py-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
              >
                {locationFilters.map(loc: unknown (
                  <option key={loc.id} value={loc.id} className="bg-gray-800 text-white">
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
              <h3 className="text-xl font-semibold text-white mb-2">No jobs found</h3>
              <p className="text-gray-400">Try adjusting your search terms or filters.</p>
            </div>
          ) : filteredJobs.map((job: unknown, index: unknown 
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
                      <div className={`w-16 h-16 bg-gradient-to-r ${job.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                        <job.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-2">{job.title}</h3>
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
                      onClick={( toggleJob(job.id)}
                      className="text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      {expandedJob === job.id ? (
                        <ChevronUp className="w-6 h-6" />
                      ) : (
                        <ChevronDown className="w-6 h-6" />
                      )}
                    </button>
                  </div>

                  {/* Job Description */}
                  <p className="text-gray-300 mb-4">{job.description}</p>

                  {/* Expandable Content */}
                  {expandedJob === job.id && 
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
                          {job.requirements.map((req, idx (
                            <li key={idx} className="flex items-start space-x-2 text-gray-300">
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
                          {job.benefits.map(benefit: unknown, idx: unknown (
                            <li key={idx} className="flex items-start space-x-2 text-gray-300">
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
            <h2 className="text-4xl font-bold text-white mb-6">Why Work With Zion Tech Group?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join a team that's passionate about innovation and making a real impact in the world of technology.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Innovation First</h3>
              <p className="text-gray-300">Work on cutting-edge technologies that are shaping the future of business and society.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Global Impact</h3>
              <p className="text-gray-300">Your work will help businesses worldwide transform their operations and achieve their goals.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Rocket className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Career Growth</h3>
              <p className="text-gray-300">Continuous learning opportunities and clear career progression paths for ambitious professionals.</p>
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
            <h2 className="text-3xl font-bold text-white mb-6">Don't See the Right Role?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals to join our team. Send us your resume and let's discuss how you can contribute to our mission.
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

// Missing Search component;
const Search = { className }: { className?: string } (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

// Missing ChevronDown component;
const ChevronDown = { className }: { className?: string } (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
);

// Missing ChevronUp component;
const ChevronUp = { className }: { className?: string } (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
  </svg>
);

