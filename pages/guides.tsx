import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  Clock, 
  Users, 
  Download, 
  Star,
  Cloud,
  Shield,
  Zap
} from 'lucide-react';
import Layout from '../components/Layout';

const guides = [
  {
    id: 1,
    title: 'AI Implementation Guide',
    description: 'Complete guide to implementing AI solutions in your business',
    category: 'AI/ML',
    icon: Zap,
    color: 'from-purple-500 to-pink-500',
    readTime: '30 min',
    difficulty: 'Intermediate',
    sections: 12,
    downloads: 2500
  },
  {
    id: 2,
    title: 'Cloud Migration Best Practices',
    description: 'Step-by-step guide to migrating your infrastructure to the cloud',
    category: 'Cloud',
    icon: Cloud,
    color: 'from-blue-500 to-cyan-500',
    readTime: '45 min',
    difficulty: 'Advanced',
    sections: 18,
    downloads: 3200
  },
  {
    id: 3,
    title: 'Cybersecurity Fundamentals',
    description: 'Essential cybersecurity practices for modern businesses',
    category: 'Security',
    icon: Shield,
    color: 'from-red-500 to-orange-500',
    readTime: '25 min',
    difficulty: 'Beginner',
    sections: 10,
    downloads: 1800
  },
  {
    id: 4,
    title: 'DevOps Implementation Guide',
    description: 'Step-by-step guide to implementing DevOps practices',
    category: 'DevOps',
    icon: Cloud,
    color: 'from-teal-500 to-blue-500',
    readTime: '50 min',
    difficulty: 'Advanced',
    sections: 16,
    downloads: 1600
  }
];

const categories = [
  { name: 'All', count: 4 },
  { name: 'AI/ML', count: 1 },
  { name: 'Cloud', count: 2 },
  { name: 'Security', count: 1 },
  { name: 'DevOps', count: 1 }
];

export default function Guides() {
  return (
    <Layout>
      <Head>
        <title>Guides & Resources - Zion Tech Group</title>
        <meta name="description" content="Comprehensive guides and resources for technology implementation and best practices." />
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
                Guides & Resources
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Comprehensive guides and resources to help you implement technology solutions effectively.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-wrap gap-4 mb-12 justify-center">
                {categories.map((category, index) => (
                  <button
                    key={index}
                    className="px-6 py-3 bg-white border border-gray-300 rounded-lg hover:bg-blue-50 hover:border-blue-300 transition-colors duration-300"
                  >
                    {category.name} ({category.count})
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {guides.map((guide, index) => {
                  const IconComponent = guide.icon;
                  return (
                    <motion.div
                      key={guide.id}
                      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className={`h-2 bg-gradient-to-r ${guide.color}`}></div>
                      <div className="p-8">
                        <div className="flex items-center mb-4">
                          <div className={`w-12 h-12 bg-gradient-to-r ${guide.color} rounded-lg flex items-center justify-center mr-4`}>
                            <IconComponent className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                              {guide.category}
                            </span>
                          </div>
                        </div>
                        
                        <h3 className="text-xl font-bold text-gray-900 mb-3">{guide.title}</h3>
                        <p className="text-gray-600 mb-6">{guide.description}</p>
                        
                        <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {guide.readTime}
                          </div>
                          <div className="flex items-center">
                            <Users className="w-4 h-4 mr-1" />
                            {guide.sections} sections
                          </div>
                          <div className="flex items-center">
                            <Download className="w-4 h-4 mr-1" />
                            {guide.downloads}
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                            guide.difficulty === 'Beginner' ? 'bg-green-100 text-green-800' :
                            guide.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-red-100 text-red-800'
                          }`}>
                            {guide.difficulty}
                          </span>
                          <Link
                            href={`/guides/${guide.id}`}
                            className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
                          >
                            Read Guide
                            <BookOpen className="w-4 h-4 ml-2" />
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}