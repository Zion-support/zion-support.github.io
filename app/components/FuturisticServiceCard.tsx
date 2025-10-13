import React from 'react';
import { Link } from 'react-router-dom';
import { Service } from '../data/services';

interface FuturisticServiceCardProps {
  service: Service;
  index?: number;
}

const FuturisticServiceCard: React.FC<FuturisticServiceCardProps> = ({ service, index = 0 }) => {
  const animationDelay = index * 0.1;

  return (
    <div 
      className="group relative"
      style={{ animationDelay: `${animationDelay}s` }}
    >
      <div className="holographic-card glass-morphism rounded-xl p-6 h-full transform transition-all duration-500 hover:scale-105 hover:rotate-1">
        {/* Glow Effect */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {/* Content */}
        <div className="relative z-10">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="text-3xl neon-flicker">{service.icon}</div>
              <div>
                <h3 className="text-xl font-bold text-white group-hover:neon-text transition-all duration-300">
                  {service.name}
                </h3>
                {service.popular && (
                  <span className="inline-block px-2 py-1 text-xs font-semibold bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full neon-glow">
                    Popular
                  </span>
                )}
                {service.new && (
                  <span className="inline-block px-2 py-1 text-xs font-semibold bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full neon-glow-pink">
                    New
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-300 text-sm mb-4 line-clamp-3 group-hover:text-gray-200 transition-colors duration-300">
            {service.description}
          </p>

          {/* Features */}
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-cyan-400 mb-2 neon-text">Key Features:</h4>
            <ul className="space-y-1">
              {service.features.slice(0, 3).map((feature, idx) => (
                <li key={idx} className="text-xs text-gray-400 flex items-center">
                  <span className="w-1 h-1 bg-cyan-400 rounded-full mr-2 neon-glow"></span>
                  {feature}
                </li>
              ))}
              {service.features.length > 3 && (
                <li className="text-xs text-gray-500">
                  +{service.features.length - 3} more features
                </li>
              )}
            </ul>
          </div>

          {/* Pricing */}
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-purple-400 mb-2 neon-text-purple">Pricing:</h4>
            <div className="grid grid-cols-3 gap-2 text-xs">
              <div className="text-center">
                <div className="text-gray-400">Basic</div>
                <div className="font-bold text-white">${service.pricing.basic}/mo</div>
              </div>
              <div className="text-center">
                <div className="text-gray-400">Pro</div>
                <div className="font-bold text-white">${service.pricing.pro}/mo</div>
              </div>
              <div className="text-center">
                <div className="text-gray-400">Enterprise</div>
                <div className="font-bold text-white">${service.pricing.enterprise}/mo</div>
              </div>
            </div>
          </div>

          {/* Action Button */}
          <div className="flex space-x-2">
            <Link
              to={service.link}
              className="flex-1 cyber-button text-center py-2 px-4 rounded-lg text-sm font-semibold transition-all duration-300 hover:neon-glow"
            >
              Learn More
            </Link>
            <Link
              to="/contact"
              className="px-4 py-2 border border-cyan-400 text-cyan-400 rounded-lg text-sm font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300 hover:neon-glow"
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Holographic Scan Line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {/* Corner Accents */}
        <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>
    </div>
  );
};

export default FuturisticServiceCard;