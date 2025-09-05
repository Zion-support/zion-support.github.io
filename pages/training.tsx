import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  Play, 
  Users, 
  Clock, 
  Star, 
  ArrowRight,
  Search,
  Filter,
  Award,
  CheckCircle,
  ExternalLink,
  Calendar
} from 'lucide-react';
import Layout from '../components/Layout';

const trainingCategories = [
  { name: 'All Courses', count: 45, active: true },
  { name: 'AI & Machine Learning', count: 12, active: false },
  { name: 'Cloud Computing', count: 8, active: false },
  { name: 'Cybersecurity', count: 6, active: false },
  { name: 'DevOps', count: 7, active: false },
  { name: 'Data Analytics', count: 5, active: false },
  { name: 'Web Development', count: 7, active: false }
];

const featuredCourses = [
  {
    id: 1,
    title: 'Advanced Machine Learning with Python',
    instructor: 'Dr. Sarah Chen',
    duration: '8 weeks',
    level: 'Advanced',
    rating: 4.9,
    students: 1247,
    price: '$299',
    originalPrice: '$399',
    image: '/api/placeholder/300/200',
    description: 'Master advanced machine learning techniques including deep learning, neural networks, and model optimization.',
    features: ['Hands-on projects', 'Industry case studies', 'Certificate of completion', 'Lifetime access']
  },
  {
    id: 2,
    title: 'AWS Cloud Architecture Masterclass',
    instructor: 'Alex Thompson',
    duration: '6 weeks',
    level: 'Intermediate',
    rating: 4.8,
    students: 892,
    price: '$249',
    originalPrice: '$349',
    image: '/api/placeholder/300/200',
    description: 'Learn to design and implement scalable cloud architectures on AWS.',
    features: ['Real-world projects', 'AWS certification prep', 'Mentor support', 'Job placement assistance']
  },
  {
    id: 3,
    title: 'Cybersecurity Fundamentals',
    instructor: 'Michael Rodriguez',
    duration: '4 weeks',
    level: 'Beginner',
    rating: 4.7,
    students: 1563,
    price: '$199',
    originalPrice: '$299',
    image: '/api/placeholder/300/200',
    description: 'Essential cybersecurity concepts and practices for modern businesses.',
    features: ['Security labs', 'Threat simulation', 'Industry best practices', 'Certification exam']
  },
  {
    id: 4,
    title: 'DevOps with Docker & Kubernetes',
    instructor: 'Emma Wilson',
    duration: '5 weeks',
    level: 'Intermediate',
    rating: 4.9,
    students: 743,
    price: '$279',
    originalPrice: '$379',
    image: '/api/placeholder/300/200',
    description: 'Master containerization and orchestration with Docker and Kubernetes.',
    features: ['Hands-on labs', 'Production scenarios', 'CI/CD pipelines', 'Monitoring setup']
  }
];

const upcomingWebinars = [
  {
    id: 1,
    title: 'Introduction to AI Ethics',
    date: '2024-02-15',
    time: '2:00 PM EST',
    duration: '60 minutes',
    instructor: 'Dr. Lisa Park',
    attendees: 45,
    maxAttendees: 100,
    description: 'Explore the ethical implications of artificial intelligence in modern applications.'
  },
  {
    id: 2,
    title: 'Cloud Security Best Practices',
    date: '2024-02-20',
    time: '3:00 PM EST',
    duration: '90 minutes',
    instructor: 'John Smith',
    attendees: 78,
    maxAttendees: 150,
    description: 'Learn essential security practices for cloud environments and data protection.'
  },
  {
    id: 3,
    title: 'Data Visualization with Python',
    date: '2024-02-25',
    time: '1:00 PM EST',
    duration: '75 minutes',
    instructor: 'Maria Garcia',
    attendees: 32,
    maxAttendees: 80,
    description: 'Create compelling data visualizations using Python libraries and tools.'
  }
];

const certifications = [
  {
    name: 'AI & ML Professional',
    description: 'Comprehensive certification in artificial intelligence and machine learning',
    duration: '6 months',
    difficulty: 'Advanced',
    requirements: ['Complete 3 core courses', 'Pass final exam', 'Submit capstone project']
  },
  {
    name: 'Cloud Solutions Architect',
    description: 'Expert-level certification in cloud architecture and design',
    duration: '4 months',
    difficulty: 'Advanced',
    requirements: ['Complete 2 core courses', 'Pass practical exam', 'Design solution architecture']
  },
  {
    name: 'Cybersecurity Specialist',
    description: 'Specialized certification in cybersecurity and threat management',
    duration: '3 months',
    difficulty: 'Intermediate',
    requirements: ['Complete 2 core courses', 'Pass security assessment', 'Complete security project']
  }
];

export default function TrainingPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Courses');
  const [selectedLevel, setSelectedLevel] = useState('all');

  return (
    <Layout
      title="Training & Courses - Zion Tech Group"
      description="Enhance your skills with our comprehensive training programs. Expert-led courses in AI, cloud computing, cybersecurity, and more. Get certified and advance your career."
      keywords="training, courses, certification, AI, cloud computing, cybersecurity, DevOps, machine learning, professional development"
    >
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Professional{' '}
                <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  Training
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Advance your career with expert-led courses, hands-on training, and industry-recognized 
                certifications in cutting-edge technologies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/register" className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Start Learning
                </Link>
                <Link href="/contact" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">
                  Get Consultation
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Categories Section */}
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
                Course Categories
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto">
                Explore our comprehensive range of training programs across different technology domains.
              </p>
            </motion.div>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {trainingCategories.map((category, index) => (
                <motion.button
                  key={category.name}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category.name
                      ? 'bg-indigo-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-indigo-50 hover:text-indigo-600'
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {category.name} ({category.count})
                </motion.button>
              ))}
            </div>

            {/* Search and Filter */}
            <div className="max-w-4xl mx-auto mb-12">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search courses..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  />
                </div>
                <select
                  value={selectedLevel}
                  onChange={(e) => setSelectedLevel(e.target.value)}
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                >
                  <option value="all">All Levels</option>
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="advanced">Advanced</option>
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Courses */}
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
                Featured Courses
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto">
                Our most popular and highly-rated training programs designed by industry experts.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {featuredCourses.map((course, index) => (
                <motion.div
                  key={course.id}
                  className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="aspect-video bg-gray-200 relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                      <Play className="w-16 h-16 text-white" />
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        course.level === 'Beginner' ? 'bg-green-100 text-green-800' :
                        course.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {course.level}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-gray-900">
                        {course.title}
                      </h3>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="ml-1 text-sm text-gray-600">{course.rating}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-4">
                      by {course.instructor}
                    </p>
                    
                    <p className="text-gray-700 mb-4">
                      {course.description}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {course.duration}
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        {course.students} students
                      </div>
                    </div>
                    
                    <div className="space-y-2 mb-6">
                      {course.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <span className="text-2xl font-bold text-gray-900">{course.price}</span>
                        {course.originalPrice && (
                          <span className="ml-2 text-lg text-gray-500 line-through">
                            {course.originalPrice}
                          </span>
                        )}
                      </div>
                      <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors font-medium">
                        Enroll Now
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Upcoming Webinars */}
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
                Upcoming Webinars
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto">
                Join our free live webinars and learn from industry experts.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {upcomingWebinars.map((webinar, index) => (
                <motion.div
                  key={webinar.id}
                  className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                      Free Webinar
                    </span>
                    <div className="text-sm text-gray-500">
                      {webinar.attendees}/{webinar.maxAttendees} spots
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {webinar.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4">
                    by {webinar.instructor}
                  </p>
                  
                  <p className="text-gray-700 text-sm mb-4">
                    {webinar.description}
                  </p>
                  
                  <div className="space-y-2 text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {new Date(webinar.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      {webinar.time} ({webinar.duration})
                    </div>
                  </div>
                  
                  <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                    Register Now
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications */}
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
                Professional Certifications
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto">
                Earn industry-recognized certifications that validate your expertise and advance your career.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-all duration-300 text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-indigo-600 mb-4 flex justify-center">
                    <Award className="w-12 h-12" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {cert.name}
                  </h3>
                  
                  <p className="text-gray-600 mb-4">
                    {cert.description}
                  </p>
                  
                  <div className="space-y-2 text-sm text-gray-500 mb-6">
                    <div className="flex justify-between">
                      <span>Duration:</span>
                      <span className="font-medium">{cert.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Level:</span>
                      <span className="font-medium">{cert.difficulty}</span>
                    </div>
                  </div>
                  
                  <div className="text-left">
                    <h4 className="font-semibold text-gray-900 mb-2">Requirements:</h4>
                    <ul className="space-y-1">
                      {cert.requirements.map((req, reqIndex) => (
                        <li key={reqIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <button className="mt-6 w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors font-medium">
                    Learn More
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Advance Your Career?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Join thousands of professionals who have transformed their careers 
                with our expert-led training programs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/register" className="px-8 py-4 bg-white text-indigo-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                  Start Learning Today
                </Link>
                <Link href="/contact" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-indigo-600 transition-all duration-300 font-semibold">
                  Get Career Consultation
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}