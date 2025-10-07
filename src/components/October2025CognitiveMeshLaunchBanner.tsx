import React, { memo } from 'react';
import { Link } from 'react-router-dom';

/**
 * October 2025 Cognitive Mesh Orchestration Platform Launch Banner
 * Promotes the new Cognitive Mesh content including blog, case study, and services
 * 
 * @component
 * @description High-performance promotional banner with accessibility features
 */
const October2025CognitiveMeshLaunchBanner: React.FC = memo(() => {
  return (
    <section 
      className="relative bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 overflow-hidden"
      aria-label="Cognitive Mesh Platform Launch Announcement"
    >
      {/* Animated background elements - purely decorative */}
      <div className="absolute inset-0 overflow-hidden opacity-20" aria-hidden="true">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-float"></div>
        <div 
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-float"
          style={{ animationDelay: '2s' }}
        ></div>
        <div 
          className="absolute top-1/2 left-1/2 w-60 h-60 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-float"
          style={{ animationDelay: '4s' }}
        ></div>
      </div>

      <div className="container mx-auto px-6 py-12 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-8">
          <div 
            className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full mb-6 animate-fade-in"
            role="status"
            aria-label="New product launch announcement"
          >
             aria-hidden="true" <span className="text-white font-bold text-lg">
              🚀 JUST LAUNCHED - OCTOBER 2025
            </span>
             aria-hidden="true"</div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-slide-up">
            Cognitive Mesh Orchestration Platform
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-6 max-w-4xl mx-auto animate-fade-in">
            The Revolutionary Distributed AI Platform Transforming Enterprise Operations
          </p>

          <ul className="flex flex-wrap items-center justify-center gap-4 mb-8 list-none" aria-label="Platform key statistics">
            <li className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
              <Network className="w-5 h-5 text-green-300" aria-hidden="true" <span className="text-white font-semibold">3,500+ AI Agents</span>
            </li>
            <li className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
               aria-hidden="true" <span className="text-white font-semibold">99.99% Uptime</span>
            </li>
            <li className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
               aria-hidden="true" <span className="text-white font-semibold">Sub-3ms Latency</span>
            </li>
          </ul>
        </div>

        {/* Key Benefits Grid */}
        <div className="grid md:grid-cols-4 gap-6 mb-10" role="list" aria-label="Platform benefits and achievements">
          <article className="bg-white/10 backdrop-blur-sm rounded-xl p-6 transform hover:scale-105 transition-all duration-300" role="listitem">
            <p className="text-3xl font-bold text-white mb-2" aria-label="Total value created">$12B</p>
            <p className="text-white/80 text-sm">Total Value Created</p>
            <p className="text-green-300 text-xs mt-1">Latest Case Study</p>
          </article>

          <article className="bg-white/10 backdrop-blur-sm rounded-xl p-6 transform hover:scale-105 transition-all duration-300" role="listitem">
            <p className="text-3xl font-bold text-white mb-2" aria-label="Fraud detection accuracy">99.7%</p>
            <p className="text-white/80 text-sm">Fraud Detection Accuracy</p>
            <p className="text-green-300 text-xs mt-1">Industry Leading</p>
          </article>

          <article className="bg-white/10 backdrop-blur-sm rounded-xl p-6 transform hover:scale-105 transition-all duration-300" role="listitem">
            <p className="text-3xl font-bold text-white mb-2" aria-label="Cost reduction">70%</p>
            <p className="text-white/80 text-sm">Cost Reduction</p>
            <p className="text-green-300 text-xs mt-1">Proven Results</p>
          </article>

          <article className="bg-white/10 backdrop-blur-sm rounded-xl p-6 transform hover:scale-105 transition-all duration-300" role="listitem">
            <p className="text-3xl font-bold text-white mb-2" aria-label="Return on investment">425%</p>
            <p className="text-white/80 text-sm">ROI in 18 Months</p>
            <p className="text-green-300 text-xs mt-1">Fortune 100 Client</p>
          </article>
        </div>

        {/* Feature Highlights */}
        <section className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8" aria-labelledby="capabilities-heading">
          <h2 id="capabilities-heading" className="text-2xl font-bold text-white mb-6 text-center">
            Revolutionary Capabilities
          </h2>
          <ul className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 list-none">
            <li className="flex items-start gap-3">
               aria-hidden="true" <div>
                <h3 className="font-semibold text-white mb-1">Distributed Intelligence</h3>
                <p className="text-sm text-white/80">Edge-to-cloud AI processing with sub-millisecond latency</p>
              </div>
            </li>

            <li className="flex items-start gap-3">
               aria-hidden="true" <div>
                <h3 className="font-semibold text-white mb-1">Autonomous Orchestration</h3>
                <p className="text-sm text-white/80">Self-healing infrastructure with dynamic load balancing</p>
              </div>
            </li>

            <li className="flex items-start gap-3">
               aria-hidden="true" <div>
                <h3 className="font-semibold text-white mb-1">Cognitive Coordination</h3>
                <p className="text-sm text-white/80">Multi-agent collaboration and emergent intelligence</p>
              </div>
            </li>

            <li className="flex items-start gap-3">
               aria-hidden="true" <div>
                <h3 className="font-semibold text-white mb-1">Adaptive Scaling</h3>
                <p className="text-sm text-white/80">Elastic capacity with 85%+ resource utilization</p>
              </div>
            </li>
          </ul>
        </section>

        {/* Content Cards */}
        <nav className="grid md:grid-cols-3 gap-6 mb-10" aria-label="Featured content links">
          {/* Blog Post Card */}
          <Link 
            to="/blog"
            className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 group"
            aria-label="Read technical article about Cognitive Mesh Orchestration"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-blue-500/30 rounded-lg" aria-hidden="true">
                <Network className="w-6 h-6 text-white" aria-hidden="true"</div>
              <div>
                <p className="text-sm text-blue-300 font-semibold">TECHNICAL DEEP DIVE</p>
                <p className="text-xs text-white/60">Blog Post</p>
              </div>
            </div>
            <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-200 transition-colors">
              Cognitive Mesh Orchestration: The Future of Distributed AI
            </h3>
            <p className="text-sm text-white/80 mb-4">
              Discover how distributed intelligence, autonomous coordination, and adaptive learning 
              achieve 10-100x performance improvements.
            </p>
            <span className="flex items-center gap-2 text-blue-300 font-semibold">
              <span>Read Article</span>
               aria-hidden="true"</span>
          </Link>

          {/* Case Study Card */}
          <Link 
            to="/case-studies"
            className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 group"
            aria-label="View case study about $12 billion FinTech transformation"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-green-500/30 rounded-lg" aria-hidden="true">
                 aria-hidden="true"</div>
              <div>
                <p className="text-sm text-green-300 font-semibold">SUCCESS STORY</p>
                <p className="text-xs text-white/60">Case Study</p>
              </div>
            </div>
            <h3 className="text-lg font-bold text-white mb-2 group-hover:text-green-200 transition-colors">
              Global FinTech: $12 Billion Value Creation in 18 Months
            </h3>
            <p className="text-sm text-white/80 mb-4">
              How a Fortune 100 financial services company achieved 99.7% fraud detection accuracy 
              and $2.8B annual savings.
            </p>
            <span className="flex items-center gap-2 text-green-300 font-semibold">
              <span>View Case Study</span>
               aria-hidden="true"</span>
          </Link>

          {/* Services Card */}
          <Link 
            to="/services"
            className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 group"
            aria-label="Explore Cognitive Mesh Platform services and pricing"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-purple-500/30 rounded-lg" aria-hidden="true">
                 aria-hidden="true"</div>
              <div>
                <p className="text-sm text-purple-300 font-semibold">ENTERPRISE SOLUTION</p>
                <p className="text-xs text-white/60">Service Offering</p>
              </div>
            </div>
            <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-200 transition-colors">
              Cognitive Mesh Platform Services
            </h3>
            <p className="text-sm text-white/80 mb-4">
              Implementation, managed services, consulting, and custom development. 
              Starting at $250K with 300-500% ROI.
            </p>
            <span className="flex items-center gap-2 text-purple-300 font-semibold">
              <span>Explore Services</span>
               aria-hidden="true"</span>
          </Link>
        </nav>

        {/* Call to Action */}
        <div className="text-center" role="region" aria-label="Call to action">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-purple-600 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-105"
              aria-label="Schedule a free consultation about Cognitive Mesh Platform"
            >
               aria-hidden="true" />
              Schedule Free Consultation
               aria-hidden="true"</Link>
            
            <Link
              to="/blog"
              className="inline-flex items-center justify-center gap-2 bg-transparent hover:bg-white/10 text-white border-2 border-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300"
              aria-label="Learn more about Cognitive Mesh technology"
            >
              <Network className="w-5 h-5" aria-hidden="true" />
              Learn More
            </Link>
          </div>

          <p className="text-white/80 text-sm mt-6 max-w-2xl mx-auto">
            ✨ <strong>Limited Time Offer:</strong> Get 50% off implementation fees for October 2025 sign-ups. 
            Free 2-week assessment included. No commitment required.
          </p>
        </div>
      </div>
    </section>
  );
});

October2025CognitiveMeshLaunchBanner.displayName = 'October2025CognitiveMeshLaunchBanner';

export default October2025CognitiveMeshLaunchBanner;
