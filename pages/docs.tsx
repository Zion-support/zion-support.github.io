<<<<<<< HEAD
import React from 'react';
import MainLayout from '../src/components/layout/MainLayout';

const Page = () => {
  return (
    <MainLayout 
      title="Page - Zion Tech Group"
      description="Zion Tech Group page"
    >
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-20">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Page</h1>
          <p className="text-xl text-gray-600">Coming soon...</p>
        </div>
      </div>
    </MainLayout>
=======
const categories = [
  {
    title: 'Getting Started',
    description: 'Quick start guides and setup instructions',
    icon: BookOpen,
    color: 'from-blue-500 to-cyan-500',
    docs: [
      { title: 'Quick Start Guide', description: 'Get up and running in minutes', time: '5 min read' },
      { title: 'Installation Guide', description: 'Step-by-step installation instructions', time: '10 min read' },
      { title: 'Configuration', description: 'Configure your environment', time: '15 min read' },
      { title: 'First Project', description: 'Create your first project', time: '20 min read' }
    ]
  },
  {
    title: 'API Reference',
    description: 'Complete API documentation and endpoints',
    icon: Code,
  },
  {
    title: 'Tutorials',
    description: 'Step-by-step tutorials and examples',
    icon: FileText,
  },
  {
    title: 'Best Practices',
    description: 'Recommended practices and guidelines',
    icon: CheckCircle,
    color: 'from-green-500 to-green-600',
    docs: [
      { title: 'Code Standards', description: 'Coding best practices', time: '8 min read' },
      { title: 'Security Guidelines', description: 'Security best practices', time: '12 min read' },
      { title: 'Performance Tips', description: 'Optimization guidelines', time: '10 min read' }
    ]
  }
];

export default function DocsPage() {
  return (
    <Layout
      title="Documentation - Zion Tech Group"
      description="Comprehensive documentation and guides for developers and businesses."
      keywords="documentation, guides, API, tutorials, best practices"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Documentation &{' '}
                <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  Guides
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Everything you need to build, deploy, and scale your applications with confidence.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Documentation Categories */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Documentation Categories
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Comprehensive guides organized by topic and skill level
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {docCategories.map((category, index) => {
                const IconComponent = category.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {category.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {category.description}
                    </p>
                    
                    <div className="space-y-2 mb-6">
                      {category.docs.map((doc, docIndex) => (
                        <div key={docIndex} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-indigo-500" />
                          <span className="text-sm text-gray-600">{doc.title}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Popular Documentation */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Popular Documentation
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Most viewed and helpful documentation articles
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {popularDocs.map((doc, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-50 p-6 rounded-lg hover:bg-white hover:shadow-lg transition-all duration-300 group cursor-pointer"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm font-semibold">
                      {doc.category}
                    </span>
                    <span className="text-sm text-gray-500">{doc.views} views</span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                    {doc.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {doc.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}

const popularDocs = [
  { title: 'Quick Start Guide', description: 'Get started with our platform in minutes', category: 'Getting Started', views: '2.5k' },
  { title: 'API Authentication', description: 'Learn how to authenticate with our API', category: 'API Reference', views: '1.8k' },
  { title: 'Building a Web App', description: 'Complete tutorial for web application development', category: 'Tutorials', views: '3.2k' },
  { title: 'Security Guidelines', description: 'Essential security practices for your applications', category: 'Best Practices', views: '1.5k' }
];

export default function DocsPage() {
  return (
    <Layout
      title="Documentation - Zion Tech Group"
      description="Comprehensive documentation for our services, APIs, and development tools. Get started quickly with our guides and tutorials."
      keywords="documentation, API reference, tutorials, guides, getting started, development docs"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          </div>

ursor/website-audit-and-update-with-deployment-9cae
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="flex items-center justify-center mb-6">
                <BookOpen className="w-16 h-16 text-blue-400 mr-4" />
                <h1 className="text-5xl md:text-6xl font-bold">
                  Documentation <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Center</span>
                </h1>
              </div>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Comprehensive documentation, guides, and tutorials to help you get the most out of our services
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="#getting-started"
                  className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
                >
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  href="#api-reference"
                  className="px-8 py-4 border border-white text-white hover:bg-white hover:text-gray-900 rounded-lg font-semibold transition-colors"
                >
                  API Reference
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Search Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Search Documentation
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Find exactly what you're looking for in our comprehensive documentation
              </p>
            </motion.div>

            <motion.div
              className="max-w-2xl mx-auto"
            >
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search documentation..."
                  className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                />
              </div>
            </motion.div>
          </div>
        </section>

ursor/website-audit-and-update-with-deployment-9cae
        {/* Popular Docs */}
                  key={doc.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}

            </div>
          </div>
        </section>

ursor/website-audit-and-update-with-deployment-9cae
        {/* Categories Section */}
                  key={category.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  <div className="space-y-4">
                    {category.docs.map((doc, docIndex) => (
                      <div key={docIndex} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                        <div>
                          <h4 className="font-semibold text-gray-900">{doc.title}</h4>
                          <p className="text-sm text-gray-600">{doc.description}</p>
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="w-4 h-4 mr-1" />
                          {doc.time}
                        </div>,
                      </div>;
                    ))}
                  <Link
                    href="#"
                    className="mt-6 w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
                  >
                    View All {category.title}
                    <ArrowRight className="ml-2 w-4 h-4" />"
                  </Link>;
                </motion.div>;
              ))}

            </div>
          </div>
        </section>

ursor/website-audit-and-update-with-deployment-9cae
        {/* CTA Section */}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Need Help Getting Started?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Our documentation team is here to help you succeed. Contact us if you can't find what you're looking for.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-white text-blue-600 hover:bg-gray-100 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
                >
                  Contact Support
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  href="/api-docs"
                  className="px-8 py-4 border border-white text-white hover:bg-white hover:text-blue-600 rounded-lg font-semibold transition-colors"
                >
                  API Reference
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
    </Layout>
    </SimpleLayout>
>>>>>>> ede6a6c5e68aff29c3e98caf43b1ead111d5b92e
  );
};

export default Page;
