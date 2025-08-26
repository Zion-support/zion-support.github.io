import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  Users, 
  Zap, 
  Brain, 
  Shield, 
  Cloud,
  ArrowRight,
  CheckCircle,
  Star,
  Globe,
  Heart,
  Lightbulb,
  Award
} from 'lucide-react';

export default function Careers() {
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [selectedType, setSelectedType] = useState('all');

  const departments = [
    { id: 'all', name: 'All Departments', count: 25 },
    { id: 'engineering', name: 'Engineering', count: 12 },
    { id: 'ai-research', name: 'AI Research', count: 8 },
    { id: 'sales', name: 'Sales & Business', count: 3 },
    { id: 'design', name: 'Design & UX', count: 2 }
  ];

  const locations = [
    { id: 'all', name: 'All Locations', count: 25 },
    { id: 'middletown', name: 'Middletown, DE', count: 15 },
    { id: 'remote', name: 'Remote', count: 8 },
    { id: 'amsterdam', name: 'Amsterdam, NL', count: 2 }
  ];

  const jobTypes = [
    { id: 'all', name: 'All Types', count: 25 },
    { id: 'full-time', name: 'Full Time', count: 18 },
    { id: 'part-time', name: 'Part Time', count: 4 },
    { id: 'contract', name: 'Contract', count: 3 }
  ];

  const openPositions = [
    {
      id: 1,
      title: 'Senior AI Engineer',
      department: 'AI Research',
      location: 'Middletown, DE',
      type: 'Full Time',
      experience: '5+ years',
      description: 'Join our AI research team to develop cutting-edge machine learning models and autonomous systems.',
      requirements: [
        'PhD in Computer Science or related field',
        'Strong background in machine learning and deep learning',
        'Experience with PyTorch, TensorFlow, or similar frameworks',
        'Published research in top-tier conferences/journals'
      ],
      benefits: [
        'Competitive salary with equity options',
        'Flexible work arrangements',
        'Access to cutting-edge AI infrastructure',
        'Conference and training opportunities'
      ],
      featured: true
    },
    {
      id: 2,
      title: 'Full Stack Developer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full Time',
      experience: '3+ years',
      description: 'Build scalable web applications and APIs that power our AI solutions and client platforms.',
      requirements: [
        'Strong experience with React, Node.js, and TypeScript',
        'Experience with cloud platforms (AWS, Azure, or GCP)',
        'Knowledge of database design and optimization',
        'Experience with CI/CD pipelines'
      ],
      benefits: [
        'Remote-first work environment',
        'Competitive salary and benefits',
        'Professional development budget',
        'Modern tech stack and tools'
      ],
      featured: false
    },
    {
      id: 3,
      title: 'AI Solutions Architect',
      department: 'Sales & Business',
      location: 'Middletown, DE',
      type: 'Full Time',
      experience: '7+ years',
      description: 'Design and architect AI solutions for enterprise clients, ensuring successful implementation and adoption.',
      requirements: [
        'Experience in enterprise software architecture',
        'Strong understanding of AI/ML technologies',
        'Excellent communication and presentation skills',
        'Experience with enterprise sales cycles'
      ],
      benefits: [
        'Base salary + commission structure',
        'Travel opportunities',
        'Professional development programs',
        'Performance-based bonuses'
      ],
      featured: true
    },
    {
      id: 4,
      title: 'UX/UI Designer',
      department: 'Design & UX',
      location: 'Remote',
      type: 'Full Time',
      experience: '4+ years',
      description: 'Create intuitive and beautiful user experiences for our AI-powered applications and platforms.',
      requirements: [
        'Strong portfolio demonstrating UX/UI skills',
        'Experience with design tools (Figma, Sketch, etc.)',
        'Understanding of user research and testing',
        'Experience with AI/ML product design'
      ],
      benefits: [
        'Creative and collaborative environment',
        'Remote work flexibility',
        'Design tools and resources provided',
        'Opportunity to shape product experiences'
      ],
      featured: false
    },
    {
      id: 5,
      title: 'DevOps Engineer',
      department: 'Engineering',
      location: 'Middletown, DE',
      type: 'Full Time',
      experience: '4+ years',
      description: 'Build and maintain our cloud infrastructure, ensuring high availability and scalability of our AI services.',
      requirements: [
        'Experience with AWS, Kubernetes, and Docker',
        'Strong scripting skills (Python, Bash)',
        'Experience with monitoring and logging tools',
        'Knowledge of security best practices'
      ],
      benefits: [
        'On-site and remote hybrid options',
        'Competitive salary and benefits',
        'Latest tools and technologies',
        'Professional certification support'
      ],
      featured: false
    },
    {
      id: 6,
      title: 'AI Research Intern',
      department: 'AI Research',
      location: 'Middletown, DE',
      type: 'Part Time',
      experience: 'Graduate Student',
      description: 'Join our research team to work on cutting-edge AI projects and gain hands-on experience.',
      requirements: [
        'Currently pursuing MS/PhD in Computer Science',
        'Strong academic background in AI/ML',
        'Experience with Python and ML frameworks',
        'Passion for research and innovation'
      ],
      benefits: [
        'Competitive internship stipend',
        'Mentorship from leading researchers',
        'Potential for full-time opportunities',
        'Research publication opportunities'
      ],
      featured: false
    }
  ];

  const filteredPositions = openPositions.filter(position => {
    const matchesDepartment = selectedDepartment === 'all' || position.department.toLowerCase().includes(selectedDepartment);
    const matchesLocation = selectedLocation === 'all' || position.location.toLowerCase().includes(selectedLocation);
    const matchesType = selectedType === 'all' || position.type.toLowerCase().includes(selectedType);
    return matchesDepartment && matchesLocation && matchesType;
  });

  const values = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'Innovation First',
      description: 'We encourage creative thinking and breakthrough solutions'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'People Matter',
      description: 'We invest in our team\'s growth and well-being'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Global Impact',
      description: 'We work on solutions that change the world'
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: 'Continuous Learning',
      description: 'We foster a culture of growth and development'
    }
  ];

  const benefits = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Flexible Work',
      description: 'Remote-first culture with flexible hours'
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Competitive Pay',
      description: 'Excellent salary with equity options'
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: 'Learning Budget',
      description: 'Annual budget for courses and conferences'
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: 'Health Benefits',
      description: 'Comprehensive health and wellness coverage'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Security',
      description: '401k matching and financial planning'
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: 'Modern Tools',
      description: 'Latest technology and equipment provided'
    }
  ];

  return (
    <div className="min-h-screen bg-zion-blue-dark text-white">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Join Our <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Team</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Be part of a team that's revolutionizing technology and shaping the future. 
              We're looking for passionate individuals who want to make a difference.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#positions"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
              >
                View Open Positions
              </a>
              <Link
                to="/contact"
                className="px-8 py-4 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                Contact HR Team
              </Link>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
          >
            <div className="text-center">
              <div className="text-3xl font-bold mb-2 text-cyan-400">25+</div>
              <div className="text-gray-300">Open Positions</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2 text-blue-400">50+</div>
              <div className="text-gray-300">Team Members</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2 text-purple-400">15+</div>
              <div className="text-gray-300">Countries</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2 text-green-400">98%</div>
              <div className="text-gray-300">Employee Satisfaction</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-black/30">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Our Values</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The principles that guide our decisions and shape our company culture.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-white">
                    {value.icon}
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-300 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Why Work With Us?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We offer competitive benefits and a supportive environment where you can thrive and grow.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <div className="text-white">
                    {benefit.icon}
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-300 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="positions" className="py-20 bg-black/30">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Open Positions</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our current opportunities and find the perfect role for your skills and passion.
            </p>
          </motion.div>

          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-12"
          >
            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Department Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Department</label>
                  <select
                    value={selectedDepartment}
                    onChange={(e) => setSelectedDepartment(e.target.value)}
                    className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  >
                    {departments.map((dept) => (
                      <option key={dept.id} value={dept.id}>
                        {dept.name} ({dept.count})
                      </option>
                    ))}
                  </select>
                </div>

                {/* Location Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Location</label>
                  <select
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                    className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  >
                    {locations.map((loc) => (
                      <option key={loc.id} value={loc.id}>
                        {loc.name} ({loc.count})
                      </option>
                    ))}
                  </select>
                </div>

                {/* Job Type Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Job Type</label>
                  <select
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                    className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  >
                    {jobTypes.map((type) => (
                      <option key={type.id} value={type.id}>
                        {type.name} ({type.count})
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Job Listings */}
          <div className="space-y-6">
            {filteredPositions.map((position, index) => (
              <motion.div
                key={position.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border transition-all duration-300 ${
                  position.featured 
                    ? 'border-cyan-500/50 shadow-lg shadow-cyan-500/20' 
                    : 'border-gray-700 hover:border-cyan-500/30'
                }`}
              >
                {position.featured && (
                  <div className="inline-flex items-center px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full border border-cyan-500/30 mb-4">
                    <Star className="w-4 h-4 mr-2" />
                    Featured Position
                  </div>
                )}

                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <h3 className="text-2xl font-bold">{position.title}</h3>
                      {position.featured && (
                        <span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 text-xs rounded-full border border-yellow-500/30">
                          Hot
                        </span>
                      )}
                    </div>

                    <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-gray-300">
                      <div className="flex items-center gap-2">
                        <Briefcase className="w-4 h-4" />
                        {position.department}
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        {position.location}
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        {position.type}
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        {position.experience}
                      </div>
                    </div>

                    <p className="text-gray-300 mb-6 leading-relaxed">{position.description}</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-white mb-3">Requirements</h4>
                        <ul className="space-y-2">
                          {position.requirements.map((req, idx) => (
                            <li key={idx} className="flex items-start text-sm text-gray-300">
                              <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-white mb-3">Benefits</h4>
                        <ul className="space-y-2">
                          {position.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-start text-sm text-gray-300">
                              <CheckCircle className="w-4 h-4 text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="lg:flex-shrink-0">
                    <button className="w-full lg:w-auto px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center gap-2">
                      Apply Now
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredPositions.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-gray-400 text-lg">No positions match your current filters.</p>
              <button
                onClick={() => {
                  setSelectedDepartment('all');
                  setSelectedLocation('all');
                  setSelectedType('all');
                }}
                className="mt-4 px-6 py-2 text-cyan-400 hover:text-white transition-colors"
              >
                Clear all filters
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Our Culture</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We foster an environment where innovation thrives and people grow.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700"
            >
              <h3 className="text-2xl font-bold mb-4">Growth & Development</h3>
              <p className="text-gray-300 mb-6">
                We believe in continuous learning and provide opportunities for professional growth.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>• Annual learning and development budget</li>
                <li>• Conference attendance and speaking opportunities</li>
                <li>• Mentorship programs and career planning</li>
                <li>• Internal knowledge sharing sessions</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700"
            >
              <h3 className="text-2xl font-bold mb-4">Work-Life Balance</h3>
              <p className="text-gray-300 mb-6">
                We promote healthy work-life balance and flexible working arrangements.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>• Flexible working hours and remote options</li>
                <li>• Generous vacation and personal time off</li>
                <li>• Wellness programs and health benefits</li>
                <li>• Team building and social activities</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black/30">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">Don't See the Right Role?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals. Send us your resume and we'll 
              keep you in mind for future opportunities.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
              >
                Send Resume
              </Link>
              <a
                href="mailto:careers@ziontechgroup.com"
                className="px-8 py-4 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                Email HR Team
              </a>
            </div>

            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
              <h3 className="text-lg font-semibold mb-3">Stay Connected</h3>
              <p className="text-gray-300 text-sm mb-4">
                Follow us on social media to stay updated on new opportunities and company news.
              </p>
              <div className="flex justify-center space-x-4">
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  LinkedIn
                </a>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Twitter
                </a>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Instagram
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
