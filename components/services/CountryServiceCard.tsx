import { Globe, Server, Clock, MapPin, Check } from 'lucide-react'
import React from "react";

interface CountryServiceCardProps {
  country: string;
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
    <div className={`bg-slate-800 rounded-xl p-6 border-2 transition-all duration-300 hover:border-blue-400 ${isPopular ? 'border-purple-500' : 'border-slate-700'}`}>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <Globe className="h-6 w-6 text-blue-400" />
          <h3 className="text-xl font-semibold text-white">{country}</h3>
        </div>
        {isPopular && (
          <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
            Popular
          </span>
        )}
      </div>
      
      <div className="space-y-3 mb-6">
        <div className="flex items-center space-x-2 text-gray-300">
          <Server className="h-4 w-4" />
          <span>Onsite IT Support</span>
        </div>
        <div className="flex items-center space-x-2 text-gray-300">
          <Clock className="h-4 w-4" />
          <span>24/7 Availability</span>
        </div>
        <div className="flex items-center space-x-2 text-gray-300">
          <MapPin className="h-4 w-4" />
          <span>Local Technicians</span>
        </div>
        <div className="flex items-center space-x-2 text-gray-300">
          <Check className="h-4 w-4" />
          <span>Certified Professionals</span>
        </div>
      </div>
      
      <div className="flex space-x-3">
        <button
          onClick={onSelect}
          className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
        >
          Select
        </button>
        <button
          onClick={onQuote}
          className="flex-1 bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 rounded-lg transition-colors"
        >
          Get Quote
        </button>
      </div>
    </div>
  );
}