import { Cloud } from 'lucide-react';
import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';

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
    downloadCount: "1,876",
    featured: false,
    pdfUrl: "/whitepapers/cloud-security-best-practices.pdf"
  },
  {
    id: 3,
    title: "Quantum Computing: The Next Frontier in Technology",
    description: "Understanding quantum computing's potential impact on various industries and how to prepare for the quantum revolution.",
    author: "Dr. Alex Thompson",
    date: "2024-01-05",
    category: "Quantum Computing",
    readTime: "60 min read",
    downloadCount: "1,234",
    featured: false,
    pdfUrl: "/whitepapers/quantum-computing-frontier.pdf"
  },
  {
    id: 4,
    title: "Digital Transformation Strategies for Healthcare",
    description: "How healthcare organizations can leverage technology to improve patient outcomes and operational efficiency.",
    author: "Jennifer Lee",
    date: "2023-12-28",
    category: "Healthcare Technology",
    readTime: "40 min read",
    downloadCount: "987",
    featured: false,
    pdfUrl: "/whitepapers/healthcare-digital-transformation.pdf"
  },
  {
    id: 5,
    title: "The Economics of Micro SaaS: Building Profitable Solutions",
    description: "A comprehensive guide to building, launching, and scaling micro SaaS applications for sustainable business growth.",
    author: "David Kim",
    date: "2023-12-20",
    category: "SaaS",
    readTime: "35 min read",
    downloadCount: "1,567",
    featured: false,
    pdfUrl: "/whitepapers/micro-saas-economics.pdf"
  },
  {
    id: 6,
    title: "Data Privacy in the Age of AI: Compliance and Best Practices",
    description: "Navigating the complex landscape of data privacy regulations while implementing AI solutions effectively.",
    author: "Emma Wilson",
    date: "2023-12-15",
    category: "Data Privacy",
    readTime: "50 min read",
    downloadCount: "1,123",
    featured: false,
    pdfUrl: "/whitepapers/data-privacy-ai-compliance.pdf"
  }
];

const categories = [
  "All Papers",
  "Artificial Intelligence",
  "Cybersecurity",
  "Quantum Computing",
  "Healthcare Technology",
  "SaaS",
  "Data Privacy"
];

export default function WhitePapersPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>White Papers - Zion Tech Group</title>
        <meta name="description" content="Download our comprehensive white papers on AI, cloud computing, cybersecurity, and technology trends." />
      </Head>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <FileText className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-5xl font-bold mb-6">
              White Papers
            </h1>
            <p className="text-xl text-blue-100">
              In-depth research and insights on the latest technology trends and best practices
            </p>
          </div>
        </div>
      </section>

      {/* Featured White Paper */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured White Paper</h2>
            
            {whitePapers.filter(paper => paper.featured).map((paper) => (
              <motion.article
                key={paper.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <div className="h-64 md:h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                      <FileText className="w-24 h-24 text-white" />
                    </div>
                  </div>
                  <div className="md:w-2/3 p-8">
                    <div className="flex items-center gap-2 mb-4">
                      <Tag className="w-4 h-4 text-blue-600" />
                      <span className="text-sm text-blue-600 font-medium">
                        {paper.category}
                      </span>
                    </div>
                    
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                      {paper.title}
                    </h2>
                    
                    <p className="text-gray-600 mb-6 text-lg">
                      {paper.description}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                          <User className="w-4 h-4" />
                          <span>{paper.author}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{paper.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Download className="w-4 h-4" />
                          <span>{paper.downloadCount} downloads</span>
                        </div>
                      </div>
                      <span>{paper.readTime}</span>
                    </div>
                    
                    <div className="flex gap-4">
                      <a
                        href={paper.pdfUrl}
                        download
                        className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        <Download className="w-4 h-4" />
                        Download PDF
                      </a>
                      <button className="inline-flex items-center gap-2 border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors">
                        <ExternalLink className="w-4 h-4" />
                        Preview
                      </button>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap gap-4 justify-center">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                    index === 0
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-blue-50'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* White Papers Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">All White Papers</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {whitePapers.filter(paper => !paper.featured).map((paper, index) => (
                <motion.article
                  key={paper.id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                    <FileText className="w-16 h-16 text-white" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Tag className="w-4 h-4 text-blue-600" />
                      <span className="text-sm text-blue-600 font-medium">
                        {paper.category}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                      {paper.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {paper.description}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        <span>{paper.author}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{paper.date}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm text-gray-500">{paper.readTime}</span>
                      <span className="text-sm text-gray-500 flex items-center gap-1">
                        <Download className="w-4 h-4" />
                        {paper.downloadCount}
                      </span>
                    </div>
                    
                    <div className="flex gap-2">
                      <a
                        href={paper.pdfUrl}
                        download
                        className="flex-1 inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm"
                      >
                        <Download className="w-4 h-4" />
                        Download
                      </a>
                      <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm">
                        Preview
                      </button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>

            {/* Load More Button */}
            <div className="text-center mt-12">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Load More Papers
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-blue-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Stay Informed
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Subscribe to receive new white papers and research insights directly in your inbox
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}