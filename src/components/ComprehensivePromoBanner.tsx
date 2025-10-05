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
  const promoItems = [
    {
      id: 1,
      title: 'AI-Powered Solutions',
      description: 'Revolutionary artificial intelligence technologies',
      link: '/services/ai-solutions',
      color: 'from-blue-600 to-purple-600'
    },
    {
      id: 2,
      title: 'Enterprise Integration',
      description: 'Seamless business process automation',
      link: '/services/enterprise',
      color: 'from-green-600 to-teal-600'
    },
    {
      id: 3,
      title: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud solutions',
      link: '/services/cloud',
      color: 'from-orange-600 to-red-600'
    }
  ];

  const displayedItems = promoItems.slice(0, showCount);

  if (variant === 'compact') {
    return (
      <div className={`bg-gradient-to-r ${promoItems[0].color} text-white py-8 px-4 ${className}`}>
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">{promoItems[0].title}</h2>
          <p className="text-lg mb-6">{promoItems[0].description}</p>
          <Link
            to={promoItems[0].link}
            className="inline-block bg-white text-gray-800 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Learn More
          </Link>
        </div>
      </div>
    );
  }

  if (variant === 'featured') {
    return (
      <div className={`space-y-6 ${className}`}>
        {displayedItems.map((item) => (
          <div key={item.id} className={`bg-gradient-to-r ${item.color} text-white p-6 rounded-lg`}>
            <div className="max-w-4xl mx-auto">
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-lg mb-4">{item.description}</p>
              <Link
                to={item.link}
                className="inline-block bg-white text-gray-800 px-4 py-2 rounded font-semibold hover:bg-gray-100 transition-colors"
              >
                Explore
              </Link>
            </div>
          </div>
        ))}
      </div>
    );
  }

  // Default hero variant
  return (
    <div className={`bg-gradient-to-r ${promoItems[0].color} text-white py-16 px-4 ${className}`}>
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          {promoItems[0].title}
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          {promoItems[0].description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to={promoItems[0].link}
            className="bg-white text-gray-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Get Started
          </Link>
          <Link
            to="/contact"
            className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-800 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ComprehensivePromoBanner;