import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, Tag, Clock, ArrowLeft } from 'lucide-react';
import Layout from '../../../components/Layout';

// This would typically come from a CMS or API
const blogPosts = [
  {
    id: 1,
    title: "The Future of AI in Enterprise: 2025 Trends and Predictions",
    excerpt: "Explore the latest AI trends that are reshaping enterprise technology and how businesses can prepare for the next wave of innovation.",
    author: "Dr. Sarah Chen",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "AI & Machine Learning",
    featured: true,
    image: "/api/placeholder/600/400",
    tags: ["AI", "Enterprise", "Technology", "Innovation"]
  },
  {
    id: 2,
    title: "Machine Learning in Healthcare: Transforming Patient Care",
    excerpt: "Discover how machine learning is revolutionizing healthcare delivery and improving patient outcomes.",
    author: "Dr. Sarah Chen",
    date: "2024-01-10",
    readTime: "10 min read",
    category: "AI & Machine Learning",
    featured: false,
    image: "/api/placeholder/600/400",
    tags: ["AI", "Healthcare", "Machine Learning", "Innovation"]
  },
  {
    id: 3,
    title: "Natural Language Processing: Breaking Down Language Barriers",
    excerpt: "Learn how NLP is enabling better communication and understanding across different languages and cultures.",
    author: "Dr. Sarah Chen",
    date: "2024-01-05",
    readTime: "7 min read",
    category: "AI & Machine Learning",
    featured: false,
    image: "/api/placeholder/600/400",
    tags: ["AI", "NLP", "Language", "Technology"]
  }
];

const categories = {
  'ai-machine-learning': {
    name: 'AI & Machine Learning',
    description: 'Explore the latest developments in artificial intelligence and machine learning technologies.',
    posts: blogPosts
  },
  'cloud-computing': {
    name: 'Cloud Computing',
    description: 'Insights on cloud infrastructure, migration strategies, and best practices.',
    posts: []
  },
  'cybersecurity': {
    name: 'Cybersecurity',
    description: 'Stay updated on the latest security threats and defense strategies.',
    posts: []
  },
  'saas-development': {
    name: 'SaaS Development',
    description: 'Learn about building and scaling successful software as a service applications.',
    posts: []
  },
  'digital-transformation': {
    name: 'Digital Transformation',
    description: 'Guidance on modernizing business processes and technology infrastructure.',
    posts: []
  },
  'infrastructure': {
    name: 'Infrastructure',
    description: 'Best practices for managing and optimizing IT infrastructure.',
    posts: []
  }
};

export default function BlogCategory({ params }: { params: { category: string } }) {
  // Handle case where params might be undefined during build
  if (!params || !params.category) {
    return (
      <Layout title="Category Not Found - Zion Tech Group Blog">
        <div className="min-h-screen bg-white flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Category Not Found</h1>
            <p className="text-gray-600 mb-8">The blog category you're looking for doesn't exist.</p>
            <Link href="/blog" className="text-blue-600 hover:text-blue-700 font-medium">
              ← Back to Blog
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  const categoryKey = params.category.replace(/-/g, '-');
  const category = categories[categoryKey as keyof typeof categories];

  if (!category) {
    return (
      <Layout title="Category Not Found - Zion Tech Group Blog">
        <div className="min-h-screen bg-white flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Category Not Found</h1>
            <p className="text-gray-600 mb-8">The blog category you're looking for doesn't exist.</p>
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
      title={`${category.name} - Zion Tech Group Blog`}
      description={category.description}
      keywords={`${category.name.toLowerCase()}, technology blog, insights`}
    >
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto text-center"
            >
              <Link
                href="/blog"
                className="inline-flex items-center text-blue-300 hover:text-white mb-6 transition-colors duration-200"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Link>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                {category.name}
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                {category.description}
              </p>
            </motion.div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-16">
          {category.posts.length > 0 ? (
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {category.posts.map((post, index) => (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="aspect-w-16 aspect-h-9">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-48 object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center mb-3">
                        <Tag className="w-4 h-4 text-blue-600 mr-2" />
                        <span className="text-sm text-blue-600 font-medium">{post.category}</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                        <div className="flex items-center">
                          <User className="w-4 h-4 mr-1" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          <span>{new Date(post.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <Link
                        href={`/blog/${post.id}`}
                        className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    </div>
                  </motion.article>
                ))}
              </motion.div>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl mx-auto text-center"
            >
              <div className="bg-white rounded-lg shadow-lg p-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">No Posts Yet</h3>
                <p className="text-gray-600 mb-8">
                  We're working on creating amazing content for this category. Check back soon!
                </p>
                <Link
                  href="/blog"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to All Posts
                </Link>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </Layout>
  );
}