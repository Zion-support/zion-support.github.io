import { motion } from 'framer-motion';
import Head from 'next/head';
import { FileText, Download, Clock, User, Eye, Star } from 'lucide-react';

const whitePapers = [
  {
    id: 1,
    title: "The Future of AI in Enterprise: A Comprehensive Guide",
    description: "Explore how artificial intelligence is transforming enterprise operations and what businesses need to know to stay competitive.",
    author: "Dr. Sarah Chen",
    date: "2024-01-15",
    category: "Artificial Intelligence",
    readTime: "45 min read",
    downloadCount: "2,341",
    featured: true,
    pdfUrl: "/whitepapers/ai-enterprise-guide.pdf"
  },
  {
    id: 2,
    title: "Cloud Security Best Practices for Modern Businesses",
    description: "A detailed analysis of cloud security challenges and proven strategies to protect your organization's data and infrastructure.",
    author: "Michael Rodriguez",
    date: "2024-01-10",
    category: "Cybersecurity",
    readTime: "30 min read",
    downloadCount: "1,856",
    featured: true,
    pdfUrl: "/whitepapers/cloud-security-guide.pdf"
  },
  {
    id: 3,
    title: "Micro SaaS: The Future of Software Distribution",
    description: "An in-depth look at the micro SaaS model and how it's revolutionizing the software industry.",
    author: "David Thompson",
    date: "2024-01-05",
    category: "Software Development",
    readTime: "35 min read",
    downloadCount: "1,234",
    featured: false,
    pdfUrl: "/whitepapers/micro-saas-guide.pdf"
  }
];

export default function WhitePapers() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>White Papers - Zion Tech Group</title>
        <meta name="description" content="Download our comprehensive white papers on technology trends and best practices" />
      </Head>

      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            White Papers
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Download our comprehensive white papers on technology trends and best practices.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whitePapers.map((paper, index) => (
            <motion.div
              key={paper.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-semibold text-blue-600 bg-blue-100 px-2 py-1 rounded">
                  {paper.category}
                </span>
                {paper.featured && (
                  <Star className="h-5 w-5 text-yellow-500" />
                )}
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {paper.title}
              </h3>
              
              <p className="text-gray-600 mb-4">
                {paper.description}
              </p>
              
              <div className="mb-4">
                <div className="flex items-center text-sm text-gray-600 mb-2">
                  <User className="h-4 w-4 mr-2" />
                  <span className="font-semibold">Author:</span>
                  <span className="ml-2">{paper.author}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600 mb-2">
                  <Clock className="h-4 w-4 mr-2" />
                  <span className="font-semibold">Read Time:</span>
                  <span className="ml-2">{paper.readTime}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600 mb-4">
                  <Eye className="h-4 w-4 mr-2" />
                  <span className="font-semibold">Downloads:</span>
                  <span className="ml-2">{paper.downloadCount}</span>
                </div>
              </div>
              
              <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center">
                <Download className="h-4 w-4 mr-2" />
                Download PDF
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}