import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  Users, 
  Clock, 
  Star, 
  Award, 
  Play, 
  Download, 
  Target,
  Zap,
  ArrowRight
} from 'lucide-react';
import MainLayout from './components/layout/MainLayout';

const courses = [
  {
    id: 1,
    title: 'AI & Machine Learning Fundamentals',
    description: 'Learn the basics of artificial intelligence and machine learning from industry experts.',
    duration: '8 weeks',
    level: 'Beginner',
    students: 1250,
    rating: 4.8,
    price: '$299',
    instructor: 'Dr. Sarah Johnson',
    image: '/images/courses/ai-fundamentals.jpg',
    features: [
      'Hands-on projects',
      'Industry case studies',
      'Certificate of completion',
      'Lifetime access'
    ]
  },
  {
    id: 2,
    title: 'Cloud Architecture & DevOps',
    description: 'Master cloud computing and DevOps practices for scalable applications.',
    duration: '10 weeks',
    level: 'Intermediate',
    students: 980,
    rating: 4.9,
    price: '$399',
    instructor: 'Michael Chen',
    image: '/images/courses/cloud-devops.jpg',
    features: [
      'AWS/Azure/GCP certification prep',
      'Real-world projects',
      'Mentor support',
      'Job placement assistance'
    ]
  },
  {
    id: 3,
    title: 'Full Stack Web Development',
    description: 'Complete web development course covering frontend and backend technologies.',
    duration: '12 weeks',
    level: 'Beginner',
    students: 2100,
    rating: 4.7,
    price: '$499',
    instructor: 'Lisa Wang',
    image: '/images/courses/fullstack.jpg',
    features: [
      'Modern frameworks (React, Node.js)',
      'Database design',
      'API development',
      'Portfolio projects'
    ]
  },
  {
    id: 4,
    title: 'Cybersecurity Essentials',
    description: 'Learn essential cybersecurity practices and threat mitigation strategies.',
    duration: '6 weeks',
    level: 'Intermediate',
    students: 750,
    rating: 4.6,
    price: '$249',
    instructor: 'David Rodriguez',
    image: '/images/courses/cybersecurity.jpg',
    features: [
      'Security assessment tools',
      'Penetration testing',
      'Compliance frameworks',
      'Industry certifications'
    ]
  }
];

const features = [
  {
    icon: BookOpen,
    title: 'Comprehensive Curriculum',
    description: 'Industry-relevant content updated regularly'
  },
  {
    icon: Users,
    title: 'Expert Instructors',
    description: 'Learn from industry professionals and thought leaders'
  },
  {
    icon: Clock,
    title: 'Flexible Learning',
    description: 'Study at your own pace with lifetime access'
  },
  {
    icon: Award,
    title: 'Certificates',
    description: 'Earn industry-recognized certificates upon course completion'
  }
];

export default function TrainingPage() {
  return (
    <MainLayout
      title="Training & Courses - Zion Tech Group"
      description="Professional training courses in AI, cloud computing, web development, and cybersecurity. Learn from industry experts and advance your career."
      keywords="training, courses, education, AI, cloud computing, web development, cybersecurity, professional development"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Professional <span className="text-blue-600">Training</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Advance your career with our comprehensive training programs in cutting-edge technologies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="#courses"
                  className="inline-flex items-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Browse Courses
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Our Training?</h2>
                <p className="text-xl text-gray-600">
                  Industry-leading training programs designed for career advancement
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <feature.icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Courses */}
        <section id="courses" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Featured Courses</h2>
                <p className="text-xl text-gray-600">
                  Comprehensive training programs in the latest technologies
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-8">
                {courses.map((course, index) => (
                  <motion.div
                    key={course.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    <div className="h-48 bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-500">Course Image</span>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                          {course.level}
                        </span>
                        <div className="flex items-center">
                          <Star className="w-4 h-4 text-yellow-500 mr-1" />
                          <span className="text-sm text-gray-600">{course.rating}</span>
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{course.title}</h3>
                      <p className="text-gray-600 mb-4">{course.description}</p>
                      <div className="flex items-center justify-between mb-4 text-sm text-gray-600">
                        <span className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {course.duration}
                        </span>
                        <span className="flex items-center">
                          <Users className="w-4 h-4 mr-1" />
                          {course.students} students
                        </span>
                      </div>
                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 mb-2">What you'll learn:</h4>
                        <ul className="space-y-1">
                          {course.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center text-sm text-gray-600">
                              <Target className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-gray-900">{course.price}</span>
                        <button className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
                          Enroll Now
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-600">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl font-bold text-white mb-6">Ready to Advance Your Career?</h2>
                <p className="text-xl text-blue-100 mb-8">
                  Join thousands of professionals who have advanced their careers with our training programs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/contact"
                    className="inline-flex items-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    Get Started
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
                  >
                    Schedule Consultation
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}