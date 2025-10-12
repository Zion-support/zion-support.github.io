import React from 'react';
import { ArrowRight, Star, Users, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

interface DynamicContentShowcaseProps {
  className?: string;
}

const DynamicContentShowcase: React.FC<DynamicContentShowcaseProps> = ({ className = '' }) => {
  const features = [
    {
      icon: <Star className="w-6 h-6 text-yellow-400" />,
      title: 'Premium Quality',
      description: 'High-quality solutions that exceed expectations'
    },
    {
      icon: <Users className="w-6 h-6 text-cyan-400" />,
      title: 'Expert Team',
      description: 'Experienced professionals dedicated to your success'
    },
    {
      icon: <Award className="w-6 h-6 text-purple-400" />,
      title: 'Award Winning',
      description: 'Recognized for excellence in innovation and service'
    }
  ];

  return (
    <div className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 ${className}`}>
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-white mb-4">
          Dynamic Content Showcase
        </h3>
        <p className="text-gray-300">
          Discover our innovative solutions and see how we can help your business grow.
        </p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        {features.map((feature, index) => (
          <div key={index} className="text-center">
            <div className="flex justify-center mb-3">
              {feature.icon}
            </div>
            <h4 className="text-lg font-semibold text-white mb-2">{feature.title}</h4>
            <p className="text-gray-300 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>

      <div className="text-center">
        <Link
          to="/contact"
          className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit"
        >
          Contact Us
          <ArrowRight className="w-5 h-5 ml-2" />
        </Link>
      </div>
    </div>
  );
};

export default DynamicContentShowcase;