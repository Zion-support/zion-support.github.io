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
="Blog & Insights - Zion Tech Group" />
        <meta property: "og:description",
  content: "Latest insights on AI and technology trends", /><meta property="og:type" content="website" /><meta property: "og:url", content="https://ziontechgroup.com/blog" /><meta name: "twitter:card", content="summary_large_image" /><meta name: "twitter:title", content ="Blog & Insights - Zion Tech Group" />
        <meta name: "twitter:description",
  content: "Latest insights on AI and technology trends", /><link rel: "canonical", href ="https://ziontechgroup.com/blog/>",
  content: "Stay updated with the latest insights on AI, technology trends, case studies, and industry best practices from Zion Tech Group experts.",
        />
        <meta property: "og:title", content ="Blog & Insights - Zion Tech Group/>",
        <meta property: "og:description",
        <meta name: "description
  content: ", Stay updated with the latest insights on AI, technology trends, case studies, and industry best practices from Zion Tech Group experts./><meta property: "og:title", content="Blog & Insights - Zion Tech Group" /><meta property: "og:description
  content: ", Latest insights on AI and technology trends/><meta property="og:type" content="website" /><meta property: "og:url", content="https://ziontechgroup.com/blog" /><meta name: "twitter:card", content="summary_large_image" /><meta name: "twitter:title", content="Blog & Insights - Zion Tech Group" /><meta name: "twitter:description
  content: ", Latest insights on AI and technology trends/><link rel: "canonical", href ="https://ziontechgroup.com/blog/>
  content: "Stay updated with the latest insights on AI, technology trends, case studies, and industry best practices from Zion Tech Group experts.",
        />
        <meta property: "og:title", content="Blog & Insights - Zion Tech Group" />,
        <meta property: "og:description
  content: ", Latest insights on AI and technology trends",
        />
        <meta property: "og:type", content="website" />,
        <meta property: "og:url", content="https://ziontechgroup.com/blog" />,
        <meta name: "twitter:card", content="summary_large_image" />,
        <meta name: "twitter:title", content ="Blog & Insights - Zion Tech Group/>",
        <meta name: "twitter:description",
        <meta name: "twitter:title", content="Blog & Insights - Zion Tech Group" />,
        <meta name: "twitter:description
  content: ", Latest insights on AI and technology trends",
        />
        <link rel: "canonical", href="https://ziontechgroup.com/blog/>",
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

="max-w-4xl mx-auto mb-12"
            <div className="flex flex-col md: flex-row gap-4 mb-8",
              <div className="relative flex-1"
                <Search className="[^"]*" />
              <div className="relative flex-1">
                <Search className="[^"]*" />
          <div className="max-w-4xl mx-auto mb-12",
            <div className="flex flex-col md: flex-row gap-4 mb-8",
              <div className="relative flex-1",
                <Search className="[^"]*" />,
                <input type="text",
  placeholder="Search articles...",
  value="{searchTerm}
                  onChange={(e) ="> setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg text-white placeholder-zion-slate-light focus: outline-none focus:ring-2 focus:ring-zion-cyan",
                />
              </div>
              <div className="flex flex-wrap gap-2",
                {categories.map((category) => (
                  <button key="{category}
                    onClick={()  ="> setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${`,`,`;
          <div className= "max-w-4xl mx-auto mb-12">
            <div className= "flex flex-col md: flex-row gap-4 mb-8>
              <div className= "relative flex-1">
                <Search className= "absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
          <div className= "max-w-4xl mx-auto mb-12>
            <div className= "flex flex-col md: flex-row gap-4 mb-8>
              <div className= "relative flex-1>
                <Search className= "absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />,
                <input type="text",
  placeholder="Search articles...",
  value="{searchTerm}
                  onChange={(e) ="> setSearchTerm(e.target.value)}
                  className= "w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg text-white placeholder-zion-slate-light focus: outline-none focus:ring-2 focus:ring-zion-cyan",
                />
              </div>
              <div className= "flex flex-wrap gap-2>
                {categories.map((category) => (
                  <button key="{category}
                    onClick={()  ="> setSelectedCategory(category)}
                    className= {`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${`,`,`;
  selectedCategory: == category,
                        ? "bg-zion-cyan text-white"
                        : "bg-white/10 text-zion-slate-light hover: bg-white/20",
                    }`}`
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

== "All" && searchTerm == = " && (",
<div className="mb-16"
<h2 className="text-2xl font-bold text-white mb-8">Featured Articles</h2>"
<div className="grid md:grid-cols-2 gap-8"
<div className="mb-16",
<h2 className="text-2xl font-bold text-white mb-8">Featured Articles</h2>",
<div className="grid md:grid-cols-2 gap-8">,",
selectedCategory: == "All" && searchTerm == = " && (",
<div className= "mb-16">
<h2 className= "text-2xl font-bold text-white mb-8">Featured Articles</h2>"
<div className= "grid md:grid-cols-2 gap-8">
<div className= "mb-16>
<h2 className= "text-2xl font-bold text-white mb-8">Featured Articles</h2>",
<div className= "grid md:grid-cols-2 gap-8">,",
{featuredPosts.map((post) => {
const CategoryIcon: getCategoryIcon(post.category),,
  const categoryColor: getCategoryColor(post.category),,
  return (
<article key={post.id
}
                      className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover: bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl group",
                    >
                      <div className="flex items-center justify-between mb-4"
                        <div className="{`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${categoryColor}`}">`
                          <CategoryIcon className="[^"]*" />
                          {post.category}
                        </div>
                        <div className="flex items-center text-zion-slate-light text-sm"
                          <TrendingUp className="[^"]*" />
                        </div>"
                        <div className="flex items-center text-zion-slate-light text-sm">
                          <TrendingUp className="[^"]*" />
                      <div className="flex items-center justify-between mb-4",
                        <div className="{`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${categoryColor}`}">`
                          <CategoryIcon className="[^"]*" />,
                          {post.category}
                        </div>
                        <div className="flex items-center text-zion-slate-light text-sm",
                          <TrendingUp className="[^"]*" />,
                      className= "bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover: bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl group",
                    >
                      <div className= "flex items-center justify-between mb-4">
                        <div className= {`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${categoryColor}`}>`
                          <CategoryIcon className= "w-3 h-3 mr-1" />
                          {post.category}
                        </div>
                        <div className= "flex items-center text-zion-slate-light text-sm">
                          <TrendingUp className= "w-4 h-4 mr-1" />
                      <div className= "flex items-center justify-between mb-4>
                        <div className= {`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${categoryColor}`}>`
                          <CategoryIcon className= "w-3 h-3 mr-1/>",
                          {post.category}
                        </div>
                        <div className= "flex items-center text-zion-slate-light text-sm>
                          <TrendingUp className= "w-4 h-4 mr-1/>",
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
="flex items-center justify-between"
                        <div className="flex items-center space-x-4 text-sm text-zion-slate-light"
                          <div className="flex items-center"
                            <User className="[^"]*" />
                            {post.author}
                          </div>
                          <div className="flex items-center"
                            <Calendar className="[^"]*" />
                            {new Date(post.date).toLocaleDateString()}
                          </div>
                          <div className="flex items-center"
                            <Clock className="[^"]*" />
                            {post.readTime}
                          </div>
                        </div>
                        <button className="text-zion-cyan hover: text-zion-blue-light transition-colors flex items-center group",
                          </div>"
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1/>
                            {new Date(post.date).toLocaleDateString()}
                          </div>"
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-1/>
                            {post.readTime}
                          </div>
                        </div>"
                        <button className="text-zion-cyan hover: text-zion-blue-light transition-colors flex items-center group">
  Read More
                          <ArrowRight className="[^"]*" />,
                      <div className="flex items-center justify-between",
                        <div className="flex items-center space-x-4 text-sm text-zion-slate-light",
                          <div className="flex items-center",
                            <User className="[^"]*" />,
                            {post.author}
                          </div>
                          <div className="flex items-center",
                            <Calendar className="[^"]*" />,
                            {new Date(post.date).toLocaleDateString()}
                          </div>
                          <div className="flex items-center",
                            <Clock className="[^"]*" />,
                            {post.readTime}
                          </div>
                        </div>
                        <button className="text-zion-cyan hover: text-zion-blue-light transition-colors flex items-center group",
  Read More
                          <ArrowRight className="[^"]*" />,
                      <div className= "flex items-center justify-between">
                        <div className= "flex items-center space-x-4 text-sm text-zion-slate-light">
                          <div className= "flex items-center">
                            <User className= "w-4 h-4 mr-1" />
                            {post.author}
                          </div>
                          <div className= "flex items-center">
                            <Calendar className= "w-4 h-4 mr-1" />
                            {new Date(post.date).toLocaleDateString()}
                          </div>
                          <div className= "flex items-center">
                            <Clock className= "w-4 h-4 mr-1" />
                            {post.readTime}
                          </div>
                        </div>
                        <button className= "text-zion-cyan hover: text-zion-blue-light transition-colors flex items-center group">"
  Read More
                          <ArrowRight className= "w-4 h-4 ml-1 group-hover: translate-x-1 transition-transform/>",
                      <div className= "flex items-center justify-between>
                        <div className= "flex items-center space-x-4 text-sm text-zion-slate-light>
                          <div className= "flex items-center>
                            <User className= "w-4 h-4 mr-1/>",
                            {post.author}
                          </div>
                          <div className= "flex items-center>
                            <Calendar className= "w-4 h-4 mr-1/>",
                            {new Date(post.date).toLocaleDateString()}
                          </div>
                          <div className= "flex items-center>
                            <Clock className= "w-4 h-4 mr-1/>",
                            {post.readTime}
                          </div>
                        </div>
                        <button className= "text-zion-cyan hover: text-zion-blue-light transition-colors flex items-center group">"
  Read More
                          <ArrowRight className= "w-4 h-4 ml-1 group-hover: translate-x-1 transition-transform/>",
                        </button>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          )}

          {/* Regular Posts */}
          <div >
            <h2 className="text-2xl font-bold text-white mb-8"
              {selectedCategory !== "All" || searchTerm ? "Search Results" : "Latest Articles"}"
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8",
            <h2 className="text-2xl font-bold text-white mb-8",
              {selectedCategory !== "All" || searchTerm ? "Search Results" : "Latest Articles"}"
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8",
            <h2 className= "text-2xl font-bold text-white mb-8">
              {selectedCategory !== "All" || searchTerm ? "Search Results" : "Latest Articles"}"
            </h2>
            <div className= "grid md:grid-cols-2 lg:grid-cols-3 gap-8>
            <h2 className= "text-2xl font-bold text-white mb-8>
              {selectedCategory !== "All" || searchTerm ? "Search Results" : "Latest Articles"}"
            </h2>
            <div className= "grid md:grid-cols-2 lg:grid-cols-3 gap-8>
              {regularPosts.map((post)  => {
                const CategoryIcon: getCategoryIcon(post.category),,
  const categoryColor: getCategoryColor(post.category),,
  return (
                  <article key={post.id}
                    className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover: bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl group",
                  >
                    <div className="flex items-center justify-between mb-4"
                      <div className="{`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium border ${categoryColor}`}">`
                        <CategoryIcon className="[^"]*" />
                        {post.category}
                      </div>
                      <div className="flex items-center text-zion-slate-light text-xs"
                        <TrendingUp className="[^"]*" />
                      </div>"
                      <div className="flex items-center text-zion-slate-light text-xs">
                        <TrendingUp className="[^"]*" />
                    <div className="flex items-center justify-between mb-4",
                      <div className="{`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium border ${categoryColor}`}">`
                        <CategoryIcon className="[^"]*" />,
                        {post.category}
                      </div>
                      <div className="flex items-center text-zion-slate-light text-xs",
                        <TrendingUp className="[^"]*" />,
                  <article key={post.id}
                    className= "bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover: bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl group",
                  >
                    <div className= "flex items-center justify-between mb-4">
                      <div className= {`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium border ${categoryColor}`}>`
                        <CategoryIcon className= "w-3 h-3 mr-1" />
                        {post.category}
                      </div>
                      <div className= "flex items-center text-zion-slate-light text-xs">
                        <TrendingUp className= "w-3 h-3 mr-1" />
                    <div className= "flex items-center justify-between mb-4>
                      <div className= {`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium border ${categoryColor}`}>`
                        <CategoryIcon className= "w-3 h-3 mr-1/>",
                        {post.category}
                      </div>
                      <div className= "flex items-center text-zion-slate-light text-xs>
                        <TrendingUp className= "w-3 h-3 mr-1/>",
                        {post.views}
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-white mb-3 group-hover: text-zion-cyan transition-colors line-clamp-2",
                    <h3 className="text-lg font-bold text-white mb-3 group-hover: text-zion-cyan transition-colors line-clamp-2",
                      {post.title}
                    </h3>
                    <p className="text-zion-slate-light mb-4 text-sm leading-relaxed line-clamp-3",
                      {post.excerpt}
                    </p>

                    <div className="flex flex-wrap gap-1 mb-4",
                      {post.tags.slice(0, 2).map((tag, index) => (
                        <span key={index}
                          className="px-2 py-1 bg-zion-cyan/20 text-zion-cyan text-xs rounded-full",
                    <h3 className= "text-lg font-bold text-white mb-3 group-hover: text-zion-cyan transition-colors line-clamp-2>
                    <h3 className= "text-lg font-bold text-white mb-3 group-hover: text-zion-cyan transition-colors line-clamp-2>
                      {post.title}
                    </h3>
                    <p className= "text-zion-slate-light mb-4 text-sm leading-relaxed line-clamp-3>
                      {post.excerpt}
                    </p>

                    <div className= "flex flex-wrap gap-1 mb-4>
                      {post.tags.slice(0, 2).map((tag, index) => (
                        <span key={index}
                          className= "px-2 py-1 bg-zion-cyan/20 text-zion-cyan text-xs rounded-full",
                        >
                          {tag}
                        </span>
                      ))}
                      {post.tags.length > 2 && (
                        <span className="px-2 py-1 bg-zion-slate/20 text-zion-slate text-xs rounded-full",
                        <span className= "px-2 py-1 bg-zion-slate/20 text-zion-slate text-xs rounded-full>
                          +{post.tags.length - 2}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center justify-between text-xs text-zion-slate-light"
                      <div className="flex items-center"
                        <User className="[^"]*" />
                        {post.author}
                      </div>
                      <div className="flex items-center"
                        <Clock className="[^"]*" />
                      </div>"
                      <div className="flex items-center">
                        <Clock className="[^"]*" />
                    <div className="flex items-center justify-between text-xs text-zion-slate-light",
                      <div className="flex items-center",
                        <User className="[^"]*" />,
                        {post.author}
                      </div>
                      <div className="flex items-center",
                        <Clock className="[^"]*" />,
                    <div className= "flex items-center justify-between text-xs text-zion-slate-light">
                      <div className= "flex items-center">
                        <User className= "w-3 h-3 mr-1" />
                        {post.author}
                      </div>
                      <div className= "flex items-center">
                        <Clock className= "w-3 h-3 mr-1" />
                    <div className= "flex items-center justify-between text-xs text-zion-slate-light>
                      <div className= "flex items-center>
                        <User className= "w-3 h-3 mr-1/>",
                        {post.author}
                      </div>
                      <div className= "flex items-center>
                        <Clock className= "w-3 h-3 mr-1/>",
                        {post.readTime}
                      </div>
                    </div>

                    <button className="w-full mt-4 text-zion-cyan hover: text-zion-blue-light transition-colors flex items-center justify-center group/btn text-sm",
  Read Article
                      <ArrowRight className="[^"]*" />,
                    <button className="w-full mt-4 text-zion-cyan hover: text-zion-blue-light transition-colors flex items-center justify-center group/btn text-sm",
  Read Article
                      <ArrowRight className="[^"]*" />,
                    <button className= "w-full mt-4 text-zion-cyan hover: text-zion-blue-light transition-colors flex items-center justify-center group/btn text-sm">"
  Read Article
                      <ArrowRight className= "w-4 h-4 ml-1 group-hover/btn: translate-x-1 transition-transform/>",
                    <button className= "w-full mt-4 text-zion-cyan hover: text-zion-blue-light transition-colors flex items-center justify-center group/btn text-sm">"
  Read Article
                      <ArrowRight className= "w-4 h-4 ml-1 group-hover/btn: translate-x-1 transition-transform/>",
                    </button>
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