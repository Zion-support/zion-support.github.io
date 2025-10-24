'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  features: string[];
  price?: string;
  onSelect?: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon: Icon,
  features,
  price,
  onSelect
}) => {
  return (
    <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-6 hover:bg-slate-800/70 transition-all duration-300">
      <div className="text-center mb-6">
        <Icon className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-300 text-sm">{description}</p>
        {price && (
          <div className="text-2xl font-bold text-emerald-400 mt-2">{price}</div>
        )}
      </div>
      
      <ul className="space-y-2 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-sm text-gray-300">
            <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mr-3"></div>
            {feature}
          </li>
        ))}
      </ul>
      
      {onSelect && (
        <button
          onClick={onSelect}
          className="w-full bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors duration-200"
        >
          Select Service
        </button>
      )}
    </div>
  );
};

export default ServiceCard;