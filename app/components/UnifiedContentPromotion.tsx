import React from 'react';
import Link from '../utils/link';

const UnifiedContentPromotion: React.FC = () => {
  const features = [
    {
      title: "Enterprise AI Solutions",
      description: "Transform your business with cutting-edge AI automation and intelligent systems.",
      link: "/services",
      icon: "🤖"
    },
    {
      title: "Digital Transformation",
      description: "Modernize your infrastructure with cloud-native solutions and DevOps practices.",
      link: "/services",
      icon: "🚀"
    },
    {
      title: "Expert Consultation",
      description: "Work with our team of experts to design and implement your AI strategy.",
      link: "/contact",
      icon: "👨‍💼"
    }
  ];

  return (
    <div className="unified-content-promotion py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Why Choose Zion Tech Group?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {feature.description}
              </p>
              <Link 
                href={feature.link}
                className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center"
              >
                Learn More →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UnifiedContentPromotion;