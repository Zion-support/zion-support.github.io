import { Globe, Server, Clock, MapPin, Check } from 'lucide-react'
import React from "react";

<<<<<<< HEAD
interface CountryServiceCardProps {
  country: string;
  onSelect: () => void;
  onQuote: () => void;
  isPopular?: boolean;
}

=======
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

>>>>>>> origin/main
export function CountryServiceCard({
  country,
  onSelect,
  onQuote,
  isPopular,
}: CountryServiceCardProps) {
<<<<<<< HEAD
  return (
    <div className={`bg-slate-800 rounded-xl p-6 border-2 transition-all duration-300 hover:border-blue-400 ${isPopular ? 'border-purple-500' : 'border-slate-700'}`}>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <Globe className="h-6 w-6 text-blue-400" />
          <h3 className="text-xl font-semibold text-white">{country}</h3>
        </div>
        {isPopular && (
          <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
=======
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
    <div className='bg-gray-800 border border-gray-700 rounded-lg p-6 relative'>
      <div className='flex justify-between items-start mb-4'>
        <div className='flex items-center'>
          <Globe className='h-6 w-6 text-blue-500 mr-2' />
          <h3 className='text-xl font-semibold text-white'>{country.country}</h3>
        </div>
        {isPopular && (
          <span className='bg-purple-600 text-white px-2 py-1 rounded text-sm'>
>>>>>>> origin/main
            Popular
          </span>
        )}
      </div>
      
<<<<<<< HEAD
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
=======
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
            <MapPin className='h-4 w-4 mr-2 text-purple-500 mt-1' />
            <span>Service available in major cities</span>
          </div>
          <div className='flex items-start'>
            <Server className='h-4 w-4 mr-2 text-purple-500 mt-1' />
            <span>Hardware & network support</span>
          </div>
          <div className='flex items-start'>
            <Check className='h-4 w-4 mr-2 text-purple-500 mt-1' />
            <span>First hour included</span>
          </div>
        </div>
      </div>
      
      <div className='flex flex-col space-y-2'>
        <button
          onClick={() => onSelect(country)}
          className={`w-full px-4 py-2 rounded-lg font-semibold ${
            isPopular
              ? 'bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 text-white'
              : 'bg-blue-600 hover:bg-blue-700 text-white'
          }`}
        >
          Select Service
        </button>
        
        <button
          onClick={() => onQuote?.(country)}
          className='w-full px-4 py-2 rounded-lg border border-purple-600 text-purple-400 hover:bg-purple-600/10'
        >
          Get Quote
        </button>
        
        <a
          href='/contact'
          className='w-full px-4 py-2 rounded-lg text-blue-400 hover:text-purple-400 text-center'
        >
          Contact Sales
        </a>
>>>>>>> origin/main
      </div>
    </div>
  );
}