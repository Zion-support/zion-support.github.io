import { Globe, Server, Clock, MapPin, Check } from 'lucide-react'
import React from "react";

<<<<<<< HEAD
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

=======
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

>>>>>>> pr-22753
export function CountryServiceCard({
  country,
  onSelect,
  onQuote,
  isPopular,
}: CountryServiceCardProps) {
<<<<<<< HEAD
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
=======
  return (
    <div className={`relative bg-gradient-to-br from-zion-blue to-zion-blue-dark border border-zion-blue-light rounded-xl p-6 transition-all duration-300 hover:shadow-xl hover:scale-105 ${isPopular ? 'ring-2 ring-zion-cyan' : ''}`}>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <Globe className="h-6 w-6 text-zion-cyan" />
          <h3 className="text-xl font-semibold text-white">{country.name}</h3>
        </div>
        {isPopular && (
          <span className="bg-zion-purple text-white px-3 py-1 rounded-full text-sm font-medium">
>>>>>>> pr-22753
            Popular
          </span>
        )}
      </div>
<<<<<<< HEAD
      
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
=======

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
>>>>>>> pr-22753
      </div>
    </div>
  );
}