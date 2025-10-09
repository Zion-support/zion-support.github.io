'use client';
import React, { useState } from 'react';
        return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Animated Background Effects */}
      <div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '2s' }}
        ></div>
        <div
          className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '1s' }}
        ></div>
      </div>
      <div>
        {/* Header */}
        <div>
          <div>
            <span className="text-2xl">🚀</span>
            <span className="text-yellow-400 font-bold text-lg">ULTIMATE BUSINESS INTELLIGENCE 2025</span>
            <span className="text-2xl">⚡</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">Revolutionary Content<span className="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Showcase 2025</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">Explore our comprehensive collection of AI-powered business intelligence
            content that&apos;s transforming enterprises worldwide</p>
        </div>
        {/* Category Filter */}
        <div>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() =>setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
        {/* Content Grid */}
        <div>
          {filteredContent.map((item) => (
            <div>
              {/* Badge */}
              <div>
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-400 font-semibold text-sm">
                  {item.featured ? 'FEATURED' : 'NEW'}
                </span>
                <span className="text-gray-400 text-sm">{item.type}</span>
              </div>
              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                {item.title}
              </h3>
              {/* Description */}
              <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                {item.description}
              </p>
              {/* Metrics */}
              <div>
                <div>
                  <div>
                    {item.metrics.roi}
                  </div>
                  <div className="text-gray-400 text-xs">ROI</div>
                </div>
                <div>
                  <div>
                    {item.metrics.timeline}
                  </div>
                  <div className="text-gray-400 text-xs">Timeline</div>
                </div>
              </div>
              {/* Tags */}
              <div>
                {item.tags.slice(0, 3).map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-white/10 text-gray-300 text-xs rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              {/* CTA */}
              <Link
                href={item.url}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 w-full justify-center"
              >
                Read {item.readingTime}
                <span className="text-lg">→</span>
              </Link>
            </div>
          ))}
        </div>
        {/* Call to Action */}
        <div>
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-cyan-100 mb-6">Join thousands of enterprises already using our AI-powered solutions</p>
            <div>
              <Link
                to="/contact"
                className="inline-flex items-center px-12 py-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-xl rounded-2xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-2xl"
              >Start Your Transformation<svg className="ml-3 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-12 py-6 border-2 border-blue-400 text-blue-300 font-bold text-xl rounded-2xl hover:bg-blue-400/10 transition-all duration-300"
              >Learn More</Link>
            </div>
          </div>
        </div>
      </div>
    </section>);
}
export default UltimateBusinessIntelligenceShowcase2025