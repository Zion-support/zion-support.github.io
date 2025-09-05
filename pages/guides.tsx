import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
<<<<<<< HEAD
import { BookOpen, Clock, Users, ArrowRight, CheckCircle, Code, Database, Cloud, Shield } from 'lucide-react';
import Layout from '../components/Layout';

=======
import { 
  BookOpen, 
  ArrowRight,
  FileText,
  Clock,
  Users,
  Star,
  CheckCircle,
  Download,
  ExternalLink,
  Search,
  Filter,
  Globe,
  Settings,
  Shield,
  Zap,
  Code,
  Database,
  Cloud
} from 'lucide-react';
import Layout from '../components/Layout';
>>>>>>> b00d294d536ffa13ab6811db6a392cfd8c423409
const guides = [
  {
    id: 1,
    title: 'Complete Guide to Web Development',
    description: 'A comprehensive guide covering HTML, CSS, JavaScript, and modern frameworks',
    category: 'Web Development',
    duration: '8 hours',
    difficulty: 'Beginner',
<<<<<<< HEAD
    icon: Code,
    features: ['HTML5 Fundamentals', 'CSS3 Styling', 'JavaScript Basics', 'React Introduction']
  },
  {
    id: 2,
    title: 'Cloud Migration Best Practices',
    description: 'Learn how to successfully migrate your applications to the cloud',
    category: 'Cloud Computing',
    duration: '6 hours',
    difficulty: 'Intermediate',
    icon: Cloud,
    features: ['Migration Planning', 'Security Considerations', 'Cost Optimization', 'Performance Tuning']
  },
  {
    id: 3,
    title: 'AI and Machine Learning Fundamentals',
    description: 'Introduction to AI concepts and practical machine learning applications',
    category: 'Artificial Intelligence',
    duration: '10 hours',
    difficulty: 'Intermediate',
    icon: Database,
    features: ['ML Algorithms', 'Data Preprocessing', 'Model Training', 'Deployment Strategies']
  },
  {
    id: 4,
    title: 'Cybersecurity Essentials',
    description: 'Essential cybersecurity practices for protecting your digital assets',
    category: 'Security',
    duration: '5 hours',
    difficulty: 'Beginner',
    icon: Shield,
    features: ['Threat Assessment', 'Security Policies', 'Incident Response', 'Compliance']
  }
];

=======
    rating: 4.8,
    downloads: 1200
  },
  {
    title: 'AI and Machine Learning Fundamentals',
    description: 'Learn the basics of AI, machine learning algorithms, and practical applications',
    category: 'Artificial Intelligence',
    icon: Zap,
    color: 'from-purple-500 to-pink-500',
    readTime: '60 min',
    difficulty: 'Intermediate',
    rating: 4.9,
    downloads: 950
  },
  {
    title: 'Cloud Computing Best Practices',
    description: 'Essential strategies for cloud migration, optimization, and security',
    category: 'Cloud Computing',
    icon: Cloud,
    color: 'from-green-500 to-teal-500',
    readTime: '35 min',
    difficulty: 'Intermediate',
    rating: 4.7,
    downloads: 800
  },
  {
    title: 'Cybersecurity Essentials',
    description: 'Protect your systems with modern security practices and threat prevention',
    category: 'Cybersecurity',
    icon: Shield,
    color: 'from-red-500 to-orange-500',
    readTime: '50 min',
    difficulty: 'Advanced',
    rating: 4.8,
    downloads: 1100
  },
  {
    title: 'Database Design and Optimization',
    description: 'Master database design principles and performance optimization techniques',
    category: 'Database',
    icon: Database,
    color: 'from-indigo-500 to-blue-500',
    readTime: '40 min',
    difficulty: 'Intermediate',
    rating: 4.6,
    downloads: 700
  },
  {
    title: 'Micro SaaS Development Guide',
    description: 'Build and launch successful micro SaaS products from idea to market',
    category: 'SaaS Development',
    icon: Settings,
    color: 'from-yellow-500 to-orange-500',
    readTime: '55 min',
    difficulty: 'Advanced',
    rating: 4.9,
    downloads: 1600
  }
<<<<<<< HEAD
];

const categories = [
  'All Categories',
  'Web Development',
  'Artificial Intelligence',
  'Cloud Computing',
  'Cybersecurity',
  'Database',
  'SaaS Development'
];

export default function GuidesPage() {
  const [selectedCategory, setSelectedCategory] = React.useState('All Categories');
  const [searchTerm, setSearchTerm] = React.useState('');

  const filteredGuides = guides.filter(guide => {
    const matchesCategory = selectedCategory === 'All Categories' || guide.category === selectedCategory;
    const matchesSearch = guide.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         guide.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

const popularGuides = [
  { title: 'Getting Started with React', downloads: 3200, category: 'Web Development' },
  { title: 'AWS Security Best Practices', downloads: 2800, category: 'Cloud Computing' },
  { title: 'SQL Performance Optimization', downloads: 2600, category: 'Database' },
  { title: 'RESTful API Design', downloads: 2400, category: 'API Development' }
];
>>>>>>> b00d294d536ffa13ab6811db6a392cfd8c423409
export default function GuidesPage() {
>>>>>>> main
  return (
    <Layout
<<<<<<< HEAD
      title="Guides & Tutorials - Zion Tech Group"
      description="Comprehensive guides and tutorials to help you master modern technology and development practices."
      keywords="guides, tutorials, learning, web development, cloud, AI, cybersecurity"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
=======
      title="Guides & Resources - Zion Tech Group"
      description="Comprehensive guides and resources to help you master modern technology. Learn web development, AI, cloud computing, and more."
      keywords="guides, tutorials, resources, web development, AI, cloud computing, cybersecurity, learning"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
>>>>>>> b00d294d536ffa13ab6811db6a392cfd8c423409
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
<<<<<<< HEAD
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Guides & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Tutorials</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Master modern technology with our comprehensive guides and step-by-step tutorials.
=======
              <BookOpen className="w-16 h-16 mx-auto mb-6" />
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Guides & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Resources</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Master modern technology with our comprehensive guides and resources. Learn from industry experts and stay ahead of the curve.
>>>>>>> b00d294d536ffa13ab6811db6a392cfd8c423409
              </p>
            </motion.div>
          </div>
        </section>

<<<<<<< HEAD
=======
<<<<<<< HEAD
        {/* Search and Filter */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row gap-4 mb-8">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search guides..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div className="flex gap-2">
                  <Filter className="w-5 h-5 text-gray-400 mt-3" />
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    {categories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
=======
ursor/website-audit-and-update-with-deployment-9cae
        {/* Categories Filter */}

            </div>
          </div>
        </section>

ursor/website-audit-and-update-with-deployment-9cae
        {/* Popular Guides */}
                  key={guide.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}

>>>>>>> main
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Guides Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredGuides.map((guide, index) => {
                const IconComponent = guide.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden"
                  >
                    <div className={`bg-gradient-to-r ${guide.color} p-6 text-white`}>
                      <div className="flex items-center justify-between mb-4">
                        <IconComponent className="w-8 h-8" />
                        <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm font-semibold">
                          {guide.difficulty}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold mb-2">{guide.title}</h3>
                      <p className="text-white text-opacity-90 text-sm">{guide.description}</p>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-sm text-gray-500">{guide.category}</span>
                        <div className="flex items-center">
                          <Star className="w-4 h-4 text-yellow-400 mr-1" />
                          <span className="text-sm font-semibold">{guide.rating}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {guide.readTime}
                        </div>
                        <div className="flex items-center">
                          <Download className="w-4 h-4 mr-1" />
                          {guide.downloads} downloads
                        </div>
                      </div>
                      
                      <div className="flex gap-2">
                        <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold flex items-center justify-center">
                          <BookOpen className="w-4 h-4 mr-2" />
                          Read Guide
                        </button>
                        <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                          <Download className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {filteredGuides.length === 0 && (
              <div className="text-center py-12">
                <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No guides found</h3>
                <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
=======
ursor/website-audit-and-update-with-deployment-9cae
>>>>>>> b00d294d536ffa13ab6811db6a392cfd8c423409
        {/* Guides Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Learning Resources
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose from our collection of expert-curated guides covering the latest technologies and best practices.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {guides.map((guide, index) => (
                <motion.div
                  key={guide.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                >
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                        <guide.icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                          {guide.category}
                        </span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {guide.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {guide.description}
                    </p>
                    
                    <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {guide.duration}
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        {guide.difficulty}
                      </div>
                    </div>
                    
                    <div className="space-y-2 mb-6">
                      <h4 className="font-semibold text-gray-900 text-sm">What you'll learn:</h4>
                      <ul className="space-y-1">
                        {guide.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center group">
                      Start Learning
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
<<<<<<< HEAD
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Start Learning?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Join thousands of developers who are already learning with our comprehensive guides and tutorials.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold inline-flex items-center justify-center">
                  <BookOpen className="w-5 h-5 mr-2" />
                  Browse All Guides
                </button>
                <Link
                  href="/contact"
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold"
                >
                  Get Custom Training
                </Link>
=======
>>>>>>> main
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Need Custom Training?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Our team can create custom training programs tailored to your specific needs and technology stack.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
                >
                  Request Custom Training
                </a>
                <a
                  href="/services"
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold"
                >
                  View Our Services
                </a>
>>>>>>> b00d294d536ffa13ab6811db6a392cfd8c423409
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
    </SimpleLayout>
>>>>>>> main
>>>>>>> b00d294d536ffa13ab6811db6a392cfd8c423409
  );
}