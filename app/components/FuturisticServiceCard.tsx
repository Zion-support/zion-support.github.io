import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, CheckCircle } from 'lucide-react';
import FuturisticCard from './FuturisticCard';
import FuturisticButton from './FuturisticButton';
import FuturisticText from './FuturisticText';

interface Service {
  id: string;
  name: string;
  price: string;
  originalPrice?: string;
  description: string;
  features: string[];
  benefits: string[];
  category: string;
  icon: React.ReactNode;
  popular?: boolean;
  href?: string;
}

interface FuturisticServiceCardProps {
  service: Service;
  className?: string;
}

const FuturisticServiceCard: React.FC<FuturisticServiceCardProps> = ({
  service,
  className = ''
}) => {
  return (
    <FuturisticCard
      variant="elevated"
      glowColor="cyan"
      className={`group relative ${service.popular ? 'ring-2 ring-cyan-500' : ''} ${className}`}
    >
      {/* Popular badge */}
      {service.popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-20">
          <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
            Most Popular
          </span>
        </div>
      )}

      {/* Service icon and category */}
      <div className="flex items-center justify-between mb-6">
        <div className="group-hover:scale-110 transition-transform duration-300">
          {service.icon}
        </div>
        <span className="text-sm text-cyan-400 font-medium bg-cyan-400/10 px-3 py-1 rounded-full">
          {service.category}
        </span>
      </div>

      {/* Service name */}
      <FuturisticText variant="heading" size="2xl" className="mb-3 group-hover:text-cyan-300 transition-colors">
        {service.name}
      </FuturisticText>

      {/* Pricing */}
      <div className="flex items-center space-x-3 mb-4">
        <FuturisticText variant="neon" size="3xl" glow>
          {service.price}
        </FuturisticText>
        {service.originalPrice && (
          <FuturisticText variant="caption" size="lg" className="line-through">
            {service.originalPrice}
          </FuturisticText>
        )}
      </div>

      {/* Description */}
      <FuturisticText variant="body" className="mb-6 leading-relaxed">
        {service.description}
      </FuturisticText>

      {/* Features list */}
      <div className="space-y-3 mb-8">
        {service.features.slice(0, 5).map((feature, index) => (
          <div key={index} className="flex items-center text-sm text-gray-300 group-hover:text-gray-200 transition-colors">
            <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0 group-hover:scale-110 transition-transform" />
            {feature}
          </div>
        ))}
        {service.features.length > 5 && (
          <div className="text-sm text-cyan-400 font-medium group-hover:text-cyan-300 transition-colors">
            +{service.features.length - 5} more features
          </div>
        )}
      </div>

      {/* Benefits */}
      <div className="mb-8">
        <FuturisticText variant="subheading" size="sm" className="mb-3 text-green-400">
          Key Benefits:
        </FuturisticText>
        <div className="space-y-2">
          {service.benefits.slice(0, 3).map((benefit, index) => (
            <div key={index} className="flex items-center text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
              <Star className="w-3 h-3 text-yellow-400 mr-2 flex-shrink-0" />
              {benefit}
            </div>
          ))}
        </div>
      </div>

      {/* Action buttons */}
      <div className="space-y-3">
        <FuturisticButton
          href={service.href || `/${service.id}`}
          variant="primary"
          size="md"
          className="w-full group-hover:shadow-cyan-500/25"
        >
          Learn More
          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
        </FuturisticButton>
        
        <FuturisticButton
          href="/contact"
          variant="outline"
          size="md"
          className="w-full"
        >
          Start Free Trial
        </FuturisticButton>
      </div>

      {/* Hover glow effect */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
    </FuturisticCard>
  );
};

export default FuturisticServiceCard;