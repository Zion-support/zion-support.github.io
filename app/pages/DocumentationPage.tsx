import React from 'react'
import { Helmet } from 'react-helmet-async'
import { BookOpen, Search, Download, Code, FileText, Users } from 'lucide-react'

const DocumentationPage: React.FC = () => {
  const documentationSections = [
    {
      title: 'Getting Started',
      description: 'Quick start guides and setup instructions for our services',
      icon: BookOpen,
      articles: [
        'Installation Guide',
        'Configuration Setup',
        'First Steps',
        'Common Issues'
      ]
    },
    {
      title: 'API Reference',
      description: 'Complete API documentation with examples and code snippets',
      icon: Code,
      articles: [
        'Authentication',
        'Endpoints',
        'Response Formats',
        'Error Handling'
      ]
    },
    {
      title: 'User Guides',
      description: 'Step-by-step guides for using our platform features',
      icon: FileText,
      articles: [
        'Dashboard Overview',
        'Creating Projects',
        'Managing Users',
        'Analytics & Reports'
      ]
    },
    {
      title: 'Developer Resources',
      description: 'Tools and resources for developers integrating our services',
      icon: Users,
      articles: [
        'SDKs & Libraries',
        'Code Examples',
        'Testing Tools',
        'Best Practices'
      ]
    }
  ]

  const quickLinks = [
    { title: 'API Documentation', href: '#', description: 'Complete API reference' },
    { title: 'SDK Downloads', href: '#', description: 'Client libraries and tools' },
    { title: 'Code Examples', href: '#', description: 'Sample code and tutorials' },
    { title: 'Changelog', href: '#', description: 'Latest updates and changes' },
    { title: 'Support Forum', href: '#', description: 'Community support and discussions' },
    { title: 'Video Tutorials', href: '#', description: 'Video guides and walkthroughs' }
  ]

  return (
    <>
      <Helmet>
        <title>Documentation - Zion Tech Group</title>
        <meta name="description" content="Comprehensive documentation for Zion Tech Group's AI and IT solutions. API references, guides, and developer resources." />
        <meta name="keywords" content="documentation, API reference, developer guides, user manuals, technical documentation" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Documentation
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Comprehensive guides, API references, and resources to help you succeed
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                Browse Documentation
              </button>
              <button className="border border-cyan-500 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300">
                Download PDF
              </button>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search documentation..."
                className="w-full pl-12 pr-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500"
              />
            </div>
          </div>
        </div>

        {/* Documentation Sections */}
        <div className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {documentationSections.map((section, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                      <section.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{section.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">{section.description}</p>
                  <ul className="space-y-2">
                    {section.articles.map((article, articleIndex) => (
                      <li key={articleIndex} className="flex items-center text-sm text-gray-400 hover:text-cyan-400 transition-colors cursor-pointer">
                        <div className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></div>
                        {article}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Quick Links
              </h2>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                Popular resources and frequently accessed documentation
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 group"
                >
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {link.title}
                  </h3>
                  <p className="text-gray-300 text-sm">{link.description}</p>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Need More Help?
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Can't find what you're looking for? Our support team is here to help
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                Contact Support
              </button>
              <button className="border border-cyan-500 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300">
                Join Community
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default DocumentationPage