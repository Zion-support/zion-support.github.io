import React from 'react';

export default function Careers() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-white mb-4">Careers</h1>
      <p className="text-zion-slate-light">Join us to build the future of technology.</p>
    </div>
  );
}

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Briefcase, 
  MapPin, 
  Clock, 
  Star, 
  Heart, 
  Zap, 
  Brain, 
  Cloud, 
  Rocket, 
  Shield, 
  Globe, 
  Award, 
  CheckCircle, 
  ArrowRight,
  Building,
  GraduationCap,
  Target,
  TrendingUp,
  Lightbulb,
  Coffee,
  Gamepad2,
  Palette,
  Music,
  BookOpen,
  Camera,
  Dumbbell,
  Code,
  Eye,
  FileText
} from 'lucide-react';
import { SEO } from '../components/SEO';

export default function Careers() {
  const openPositions = [
    {
      title: 'Senior AI Engineer',
      department: 'Artificial Intelligence',
      location: 'Remote / Delaware',
      type: 'Full-time',
      experience: '5+ years',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      description: 'Lead AI development initiatives and drive innovation in machine learning solutions',
      requirements: [
        'Advanced degree in Computer Science or related field',
        'Expertise in Python, TensorFlow, and PyTorch',
        'Experience with large language models and NLP',
        'Strong background in machine learning algorithms'
      ]
    },
    {
      title: 'Cloud DevOps Engineer',
      department: 'Cloud Infrastructure',
      location: 'Remote / Delaware',
      type: 'Full-time',
      experience: '3+ years',
      icon: Cloud,
      color: 'from-blue-500 to-cyan-500',
      description: 'Build and maintain scalable cloud infrastructure and CI/CD pipelines',
      requirements: [
        'Experience with AWS, Azure, or GCP',
        'Proficiency in Docker, Kubernetes, and Terraform',
        'Knowledge of CI/CD tools and practices',
        'Strong scripting skills in Python or Bash'
      ]
    },
    {
      title: 'Cybersecurity Specialist',
      department: 'Security',
      location: 'Remote / Delaware',
      type: 'Full-time',
      experience: '4+ years',
      icon: Shield,
      color: 'from-green-500 to-emerald-500',
      description: 'Protect our systems and data from cyber threats and vulnerabilities',
      requirements: [
        'Certifications in CISSP, CEH, or similar',
        'Experience with security tools and frameworks',
        'Knowledge of threat detection and response',
        'Understanding of compliance requirements'
      ]
    },
    {
      title: 'Frontend Developer',
      department: 'Engineering',
      location: 'Remote / Delaware',
      type: 'Full-time',
      experience: '2+ years',
      icon: Code,
      color: 'from-orange-500 to-red-500',
      description: 'Create beautiful and responsive user interfaces for our applications',
      requirements: [
        'Proficiency in React, TypeScript, and Tailwind CSS',
        'Experience with modern frontend frameworks',
        'Understanding of responsive design principles',
        'Knowledge of web accessibility standards'
      ]
    }
  ];

  const benefits = [
    {
      title: 'Health & Wellness',
      icon: Heart,
      color: 'from-red-500 to-pink-500',
      items: [
        'Comprehensive health insurance',
        'Dental and vision coverage',
        'Mental health support',
        'Fitness and wellness programs'
      ]
    },
    {
      title: 'Professional Growth',
      icon: TrendingUp,
      color: 'from-blue-500 to-cyan-500',
      items: [
        'Continuous learning opportunities',
        'Conference and training budgets',
        'Career development programs',
        'Mentorship programs'
      ]
    },
    {
      title: 'Work-Life Balance',
      icon: Clock,
      color: 'from-green-500 to-emerald-500',
      items: [
        'Flexible working hours',
        'Unlimited PTO',
        'Remote work options',
        'Family-friendly policies'
      ]
    },
    {
      title: 'Team & Culture',
      icon: Users,
      color: 'from-purple-500 to-pink-500',
      items: [
        'Collaborative environment',
        'Regular team events',
        'Diversity and inclusion',
        'Open communication culture'
      ]
    }
  ];

  const companyValues = [
    {
      title: 'Innovation First',
      description: 'We push boundaries and embrace new technologies to solve complex problems',
      icon: Lightbulb,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Customer Success',
      description: 'Our success is measured by the success of our customers and their businesses',
      icon: Target,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Continuous Learning',
      description: 'We believe in lifelong learning and encourage growth at every level',
      icon: GraduationCap,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Integrity & Trust',
      description: 'We build lasting relationships based on honesty, transparency, and reliability',
      icon: Shield,
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const cultureHighlights = [
    {
      title: 'Innovation Labs',
      description: 'Dedicated time for exploring new ideas and technologies',
      icon: Lightbulb,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Knowledge Sharing',
      description: 'Regular tech talks, workshops, and knowledge exchange sessions',
      icon: BookOpen,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Team Building',
      description: 'Fun activities and events to build strong team relationships',
      icon: Users,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Recognition',
      description: 'Celebrating achievements and contributions at all levels',
      icon: Award,
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const applicationProcess = [
    {
      step: '1',
      title: 'Application',
      description: 'Submit your resume and cover letter through our portal',
      icon: FileText,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      step: '2',
      title: 'Initial Review',
      description: 'Our team reviews your application and qualifications',
      icon: Eye,
      color: 'from-green-500 to-emerald-500'
    },
    {
      step: '3',
      title: 'Technical Assessment',
      description: 'Complete technical challenges and coding exercises',
      icon: Code,
      color: 'from-purple-500 to-pink-500'
    },
    {
      step: '4',
      title: 'Team Interviews',
      description: 'Meet with team members and discuss your experience',
      icon: Users,
      color: 'from-orange-500 to-red-500'
    },
    {
      step: '5',
      title: 'Final Decision',
      description: 'Receive feedback and join our team if selected',
      icon: CheckCircle,
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const contactInfo = [
    {
      title: 'General Inquiries',
      description: 'Questions about careers or company culture',
      email: 'careers@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    {
      title: 'Technical Recruiting',
      description: 'Technical roles and engineering positions',
      email: 'tech-recruiting@ziontechgroup.com',
      phone: '+1 302 464 0950'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Careers - Zion Tech Group"
        description="Join Zion Tech Group's innovative team. Explore exciting career opportunities in AI, cloud computing, cybersecurity, and more. Build the future with us."
      />
      
      {/* Header */}
      <div className="bg-slate-800/50 border-b border-slate-700">
        <div className="container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Join Our Team
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Build the future with Zion Tech Group. Join a team of innovators, problem-solvers, 
              and technology enthusiasts who are shaping the digital landscape.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Why Join Us */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-2xl p-8 text-center"
        >
          <h2 className="text-2xl font-bold text-white mb-4">
            Why Choose Zion Tech Group?
          </h2>
          <p className="text-slate-300 max-w-4xl mx-auto">
            We're not just another tech company. We're a team of passionate individuals working together 
            to solve real-world problems with cutting-edge technology. Join us in our mission to 
            transform businesses and empower innovation.
          </p>
        </motion.div>
      </div>

      {/* Company Values */}
      <div className="bg-slate-800/20 py-16">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-3xl font-bold text-white text-center mb-12"
          >
            Our Values
          </motion.h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {companyValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="bg-slate-800/30 border border-slate-700 rounded-xl p-6"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-xl flex items-center justify-center`}>
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{value.title}</h3>
                </div>
                <p className="text-slate-300">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Culture Highlights */}
      <div className="container mx-auto px-4 py-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-3xl font-bold text-white text-center mb-12"
        >
          Our Culture
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cultureHighlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              className="text-center"
            >
              <div className={`w-20 h-20 bg-gradient-to-br ${highlight.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                <highlight.icon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{highlight.title}</h3>
              <p className="text-slate-400 text-sm">{highlight.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Benefits */}
      <div className="bg-slate-800/20 py-16">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-3xl font-bold text-white text-center mb-12"
          >
            Benefits & Perks
          </motion.h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="bg-slate-800/30 border border-slate-700 rounded-xl p-6"
              >
                <div className="text-center mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                </div>
                
                <div className="space-y-3">
                  {benefit.items.map((item, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span className="text-slate-300 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Open Positions */}
      <div className="container mx-auto px-4 py-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="text-3xl font-bold text-white text-center mb-12"
        >
          Open Positions
        </motion.h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {openPositions.map((position, index) => (
            <motion.div
              key={position.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 + index * 0.1 }}
              className="bg-slate-800/30 border border-slate-700 rounded-xl p-6 hover:border-purple-400/50 transition-all duration-300"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className={`w-16 h-16 bg-gradient-to-br ${position.color} rounded-xl flex items-center justify-center`}>
                  <position.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">{position.title}</h3>
                  <p className="text-slate-400 text-sm">{position.department}</p>
                </div>
              </div>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-slate-400" />
                    <span className="text-slate-300">{position.location}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-slate-400" />
                    <span className="text-slate-300">{position.type}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Star className="w-4 h-4 text-slate-400" />
                    <span className="text-slate-300">{position.experience}</span>
                  </div>
                </div>
                
                <p className="text-slate-300 text-sm">{position.description}</p>
              </div>
              
              <div className="space-y-3">
                <h4 className="text-slate-300 font-medium">Requirements:</h4>
                <div className="space-y-2">
                  {position.requirements.map((req, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span className="text-slate-300 text-sm">{req}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <button className="w-full mt-6 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2">
                <span>Apply Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Application Process */}
      <div className="bg-slate-800/20 py-16">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="text-3xl font-bold text-white text-center mb-12"
          >
            Application Process
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {applicationProcess.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                className="text-center"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl`}>
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-slate-400 text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="container mx-auto px-4 py-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.3 }}
          className="text-3xl font-bold text-white text-center mb-12"
        >
          Get in Touch
        </motion.h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {contactInfo.map((contact, index) => (
            <motion.div
              key={contact.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
              className="bg-slate-800/30 border border-slate-700 rounded-xl p-6"
            >
              <h3 className="text-xl font-semibold text-white mb-4">{contact.title}</h3>
              <p className="text-slate-400 mb-6">{contact.description}</p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-slate-700 rounded-lg flex items-center justify-center">
                    <span className="text-purple-400 text-sm font-medium">@</span>
                  </div>
                  <div>
                    <div className="text-white font-medium">{contact.email}</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-slate-700 rounded-lg flex items-center justify-center">
                    <span className="text-purple-400 text-sm font-medium">📞</span>
                  </div>
                  <div>
                    <div className="text-white font-medium">{contact.phone}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-2xl p-8 text-center"
        >
          <h2 className="text-2xl font-bold text-white mb-4">
            Ready to Join Our Team?
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto mb-6">
            Don't see a position that fits? We're always looking for talented individuals. 
            Send us your resume and let's explore opportunities together.
          </p>
          <button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 flex items-center space-x-2 mx-auto">
            <span>Send Your Resume</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </div>
  );
}
