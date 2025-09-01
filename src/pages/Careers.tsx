import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Award, 
  Heart, 
  Zap, 
  Globe, 
  Clock,
  MapPin,
  DollarSign,
  Briefcase,
  GraduationCap,
  Search,
  Filter,
  ArrowRight,
  ChevronRight,
  CheckCircle,
  Star,
  Building,
  Rocket,
  Brain,
  Shield
} from 'lucide-react';

export default function Careers() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');

  const departments = [
    { id: 'all', name: 'All Departments', count: 12 },
    { id: 'engineering', name: 'Engineering', count: 6 },
    { id: 'ai-research', name: 'AI Research', count: 3 },
    { id: 'product', name: 'Product', count: 2 },
    { id: 'sales', name: 'Sales', count: 1 }
  ];

  const locations = [
    { id: 'all', name: 'All Locations', count: 12 },
    { id: 'remote', name: 'Remote', count: 8 },
    { id: 'middletown-de', name: 'Middletown, DE', count: 3 },
    { id: 'new-york', name: 'New York, NY', count: 1 }
  ];

  const jobListings = [
    {
      id: 1,
      title: 'Senior AI Engineer',
      department: 'ai-research',
      location: 'remote',
      type: 'Full-time',
      experience: '5+ years',
      salary: '$120,000 - $180,000',
      description: 'Join our AI research team to develop cutting-edge machine learning models and algorithms.',
      requirements: [
        'PhD in Computer Science, AI, or related field',
        'Experience with PyTorch, TensorFlow, or similar frameworks',
        'Strong background in deep learning and neural networks',
        'Experience with large language models and transformers'
      ],
      benefits: [
        'Competitive salary and equity',
        'Flexible remote work options',
        'Professional development budget',
        'Health, dental, and vision insurance'
      ],
      featured: true
    },
    {
      id: 2,
      title: 'Full Stack Developer',
      department: 'engineering',
      location: 'remote',
      type: 'Full-time',
      experience: '3+ years',
      salary: '$90,000 - $140,000',
      description: 'Build scalable web applications and microservices using modern technologies.',
      requirements: [
        'Strong experience with React, Node.js, and TypeScript',
        'Experience with cloud platforms (AWS, Azure, GCP)',
        'Knowledge of microservices architecture',
        'Experience with CI/CD pipelines'
      ],
      benefits: [
        'Competitive salary and equity',
        'Remote-first culture',
        'Unlimited PTO',
        '401(k) with company match'
      ],
      featured: true
    },
    {
      id: 3,
      title: 'Product Manager',
      department: 'product',
      location: 'middletown-de',
      type: 'Full-time',
      experience: '4+ years',
      salary: '$100,000 - $150,000',
      description: 'Lead product strategy and development for our AI-powered enterprise solutions.',
      requirements: [
        'Experience in B2B SaaS product management',
        'Strong analytical and strategic thinking skills',
        'Experience with AI/ML products preferred',
        'Excellent communication and leadership skills'
      ],
      benefits: [
        'Competitive salary and equity',
        'Hybrid work environment',
        'Professional development opportunities',
        'Comprehensive benefits package'
      ],
      featured: false
    },
    {
      id: 4,
      title: 'DevOps Engineer',
      department: 'engineering',
      location: 'remote',
      type: 'Full-time',
      experience: '3+ years',
      salary: '$95,000 - $145,000',
      description: 'Design and implement scalable infrastructure and deployment pipelines.',
      requirements: [
        'Experience with Kubernetes and Docker',
        'Knowledge of cloud infrastructure (AWS, Azure, GCP)',
        'Experience with Terraform and infrastructure as code',
        'Strong scripting skills (Python, Bash)'
      ],
      benefits: [
        'Competitive salary and equity',
        'Remote work flexibility',
        'Learning and certification budget',
        'Health and wellness benefits'
      ],
      featured: false
    },
    {
      id: 5,
      title: 'AI Research Scientist',
      department: 'ai-research',
      location: 'new-york',
      type: 'Full-time',
      experience: '2+ years',
      salary: '$110,000 - $160,000',
      description: 'Conduct cutting-edge research in artificial intelligence and machine learning.',
      requirements: [
        'PhD in AI, ML, or related field',
        'Strong publication record in top AI conferences',
        'Experience with PyTorch, TensorFlow, or similar',
        'Knowledge of quantum computing preferred'
      ],
      benefits: [
        'Competitive salary and equity',
        'Research budget and resources',
        'Conference and publication support',
        'Collaboration with leading researchers'
      ],
      featured: false
    },
    {
      id: 6,
      title: 'Sales Development Representative',
      department: 'sales',
      location: 'remote',
      type: 'Full-time',
      experience: '1+ years',
      salary: '$60,000 - $80,000 + commission',
      description: 'Generate qualified leads and drive sales growth for our AI solutions.',
      requirements: [
        'Strong communication and interpersonal skills',
        'Experience in B2B sales or lead generation',
        'Knowledge of technology industry preferred',
        'Self-motivated and results-driven'
      ],
      benefits: [
        'Base salary plus uncapped commission',
        'Remote work flexibility',
        'Sales training and development',
        'Performance-based bonuses'
      ],
      featured: false
    }
  ];

  const companyValues = [
    {
      icon: Brain,
      title: 'Innovation First',
      description: 'We push the boundaries of what\'s possible, constantly exploring emerging technologies.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We believe in the power of diverse teams working together to solve complex problems.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Heart,
      title: 'Work-Life Balance',
      description: 'We prioritize your well-being and provide flexible work arrangements.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Rocket,
      title: 'Growth & Learning',
      description: 'Continuous learning and professional development are core to our culture.',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const benefits = [
    {
      icon: DollarSign,
      title: 'Competitive Compensation',
      description: 'Above-market salaries, equity packages, and performance bonuses'
    },
    {
      icon: Globe,
      title: 'Remote-First Culture',
      description: 'Work from anywhere with flexible hours and location independence'
    },
    {
      icon: GraduationCap,
      title: 'Learning & Development',
      description: 'Budget for courses, conferences, certifications, and skill development'
    },
    {
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance, mental health support, and wellness programs'
    },
    {
      icon: Clock,
      title: 'Flexible Time Off',
      description: 'Unlimited PTO, paid parental leave, and sabbatical opportunities'
    },
    {
      icon: Building,
      title: 'Modern Tools',
      description: 'Latest technology, equipment, and software to do your best work'
    }
  ];

  const filteredJobs = jobListings.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         job.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesDepartment = selectedDepartment === 'all' || job.department === selectedDepartment;
    const matchesLocation = selectedLocation === 'all' || job.location === selectedLocation;
    
    return matchesSearch && matchesDepartment && matchesLocation;
  });

  const getLocationName = (locationId: string) => {
    return locations.find(l => l.id === locationId)?.name || locationId;
  };

  const getDepartmentName = (deptId: string) => {
    return departments.find(d => d.id === deptId)?.name || deptId;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-400 text-sm font-medium mb-8">
                <Users className="w-4 h-4 mr-2" />
                Join Our Team
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Build the Future of
                <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  {' '}Technology
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Join a team of innovators, engineers, and visionaries who are transforming businesses through cutting-edge AI, quantum computing, and digital transformation solutions.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#open-positions"
                  className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 group"
                >
                  View Open Positions
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="#culture"
                  className="inline-flex items-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg border border-white/20 transition-all duration-300"
                >
                  Learn About Culture
                </a>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Company Values */}
      <section id="culture" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Our Company Culture
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              We foster an environment where innovation thrives, collaboration is celebrated, and every team member can reach their full potential.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/30 transition-all duration-300 hover:bg-white/10">
                  <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-xl flex items-center justify-center mb-6 mx-auto`}>
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Work at Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              We offer comprehensive benefits and a supportive environment that enables you to do your best work.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/30 transition-all duration-300 hover:bg-white/10">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Search */}
      <section id="open-positions" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Open Positions
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Find the perfect role that matches your skills and passion for technology innovation.
            </p>
          </motion.div>

          {/* Search and Filters */}
          <div className="mb-12">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Search */}
              <div className="relative w-full lg:w-96">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search jobs..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Filters */}
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <Filter className="w-5 h-5 text-gray-400" />
                  <select
                    value={selectedDepartment}
                    onChange={(e) => setSelectedDepartment(e.target.value)}
                    className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    {departments.map((dept) => (
                      <option key={dept.id} value={dept.id} className="bg-slate-800 text-white">
                        {dept.name} ({dept.count})
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5 text-gray-400" />
                  <select
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                    className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    {locations.map((location) => (
                      <option key={location.id} value={location.id} className="bg-slate-800 text-white">
                        {location.name} ({location.count})
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Job Listings */}
          {filteredJobs.length > 0 ? (
            <div className="space-y-6">
              {filteredJobs.map((job, index) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className={`p-8 rounded-2xl border transition-all duration-300 hover:bg-white/10 ${
                    job.featured 
                      ? 'bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-blue-500/30 hover:border-blue-500/50' 
                      : 'bg-white/5 border-white/10 hover:border-white/30'
                  }`}>
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          {job.featured && (
                            <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-xs font-medium rounded-full">
                              Featured
                            </span>
                          )}
                          <span className="px-3 py-1 bg-green-500/20 text-green-400 text-xs font-medium rounded-full">
                            {job.type}
                          </span>
                          <span className="px-3 py-1 bg-purple-500/20 text-purple-400 text-xs font-medium rounded-full">
                            {getDepartmentName(job.department)}
                          </span>
                        </div>
                        
                        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                          {job.title}
                        </h3>
                        
                        <p className="text-gray-300 mb-4 leading-relaxed">
                          {job.description}
                        </p>
                        
                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                          <div className="flex items-center space-x-2">
                            <MapPin className="w-4 h-4" />
                            <span>{getLocationName(job.location)}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Briefcase className="w-4 h-4" />
                            <span>{job.experience}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <DollarSign className="w-4 h-4" />
                            <span>{job.salary}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="lg:text-right">
                        <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors group-hover:bg-blue-700">
                          Apply Now
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center py-16"
            >
              <div className="w-24 h-24 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-12 h-12 text-blue-400" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-2">No positions found</h3>
              <p className="text-gray-300">
                Try adjusting your search terms or filters to find available positions.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="p-12 rounded-3xl bg-gradient-to-r from-blue-600 to-purple-600 relative overflow-hidden">
              <div className="relative z-10">
                <h2 className="text-4xl font-bold text-white mb-6">
                  Don't See the Right Role?
                </h2>
                <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                  We're always looking for talented individuals to join our team. Send us your resume and let's discuss how you can contribute to our mission.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="mailto:careers@ziontechgroup.com"
                    className="inline-flex items-center px-8 py-4 bg-white text-blue-600 hover:bg-gray-100 font-semibold rounded-lg transition-colors"
                  >
                    Send Resume
                  </a>
                  <a
                    href="/contact"
                    className="inline-flex items-center px-8 py-4 bg-transparent text-white font-semibold rounded-lg border-2 border-white hover:bg-white hover:text-blue-600 transition-all duration-300"
                  >
                    Get in Touch
                  </a>
                </div>
              </div>
              
              {/* Background Elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
