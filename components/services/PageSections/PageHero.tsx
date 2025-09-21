import React from "react";
import { Clock, Map, DollarSign } from 'lucide-react';

export function PageHero() {
  return (
    <div className='text-center mb-12'>
      <h1 className='text-4xl md:text-6xl font-bold text-white mb-6'>
        IT Onsite Services
      </h1>
      <p className='text-xl text-gray-300 mb-8 max-w-3xl mx-auto'>
        Professional IT support delivered directly to your location. 
        Get expert technicians on-site when you need them most.
      </p>
      
      <div className='flex flex-wrap justify-center gap-8 mb-8'>
        <div className='flex items-center space-x-2 text-gray-300'>
          <Clock className='h-5 w-5 text-blue-400' />
          <span>24/7 Availability</span>
        </div>
        <div className='flex items-center space-x-2 text-gray-300'>
          <Map className='h-5 w-5 text-blue-400' />
          <span>Global Coverage</span>
        </div>
        <div className='flex items-center space-x-2 text-gray-300'>
          <DollarSign className='h-5 w-5 text-blue-400' />
          <span>Transparent Pricing</span>
        </div>
      </div>
    </div>
  );
}