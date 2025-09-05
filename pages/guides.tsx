import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  Clock, 
  Users, 
  ArrowRight, 
  CheckCircle,
  Code,
  Database,
  Cloud,
  Shield
} from 'lucide-react';
import Layout from './components/Layout';

const guides = [
  {
    id: 1,
    title: 'Complete Guide to Web Development',
    description: 'Master modern web development with this comprehensive guide covering HTML, CSS, JavaScript, and frameworks.',
    category: 'Development',
    difficulty: 'Beginner',
    duration: '40 hours',
    rating: 4.8,
    downloads: 2500,
    icon: Code,
    features: ['HTML5 & CSS3', 'JavaScript ES6+', 'React & Vue.js', 'Node.js & Express']
  },
  {
    id: 2,
    title: 'Cloud Architecture Best Practices',
    description: 'Learn how to design scalable, secure, and cost-effective cloud solutions using AWS, Azure, and GCP.',
    category: 'Cloud',
    difficulty: 'Intermediate',
    duration: '25 hours',
    rating: 4.9,
    downloads: 1800,
    icon: Cloud,
    features: ['AWS Services', 'Azure Solutions', 'GCP Platform', 'DevOps Integration']
  },
  {
    id: 3,
    title: 'AI and Machine Learning Fundamentals',
    description: 'Understand the core concepts of artificial intelligence and machine learning with practical examples.',
    category: 'AI',
    difficulty: 'Intermediate',
    duration: '35 hours',
    rating: 4.7,
    downloads: 2200,
    icon: Database,
    features: ['Python & R', 'TensorFlow & PyTorch', 'Data Science', 'Model Deployment']
  },
  {
    id: 4,
    title: 'Cybersecurity Essentials',
    description: 'Protect your applications and infrastructure with proven security practices and tools.',
    category: 'Security',
    difficulty: 'Advanced',
    duration: '30 hours',
    rating: 4.9,
    downloads: 1600,
    icon: Shield,
    features: ['Threat Analysis', 'Security Testing', 'Compliance', 'Incident Response']
  }
];

const categories = [
  'All',
  'Development',
  'Cloud',
  'AI',
  'Security',
  'DevOps',
  'Data Science'
];

export default function GuidesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredGuides = guides.filter(guide => {
    const matchesSearch = guide.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         guide.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || guide.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <Layout
      title="Guides - Zion Tech Group"
      description="Comprehensive guides and tutorials to help you master modern technologies and best practices."
      keywords="guides, tutorials, web development, cloud computing, AI, machine learning, cybersecurity"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Expert{' '}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Guides
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
                Master modern technologies with our comprehensive guides and tutorials
              </p>
            </motion.div>
          </div>
        </section>

        {/* Search and Filter */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="relative flex-1">
                <input
                  type="text"
                  placeholder="Search guides..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div className="flex gap-2 overflow-x-auto">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
                      selectedCategory === category
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Guides Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredGuides.map((guide) => (
                <motion.div
                  key={guide.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-blue-100 rounded-lg">
                        <guide.icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <span className="text-sm text-blue-600 font-medium">{guide.category}</span>
                        <div className="flex items-center gap-2 mt-1">
                          <span className={`px-2 py-1 text-xs rounded-full ${
                            guide.difficulty === 'Beginner' ? 'bg-green-100 text-green-700' :
                            guide.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-700' :
                            'bg-red-100 text-red-700'
                          }`}>
                            {guide.difficulty}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3">{guide.title}</h3>
                    <p className="text-gray-600 mb-4">{guide.description}</p>
                    
                    <div className="space-y-2 mb-4">
                      {guide.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span className="text-sm text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{guide.duration}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          <span>{guide.downloads} downloads</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        <span>★ {guide.rating}</span>
                      </div>
                    </div>
                    
                    <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                      <BookOpen className="w-4 h-4" />
                      Start Guide
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}