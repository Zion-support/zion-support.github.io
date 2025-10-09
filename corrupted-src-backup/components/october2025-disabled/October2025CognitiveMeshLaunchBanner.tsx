import React, { memo } from 'react';
import { ArrowRight } from 'lucide-react';

/**
 * October 2025 Cognitive Mesh Orchestration Platform Launch Banner
 * Promotes the new Cognitive Mesh content including blog case study and services
 * 
 * @component
 * @description High-performance promotional banner with accessibility features
 */
const October2025CognitiveMeshLaunchBanner: React.FC = memo(() => {
  return (
    <section 
      className="relative bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 overflow-hidden"
      aria-label="Cognitive Mesh Platform Launch Announcement"
     > {/* Animated background elements - purely decorative */}
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
              <Network className="w-5 h-5 text-green-300" aria-hidden="true" />
              <span className="text-white font-semibold">3,500+ AI Agents</span>
            </li>
            <li className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
              <Activity className="w-5 h-5 text-blue-300" aria-hidden="true" />
              <span className="text-white font-semibold">99.99% Uptime</span>
            </li>
            <li className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
              <Zap className="w-5 h-5 text-yellow-300" aria-hidden="true" />
              <span className="text-white font-semibold">Sub-3ms Latency</span>
            </li>
          </ul>
        </div>

              </div>
            </li>
          </ul>
        </section>

        {/* Call to Action */}
        <div  className="text-center" role="region" aria-label="Call to action">
          <div  className="inline-flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact"
               className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-purple-600 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-105"
              aria-label="Schedule a free consultation about Cognitive Mesh Platform"
            >

              Schedule Free Consultation
            </Link>
            <Link
              to="/blog"
               className="inline-flex items-center justify-center gap-2 bg-transparent hover:bg-white/10 text-white border-2 border-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300"
              aria-label="Learn more about Cognitive Mesh technology"
            >
              <Network  className="w-5 h-5" aria-hidden="true" />
              Learn More
            </Link>
          </div>
          <p  className="text-white/80 text-sm mt-6 max-w-2xl mx-auto">
            ✨ <strong>Limited Time Offer:</strong> Get 50% off implementation fees for October 2025 sign-ups. 
            Free 2-week assessment included. No commitment required.
          </p>
        </div>
    </section>
  );
});


export default October2025CognitiveMeshLaunchBanner;