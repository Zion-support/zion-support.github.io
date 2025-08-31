import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Zap, 
  Brain, 
  Shield, 
  Cloud, 
  Atom, 
  Rocket, 
  Code, 
  Globe, 
  Users, 
  MapPin,
  Clock,
  DollarSign,
  Heart,
  Star,
  Award,
  CheckCircle,
  ArrowRight,
  Mail,
  Phone,
  Building2,
  Target,
  TrendingUp,
  Palette,
  Cpu,
  Database,
  Network,
  Smartphone,
  Monitor,
  Server,
  Lock,
  BarChart3,
  Workflow,
  Leaf,
  Gamepad2,
  Coins,
  Satellite,
  MessageCircle,
  Cog,
  Palette as PaletteIcon
} from 'lucide-react';

interface JobPosition {
  id: string;
  title: string;
  department: string;
  location: string;
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Internship';
  experience: string;
  description: string;
  requirements: string[];
  benefits: string[];
  isOpen: boolean;
}

const Careers: React.FC = () => {
  const [selectedDepartment, setSelectedDepartment] = useState<string>('all');
  const [selectedLocation, setSelectedLocation] = useState<string>('all');
  const [selectedType, setSelectedType] = useState<string>('all');

  const departments = [
    { id: 'all', name: 'All Departments', icon: Building2 },
    { id: 'ai-ml', name: 'AI & Machine Learning', icon: Brain },
    { id: 'quantum', name: 'Quantum Computing', icon: Atom },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield },
    { id: 'cloud', name: 'Cloud & DevOps', icon: Cloud },
    { id: 'frontend', name: 'Frontend Development', icon: Monitor },
    { id: 'backend', name: 'Backend Development', icon: Server },
    { id: 'data', name: 'Data & Analytics', icon: Database },
    { id: 'mobile', name: 'Mobile Development', icon: Smartphone },
    { id: 'design', name: 'UI/UX Design', icon: Palette },
    { id: 'product', name: 'Product Management', icon: Target },
    { id: 'sales', name: 'Sales & Marketing', icon: TrendingUp },
    { id: 'operations', name: 'Operations', icon: Cog }
  ];

  const locations = [
    { id: 'all', name: 'All Locations', icon: Globe },
    { id: 'remote', name: 'Remote', icon: Globe },
    { id: 'middletown-de', name: 'Middletown, DE', icon: MapPin },
    { id: 'new-york', name: 'New York, NY', icon: MapPin },
    { id: 'san-francisco', name: 'San Francisco, CA', icon: MapPin },
    { id: 'london', name: 'London, UK', icon: MapPin },
    { id: 'toronto', name: 'Toronto, CA', icon: MapPin }
  ];

  const jobTypes = [
    { id: 'all', name: 'All Types', icon: Users },
    { id: 'full-time', name: 'Full-time', icon: Clock },
    { id: 'part-time', name: 'Part-time', icon: Clock },
    { id: 'contract', name: 'Contract', icon: Clock },
    { id: 'internship', name: 'Internship', icon: Clock }
  ];

  const jobPositions: JobPosition[] = [
    {
      id: '1',
      title: 'Senior AI Engineer',
      department: 'ai-ml',
      location: 'remote',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Lead the development of cutting-edge AI solutions for enterprise clients, including machine learning models, natural language processing systems, and computer vision applications.',
      requirements: [
        'Advanced degree in Computer Science, AI, or related field',
        '5+ years of experience in AI/ML development',
        'Expertise in Python, TensorFlow, PyTorch',
        'Experience with large language models and NLP',
        'Strong understanding of MLOps and model deployment'
      ],
      benefits: [
        'Competitive salary with equity options',
        'Flexible remote work policy',
        'Professional development budget',
        'Health, dental, and vision insurance',
        '401(k) with company match'
      ],
      isOpen: true
    },
    {
      id: '2',
      title: 'Quantum Computing Researcher',
      department: 'quantum',
      location: 'remote',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Research and develop quantum computing algorithms and applications, focusing on quantum machine learning, optimization, and cryptography.',
      requirements: [
        'PhD in Physics, Computer Science, or related field',
        '3+ years of quantum computing research experience',
        'Knowledge of quantum algorithms and quantum programming',
        'Experience with Qiskit, Cirq, or similar frameworks',
        'Strong mathematical and theoretical background'
      ],
      benefits: [
        'Competitive salary with equity options',
        'Research publication support',
        'Conference attendance funding',
        'Collaboration with leading quantum researchers',
        'Flexible work arrangements'
      ],
      isOpen: true
    },
    {
      id: '3',
      title: 'Cybersecurity Architect',
      department: 'cybersecurity',
      location: 'middletown-de',
      type: 'Full-time',
      experience: '7+ years',
      description: 'Design and implement comprehensive cybersecurity solutions for enterprise clients, including zero-trust architectures, threat detection systems, and compliance frameworks.',
      requirements: [
        'Bachelor\'s degree in Cybersecurity, IT, or related field',
        '7+ years of cybersecurity experience',
        'Certifications: CISSP, CISM, or similar',
        'Experience with SIEM, EDR, and threat hunting',
        'Knowledge of compliance frameworks (SOC2, ISO27001)'
      ],
      benefits: [
        'Competitive salary with equity options',
        'Professional certification support',
        'Security conference attendance',
        'Comprehensive benefits package',
        'Hybrid work model'
      ],
      isOpen: true
    },
    {
      id: '4',
      title: 'Cloud DevOps Engineer',
      department: 'cloud',
      location: 'remote',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Build and maintain cloud infrastructure, implement CI/CD pipelines, and ensure high availability and scalability of our cloud-based services.',
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        '4+ years of DevOps experience',
        'Expertise in AWS, Azure, or GCP',
        'Experience with Kubernetes, Docker, and Terraform',
        'Knowledge of monitoring and logging tools'
      ],
      benefits: [
        'Competitive salary with equity options',
        'Cloud certification support',
        'Home office setup allowance',
        'Flexible work hours',
        'Professional development opportunities'
      ],
      isOpen: true
    },
    {
      id: '5',
      title: 'Frontend Developer',
      department: 'frontend',
      location: 'remote',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Build modern, responsive web applications using React, Next.js, and TypeScript, focusing on user experience and performance.',
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        '3+ years of frontend development experience',
        'Expertise in React, Next.js, and TypeScript',
        'Experience with modern CSS and design systems',
        'Understanding of web performance and accessibility'
      ],
      benefits: [
        'Competitive salary with equity options',
        'Latest development tools and equipment',
        'Conference attendance support',
        'Remote work flexibility',
        'Health and wellness benefits'
      ],
      isOpen: true
    },
    {
      id: '6',
      title: 'Data Scientist',
      department: 'data',
      location: 'remote',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Analyze complex datasets, build predictive models, and develop data-driven insights to drive business decisions and product improvements.',
      requirements: [
        'Master\'s degree in Statistics, Data Science, or related field',
        '4+ years of data science experience',
        'Expertise in Python, R, and SQL',
        'Experience with machine learning and statistical modeling',
        'Knowledge of big data technologies (Spark, Hadoop)'
      ],
      benefits: [
        'Competitive salary with equity options',
        'Data science conference attendance',
        'Professional development budget',
        'Remote work flexibility',
        'Comprehensive benefits package'
      ],
      isOpen: true
    }
  ];

  const filteredJobs = jobPositions.filter(job => {
    if (selectedDepartment !== 'all' && job.department !== selectedDepartment) return false;
    if (selectedLocation !== 'all' && job.location !== selectedLocation) return false;
    if (selectedType !== 'all' && job.type.toLowerCase().replace(' ', '-') !== selectedType) return false;
    return true;
  });

  const companyValues = [
    {
      icon: Brain,
      title: 'Innovation First',
      description: 'We push the boundaries of what\'s possible with cutting-edge technology and creative solutions.'
    },
    {
      icon: Users,
      title: 'Collaborative Culture',
      description: 'We believe the best ideas come from diverse teams working together towards common goals.'
    },
    {
      icon: Target,
      title: 'Impact Driven',
      description: 'We focus on solving real-world problems that make a meaningful difference in people\'s lives.'
    },
    {
      icon: Zap,
      title: 'Continuous Learning',
      description: 'We encourage growth and development, providing opportunities to learn and advance your career.'
    }
  ];

  const benefits = [
    {
      icon: DollarSign,
      title: 'Competitive Compensation',
      description: 'Above-market salaries with equity options and performance bonuses'
    },
    {
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Comprehensive health, dental, and vision insurance for you and your family'
    },
    {
      icon: Clock,
      title: 'Flexible Work',
      description: 'Remote-first culture with flexible hours and unlimited PTO'
    },
    {
      icon: Star,
      title: 'Professional Growth',
      description: 'Learning budget, conference attendance, and career development programs'
    },
    {
      icon: Users,
      title: 'Team Building',
      description: 'Regular team events, hackathons, and innovation days'
    },
    {
      icon: Award,
      title: 'Recognition',
      description: 'Performance-based rewards and recognition programs'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <div className="bg-slate-900/50 backdrop-blur-md border-b border-slate-700/50">
        <div className="container mx-auto px-6 py-16">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Join Our <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Innovation Team</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Help us build the future of technology. Work with cutting-edge AI, quantum computing, 
                and digital transformation solutions that are reshaping industries worldwide.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Company Values */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Our Values</h2>
            <p className="text-xl text-gray-300">The principles that guide everything we do</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/30 backdrop-blur-md rounded-xl p-6 border border-slate-700/50 text-center hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-slate-800/20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Why Work With Us</h2>
            <p className="text-xl text-gray-300">Comprehensive benefits that support your success</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/30 backdrop-blur-md rounded-xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                  <benefit.icon className="w-7 h-7 text-cyan-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Open Positions</h2>
            <p className="text-xl text-gray-300">Join our team and help shape the future of technology</p>
          </motion.div>

          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-slate-800/30 backdrop-blur-md rounded-xl p-6 border border-slate-700/50 mb-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Department</label>
                <select
                  value={selectedDepartment}
                  onChange={(e) => setSelectedDepartment(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                >
                  {departments.map(dept => (
                    <option key={dept.id} value={dept.id}>{dept.name}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Location</label>
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                >
                  {locations.map(loc => (
                    <option key={loc.id} value={loc.id}>{loc.name}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Job Type</label>
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                >
                  {jobTypes.map(type => (
                    <option key={type.id} value={type.id}>{type.name}</option>
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
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/30 backdrop-blur-md rounded-xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{job.title}</h3>
                    <div className="flex flex-wrap gap-3 text-sm">
                      <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full border border-cyan-500/30">
                        {departments.find(d => d.id === job.department)?.name}
                      </span>
                      <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full border border-blue-500/30">
                        {locations.find(l => l.id === job.location)?.name}
                      </span>
                      <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full border border-green-500/30">
                        {job.type}
                      </span>
                      <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full border border-purple-500/30">
                        {job.experience}
                      </span>
                    </div>
                  </div>
                  <button className="mt-4 lg:mt-0 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center">
                    Apply Now
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>

                <p className="text-gray-300 mb-4">{job.description}</p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Requirements</h4>
                    <ul className="space-y-2">
                      {job.requirements.map((req, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Benefits</h4>
                    <ul className="space-y-2">
                      {job.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start">
                          <Star className="w-4 h-4 text-yellow-400 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredJobs.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-gray-400 text-lg">No positions match your current filters. Try adjusting your search criteria.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-slate-800/20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Don't See the Right Fit?</h2>
            <p className="text-xl text-gray-300 mb-8">
              We're always looking for talented individuals to join our team. 
              Send us your resume and let's discuss how you can contribute to our mission.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:careers@ziontechgroup.com"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
              >
                <Mail className="w-5 h-5 mr-2" />
                Send Resume
              </a>
              <a
                href="/contact"
                className="px-8 py-4 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300 flex items-center justify-center"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Get in Touch
              </a>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <Mail className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
                <p className="text-gray-300">careers@ziontechgroup.com</p>
              </div>
              <div className="text-center">
                <Phone className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
                <p className="text-gray-300">+1 (302) 464-0950</p>
              </div>
              <div className="text-center">
                <MapPin className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
                <p className="text-gray-300">Middletown, DE</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
