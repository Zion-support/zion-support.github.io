<<<<<<< HEAD
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Users, 
  Globe, 
  Heart, 
  Zap,
  CheckCircle,
  ArrowRight,
  MapPin,
  Clock,
  Briefcase,
  GraduationCap
} from 'lucide-react';

export default function Careers() {
  const openPositions = [
    {
      title: "Senior AI Engineer",
      department: "AI & Machine Learning",
      location: "Remote / New York",
      type: "Full-time",
      experience: "5+ years",
      description: "Lead AI initiatives and develop cutting-edge machine learning solutions",
      requirements: [
        "Advanced degree in Computer Science or related field",
        "Experience with TensorFlow, PyTorch, and cloud platforms",
        "Strong background in NLP and computer vision",
        "Experience leading technical teams"
      ]
    },
    {
      title: "Cybersecurity Specialist",
      department: "Security",
      location: "Remote / Delaware",
      type: "Full-time",
      experience: "3+ years",
      description: "Protect our clients with advanced cybersecurity solutions",
      requirements: [
        "Certifications in CISSP, CEH, or similar",
        "Experience with penetration testing and security audits",
        "Knowledge of compliance frameworks (SOC 2, ISO 27001)",
        "Strong analytical and problem-solving skills"
      ]
    },
    {
      title: "Cloud Solutions Architect",
      department: "Cloud & Infrastructure",
      location: "Remote / Global",
      type: "Full-time",
      experience: "7+ years",
      description: "Design and implement scalable cloud solutions for enterprise clients",
      requirements: [
        "Expertise in AWS, Azure, and Google Cloud",
        "Experience with Kubernetes and containerization",
        "Strong understanding of DevOps practices",
        "Excellent communication and client-facing skills"
      ]
    },
    {
      title: "Full Stack Developer",
      department: "Software Development",
      location: "Remote / New York",
      type: "Full-time",
      experience: "3+ years",
      description: "Build modern web applications and digital solutions",
      requirements: [
        "Proficiency in React, Node.js, and modern web technologies",
        "Experience with cloud platforms and databases",
        "Understanding of agile development methodologies",
        "Passion for clean code and user experience"
=======
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, MapPin, Briefcase, Clock, DollarSign, Award, ArrowRight, CheckCircle, Users, TrendingUp, Zap, Shield } from 'lucide-react';
import { SEO } from '../components/SEO';

const jobCategories = [
  { id: 'all', name: 'All Positions', count: 24 },
  { id: 'engineering', name: 'Engineering', count: 8 },
  { id: 'ai-ml', name: 'AI & Machine Learning', count: 6 },
  { id: 'cybersecurity', name: 'Cybersecurity', count: 4 },
  { id: 'cloud', name: 'Cloud & DevOps', count: 3 },
  { id: 'business', name: 'Business & Sales', count: 3 }
];

const jobs = {
  all: [
    {
      title: 'Senior AI Engineer',
      department: 'AI & Machine Learning',
      location: 'Remote / San Francisco',
      type: 'Full-time',
      experience: '5+ years',
      salary: '$150K - $200K',
      description: 'Lead the development of cutting-edge AI solutions for enterprise clients.',
      requirements: [
        'Expert in Python, TensorFlow, PyTorch',
        'Experience with large language models',
        'Strong background in machine learning',
        'PhD in Computer Science or related field'
      ],
      responsibilities: [
        'Design and implement AI algorithms',
        'Lead technical architecture decisions',
        'Mentor junior engineers',
        'Collaborate with product teams'
      ]
    },
    {
      title: 'Cybersecurity Specialist',
      department: 'Security',
      location: 'New York / Remote',
      type: 'Full-time',
      experience: '3+ years',
      salary: '$120K - $160K',
      description: 'Protect our clients from evolving cyber threats with advanced security solutions.',
      requirements: [
        'Certified Information Systems Security Professional (CISSP)',
        'Experience with SIEM tools and threat hunting',
        'Knowledge of compliance frameworks',
        'Strong analytical and problem-solving skills'
      ],
      responsibilities: [
        'Conduct security assessments',
        'Implement security controls',
        'Monitor and respond to security incidents',
        'Develop security policies and procedures'
      ]
    },
    {
      title: 'Cloud Solutions Architect',
      department: 'Cloud & DevOps',
      location: 'Austin / Remote',
      type: 'Full-time',
      experience: '7+ years',
      salary: '$160K - $220K',
      description: 'Design and implement scalable cloud infrastructure solutions.',
      requirements: [
        'AWS, Azure, or GCP certifications',
        'Experience with Kubernetes and Docker',
        'Strong understanding of microservices architecture',
        'Background in software development'
      ],
      responsibilities: [
        'Design cloud architecture solutions',
        'Lead migration projects',
        'Optimize cloud costs and performance',
        'Provide technical leadership'
      ]
    }
  ],
  engineering: [
    {
      title: 'Full Stack Developer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      experience: '3+ years',
      salary: '$100K - $140K',
      description: 'Build scalable web applications using modern technologies.',
      requirements: [
        'Proficient in React, Node.js, TypeScript',
        'Experience with cloud platforms',
        'Knowledge of database design',
        'Strong problem-solving skills'
      ],
      responsibilities: [
        'Develop new features and applications',
        'Write clean, maintainable code',
        'Participate in code reviews',
        'Collaborate with cross-functional teams'
>>>>>>> ff4f0c93d22f1112230dad999864f5dae02b17b2
      ]
    }
  ];

  const benefits = [
    {
<<<<<<< HEAD
      icon: Globe,
      title: "Remote First",
      description: "Work from anywhere in the world"
    },
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive health coverage and wellness programs"
    },
    {
      icon: Zap,
      title: "Learning & Growth",
      description: "Continuous learning opportunities and career development"
    },
    {
      icon: Users,
      title: "Great Team",
      description: "Collaborate with talented professionals worldwide"
=======
      title: 'Machine Learning Engineer',
      department: 'AI & Machine Learning',
      location: 'San Francisco / Remote',
      type: 'Full-time',
      experience: '4+ years',
      salary: '$130K - $180K',
      description: 'Build and deploy machine learning models at scale.',
      requirements: [
        'Strong Python programming skills',
        'Experience with ML frameworks',
        'Knowledge of MLOps practices',
        'Background in statistics and mathematics'
      ],
      responsibilities: [
        'Develop ML models and pipelines',
        'Optimize model performance',
        'Deploy models to production',
        'Collaborate with data scientists'
      ]
>>>>>>> ff4f0c93d22f1112230dad999864f5dae02b17b2
    }
  ];

  const values = [
    {
<<<<<<< HEAD
      title: "Innovation",
      description: "We push boundaries and embrace new technologies"
    },
    {
      title: "Excellence",
      description: "We maintain the highest standards in everything we do"
    },
    {
      title: "Collaboration",
      description: "We believe in the power of teamwork and partnerships"
    },
    {
      title: "Impact",
      description: "We create solutions that make a real difference"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="pt-24 pb-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Join Our Team
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Build the future with cutting-edge technology and innovative solutions
            </p>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Join Zion Tech Group and be part of a team that's transforming businesses 
              through AI, cloud computing, and digital innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Values Section */}
      <section className="py-20 bg-black/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The principles that guide everything we do and every decision we make
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="text-center group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Work With Us?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover the advantages of being part of the Zion Tech Group team
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="text-center group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {benefit.description}
                </p>
=======
      title: 'Security Engineer',
      department: 'Security',
      location: 'Remote',
      type: 'Full-time',
      experience: '2+ years',
      salary: '$90K - $130K',
      description: 'Implement and maintain security infrastructure.',
      requirements: [
        'Experience with security tools and technologies',
        'Knowledge of network security',
        'Understanding of security best practices',
        'Strong attention to detail'
      ],
      responsibilities: [
        'Configure security tools',
        'Monitor security systems',
        'Respond to security alerts',
        'Maintain security documentation'
      ]
    }
  ],
  cloud: [
    {
      title: 'DevOps Engineer',
      department: 'Cloud & DevOps',
      location: 'Remote',
      type: 'Full-time',
      experience: '3+ years',
      salary: '$110K - $150K',
      description: 'Automate and optimize our development and deployment processes.',
      requirements: [
        'Experience with CI/CD pipelines',
        'Knowledge of infrastructure as code',
        'Familiarity with monitoring tools',
        'Strong scripting skills'
      ],
      responsibilities: [
        'Build and maintain CI/CD pipelines',
        'Automate deployment processes',
        'Monitor system performance',
        'Collaborate with development teams'
      ]
    }
  ],
  business: [
    {
      title: 'Business Development Manager',
      department: 'Business & Sales',
      location: 'New York / Remote',
      type: 'Full-time',
      experience: '5+ years',
      salary: '$120K - $160K + Commission',
      description: 'Drive business growth through strategic partnerships and client relationships.',
      requirements: [
        'Proven track record in B2B sales',
        'Experience in technology industry',
        'Strong communication skills',
        'Ability to build relationships'
      ],
      responsibilities: [
        'Identify new business opportunities',
        'Build client relationships',
        'Develop sales strategies',
        'Meet revenue targets'
      ]
    }
  ]
};

export default function Careers() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredJobs = jobs[activeTab]?.filter(job =>
    job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    job.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
    job.description.toLowerCase().includes(searchQuery.toLowerCase())
  ) || [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      <SEO 
        title="Careers at Zion Tech Group - Join Our Team"
        description="Explore exciting career opportunities at Zion Tech Group. Join our team of innovators in AI, cybersecurity, cloud solutions, and emerging technologies."
        keywords="careers, jobs, employment, Zion Tech Group, AI, cybersecurity, cloud, technology jobs"
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-6xl mx-auto">
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Join the <span className="bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-blue bg-clip-text text-transparent">
                Future
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-zion-slate-light mb-12 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Be part of a team that's shaping the future of technology. Work on cutting-edge projects 
              in AI, cybersecurity, and emerging technologies while building your career with purpose.
            </motion.p>

            {/* Search Bar */}
            <motion.div 
              className="max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zion-slate-light" />
                <input
                  type="text"
                  placeholder="Search positions, departments, or keywords..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-xl text-white placeholder-zion-slate-light focus:border-zion-cyan focus:outline-none focus:ring-2 focus:ring-zion-cyan/20 transition-all duration-300"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20 bg-zion-slate-dark/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why <span className="bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">Zion Tech Group</span>?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="w-12 h-12 text-zion-cyan" />,
                title: 'Cutting-Edge Technology',
                description: 'Work with the latest AI, quantum computing, and emerging technologies that define the future.'
              },
              {
                icon: <Users className="w-12 h-12 text-zion-cyan" />,
                title: 'Collaborative Culture',
                description: 'Join a diverse team of experts who value innovation, creativity, and mutual support.'
              },
              {
                icon: <TrendingUp className="w-12 h-12 text-zion-cyan" />,
                title: 'Career Growth',
                description: 'Continuous learning opportunities, mentorship programs, and clear career progression paths.'
              },
              {
                icon: <Shield className="w-12 h-12 text-zion-cyan" />,
                title: 'Work-Life Balance',
                description: 'Flexible remote work options, competitive benefits, and a healthy work environment.'
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                className="text-center p-8 bg-zion-slate-dark/50 rounded-xl border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-center mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{benefit.title}</h3>
                <p className="text-zion-slate-light">{benefit.description}</p>
>>>>>>> ff4f0c93d22f1112230dad999864f5dae02b17b2
              </motion.div>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Open Positions Section */}
      <section className="py-20 bg-black/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Open Positions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join our team and help us build the future of technology
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {openPositions.map((position, index) => (
              <motion.div
                key={index}
                className="bg-slate-800/50 p-8 rounded-xl border border-slate-700 hover:border-cyan-500 transition-all duration-300 group hover:bg-slate-800/70"
                initial={{ opacity: 0, y: 20 }}
=======
      {/* Job Listings */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Open <span className="bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">Positions</span>
            </h2>
          </motion.div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {jobCategories.map((tab, index) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-zion-cyan to-zion-blue text-white shadow-lg shadow-zion-cyan/25'
                    : 'bg-zion-slate-dark/50 text-zion-slate-light hover:bg-zion-slate-dark/70 border border-zion-cyan/20'
                }`}
                initial={{ opacity: 0, y: 30 }}
>>>>>>> ff4f0c93d22f1112230dad999864f5dae02b17b2
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
<<<<<<< HEAD
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold text-white">{position.title}</h3>
                  <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm">
                    {position.type}
                  </span>
                </div>
                
                <div className="flex items-center space-x-4 mb-4 text-sm text-gray-400">
                  <div className="flex items-center">
                    <Briefcase className="w-4 h-4 mr-2" />
                    {position.department}
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    {position.location}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    {position.experience}
                  </div>
                </div>
                
                <p className="text-gray-300 mb-4">{position.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-2">Requirements:</h4>
                  <ul className="space-y-1">
                    {position.requirements.map((req, idx) => (
                      <li key={idx} className="text-sm text-gray-400 flex items-center">
                        <CheckCircle className="w-3 h-3 text-cyan-400 mr-2" />
                        {req}
                      </li>
                    ))}
                  </ul>
=======
                              >
                  {tab.label} ({tab.count})
                </motion.button>
            ))}
          </div>

          {/* Job Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredJobs.map((job, index) => (
              <motion.div
                key={index}
                className="bg-zion-slate-dark/50 rounded-xl p-8 border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">{job.title}</h3>
                    <p className="text-zion-slate-light mb-4">{job.description}</p>
                    
                    <div className="flex flex-wrap gap-4 mb-6">
                      <div className="flex items-center text-zion-slate-light text-sm">
                        <Briefcase className="w-4 h-4 text-zion-cyan mr-2" />
                        {job.department}
                      </div>
                      <div className="flex items-center text-zion-slate-light text-sm">
                        <MapPin className="w-4 h-4 text-zion-cyan mr-2" />
                        {job.location}
                      </div>
                      <div className="flex items-center text-zion-slate-light text-sm">
                        <Clock className="w-4 h-4 text-zion-cyan mr-2" />
                        {job.type}
                      </div>
                      <div className="flex items-center text-zion-slate-light text-sm">
                        <Award className="w-4 h-4 text-zion-cyan mr-2" />
                        {job.experience}
                      </div>
                      <div className="flex items-center text-zion-slate-light text-sm">
                        <DollarSign className="w-4 h-4 text-zion-cyan mr-2" />
                        {job.salary}
                      </div>
                    </div>
                  </div>
                  
                  <div className="lg:ml-6 lg:flex-shrink-0">
                    <a 
                      href="/contact"
                      className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300"
                    >
                      Apply Now
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </a>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Requirements</h4>
                    <ul className="space-y-2">
                      {job.requirements.map((req, reqIndex) => (
                        <li key={reqIndex} className="flex items-start text-zion-slate-light text-sm">
                          <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 mt-0.5 flex-shrink-0" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Responsibilities</h4>
                    <ul className="space-y-2">
                      {job.responsibilities.map((resp, respIndex) => (
                        <li key={respIndex} className="flex items-start text-zion-slate-light text-sm">
                          <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 mt-0.5 flex-shrink-0" />
                          {resp}
                        </li>
                      ))}
                    </ul>
                  </div>
>>>>>>> ff4f0c93d22f1112230dad999864f5dae02b17b2
                </div>
                
                <Link 
                  to="/contact"
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors font-semibold"
                >
                  Apply Now <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
<<<<<<< HEAD
      <section className="py-20 bg-gradient-to-r from-cyan-900/20 to-blue-900/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Don't See the Right Role?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            We're always looking for talented individuals. Send us your resume and let's discuss opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold text-white hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              Send Resume
            </Link>
            <Link 
              to="/about"
              className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
            >
              Learn More About Us
            </Link>
          </div>
=======
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Don't See the Right <span className="bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">Fit</span>?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8">
              We're always looking for talented individuals to join our team. 
              Send us your resume and let's discuss how you can contribute to our mission.
            </p>
            <a 
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300"
            >
              Send Your Resume
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </motion.div>
>>>>>>> ff4f0c93d22f1112230dad999864f5dae02b17b2
        </div>
      </section>
    </div>
  );
}
