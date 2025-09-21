import { Globe, Server, Clock, MapPin, Check } from 'lucide-react'
import React from "react";

interface CountryServiceCardProps {
  country: {
    name: string;
    code: string;
    pricePerIncident: number;
    responseTime: string;
    coverage: string;
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
    <div className={`relative bg-gradient-to-br from-zion-blue to-zion-blue-dark border border-zion-blue-light rounded-xl p-6 transition-all duration-300 hover:shadow-xl hover:scale-105 ${isPopular ? 'ring-2 ring-zion-cyan' : ''}`}>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <Globe className="h-6 w-6 text-zion-cyan" />
          <h3 className="text-xl font-semibold text-white">{country.name}</h3>
        </div>
        {isPopular && (
          <span className="bg-zion-purple text-white px-3 py-1 rounded-full text-sm font-medium">
            Popular
          </span>
        )}
      </div>

      <div className="space-y-3 mb-6">
        <div className="flex items-center space-x-3">
          <Server className="h-5 w-5 text-zion-cyan" />
          <span className="text-zion-slate-light">Starting at</span>
          <span className="text-white font-semibold">${country.pricePerIncident.toFixed(2)}/incident</span>
        </div>
        
        <div className="flex items-center space-x-3">
          <Clock className="h-5 w-5 text-zion-cyan" />
          <span className="text-zion-slate-light">Response Time:</span>
          <span className="text-white">{country.responseTime}</span>
        </div>
        
        <div className="flex items-center space-x-3">
          <MapPin className="h-5 w-5 text-zion-cyan" />
          <span className="text-zion-slate-light">Coverage:</span>
          <span className="text-white">{country.coverage}</span>
        </div>
      </div>

      <div className="space-y-2 mb-6">
        <div className="flex items-center space-x-2">
          <Check className="h-4 w-4 text-green-400" />
          <span className="text-zion-slate-light text-sm">On-site technical support</span>
        </div>
        <div className="flex items-center space-x-2">
          <Check className="h-4 w-4 text-green-400" />
          <span className="text-zion-slate-light text-sm">Hardware diagnostics & repair</span>
        </div>
        <div className="flex items-center space-x-2">
          <Check className="h-4 w-4 text-green-400" />
          <span className="text-zion-slate-light text-sm">Network troubleshooting</span>
        </div>
      </div>

      <div className="flex space-x-3">
        <button
          onClick={onSelect}
          className="flex-1 bg-zion-cyan hover:bg-zion-cyan-dark text-white px-4 py-2 rounded-lg transition-colors font-medium"
        >
          Select
        </button>
        <button
          onClick={onQuote}
          className="flex-1 bg-transparent border border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-4 py-2 rounded-lg transition-colors font-medium"
        >
          Get Quote
        </button>
      </div>
    </div>
  );
}