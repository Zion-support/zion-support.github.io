import React from 'react';
const FeaturedBlogPost2026: React.FC = () => {
  return (
    <div className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-medium mb-6">
            <FileText className="w-4 h-4 mr-2" />
            Featured Blog Posts 2026
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Latest Insights &
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Technology Trends
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay ahead of the curve with our expert analysisbreakthrough researchand cutting-edge insights into the world of AIquantum computingand emerging technologies.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Featured Post */}
          <div className="lg:col-span-2">
            <div
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              {/* Post Image */}
              <div className="relative h-64 md:h-80 overflow-hidden">
                <img
                  src={blogPosts[currentPost].image}
                  alt={blogPosts[currentPost].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                {/* Featured Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-medium rounded-full">
                    Featured
                  </span>
                </div>
                {/* Trending Badge */}
                {blogPosts[currentPost].trending && (
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-red-500 text-white text-xs font-medium rounded-full flex items-center">
                      <TrendingUp className="w-3 h-3 mr-1" />
                      Trending
                    </span>
                  </div>
                )}
              </div>
              {/* Post Content */}
              <div className="p-8">
                {/* Category */}
                <div className="mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                    {blogPosts[currentPost].category}
                  </span>
                </div>
                {/* Title */}
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                  {blogPosts[currentPost].title}
                </h3>
                {/* Excerpt */}
                <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                  {blogPosts[currentPost].excerpt}
                </p>
                {/* Author Info */}
                <div className="flex items-center space-x-4 mb-6">
                  <img
                    src={blogPosts[currentPost].authorImage}
                    alt={blogPosts[currentPost].author}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">
                      {blogPosts[currentPost].author}
                    </div>
                    <div className="text-sm text-gray-600">
                      {blogPosts[currentPost].authorRole}
                    </div>
                  </div>
                </div>
                {/* Meta Info */}
                <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                  <div className="flex items-center space-x-4">
                    <span>{formatDate(blogPosts[currentPost].publishDate)}</span>
                    <span>•</span>
                    <span>{blogPosts[currentPost].readTime}</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="flex items-center">
                      <Eye className="w-4 h-4 mr-1" />
                      {blogPosts[currentPost].views.toLocaleString()}
                    </span>
                    <span className="flex items-center">
                      <Heart className="w-4 h-4 mr-1" />
                      {blogPosts[currentPost].likes}
                    </span>
                    <span className="flex items-center">
                      <MessageSquare className="w-4 h-4 mr-1" />
                      {blogPosts[currentPost].comments}
                    </span>
                  </div>
                </div>
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {blogPosts[currentPost].tags.map((tagindex) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
                {/* CTA Button */}
                <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group">
                  Read Full Article
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
          {/* Sidebar */}
          <div className="space-y-8">
            {/* Categories */}
            <div
              className="bg-white rounded-2xl shadow-lg p-6"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6">Categories</h3>
              <div className="space-y-3">
                {categories.map((categoryindex) => (
                  <button
                    key={index}
                    className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                  >
                    <div className="flex items-center">
                      <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${category.color} mr-3`} />
                      <span className="font-medium text-gray-900 group-hover:text-blue-600">
                        {category.name}
                      </span>
                    </div>
                    <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                      {category.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>
            {/* Popular Posts */}
            <div
              className="bg-white rounded-2xl shadow-lg p-6"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6">Popular Posts</h3>
              <div className="space-y-4">
                {blogPosts.slice(03).map((postindex) => (
                  <div key={post.id} className="flex space-x-4 group cursor-pointer">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-gray-900 text-sm leading-tight group-hover:text-blue-600 transition-colors line-clamp-2">
                        {post.title}
                      </h4>
                      <div className="flex items-center mt-2 text-xs text-gray-500">
                        <span>{formatDate(post.publishDate)}</span>
                        <span className="mx-2">•</span>
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Newsletter Signup */}
            <div
              className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 text-white"
            >
              <h3 className="text-xl font-bold mb-4">Stay Updated</h3>
              <p className="text-blue-100 mb-6">
                Get the latest insights and technology trends delivered to your inbox.
              </p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <button className="w-full bg-white text-blue-600 px-4 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* View All Posts CTA */}
        <div
          className="text-center mt-16"
        >
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold border-2 border-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 flex items-center mx-auto">
            View All Blog Posts
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </div>
      </div>
    </div>
  );

};


export default FeaturedBlogPost2026;
</div></div>
