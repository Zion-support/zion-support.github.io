import React, { useState, useEffect } from 'react';
import { ArrowRight, Calendar, Clock, Star, TrendingUp, Sparkles, Award, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { newContent2025 } from '../content/new-content-2025';
import { featuredNewServices } from '../content/new-services-2025';
import { caseStudies } from '../content/case-studies';
import { promotionalBanners2025 } from '../content/promotional-banners-2025';

const NewContentShowcase2025: React.FC = () => {
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentBannerIndex((prev) => (prev + 1) % promotionalBanners2025.slice(0, 3).length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const featuredBanners = promotionalBanners2025.slice(0, 3);
  const latestBlogPosts = newContent2025.filter(item => item.type === 'blog').slice(0, 4);
  const latestCaseStudies = caseStudies.slice(-3);
  const featuredServices = featuredNewServices.slice(0, 3);

  return (
    <div className="py-16 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: "2s" }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 text-sm font-medium mb-4 border border-blue-500/30">
            <Sparkles className="w-4 h-4 mr-2" />
            New in 2025
            <TrendingUp className="w-4 h-4 ml-2" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Latest <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Innovations</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover our newest AI solutions, breakthrough case studies, and cutting-edge services that are transforming industries worldwide.
          </p>
        </div>

        {/* Rotating Hero Banner */}
        <div className="mb-16">
          <div className="relative bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-8 border border-blue-500/30 overflow-hidden">
            {featuredBanners.map((banner, index) => (
              <div
                key={banner.id}
                className={`transition-all duration-1000 ${
                  index === currentBannerIndex
                    ? 'opacity-100 translate-x-0'
                    : index < currentBannerIndex
                    ? 'opacity-0 -translate-x-full absolute inset-0'
                    : 'opacity-0 translate-x-full absolute inset-0'
                }`}
              >
                <div className="flex flex-col lg:flex-row items-center gap-8">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-medium rounded-full">
                        {banner.badge}
                      </span>
                      <span className="text-blue-300 text-sm">{banner.category}</span>
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-4">
                      {banner.title}
                    </h3>
                    <p className="text-gray-300 text-lg mb-6">
                      {banner.description}
                    </p>
                    
                    {banner.metrics && (
                      <div className="flex flex-wrap gap-6 mb-6">
                        {banner.metrics.map((metric, idx) => (
                          <div key={idx} className="text-center">
                            <div className="text-2xl font-bold text-blue-400">{metric.value}</div>
                            <div className="text-sm text-gray-400">{metric.label}</div>
                          </div>
                        ))}
                      </div>
                    )}

                    <div className="flex flex-col sm:flex-row gap-4">
                      <Link
                        to={banner.ctaUrls.primary}
                        className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                      >
                        {banner.cta.primary}
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                      {banner.ctaUrls.secondary && (
                        <Link
                          to={banner.ctaUrls.secondary}
                          className="inline-flex items-center px-6 py-3 border border-blue-500/50 text-blue-300 font-medium rounded-lg hover:bg-blue-500/10 transition-all duration-300"
                        >
                          {banner.cta.secondary}
                        </Link>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex-1 flex justify-center">
                    <div className="w-64 h-64 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center border border-blue-500/30">
                      <span className="text-8xl">{banner.icon}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Latest Blog Posts */}
          <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 rounded-xl p-6 border border-blue-500/30">
            <div className="flex items-center gap-2 mb-6">
              <Award className="w-5 h-5 text-blue-400" />
              <h3 className="text-xl font-bold text-white">Latest Insights</h3>
            </div>
            
            <div className="space-y-4">
              {latestBlogPosts.map((post) => (
                <Link
                  key={post.id}
                  to={post.url}
                  className="block p-4 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs font-medium rounded">
                          {post.category}
                        </span>
                        {post.newBadge && (
                          <span className="px-2 py-1 bg-green-500/20 text-green-300 text-xs font-medium rounded">
                            NEW
                          </span>
                        )}
                      </div>
                      <h4 className="text-white font-medium mb-1 group-hover:text-blue-300 transition-colors">
                        {post.title}
                      </h4>
                      <p className="text-gray-400 text-sm mb-2 line-clamp-2">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center gap-4 text-xs text-gray-500">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {post.readTime}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {new Date(post.publishedDate).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            
            <Link
              to="/blog"
              className="inline-flex items-center text-blue-400 hover:text-blue-300 text-sm font-medium mt-4"
            >
              View all insights
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>

          {/* Featured Services */}
          <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-xl p-6 border border-purple-500/30">
            <div className="flex items-center gap-2 mb-6">
              <Star className="w-5 h-5 text-purple-400" />
              <h3 className="text-xl font-bold text-white">Featured Services</h3>
            </div>
            
            <div className="space-y-4">
              {featuredServices.map((service) => (
                <Link
                  key={service.id}
                  to={`/services/${service.id}`}
                  className="block p-4 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-3">
                    <div className="text-2xl">{service.icon}</div>
                    <div className="flex-1">
                      <h4 className="text-white font-medium mb-1 group-hover:text-purple-300 transition-colors">
                        {service.title}
                      </h4>
                      <p className="text-gray-400 text-sm mb-2 line-clamp-2">
                        {service.description}
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {service.features.slice(0, 2).map((feature, idx) => (
                          <span key={idx} className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            
            <Link
              to="/services"
              className="inline-flex items-center text-purple-400 hover:text-purple-300 text-sm font-medium mt-4"
            >
              Explore all services
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>

          {/* Success Stories */}
          <div className="bg-gradient-to-br from-green-900/20 to-blue-900/20 rounded-xl p-6 border border-green-500/30">
            <div className="flex items-center gap-2 mb-6">
              <Users className="w-5 h-5 text-green-400" />
              <h3 className="text-xl font-bold text-white">Success Stories</h3>
            </div>
            
            <div className="space-y-4">
              {latestCaseStudies.map((study) => (
                <Link
                  key={study.id}
                  to={`/case-studies/${study.id}`}
                  className="block p-4 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-2 py-1 bg-green-500/20 text-green-300 text-xs font-medium rounded">
                          {study.industry}
                        </span>
                      </div>
                      <h4 className="text-white font-medium mb-1 group-hover:text-green-300 transition-colors">
                        {study.title}
                      </h4>
                      <p className="text-gray-400 text-sm mb-2">
                        {study.company}
                      </p>
                      <div className="text-xs text-green-400 font-medium">
                        {study.results[0]}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            
            <Link
              to="/case-studies"
              className="inline-flex items-center text-green-400 hover:text-green-300 text-sm font-medium mt-4"
            >
              View all case studies
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/resources"
              className="inline-flex items-center px-8 py-4 border border-blue-500/50 text-blue-300 font-medium rounded-lg hover:bg-blue-500/10 transition-all duration-300"
            >
              Explore Resources
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewContentShowcase2025;