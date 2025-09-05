import React from 'react';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import { 
  BookOpen, 
  Search, 
  MessageCircle, 
  Video, 
  Download, 
  ExternalLink, 
  ChevronDown,
  HelpCircle,
  FileText,
  PlayCircle
} from 'lucide-react';

const helpCategories = [
  {
    title: "Getting Started",
    icon: BookOpen,
    articles: [
      {
        title: "Welcome to Zion Tech Group",
        description: "Learn the basics of our platform and services",
        type: "Guide",
        readTime: "5 min"
      },
      {
        title: "Setting Up Your Account",
        description: "Step-by-step guide to create and configure your account",
        type: "Tutorial",
        readTime: "10 min"
      },
      {
        title: "First Steps with AI Services",
        description: "How to get started with our AI solutions",
        type: "Guide",
        readTime: "15 min"
      }
    ]
  },
  {
    title: "AI Services",
    icon: HelpCircle,
    articles: [
      {
        title: "Understanding AI Models",
        description: "Learn about different AI models and their applications",
        type: "Guide",
        readTime: "20 min"
      },
      {
        title: "Integrating AI APIs",
        description: "Step-by-step API integration guide",
        type: "Tutorial",
        readTime: "25 min"
      },
      {
        title: "AI Best Practices",
        description: "Tips and best practices for AI implementation",
        type: "Guide",
        readTime: "12 min"
      }
    ]
  },
  {
    title: "Technical Support",
    icon: MessageCircle,
    articles: [
      {
        title: "Troubleshooting Common Issues",
        description: "Solutions to frequently encountered problems",
        type: "Troubleshooting",
        readTime: "8 min"
      },
      {
        title: "API Error Codes",
        description: "Complete reference for API error codes and solutions",
        type: "Reference",
        readTime: "5 min"
      },
      {
        title: "Performance Optimization",
        description: "Tips to optimize your application performance",
        type: "Guide",
        readTime: "18 min"
      }
    ]
  },
  {
    title: "Video Tutorials",
    icon: PlayCircle,
    articles: [
      {
        title: "Platform Overview",
        description: "Complete platform walkthrough video",
        type: "Video",
        readTime: "30 min"
      },
      {
        title: "AI Integration Demo",
        description: "Live demonstration of AI service integration",
        type: "Video",
        readTime: "45 min"
      },
      {
        title: "Advanced Features",
        description: "Exploring advanced platform features",
        type: "Video",
        readTime: "25 min"
      }
    ]
  }
];

export default function HelpPage() {
  const [openCategories, setOpenCategories] = React.useState<{ [key: string]: boolean }>({});
  const [searchTerm, setSearchTerm] = React.useState('');

  const toggleCategory = (categoryTitle: string) => {
    setOpenCategories(prev => ({
      ...prev,
      [categoryTitle]: !prev[categoryTitle]
    }));
  };

  const filteredCategories = helpCategories.map(category => ({
    ...category,
    articles: category.articles.filter(article =>
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.articles.length > 0);

  return (
    <Layout
      title="Help Center - Zion Tech Group"
      description="Find answers to your questions, access tutorials, and get support for our AI and IT services. Comprehensive help resources for all users."
      keywords="help, support, tutorials, guides, FAQ, documentation, assistance"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <HelpCircle className="w-16 h-16 mx-auto mb-6" />
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Help <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Center</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Find answers to your questions, access tutorials, and get the support you need to succeed with our platform.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Search Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search help articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Help Categories */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {filteredCategories.map((category, categoryIndex) => {
                const IconComponent = category.icon;
                const isOpen = openCategories[category.title];
                
                return (
                  <motion.div
                    key={categoryIndex}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
                    className="mb-8"
                  >
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                      <button
                        onClick={() => toggleCategory(category.title)}
                        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                      >
                        <div className="flex items-center">
                          <div className="bg-gradient-to-r from-blue-500 to-purple-500 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                            <IconComponent className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h2 className="text-xl font-bold text-gray-900">{category.title}</h2>
                            <p className="text-gray-600">{category.articles.length} articles</p>
                          </div>
                        </div>
                        <ChevronDown
                          className={`w-5 h-5 text-gray-500 transition-transform ${
                            isOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="border-t border-gray-200"
                        >
                          <div className="p-6 space-y-4">
                            {category.articles.map((article, articleIndex) => (
                              <div
                                key={articleIndex}
                                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                              >
                                <div className="flex-1">
                                  <h3 className="font-semibold text-gray-900 mb-1">{article.title}</h3>
                                  <p className="text-sm text-gray-600 mb-2">{article.description}</p>
                                  <div className="flex items-center space-x-4 text-xs text-gray-500">
                                    <span className="flex items-center">
                                      <FileText className="w-3 h-3 mr-1" />
                                      {article.type}
                                    </span>
                                    <span className="flex items-center">
                                      <BookOpen className="w-3 h-3 mr-1" />
                                      {article.readTime}
                                    </span>
                                  </div>
                                </div>
                                <div className="flex items-center space-x-2">
                                  {article.type === 'Video' && (
                                    <PlayCircle className="w-5 h-5 text-blue-500" />
                                  )}
                                  <ExternalLink className="w-4 h-4 text-gray-400" />
                                </div>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contact Support */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Still Need Help?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Can't find what you're looking for? Our support team is here to help you succeed.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
                >
                  Contact Support
                </a>
                <a
                  href="tel:+13024640950"
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold"
                >
                  Call: +1 302 464 0950
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}