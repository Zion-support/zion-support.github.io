import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  ArrowRight,
  FileText,
  Clock,
  User,
  Star,
  Code,
  Database,
  Cloud,
  Shield,
  Smartphone,
  Server,
  Download
} from 'lucide-react';

const guides = [
  {
    slug: 'react-best-practices',
    title: 'React Best Practices',
    description: 'Learn the essential patterns and practices for building scalable React applications',
    category: 'Web Development',
    icon: Code,
    color: 'from-blue-500 to-purple-500',
    readTime: '15 min',
    difficulty: 'Intermediate',
    sections: 8,
    downloads: 2500
  },
  {
    slug: 'database-optimization',
    title: 'Database Optimization',
    description: 'Master database performance tuning and optimization techniques',
    category: 'Backend',
    icon: Database,
    color: 'from-green-500 to-teal-500',
    readTime: '25 min',
    difficulty: 'Advanced',
    sections: 12,
    downloads: 1800
  },
  {
    slug: 'cloud-architecture',
    title: 'Cloud Architecture Patterns',
    description: 'Design scalable and resilient cloud-based applications',
    category: 'Cloud',
    icon: Cloud,
    color: 'from-orange-500 to-red-500',
    readTime: '35 min',
    difficulty: 'Advanced',
    sections: 15,
    downloads: 3200
  },
  {
    slug: 'web-security-fundamentals',
    title: 'Web Security Fundamentals',
    description: 'Essential security practices every developer should know',
    category: 'Security',
    icon: Shield,
    color: 'from-red-500 to-pink-500',
    readTime: '30 min',
    difficulty: 'Intermediate',
    sections: 10,
    downloads: 2100
  },
  {
    slug: 'mobile-app-development',
    title: 'Mobile App Development',
    description: 'Complete guide to building cross-platform mobile applications',
    category: 'Mobile',
    icon: Smartphone,
    color: 'from-purple-500 to-indigo-500',
    readTime: '40 min',
    difficulty: 'Intermediate',
    sections: 18,
    downloads: 2800
  },
  {
    slug: 'server-infrastructure',
    title: 'Server Infrastructure',
    description: 'Build and manage robust server infrastructure for modern applications',
    category: 'Infrastructure',
    icon: Server,
    color: 'from-gray-500 to-blue-500',
    readTime: '45 min',
    difficulty: 'Advanced',
    sections: 20,
    downloads: 1500
  }
];

const categories = [
  { name: 'All', count: guides.length },
  { name: 'Web Development', count: guides.filter(g => g.category === 'Web Development').length },
  { name: 'Backend', count: guides.filter(g => g.category === 'Backend').length },
  { name: 'Cloud', count: guides.filter(g => g.category === 'Cloud').length },
  { name: 'Security', count: guides.filter(g => g.category === 'Security').length },
  { name: 'Mobile', count: guides.filter(g => g.category === 'Mobile').length },
  { name: 'Infrastructure', count: guides.filter(g => g.category === 'Infrastructure').length }
];

export default function GuidesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Developer Guides
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Comprehensive guides to help you master modern development practices
              and build exceptional applications.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Browse by Category
            </h2>
            <p className="text-xl text-gray-600">
              Find guides tailored to your specific development needs
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <motion.button
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="px-6 py-3 bg-gray-100 hover:bg-blue-600 hover:text-white rounded-lg transition-colors font-semibold"
              >
                {category.name} ({category.count})
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Guides Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {guides.map((guide, index) => (
              <motion.div
                key={guide.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className={`h-2 bg-gradient-to-r ${guide.color}`}></div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${guide.color} text-white mr-4`}>
                      <guide.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                        {guide.category}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {guide.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4">
                    {guide.description}
                  </p>

                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {guide.readTime}
                    </div>
                    <div className="flex items-center">
                      <FileText className="h-4 w-4 mr-1" />
                      {guide.sections} sections
                    </div>
                    <div className="flex items-center">
                      <Download className="h-4 w-4 mr-1" />
                      {guide.downloads.toLocaleString()}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      guide.difficulty === 'Beginner' 
                        ? 'bg-green-100 text-green-800'
                        : guide.difficulty === 'Intermediate'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {guide.difficulty}
                    </span>
                    
                    <Link href={`/guides/${guide.slug}`}>
                      <button className="flex items-center text-blue-600 hover:text-blue-800 font-semibold">
                        Read Guide
                        <ArrowRight className="h-4 w-4 ml-1" />
                      </button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              We're constantly adding new guides and resources. 
              Let us know what topics you'd like to see covered.
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Request a Guide
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}