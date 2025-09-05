import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  Play, 
  Clock, 
  Users, 
  Star, 
  ArrowRight, 
  Filter,
  Search,
  Award,
  CheckCircle,
  Calendar,
  Video,
  FileText,
  Code,
  Database,
  Shield,
  Cloud
} from 'lucide-react';
import Layout from '../components/Layout';

interface TrainingCourse {
  id: string;
  title: string;
  description: string;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  category: string;
  rating: number;
  students: number;
  price: number;
  isFree: boolean;
  instructor: string;
  thumbnail: string;
  tags: string[];
  modules: number;
  type: 'video' | 'interactive' | 'workshop' | 'certification';
}

export default function TrainingPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLevel, setSelectedLevel] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredCourses, setFilteredCourses] = useState<TrainingCourse[]>([]);

  const categories = [
    { id: 'all', label: 'All Categories', icon: BookOpen },
    { id: 'ai-ml', label: 'AI & Machine Learning', icon: Code },
    { id: 'cloud', label: 'Cloud Computing', icon: Cloud },
    { id: 'security', label: 'Cybersecurity', icon: Shield },
    { id: 'data', label: 'Data Analytics', icon: Database },
    { id: 'devops', label: 'DevOps', icon: Code },
    { id: 'business', label: 'Business Skills', icon: Users }
  ];

  const levels = [
    { id: 'all', label: 'All Levels' },
    { id: 'Beginner', label: 'Beginner' },
    { id: 'Intermediate', label: 'Intermediate' },
    { id: 'Advanced', label: 'Advanced' }
  ];

  const courses: TrainingCourse[] = [
    {
      id: '1',
      title: 'Introduction to AI and Machine Learning',
      description: 'Learn the fundamentals of artificial intelligence and machine learning concepts, algorithms, and applications.',
      duration: '8 hours',
      level: 'Beginner',
      category: 'ai-ml',
      rating: 4.8,
      students: 1250,
      price: 199,
      isFree: false,
      instructor: 'Dr. Sarah Chen',
      thumbnail: '/api/placeholder/300/200',
      tags: ['AI', 'Machine Learning', 'Python', 'TensorFlow'],
      modules: 12,
      type: 'video'
    },
    {
      id: '2',
      title: 'Cloud Architecture Fundamentals',
      description: 'Master cloud computing concepts, services, and best practices for designing scalable cloud solutions.',
      duration: '12 hours',
      level: 'Intermediate',
      category: 'cloud',
      rating: 4.9,
      students: 980,
      price: 299,
      isFree: false,
      instructor: 'Michael Rodriguez',
      thumbnail: '/api/placeholder/300/200',
      tags: ['AWS', 'Azure', 'Cloud Architecture', 'DevOps'],
      modules: 16,
      type: 'interactive'
    },
    {
      id: '3',
      title: 'Cybersecurity Essentials',
      description: 'Comprehensive guide to cybersecurity principles, threats, and protection strategies.',
      duration: '6 hours',
      level: 'Beginner',
      category: 'security',
      rating: 4.7,
      students: 2100,
      price: 0,
      isFree: true,
      instructor: 'Alex Thompson',
      thumbnail: '/api/placeholder/300/200',
      tags: ['Security', 'Network Security', 'Threats', 'Protection'],
      modules: 8,
      type: 'video'
    },
    {
      id: '4',
      title: 'Advanced Data Analytics with Python',
      description: 'Deep dive into data analysis, visualization, and statistical modeling using Python.',
      duration: '15 hours',
      level: 'Advanced',
      category: 'data',
      rating: 4.9,
      students: 750,
      price: 399,
      isFree: false,
      instructor: 'Dr. Maria Garcia',
      thumbnail: '/api/placeholder/300/200',
      tags: ['Python', 'Pandas', 'NumPy', 'Data Visualization'],
      modules: 20,
      type: 'workshop'
    },
    {
      id: '5',
      title: 'DevOps Best Practices',
      description: 'Learn modern DevOps practices, CI/CD pipelines, and infrastructure automation.',
      duration: '10 hours',
      level: 'Intermediate',
      category: 'devops',
      rating: 4.8,
      students: 1100,
      price: 249,
      isFree: false,
      instructor: 'James Wilson',
      thumbnail: '/api/placeholder/300/200',
      tags: ['Docker', 'Kubernetes', 'Jenkins', 'Git'],
      modules: 14,
      type: 'certification'
    },
    {
      id: '6',
      title: 'Business Technology Strategy',
      description: 'Strategic approach to technology adoption and digital transformation in business.',
      duration: '5 hours',
      level: 'Beginner',
      category: 'business',
      rating: 4.6,
      students: 850,
      price: 149,
      isFree: false,
      instructor: 'Lisa Park',
      thumbnail: '/api/placeholder/300/200',
      tags: ['Strategy', 'Digital Transformation', 'Leadership', 'Innovation'],
      modules: 6,
      type: 'video'
    }
  ];

  React.useEffect(() => {
    let filtered = courses;

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(course => course.category === selectedCategory);
    }

    if (selectedLevel !== 'all') {
      filtered = filtered.filter(course => course.level === selectedLevel);
    }

    if (searchQuery) {
      filtered = filtered.filter(course =>
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    setFilteredCourses(filtered);
  }, [selectedCategory, selectedLevel, searchQuery]);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'video':
        return <Video className="w-4 h-4" />;
      case 'interactive':
        return <Play className="w-4 h-4" />;
      case 'workshop':
        return <Users className="w-4 h-4" />;
      case 'certification':
        return <Award className="w-4 h-4" />;
      default:
        return <BookOpen className="w-4 h-4" />;
    }
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner':
        return 'text-green-400 bg-green-400/10 border-green-400/20';
      case 'Intermediate':
        return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20';
      case 'Advanced':
        return 'text-red-400 bg-red-400/10 border-red-400/20';
      default:
        return 'text-gray-400 bg-gray-400/10 border-gray-400/20';
    }
  };

  return (
    <Layout title="Training & Education - Zion Tech Group" description="Professional training courses and certifications in AI, cloud computing, cybersecurity, and more">
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Professional{' '}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Training & Education
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Advance your career with expert-led courses in AI, cloud computing, cybersecurity, and cutting-edge technologies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="#courses" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Browse Courses
                </Link>
                <Link href="/contact" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">
                  Get Custom Training
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white/5">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">50+</div>
                <div className="text-gray-300">Courses Available</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">10K+</div>
                <div className="text-gray-300">Students Trained</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">95%</div>
                <div className="text-gray-300">Completion Rate</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">4.8</div>
                <div className="text-gray-300">Average Rating</div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Filters */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20"
            >
              <div className="flex flex-col lg:flex-row gap-6">
                {/* Search */}
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search courses..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Category Filter */}
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => {
                    const IconComponent = category.icon;
                    return (
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                          selectedCategory === category.id
                            ? 'bg-blue-600 text-white'
                            : 'bg-white/10 text-gray-300 hover:bg-white/20'
                        }`}
                      >
                        <IconComponent className="w-4 h-4" />
                        <span>{category.label}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Level Filter */}
                <div className="flex flex-wrap gap-2">
                  {levels.map((level) => (
                    <button
                      key={level.id}
                      onClick={() => setSelectedLevel(level.id)}
                      className={`px-4 py-2 rounded-lg transition-colors ${
                        selectedLevel === level.id
                          ? 'bg-blue-600 text-white'
                          : 'bg-white/10 text-gray-300 hover:bg-white/20'
                      }`}
                    >
                      {level.label}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Courses Grid */}
        <section id="courses" className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <h2 className="text-3xl font-bold text-white mb-4">
                {filteredCourses.length} Course{filteredCourses.length !== 1 ? 's' : ''} Found
              </h2>
              <p className="text-gray-300">
                {selectedCategory !== 'all' && `in ${categories.find(c => c.id === selectedCategory)?.label}`}
                {selectedLevel !== 'all' && ` • ${selectedLevel} level`}
                {searchQuery && ` • matching "${searchQuery}"`}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCourses.map((course, index) => (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-md rounded-lg overflow-hidden border border-white/20 hover:bg-white/15 transition-all duration-300 group"
                >
                  {/* Course Thumbnail */}
                  <div className="relative h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                    <div className="text-6xl opacity-20">
                      {getTypeIcon(course.type)}
                    </div>
                    <div className="absolute top-4 right-4 flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded text-xs font-medium ${getLevelColor(course.level)}`}>
                        {course.level}
                      </span>
                      {course.isFree && (
                        <span className="px-2 py-1 bg-green-500 text-white rounded text-xs font-medium">
                          FREE
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Course Content */}
                  <div className="p-6">
                    <div className="flex items-center space-x-2 mb-2">
                      {getTypeIcon(course.type)}
                      <span className="text-sm text-gray-400 capitalize">{course.type}</span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                      {course.title}
                    </h3>

                    <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                      {course.description}
                    </p>

                    <div className="flex items-center space-x-4 text-sm text-gray-400 mb-4">
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <FileText className="w-4 h-4" />
                        <span>{course.modules} modules</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-white font-medium">{course.rating}</span>
                        <span className="text-gray-400">({course.students})</span>
                      </div>
                      <div className="text-right">
                        {course.isFree ? (
                          <span className="text-green-400 font-bold">Free</span>
                        ) : (
                          <span className="text-white font-bold">${course.price}</span>
                        )}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {course.tags.slice(0, 3).map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 bg-white/10 rounded text-xs text-gray-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-400">by {course.instructor}</span>
                      <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                        <span>Enroll</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {filteredCourses.length === 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center py-12"
              >
                <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">No courses found</h3>
                <p className="text-gray-300 mb-6">
                  Try adjusting your search criteria or browse all categories
                </p>
                <button
                  onClick={() => {
                    setSelectedCategory('all');
                    setSelectedLevel('all');
                    setSearchQuery('');
                  }}
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Clear Filters
                </button>
              </motion.div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Advance Your Career?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Join thousands of professionals who have transformed their careers with our expert-led training programs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                  Get Custom Training
                </Link>
                <Link href="/about" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold">
                  Learn About Our Instructors
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}