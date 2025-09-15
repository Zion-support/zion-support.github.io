import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, Users, TrendingUp, Award, Globe } from 'lucide-react';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  category: string;
  readTime: string;
  views: number;
  featured: boolean;
  image: string;
  link: string;
  tags: string[];
}

const featuredContent: ContentItem[] = [
  {
    id: '1',
    title: 'The Future of AI in Business: 2025 Trends',
    description: 'Explore the latest AI innovations transforming industries and how businesses can leverage these technologies for competitive advantage.',
    category: 'AI & Machine Learning',
    readTime: '8 min read',
    views: 15420,
    featured: true,
    image: '/api/placeholder/400/250',
    link: '/blog/ai-business-trends-2025',
    tags: ['AI', 'Business', 'Innovation', 'Technology']
  },
  {
    id: '2',
    title: 'Cybersecurity Best Practices for Remote Teams',
    description: 'Essential security measures to protect your distributed workforce and sensitive business data in the modern remote work environment.',
    category: 'Cybersecurity',
    readTime: '6 min read',
    views: 12850,
    featured: true,
    image: '/api/placeholder/400/250',
    link: '/blog/cybersecurity-remote-teams',
    tags: ['Security', 'Remote Work', 'Best Practices']
  },
  {
    id: '3',
    title: 'Blockchain Solutions for Supply Chain Transparency',
    description: 'How blockchain technology is revolutionizing supply chain management and creating unprecedented transparency and traceability.',
    category: 'Blockchain',
    readTime: '10 min read',
    views: 9870,
    featured: false,
    image: '/api/placeholder/400/250',
    link: '/blog/blockchain-supply-chain',
    tags: ['Blockchain', 'Supply Chain', 'Transparency']
  },
  {
    id: '4',
    title: 'Cloud Migration Strategies: A Complete Guide',
    description: 'Step-by-step guide to successfully migrating your infrastructure to the cloud while minimizing risks and maximizing benefits.',
    category: 'Cloud Computing',
    readTime: '12 min read',
    views: 11200,
    featured: false,
    image: '/api/placeholder/400/250',
    link: '/blog/cloud-migration-guide',
    tags: ['Cloud', 'Migration', 'Infrastructure']
  },
  {
    id: '5',
    title: 'Case Study: Digital Transformation Success Story',
    description: 'How we helped a Fortune 500 company achieve 300% ROI through comprehensive digital transformation initiatives.',
    category: 'Case Studies',
    readTime: '7 min read',
    views: 15680,
    featured: true,
    image: '/api/placeholder/400/250',
    link: '/case-studies/fortune-500-transformation',
    tags: ['Case Study', 'Digital Transformation', 'ROI']
  },
  {
    id: '6',
    title: 'The Rise of Quantum Computing in Business',
    description: 'Understanding quantum computing capabilities and their potential impact on business operations and competitive advantage.',
    category: 'Quantum Computing',
    readTime: '9 min read',
    views: 8750,
    featured: false,
    image: '/api/placeholder/400/250',
    link: '/blog/quantum-computing-business',
    tags: ['Quantum Computing', 'Innovation', 'Future Tech']
  }
];

const categories = [
  { name: 'All', count: featuredContent.length, icon: Globe },
  { name: 'AI & Machine Learning', count: featuredContent.filter(c => c.category === 'AI & Machine Learning').length, icon: TrendingUp },
  { name: 'Cybersecurity', count: featuredContent.filter(c => c.category === 'Cybersecurity').length, icon: Award },
  { name: 'Blockchain', count: featuredContent.filter(c => c.category === 'Blockchain').length, icon: Globe },
  { name: 'Cloud Computing', count: featuredContent.filter(c => c.category === 'Cloud Computing').length, icon: Globe },
  { name: 'Case Studies', count: featuredContent.filter(c => c.category === 'Case Studies').length, icon: Users }
];

export const ContentShowcase: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = React.useState('All');
  const [filteredContent, setFilteredContent] = React.useState(featuredContent);

  React.useEffect(() => {
    if (selectedCategory === 'All') {
      setFilteredContent(featuredContent);
    } else {
      setFilteredContent(featuredContent.filter(content => content.category === selectedCategory));
    }
  }, [selectedCategory]);

  const formatViews = (views: number) => {
    if (views >= 1000) {
      return `${(views / 1000).toFixed(1)}k`;
    }
    return views.toString();
  };

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-gray-900 sm:text-4xl"
          >
            Latest Insights & Resources
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Stay ahead with our expert insights, case studies, and thought leadership content
          </motion.p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <button
                key={category.name}
                onClick={() => setSelectedCategory(category.name)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-200 ${
                  selectedCategory === category.name
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                <IconComponent className="w-4 h-4" />
                <span className="font-medium">{category.name}</span>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  selectedCategory === category.name
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-200 text-gray-600'
                }`}>
                  {category.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredContent.map((content, index) => (
            <motion.div
              key={content.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 ${
                content.featured ? 'ring-2 ring-blue-500' : ''
              }`}
            >
              <div className="relative">
                <img
                  src={content.image}
                  alt={content.title}
                  className="w-full h-48 object-cover"
                />
                {content.featured && (
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                      Featured
                    </span>
                  </div>
                )}
                <div className="absolute top-4 right-4 flex items-center space-x-2 text-white">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm bg-black bg-opacity-50 px-2 py-1 rounded">
                    {content.readTime}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                    {content.category}
                  </span>
                  <div className="flex items-center space-x-1 text-gray-500">
                    <TrendingUp className="w-4 h-4" />
                    <span className="text-sm">{formatViews(content.views)}</span>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                  {content.title}
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-3">
                  {content.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {content.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <Link
                  to={content.link}
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors"
                >
                  Read More
                  <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mt-12"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Want More Insights?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter and get the latest technology insights, 
              case studies, and industry trends delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <button className="px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContentShowcase;