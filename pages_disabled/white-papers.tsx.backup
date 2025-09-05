import Head from 'next/head';
import Link from 'next/link';
=======
import React from 'react';
import Head from 'next/head';';
import Link from 'next/link';';
import MainLayout from '../components/layout/MainLayout';

const whitePapers = [
  {
    title: 'AI Implementation Guide for Businesses',
    description: 'Comprehensive guide to implementing AI solutions in your organization.',
    category: 'Artificial Intelligence',
    downloadCount: 1250,
    publishDate: '2024-01-15',
    downloadLink: '/downloads/ai-implementation-guide.pdf'
  },
  {
    title: 'Cloud Migration Strategy Framework',
    description: 'Step-by-step framework for successful cloud migration projects.',
    category: 'Cloud Computing',
    downloadCount: 980,
    publishDate: '2024-01-10',
    downloadLink: '/downloads/cloud-migration-framework.pdf'
  },
  {
    title: 'Cybersecurity Best Practices 2024',
    description: 'Latest cybersecurity trends and protection strategies for modern businesses.',
    category: 'Cybersecurity',
    downloadCount: 1500,
    publishDate: '2024-01-05',
    downloadLink: '/downloads/cybersecurity-best-practices.pdf'
  }
;];

const categories = [
  'All',
  'Artificial Intelligence',
  'Cloud Computing',
  'Cybersecurity',
  'Digital Transformation'
];

export default function WhitePapersPage() {
  return (
    <MainLayout
      title="White Papers - Zion Tech Group"
      description="Download our comprehensive white papers on AI, cloud computing, cybersecurity, and digital transformation."
      keywords="white papers, AI guide, cloud migration, cybersecurity, digital transformation"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                White Papers
              </h1>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                In-depth insights and research on the latest technology trends and best practices
              </p>
            </motion.div>
          </div>
        </section>

        {/* White Papers Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Latest Research & Insights
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Download our comprehensive white papers and stay ahead of the curve
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {whitePapers.map((paper, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center mb-4">
                    <FileText className="h-6 w-6 text-blue-600 mr-3" />
                    <span className="text-sm bg-blue-100 text-blue-600 px-2 py-1 rounded">
                      {paper.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {paper.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4">{paper.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="h-4 w-4 mr-2" />
                      {paper.publishDate}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Download className="h-4 w-4 mr-2" />
                      {paper.downloadCount} downloads
                    </div>
                  </div>
                  
                  <Link
                    href={paper.downloadLink}
                    className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors text-center block flex items-center justify-center"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Download PDF
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-20 bg-blue-600">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">
                Stay Updated with Latest Research
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Subscribe to get notified when we publish new white papers and research
              </p>
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
              >
                Subscribe to Updates
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}