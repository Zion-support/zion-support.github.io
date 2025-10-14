import React from 'react';
import { Helmet } from 'react-helmet-async';
import { } from 'react-router-dom;
import { User, Right, Filter } from 'lucide-react;
import Footer from '../components/Footer;
export default function Blog() {

interface BlogPost {
  id: number;  title: string;

const BlogPage: React.FC = () => {
  const blogPosts = [{
      title: 'The Future of AI in Business',';
      excerpt: 'Exploring how artificial intelligence is transforming modern business operations.',';
      author: 'Zion Tech Team',';
      date: '2024-01-15',';}
}
      readTime: '5 min read'';}
    },
    {

      title: 'Migration Best Practices',';
      excerpt: 'Essential strategies for successful cloud migration and optimization.',';
      author: 'Zion Tech Team',';
      date: '2024-01-10',';}
}
      readTime: '7 min read'';}
    },
    {

      title: 'Cybersecurity Trends 2024',';
      excerpt: 'Latest trends and threats in cybersecurity and how to protect your business.',';
      author: 'Zion Tech Team',';
      date: '2024-01-05',';}
}
      readTime: '6 min read'';}
    }
  ];

const categories = ['All Posts',';
    'AI & Machine Learning',';
    'Quantum Computing',';
    'Cybersecurity',';
    'Computing',';
    'Data Analytics',';
    'Business Strategy'';
  ];
'use client';
const BlogPage: React.FC = () => {

  const [searchQuery, setSearchQuery] = useState(');
  const [selectedCategory, setSelectedCategory] = useState('all);
  const filteredPosts = blogPosts.filter(post => {const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||;
        <title>Blog - Zion Tech Group</title>
        <meta name="description" content="Advanced blog solutions by Zion Tech Group" />
        <title>Blog - Zion Tech Group | AI & Technology Insights</title>"
        <meta name="description" content="Stay updated with the latest insights on AI, quantum computing, cybersecurity, and emerging technologies from Zion Tech Group experts. />"
        <meta name="keywords" content="AI blog, technology insights, quantum computing, cybersecurity, autonomous systems, tech trends />"
        <meta property="og:title" content="Blog - Zion Tech Group />"
        <meta property="og:description" content="Latest insights on AI and emerging technologies />"
        <meta property="og:type" content="website />"
        <meta property="og:url" content="https://ziontechgroup.com/blog />
      </Helmet>"
      <div className="container mx-auto px-4 py-20">;"
        <div className="text-center mb-16">;"
          <h1 className="text-5xl font-bold text-white mb-6">;
            Our Blog;
          </h1>;"
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
            Stay updated with the latest insights, trends, and innovations in AI and technology;
          </p>;
        </div>;"
        <div className="max-w-6xl mx-auto">;"
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">;"
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">;"
              <h3 className="text-xl font-semibold text-white mb-3">Coming Soon</h3>;"
              <p className="text-gray-300">;
                Our blog is under development. Please check back later for updates.;
              </p>;
            </div>;
          </div>;
        </div>;
        <title>Blog - Zion Tech Group | AI and IT Insights</title>"
        <meta name="description" content="Stay updated with the latest insights on AI, IT solutions, and emerging technologies. Expert articles, tutorials, and industry trends." />"
        <meta name="keywords" content="AI blog, IT insights, technology trends, enterprise solutions, cloud computing, cybersecurity" />
      </Helmet>"}
}
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">;}
        {/* Hero Section */}"
        <section className="pt-20 pb-16 px-4">;"
          <div className="max-w-7xl mx-auto">;"
            <div className="text-center mb-16">;"
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">;
                Our Blog;
              </h1>;"
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">;
                Insights, trends, and expert perspectives on AI, technology, and business transformation.;
              </p>;
        {/* Blog Posts */}"
        <section className="py-16 px-4">;"
          <div className="max-w-7xl mx-auto">;"
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
              {blogPosts.map((post, _index) => ("}
                <article key={_index} className="cyber-card p-6">;"
                  <h2 className="text-xl font-semibold text-white mb-3">{post.title}</h2>;"
                  <p className="text-gray-300 mb-4">{post.excerpt}</p>;"
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">;"
                    <div className="flex items-center">;"
                      <User className="w-4 h-4 mr-2" />;
                      {post.author}
                    </div>;"
                    <div className="flex items-center">;"
                      <className="w-4 h-4 mr-2" />;
                      {post.date}
                    </div>;
                  </div>;"
                  <div className="flex items-center justify-between">;"
                    <span className="text-sm text-gray-400">{post.readTime}</span>;"
                    <button className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors">;
                      Read More;"
                      <Right className="w-4 h-4 ml-1" />;
                    </button>;
                  </div>;
                </article>;
              ))}
            </div>;
          </div>;
        </section>;
      </div>;
{/* Blog Posts Grid */}"
      <section className="py-20 px-4">;"
        <div className="max-w-7xl mx-auto">;"
          <h2 className="text-2xl font-bold text-white mb-6">Latest Articles</h2>;"
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
            {filteredPosts.map((post) => ("}
              <div key={post.id} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300">;"
                <div className="h-48 bg-gradient-to-r from-purple-500/20 to-blue-500/20 flex items-center justify-center">;"
                  <div className="text-center">;"
                    <div className="w-12 h-12 bg-purple-500/30 rounded-full flex items-center justify-center mx-auto mb-2">;"
                      <className="w-6 h-6 text-purple-400" />;
                    </div>;"
                    <span className="text-sm text-gray-300">Article Image</span>;"
                  <div className="flex items-center gap-4 mb-3">;"
                    <span className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded"></span>;
                      {categories.find(c => c.name === post.category)?.label}

                    </span>;
                  </div>;
                </div>;"
                <div className="p-8">;"
                  <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">;"
                    <span className="flex items-center gap-1"></span>;"
                      <className="w-4 h-4" />;
                      {new Date(post.date).toLocaleDateString()}
                    </span>;"
                    <span className="flex items-center gap-1"></span>;"
                      <className="w-4 h-4" />;
                      {post.readTime}
                    </span>;
                  </div>;"
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">;
                    {post.title}
                  </h3>;"
                  <p className="text-gray-300 mb-6 leading-relaxed">;
                    {post.excerpt}
                  </p>;"
                  <div className="flex items-center justify-between">;"
                    <div className="flex flex-wrap gap-2">;
                      {post.tags.map((tag, _index) => ("}
                        <span key={_index} className="bg-white/10 text-gray-300 px-3 py-1 rounded-full text-sm"></span>;
                          {tag}
                        </span>;
                      ))}
                    </div>;"
                    <button className="flex items-center gap-2 text-purple-400 hover:text-purple-300 font-medium transition-colors">;
                      Read More;"
                      <Right className="w-4 h-4" />;
                    </button>;
                  </div>;
                </div>;
              </div>;
            ))}
      {/* All Posts */}"
      <section className="py-16 px-4">;"
        <div className="max-w-7xl mx-auto">;"
          <h2 className="text-4xl font-bold text-white mb-12 text-center">;
            {selectedCategory === 'all' ? 'All Articles' : categories.find(c => c.name === selectedCategory)?.label}';
          </h2>;"
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
            {searchedPosts.map((post) => ("}
              <article key={post.id} className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-purple-500/50 transition-all duration-300 group">;"
                <div className="aspect-video bg-gradient-to-br from-purple-500/20 to-blue-500/20 relative overflow-hidden">;"
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />;
                </div>;"
                <div className="p-6">;"
                  <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">;"
                    <span className="flex items-center gap-1"></span>;"
                      <className="w-4 h-4" />;
                      {new Date(post.date).toLocaleDateString()}
                    </span>;"
                    <span className="flex items-center gap-1"></span>;"
                      <className="w-4 h-4" />;
                      {post.readTime}
                    </span>;
        {/* Featured Post */}"
        <section className="py-16 px-4">;
        </section>;"
          <div className="max-w-7xl mx-auto">;"
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Featured Article</h2>;
            {blogPosts.filter(post => post.featured).map((post) => ("}
              <div key={post.id} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 group">;"
                <div className="grid md:grid-cols-2 gap-8 items-center">;
                  <div>;"
                    <div className="flex items-center space-x-4 mb-4">;"
                      <span className="bg-cyan-500 text-white px-3 py-1 rounded-full text-sm font-medium"></span>;
                        Featured;
                      </span>;"
                      <span className="text-cyan-400 text-sm font-medium">{post.category}</span>;
                    </div>;"
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">;
                      {post.title}
                    </h3>;"
                    <p className="text-gray-300 mb-6 text-lg leading-relaxed">;
                      {post.excerpt}
                    </p>;"
                    <div className="flex items-center justify-between">;"
                      <div className="flex items-center space-x-4 text-sm text-gray-400">;"
                        <div className="flex items-center space-x-1">;"
                          <User className="w-4 h-4" />;
                          <span>{post.author}</span>;
                        </div>;"
                        <div className="flex items-center space-x-1">;"
                          <className="w-4 h-4" />;
                          <span>{new Date(post.date).toLocaleDateString()}</span>;
                        </div>;"
                        <div className="flex items-center space-x-1">;"
                          <className="w-4 h-4" />;
                          <span>{post.readTime}</span>;
                        </div>;
                      </div>;"
                      <button className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors font-medium">;
                        <span>Read More</span>;"
                        <Right className="w-4 h-4" />;
                      </button>;
                    </div>;
                  </div>;"
                  <div className="bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg h-64 flex items-center justify-center">;"
                    <div className="text-6xl">📊</div>;
                  </div>;
      {/* Featured Post */}
      {
filteredPosts.find(post => post.featured) && ("
        <section className="py-16 px-4">;"
          <div className="max-w-7xl mx-auto">;"
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">;
              Featured Article;
            </h2>;
            {(() => {
              const featuredPost = filteredPosts.find(post => post.featured);
              return featuredPost ? ("
                <article className="cyber-card hologram-card p-8 mb-16">;"
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">;
                    <div>;}
}
                      <img;>}
                        src={featuredPost.image}
                        alt={featuredPost.title}"
                        className="w-full h-64 object-cover rounded-lg";
                      />;
                    </div>;"
                    <div className="flex flex-col justify-center">;"
                      <div className="flex items-center space-x-4 mb-4">;"
                        <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm font-medium"></span>;
                          {featuredPost.category}
                        </span>;"
                        <span className="text-yellow-400 text-sm font-medium">Featured</span>;
                      </div>;"
                      <h3 className="text-3xl font-bold text-white mb-4">;
                        {featuredPost.title}
                      </h3>;"
                      <p className="text-gray-300 mb-6 text-lg">;
                        {featuredPost.excerpt}
                      </p>;"
                      <div className="flex items-center justify-between text-sm text-gray-400 mb-6">;"
                        <div className="flex items-center space-x-4">;"
                          <div className="flex items-center space-x-1">;"
                            <User className="w-4 h-4" />;
                            <span>{featuredPost.author}</span>;
                          </div>;"
                          <div className="flex items-center space-x-1">;"
                            <className="w-4 h-4" />;
                            <span>{featuredPost.date}</span>;
                          </div>;"
                          <div className="flex items-center space-x-1">;"
                            <className="w-4 h-4" />;
                            <span>{featuredPost.readTime}</span>;
                          </div>;
                        </div>;
                      </div>;"
                      <div className="flex flex-wrap gap-2 mb-6">;
                        {
featuredPost.tags.map((tag) => (}
}
                          <span;></span>}
                            key={tag}"
                            className="px-2 py-1 bg-gray-700/50 text-gray-300 rounded text-xs";
                          >;"
                            <Tag className="w-3 h-3 inline mr-1" />;
                            {tag}
                          </span>;
                        ))}
                      </div>;"
                      <button className="cyber-button w-fit">;"
                        Read More <Right className="w-4 h-4 inline ml-2" />;
                      </button>;
                    </div>;
                  </div>;
                </article>;
              ) : null;
            })()}
          </div>;
        </section>;
      )}

      {/* Blog Posts Grid */}"
      <section className="py-16 px-4">;"
        <div className="max-w-7xl mx-auto">;"
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">;
            Latest Articles;
          </h2>;"
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
            {filteredPosts.map((post) => ("}
              <article key={post.id} className="cyber-card hologram-card p-6 hover:scale-105 transition-all duration-300">;
                <img;>
                  src={post.image}
                  alt={post.title}"
                  className="w-full h-48 object-cover rounded-lg mb-4";
                />;"
                <div className="flex items-center justify-between text-sm text-gray-400 mb-4">;"
                  <div className="flex items-center space-x-4">;"
                    <div className="flex items-center space-x-1">;"
                      <User className="w-4 h-4" />;
                      <span>{post.author}</span>;
                    </div>;"
                    <div className="flex items-center space-x-1">;"
                      <className="w-4 h-4" />;
                      <span>{post.date}</span>;
                    </div>;
                  </div>;
                  <span>{post.readTime}</span>;
                </div>;"
                <div className="flex items-center space-x-2 mb-4">;"
                  <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm font-medium"></span>;
                    {post.category}
                  </span>;
                </div>;"
                <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">;
                  {post.title}
                </h3>;"
                <p className="text-gray-300 mb-4 line-clamp-3">;
                  {post.excerpt}
                </p>;"
                <div className="flex flex-wrap gap-2 mb-4">;
                  {
post.tags.slice(0, 3).map((tag) => (}
}
                    <span;></span>}
                      key={tag}"
                      className="px-2 py-1 bg-gray-700/50 text-gray-300 rounded text-xs";
                    >;"
                      <Tag className="w-3 h-3 inline mr-1" />;
                      {tag}
                    </span>;
                  ))}
                </div>;"
                <button className="cyber-button w-full">;"
                  Read More <Right className="w-4 h-4 inline ml-2" />;
                </button>;
              </article>;
            ))}
      </section>;
    </div>;
  );
};

export default BlogPage;
"