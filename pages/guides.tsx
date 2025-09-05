import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  ArrowRight,
  FileText,
  Clock,
  User,
  Star,
  Code,
  Database,
  Cloud,
  Shield,
  Smartphone,
  Server,
  Download
} from 'lucide-react';
import Layout from '../components/Layout';

const guides = [
  {
    id: 1,
    title: 'Getting Started with AI',
    description: 'A comprehensive guide to understanding and implementing AI solutions in your business.',
    category: 'AI & Machine Learning',
    icon: Code,
    color: 'from-blue-500 to-purple-500',
    readTime: '15 min',
    difficulty: 'Beginner',
    sections: 8,
    downloads: 1200
  },
  {
    id: 2,
    title: 'Cloud Migration Best Practices',
    description: 'Step-by-step guide to migrating your applications to the cloud successfully.',
    category: 'Cloud Computing',
    icon: Cloud,
    color: 'from-green-500 to-teal-500',
    readTime: '25 min',
    difficulty: 'Intermediate',
    sections: 12,
    downloads: 2100
  },
  {
    id: 3,
    title: 'Web Security Fundamentals',
    description: 'Essential security practices every developer should know.',
    category: 'Security',
    icon: Shield,
    color: 'from-red-500 to-pink-500',
    readTime: '30 min',
    difficulty: 'Advanced',
    sections: 15,
    downloads: 1800
  },
  {
    id: 4,
    title: 'Mobile App Development',
    description: 'Complete guide to building cross-platform mobile applications.',
    category: 'Mobile Development',
    icon: Smartphone,
    color: 'from-orange-500 to-yellow-500',
    readTime: '20 min',
    difficulty: 'Intermediate',
    sections: 10,
    downloads: 1500
  },
  {
    id: 5,
    title: 'Database Design Principles',
    description: 'Learn how to design efficient and scalable database systems.',
    category: 'Database',
    icon: Database,
    color: 'from-indigo-500 to-blue-500',
    readTime: '18 min',
    difficulty: 'Intermediate',
    sections: 9,
    downloads: 1900
  },
  {
    id: 6,
    title: 'DevOps Implementation',
    description: 'Implement DevOps practices to improve your development workflow.',
    category: 'DevOps',
    icon: Server,
    color: 'from-purple-500 to-pink-500',
    readTime: '22 min',
    difficulty: 'Advanced',
    sections: 11,
    downloads: 1600
  }
];

const categories = [
  { name: 'All', count: guides.length },
  { name: 'AI & Machine Learning', count: guides.filter(g => g.category === 'AI & Machine Learning').length },
  { name: 'Cloud Computing', count: guides.filter(g => g.category === 'Cloud Computing').length },
  { name: 'Security', count: guides.filter(g => g.category === 'Security').length },
  { name: 'Mobile Development', count: guides.filter(g => g.category === 'Mobile Development').length },
  { name: 'Database', count: guides.filter(g => g.category === 'Database').length },
  { name: 'DevOps', count: guides.filter(g => g.category === 'DevOps').length }
];

export default function Guides() {
  return (
    <Layout
      title="Technical Guides - Zion Tech Group"
      description="Comprehensive technical guides and tutorials to help you master modern technologies. Learn from our experts and accelerate your development."
      keywords="technical guides, tutorials, programming, AI, cloud computing, security, mobile development"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-20">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Technical <span className="text-blue-300">Guides</span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Master modern technologies with our comprehensive guides and tutorials. 
                Learn from industry experts and accelerate your development journey.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                  {guides.length}+
                </div>
                <div className="text-gray-600 font-medium">Guides Available</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                  {guides.reduce((sum, guide) => sum + guide.downloads, 0)}+
                </div>
                <div className="text-gray-600 font-medium">Total Downloads</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                  {categories.length - 1}
                </div>
                <div className="text-gray-600 font-medium">Categories</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                  4.9
                </div>
                <div className="text-gray-600 font-medium">Average Rating</div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category, index) => (
                <motion.button
                  key={category.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 bg-gray-100 text-gray-700 hover:bg-blue-100 hover:text-blue-700"
                >
                  {category.name} ({category.count})
                </motion.button>
              ))}
            </div>
          </div>
        </section>

        {/* Guides Grid */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Featured Guides
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore our most popular technical guides and tutorials, 
                carefully crafted by our team of experts.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {guides.map((guide, index) => (
                <motion.div
                  key={guide.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <div className={`h-48 bg-gradient-to-r ${guide.color} flex items-center justify-center`}>
                    <guide.icon className="h-16 w-16 text-white" />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                        {guide.category}
                      </span>
                      <span className="text-sm text-gray-500">{guide.difficulty}</span>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {guide.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 text-sm">
                      {guide.description}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {guide.readTime}
                      </div>
                      <div className="flex items-center">
                        <FileText className="h-4 w-4 mr-1" />
                        {guide.sections} sections
                      </div>
                      <div className="flex items-center">
                        <Download className="h-4 w-4 mr-1" />
                        {guide.downloads}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-400 mr-1" />
                        <span className="text-sm text-gray-600">4.9</span>
                      </div>
                      <Link
                        href={`/guides/${guide.slug || guide.id}`}
                        className="flex items-center text-blue-600 hover:text-blue-700 font-medium"
                      >
                        Read Guide
                        <ArrowRight className="h-4 w-4 ml-1" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Need Help with Implementation?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Our guides are just the beginning. Let our experts help you 
                implement these solutions in your specific environment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200"
                >
                  Get Expert Help
                </Link>
                <Link
                  href="/services"
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200"
                >
                  View Our Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}