import React from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  Play, 
  Clock, 
  Users, 
  Star, 
  ArrowRight,
  Filter,
  Search,
  Tag,
  Download
} from 'lucide-react';
import MainLayout from './components/layout/MainLayout';

const tutorials = [
  {
    id: 1,
    title: 'Getting Started with React Hooks',
    description: 'Learn the fundamentals of React Hooks and how to use them effectively in your applications.',
    category: 'Web Development',
    duration: '45 min',
    difficulty: 'Beginner',
    rating: 4.8,
    views: 1250,
    instructor: 'Sarah Johnson',
    thumbnail: '/images/tutorials/react-hooks.jpg',
    tags: ['React', 'JavaScript', 'Hooks', 'Frontend']
  },
  {
    id: 2,
    title: 'Building RESTful APIs with Node.js',
    description: 'Create robust and scalable REST APIs using Node.js and Express framework.',
    category: 'Backend Development',
    duration: '2 hours',
    difficulty: 'Intermediate',
    rating: 4.9,
    views: 980,
    instructor: 'Michael Chen',
    thumbnail: '/images/tutorials/nodejs-api.jpg',
    tags: ['Node.js', 'Express', 'API', 'Backend']
  },
  {
    id: 3,
    title: 'Machine Learning with Python',
    description: 'Introduction to machine learning concepts and implementation using Python and scikit-learn.',
    category: 'AI & ML',
    duration: '3 hours',
    difficulty: 'Intermediate',
    rating: 4.7,
    views: 2100,
    instructor: 'Dr. Lisa Wang',
    thumbnail: '/images/tutorials/ml-python.jpg',
    tags: ['Python', 'Machine Learning', 'AI', 'Data Science']
  },
  {
    id: 4,
    title: 'Docker Containerization Guide',
    description: 'Learn how to containerize your applications using Docker for better deployment and scalability.',
    category: 'DevOps',
    duration: '1.5 hours',
    difficulty: 'Beginner',
    rating: 4.6,
    views: 750,
    instructor: 'David Rodriguez',
    thumbnail: '/images/tutorials/docker.jpg',
    tags: ['Docker', 'Containers', 'DevOps', 'Deployment']
  },
  {
    id: 5,
    title: 'AWS Cloud Architecture Patterns',
    description: 'Design and implement scalable cloud architectures using AWS services and best practices.',
    category: 'Cloud Computing',
    duration: '2.5 hours',
    difficulty: 'Advanced',
    rating: 4.9,
    views: 890,
    instructor: 'Alex Thompson',
    thumbnail: '/images/tutorials/aws-architecture.jpg',
    tags: ['AWS', 'Cloud', 'Architecture', 'Scalability']
  },
  {
    id: 6,
    title: 'Cybersecurity Fundamentals',
    description: 'Essential cybersecurity practices and threat mitigation strategies for developers.',
    category: 'Security',
    duration: '1 hour',
    difficulty: 'Beginner',
    rating: 4.5,
    views: 650,
    instructor: 'Emma Wilson',
    thumbnail: '/images/tutorials/cybersecurity.jpg',
    tags: ['Security', 'Cybersecurity', 'Best Practices', 'Protection']
  }
];

const categories = ['All', 'Web Development', 'Backend Development', 'AI & ML', 'DevOps', 'Cloud Computing', 'Security'];
const difficulties = ['All', 'Beginner', 'Intermediate', 'Advanced'];

export default function TutorialsPage() {
  return (
    <MainLayout
      title="Tutorials - Zion Tech Group"
      description="Learn from our comprehensive collection of tutorials covering AI, web development, cloud computing, cybersecurity, and more."
      keywords="tutorials, learning, AI, web development, cloud computing, cybersecurity, programming, technology education"
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
                Tutorials & <span className="text-blue-600">Learning</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Master new technologies with our comprehensive collection of tutorials and learning resources.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Search and Filters */}
        <section className="py-8 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search tutorials..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div className="flex gap-4">
                  <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    {categories.map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                  <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    {difficulties.map(difficulty => (
                      <option key={difficulty} value={difficulty}>{difficulty}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tutorials Grid */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-12"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Featured Tutorials</h2>
                <p className="text-xl text-gray-600">
                  Learn from industry experts with hands-on tutorials
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {tutorials.map((tutorial, index) => (
                  <motion.div
                    key={tutorial.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    <div className="h-48 bg-gray-200 flex items-center justify-center relative">
                      <span className="text-gray-500">Tutorial Thumbnail</span>
                      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                        <Play className="w-12 h-12 text-white" />
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                          {tutorial.category}
                        </span>
                        <div className="flex items-center">
                          <Star className="w-4 h-4 text-yellow-500 mr-1" />
                          <span className="text-sm text-gray-600">{tutorial.rating}</span>
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{tutorial.title}</h3>
                      <p className="text-gray-600 mb-4">{tutorial.description}</p>
                      <div className="flex items-center justify-between mb-4 text-sm text-gray-600">
                        <span className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {tutorial.duration}
                        </span>
                        <span className="flex items-center">
                          <Users className="w-4 h-4 mr-1" />
                          {tutorial.views} views
                        </span>
                      </div>
                      <div className="mb-4">
                        <div className="flex flex-wrap gap-2">
                          {tutorial.tags.map((tag, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">By {tutorial.instructor}</span>
                        <button className="flex items-center text-blue-600 hover:text-blue-700 font-medium">
                          Watch Now
                          <ArrowRight className="ml-1 w-4 h-4" />
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
                <h2 className="text-4xl font-bold text-white mb-6">Ready to Start Learning?</h2>
                <p className="text-xl text-blue-100 mb-8">
                  Join our community of learners and start mastering new technologies today.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contact"
                    className="inline-flex items-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    Get Started
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </a>
                  <a
                    href="/contact"
                    className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
                  >
                    Contact Us
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}