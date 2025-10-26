import { Star, Eye } from 'lucide-react';
import React from 'react';

const BlogPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>"
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden"></section>"
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20"></div>"
        <div className="container mx-auto px-4 relative z-10"></div>"
          <div className="max-w-4xl mx-auto text-center"></div>"
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 cyber-text neon-pulse"></h1>"
              Blog & Insights
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed"></p>"
              Stay updated with the latest trends in AI, cloud computing, cybersecurity, 
              and digital transformation. Expert insights from our team of specialists.
            </p>
            <div className="flex flex-wrap justify-center gap-4"></div>"
              <div className="flex items-center space-x-2 bg-cyan-500/20 px-4 py-2 rounded-lg"></div>"
                <BookOpen className="w-5 h-5 text-cyan-400" />"
                <span className="text-white font-medium">Expert Insights</span>"
              </div>
              <div className="flex items-center space-x-2 bg-purple-500/20 px-4 py-2 rounded-lg"></div>"
                <TrendingUp className="w-5 h-5 text-purple-400" />"
                <span className="text-white font-medium">Latest Trends</span>"
              </div>
              <div className="flex items-center space-x-2 bg-green-500/20 px-4 py-2 rounded-lg"></div>"
                <Star className="w-5 h-5 text-green-400" />"
                <span className="text-white font-medium">Industry Leaders</span>"
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8"></section>"
        <div className="container mx-auto px-4"></div>"
          <div className="max-w-4xl mx-auto"></div>"
            <div className="flex flex-col md:flex-row gap-4 mb-8"></div>"
              <div className="flex-1 relative"></div>"
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />"
                <input,
type="text""
                  placeholder="Search articles...""
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400 transition-colors""
                />
              </div>
              <div className="flex gap-2 overflow-x-auto"></div>"
                {categories.map((category) => (
                  <button,
key={category.name}
                    onClick={() => setSelectedCategory(category.name)}
                    className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-all ${
                      selectedCategory === category.name
                        ? 'bg-cyan-500 text-white'
                        : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                    }`}
                  >
                    {category.label} ({category.count})
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20"></section>"
        <div className="container mx-auto px-4"></div>"
          <div className="max-w-6xl mx-auto"></div>"
            <h2 className="text-2xl font-bold text-white mb-8">Featured Article</h2>"
            <div className="bg-slate-800/50 rounded-lg overflow-hidden hover:bg-slate-700/50 transition-all duration-300"></div>"
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8"></div>"
                <div className="relative"></div>"
                  <img,
src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-64 lg:h-full object-cover""
                  />
                  <div className="absolute top-4 left-4"></div>"
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium"></span>"
                      Featured
                    </span>
                  </div>
                </div>
                <div className="p-8"></div>"
                  <div className="flex items-center space-x-2 mb-4"></div>"
                    <div className={`w-8 h-8 ${getCategoryColor(featuredPost.category)}`}></div>
                      {React.createElement(getCategoryIcon(featuredPost.category), { className: 'w-8 h-8' })}
                    </div>
                    <span className="text-cyan-400 font-medium capitalize">{featuredPost.category}</span>"
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">{featuredPost.title}</h3>"
                  <p className="text-gray-300 mb-6 leading-relaxed">{featuredPost.excerpt}</p>"
                  <div className="flex flex-wrap gap-2 mb-6"></div>"
                    {featuredPost.tags.map((tag, index) => (
                      <span key={index} className="px-3 py-1 bg-slate-700 text-gray-300 text-sm rounded-full"></span>"
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between mb-6"></div>"
                    <div className="flex items-center space-x-4"></div>"
                      <div className="flex items-center space-x-2"></div>"
                        <img,
src={featuredPost.authorImage}
                          alt={featuredPost.author}
                          className="w-10 h-10 rounded-full""
                        />
                        <div></div>
                          <div className="text-white font-medium">{featuredPost.author}</div>"
                          <div className="text-gray-400 text-sm">{featuredPost.authorRole}</div>"
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 text-gray-400 text-sm"></div>"
                      <div className="flex items-center space-x-1"></div>"
                        <Calendar className="w-4 h-4" />"
                        <span>{new Date(featuredPost.publishDate).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-1"></div>"
                        <Clock className="w-4 h-4" />"
                        <span>{featuredPost.readTime}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between"></div>"
                    <div className="flex items-center space-x-6 text-gray-400 text-sm"></div>"
                      <div className="flex items-center space-x-1"></div>"
                        <Eye className="w-4 h-4" />"
                        <span>{featuredPost.views}</span>
                      </div>
                      <div className="flex items-center space-x-1"></div>"
                        <MessageCircle className="w-4 h-4" />"
                        <span>{featuredPost.comments}</span>
                      </div>
                    </div>
                    <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-lg font-medium hover:from-cyan-600 hover:to-purple-700 transition-all flex items-center"></button>"
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2" />"
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 bg-slate-800/50"></section>"
        <div className="container mx-auto px-4"></div>"
          <div className="max-w-6xl mx-auto"></div>"
            <h2 className="text-2xl font-bold text-white mb-8">Latest Articles</h2>"
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div>"
              {filteredPosts.map((post) => (
                <article key={post.id} className="bg-slate-800/50 rounded-lg overflow-hidden hover:bg-slate-700/50 transition-all duration-300"></article>"
                  <div className="relative"></div>"
                    <img,
src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover""
                    />
                    <div className="absolute top-4 left-4"></div>"
                      <div className={`w-8 h-8 ${getCategoryColor(post.category)}`}></div>
                        {React.createElement(getCategoryIcon(post.category), { className: 'w-8 h-8' })}
                      </div>
                    </div>
                  </div>
                  <div className="p-6"></div>"
                    <div className="flex items-center space-x-2 mb-3"></div>"
                      <span className="text-cyan-400 font-medium text-sm capitalize">{post.category}</span>"
                      <span className="text-gray-400">•</span>"
                      <span className="text-gray-400 text-sm">{post.readTime}</span>"
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">{post.title}</h3>"
                    <p className="text-gray-300 text-sm mb-4 line-clamp-3">{post.excerpt}</p>"
                    <div className="flex flex-wrap gap-1 mb-4"></div>"
                      {post.tags.slice(0, 3).map((tag, index) => (
                        <span key={index} className="px-2 py-1 bg-slate-700 text-gray-300 text-xs rounded"></span>"
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between"></div>"
                      <div className="flex items-center space-x-2"></div>"
                        <img,
src={post.authorImage}
                          alt={post.author}
                          className="w-8 h-8 rounded-full""
                        />
                        <div></div>
                          <div className="text-white font-medium text-sm">{post.author}</div>"
                          <div className="text-gray-400 text-xs">{post.authorRole}</div>"
                        </div>
                      </div>
                      <div className="flex items-center space-x-4 text-gray-400 text-xs"></div>"
                        <div className="flex items-center space-x-1"></div>"
                          <Eye className="w-3 h-3" />"
                          <span>{post.views}</span>
                        </div>
                        <div className="flex items-center space-x-1"></div>"
                          <MessageCircle className="w-3 h-3" />"
                          <span>{post.comments}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20"></section>"
        <div className="container mx-auto px-4"></div>"
          <div className="max-w-4xl mx-auto text-center"></div>"
            <div className="bg-gradient-to-r from-cyan-600 to-purple-700 rounded-lg p-8"></div>"
              <h2 className="text-3xl font-bold text-white mb-4"></h2>"
                Stay Updated with Our Latest Insights
              </h2>
              <p className="text-xl text-gray-200 mb-8"></p>"
                Get the latest articles, industry insights, and expert opinions delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"></div>"
                <input,
type="email""
                  placeholder="Enter your email address""
                  className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white""
                />
                <button className="bg-white text-cyan-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"></button>"
                  Subscribe
                </button>
              </div>
              <p className="text-sm text-gray-300 mt-4"></p>"
                No spam, unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;