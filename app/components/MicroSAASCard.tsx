'use client';
import React from 'react';
import { Star, CheckCircle, ArrowRight, Phone, Mail, ExternalLink, Zap, Shield, Clock, Users, TrendingUp } from 'lucide-react';

interface MicroSAASService {
  title: string;
  description: string;
  icon: string;
  price: string;
  features: string[];
  benefits: string[];
  marketPrice: string;
  category: string;
  technologies: string[];
  contactInfo: string;
  link?: string;
  popular?: boolean;
  savings?: string;
}

interface MicroSAASCardProps {
  service: MicroSAASService;
}

const MicroSAASCard: React.FC<MicroSAASCardProps> = ({ service }) => {
  return (
    <div className="cyber-card hologram-card p-6 hover:scale-105 transition-all duration-300 group relative">
      {/* Popular Badge */}
      {service.popular && (
        <div className="absolute -top-2 -right-2 bg-gradient-to-r from-cyan-400 to-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
          <Star className="w-3 h-3 fill-current" />
          Popular
        </div>
      )}

      {/* Service Icon */}
      <div className="text-4xl mb-4 text-center cyber-scan-line">
        {service.icon}
      </div>

      {/* Service Title */}
      <h3 className="text-xl font-bold text-white mb-3 text-center neon-text group-hover:text-cyan-400 transition-colors">
        {service.title}
      </h3>

      {/* Category Badge */}
      <div className="text-center mb-4">
        <span className="inline-block bg-gray-800 text-cyan-400 text-xs font-medium px-3 py-1 rounded-full">
          {service.category}
        </span>
      </div>

      {/* Description */}
      <p className="text-gray-300 mb-4 text-sm leading-relaxed text-center">
        {service.description}
      </p>

      {/* Pricing */}
      <div className="text-center mb-6">
        <div className="text-2xl font-bold text-cyan-400 mb-1 neon-text">
          {service.price}
        </div>
        <div className="text-sm text-gray-400 line-through">
          Market: {service.marketPrice}
        </div>
        {service.savings && (
          <div className="text-sm text-green-400 font-medium mt-1">
            {service.savings}
          </div>
        )}
      </div>

      {/* Features */}
      <div className="mb-6">
        <h4 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
          <CheckCircle className="w-4 h-4 text-green-400" />
          Key Features
        </h4>
        <ul className="space-y-2">
          {service.features.slice(0, 4).map((feature, index) => (
            <li key={index} className="text-xs text-gray-300 flex items-start gap-2">
              <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
              {feature}
            </li>
          ))}
          {service.features.length > 4 && (
            <li className="text-xs text-gray-400 italic">
              +{service.features.length - 4} more features
            </li>
          )}
        </ul>
      </div>

      {/* Benefits */}
      <div className="mb-6">
        <h4 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
          <TrendingUp className="w-4 h-4 text-green-400" />
          Benefits
        </h4>
        <ul className="space-y-2">
          {service.benefits.slice(0, 3).map((benefit, index) => (
            <li key={index} className="text-xs text-gray-300 flex items-start gap-2">
              <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
              {benefit}
            </li>
          ))}
        </ul>
      </div>

      {/* Technologies */}
      <div className="mb-6">
        <h4 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
          <Zap className="w-4 h-4 text-yellow-400" />
          Technologies
        </h4>
        <div className="flex flex-wrap gap-2">
          {service.technologies.slice(0, 4).map((tech, index) => (
            <span key={index} className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded">
              {tech}
            </span>
          ))}
          {service.technologies.length > 4 && (
            <span className="text-xs text-gray-400">
              +{service.technologies.length - 4} more
            </span>
          )}
        </div>
      </div>

      {/* Contact Info */}
      <div className="mb-6 p-3 bg-gray-800 rounded-lg">
        <div className="text-xs text-gray-300 text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Phone className="w-3 h-3 text-cyan-400" />
            <span>+1 302 464 0950</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Mail className="w-3 h-3 text-cyan-400" />
            <span>kleber@ziontechgroup.com</span>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col gap-2">
        <a
          href="tel:+13024640950"
          className="cyber-button text-center text-sm py-2 flex items-center justify-center gap-2"
        >
          <Phone className="w-4 h-4" />
          Call Now
        </a>
        <a
          href="mailto:kleber@ziontechgroup.com"
          className="border border-cyan-400 text-cyan-400 px-4 py-2 rounded-lg text-sm text-center hover:bg-cyan-400 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
        >
          <Mail className="w-4 h-4" />
          Email Us
        </a>
        {service.link && (
          <a
            href={service.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-cyan-400 text-sm text-center flex items-center justify-center gap-2 transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            Learn More
          </a>
        )}
      </div>

      {/* Hover Effect Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
    </div>
  );
};

export default MicroSAASCard;