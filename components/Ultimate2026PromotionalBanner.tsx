import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Ultimate2026PromotionalBanner = () => {
  const [currentOffer, setCurrentOffer] = useState(0);

  const offers = [
    {
      title: "🎯 AI 2026 Transformation Package",
      description: "Complete enterprise AI transformation with 300% ROI guarantee",
      discount: "50% OFF",
      originalPrice: "$100,000",
      salePrice: "$50,000",
      features: ["Neural Interface Systems", "Quantum AI Processing", "Autonomous Agents", "24/7 Expert Support"],
      cta: "Get Started Now"
    },
    {
      title: "⚡ Quantum AI Breakthrough Solutions",
      description: "Revolutionary quantum-enhanced AI achieving 500x performance gains",
      discount: "30% OFF",
      originalPrice: "$75,000",
      salePrice: "$52,500",
      features: ["500x Faster Processing", "Impossible Problem Solving", "Quantum Optimization", "Enterprise Integration"],
      cta: "Explore Quantum AI"
    },
    {
      title: "🤖 Autonomous AI Agents Suite",
      description: "Self-evolving AI agents with 300% productivity gains",
      discount: "40% OFF",
      originalPrice: "$60,000",
      salePrice: "$36,000",
      features: ["Autonomous Workflows", "Self-Learning Systems", "Process Optimization", "ROI Tracking"],
      cta: "Deploy AI Agents"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentOffer((prev) => (prev + 1) % offers.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const currentOfferData = offers[currentOffer];

  return (
    <section className="py-16 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-6">
              🔥 Limited Time Offer - Expires Soon!
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Transform Your Enterprise with
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
                Revolutionary AI 2026
              </span>
            </h2>
            
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Join 500+ enterprises achieving unprecedented results with our cutting-edge AI solutions. 
              Experience 300% ROI, 90% efficiency gains, and $250M+ in cost savings.
            </p>

            {/* Key Benefits */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">✓</span>
                </div>
                <span className="text-white font-medium">300% ROI Guarantee</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">✓</span>
                </div>
                <span className="text-white font-medium">90% Efficiency Gains</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">✓</span>
                </div>
                <span className="text-white font-medium">24/7 Expert Support</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">✓</span>
                </div>
                <span className="text-white font-medium">500+ Enterprise Clients</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/services/ai-2026-revolutionary-solutions"
                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-8 py-4 rounded-xl font-bold text-lg hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 text-center"
              >
                🚀 Get Started Today
              </Link>
              <a
                href="tel:+13024640950"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-purple-600 transition-all duration-300 text-center"
              >
                📞 Call +1 302 464 0950
              </a>
            </div>
          </div>

          {/* Right Content - Rotating Offers */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="text-center mb-6">
                <div className="inline-block bg-gradient-to-r from-red-500 to-pink-500 px-4 py-2 rounded-full text-sm font-bold text-white mb-4">
                  {currentOfferData.discount} OFF
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {currentOfferData.title}
                </h3>
                <p className="text-blue-100 text-sm mb-4">
                  {currentOfferData.description}
                </p>
              </div>

              {/* Pricing */}
              <div className="text-center mb-6">
                <div className="flex items-center justify-center gap-4 mb-2">
                  <span className="text-3xl font-bold text-white">
                    {currentOfferData.salePrice}
                  </span>
                  <span className="text-lg text-gray-300 line-through">
                    {currentOfferData.originalPrice}
                  </span>
                </div>
                <div className="text-sm text-green-300 font-medium">
                  You Save ${parseInt(currentOfferData.originalPrice.replace(/[^0-9]/g, '')) - parseInt(currentOfferData.salePrice.replace(/[^0-9]/g, ''))}
                </div>
              </div>

              {/* Features */}
              <div className="space-y-2 mb-6">
                {currentOfferData.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-white text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <Link
                href="/services/ai-2026-revolutionary-solutions"
                className="block w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-3 rounded-xl font-semibold text-center hover:from-purple-600 hover:to-blue-600 transition-all duration-300"
              >
                {currentOfferData.cta}
              </Link>
            </div>

            {/* Offer Indicators */}
            <div className="flex justify-center gap-2 mt-6">
              {offers.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentOffer(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentOffer ? 'bg-yellow-400' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-yellow-400 mb-1">500+</div>
            <div className="text-blue-100 text-sm">Enterprise Clients</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-green-400 mb-1">$250M+</div>
            <div className="text-blue-100 text-sm">Cost Savings Generated</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-purple-400 mb-1">99.9%</div>
            <div className="text-blue-100 text-sm">Success Rate</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-orange-400 mb-1">24/7</div>
            <div className="text-blue-100 text-sm">Expert Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ultimate2026PromotionalBanner;