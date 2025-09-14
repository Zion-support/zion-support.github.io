import React from 'react';
import Link from 'next/link';

const AI2026UltimateShowcaseBanner: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-20 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width="80" height="80" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Cpath d="M40 40c0-22.091-17.909-40-40-40v40h40z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] animate-pulse"></div>
        <div className="absolute top-0 right-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.03"%3E%3Ccircle cx="30" cy="30" r="1.5"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] animate-bounce"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-full px-8 py-3 mb-8">
            <span className="text-lg font-bold">🌟 AI 2026 ULTIMATE BREAKTHROUGH</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent leading-tight">
            The Future of Business is Here
          </h2>
          
          <p className="text-2xl md:text-3xl opacity-90 mb-12 max-w-5xl mx-auto leading-relaxed">
            Experience the most advanced AI technologies of 2026. Quantum computing, autonomous systems, 
            and revolutionary capabilities that transform how businesses operate and compete.
          </p>
        </div>

        {/* Feature Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Quantum AI */}
          <div className="bg-gradient-to-br from-purple-800 to-indigo-800 rounded-2xl p-8 border border-purple-400 border-opacity-30">
            <div className="text-5xl mb-6 text-center">⚡</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Quantum AI</h3>
            <ul className="space-y-3 text-purple-100">
              <li className="flex items-center">
                <span className="text-green-400 mr-3">✓</span>
                1000x processing speed
              </li>
              <li className="flex items-center">
                <span className="text-green-400 mr-3">✓</span>
                Quantum-safe security
              </li>
              <li className="flex items-center">
                <span className="text-green-400 mr-3">✓</span>
                Enterprise-ready deployment
              </li>
              <li className="flex items-center">
                <span className="text-green-400 mr-3">✓</span>
                99.9% accuracy rate
              </li>
            </ul>
            <div className="mt-6 text-center">
              <Link
                href="/blog/ai-2026-quantum-computing-revolution"
                className="inline-block bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-6 py-3 rounded-lg font-bold hover:from-purple-600 hover:to-indigo-600 transition-all duration-300"
              >
                Explore Quantum AI →
              </Link>
            </div>
          </div>

          {/* Autonomous Systems */}
          <div className="bg-gradient-to-br from-green-800 to-teal-800 rounded-2xl p-8 border border-green-400 border-opacity-30">
            <div className="text-5xl mb-6 text-center">🤖</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Autonomous AI</h3>
            <ul className="space-y-3 text-green-100">
              <li className="flex items-center">
                <span className="text-green-400 mr-3">✓</span>
                Self-managing operations
              </li>
              <li className="flex items-center">
                <span className="text-green-400 mr-3">✓</span>
                Self-optimizing performance
              </li>
              <li className="flex items-center">
                <span className="text-green-400 mr-3">✓</span>
                Self-healing systems
              </li>
              <li className="flex items-center">
                <span className="text-green-400 mr-3">✓</span>
                24/7 autonomous operation
              </li>
            </ul>
            <div className="mt-6 text-center">
              <Link
                href="/blog/ai-2026-autonomous-business-systems"
                className="inline-block bg-gradient-to-r from-green-500 to-teal-500 text-white px-6 py-3 rounded-lg font-bold hover:from-green-600 hover:to-teal-600 transition-all duration-300"
              >
                Discover Autonomous AI →
              </Link>
            </div>
          </div>

          {/* Advanced Capabilities */}
          <div className="bg-gradient-to-br from-pink-800 to-rose-800 rounded-2xl p-8 border border-pink-400 border-opacity-30">
            <div className="text-5xl mb-6 text-center">🚀</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Advanced AI</h3>
            <ul className="space-y-3 text-pink-100">
              <li className="flex items-center">
                <span className="text-green-400 mr-3">✓</span>
                Emotional intelligence
              </li>
              <li className="flex items-center">
                <span className="text-green-400 mr-3">✓</span>
                Creative problem solving
              </li>
              <li className="flex items-center">
                <span className="text-green-400 mr-3">✓</span>
                Predictive analytics
              </li>
              <li className="flex items-center">
                <span className="text-green-400 mr-3">✓</span>
                Human-AI collaboration
              </li>
            </ul>
            <div className="mt-6 text-center">
              <Link
                href="/resources/ai-2026-implementation-ultimate-guide"
                className="inline-block bg-gradient-to-r from-pink-500 to-rose-500 text-white px-6 py-3 rounded-lg font-bold hover:from-pink-600 hover:to-rose-600 transition-all duration-300"
              >
                Implementation Guide →
              </Link>
            </div>
          </div>
        </div>

        {/* Success Metrics */}
        <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-3xl p-12 mb-16 border border-white border-opacity-20">
          <h3 className="text-3xl font-bold text-center mb-12">Proven Results Across Industries</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-300 mb-2">$2.8B</div>
              <div className="text-lg text-purple-200">Value Created</div>
              <div className="text-sm text-purple-300">Fortune 100 Success</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-300 mb-2">340%</div>
              <div className="text-lg text-green-200">Average ROI</div>
              <div className="text-sm text-green-300">Within 12 Months</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-300 mb-2">500+</div>
              <div className="text-lg text-blue-200">Enterprises</div>
              <div className="text-sm text-blue-300">Successfully Transformed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-pink-300 mb-2">99.9%</div>
              <div className="text-lg text-pink-200">Accuracy Rate</div>
              <div className="text-sm text-pink-300">AI Decision Making</div>
            </div>
          </div>
        </div>

        {/* Industry Applications */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">Transforming Every Industry</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { icon: '🏭', name: 'Manufacturing', color: 'from-blue-500 to-cyan-500' },
              { icon: '🏥', name: 'Healthcare', color: 'from-green-500 to-emerald-500' },
              { icon: '🏦', name: 'Finance', color: 'from-purple-500 to-violet-500' },
              { icon: '🏪', name: 'Retail', color: 'from-pink-500 to-rose-500' },
              { icon: '🚗', name: 'Automotive', color: 'from-orange-500 to-red-500' },
              { icon: '🎓', name: 'Education', color: 'from-indigo-500 to-blue-500' }
            ].map((industry, index) => (
              <div key={index} className="text-center">
                <div className={`w-16 h-16 mx-auto mb-3 rounded-full bg-gradient-to-r ${industry.color} flex items-center justify-center text-2xl`}>
                  {industry.icon}
                </div>
                <div className="text-sm font-medium text-white">{industry.name}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h3>
          <p className="text-xl text-purple-200 mb-8 max-w-3xl mx-auto">
            Join the AI 2026 revolution and achieve unprecedented results with cutting-edge AI technologies.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 text-white px-10 py-5 rounded-xl font-bold text-xl hover:from-purple-600 hover:via-pink-600 hover:to-indigo-600 transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              Get Your AI Assessment →
            </Link>
            <Link
              href="/case-studies/ai-2026-global-transformation-success"
              className="border-2 border-white text-white px-10 py-5 rounded-xl font-bold text-xl hover:bg-white hover:text-purple-900 transition-all duration-300 transform hover:scale-105"
            >
              View Success Stories
            </Link>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-8 justify-center text-sm text-purple-200">
            <div className="flex items-center">
              <span className="text-green-400 mr-2">✓</span>
              Free AI Readiness Assessment
            </div>
            <div className="flex items-center">
              <span className="text-green-400 mr-2">✓</span>
              Custom Implementation Roadmap
            </div>
            <div className="flex items-center">
              <span className="text-green-400 mr-2">✓</span>
              Expert AI Consulting
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AI2026UltimateShowcaseBanner;