import { useState } from "react";
import { ArrowRight, Calendar, User } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Posts", count: 12 },
    { id: "ai", name: "Artificial Intelligence", count: 5 },
    { id: "technology", name: "Technology", count: 4 },
    { id: "business", name: "Business", count: 3 }
  ];

  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in Business",
      excerpt: "Discover how artificial intelligence is transforming modern business operations and what it means for your company.",
      category: "ai",
      featured: true,
      author: "Dr. Sarah Chen",
      date: "2024-01-15",
      readTime: "5 min read",
      image: "/images/blog/ai-business.jpg"
    },
    {
      id: 2,
      title: "Cloud Migration Best Practices",
      excerpt: "Learn the essential steps and strategies for a successful cloud migration project.",
      category: "technology",
      featured: false,
      author: "Mike Rodriguez",
      date: "2024-01-10",
      readTime: "7 min read",
      image: "/images/blog/cloud-migration.jpg"
    },
    {
      id: 3,
      title: "Cybersecurity Trends 2024",
      excerpt: "Stay ahead of the latest cybersecurity threats and protection strategies for your organization.",
      category: "technology",
      featured: false,
      author: "Alex Thompson",
      date: "2024-01-05",
      readTime: "6 min read",
      image: "/images/blog/cybersecurity.jpg"
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <>
      <Helmet>
        <title>Blog - Zion Tech Group</title>
        <meta name="description" content="Insights, trends, and expertise from the Zion Tech Group team" />
      </Helmet>

      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Our Blog
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                Insights, trends, and expertise from the Zion Tech Group team
              </p>
            </div>
          </div>
        </section>

        {/* Search and Filter */}
        <section className="py-8 bg-white dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="w-full md:w-96">
                <input
                  type="text"
                  placeholder="Search blog posts..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                />
              </div>
              <div className="flex gap-2 flex-wrap">
                {categories.map(category => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                      selectedCategory === category.id
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                    }`}
                  >
                    {category.name} ({category.count})
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        {featuredPost && (
          <section className="py-16">
            <div className="max-w-7xl mx-auto px-4">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Featured Post</h2>
              <article className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg">
                <div className="h-64 bg-gradient-to-r from-blue-500 to-purple-600"></div>
                <div className="p-8">
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <Calendar className="w-4 h-4 mr-1" />
                    {new Date(featuredPost.date).toLocaleDateString()}
                    <span className="mx-2">•</span>
                    <User className="w-4 h-4 mr-1" />
                    {featuredPost.author}
                    <span className="mx-2">•</span>
                    {featuredPost.readTime}
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    {featuredPost.title}
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                    {featuredPost.excerpt}
                  </p>
                  <Link
                    to={`/blog/${featuredPost.id}`}
                    className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Read Full Article
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </article>
            </div>
          </section>
        )}

        {/* Blog Posts Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map(post => (
                <article key={post.id} className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-600"></div>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-2">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(post.date).toLocaleDateString()}
                      <span className="mx-2">•</span>
                      <User className="w-4 h-4 mr-1" />
                      {post.author}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {post.excerpt}
                    </p>
                    <Link
                      to={`/blog/${post.id}`}
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}