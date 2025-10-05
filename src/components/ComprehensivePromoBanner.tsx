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
          <p className="text-lg mb-8">
            Transform your business with cutting-edge AI technology
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {displayFeatures.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm opacity-90">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="space-x-4">
            <Link 
              to="/services" 
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Learn More
            </Link>
            <Link 
              to="/contact" 
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </div>