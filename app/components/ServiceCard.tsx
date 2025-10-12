import React from 'react';
import { CheckCircle, ArrowRight, Star, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedCard from './AnimatedCard';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  pricing: string;
  originalPrice?: string;
  link: string;
  popular?: boolean;
  category?: string;
  delay?: number;
  neon?: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  features,
  pricing,
  originalPrice,
  link,
  popular = false,
  category,
  delay = 0,
  neon = false
}) => {
  return (
    <AnimatedCard delay={delay} neon={neon} className="p-6 hover:shadow-2xl hover:shadow-purple-500/10">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          {icon}
          {category && (
            <span className="text-xs bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded-full">
              {category}
            </span>
          )}
        </div>
        {popular && (
          <div className="flex items-center space-x-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs px-3 py-1 rounded-full">
            <Star className="w-3 h-3" />
            <span>Popular</span>
          </div>
        )}
      </div>

      <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
      <p className="text-gray-300 mb-4 text-sm leading-relaxed">{description}</p>

      <ul className="space-y-2 mb-6">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-center text-sm text-gray-300">
            <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <span className="text-lg font-bold text-white">{pricing}</span>
          {originalPrice && (
            <span className="text-sm text-gray-400 line-through">{originalPrice}</span>
          )}
        </div>
        <div className="flex items-center text-yellow-400">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-current" />
          ))}
        </div>
      </div>

      <Link
        to={link}
        className="group w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center text-center relative overflow-hidden"
      >
        <span className="relative z-10 flex items-center">
          Get Started
          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
        </span>
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
      </Link>
    </AnimatedCard>
  );
};

export default ServiceCard;