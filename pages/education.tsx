import * as React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { 
  BookOpen, 
  Users, 
  BarChart3, 
  Globe, 
  ArrowRight, 
  CheckCircle, 
  Award,
  TrendingUp,
  DollarSign,
  Clock,
  Star,
  Shield,
  Lock,
  Settings
} from 'lucide-react';
import Layout from '../components/Layout';
import { motion } from 'framer-motion';

const educationSolutions = [
  {
    title: "Learning Management Systems (LMS)",
    description: "Comprehensive platforms for course delivery, student management, and assessment",
    icon: BookOpen,
    features: ["Course creation", "Student tracking", "Assessment tools", "Progress analytics"],
    pricing: "Starting at $12,000"
  },
  {
    title: "Virtual Classroom Platforms",
    description: "Interactive online learning environments with video, chat, and collaboration tools",
    icon: Globe,
    features: ["Video conferencing", "Screen sharing", "Interactive whiteboard", "Breakout rooms"],
    pricing: "Starting at $8,000"
  },
  {
    title: "Student Information Systems",
    description: "Complete student data management and administrative systems",
    icon: Users,
    features: ["Student records", "Enrollment management", "Grade tracking", "Parent portal"],
    pricing: "Starting at $15,000"
  },
  {
    title: "Educational Analytics",
    description: "Data-driven insights for student performance and institutional effectiveness",
    icon: BarChart3,
    features: ["Performance analytics", "Predictive modeling", "Engagement tracking", "Outcome analysis"],
    pricing: "Starting at $10,000"
  }
];

const benefits = [
  {
    title: "Enhanced Learning",
    description: "Technology solutions that improve student engagement and outcomes",
    icon: BookOpen
  },
  {
    title: "Accessibility",
    description: "Inclusive learning platforms accessible to all students",
    icon: Users
  },
  {
    title: "Data-Driven Insights",
    description: "Analytics that help educators make informed decisions",
    icon: BarChart3
  },
  {
    title: "Scalable Solutions",
    description: "Platforms that grow with your institution and student body",
    icon: TrendingUp
  }
];

const stats = [
  { number: '200+', label: 'Educational Institutions' },
  { number: '50,000+', label: 'Students Served' },
  { number: '95%', label: 'Student Satisfaction' },
  { number: '24/7', label: 'Support Available' }
];

export default function EducationSolutions() {
  return (
    <Layout 
      title="Educational Technology Solutions | Zion Tech Group"
      description="Comprehensive EdTech solutions including LMS platforms, virtual classrooms, student information systems, and educational analytics."
      keywords="educational technology, LMS, virtual classroom, student information systems, EdTech, learning management"
    >
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Educational Technology Solutions
              </h1>
              <p className="text-xl md:text-2xl text-indigo-100 mb-8">
                Transform education with innovative technology solutions for modern learning
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact" 
                  className="bg-white text-indigo-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors text-lg"
                >
                  Get Started
                </Link>
                <Link 
                  href="/quote" 
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-indigo-900 px-8 py-4 rounded-lg font-semibold transition-colors text-lg"
                >
                  Get Quote
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
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold text-indigo-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our Education Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive educational technology solutions for institutions of all sizes
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {educationSolutions.map((solution, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mr-4">
                      <solution.icon className="w-6 h-6 text-indigo-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{solution.title}</h3>
                      <p className="text-indigo-600 font-semibold">{solution.pricing}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6">{solution.description}</p>
                  <ul className="space-y-2 mb-6">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link 
                    href="/contact" 
                    className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-semibold"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Why Choose Our Education Solutions?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Proven expertise in educational technology and student success
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Transform Education?
              </h2>
              <p className="text-xl mb-8 max-w-3xl mx-auto">
                Let's build educational technology solutions that enhance learning and student success
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact" 
                  className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors text-lg"
                >
                  Start Your Project
                </Link>
                <Link 
                  href="/case-studies" 
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-indigo-600 px-8 py-4 rounded-lg font-semibold transition-colors text-lg"
                >
                  View Case Studies
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}