<<<<<<< HEAD
import React from 'react';
import MainLayout from '../src/components/layout/MainLayout';

const Page = () => {
  return (
    <MainLayout 
      title="Page - Zion Tech Group"
      description="Zion Tech Group page"
    >
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-20">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Page</h1>
          <p className="text-xl text-gray-600">Coming soon...</p>
        </div>
      </div>
    </MainLayout>
=======
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  ArrowRight,
  FileText,
  Clock,
  User,
  Star,
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
    difficulty: 'Intermediate',
    sections: 12,
    downloads: 980,
    color: 'from-green-500 to-blue-500'
  },
  {
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
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
  );
};

export default Page;
