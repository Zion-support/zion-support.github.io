import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, User, Tag } from 'lucide-react';

export default function BlogPost() {
  const { id } = useParams();

  // Mock blog post data - in a real app, this would come from an API
  const blogPost = {
    id: id || '1',
    title: "The Future of AI in Business: A Comprehensive Guide",
    excerpt: "Discover how artificial intelligence is transforming business operations and creating new opportunities for growth and innovation across industries.",
    content: `
      <p class="mb-6 text-zion-slate-light leading-relaxed">
        Artificial Intelligence has emerged as one of the most transformative technologies of our time, 
        fundamentally changing how businesses operate, compete, and deliver value to their customers. 
        From automating routine tasks to providing deep insights from data, AI is reshaping the business landscape.
      </p>
      
      <h2 class="text-2xl font-bold text-white mb-4 mt-8">The Current State of AI in Business</h2>
      <p class="mb-6 text-zion-slate-light leading-relaxed">
        Today, AI is already deeply integrated into many business processes. Machine learning algorithms 
        power recommendation systems, natural language processing enables chatbots and virtual assistants, 
        and computer vision automates quality control in manufacturing. The technology has moved beyond 
        experimental phases to become a core component of modern business strategy.
      </p>
      
      <h2 class="text-2xl font-bold text-white mb-4 mt-8">Key Areas of AI Implementation</h2>
      <p class="mb-6 text-zion-slate-light leading-relaxed">
        <strong>Customer Service:</strong> AI-powered chatbots and virtual assistants provide 24/7 support, 
        handling routine inquiries and escalating complex issues to human agents. This not only improves 
        customer satisfaction but also reduces operational costs.
      </p>
      
      <p class="mb-6 text-zion-slate-light leading-relaxed">
        <strong>Data Analytics:</strong> AI algorithms can process vast amounts of data to identify patterns, 
        trends, and insights that would be impossible for humans to detect. This enables data-driven 
        decision making and predictive analytics.
      </p>
      
      <p class="mb-6 text-zion-slate-light leading-relaxed">
        <strong>Process Automation:</strong> Robotic Process Automation (RPA) combined with AI can automate 
        complex workflows, reducing errors and increasing efficiency across various business functions.
      </p>
      
      <h2 class="text-2xl font-bold text-white mb-4 mt-8">Challenges and Considerations</h2>
      <p class="mb-6 text-zion-slate-light leading-relaxed">
        While AI offers tremendous potential, businesses must navigate several challenges. Data quality 
        and privacy concerns, the need for skilled personnel, and ethical considerations around AI 
        decision-making are critical factors to address.
      </p>
      
      <h2 class="text-2xl font-bold text-white mb-4 mt-8">Looking Ahead</h2>
      <p class="mb-6 text-zion-slate-light leading-relaxed">
        The future of AI in business is incredibly promising. As technology continues to advance, 
        we can expect to see even more sophisticated applications, from autonomous decision-making 
        systems to AI that can understand and predict human behavior with unprecedented accuracy.
      </p>
      
      <p class="mb-6 text-zion-slate-light leading-relaxed">
        Businesses that embrace AI strategically and invest in the right infrastructure and talent 
        will be well-positioned to thrive in the AI-powered economy of the future.
      </p>
    `,
    author: {
      name: "Dr. Sarah Chen",
      avatar: "/images/avatar-placeholder.jpg",
      bio: "AI Research Director at Zion Tech Group"
    },
    publishedDate: "2024-01-15",
    readTime: "8 min read",
    category: "AI & Technology",
    tags: ["Artificial Intelligence", "Business Strategy", "Digital Transformation", "Machine Learning"],
    featuredImage: "/images/blog-ai-future.jpg"
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light pt-32 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back to Blog */}
        <div className="mb-8">
          <Link 
            to="/blog" 
            className="inline-flex items-center text-zion-cyan hover:text-zion-cyan-light transition-colors duration-300"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>
        </div>

        {/* Article Header */}
        <article className="max-w-4xl mx-auto">
          <header className="mb-12">
            {/* Category and Meta */}
            <div className="flex items-center gap-4 mb-6">
              <span className="px-3 py-1 bg-zion-cyan/20 text-zion-cyan text-sm font-medium rounded-full">
                {blogPost.category}
              </span>
              <div className="flex items-center gap-4 text-zion-slate-light text-sm">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {blogPost.publishedDate}
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {blogPost.readTime}
                </div>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              {blogPost.title}
            </h1>

            {/* Excerpt */}
            <p className="text-xl text-zion-slate-light mb-8 leading-relaxed">
              {blogPost.excerpt}
            </p>

            {/* Author Info */}
            <div className="flex items-center gap-4 p-6 bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-xl">
              <div className="w-16 h-16 bg-zion-cyan/20 rounded-full flex items-center justify-center">
                <span className="text-zion-cyan font-bold text-xl">Z</span>
              </div>
              <div>
                <h3 className="text-white font-semibold">{blogPost.author.name}</h3>
                <p className="text-zion-slate-light text-sm">{blogPost.author.bio}</p>
              </div>
            </div>
          </header>

          {/* Featured Image */}
          <div className="mb-12 aspect-video bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 rounded-xl flex items-center justify-center">
            <div className="text-zion-cyan text-6xl font-bold opacity-20">Z</div>
          </div>

          {/* Article Content */}
          <div className="prose prose-invert prose-lg max-w-none">
            <div 
              className="text-zion-slate-light leading-relaxed"
              dangerouslySetInnerHTML={{ __html: blogPost.content }}
            />
          </div>

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-zion-cyan/20">
            <h3 className="text-lg font-semibold text-white mb-4">Tags:</h3>
            <div className="flex flex-wrap gap-3">
              {blogPost.tags.map((tag, index) => (
                <span 
                  key={index}
                  className="px-3 py-2 bg-zion-slate-dark/50 border border-zion-cyan/20 text-zion-cyan text-sm rounded-lg hover:bg-zion-cyan/10 transition-colors duration-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </article>

        {/* Related Articles */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-xl overflow-hidden hover:border-zion-cyan/40 hover:shadow-xl hover:shadow-zion-cyan/20 transition-all duration-300"
              >
                <div className="aspect-video bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 flex items-center justify-center">
                  <div className="text-zion-cyan text-4xl font-bold opacity-20">Z</div>
                </div>
                <div className="p-6">
                  <span className="text-sm text-zion-cyan bg-zion-cyan/20 px-3 py-1 rounded-full">
                    AI & Technology
                  </span>
                  <h3 className="text-lg font-bold text-white mt-3 mb-2">
                    The Impact of Machine Learning on Modern Business
                  </h3>
                  <p className="text-zion-slate-light text-sm mb-4 line-clamp-3">
                    Explore how machine learning algorithms are revolutionizing business processes and decision-making.
                  </p>
                  <div className="flex items-center justify-between text-sm text-zion-slate-light">
                    <span>5 min read</span>
                    <span>Jan 10, 2024</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-20 text-center">
          <div className="bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Stay Updated</h3>
            <p className="text-zion-slate-light mb-6">
              Get the latest insights on AI, technology, and digital transformation delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-lg text-white placeholder-zion-slate-light focus:border-zion-cyan focus:outline-none transition-all duration-300"
              />
              <button className="px-6 py-3 bg-zion-cyan text-white font-medium rounded-lg hover:bg-zion-cyan/90 transition-all duration-300 transform hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}