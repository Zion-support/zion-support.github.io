import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { Search, Filter, MapPin, Clock, DollarSign, Users, ArrowRight, ChevronDown, Brain, Cpu, Database, Network, Shield, Rocket, BarChart3, Code, Server, Chip, Globe, Zap, Lock, ShieldCheck, TrendingUp, CheckCircle, Target, Handshake, Lightbulb, Atom, Cloud, Smartphone, Building, Heart, ShoppingCart, Eye, PenTool, Leaf, Satellite, FileText, Sparkles, Tag, BookOpen, MessageCircle, Briefcase, GraduationCap, Award, Star, Coffee, Gamepad2, Palette, Music, Camera, Plane, Car, Home, Wifi, Shield as ShieldIcon, Heart as HeartIcon, Users as UsersIcon, Zap as ZapIcon } from 'lucide-react';

export default function Careers() {
  const [activeDepartment, setActiveDepartment] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('all');

  const departments = [
    { id: 'all', name: 'All Departments', count: 24 },
    { id: 'engineering', name: 'Engineering', count: 12 },
    { id: 'ai-ml', name: 'AI & Machine Learning', count: 6 },
    { id: 'cybersecurity', name: 'Cybersecurity', count: 4 },
    { id: 'data-science', name: 'Data Science', count: 3 },
    { id: 'product', name: 'Product Management', count: 2 },
    { id: 'design', name: 'Design & UX', count: 2 },
    { id: 'sales', name: 'Sales & Business Development', count: 3 },
    { id: 'marketing', name: 'Marketing', count: 2 },
    { id: 'operations', name: 'Operations', count: 2 }
  ];

  const locations = [
    { id: 'all', name: 'All Locations', count: 24 },
    { id: 'remote', name: 'Remote', count: 15 },
    { id: 'new-york', name: 'New York, NY', count: 4 },
    { id: 'san-francisco', name: 'San Francisco, CA', count: 3 },
    { id: 'london', name: 'London, UK', count: 2 }
  ];

  const jobListings = [
    {
      id: 1,
      title: 'Senior Software Engineer - Full Stack',
      department: 'engineering',
      location: 'remote',
      type: 'Full-time',
      experience: '5+ years',
      salary: '$120k - $180k',
      description: 'Build scalable web applications and APIs using modern technologies. Lead technical decisions and mentor junior developers.',
      requirements: [
        'Strong experience with React, Node.js, and TypeScript',
        'Experience with cloud platforms (AWS, Azure, or GCP)',
        'Knowledge of microservices architecture',
        'Experience with CI/CD pipelines and DevOps practices'
      ],
      benefits: [
        'Competitive salary and equity',
        'Flexible remote work options',
        'Comprehensive health coverage',
        'Professional development budget'
      ],
      posted: '2 days ago',
      urgent: true
    },
    {
      id: 2,
      title: 'AI Research Scientist',
      department: 'ai-ml',
      location: 'san-francisco',
      type: 'Full-time',
      experience: '3+ years',
      salary: '$140k - $200k',
      description: 'Research and develop cutting-edge AI algorithms for healthcare, finance, and manufacturing applications.',
      requirements: [
        'PhD in Computer Science, Mathematics, or related field',
        'Strong background in machine learning and deep learning',
        'Experience with PyTorch, TensorFlow, or similar frameworks',
        'Published research in top-tier conferences'
      ],
      benefits: [
        'Competitive salary and equity',
        'Access to cutting-edge computing resources',
        'Conference attendance and publication support',
        'Collaboration with leading researchers'
      ],
      posted: '1 week ago',
      urgent: false
    },
    {
      id: 3,
      title: 'Cybersecurity Engineer',
      department: 'cybersecurity',
      location: 'remote',
      type: 'Full-time',
      experience: '4+ years',
      salary: '$110k - $160k',
      description: 'Design and implement security solutions to protect our infrastructure and customer data.',
      requirements: [
        'Experience with security tools and frameworks',
        'Knowledge of network security and encryption',
        'Experience with compliance frameworks (SOC2, ISO27001)',
        'Familiarity with threat modeling and risk assessment'
      ],
      benefits: [
        'Competitive salary and equity',
        'Remote work flexibility',
        'Security certifications support',
        'Latest security tools and training'
      ],
      posted: '3 days ago',
      urgent: true
    }
  ];

  const filteredJobs = jobListings.filter(job => {
    const matchesDepartment = activeDepartment === 'all' || job.department === activeDepartment;
    const matchesLocation = selectedLocation === 'all' || job.location === selectedLocation;
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         job.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesDepartment && matchesLocation && matchesSearch;
  });

  return (
    <>
      <SEO
        title="Careers - Zion Tech Group"
        description="Join our team of innovators and help shape the future of technology. Explore exciting career opportunities at Zion Tech Group."
        keywords="careers, jobs, employment, Zion Tech Group, technology jobs, AI jobs, cybersecurity jobs"
      />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Join Our{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Mission
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Help us build the future of technology. We're looking for passionate innovators,
              problem solvers, and visionaries to join our growing team.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
              >
                View Open Positions
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-cyan-400/50 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-300"
              >
                Learn About Culture
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 border-b border-slate-700/50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search jobs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/20"
              />
            </div>
            
            {/* Department Filter */}
            <div className="flex flex-wrap gap-2">
              {departments.map((dept) => (
                <button
                  key={dept.id}
                  onClick={() => setActiveDepartment(dept.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all duration-200 ${
                    activeDepartment === dept.id
                      ? 'bg-cyan-500/20 border-cyan-400/50 text-cyan-400'
                      : 'bg-slate-800/50 border-slate-600/50 text-gray-300 hover:border-cyan-400/30 hover:text-cyan-300'
                  }`}
                >
                  <span>{dept.name}</span>
                  <span className="text-xs bg-slate-700/50 px-2 py-1 rounded-full">
                    {dept.count}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid gap-6">
            {filteredJobs.map((job, index) => (
              <motion.article
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-cyan-400/30 transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2">{job.title}</h3>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                          <div className="flex items-center gap-2">
                            <Building className="w-4 h-4" />
                            <span>{departments.find(d => d.id === job.department)?.name}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            <span>{locations.find(l => l.id === job.location)?.name}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            <span>{job.type}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Users className="w-4 h-4" />
                            <span>{job.experience}</span>
                          </div>
                        </div>
                      </div>
                      {job.urgent && (
                        <span className="px-3 py-1 bg-red-500/20 text-red-400 text-xs font-medium rounded-full border border-red-500/30">
                          Urgent
                        </span>
                      )}
                    </div>
                    
                    <p className="text-gray-300 mb-4">{job.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {job.requirements.slice(0, 3).map((req, idx) => (
                        <span key={idx} className="px-3 py-1 bg-slate-700/50 text-gray-300 text-sm rounded-full">
                          {req}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-cyan-400">
                        <DollarSign className="w-4 h-4" />
                        <span className="font-medium">{job.salary}</span>
                      </div>
                      <span className="text-sm text-gray-400">{job.posted}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-3">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center gap-2"
                    >
                      Apply Now
                      <ArrowRight className="w-4 h-4" />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-3 border border-slate-600/50 text-gray-300 font-medium rounded-lg hover:border-cyan-400/30 hover:text-cyan-300 transition-all duration-300"
                    >
                      View Details
                    </motion.button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
          
          {filteredJobs.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="w-24 h-24 bg-slate-700/50 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-2">No jobs found</h3>
              <p className="text-gray-400">Try adjusting your search criteria or check back later for new opportunities.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-16 bg-slate-800/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Why Join Zion Tech Group?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We're building something extraordinary, and we want you to be part of it
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Rocket,
                title: 'Innovation First',
                description: 'Work on cutting-edge technologies that are shaping the future of industries worldwide.'
              },
              {
                icon: Users,
                title: 'Collaborative Culture',
                description: 'Join a team of brilliant minds who believe in the power of collaboration and shared success.'
              },
              {
                icon: Zap,
                title: 'Fast-Paced Growth',
                description: 'Accelerate your career with opportunities to learn, grow, and take on new challenges.'
              },
              {
                icon: Heart,
                title: 'Work-Life Balance',
                description: 'We believe in sustainable productivity and support your well-being both inside and outside work.'
              },
              {
                icon: Globe,
                title: 'Global Impact',
                description: 'Your work will directly impact millions of users and businesses around the world.'
              },
              {
                icon: Star,
                title: 'Recognition & Rewards',
                description: 'We celebrate achievements and provide competitive compensation for your contributions.'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Make a Difference?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              If you don't see a position that matches your skills, we'd still love to hear from you.
              Send us your resume and let's explore opportunities together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
              >
                Send General Application
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-cyan-400/50 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-300"
              >
                Contact Recruiting Team
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}