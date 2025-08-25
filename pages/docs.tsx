import React from 'react';
import Head from 'next/head';
<<<<<<< HEAD
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  BookOpen, Code, FileText, Play, 
  Brain, Atom, Shield, Rocket, Globe,
  Search, Download, ExternalLink, ChevronRight,
  Zap, Settings, Database, Server, Wifi,
  Users, Lock, BarChart3, Lightbulb
} from 'lucide-react';

export default function Docs() {
  const categories = [
    {
      name: 'Getting Started',
      icon: <Play className="w-6 h-6" />,
      color: 'from-blue-500 to-cyan-500',
      docs: [
        { title: 'Quick Start Guide', description: 'Get up and running in minutes', time: '5 min read' },
        { title: 'Installation Guide', description: 'Step-by-step setup instructions', time: '10 min read' },
        { title: 'First Project', description: 'Create your first AI project', time: '15 min read' },
        { title: 'Configuration', description: 'Configure your environment', time: '8 min read' }
      ]
    },
    {
      name: 'AI Services',
      icon: <Brain className="w-6 h-6" />,
      color: 'from-purple-500 to-pink-500',
      docs: [
        { title: 'AI Consciousness Platform', description: 'Build conscious AI systems', time: '20 min read' },
        { title: 'AI Ethics & Governance', description: 'Best practices for responsible AI', time: '12 min read' },
        { title: 'AI Creativity Studio', description: 'Generate creative content with AI', time: '18 min read' },
        { title: 'AI Decision Engine', description: 'Autonomous decision-making systems', time: '25 min read' }
      ]
    },
    {
      name: 'Quantum Computing',
      icon: <Atom className="w-6 h-6" />,
      color: 'from-indigo-500 to-blue-500',
      docs: [
        { title: 'Quantum AI Fusion', description: 'Combine quantum and AI technologies', time: '30 min read' },
        { title: 'Quantum Neural Networks', description: 'Quantum-enhanced neural networks', time: '22 min read' },
        { title: 'Quantum Security', description: 'Quantum-resistant cryptography', time: '16 min read' },
        { title: 'Quantum Infrastructure', description: 'Set up quantum computing environment', time: '28 min read' }
      ]
    },
    {
      name: 'Business Operations',
      icon: <Rocket className="w-6 h-6" />,
      color: 'from-green-500 to-emerald-500',
      docs: [
        { title: 'Autonomous Operations', description: 'Automate business processes', time: '24 min read' },
        { title: 'IT Asset Management', description: 'Manage technology infrastructure', time: '20 min read' },
        { title: 'DevOps Automation', description: 'Streamline development workflows', time: '18 min read' },
        { title: 'Business Intelligence', description: 'Data-driven decision making', time: '22 min read' }
      ]
    },
    {
      name: 'API Reference',
      icon: <Code className="w-6 h-6" />,
      color: 'from-orange-500 to-red-500',
      docs: [
        { title: 'Authentication', description: 'API keys and security', time: '8 min read' },
        { title: 'Endpoints', description: 'Complete API reference', time: '35 min read' },
        { title: 'Rate Limits', description: 'Usage limits and quotas', time: '5 min read' },
        { title: 'Error Handling', description: 'Handle API errors gracefully', time: '10 min read' }
      ]
    },
    {
      name: 'Tutorials',
      icon: <Lightbulb className="w-6 h-6" />,
      color: 'from-yellow-500 to-orange-500',
      docs: [
        { title: 'Building AI Chatbots', description: 'Create intelligent conversational agents', time: '45 min read' },
        { title: 'Quantum Machine Learning', description: 'ML algorithms on quantum computers', time: '60 min read' },
        { title: 'Business Process Automation', description: 'Automate workflows with AI', time: '40 min read' },
        { title: 'Data Analysis & Visualization', description: 'Extract insights from data', time: '35 min read' }
      ]
    }
  ];

  const popularDocs = [
    { title: 'Quick Start Guide', category: 'Getting Started', views: '12.5k', rating: 4.9 },
    { title: 'AI Consciousness Platform', category: 'AI Services', views: '8.9k', rating: 4.8 },
    { title: 'Quantum AI Fusion', category: 'Quantum Computing', views: '7.2k', rating: 4.7 },
    { title: 'API Authentication', category: 'API Reference', views: '6.8k', rating: 4.9 },
    { title: 'Business Process Automation', category: 'Tutorials', views: '5.4k', rating: 4.6 }
  ];

  const recentUpdates = [
    { title: 'New AI Ethics Guidelines', date: '2025-01-15', type: 'New' },
    { title: 'Quantum Security Updates', date: '2025-01-12', type: 'Updated' },
    { title: 'API Rate Limiting Changes', date: '2025-01-10', type: 'Updated' },
    { title: 'Business Intelligence Tutorial', date: '2025-01-08', type: 'New' }
  ];

  return (
    <>
      <Head>
        <title>Documentation - Zion Tech Group</title>
        <meta name="description" content="Comprehensive documentation for Zion Tech Group's AI, quantum computing, and technology platforms. Get started guides, API references, and tutorials." />
        <meta name="keywords" content="documentation, API reference, tutorials, getting started, AI documentation, quantum computing docs" />
        <link rel="canonical" href="https://ziontechgroup.com/docs" />
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
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 text-blue-300 text-sm font-medium mb-6">
                <BookOpen className="w-4 h-4 mr-2" />
                Documentation
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent mb-6">
                Documentation
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
                Everything you need to build with our revolutionary AI, quantum computing, and technology platforms. 
                From quick start guides to advanced tutorials.
              </p>

              {/* Search Bar */}
              <div className="max-w-2xl mx-auto">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search documentation..."
                    className="w-full px-12 py-4 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500/50 text-lg"
                  />
                  <button className="absolute right-2 top-1/2 transform -translate-y-1/2 px-6 py-2 bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-semibold rounded-lg hover:scale-105 transition-all duration-200">
                    Search
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Popular Documentation */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Popular Documentation</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {popularDocs.map((doc, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300 cursor-pointer group"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full border border-blue-500/30">
                        {doc.category}
                      </span>
                      <div className="flex items-center space-x-2">
                        <span className="text-yellow-400 text-sm">★</span>
                        <span className="text-gray-300 text-sm">{doc.rating}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-200">
                      {doc.title}
                    </h3>
                    
                    <div className="flex items-center justify-between text-sm text-gray-400">
                      <span>{doc.views} views</span>
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Documentation Categories */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Browse by Category</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {categories.map((category, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300"
                  >
                    <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center mb-4`}>
                      {category.icon}
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-4">{category.name}</h3>
                    
                    <div className="space-y-3 mb-6">
                      {category.docs.map((doc, docIndex) => (
                        <div key={docIndex} className="flex items-center justify-between p-3 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-colors duration-200 cursor-pointer group">
                          <div className="flex-1">
                            <h4 className="text-sm font-medium text-white group-hover:text-blue-400 transition-colors duration-200">
                              {doc.title}
                            </h4>
                            <p className="text-xs text-gray-400">{doc.description}</p>
                          </div>
                          <div className="flex items-center space-x-2">
                            <span className="text-xs text-gray-500">{doc.time}</span>
                            <ChevronRight className="w-4 h-4 text-gray-400 group-hover:translate-x-1 transition-transform duration-200" />
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <button className="w-full py-3 bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-semibold rounded-lg hover:scale-105 transition-all duration-200">
                      View All
                    </button>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Recent Updates */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Recent Updates</h2>
              
              <div className="space-y-4">
                {recentUpdates.map((update, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-center justify-between p-4 bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-xl hover:border-blue-500/50 transition-all duration-300"
                  >
                    <div className="flex items-center space-x-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        update.type === 'New' 
                          ? 'bg-green-500/20 text-green-300 border border-green-500/30'
                          : 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                      }`}>
                        {update.type}
                      </span>
                      <h3 className="text-lg font-semibold text-white">{update.title}</h3>
                    </div>
                    
                    <span className="text-gray-400 text-sm">
                      {new Date(update.date).toLocaleDateString()}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Quick Actions */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h2 className="text-3xl font-bold text-white mb-8">Quick Actions</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { title: 'Download SDK', icon: <Download className="w-8 h-8" />, color: 'from-green-500 to-emerald-600' },
                  { title: 'View API Docs', icon: <Code className="w-8 h-8" />, color: 'from-blue-500 to-cyan-600' },
                  { title: 'Get Support', icon: <Users className="w-8 h-8" />, color: 'from-purple-500 to-pink-600' },
                  { title: 'Security Guide', icon: <Lock className="w-8 h-8" />, color: 'from-orange-500 to-red-600' }
                ].map((action, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300 cursor-pointer group"
                  >
                    <div className={`w-16 h-16 bg-gradient-to-r ${action.color} rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-200`}>
                      {action.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-white">{action.title}</h3>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Dive into our comprehensive documentation and start building the future with our 
                revolutionary AI and quantum computing technologies.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-semibold rounded-lg hover:scale-105 transition-all duration-200">
                  Contact Sales
                  <ExternalLink className="w-5 h-5 ml-2" />
                </Link>
                <Link href="/support" className="inline-flex items-center px-8 py-4 border border-blue-500/30 text-blue-300 font-semibold rounded-lg hover:bg-blue-500/10 transition-all duration-200">
                  Get Help
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
=======
import Layout from '../components/layout/Layout';

export default function DocsPage() {
	return (
		<Layout>
			<Head>
				<title>Documentation | Zion Tech Group</title>
				<link rel="canonical" href="https://ziontechgroup.com/docs" />
			</Head>
			<section className="container mx-auto px-4 py-24">
				<h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6">Documentation</h1>
				<p className="text-gray-300">Guides, API docs, and best practices. Coming soon.</p>
			</section>
		</Layout>
	);
}
>>>>>>> autobot/2025-08-24T03-49-38-332Z
