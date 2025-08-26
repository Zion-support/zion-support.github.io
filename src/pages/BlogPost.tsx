
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  User, 
  Clock, 
  ArrowLeft,
  Tag,
  Share2,
  BookOpen,
  MessageCircle,
  Heart,
  Eye
} from "lucide-react";

export default function BlogPost() {
  const { id } = useParams();
  
  // Mock blog post data - in a real app, this would come from an API
  const blogPost = {
    id: id || "1",
    title: "The Future of AI in Business: 2024 Trends and Predictions",
    excerpt: "Discover how artificial intelligence is reshaping business operations and what to expect in the coming year.",
    content: `
      <p class="mb-6 text-lg text-zion-slate-light leading-relaxed">
        Artificial Intelligence has evolved from a futuristic concept to a fundamental business tool that's transforming industries across the globe. As we move through 2024, the pace of AI adoption is accelerating, bringing both opportunities and challenges for businesses of all sizes.
      </p>
      
      <h2 class="text-2xl font-bold text-white mb-4 mt-8">The Current State of AI in Business</h2>
      <p class="mb-6 text-zion-slate-light leading-relaxed">
        Today, AI is no longer just about automation—it's about intelligent decision-making, predictive analytics, and creating personalized customer experiences. Companies are leveraging AI to gain competitive advantages, optimize operations, and unlock new revenue streams.
      </p>
      
      <h3 class="text-xl font-semibold text-white mb-3 mt-6">Key Trends Shaping AI Adoption</h3>
      <ul class="list-disc list-inside mb-6 text-zion-slate-light space-y-2">
        <li><strong>Democratization of AI:</strong> Cloud-based AI services are making advanced capabilities accessible to small and medium businesses</li>
        <li><strong>AI-Powered Analytics:</strong> Real-time insights and predictive modeling are becoming standard business practices</li>
        <li><strong>Conversational AI:</strong> Chatbots and virtual assistants are improving customer service and engagement</li>
        <li><strong>AI in Cybersecurity:</strong> Machine learning is enhancing threat detection and response capabilities</li>
      </ul>
      
      <h2 class="text-2xl font-bold text-white mb-4 mt-8">Predictions for 2024 and Beyond</h2>
      <p class="mb-6 text-zion-slate-light leading-relaxed">
        Looking ahead, we can expect several developments that will further accelerate AI adoption in business environments. These predictions are based on current trends, technological advances, and market dynamics.
      </p>
      
      <h3 class="text-xl font-semibold text-white mb-3 mt-6">1. Increased Focus on AI Ethics and Governance</h3>
      <p class="mb-6 text-zion-slate-light leading-relaxed">
        As AI becomes more pervasive, businesses will need to establish clear guidelines for responsible AI use. This includes addressing bias, ensuring transparency, and maintaining human oversight in critical decision-making processes.
      </p>
      
      <h3 class="text-xl font-semibold text-white mb-3 mt-6">2. Rise of AI-Augmented Workforces</h3>
      <p class="mb-6 text-zion-slate-light leading-relaxed">
        Rather than replacing humans, AI will increasingly augment human capabilities. We'll see more collaborative workflows where AI handles routine tasks while humans focus on creative problem-solving and strategic thinking.
      </p>
      
      <h3 class="text-xl font-semibold text-white mb-3 mt-6">3. Hyper-Personalization at Scale</h3>
      <p class="mb-6 text-zion-slate-light leading-relaxed">
        AI will enable businesses to deliver highly personalized experiences to individual customers at scale. This goes beyond basic recommendations to include customized products, services, and communication strategies.
      </p>
      
      <h2 class="text-2xl font-bold text-white mb-4 mt-8">Implementation Strategies for Businesses</h2>
      <p class="mb-6 text-zion-slate-light leading-relaxed">
        Successfully implementing AI requires careful planning and a strategic approach. Here are key considerations for businesses looking to adopt AI technologies.
      </p>
      
      <h3 class="text-xl font-semibold text-white mb-3 mt-6">Start with Clear Objectives</h3>
      <p class="mb-6 text-zion-slate-light leading-relaxed">
        Before diving into AI implementation, clearly define what you want to achieve. Whether it's improving customer satisfaction, reducing operational costs, or gaining market insights, having specific goals will guide your AI strategy.
      </p>
      
      <h3 class="text-xl font-semibold text-white mb-3 mt-6">Invest in Data Quality</h3>
      <p class="mb-6 text-zion-slate-light leading-relaxed">
        AI systems are only as good as the data they're trained on. Ensure you have clean, well-organized data and establish processes for ongoing data management and quality control.
      </p>
      
      <h3 class="text-xl font-semibold text-white mb-3 mt-6">Build Internal AI Capabilities</h3>
      <p class="mb-6 text-zion-slate-light leading-relaxed">
        While external AI services can provide quick wins, building internal expertise will be crucial for long-term success. Consider training existing staff and hiring AI specialists to develop custom solutions.
      </p>
      
      <h2 class="text-2xl font-bold text-white mb-4 mt-8">Challenges and Considerations</h2>
      <p class="mb-6 text-zion-slate-light leading-relaxed">
        Despite the tremendous potential of AI, businesses face several challenges in implementation and adoption.
      </p>
      
      <h3 class="text-xl font-semibold text-white mb-3 mt-6">Data Privacy and Security</h3>
      <p class="mb-6 text-zion-slate-light leading-relaxed">
        As AI systems process increasing amounts of data, concerns about privacy and security become paramount. Businesses must implement robust security measures and ensure compliance with relevant regulations.
      </p>
      
      <h3 class="text-xl font-semibold text-white mb-3 mt-6">Change Management</h3>
      <p class="mb-6 text-zion-slate-light leading-relaxed">
        AI adoption often requires significant changes to business processes and workflows. Effective change management strategies are essential to ensure smooth transitions and employee buy-in.
      </p>
      
      <h3 class="text-xl font-semibold text-white mb-3 mt-6">Cost and ROI</h3>
      <p class="mb-6 text-zion-slate-light leading-relaxed">
        AI implementation can be expensive, and the return on investment may not be immediate. Businesses need to carefully evaluate costs and benefits, considering both short-term and long-term impacts.
      </p>
      
      <h2 class="text-2xl font-bold text-white mb-4 mt-8">Looking Ahead</h2>
      <p class="mb-6 text-zion-slate-light leading-relaxed">
        The future of AI in business is bright, but success will depend on how well organizations adapt to this rapidly evolving landscape. Companies that embrace AI strategically and responsibly will be best positioned to thrive in the digital economy.
      </p>
      
      <p class="mb-6 text-zion-slate-light leading-relaxed">
        As we continue through 2024, we can expect to see even more innovative AI applications emerge. The key is to stay informed, be strategic in your approach, and always keep your business objectives and customer needs at the center of your AI initiatives.
      </p>
    `,
    author: "Kleber",
    authorAvatar: "K",
    date: "2024-01-15",
    readTime: "5 min read",
    category: "AI & Machine Learning",
    tags: ["AI", "Business", "Technology", "Trends", "Digital Transformation", "Innovation"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&h=600",
    views: "2.4k",
    likes: 156,
    comments: 23
  };

  const relatedPosts = [
    {
      id: "2",
      title: "Cybersecurity Best Practices for Small Businesses",
      excerpt: "Essential security measures that every small business should implement to protect against cyber threats.",
      category: "Cybersecurity",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=400&h=200"
    },
    {
      id: "3",
      title: "Cloud Migration Strategies: A Complete Guide",
      excerpt: "Step-by-step approach to migrating your business to the cloud while minimizing downtime and risks.",
      category: "Cloud & DevOps",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=400&h=200"
    }
  ];

  return (
    <div className="min-h-screen bg-zion-blue text-white">
      {/* Back Navigation */}
      <section className="py-6 bg-zion-blue-dark">
        <div className="container mx-auto px-4">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-zion-slate-light hover:text-zion-cyan transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
            Back to Blog
          </Link>
        </div>
      </section>

      {/* Article Header */}
      <section className="py-16 bg-zion-blue">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Category and Date */}
            <div className="flex items-center gap-4 mb-6">
              <span className="px-4 py-2 bg-zion-purple/80 text-white text-sm rounded-full">
                {blogPost.category}
              </span>
              <div className="flex items-center gap-4 text-zion-slate-light text-sm">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {new Date(blogPost.date).toLocaleDateString()}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {blogPost.readTime}
                </div>
              </div>
            </div>

            {/* Title */}
            <motion.h1 
              className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {blogPost.title}
            </motion.h1>

            {/* Excerpt */}
            <motion.p 
              className="text-xl text-zion-slate-light mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {blogPost.excerpt}
            </motion.p>

            {/* Author and Stats */}
            <motion.div 
              className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-8 border-b border-zion-purple/30"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-zion-purple/80 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {blogPost.authorAvatar}
                </div>
                <div>
                  <p className="text-white font-medium">{blogPost.author}</p>
                  <p className="text-zion-slate-light text-sm">Zion Tech Group</p>
                </div>
              </div>
              
              <div className="flex items-center gap-6 text-zion-slate-light text-sm">
                <div className="flex items-center gap-1">
                  <Eye className="h-4 w-4" />
                  {blogPost.views}
                </div>
                <div className="flex items-center gap-1">
                  <Heart className="h-4 w-4" />
                  {blogPost.likes}
                </div>
                <div className="flex items-center gap-1">
                  <MessageCircle className="h-4 w-4" />
                  {blogPost.comments}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 bg-zion-blue-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Main Content */}
              <motion.div 
                className="lg:col-span-3"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                {/* Featured Image */}
                <div className="mb-8 rounded-lg overflow-hidden">
                  <img
                    src={blogPost.image}
                    alt={blogPost.title}
                    className="w-full h-auto"
                  />
                </div>

                {/* Article Body */}
                <div 
                  className="prose prose-invert prose-lg max-w-none"
                  dangerouslySetInnerHTML={{ __html: blogPost.content }}
                />

                {/* Tags */}
                <div className="mt-12 pt-8 border-t border-zion-purple/30">
                  <h3 className="text-lg font-semibold text-white mb-4">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {blogPost.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-2 bg-zion-purple/20 text-zion-cyan text-sm rounded-lg border border-zion-purple/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Share and Actions */}
                <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <span className="text-zion-slate-light">Share:</span>
                    <button className="p-2 bg-zion-purple/20 rounded-lg hover:bg-zion-purple/40 transition-colors">
                      <Share2 className="h-5 w-5 text-zion-cyan" />
                    </button>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <button className="flex items-center gap-2 px-4 py-2 bg-zion-purple/20 border border-zion-purple/30 rounded-lg hover:bg-zion-purple/40 transition-colors">
                      <Heart className="h-5 w-5 text-zion-cyan" />
                      Like
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 bg-zion-purple/20 border border-zion-purple/30 rounded-lg hover:bg-zion-purple/40 transition-colors">
                      <MessageCircle className="h-5 w-5 text-zion-cyan" />
                      Comment
                    </button>
                  </div>
                </div>
              </motion.div>

              {/* Sidebar */}
              <motion.div 
                className="lg:col-span-1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                {/* Author Info */}
                <div className="bg-zion-blue-light/10 border border-zion-purple/20 rounded-lg p-6 mb-8">
                  <h3 className="text-lg font-semibold text-white mb-4">About the Author</h3>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-zion-purple/80 rounded-full flex items-center justify-center text-white font-bold">
                      {blogPost.authorAvatar}
                    </div>
                    <div>
                      <p className="text-white font-medium">{blogPost.author}</p>
                      <p className="text-zion-slate-light text-sm">CEO & Founder</p>
                    </div>
                  </div>
                  <p className="text-zion-slate-light text-sm">
                    Technology visionary with 15+ years of experience in AI, cybersecurity, and digital transformation.
                  </p>
                </div>

                {/* Reading Time */}
                <div className="bg-zion-blue-light/10 border border-zion-purple/20 rounded-lg p-6 mb-8">
                  <div className="flex items-center gap-3">
                    <BookOpen className="h-6 w-6 text-zion-cyan" />
                    <div>
                      <p className="text-white font-medium">Reading Time</p>
                      <p className="text-zion-slate-light text-sm">{blogPost.readTime}</p>
                    </div>
                  </div>
                </div>

                {/* Related Posts */}
                <div className="bg-zion-blue-light/10 border border-zion-purple/20 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-white mb-4">Related Articles</h3>
                  <div className="space-y-4">
                    {relatedPosts.map((post) => (
                      <Link
                        key={post.id}
                        to={`/blog/${post.id}`}
                        className="block group"
                      >
                        <div className="aspect-video rounded-lg overflow-hidden mb-3">
                          <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <span className="text-xs text-zion-cyan bg-zion-purple/20 px-2 py-1 rounded">
                          {post.category}
                        </span>
                        <h4 className="text-sm font-medium text-white mt-2 group-hover:text-zion-cyan transition-colors">
                          {post.title}
                        </h4>
                      </Link>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-zion-purple to-zion-purple-light">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Implement AI in Your Business?
            </h2>
            <p className="text-zion-slate-light text-xl mb-8 max-w-2xl mx-auto">
              Let's discuss how our AI solutions can transform your operations and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-zion-purple px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                Get Free Consultation
              </Link>
              <Link
                to="/services"
                className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                Explore AI Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
