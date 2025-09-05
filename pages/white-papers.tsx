import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  FileText, 
  Download, 
  Calendar, 
  User,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import Layout from '../components/Layout';

const whitePapers = [
  {
    id: 1,
    title: "The Future of AI in Enterprise: A Comprehensive Guide",
    description: "Explore how artificial intelligence is transforming enterprise operations and what it means for your business.",
    author: "Dr. Sarah Johnson",
    date: "2024-01-15",
    category: "AI & Machine Learning",
    downloads: 1250,
    pages: 24,
    thumbnail: '/api/placeholder/300/200'
  },
  {
    id: 2,
    title: "Cloud Security Best Practices: A Technical Deep Dive",
    description: "Learn about the latest security practices and strategies for protecting your cloud infrastructure.",
    author: "Mike Chen",
    date: "2024-01-10",
    category: "Cloud Computing",
    downloads: 890,
    pages: 18,
    thumbnail: '/api/placeholder/300/200'
  },
  {
    id: 3,
    title: "Building Scalable Microservices: Architecture Patterns",
    description: "Discover proven patterns and practices for designing and implementing scalable microservices.",
    author: "Alex Rodriguez",
    date: "2024-01-05",
    category: "Software Architecture",
    downloads: 2100,
    pages: 32,
    thumbnail: '/api/placeholder/300/200'
  },
  {
    id: 4,
    title: "Data Science in Production: Deployment Strategies",
    description: "Learn how to successfully deploy and maintain data science models in production environments.",
    author: "Dr. Lisa Wang",
    date: "2023-12-20",
    category: "Data Science",
    downloads: 1650,
    pages: 28,
    thumbnail: '/api/placeholder/300/200'
  },
  {
    id: 5,
    title: "DevOps Culture and Practices: A Complete Guide",
    description: "Explore the cultural and technical aspects of successful DevOps implementation.",
    author: "David Kim",
    date: "2023-12-15",
    category: "DevOps",
    downloads: 980,
    pages: 22,
    thumbnail: '/api/placeholder/300/200'
  },
  {
    id: 6,
    title: "Mobile App Performance Optimization: Best Practices",
    description: "Comprehensive guide to optimizing mobile app performance and user experience.",
    author: "Maria Garcia",
    date: "2023-12-10",
    category: "Mobile Development",
    downloads: 1450,
    pages: 20,
    thumbnail: '/api/placeholder/300/200'
  }
];

const categories = [
  'AI & Machine Learning',
  'Cloud Computing',
  'Software Architecture',
  'Data Science',
  'DevOps',
  'Mobile Development'
];

export default function WhitePapers() {
  return (
    <Layout>
      <Head>
        <title>White Papers - Zion Tech Group</title>
        <meta name="description" content="Download our comprehensive white papers and technical guides." />
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
                White Papers
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Download our comprehensive white papers and technical guides.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
                Browse by Category
              </h2>
              
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                {categories.map((category, index) => (
                  <motion.button
                    key={index}
                    className="px-6 py-3 bg-blue-100 text-blue-800 rounded-full font-medium hover:bg-blue-200 transition-colors duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {category}
                  </motion.button>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {whitePapers.map((paper, index) => (
                  <motion.div
                    key={paper.id}
                    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="aspect-video bg-gray-200 relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <FileText className="w-16 h-16 text-gray-400" />
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{paper.title}</h3>
                      <p className="text-gray-600 mb-4">{paper.description}</p>
                      
                      <div className="space-y-2 text-sm text-gray-500 mb-4">
                        <div className="flex items-center">
                          <User className="w-4 h-4 mr-2" />
                          {paper.author}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-2" />
                          {paper.date}
                        </div>
                        <div className="flex items-center">
                          <FileText className="w-4 h-4 mr-2" />
                          {paper.pages} pages
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between mb-4">
                        <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                          {paper.category}
                        </span>
                        <span className="text-sm text-gray-600">
                          {paper.downloads} downloads
                        </span>
                      </div>
                      
                      <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center">
                        <Download className="w-4 h-4 mr-2" />
                        Download PDF
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
                Stay Updated
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Subscribe to our newsletter to get notified about new white papers and technical content.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}