import React from 'react';
import SEOHead from '../components/SEOHead';
import { 
  CalendarDaysIcon, 
  UserIcon, 
  ArrowRightIcon,
  ClockIcon,
  TagIcon
} from '@heroicons/react/24/outline';

const BlogPage: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Business: Trends and Predictions for 2025',
      excerpt: 'Explore the latest AI trends that are reshaping how businesses operate and compete in the digital landscape.',
      author: 'Zion Tech Group',
      date: '2025-01-15',
      readTime: '5 min read',
      category: 'AI & Machine Learning',
      image: '/api/placeholder/600/300',
      featured: true
    },
    {
      id: 2,
      title: 'How to Implement AI Solutions in Your Small Business',
      excerpt: 'A practical guide to getting started with AI technology without breaking the bank.',
      author: 'Zion Tech Group',
      date: '2025-01-10',
      readTime: '7 min read',
      category: 'Business Strategy',
      image: '/api/placeholder/600/300'
    },
    {
      id: 3,
      title: 'Cloud Migration Best Practices: A Complete Guide',
      excerpt: 'Learn the essential steps and considerations for successfully migrating your business to the cloud.',
      author: 'Zion Tech Group',
      date: '2025-01-05',
      readTime: '8 min read',
      category: 'Cloud Computing',
      image: '/api/placeholder/600/300'
    },
    {
      id: 4,
      title: 'Cybersecurity in 2025: Protecting Your Digital Assets',
      excerpt: 'Essential cybersecurity strategies every business should implement to protect against evolving threats.',
      author: 'Zion Tech Group',
      date: '2024-12-28',
      readTime: '6 min read',
      category: 'Cybersecurity',
      image: '/api/placeholder/600/300'
    },
    {
      id: 5,
      title: 'Micro SaaS Solutions: The Future of Business Software',
      excerpt: 'Discover how micro SaaS applications are revolutionizing how businesses solve specific problems.',
      author: 'Zion Tech Group',
      date: '2024-12-20',
      readTime: '4 min read',
      category: 'Micro SaaS',
      image: '/api/placeholder/600/300'
    },
    {
      id: 6,
      title: 'Digital Transformation: A Step-by-Step Guide',
      excerpt: 'Complete roadmap for transforming your business with digital technologies and AI solutions.',
      author: 'Zion Tech Group',
      date: '2024-12-15',
      readTime: '9 min read',
      category: 'Digital Transformation',
      image: '/api/placeholder/600/300'
    }
  ];

  const categories = [
    'All Posts',
    'AI & Machine Learning',
    'Business Strategy',
    'Cloud Computing',
    'Cybersecurity',
    'Micro SaaS',
    'Digital Transformation'
  ];

  return (
    <>
      <SEOHead
        title="Blog - Zion Tech Group"
        description="Stay updated with the latest insights on AI, cloud computing, cybersecurity, and digital transformation from our expert team."
        keywords="AI blog, technology insights, business strategy, cloud computing, cybersecurity, digital transformation, tech trends"
        canonicalUrl="https://ziontechgroup.com/blog"
      />
      
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Blog</h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                Insights, trends, and expert advice on AI, technology, and digital transformation
              </p>
            </div>
          </div>
        </div>

        {/* Featured Post */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img 
                  src={blogPosts[0].image} 
                  alt={blogPosts[0].title}
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8">
                <div className="flex items-center mb-4">
                  <span className="bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full">
                    Featured
                  </span>
                  <span className="ml-4 text-sm text-gray-500">{blogPosts[0].category}</span>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{blogPosts[0].title}</h2>
                <p className="text-gray-600 mb-6 text-lg">{blogPosts[0].excerpt}</p>
                <div className="flex items-center text-sm text-gray-500 mb-6">
                  <UserIcon className="w-4 h-4 mr-2" />
                  <span className="mr-4">{blogPosts[0].author}</span>
                  <CalendarDaysIcon className="w-4 h-4 mr-2" />
                  <span className="mr-4">{new Date(blogPosts[0].date).toLocaleDateString()}</span>
                  <ClockIcon className="w-4 h-4 mr-2" />
                  <span>{blogPosts[0].readTime}</span>
                </div>
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center">
                  Read More
                  <ArrowRightIcon className="w-4 h-4 ml-2" />
                </button>
              </div>
            </div>
          </div>

          {/* Categories */}
          <div className="mb-8">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    category === 'All Posts'
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-300'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <article key={post.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <TagIcon className="w-4 h-4 text-gray-400 mr-2" />
                    <span className="text-sm text-gray-500">{post.category}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <UserIcon className="w-4 h-4 mr-2" />
                    <span className="mr-4">{post.author}</span>
                    <CalendarDaysIcon className="w-4 h-4 mr-2" />
                    <span className="mr-4">{new Date(post.date).toLocaleDateString()}</span>
                    <ClockIcon className="w-4 h-4 mr-2" />
                    <span>{post.readTime}</span>
                  </div>
                  <button className="text-blue-600 hover:text-blue-700 font-medium flex items-center">
                    Read More
                    <ArrowRightIcon className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </article>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Load More Posts
            </button>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gray-900 text-white py-16">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-xl text-gray-300 mb-8">
              Subscribe to our newsletter for the latest insights on AI, technology, and business transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPage;