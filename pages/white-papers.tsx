import { motion } from 'framer-motion';
import Link from 'next/link';
import Layout from '../components/Layout';
import { 
  Download, 
  FileText, 
  Calendar, 
  User, 
  ArrowRight, 
  CheckCircle,
  BookOpen,
  Brain,
  Cloud,
  Shield,
  Database,
  Code
} from 'lucide-react';

const whitePapers = [
  {
    title: 'AI Implementation Guide for Enterprises',
    description: 'Comprehensive guide to implementing AI solutions in enterprise environments, including best practices and common pitfalls.',
    author: 'Dr. Sarah Johnson',
    date: '2024-01-15',
    category: 'AI & Machine Learning',
    downloads: 1250,
    pages: 45,
    icon: Brain,
    downloadUrl: '/downloads/ai-implementation-guide.pdf'
  },
  {
    title: 'Cloud Migration Strategies',
    description: 'Step-by-step strategies for successful cloud migration, covering AWS, Azure, and Google Cloud platforms.',
    author: 'Mike Chen',
    date: '2024-01-10',
    category: 'Cloud Computing',
    downloads: 980,
    pages: 32,
    icon: Cloud,
    downloadUrl: '/downloads/cloud-migration-strategies.pdf'
  },
  {
    title: 'Cybersecurity Best Practices 2024',
    description: 'Latest cybersecurity trends, threats, and best practices for protecting your organization.',
    author: 'Emily Davis',
    date: '2024-01-05',
    category: 'Cybersecurity',
    downloads: 2100,
    pages: 28,
    icon: Shield,
    downloadUrl: '/downloads/cybersecurity-best-practices-2024.pdf'
  },
  {
    title: 'Database Optimization Techniques',
    description: 'Advanced techniques for optimizing database performance and scalability in modern applications.',
    author: 'David Wilson',
    date: '2023-12-20',
    category: 'Database',
    downloads: 750,
    pages: 38,
    icon: Database,
    downloadUrl: '/downloads/database-optimization-techniques.pdf'
  },
  {
    title: 'Microservices Architecture Patterns',
    description: 'Design patterns and best practices for building scalable microservices architectures.',
    author: 'Lisa Rodriguez',
    date: '2023-12-15',
    category: 'Software Architecture',
    downloads: 1100,
    pages: 42,
    icon: Code,
    downloadUrl: '/downloads/microservices-architecture-patterns.pdf'
  },
  {
    title: 'DevOps Transformation Guide',
    description: 'Complete guide to transforming your organization with DevOps practices and culture.',
    author: 'Alex Thompson',
    date: '2023-12-10',
    category: 'DevOps',
    downloads: 890,
    pages: 35,
    icon: BookOpen,
    downloadUrl: '/downloads/devops-transformation-guide.pdf'
  }
];

const categories = [
  'All',
  'AI & Machine Learning',
  'Cloud Computing',
  'Cybersecurity',
  'Database',
  'Software Architecture',
  'DevOps'
];

export default function WhitePapersPage() {
  return (
    <Layout
      title="White Papers - Zion Tech Group | Technical Resources"
      description="Download our comprehensive white papers on technology trends, best practices, and industry insights. Free technical resources for developers and IT professionals."
      keywords="white papers, technical resources, technology trends, best practices, AI, cloud, cybersecurity, database"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                White Papers & Research
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Access our comprehensive collection of technical white papers and research documents. 
                Free downloads covering AI, cloud solutions, cybersecurity, and more.
              </p>
            </motion.div>
          </div>
        </section>

        {/* White Papers List */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Featured White Papers
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                In-depth technical resources written by our expert team.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {whitePapers.map((paper, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-200"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                      <paper.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">{paper.title}</h3>
                      <p className="text-sm text-blue-600">{paper.category}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{paper.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <User className="w-4 h-4 mr-2" />
                      {paper.author}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="w-4 h-4 mr-2" />
                      {paper.date}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <FileText className="w-4 h-4 mr-2" />
                      {paper.pages} pages
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Download className="w-4 h-4 mr-2" />
                      {paper.downloads.toLocaleString()} downloads
                    </div>
                  </div>

                  <a
                    href={paper.downloadUrl}
                    className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-center inline-flex items-center justify-center"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download PDF
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Need Custom Research?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Our team can create custom white papers and research documents tailored to your specific needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold inline-flex items-center justify-center"
                >
                  <ArrowRight className="w-5 h-5 mr-2" />
                  Request Custom Research
                </Link>
                <Link
                  href="/services"
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold"
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