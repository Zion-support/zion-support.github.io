<<<<<<< HEAD
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';


const SEO = dynamic(() => import('../src/components/SEO'), { ssr: false })
const PageTransition = dynamic(() => import('../src/components/PageTransition'), { ssr: false })

const DocsPage: React.FC = () => {
  const quickStart = [
    {
      icon: Book,
      title: 'Getting Started',
      description: 'Quick start guides and setup instructions',
      icon: BookOpen,
      docs: [
        {
          title: 'Quick Start Guide',
          description: 'Get up and running in minutes',
          time: '5 min read' }, {
          title: 'Installation Guide',
          description: 'Step-by-step installation instructions',
          time: '10 min read' }, {
          title: 'Configuration',
          description: 'Configure your environment',
          time: '15 min read' }, {
          title: 'First Project',
          description: 'Create your first project',
          time: '20 min read' } ] }, {
      title: 'API Reference',
      description: 'Complete API documentation and endpoints',
      icon: Code,
      docs: [
        {
          title: 'Authentication',
          description: 'API authentication and security',
          time: '8 min read' }, {
          title: 'Endpoints',
          description: 'All available API endpoints',
          time: '25 min read' }, {
          title: 'Rate Limits',
          description: 'API rate limiting and quotas',
          time: '5 min read' }, {
          title: 'Error Codes',
          description: 'Common error codes and solutions',
          time: '10 min read' } ] }, {
      title: 'AI Services',
      description: 'AI and machine learning service documentation',
      icon: Database,
      docs: [
        {
          title: 'AI Models',
          description: 'Available AI models and capabilities',
          time: '15 min read' }, {
          title: 'Training Data',
          description: 'Data preparation and training',
          time: '20 min read' }, {
          title: 'Model Deployment',
          description: 'Deploy and manage AI models',
          time: '12 min read' }, {
          title: 'Performance Tuning',
          description: 'Optimize model performance',
          time: '18 min read' } ] }, {
      title: 'Cloud Services',
      description: 'Cloud infrastructure and deployment guides',
      icon: Cloud,
      docs: [
        {
          title: 'Cloud Setup',
          description: 'Configure cloud environments',
          time: '15 min read' }, {
          title: 'Deployment',
          description: 'Deploy applications to cloud',
          time: '20 min read' }, {
          title: 'Scaling',
          description: 'Scale your applications',
          time: '12 min read' }, {
          title: 'Monitoring',
          description: 'Monitor cloud resources',
          time: '10 min read' } ] }, {
      title: 'Security',
      description: 'Security best practices and guidelines',
      icon: Shield,
      docs: [
        {
          title: 'Security Overview',
          description: 'Security architecture and principles',
          time: '12 min read' }, {
          title: 'Authentication',
          description: 'User authentication and authorization',
          time: '15 min read' }, {
          title: 'Data Protection',
          description: 'Protect sensitive data',
          time: '18 min read' }, {
          title: 'Compliance',
          description: 'Meet compliance requirements',
          time: '20 min read' } ] }, {
      title: 'Support',
      description: 'Help and support resources',
      icon: Users,
      docs: [
        {
          title: 'FAQ',
          description: 'Frequently asked questions',
          time: '10 min read' }, {
          title: 'Troubleshooting',
          description: 'Common issues and solutions',
          time: '15 min read' }, {
          title: 'Contact Support',
          description: 'Get help from our team',
          time: '5 min read' }, {
          title: 'Community',
          description: 'Join our developer community',
          time: '8 min read' } ] } ];

  const popularDocs = [
  {
      title: 'Quick Start Guide',
      description: 'Get started with Zion Tech Group services in minutes',
      category: 'Getting Started',
      views: '12.5k',
      rating: 4.9 }, {
      title: 'API Authentication',
      description: 'Learn how to authenticate with our APIs',
      category: 'API Reference',
      views: '8.2k',
      rating: 4.8 }, {
      title: 'AI Model Training',
      description: 'Train custom AI models for your use case',
      category: 'AI Services',
      views: '6.7k',
      rating: 4.9 }, {
      title: 'Cloud Deployment',
      description: 'Deploy your applications to the cloud',
      category: 'Cloud Services',
      views: '5.9k',
      rating: 4.7 } ];

  const resources = [
  {
      title: 'SDK Downloads',
      description: 'Download our SDKs for popular programming languages',
      icon: Download }, {
      title: 'Code Examples',
      description: 'Ready-to-use code examples and snippets',
      icon: Code }, {
      title: 'Video Tutorials',
      description: 'Step-by-step video tutorials',
      icon: ExternalLink ];

  const apiSections = [
    {
      title: 'AI Services API',
      description: 'Access our AI and machine learning capabilities',
      endpoints: 15,
      icon: <Zap className="w-6 h-6"  />,
      color: 'blue'
    },
    {
      title: 'Micro SaaS API',
      description: 'Manage and deploy micro SaaS applications',
      endpoints: 25,
      icon: <Globe className="w-6 h-6"  />,
      color: 'green'
    },
    {
      title: 'IT Infrastructure API',
      description: 'Monitor and manage IT infrastructure',
      endpoints: 2 0,
      icon: <Database className="w-6 h-6"  />,
      color: 'purple'
    },
    {
      title: 'Cybersecurity API',
      description: 'Security monitoring and threat detection',
      endpoints: 1 2,
      icon: <Shield className="w-6 h-6"  />,
      color: 'red'
    }
  ]

  const codeExamples = [
    {
      language: 'JavaScript',
      title: 'AI Service Integration',
      code: `// Initialize AI service
const aiService = new ZionAI({
  apiKey: 'your-api-key',
  environment: 'production'
});

// Process text with AI
const result = await aiService.processText({
  text: 'Hello, world!',
  model: 'gpt-4',
  options: {
    maxTokens: 10 0,
    temperature: 0.7
  }
});

console.log(result);`
    },
    {
      language: 'Python',
      title: 'Micro SaaS API',
      code: `import ziontech

# Initialize client
client = ziontech.Client(api_key='your-api-key')

# Create a new project
project = client.projects.create({
    name: 'My Project',
    description: 'A new micro SaaS project',
    type: 'web_application'
})

# Deploy project
deployment = client.deployments.create(
    project_id=project.id,
    environment='production'
)

print(f"Project deployed: {deployment.url}")`
    }
  ]

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

        {/* Resources */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Additional Resources
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                Tools and resources to help you succeed
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {resources.map((resource, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg p-6 text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <resource.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {resource.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{resource.description}</p>
                  <ul className="space-y-2 text-left">
                    {resource.items.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="flex items-center text-sm text-gray-700"
                      >
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Need Help?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Can&apos;t find what you&apos;re looking for? Our support team is
              here to help.
            </p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center items-center">
              <Link href="/contact">
                <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                  Contact Support
                  <ArrowRight className="w-5 h-5 ml-2 inline" />
                </button>
              </Link>
              <Link href="/help">
                <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                  Help Center
                </button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  )}
