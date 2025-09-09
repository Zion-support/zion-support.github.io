import Head from 'next/head';
import Link from 'next/link';
import { Calendar, Clock, User, Tag, ArrowRight, Search } from 'lucide-react';

export default function Blog() {
  const featuredPosts = [
    {
      id: 1,
      title: 'The Future of AI: Transformative Trends Shaping 2025',
      excerpt: 'Explore the cutting-edge developments in artificial intelligence that are revolutionizing industries and creating new opportunities for businesses worldwide.',
      author: 'Dr. Sarah Chen',
      date: '2025-01-15',
      readTime: '8 min read',
      category: 'Artificial Intelligence',
      tags: ['AI', 'Machine Learning', 'Future Tech', 'Innovation'],
      image: '/images/blog/ai-future-2025.jpg',
      featured: true
    },
    {
      id: 2,
      title: 'Quantum Computing: Breaking the Classical Barrier',
      excerpt: 'Discover how quantum computing is solving previously intractable problems and paving the way for breakthroughs in cryptography, optimization, and scientific discovery.',
      author: 'Michael Rodriguez',
      date: '2025-01-12',
      readTime: '12 min read',
      category: 'Quantum Computing',
      tags: ['Quantum Computing', 'Cryptography', 'Optimization', 'Research'],
      image: '/images/blog/quantum-computing.jpg',
      featured: true
    },
    {
      id: 3,
      title: 'Zero-Trust Security: The New Standard in Cybersecurity',
      excerpt: 'Learn why zero-trust architecture is becoming essential for modern enterprises and how to implement robust security frameworks that protect against evolving threats.',
      author: 'Alex Thompson',
      date: '2025-01-10',
      readTime: '6 min read',
      category: 'Cybersecurity',
      tags: ['Security', 'Zero-Trust', 'Cyber Threats', 'Enterprise'],
      image: '/images/blog/zero-trust-security.jpg',
      featured: true
    }
  ];

  const recentPosts = [
    {
      id: 4,
      title: 'Building Scalable Cloud-Native Applications',
      excerpt: 'Best practices for developing applications that scale automatically and handle millions of users with cloud-native architecture patterns.',
      author: 'Jennifer Park',
      date: '2025-01-08',
      readTime: '10 min read',
      category: 'Cloud Computing',
      tags: ['Cloud Native', 'Scalability', 'Microservices', 'DevOps']
    },
    {
      id: 5,
      title: 'The Rise of Autonomous Business Operations',
      excerpt: 'How AI-powered automation is transforming business processes and creating self-managing organizations of the future.',
      author: 'David Kim',
      date: '2025-01-05',
      readTime: '7 min read',
      category: 'Business Automation',
      tags: ['Automation', 'Business Process', 'AI', 'Digital Transformation']
    },
    {
      id: 6,
      title: 'Edge Computing: Bringing Processing Closer to Data',
      excerpt: 'Understanding edge computing architectures and their critical role in IoT, real-time applications, and low-latency systems.',
      author: 'Rachel Green',
      date: '2025-01-03',
      readTime: '9 min read',
      category: 'Edge Computing',
      tags: ['Edge Computing', 'IoT', 'Real-time', '5G']
    },
    {
      id: 7,
      title: 'Blockchain Beyond Cryptocurrency: Enterprise Applications',
      excerpt: 'Exploring practical blockchain use cases in supply chain, healthcare, finance, and government sectors.',
      author: 'Chris Wilson',
      date: '2025-01-01',
      readTime: '11 min read',
      category: 'Blockchain',
      tags: ['Blockchain', 'Supply Chain', 'Healthcare', 'Finance']
    },
    {
      id: 8,
      title: 'The Democratization of Machine Learning',
      excerpt: 'How no-code and low-code ML platforms are making artificial intelligence accessible to businesses of all sizes.',
      author: 'Maria Garcia',
      date: '2024-12-28',
      readTime: '8 min read',
      category: 'Machine Learning',
      tags: ['ML', 'No-Code', 'Democratization', 'Business AI']
    },
    {
      id: 9,
      title: 'Sustainable Technology: Green Computing Initiatives',
      excerpt: 'Examining how the tech industry is addressing climate change through energy-efficient computing and sustainable practices.',
      author: 'Tom Anderson',
      date: '2024-12-25',
      readTime: '6 min read',
      category: 'Sustainability',
      tags: ['Green Computing', 'Sustainability', 'Climate Change', 'Energy Efficiency']
    }
  ];

  const categories = [
    { name: 'Artificial Intelligence', count: 24, color: 'bg-blue-100 text-blue-800' },
    { name: 'Cloud Computing', count: 18, color: 'bg-green-100 text-green-800' },
    { name: 'Cybersecurity', count: 15, color: 'bg-red-100 text-red-800' },
    { name: 'Quantum Computing', count: 12, color: 'bg-purple-100 text-purple-800' },
    { name: 'Blockchain', count: 9, color: 'bg-orange-100 text-orange-800' },
    { name: 'Edge Computing', count: 7, color: 'bg-indigo-100 text-indigo-800' },
    { name: 'Sustainability', count: 6, color: 'bg-teal-100 text-teal-800' },
    { name: 'Business Automation', count: 14, color: 'bg-gray-100 text-gray-800' }
  ];

  const popularTags = [
    'AI', 'Machine Learning', 'Cloud Native', 'Security', 'Quantum Computing', 
    'Blockchain', 'IoT', 'DevOps', 'Digital Transformation', 'Edge Computing',
    '5G', 'Automation', 'Sustainability', 'Enterprise', 'Innovation'
  ];

  return (
    <>
      <Head>
        <title>Blog - Zion Tech Group | Industry Insights & Technology Trends</title>
        <meta name="description" content="Stay updated with the latest insights in AI, cloud computing, cybersecurity, and quantum technologies. Expert analysis and thought leadership from Zion Tech Group." />
        <meta name="keywords" content="technology blog, AI insights, cloud computing, cybersecurity, quantum computing, tech trends, industry analysis" />
        <link rel="canonical" href="https://ziontechgroup.com/blog" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Blog - Zion Tech Group" />
        <meta property="og:description" content="Expert insights on AI, cloud computing, cybersecurity, and quantum technologies" />
        <meta property="og:url" content="https://ziontechgroup.com/blog" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Blog - Zion Tech Group" />
        <meta name="twitter:description" content="Expert insights on technology trends" />
        
        {/* JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Blog",
              "name": "Zion Tech Group Blog",
              "description": "Expert insights on AI, cloud computing, cybersecurity, and quantum technologies",
              "url": "https://ziontechgroup.com/blog",
              "publisher": {
                "@type": "Organization",
                "name": "Zion Tech Group"
              },
              "blogPost": [...featuredPosts, ...recentPosts].map(post => ({
                "@type": "BlogPosting",
                "headline": post.title,
                "description": post.excerpt,
                "author": {
                  "@type": "Person",
                  "name": post.author
                },
                "datePublished": post.date,
                "publisher": {
                  "@type": "Organization",
                  "name": "Zion Tech Group"
                }
              }))
            })
          }}
        />
      </Head>

      <main className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Insights That
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400"> Inspire</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Expert analysis, industry trends, and thought leadership on cutting-edge technologies that are shaping the future.
              </p>
              <div className="relative max-w-md mx-auto">
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="w-full px-4 py-3 pl-12 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Featured Posts */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Articles</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {featuredPosts.map((post) => (
                    <article key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                      <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                        <div className="text-white text-center p-4">
                          <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
                          <span className="px-2 py-1 bg-white bg-opacity-20 rounded text-sm">{post.category}</span>
                        </div>
                      </div>
                      <div className="p-6">
                        <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
                        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                          <div className="flex items-center">
                            <User className="w-4 h-4 mr-1" />
                            {post.author}
                          </div>
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {post.readTime}
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {post.tags.slice(0, 3).map((tag, index) => (
                            <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                              {tag}
                            </span>
                          ))}
                        </div>
                        <Link 
                          href={`/blog/${post.id}`}
                          className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                        >
                          Read More
                          <ArrowRight className="ml-1 w-4 h-4" />
                        </Link>
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              {/* Recent Posts */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Latest Articles</h2>
                <div className="space-y-6">
                  {recentPosts.map((post) => (
                    <article key={post.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <div className="flex-1">
                          <div className="flex items-center text-sm text-gray-500 mb-2">
                            <Calendar className="w-4 h-4 mr-1" />
                            {new Date(post.date).toLocaleDateString('en-US', { 
                              year: 'numeric', 
                              month: 'long', 
                              day: 'numeric' 
                            })}
                            <span className="mx-2">•</span>
                            <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">{post.category}</span>
                          </div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-blue-600 transition-colors">
                            <Link href={`/blog/${post.id}`}>{post.title}</Link>
                          </h3>
                          <p className="text-gray-600 mb-3">{post.excerpt}</p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center text-sm text-gray-500">
                              <User className="w-4 h-4 mr-1" />
                              {post.author}
                              <span className="mx-2">•</span>
                              <Clock className="w-4 h-4 mr-1" />
                              {post.readTime}
                            </div>
                            <Link 
                              href={`/blog/${post.id}`}
                              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                            >
                              Read More
                              <ArrowRight className="ml-1 w-4 h-4" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>

                {/* Pagination */}
                <div className="mt-8 flex justify-center">
                  <nav className="flex items-center space-x-2">
                    <button className="px-3 py-2 text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
                      Previous
                    </button>
                    <button className="px-3 py-2 text-white bg-blue-600 border border-blue-600 rounded-md">
                      1
                    </button>
                    <button className="px-3 py-2 text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
                      2
                    </button>
                    <button className="px-3 py-2 text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
                      3
                    </button>
                    <span className="px-3 py-2 text-gray-500">...</span>
                    <button className="px-3 py-2 text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
                      12
                    </button>
                    <button className="px-3 py-2 text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
                      Next
                    </button>
                  </nav>
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Categories */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category, index) => (
                    <Link 
                      key={index}
                      href={`/blog/category/${category.name.toLowerCase().replace(/\s+/g, '-')}`}
                      className="flex items-center justify-between p-2 rounded hover:bg-gray-50 transition-colors"
                    >
                      <span className="text-gray-700">{category.name}</span>
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                        {category.count}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Popular Tags */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Popular Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {popularTags.map((tag, index) => (
                    <Link
                      key={index}
                      href={`/blog/tag/${tag.toLowerCase()}`}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-blue-100 hover:text-blue-800 transition-colors"
                    >
                      {tag}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Newsletter Signup */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-6 text-white">
                <h3 className="text-lg font-bold mb-2">Stay Updated</h3>
                <p className="text-sm mb-4">Get the latest insights delivered to your inbox.</p>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-3 py-2 text-gray-900 rounded-md mb-3 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button className="w-full px-4 py-2 bg-white text-blue-600 rounded-md font-semibold hover:bg-gray-100 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <section className="bg-blue-900 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Stay ahead of the curve with our expert insights and cutting-edge solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
              >
                Get Started Today
              </Link>
              <Link 
                href="/services"
                className="px-8 py-3 border border-white text-white rounded-lg hover:bg-white hover:text-blue-900 transition-colors font-semibold"
              >
                Explore Solutions
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}