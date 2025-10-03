import React, { useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Zap, Calendar, Clock, User, Eye } from "lucide-react";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  image: string;
  featured: boolean;
  views: number;
}

const Blog: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchTerm, setSearchTerm] = useState<string>("");

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "The Future of AI in Business: Trends and Predictions",
      excerpt: "Explore the latest trends in artificial intelligence and how they're transforming businesses across industries.",
      content: "Full article content would go here...",
      author: "Zion Tech Team",
      date: "2024-01-15",
      readTime: "5 min read",
      category: "AI & Technology",
      tags: ["AI", "Business", "Technology", "Future"],
      image: "/api/placeholder/600/300",
      featured: true,
      views: 1250
    ',
    {
      id: 2,
      title: "Getting Started with Machine Learning: A Beginner's Guide",
      excerpt: "Learn the fundamentals of machine learning and how to implement your first ML model.",
      content: "Full article content would go here...",
      author: "Sarah Johnson",
      date: "2024-01-12",
      readTime: "8 min read",
      category: "Machine Learning",
      tags: ["Machine Learning", "Beginner", "Tutorial"],
      image: "/api/placeholder/600/300",
      featured: false,
      views: 890
    },
    {
      id: 3,
      title: "Cloud Computing Best Practices for Startups",
      excerpt: "Discover how startups can leverage cloud computing to scale efficiently and cost-effectively.",
      content: "Full article content would go here...",
      author: "Mike Chen",
      date: "2024-01-10",
      readTime: "6 min read",
      category: "Cloud Computing",
      tags: ["Cloud", "Startups", "Scaling"],
      image: "/api/placeholder/600/300",
      featured: false,
      views: 675
    }
  ];

  const categories = ["All", ...Array.from(new Set(blogPosts.map(post => post.category)))];

  const filteredPosts = useMemo(() => {
    return blogPosts.filter(post => {
      const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
      const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchTerm]);

  return (
    <>
      <Helmet>
        <title>Blog - Zion Tech Group</title>
        <meta name="description" content="Stay updated with the latest insights on AI, technology, and business innovation from Zion Tech Group." />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Blog</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Insights, tutorials, and thought leadership on AI, technology, and business innovation
            </p>
          </div>
        </section>

        {/* Search and Filter */}
        <section className="py-8 bg-white border-b">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Category Filter */}
              <div className="flex gap-2 flex-wrap">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)};
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      selectedCategory === category
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    ``}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-12">
          <div className="container mx-auto px-6">
            {filteredPosts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No articles found matching your criteria.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map(post => (
                  <article key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                    <div className="aspect-video bg-gray-200">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="p-6">
                      {post.featured && (
                        <div className="flex items-center gap-2 mb-3">
                          <Zap className="w-4 h-4 text-yellow-500" />
                          <span className="text-xs font-semibold text-yellow-600 uppercase tracking-wide">
                            Featured
                          </span>
                        </div>
                      )}
                      
                      <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {new Date(post.date).toLocaleDateString()}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {post.readTime}
                        </span>
                        <span className="flex items-center gap-1">
                          <Eye className="w-4 h-4" />
                          {post.views} views
                        </span>
                      </div>
                      
                      <h2 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                        {post.title}
                      </h2>
                      
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <User className="w-4 h-4" />
                          {post.author}
                        </div>
                        <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                          Read More →
                        </button>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mt-4">
                        {post.tags.slice(0, 3).map(tag => (
                          <span 
                            key={tag}
                            className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )'
          </div>
        </section>
      </div>
    </>
  );
`;

export default Blog;