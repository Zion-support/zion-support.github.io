import React from 'react';
import Link from 'next/link';

const RevolutionaryTechTrends2027Banner: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-8 py-3 mb-8">
            <span className="text-lg font-bold">🌟 REVOLUTIONARY TECH TRENDS 2027</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            The Next Generation of Innovation
          </h2>
          <p className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto leading-relaxed">
            Discover the cutting-edge technologies that will reshape industries and create unprecedented opportunities 
            for business growth and transformation.
          </p>
        </div>

        {/* Technology trends grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 group">
            <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">🔬</div>
            <h3 className="text-xl font-bold mb-3">Bio-Integrated AI</h3>
            <p className="text-gray-200 text-sm mb-4">
              AI systems that integrate with biological processes for enhanced human capabilities.
            </p>
            <Link href="/ai-2030-future-vision/bio-integration" className="text-cyan-300 font-semibold text-sm hover:text-cyan-200">
              Explore →
            </Link>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 group">
            <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">🌍</div>
            <h3 className="text-xl font-bold mb-3">Climate AI Solutions</h3>
            <p className="text-gray-200 text-sm mb-4">
              AI-powered environmental monitoring and climate change mitigation technologies.
            </p>
            <Link href="/sustainable-ai-2025" className="text-cyan-300 font-semibold text-sm hover:text-cyan-200">
              Learn More →
            </Link>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 group">
            <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">🏭</div>
            <h3 className="text-xl font-bold mb-3">Industrial Metaverse</h3>
            <p className="text-gray-200 text-sm mb-4">
              Virtual reality environments for manufacturing, training, and industrial operations.
            </p>
            <Link href="/automation/industrial-metaverse" className="text-cyan-300 font-semibold text-sm hover:text-cyan-200">
              Discover →
            </Link>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 group">
            <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">🔒</div>
            <h3 className="text-xl font-bold mb-3">Quantum Security</h3>
            <p className="text-gray-200 text-sm mb-4">
              Unbreakable encryption and security systems powered by quantum computing.
            </p>
            <Link href="/ai-2025-cybersecurity-revolution" className="text-cyan-300 font-semibold text-sm hover:text-cyan-200">
              Secure →
            </Link>
          </div>
        </div>

        {/* Featured case study */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 mb-16 border border-white/20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">Fortune 500 Success Story</h3>
              <p className="text-lg mb-6 opacity-90">
                "Zion Tech Group's AI solutions increased our operational efficiency by 340% and reduced costs by $50M annually. 
                The ROI was achieved within 6 months."
              </p>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-lg">JD</span>
                </div>
                <div>
                  <div className="font-semibold">John Davis</div>
                  <div className="text-sm opacity-75">CTO, Global Manufacturing Corp</div>
                </div>
              </div>
              <Link 
                href="/case-studies/fortune-500-transformation" 
                className="bg-white text-teal-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
              >
                Read Full Case Study
              </Link>
            </div>
            <div className="bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-xl p-8 text-center">
              <div className="text-4xl font-bold text-white mb-2">340%</div>
              <div className="text-lg opacity-90 mb-4">Efficiency Increase</div>
              <div className="text-2xl font-bold text-green-300 mb-2">$50M</div>
              <div className="text-sm opacity-75">Annual Cost Savings</div>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-6">Ready to Lead the Innovation Revolution?</h3>
          <p className="text-xl mb-8 opacity-90">
            Partner with us to implement these revolutionary technologies in your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/services"
              className="bg-white text-teal-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors"
            >
              Explore Our Solutions
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-teal-600 transition-colors"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RevolutionaryTechTrends2027Banner;