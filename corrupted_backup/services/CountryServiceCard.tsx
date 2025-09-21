import { Globe, Server, Clock, MapPin, Check } from 'lucide-react'
import React from "react";

interface CountryPricing {
  country: string;
  pricePerIncident: number;
}

interface CountryServiceCardProps {
  country: CountryPricing;
  onSelect: (country: CountryPricing) => void;
  onQuote: () => void;
  isPopular?: boolean;
}

export function CountryServiceCard({
  country,
  onSelect,
  onQuote,
  isPopular = false,
}: CountryServiceCardProps) {
  return (
    <div className={`relative bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-xl p-6 hover:border-blue-500 transition-all duration-300 ${isPopular ? 'ring-2 ring-blue-500' : ''}`}>
      {isPopular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
            Popular
          </span>
        </div>
      )}
      
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <Globe className="h-5 w-5 text-blue-400" />
          <h3 className="text-xl font-semibold text-white">{country.country}</h3>
        </div>
        <div className="text-right">
          <p className="text-2xl font-bold text-blue-400">${country.pricePerIncident}</p>
          <p className="text-sm text-gray-400">per incident</p>
        </div>
      </div>
      
      <div className="space-y-3 mb-6">
        <div className="flex items-center space-x-2">
          <Server className="h-4 w-4 text-green-400" />
          <span className="text-gray-300 text-sm">On-site IT Support</span>
        </div>
        <div className="flex items-center space-x-2">
          <Clock className="h-4 w-4 text-yellow-400" />
          <span className="text-gray-300 text-sm">24/7 Emergency Response</span>
        </div>
        <div className="flex items-center space-x-2">
          <MapPin className="h-4 w-4 text-purple-400" />
          <span className="text-gray-300 text-sm">Local Technician Network</span>
        </div>
        <div className="flex items-center space-x-2">
          <Check className="h-4 w-4 text-green-400" />
          <span className="text-gray-300 text-sm">Certified Professionals</span>
        </div>
      </div>
      
      <div className="space-y-2">
        <button
          onClick={() => onSelect(country)}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors"
        >
          Select Country
        </button>
        <button
          onClick={onQuote}
          className="w-full border border-slate-600 hover:border-slate-500 text-gray-300 hover:text-white py-2 px-4 rounded-lg transition-colors"
        >
          Get Quote
        </button>
      </div>
    </div>
  );
}