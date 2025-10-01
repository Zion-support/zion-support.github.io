import React from 'react';
import Link from 'next/link';

const MegaTransformationSuccessBanner: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-green-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-green-400 to-blue-400"></div>
        <div className="absolute top-20 left-20 w-64 h-64 bg-green-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-300 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-green-600 to-blue-600 text-white px-6 py-3 rounded-full text-sm font-semibold mb-6">
            🏆 Success Story Featured
          </div>
          
          <h2 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
            $100M AI Transformation Success Story:
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
              {' '}Fortune 500 Mega Breakthrough
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover how a Fortune 500 manufacturing giant achieved unprecedented results through our 
            AI 2026 transformation solutions. This is the most significant digital transformation 
            success story in enterprise history.
          </p>
        </div>

        {/* Success Metrics Grid */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-green-200 text-center hover:shadow-xl transition-shadow">
            <div className="text-4xl font-bold text-green-600 mb-2">$100M</div>
            <div className="text-gray-600 font-semibold">Annual ROI</div>
            <div className="text-sm text-gray-500 mt-2">Achieved in 8 months</div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-blue-200 text-center hover:shadow-xl transition-shadow">
            <div className="text-4xl font-bold text-blue-600 mb-2">95%</div>
            <div className="text-gray-600 font-semibold">Efficiency Gains</div>
            <div className="text-sm text-gray-500 mt-2">Across all operations</div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-purple-200 text-center hover:shadow-xl transition-shadow">
            <div className="text-4xl font-bold text-purple-600 mb-2">300%</div>
            <div className="text-gray-600 font-semibold">Productivity Increase</div>
            <div className="text-sm text-gray-500 mt-2">Workforce transformation</div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-orange-200 text-center hover:shadow-xl transition-shadow">
            <div className="text-4xl font-bold text-orange-600 mb-2">47</div>
            <div className="text-gray-600 font-semibold">Countries</div>
            <div className="text-sm text-gray-500 mt-2">Global deployment</div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Column - Story Highlights */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              The Transformation Journey
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xl font-bold">1</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Assessment & Strategy</h4>
                  <p className="text-gray-600">
                    Comprehensive AI readiness evaluation identified $200M+ optimization opportunities 
                    across 150+ automation candidates.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xl font-bold">2</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Pilot Implementation</h4>
                  <p className="text-gray-600">
                    Strategic pilot deployments achieved 40% reduction in quality defects and 
                    60% improvement in maintenance efficiency.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xl font-bold">3</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Full-Scale Deployment</h4>
                  <p className="text-gray-600">
                    Enterprise-wide transformation across 200+ facilities with 85,000+ employees 
                    trained on AI systems.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="/case-studies/ai-2026-mega-transformation-success-story"
                className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-green-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-center"
              >
                Read Full Case Study →
              </Link>
              <Link
                href="/services/ai-2026-revolutionary-solutions"
                className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-600 hover:text-white transition-all duration-300 text-center"
              >
                Start Your Transformation →
              </Link>
            </div>
          </div>

          {/* Right Column - Client Testimonial */}
          <div className="bg-gradient-to-br from-green-100 to-blue-100 rounded-2xl p-8 border border-green-200">
            <div className="text-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-r from-green-600 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl">🏭</span>
              </div>
              <h4 className="text-xl font-bold text-gray-900">Fortune 500 Manufacturing Leader</h4>
              <p className="text-gray-600">$15+ Billion Annual Revenue</p>
            </div>
            
            <blockquote className="text-lg text-gray-700 italic mb-6 leading-relaxed">
              "The AI transformation led by Zion Tech Group has been nothing short of revolutionary. 
              In just 8 months, we've achieved $100M in annual savings and transformed our entire 
              operation. This isn't just a technology upgrade—it's a complete business transformation."
            </blockquote>
            
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
              <div className="text-left">
                <div className="font-bold text-gray-900">Sarah Chen</div>
                <div className="text-gray-600">Chief Technology Officer</div>
              </div>
            </div>
            
            <div className="mt-6 pt-4 border-t border-gray-300">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-green-600">150</div>
                  <div className="text-sm text-gray-600">Years in Business</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-600">85K+</div>
                  <div className="text-sm text-gray-600">Global Employees</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Implementation Highlights */}
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200 mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Technical Implementation: The AI 2026 Stack
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🤖</span>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Autonomous AI Systems</h4>
              <ul className="text-gray-600 space-y-2 text-left">
                <li>• Self-managing production lines</li>
                <li>• Autonomous quality control</li>
                <li>• Intelligent resource allocation</li>
                <li>• Real-time decision making</li>
              </ul>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">⚛️</span>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Quantum AI Computing</h4>
              <ul className="text-gray-600 space-y-2 text-left">
                <li>• Quantum optimization algorithms</li>
                <li>• Complex scheduling solutions</li>
                <li>• Supply chain optimization</li>
                <li>• Financial modeling</li>
              </ul>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🧠</span>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Neural Interface Systems</h4>
              <ul className="text-gray-600 space-y-2 text-left">
                <li>• Human-AI collaboration</li>
                <li>• Cognitive enhancement tools</li>
                <li>• Intuitive control interfaces</li>
                <li>• Advanced decision support</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Achieve Your Own $100M Success Story?
          </h3>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Join the Fortune 500 companies achieving record-breaking ROI with our AI 2026 solutions. 
            Start your transformation journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              Call +1 302 464 0950
            </a>
            <Link
              href="/services/ai-2026-revolutionary-solutions"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-green-600 transition-colors"
            >
              Explore Solutions
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MegaTransformationSuccessBanner;