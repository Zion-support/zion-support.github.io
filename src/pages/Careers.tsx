import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Briefcase, 
  Users, 
  Heart, 
  Zap, 
  Globe, 
  Award,
  MapPin,
  Clock,
  DollarSign,
  GraduationCap,
  Send,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

const Careers = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');

  const departments = [
    { id: 'all', name: 'All Departments' },
    { id: 'engineering', name: 'Engineering' },
    { id: 'ai-ml', name: 'AI & Machine Learning' },
    { id: 'data-science', name: 'Data Science' },
    { id: 'cybersecurity', name: 'Cybersecurity' },
    { id: 'sales', name: 'Sales & Business Development' },
    { id: 'marketing', name: 'Marketing' },
    { id: 'operations', name: 'Operations' }
  ];

  const locations = [
    { id: 'all', name: 'All Locations' },
    { id: 'remote', name: 'Remote' },
    { id: 'new-york', name: 'New York, NY' },
    { id: 'san-francisco', name: 'San Francisco, CA' },
    { id: 'austin', name: 'Austin, TX' },
    { id: 'boston', name: 'Boston, MA' },
    { id: 'seattle', name: 'Seattle, WA' }
  ];

  const jobListings = [
    {
      id: 1,
      title: 'Senior AI Engineer',
      department: 'ai-ml',
      location: 'remote',
      type: 'Full-time',
      experience: '5+ years',
      salary: '$120k - $180k',
      description: 'Lead the development of cutting-edge AI solutions for enterprise clients.',
      requirements: [
        'Advanced degree in Computer Science, AI, or related field',
        'Experience with deep learning frameworks (PyTorch, TensorFlow)',
        'Strong Python programming skills',
        'Experience with cloud platforms (AWS, Azure, GCP)',
        'Published research or open-source contributions preferred'
      ],
      benefits: [
        'Competitive salary and equity',
        'Flexible remote work options',
        'Health, dental, and vision insurance',
        'Professional development budget',
        'Unlimited PTO'
      ]
    },
    {
      id: 2,
      title: 'Cybersecurity Specialist',
      department: 'cybersecurity',
      location: 'new-york',
      type: 'Full-time',
      experience: '3+ years',
      salary: '$90k - $140k',
      description: 'Protect our clients and infrastructure from evolving cyber threats.',
      requirements: [
        'Bachelor\'s degree in Cybersecurity, IT, or related field',
        'Certifications: CISSP, CEH, or similar',
        'Experience with SIEM tools and threat hunting',
        'Knowledge of compliance frameworks (SOC2, ISO27001)',
        'Strong analytical and problem-solving skills'
      ],
      benefits: [
        'Competitive salary and benefits',
        'Professional certification support',
        'Modern office in Manhattan',
        'Team events and networking',
        '401k with company match'
      ]
    },
    {
      id: 3,
      title: 'Data Scientist',
      department: 'data-science',
      location: 'san-francisco',
      type: 'Full-time',
      experience: '2+ years',
      salary: '$100k - $150k',
      description: 'Transform raw data into actionable insights for business decisions.',
      requirements: [
        'Master\'s degree in Statistics, Mathematics, or related field',
        'Proficiency in Python, R, and SQL',
        'Experience with machine learning algorithms',
        'Strong statistical analysis skills',
        'Experience with big data technologies'
      ],
      benefits: [
        'Competitive salary and equity',
        'Beautiful office in San Francisco',
        'Health and wellness benefits',
        'Learning and development opportunities',
        'Flexible work arrangements'
      ]
    },
    {
      id: 4,
      title: 'Full Stack Developer',
      department: 'engineering',
      location: 'remote',
      type: 'Full-time',
      experience: '3+ years',
      salary: '$85k - $130k',
      description: 'Build scalable web applications and platforms for our clients.',
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        'Proficiency in JavaScript, React, Node.js',
        'Experience with cloud platforms and databases',
        'Knowledge of DevOps practices',
        'Strong problem-solving skills'
      ],
      benefits: [
        'Competitive salary and benefits',
        'Remote work flexibility',
        'Health insurance coverage',
        'Professional development budget',
        'Flexible PTO policy'
      ]
    },
    {
      id: 5,
      title: 'Sales Development Representative',
      department: 'sales',
      location: 'austin',
      type: 'Full-time',
      experience: '1+ years',
      salary: '$60k - $80k + commission',
      description: 'Generate new business opportunities and drive revenue growth.',
      requirements: [
        'Bachelor\'s degree in Business or related field',
        'Strong communication and interpersonal skills',
        'Experience with CRM systems (Salesforce preferred)',
        'Motivated and results-driven attitude',
        'Interest in technology and innovation'
      ],
      benefits: [
        'Base salary plus uncapped commission',
        'Health and dental insurance',
        'Modern office in Austin',
        'Career growth opportunities',
        'Team building events'
      ]
    }
  ];

  const companyValues = [
    {
      icon: Heart,
      title: 'People First',
      description: 'We believe our team is our greatest asset and invest in their growth and well-being.'
    },
    {
      icon: Zap,
      title: 'Innovation Driven',
      description: 'We constantly push boundaries and embrace new technologies to solve complex problems.'
    },
    {
      icon: Globe,
      title: 'Global Impact',
      description: 'Our solutions help organizations worldwide transform and succeed in the digital age.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We maintain the highest standards of quality and professionalism in everything we do.'
    }
  ];

  const filteredJobs = jobListings.filter(job => {
    const matchesDepartment = selectedDepartment === 'all' || job.department === selectedDepartment;
    const matchesLocation = selectedLocation === 'all' || job.location === selectedLocation;
    return matchesDepartment && matchesLocation;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Join Our
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Innovation Team
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Help us build the future of technology. Join a team of passionate innovators, 
              problem-solvers, and visionaries who are transforming industries worldwide.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#open-positions"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 hover:scale-105"
              >
                View Open Positions
              </a>
              <a
                href="#company-culture"
                className="border border-cyan-500 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                Learn About Culture
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Company Values */}
      <section id="company-culture" className="py-20 px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Our Values</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              The principles that guide our work and shape our culture.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6 bg-slate-800/20">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Why Work With Us</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              We offer competitive benefits and a supportive environment where you can thrive.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Heart, title: 'Health & Wellness', description: 'Comprehensive health, dental, and vision coverage for you and your family.' },
              { icon: GraduationCap, title: 'Learning & Growth', description: 'Professional development budget, conferences, and continuous learning opportunities.' },
              { icon: Globe, title: 'Flexible Work', description: 'Remote work options, flexible hours, and work-life balance support.' },
              { icon: Award, title: 'Recognition', description: 'Performance bonuses, equity options, and recognition for your contributions.' },
              { icon: Users, title: 'Team Culture', description: 'Collaborative environment, team events, and strong community bonds.' },
              { icon: Zap, title: 'Innovation', description: 'Work with cutting-edge technologies and shape the future of tech.' }
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 text-center hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section id="open-positions" className="py-20 px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Open Positions</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Find the perfect role that matches your skills and career goals.
            </p>
          </motion.div>

          {/* Filters */}
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <select
              value={selectedDepartment}
              onChange={(e) => setSelectedDepartment(e.target.value)}
              className="px-4 py-2 bg-slate-800 border border-slate-600 rounded-lg text-white focus:border-cyan-500 focus:outline-none"
            >
              {departments.map(dept => (
                <option key={dept.id} value={dept.id}>{dept.name}</option>
              ))}
            </select>
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="px-4 py-2 bg-slate-800 border border-slate-600 rounded-lg text-white focus:border-cyan-500 focus:outline-none"
            >
              {locations.map(loc => (
                <option key={loc.id} value={loc.id}>{loc.name}</option>
              ))}
            </select>
          </div>

          {/* Job Cards */}
          <div className="space-y-6">
            {filteredJobs.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <h3 className="text-2xl font-bold text-white">{job.title}</h3>
                      <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full">
                        {job.type}
                      </span>
                    </div>
                    
                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-400">
                      <div className="flex items-center gap-2">
                        <Briefcase className="w-4 h-4" />
                        {departments.find(d => d.id === job.department)?.name}
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        {locations.find(l => l.id === job.location)?.name}
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        {job.experience}
                      </div>
                      <div className="flex items-center gap-2">
                        <DollarSign className="w-4 h-4" />
                        {job.salary}
                      </div>
                    </div>
                    
                    <p className="text-gray-300 mb-4">{job.description}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-sm font-semibold text-cyan-400 mb-2">Requirements</h4>
                        <ul className="space-y-1">
                          {job.requirements.slice(0, 3).map((req, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-gray-400">
                              <CheckCircle className="w-3 h-3 text-cyan-400 mt-1 flex-shrink-0" />
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-purple-400 mb-2">Benefits</h4>
                        <ul className="space-y-1">
                          {job.benefits.slice(0, 3).map((benefit, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-gray-400">
                              <CheckCircle className="w-3 h-3 text-purple-400 mt-1 flex-shrink-0" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="lg:text-right">
                    <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 hover:scale-105 flex items-center gap-2">
                      Apply Now
                      <Send className="w-4 h-4" />
                    </button>
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
              <p className="text-gray-400 text-lg">No positions match your current filters.</p>
              <button
                onClick={() => {
                  setSelectedDepartment('all');
                  setSelectedLocation('all');
                }}
                className="mt-4 text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                Clear filters
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-2xl p-12 border border-slate-600/50"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Don't See the Right Fit?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals to join our team. 
              Send us your resume and we'll keep you in mind for future opportunities.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 hover:scale-105 flex items-center gap-2">
                Submit Resume
                <ArrowRight className="w-5 h-5" />
              </button>
              <a
                href="mailto:careers@ziontechgroup.com"
                className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
