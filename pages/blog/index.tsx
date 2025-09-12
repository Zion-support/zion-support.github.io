import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const BlogIndex: NextPage = () => {
  const blogPosts = [
    {
      title: "5G Technology and Its Impact on IoT",
      excerpt: "Explore how 5G networks are revolutionizing IoT applications and enabling new possibilities for connected devices.",
      slug: "5g-technology-and-its-impact-on-iot-chat",
      category: "Technology",
      readTime: "8 min read",
      publishDate: "2024-01-15",
      featured: true
    },
    {
      title: "AI-Powered Marketplaces: The Future of Digital Commerce",
      excerpt: "Discover how artificial intelligence is transforming e-commerce platforms and creating personalized shopping experiences.",
      slug: "ai-powered-marketplaces-the-future-of-digital-commerce-chat",
      category: "AI & Machine Learning",
      readTime: "6 min read",
      publishDate: "2024-01-12",
      featured: true
    },
    {
      title: "API-First Development: Building Scalable Systems",
      excerpt: "Learn the principles of API-first development and how it can help you build more maintainable and scalable applications.",
      slug: "api-first-development-building-scalable-systems-chat",
      category: "Development",
      readTime: "10 min read",
      publishDate: "2024-01-10",
      featured: false
    },
    {
      title: "Augmented Reality in Enterprise Applications",
      excerpt: "How AR is being adopted in enterprise environments to improve training, maintenance, and customer experiences.",
      slug: "augmented-reality-in-enterprise-applications-chat",
      category: "Emerging Tech",
      readTime: "7 min read",
      publishDate: "2024-01-08",
      featured: false
    },
    {
      title: "Blockchain Technology in Modern Business Solutions",
      excerpt: "Understanding the practical applications of blockchain beyond cryptocurrency and its impact on business processes.",
      slug: "blockchain-technology-in-modern-business-solutions-chat",
      category: "Blockchain",
      readTime: "9 min read",
      publishDate: "2024-01-05",
      featured: true
    },
    {
      title: "Cloud-Native Architecture Best Practices",
      excerpt: "Essential best practices for designing and implementing cloud-native applications that scale efficiently.",
      slug: "cloud-native-architecture-best-practices-chat",
      category: "Cloud Computing",
      readTime: "12 min read",
      publishDate: "2024-01-03",
      featured: false
    },
    {
      title: "Cybersecurity Trends for 2024 and Beyond",
      excerpt: "Stay ahead of the latest cybersecurity threats and trends that will shape the digital landscape in 2024.",
      slug: "cybersecurity-trends-for-2024-and-beyond-chat",
      category: "Cybersecurity",
      readTime: "11 min read",
      publishDate: "2024-01-01",
      featured: true
    },
    {
      title: "Data Analytics in Digital Transformation",
      excerpt: "How data analytics is driving digital transformation initiatives and enabling data-driven decision making.",
      slug: "data-analytics-in-digital-transformation-chat",
      category: "Data Science",
      readTime: "8 min read",
      publishDate: "2023-12-28",
      featured: false
    },
    {
      title: "DevOps Automation Strategies for Modern Teams",
      excerpt: "Effective DevOps automation strategies that can help development teams deliver software faster and more reliably.",
      slug: "devops-automation-strategies-for-modern-teams-chat",
      category: "DevOps",
      readTime: "9 min read",
      publishDate: "2023-12-25",
      featured: false
    },
    {
      title: "Digital Twins: Revolutionizing Industry 4.0",
      excerpt: "Explore how digital twins are transforming manufacturing and industrial processes in the Industry 4.0 era.",
      slug: "digital-twins-revolutionizing-industry-4-0-chat",
      category: "Industry 4.0",
      readTime: "10 min read",
      publishDate: "2023-12-22",
      featured: false
    },
    {
      title: "Machine Learning Applications in Enterprise Software",
      excerpt: "Real-world applications of machine learning in enterprise software and how it's improving business processes.",
      slug: "machine-learning-applications-in-enterprise-software-chat",
      category: "AI & Machine Learning",
      readTime: "7 min read",
      publishDate: "2023-12-20",
      featured: false
    },
    {
      title: "Microservices Architecture: Benefits and Challenges",
      excerpt: "A comprehensive look at microservices architecture, its benefits, challenges, and when to use it.",
      slug: "microservices-architecture-benefits-and-challenges-chat",
      category: "Architecture",
      readTime: "11 min read",
      publishDate: "2023-12-18",
      featured: false
    },
    {
      title: "Quantum Computing: Implications for Business",
      excerpt: "Understanding quantum computing and its potential impact on various industries and business applications.",
      slug: "quantum-computing-implications-for-business-chat",
      category: "Emerging Tech",
      readTime: "13 min read",
      publishDate: "2023-12-15",
      featured: true
    },
    {
      title: "Sustainable Technology: Green Computing Solutions",
      excerpt: "How technology companies are adopting sustainable practices and green computing solutions.",
      slug: "sustainable-technology-green-computing-solutions-chat",
      category: "Sustainability",
      readTime: "6 min read",
      publishDate: "2023-12-12",
      featured: false
    },
    {
      title: "The Rise of Edge Computing in IoT Applications",
      excerpt: "How edge computing is enabling real-time processing and reducing latency in IoT applications.",
      slug: "the-rise-of-edge-computing-in-iot-applications-chat",
      category: "IoT",
      readTime: "8 min read",
      publishDate: "2023-12-10",
      featured: false
    }
  ];

  const categories = ["All", "AI & Machine Learning", "Cloud Computing", "Blockchain", "Cybersecurity", "Development", "IoT", "Emerging Tech", "Data Science", "DevOps", "Architecture", "Industry 4.0", "Sustainability"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
      <Head>
        <title>Technology Blog - Zion Tech Solutions</title>
        <meta name="description" content="Stay updated with the latest technology trends, insights, and best practices from Zion Tech Solutions. Expert articles on AI, cloud computing, blockchain, and more." />
        <meta name="keywords" content="technology blog, AI insights, cloud computing, blockchain, cybersecurity, software development, tech trends" />
      </Head>
      
      <main className="container mx-auto px-4 py-16">
        {/* Header Section */}
        <div className="text-center text-white mb-16">
          <h1 className="text-5xl font-bold mb-6">
            Technology Insights & Trends
          </h1>
          <p className="text-xl mb-8 max-w-4xl mx-auto">
            Stay ahead of the curve with expert insights, industry trends, and practical guides 
            from our team of technology professionals. Discover the latest in AI, cloud computing, 
            blockchain, and emerging technologies.
          </p>
          <div className="flex justify-center gap-6">
            <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Subscribe to Updates
            </Link>
            <Link href="/services" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-semibold transition-colors">
              Our Services
            </Link>
          </div>
        </div>

        {/* Featured Posts */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Featured Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.filter(post => post.featured).map((post, index) => (
              <article key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 group border border-white/20">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                  <span className="text-gray-300 text-sm">{post.readTime}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-300 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-200 mb-4 text-sm leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-sm">{post.publishDate}</span>
                  <Link 
                    href={`/blog/${post.slug}`}
                    className="text-blue-300 hover:text-blue-200 font-medium text-sm group-hover:translate-x-1 transition-all duration-300"
                  >
                    Read More →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* All Posts */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">All Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 group border border-white/20">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                  <span className="text-gray-300 text-sm">{post.readTime}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-300 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-200 mb-4 text-sm leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-sm">{post.publishDate}</span>
                  <Link 
                    href={`/blog/${post.slug}`}
                    className="text-blue-300 hover:text-blue-200 font-medium text-sm group-hover:translate-x-1 transition-all duration-300"
                  >
                    Read More →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Stay Updated with Tech Trends</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get the latest technology insights, industry updates, and expert analysis delivered directly to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email address"
              className="flex-1 px-6 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
              Subscribe
            </button>
          </div>
          <p className="text-sm mt-4 text-blue-100">
            No spam, unsubscribe at any time. We respect your privacy.
          </p>
        </div>
      </main>
    </div>
  );
};

export default BlogIndex;