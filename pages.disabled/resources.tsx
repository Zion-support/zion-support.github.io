import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  FileText, Download, ArrowRight, Star, Users, 
  Brain, Atom, Shield, Rocket, Globe,
  TrendingUp, Award, Sparkles, ExternalLink,
  BookOpen, Video, Presentation, Database
} from 'lucide-react';

export default function Resources() {
  const resources = [
    {
      title: 'The Future of AI Consciousness: A Comprehensive Guide',
      type: 'Whitepaper',
      category: 'AI & Consciousness',
      description: 'Deep dive into the evolution of artificial consciousness, emotional intelligence, and the future of human-AI interaction.',
      downloadCount: '2,847',
      fileSize: '2.3 MB',
      icon: <Brain className="w-8 h-8 text-violet-500" />,
      featured: true,
      downloadUrl: '/resources/ai-consciousness-whitepaper.pdf'
    },
    {
      title: 'Quantum Computing in Enterprise: Implementation Guide',
      type: 'Guide',
      category: 'Quantum Technology',
      description: 'Practical guide for implementing quantum computing solutions in enterprise environments.',
      downloadCount: '1,956',
      fileSize: '1.8 MB',
      icon: <Atom className="w-8 h-8 text-blue-500" />,
      featured: false,
      downloadUrl: '/resources/quantum-enterprise-guide.pdf'
    },
    {
      title: 'Autonomous Business Operations: ROI Analysis',
      type: 'Report',
      category: 'Business Automation',
      description: 'Comprehensive analysis of return on investment for autonomous business operations platforms.',
      downloadCount: '3,124',
      fileSize: '3.1 MB',
      icon: <Rocket className="w-8 h-8 text-teal-500" />,
      featured: false,
      downloadUrl: '/resources/autonomous-business-roi.pdf'
    },
    {
      title: 'AI-Powered IT Asset Management Best Practices',
      type: 'Guide',
      category: 'IT Management',
      description: 'Best practices for implementing AI-powered IT asset management in modern enterprises.',
      downloadCount: '1,732',
      fileSize: '1.5 MB',
      icon: <Shield className="w-8 h-8 text-green-500" />,
      featured: false,
      downloadUrl: '/resources/ai-it-asset-management-guide.pdf'
    },
    {
      title: 'Quantum Neural Networks: Technical Deep Dive',
      type: 'Technical Paper',
      category: 'Quantum AI',
      description: 'Technical exploration of quantum neural networks and their applications in artificial intelligence.',
      downloadCount: '892',
      fileSize: '4.2 MB',
      icon: <Brain className="w-8 h-8 text-purple-500" />,
      featured: false,
      downloadUrl: '/resources/quantum-neural-networks-paper.pdf'
    },
    {
      title: 'Cybersecurity in the Age of AI: Threat Landscape 2025',
      type: 'Report',
      category: 'Cybersecurity',
      description: 'Analysis of emerging cybersecurity threats and AI-powered defense strategies.',
      downloadCount: '2,156',
      fileSize: '2.7 MB',
      icon: <Shield className="w-8 h-8 text-red-500" />,
      featured: false,
      downloadUrl: '/resources/ai-cybersecurity-2025.pdf'
    }
  ];

  const categories = [
    { name: 'All Resources', count: resources.length, active: true },
    { name: 'AI & Consciousness', count: 1, active: false },
    { name: 'Quantum Technology', count: 1, active: false },
    { name: 'Business Automation', count: 1, active: false },
    { name: 'IT Management', count: 1, active: false },
    { name: 'Quantum AI', count: 1, active: false },
    { name: 'Cybersecurity', count: 1, active: false }
  ];

  const resourceTypes = [
    { name: 'Whitepapers', icon: <FileText className="w-6 h-6" />, count: 1 },
    { name: 'Guides', icon: <BookOpen className="w-6 h-6" />, count: 2 },
    { name: 'Reports', icon: <TrendingUp className="w-6 h-6" />, count: 2 },
    { name: 'Technical Papers', icon: <Database className="w-6 h-6" />, count: 1 }
  ];

  return (
    <>
      <Head>
        <title>Resources - Zion Tech Group</title>
        <meta name="description" content="Access exclusive whitepapers, guides, and educational resources from Zion Tech Group. Learn about AI, quantum computing, and technology innovation." />
        <meta name="keywords" content="resources, whitepapers, guides, AI guides, quantum computing resources, technology education, business automation guides" />
        <link rel="canonical" href="https://ziontechgroup.com/resources" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 text-orange-300 text-sm font-medium mb-6">
                <Star className="w-4 h-4 mr-2" />
                Educational Resources
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent mb-6">
                Resources & Insights
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
                Access exclusive whitepapers, guides, and educational content to deepen your understanding 
                of AI, quantum computing, and technology innovation.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Resource Types Overview */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Resource Categories</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {resourceTypes.map((type, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-xl p-6 text-center hover:border-orange-500/50 transition-all duration-300"
                  >
                    <div className="flex justify-center mb-4 text-orange-400">{type.icon}</div>
                    <h3 className="text-lg font-semibold text-white mb-2">{type.name}</h3>
                    <p className="text-gray-400 text-sm">{type.count} resources</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Featured Resource */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-white mb-8">Featured Resource</h2>
              
              {resources.filter(resource => resource.featured).map((resource, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-8 hover:border-orange-500/50 transition-all duration-300">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div>
                      <div className="flex items-center space-x-4 mb-4">
                        <span className="px-3 py-1 bg-gradient-to-r from-orange-500 to-red-600 text-white text-sm font-medium rounded-full">
                          {resource.category}
                        </span>
                        <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-medium rounded-full">
                          Featured
                        </span>
                      </div>
                      
                      <h3 className="text-3xl font-bold text-white mb-4">{resource.title}</h3>
                      <p className="text-gray-300 text-lg mb-6 leading-relaxed">{resource.description}</p>
                      
                      <div className="flex items-center space-x-6 mb-6 text-gray-400">
                        <div className="flex items-center">
                          <Download className="w-4 h-4 mr-2" />
                          {resource.downloadCount} downloads
                        </div>
                        <div className="flex items-center">
                          <FileText className="w-4 h-4 mr-2" />
                          {resource.fileSize}
                        </div>
                      </div>
                      
                      <Link 
                        href={resource.downloadUrl}
                        className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold rounded-lg hover:scale-105 transition-all duration-200"
                      >
                        Download Now
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </div>
                    
                    <div className="flex justify-center">
                      <div className="w-32 h-32 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center">
                        {resource.icon}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Categories Filter */}
        <section className="py-10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                    category.active
                      ? 'bg-gradient-to-r from-orange-500 to-red-600 text-white'
                      : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-700/50'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Resources Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-white mb-8">All Resources</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {resources.filter(resource => !resource.featured).map((resource, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-xl p-6 hover:border-orange-500/50 transition-all duration-300"
                  >
                    <div className="flex items-center mb-4">
                      <div className="mr-4">{resource.icon}</div>
                      <div>
                        <span className="px-3 py-1 bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 text-orange-300 text-xs font-medium rounded-full">
                          {resource.type}
                        </span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">{resource.title}</h3>
                    <p className="text-gray-300 text-sm mb-4 line-clamp-3">{resource.description}</p>
                    
                    <div className="flex items-center justify-between text-gray-400 text-xs mb-4">
                      <div className="flex items-center">
                        <Download className="w-3 h-3 mr-1" />
                        {resource.downloadCount} downloads
                      </div>
                      <div className="flex items-center">
                        <FileText className="w-3 h-3 mr-1" />
                        {resource.fileSize}
                      </div>
                    </div>
                    
                    <Link 
                      href={resource.downloadUrl}
                      className="inline-flex items-center text-orange-400 hover:text-orange-300 text-sm font-medium transition-colors duration-200"
                    >
                      Download Resource
                      <ArrowRight className="w-3 h-3 ml-1" />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Stay Informed
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Subscribe to our newsletter for exclusive access to new resources, 
                industry insights, and technology updates.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-3 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-500/50"
                />
                <button className="px-8 py-3 bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold rounded-lg hover:scale-105 transition-all duration-200">
                  Subscribe
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}