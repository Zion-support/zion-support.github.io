// import React from 'react';
import { Link } from 'react-router-dom';

export default function NewOctoberContentBanner() {
  return (
    <section className="bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-700 text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full mb-6 animate-pulse">
            <span className="text-2xl">🚀</span>
            <span className="font-bold text-lg">BRAND NEW CONTENT: OCTOBER 2025</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
            Digital Transformation & Cloud-Native AI Excellence
          </h2>
          
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
            Discover the latest enterprise breakthroughs: <strong>$21.1B in combined value</strong> from comprehensive digital transformation and cloud-native AI platforms
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-10">
          {/* Blog Post 1 */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border-2 border-white/30 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-cyan-400 text-cyan-900 px-3 py-1 rounded-full text-sm font-bold">
                📘 NEW GUIDE
              </span>
              <span className="text-cyan-200 text-sm">22 min read</span>
            </div>
            <h3 className="text-2xl font-bold mb-3">
              Digital Transformation Excellence
            </h3>
            <p className="text-cyan-50 mb-6">
              Master AI-powered enterprise transformation achieving <strong>$12.4B value</strong>, 98.7% automation, and 2,845% ROI across 1,200+ deployments.
            </p>
            <ul className="text-sm text-cyan-100 mb-6 space-y-2">
              <li>✓ 98.7% process efficiency gains</li>
              <li>✓ 92% faster time-to-market</li>
              <li>✓ 87% cost reduction strategies</li>
              <li>✓ Complete implementation roadmap</li>
            </ul>
            <Link to="/blog/ai-2025-october-digital-transformation-enterprise-excellence"
              className="inline-block bg-white text-cyan-700 font-bold py-3 px-8 rounded-lg hover:bg-cyan-50 transition-colors"
            >
              Read Complete Guide →
            </Link>
          </div>

          {/* Blog Post 2 */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border-2 border-white/30 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-blue-400 text-blue-900 px-3 py-1 rounded-full text-sm font-bold">
                🏗️ PLATFORM GUIDE
              </span>
              <span className="text-blue-200 text-sm">26 min read</span>
            </div>
            <h3 className="text-2xl font-bold mb-3">
              Cloud-Native AI Platform Excellence
            </h3>
            <p className="text-blue-50 mb-6">
              Build next-gen platforms with <strong>$8.7B value</strong>, 99.99% uptime, 450% performance gains across 2,500+ enterprise deployments.
            </p>
            <ul className="text-sm text-blue-100 mb-6 space-y-2">
              <li>✓ 99.99% mission-critical reliability</li>
              <li>✓ 85% infrastructure cost reduction</li>
              <li>✓ Kubernetes & microservices architecture</li>
              <li>✓ Complete technology stack guide</li>
            </ul>
            <Link to="/blog/ai-2025-october-cloud-native-ai-platform-excellence"
              className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors"
            >
              Read Platform Guide →
            </Link>
          </div>
        </div>

        {/* Case Studies */}
        <div className="bg-gradient-to-r from-emerald-500/20 to-green-500/20 backdrop-blur-md rounded-2xl p-8 border-2 border-white/30 mb-8">
          <div className="text-center mb-6">
            <h3 className="text-3xl font-bold mb-3">🏆 Proven Success Stories</h3>
            <p className="text-xl text-cyan-100">Real enterprise transformations, real results</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Case Study 1 */}
            <div className="bg-white/10 rounded-xl p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-green-400 text-green-900 px-3 py-1 rounded-full text-xs font-bold">
                  💰 $12.4B SUCCESS
                </span>
              </div>
              <h4 className="text-xl font-bold mb-2">
                Fortune 100 Retail Transformation
              </h4>
              <p className="text-green-100 mb-4 text-sm">
                Global retailer with 5,000+ stores achieves <strong>$12.4B value</strong> through comprehensive digital transformation
              </p>
              <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
                <div className="bg-white/10 rounded-lg p-2">
                  <div className="font-bold">98.7%</div>
                  <div className="text-xs text-green-200">Automation</div>
                </div>
                <div className="bg-white/10 rounded-lg p-2">
                  <div className="font-bold">850M+</div>
                  <div className="text-xs text-green-200">Customers</div>
                </div>
              </div>
              <Link to="/case-studies/ai-2025-oct-global-retail-digital-transformation-12-4-billion-success"
                className="text-green-300 font-semibold hover:text-green-100 text-sm"
              >
                View Full Case Study →
              </Link>
            </div>

            {/* Case Study 2 */}
            <div className="bg-white/10 rounded-xl p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-blue-400 text-blue-900 px-3 py-1 rounded-full text-xs font-bold">
                  🚀 $8.7B SUCCESS
                </span>
              </div>
              <h4 className="text-xl font-bold mb-2">
                Fortune 50 Cloud Platform Revolution
              </h4>
              <p className="text-blue-100 mb-4 text-sm">
                Technology leader deploys cloud-native AI platform achieving <strong>$8.7B value</strong> with 12,000+ microservices
              </p>
              <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
                <div className="bg-white/10 rounded-lg p-2">
                  <div className="font-bold">99.99%</div>
                  <div className="text-xs text-blue-200">Uptime</div>
                </div>
                <div className="bg-white/10 rounded-lg p-2">
                  <div className="font-bold">450%</div>
                  <div className="text-xs text-blue-200">Performance</div>
                </div>
              </div>
              <Link to="/case-studies/ai-2025-oct-fortune-50-cloud-native-platform-8-7-billion-success"
                className="text-blue-300 font-semibold hover:text-blue-100 text-sm"
              >
                View Full Case Study →
              </Link>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/content-hub"
              className="bg-white text-purple-700 font-bold py-4 px-10 rounded-lg text-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              Explore All Content →
            </Link>
            <Link to="/contact"
              className="border-2 border-white text-white font-bold py-4 px-10 rounded-lg text-lg hover:bg-white/10 transition-colors"
            >
              Get Free Consultation
            </Link>
          </div>
          <p className="mt-6 text-cyan-100">
            <span className="font-semibold">Ready to transform?</span> Call us: <a href="tel:+13024640950" className="font-bold hover:underline">+1 302 464 0950</a>
          </p>
        </div>
      </div>
    </section>
  );
}
