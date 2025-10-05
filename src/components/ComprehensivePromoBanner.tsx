import React from 'react';
import { Link } from 'react-router-dom';

interface ComprehensivePromoBannerProps {
  variant?: 'hero' | 'compact' | 'featured';
  showCount?: number;
  className?: string;
}

const ComprehensivePromoBanner: React.FC<ComprehensivePromoBannerProps> = ({
  variant = 'hero',
  showCount = 3,
  className = ''
}) => {
  const promotions = [
    {
      id: 'ai-innovation',
      title: 'AI Innovation Suite',
      description: 'Revolutionary AI technologies that transform your business operations',
      discount: '50% OFF',
      originalPrice: '$100,000',
      salePrice: '$50,000',
      features: ['Quantum AI Processing', 'Predictive Analytics', 'Autonomous Operations'],
      cta: 'Get Early Access',
      link: '/contact?offer=ai-innovation',
      featured: true
    },
    {
      id: 'cost-optimization',
      title: 'Cost Optimization Package',
      description: 'Reduce operational costs by up to 60% with our AI solutions',
      discount: '40% OFF',
      originalPrice: '$75,000',
      salePrice: '$45,000',
      features: ['Resource Optimization', 'Energy Efficiency', 'Process Automation'],
      cta: 'Start Saving',
      link: '/contact?offer=cost-optimization',
      featured: false
    },
    {
      id: 'performance-boost',
      title: 'Performance Boost Pro',
      description: 'Accelerate your systems with advanced performance optimization',
      discount: '30% OFF',
      originalPrice: '$60,000',
      salePrice: '$42,000',
      features: ['Speed Optimization', 'Memory Management', 'Real-time Monitoring'],
      cta: 'Boost Performance',
      link: '/contact?offer=performance-boost',
      featured: false
    }
  ];

  const displayPromotions = promotions.slice(0, showCount);

  if (variant === 'compact') {
    return (
      <div className={`bg-gradient-to-r from-blue-900/40 to-purple-900/40 border-y border-blue-500/20 py-8 ${className}`}>
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Special Offers Available
            </h2>
            <p className="text-gray-300 mb-6">
              Limited time offers on our most popular AI solutions
            </p>
            <Link
              to="/offers"
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300"
            >
              View All Offers
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (variant === 'featured') {
    const featuredPromo = promotions.find(p => p.featured) || promotions[0];
    
    return (
      <div className={`bg-gradient-to-r from-purple-900/40 to-pink-900/40 border-y border-purple-500/20 py-12 ${className}`}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/30 mb-4">
              <span className="text-purple-400 font-bold text-sm tracking-wider uppercase">
                🔥 FEATURED OFFER
              </span>
            </div>
            <h2 className="text-4xl font-bold text-white mb-4">
              {featuredPromo.title}
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              {featuredPromo.description}
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-4xl font-bold text-purple-400">
                      {featuredPromo.discount}
                    </span>
                    <div>
                      <div className="text-2xl font-bold text-white">
                        {featuredPromo.salePrice}
                      </div>
                      <div className="text-lg text-gray-400 line-through">
                        {featuredPromo.originalPrice}
                      </div>
                    </div>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {featuredPromo.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-gray-300">
                        <span className="text-purple-400">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to={featuredPromo.link}
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-400 hover:to-pink-500 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/50 transform hover:-translate-y-1 text-center block"
                  >
                    {featuredPromo.cta}
                  </Link>
                </div>
                
                <div className="text-center">
                  <div className="text-6xl mb-4">🚀</div>
                  <p className="text-gray-300">
                    Join thousands of companies already transforming with our AI solutions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Hero variant (default)
  return (
    <div className={`bg-gradient-to-r from-blue-900/40 via-purple-900/40 to-pink-900/40 border-y border-blue-500/20 py-16 ${className}`}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 border border-blue-500/30 mb-6">
            <span className="text-blue-400 font-bold text-sm tracking-wider uppercase animate-pulse">
              🎉 COMPREHENSIVE OFFERS
            </span>
          </div>
          <h2 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Transform Your Business with AI
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Choose from our comprehensive suite of AI solutions designed to accelerate your digital transformation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayPromotions.map((promo, index) => (
            <div
              key={promo.id}
              className={`bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-blue-500/50 transition-all duration-300 ${
                promo.featured ? 'ring-2 ring-purple-500' : ''
              }`}
            >
              {promo.featured && (
                <div className="text-center mb-4">
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-400 text-sm font-bold rounded-full">
                    ⭐ FEATURED
                  </span>
                </div>
              )}
              
              <h3 className="text-2xl font-bold text-white mb-4">
                {promo.title}
              </h3>
              
              <p className="text-gray-300 mb-6">
                {promo.description}
              </p>
              
              <div className="flex items-center gap-4 mb-6">
                <span className="text-3xl font-bold text-blue-400">
                  {promo.discount}
                </span>
                <div>
                  <div className="text-2xl font-bold text-white">
                    {promo.salePrice}
                  </div>
                  <div className="text-lg text-gray-400 line-through">
                    {promo.originalPrice}
                  </div>
                </div>
              </div>
              
              <ul className="space-y-2 mb-6">
                {promo.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-2 text-gray-300">
                    <span className="text-blue-400">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Link
                to={promo.link}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/50 transform hover:-translate-y-1 text-center block"
              >
                {promo.cta}
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/all-offers"
            className="border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white font-bold py-3 px-8 rounded-xl transition-all duration-300"
          >
            View All Offers
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ComprehensivePromoBanner;