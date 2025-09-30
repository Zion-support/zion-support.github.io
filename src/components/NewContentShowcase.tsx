import React from 'react';

const NewContentShowcase: React.FC = () => {
  const latestPosts = newBlogPosts.slice(0, 3);
  const latestCaseStudies = newCaseStudies.slice(0, 3);
  const latestServices = newServices.slice(0, 3);

  return (
    <div className="py-20 bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-zion-cyan rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-zion-purple rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: "2s" }}></div>
        <div className="absolute top-40 left-1/2 w-60 h-60 bg-zion-blue-light rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: "4s" }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-zion-cyan/20 text-zion-cyan text-sm font-medium mb-8 animate-fade-in border border-zion-cyan/30 shadow-lg">
            <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
            Fresh Content & Revolutionary Services
            <Sparkles className="w-4 h-4 ml-2 animate-pulse" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-slide-up">
            <span className="bg-gradient-to-r from-zion-cyan to-zion-blue-light bg-clip-text text-transparent">
              Latest Innovations
            </span>
          </h2>
          
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto animate-fade-in">
            Discover our newest AI solutions, breakthrough case studies, and cutting-edge content 
            that's transforming businesses worldwide.
          </p>
        </div>

        {/* New Services Section */}
        <section className="mb-20">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h3 className="text-3xl font-bold text-white mb-2">🚀 Revolutionary Services</h3>
              <p className="text-zion-slate-light">Breakthrough AI solutions that are reshaping industries</p>
            </div>
            <Link to="/services" className="text-zion-cyan hover:text-white transition-colors flex items-center gap-2">
              View All Services
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {latestServices.map((service) => (
              <div key={service.id} className="card group hover:scale-105 transition-all duration-300 hover:shadow-2xl">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-4xl">{service.icon}</div>
                    <div className="flex gap-2">
                      {service.newBadge && (
                        <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full font-bold">
                          NEW
                        </span>
                      )}
                      {service.trending && (
                        <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded-full font-bold flex items-center gap-1">
                          <TrendingUp className="w-3 h-3" />
                          TRENDING
                        </span>
                      )}
                      {service.pricing.popular && (
                        <span className="bg-purple-500 text-white text-xs px-2 py-1 rounded-full font-bold">
                          POPULAR
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <h4 className="text-xl font-bold text-white mb-3">{service.title}</h4>
                  <p className="text-zion-slate-light mb-4 text-sm">{service.description}</p>
                  
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    {service.metrics.slice(0, 3).map((metric, index) => (
                      <div key={index} className="text-center">
                        <div className="text-lg font-bold text-zion-cyan">{metric.value}</div>
                        <div className="text-xs text-zion-slate">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex gap-2">
                    <Link
                      to={service.ctaLink || `/services/${service.slug}`}
                      className="flex-1 bg-zion-cyan text-zion-blue-dark hover:bg-zion-blue-light px-4 py-2 rounded-lg font-semibold text-center transition-colors text-sm"
                    >
                      {service.cta.primary}
                    </Link>
                    <Link
                      to={`/services/${service.slug}`}
                      className="border border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue-dark px-4 py-2 rounded-lg font-semibold text-center transition-colors text-sm"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* New Blog Posts Section */}
        <section className="mb-20">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h3 className="text-3xl font-bold text-white mb-2">📚 Latest Articles</h3>
              <p className="text-zion-slate-light">Fresh insights on AI, quantum computing, and cybersecurity</p>
            </div>
            <Link to="/blog" className="text-zion-cyan hover:text-white transition-colors flex items-center gap-2">
              View All Articles
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {latestPosts.map((post) => (
              <article key={post.id} className="card group hover:scale-105 transition-all duration-300 hover:shadow-2xl">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs uppercase tracking-wider text-zion-cyan bg-zion-cyan/20 px-2 py-1 rounded">
                      {post.category}
                    </span>
                    <div className="flex gap-1">
                      {post.newBadge && (
                        <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full font-bold">
                          NEW
                        </span>
                      )}
                      {post.trending && (
                        <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded-full font-bold flex items-center gap-1">
                          <TrendingUp className="w-3 h-3" />
                          HOT
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <h4 className="text-xl font-bold text-white mb-3">{post.title}</h4>
                  <p className="text-zion-slate-light mb-4 text-sm">{post.excerpt}</p>
                  
                  <div className="flex items-center justify-between text-sm text-zion-slate mb-4">
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </div>
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                  
                  <Link
                    to={`/blog/${post.slug}`}
                    className="text-zion-cyan hover:text-white font-semibold flex items-center gap-2 transition-colors"
                  >
                    Read Article
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* New Case Studies Section */}
        <section className="mb-20">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h3 className="text-3xl font-bold text-white mb-2">🏆 Success Stories</h3>
              <p className="text-zion-slate-light">Real results from companies using our AI solutions</p>
            </div>
            <Link to="/case-studies" className="text-zion-cyan hover:text-white transition-colors flex items-center gap-2">
              View All Case Studies
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {latestCaseStudies.map((study) => (
              <div key={study.id} className="card group hover:scale-105 transition-all duration-300 hover:shadow-2xl">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs uppercase tracking-wider text-zion-cyan bg-zion-cyan/20 px-2 py-1 rounded">
                      {study.industry}
                    </span>
                    <div className="flex gap-1">
                      {study.newBadge && (
                        <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full font-bold">
                          NEW
                        </span>
                      )}
                      {study.trending && (
                        <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded-full font-bold flex items-center gap-1">
                          <Star className="w-3 h-3" />
                          FEATURED
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <h4 className="text-xl font-bold text-white mb-3">{study.title}</h4>
                  <p className="text-zion-slate-light mb-4 text-sm">{study.excerpt}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-zion-cyan">{study.metrics.primary}</div>
                      <div className="text-xs text-zion-slate">Primary Result</div>
                    </div>
                    {study.metrics.secondary && (
                      <div className="text-center">
                        <div className="text-lg font-semibold text-zion-blue-light">{study.metrics.secondary}</div>
                        <div className="text-xs text-zion-slate">Secondary Result</div>
                      </div>
                    )}
                  </div>
                  
                  <Link
                    to={`/case-studies/${study.slug}`}
                    className="text-zion-cyan hover:text-white font-semibold flex items-center gap-2 transition-colors"
                  >
                    View Case Study
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-zion-slate-light mb-6 max-w-2xl mx-auto">
              Join the companies already achieving breakthrough results with our AI solutions. 
              Start your transformation journey today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-zion-cyan text-zion-blue-dark hover:bg-zion-blue-light px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
              >
                <Sparkles className="w-5 h-5" />
                Start Your Journey
              </Link>
              <Link
                to="/services"
                className="border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue-dark px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewContentShowcase;