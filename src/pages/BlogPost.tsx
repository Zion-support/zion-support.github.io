import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Calendar,
  User,
  Clock,
  Tag,
  ArrowLeft,
  ArrowRight,
  Share2,
  Bookmark,
  Heart,
  MessageCircle,
  Eye,
  TrendingUp,
  Brain,
  Cloud,
  Shield,
  Zap,
  Cpu,
  Network,
  BookOpen
} from "lucide-react";
import { SEO } from "../components/SEO";

export default function BlogPost() {
  const { slug } = useParams();
  
  // Mock blog post data - in a real app, this would come from an API
  const blogPost = {
    id: slug,
    title: 'The Future of AI-Powered Business Intelligence in 2024',
    excerpt: 'Discover how artificial intelligence is revolutionizing business intelligence and decision-making processes across industries.',
    content: `
      <p class="mb-6 text-lg text-gray-300 leading-relaxed">
        Artificial Intelligence has fundamentally transformed how businesses approach data analysis and decision-making. 
        In 2024, we're witnessing an unprecedented acceleration in AI-powered business intelligence capabilities that 
        are reshaping entire industries.
      </p>

      <h2 class="text-2xl font-bold text-white mb-4 mt-8">The Evolution of Business Intelligence</h2>
      <p class="mb-6 text-gray-300 leading-relaxed">
        Traditional business intelligence relied heavily on historical data analysis and manual reporting processes. 
        Today, AI-powered BI systems can process real-time data streams, identify patterns invisible to human analysts, 
        and provide predictive insights that drive proactive decision-making.
      </p>

      <h2 class="text-2xl font-bold text-white mb-4 mt-8">Key Trends Shaping AI-Powered BI</h2>
      
      <h3 class="text-xl font-semibold text-cyan-400 mb-3 mt-6">1. Natural Language Processing (NLP)</h3>
      <p class="mb-4 text-gray-300 leading-relaxed">
        Modern BI platforms now understand natural language queries, allowing business users to ask questions 
        in plain English and receive instant insights. This democratizes data access across organizations, 
        reducing dependency on data scientists for routine queries.
      </p>

      <h3 class="text-xl font-semibold text-cyan-400 mb-3 mt-6">2. Predictive Analytics</h3>
      <p class="mb-4 text-gray-300 leading-relaxed">
        AI algorithms can now forecast trends, identify potential risks, and suggest optimal courses of action 
        based on historical patterns and current market conditions. This predictive capability is revolutionizing 
        strategic planning and risk management.
      </p>

      <h3 class="text-xl font-semibold text-cyan-400 mb-3 mt-6">3. Automated Insights Generation</h3>
      <p class="mb-4 text-gray-300 leading-relaxed">
        Instead of manually creating reports, AI systems automatically identify significant changes, anomalies, 
        and opportunities in your data, delivering actionable insights directly to decision-makers.
      </p>

      <h2 class="text-2xl font-bold text-white mb-4 mt-8">Real-World Applications</h2>
      
      <h3 class="text-xl font-semibold text-cyan-400 mb-3 mt-6">Retail and E-commerce</h3>
      <p class="mb-4 text-gray-300 leading-relaxed">
        AI-powered BI systems help retailers optimize inventory management, personalize customer experiences, 
        and predict demand patterns with remarkable accuracy. Companies like Amazon and Walmart have seen 
        significant improvements in operational efficiency and customer satisfaction.
      </p>

      <h3 class="text-xl font-semibold text-cyan-400 mb-3 mt-6">Financial Services</h3>
      <p class="mb-4 text-gray-300 leading-relaxed">
        Banks and financial institutions use AI BI for fraud detection, credit risk assessment, and 
        investment portfolio optimization. The real-time processing capabilities enable immediate 
        response to market changes and regulatory requirements.
      </p>

      <h3 class="text-xl font-semibold text-cyan-400 mb-3 mt-6">Healthcare</h3>
      <p class="mb-4 text-gray-300 leading-relaxed">
        Healthcare organizations leverage AI BI to improve patient outcomes, optimize resource allocation, 
        and identify potential health risks before they become critical. This has led to more personalized 
        and effective treatment plans.
      </p>

      <h2 class="text-2xl font-bold text-white mb-4 mt-8">The Technology Behind AI-Powered BI</h2>
      
      <h3 class="text-xl font-semibold text-cyan-400 mb-3 mt-6">Machine Learning Algorithms</h3>
      <p class="mb-4 text-gray-300 leading-relaxed">
        Advanced machine learning algorithms form the backbone of modern AI BI systems. These include:
      </p>
      <ul class="list-disc list-inside mb-6 text-gray-300 space-y-2">
        <li>Deep learning networks for complex pattern recognition</li>
        <li>Reinforcement learning for optimization problems</li>
        <li>Ensemble methods for improved accuracy</li>
        <li>Transfer learning for faster implementation</li>
      </ul>

      <h3 class="text-xl font-semibold text-cyan-400 mb-3 mt-6">Cloud Computing Infrastructure</h3>
      <p class="mb-4 text-gray-300 leading-relaxed">
        The scalability and flexibility of cloud computing enable AI BI systems to process massive datasets 
        and provide real-time insights. Cloud platforms offer the computational power needed for complex 
        AI algorithms while maintaining cost-effectiveness.
      </p>

      <h2 class="text-2xl font-bold text-white mb-4 mt-8">Challenges and Considerations</h2>
      
      <h3 class="text-xl font-semibold text-cyan-400 mb-3 mt-6">Data Quality and Governance</h3>
      <p class="mb-4 text-gray-300 leading-relaxed">
        The effectiveness of AI BI systems depends heavily on data quality. Organizations must implement 
        robust data governance frameworks to ensure accuracy, consistency, and security of their data assets.
      </p>

      <h3 class="text-xl font-semibold text-cyan-400 mb-3 mt-6">Ethical AI and Bias</h3>
      <p class="mb-4 text-gray-300 leading-relaxed">
        As AI systems become more influential in business decisions, addressing bias and ensuring ethical 
        AI practices becomes crucial. Organizations must implement fairness checks and transparency measures 
        to maintain trust and compliance.
      </p>

      <h2 class="text-2xl font-bold text-white mb-4 mt-8">Future Outlook</h2>
      <p class="mb-6 text-gray-300 leading-relaxed">
        The future of AI-powered business intelligence looks incredibly promising. We can expect to see:
      </p>
      <ul class="list-disc list-inside mb-6 text-gray-300 space-y-2">
        <li>More intuitive and conversational interfaces</li>
        <li>Enhanced real-time processing capabilities</li>
        <li>Integration with emerging technologies like IoT and blockchain</li>
        <li>Greater automation of routine analytical tasks</li>
        <li>Improved explainability and transparency</li>
      </ul>

      <h2 class="text-2xl font-bold text-white mb-4 mt-8">Conclusion</h2>
      <p class="mb-6 text-gray-300 leading-relaxed">
        AI-powered business intelligence represents a paradigm shift in how organizations approach data analysis 
        and decision-making. As we move forward, businesses that successfully integrate these technologies will 
        gain significant competitive advantages in their respective markets.
      </p>
      
      <p class="mb-6 text-gray-300 leading-relaxed">
        The key to success lies in understanding that AI BI is not just a technology upgrade—it's a fundamental 
        transformation of business processes that requires careful planning, skilled implementation, and ongoing 
        optimization.
      </p>
    `,
    author: 'Dr. Sarah Chen',
    authorAvatar: '/avatars/sarah-chen.jpg',
    publishDate: '2025-01-15',
    readTime: '8 min read',
    category: 'AI & Machine Learning',
    tags: ['AI', 'Business Intelligence', '2024 Trends', 'Machine Learning'],
    image: '/blog/ai-business-intelligence-2024.jpg',
    featured: false,
    views: 15420,
    likes: 892
  };

  const relatedPosts = [
    {
      id: '2',
      title: 'Revolutionizing Supply Chains with AI-Powered Optimization',
      excerpt: 'Learn how AI Supply Chain Optimization is helping businesses predict demand, optimize inventory, and reduce costs.',
      author: 'Marcus Rodriguez',
      publishDate: '2025-01-18',
      readTime: '12 min read',
      category: 'AI & Machine Learning',
      image: '/blog/ai-supply-chain-optimization.jpg'
    },
    {
      id: '3',
      title: 'AI Content Marketing Suite: The Complete Guide to Automated Content Creation',
      excerpt: 'Explore how AI is revolutionizing content marketing with automated creation, optimization, and distribution.',
      author: 'Lisa Thompson',
      publishDate: '2025-01-16',
      readTime: '11 min read',
      category: 'AI & Machine Learning',
      image: '/blog/ai-content-marketing-suite.jpg'
    },
    {
      id: '4',
      title: 'Implementing Zero Trust Security Architecture: A Complete Guide',
      excerpt: 'Learn the essential steps to implement a zero trust security model that protects your organization.',
      author: 'David Kim',
      publishDate: '2025-01-12',
      readTime: '12 min read',
      category: 'Cybersecurity',
      image: '/blog/zero-trust-security-guide.jpg'
    }
  ];

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getCategoryIcon = (categoryName: string) => {
    const categoryIcons: { [key: string]: any } = {
      'AI & Machine Learning': Brain,
      'Cloud & DevOps': Cloud,
      'Cybersecurity': Shield,
      'Business Intelligence': TrendingUp,
      'Micro SaaS': Cpu,
      'Industry Insights': TrendingUp,
      'Case Studies': BookOpen,
      'Technology Trends': Zap
    };
    return categoryIcons[categoryName] || TrendingUp;
  };

  const getCategoryColor = (categoryName: string) => {
    const categoryColors: { [key: string]: string } = {
      'AI & Machine Learning': 'from-blue-500 to-cyan-500',
      'Cloud & DevOps': 'from-green-500 to-emerald-500',
      'Cybersecurity': 'from-red-500 to-pink-500',
      'Business Intelligence': 'from-purple-500 to-indigo-500',
      'Micro SaaS': 'from-orange-500 to-yellow-500',
      'Industry Insights': 'from-teal-500 to-cyan-500',
      'Case Studies': 'from-pink-500 to-rose-500',
      'Technology Trends': 'from-indigo-500 to-purple-500'
    };
    return categoryColors[categoryName] || 'from-gray-500 to-gray-600';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title={`${blogPost.title} - Zion Tech Group Blog`}
        description={blogPost.excerpt}
      />
      
      {/* Header */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link
              to="/blog"
              className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors mb-8"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Blog
            </Link>
            
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center space-x-4 mb-6">
                <span className={`px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r ${getCategoryColor(blogPost.category)} text-white`}>
                  {blogPost.category}
                </span>
                <span className="text-gray-400 text-sm">
                  {formatDate(blogPost.publishDate)}
                </span>
                <span className="text-gray-400 text-sm">
                  {blogPost.readTime}
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                {blogPost.title}
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                {blogPost.excerpt}
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-white text-lg font-bold mr-4">
                    {blogPost.author.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <p className="text-white font-medium">{blogPost.author}</p>
                    <p className="text-gray-400 text-sm">Senior AI Researcher</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <button className="flex items-center text-gray-400 hover:text-cyan-400 transition-colors">
                    <Share2 className="w-5 h-5 mr-2" />
                    Share
                  </button>
                  <button className="flex items-center text-gray-400 hover:text-cyan-400 transition-colors">
                    <Bookmark className="w-5 h-5 mr-2" />
                    Save
                  </button>
                  <button className="flex items-center text-gray-400 hover:text-cyan-400 transition-colors">
                    <Heart className="w-5 h-5 mr-2" />
                    {blogPost.likes}
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="prose prose-invert prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: blogPost.content }}
            />
            
            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-slate-700/50">
              <h3 className="text-lg font-semibold text-white mb-4">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {blogPost.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-slate-800/50 text-gray-300 rounded-full text-sm hover:bg-cyan-500/20 hover:text-cyan-400 transition-colors cursor-pointer"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-16 bg-slate-800/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Related Articles</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Continue exploring our latest insights and innovations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedPosts.map((post, index) => {
              const IconComponent = getCategoryIcon(post.category);
              const categoryColor = getCategoryColor(post.category);
              
              return (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-slate-800/50 rounded-2xl overflow-hidden border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 group"
                >
                  <div className="relative h-48 bg-gradient-to-br from-slate-700 to-slate-800">
                    <div className={`absolute inset-0 bg-gradient-to-br ${categoryColor} opacity-20`}></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <IconComponent className="w-16 h-16 text-white/50" />
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${categoryColor} text-white`}>
                        {post.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                      <div className="flex items-center space-x-4">
                        <span className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {formatDate(post.publishDate)}
                        </span>
                        <span className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {post.readTime}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3">
                          {post.author.split(' ').map(n => n[0]).join('')}
                        </div>
                        <span className="text-gray-300 text-sm">{post.author}</span>
                      </div>
                      <Link
                        to={`/blog/${post.id}`}
                        className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}