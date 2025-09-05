import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowLeft, Tag, Clock, Share2, BookOpen } from 'lucide-react';
import Layout from '../../components/Layout';

// This would typically come from a CMS or API
const blogPosts = {
  '1': {
    id: 1,
    title: "The Future of AI in Enterprise: 2025 Trends and Predictions",
    content: `
      <p>Artificial Intelligence is rapidly transforming the enterprise landscape, and 2025 promises to be a pivotal year for AI adoption across industries. As we stand at the threshold of this technological revolution, businesses must prepare for the next wave of AI innovation.</p>
      
      <h2>The Current State of Enterprise AI</h2>
      <p>Today's enterprises are already leveraging AI in various capacities, from customer service chatbots to predictive analytics. However, the landscape is evolving rapidly, with new technologies and approaches emerging at an unprecedented pace.</p>
      
      <h2>Key Trends Shaping 2025</h2>
      <h3>1. Autonomous AI Systems</h3>
      <p>We're moving beyond simple automation to truly autonomous AI systems that can make complex decisions with minimal human intervention. These systems will revolutionize operations across manufacturing, logistics, and customer service.</p>
      
      <h3>2. Edge AI Computing</h3>
      <p>The shift towards edge computing will accelerate, bringing AI processing closer to data sources. This trend will enable real-time decision-making and reduce latency in critical applications.</p>
      
      <h3>3. AI-Human Collaboration</h3>
      <p>Rather than replacing humans, AI will increasingly augment human capabilities, creating powerful human-AI collaborative workflows that enhance productivity and creativity.</p>
      
      <h2>Preparing Your Organization</h2>
      <p>To capitalize on these trends, organizations must focus on:</p>
      <ul>
        <li>Building robust data infrastructure</li>
        <li>Investing in AI talent and training</li>
        <li>Developing ethical AI frameworks</li>
        <li>Creating flexible AI integration strategies</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>The future of enterprise AI is bright, but success requires careful planning and strategic implementation. Organizations that start preparing now will be best positioned to thrive in the AI-driven economy of 2025.</p>
    `,
    author: "Dr. Sarah Chen",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "AI & Machine Learning",
    image: "/api/placeholder/800/400",
    tags: ["AI", "Enterprise", "Technology", "Innovation"],
    excerpt: "Explore the latest AI trends that are reshaping enterprise technology and how businesses can prepare for the next wave of innovation."
  },
  '2': {
    id: 2,
    title: "Cloud Migration Best Practices: A Complete Guide",
    content: `
      <p>Cloud migration has become a critical strategic initiative for organizations looking to modernize their infrastructure and improve operational efficiency. However, successful cloud migration requires careful planning and execution.</p>
      
      <h2>Understanding Cloud Migration</h2>
      <p>Cloud migration involves moving applications, data, and workloads from on-premises infrastructure to cloud environments. This process can be complex and requires a systematic approach to ensure success.</p>
      
      <h2>Migration Strategies</h2>
      <h3>1. Lift and Shift</h3>
      <p>This approach involves moving applications to the cloud with minimal changes. While quick to implement, it may not fully leverage cloud benefits.</p>
      
      <h3>2. Replatforming</h3>
      <p>Modifying applications to take advantage of cloud-native features while maintaining core functionality.</p>
      
      <h3>3. Refactoring</h3>
      <p>Completely rearchitecting applications to be cloud-native, offering maximum benefits but requiring significant investment.</p>
      
      <h2>Best Practices for Success</h2>
      <ul>
        <li>Conduct thorough assessment of current infrastructure</li>
        <li>Choose the right cloud provider and services</li>
        <li>Implement proper security measures</li>
        <li>Plan for data migration and backup</li>
        <li>Train staff on new cloud technologies</li>
        <li>Monitor and optimize post-migration</li>
      </ul>
      
      <h2>Common Challenges and Solutions</h2>
      <p>Organizations often face challenges such as data security concerns, compliance requirements, and skill gaps. Addressing these proactively is essential for migration success.</p>
      
      <h2>Conclusion</h2>
      <p>Successful cloud migration requires careful planning, the right strategy, and ongoing optimization. With proper preparation, organizations can achieve significant benefits from their cloud investments.</p>
    `,
    author: "Michael Rodriguez",
    date: "2024-01-12",
    readTime: "12 min read",
    category: "Cloud Computing",
    image: "/api/placeholder/800/400",
    tags: ["Cloud", "Migration", "AWS", "Azure"],
    excerpt: "Learn the essential strategies and considerations for successful cloud migration, including common pitfalls and how to avoid them."
  }
};

export default function BlogPost({ params }: { params: { id: string } }) {
  // Handle case where params might be undefined during build
  if (!params || !params.id) {
    return (
      <Layout title="Post Not Found - Zion Tech Group">
        <div className="min-h-screen bg-white flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Post Not Found</h1>
            <p className="text-gray-600 mb-8">The blog post you're looking for doesn't exist.</p>
            <Link href="/blog" className="text-blue-600 hover:text-blue-700 font-medium">
              ← Back to Blog
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  const post = blogPosts[params.id as keyof typeof blogPosts];

  if (!post) {
    return (
      <Layout title="Post Not Found - Zion Tech Group">
        <div className="min-h-screen bg-white flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Post Not Found</h1>
            <p className="text-gray-600 mb-8">The blog post you're looking for doesn't exist.</p>
            <Link href="/blog" className="text-blue-600 hover:text-blue-700 font-medium">
              ← Back to Blog
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout
      title={`${post.title} - Zion Tech Group Blog`}
      description={post.excerpt}
      keywords={post.tags.join(', ')}
    >
      <div className="min-h-screen bg-white">
        {/* Header */}
        <div className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Link
                href="/blog"
                className="inline-flex items-center text-blue-300 hover:text-white mb-6 transition-colors duration-200"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Link>
              
              <div className="flex items-center mb-4">
                <Tag className="w-4 h-4 text-blue-400 mr-2" />
                <span className="text-blue-400 font-medium">{post.category}</span>
              </div>
              
              <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                {post.title}
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-4xl">
                {post.excerpt}
              </p>
              
              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-300">
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
                <button className="flex items-center text-blue-300 hover:text-white transition-colors duration-200">
                  <Share2 className="w-4 h-4 mr-2" />
                  Share
                </button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Article Content */}
        <article className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="prose prose-lg max-w-none"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-64 md:h-96 object-cover rounded-lg mb-8"
              />
              
              <div
                dangerouslySetInnerHTML={{ __html: post.content }}
                className="prose-headings:text-gray-900 prose-p:text-gray-700 prose-li:text-gray-700 prose-strong:text-gray-900"
              />
            </motion.div>

            {/* Tags */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-12 pt-8 border-t border-gray-200"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-gray-200 transition-colors duration-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Author Bio */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-12 p-6 bg-gray-50 rounded-lg"
            >
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  {post.author.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{post.author}</h4>
                  <p className="text-gray-600">
                    Expert in {post.category} with extensive experience in enterprise technology solutions.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Related Posts */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-12"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Link
                  href="/blog/2"
                  className="block p-6 bg-white border border-gray-200 rounded-lg hover:shadow-lg transition-shadow duration-200"
                >
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Cloud Migration Best Practices: A Complete Guide
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Learn the essential strategies and considerations for successful cloud migration.
                  </p>
                </Link>
                <Link
                  href="/blog/3"
                  className="block p-6 bg-white border border-gray-200 rounded-lg hover:shadow-lg transition-shadow duration-200"
                >
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Cybersecurity in 2025: Emerging Threats and Defense Strategies
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Stay ahead of evolving cyber threats with our comprehensive analysis.
                  </p>
                </Link>
              </div>
            </motion.div>
          </div>
        </article>
      </div>
    </Layout>
  );
}