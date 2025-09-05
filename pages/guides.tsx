import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  ArrowRight,
  FileText,
  Clock,
  User,
  Star,
<<<<<<< HEAD
  Download
} from 'lucide-react';
import Layout from '../components/Layout';

const guides = [
  {
    id: 1,
    title: 'Getting Started with AI',
    description: 'A comprehensive guide to understanding and implementing AI solutions in your business.',
    category: 'AI & Machine Learning',
    readTime: '15 min',
    difficulty: 'Beginner',
    sections: 8,
    downloads: 1200,
    color: 'from-blue-500 to-purple-500'
  },
  {
    id: 2,
    title: 'Cloud Migration Best Practices',
    description: 'Step-by-step guide to migrating your infrastructure to the cloud safely and efficiently.',
    category: 'Cloud Computing',
    readTime: '25 min',
=======
  Code,
  Database,
  Cloud,
  Shield,
  Smartphone,
  Server
} from 'lucide-react';

const guides = [
  {
    slug: 'react-best-practices',
    title: 'React Best Practices',
    description: 'Learn the essential patterns and practices for building scalable React applications',
    category: 'Web Development',
    icon: Code,
    color: 'from-blue-500 to-purple-500',
    readTime: '15 min',
    difficulty: 'Intermediate',
    sections: 8,
    downloads: 2500
  },
  {
    slug: 'nodejs-performance',
    title: 'Node.js Performance Optimization',
    description: 'Master techniques to optimize your Node.js applications for maximum performance',
    category: 'Web Development',
    icon: Server,
    color: 'from-green-500 to-teal-500',
    readTime: '25 min',
    difficulty: 'Advanced',
    sections: 12,
    downloads: 1800
  },
  {
    slug: 'aws-architecture',
    title: 'AWS Architecture Patterns',
    description: 'Design scalable and cost-effective solutions using AWS services',
    category: 'Cloud Computing',
    icon: Cloud,
    color: 'from-orange-500 to-red-500',
    readTime: '35 min',
    difficulty: 'Advanced',
    sections: 15,
    downloads: 3200
  },
  {
    slug: 'database-design',
    title: 'Database Design Fundamentals',
    description: 'Learn how to design efficient and normalized databases',
    category: 'Database',
    icon: Database,
    color: 'from-indigo-500 to-blue-500',
    readTime: '20 min',
    difficulty: 'Intermediate',
    sections: 10,
    downloads: 2100
  },
  {
    slug: 'security-basics',
    title: 'Web Security Fundamentals',
    description: 'Essential security practices every developer should know',
    category: 'Security',
    icon: Shield,
    color: 'from-red-500 to-pink-500',
    readTime: '30 min',
>>>>>>> bda99e5abd16efb90ee02549943231847392138b
    difficulty: 'Intermediate',
    sections: 12,
    downloads: 980,
    color: 'from-green-500 to-blue-500'
  },
  {
<<<<<<< HEAD
    id: 3,
    title: 'Cybersecurity Fundamentals',
    description: 'Essential security practices to protect your digital assets and data.',
    category: 'Security',
    readTime: '20 min',
    difficulty: 'Beginner',
    sections: 10,
    downloads: 1500,
    color: 'from-red-500 to-pink-500'
  },
  {
    id: 4,
    title: 'Database Optimization',
    description: 'Advanced techniques for optimizing database performance and scalability.',
    category: 'Database',
    readTime: '30 min',
    difficulty: 'Advanced',
    sections: 15,
    downloads: 750,
    color: 'from-yellow-500 to-orange-500'
  },
  {
    id: 5,
    title: 'API Design Patterns',
    description: 'Best practices for designing robust and scalable APIs.',
    category: 'Web Development',
    readTime: '18 min',
    difficulty: 'Intermediate',
    sections: 9,
    downloads: 1100,
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 6,
    title: 'DevOps Implementation',
    description: 'Complete guide to implementing DevOps practices in your organization.',
    category: 'DevOps',
    readTime: '35 min',
    difficulty: 'Advanced',
    sections: 18,
    downloads: 850,
    color: 'from-teal-500 to-blue-500'
  }
];

export default function GuidesPage() {
  return (
    <Layout title="Guides - Zion Tech Group">
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Technology Guides
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Learn from our experts with comprehensive guides and tutorials
              </p>
            </motion.div>
          </div>
        </section>

        {/* Guides Grid */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Browse by Category</h2>
              <p className="text-xl text-gray-600">
                Comprehensive guides covering all aspects of modern technology
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {guides.map((guide, index) => (
                <motion.div
                  key={guide.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className={`h-2 bg-gradient-to-r ${guide.color}`}></div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-medium text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                        {guide.category}
                      </span>
                      <div className="flex items-center text-sm text-gray-500">
                        <Star className="w-4 h-4 mr-1" />
                        {guide.downloads}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-3">{guide.title}</h3>
                    <p className="text-gray-600 mb-4">{guide.description}</p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {guide.readTime}
                      </div>
                      <div className="flex items-center">
                        <FileText className="w-4 h-4 mr-1" />
                        {guide.sections} sections
                      </div>
                      <span className={`px-2 py-1 rounded text-xs ${
                        guide.difficulty === 'Beginner' ? 'bg-green-100 text-green-800' :
                        guide.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {guide.difficulty}
                      </span>
                    </div>
                    
                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors flex items-center justify-center">
                      <Download className="w-4 h-4 mr-2" />
                      Download Guide
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-6">Need Custom Guidance?</h2>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Our experts can create personalized guides and provide one-on-one consultation 
                for your specific technology needs.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
                  Get Custom Guidance
                </Link>
                <Link href="/services" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
                  View Our Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
=======
    slug: 'mobile-development',
    title: 'Mobile App Development Guide',
    description: 'Complete guide to building cross-platform mobile applications',
    category: 'Mobile',
    icon: Smartphone,
    color: 'from-purple-500 to-indigo-500',
    readTime: '40 min',
    difficulty: 'Advanced',
    sections: 18,
    downloads: 1600
  }
];

const categories = [
  { name: 'All', count: 24, active: true },
  { name: 'Web Development', count: 6, active: false },
  { name: 'Cloud Computing', count: 5, active: false },
  { name: 'Database', count: 4, active: false },
  { name: 'Security', count: 3, active: false },
  { name: 'Mobile', count: 3, active: false },
  { name: 'DevOps', count: 3, active: false }
];

export default function GuidesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Technical Guides
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Comprehensive guides to help you master modern technologies and best practices.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-3 rounded-full font-semibold transition-colors ${
                  category.active
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Guides Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {guides.map((guide, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className={`h-2 bg-gradient-to-r ${guide.color}`}></div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${guide.color} flex items-center justify-center mr-4`}>
                      <guide.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <span className="text-sm text-gray-500">{guide.category}</span>
                      <h3 className="text-lg font-semibold text-gray-900">{guide.title}</h3>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{guide.description}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {guide.readTime}
                    </span>
                    <span className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      {guide.difficulty}
                    </span>
                    <span className="flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      {guide.sections} sections
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{guide.downloads} downloads</span>
                    <Link
                      href={`/guides/${guide.slug}`}
                      className="flex items-center text-blue-600 hover:text-blue-700 font-semibold"
                    >
                      Read Guide
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
>>>>>>> bda99e5abd16efb90ee02549943231847392138b
  );
}