import { Globe, Server, Clock, MapPin, Check } from 'lucide-react'
import React from "react";

interface CountryServiceCardProps {
  country: {
    name: string;
    currency: string;
    price: number;
  };
  onSelect: () => void;
  onQuote: () => void;
  isPopular?: boolean;
}

export function CountryServiceCard({
  country,
  onSelect,
  onQuote,
  isPopular,
}: CountryServiceCardProps) {
  return (
    <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 border border-slate-700 hover:border-zion-cyan/50 transition-all duration-300">
      {isPopular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-zion-purple text-white px-3 py-1 rounded-full text-sm font-medium">
            Popular
          </span>
        </div>
      )}
      
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <Globe className="h-6 w-6 text-zion-cyan" />
          <h3 className="text-xl font-semibold text-white">{country.name}</h3>
        </div>
      </div>
      
      <div className="space-y-3 mb-6">
        <div className="flex items-center text-gray-300">
          <Server className="h-4 w-4 mr-2" />
          <span>Full Infrastructure</span>
        </div>
        <div className="flex items-center text-gray-300">
          <Clock className="h-4 w-4 mr-2" />
          <span>24/7 Support</span>
        </div>
        <div className="flex items-center text-gray-300">
          <MapPin className="h-4 w-4 mr-2" />
          <span>Local Data Centers</span>
        </div>
        <div className="flex items-center text-gray-300">
          <Check className="h-4 w-4 mr-2" />
          <span>Compliance Ready</span>
        </div>
      </div>
      
      <div className="border-t border-slate-700 pt-4">
        <div className="text-center mb-4">
          <span className="text-3xl font-bold text-white">{country.currency} {country.price}</span>
          <span className="text-gray-400 ml-1">/month</span>
        </div>
        
        <div className="space-y-2">
          <button
            onClick={onSelect}
            className="w-full bg-zion-cyan hover:bg-zion-cyan/90 text-white py-3 px-4 rounded-lg font-medium transition-colors"
          >
            Select This Region
          </button>
          <button
            onClick={onQuote}
            className="w-full bg-transparent border border-slate-600 hover:border-zion-cyan text-zion-cyan py-3 px-4 rounded-lg font-medium transition-colors"
          >
            Get Custom Quote
          </button>
        </div>
      </div>
    </div>
  );
}