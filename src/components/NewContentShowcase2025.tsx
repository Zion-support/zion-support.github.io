import React from 'react';
import { ArrowRight, Calendar, Clock, Star, TrendingUp, Users, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { featuredBlogPosts, featuredServices } from '../content/content-config';

const NewContentShowcase2025: React.FC = () => {
  const featuredBlogs = featuredBlogPosts.slice(0, 3);
  const featuredServicesList = featuredServices.slice(0, 3);

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-medium mb-8">
            <Star className="w-4 h-4 mr-2 animate-pulse" />
            NEW 2025 CONTENT & SERVICES
            <Star className="w-4 h-4 ml-2 animate-pulse" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Revolutionary AI Solutions
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Discover our latest breakthrough content and cutting-edge AI services that are transforming industries worldwide.
          </p>
        </div>

        {/* New Blog Articles */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-12">
            <h3 className="text-3xl font-bold text-white flex items-center gap-3">
              <TrendingUp className="w-8 h-8 text-blue-400" />
              Latest Articles
            </h3>
            <Link 
              to="/blog" 
              className="text-blue-400 hover:text-blue-300 font-semibold flex items-center gap-2 transition-colors"
            >
              View All Articles
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredBlogs.map((post, index) => (
              <article 
                key={post.id} 
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105 border border-white/20"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs uppercase tracking-wider text-blue-300 bg-blue-500/20 px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  {post.featured && (
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs px-2 py-1 rounded-full font-medium">
                      FEATURED
                    </span>
                  )}
                </div>
                
                <h4 className="text-xl font-bold text-white mb-3 line-clamp-2">
                  {post.title}
                </h4>
                
                <p className="text-slate-300 mb-4 text-sm line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between text-sm text-slate-400 mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {post.metrics && (
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {post.metrics.slice(0, 2).map((metric, idx) => (
                      <div key={idx} className="text-center">
                        <div className="text-lg font-bold text-green-400">{metric.value}</div>
                        <div className="text-xs text-slate-400">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                )}

                <Link 
                  to={post.url}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 inline-flex items-center justify-center gap-2"
                >
                  Read Article
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </article>
            ))}
          </div>
        </div>

        {/* New Services */}
        <div>
          <div className="flex items-center justify-between mb-12">
            <h3 className="text-3xl font-bold text-white flex items-center gap-3">
              <Zap className="w-8 h-8 text-purple-400" />
              New AI Services
            </h3>
            <Link 
              to="/services" 
              className="text-purple-400 hover:text-purple-300 font-semibold flex items-center gap-2 transition-colors"
            >
              Explore All Services
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredServicesList.map((service, index) => (
              <div 
                key={service.id}
                className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-6 hover:from-white/20 hover:to-white/10 transition-all duration-300 hover:scale-105 border border-white/20"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs uppercase tracking-wider text-purple-300 bg-purple-500/20 px-3 py-1 rounded-full">
                    {service.category}
                  </span>
                  {service.newBadge && (
                    <span className="bg-gradient-to-r from-green-400 to-emerald-500 text-black text-xs px-2 py-1 rounded-full font-medium">
                      NEW
                    </span>
                  )}
                </div>

                <h4 className="text-xl font-bold text-white mb-3 line-clamp-2">
                  {service.title}
                </h4>

                <p className="text-slate-300 mb-4 text-sm line-clamp-3">
                  {service.shortDescription}
                </p>

                <div className="mb-4">
                  <div className="text-sm text-slate-400 mb-2">Starting at</div>
                  <div className="text-2xl font-bold text-green-400">
                    {service.pricing.startingPrice}
                  </div>
                  <div className="text-xs text-slate-400">
                    {service.pricing.description}
                  </div>
                </div>

                {service.metrics && (
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {service.metrics.slice(0, 2).map((metric, idx) => (
                      <div key={idx} className="text-center">
                        <div className="text-lg font-bold text-cyan-400">{metric.value}</div>
                        <div className="text-xs text-slate-400">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                )}

                <div className="flex flex-col gap-2">
                  <Link 
                    to={service.slug || `/services/${service.id}`}
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 inline-flex items-center justify-center gap-2"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link 
                    to="/contact"
                    className="w-full border border-white/30 text-white py-2 px-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 text-center"
                  >
                    Get Quote
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-400/30 rounded-2xl p-8">
            <h4 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h4>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
              Join 500+ companies already using our AI solutions to achieve unprecedented results. 
              Get started with a free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 inline-flex items-center justify-center gap-2"
              >
                <Users className="w-5 h-5" />
                Start Free Consultation
              </Link>
              <Link 
                to="/case-studies"
                className="border border-white/30 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all duration-300 hover:scale-105 inline-flex items-center justify-center gap-2"
              >
                View Success Stories
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewContentShowcase2025;