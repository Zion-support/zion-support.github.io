import React from 'react';

const AdvertisingBanner: React.FC = () => {
  return (
    <div className="py-16 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 mb-8">
            <span className="text-white font-bold text-lg tracking-wider uppercase">
              🚀 SPECIAL OFFER
            </span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 text-white">
            Transform Your Business Today
          </h2>
          
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-8">
            Get exclusive access to our premium AI solutions and accelerate your digital transformation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-6">What You Get</h3>
            <ul className="space-y-4">
              {[
                'Advanced AI Integration',
                '24/7 Expert Support',
                'Custom Solutions',
                'Performance Optimization',
                'Security & Compliance'
              ].map((feature, index) => (
                <li key={index} className="flex items-center gap-3 text-white">
                  <span className="text-green-400 text-xl">✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-6">Limited Time Offer</h3>
            <div className="text-center mb-6">
              <div className="text-4xl font-extrabold text-yellow-400 mb-2">50% OFF</div>
              <div className="text-white/80">First 100 customers only</div>
            </div>
            
            <div className="space-y-4">
              <a
                href="/contact"
                className="w-full bg-white text-blue-600 font-bold py-4 px-6 rounded-xl hover:bg-gray-100 transition-colors text-center block"
              >
                Get Started Now
              </a>
              <a
                href="/demo"
                className="w-full border-2 border-white text-white font-bold py-4 px-6 rounded-xl hover:bg-white hover:text-blue-600 transition-colors text-center block"
              >
                Schedule Demo
              </a>
            </div>
            
            <div className="text-center mt-6">
              <p className="text-white/70 text-sm">
                ⏰ Offer expires in 48 hours
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvertisingBanner;