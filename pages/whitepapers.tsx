import React from 'react';
import Layout from "../components/Layout";
import { motion } from 'framer-motion';
import { FileText, Download, Calendar, User, CheckCircle, ArrowRight } from 'lucide-react';

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
      title: "Micro SaaS Success: Building Scalable Software Solutions",
      description: "Learn the strategies and tactics used by successful micro SaaS companies to achieve rapid growth.",
      author: "Alex Thompson",
      date: "January 2024",
      category: "Micro SaaS",
      downloadCount: "3,200+",
      pages: "38"
    },
    {
      title: "Digital Transformation Roadmap: A Strategic Framework",
      description: "A comprehensive framework for planning and executing successful digital transformation initiatives.",
      author: "Dr. Emily Watson",
      date: "December 2023",
      category: "Digital Transformation",
      downloadCount: "2,100+",
      pages: "52"
    }
  ];

  const whitepaperFeatures = [
    {
      title: "Expert Insights",
      description: "In-depth analysis from industry experts and thought leaders",
      icon: User,
      features: ["Industry Leaders", "Research-Based", "Practical Applications"]
    },
    {
      title: "Comprehensive Coverage",
      description: "Detailed coverage of complex topics with actionable insights",
      icon: FileText,
      features: ["Detailed Analysis", "Case Studies", "Implementation Guides"]
    },
    {
      title: "Free Access",
      description: "All whitepapers are available for free download",
      icon: Download,
      features: ["No Registration Required", "PDF Format", "Mobile Friendly"]
    },
    {
      title: "Regular Updates",
      description: "New whitepapers published regularly on emerging topics",
      icon: Calendar,
      features: ["Monthly Releases", "Trending Topics", "Latest Research"]
    }
  ];

  return (
    <Layout 
      title="White Papers - Zion Tech Group"
      description="Access our comprehensive collection of white papers on AI, cloud computing, cybersecurity, and digital transformation."
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-900 via-gray-900 to-blue-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                White Papers
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Access our comprehensive collection of white papers on cutting-edge technologies. 
                Deep insights from industry experts to help you stay ahead.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Whitepapers Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Featured White Papers
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Download our latest research and insights on emerging technologies and industry trends.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {whitepapers.map((paper, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="mb-4">
                    <span className="inline-block bg-slate-100 text-slate-800 text-sm font-medium px-3 py-1 rounded-full">
                      {paper.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {paper.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {paper.description}
                  </p>
                  <div className="space-y-2 text-sm text-gray-500 mb-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-2" />
                        {paper.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        {paper.date}
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>{paper.pages} pages</span>
                      <span>{paper.downloadCount} downloads</span>
                    </div>
                  </div>
                  <button className="w-full bg-gradient-to-r from-slate-600 to-blue-600 text-white py-2 px-4 rounded-lg hover:from-slate-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
                    <Download className="w-4 h-4 mr-2" />
                    Download PDF
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {whitepaperFeatures.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <motion.div
                    key={index}
                    className="text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-slate-600 mb-4 flex justify-center">
                      <IconComponent className="w-12 h-12" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {feature.description}
                    </p>
                    <ul className="space-y-2">
                      {feature.features.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-center text-sm text-gray-600 justify-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-slate-600 to-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Stay Updated with Our Research
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter to get notified about new white papers and research publications.
            </p>
            <motion.a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-slate-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold"
              whileHover={{ scale: 1.05 }}
            >
              Subscribe to Research Updates
              <ArrowRight className="w-5 h-5 ml-2" />
            </motion.a>
          </div>
        </section>
      </div>
    </Layout>
  );
}