import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Search, Filter, MapPin, Clock, DollarSign, Users, ArrowRight, ChevronDown, Brain, Cpu, Database, Network, Shield, Rocket, BarChart3, Code, Server, Chip, Globe, Zap, Lock, ShieldCheck, TrendingUp, CheckCircle, Target, Handshake, Lightbulb, Atom, Cloud, Smartphone, Building, Heart, ShoppingCart, Eye, PenTool, Leaf, Satellite, FileText, Sparkles, Tag, BookOpen, MessageCircle, Briefcase, GraduationCap, Award, Star, Coffee, Gamepad2, Palette, Music, Camera, Plane, Car, Home, Wifi } from 'lucide-react';

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
      location: 'new-york',
      type: 'Full-time',
      experience: '4+ years',
      salary: '$130k - $190k',
      description: 'Design and implement security solutions to protect our systems and data from cyber threats.',
      requirements: [
        'Experience with security frameworks and compliance standards',
        'Knowledge of penetration testing and vulnerability assessment',
        'Experience with SIEM, EDR, and other security tools',
        'Certifications like CISSP, CISM, or CEH preferred'
      ],
      benefits: [
        'Competitive salary and equity',
        'Security training and certification support',
        'Flexible work arrangements',
        'Comprehensive health and dental coverage'
      ],
      posted: '3 days ago',
      urgent: true
    },
    {
      id: 4,
      title: 'Data Scientist',
      department: 'data-science',
      location: 'remote',
      type: 'Full-time',
      experience: '3+ years',
      salary: '$110k - $160k',
      description: 'Extract insights from complex datasets and build predictive models to drive business decisions.',
      requirements: [
        'Strong background in statistics and machine learning',
        'Experience with Python, R, and SQL',
        'Knowledge of data visualization tools',
        'Experience with big data technologies (Spark, Hadoop)'
      ],
      benefits: [
        'Competitive salary and equity',
        'Access to cutting-edge data tools',
        'Professional development opportunities',
        'Flexible remote work options'
      ],
      posted: '1 week ago',
      urgent: false
    },
    {
      id: 5,
      title: 'Product Manager',
      department: 'product',
      location: 'san-francisco',
      type: 'Full-time',
      experience: '4+ years',
      salary: '$130k - $180k',
      description: 'Lead product strategy and development for our AI-powered solutions.',
      requirements: [
        'Experience in product management for B2B software',
        'Strong analytical and problem-solving skills',
        'Experience with agile development methodologies',
        'Technical background preferred'
      ],
      benefits: [
        'Competitive salary and equity',
        'Product management training and development',
        'Flexible work arrangements',
        'Comprehensive health coverage'
      ],
      posted: '5 days ago',
      urgent: false
    },
    {
      id: 6,
      title: 'UX Designer',
      department: 'design',
      location: 'remote',
      type: 'Full-time',
      experience: '3+ years',
      salary: '$90k - $130k',
      description: 'Design intuitive and engaging user experiences for our AI-powered applications.',
      requirements: [
        'Strong portfolio demonstrating UX design skills',
        'Experience with design tools (Figma, Sketch, Adobe Creative Suite)',
        'Knowledge of user research and testing methodologies',
        'Experience with responsive and mobile design'
      ],
      benefits: [
        'Competitive salary and equity',
        'Design tools and software licenses',
        'Professional development opportunities',
        'Flexible remote work options'
      ],
      posted: '2 weeks ago',
      urgent: false
    }
  ];

  const filteredJobs = jobListings.filter(job => {
    const matchesDepartment = activeDepartment === 'all' || job.department === activeDepartment;
    const matchesLocation = selectedLocation === 'all' || job.location === selectedLocation;
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         job.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesDepartment && matchesLocation && matchesSearch;
  });

  const benefits = [
    {
      icon: DollarSign,
      title: 'Competitive Compensation',
      description: 'Competitive salary, equity, and performance bonuses'
    },
    {
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Comprehensive health, dental, and vision coverage'
    },
    {
      icon: Home,
      title: 'Flexible Work',
      description: 'Remote work options and flexible schedules'
    },
    {
      icon: GraduationCap,
      title: 'Learning & Development',
      description: 'Professional development budget and training opportunities'
    },
    {
      icon: Coffee,
      title: 'Work-Life Balance',
      description: 'Unlimited PTO and mental health support'
    },
    {
      icon: Users,
      title: 'Great Team',
      description: 'Collaborative environment with talented colleagues'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
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
              Join Our <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">Team</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Build the future of AI and technology with us. We're looking for passionate individuals 
              who want to make a difference in the world through innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8">
        <div className="container mx-auto px-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="flex flex-col lg:flex-row gap-4">
              {/* Search */}
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search jobs..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Department Filter */}
              <div className="lg:w-64">
                <select
                  value={activeDepartment}
                  onChange={(e) => setActiveDepartment(e.target.value)}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                >
                  {departments.map((dept) => (
                    <option key={dept.id} value={dept.id} className="bg-slate-800">
                      {dept.name} ({dept.count})
                    </option>
                  ))}
                </select>
              </div>

              {/* Location Filter */}
              <div className="lg:w-64">
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                >
                  {locations.map((location) => (
                    <option key={location.id} value={location.id} className="bg-slate-800">
                      {location.name} ({location.count})
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-white">
              Open Positions ({filteredJobs.length})
            </h2>
          </div>

          <div className="grid gap-6">
            {filteredJobs.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-cyan-400/40 transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-bold text-white">{job.title}</h3>
                      {job.urgent && (
                        <span className="bg-red-500/20 text-red-400 px-2 py-1 rounded-full text-xs font-medium">
                          Urgent
                        </span>
                      )}
                    </div>
                    <p className="text-gray-300 mb-4">{job.description}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{locations.find(l => l.id === job.location)?.name}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{job.type}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        <span>{job.experience}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <DollarSign className="w-4 h-4" />
                        <span>{job.salary}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="text-sm text-gray-400">Posted {job.posted}</span>
                    <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-2 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 flex items-center gap-2">
                      Apply Now
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredJobs.length === 0 && (
            <div className="text-center py-12">
              <div className="w-24 h-24 bg-gray-800/50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">No jobs found</h3>
              <p className="text-gray-400">Try adjusting your search criteria or check back later for new openings.</p>
            </div>
          )}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Why Work With Us</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              We offer competitive benefits and a supportive environment where you can grow your career 
              while making a real impact on the future of technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Don't See Your Dream Job?</h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              We're always looking for talented individuals to join our team. 
              Send us your resume and let us know how you'd like to contribute to our mission.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-3 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
              >
                Contact Us
              </Link>
              <a
                href="mailto:careers@ziontechgroup.com"
                className="border border-cyan-500 text-cyan-400 px-8 py-3 rounded-lg font-medium hover:bg-cyan-500/10 transition-all duration-300"
              >
                Send Resume
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}