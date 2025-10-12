import React from 'react';
import { Brain, Zap, Shield, Globe, CheckCircle, Star, ArrowRight, Phone, Mail } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

interface FuturisticServiceCardProps {
  title?: string;
  description?: string;
  features?: string[];
  price?: string;
  popular?: boolean;
  className?: string;
}

const FuturisticServiceCard: React.FC<FuturisticServiceCardProps> = ({
  title = 'Service',
  description = 'Professional service description',
  features = [],
  price,
  popular = false,
  className = ''
}) => {
  return (
    <div className={`bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 ${popular ? 'ring-2 ring-cyan-400' : ''} ${className}`}>
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
            Most Popular
          </span>
        </div>
      )}
      
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
        {price && (
          <div className="text-4xl font-bold text-cyan-400 mb-2">
            {price}
          </div>
        )}
        <p className="text-gray-300">{description}</p>
      </div>
      
      {features.length > 0 && (
        <ul className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
              <span className="text-gray-300">{feature}</span>
            </li>
          ))}
        </ul>
      )}
      
      <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
        Get Started
      </button>
    </div>
  );
};

export default FuturisticServiceCard;