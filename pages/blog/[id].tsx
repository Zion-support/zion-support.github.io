import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowLeft, Tag, Clock, Share2 } from 'lucide-react';
import MainLayout from '../../components/layout/MainLayout';

// Mock blog data - in a real app, this would come from a CMS or API
const blogPosts = {
  'ai-transformation-business': {
    title: 'How AI is Transforming Business Operations in 2024',
    content: `
      <p>Artificial Intelligence has become the cornerstone of modern business transformation. In 2024, we're witnessing unprecedented changes in how organizations operate, compete, and deliver value to their customers.</p>
      
      <h2>The Current AI Landscape</h2>
      <p>Today's AI technologies are more accessible and powerful than ever before. From machine learning algorithms to natural language processing, businesses are leveraging AI to:</p>
      
      <ul>
        <li>Automate repetitive tasks and processes</li>
        <li>Enhance customer experience through personalization</li>
        <li>Improve decision-making with data-driven insights</li>
        <li>Optimize supply chain and operations</li>
        <li>Develop innovative products and services</li>
      </ul>
      
      <h2>Key AI Technologies Driving Change</h2>
      
      <h3>Machine Learning and Predictive Analytics</h3>
      <p>Machine learning algorithms are enabling businesses to predict customer behavior, optimize pricing strategies, and identify potential risks before they materialize. This predictive capability is revolutionizing industries from healthcare to finance.</p>
      
      <h3>Natural Language Processing (NLP)</h3>
      <p>NLP technologies are transforming customer service through chatbots, virtual assistants, and automated content generation. These tools are making businesses more responsive and efficient in their customer interactions.</p>
      
      <h3>Computer Vision</h3>
      <p>Computer vision is being used in quality control, inventory management, and security systems. Retailers are using it for cashier-less stores, while manufacturers are implementing it for defect detection.</p>
      
      <h2>Real-World Applications</h2>
      
      <h3>Healthcare</h3>
      <p>AI is revolutionizing healthcare with diagnostic tools, drug discovery, and personalized treatment plans. Machine learning models can analyze medical images with accuracy that often exceeds human radiologists.</p>
      
      <h3>Finance</h3>
      <p>Financial institutions are using AI for fraud detection, algorithmic trading, and credit scoring. These applications are making financial services more secure and accessible.</p>
      
      <h3>Manufacturing</h3>
      <p>Smart factories are using AI for predictive maintenance, quality control, and supply chain optimization. This is leading to increased efficiency and reduced downtime.</p>
      
      <h2>Challenges and Considerations</h2>
      
      <p>While AI offers tremendous opportunities, businesses must also consider:</p>
      
      <ul>
        <li>Data privacy and security concerns</li>
        <li>Ethical implications of AI decisions</li>
        <li>Need for skilled AI professionals</li>
        <li>Integration with existing systems</li>
        <li>Regulatory compliance requirements</li>
      </ul>
      
      <h2>Getting Started with AI Implementation</h2>
      
      <p>For businesses looking to implement AI solutions:</p>
      
      <ol>
        <li>Identify specific use cases where AI can add value</li>
        <li>Ensure you have quality data to train AI models</li>
        <li>Start with pilot projects to test and learn</li>
        <li>Invest in training your team on AI technologies</li>
        <li>Partner with experienced AI solution providers</li>
      </ol>
      
      <h2>The Future of AI in Business</h2>
      
      <p>As we look ahead, AI will continue to evolve and become even more integrated into business operations. The companies that successfully adopt and adapt to these technologies will have a significant competitive advantage.</p>
      
      <p>At Zion Tech Group, we're committed to helping businesses navigate this AI transformation journey. Our team of experts can help you identify opportunities, develop strategies, and implement solutions that drive real business value.</p>
    `,
    author: 'Zion Tech Team',
    date: '2024-01-15',
    category: 'AI & Technology',
    readTime: '5 min read',
    featured: true
  },
  'micro-saas-trends': {
    title: 'The Rise of Micro SaaS: Small Solutions, Big Impact',
    content: `
      <p>Micro SaaS applications are revolutionizing the software industry by offering focused, specialized solutions that address specific business needs. These small but powerful applications are changing how businesses approach software adoption and digital transformation.</p>
      
      <h2>What is Micro SaaS?</h2>
      <p>Micro SaaS refers to small, focused software-as-a-service applications that solve specific problems for niche markets. Unlike traditional enterprise software, these applications are typically:</p>
      
      <ul>
        <li>Built by small teams or individual developers</li>
        <li>Focused on solving one specific problem well</li>
        <li>Offered at lower price points</li>
        <li>Quick to implement and use</li>
        <li>Highly specialized for specific industries or use cases</li>
      </ul>
      
      <h2>Why Micro SaaS is Gaining Traction</h2>
      
      <h3>Cost-Effectiveness</h3>
      <p>Micro SaaS applications typically cost much less than enterprise solutions, making them accessible to small and medium-sized businesses that previously couldn't afford specialized software.</p>
      
      <h3>Ease of Implementation</h3>
      <p>These applications are designed to be plug-and-play, requiring minimal setup and configuration. This reduces the time and resources needed for implementation.</p>
      
      <h3>Specialized Functionality</h3>
      <p>By focusing on specific problems, micro SaaS applications often provide better functionality than general-purpose software for their target use cases.</p>
      
      <h2>Popular Micro SaaS Categories</h2>
      
      <h3>Marketing Tools</h3>
      <p>Email marketing automation, social media scheduling, and lead generation tools are popular micro SaaS categories.</p>
      
      <h3>Productivity Tools</h3>
      <p>Time tracking, project management, and collaboration tools help teams work more efficiently.</p>
      
      <h3>Analytics and Reporting</h3>
      <p>Specialized analytics tools for specific platforms or industries provide insights that general analytics tools might miss.</p>
      
      <h2>Benefits for Businesses</h2>
      
      <p>Micro SaaS applications offer several advantages:</p>
      
      <ul>
        <li>Lower total cost of ownership</li>
        <li>Faster time to value</li>
        <li>Better user experience</li>
        <li>Regular updates and improvements</li>
        <li>Direct access to developers for support</li>
      </ul>
      
      <h2>Challenges and Considerations</h2>
      
      <p>While micro SaaS offers many benefits, businesses should consider:</p>
      
      <ul>
        <li>Integration with existing systems</li>
        <li>Data security and compliance</li>
        <li>Vendor reliability and support</li>
        <li>Scalability as the business grows</li>
        <li>Managing multiple small subscriptions</li>
      </ul>
      
      <h2>The Future of Micro SaaS</h2>
      
      <p>The micro SaaS trend is expected to continue growing as more developers and entrepreneurs recognize the opportunity to build focused solutions for specific markets. This trend is also being supported by:</p>
      
      <ul>
        <li>Cloud infrastructure becoming more accessible</li>
        <li>No-code and low-code development platforms</li>
        <li>API-first development approaches</li>
        <li>Growing demand for specialized solutions</li>
      </ul>
      
      <p>At Zion Tech Group, we specialize in developing custom micro SaaS solutions that address specific business challenges. Our team can help you identify opportunities and build applications that provide real value to your customers.</p>
    `,
    author: 'Sarah Johnson',
    date: '2024-01-10',
    category: 'Micro SaaS',
    readTime: '4 min read'
  }
};

export default function BlogPost() {
  const router = useRouter();
  const { id } = router.query;

  if (!id || typeof id !== 'string') {
    return (
      <MainLayout title="Blog Post Not Found">
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Post Not Found</h1>
            <p className="text-gray-600 mb-8">The blog post you're looking for doesn't exist.</p>
            <Link href="/blog" className="text-blue-600 hover:text-blue-700 font-semibold">
              ← Back to Blog
            </Link>
          </div>
        </div>
      </MainLayout>
    );
  }

  const post = blogPosts[id as keyof typeof blogPosts];

  if (!post) {
    return (
      <MainLayout title="Blog Post Not Found">
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Post Not Found</h1>
            <p className="text-gray-600 mb-8">The blog post you're looking for doesn't exist.</p>
            <Link href="/blog" className="text-blue-600 hover:text-blue-700 font-semibold">
              ← Back to Blog
            </Link>
          </div>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout
      title={`${post.title} - Zion Tech Group Blog`}
      description={post.content.replace(/<[^>]*>/g, '').substring(0, 160)}
      keywords={`${post.category.toLowerCase()}, blog, zion tech group`}
    >
      <div className="min-h-screen bg-gray-50">
        {/* Article Header */}
        <section className="bg-white border-b border-gray-200 py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Link
                href="/blog"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold mb-6"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Link>
              
              <div className="flex items-center mb-4">
                <Tag className="w-4 h-4 text-blue-600 mr-2" />
                <span className="text-blue-600 font-semibold">{post.category}</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {post.title}
              </h1>
              
              <div className="flex flex-wrap items-center justify-between mb-8">
                <div className="flex items-center space-x-6 text-gray-600">
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-2" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <button className="flex items-center text-gray-600 hover:text-blue-600 transition-colors">
                  <Share2 className="w-4 h-4 mr-2" />
                  Share
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </section>

        {/* Related Articles */}
        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Object.entries(blogPosts)
                .filter(([key]) => key !== id)
                .slice(0, 3)
                .map(([key, relatedPost]) => (
                  <Link
                    key={key}
                    href={`/blog/${key}`}
                    className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                  >
                    <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                      <div className="text-white text-center">
                        <div className="text-4xl mb-2">📊</div>
                        <p className="text-sm">{relatedPost.category}</p>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                        {relatedPost.title}
                      </h3>
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <span>{relatedPost.author}</span>
                        <span>{relatedPost.readTime}</span>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}