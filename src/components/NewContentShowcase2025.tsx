import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Clock, Sparkles, TrendingUp } from 'lucide-react';
import { newBlogPosts2025 } from '../content/new-blog-posts-2025';
import { newCaseStudies2025 } from '../content/new-case-studies-2025';
import { newServices2025 } from '../content/new-services-2025';

const NewContentShowcase2025: React.FC = () => {
  const featuredBlogPosts = newBlogPosts2025.filter(post => post.featured).slice(0, 3);
  const featuredCaseStudies = newCaseStudies2025.filter(caseStudy => caseStudy.featured).slice(0, 3);
  const featuredServices = newServices2025.filter(service => service.featured).slice(0, 3);

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-medium mb-8">
            <Sparkles className="w-4 h-4 mr-2" />
            NEW 2025: Revolutionary AI Content & Solutions
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Latest Breakthroughs in AI Technology
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover cutting-edge AI solutions, in-depth technical articles, and real-world success stories 
            that are transforming industries worldwide.
          </p>
        </div>

        {/* Featured Blog Posts */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Latest Articles
              </span>
              <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">NEW</span>
            </h3>
            <Link to="/blog" className="text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-1">
              View all articles <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {featuredBlogPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover:scale-105">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-sm text-blue-600 font-medium">{post.category}</div>
                    {post.newBadge && (
                      <span className="bg-red-100 text-red-700 text-xs px-2 py-1 rounded-full font-medium">
                        NEW
                      </span>
                    )}
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">{post.title}</h4>
                  <p className="text-gray-600 mb-4 text-sm">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(post.date).toLocaleDateString()}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </span>
                    </div>
                    <Link 
                      to={`/blog/${post.slug}`}
                      className="text-blue-600 hover:text-blue-700 font-medium"
                    >
                      Read more →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Featured Case Studies */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                Success Stories
              </span>
              <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">RESULTS</span>
            </h3>
            <Link to="/case-studies" className="text-green-600 hover:text-green-700 font-semibold flex items-center gap-1">
              View all case studies <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {featuredCaseStudies.map((caseStudy) => (
              <div key={caseStudy.id} className="bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover:scale-105">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-sm text-green-600 font-medium">{caseStudy.industry}</div>
                    {caseStudy.newBadge && (
                      <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full font-medium">
                        NEW
                      </span>
                    )}
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">{caseStudy.title}</h4>
                  <p className="text-gray-600 mb-4 text-sm">{caseStudy.excerpt}</p>
                  
                  {/* Key Metrics */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    {caseStudy.metrics.slice(0, 2).map((metric, index) => (
                      <div key={index} className="text-center p-2 bg-gray-50 rounded-lg">
                        <div className="text-lg font-bold text-green-600">{metric.value}</div>
                        <div className="text-xs text-gray-600">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                  
                  <Link 
                    to={`/case-studies/${caseStudy.slug}`}
                    className="text-green-600 hover:text-green-700 font-medium text-sm"
                  >
                    Read full case study →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Services */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
              <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                New AI Services
              </span>
              <span className="bg-purple-500 text-white text-xs px-2 py-1 rounded-full">BREAKTHROUGH</span>
            </h3>
            <Link to="/services" className="text-purple-600 hover:text-purple-700 font-semibold flex items-center gap-1">
              View all services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {featuredServices.map((service) => (
              <div key={service.id} className="bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover:scale-105">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-sm text-purple-600 font-medium">{service.category}</div>
                    {service.newBadge && (
                      <span className="bg-purple-100 text-purple-700 text-xs px-2 py-1 rounded-full font-medium">
                        NEW
                      </span>
                    )}
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h4>
                  <p className="text-gray-600 mb-4 text-sm">{service.shortDescription}</p>
                  
                  {/* Key Benefits */}
                  <div className="space-y-2 mb-4">
                    {service.benefits.slice(0, 2).map((benefit, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                        <TrendingUp className="w-4 h-4 text-purple-500" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link 
                    to={`/services/${service.slug}`}
                    className="text-purple-600 hover:text-purple-700 font-medium text-sm"
                  >
                    Learn more →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Business with AI?</h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join hundreds of companies already using our AI solutions to achieve breakthrough results. 
              Start your AI transformation journey today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 inline-flex items-center justify-center gap-2"
              >
                Start Free Consultation
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105"
              >
                Explore All Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewContentShowcase2025;