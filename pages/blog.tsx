import Head from 'next/head';
import Link from 'next/link';
export default function BlogPage() {
  const blogPosts = [
    {
      title: 'The Future of AI in Business: 2025 and Beyond',
      excerpt: 'Explore how artificial intelligence is reshaping business operations and what to expect in the coming years.',
      category: 'AI & Machine Learning',
      date: 'August 26, 2025',
      readTime: '5 min read',
      author: 'Zion Tech Group Team',
      slug: 'future-of-ai-business-2025',
      featured: true
    },
    {
      title: 'Quantum Computing: Breaking Down the Hype vs. Reality',
      excerpt: 'Understanding what quantum computing can actually deliver today and what\'s still in the realm of science fiction.',
      category: 'Quantum Computing',
      date: 'August 24, 2025',
      readTime: '7 min read',
      author: 'Quantum Team',
      slug: 'quantum-computing-hype-reality',
      featured: false
    },
    {
      title: 'Cybersecurity in the Age of AI: New Threats and Solutions',
      excerpt: 'How AI is both creating new security challenges and providing innovative solutions to protect businesses.',
      category: 'Cybersecurity',
      date: 'August 22, 2025',
      readTime: '6 min read',
      author: 'Security Team',
      slug: 'cybersecurity-ai-threats-solutions',
      featured: false
    },
    {
      title: 'Cloud-Native Architecture: Best Practices for 2025',
      excerpt: 'Essential strategies for building scalable, secure, and efficient cloud-native applications.',
      category: 'Cloud & Infrastructure',
      date: 'August 20, 2025',
      readTime: '8 min read',
      author: 'Cloud Team',
      slug: 'cloud-native-architecture-best-practices-2025',
      featured: false
    },
    {
      title: 'The Rise of Edge Computing: Bringing AI Closer to Users',
      excerpt: 'How edge computing is revolutionizing AI deployment and improving user experiences.',
      category: 'Edge Computing',
      date: 'August 18, 2025',
      readTime: '4 min read',
      author: 'Infrastructure Team',
      slug: 'rise-edge-computing-ai-users',
      featured: false
    },
    {
      title: 'Sustainable Technology: Building Green AI Solutions',
      excerpt: 'Strategies for developing environmentally conscious AI and technology solutions.',
      category: 'Sustainability',
      date: 'August 16, 2025',
      readTime: '6 min read',
      author: 'Innovation Team',
      slug: 'sustainable-technology-green-ai-solutions',
      featured: false
    }
  ];
  const categories = [
    'All',
    'AI & Machine Learning',
    'Quantum Computing',
    'Cybersecurity',
    'Cloud & Infrastructure',
    'Edge Computing',
    'Sustainability',
    'Industry Insights'
  ];
  const featuredPost = blogPosts.find(post => post.featured);
  return (
    <>
      <Head>
        <title>Blog - Zion Tech Group</title>
        <meta name="description" content="Stay updated with the latest insights on AI, quantum computing, cybersecurity, and emerging technologies from Zion Tech Group." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Insights & Thought Leadership
            </h1>
            <p className="text-xl sm:text-2xl mb-8 text-gray-300 max-w-4xl mx-auto">
              Stay ahead of the curve with expert insights on AI, quantum computing, cybersecurity, and the future of technology.
            </p>
          </div>
        </section>
        {/* Featured Post */}
        {featuredPost && (
          <section className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-8 border border-white border-opacity-10">
                <div className="mb-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </span>
                </div>
                <h2 className="text-3xl font-bold mb-4">{featuredPost.title}</h2>
                <p className="text-lg text-gray-300 mb-6">{featuredPost.excerpt}</p>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-400">
                    <span>{featuredPost.author}</span>
                    <span>•</span>
                    <span>{featuredPost.date}</span>
                    <span>•</span>
                    <span>{featuredPost.readTime}</span>
                  </div>
                  <span className="bg-white bg-opacity-20 px-3 py-1 rounded text-sm">
                    {featuredPost.category}
                  </span>
                </div>
                <Link 
                  href={`/blog/${featuredPost.slug}`}
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium"
                >
                  Read Full Article
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </section>
        )}
        {/* Categories */}
        <section className="py-8 px-4 sm:px-6 lg:px-8 bg-black bg-opacity-20">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    category === 'All'
                      ? 'bg-blue-600 text-white'
                      : 'bg-white bg-opacity-10 text-gray-300 hover:bg-opacity-20'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>
        {/* Blog Posts Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.filter(post => !post.featured).map((post, index) => (
                <article key={index} className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 border border-white border-opacity-10 hover:bg-opacity-20 transition-all">
                  <div className="mb-4">
                    <span className="bg-white bg-opacity-20 px-2 py-1 rounded text-xs text-gray-300">
                      {post.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3 line-clamp-2">
                    <Link href={`/blog/${post.slug}`} className="hover:text-blue-400 transition-colors">
                      {post.title}
                    </Link>
                  </h3>
                  
                  <p className="text-gray-300 mb-4 line-clamp-3">{post.excerpt}</p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <span>{post.author}</span>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">{post.date}</span>
                    <Link 
                      href={`/blog/${post.slug}`}
                      className="text-blue-400 hover:text-blue-300 font-medium text-sm"
                    >
                      Read More →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
        {/* Newsletter Signup */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Stay Updated
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Get the latest insights delivered to your inbox. No spam, just valuable content.
            </p>
            <div className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl mb-8 text-gray-300">
              Let's discuss how our cutting-edge solutions can drive your success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Get Started
              </Link>
              <Link 
                href="/services" 
                className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}