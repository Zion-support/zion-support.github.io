<<<<<<< HEAD
<<<<<<< HEAD
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
      ]
    }
  ],
  'ai-ml': [
    {
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
    }
  ],
  cybersecurity: [
    {
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
=======
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Users, 
  Briefcase, 
  MapPin, 
  Clock, 
  CheckCircle,
  ArrowRight,
  Globe,
  Heart,
  Zap
} from 'lucide-react';

export default function Careers() {
  const openPositions = [
    {
      title: "Senior Full Stack Developer",
      location: "Remote / Middletown, DE",
      type: "Full-time",
      department: "Engineering",
      description: "Join our engineering team to build cutting-edge web applications and services",
      requirements: ["React/Node.js", "5+ years experience", "Cloud platforms", "Team leadership"]
    },
    {
      title: "AI/ML Engineer",
      location: "Remote / Middletown, DE",
      type: "Full-time",
      department: "AI Research",
      description: "Develop innovative AI solutions and machine learning models",
      requirements: ["Python/TensorFlow", "3+ years experience", "ML algorithms", "Research background"]
    },
    {
      title: "DevOps Engineer",
      location: "Remote / Middletown, DE",
      type: "Full-time",
      department: "Operations",
      description: "Build and maintain our cloud infrastructure and deployment pipelines",
      requirements: ["AWS/Azure", "Docker/Kubernetes", "CI/CD", "3+ years experience"]
    },
    {
      title: "Cybersecurity Specialist",
      location: "Remote / Middletown, DE",
      type: "Full-time",
      department: "Security",
      description: "Protect our systems and clients with advanced security solutions",
      requirements: ["Security tools", "Incident response", "Compliance", "4+ years experience"]
    }
  ];

  const benefits = [
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive health insurance and wellness programs"
    },
    {
      icon: Globe,
      title: "Remote Work",
      description: "Flexible remote work options and global team collaboration"
    },
    {
      icon: Zap,
      title: "Learning & Growth",
      description: "Continuous learning opportunities and career development"
    },
    {
      icon: Users,
      title: "Team Culture",
      description: "Collaborative environment with passionate professionals"
    }
  ];

  const values = [
    "Innovation First",
    "Customer Success",
    "Continuous Learning",
    "Team Collaboration",
    "Quality Excellence",
    "Ethical Technology"
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="container mx-auto px-4 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full mb-6">
              <Users className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Join Our Team
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Build the future of technology with a team of passionate innovators and problem solvers
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#open-positions" 
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold text-white hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                View Open Positions
              </a>
              <Link 
                to="/contact" 
                className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The principles that guide our work and shape our culture
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-cyan-500 transition-all duration-300 text-center group hover:bg-slate-800/70"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                  {value}
                </h3>
              </motion.div>
            ))}
>>>>>>> cursor/website-audit-and-enhancement-8260
          </div>
=======
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Briefcase, 
  Users, 
  Zap, 
  Brain, 
  Shield, 
  Cloud, 
  Rocket, 
  Code, 
  Building, 
  Heart, 
  Globe, 
  Award, 
  Clock, 
  MapPin, 
  ExternalLink,
  Filter,
  Search,
  ArrowRight,
  Star,
  TrendingUp,
  MessageCircle,
  Phone,
  Mail,
  Linkedin,
  Twitter
} from 'lucide-react';
import { Link } from 'react-router-dom';

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
  icon: React.ComponentType<{ className?: string }>;
  featured?: boolean;
}

const jobPositions: JobPosition[] = [
  {
    id: 'ai-engineer-1',
    title: 'Senior AI Engineer',
    department: 'Artificial Intelligence',
    location: 'Remote / Delaware',
    type: 'Full-time',
    experience: '5+ years',
    description: 'Lead the development of cutting-edge AI solutions, including machine learning models, natural language processing systems, and computer vision applications.',
    requirements: [
      'Advanced degree in Computer Science, AI, or related field',
      'Expertise in Python, TensorFlow, PyTorch',
      'Experience with large language models and generative AI',
      'Strong background in machine learning algorithms',
      'Experience with cloud platforms (AWS, GCP, Azure)'
    ],
    benefits: [
      'Competitive salary with equity options',
      'Flexible remote work policy',
      'Professional development budget',
      'Health, dental, and vision insurance',
      '401(k) with company match'
    ],
    icon: Brain,
    featured: true
  },
  {
    id: 'cybersecurity-1',
    title: 'Cybersecurity Specialist',
    department: 'Security',
    location: 'Remote / Delaware',
    type: 'Full-time',
    experience: '3+ years',
    description: 'Protect our digital infrastructure and develop security protocols for our AI marketplace platform.',
    requirements: [
      'Bachelor\'s degree in Cybersecurity or related field',
      'Certifications: CISSP, CEH, or similar',
      'Experience with penetration testing and security audits',
      'Knowledge of compliance frameworks (SOC 2, ISO 27001)',
      'Experience with security tools and monitoring systems'
    ],
    benefits: [
      'Competitive salary',
      'Remote work flexibility',
      'Security certification reimbursement',
      'Health insurance',
      'Professional development opportunities'
    ],
    icon: Shield
  },
  {
    id: 'devops-1',
    title: 'DevOps Engineer',
    department: 'Engineering',
    location: 'Remote / Delaware',
    type: 'Full-time',
    experience: '4+ years',
    description: 'Build and maintain our cloud infrastructure, implement CI/CD pipelines, and ensure system reliability.',
    requirements: [
      'Experience with AWS, Azure, or GCP',
      'Proficiency in Docker, Kubernetes',
      'Experience with CI/CD tools (Jenkins, GitLab CI)',
      'Knowledge of infrastructure as code (Terraform, CloudFormation)',
      'Experience with monitoring and logging tools'
    ],
    benefits: [
      'Competitive salary',
      'Remote work policy',
      'Cloud certification reimbursement',
      'Health benefits',
      'Flexible PTO'
    ],
    icon: Cloud
  },
  {
    id: 'quantum-1',
    title: 'Quantum Computing Researcher',
    department: 'Research & Development',
    location: 'Remote / Delaware',
    type: 'Full-time',
    experience: 'PhD + 2 years',
    description: 'Pioneer quantum computing applications and develop quantum algorithms for our next-generation services.',
    requirements: [
      'PhD in Physics, Computer Science, or related field',
      'Research experience in quantum computing',
      'Programming skills in Python, Qiskit, or similar',
      'Publications in quantum computing journals',
      'Experience with quantum hardware platforms'
    ],
    benefits: [
      'Competitive research salary',
      'Research budget and resources',
      'Conference and publication support',
      'Health insurance',
      'Academic collaboration opportunities'
    ],
    icon: Rocket
  },
  {
    id: 'frontend-1',
    title: 'Frontend Developer',
    department: 'Engineering',
    location: 'Remote / Delaware',
    type: 'Full-time',
    experience: '2+ years',
    description: 'Build beautiful, responsive user interfaces for our AI marketplace platform using modern web technologies.',
    requirements: [
      'Proficiency in React, TypeScript, and modern CSS',
      'Experience with state management (Redux, Zustand)',
      'Knowledge of responsive design principles',
      'Experience with testing frameworks',
      'Understanding of web accessibility standards'
    ],
    benefits: [
      'Competitive salary',
      'Remote work flexibility',
      'Latest development tools and equipment',
      'Health insurance',
      'Professional development budget'
    ],
    icon: Code
  },
  {
    id: 'marketing-1',
    title: 'AI Marketing Specialist',
    department: 'Marketing',
    location: 'Remote / Delaware',
    type: 'Full-time',
    experience: '3+ years',
    description: 'Develop and execute marketing strategies for our AI services and marketplace platform.',
    requirements: [
      'Bachelor\'s degree in Marketing or related field',
      'Experience with digital marketing and content creation',
      'Knowledge of AI and technology trends',
      'Experience with marketing automation tools',
      'Strong analytical and creative skills'
    ],
    benefits: [
      'Competitive salary',
      'Remote work policy',
      'Marketing tools and software access',
      'Health insurance',
      'Performance bonuses'
    ],
    icon: TrendingUp
  }
];

const departments = ['All', 'Artificial Intelligence', 'Security', 'Engineering', 'Research & Development', 'Marketing'];
const jobTypes = ['All', 'Full-time', 'Part-time', 'Contract', 'Internship'];
const locations = ['All', 'Remote / Delaware', 'On-site Delaware', 'Hybrid'];

export default function Careers() {
  const [selectedDepartment, setSelectedDepartment] = useState('All');
  const [selectedJobType, setSelectedJobType] = useState('All');
  const [selectedLocation, setSelectedLocation] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredJobs = jobPositions.filter(job => {
    const matchesDepartment = selectedDepartment === 'All' || job.department === selectedDepartment;
    const matchesJobType = selectedJobType === 'All' || job.type === selectedJobType;
    const matchesLocation = selectedLocation === 'All' || job.location === selectedLocation;
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         job.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesDepartment && matchesJobType && matchesLocation && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-futuristic">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-dark">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-40 h-40 border border-zion-cyan/20 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 border border-zion-purple/20 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-zion-blue-light rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        </div>

        <div className="container-responsive relative z-10 py-20">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center mb-6">
              <Briefcase className="w-16 h-16 text-zion-cyan mr-4" />
              <h1 className="text-5xl font-bold text-gradient">Join Our Team</h1>
            </div>
            <p className="text-xl text-zion-slate-light mb-8">
              Help us build the future of technology. Join Zion Tech Group and be part of the AI revolution.
            </p>
            
            {/* Search and Filters */}
            <div className="max-w-4xl mx-auto mb-8">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Search jobs..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white/10 border border-zion-cyan/20 rounded-xl text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent transition-all duration-300 backdrop-blur-sm"
                  />
                </div>
                
                <select
                  value={selectedDepartment}
                  onChange={(e) => setSelectedDepartment(e.target.value)}
                  className="px-4 py-3 bg-white/10 border border-zion-cyan/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent transition-all duration-300 backdrop-blur-sm"
                >
                  {departments.map(dept => (
                    <option key={dept} value={dept} className="bg-zion-slate-dark text-white">
                      {dept}
                    </option>
                  ))}
                </select>

                <select
                  value={selectedJobType}
                  onChange={(e) => setSelectedJobType(e.target.value)}
                  className="px-4 py-3 bg-white/10 border border-zion-cyan/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent transition-all duration-300 backdrop-blur-sm"
                >
                  {jobTypes.map(type => (
                    <option key={type} value={type} className="bg-zion-slate-dark text-white">
                      {type}
                    </option>
                  ))}
                </select>

                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="px-4 py-3 bg-white/10 border border-zion-cyan/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent transition-all duration-300 backdrop-blur-sm"
                >
                  {locations.map(location => (
                    <option key={location} value={location} className="bg-zion-slate-dark text-white">
                      {location}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Why Work With Us */}
      <div className="container-responsive py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-6">Why Work With Zion Tech Group?</h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            We're building the future of technology. Join a team that's passionate about innovation, 
            AI, and making technology accessible to everyone.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {[
            { icon: Brain, title: 'Cutting-Edge AI', description: 'Work with the latest AI technologies and shape the future of machine learning.' },
            { icon: Globe, title: 'Global Impact', description: 'Join a team that\'s democratizing access to technology worldwide.' },
            { icon: Heart, title: 'Innovation Culture', description: 'Be part of a culture that encourages creativity and breakthrough thinking.' },
            { icon: Award, title: 'Professional Growth', description: 'Continuous learning opportunities and career advancement paths.' }
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-white/5 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl hover:border-zion-cyan/40 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
              <p className="text-zion-slate-light">{item.description}</p>
            </motion.div>
          ))}
>>>>>>> cursor/expand-services-and-deploy-updates-fd31
        </div>
      </div>

<<<<<<< HEAD
<<<<<<< HEAD
      {/* Why Work With Us */}
      <section className="py-20 bg-zion-slate-dark/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
=======
      {/* Job Listings */}
      <div className="container-responsive py-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
>>>>>>> cursor/expand-services-and-deploy-updates-fd31
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
<<<<<<< HEAD
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
=======
      {/* Benefits Section */}
      <section className="py-20 bg-black/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Why Work With Us?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover the benefits of being part of the Zion Tech Group team
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
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
>>>>>>> cursor/website-audit-and-enhancement-8260
              </motion.div>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
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
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
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
                </div>
=======
      {/* Open Positions Section */}
      <section id="open-positions" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
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
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-semibold text-white group-hover:text-cyan-400 transition-colors">
                    {position.title}
                  </h3>
                  <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full">
                    {position.type}
                  </span>
                </div>
                
                <div className="flex items-center space-x-4 mb-4 text-sm text-gray-400">
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    {position.location}
                  </div>
                  <div className="flex items-center">
                    <Briefcase className="w-4 h-4 mr-1" />
                    {position.department}
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6">{position.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Requirements:</h4>
                  <ul className="space-y-2">
                    {position.requirements.map((req, reqIndex) => (
                      <li key={reqIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Link 
                  to="/contact"
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors font-semibold"
                >
                  Apply Now <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
>>>>>>> cursor/website-audit-and-enhancement-8260
=======
            <h2 className="text-4xl font-bold text-white mb-4">Open Positions</h2>
            <p className="text-xl text-zion-slate-light">
              {filteredJobs.length} position{filteredJobs.length !== 1 ? 's' : ''} available
            </p>
          </motion.div>

          <div className="space-y-6">
            <AnimatePresence>
              {filteredJobs.map((job, index) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className={`bg-white/5 backdrop-blur-xl border rounded-2xl overflow-hidden hover:border-zion-cyan/40 transition-all duration-300 ${
                    job.featured ? 'border-zion-cyan/40 bg-gradient-to-r from-zion-cyan/5 to-zion-purple/5' : 'border-zion-cyan/20'
                  }`}
                >
                  {job.featured && (
                    <div className="bg-gradient-to-r from-zion-cyan to-zion-purple px-4 py-2 text-center">
                      <span className="text-white font-medium flex items-center justify-center gap-2">
                        <Star className="w-4 h-4" />
                        Featured Position
                      </span>
                    </div>
                  )}

                  <div className="p-8">
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center flex-shrink-0">
                          <job.icon className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-2">{job.title}</h3>
                          <div className="flex flex-wrap items-center gap-4 text-zion-slate-light mb-3">
                            <span className="flex items-center gap-2">
                              <Building className="w-4 h-4" />
                              {job.department}
                            </span>
                            <span className="flex items-center gap-2">
                              <MapPin className="w-4 h-4" />
                              {job.location}
                            </span>
                            <span className="flex items-center gap-2">
                              <Clock className="w-4 h-4" />
                              {job.type}
                            </span>
                            <span className="flex items-center gap-2">
                              <Award className="w-4 h-4" />
                              {job.experience}
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      <button className="px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-xl hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300 font-medium flex items-center gap-2">
                        Apply Now
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>

                    <p className="text-zion-slate-light mb-6 leading-relaxed">{job.description}</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3">Requirements</h4>
                        <ul className="space-y-2">
                          {job.requirements.map((req, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-zion-slate-light">
                              <div className="w-2 h-2 bg-zion-cyan rounded-full mt-2 flex-shrink-0"></div>
                              <span>{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3">Benefits</h4>
                        <ul className="space-y-2">
                          {job.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-zion-slate-light">
                              <div className="w-2 h-2 bg-zion-purple rounded-full mt-2 flex-shrink-0"></div>
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            {filteredJobs.length === 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-16"
              >
                <Briefcase className="w-16 h-16 text-zion-slate-light mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">No positions found</h3>
                <p className="text-zion-slate-light mb-6">
                  Try adjusting your filters or check back later for new opportunities.
                </p>
>>>>>>> cursor/expand-services-and-deploy-updates-fd31
              </motion.div>
            )}
          </div>
        </div>
      </div>

<<<<<<< HEAD
      {/* CTA Section */}
<<<<<<< HEAD
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
=======
      {/* Contact Section */}
      <div className="container-responsive py-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
>>>>>>> cursor/expand-services-and-deploy-updates-fd31
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-xl border border-zion-cyan/20 rounded-3xl p-12"
          >
<<<<<<< HEAD
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
=======
            <h2 className="text-3xl font-bold text-white mb-4">Don't see the right fit?</h2>
            <p className="text-zion-slate-light mb-8 text-lg">
              We're always looking for talented individuals to join our team. Send us your resume and let's discuss how you can contribute to our mission.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center justify-center space-x-3 text-zion-slate-light hover:text-zion-cyan transition-colors">
                <Phone className="w-5 h-5" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-zion-slate-light hover:text-zion-cyan transition-colors">
                <Mail className="w-5 h-5" />
                <span>careers@ziontechgroup.com</span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-zion-slate-light hover:text-zion-cyan transition-colors">
                <MessageCircle className="w-5 h-5" />
                <span>General Inquiries</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-xl hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300 font-medium flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Contact Us
              </Link>
              <a
                href="mailto:careers@ziontechgroup.com"
                className="px-8 py-4 bg-white/10 border border-zion-cyan/20 text-white rounded-xl hover:bg-white/20 transition-all duration-300 font-medium flex items-center justify-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Send Resume
              </a>
            </div>
>>>>>>> cursor/expand-services-and-deploy-updates-fd31
          </motion.div>
=======
      <section className="py-20 bg-gradient-to-r from-cyan-900/20 to-blue-900/20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Don't See the Right Role?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            We're always looking for talented individuals. Send us your resume and let's discuss opportunities
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold text-white hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              Send Your Resume
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link 
              to="/about"
              className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
            >
              Learn About Us
            </Link>
          </div>
>>>>>>> cursor/website-audit-and-enhancement-8260
        </div>
      </div>
    </div>
  );
}
