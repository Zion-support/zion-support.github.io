import React from 'react';

interface ServiceAdsProps {
  heading: string;
  subheading: string;
  items: Array<{
    title: string;
    description: string;
    price: string;
    features: string[];
    link: string;
    contactInfo: any;
  }>;
}

const ServiceAds: React.FC<ServiceAdsProps> = ({ heading, subheading, items }) => {
  return (
    <div className="text-center max-w-4xl mx-auto mb-12">
      <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6">
        {heading}
      </h2>
      <p className="text-xl text-gray-300 mb-8">{subheading}</p>
      
      {items.map((item, index) => (
        <div key={index} className="bg-black/30 border border-gray-700/50 rounded-2xl p-6 mb-6">
          <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
          <p className="text-gray-300 mb-4">{item.description}</p>
          <div className="text-cyan-400 font-semibold mb-4">{item.price}</div>
          <ul className="space-y-2 text-gray-300 text-sm mb-4">
            {item.features.map((feature, featureIndex) => (
              <li key={featureIndex} className="flex items-start gap-2">
                <span className="text-emerald-400">✓</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <a 
            href={item.link} 
            className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
          >
            Learn More
          </a>
        </div>
      ))}
    </div>
  );
};

export default ServiceAds;