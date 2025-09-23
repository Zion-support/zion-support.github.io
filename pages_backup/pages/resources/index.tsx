import * as React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  FileText, 
  BarChart3, 
  MessageSquare, 
  Settings,
  ArrowRight,
  Download,
  ExternalLink,
  BookOpen,
  Code,
  Users,
  Clock,
  Star
} from 'lucide-react';
import Layout from '../../components/Layout';

const resources = [
  {
    title: 'Documentation',
    description: 'Comprehensive guides and API documentation',
    icon: FileText,
    href: '/docs',
    color: 'from-blue-600 to-blue-800',
    items: ['API Reference', 'Integration Guides', 'Code Examples', 'Best Practices']
  },
  {
    title: 'Case Studies',
    description: 'Real-world success stories and implementations',
    icon: BarChart3,
    href: '/case-studies',
    color: 'from-green-600 to-green-800',
    items: ['Client Success Stories', 'ROI Analysis', 'Implementation Details', 'Lessons Learned']
  },
  {
    title: 'Blog',
    description: 'Latest insights and technology trends',
    icon: MessageSquare,
    href: '/blog',
    color: 'from-purple-600 to-purple-800',
    items: ['Technology Insights', 'Industry Trends', 'Best Practices', 'Expert Opinions']
  },
  {
    title: 'API Reference',
    description: 'Complete API documentation and examples',
    icon: Settings,
    href: '/api-docs',
    color: 'from-orange-600 to-orange-800',
    items: ['REST API', 'GraphQL', 'SDKs', 'Webhooks']
  }
];

const additionalResources = [
  {
    title: 'Tutorials',
    description: 'Step-by-step learning guides',
    icon: BookOpen,
    href: '/tutorials',
    color: 'from-indigo-600 to-indigo-800'
  },
  {
    title: 'Guides',
    description: 'Comprehensive how-to guides',
    icon: Code,
    href: '/guides',
    color: 'from-pink-600 to-pink-800'
  },
  {
    title: 'FAQ',
    description: 'Frequently asked questions',
    icon: Users,
    href: '/faq',
    color: 'from-teal-600 to-teal-800'
  },
  {
    title: 'Support',
    description: 'Get help and support',
    icon: Clock,
    href: '/support',
    color: 'from-red-600 to-red-800'
  }
];

const featuredContent = [
  {
    title: 'Getting Started with Our API',
    type: 'Tutorial',
    description: 'Learn how to integrate with our platform in under 30 minutes',
    readTime: '15 min read',
    difficulty: 'Beginner',
    rating: 4.8
  },
  {
    title: 'Enterprise Security Best Practices',
    type: 'Guide',
    description: 'Comprehensive security guidelines for enterprise implementations',
    readTime: '25 min read',
    difficulty: 'Advanced',
    rating: 4.9
  },
  {
    title: 'AI Integration Case Study',
    type: 'Case Study',
    description: 'How we helped a Fortune 500 company implement AI solutions',
    readTime: '20 min read',
    difficulty: 'Intermediate',
    rating: 4.7
  }
];

export default function ResourcesPage() {
  return (
    <Layout
      title="Resources - Zion Tech Group"
      description="Comprehensive resources including documentation, case studies, blog posts, tutorials, and API reference for developers and businesses."
      keywords="resources, documentation, case studies, blog, API reference, tutorials, guides, support"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Developer{' '}
                <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  Resources
                </span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-300">
                Everything you need to build, integrate, and scale with our platform. 
                Documentation, tutorials, case studies, and more.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-6 mb-12">
                <Link href="/docs">
                  <span className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                    Start with Docs
                  </span>
                </Link>
                <Link href="/contact">
                  <span className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-indigo-900 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                    Get Support
                  </span>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Main Resources */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Core Resources
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Essential resources to help you get started and succeed with our platform.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {resources.map((resource, index) => (
                <motion.div
                  key={resource.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
                >
                  <div className={`h-2 bg-gradient-to-r ${resource.color}`}></div>
                  <div className="p-8">
                    <div className={`w-16 h-16 bg-gradient-to-r ${resource.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <resource.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {resource.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6">
                      {resource.description}
                    </p>
                    
                    <ul className="space-y-2 mb-8">
                      {resource.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-center text-sm text-gray-600">
                          <ArrowRight className="w-4 h-4 text-indigo-500 mr-2 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    
                    <Link
                      href={resource.href}
                      className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-semibold group-hover:translate-x-1 transition-transform duration-300"
                    >
                      Explore
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Resources */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Additional Resources
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                More resources to help you learn, troubleshoot, and get the most out of our platform.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {additionalResources.map((resource, index) => (
                <motion.div
                  key={resource.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow duration-300 group"
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${resource.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <resource.icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {resource.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 text-sm">
                    {resource.description}
                  </p>
                  
                  <Link
                    href={resource.href}
                    className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-semibold text-sm group-hover:translate-x-1 transition-transform duration-300"
                  >
                    Access
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Content */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Featured Content
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Popular and highly-rated content to help you get started quickly.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {featuredContent.map((content, index) => (
                <motion.div
                  key={content.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium">
                      {content.type}
                    </span>
                    <div className="flex items-center text-sm text-gray-600">
                      <Star className="w-4 h-4 text-yellow-500 mr-1" />
                      {content.rating}
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {content.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4">
                    {content.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span>{content.readTime}</span>
                    <span className="px-2 py-1 bg-gray-200 rounded text-xs">
                      {content.difficulty}
                    </span>
                  </div>
                  
                  <Link
                    href="/docs"
                    className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-semibold"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Need More Help?
              </h2>
              <p className="text-xl mb-8 max-w-3xl mx-auto text-indigo-100">
                Can't find what you're looking for? Our support team is here to help you succeed.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <Link href="/support">
                  <span className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                    Contact Support
                  </span>
                </Link>
                <Link href="/contact">
                  <span className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-indigo-600 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                    Get in Touch
                  </span>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}