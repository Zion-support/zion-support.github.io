import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  ArrowRight,
  FileText,
  Clock,
  User,
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

const guides = [
  {
    title: 'Complete Guide to Web Development',
    description: 'A comprehensive guide covering HTML, CSS, JavaScript, and modern frameworks',
    category: 'Web Development',
    icon: Code,
    color: 'from-blue-500 to-cyan-500',
    readTime: '45 min',
    difficulty: 'Beginner',
    rating: 4.8,
    author: 'Zion Tech Team',
    features: ['HTML5 & CSS3', 'JavaScript ES6+', 'React & Vue.js', 'Node.js Backend', 'Database Integration'],
    benefits: ['Build modern web applications', 'Understand full-stack development', 'Industry best practices', 'Real-world projects']
  },
  {
    title: 'Cloud Computing Fundamentals',
    description: 'Master cloud platforms, services, and deployment strategies',
    category: 'Cloud Computing',
    icon: Cloud,
    color: 'from-purple-500 to-pink-500',
    readTime: '60 min',
    difficulty: 'Intermediate',
    rating: 4.9,
    author: 'Cloud Experts',
    features: ['AWS Services', 'Azure Platform', 'Google Cloud', 'Docker & Kubernetes', 'Serverless Architecture'],
    benefits: ['Deploy scalable applications', 'Reduce infrastructure costs', 'Improve reliability', 'Global reach']
  },
  {
    title: 'Database Design & Optimization',
    description: 'Learn database design principles, SQL optimization, and NoSQL solutions',
    category: 'Database',
    icon: Database,
    color: 'from-green-500 to-teal-500',
    readTime: '50 min',
    difficulty: 'Intermediate',
    rating: 4.7,
    author: 'Database Specialists',
    features: ['SQL Optimization', 'NoSQL Databases', 'Data Modeling', 'Performance Tuning', 'Backup & Recovery'],
    benefits: ['Optimize query performance', 'Design efficient schemas', 'Handle big data', 'Ensure data integrity']
  },
  {
    title: 'Cybersecurity Best Practices',
    description: 'Comprehensive security guide for developers and IT professionals',
    category: 'Security',
    icon: Shield,
    color: 'from-red-500 to-orange-500',
    readTime: '55 min',
    difficulty: 'Advanced',
    rating: 4.9,
    author: 'Security Experts',
    features: ['Threat Assessment', 'Encryption Methods', 'Access Control', 'Vulnerability Testing', 'Incident Response'],
    benefits: ['Protect sensitive data', 'Comply with regulations', 'Prevent breaches', 'Build secure systems']
  },
  {
    title: 'API Development & Integration',
    description: 'Build robust APIs and integrate third-party services effectively',
    category: 'API Development',
    icon: Zap,
    color: 'from-yellow-500 to-orange-500',
    readTime: '40 min',
    difficulty: 'Intermediate',
    rating: 4.6,
    author: 'API Architects',
    features: ['RESTful Design', 'GraphQL APIs', 'Authentication', 'Rate Limiting', 'Documentation'],
    benefits: ['Create scalable APIs', 'Improve system integration', 'Enhance developer experience', 'Monitor performance']
  },
  {
    title: 'DevOps & CI/CD Pipeline',
    description: 'Streamline development workflows with modern DevOps practices',
    category: 'DevOps',
    icon: Settings,
    color: 'from-indigo-500 to-purple-500',
    readTime: '65 min',
    difficulty: 'Advanced',
    rating: 4.8,
    author: 'DevOps Engineers',
    features: ['Docker & Containers', 'Kubernetes', 'CI/CD Pipelines', 'Infrastructure as Code', 'Monitoring'],
    benefits: ['Automate deployments', 'Improve reliability', 'Scale applications', 'Reduce manual errors']
  }
];

const categories = [
  { name: 'All', count: 24, active: true },
  { name: 'Web Development', count: 6, active: false },
  { name: 'Cloud Computing', count: 5, active: false },
  { name: 'Database', count: 4, active: false },
  { name: 'Security', count: 3, active: false },
  { name: 'API Development', count: 3, active: false },
  { name: 'DevOps', count: 3, active: false }
];

export default function GuidesPage() {
  return (
    <>
      <Head>
        <title>Technology Guides - Zion Tech Group | Expert Learning Resources</title>
        <meta name="description" content="Comprehensive technology guides and tutorials covering web development, cloud computing, databases, security, APIs, and DevOps. Learn from industry experts." />
        <meta name="keywords" content="technology guides, web development, cloud computing, database, security, API development, DevOps, tutorials, learning resources" />
        <meta property="og:title" content="Technology Guides - Zion Tech Group" />
        <meta property="og:description" content="Master modern technologies with our comprehensive guides and tutorials from industry experts." />
        <meta property="og:url" content="https://ziontechgroup.com/guides" />
        <meta property="og:type" content="website" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Technology{' '}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Guides
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Master modern technologies with our comprehensive guides and tutorials from industry experts.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="#guides" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Explore Guides
                </Link>
                <Link href="/contact" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">
                  Get Custom Training
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Info Bar */}
        <section className="bg-blue-900 text-white py-4">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center text-sm">
              <div className="flex items-center space-x-6 mb-2 md:mb-0">
                <div className="flex items-center">
                  <span className="w-4 h-4 mr-2">📞</span>
                  <a href="tel:+13024640950" className="hover:text-blue-300">+1 302 464 0950</a>
                </div>
                <div className="flex items-center">
                  <span className="w-4 h-4 mr-2">✉️</span>
                  <a href="mailto:kleber@ziontechgroup.com" className="hover:text-blue-300">kleber@ziontechgroup.com</a>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-blue-200">Expert-Led Learning Resources</span>
                <div className="flex space-x-2">
                  <a href="#" className="hover:text-blue-300"><Globe className="w-4 h-4" /></a>
                  <a href="#" className="hover:text-blue-300"><ExternalLink className="w-4 h-4" /></a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search guides..."
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div className="flex gap-2">
                    <button className="px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center">
                      <Filter className="w-4 h-4 mr-2" />
                      Filter
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-8 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category, index) => (
                <motion.button
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    category.active
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.name} ({category.count})
                </motion.button>
              ))}
            </div>
          </div>
        </section>

        {/* Guides Grid */}
        <section id="guides" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Featured Guides
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive learning resources designed by industry experts
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {guides.map((guide, index) => {
                const IconComponent = guide.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
                  >
                    <div className={`h-2 bg-gradient-to-r ${guide.color}`}></div>
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className={`p-3 rounded-lg bg-gradient-to-r ${guide.color}`}>
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex items-center text-yellow-500">
                          <Star className="w-4 h-4 fill-current" />
                          <span className="ml-1 text-sm font-medium">{guide.rating}</span>
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-gray-900 mb-2">{guide.title}</h3>
                      <p className="text-gray-600 mb-4">{guide.description}</p>

                      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {guide.readTime}
                        </div>
                        <div className="flex items-center">
                          <User className="w-4 h-4 mr-1" />
                          {guide.author}
                        </div>
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          guide.difficulty === 'Beginner' ? 'bg-green-100 text-green-800' :
                          guide.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {guide.difficulty}
                        </span>
                      </div>

                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                        <ul className="space-y-1">
                          {guide.features.slice(0, 3).map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                              <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex gap-2">
                        <Link href={`/guides/${guide.title.toLowerCase().replace(/\s+/g, '-')}`} className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-center font-medium">
                          Read Guide
                        </Link>
                        <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                          <Download className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-900 to-purple-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Need Custom Training?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Our experts can create personalized training programs tailored to your team's specific needs and technology stack.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-white text-blue-900 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                  Request Custom Training
                </Link>
                <Link href="/services" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-900 transition-all duration-300 font-semibold">
                  Explore Our Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}