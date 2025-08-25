import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
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
  return (
    <>
      <Head>
        <title>Resources - Zion Tech Group</title>
        <meta name="description" content="Knowledge base, documentation, case studies, and training materials. Comprehensive resources for technology professionals." />
        <meta name="keywords" content="resources, documentation, API, case studies, blog, training, whitepapers, guides" />
        <link rel="canonical" href="https://ziontechgroup.com/resources" />
      </Head>

      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-black to-purple-900/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
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
              </div>
            </motion.div>
          </div>
        </section>

        {/* Featured Resources */}
        <section className="py-20 bg-gray-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
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
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-indigo-900/20 to-purple-900/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
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
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}