import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Users, ArrowRight, CheckCircle, Clock, MapPin, Briefcase, Heart, Lightbulb, Shield, Globe } from 'lucide-react';
import MainLayout from '../components/layout/MainLayout';

const openPositions = [
  {
    title: 'Senior Full Stack Developer',
    department: 'Engineering',
    location: 'Remote / Middletown, DE',
    type: 'Full-time',
    experience: '5+ years',
    description: 'Lead development of scalable web applications using modern technologies',
    requirements: ['React/Next.js', 'Node.js', 'TypeScript', 'AWS', 'PostgreSQL'],
    benefits: ['Competitive Salary', 'Health Insurance', '401k', 'Flexible Hours']
  },
  {
    title: 'AI/ML Engineer',
    department: 'AI Services',
    location: 'Remote / Middletown, DE',
    type: 'Full-time',
    experience: '3+ years',
    description: 'Develop and implement AI solutions for our clients across various industries',
    requirements: ['Python', 'TensorFlow', 'PyTorch', 'Machine Learning', 'Data Science'],
    benefits: ['Competitive Salary', 'Health Insurance', '401k', 'Learning Budget']
  },
  {
    title: 'DevOps Engineer',
    department: 'Infrastructure',
    location: 'Remote / Middletown, DE',
    type: 'Full-time',
    experience: '4+ years',
    description: 'Manage cloud infrastructure and implement CI/CD pipelines for our clients',
    requirements: ['AWS/Azure', 'Docker', 'Kubernetes', 'Terraform', 'Jenkins'],
    benefits: ['Competitive Salary', 'Health Insurance', '401k', 'Remote Work']
  },
  {
    title: 'UX/UI Designer',
    department: 'Design',
    location: 'Remote / Middletown, DE',
    type: 'Full-time',
    experience: '3+ years',
    description: 'Create intuitive and beautiful user experiences for our digital products',
    requirements: ['Figma', 'Adobe Creative Suite', 'User Research', 'Prototyping', 'Design Systems'],
    benefits: ['Competitive Salary', 'Health Insurance', '401k', 'Creative Freedom']
  },
  {
    title: 'Project Manager',
    department: 'Operations',
    location: 'Remote / Middletown, DE',
    type: 'Full-time',
    experience: '4+ years',
    description: 'Lead project delivery and ensure client satisfaction across multiple engagements',
    requirements: ['Agile/Scrum', 'Client Management', 'Technical Background', 'Communication', 'Problem Solving'],
    benefits: ['Competitive Salary', 'Health Insurance', '401k', 'Leadership Growth']
  },
  {
    title: 'Sales Engineer',
    department: 'Sales',
    location: 'Remote / Middletown, DE',
    type: 'Full-time',
    experience: '3+ years',
    description: 'Help clients understand our technical solutions and drive business growth',
    requirements: ['Technical Background', 'Sales Experience', 'Presentation Skills', 'Client Relations', 'Solution Architecture'],
    benefits: ['Competitive Salary', 'Commission', 'Health Insurance', '401k']
  }
];

const benefits = [
  {
    title: 'Competitive Compensation',
    description: 'Market-competitive salaries with performance bonuses',
    icon: Briefcase
  },
  {
    title: 'Health & Wellness',
    description: 'Comprehensive health insurance and wellness programs',
    icon: Heart
  },
  {
    title: 'Learning & Development',
    description: 'Continuous learning opportunities and skill development',
    icon: Lightbulb
  },
  {
    title: 'Work-Life Balance',
    description: 'Flexible hours and remote work options',
    icon: Clock
  },
  {
    title: 'Team Environment',
    description: 'Collaborative and supportive team culture',
    icon: Users
  },
  {
    title: 'Growth Opportunities',
    description: 'Clear career paths and advancement opportunities',
    icon: Globe
  }
];

const values = [
  { title: 'Innovation', description: 'We embrace new technologies and creative solutions' },
  { title: 'Excellence', description: 'We strive for the highest quality in everything we do' },
  { title: 'Collaboration', description: 'We work together to achieve common goals' },
  { title: 'Integrity', description: 'We maintain the highest ethical standards' },
  { title: 'Growth', description: 'We continuously learn and improve' },
  { title: 'Impact', description: 'We make a positive difference for our clients' }
];

export default function CareersPage() {
  return (
    <MainLayout
      title="Careers - Zion Tech Group"
      description="Join our team of talented professionals. Explore career opportunities in technology, design, and business at Zion Tech Group."
      keywords="careers, jobs, employment, technology careers, remote work, full stack developer, AI engineer"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="flex items-center justify-center mb-6">
                <Users className="w-16 h-16 text-blue-400 mr-4" />
                <h1 className="text-5xl md:text-6xl font-bold">
                  Join Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Team</span>
                </h1>
              </div>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Build the future of technology with a team of passionate professionals
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="#open-positions"
                  className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
                >
                  View Open Positions
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  href="/contact"
                  className="px-8 py-4 border border-white text-white hover:bg-white hover:text-gray-900 rounded-lg font-semibold transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Values</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The principles that guide our work and shape our culture
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Why Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">With Us</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We offer comprehensive benefits and a supportive work environment
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section id="open-positions" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Open <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Positions</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore current job opportunities and find your perfect role
              </p>
            </motion.div>

            <div className="space-y-8">
              {openPositions.map((position, index) => (
                <motion.div
                  key={position.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-shadow duration-300"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{position.title}</h3>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4">
                        <div className="flex items-center">
                          <Briefcase className="w-4 h-4 mr-1" />
                          {position.department}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {position.location}
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {position.type}
                        </div>
                        <div className="flex items-center">
                          <Users className="w-4 h-4 mr-1" />
                          {position.experience}
                        </div>
                      </div>
                      <p className="text-gray-600 mb-4">{position.description}</p>
                    </div>
                    <div className="lg:ml-6">
                      <Link
                        href="/contact"
                        className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors inline-flex items-center"
                      >
                        Apply Now
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Requirements:</h4>
                      <ul className="space-y-2">
                        {position.requirements.map((req, reqIndex) => (
                          <li key={reqIndex} className="flex items-center text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Benefits:</h4>
                      <ul className="space-y-2">
                        {position.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Don't See Your Role?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                We're always looking for talented individuals. Send us your resume and let us know how you can contribute to our team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-white text-blue-600 hover:bg-gray-100 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
                >
                  Send Your Resume
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  href="/about"
                  className="px-8 py-4 border border-white text-white hover:bg-white hover:text-blue-600 rounded-lg font-semibold transition-colors"
                >
                  Learn About Us
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}