import React from 'react';
import Link from 'next/link';

const AutonomousBusinessOperationsPromotionBanner = () => {
  return (
    <section className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🤖 AUTONOMOUS BUSINESS OPERATIONS</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Self-Managing Enterprises in 2025
          </h2>
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto">
            Discover how AI-powered autonomous operations are creating self-managing enterprises 
            that operate with minimal human intervention while maximizing efficiency and profitability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
            <div className="text-3xl font-bold text-yellow-400 mb-2">95%</div>
            <div className="text-lg font-semibold mb-2">Autonomous Operation</div>
            <div className="text-sm opacity-80">Manufacturing production lines</div>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
            <div className="text-3xl font-bold text-green-400 mb-2">99.8%</div>
            <div className="text-lg font-semibold mb-2">Quality Accuracy</div>
            <div className="text-sm opacity-80">AI-powered inspection systems</div>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
            <div className="text-3xl font-bold text-blue-400 mb-2">70%</div>
            <div className="text-lg font-semibold mb-2">Cost Reduction</div>
            <div className="text-sm opacity-80">Operational cost savings</div>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
            <div className="text-3xl font-bold text-purple-400 mb-2">300%</div>
            <div className="text-lg font-semibold mb-2">Productivity Increase</div>
            <div className="text-sm opacity-80">Overall equipment effectiveness</div>
          </div>
        </div>

        <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 border border-white border-opacity-20 mb-8">
          <h3 className="text-2xl font-bold mb-6 text-center">Industry Transformations</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="text-lg font-semibold mb-3 text-yellow-400">🏭 Manufacturing</h4>
              <ul className="text-sm space-y-2 opacity-90">
                <li>• Lights-out factories with 95% autonomy</li>
                <li>• Predictive maintenance algorithms</li>
                <li>• Automated procurement systems</li>
                <li>• Real-time supply chain optimization</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-3 text-green-400">💰 Financial Services</h4>
              <ul className="text-sm space-y-2 opacity-90">
                <li>• Algorithmic trading with real-time analysis</li>
                <li>• Automated risk assessment</li>
                <li>• 99.9% uptime for trading systems</li>
                <li>• 24/7 market monitoring</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-3 text-blue-400">🏥 Healthcare</h4>
              <ul className="text-sm space-y-2 opacity-90">
                <li>• Continuous patient monitoring</li>
                <li>• Automated medication management</li>
                <li>• Predictive patient flow</li>
                <li>• Autonomous billing systems</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 border border-white border-opacity-20 mb-8">
          <h3 className="text-2xl font-bold mb-4 text-center">Implementation Framework</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h4 className="text-lg font-semibold mb-2">Foundation Building</h4>
              <p className="text-sm opacity-80">Assessmentpreparationand pilot program design</p>
            </div>
            <div className="text-center">
              <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h4 className="text-lg font-semibold mb-2">Pilot Implementation</h4>
              <p className="text-sm opacity-80">Selective deployment and integration testing</p>
            </div>
            <div className="text-center">
              <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h4 className="text-lg font-semibold mb-2">Full-Scale Deployment</h4>
              <p className="text-sm opacity-80">Enterprise-wide integration and optimization</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/blog/ai-autonomous-business-operations-2025"
              className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-yellow-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105"
            >
              Read Full Article →
            </Link>
            <Link
              href="/case-studies/ai-transformation-1000-roi-success-story"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-teal-600 transition-all duration-300"
            >
              View Success Story
            </Link>
            <Link
              href="/contact"
              className="bg-white bg-opacity-20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-opacity-30 transition-all duration-300"
            >
              Start Your Journey
            </Link>
          </div>
          <p className="text-sm opacity-70 mt-4">
            Join the autonomous business revolution and transform your operations with AI
          </p>
        </div>
      </div>
    </section>
  );
};

export default AutonomousBusinessOperationsPromotionBanner;