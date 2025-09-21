import { Globe, Server, Clock, MapPin, Check } from 'lucide-react'
import React from "react";

interface CountryServiceCardProps {
  country: {
    name: string;
    code: string;
    price: number;
    currency: string;
  };
  onSelect: () => void;
  onQuote: () => void;
  isPopular?: boolean;
}

export function CountryServiceCard({
  country,
  onSelect,
  onQuote,
  isPopular = false
}: CountryServiceCardProps) {
  return (
    <div className={`relative bg-zion-blue border border-zion-blue-light rounded-lg p-6 transition-all duration-300 hover:border-zion-cyan hover:shadow-lg ${isPopular ? 'ring-2 ring-zion-cyan' : ''}`}>
      {isPopular && (
        <div className="absolute -top-3 left-4 bg-zion-cyan text-zion-blue px-3 py-1 rounded-full text-sm font-semibold">
          Popular
        </div>
      )}
      
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <Globe className="h-5 w-5 text-zion-cyan mr-2" />
          <h3 className="text-xl font-semibold text-white">{country.name}</h3>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold text-zion-cyan">
            {country.currency} {country.price}
          </div>
          <div className="text-sm text-zion-slate-light">per incident</div>
        </div>
      </div>

      <div className="space-y-2 mb-6">
        <div className="flex items-center text-zion-slate-light">
          <Check className="h-4 w-4 text-zion-cyan mr-2" />
          <span>On-site technical support</span>
        </div>
        <div className="flex items-center text-zion-slate-light">
          <Check className="h-4 w-4 text-zion-cyan mr-2" />
          <span>Hardware diagnostics & repair</span>
        </div>
        <div className="flex items-center text-zion-slate-light">
          <Check className="h-4 w-4 text-zion-cyan mr-2" />
          <span>Network troubleshooting</span>
        </div>
        <div className="flex items-center text-zion-slate-light">
          <Check className="h-4 w-4 text-zion-cyan mr-2" />
          <span>Software installation & updates</span>
        </div>
      </div>

      <div className="flex gap-3">
        <button
          onClick={onSelect}
          className="flex-1 bg-zion-cyan text-zion-blue px-4 py-2 rounded-lg font-semibold hover:bg-zion-cyan-light transition-colors"
        >
          Select Country
        </button>
        <button
          onClick={onQuote}
          className="flex-1 border border-zion-cyan text-zion-cyan px-4 py-2 rounded-lg font-semibold hover:bg-zion-cyan hover:text-zion-blue transition-colors"
        >
          Get Quote
        </button>
      </div>
    </div>
  );
}