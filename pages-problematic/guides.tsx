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
} from 'lucide-react';

const guides = [
  {
    slug: 'react-best-practices',
    title: 'React Best Practices',
    description:
      'Learn the essential patterns and practices for building scalable React applications',
    category: 'Web Development',
    icon: Code,
    color: 'from-blue-500 to-purple-500',
    readTime: '15 min',
    difficulty: 'Intermediate',
    sections: 8,
    downloads: 2500,
  },
  {
    slug: 'nodejs-performance',
    title: 'Node.js Performance Optimization',
    description:
      'Master techniques to optimize your Node.js applications for maximum performance',
    category: 'Web Development',
    icon: Server,
    color: 'from-green-500 to-teal-500',
    readTime: '25 min',
    difficulty: 'Advanced',
    sections: 12,
    downloads: 1800,
  },
  {
    slug: 'aws-architecture',
    title: 'AWS Architecture Patterns',
    description:
      'Design scalable and cost-effective solutions using AWS services',
    category: 'Cloud Computing',
    icon: Cloud,
    color: 'from-orange-500 to-red-500',
    readTime: '35 min',
    difficulty: 'Advanced',
    sections: 15,
    downloads: 3200,
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
    downloads: 2100,
  },
  {
    slug: 'security-basics',
    title: 'Web Security Fundamentals',
    description: 'Essential security practices every developer should know',
    category: 'Security',
    icon: Shield,
    color: 'from-red-500 to-pink-500',
    readTime: '30 min',
    difficulty: 'Intermediate',
    sections: 14,
    downloads: 1900,
  },
  {
    slug: 'mobile-development',
    title: 'Mobile App Development Guide',
    description:
      'Complete guide to building cross-platform mobile applications',
    category: 'Mobile',
    icon: Smartphone,
    color: 'from-purple-500 to-indigo-500',
    readTime: '40 min',
    difficulty: 'Advanced',
    sections: 18,
    downloads: 1600,
  },
];

const categories = [
  { name: 'All', count: 24, active: true },
  { name: 'Web Development', count: 6, active: false },
  { name: 'Cloud Computing', count: 5, active: false },
  { name: 'Database', count: 4, active: false },
  { name: 'Security', count: 3, active: false },
  { name: 'Mobile', count: 3, active: false },
  { name: 'DevOps', count: 3, active: false },
];

export default function GuidesPage() {
  return (
    <div className='min-h-screen bg-gray-50'>
      {/* Hero Section */}
      <section className='bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20'>
        <div className='container mx-auto px-4 relative z-10'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className='text-center'
          >
            <h1 className='text-4xl md:text-6xl font-bold mb-6'>
              Technical Guides
            </h1>
            <p className='text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto'>
              Comprehensive guides to help you master modern technologies and
              best practices.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className='py-16 bg-white'>
        <div className='container mx-auto px-4'>
          <div className='flex flex-wrap justify-center gap-4 mb-12'>
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
      <section className='py-16 bg-gray-50'>
        <div className='container mx-auto px-4'>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {guides.map((guide, index) => (
              <motion.div
                key={index}
                className='bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow'
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className={`h-2 bg-gradient-to-r ${guide.color}`}></div>
                <div className='p-6'>
                  <div className='flex items-center mb-4'>
                    <div
                      className={`w-12 h-12 rounded-lg bg-gradient-to-r ${guide.color} flex items-center justify-center mr-4`}
                    >
                      <guide.icon className='w-6 h-6 text-white' />
                    </div>
                    <div>
                      <span className='text-sm text-gray-500'>
                        {guide.category}
                      </span>
                      <h3 className='text-lg font-semibold text-gray-900'>
                        {guide.title}
                      </h3>
                    </div>
                  </div>
                  <p className='text-gray-600 mb-4'>{guide.description}</p>
                  <div className='flex items-center justify-between text-sm text-gray-500 mb-4'>
                    <span className='flex items-center'>
                      <Clock className='w-4 h-4 mr-1' />
                      {guide.readTime}
                    </span>
                    <span className='flex items-center'>
                      <User className='w-4 h-4 mr-1' />
                      {guide.difficulty}
                    </span>
                    <span className='flex items-center'>
                      <Star className='w-4 h-4 mr-1' />
                      {guide.sections} sections
                    </span>
                  </div>
                  <div className='flex items-center justify-between'>
                    <span className='text-sm text-gray-500'>
                      {guide.downloads} downloads
                    </span>
                    <Link
                      href={`/guides/${guide.slug}`}
                      className='flex items-center text-blue-600 hover:text-blue-700 font-semibold'
                    >
                      Read Guide
                      <ArrowRight className='w-4 h-4 ml-1' />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
