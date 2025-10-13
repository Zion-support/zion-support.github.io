import { useState } from "react";
import { ArrowRight, Calendar, User } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";



        <meta name="description" content="Stay updated with the latest insights on AI, cybersecurity, cloud computing, and technology trends." />
        <meta name="description" content="Latest insights and updates from Zion Tech Group" />
        <section className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white py-20">
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
        <section className="py-8 bg-white/10 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="flex-1 max-w-md">
                  className="w-full px-4 py-2 border border-cyan-400/30 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent bg-white/10 text-white placeholder-gray-300"
                />
              </div>
              <div className="flex gap-2 flex-wrap">
                {categories.map(category => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      selectedCategory === category.id
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                    }`}
                  >
                    {category.name} ({category.count})
                  </button>
                ))}
              </div>
              <h2 className="text-3xl font-bold text-white mb-8">Featured Article</h2>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden border border-white/20">
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <img
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-1/2 p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm font-medium">
                        {featuredPost.category}
                      </span>
                      <span className="text-gray-300 text-sm">
                        {featuredPost.readTime}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {featuredPost.title}
                    </h3>
                    <p className="text-gray-300 mb-6">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-gray-400">
                        <div className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          {featuredPost.author}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {new Date(featuredPost.date).toLocaleDateString()}
                        </div>
                      </div>
                      <Link
                        to={`/blog/${featuredPost.id}`}
                        className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium"
                      >
                        Read More
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Blog Posts Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8">Latest Articles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map(post => (
                <article key={post.id} className="bg-white/10 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow border border-white/20 hover:border-cyan-400/50">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="bg-white/10 text-gray-300 px-3 py-1 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                      <span className="text-gray-400 text-sm">
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">
                      {post.title}
                    </h3>
                    <p className="text-gray-300 mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-gray-400">
                        <div className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          {post.author}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {new Date(post.date).toLocaleDateString()}
                        </div>
                      </div>
                      <Link
                        to={`/blog/${post.id}`}
                        className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium"
                      >
                        Read More
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}

};
