import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  BookOpen, 
  Users, 
  Monitor, 
  ArrowRight, 
  CheckCircle, 
  Brain,
  FileText,
  Shield,
  BarChart3,
  Smartphone,
  Cloud
} from 'lucide-react';
import Layout from '../../components/Layout';

const features = [
  {
    icon: GraduationCap,
    title: 'Learning Management System',
    description: 'Comprehensive LMS solutions for educational institutions to manage courses and student progress.'
  },
  {
    icon: BookOpen,
    title: 'Digital Content Management',
    description: 'Digital libraries and content management systems for educational resources and materials.'
  },
  {
    icon: Users,
    title: 'Student Information System',
    description: 'Complete SIS solutions for managing student data, enrollment, and academic records.'
  },
  {
    icon: Monitor,
    title: 'Virtual Classrooms',
    description: 'Advanced virtual classroom solutions for remote and hybrid learning environments.'
  },
  {
    icon: Brain,
    title: 'AI-Powered Learning',
    description: 'Artificial intelligence solutions for personalized learning and adaptive education.'
  },
  {
    icon: BarChart3,
    title: 'Analytics & Reporting',
    description: 'Comprehensive analytics for student performance, engagement, and institutional insights.'
  }
];

const solutions = [
  {
    title: 'Learning Management System (LMS)',
    description: 'Comprehensive LMS platform that supports online learning, course management, and student engagement.',
    features: [
      'Course creation and management',
      'Student enrollment and tracking',
      'Assignment and assessment tools',
      'Gradebook and reporting'
    ],
    benefits: [
      'Improved learning outcomes',
      'Enhanced student engagement',
      'Streamlined course management',
      'Better data-driven insights'
    ]
  },
  {
    title: 'Student Information System',
    description: 'Complete SIS solution for managing student data, academic records, and institutional operations.',
    features: [
      'Student enrollment management',
      'Academic record keeping',
      'Financial aid tracking',
      'Communication tools'
    ],
    benefits: [
      'Reduced administrative burden',
      'Improved data accuracy',
      'Enhanced student services',
      'Better compliance reporting'
    ]
  },
  {
    title: 'Virtual Learning Platform',
    description: 'Advanced virtual classroom and remote learning solutions for modern education.',
    features: [
      'Live video conferencing',
      'Interactive whiteboards',
      'Screen sharing and collaboration',
      'Recording and playback'
    ],
    benefits: [
      'Flexible learning options',
      'Increased accessibility',
      'Cost-effective delivery',
      'Enhanced collaboration'
    ]
  },
  {
    title: 'Educational Analytics',
    description: 'Data analytics solutions to track student performance and improve educational outcomes.',
    features: [
      'Student performance tracking',
      'Learning analytics',
      'Predictive modeling',
      'Institutional reporting'
    ],
    benefits: [
      'Data-driven decision making',
      'Early intervention support',
      'Improved retention rates',
      'Better resource allocation'
    ]
  }
];

const technologies = [
  { name: 'Moodle', category: 'LMS Platform' },
  { name: 'Canvas', category: 'LMS Platform' },
  { name: 'Blackboard', category: 'LMS Platform' },
  { name: 'Zoom', category: 'Video Conferencing' },
  { name: 'Microsoft Teams', category: 'Collaboration' },
  { name: 'Google Classroom', category: 'Classroom Management' },
  { name: 'React', category: 'Frontend Framework' },
  { name: 'Node.js', category: 'Backend Technology' },
  { name: 'AWS', category: 'Cloud Platform' },
  { name: 'MongoDB', category: 'Database' },
  { name: 'Tableau', category: 'Analytics' },
  { name: 'Power BI', category: 'Business Intelligence' }
];

const stats = [
  { number: '99.9%', label: 'Uptime Guarantee' },
  { number: '50%', label: 'Improved Engagement' },
  { number: '24/7', label: 'Technical Support' },
  { number: '100+', label: 'Educational Institutions' }
];

export default function EducationSolutionsPage() {
  return (
    <Layout
      title="Education Solutions - Zion Tech Group"
      description="Comprehensive education technology solutions including LMS, virtual classrooms, and student information systems. Transform learning experiences."
    >
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="flex items-center justify-center mb-6">
                <GraduationCap className="w-16 h-16 text-blue-400 mr-4" />
                <BookOpen className="w-16 h-16 text-indigo-400" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Education
                <span className="block bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                  Solutions
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Transform education with our comprehensive technology solutions. 
                From learning management systems to virtual classrooms, we help educational 
                institutions deliver engaging and effective learning experiences.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Get Started Today
                </Link>
                <Link href="/case-studies" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">
                  View Case Studies
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Comprehensive Education Technology Solutions
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Our education technology solutions are designed to enhance learning experiences, 
                streamline administrative processes, and improve educational outcomes.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="text-blue-600 mb-4 group-hover:text-indigo-600 transition-colors">
                      <IconComponent className="w-12 h-12" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Our Education Solutions
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                We provide end-to-end education technology solutions that address the unique 
                challenges and requirements of modern educational institutions.
              </p>
            </motion.div>

            <div className="space-y-12">
              {solutions.map((solution, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        {solution.title}
                      </h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {solution.description}
                      </p>
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Features:</h4>
                        <ul className="space-y-2">
                          {solution.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center">
                              <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                              <span className="text-gray-700">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Benefits:</h4>
                      <ul className="space-y-2">
                        {solution.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center">
                            <ArrowRight className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" />
                            <span className="text-gray-700">{benefit}</span>
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

        {/* Technologies Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Technologies We Work With
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                We leverage the latest education technology platforms and tools to deliver 
                robust, scalable solutions that meet your specific institutional requirements.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {technologies.map((tech, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 text-center group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {tech.name}
                  </h3>
                  <p className="text-sm text-gray-600">{tech.category}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Transform Education?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Let our education technology experts help you implement solutions that enhance 
                learning experiences, streamline operations, and improve educational outcomes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                  Get Free Consultation
                </Link>
                <Link href="/about" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold">
                  Learn About Us
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}