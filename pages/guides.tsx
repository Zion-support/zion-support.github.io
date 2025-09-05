import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import { 
  Book,
  Clock,
  User,
  Star,
  Download,
  Code,
  Database,
  Cloud,
  Shield,
  Smartphone,
  Server
} from 'lucide-react';

const guides = [
  {
    id: 1,
    title: 'Cloud Migration Guide',
    description: 'Step-by-step guide to migrating your infrastructure to the cloud safely and efficiently.',
    category: 'Cloud Computing',
    readTime: '25 min',
    icon: Cloud
  },
  {
    id: 2,
    title: 'AI Implementation Best Practices',
    description: 'Learn how to successfully implement AI solutions in your business.',
    category: 'Artificial Intelligence',
    readTime: '30 min',
    icon: Code
  }
];

export default function Guides() {
  return (
    <>
      <Head>
        <title>Guides - Zion Tech Group</title>
        <meta name="description" content="Comprehensive guides and tutorials for technology implementation, best practices, and industry insights." />
      </Head>
      
      <Layout>
        <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Guides</h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                Learn from our experts
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {guides.map((guide, index) => (
                <motion.div
                  key={guide.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-lg p-6 border border-gray-200"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                      <guide.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">{guide.title}</h3>
                      <p className="text-gray-600 text-sm">{guide.category}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-4">{guide.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{guide.readTime} read</span>
                    <Link
                      href="/contact"
                      className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold"
                    >
                      Read Guide
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}