import React, { useState } from 'react';
import MainLayout from '../components/layout/MainLayout';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Play, 
  Clock, 
  User, 
  Star, 
  ArrowRight,
  Filter,
  Search,
  BookOpen,
  Code,
  Zap,
  Shield,
  Globe,
  Database,
  Smartphone
} from 'lucide-react';

const tutorialCategories = [
  { name: "All", count: 15, active: true },
  { name: "Getting Started", count: 5, active: false },
  { name: "AI & Machine Learning", count: 4, active: false },
  { name: "Web Development", count: 3, active: false },
  { name: "Mobile Development", count: 2, active: false },
  { name: "DevOps", count: 1, active: false }
];

const tutorials = [
  {
    id: 1,
    title: "Building Your First Micro SaaS Application",
    description: "Learn how to build and deploy a complete micro SaaS application from scratch using modern technologies.",
    duration: "2 hours 30 minutes",
    level: "Beginner",
    category: "Getting Started",
    instructor: "Sarah Chen",
    rating: 4.8,
    students: 1250,
    thumbnail: "/images/tutorials/micro-saas.jpg",
    featured: true,
    tags: ["React", "Node.js", "MongoDB", "AWS"],
    lessons: 12,
    price: "Free"
  },
  {
    id: 2,
    title: "AI Model Training and Deployment",
    description: "Complete guide to training machine learning models and deploying them to production environments.",
    duration: "4 hours 15 minutes",
    level: "Advanced",
    category: "AI & Machine Learning",
    instructor: "Dr. Michael Rodriguez",
    rating: 4.9,
    students: 890,
    thumbnail: "/images/tutorials/ai-training.jpg",
    featured: true,
    tags: ["Python", "TensorFlow", "Docker", "Kubernetes"],
    lessons: 18,
    price: "$99"
  },
  {
    id: 3,
    title: "React Native Mobile App Development",
    description: "Build cross-platform mobile applications using React Native with real-world examples.",
    duration: "3 hours 45 minutes",
    level: "Intermediate",
    category: "Mobile Development",
    instructor: "Emily Johnson",
    rating: 4.7,
    students: 2100,
    thumbnail: "/images/tutorials/react-native.jpg",
    featured: false,
    tags: ["React Native", "JavaScript", "iOS", "Android"],
    lessons: 15,
    price: "$79"
  },
  {
    id: 4,
    title: "Cloud Infrastructure Setup and Management",
    description: "Learn to set up and manage scalable cloud infrastructure using AWS, Azure, and Google Cloud.",
    duration: "3 hours 20 minutes",
    level: "Intermediate",
    category: "DevOps",
    instructor: "David Kim",
    rating: 4.6,
    students: 1650,
    thumbnail: "/images/tutorials/cloud-infrastructure.jpg",
    featured: false,
    tags: ["AWS", "Docker", "Kubernetes", "Terraform"],
    lessons: 14,
    price: "$89"
  },
  {
    id: 5,
    title: "API Development Best Practices",
    description: "Master the art of building robust, scalable APIs using modern development practices.",
    duration: "2 hours 10 minutes",
    level: "Intermediate",
    category: "Web Development",
    instructor: "Alex Thompson",
    rating: 4.8,
    students: 980,
    thumbnail: "/images/tutorials/api-development.jpg",
    featured: false,
    tags: ["Node.js", "Express", "PostgreSQL", "Swagger"],
    lessons: 10,
    price: "$59"
  },
  {
    id: 6,
    title: "Database Design and Optimization",
    description: "Learn database design principles and optimization techniques for better performance.",
    duration: "2 hours 45 minutes",
    level: "Intermediate",
    category: "Web Development",
    instructor: "Maria Garcia",
    rating: 4.7,
    students: 1200,
    thumbnail: "/images/tutorials/database-design.jpg",
    featured: false,
    tags: ["PostgreSQL", "MySQL", "MongoDB", "Redis"],
    lessons: 11,
    price: "$69"
  },
  {
    id: 7,
    title: "Getting Started with AI Services",
    description: "Introduction to our AI services and how to integrate them into your applications.",
    duration: "1 hour 30 minutes",
    level: "Beginner",
    category: "Getting Started",
    instructor: "Dr. Sarah Chen",
    rating: 4.9,
    students: 3200,
    thumbnail: "/images/tutorials/ai-services.jpg",
    featured: false,
    tags: ["AI", "API", "Integration", "Python"],
    lessons: 8,
    price: "Free"
  },
  {
    id: 8,
    title: "Security Best Practices for Web Applications",
    description: "Learn essential security practices to protect your web applications from common vulnerabilities.",
    duration: "2 hours 15 minutes",
    level: "Intermediate",
    category: "Web Development",
    instructor: "John Smith",
    rating: 4.8,
    students: 1450,
    thumbnail: "/images/tutorials/web-security.jpg",
    featured: false,
    tags: ["Security", "HTTPS", "Authentication", "OWASP"],
    lessons: 9,
    price: "$79"
  }
];

const featuredTutorials = tutorials.filter(tutorial => tutorial.featured);
const regularTutorials = tutorials.filter(tutorial => !tutorial.featured);

export default function TutorialsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTutorials = tutorials.filter(tutorial => {
    const matchesCategory = selectedCategory === 'All' || tutorial.category === selectedCategory;
    const matchesSearch = tutorial.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         tutorial.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         tutorial.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <MainLayout 
      title="Tutorials - Zion Tech Group"
      description="Learn from our comprehensive video tutorials covering AI, web development, mobile apps, and more. Expert-led courses for all skill levels."
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Learn from{' '}
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Experts
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Master modern technologies with our comprehensive video tutorials. 
                From beginner to advanced, we have courses for every skill level.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Search and Filter */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col lg:flex-row gap-4 mb-8">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search tutorials..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div className="flex gap-2 overflow-x-auto">
                  {tutorialCategories.map((category) => (
                    <button
                      key={category.name}
                      onClick={() => setSelectedCategory(category.name)}
                      className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-colors ${
                        selectedCategory === category.name
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {category.name} ({category.count})
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Tutorials */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Tutorials</h2>
              <p className="text-lg text-gray-600">Hand-picked tutorials from our expert instructors</p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredTutorials.map((tutorial, index) => (
                <motion.div
                  key={tutorial.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="md:flex">
                    <div className="md:w-1/2">
                      <div className="h-48 md:h-full bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center relative">
                        <Play className="w-16 h-16 text-purple-600 mx-auto" />
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 bg-purple-600 text-white text-sm rounded-full">
                            Featured
                          </span>
                        </div>
                        <div className="absolute bottom-4 right-4">
                          <span className="px-2 py-1 bg-black bg-opacity-50 text-white text-sm rounded">
                            {tutorial.duration}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="md:w-1/2 p-6">
                      <div className="flex items-center mb-3">
                        <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                          {tutorial.category}
                        </span>
                        <span className={`ml-2 px-3 py-1 text-sm rounded-full ${
                          tutorial.level === 'Beginner' ? 'bg-green-100 text-green-800' :
                          tutorial.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {tutorial.level}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                        {tutorial.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {tutorial.description}
                      </p>
                      
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <div className="flex items-center">
                            <User className="w-4 h-4 mr-1" />
                            {tutorial.instructor}
                          </div>
                          <div className="flex items-center">
                            <Star className="w-4 h-4 mr-1 text-yellow-500" />
                            {tutorial.rating}
                          </div>
                          <div className="flex items-center">
                            <BookOpen className="w-4 h-4 mr-1" />
                            {tutorial.lessons} lessons
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-1 mb-4">
                        {tutorial.tags.slice(0, 3).map((tag, tagIndex) => (
                          <span key={tagIndex} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="text-lg font-bold text-purple-600">
                          {tutorial.price}
                        </div>
                        <Link
                          href={`/tutorials/${tutorial.id}`}
                          className="inline-flex items-center text-purple-600 hover:text-purple-700 font-semibold"
                        >
                          <span>Start Learning</span>
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* All Tutorials */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">All Tutorials</h2>
              <p className="text-lg text-gray-600">
                {filteredTutorials.length} tutorials found
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTutorials.map((tutorial, index) => (
                <motion.article
                  key={tutorial.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center relative">
                    <Play className="w-12 h-12 text-gray-400" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                        {tutorial.category}
                      </span>
                    </div>
                    <div className="absolute bottom-4 right-4">
                      <span className="px-2 py-1 bg-black bg-opacity-50 text-white text-sm rounded">
                        {tutorial.duration}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className={`px-3 py-1 text-sm rounded-full ${
                        tutorial.level === 'Beginner' ? 'bg-green-100 text-green-800' :
                        tutorial.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {tutorial.level}
                      </span>
                      <div className="text-lg font-bold text-purple-600">
                        {tutorial.price}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                      {tutorial.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {tutorial.description}
                    </p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3 text-sm text-gray-500">
                        <div className="flex items-center">
                          <User className="w-4 h-4 mr-1" />
                          {tutorial.instructor}
                        </div>
                        <div className="flex items-center">
                          <Star className="w-4 h-4 mr-1 text-yellow-500" />
                          {tutorial.rating}
                        </div>
                      </div>
                      <div className="text-sm text-gray-500">
                        {tutorial.students} students
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-1 mb-4">
                      {tutorial.tags.slice(0, 3).map((tag, tagIndex) => (
                        <span key={tagIndex} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <Link
                      href={`/tutorials/${tutorial.id}`}
                      className="inline-flex items-center text-purple-600 hover:text-purple-700 font-semibold group-hover:text-purple-700"
                    >
                      <span>Start Learning</span>
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>

            {filteredTutorials.length === 0 && (
              <div className="text-center py-12">
                <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  No tutorials found
                </h3>
                <p className="text-gray-600">
                  Try adjusting your search terms or browse different categories.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Start Learning?
              </h2>
              <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
                Join thousands of students who are already learning with our expert-led tutorials. 
                Start your journey today!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-white text-purple-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
                  Get Started
                </Link>
                <Link href="/about" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold">
                  Learn More
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}