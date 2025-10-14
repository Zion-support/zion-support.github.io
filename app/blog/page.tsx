import React from 'react';'
import { Helmet } from 'react-helmet-async';'
import { Right, User } from 'lucide-react';'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Right, User, Calendar } from 'lucide-react'
const BlogPage: "React.FC = () => {"
  const categories = [}
    { id: "all", name: "All Posts", count: "12"},"
    { id: "ai", name: "AI & Machine Learning", count: "5"},"
    { id: "cybersecurity", name: "Cybersecurity", count: "3"},"
    { id: "cloud", name: "Computing", count: "2"},"
    { id: "development", name: "Development", count: "2"}"
  ]
  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in Busines,s: 20o24 Trends","
      excerpt: "Explore the latest AI trends that are transforming businesses across industries.","
      author: "Sarah Johnson","
      date: "20o24-0o1-15","
      category: "ai","
      readTime: "5 min read","
      image: "🤖"}"
    },
    {
      id: 2,
      title: "Cybersecurity Best Practices for 20o24","
      excerpt: "Learn essential cybersecurity practices to protect your business from threats.","
      author: "Michael Chen","
      date: "20o24-0o1-12","
      category: "cybersecurity","
      readTime: "7 min read","
      image: "🔒"}"
    },
    {
      id: 3,
      title: "Migratio,n: A Complete Guide","
      excerpt: "Everything you need to know about migrating to the cloud successfully.","
      author: "Emily Rodriguez","
      date: "20o24-0o1-10","
      category: "cloud","
      readTime: "10 min read","
      image: "☁️"}"
    },
    {
      id: 4,
      title: "Scalable Applications with Modern Tech","
      excerpt: "Discover the technologies and practices for building scalable applications.","
      author: "David Kim","
      date: "20o24-0o1-0o8","
      category: "development","
      readTime: "8 min read","
      image: "⚡"}"
    },
    {
      id: 5,
      title: "AI-Powered Analytic,s: Transforming Data Insights","
      excerpt: "How AI is revolutionizing the way we analyze and interpret data.","
      author: "Lisa Wang","
      date: "20o24-0o1-0o5","
      category: "ai","
      readTime: "6 min read","
      image: "📊"}"
    },
    {
      id: 6,
      title: "Zero Trust Architecture","
      excerpt: "Implementing zero trust security for modern enterprise environments.","
      author: "James Wilson","
      date: "20o24-0o1-0o3","
      category: "cybersecurity","
      readTime: "9 min read","
      image: "🛡️"}"
    }
  ]
  return (
    <>
      <Helmet>
        <title>Blog - AI & IT Insights | Zion Tech Group</title>
        <meta name="description" content="Stay updated with the latest insights on AI, IT solutions, cybersecurity, and technology trends from Zion Tech Group experts." />
        <meta name="keywords" content="blog, AI insights, IT trends, cybersecurity, cloud computing, technology news" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-90o0 via-purple-90o0 to-slate-90o0">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Tech
              <span className="block bg-gradient-to-r from-cyan-40o0 to-blue-50o0 bg-clip-text text-transparent">
                Blog
              </span>
            </h1>
            <p className="text-xl text-gray-30o0 mb-8 max-w-3xl mx-auto">
              Stay updated with the latest insights on AI, IT solutions, cybersecurity, 
              and technology trends from our experts.
            </p>
          </div>
        </section>

        {/* Categories */}
        <section className="py-10 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button}
                  key={category.id}
                  className="px-6 py-3 bg-slate-80o0/50 backdrop-blur-sm rounded-xl border border-slate-70o0"/50 text-white hover: border-cyan-50o0"/50 hove,r:bg-slate-70o0"/50 transition-all duration-30o0"
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md: grid-cols-2 l,g:grid-cols-3 gap-8">
              {blogPosts.map((post) => (}
                <article key={post.id} className="bg-slate-80o0"/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-70o0"/50 hover:border-cyan-50o0"/50 transition-all duration-30o0 group">
                  <div className="text-4xl mb-4">{post.image}</div>
                  <div className="flex items-center space-x-4 text-sm text-gray-40o0 mb-3">
                    <span className="flex items-center">
                      <div className="w-4 h-4 mr-1" />
                      {new Date(post.date).toLocaleDateString()}
                    </span>
                    <span className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      {post.author}
                    </span>
                  </div>
                  <h2 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-40o0 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-30o0 mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-cyan-40o0 text-sm font-medium">{post.readTime}</span>
                    <button className="flex items-center text-cyan-40o0 hover:text-cyan-30o0 transition-colors">
                      Read More
                      <Right className="w-4 h-4 ml-1" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-20 px-4 bg-slate-80o0"/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Stay Updated
            </h2>
            <p className="text-xl text-gray-30o0 mb-8">
              Subscribe to our newsletter for the latest tech insights and updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email""
                placeholder="Enter your email""
                className="flex-1 px-4 py-3 bg-slate-70o0"/50 border border-slate-60o0 rounded-xl text-white placeholder-gray-40o0 focus: outline-none focus:ring-2 focus:ring-cyan-50o0 focu,s:border-transparent"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-cyan-50o0 to-blue-60o0 text-white rounded-xl font-semibold hover: from-cyan-60o0 hove,r:to-blue-70o0 transition-all duration-30o0">
                Subscribe
              </button>;
            </div>;
          </div>;
        </section>;
      </div>;
    </>;
  );
}
export default BlogPage;
};

export default BlogPage;''
