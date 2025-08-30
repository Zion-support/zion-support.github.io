import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Briefcase, 
  Users, 
  Globe, 
  Award, 
  Star,
  Zap,
  Brain,
  Shield,
  Rocket,
  Cpu,
  Database,
  Lock,
  Cloud,
  Code,
  Server,
  Chip,
  Wifi,
  ShieldCheck,
  Bot,
  Workflow,
  Eye,
  Sparkles,
  Atom,
  Leaf,
  Gamepad2,
  Coins,
  Satellite,
  Activity,
  MessageCircle,
  BarChart,
  Settings,
  Palette,
  Target,
  Handshake,
  Lightbulb,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Play,
  ChevronRight,
  Heart,
  MapPin,
  Clock,
  DollarSign,
  GraduationCap,
  Building2,
  Mail,
  Linkedin,
  Github,
  ExternalLink
} from 'lucide-react';

export default function Careers() {
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [selectedType, setSelectedType] = useState('all');

  const departments = [
    { id: 'all', name: 'All Departments', icon: Users, count: 0 },
    { id: 'engineering', name: 'Engineering', icon: Code, count: 25 },
    { id: 'ai-ml', name: 'AI & Machine Learning', icon: Brain, count: 18 },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield, count: 12 },
    { id: 'cloud-devops', name: 'Cloud & DevOps', icon: Cloud, count: 15 },
    { id: 'quantum', name: 'Quantum Computing', icon: Atom, count: 8 },
    { id: 'data-science', name: 'Data Science', icon: BarChart, count: 14 },
    { id: 'sales', name: 'Sales & Business Development', icon: Target, count: 10 },
    { id: 'marketing', name: 'Marketing', icon: Lightbulb, count: 8 },
    { id: 'operations', name: 'Operations', icon: Settings, count: 6 },
    { id: 'research', name: 'Research & Development', icon: Rocket, count: 12 }
  ];

  const locations = [
    { id: 'all', name: 'All Locations', icon: Globe, count: 0 },
    { id: 'middletown', name: 'Middletown, DE', icon: MapPin, count: 45 },
    { id: 'new-york', name: 'New York, NY', icon: MapPin, count: 28 },
    { id: 'san-francisco', name: 'San Francisco, CA', icon: MapPin, count: 32 },
    { id: 'london', name: 'London, UK', icon: MapPin, count: 18 },
    { id: 'singapore', name: 'Singapore', icon: MapPin, count: 15 },
    { id: 'remote', name: 'Remote', icon: Wifi, count: 42 }
  ];

  const jobTypes = [
    { id: 'all', name: 'All Types', icon: Briefcase, count: 0 },
    { id: 'full-time', name: 'Full Time', icon: Clock, count: 120 },
    { id: 'part-time', name: 'Part Time', icon: Clock, count: 15 },
    { id: 'contract', name: 'Contract', icon: Briefcase, count: 25 },
    { id: 'internship', name: 'Internship', icon: GraduationCap, count: 20 }
  ];

  const openPositions = [
    {
      id: 1,
      title: 'Senior AI Engineer',
      department: 'ai-ml',
      location: 'san-francisco',
      type: 'full-time',
      experience: '5+ years',
      salary: '$150,000 - $200,000',
      description: 'Join our AI team to build next-generation machine learning models and AI solutions.',
      requirements: [
        'Strong background in machine learning and deep learning',
        'Experience with PyTorch, TensorFlow, or similar frameworks',
        'Knowledge of NLP, computer vision, or reinforcement learning',
        'PhD in Computer Science or related field preferred'
      ],
      benefits: [
        'Competitive salary and equity',
        'Flexible work arrangements',
        'Professional development budget',
        'Health, dental, and vision insurance'
      ],
      featured: true
    },
    {
      id: 2,
      title: 'Cybersecurity Specialist',
      department: 'cybersecurity',
      location: 'new-york',
      type: 'full-time',
      experience: '3+ years',
      salary: '$120,000 - $160,000',
      description: 'Help protect our clients and systems from cyber threats.',
      requirements: [
        'Experience with security tools and frameworks',
        'Knowledge of threat intelligence and incident response',
        'Familiarity with compliance standards (SOC 2, ISO 27001)',
        'Relevant certifications (CISSP, CEH, etc.)'
      ],
      benefits: [
        'Competitive salary and equity',
        'Flexible work arrangements',
        'Professional development budget',
        'Health, dental, and vision insurance'
      ],
      featured: true
    },
    {
      id: 3,
      title: 'Cloud Solutions Architect',
      department: 'cloud-devops',
      location: 'remote',
      type: 'full-time',
      experience: '7+ years',
      salary: '$140,000 - $190,000',
      description: 'Design and implement scalable cloud solutions for enterprise clients.',
      requirements: [
        'Expertise in AWS, Azure, or Google Cloud',
        'Experience with infrastructure as code',
        'Knowledge of containerization and orchestration',
        'Strong understanding of security best practices'
      ],
      benefits: [
        'Competitive salary and equity',
        'Flexible work arrangements',
        'Professional development budget',
        'Health, dental, and vision insurance'
      ],
      featured: false
    },
    {
      id: 4,
      title: 'Quantum Computing Researcher',
      department: 'quantum',
      location: 'london',
      type: 'full-time',
      experience: 'PhD required',
      salary: '£80,000 - £120,000',
      description: 'Research and develop quantum algorithms and applications.',
      requirements: [
        'PhD in Physics, Computer Science, or related field',
        'Experience with quantum computing frameworks',
        'Knowledge of quantum algorithms and quantum machine learning',
        'Strong mathematical and analytical skills'
      ],
      benefits: [
        'Competitive salary and equity',
        'Flexible work arrangements',
        'Professional development budget',
        'Health, dental, and vision insurance'
      ],
      featured: true
    },
    {
      id: 5,
      title: 'Data Scientist',
      department: 'data-science',
      location: 'middletown',
      type: 'full-time',
      experience: '3+ years',
      salary: '$100,000 - $140,000',
      description: 'Transform data into actionable insights for business decisions.',
      requirements: [
        'Experience with Python, R, or similar languages',
        'Knowledge of statistical analysis and machine learning',
        'Experience with data visualization tools',
        'Strong communication and presentation skills'
      ],
      benefits: [
        'Competitive salary and equity',
        'Flexible work arrangements',
        'Professional development budget',
        'Health, dental, and vision insurance'
      ],
      featured: false
    },
    {
      id: 6,
      title: 'Software Engineering Intern',
      department: 'engineering',
      location: 'san-francisco',
      type: 'internship',
      experience: 'Student',
      salary: '$8,000 - $12,000/month',
      description: 'Gain hands-on experience with cutting-edge technologies.',
      requirements: [
        'Currently pursuing Computer Science degree',
        'Knowledge of programming languages (Python, JavaScript, etc.)',
        'Strong problem-solving skills',
        'Eagerness to learn and grow'
      ],
      benefits: [
        'Competitive stipend',
        'Mentorship from senior engineers',
        'Real project experience',
        'Potential for full-time conversion'
      ],
      featured: false
    }
  ];

  const filteredPositions = openPositions.filter(position => {
    const deptMatch = selectedDepartment === 'all' || position.department === selectedDepartment;
    const locationMatch = selectedLocation === 'all' || position.location === location.location;
    const typeMatch = selectedType === 'all' || position.type === selectedType;
    return deptMatch && locationMatch && typeMatch;
  });

  const companyValues = [
    {
      icon: Lightbulb,
      title: 'Innovation First',
      description: 'We push boundaries and explore new technologies'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We maintain the highest standards in everything we do'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and diverse perspectives'
    },
    {
      icon: Shield,
      title: 'Integrity',
      description: 'We operate with honesty, transparency, and ethical practices'
    }
  ];

  const benefits = [
    {
      icon: DollarSign,
      title: 'Competitive Compensation',
      description: 'Above-market salaries, equity, and performance bonuses'
    },
    {
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Comprehensive health, dental, and vision insurance'
    },
    {
      icon: Globe,
      title: 'Flexible Work',
      description: 'Remote work options and flexible schedules'
    },
    {
      icon: GraduationCap,
      title: 'Learning & Growth',
      description: 'Professional development budget and training programs'
    },
    {
      icon: Users,
      title: 'Team Events',
      description: 'Regular team building and social activities'
    },
    {
      icon: Award,
      title: 'Recognition',
      description: 'Performance recognition and career advancement'
    }
  ];

  return (
    <div className="min-h-screen bg-zion-blue">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Join Our <span className="text-zion-cyan">Team</span>
            </h1>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
              Build the future with cutting-edge technology. Join a team of innovators, 
              problem-solvers, and technology enthusiasts.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center space-x-2 text-zion-cyan">
                <Briefcase className="w-5 h-5" />
                <span className="text-zion-slate-light">120+ Open Positions</span>
              </div>
              <div className="flex items-center space-x-2 text-zion-cyan">
                <Globe className="w-5 h-5" />
                <span className="text-zion-slate-light">6 Global Locations</span>
              </div>
              <div className="flex items-center space-x-2 text-zion-cyan">
                <Users className="w-5 h-5" />
                <span className="text-zion-slate-light">50+ Team Members</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-zion-blue-dark">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Work With Us
            </h2>
            <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
              Our values shape our culture and guide everything we do.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {companyValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-lg bg-zion-blue-darker border border-zion-purple/20 hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{value.title}</h3>
                <p className="text-zion-slate-light">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Benefits & Perks
            </h2>
            <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
              We take care of our team with comprehensive benefits and perks.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-zion-blue-dark border border-zion-purple/30 rounded-xl p-6 hover:border-zion-cyan/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-zion-slate-light text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-zion-blue-dark/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Open Positions
            </h2>
            <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
              Find your next opportunity with us.
            </p>
          </motion.div>

          {/* Filters */}
          <div className="flex flex-wrap gap-4 mb-8 justify-center">
            <select
              value={selectedDepartment}
              onChange={(e) => setSelectedDepartment(e.target.value)}
              className="px-4 py-2 bg-zion-blue-darker border border-zion-purple/30 rounded-lg text-white focus:border-zion-cyan focus:outline-none"
            >
              {departments.map(dept => (
                <option key={dept.id} value={dept.id}>{dept.name}</option>
              ))}
            </select>
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="px-4 py-2 bg-zion-blue-darker border border-zion-purple/30 rounded-lg text-white focus:border-zion-cyan focus:outline-none"
            >
              {locations.map(loc => (
                <option key={loc.id} value={loc.id}>{loc.name}</option>
              ))}
            </select>
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="px-4 py-2 bg-zion-blue-darker border border-zion-purple/30 rounded-lg text-white focus:border-zion-cyan focus:outline-none"
            >
              {jobTypes.map(type => (
                <option key={type.id} value={type.id}>{type.name}</option>
              ))}
            </select>
          </div>

          {/* Job Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredPositions.map((position, index) => (
              <motion.div
                key={position.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`bg-zion-blue-dark border rounded-xl overflow-hidden hover:border-zion-cyan/50 transition-all duration-300 ${
                  position.featured ? 'border-zion-cyan/50 shadow-lg shadow-zion-cyan/25' : 'border-zion-purple/30'
                }`}
              >
                {position.featured && (
                  <div className="bg-gradient-to-r from-zion-cyan to-zion-purple px-4 py-2 text-center">
                    <span className="text-white text-sm font-medium">Featured Position</span>
                  </div>
                )}
                
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{position.title}</h3>
                      <div className="flex items-center space-x-4 text-sm text-zion-slate-light mb-3">
                        <span className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {locations.find(l => l.id === position.location)?.name}
                        </span>
                        <span className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {position.experience}
                        </span>
                        <span className="flex items-center">
                          <DollarSign className="w-4 h-4 mr-1" />
                          {position.salary}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-zion-slate-light text-sm mb-4 leading-relaxed">
                    {position.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-zion-cyan font-medium mb-2 text-sm">Requirements</h4>
                    <ul className="space-y-1">
                      {position.requirements.slice(0, 3).map((req, idx) => (
                        <li key={idx} className="text-zion-slate-light text-xs flex items-start">
                          <CheckCircle className="w-3 h-3 text-zion-cyan mr-2 mt-0.5 flex-shrink-0" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <button className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-6 py-2 rounded-lg hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300 hover:-translate-y-1">
                      Apply Now
                      <ArrowRight className="w-4 h-4 ml-2 inline" />
                    </button>
                    
                    <div className="flex space-x-2">
                      <button className="p-2 text-zion-slate-light hover:text-zion-cyan transition-colors">
                        <Heart className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-zion-slate-light hover:text-zion-cyan transition-colors">
                        <ExternalLink className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredPositions.length === 0 && (
            <div className="text-center py-16">
              <Briefcase className="w-16 h-16 text-zion-slate-light mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">No positions found</h3>
              <p className="text-zion-slate-light mb-4">
                Try adjusting your filters to find available positions.
              </p>
              <button
                onClick={() => {
                  setSelectedDepartment('all');
                  setSelectedLocation('all');
                  setSelectedType('all');
                }}
                className="text-zion-cyan hover:text-zion-cyan-light transition-colors"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Application Process
            </h2>
            <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
              Here's what to expect when applying to join our team.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: '1', title: 'Apply', description: 'Submit your application and resume' },
              { step: '2', title: 'Review', description: 'Our team reviews your application' },
              { step: '3', title: 'Interview', description: 'Technical and cultural interviews' },
              { step: '4', title: 'Offer', description: 'Welcome to the team!' }
            ].map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">{step.step}</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-zion-slate-light text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-zion-blue-dark/50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Don't See the Right Fit?
            </h2>
            <p className="text-zion-slate-light text-lg mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals. Send us your resume and 
              we'll keep you in mind for future opportunities.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-medium rounded-lg hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300 hover:-translate-y-1 shadow-lg shadow-zion-cyan/25"
              >
                Contact Us
                <MessageCircle className="w-5 h-5 ml-2" />
              </a>
              <a
                href="mailto:careers@ziontechgroup.com"
                className="inline-flex items-center justify-center px-8 py-3 border border-zion-cyan text-zion-cyan font-medium rounded-lg hover:bg-zion-cyan hover:text-white transition-all duration-300"
              >
                Send Resume
                <Mail className="w-5 h-5 ml-2" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
