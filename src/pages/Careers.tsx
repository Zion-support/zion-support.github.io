import React, { useState } from 'react';
import { motion } from 'framer-motion';
<<<<<<< HEAD
import { Link } from 'react-router-dom';
import {
  Briefcase,
  Users,
  Heart,
  Zap,
  Globe,
=======
import { SEO } from '../components/SEO';
import { 
  Briefcase, 
  Users, 
  Globe, 
  Zap, 
  Heart, 
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
  Award,
  ArrowRight,
  Mail,
  MapPin,
  Clock,
  DollarSign,
  GraduationCap,
  Code,
  Brain,
  Shield,
  Cloud,
<<<<<<< HEAD
  Rocket
} from 'lucide-react';

const Careers = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('all');

  const departments = [
    { id: 'all', name: 'All Departments', icon: Briefcase },
    { id: 'engineering', name: 'Engineering', icon: Code },
    { id: 'ai-ml', name: 'AI & Machine Learning', icon: Brain },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield },
    { id: 'cloud', name: 'Cloud & DevOps', icon: Cloud },
    { id: 'product', name: 'Product Management', icon: Rocket }
  ];

  const jobOpenings = [
=======
  Database,
  Target,
  CheckCircle,
  Mail,
  Phone,
  ExternalLink
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
const Careers: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const jobListings = [
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
    {
      id: 1,
      title: 'Senior Full Stack Developer',
      department: 'engineering',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '5+ years',
      salary: '$120k - $180k',
      description: 'Join our engineering team to build cutting-edge web applications and AI-powered platforms.',
      requirements: [
        'Expertise in React, Node.js, and TypeScript',
        'Experience with cloud platforms (AWS, Azure, GCP)',
        'Knowledge of microservices architecture',
        'Strong problem-solving and communication skills'
      ],
      benefits: [
        'Competitive salary and equity',
        'Flexible remote work options',
        'Professional development budget',
        'Health, dental, and vision insurance'
      ]
    },
    {
      id: 2,
      title: 'AI Research Engineer',
      department: 'ai-ml',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '3+ years',
      salary: '$130k - $200k',
      description: 'Work on cutting-edge AI research and development for our next-generation platforms.',
      requirements: [
<<<<<<< HEAD
        'PhD or MS in Computer Science, AI, or related field',
        'Experience with PyTorch, TensorFlow, or similar frameworks',
        'Publications in top AI conferences (NeurIPS, ICML, ICLR)',
        'Experience with large language models and transformers'
=======
        "CISSP or equivalent certification",
        "3+ years of cybersecurity experience",
        "Knowledge of network security and penetration testing",
        "Familiarity with SIEM tools and incident response",
        "Security certifications (CISSP, CEH, etc.)"
      ],
      responsibilities: [
        'Design and implement AI/ML solutions',
        'Optimize model performance and scalability',
        'Collaborate with cross-functional teams',
        'Mentor junior engineers',
        'Stay current with AI/ML trends and technologies'
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
      ],
      benefits: [
        'Competitive salary and equity',
        'Research publication support',
        'Conference attendance budget',
        'Access to latest AI hardware and infrastructure'
      ]
    },
    {
      id: 3,
      title: 'Cybersecurity Specialist',
      department: 'cybersecurity',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '4+ years',
      salary: '$110k - $170k',
      description: 'Help protect our clients and platforms with advanced cybersecurity solutions.',
      requirements: [
<<<<<<< HEAD
        'Certifications: CISSP, CEH, or similar',
        'Experience with penetration testing and vulnerability assessment',
        'Knowledge of compliance frameworks (SOC2, ISO27001)',
        'Experience with SIEM and threat hunting tools'
      ],
      benefits: [
        'Competitive salary and equity',
        'Certification renewal support',
        'Security conference attendance',
        'Latest security tools and training'
      ]
    },
    {
      id: 4,
      title: 'Cloud Infrastructure Engineer',
      department: 'cloud',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '4+ years',
      salary: '$115k - $175k',
      description: 'Design and maintain scalable cloud infrastructure for our global platforms.',
      requirements: [
        'Expertise in AWS, Azure, or GCP',
        'Experience with Kubernetes and Docker',
        'Knowledge of Infrastructure as Code (Terraform, CloudFormation)',
        'Experience with CI/CD pipelines and automation'
=======
        "Experience in B2B SaaS or enterprise software",
        "Strong analytical and strategic thinking",
        "Experience with agile methodologies",
        "Excellent communication and leadership skills"
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
      ],
      benefits: [
        'Competitive salary and equity',
        'Cloud certification support',
        'Home office setup allowance',
        'Flexible work hours and location'
      ]
    },
    {
      id: 5,
      title: 'Product Manager - AI Platforms',
      department: 'product',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '5+ years',
      salary: '$130k - $190k',
      description: 'Lead product strategy and development for our AI-powered enterprise platforms.',
      requirements: [
        'Experience in B2B SaaS product management',
        'Background in AI/ML or enterprise software',
        'Strong analytical and strategic thinking skills',
        'Experience with agile development methodologies'
      ],
      benefits: [
        'Competitive salary and equity',
        'Product management training and conferences',
        'Direct impact on company strategy',
        'Collaboration with world-class engineering teams'
      ]
    }
  ];
<<<<<<< HEAD

=======
  const categories = [
    { id: 'all', name: 'All Positions', count: jobListings.length },
    { id: 'ai', name: 'AI & ML', count: jobListings.filter(job => job.category === 'ai').length },
    { id: 'security', name: 'Security', count: jobListings.filter(job => job.category === 'security').length },
    { id: 'cloud', name: 'Cloud & DevOps', count: jobListings.filter(job => job.category === 'cloud').length },
    { id: 'engineering', name: 'Engineering', count: jobListings.filter(job => job.category === 'engineering').length },
    { id: 'data', name: 'Data & Analytics', count: jobListings.filter(job => job.category === 'data').length },
    { id: 'product', name: 'Product', count: jobListings.filter(job => job.category === 'product').length }
  ];
  const filteredJobs = selectedCategory === 'all'
    ? jobListings
    : jobListings.filter(job => job.category === selectedCategory);
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
  const companyValues = [
    {
      icon: Brain,
      title: 'Innovation First',
      description: 'We push the boundaries of what\'s possible with cutting-edge technology.'
    },
    {
<<<<<<< HEAD
      icon: Users,
      title: 'Collaboration',
      description: 'Great ideas come from diverse teams working together towards common goals.'
=======
      icon: Shield,
      title: "Security & Trust",
      description: "Building secure, reliable solutions that our clients can trust"
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "Solving real-world problems for Fortune 500 companies worldwide"
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
    },
    {
      icon: Heart,
      title: 'Customer Focus',
      description: 'Everything we build is designed to solve real customer problems.'
    },
    {
      icon: Zap,
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, from code quality to customer service.'
    }
  ];
  const benefits = [
    {
      icon: DollarSign,
      title: 'Competitive Compensation',
      description: 'Above-market salaries with equity and performance bonuses'
    },
    {
      icon: Globe,
      title: 'Remote First',
      description: 'Work from anywhere with flexible hours and location independence'
    },
    {
      icon: GraduationCap,
      title: 'Learning & Growth',
      description: 'Continuous learning with training budgets and conference attendance'
    },
    {
      icon: Award,
      title: 'Recognition',
      description: 'Regular recognition for outstanding contributions and achievements'
    }
  ];
<<<<<<< HEAD

  const filteredJobs = selectedDepartment === 'all' 
    ? jobOpenings 
    : jobOpenings.filter(job => job.department === selectedDepartment);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
=======
  const getCategoryIcon = (categoryId: string) => {
    switch (categoryId) {
      case 'ai':
        return Brain;
      case 'security':
        return Shield;
      case 'cloud':
        return Cloud;
      case 'engineering':
        return Target;
      case 'data':
        return Database;
      case 'product':
        return Target;
      default:
        return Briefcase;
    }
  };
  const getCategoryName = (categoryId: string) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.name : 'General';
  };
  return (
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Join Our
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                {' '}Team
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Build the future of technology with us. We're looking for passionate, 
              innovative minds to help transform industries through AI and cutting-edge solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#openings"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                View Openings
              </a>
              <Link
                to="/contact"
                className="px-8 py-4 border border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Company Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              These core values guide everything we do and shape our company culture.
            </p>
          </motion.div>
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
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
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
<<<<<<< HEAD

      {/* Benefits Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
=======
      {/* Job Listings */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Work With Us?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We offer competitive benefits and a supportive environment where you can thrive.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section id="openings" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Open Positions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Find the perfect role that matches your skills and career goals.
            </p>
          </motion.div>
          {/* Department Filter */}
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            {departments.map((dept) => (
              <button
                key={dept.id}
                onClick={() => setSelectedDepartment(dept.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  selectedDepartment === dept.id
                    ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/30'
                    : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 border border-slate-700/50'
                }`}
              >
                <dept.icon className="w-5 h-5" />
                <span>{dept.name}</span>
              </button>
            ))}
<<<<<<< HEAD
          </div>

          {/* Job Listings */}
          <div className="space-y-6">
=======
=======
    <>
      <SEO 
        title="Careers - Zion Tech Group"
        description="Join our team of technology experts and help shape the future of AI-powered business solutions."
        keywords="careers, job opportunities, AI jobs, cybersecurity jobs, cloud jobs, Zion Tech Group, technology careers"
      />
      <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-zion-purple/20 to-zion-blue/20"></div>
          <div className="relative z-10 max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-zion-purple/20 border border-zion-purple/30 mb-6">
                <Briefcase className="w-5 h-5 text-zion-purple mr-2" />
                <span className="text-zion-purple font-medium">Join Our Team</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Build the Future with Us
              </h1>
              <p className="text-xl md:text-2xl text-zion-cyan-light max-w-4xl mx-auto leading-relaxed mb-8">
                Join our team of technology experts and help shape the future of AI-powered 
                business solutions. We're looking for passionate innovators who want to make a difference.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-gradient-to-r from-zion-purple to-zion-blue hover:from-zion-purple/80 hover:to-zion-blue/80 text-white">
                  <Briefcase className="w-5 h-5 mr-2" />
                  View Open Positions
                </Button>
                <Button
                  variant="outline"
                  className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-slate-dark"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Contact Recruiting
                </Button>
              </div>
            </motion.div>
          </div>
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
            {filteredJobs.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-cyan-400/50 transition-all duration-300"
              >
<<<<<<< HEAD
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{job.title}</h3>
                    <div className="flex flex-wrap items-center gap-4 text-gray-400">
                      <div className="flex items-center space-x-2">
=======
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2">{job.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                      <div className="flex items-center gap-1">
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
                        <MapPin className="w-4 h-4" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4" />
                        <span>{job.type}</span>
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
<<<<<<< HEAD
                  <button className="mt-4 lg:mt-0 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                    Apply Now
                  </button>
                </div>

                <p className="text-gray-300 mb-6">{job.description}</p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold text-cyan-400 mb-3">Requirements</h4>
                    <ul className="space-y-2">
                      {job.requirements.map((req, idx) => (
                        <li key={idx} className="flex items-start space-x-2 text-gray-300">
                          <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-cyan-400 mb-3">Benefits</h4>
                    <ul className="space-y-2">
                      {job.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start space-x-2 text-gray-300">
                          <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

=======
                  <button
                    onClick={() => setExpandedJob(expandedJob === job.id ? null : job.id)}
                    className="mt-4 lg:mt-0 px-4 py-2 bg-zion-cyan text-slate-900 rounded-lg hover:bg-zion-cyan/90 transition-colors flex items-center gap-2"
                  >
                    {expandedJob === job.id ? 'Show Less' : 'View Details'}
                    <ChevronDown 
                      className={`w-4 h-4 transition-transform ${
                        expandedJob === job.id ? 'rotate-180' : ''
                      }`} 
                    />
                  </button>
                </div>
                <p className="text-gray-300 mb-4">{job.description}</p>
                {expandedJob === job.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-t border-slate-700 pt-4 space-y-6"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3">Requirements</h4>
                        <ul className="space-y-2">
                          {job.requirements.map((req, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-gray-300">
                              <div className="w-2 h-2 bg-zion-cyan rounded-full mt-2 flex-shrink-0"></div>
                              <span>{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3">Responsibilities</h4>
                        <ul className="space-y-2">
                          {job.responsibilities.map((resp, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-gray-300">
                              <div className="w-2 h-2 bg-zion-cyan rounded-full mt-2 flex-shrink-0"></div>
                              <span>{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Benefits</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                        {job.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-gray-300">
                            <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
                            <span>{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <button className="px-6 py-3 bg-zion-cyan text-slate-900 rounded-lg hover:bg-zion-cyan/90 transition-colors font-medium">
                        Apply Now
                      </button>
                      <button className="px-6 py-3 border border-zion-cyan text-zion-cyan rounded-lg hover:bg-zion-cyan/10 transition-colors font-medium">
                        Save Job
                      </button>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
          {filteredJobs.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center py-12"
            >
              <p className="text-xl text-gray-400 mb-4">
                No open positions in this department at the moment.
              </p>
              <p className="text-gray-500">
                Check back later or contact us to discuss future opportunities.
              </p>
            </motion.div>
          )}
        </div>
      </section>
<<<<<<< HEAD

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
=======
      {/* Application Process */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
<<<<<<< HEAD
            className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-400/20 rounded-2xl p-12"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Don't See the Right Role?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals. Send us your resume and 
              let's discuss how you can contribute to our mission.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Send Resume
              </Link>
              <a
                href="mailto:careers@ziontechgroup.com"
                className="px-8 py-4 border border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300"
              >
                Email Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
=======
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Application Process</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Our streamlined process ensures a smooth experience from application to offer.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '1',
                title: 'Apply',
                description: 'Submit your resume and cover letter through our portal'
              },
              {
                step: '2',
                title: 'Review',
                description: 'Our team reviews your application within 48 hours'
              },
              {
                step: '3',
                title: 'Interview',
                description: 'Multiple rounds including technical and cultural fit'
              },
              {
                step: '4',
                title: 'Offer',
                description: 'Receive your offer and join the Zion Tech family'
              }
            ].map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-zion-cyan text-slate-900 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </motion.div>
            ))}
=======
        {/* Categories Filter */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-zion-purple text-white shadow-lg'
                      : 'bg-white/10 text-zion-cyan-light hover:bg-white/20 border border-white/20'
                  }`}
                >
                  <category.icon className="w-5 h-5" />
                  <span>{category.name}</span>
                  <span className="text-sm opacity-75">({category.count})</span>
                </button>
              ))}
            </div>
          </div>
        </section>
        {/* Job Listings */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {filteredJobs.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20"
              >
                <Briefcase className="w-16 h-16 text-zion-cyan-light mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">No positions found</h3>
                <p className="text-zion-cyan-light">
                  Try adjusting your category filter or check back later for new opportunities.
                </p>
              </motion.div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {filteredJobs.map((job, index) => (
                  <motion.div
                    key={job.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <Card className="h-full bg-white/5 backdrop-blur-sm border-white/20 hover:border-zion-purple/50 transition-all duration-300 hover:scale-105">
                      <CardHeader>
                        <div className="flex items-start justify-between mb-4">
                          <div className="inline-flex items-center px-3 py-1 rounded-full bg-zion-purple/20 border border-zion-purple/30">
                            <span className="text-zion-purple text-sm font-medium">
                              {getCategoryName(job.category)}
                            </span>
                          </div>
                          <div className="text-zion-cyan font-medium">
                            {job.salary}
                          </div>
                        </div>
                        <CardTitle className="text-xl font-bold text-white group-hover:text-zion-purple transition-colors duration-300 mb-3">
                          {job.title}
                        </CardTitle>
                        <CardDescription className="text-zion-cyan-light leading-relaxed mb-4">
                          {job.description}
                        </CardDescription>
                        <div className="flex items-center space-x-4 text-sm text-zion-cyan-light mb-4">
                          <div className="flex items-center space-x-1">
                            <MapPin className="w-4 h-4" />
                            <span>{job.location}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="w-4 h-4" />
                            <span>{job.type}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Users className="w-4 h-4" />
                            <span>{job.experience}</span>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="mb-6">
                          <h4 className="text-white font-semibold mb-3">Requirements:</h4>
                          <ul className="space-y-2">
                            {job.requirements.map((requirement, reqIndex) => (
                              <li key={reqIndex} className="flex items-start space-x-2 text-sm">
                                <CheckCircle className="w-4 h-4 text-zion-cyan mt-0.5 flex-shrink-0" />
                                <span className="text-zion-cyan-light">{requirement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="mb-6">
                          <h4 className="text-white font-semibold mb-3">Benefits:</h4>
                          <div className="flex flex-wrap gap-2">
                            {job.benefits.map((benefit, benefitIndex) => (
                              <span
                                key={benefitIndex}
                                className="px-2 py-1 bg-white/10 rounded text-xs text-zion-cyan-light border border-white/20"
                              >
                                {benefit}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <Button className="flex-1 bg-gradient-to-r from-zion-purple to-zion-blue hover:from-zion-purple/80 hover:to-zion-blue/80 text-white">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Apply Now
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-slate-dark"
                          >
                            <Mail className="w-4 h-4" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </section>
        {/* Company Values */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Our Company Values
              </h2>
              <p className="text-xl text-zion-cyan-light max-w-3xl mx-auto">
                These core values guide everything we do and shape our company culture.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {companyValues.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full bg-white/5 backdrop-blur-sm border-white/20 hover:border-zion-purple/50 transition-all duration-300 text-center">
                    <CardContent className="p-6">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-zion-purple/20 border border-zion-purple/30 mb-4">
                        <value.icon className="w-8 h-8 text-zion-purple" />
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-3">
                        {value.title}
                      </h3>
                      <p className="text-zion-cyan-light text-sm leading-relaxed">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Why Work at Zion Tech Group?
              </h2>
              <p className="text-xl text-zion-cyan-light max-w-3xl mx-auto">
                We offer competitive benefits and a supportive environment where you can thrive and grow.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full bg-white/5 backdrop-blur-sm border-white/20">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="p-3 rounded-xl bg-zion-purple/20 border border-zion-purple/30">
                          <benefit.icon className="w-6 h-6 text-zion-purple" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-white mb-2">
                            {benefit.title}
                          </h3>
                          <p className="text-zion-cyan-light text-sm leading-relaxed">
                            {benefit.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Join Our Team?
              </h2>
              <p className="text-xl text-zion-cyan-light mb-8 max-w-3xl mx-auto">
                Don't see a position that fits? We're always looking for talented individuals 
                who share our passion for innovation and technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-gradient-to-r from-zion-purple to-zion-blue hover:from-zion-purple/80 hover:to-zion-blue/80 text-white">
                  <Mail className="w-5 h-5 mr-2" />
                  Send Your Resume
                </Button>
                <Button
                  variant="outline"
                  className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-slate-dark"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Contact Us
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
  );
};
export default Careers;
