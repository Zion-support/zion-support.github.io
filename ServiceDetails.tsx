import { Server, Clock, MapPin } from 'lucide-react';
import React from "react";

interface ServiceDetailsProps {
  country: string;
  price: number;
}

export function ServiceDetails({ country, price }: ServiceDetailsProps) {
  const getResponseTime = (countryName: string) => {
    const times: { [key: string]: string } = {
      'United States': '2-4 hours',
      'United Kingdom': '4-6 hours',
      'Canada': '4-6 hours',
      'Germany': '6-8 hours',
      'Australia': '8-12 hours',
      'France': '6-8 hours',
      'Japan': '8-12 hours',
      'Singapore': '6-8 hours'
    };
    return times[countryName] || '6-12 hours';
  };

  return (
    <div className='bg-blue-900/50 border border-blue-700 rounded-lg p-6'>
      <h3 className='text-xl font-bold text-white mb-4'>Service Details</h3>
      <div className='space-y-4'>
        <div className='flex items-center'>
          <MapPin className='h-5 w-5 text-purple-400 mr-3' />
          <div>
            <p className='text-white font-medium'>Service Location</p>
            <p className='text-gray-300'>{country}</p>
          </div>
        </div>
        <div className='flex items-center'>
          <Clock className='h-5 w-5 text-purple-400 mr-3' />
          <div>
            <p className='text-white font-medium'>Response Time</p>
            <p className='text-gray-300'>{getResponseTime(country)}</p>
          </div>
        </div>
        <div className='flex items-center'>
          <Server className='h-5 w-5 text-purple-400 mr-3' />
          <div>
            <p className='text-white font-medium'>Service Type</p>
            <p className='text-gray-300'>IT Onsite Support</p>
          </div>
        </div>
        <div className='pt-4 border-t border-blue-700'>
          <p className='text-white font-medium mb-2'>Pricing</p>
          <p className='text-2xl font-bold text-cyan-400'>${price.toFixed(2)} USD</p>
          <p className='text-sm text-gray-400'>Per incident (first hour included)</p>
        </div>
      </div>
    </div>
  );
}