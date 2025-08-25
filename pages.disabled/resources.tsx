import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
<<<<<<< HEAD:pages.disabled/resources.tsx
<<<<<<< HEAD
  FileText, Code, TrendingUp, Lightbulb, Users, 
  BookOpen, Download, ExternalLink, ArrowRight,
  Globe, Database, Shield, Rocket, Brain, Atom
} from 'lucide-react';

const resourceCategories = [
  {
    name: 'Documentation',
    icon: <FileText className="w-8 h-8 text-blue-400" />,
    description: 'Comprehensive guides and technical documentation',
    resources: [
      { name: 'Getting Started Guide', href: '/docs/getting-started', type: 'Guide' },
      { name: 'API Reference', href: '/docs/api', type: 'Technical' },
      { name: 'Integration Guide', href: '/docs/integration', type: 'Guide' },
      { name: 'Best Practices', href: '/docs/best-practices', type: 'Guide' }
    ]
  },
  {
    name: 'API Reference',
    icon: <Code className="w-8 h-8 text-green-400" />,
    description: 'Developer documentation and API specifications',
    resources: [
      { name: 'REST API Docs', href: '/api-docs/rest', type: 'API' },
      { name: 'GraphQL Schema', href: '/api-docs/graphql', type: 'API' },
      { name: 'SDK Downloads', href: '/api-docs/sdks', type: 'Download' },
      { name: 'Code Examples', href: '/api-docs/examples', type: 'Code' }
    ]
  },
  {
    name: 'Case Studies',
    icon: <TrendingUp className="w-8 h-8 text-purple-400" />,
    description: 'Success stories and implementation examples',
    resources: [
      { name: 'Enterprise AI Implementation', href: '/case-studies/enterprise-ai', type: 'Case Study' },
      { name: 'Quantum Security Success', href: '/case-studies/quantum-security', type: 'Case Study' },
      { name: 'Healthcare AI Transformation', href: '/case-studies/healthcare-ai', type: 'Case Study' },
      { name: 'Financial Services Innovation', href: '/case-studies/financial-services', type: 'Case Study' }
    ]
  },
  {
    name: 'Blog & Insights',
    icon: <Lightbulb className="w-8 h-8 text-yellow-400" />,
    description: 'Industry insights and thought leadership',
    resources: [
      { name: 'AI Trends 2025', href: '/blog/ai-trends-2025', type: 'Article' },
      { name: 'Quantum Computing Future', href: '/blog/quantum-future', type: 'Article' },
      { name: 'Enterprise Security', href: '/blog/enterprise-security', type: 'Article' },
      { name: 'Technology Innovation', href: '/blog/tech-innovation', type: 'Article' }
    ]
  },
  {
    name: 'Training Materials',
    icon: <Users className="w-8 h-8 text-cyan-400" />,
    description: 'Educational content and training resources',
    resources: [
      { name: 'AI Fundamentals Course', href: '/training/ai-fundamentals', type: 'Course' },
      { name: 'Quantum Computing Basics', href: '/training/quantum-basics', type: 'Course' },
      { name: 'Security Best Practices', href: '/training/security-practices', type: 'Course' },
      { name: 'Platform Tutorials', href: '/training/tutorials', type: 'Tutorial' }
    ]
  }
];

const featuredResources = [
  {
    title: 'AI Consciousness White Paper',
    description: 'Comprehensive guide to AI consciousness and emotional intelligence',
    type: 'White Paper',
    href: '/resources/ai-consciousness-whitepaper',
    icon: <Brain className="w-6 h-6" />
  },
  {
    title: 'Quantum Security Implementation Guide',
    description: 'Step-by-step guide to implementing quantum security solutions',
    type: 'Implementation Guide',
    href: '/resources/quantum-security-guide',
    icon: <Shield className="w-6 h-6" />
  },
  {
    title: 'Enterprise AI ROI Calculator',
    description: 'Calculate the return on investment for AI implementations',
    type: 'Tool',
    href: '/resources/ai-roi-calculator',
    icon: <TrendingUp className="w-6 h-6" />
  }
];

export default function Resources() {
=======
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-f9d2:pages/resources.tsx
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

<<<<<<< HEAD:pages.disabled/resources.tsx
>>>>>>> origin/cursor/resolve-and-merge-open-pull-requests-b4e5
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-f9d2:pages/resources.tsx
  return (
    <>
      <Head>
        <title>Resources - Zion Tech Group</title>
<<<<<<< HEAD:pages.disabled/resources.tsx
<<<<<<< HEAD
        <meta name="description" content="Knowledge base, documentation, case studies, and training materials. Comprehensive resources for technology professionals." />
        <meta name="keywords" content="resources, documentation, API, case studies, blog, training, whitepapers, guides" />
        <link rel="canonical" href="https://ziontechgroup.com/resources" />
      </Head>

      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-black to-purple-900/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
=======
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-f9d2:pages/resources.tsx
        <meta name="description" content="Access exclusive whitepapers, guides, and educational resources from Zion Tech Group. Learn about AI, quantum computing, and technology innovation." />
        <meta name="keywords" content="resources, whitepapers, guides, AI guides, quantum computing resources, technology education, business automation guides" />
        <link rel="canonical" href="https://ziontechgroup.com/resources" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
<<<<<<< HEAD:pages.disabled/resources.tsx
>>>>>>> origin/cursor/resolve-and-merge-open-pull-requests-b4e5
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-f9d2:pages/resources.tsx
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
<<<<<<< HEAD:pages.disabled/resources.tsx
<<<<<<< HEAD
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
                Resources
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Knowledge base, documentation, case studies, and training materials for technology professionals
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/docs"
                  className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg font-semibold hover:from-indigo-600 hover:to-purple-700 transition-all duration-200 hover:scale-105"
                >
                  Browse Documentation
                </Link>
                <Link
                  href="/case-studies"
                  className="px-8 py-4 border border-indigo-500/50 text-indigo-400 rounded-lg font-semibold hover:bg-indigo-500/10 transition-all duration-200"
                >
                  View Case Studies
                </Link>
=======
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-f9d2:pages/resources.tsx
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
>>>>>>> origin/cursor/resolve-and-merge-open-pull-requests-b4e5
              </div>
            </motion.div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Featured Resources */}
        <section className="py-20 bg-gray-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
=======
        {/* Featured Resource */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-7xl mx-auto">
>>>>>>> origin/cursor/resolve-and-merge-open-pull-requests-b4e5
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
<<<<<<< HEAD
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">Featured Resources</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Discover our most popular and valuable resources for technology professionals
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredResources.map((resource, index) => (
                <motion.div
                  key={resource.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="p-6 rounded-2xl bg-gradient-to-br from-gray-900/80 to-gray-800/80 border border-gray-700/50 hover:border-indigo-500/50 transition-all duration-200"
                >
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-indigo-500/20 rounded-lg mr-3">
                      {resource.icon}
                    </div>
                    <span className="text-sm font-medium text-indigo-400 bg-indigo-500/20 px-2 py-1 rounded">
                      {resource.type}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2">{resource.title}</h3>
                  <p className="text-gray-400 mb-4">{resource.description}</p>
                  
                  <Link
                    href={resource.href}
                    className="inline-flex items-center text-indigo-400 hover:text-indigo-300 transition-colors"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Resource Categories */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">Resource Categories</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Explore our comprehensive collection of resources organized by category
              </p>
            </motion.div>

            <div className="space-y-12">
              {resourceCategories.map((category, index) => (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700/50"
                >
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-gray-700/50 rounded-lg mr-4">
                      {category.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{category.name}</h3>
                      <p className="text-gray-400">{category.description}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {category.resources.map((resource, idx) => (
                      <Link
                        key={idx}
                        href={resource.href}
                        className="flex items-center justify-between p-4 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-colors group"
                      >
                        <div className="flex items-center">
                          <span className="text-gray-300 group-hover:text-white transition-colors">
                            {resource.name}
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="text-xs text-gray-500 bg-gray-600/50 px-2 py-1 rounded">
                            {resource.type}
                          </span>
                          <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-indigo-400 transition-colors" />
                        </div>
                      </Link>
                    ))}
                  </div>
                </motion.div>
=======
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
<<<<<<< HEAD:pages.disabled/resources.tsx
>>>>>>> origin/cursor/resolve-and-merge-open-pull-requests-b4e5
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-f9d2:pages/resources.tsx
              ))}
            </div>
          </div>
        </section>

<<<<<<< HEAD:pages.disabled/resources.tsx
<<<<<<< HEAD
        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-indigo-900/20 to-purple-900/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
=======
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-f9d2:pages/resources.tsx
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
<<<<<<< HEAD:pages.disabled/resources.tsx
>>>>>>> origin/cursor/resolve-and-merge-open-pull-requests-b4e5
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-f9d2:pages/resources.tsx
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
<<<<<<< HEAD:pages.disabled/resources.tsx
<<<<<<< HEAD
              <h2 className="text-4xl font-bold text-white mb-6">
                Need Help Finding Resources?
              </h2>
              <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
                Our team is here to help you find the right resources and answer any questions you may have.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg font-semibold hover:from-indigo-600 hover:to-purple-700 transition-all duration-200 hover:scale-105"
                >
                  Contact Support
                </Link>
                <Link
                  href="/docs"
                  className="px-8 py-4 border border-indigo-500/50 text-indigo-400 rounded-lg font-semibold hover:bg-indigo-500/10 transition-all duration-200"
                >
                  Browse Documentation
                </Link>
=======
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-f9d2:pages/resources.tsx
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
<<<<<<< HEAD:pages.disabled/resources.tsx
>>>>>>> origin/cursor/resolve-and-merge-open-pull-requests-b4e5
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-f9d2:pages/resources.tsx
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}