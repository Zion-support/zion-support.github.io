import React from 'react';

const UnifiedContentPromotion: React.FC = () => {
  const promotions = [
    {
      title: 'Latest AI Innovations',
      description: 'Discover cutting-edge AI solutions for your business',
      cta: 'Explore Now',
      link: '/services',
      featured: true
    },
    {
      title: '2026 Technology Roadmap',
      description: 'Get insights into upcoming technology trends',
      cta: 'Download Guide',
      link: '/resources',
      featured: false
    },
    {
      title: 'Enterprise Solutions',
      description: 'Scalable AI solutions for large organizations',
      cta: 'Learn More',
      link: '/enterprise',
      featured: false
    }
  ];

  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Latest AI Innovations</h2>
          <p className="text-xl text-blue-100">
            Discover cutting-edge AI solutions for your business
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {promotions.map((promo, index) => (
            <div 
              key={index} 
              className={`bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 hover:bg-opacity-20 transition-all ${
                promo.featured ? 'ring-2 ring-yellow-400' : ''
              }`}
            >
              {promo.featured && (
                <div className="bg-yellow-400 text-yellow-900 text-sm font-bold px-3 py-1 rounded-full inline-block mb-4">
                  Featured
                </div>
              )}
              <h3 className="text-xl font-bold mb-3">{promo.title}</h3>
              <p className="text-blue-100 mb-4">{promo.description}</p>
              <button className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                {promo.cta}
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h3>
            <p className="text-blue-100 mb-6">
              Join thousands of companies already using our AI solutions to drive growth and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                Get Started Today
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnifiedContentPromotion;