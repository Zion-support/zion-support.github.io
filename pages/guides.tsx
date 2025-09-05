import * as React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  ArrowRight,
  FileText,
  Clock,
  User,
  Star,
  Download,
  ExternalLink,
  Code,
  Database,
  Cloud,
  Shield,
  Zap,
  Brain,
  Target
} from 'lucide-react';

const guides = [
  {
    id: 1,
    title: 'Getting Started with AI Development',
    description: 'A comprehensive guide to building AI-powered applications from scratch.',
    category: 'AI Development',
    readTime: '25 min',
    difficulty: 'Beginner',
    sections: 8,
    downloads: 1200,
    icon: Brain,
    featured: true
  },
  {
    id: 2,
    title: 'Cloud Architecture Best Practices',
    description: 'Learn how to design scalable and secure cloud architectures.',
    category: 'Cloud Computing',
    readTime: '35 min',
    difficulty: 'Intermediate',
    sections: 12,
    downloads: 950,
    icon: Cloud,
    featured: true
  },
  {
    id: 3,
    title: 'API Design and Development',
    description: 'Master the art of creating robust and user-friendly APIs.',
    category: 'Backend Development',
    readTime: '30 min',
    difficulty: 'Intermediate',
    sections: 10,
    downloads: 1100,
    icon: Code,
    featured: false
  },
  {
    id: 4,
    title: 'Database Optimization Techniques',
    description: 'Optimize your database performance and scalability.',
    category: 'Database',
    readTime: '40 min',
    difficulty: 'Advanced',
    sections: 15,
    downloads: 800,
    icon: Database,
    featured: false
  },
  {
    id: 5,
    title: 'Security Implementation Guide',
    description: 'Implement comprehensive security measures in your applications.',
    category: 'Security',
    readTime: '45 min',
    difficulty: 'Advanced',
    sections: 18,
    downloads: 750,
    icon: Shield,
    featured: false
  },
  {
    id: 6,
    title: 'Performance Optimization',
    description: 'Boost your application performance with proven techniques.',
    category: 'Performance',
    readTime: '20 min',
    difficulty: 'Intermediate',
    sections: 7,
    downloads: 1000,
    icon: Zap,
    featured: false
  }
];

const categories = [
  {
    name: 'All',
    count: guides.length,
    icon: BookOpen
  },
  {
    name: 'AI Development',
    count: guides.filter(g => g.category === 'AI Development').length,
    icon: Brain
  },
  {
    name: 'Cloud Computing',
    count: guides.filter(g => g.category === 'Cloud Computing').length,
    icon: Cloud
  },
  {
    name: 'Backend Development',
    count: guides.filter(g => g.category === 'Backend Development').length,
    icon: Code
  },
  {
    name: 'Database',
    count: guides.filter(g => g.category === 'Database').length,
    icon: Database
  },
  {
    name: 'Security',
    count: guides.filter(g => g.category === 'Security').length,
    icon: Shield
  },
  {
    name: 'Performance',
    count: guides.filter(g => g.category === 'Performance').length,
    icon: Zap
  }
];

export default function GuidesPage() {
  const [selectedCategory, setSelectedCategory] = React.useState('All');
  const [searchQuery, setSearchQuery] = React.useState('');

  const filteredGuides = guides.filter(guide => {
    const matchesCategory = selectedCategory === 'All' || guide.category === selectedCategory;
    const matchesSearch = guide.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         guide.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredGuides = guides.filter(guide => guide.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-90"></div>
        <div className="absolute inset-0 bg-black opacity-20"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Developer{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Guides
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Comprehensive guides to help you master modern development practices, 
              from AI and cloud computing to security and performance optimization.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search guides..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Guides */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Featured Guides
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Start with these popular guides that cover the most important topics.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {featuredGuides.map((guide, index) => (
              <motion.div
                key={guide.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <guide.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium mr-2">
                        Featured
                      </span>
                      <span className="text-sm text-gray-500">{guide.category}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {guide.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {guide.description}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {guide.readTime}
                    </div>
                    <div className="flex items-center">
                      <FileText className="w-4 h-4 mr-1" />
                      {guide.sections} sections
                    </div>
                    <div className="flex items-center">
                      <Download className="w-4 h-4 mr-1" />
                      {guide.downloads} downloads
                    </div>
                  </div>
                  <span className={`px-2 py-1 rounded text-xs font-medium ${
                    guide.difficulty === 'Beginner' ? 'bg-green-100 text-green-800' :
                    guide.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {guide.difficulty}
                  </span>
                </div>
                
                <Link
                  href={`/guides/${guide.id}`}
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                >
                  Read Guide
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Browse by Category
            </h2>
            <p className="text-xl text-gray-600">
              Find guides organized by topic and skill level.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {categories.map((category, index) => (
              <button
                key={category.name}
                onClick={() => setSelectedCategory(category.name)}
                className={`flex items-center px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category.name
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <category.icon className="w-5 h-5 mr-2" />
                {category.name}
                <span className="ml-2 bg-white bg-opacity-20 px-2 py-1 rounded text-xs">
                  {category.count}
                </span>
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* All Guides */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              All Guides
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our complete collection of developer guides and tutorials.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredGuides.map((guide, index) => (
              <motion.div
                key={guide.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start mb-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                    <guide.icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <span className="text-sm text-gray-500">{guide.category}</span>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {guide.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {guide.description}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3 text-xs text-gray-500">
                    <div className="flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      {guide.readTime}
                    </div>
                    <div className="flex items-center">
                      <FileText className="w-3 h-3 mr-1" />
                      {guide.sections}
                    </div>
                  </div>
                  <span className={`px-2 py-1 rounded text-xs font-medium ${
                    guide.difficulty === 'Beginner' ? 'bg-green-100 text-green-800' :
                    guide.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {guide.difficulty}
                  </span>
                </div>
                
                <Link
                  href={`/guides/${guide.id}`}
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm"
                >
                  Read Guide
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-600">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              We're constantly adding new guides and tutorials. Let us know what you'd like to learn about.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                Request a Guide
              </Link>
              <Link href="/help" className="border border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-blue-600 transition-colors">
                Get Help
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}