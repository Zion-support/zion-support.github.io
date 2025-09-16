import React from 'react';
// import Link from 'next/link'; // Replaced with regular anchor tags for React compatibility

const ComprehensiveBlogShowcase = () => {
  const featuredPosts = [
    {
      id: 1,
      title: "The Future of AI: 2025-2030 Predictions and Business Impact",
      excerpt: "Explore the revolutionary AI technologies that will transform industries over the next 5 years, from quantum computing to neural interfaces.",
      author: "Dr. Sarah Chen",
      authorTitle: "Chief AI Scientist",
      publishDate: "2025-01-15",
      readTime: "12 min read",
      category: "AI Trends",
      image: "/images/blog/ai-future-2025.jpg",
      featured: true,
      tags: ["AI", "Future Technology", "Business Transformation", "Predictions"]
    },
    {
      id: 2,
      title: "How Fortune 500 Companies Achieved 1000% ROI with AI Automation",
      excerpt: "Real case studies and strategies from leading enterprises that transformed their operations using advanced AI automation solutions.",
      author: "Michael Rodriguez",
      authorTitle: "Enterprise AI Consultant",
      publishDate: "2025-01-12",
      readTime: "8 min read",
      category: "Case Studies",
      image: "/images/blog/fortune-500-ai-roi.jpg",
      featured: true,
      tags: ["ROI", "Enterprise AI", "Automation", "Case Studies"]
    },
    {
      id: 3,
      title: "Quantum-Neural Fusion: The Next Breakthrough in AI Technology",
      excerpt: "Discover how quantum computing and neural networks are merging to create unprecedented AI capabilities and what it means for your business.",
      author: "Dr. Lisa Thompson",
      authorTitle: "Quantum AI Researcher",
      publishDate: "2025-01-10",
      readTime: "15 min read",
      category: "Technology",
      image: "/images/blog/quantum-neural-fusion.jpg",
      featured: true,
      tags: ["Quantum Computing", "Neural Networks", "AI Technology", "Innovation"]
    }
  ];

  const recentPosts = [
    {
      id: 4,
      title: "Building Scalable AI Infrastructure: A Complete Guide",
      excerpt: "Learn how to design and implement AI infrastructure that can scale with your business growth and evolving needs.",
      author: "David Kim",
      authorTitle: "AI Infrastructure Architect",
      publishDate: "2025-01-08",
      readTime: "10 min read",
      category: "Infrastructure",
      image: "/images/blog/ai-infrastructure.jpg",
      tags: ["Infrastructure", "Scalability", "Cloud Computing", "AI Architecture"]
    },
    {
      id: 5,
      title: "AI Ethics and Governance: Building Responsible AI Systems",
      excerpt: "Essential guidelines for implementing ethical AI practices and governance frameworks in your organization.",
      author: "Jennifer Walsh",
      authorTitle: "AI Ethics Specialist",
      publishDate: "2025-01-05",
      readTime: "7 min read",
      category: "Ethics",
      image: "/images/blog/ai-ethics-governance.jpg",
      tags: ["AI Ethics", "Governance", "Responsible AI", "Compliance"]
    },
    {
      id: 6,
      title: "Machine Learning Model Deployment: Best Practices and Pitfalls",
      excerpt: "A comprehensive guide to deploying ML models in production environments, including common challenges and solutions.",
      author: "Robert Martinez",
      authorTitle: "ML Engineering Lead",
      publishDate: "2025-01-03",
      readTime: "9 min read",
      category: "Machine Learning",
      image: "/images/blog/ml-deployment.jpg",
      tags: ["Machine Learning", "Deployment", "Production", "MLOps"]
    },
    {
      id: 7,
      title: "The Business Case for AI: Calculating ROI and Measuring Success",
      excerpt: "Learn how to build a compelling business case for AI investments and measure their success effectively.",
      author: "Sarah Johnson",
      authorTitle: "AI Business Strategist",
      publishDate: "2025-01-01",
      readTime: "6 min read",
      category: "Business Strategy",
      image: "/images/blog/ai-business-case.jpg",
      tags: ["Business Strategy", "ROI", "AI Investment", "Success Metrics"]
    },
    {
      id: 8,
      title: "Natural Language Processing: Transforming Customer Experience",
      excerpt: "Explore how NLP technologies are revolutionizing customer service, support, and engagement across industries.",
      author: "Alex Chen",
      authorTitle: "NLP Specialist",
      publishDate: "2024-12-28",
      readTime: "8 min read",
      category: "NLP",
      image: "/images/blog/nlp-customer-experience.jpg",
      tags: ["NLP", "Customer Experience", "Chatbots", "Language Processing"]
    },
    {
      id: 9,
      title: "Computer Vision in Manufacturing: Quality Control and Automation",
      excerpt: "Discover how computer vision is transforming manufacturing processes, from quality control to predictive maintenance.",
      author: "Maria Garcia",
      authorTitle: "Computer Vision Engineer",
      publishDate: "2024-12-25",
      readTime: "11 min read",
      category: "Computer Vision",
      image: "/images/blog/computer-vision-manufacturing.jpg",
      tags: ["Computer Vision", "Manufacturing", "Quality Control", "Automation"]
    }
  ];

  const categories = [
    { name: "AI Trends", count: 15, color: "purple" },
    { name: "Case Studies", count: 12, color: "blue" },
    { name: "Technology", count: 18, color: "green" },
    { name: "Business Strategy", count: 10, color: "orange" },
    { name: "Machine Learning", count: 14, color: "pink" },
    { name: "Infrastructure", count: 8, color: "indigo" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-blue-100 text-blue-800 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">📚 INSIGHTS & EXPERTISE</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            AI Insights & Industry Expertise
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Stay ahead with our comprehensive collection of AI insights, case studies, 
            and expert analysis from industry leaders and practitioners.
          </p>
        </div>

        {/* Featured Posts */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Featured Articles</h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative h-64 bg-gradient-to-r from-purple-600 to-blue-600">
                  <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-white bg-opacity-90 text-purple-600 px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h4 className="text-xl font-bold text-white mb-2 line-clamp-2">{post.title}</h4>
                    <div className="flex items-center text-white text-sm opacity-90">
                      <span>{post.readTime}</span>
                      <span className="mx-2">•</span>
                      <span>{post.publishDate}</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                        <span className="text-purple-600 font-bold text-sm">
                          {post.author.split(' ').map(n => n[0]).join(', ')}
                        </span>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-900">{post.author}</div>
                        <div className="text-xs text-gray-500">{post.authorTitle}</div>
                      </div>
                    </div>
                    <a 
                      href={`/blog/${post.id}`}
                      className="text-purple-600 hover:text-purple-800 font-medium text-sm"
                    >
                      Read More →
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Recent Posts Grid */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-gray-900">Latest Articles</h3>
            <a 
              href="/blog"
              className="text-purple-600 hover:text-purple-800 font-medium"
            >
              View All Articles →
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-500 relative">
                  <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                  <div className="absolute top-3 left-3">
                    <span className="bg-white bg-opacity-90 text-purple-600 px-2 py-1 rounded text-xs font-medium">
                      {post.category}
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-3 right-3">
                    <h4 className="text-lg font-bold text-white mb-1 line-clamp-2">{post.title}</h4>
                    <div className="flex items-center text-white text-xs opacity-90">
                      <span>{post.readTime}</span>
                      <span className="mx-1">•</span>
                      <span>{post.publishDate}</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-5">
                  <p className="text-gray-600 mb-3 line-clamp-2 text-sm">{post.excerpt}</p>
                  
                  <div className="flex flex-wrap gap-1 mb-3">
                    {post.tags.slice(0, 2).map((tag) => (
                      <span key={tag} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-2">
                        <span className="text-blue-600 font-bold text-xs">
                          {post.author.split(' ').map(n => n[0]).join(', ')}
                        </span>
                      </div>
                      <span className="text-xs text-gray-600">{post.author}</span>
                    </div>
                    <a 
                      href={`/blog/${post.id}`}
                      className="text-purple-600 hover:text-purple-800 text-xs font-medium"
                    >
                      Read →
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Categories */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Explore by Category</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category) => (
              <a
                key={category.name}
                href={`/blog/category/${category.name.toLowerCase().replace(' ', '-')}`}
                className={`bg-white rounded-xl p-4 text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border-l-4 ${
                  category.color === 'purple' ? 'border-purple-500' :
                  category.color === 'blue' ? 'border-blue-500' :
                  category.color === 'green' ? 'border-green-500' :
                  category.color === 'orange' ? 'border-orange-500' :
                  category.color === 'pink' ? 'border-pink-500' :
                  'border-indigo-500'
                }`}
              >
                <div className="text-2xl mb-2">
                  {category.name === 'AI Trends' ? '🚀' :
                   category.name === 'Case Studies' ? '📊' :
                   category.name === 'Technology' ? '⚡' :
                   category.name === 'Business Strategy' ? '💼' :
                   category.name === 'Machine Learning' ? '🤖' :
                   '🏗️'}
                </div>
                <div className="font-semibold text-gray-900 mb-1">{category.name}</div>
                <div className="text-sm text-gray-500">{category.count} articles</div>
              </a>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Stay Updated with AI Insights</h3>
          <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
            Get the latest AI trends, case studies, and expert insights delivered to your inbox weekly. 
            Join 10,000+ professionals staying ahead of the curve.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500"
            />
            <button className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
          <p className="text-sm opacity-75 mt-3">
            No spam. Unsubscribe anytime. We respect your privacy.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ComprehensiveBlogShowcase;