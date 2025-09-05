<<<<<<< HEAD
import * as React from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  BookOpen, 
  Play, 
  Clock, 
  Star, 
  Users, 
  Award, 
  ArrowRight,
  CheckCircle,
  Target,
  Zap
} from 'lucide-react';
import Layout from '../components/Layout';

const courses = [
  {
    id: 1,,
    duration: '8 hours',
    level: 'Beginner',
    rating: 4.8,
    students: 1250,
    price: '$199',
    image: '/api/placeholder/400/300',
    instructor: 'Dr. Sarah Johnson',
    category: 'AI & Technology'
  },
  {
    id: 2,,
    duration: '12 hours',
    level: 'Intermediate',
    rating: 4.9,
    students: 980,
    price: '$299',
    image: '/api/placeholder/400/300',
    instructor: 'Michael Chen',
    category: 'IT Services'
  },
  {
    id: 3,,
    duration: '16 hours',
    level: 'Advanced',
    rating: 4.7,
    students: 750,
    price: '$399',
    image: '/api/placeholder/400/300',
    instructor: 'Emily Rodriguez',
    category: 'Micro SaaS'
  },
  {
    id: 4,,
    duration: '10 hours',
    level: 'Intermediate',
    rating: 4.8,
    students: 1100,
    price: '$249',
    image: '/api/placeholder/400/300',
    instructor: 'David Kim',
    category: 'Security'
  }
];

const categories = [
  { name: 'All', count: 25 },
  { name: 'AI & Technology', count: 8 },
  { name: 'IT Services', count: 6 },
  { name: 'Micro SaaS', count: 5 },
  { name: 'Security', count: 4 },
  { name: 'Business', count: 2 }
];

const features = [
  {
    icon: GraduationCap,
  },
  {
    icon: BookOpen,
  },
  {
    icon: Play,
  },
  {
    icon: Award,
  }
];

export default function TrainingPage() {
  return (
    <Layout
      title="Training & Education - Zion Tech Group"
      description="Enhance your skills with our comprehensive training programs in AI, IT services, and technology solutions."
      keywords="training, education, courses, AI, IT, micro SaaS, technology, certification"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Training & Education
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Master the latest technologies with our comprehensive training programs
=======
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  Clock, 
  User, 
  Award,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import Layout from '../components/Layout';

const trainingPrograms = [
  {
    id: 1,
    title: 'AI & Machine Learning Fundamentals',
    description: 'Learn the basics of AI and machine learning with hands-on projects.',
    duration: '8 weeks',
    level: 'Beginner',
    instructor: 'Dr. Sarah Johnson',
    price: '$1,999',
    features: ['Live sessions', 'Hands-on projects', 'Certificate', 'Lifetime access']
  },
  {
    id: 2,
    title: 'Cloud Architecture & DevOps',
    description: 'Master cloud technologies and DevOps practices for scalable applications.',
    duration: '6 weeks',
    level: 'Intermediate',
    instructor: 'Mike Chen',
    price: '$1,499',
    features: ['AWS/Azure labs', 'CI/CD pipelines', 'Containerization', 'Monitoring']
  },
  {
    id: 3,
    title: 'Full-Stack Web Development',
    description: 'Build modern web applications with React, Node.js, and databases.',
    duration: '10 weeks',
    level: 'Beginner',
    instructor: 'Alex Rodriguez',
    price: '$2,499',
    features: ['React & Next.js', 'Node.js & Express', 'Database design', 'Deployment']
  },
  {
    id: 4,
    title: 'Data Science & Analytics',
    description: 'Transform data into insights with Python, R, and advanced analytics.',
    duration: '12 weeks',
    level: 'Intermediate',
    instructor: 'Dr. Lisa Wang',
    price: '$2,999',
    features: ['Python & R', 'Statistical analysis', 'Data visualization', 'ML algorithms']
  }
];

export default function Training() {
  return (
    <Layout>
      <Head>
        <title>Training Programs - Zion Tech Group</title>
        <meta name="description" content="Professional training programs to advance your technical skills." />
      </Head>

      <main>
        <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Training Programs
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Professional training programs to advance your technical skills.
>>>>>>> pr-11913
              </p>
            </motion.div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Features Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Courses Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Courses</h2>
              <p className="text-lg text-gray-600">
                Choose from our comprehensive selection of technology training programs
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {courses.map((course, index) => (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  <div className="aspect-w-16 aspect-h-9">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-2 py-1 bg-blue-100 text-blue-600 text-xs rounded-full">
                        {course.category}
                      </span>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400" />
                        <span className="text-sm text-gray-600">{course.rating}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{course.title}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">{course.description}</p>
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{course.duration}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Users className="w-4 h-4" />
                          <span>{course.students}</span>
                        </div>
                      </div>
                      <span className="font-medium text-green-600">{course.price}</span>
                    </div>
                    <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2">
                      <span>Enroll Now</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center text-white"
            >
              <h2 className="text-3xl font-bold mb-4">Ready to Start Learning?</h2>
              <p className="text-xl mb-8">
                Join thousands of professionals who have enhanced their skills with our training programs
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-medium">
                  Browse All Courses
                </button>
                <button className="px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-medium">
                  Contact Us
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
=======
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
                Available Programs
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {trainingPrograms.map((program, index) => (
                  <motion.div
                    key={program.id}
                    className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{program.title}</h3>
                      <p className="text-gray-600 mb-4">{program.description}</p>
                    </div>
                    
                    <div className="space-y-2 text-sm text-gray-500 mb-6">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        {program.duration}
                      </div>
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-2" />
                        {program.instructor}
                      </div>
                      <div className="flex items-center">
                        <Award className="w-4 h-4 mr-2" />
                        {program.level}
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">What's Included:</h4>
                      <ul className="space-y-2">
                        {program.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="text-3xl font-bold text-blue-600">{program.price}</div>
                      <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300 flex items-center">
                        Enroll Now
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Ready to Start Learning?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Join thousands of professionals who have advanced their careers with our training programs.
              </p>
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300">
                View All Programs
              </button>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
>>>>>>> pr-11913
