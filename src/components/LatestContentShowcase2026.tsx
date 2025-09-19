import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Eye, ArrowRight, Star, TrendingUp, Users } from 'lucide-react';
import { getRecentBlogPosts, getFeaturedBlogPosts } from '../data/blog-posts';
import { COMPREHENSIVE_SERVICES } from '../data/comprehensiveServices';

const LatestContentShowcase2026: React.FC = () => {
  const recentPosts = getRecentBlogPosts(6);
  const featuredServices = COMPREHENSIVE_SERVICES.filter(service => service.featured).slice(0, 6);

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Latest Content & Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay ahead with our cutting-edge technology insights, revolutionary services, 
            and industry-leading solutions that are shaping the future.</p>
          </p>
        {/* Latest Blog Posts */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-gray-900 flex items-center">
              <TrendingUp className="w-6 h-6 mr-3 text-blue-600" />
              Latest Articles
            </h3>
            <Link
              to="/blog"
              className="text-blue-600 hover:text-blue-800 font-semibold flex items-center"
            >
              View All Articles
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="text-4xl font-bold mb-2">{post.id}
                    <div className="text-sm opacity-90">{post.category}
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <Clock className="w-4 h-4 mr-1" />
                    {post.readTime}
                    <span className="mx-2">•</span>
                    <span>{new Date(post.publishDate).toLocaleDateString()}</span>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h4>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}</p>
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <span className="font-medium">{post.author}</span>
                      <span className="mx-2">•</span>
                      <span>{post.authorRole}</span>
                    <Link
                      to={`/blog/${post.slug}`}
                      className="text-blue-600 hover:text-blue-800 font-semibold flex items-center"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
              </article>
            ))}
        {/* Featured Services */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-gray-900 flex items-center">
              <Star className="w-6 h-6 mr-3 text-green-600" />
              Featured Services
            </h3>
            <Link
              to="/services"
              className="text-green-600 hover:text-green-800 font-semibold flex items-center"
            >
              View All Services
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="h-48 bg-gradient-to-r from-green-500 to-blue-600 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="text-4xl font-bold mb-2">{service.aiScore}%
                    <div className="text-sm opacity-90">AI Score
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                      {service.category}
                    </span>
                    <div className="flex items-center text-yellow-500">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="ml-1 text-sm font-medium">{service.reviews.rating}</span>
                      <span className="ml-1 text-sm text-gray-500">({service.reviews.count})</span>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                    {service.title}
                  </h4>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {service.description}</p>
                  </p>
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-2xl font-bold text-green-600">
                      {service.currency}{service.price.toLocaleString()}
                    <div className="text-sm text-gray-500">
                      {service.deliveryTime}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  <Link
                    to={`/services/${service.id}`}
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
            ))}
        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Join thousands of companies already using our revolutionary AI solutions 
              to drive innovation and achieve unprecedented results.</p>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-300"
              >
                Get Started Today
              </Link>
              <Link
                to="/demo"
                className="border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white/10 transition-colors duration-300"
              >
                Schedule Demo
              </Link>
  );
};

export default LatestContentShowcase2026;