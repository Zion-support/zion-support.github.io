import { Globe, Server, Clock, MapPin, Check } from 'lucide-react'
import React from "react";

interface CountryPricing {
  country: string;
  pricePerIncident: number;
  currency: string;
}

interface CountryServiceCardProps {
  country: CountryPricing;
  onSelect: (country: CountryPricing) => void;
  onQuote?: (country: CountryPricing) => void;
  isPopular?: boolean;
}

export function CountryServiceCard({
  country,
  onSelect,
  onQuote,
  isPopular,
}: CountryServiceCardProps) {
  const getResponseTime = (countryName: string) => {
    // Mock response times based on country
    const responseTimes: { [key: string]: string } = {
      'United States': '2-4 hours',
      'Canada': '4-6 hours',
      'United Kingdom': '6-8 hours',
      'Germany': '8-12 hours',
      'Australia': '12-24 hours',
    };
    return responseTimes[countryName] || '24-48 hours';
  };

  return (
    <div className={`bg-slate-800 rounded-xl p-6 border-2 transition-all duration-300 hover:border-blue-400 ${isPopular ? 'border-purple-500' : 'border-slate-700'}`}>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <Globe className="h-6 w-6 text-blue-400" />
          <h3 className="text-xl font-semibold text-white">{country.country}</h3>
        </div>
        {isPopular && (
          <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
            Popular
          </span>
        )}
      </div>
      
      <div className='mb-4'>
        <p className='text-3xl font-bold text-blue-400 mb-4'>
          ${country.pricePerIncident.toFixed(2)}
        </p>
        
        <div className='space-y-2 text-gray-300'>
          <div className='flex items-start'>
            <Clock className='h-4 w-4 mr-2 text-purple-500 mt-1' />
            <span>Typical response time: {getResponseTime(country.country)}</span>
          </div>
          <div className='flex items-start'>
            <Server className='h-4 w-4 mr-2 text-green-500 mt-1' />
            <span>Onsite IT Support</span>
          </div>
          <div className='flex items-start'>
            <MapPin className='h-4 w-4 mr-2 text-blue-500 mt-1' />
            <span>Local technicians available</span>
          </div>
          <div className='flex items-start'>
            <Check className='h-4 w-4 mr-2 text-green-500 mt-1' />
            <span>24/7 Emergency support</span>
          </div>
        </div>
      </div>
      
      <div className="flex space-x-3">
        <button
          onClick={() => onSelect(country)}
          className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
        >
          Select
        </button>
        {onQuote && (
          <button
            onClick={() => onQuote(country)}
            className="flex-1 bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 rounded-lg transition-colors"
          >
            Get Quote
          </button>
        )}
      </div>
    </div>
  );
}