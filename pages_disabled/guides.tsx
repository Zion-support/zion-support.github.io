import Link from 'next/link';
import Layout from '../components/Layout';

const guides = [
  {
    title: 'Complete Guide to Web Development',
    description: 'A comprehensive guide covering HTML, CSS, JavaScript, and modern frameworks',
    category: 'Web Development',
    duration: '2 hours',
    difficulty: 'Beginner',
    icon: Code,
    features: ['HTML Basics', 'CSS Styling', 'JavaScript Fundamentals', 'React Introduction'],
    link: '/guides/web-development'
  },
  {
    title: 'AI and Machine Learning Fundamentals',
    description: 'Learn the basics of AI, machine learning, and how to implement them in your projects',
    category: 'AI/ML',
    duration: '3 hours',
    difficulty: 'Intermediate',
    icon: BookOpen,
    features: ['Machine Learning Concepts', 'Python for AI', 'Data Preprocessing', 'Model Training'],
    link: '/guides/ai-ml-fundamentals'
  },
  {
    title: 'Cloud Infrastructure Setup',
    description: 'Step-by-step guide to setting up and managing cloud infrastructure',
    category: 'Cloud Computing',
    duration: '1.5 hours',
    difficulty: 'Intermediate',
    icon: Cloud,
    features: ['AWS Setup', 'Azure Configuration', 'Google Cloud Platform', 'Security Best Practices'],
    link: '/guides/cloud-infrastructure'
  },
  {
    title: 'Cybersecurity Best Practices',
    description: 'Essential cybersecurity practices to protect your applications and data',
    category: 'Security',
    duration: '2.5 hours',
    difficulty: 'Advanced',
    icon: Shield,
    features: ['Threat Assessment', 'Security Implementation', 'Monitoring', 'Incident Response'],
    link: '/guides/cybersecurity'
  },
  {
    title: 'Database Design and Optimization',
    description: 'Learn how to design efficient databases and optimize performance',
    category: 'Database',
    duration: '2 hours',
    difficulty: 'Intermediate',
    icon: Database,
    features: ['Database Design', 'Query Optimization', 'Indexing', 'Performance Tuning'],
    link: '/guides/database-design'
  },
  {
    title: 'DevOps and CI/CD Pipeline',
    description: 'Complete guide to implementing DevOps practices and CI/CD pipelines',
    category: 'DevOps',
    duration: '3 hours',
    difficulty: 'Advanced',
    icon: FileText,
    features: ['Docker Containers', 'Kubernetes', 'CI/CD Setup', 'Monitoring'],
    link: '/guides/devops-cicd'
  }
];

const categories = [
  { name: 'All', count: guides.length },
  { name: 'Web Development', count: guides.filter(g => g.category === 'Web Development').length },
  { name: 'AI/ML', count: guides.filter(g => g.category === 'AI/ML').length },
  { name: 'Cloud Computing', count: guides.filter(g => g.category === 'Cloud Computing').length },
  { name: 'Security', count: guides.filter(g => g.category === 'Security').length },
  { name: 'Database', count: guides.filter(g => g.category === 'Database').length },
  { name: 'DevOps', count: guides.filter(g => g.category === 'DevOps').length }
];

export default function GuidesPage() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Learning <span className="text-blue-600">Guides</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Comprehensive guides and tutorials to help you master modern technologies and best practices.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Get Started
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
                <Link
                  href="/ai-services"
                  className="inline-flex items-center px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  View AI Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className="px-4 py-2 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow flex items-center"
                >
                  <span className="font-medium">{category.name}</span>
                  <span className="ml-2 bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
                    {category.count}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Guides Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {guides.map((guide, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden"
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <guide.icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full">
                        {guide.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{guide.title}</h3>
                    <p className="text-gray-600 mb-4">{guide.description}</p>
                    <div className="flex items-center space-x-4 mb-4 text-sm text-gray-500">
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
                      {guide.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    <Link
                      href={guide.link}
                      className="w-full inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Start Learning
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-600">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Start Learning?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Join our community of learners and start mastering new technologies today.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
                >
                  Get Started
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
                <Link
                  href="/it-services"
                  className="inline-flex items-center px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold"
                >
                  View IT Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}