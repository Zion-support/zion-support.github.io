import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  DollarSign, 
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
  Search,
  Filter,
  Building,
  GraduationCap,
  Target,
  TrendingUp,
  Calendar,
  Phone,
  Mail,
  ExternalLink,
  Play,
  Pause,
  RotateCcw,
  Eye,
  BookOpen,
  MessageSquare,
  Sparkles,
  Cpu,
  Database,
  Lock,
  Wifi,
  Bot,
  Workflow,
  Eye as EyeIcon,
  Sparkles as SparklesIcon
} from 'lucide-react';

const Careers = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [selectedExperience, setSelectedExperience] = useState('all');
  const [isPlaying, setIsPlaying] = useState(false);

  // Enhanced job listings with more details
  const jobListings = [
    {
      id: 1,
      title: "Senior AI Engineer",
      department: "AI & Machine Learning",
      location: "Remote / San Francisco, CA",
      type: "Full-time",
      experience: "5+ years",
      salary: "$120,000 - $180,000",
      description: "Join our AI team to develop cutting-edge machine learning models and AI-powered solutions for enterprise clients. Work on projects that impact millions of users worldwide.",
      requirements: [
        "Strong background in machine learning and deep learning",
        "Experience with Python, TensorFlow, PyTorch",
        "Knowledge of cloud platforms (AWS, GCP, Azure)",
        "Experience with large-scale data processing",
        "Understanding of MLOps and model deployment",
        "Experience with NLP and computer vision"
      ],
      benefits: ["Competitive salary", "Health insurance", "Remote work", "Professional development", "Stock options", "Flexible PTO"],
      category: "ai",
      urgency: "high",
      postedDate: "2024-08-15",
      applications: 45
    },
    {
      id: 2,
      title: "Cybersecurity Specialist",
      department: "Security",
      location: "New York, NY",
      type: "Full-time",
      experience: "3+ years",
      salary: "$90,000 - $140,000",
      description: "Protect our clients' digital assets by implementing advanced security measures and threat detection systems. Be part of our security-first approach.",
      requirements: [
        "Experience with security frameworks and compliance",
        "Knowledge of network security and penetration testing",
        "Familiarity with SIEM tools and incident response",
        "Security certifications (CISSP, CEH, etc.)",
        "Experience with cloud security",
        "Knowledge of zero-trust architecture"
      ],
      benefits: ["Competitive salary", "Health insurance", "Flexible hours", "Security training", "Conference attendance", "Home office setup"],
      category: "security",
      urgency: "medium",
      postedDate: "2024-08-20",
      applications: 32
    },
    {
      id: 3,
      title: "Cloud DevOps Engineer",
      department: "Cloud & Infrastructure",
      location: "Remote / Austin, TX",
      type: "Full-time",
      experience: "4+ years",
      salary: "$100,000 - $150,000",
      description: "Build and maintain scalable cloud infrastructure using modern DevOps practices and automation tools. Help us scale to serve millions of users.",
      requirements: [
        "Experience with AWS, Azure, or GCP",
        "Knowledge of Docker, Kubernetes, Terraform",
        "CI/CD pipeline experience",
        "Linux system administration skills",
        "Experience with monitoring and logging",
        "Knowledge of infrastructure as code"
      ],
      benefits: ["Competitive salary", "Health insurance", "Remote work", "Cloud certifications", "Latest equipment", "Learning budget"],
      category: "cloud",
      urgency: "high",
      postedDate: "2024-08-18",
      applications: 38
    },
    {
      id: 4,
      title: "Frontend Developer",
      department: "Engineering",
      location: "Remote / Seattle, WA",
      type: "Full-time",
      experience: "3+ years",
      salary: "$80,000 - $130,000",
      description: "Create beautiful and responsive user interfaces using modern web technologies and frameworks. Build experiences that users love.",
      requirements: [
        "Strong React, Vue, or Angular experience",
        "Proficiency in HTML, CSS, JavaScript",
        "Experience with responsive design",
        "Knowledge of modern build tools",
        "Experience with TypeScript",
        "Understanding of accessibility standards"
      ],
      benefits: ["Competitive salary", "Health insurance", "Remote work", "Latest equipment", "Design system access", "UX training"],
      category: "engineering",
      urgency: "medium",
      postedDate: "2024-08-22",
      applications: 28
    },
    {
      id: 5,
      title: "Data Scientist",
      department: "Analytics",
      location: "Remote / Boston, MA",
      type: "Full-time",
      experience: "4+ years",
      salary: "$95,000 - $145,000",
      description: "Transform raw data into actionable insights that drive business decisions. Work with cutting-edge analytics tools and techniques.",
      requirements: [
        "Strong statistical and mathematical background",
        "Experience with Python, R, SQL",
        "Knowledge of machine learning algorithms",
        "Experience with data visualization",
        "Understanding of big data technologies",
        "Business acumen and communication skills"
      ],
      benefits: ["Competitive salary", "Health insurance", "Remote work", "Data science tools", "Conference attendance", "Research opportunities"],
      category: "analytics",
      urgency: "medium",
      postedDate: "2024-08-25",
      applications: 35
    },
    {
      id: 6,
      title: "Product Manager",
      department: "Product",
      location: "San Francisco, CA",
      type: "Full-time",
      experience: "5+ years",
      salary: "$110,000 - $160,000",
      description: "Lead product strategy and development for our AI-powered solutions. Work closely with engineering, design, and business teams.",
      requirements: [
        "Experience in product management",
        "Strong analytical and strategic thinking",
        "Excellent communication and leadership skills",
        "Experience with agile methodologies",
        "Understanding of AI/ML technologies",
        "Customer-centric approach"
      ],
      benefits: ["Competitive salary", "Health insurance", "Stock options", "Professional development", "Leadership training", "Flexible work"],
      category: "product",
      urgency: "low",
      postedDate: "2024-08-28",
      applications: 22
    }
  ];

  // Enhanced company values
  const companyValues = [
    {
      icon: Brain,
      title: "Innovation First",
      description: "We push boundaries and embrace new technologies to solve complex problems."
    },
    {
      icon: Heart,
      title: "People Matter",
      description: "Our team is our greatest asset. We invest in growth, well-being, and work-life balance."
    },
    {
      icon: Shield,
      title: "Security & Trust",
      description: "We build secure, reliable solutions that our clients can trust with their most critical data."
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "Our solutions reach millions worldwide, making technology accessible to everyone."
    }
  ];

  // Enhanced benefits
  const benefits = [
    "Competitive salary with equity options",
    "Comprehensive health, dental, and vision insurance",
    "Flexible remote work policies",
    "Unlimited PTO and paid holidays",
    "Professional development and learning budget",
    "Latest technology and equipment",
    "Conference attendance and training",
    "401(k) with company match",
    "Health and wellness programs",
    "Team building and social events",
    "Mentorship and career growth",
    "Innovation time and hackathons"
  ];

  // Enhanced categories
  const categories = [
    { id: 'all', name: 'All Positions', count: jobListings.length, icon: Briefcase },
    { id: 'ai', name: 'AI & ML', count: jobListings.filter(job => job.category === 'ai').length, icon: Brain },
    { id: 'security', name: 'Security', count: jobListings.filter(job => job.category === 'security').length, icon: Shield },
    { id: 'cloud', name: 'Cloud & DevOps', count: jobListings.filter(job => job.category === 'cloud').length, icon: Cloud },
    { id: 'engineering', name: 'Engineering', count: jobListings.filter(job => job.category === 'engineering').length, icon: Code },
    { id: 'analytics', name: 'Analytics', count: jobListings.filter(job => job.category === 'analytics').length, icon: TrendingUp },
    { id: 'product', name: 'Product', count: jobListings.filter(job => job.category === 'product').length, icon: Target }
  ];

  // Locations for filtering
  const locations = [
    { id: 'all', name: 'All Locations' },
    { id: 'remote', name: 'Remote' },
    { id: 'san-francisco', name: 'San Francisco, CA' },
    { id: 'new-york', name: 'New York, NY' },
    { id: 'austin', name: 'Austin, TX' },
    { id: 'seattle', name: 'Seattle, WA' },
    { id: 'boston', name: 'Boston, MA' }
  ];

  // Experience levels for filtering
  const experienceLevels = [
    { id: 'all', name: 'All Experience' },
    { id: 'entry', name: 'Entry Level (0-2 years)' },
    { id: 'mid', name: 'Mid Level (3-5 years)' },
    { id: 'senior', name: 'Senior Level (5+ years)' },
    { id: 'lead', name: 'Lead/Principal' }
  ];

  // Filter jobs based on selected criteria
  const filteredJobs = jobListings.filter(job => {
    const matchesCategory = selectedCategory === 'all' || job.category === selectedCategory;
    const matchesLocation = selectedLocation === 'all' || 
      (selectedLocation === 'remote' && job.location.includes('Remote')) ||
      (selectedLocation !== 'remote' && job.location.includes(selectedLocation));
    const matchesExperience = selectedExperience === 'all' || 
      (selectedExperience === 'entry' && job.experience.includes('0-2')) ||
      (selectedExperience === 'mid' && job.experience.includes('3-5')) ||
      (selectedExperience === 'senior' && job.experience.includes('5+')) ||
      (selectedExperience === 'lead' && job.title.includes('Lead'));
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.description.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesCategory && matchesLocation && matchesExperience && matchesSearch;
  });

  // Get urgency color
  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  // Get urgency text
  const getUrgencyText = (urgency: string) => {
    switch (urgency) {
      case 'high': return 'Urgent';
      case 'medium': return 'Active';
      case 'low': return 'Open';
      default: return 'Open';
    }
  };

  // Format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) return 'Today';
    if (diffDays === 1) return 'Yesterday';
    if (diffDays < 7) return `${diffDays} days ago`;
    return date.toLocaleDateString();
  };

  return (
    <>
      <Helmet>
        <title>Careers at Zion Tech Group - Join Our Innovation Team</title>
        <meta name="description" content="Join Zion Tech Group's team of innovators, engineers, and problem-solvers. Explore career opportunities in AI, cybersecurity, cloud computing, and more." />
        <meta name="keywords" content="careers, jobs, employment, Zion Tech Group, AI, cybersecurity, cloud computing, engineering" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
        {/* Hero Section */}
        <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.15)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>
          
          <div className="relative max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 mb-6">
                <Briefcase className="w-5 h-5 text-cyan-400 mr-2" />
                <span className="text-cyan-400 font-medium">Career Opportunities</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Join Our Innovation Team
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
                Help us build the future of technology. Join a team of passionate innovators, engineers, and problem-solvers who are shaping the digital landscape.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 flex items-center gap-2">
                  View Open Positions
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-200">
                  Learn About Culture
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Company Values Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
                Our Values & Culture
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {companyValues.map((value, index) => (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    viewport={{ once: true }}
                    className="text-center group"
                  >
                    <div className="w-20 h-20 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 border border-cyan-400/30">
                      <value.icon className="w-10 h-10 text-cyan-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{value.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
                Why Work at Zion Tech?
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.05 * index }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3 group"
                  >
                    <CheckCircle className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-200" />
                    <span className="text-gray-300 group-hover:text-white transition-colors duration-200">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Job Listings Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
                Open Positions
              </h2>
              
              {/* Search and Filters */}
              <div className="bg-white/5 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-6 mb-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  {/* Search */}
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search jobs..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-white/10 border border-cyan-400/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    />
                  </div>
                  
                  {/* Category Filter */}
                  <div>
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="w-full px-4 py-3 bg-white/10 border border-cyan-400/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    >
                      {categories.map(category => (
                        <option key={category.id} value={category.id} className="bg-slate-800 text-white">
                          {category.name} ({category.count})
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  {/* Location Filter */}
                  <div>
                    <select
                      value={selectedLocation}
                      onChange={(e) => setSelectedLocation(e.target.value)}
                      className="w-full px-4 py-3 bg-white/10 border border-cyan-400/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    >
                      {locations.map(location => (
                        <option key={location.id} value={location.id} className="bg-slate-800 text-white">
                          {location.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  {/* Experience Filter */}
                  <div>
                    <select
                      value={selectedExperience}
                      onChange={(e) => setSelectedExperience(e.target.value)}
                      className="w-full px-4 py-3 bg-white/10 border border-cyan-400/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    >
                      {experienceLevels.map(level => (
                        <option key={level.id} value={level.id} className="bg-slate-800 text-white">
                          {level.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              
              {/* Results Count */}
              <div className="text-center mb-8">
                <p className="text-gray-300">
                  Showing <span className="text-cyan-400 font-semibold">{filteredJobs.length}</span> of <span className="text-cyan-400 font-semibold">{jobListings.length}</span> positions
                </p>
              </div>
              
              {/* Job Cards */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {filteredJobs.map((job, index) => (
                  <motion.div
                    key={job.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    viewport={{ once: true }}
                    className="group bg-white/5 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:border-cyan-400/50"
                  >
                    {/* Job Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-200">{job.title}</h3>
                          <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${getUrgencyColor(job.urgency)}`}>
                            {getUrgencyText(job.urgency)}
                          </span>
                        </div>
                        <p className="text-cyan-400 font-medium">{job.department}</p>
                      </div>
                      <div className="text-right">
                        <span className="inline-block px-3 py-1 bg-green-500/20 text-green-400 text-xs font-medium rounded-full border border-green-400/30">
                          {job.type}
                        </span>
                      </div>
                    </div>
                    
                    {/* Job Details Grid */}
                    <div className="grid grid-cols-2 gap-4 mb-4 text-sm text-gray-300">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-cyan-400" />
                        <span className="truncate">{job.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-cyan-400" />
                        <span>{job.experience}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <DollarSign className="w-4 h-4 text-cyan-400" />
                        <span>{job.salary}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-cyan-400" />
                        <span>{job.applications} applications</span>
                      </div>
                    </div>
                    
                    {/* Job Description */}
                    <p className="text-gray-300 mb-4 line-clamp-3">{job.description}</p>
                    
                    {/* Key Requirements */}
                    <div className="mb-4">
                      <h4 className="font-semibold text-white mb-2 flex items-center gap-2">
                        <Target className="w-4 h-4 text-cyan-400" />
                        Key Requirements:
                      </h4>
                      <ul className="space-y-1">
                        {job.requirements.slice(0, 3).map((req, idx) => (
                          <li key={idx} className="text-sm text-gray-300 flex items-center gap-2">
                            <CheckCircle className="w-3 h-3 text-cyan-400" />
                            <span className="line-clamp-1">{req}</span>
                          </li>
                        ))}
                        {job.requirements.length > 3 && (
                          <li className="text-sm text-cyan-400">
                            +{job.requirements.length - 3} more requirements
                          </li>
                        )}
                      </ul>
                    </div>
                    
                    {/* Job Footer */}
                    <div className="flex items-center justify-between mb-4 text-xs text-gray-400">
                      <span>Posted {formatDate(job.postedDate)}</span>
                      <span>{job.applications} applications</span>
                    </div>
                    
                    {/* Apply Button */}
                    <button className="w-full py-3 px-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 flex items-center justify-center gap-2 font-semibold">
                      Apply Now
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </motion.div>
                ))}
              </div>
              
              {/* No Results */}
              {filteredJobs.length === 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-12"
                >
                  <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">No positions found</h3>
                  <p className="text-gray-300 mb-4">Try adjusting your search criteria or check back later for new opportunities.</p>
                  <button
                    onClick={() => {
                      setSelectedCategory('all');
                      setSelectedLocation('all');
                      setSelectedExperience('all');
                      setSearchTerm('');
                    }}
                    className="px-6 py-3 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors"
                  >
                    Clear Filters
                  </button>
                </motion.div>
              )}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 backdrop-blur-sm border border-cyan-400/30">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 mb-6">
                <Sparkles className="w-5 h-5 text-cyan-400 mr-2" />
                <span className="text-cyan-400 font-medium">Ready to Join?</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Join Our Team?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Don't see a position that fits? Send us your resume and we'll keep you in mind for future opportunities. We're always looking for talented individuals to join our mission.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 flex items-center gap-2">
                  Submit Resume
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-200 flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  Contact Recruiting
                </button>
              </div>
              
              <div className="mt-8 text-center">
                <p className="text-gray-400 mb-4">Have questions about working at Zion Tech?</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm">
                  <a href="mailto:careers@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300 transition-colors flex items-center justify-center gap-2">
                    <Mail className="w-4 h-4" />
                    careers@ziontechgroup.com
                  </a>
                  <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300 transition-colors flex items-center justify-center gap-2">
                    <Phone className="w-4 h-4" />
                    +1 (302) 464-0950
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Careers;
