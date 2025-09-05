import Head from 'next/head'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Layout from '../components/Layout'
import {
  BookOpen, ;
  Clock, ;
  Users, ;
  Download, ;
  Star, ;
  Code, ;
  Database, ;
  Cloud, ;
  Shield, ;
  Smartphone, ;
  Server, ;
  Download } from 'lucide-react'
import Layout from '../components/Layout'
import Layout from '../components/Layout'

const guides = [{
    id: 1, title: 'AI Implementation Guide', description: 'Complete guide to implementing AI solutions in your business', category: 'AI/ML', icon: Zap, color: 'from-purple-500 to-pink-500', readTime: '30 min', difficulty: 'Intermediate', sections: 12, downloads: 2500 }, ;
  {
    id: 2, title: 'Cloud Migration Best Practices', description: 'Step-by-step guide to migrating your infrastructure to the cloud', category: 'Cloud', icon: Cloud, color: 'from-blue-500 to-cyan-500', readTime: '45 min', difficulty: 'Advanced', sections: 18, downloads: 3200 }, ;
  {
    id: 3, title: 'Cybersecurity Fundamentals', description: 'Essential cybersecurity practices for modern businesses', category: 'Security', icon: Shield, color: 'from-red-500 to-orange-500', readTime: '40 min', difficulty: 'Intermediate', rating: 4.6, downloads: 1100 }, ;
  {
    title: 'Database Design and Optimization', description: 'Master database design principles and performance optimization techniques', category: 'Database', icon: Database, color: 'from-indigo-500 to-blue-500', readTime: '55 min', difficulty: 'Intermediate', rating: 4.8, downloads: 1300 }, ;
  {
    title: 'DevOps and CI/CD Pipeline', description: 'Streamline your development workflow with modern DevOps practices', category: 'DevOps', icon: Settings, color: 'from-yellow-500 to-orange-500', readTime: '35 min', difficulty: 'Intermediate', rating: 4.5, downloads: 800
    sections: 8, downloads: 1200 }, ;
  {
    id: 2, title: 'Cloud Migration Best Practices', description: 'Step-by-step guide to migrating your applications to the cloud successfully.', category: 'Cloud Computing', icon: Cloud, color: 'from-green-500 to-teal-500', readTime: '25 min', difficulty: 'Beginner', sections: 10, downloads: 1800 }, ;
  {
    id: 4, title: 'DevOps Implementation Guide', description: 'Step-by-step guide to implementing DevOps practices', category: 'DevOps', icon: Server, color: 'from-purple-500 to-pink-500', readTime: '22 min', difficulty: 'Advanced', sections: 11, downloads: 1600
const guides = [
  {
    slug: 'react-best-practices', title: 'React Best Practices', description: 'Learn the essential patterns and practices for building scalable React applications', category: 'Web Development', icon: Code, color: 'from-blue-500 to-purple-500', readTime: '15 min', difficulty: 'Intermediate', sections: 8, downloads: 2500 }, ;
  {
    slug: 'nodejs-performance', title: 'Node.js Performance Optimization', description: 'Master techniques to optimize your Node.js applications for maximum performance', category: 'Web Development', icon: Server, color: 'from-green-500 to-teal-500', readTime: '25 min', difficulty: 'Advanced', sections: 12, downloads: 1800 }, ;
  {
    slug: 'aws-architecture', title: 'AWS Architecture Patterns', description: 'Design scalable and cost-effective solutions using AWS services', category: 'Cloud Computing', icon: Cloud, color: 'from-orange-500 to-red-500', readTime: '35 min', difficulty: 'Advanced', sections: 15, downloads: 3200 }, ;
  {
    slug: 'database-design', title: 'Database Design Fundamentals', description: 'Learn how to design efficient and normalized databases', category: 'Database', icon: Database, color: 'from-indigo-500 to-blue-500', readTime: '20 min', difficulty: 'Intermediate', sections: 10, downloads: 2100 }, ;
  {
    slug: 'security-basics', title: 'Web Security Fundamentals', description: 'Essential security practices every developer should know', category: 'Security', icon: Shield, color: 'from-red-500 to-pink-500', readTime: '30 min', difficulty: 'Intermediate', sections: 14, downloads: 1900 }, ;
  {
    slug: 'mobile-development', title: 'Mobile App Development Guide', description: 'Complete guide to building cross-platform mobile applications', category: 'Mobile', icon: Smartphone, color: 'from-purple-500 to-indigo-500', readTime: '40 min', difficulty: 'Advanced', sections: 18, downloads: 1600 }]

const categories = [{ name: 'All', count: guides.length }, ;
  { name: 'AI & Machine Learning', count: guides.filter(g => g.category === 'AI & Machine Learning').length }, ;
  { name: 'Cloud Computing', count: guides.filter(g => g.category === 'Cloud Computing').length }, ;
  { name: 'Security', count: guides.filter(g => g.category === 'Security').length }, ;
  { name: 'Mobile Development', count: guides.filter(g => g.category === 'Mobile Development').length }, ;
  { name: 'Database', count: guides.filter(g => g.category === 'Database').length }, ;
  { name: 'DevOps', count: guides.filter(g => g.category === 'DevOps').length }]

export default function Guides() {
  return(<Layout
      title="Technical Guides - Zion Tech Group"
      description="Comprehensive technical guides and tutorials to help you master modern technologies. Learn from our experts and accelerate your development."
      keywords="technical guides, tutorials, programming, AI, cloud computing, security, mobile development"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */ }
        <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-20">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">
            <motion.div
              initial={{opacity: 0, y: 20 }}
              animate={{opacity: 1, y: 0 }}
              transition={{duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md: text-6xl font-bold mb-6">
                Technical <span className="text-blue-300">Guides</span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Master modern technologies with our comprehensive guides and tutorials.
                Learn from industry experts and accelerate your development journey.
  { name: 'All', count: 4 }, ;
  { name: 'AI/ML', count: 1 }, ;
  { name: 'Cloud', count: 2 }, ;
  { name: 'Security', count: 1 }, ;
  { name: 'DevOps', count: 1 }]

export default function Guides() {
  return(<Layout>
      <Head>
        <title>Guides & Resources - Zion Tech Group</title>
        <meta name="description" content="Comprehensive guides and resources for technology implementation and best practices."  />
      </Head>
      <main>
        <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div;
              className="text-center"
              initial={{opacity: 0, y: 30 }}
              animate={{opacity: 1, y: 0 }}
              transition={{duration: 0.8 }}
            >
              <h1 className="text-4xl md: text-6xl font-bold mb-6">
                Guides & Resources
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Comprehensive guides and resources to help you implement technology solutions effectively.
              </p>
            </motion.div>
          </div>
        </section>
        { /* Stats Section */ }
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <motion.div
                initial={{opacity: 0, y: 20 }}
                animate={{opacity: 1, y: 0 }}
                transition={{duration: 0.6, delay: 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md: text-4xl font-bold text-blue-600 mb-2">
                  { guides.length }+;
                </div>
                <div className="text-gray-600 font-medium">Guides Available</div>
              </motion.div>
              <motion.div;
                initial={{opacity: 0, y: 20 }}
                animate={{opacity: 1, y: 0 }}
                transition={{duration: 0.6, delay: 0.2 }}
                className="text-center"
              >
                <div className="text-3xl md: text-4xl font-bold text-blue-600 mb-2">
                  { guides.reduce((sum, guide) => sum + guide.downloads, 0) }+;
                </div>
                <div className="text-gray-600 font-medium">Total Downloads</div>
              </motion.div>
              <motion.div;
                initial={{opacity: 0, y: 20 }}
                animate={{opacity: 1, y: 0 }}
                transition={{duration: 0.6, delay: 0.3 }}
                className="text-center"
              >
                <div className="text-3xl md: text-4xl font-bold text-blue-600 mb-2">
                  { categories.length - 1 }
                </div>
                <div className="text-gray-600 font-medium">Categories</div>
              </motion.div>
              <motion.div;
                initial={{opacity: 0, y: 20 }}
                animate={{opacity: 1, y: 0 }}
                transition={{duration: 0.6, delay: 0.4 }}
                className="text-center"
              >
                <div className="text-3xl md: text-4xl font-bold text-blue-600 mb-2">
                  4.9
                </div>
                <div className="text-gray-600 font-medium">Average Rating</div>
              </motion.div>
            </div>
          </div>
        </section>
        { /* Category Filter */ }
        <section className="py-8 bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">
            <div className="flex flex-wrap gap-2 justify-center">
              { categories.map((category, index) => (;
                <motion.button;
                  key={category.name }
                  initial={{opacity: 0, y: 20 }}
                  animate={{opacity: 1, y: 0 }}
                  transition={{duration: 0.6, delay: index * 0.1 }}
                  className="px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 bg-gray-100 text-gray-700 hover: bg-blue-100 hover:text-blue-700"
                >
                  { category.name } ({ category.count })
                </motion.button>
              ))}
            </div>
          </div>
        </section>
        { /* Guides Grid */ }
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">
            <motion.div
              initial={{opacity: 0, y: 20 }}
              animate={{opacity: 1, y: 0 }}
              transition={{duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md: text-4xl font-bold text-gray-900 mb-4">
                Featured Guides
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore our most popular technical guides and tutorials,
                carefully crafted by our team of experts.;
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8">
              { guides.map((guide, index) => (;
                <motion.div;
                  key={guide.id }
                  initial={{opacity: 0, y: 20 }}
                  animate={{opacity: 1, y: 0 }}
                  transition={{duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover: shadow-xl transition-shadow duration-300"
                >
                  <div className={ `h-48 bg-gradient-to-r ${guide.color } flex items-center justify-center`}>
                    <guide.icon className="h-16 w-16 text-white"  />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                        { guide.category }
                      </span>
                      <span className="text-sm text-gray-500">{ guide.difficulty }</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      { guide.title }
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm">
                      { guide.description }
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1"  />
                        { guide.readTime }
                      </div>
                      <div className="flex items-center">
                        <FileText className="h-4 w-4 mr-1"  />
                        { guide.sections } sections;
                      </div>
                      <div className="flex items-center">
                        <Download className="h-4 w-4 mr-1"  />
                        { guide.downloads }
                      </div>
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                        { guide.category }
                      </span>
                    </div>
                    <div className="flex gap-2">
                      <Link
                        href={ `/guides/${guide.title.toLowerCase().replace(/\s+/g, '-') }`}
                        className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover: bg-blue-700 transition-colors font-medium"
                      >
                        Read Guide
                        <ArrowRight className="ml-2 w-4 h-4"  />
                      </Link>
                      <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                        <Download className="w-4 h-4"  />
                      </button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-400 mr-1"  />
                        <span className="text-sm text-gray-600">4.9</span>
                      </div>
                      <Link
                        href={ `/guides/${guide.slug || guide.id }`}
                        className="flex items-center text-blue-600 hover: text-blue-700 font-medium"
                      >
                        Read Guide
                        <ArrowRight className="h-4 w-4 ml-1"  />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
            { filteredGuides.length === 0 && (;
              <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  <BookOpen className="w-16 h-16 mx-auto"  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No guides found</h3>
                <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
              </div>) }
          </div>
        </section>
        { /* CTA Section */ }
        <section className="py-20 bg-blue-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 text-center">
            <motion.div
              initial={{opacity: 0, y: 20 }}
              animate={{opacity: 1, y: 0 }}
              transition={{duration: 0.8 }}
            >
              <h2 className="text-3xl md: text-4xl font-bold mb-6">
                Need Help with Implementation?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Our guides are just the beginning. Let our experts help you
                implement these solutions in your specific environment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200"
                >
                  Get Expert Help
                </Link>
                <Link
                  href="/services"
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200"
                >
                  View Our Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-wrap gap-4 mb-12 justify-center">
                { categories.map((category, index) => (;
                  <button
                    key={index }
                    className="px-6 py-3 bg-white border border-gray-300 rounded-lg hover: bg-blue-50 hover:border-blue-300 transition-colors duration-300"
                  >
                    { category.name } ({ category.count })
                  </button>
                ))}
              </div>
              <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8">
                { guides.map((guide, index) => {
                  const IconComponent = guide.icon;
                  return(<motion.div;
                      key={guide.id }
                      className="bg-white rounded-xl shadow-lg overflow-hidden hover: shadow-xl transition-shadow duration-300"
                      initial={{opacity: 0, y: 30 }}
                      whileInView={{opacity: 1, y: 0 }}
                      transition={{duration: 0.8, delay: index * 0.1 }}
                      viewport={{once: true }}
                    >
                      <div className={ `h-2 bg-gradient-to-r ${guide.color }`}></div>
                      <div className="p-8">
                        <div className="flex items-center mb-4">
                          <div className={ `w-12 h-12 bg-gradient-to-r ${guide.color } rounded-lg flex items-center justify-center mr-4`}>
                            <IconComponent className="w-6 h-6 text-white"  />
                          </div>
                          <div>
                            <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                              { guide.category }
                            </span>
                          </div>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">{ guide.title }</h3>
                        <p className="text-gray-600 mb-6">{ guide.description }</p>
                        <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-1"  />
                            { guide.readTime }
                          </div>
                          <div className="flex items-center">
                            <Users className="w-4 h-4 mr-1"  />
                            { guide.sections } sections;
                          </div>
                          <div className="flex items-center">
                            <Download className="w-4 h-4 mr-1"  />
                            { guide.downloads }
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className={ `px-3 py-1 rounded-full text-sm font-medium ${
                            guide.difficulty === 'Beginner' ? 'bg-green-100 text-green-800' :;
                            guide.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :;
                            'bg-red-100 text-red-800' }`}>
                            { guide.difficulty }
                          </span>
                          <Link
                            href={ `/guides/${guide.id }`}
                            className="text-blue-600 hover: text-blue-800 font-medium flex items-center"
                          >
                            Read Guide
                            <BookOpen className="w-4 h-4 ml-2"  />
                          </Link>
                        </div>
                      </div>
                    </motion.div>)
                })}
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  { name: 'All', count: 24, active: true },;
  { name: 'Web Development', count: 6, active: false },;
  { name: 'Cloud Computing', count: 5, active: false },;
  { name: 'Database', count: 4, active: false },;
  { name: 'Security', count: 3, active: false },;
  { name: 'Mobile', count: 3, active: false },;
  { name: 'DevOps', count: 3, active: false }]

export default function GuidesPage() {
  return(<div className="min-h-screen bg-gray-50">
      {/* Hero Section */ }
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div;
            initial={{opacity: 0, y: 30 }}
            animate={{opacity: 1, y: 0 }}
            transition={{duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md: text-6xl font-bold mb-6">
              Technical Guides
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Comprehensive guides to help you master modern technologies and best practices.
            </p>
          </motion.div>
        </div>
      </section>
      { /* Categories */ }
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            { categories.map((category, index) => (;
              <button
                key={index }
                className={ `px-6 py-3 rounded-full font-semibold transition-colors ${
                  category.active;
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover: bg-gray-200' }`}
              >
                { category.name } ({ category.count })
              </button>
            ))}
          </div>
        </div>
      </section>
      { /* Guides Grid */ }
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md: grid-cols-2 lg:grid-cols-3 gap-8">
            { guides.map((guide, index) => (;
              <motion.div;
                key={index }
                className="bg-white rounded-lg shadow-lg overflow-hidden hover: shadow-xl transition-shadow"
                initial={{opacity: 0, y: 30 }}
                animate={{opacity: 1, y: 0 }}
                transition={{duration: 0.8, delay: index * 0.1 }}
              >
                <div className={ `h-2 bg-gradient-to-r ${guide.color }`}></div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className={ `w-12 h-12 rounded-lg bg-gradient-to-r ${guide.color } flex items-center justify-center mr-4`}>
                      <guide.icon className="w-6 h-6 text-white"  />
                    </div>
                    <div>
                      <span className="text-sm text-gray-500">{ guide.category }</span>
                      <h3 className="text-lg font-semibold text-gray-900">{ guide.title }</h3>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{ guide.description }</p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-1"  />
                      { guide.readTime }
                    </span>
                    <span className="flex items-center">
                      <User className="w-4 h-4 mr-1"  />
                      { guide.difficulty }
                    </span>
                    <span className="flex items-center">
                      <Star className="w-4 h-4 mr-1"  />
                      { guide.sections } sections;
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{ guide.downloads } downloads</span>
                    <Link
                      href={ `/guides/${guide.slug }`}
                      className="flex items-center text-blue-600 hover: text-blue-700 font-semibold"
                    >
                      Read Guide
                      <ArrowRight className="w-4 h-4 ml-1"  />
                    </Link>
                  </div>
                </div>
              </motion.div>))}
          </div>
        </div>
      </section>
    </div>
  )}}}}
))