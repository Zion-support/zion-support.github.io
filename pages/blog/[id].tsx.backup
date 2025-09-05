import * as React from 'react';
import { useRouter } from 'next/navigation';
import Layout from '../../components/Layout';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, Tag, Clock, Share2, BookOpen } from 'lucide-react';

const BlogPost = () => {
  const router = useRouter();
  const { id } = router.query || {};

  // Mock blog post data - in a real app, this would come from an API
  const blogPost = {
    id: 1,
    title: "The Future of AI in Business: Trends and Predictions for 2025",
    content: `
      <p>Artificial Intelligence is no longer a futuristic concept—it's a present reality that's transforming how businesses operate, compete, and deliver value to customers. As we move through 2025, we're witnessing unprecedented advancements in AI technology that are reshaping entire industries.</p>
      
      <h2>The Current State of AI in Business</h2>
      <p>Today's businesses are leveraging AI across multiple domains, from customer service automation to predictive analytics and process optimization. The integration of AI has become a critical differentiator for companies looking to maintain competitive advantage.</p>
      
      <h3>Key Areas of AI Implementation</h3>
      <ul>
        <li><strong>Customer Experience:</strong> AI-powered chatbots and virtual assistants are providing 24/7 customer support, while personalization engines deliver tailored experiences at scale.</li>
        <li><strong>Operational Efficiency:</strong> Machine learning algorithms are optimizing supply chains, predicting maintenance needs, and automating routine tasks.</li>
        <li><strong>Decision Making:</strong> Advanced analytics and AI-driven insights are enabling data-driven decision making across all business functions.</li>
        <li><strong>Product Development:</strong> AI is accelerating innovation cycles and enabling the creation of more intelligent, adaptive products.</li>
      </ul>
      
      <h2>Emerging Trends for 2025</h2>
      <p>Several key trends are emerging that will define the AI landscape in 2025 and beyond:</p>
      
      <h3>1. Generative AI Goes Mainstream</h3>
      <p>Generative AI technologies, including large language models and image generation tools, are becoming standard business tools. Companies are using these technologies for content creation, code generation, and creative problem-solving.</p>
      
      <h3>2. AI Ethics and Governance</h3>
      <p>As AI becomes more pervasive, businesses are prioritizing ethical AI practices and governance frameworks. This includes ensuring fairness, transparency, and accountability in AI systems.</p>
      
      <h3>3. Edge AI and Real-time Processing</h3>
      <p>The shift toward edge computing is enabling real-time AI processing, reducing latency and improving performance for applications that require immediate responses.</p>
      
      <h3>4. AI-Human Collaboration</h3>
      <p>Rather than replacing human workers, AI is increasingly being designed to augment human capabilities, creating more effective human-AI collaborative workflows.</p>
      
      <h2>Industry-Specific Applications</h2>
      <p>Different industries are adopting AI in unique ways that align with their specific challenges and opportunities:</p>
      
      <h3>Healthcare</h3>
      <p>AI is revolutionizing healthcare through diagnostic imaging, drug discovery, personalized medicine, and predictive analytics for patient outcomes.</p>
      
      <h3>Financial Services</h3>
      <p>Banks and financial institutions are using AI for fraud detection, algorithmic trading, credit scoring, and personalized financial advice.</p>
      
      <h3>Manufacturing</h3>
      <p>Smart manufacturing powered by AI is optimizing production processes, predicting equipment failures, and enabling mass customization.</p>
      
      <h3>Retail and E-commerce</h3>
      <p>AI is transforming retail through personalized recommendations, inventory optimization, dynamic pricing, and enhanced customer experiences.</p>
      
      <h2>Challenges and Considerations</h2>
      <p>While the potential of AI is immense, businesses must navigate several challenges:</p>
      
      <ul>
        <li><strong>Data Quality and Privacy:</strong> Ensuring high-quality data while maintaining privacy and security standards</li>
        <li><strong>Skills Gap:</strong> Finding and developing talent with the necessary AI expertise</li>
        <li><strong>Integration Complexity:</strong> Successfully integrating AI systems with existing business processes</li>
        <li><strong>Regulatory Compliance:</strong> Keeping up with evolving AI regulations and standards</li>
        <li><strong>ROI Measurement:</strong> Demonstrating clear return on investment for AI initiatives</li>
      </ul>
      
      <h2>Future Predictions</h2>
      <p>Looking ahead, we can expect to see:</p>
      
      <ul>
        <li>More sophisticated AI models that can understand and generate multimodal content</li>
        <li>Increased automation of complex business processes</li>
        <li>Greater emphasis on explainable AI and transparency</li>
        <li>New business models enabled by AI capabilities</li>
        <li>Enhanced human-AI collaboration tools and interfaces</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>The future of AI in business is bright, but success requires careful planning, ethical consideration, and a commitment to continuous learning and adaptation. Companies that embrace AI thoughtfully and strategically will be best positioned to thrive in the digital economy.</p>
      
      <p>As we continue to explore the possibilities of AI, it's clear that the businesses that will succeed are those that view AI not as a replacement for human intelligence, but as a powerful tool for augmenting human capabilities and creating new opportunities for innovation and growth.</p>
    `,
    author: "Dr. Sarah Chen",
    authorBio: "Dr. Sarah Chen is a leading AI researcher and consultant with over 15 years of experience in machine learning and artificial intelligence. She has worked with Fortune 500 companies to implement AI solutions and is a frequent speaker at international technology conferences.",
    authorImage: "/api/placeholder/100/100",
    date: "2025-01-15",
    readTime: "8 min read",
    category: "AI & Machine Learning",
    tags: ["Artificial Intelligence", "Machine Learning", "Business Strategy", "Technology Trends", "Digital Transformation"],
    featured: true
  };

  const relatedPosts = [
    {
      id: 2,
      title: "Cybersecurity Best Practices for Remote Work Environments",
      category: "Cybersecurity",
      readTime: "6 min read",
      date: "2025-01-12"
    },
    {
      id: 3,
      title: "Cloud Migration Strategies: A Complete Guide for Enterprises",
      category: "Cloud Computing",
      readTime: "10 min read",
      date: "2025-01-10"
    },
    {
      id: 4,
      title: "Micro SaaS: Building Profitable Niche Software Solutions",
      category: "SaaS Development",
      readTime: "7 min read",
      date: "2025-01-08"
    }
  ];

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <Layout 
      title={`${blogPost.title} - Zion Tech Group Blog`}
      description={blogPost.content.replace(/<[^>]*>/g, '').substring(0, 160)}
      keywords={blogPost.tags.join(', ')}
    >
      <div className="min-h-screen bg-gray-50">
        {/* Article Header */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Breadcrumb */}
              <nav className="mb-8">
                <Link href="/blog" className="text-blue-600 hover:text-blue-700 font-medium">
                  ← Back to Blog
                </Link>
              </nav>

              {/* Category and Featured Badge */}
              <div className="flex items-center space-x-4 mb-6">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                  {blogPost.category}
                </span>
                {blogPost.featured && (
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-semibold">
                    Featured
                  </span>
                )}
              </div>

              {/* Title */}
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                {blogPost.title}
              </h1>

              {/* Meta Information */}
              <div className="flex flex-wrap items-center space-x-6 text-gray-600 mb-8">
                <div className="flex items-center space-x-2">
                  <User className="w-5 h-5" />
                  <span>{blogPost.author}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-5 h-5" />
                  <span>{new Date(blogPost.date).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5" />
                  <span>{blogPost.readTime}</span>
                </div>
                <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700">
                  <Share2 className="w-5 h-5" />
                  <span>Share</span>
                </button>
              </div>

              {/* Featured Image */}
              <div className="w-full h-96 bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl mb-8 flex items-center justify-center">
                <span className="text-white text-2xl font-semibold">Featured Article Image</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg max-w-none">
                <div dangerouslySetInnerHTML={{ __html: blogPost.content }} />
              </div>

              {/* Tags */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {blogPost.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-gray-200 transition-colors duration-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Author Bio */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="flex items-start space-x-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">SC</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{blogPost.author}</h3>
                    <p className="text-gray-600 leading-relaxed">{blogPost.authorBio}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Posts */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Related Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedPosts.map((post, index) => (
                  <motion.article
                    key={post.id}
                    className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center space-x-2 mb-3">
                      <Tag className="w-4 h-4 text-blue-600" />
                      <span className="text-blue-600 text-sm font-semibold">{post.category}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{post.title}</h3>
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                    <Link
                      href={`/blog/${post.id}`}
                      className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-200"
                    >
                      <span>Read More</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </motion.article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16 bg-blue-900 text-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-4xl mx-auto text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-4">Enjoyed This Article?</h2>
              <p className="text-xl text-blue-200 mb-8">
                Subscribe to our newsletter for more insights on AI, technology, and digital transformation
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
                <button className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg font-semibold transition-colors duration-200">
                  Subscribe
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default BlogPost;