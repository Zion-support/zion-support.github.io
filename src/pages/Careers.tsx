import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { 
  Users, 
  Heart, 
  Zap, 
  Globe, 
  ArrowRight, 
  CheckCircle,
  MapPin,
  Clock,
  Briefcase,
  GraduationCap,
  Star,
  Lightbulb,
  Rocket,
  Shield,
  Brain,
  Cloud,
  Code,
  Target,
  TrendingUp,
  Award
} from 'lucide-react';

export default function Careers() {
  const [activeDepartment, setActiveDepartment] = useState('all');

  const departments = [
    { id: 'all', name: 'All Departments', icon: Users },
    { id: 'engineering', name: 'Engineering', icon: Code },
    { id: 'ai', name: 'AI & Research', icon: Brain },
    { id: 'cloud', name: 'Cloud & DevOps', icon: Cloud },
    { id: 'security', name: 'Cybersecurity', icon: Shield },
    { id: 'design', name: 'Design & UX', icon: Target },
    { id: 'business', name: 'Business & Sales', icon: TrendingUp }
  ];

  const jobOpenings = [
    {
      id: 'senior-ai-engineer',
      title: 'Senior AI Engineer',
      department: 'ai',
      location: 'San Francisco, CA',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Join our AI team to develop cutting-edge machine learning models and algorithms.',
      requirements: [
        'Strong background in machine learning and deep learning',
        'Experience with TensorFlow, PyTorch, or similar frameworks',
        'Knowledge of Python, C++, and mathematical optimization',
        'Experience with large-scale data processing and distributed systems'
      ],
      benefits: [
        'Competitive salary and equity',
        'Health, dental, and vision insurance',
        'Flexible work arrangements',
        'Professional development opportunities'
      ]
    },
    {
      id: 'cloud-architect',
      title: 'Cloud Solutions Architect',
      department: 'cloud',
      location: 'Remote',
      type: 'Full-time',
      experience: '7+ years',
      description: 'Design and implement scalable cloud infrastructure solutions for enterprise clients.',
      requirements: [
        'Expert knowledge of AWS, Azure, and Google Cloud',
        'Experience with Kubernetes, Docker, and infrastructure as code',
        'Strong understanding of microservices architecture',
        'Experience with CI/CD pipelines and DevOps practices'
      ],
      benefits: [
        'Competitive salary and equity',
        'Health, dental, and vision insurance',
        'Remote work options',
        'Annual conference and training budget'
      ]
    },
    {
      id: 'security-engineer',
      title: 'Cybersecurity Engineer',
      department: 'security',
      location: 'San Francisco, CA',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Protect our systems and clients with advanced security solutions and threat detection.',
      requirements: [
        'Experience with security tools and frameworks',
        'Knowledge of network security and penetration testing',
        'Understanding of compliance standards (SOC 2, ISO 27001)',
        'Experience with incident response and threat hunting'
      ],
      benefits: [
        'Competitive salary and equity',
        'Health, dental, and vision insurance',
        'Flexible work arrangements',
        'Security certification support'
      ]
    },
    {
      id: 'frontend-developer',
      title: 'Senior Frontend Developer',
      department: 'engineering',
      location: 'Remote',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Build beautiful, responsive user interfaces for our AI-powered applications.',
      requirements: [
        'Expert knowledge of React, TypeScript, and modern CSS',
        'Experience with state management (Redux, Zustand)',
        'Understanding of performance optimization and accessibility',
        'Experience with testing frameworks and CI/CD'
      ],
      benefits: [
        'Competitive salary and equity',
        'Health, dental, and vision insurance',
        'Remote work options',
        'Latest hardware and software tools'
      ]
    },
    {
      id: 'data-scientist',
      title: 'Data Scientist',
      department: 'ai',
      location: 'San Francisco, CA',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Transform data into actionable insights and develop predictive models.',
      requirements: [
        'Strong statistical and mathematical background',
        'Experience with Python, R, and SQL',
        'Knowledge of machine learning algorithms and techniques',
        'Experience with data visualization and storytelling'
      ],
      benefits: [
        'Competitive salary and equity',
        'Health, dental, and vision insurance',
        'Flexible work arrangements',
        'Access to cutting-edge research and datasets'
      ]
    },
    {
      id: 'product-manager',
      title: 'Product Manager',
      department: 'business',
      location: 'San Francisco, CA',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Lead product strategy and development for our AI and technology solutions.',
      requirements: [
        'Experience in B2B SaaS or enterprise software',
        'Strong analytical and strategic thinking skills',
        'Experience with agile development methodologies',
        'Understanding of AI and technology markets'
      ],
      benefits: [
        'Competitive salary and equity',
        'Health, dental, and vision insurance',
        'Flexible work arrangements',
        'Leadership development opportunities'
      ]
    }
  ];

  const filteredJobs = activeDepartment === 'all' 
    ? jobOpenings 
    : jobOpenings.filter(job => job.department === activeDepartment);

  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation First',
      description: 'We encourage creative thinking and experimentation.',
      color: 'from-yellow-500 to-orange-600'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Great ideas come from working together.',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      icon: Rocket,
      title: 'Growth',
      description: 'Continuous learning and development opportunities.',
      color: 'from-purple-500 to-pink-600'
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'We love what we do and it shows in our work.',
      color: 'from-red-500 to-pink-600'
    }
  ];

  const benefits = [
    {
      icon: Star,
      title: 'Competitive Compensation',
      description: 'Salary, equity, and performance bonuses'
    },
    {
      icon: Shield,
      title: 'Health & Wellness',
      description: 'Comprehensive health, dental, and vision coverage'
    },
    {
      icon: Clock,
      title: 'Flexible Work',
      description: 'Remote options and flexible hours'
    },
    {
      icon: GraduationCap,
      title: 'Learning & Development',
      description: 'Training budget and conference attendance'
    },
    {
      icon: Globe,
      title: 'Global Team',
      description: 'Work with talented people worldwide'
    },
    {
      icon: Award,
      title: 'Recognition',
      description: 'Regular recognition and rewards'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Careers - Zion Tech Group"
        description="Join our team of innovators and problem-solvers. Explore career opportunities at Zion Tech Group and help us transform businesses through technology."
      />
      
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
              Help us transform businesses through innovative technology solutions. 
              Join a team of passionate technologists, innovators, and problem-solvers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Why Work With Us?</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              We're building the future of technology, and we want you to be part of it.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className={`w-20 h-20 bg-gradient-to-br ${value.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                  <value.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-slate-800/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Benefits & Perks</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              We take care of our team so you can focus on doing your best work.
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-slate-700/30 rounded-lg border border-slate-600/30 p-6 text-center hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-300 text-sm">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Department Filter */}
      <section className="py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {departments.map((department) => (
              <button
                key={department.id}
                onClick={() => setActiveDepartment(department.id)}
                className={`flex items-center px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeDepartment === department.id
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg'
                    : 'bg-slate-700/30 text-gray-300 hover:bg-slate-600/50 hover:text-white border border-slate-600/50'
                }`}
              >
                <department.icon className="w-5 h-5 mr-2" />
                {department.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Open Positions</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Find the perfect role for your skills and career goals.
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            {filteredJobs.length > 0 ? (
              <div className="space-y-6">
                {filteredJobs.map((job, index) => (
                  <motion.div
                    key={job.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-slate-700/30 rounded-xl border border-slate-600/30 p-8 hover:border-cyan-500/50 transition-all duration-300"
                  >
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                      <div className="mb-4 lg:mb-0">
                        <h3 className="text-2xl font-bold text-white mb-2">{job.title}</h3>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                          <div className="flex items-center">
                            <Briefcase className="w-4 h-4 mr-2" />
                            {job.department}
                          </div>
                          <div className="flex items-center">
                            <MapPin className="w-4 h-4 mr-2" />
                            {job.location}
                          </div>
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-2" />
                            {job.type}
                          </div>
                          <div className="flex items-center">
                            <Star className="w-4 h-4 mr-2" />
                            {job.experience}
                          </div>
                        </div>
                      </div>
                      
                      <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 inline-flex items-center">
                        Apply Now
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </button>
                    </div>
                    
                    <p className="text-gray-300 mb-6 leading-relaxed">{job.description}</p>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3">Requirements</h4>
                        <ul className="space-y-2">
                          {job.requirements.map((requirement, reqIndex) => (
                            <li key={reqIndex} className="flex items-start text-sm text-gray-300">
                              <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                              {requirement}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3">Benefits</h4>
                        <ul className="space-y-2">
                          {job.benefits.map((benefit, benIndex) => (
                            <li key={benIndex} className="flex items-start text-sm text-gray-300">
                              <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center py-16"
              >
                <Briefcase className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">No positions available</h3>
                <p className="text-gray-300">Check back later or send us your resume for future opportunities.</p>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-16 bg-slate-800/50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl font-bold text-white mb-6">Our Culture</h2>
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  We foster a culture of innovation, collaboration, and continuous learning. Our team members 
                  are encouraged to think creatively, take risks, and push the boundaries of what's possible.
                </p>
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  We believe in work-life balance, professional development, and creating an inclusive 
                  environment where everyone can thrive and contribute their best work.
                </p>
                <div className="flex items-center text-cyan-400 font-medium">
                  <span>Learn more about our culture</span>
                  <ArrowRight className="w-5 h-5 ml-2" />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-slate-700/30 rounded-2xl border border-slate-600/30 p-8"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center mb-6">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">What We Value</h3>
                <ul className="space-y-3">
                  {[
                    'Continuous learning and growth',
                    'Diversity and inclusion',
                    'Work-life balance',
                    'Innovation and creativity',
                    'Collaboration and teamwork',
                    'Client success and satisfaction'
                  ].map((item, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-cyan-600/20 to-blue-600/20">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">Don't See the Right Role?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 inline-flex items-center">
                Submit Resume
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
                Contact Recruiting
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
