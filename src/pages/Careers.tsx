import React, { useState } from 'react';
import { motion } from 'framer-motion';
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
  ChevronDown,
  Building,
  Rocket,
  Cpu,
  Lock,
  Network,
  Smartphone,
  Code,
  BarChart3,
  PenTool,
  Eye,
  Server,
  TrendingUp,
  Star
} from 'lucide-react';

export default function Careers() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [expandedJob, setExpandedJob] = useState<any>(null);

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
    { id: 'san-francisco', name: 'San Francisco, CA', count: 3 },
    { id: 'new-york', name: 'New York, NY', count: 1 }
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
        'Experience with MLOps and model deployment',
        'Strong problem-solving and communication skills'
      ],
      benefits: [
        'Competitive salary and equity',
        'Comprehensive health, dental, and vision insurance',
        'Flexible work arrangements',
        'Professional development opportunities',
        'Cutting-edge technology exposure'
      ]
    },
    {
      id: 'ai-research-scientist',
      title: 'AI Research Scientist',
      department: 'engineering',
      location: 'Remote / San Francisco, CA',
      type: 'Full-time',
      salary: '$140,000 - $200,000',
      experience: '7+ years',
      description: 'Lead groundbreaking research in artificial intelligence and machine learning.',
      requirements: [
        'PhD in Computer Science, AI, or related field',
        'Published research in top-tier AI conferences',
        'Experience with large language models',
        'Strong mathematical and statistical background',
        'Ability to translate research into practical solutions'
      ],
      benefits: [
        'Competitive salary and equity',
        'Research publication support',
        'Conference attendance opportunities',
        'Collaboration with leading AI researchers',
        'Flexible work arrangements'
      ]
    },
    {
      id: 'cybersecurity-engineer',
      title: 'Cybersecurity Engineer',
      department: 'engineering',
      location: 'Remote',
      type: 'Full-time',
      salary: '$100,000 - $150,000',
      experience: '3+ years',
      description: 'Protect our systems and data with advanced security solutions.',
      requirements: [
        'Experience with security frameworks and compliance',
        'Knowledge of network security and encryption',
        'Familiarity with security tools and technologies',
        'Understanding of threat modeling and risk assessment',
        'Security certifications (CISSP, CEH, etc.) preferred'
      ],
      benefits: [
        'Competitive salary and equity',
        'Security training and certification support',
        'Work with cutting-edge security technologies',
        'Remote work flexibility',
        'Professional development opportunities'
      ]
    },
    {
      id: 'cloud-architect',
      title: 'Cloud Solutions Architect',
      department: 'engineering',
      location: 'Remote / New York, NY',
      type: 'Full-time',
      salary: '$130,000 - $180,000',
      experience: '5+ years',
      description: 'Design and implement scalable cloud solutions for enterprise clients.',
      requirements: [
        'Expertise in AWS, Azure, and/or GCP',
        'Experience with containerization and orchestration',
        'Knowledge of infrastructure as code',
        'Understanding of microservices architecture',
        'Strong communication and client interaction skills'
      ],
      benefits: [
        'Competitive salary and equity',
        'Cloud certification support',
        'Exposure to diverse client environments',
        'Remote work flexibility',
        'Professional development opportunities'
      ]
    },
    {
      id: 'sales-director',
      title: 'Sales Director',
      department: 'sales',
      location: 'Remote / San Francisco, CA',
      type: 'Full-time',
      salary: '$120,000 - $180,000 + Commission',
      experience: '8+ years',
      description: 'Lead our sales team and drive revenue growth in the AI and technology space.',
      requirements: [
        'Proven track record in B2B technology sales',
        'Experience selling AI and enterprise software solutions',
        'Strong leadership and team management skills',
        'Understanding of enterprise sales cycles',
        'Excellent communication and presentation skills'
      ],
      benefits: [
        'Competitive base salary and commission structure',
        'Leadership development opportunities',
        'Exposure to cutting-edge AI technologies',
        'Remote work flexibility',
        'Performance-based bonuses'
      ]
    },
    {
      id: 'marketing-manager',
      title: 'Marketing Manager',
      department: 'marketing',
      location: 'Remote',
      type: 'Full-time',
      salary: '$80,000 - $120,000',
      experience: '4+ years',
      description: 'Develop and execute marketing strategies to promote our AI solutions.',
      requirements: [
        'Experience in B2B technology marketing',
        'Knowledge of digital marketing channels',
        'Experience with marketing automation tools',
        'Strong analytical and creative skills',
        'Understanding of AI and technology markets'
      ],
      benefits: [
        'Competitive salary and equity',
        'Creative freedom and innovation opportunities',
        'Exposure to cutting-edge AI technologies',
        'Remote work flexibility',
        'Professional development opportunities'
      ]
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
    <>
      <SEO 
        title="Careers - Zion Tech Group"
        description="Join our team of AI experts and technology innovators. Explore exciting career opportunities at Zion Tech Group."
        keywords="careers, jobs, AI engineer, cybersecurity, cloud architect, sales, marketing, Zion Tech Group"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
        {/* Hero Section */}
        <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="relative max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Join Our{' '}
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Innovation Team
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Help us shape the future of AI and technology. Work with cutting-edge solutions, 
                collaborate with brilliant minds, and make a real impact on the world.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#open-positions"
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  View Open Positions
                </a>
                <a
                  href="/about"
                  className="border-2 border-white text-white font-semibold py-4 px-8 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300"
                >
                  Learn About Us
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Why Work With Us */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Work With Zion Tech Group?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We're not just another tech company. We're a team of innovators, problem-solvers, 
                and visionaries working to transform industries through AI and technology.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Brain,
                  title: 'Cutting-Edge AI',
                  description: 'Work with the latest AI technologies and contribute to groundbreaking research and development.'
                },
                {
                  icon: Rocket,
                  title: 'Innovation Culture',
                  description: 'Be part of a culture that encourages creativity, experimentation, and pushing boundaries.'
                },
                {
                  icon: Users,
                  title: 'Brilliant Team',
                  description: 'Collaborate with experts in AI, cybersecurity, cloud computing, and emerging technologies.'
                },
                {
                  icon: Globe,
                  title: 'Global Impact',
                  description: 'Your work will help transform businesses and industries around the world.'
                },
                {
                  icon: Heart,
                  title: 'Work-Life Balance',
                  description: 'Flexible work arrangements and a supportive environment that values your well-being.'
                },
                {
                  icon: Award,
                  title: 'Growth Opportunities',
                  description: 'Continuous learning, skill development, and career advancement in a fast-growing company.'
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-cyan-400/50 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mb-6">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section id="open-positions" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Open Positions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover opportunities that match your skills and passion. Join us in building the future of technology.
              </p>
            </motion.div>

            {/* Search and Filters */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 mb-8"
            >
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-white font-medium mb-2">Search Jobs</label>
                  <input
                    type="text"
                    placeholder="Search by title, skills, or keywords..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-white font-medium mb-2">Department</label>
                  <select
                    value={selectedDepartment}
                    onChange={(e) => setSelectedDepartment(e.target.value)}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-cyan-400 transition-colors"
                  >
                    {departments.map(dept => (
                      <option key={dept.id} value={dept.id} className="bg-slate-800 text-white">
                        {dept.name} ({dept.count})
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-white font-medium mb-2">Location</label>
                  <select
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-cyan-400 transition-colors"
                  >
                    {locations.map(loc => (
                      <option key={loc.id} value={loc.id} className="bg-slate-800 text-white">
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
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:border-cyan-400/50 transition-all duration-300"
                >
                  <div className="p-6">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-4">
                          <h3 className="text-2xl font-bold text-white">{job.title}</h3>
                          <button
                            onClick={() => toggleJobExpansion(job.id)}
                            className="lg:hidden p-2 text-gray-400 hover:text-white transition-colors"
                          >
                            <ChevronDown className={`w-5 h-5 transition-transform ${expandedJob === job.id ? 'rotate-180' : ''}`} />
                          </button>
                        </div>
                        
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                          <div className="flex items-center gap-2 text-gray-300">
                            <Briefcase className="w-4 h-4" />
                            <span>{job.department}</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-300">
                            <MapPin className="w-4 h-4" />
                            <span>{job.location}</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-300">
                            <Clock className="w-4 h-4" />
                            <span>{job.type}</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-300">
                            <DollarSign className="w-4 h-4" />
                            <span>{job.salary}</span>
                          </div>
                        </div>

                        <p className="text-gray-300 mb-4">{job.description}</p>

                        {expandedJob === job.id && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="space-y-6"
                          >
                            <div>
                              <h4 className="text-lg font-semibold text-white mb-3">Requirements</h4>
                              <ul className="space-y-2">
                                {job.requirements.map((req, idx) => (
                                  <li key={idx} className="flex items-start gap-2 text-gray-300">
                                    <CheckCircle className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                                    <span>{req}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div>
                              <h4 className="text-lg font-semibold text-white mb-3">Benefits</h4>
                              <ul className="space-y-2">
                                {job.benefits.map((benefit, idx) => (
                                  <li key={idx} className="flex items-start gap-2 text-gray-300">
                                    <Star className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                                    <span>{benefit}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div className="pt-4 border-t border-white/20">
                              <a
                                href={`mailto:careers@ziontechgroup.com?subject=Application for ${job.title}`}
                                className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
                              >
                                Apply Now
                                <ArrowRight className="w-4 h-4" />
                              </a>
                            </div>
                          </motion.div>
                        )}
                      </div>

                      <div className="lg:flex lg:flex-col lg:items-end lg:gap-4">
                        <button
                          onClick={() => toggleJobExpansion(job.id)}
                          className="hidden lg:flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                        >
                          {expandedJob === job.id ? 'Show Less' : 'View Details'}
                          <ChevronDown className={`w-4 h-4 transition-transform ${expandedJob === job.id ? 'rotate-180' : ''}`} />
                        </button>
                        
                        <a
                          href={`mailto:careers@ziontechgroup.com?subject=Application for ${job.title}`}
                          className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
                        >
                          Apply Now
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {filteredJobs.length === 0 && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center py-16"
              >
                <div className="text-gray-400 text-xl mb-4">No positions found matching your criteria</div>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedDepartment('all');
                    setSelectedLocation('all');
                  }}
                  className="text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  Clear all filters
                </button>
              </motion.div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Don't See the Right Fit?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                We're always looking for talented individuals to join our team. Send us your resume 
                and let's discuss how you can contribute to our mission.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:careers@ziontechgroup.com?subject=General Application"
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  Send Resume
                </a>
                <a
                  href="/contact"
                  className="border-2 border-white text-white font-semibold py-4 px-8 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300"
                >
                  Get in Touch
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
