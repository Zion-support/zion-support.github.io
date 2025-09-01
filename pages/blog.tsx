import Head from 'next/head';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/Card';
import { Button } from '../components/ui/Button';

export default function BlogPage() {
  const blogPosts = [
    {
      id: 'ai-automation-future',
      title: 'The Future of AI Automation in 2024',
      excerpt: 'Discover the latest trends and innovations shaping the future of autonomous technology and how businesses can prepare for the AI revolution.',
      author: 'Zion Tech Team',
      date: 'January 15, 2024',
      readTime: '5 min read',
      category: 'AI & Automation',
      image: '/api/placeholder/400/250',
      color: 'from-purple-500 to-purple-600'
    },
    {
      id: 'cloud-optimization-guide',
      title: 'Complete Guide to Cloud Infrastructure Optimization',
      excerpt: 'Learn the best practices for optimizing your cloud infrastructure, reducing costs, and improving performance with autonomous systems.',
      author: 'Cloud Engineering Team',
      date: 'January 10, 2024',
      readTime: '8 min read',
      category: 'Cloud Computing',
      featured: false
    },
    {
      id: 'content-generation-ai',
      title: 'How AI is Revolutionizing Content Generation',
      excerpt: 'Explore how autonomous content generation systems are transforming marketing, SEO, and content creation across industries.',
      author: 'Content AI Team',
      date: 'January 5, 2024',
      readTime: '6 min read',
      category: 'Content Marketing',
      featured: false
    },
    {
      id: 'security-automation',
      title: 'Automating Security: The Future of Cyber Defense',
      excerpt: 'Discover how AI-powered security automation is protecting businesses from evolving cyber threats and reducing response times.',
      author: 'Security Team',
      date: 'December 28, 2023',
      readTime: '7 min read',
      category: 'Cybersecurity',
      featured: false
    },
    {
      id: 'performance-monitoring',
      title: 'Real-time Performance Monitoring with AI',
      excerpt: 'Learn how autonomous monitoring systems provide real-time insights and automatically optimize application performance.',
      author: 'Performance Team',
      date: 'December 20, 2023',
      readTime: '6 min read',
      category: 'Performance',
      featured: false
    },
    {
      id: 'automation-roi',
      title: 'Measuring ROI of AI Automation Projects',
      excerpt: 'Understand how to calculate and demonstrate the return on investment for your AI automation initiatives.',
      author: 'Analytics Team',
      date: 'December 15, 2023',
      readTime: '9 min read',
      category: 'Business Strategy',
      featured: false
    }
  ];

  const categories = ['All', 'AI & Automation', 'Cloud Computing', 'Content Marketing', 'Cybersecurity', 'Performance', 'Business Strategy'];

  return (
    <>
      <Head>
        <title>Blog | Zion Tech Group</title>
        <meta name="description" content="Stay updated with the latest insights on AI automation, cloud computing, and autonomous technology from our expert team." />
        <meta property="og:title" content="Blog" />
        <meta property="og:description" content="Latest insights on AI automation and autonomous technology." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Insights & Updates
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest insights on AI automation, cloud computing, and autonomous technology
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Article
            </h2>
            <p className="text-xl text-gray-600">
              Our most recent and impactful insights
            </p>
          </div>

          {blogPosts.filter(post => post.featured).map(post => (
            <Card key={post.id} className="hover-lift">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                    {post.category}
                  </span>
                  <div className="text-sm text-gray-500">
                    {post.date} • {post.readTime}
                  </div>
                </div>
                <CardTitle className="text-3xl text-gray-900">{post.title}</CardTitle>
                <CardDescription className="text-lg text-gray-600">
                  {post.excerpt}
                </CardDescription>
                <div className="flex items-center justify-between pt-4">
                  <span className="text-gray-600">By {post.author}</span>
                  <Button variant="outline">
                    Read Full Article
                  </Button>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map(category => (
              <button
                key={category}
                className="px-4 py-2 rounded-lg bg-white border border-gray-200 text-gray-700 hover:bg-blue-50 hover:border-blue-200 hover:text-blue-700 transition-all duration-200"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {blogPosts.filter(post => post.featured).map((post, index) => (
        <section key={index} className="py-20 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 bg-blue-500/20 text-blue-400 text-sm rounded-full border border-blue-500/30 mb-6">
                Featured Post
              </span>
            </div>
            
            <Card className="p-12 group hover:border-blue-400/30">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="text-center lg:text-left">
                  <span className={`inline-block px-3 py-1 bg-gray-800 text-sm rounded-full mb-4 ${post.color}`}>
                    {post.category}
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                    {post.title}
                  </h2>
                  <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 mb-8">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                        {post.author.charAt(0)}
                      </div>
                      <div>
                        <div className="text-white font-semibold">{post.author}</div>
                        <div className="text-gray-400 text-sm">{post.date}</div>
                      </div>
                    </div>
                    <div className="text-gray-400 text-sm">
                      {post.readTime}
                    </div>
                  </div>
                  
                  <Button
                    href="/blog/ai-automation-trends-2025"
                    size="lg"
                    className="group-hover:shadow-xl hover:shadow-cyan-500/30 transition-transform duration-200"
                  >
                    Read Full Article
                  </Button>
                </div>
                
                <div className="text-center">
                  <div className="text-8xl group-hover:shadow-lg hover:shadow-cyan-400/40 transition-transform duration-300">
                    {post.image}
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>
      ))}

      {/* Blog Posts Grid */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Latest Articles
            </h2>
            <p className="text-xl text-gray-600">
              Explore our complete collection of insights and updates
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.filter(post => !post.featured).map((post, index) => (
              <Card
                key={index}
                className="group hover:border-blue-400/30 overflow-hidden"
                style={{ animationDelay: `${(index * 0.1) + 0.2}s` }}
              >
                <div className="text-6xl mb-6 text-center group-hover:shadow-lg hover:shadow-cyan-400/40 transition-transform duration-300">
                  {post.image}
                </div>
                
                <div className="mb-4">
                  <span className={`inline-block px-3 py-1 bg-gray-800 text-sm rounded-full mb-3 ${post.color}`}>
                    {post.category}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-3 leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500">
                      {post.date} • By {post.author}
                    </div>
                    <Button variant="outline" size="sm">
                      Read More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Stay Updated
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Get the latest insights on AI automation and autonomous technology delivered to your inbox
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <Button variant="secondary" size="lg">
                Subscribe
              </Button>
            </div>
            <p className="text-blue-100 text-sm mt-3">
              No spam, unsubscribe at any time
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Learn More?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Explore our services and see how autonomous technology can transform your business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              variant="gradient"
              className="transform hover:scale-105 transition-transform duration-200"
            >
              <Link href="/services">
                Explore Services
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="transform hover:scale-105 transition-transform duration-200"
            >
              <Link href="/contact">
                Get in Touch
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
