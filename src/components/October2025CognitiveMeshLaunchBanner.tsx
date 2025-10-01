import React from 'react';
import { Link } from 'react-router-dom';
import { Network, TrendingUp, Zap, ArrowRight, CheckCircle, Rocket, Star } from 'lucide-react';

/**
 * October 2025 Cognitive Mesh Orchestration Platform Launch Banner
 * Promotes the new Cognitive Mesh content including blog, case study, and services
 */
const October2025CognitiveMeshLaunchBanner: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
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
          <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full mb-6 animate-fade-in">
            <Rocket className="w-5 h-5 text-yellow-300 animate-bounce" />
            <span className="text-white font-bold text-lg">
              🚀 JUST LAUNCHED - OCTOBER 2025
            </span>
            <Star className="w-5 h-5 text-yellow-300 animate-pulse" />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-slide-up">
            Cognitive Mesh Orchestration Platform
          </h2>
          
          <p className="text-xl md:text-2xl text-white/90 mb-6 max-w-4xl mx-auto animate-fade-in">
            The Revolutionary Distributed AI Platform Transforming Enterprise Operations
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
              <Network className="w-5 h-5 text-green-300" />
              <span className="text-white font-semibold">3,500+ AI Agents</span>
            </div>
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
              <TrendingUp className="w-5 h-5 text-blue-300" />
              <span className="text-white font-semibold">99.99% Uptime</span>
            </div>
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
              <Zap className="w-5 h-5 text-yellow-300" />
              <span className="text-white font-semibold">Sub-3ms Latency</span>
            </div>
          </div>
        </div>

        {/* Key Benefits Grid */}
        <div className="grid md:grid-cols-4 gap-6 mb-10">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 transform hover:scale-105 transition-all duration-300">
            <div className="text-3xl font-bold text-white mb-2">$12B</div>
            <div className="text-white/80 text-sm">Total Value Created</div>
            <div className="text-green-300 text-xs mt-1">Latest Case Study</div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 transform hover:scale-105 transition-all duration-300">
            <div className="text-3xl font-bold text-white mb-2">99.7%</div>
            <div className="text-white/80 text-sm">Fraud Detection Accuracy</div>
            <div className="text-green-300 text-xs mt-1">Industry Leading</div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 transform hover:scale-105 transition-all duration-300">
            <div className="text-3xl font-bold text-white mb-2">70%</div>
            <div className="text-white/80 text-sm">Cost Reduction</div>
            <div className="text-green-300 text-xs mt-1">Proven Results</div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 transform hover:scale-105 transition-all duration-300">
            <div className="text-3xl font-bold text-white mb-2">425%</div>
            <div className="text-white/80 text-sm">ROI in 18 Months</div>
            <div className="text-green-300 text-xs mt-1">Fortune 100 Client</div>
          </div>
        </div>

        {/* Feature Highlights */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            Revolutionary Capabilities
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-green-300 flex-shrink-0 mt-1" />
              <div>
                <div className="font-semibold text-white mb-1">Distributed Intelligence</div>
                <div className="text-sm text-white/80">Edge-to-cloud AI processing with sub-millisecond latency</div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-green-300 flex-shrink-0 mt-1" />
              <div>
                <div className="font-semibold text-white mb-1">Autonomous Orchestration</div>
                <div className="text-sm text-white/80">Self-healing infrastructure with dynamic load balancing</div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-green-300 flex-shrink-0 mt-1" />
              <div>
                <div className="font-semibold text-white mb-1">Cognitive Coordination</div>
                <div className="text-sm text-white/80">Multi-agent collaboration and emergent intelligence</div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-green-300 flex-shrink-0 mt-1" />
              <div>
                <div className="font-semibold text-white mb-1">Adaptive Scaling</div>
                <div className="text-sm text-white/80">Elastic capacity with 85%+ resource utilization</div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {/* Blog Post Card */}
          <Link 
            to="/blog"
            className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 group"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-blue-500/30 rounded-lg">
                <Network className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-sm text-blue-300 font-semibold">TECHNICAL DEEP DIVE</div>
                <div className="text-xs text-white/60">Blog Post</div>
              </div>
            </div>
            <h4 className="text-lg font-bold text-white mb-2 group-hover:text-blue-200 transition-colors">
              Cognitive Mesh Orchestration: The Future of Distributed AI
            </h4>
            <p className="text-sm text-white/80 mb-4">
              Discover how distributed intelligence, autonomous coordination, and adaptive learning 
              achieve 10-100x performance improvements.
            </p>
            <div className="flex items-center gap-2 text-blue-300 font-semibold">
              <span>Read Article</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          {/* Case Study Card */}
          <Link 
            to="/case-studies"
            className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 group"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-green-500/30 rounded-lg">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-sm text-green-300 font-semibold">SUCCESS STORY</div>
                <div className="text-xs text-white/60">Case Study</div>
              </div>
            </div>
            <h4 className="text-lg font-bold text-white mb-2 group-hover:text-green-200 transition-colors">
              Global FinTech: $12 Billion Value Creation in 18 Months
            </h4>
            <p className="text-sm text-white/80 mb-4">
              How a Fortune 100 financial services company achieved 99.7% fraud detection accuracy 
              and $2.8B annual savings.
            </p>
            <div className="flex items-center gap-2 text-green-300 font-semibold">
              <span>View Case Study</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          {/* Services Card */}
          <Link 
            to="/services"
            className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 group"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-purple-500/30 rounded-lg">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-sm text-purple-300 font-semibold">ENTERPRISE SOLUTION</div>
                <div className="text-xs text-white/60">Service Offering</div>
              </div>
            </div>
            <h4 className="text-lg font-bold text-white mb-2 group-hover:text-purple-200 transition-colors">
              Cognitive Mesh Platform Services
            </h4>
            <p className="text-sm text-white/80 mb-4">
              Implementation, managed services, consulting, and custom development. 
              Starting at $250K with 300-500% ROI.
            </p>
            <div className="flex items-center gap-2 text-purple-300 font-semibold">
              <span>Explore Services</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-purple-600 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-105"
            >
              <Rocket className="w-5 h-5" />
              Schedule Free Consultation
              <ArrowRight className="w-5 h-5" />
            </Link>
            
            <Link
              to="/blog"
              className="inline-flex items-center justify-center gap-2 bg-transparent hover:bg-white/10 text-white border-2 border-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300"
            >
              <Network className="w-5 h-5" />
              Learn More
            </Link>
          </div>

          <p className="text-white/80 text-sm mt-6 max-w-2xl mx-auto">
            ✨ <strong>Limited Time Offer:</strong> Get 50% off implementation fees for October 2025 sign-ups. 
            Free 2-week assessment included. No commitment required.
          </p>
        </div>
      </div>
    </div>
  );
};

export default October2025CognitiveMeshLaunchBanner;
