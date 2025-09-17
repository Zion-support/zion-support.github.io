import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, Eye, Clock, Heart, Share2, BookOpen } from 'lucide-react';
import { getRecentBlogPosts, getFeaturedBlogPosts } from '../data/blog-posts';
const TrendingContentSection2026: React.FC = () => {
  const [trendingPosts, setTrendingPosts] = useState([]);
  const [featuredPosts, setFeaturedPosts] = useState([]);
  useEffect(() => {
    setTrendingPosts(getRecentBlogPosts(6));
    setFeaturedPosts(getFeaturedBlogPosts().slice(0, 3));
  }, []);
  return (
    <div className="py-16 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <TrendingUp className="w-8 h-8 text-yellow-400 mr-3" />
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Trending Content
            </h2>
          </div>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Discover the most popular and engaging content from our latest publications
          </p>
        </div>
        {/* Trending Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {trendingPosts.map((post, index) => (
            <div
              key={post.id}
              className="group bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              {/* Post Image */}
              <div className="relative h-48 bg-gradient-to-br from-blue-600 to-purple-600 overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-yellow-500 text-black text-sm font-bold rounded-full">
                    #{index + 1} Trending
                  </span>
                </div>
                <div className="absolute bottom-4 right-4 flex space-x-2">
                  <div className="flex items-center text-white/80 text-sm">
                    <Eye className="w-4 h-4 mr-1" />
                    {Math.floor(Math.random() * 1000) + 500}
                  </div>
                  <div className="flex items-center text-white/80 text-sm">
                    <Heart className="w-4 h-4 mr-1" />
                    {Math.floor(Math.random() * 100) + 50}
                  </div>
                </div>
              </div>
              {/* Post Content */}
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <span className="px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full">
                    {post.category}
                  </span>
                  <div className="flex items-center text-gray-400 text-sm ml-auto">
                    <Clock className="w-4 h-4 mr-1" />
                    {post.readTime}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors">
                  {post.title}
                </h3>
                <p className="text-blue-200 text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                      {post.author.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="ml-3">
                      <div className="text-white text-sm font-semibold">{post.author}</div>
                      <div className="text-gray-400 text-xs">{post.authorRole}</div>
                    </div>
                  </div>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                  >
                    Read More
                    <BookOpen className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Featured Content Banner */}
        <div className="bg-gradient-to-r from-yellow-600 to-orange-600 rounded-2xl p-8 mb-12">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-white mb-4">
              Featured Content Spotlight
            </h3>
            <p className="text-yellow-100 text-lg mb-6">
              Hand-picked by our editorial team for exceptional quality and impact
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featuredPosts.map((post, index) => (
                <div key={post.id} className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                  <h4 className="text-white font-bold mb-2">{post.title}</h4>
                  <p className="text-yellow-100 text-sm mb-3">{post.excerpt}</p>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center text-white font-semibold hover:text-yellow-200 transition-colors"
                  >
                    Read Now
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Call to Action */}
        <div className="text-center">
          <Link
            to="/blog"
            className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold rounded-full hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <BookOpen className="w-6 h-6 mr-3" />
            Explore All Content
            <TrendingUp className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );

};

export default TrendingContentSection2026;
