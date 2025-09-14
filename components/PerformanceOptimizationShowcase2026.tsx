import React from 'react';
import Link from 'next/link';

export default function PerformanceOptimizationShowcase2026() {
  return (
    <section className="py-20 bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-emerald-400 via-transparent to-cyan-600"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-teal-500 to-transparent rounded-full transform translate-x-40 translate-y-40"></div>
        <div className="absolute top-1/3 left-1/3 w-64 h-64 bg-gradient-to-r from-green-400 to-blue-500 rounded-full opacity-20"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-white bg-opacity-20 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">⚡ PERFORMANCE OPTIMIZATION 2026</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-300 to-cyan-300 bg-clip-text text-transparent">
            Lightning-Fast Performance
          </h2>
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Experience unprecedented speed and efficiency with our advanced performance 
            optimization technologies that deliver exceptional user experiences.
          </p>
        </div>

        {/* Performance Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="text-center bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300 group">
            <div className="text-5xl font-bold text-emerald-300 mb-3 group-hover:scale-110 transition-transform">98%</div>
            <div className="text-gray-300 text-sm font-medium">Faster Load Times</div>
            <div className="text-xs text-gray-400 mt-2">vs. industry average</div>
          </div>
          <div className="text-center bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300 group">
            <div className="text-5xl font-bold text-cyan-300 mb-3 group-hover:scale-110 transition-transform">&lt;100ms</div>
            <div className="text-gray-300 text-sm font-medium">Response Time</div>
            <div className="text-xs text-gray-400 mt-2">Global average</div>
          </div>
          <div className="text-center bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300 group">
            <div className="text-5xl font-bold text-teal-300 mb-3 group-hover:scale-110 transition-transform">99.99%</div>
            <div className="text-gray-300 text-sm font-medium">Uptime</div>
            <div className="text-xs text-gray-400 mt-2">Service availability</div>
          </div>
          <div className="text-center bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300 group">
            <div className="text-5xl font-bold text-green-300 mb-3 group-hover:scale-110 transition-transform">85%</div>
            <div className="text-gray-300 text-sm font-medium">Bandwidth Saved</div>
            <div className="text-xs text-gray-400 mt-2">Through optimization</div>
          </div>
        </div>

        {/* Optimization Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Code Splitting */}
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-500 group">
            <div className="flex items-center mb-6">
              <div className="text-5xl mr-4 group-hover:animate-pulse">🔧</div>
              <div className="inline-flex items-center bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full px-4 py-2">
                <span className="text-xs font-bold text-white">OPTIMIZED</span>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-4 group-hover:text-emerald-300 transition-colors">
              Intelligent Code Splitting
            </h3>
            <p className="text-gray-300 text-sm mb-4 leading-relaxed">
              Advanced code splitting strategies that load only what's needed, 
              when it's needed, reducing initial bundle size by up to 70%.
            </p>
            <ul className="text-xs text-gray-400 space-y-2">
              <li>• Dynamic imports</li>
              <li>• Route-based splitting</li>
              <li>• Component-level optimization</li>
              <li>• Lazy loading strategies</li>
            </ul>
          </div>

          {/* Caching Strategy */}
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-500 group">
            <div className="flex items-center mb-6">
              <div className="text-5xl mr-4 group-hover:animate-spin">💾</div>
              <div className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full px-4 py-2">
                <span className="text-xs font-bold text-white">CACHED</span>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-4 group-hover:text-emerald-300 transition-colors">
              Multi-Layer Caching
            </h3>
            <p className="text-gray-300 text-sm mb-4 leading-relaxed">
              Sophisticated caching mechanisms across browser, CDN, and server layers 
              for lightning-fast content delivery and reduced server load.
            </p>
            <ul className="text-xs text-gray-400 space-y-2">
              <li>• Browser cache optimization</li>
              <li>• CDN edge caching</li>
              <li>• Server-side caching</li>
              <li>• Database query caching</li>
            </ul>
          </div>

          {/* Image Optimization */}
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-500 group">
            <div className="flex items-center mb-6">
              <div className="text-5xl mr-4 group-hover:animate-bounce">🖼️</div>
              <div className="inline-flex items-center bg-gradient-to-r from-teal-500 to-green-500 rounded-full px-4 py-2">
                <span className="text-xs font-bold text-white">COMPRESSED</span>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-4 group-hover:text-emerald-300 transition-colors">
              Advanced Image Optimization
            </h3>
            <p className="text-gray-300 text-sm mb-4 leading-relaxed">
              Next-generation image compression and optimization that maintains 
              quality while reducing file sizes by up to 90%.
            </p>
            <ul className="text-xs text-gray-400 space-y-2">
              <li>• WebP/AVIF formats</li>
              <li>• Responsive images</li>
              <li>• Lazy loading</li>
              <li>• Progressive enhancement</li>
            </ul>
          </div>

          {/* Database Optimization */}
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-500 group">
            <div className="flex items-center mb-6">
              <div className="text-5xl mr-4 group-hover:animate-pulse">🗄️</div>
              <div className="inline-flex items-center bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full px-4 py-2">
                <span className="text-xs font-bold text-white">OPTIMIZED</span>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-4 group-hover:text-emerald-300 transition-colors">
              Database Performance
            </h3>
            <p className="text-gray-300 text-sm mb-4 leading-relaxed">
              Optimized database queries and indexing strategies that deliver 
              sub-millisecond response times for complex operations.
            </p>
            <ul className="text-xs text-gray-400 space-y-2">
              <li>• Query optimization</li>
              <li>• Index optimization</li>
              <li>• Connection pooling</li>
              <li>• Read replicas</li>
            </ul>
          </div>

          {/* CDN Integration */}
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-500 group">
            <div className="flex items-center mb-6">
              <div className="text-5xl mr-4 group-hover:animate-spin">🌐</div>
              <div className="inline-flex items-center bg-gradient-to-r from-orange-500 to-red-500 rounded-full px-4 py-2">
                <span className="text-xs font-bold text-white">GLOBAL</span>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-4 group-hover:text-emerald-300 transition-colors">
              Global CDN Network
            </h3>
            <p className="text-gray-300 text-sm mb-4 leading-relaxed">
              Worldwide content delivery network with 200+ edge locations 
              ensuring fast content delivery to users globally.
            </p>
            <ul className="text-xs text-gray-400 space-y-2">
              <li>• 200+ edge locations</li>
              <li>• Smart routing</li>
              <li>• DDoS protection</li>
              <li>• SSL/TLS termination</li>
            </ul>
          </div>

          {/* Monitoring & Analytics */}
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-500 group">
            <div className="flex items-center mb-6">
              <div className="text-5xl mr-4 group-hover:animate-pulse">📊</div>
              <div className="inline-flex items-center bg-gradient-to-r from-pink-500 to-purple-500 rounded-full px-4 py-2">
                <span className="text-xs font-bold text-white">MONITORED</span>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-4 group-hover:text-emerald-300 transition-colors">
              Real-Time Monitoring
            </h3>
            <p className="text-gray-300 text-sm mb-4 leading-relaxed">
              Comprehensive performance monitoring with real-time alerts 
              and detailed analytics for continuous optimization.
            </p>
            <ul className="text-xs text-gray-400 space-y-2">
              <li>• Real-time metrics</li>
              <li>• Performance alerts</li>
              <li>• User experience tracking</li>
              <li>• Automated optimization</li>
            </ul>
          </div>
        </div>

        {/* Performance Comparison */}
        <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-3xl p-12 border border-white border-opacity-20 mb-16">
          <h3 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-emerald-300 to-cyan-300 bg-clip-text text-transparent">
            Performance Comparison
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-red-300 mb-2">Industry Average</div>
              <div className="text-4xl font-bold text-red-400 mb-2">3.2s</div>
              <div className="text-gray-400 text-sm">Page Load Time</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-300 mb-2">Our Platform</div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">0.8s</div>
              <div className="text-gray-400 text-sm">Page Load Time</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-emerald-300 mb-2">Improvement</div>
              <div className="text-4xl font-bold text-emerald-400 mb-2">75%</div>
              <div className="text-gray-400 text-sm">Faster</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-3xl p-12 border border-white border-opacity-20">
            <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-emerald-300 to-cyan-300 bg-clip-text text-transparent">
              Experience Lightning Speed
            </h3>
            <p className="text-gray-300 mb-8 max-w-3xl mx-auto text-lg leading-relaxed">
              Join thousands of businesses that have transformed their digital presence 
              with our cutting-edge performance optimization technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/services"
                className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 hover:from-emerald-700 hover:via-teal-700 hover:to-cyan-700 px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Optimize Your Platform
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-emerald-900 px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105"
              >
                Get Performance Audit
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}