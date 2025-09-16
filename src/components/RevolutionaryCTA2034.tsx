import React from 'react';

const RevolutionaryCTA2034: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 text-white py-16 mb-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold mb-6">Ready to Experience the Future?</h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
            Join thousands of forward-thinking organizations already using our revolutionary 2034 technology
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center">
            <div className="text-6xl mb-4">🚀</div>
            <h3 className="text-2xl font-bold mb-4">Get Started Today</h3>
            <p className="text-lg opacity-90 mb-6">
              Begin your transformation journey with our cutting-edge technology solutions
            </p>
            <a href="/pages/UltimateTechBreakthrough2034" className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
              Start Now →
            </a>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center">
            <div className="text-6xl mb-4">⚡</div>
            <h3 className="text-2xl font-bold mb-4">Explore Our Showcase</h3>
            <p className="text-lg opacity-90 mb-6">
              Experience our technologies through interactive demonstrations and live demos
            </p>
            <a href="/pages/RevolutionaryTechShowcase2034" className="inline-block bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
              View Demo →
            </a>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center">
            <div className="text-6xl mb-4">🌐</div>
            <h3 className="text-2xl font-bold mb-4">Choose Your Services</h3>
            <p className="text-lg opacity-90 mb-6">
              Select from our comprehensive range of revolutionary services and solutions
            </p>
            <a href="/pages/ComprehensiveServices2034" className="inline-block bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
              Browse Services →
            </a>
          </div>
        </div>

        <div className="text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">Limited Time Offer</h3>
            <p className="text-xl opacity-90 mb-6">
              Get early access to our 2034 technology suite with exclusive pricing and priority support
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                🎯 Claim Early Access
              </button>
              <button className="border border-white/30 text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-colors font-semibold text-lg">
                📞 Contact Sales
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryCTA2034;