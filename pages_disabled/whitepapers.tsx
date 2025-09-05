import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import { User, FileText, Download, Calendar } from 'lucide-react';

export default function WhitepapersPage() {
  const whitepapers = [
    {
      title: "The Future of AI in Enterprise: A Comprehensive Guide",
      description: "Explore how artificial intelligence is transforming enterprise operations and what it means for your business.",
      author: "Dr. Sarah Chen",
      date: "March 2024",
      category: "Artificial Intelligence",
      downloadCount: "2,500+",
      pages: "45"
    },
    {
      title: "Cloud Security Architecture: Best Practices and Implementation",
      description: "A detailed guide to building secure cloud infrastructure with proven methodologies and real-world examples.",
      author: "Michael Rodriguez",
      date: "February 2024",
      category: "Cybersecurity",
      downloadCount: "1,800+",
      pages: "32"
    },
    {
      title: "Micro SaaS Development: From Idea to Market",
      description: "Learn how to build and launch successful micro SaaS products with practical strategies and case studies.",
      author: "David Thompson",
      date: "January 2024",
      category: "Software Development",
      downloadCount: "1,200+",
      pages: "28"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
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
          {whitepapers.map((paper, index) => (
            <motion.div
              key={paper.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <FileText className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">{paper.title}</h3>
              </div>
              
              <p className="text-gray-600 mb-4">{paper.description}</p>
              
              <div className="mb-4">
                <div className="flex items-center text-sm text-gray-600 mb-2">
                  <User className="h-4 w-4 mr-2" />
                  <span className="font-semibold">Author:</span>
                  <span className="ml-2">{paper.author}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600 mb-2">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span className="font-semibold">Date:</span>
                  <span className="ml-2">{paper.date}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600 mb-4">
                  <Download className="h-4 w-4 mr-2" />
                  <span className="font-semibold">Downloads:</span>
                  <span className="ml-2">{paper.downloadCount}</span>
                </div>
              </div>
              
              <div className="mb-4">
                <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                  {paper.category}
                </span>
                <span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded ml-2">
                  {paper.pages} pages
                </span>
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