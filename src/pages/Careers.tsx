import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Careers: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedLocation, setSelectedLocation] = useState('All');

  const jobCategories = [
    'All',
    'Engineering',
    'AI & Machine Learning',
    'Cybersecurity',
    'Cloud & DevOps',
    'Product Management',
    'Sales & Marketing',
    'Operations',
    'Research & Development'
  ];

  const locations = [
    'All',
    'Remote',
    'New York',
    'San Francisco',
    'London',
    'Singapore',
    'Toronto'
  ];

  const jobListings = [
    {
      id: 1,
      title: 'Senior AI Engineer',
      category: 'AI & Machine Learning',
      location: 'Remote',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Lead the development of cutting-edge AI solutions and machine learning models.',
      requirements: [
        'Advanced degree in Computer Science, AI, or related field',
        'Expertise in Python, TensorFlow, PyTorch',
        'Experience with large language models and NLP',
        'Strong background in machine learning algorithms'
      ],
      benefits: [
        'Competitive salary with equity',
        'Flexible remote work',
        'Professional development budget',
        'Health, dental, and vision insurance'
      ]
    },
    {
      id: 2,
      title: 'Cybersecurity Specialist',
      category: 'Cybersecurity',
      location: 'New York',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Protect our systems and clients from emerging cyber threats.',
      requirements: [
        'Bachelor\'s degree in Cybersecurity or related field',
        'Certifications: CISSP, CEH, or similar',
        'Experience with SIEM tools and threat hunting',
        'Knowledge of compliance frameworks (SOC2, ISO27001)'
      ],
      benefits: [
        'Competitive salary',
        'Hybrid work model',
        'Security conference attendance',
        'Comprehensive benefits package'
      ]
    },
    {
      id: 3,
      title: 'Cloud Solutions Architect',
      category: 'Cloud & DevOps',
      location: 'San Francisco',
      type: 'Full-time',
      experience: '7+ years',
      description: 'Design and implement scalable cloud infrastructure solutions.',
      requirements: [
        'Expert knowledge of AWS, Azure, and GCP',
        'Experience with Kubernetes and Docker',
        'Infrastructure as Code (Terraform, CloudFormation)',
        'Strong understanding of microservices architecture'
      ],
      benefits: [
        'Competitive salary with equity',
        'On-site work with flexible hours',
        'Cloud certification reimbursement',
        'Modern office in downtown SF'
      ]
    },
    {
      id: 4,
      title: 'Product Manager - AI Platform',
      category: 'Product Management',
      location: 'Remote',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Drive the product strategy and roadmap for our AI platform.',
      requirements: [
        'Bachelor\'s degree in Business, Engineering, or related field',
        'Experience in AI/ML product management',
        'Strong analytical and strategic thinking',
        'Excellent communication and stakeholder management'
      ],
      benefits: [
        'Competitive salary with equity',
        'Remote-first culture',
        'Product management training',
        'Flexible PTO policy'
      ]
    },
    {
      id: 5,
      title: 'Quantum Computing Researcher',
      category: 'Research & Development',
      location: 'London',
      type: 'Full-time',
      experience: 'PhD + 2 years',
      description: 'Advance the frontier of quantum computing research.',
      requirements: [
        'PhD in Physics, Computer Science, or related field',
        'Research experience in quantum algorithms',
        'Publications in top-tier journals',
        'Experience with quantum programming languages'
      ],
      benefits: [
        'Competitive academic-level salary',
        'Research budget and resources',
        'Conference and publication support',
        'Collaboration with leading institutions'
      ]
    },
    {
      id: 6,
      title: 'DevOps Engineer',
      category: 'Cloud & DevOps',
      location: 'Toronto',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Build and maintain our CI/CD pipelines and infrastructure.',
      requirements: [
        'Experience with Jenkins, GitLab CI, or similar',
        'Knowledge of Linux administration',
        'Experience with monitoring tools (Prometheus, Grafana)',
        'Scripting skills (Python, Bash)'
      ],
      benefits: [
        'Competitive salary',
        'Hybrid work model',
        'Professional development opportunities',
        'Health and wellness benefits'
      ]
    }
  ];

  const filteredJobs = jobListings.filter(job => {
    const categoryMatch = selectedCategory === 'All' || job.category === selectedCategory;
    const locationMatch = selectedLocation === 'All' || job.location === selectedLocation;
    return categoryMatch && locationMatch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-7xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-8">
            Join Our
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 block">
              Team
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
            Build the future of technology with us. We're looking for passionate innovators, 
            problem solvers, and visionaries to join our mission.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#open-positions"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
            >
              View Open Positions
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
            <a
              href="#culture"
              className="inline-flex items-center px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 hover:border-white/50 transition-all duration-300 transform hover:scale-105"
            >
              Learn About Our Culture
            </a>
          </div>
        </motion.div>
      </section>

      {/* Culture Section */}
      <section id="culture" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Work at Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We're building more than just technology - we're building a future where innovation 
              serves humanity and creates lasting positive impact.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '🚀',
                title: 'Innovation First',
                description: 'Work on cutting-edge technologies that are shaping the future of industries.'
              },
              {
                icon: '🌍',
                title: 'Global Impact',
                description: 'Your work will reach millions of users and transform businesses worldwide.'
              },
              {
                icon: '🤝',
                title: 'Collaborative Culture',
                description: 'Join a team of brilliant minds who support and challenge each other.'
              },
              {
                icon: '📈',
                title: 'Growth & Learning',
                description: 'Continuous learning opportunities and career advancement paths.'
              },
              {
                icon: '⚖️',
                title: 'Work-Life Balance',
                description: 'Flexible schedules and policies that respect your personal time.'
              },
              {
                icon: '🏆',
                title: 'Recognition',
                description: 'Your contributions are valued and celebrated at every level.'
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 text-center"
              >
                <div className="text-6xl mb-6">{value.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-4">{value.title}</h3>
                <p className="text-gray-300 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Filters */}
      <section id="open-positions" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Open Positions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Find the perfect role that matches your skills and passion
            </p>
          </motion.div>

          {/* Filters */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Category</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-blue-400"
              >
                {jobCategories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Location</label>
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-blue-400"
              >
                {locations.map(location => (
                  <option key={location} value={location}>{location}</option>
                ))}
              </select>
            </div>
          </motion.div>

          {/* Job Listings */}
          <div className="space-y-6">
            {filteredJobs.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{job.title}</h3>
                    <div className="flex flex-wrap gap-3 mb-4">
                      <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium">
                        {job.category}
                      </span>
                      <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-medium">
                        {job.location}
                      </span>
                      <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm font-medium">
                        {job.type}
                      </span>
                      <span className="px-3 py-1 bg-orange-500/20 text-orange-400 rounded-full text-sm font-medium">
                        {job.experience}
                      </span>
                    </div>
                  </div>
                  <button className="lg:ml-6 px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105">
                    Apply Now
                  </button>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed">{job.description}</p>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-4">Requirements</h4>
                    <ul className="space-y-2">
                      {job.requirements.map((req, idx) => (
                        <li key={idx} className="flex items-start">
                          <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-300 text-sm">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-4">Benefits</h4>
                    <ul className="space-y-2">
                      {job.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start">
                          <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
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
              className="text-center py-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-xl text-gray-300">No positions match your current filters.</p>
              <button
                onClick={() => {
                  setSelectedCategory('All');
                  setSelectedLocation('All');
                }}
                className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Clear Filters
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <motion.section 
        className="py-20 bg-gradient-to-r from-blue-900/50 to-cyan-900/50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Don't See the Right Fit?
          </h2>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed">
            We're always looking for talented individuals. Send us your resume and we'll 
            keep you in mind for future opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center px-10 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg"
            >
              Send Resume
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </a>
            <a
              href="/about"
              className="inline-flex items-center px-10 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 hover:border-white/50 transition-all duration-300 transform hover:scale-105"
            >
              Learn More About Us
            </a>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Careers;