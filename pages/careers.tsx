import React, { useState } from 'react';
import MainLayout from '../components/layout/MainLayout';
import { motion } from 'framer-motion';
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  Users, 
  Award, 
  Heart,
  CheckCircle,
  ArrowRight,
  Zap,
  Brain,
  Shield,
  Cloud,
  Code
} from 'lucide-react';

const jobOpenings = [
  {
    title: 'Senior AI Engineer',
    department: 'AI Research',
    location: 'San Francisco, CA',
    type: 'Full-time',
    experience: '5+ years',
    icon: Brain,
    color: 'from-purple-500 to-pink-500',
    description: 'Lead the development of cutting-edge AI solutions and machine learning models.',
    requirements: [
      'Master\'s degree in Computer Science or related field',
      '5+ years experience in machine learning',
      'Proficiency in Python, TensorFlow, PyTorch',
      'Experience with cloud platforms (AWS, Azure, GCP)',
      'Strong problem-solving and communication skills'
    ],
    benefits: ['Competitive salary', 'Health insurance', '401k matching', 'Flexible work hours']
  },
  {
    title: 'Cybersecurity Specialist',
    department: 'Security',
    location: 'Remote',
    type: 'Full-time',
    experience: '3+ years',
    icon: Shield,
    color: 'from-red-500 to-orange-500',
    description: 'Protect our clients\' digital assets and infrastructure from cyber threats.',
    requirements: [
      'Bachelor\'s degree in Cybersecurity or related field',
      '3+ years experience in cybersecurity',
      'Certifications: CISSP, CISM, or equivalent',
      'Experience with security tools and frameworks',
      'Knowledge of compliance standards (SOC2, ISO27001)'
    ],
    benefits: ['Competitive salary', 'Health insurance', '401k matching', 'Remote work']
  },
  {
    title: 'Cloud Solutions Architect',
    department: 'Infrastructure',
    location: 'New York, NY',
    type: 'Full-time',
    experience: '7+ years',
    icon: Cloud,
    color: 'from-blue-500 to-cyan-500',
    description: 'Design and implement scalable cloud infrastructure solutions for enterprise clients.',
    requirements: [
      'Bachelor\'s degree in Computer Science or related field',
      '7+ years experience in cloud architecture',
      'Expertise in AWS, Azure, or Google Cloud',
      'Experience with DevOps and CI/CD',
      'Strong leadership and mentoring skills'
    ],
    benefits: ['Competitive salary', 'Health insurance', '401k matching', 'Stock options']
  },
  {
    title: 'Full-Stack Developer',
    department: 'Engineering',
    location: 'Austin, TX',
    type: 'Full-time',
    experience: '4+ years',
    icon: Code,
    color: 'from-green-500 to-emerald-500',
    description: 'Build innovative micro SaaS applications and web solutions.',
    requirements: [
      'Bachelor\'s degree in Computer Science or related field',
      '4+ years experience in full-stack development',
      'Proficiency in React, Node.js, Python',
      'Experience with databases (PostgreSQL, MongoDB)',
      'Knowledge of modern development practices'
    ],
    benefits: ['Competitive salary', 'Health insurance', '401k matching', 'Learning budget']
  }
];

const benefits = [
  {
    icon: Heart,
    title: 'Health & Wellness',
    description: 'Comprehensive health insurance, dental, vision, and mental health support'
  },
  {
    icon: Award,
    title: 'Professional Development',
    description: 'Learning budget, conference attendance, and certification support'
  },
  {
    icon: Clock,
    title: 'Work-Life Balance',
    description: 'Flexible hours, remote work options, and generous PTO'
  },
  {
    icon: Users,
    title: 'Team Culture',
    description: 'Collaborative environment with regular team events and activities'
  }
];

const values = [
  {
    title: 'Innovation',
    description: 'We encourage creative thinking and embrace new technologies to solve complex problems.'
  },
  {
    title: 'Excellence',
    description: 'We strive for the highest quality in everything we do, from code to customer service.'
  },
  {
    title: 'Collaboration',
    description: 'We believe in the power of teamwork and diverse perspectives to achieve great results.'
  },
  {
    title: 'Growth',
    description: 'We invest in our people\'s development and provide opportunities for career advancement.'
  }
];

export default function CareersPage() {
  const [selectedJob, setSelectedJob] = useState<number | null>(null);

  return (
    <MainLayout>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="flex items-center justify-center mb-6">
                <Briefcase className="h-16 w-16 text-blue-400 mr-4" />
                <h1 className="text-4xl md:text-6xl font-bold">
                  Join Our{' '}
                  <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Team
                  </span>
                </h1>
              </div>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Build the future of technology with us. We're looking for passionate individuals who want to make a difference.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#openings" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  View Open Positions
                </a>
                <a href="/contact" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">
                  Contact Us
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Why Work With Us */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Work With Us?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We offer more than just a job - we provide a career path with growth opportunities, competitive benefits, and a supportive team environment.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <motion.div
                    key={benefit.title}
                    className="text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Values
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                These core values guide everything we do and shape our company culture.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  className="bg-white rounded-lg shadow-lg p-6"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Job Openings */}
        <section id="openings" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Open Positions
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Explore our current job openings and find the perfect role for your career.
              </p>
            </motion.div>

            <div className="space-y-6">
              {jobOpenings.map((job, index) => {
                const IconComponent = job.icon;
                const isSelected = selectedJob === index;
                
                return (
                  <motion.div
                    key={job.title}
                    className="bg-white rounded-lg shadow-lg overflow-hidden"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className={`h-2 bg-gradient-to-r ${job.color}`}></div>
                    
                    <div className="p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center">
                          <div className={`w-12 h-12 bg-gradient-to-r ${job.color} rounded-lg flex items-center justify-center mr-4`}>
                            <IconComponent className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-gray-900">{job.title}</h3>
                            <div className="flex items-center space-x-4 text-sm text-gray-600 mt-1">
                              <span className="flex items-center">
                                <MapPin className="w-4 h-4 mr-1" />
                                {job.location}
                              </span>
                              <span className="flex items-center">
                                <Clock className="w-4 h-4 mr-1" />
                                {job.type}
                              </span>
                              <span>{job.experience}</span>
                            </div>
                          </div>
                        </div>
                        
                        <button
                          onClick={() => setSelectedJob(isSelected ? null : index)}
                          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center"
                        >
                          {isSelected ? 'Hide Details' : 'View Details'}
                          <ArrowRight className={`w-4 h-4 ml-2 transition-transform ${isSelected ? 'rotate-90' : ''}`} />
                        </button>
                      </div>

                      <p className="text-gray-600 mt-4">{job.description}</p>

                      {isSelected && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mt-6 pt-6 border-t border-gray-200"
                        >
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-3">Requirements:</h4>
                              <ul className="space-y-2">
                                {job.requirements.map((req, reqIndex) => (
                                  <li key={reqIndex} className="flex items-start">
                                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                    <span className="text-sm text-gray-600">{req}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-3">Benefits:</h4>
                              <ul className="space-y-2">
                                {job.benefits.map((benefit, benefitIndex) => (
                                  <li key={benefitIndex} className="flex items-start">
                                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                    <span className="text-sm text-gray-600">{benefit}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                          
                          <div className="mt-6 flex flex-col sm:flex-row gap-4">
                            <a
                              href={`mailto:careers@ziontechgroup.com?subject=Application for ${job.title}`}
                              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-center"
                            >
                              Apply Now
                            </a>
                            <a
                              href="/contact"
                              className="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-colors text-center"
                            >
                              Ask Questions
                            </a>
                          </div>
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Don't See Your Perfect Role?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                We're always looking for talented individuals. Send us your resume and let us know how you'd like to contribute.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:careers@ziontechgroup.com"
                  className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold"
                >
                  Send Your Resume
                </a>
                <a
                  href="/contact"
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold"
                >
                  Get in Touch
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}