import React from 'react';

const ContentPromotionBanner: React.FC = () => {
  return (
    <>
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="cyber-card hologram-card p-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
            Transform Your Business with AI
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join thousands of businesses already using our AI solutions to increase productivity, 
            reduce costs, and drive innovation.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">300%</div>
              <div className="text-white font-medium">Productivity Boost</div>
              <div className="text-gray-400 text-sm">Average increase</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">$50M+</div>
              <div className="text-white font-medium">Cost Savings</div>
              <div className="text-gray-400 text-sm">For enterprise clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">95%</div>
              <div className="text-white font-medium">Process Automation</div>
              <div className="text-gray-400 text-sm">Efficiency gain</div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="cyber-button px-8 py-4 text-lg"
            >
              Get Started Today
            </a>
            <a
              href="tel:+13024640950"
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300"
            >
              Call (302) 464-0950
            </a>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default ContentPromotionBanner;