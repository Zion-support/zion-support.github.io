
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, User, ArrowLeft, Share2, BookOpen, Tag } from 'lucide-react';

const BlogPost = () => {
  const { slug } = useParams();
  
  // Mock blog post data - in a real app, this would come from an API or CMS
  const blogPost = {
    id: slug || '1',
    title: "The Future of AI in Enterprise Technology",
    content: `
      <p class="mb-6 text-lg text-zion-slate-light leading-relaxed">
        Artificial Intelligence is no longer a futuristic concept—it's here, and it's transforming how businesses operate, 
        compete, and deliver value to their customers. As we move deeper into 2024, the integration of AI into enterprise 
        technology has become not just a competitive advantage, but a necessity for survival in an increasingly digital world.
      </p>
      
      <h2 class="text-2xl font-bold text-zion-slate-dark mb-4 mt-8">The Current State of AI in Enterprise</h2>
      
      <p class="mb-6 text-lg text-zion-slate-light leading-relaxed">
        Today's enterprises are leveraging AI across multiple dimensions of their operations. From customer service chatbots 
        that provide 24/7 support to predictive analytics that forecast market trends, AI is becoming the backbone of 
        modern business intelligence.
      </p>
      
      <p class="mb-6 text-lg text-zion-slate-light leading-relaxed">
        Machine learning algorithms are analyzing vast amounts of data to identify patterns that humans might miss, 
        enabling businesses to make more informed decisions faster than ever before. Natural language processing is 
        transforming how companies interact with their customers and employees, making communication more efficient and effective.
      </p>
      
      <h2 class="text-2xl font-bold text-zion-slate-dark mb-4 mt-8">Key Areas of AI Implementation</h2>
      
      <h3 class="text-xl font-semibold text-zion-slate-dark mb-3">1. Customer Experience Enhancement</h3>
      <p class="mb-4 text-lg text-zion-slate-light leading-relaxed">
        AI-powered personalization is revolutionizing customer experiences. Companies are using machine learning to 
        analyze customer behavior, preferences, and purchase history to deliver tailored recommendations and services. 
        This level of personalization was unimaginable just a few years ago.
      </p>
      
      <h3 class="text-xl font-semibold text-zion-slate-dark mb-3">2. Operational Efficiency</h3>
      <p class="mb-4 text-lg text-zion-slate-light leading-relaxed">
        Automation through AI is streamlining business processes, reducing costs, and improving accuracy. From 
        automated invoice processing to intelligent supply chain management, AI is handling repetitive tasks 
        that previously required significant human resources.
      </p>
      
      <h3 class="text-xl font-semibold text-zion-slate-dark mb-3">3. Risk Management and Security</h3>
      <p class="mb-4 text-lg text-zion-slate-light leading-relaxed">
        AI is playing a crucial role in identifying and mitigating risks. Advanced threat detection systems can 
        analyze network traffic patterns to identify potential security breaches before they occur, while 
        predictive analytics can forecast market risks and help businesses prepare accordingly.
      </p>
      
      <h2 class="text-2xl font-bold text-zion-slate-dark mb-4 mt-8">Challenges and Considerations</h2>
      
      <p class="mb-6 text-lg text-zion-slate-light leading-relaxed">
        While the benefits of AI are substantial, implementation comes with its own set of challenges. Data quality 
        and privacy concerns remain paramount, as AI systems require vast amounts of high-quality data to function effectively. 
        Additionally, there's the ongoing challenge of ensuring AI systems remain transparent and accountable.
      </p>
      
      <p class="mb-6 text-lg text-zion-slate-light leading-relaxed">
        Organizations must also consider the ethical implications of AI deployment, ensuring that their systems 
        don't perpetuate biases or make decisions that could harm individuals or society at large.
      </p>
      
      <h2 class="text-2xl font-bold text-zion-slate-dark mb-4 mt-8">Looking Ahead: The Future of Enterprise AI</h2>
      
      <p class="mb-6 text-lg text-zion-slate-light leading-relaxed">
        As we look to the future, the integration of AI into enterprise technology will only accelerate. We're 
        moving toward a world where AI becomes an invisible, intelligent layer that enhances every aspect of 
        business operations.
      </p>
      
      <p class="mb-6 text-lg text-zion-slate-light leading-relaxed">
        The next generation of enterprise AI will likely focus on more sophisticated forms of automation, 
        including autonomous decision-making systems that can operate with minimal human oversight. We'll also 
        see the emergence of AI systems that can explain their reasoning, making them more trustworthy and 
        easier to integrate into critical business processes.
      </p>
      
      <h2 class="text-2xl font-bold text-zion-slate-dark mb-4 mt-8">Conclusion</h2>
      
      <p class="mb-6 text-lg text-zion-slate-light leading-relaxed">
        The future of AI in enterprise technology is bright, but it requires careful planning, ethical consideration, 
        and a commitment to continuous learning and adaptation. Organizations that successfully navigate this 
        transformation will find themselves well-positioned to thrive in an increasingly competitive and complex business landscape.
      </p>
      
      <p class="mb-6 text-lg text-zion-slate-light leading-relaxed">
        The key is to start small, learn from each implementation, and gradually scale up as confidence and 
        expertise grow. With the right approach, AI can become a powerful ally in the quest for business excellence 
        and innovation.
      </p>
    `,
    author: "Zion Tech Team",
    date: "2024-01-15",
    category: "AI & Machine Learning",
    readTime: "5 min read",
    tags: ["AI", "Enterprise", "Technology", "Innovation", "Digital Transformation"],
    image: "/images/blog/ai-enterprise.jpg"
  };

  const relatedPosts = [
    {
      id: 2,
      title: "Cybersecurity Trends for 2024",
      excerpt: "Stay ahead of emerging threats with our comprehensive analysis of cybersecurity trends and best practices.",
      category: "Cybersecurity",
      readTime: "7 min read"
    },
    {
      id: 3,
      title: "Cloud Migration Strategies for SMBs",
      excerpt: "Learn the best practices for migrating your small to medium business to the cloud efficiently and securely.",
      category: "Cloud Computing",
      readTime: "6 min read"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Navigation */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <Link 
            to="/blog" 
            className="inline-flex items-center gap-2 text-zion-purple hover:text-zion-cyan transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Article Header */}
          <header className="mb-12">
            <div className="flex items-center gap-4 text-sm text-zion-slate-light mb-4">
              <span className="bg-zion-purple text-white px-3 py-1 rounded-full text-xs font-medium">
                {blogPost.category}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {new Date(blogPost.date).toLocaleDateString()}
              </span>
              <span className="flex items-center gap-1">
                <BookOpen className="w-4 h-4" />
                {blogPost.readTime}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-zion-slate-dark mb-6 leading-tight">
              {blogPost.title}
            </h1>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center text-white font-bold text-lg">
                {blogPost.author.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <p className="font-medium text-zion-slate-dark">{blogPost.author}</p>
                <p className="text-sm text-zion-slate-light">Zion Tech Group</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 bg-zion-purple hover:bg-zion-purple/80 text-white px-4 py-2 rounded-lg transition-colors">
                <Share2 className="w-4 h-4" />
                Share Article
              </button>
            </div>
          </header>

          {/* Article Content */}
          <article className="prose prose-lg max-w-none mb-12">
            <div 
              className="bg-white rounded-lg p-8 shadow-lg"
              dangerouslySetInnerHTML={{ __html: blogPost.content }}
            />
          </article>

          {/* Tags */}
          <div className="mb-12">
            <h3 className="text-lg font-semibold text-zion-slate-dark mb-4">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {blogPost.tags.map((tag, index) => (
                <span 
                  key={index}
                  className="bg-zion-blue-light/20 text-zion-slate-dark px-3 py-1 rounded-full text-sm font-medium"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Related Posts */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-zion-slate-dark mb-6">Related Articles</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedPosts.map((post) => (
                <article key={post.id} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <span className="inline-block bg-zion-cyan/20 text-zion-cyan px-3 py-1 rounded-full text-xs font-medium mb-3">
                    {post.category}
                  </span>
                  <h4 className="text-lg font-bold text-zion-slate-dark mb-2 hover:text-zion-purple transition-colors">
                    <Link to={`/blog/${post.id}`}>{post.title}</Link>
                  </h4>
                  <p className="text-zion-slate-light mb-3 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-zion-slate-light">
                    <span>{post.readTime}</span>
                    <Link 
                      to={`/blog/${post.id}`}
                      className="text-zion-purple hover:text-zion-cyan transition-colors font-medium"
                    >
                      Read More →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="bg-zion-gradient rounded-lg p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
            <p className="text-zion-slate-light mb-6 max-w-2xl mx-auto">
              Get the latest tech insights and industry updates delivered directly to your inbox. 
              Join thousands of professionals staying ahead of the curve.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-zion-slate-dark placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan"
              />
              <button className="bg-zion-purple hover:bg-zion-purple/80 px-6 py-3 rounded-lg font-medium transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
