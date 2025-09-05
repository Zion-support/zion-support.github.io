import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const BlogIndex: NextPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Business: Trends and Predictions for 2024',
      excerpt: 'Explore the latest AI trends that are reshaping how businesses operate, from automation to predictive analytics.',
      date: '2024-01-15',
      author: 'Kleber Lopes',
      category: 'AI & Machine Learning',
      readTime: '5 min read',
      image: '🤖'
    },
    {
      id: 2,
      title: 'Micro SAAS vs Enterprise Software: Which is Right for Your Business?',
      excerpt: 'A comprehensive comparison of micro SAAS solutions and traditional enterprise software to help you make the right choice.',
      date: '2024-01-10',
      author: 'Zion Tech Team',
      category: 'Micro SAAS',
      readTime: '7 min read',
      image: '⚡'
    },
    {
      id: 3,
      title: 'Cloud Migration Best Practices: A Step-by-Step Guide',
      excerpt: 'Learn the essential steps and best practices for successfully migrating your business to the cloud.',
      date: '2024-01-05',
      author: 'Cloud Solutions Team',
      category: 'Cloud Computing',
      readTime: '8 min read',
      image: '☁️'
    },
    {
      id: 4,
      title: 'Blockchain Technology: Beyond Cryptocurrency',
      excerpt: 'Discover how blockchain technology is being used across various industries beyond just digital currencies.',
      date: '2024-01-01',
      author: 'Blockchain Team',
      category: 'Blockchain',
      readTime: '6 min read',
      image: '🔗'
    },
    {
      id: 5,
      title: 'Cybersecurity in 2024: Protecting Your Digital Assets',
      excerpt: 'Essential cybersecurity strategies and tools to protect your business from evolving digital threats.',
      date: '2023-12-28',
      author: 'Security Team',
      category: 'Cybersecurity',
      readTime: '9 min read',
      image: '🔒'
    },
    {
      id: 6,
      title: 'IoT Platforms: Connecting the Future of Business',
      excerpt: 'How Internet of Things platforms are revolutionizing business operations and creating new opportunities.',
      date: '2023-12-20',
      author: 'IoT Team',
      category: 'IoT',
      readTime: '6 min read',
      image: '🌐'
    }
  ];

  const categories = [
    'All Posts',
    'AI & Machine Learning',
    'Micro SAAS',
    'Cloud Computing',
    'Blockchain',
    'Cybersecurity',
    'IoT'
  ];

  return (
    <>
      <Head>
        <title>Blog - Zion Tech Group | Technology Insights & Industry News</title>
        <meta name="description" content="Stay updated with the latest technology trends, AI insights, and industry news from Zion Tech Group. Expert articles on AI, cloud computing, blockchain, and more." />
        <meta name="keywords" content="technology blog, AI insights, cloud computing news, blockchain technology, micro SAAS trends, cybersecurity updates" />
      </Head>
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Technology Insights & News
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-purple-100">
              Stay ahead of the curve with expert insights, industry trends, and practical advice 
              from our team of technology professionals.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content */}
            <div className="lg:w-2/3">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest Articles</h2>
                <p className="text-gray-600">
                  Discover the latest insights and trends in technology, AI, and digital transformation.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                {blogPosts.map((post) => (
                  <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                    <div className="p-8">
                      <div className="flex items-center mb-4">
                        <span className="text-3xl mr-3">{post.image}</span>
                        <div>
                          <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                            {post.category}
                          </span>
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-semibold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
                        <Link href={`/blog/${post.id}`}>
                          {post.title}
                        </Link>
                      </h3>
                      
                      <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <div className="flex items-center">
                          <span>{post.author}</span>
                          <span className="mx-2">•</span>
                          <span>{post.date}</span>
                        </div>
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
              
              {/* Pagination */}
              <div className="mt-12 flex justify-center">
                <nav className="flex space-x-2">
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold">
                    1
                  </button>
                  <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300">
                    2
                  </button>
                  <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300">
                    3
                  </button>
                  <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300">
                    Next →
                  </button>
                </nav>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/3">
              <div className="space-y-8">
                {/* Categories */}
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Categories</h3>
                  <ul className="space-y-2">
                    {categories.map((category) => (
                      <li key={category}>
                        <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors flex items-center justify-between">
                          <span>{category}</span>
                          <span className="text-sm text-gray-400">(12)</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Popular Posts */}
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Popular Posts</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-12 h-12 bg-gray-200 rounded flex items-center justify-center text-lg">
                        🤖
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-gray-900 hover:text-blue-600">
                          <a href="#">AI Revolution in Healthcare</a>
                        </h4>
                        <p className="text-xs text-gray-500">Jan 10, 2024</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-12 h-12 bg-gray-200 rounded flex items-center justify-center text-lg">
                        ☁️
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-gray-900 hover:text-blue-600">
                          <a href="#">Cloud Security Best Practices</a>
                        </h4>
                        <p className="text-xs text-gray-500">Jan 5, 2024</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-12 h-12 bg-gray-200 rounded flex items-center justify-center text-lg">
                        🔗
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-gray-900 hover:text-blue-600">
                          <a href="#">Blockchain for Supply Chain</a>
                        </h4>
                        <p className="text-xs text-gray-500">Dec 28, 2023</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Newsletter Signup */}
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Stay Updated</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Subscribe to our newsletter for the latest technology insights and industry news.
                  </p>
                  <form className="space-y-3">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    />
                    <button
                      type="submit"
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold text-sm transition-colors"
                    >
                      Subscribe
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let our expert team help you implement the latest technology solutions to drive your business forward.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
              Get Free Consultation
            </Link>
            <Link href="/services" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogIndex;