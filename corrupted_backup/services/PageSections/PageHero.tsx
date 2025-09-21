import React from "react";
import { Clock, Map, DollarSign } from 'lucide-react'

export function PageHero() {
  return (
    <div className='text-center mb-12'>
      <h1 className='text-4xl md:text-6xl font-bold text-white mb-6'>
        IT Onsite Service
      </h1>
      <p className='text-xl text-gray-300 mb-8 max-w-3xl mx-auto'>
        Professional on-site IT support services across the globe. 
        Get expert technical assistance when and where you need it.
      </p>
      <div className='flex flex-wrap justify-center gap-6 text-center'>
        <div className='flex items-center space-x-2 text-blue-400'>
          <Clock className='h-5 w-5' />
          <span className='text-sm'>24/7 Support</span>
        </div>
        <div className='flex items-center space-x-2 text-green-400'>
          <Map className='h-5 w-5' />
          <span className='text-sm'>Global Coverage</span>
        </div>
        <div className='flex items-center space-x-2 text-purple-400'>
          <DollarSign className='h-5 w-5' />
          <span className='text-sm'>Transparent Pricing</span>
        </div>
      </div>
    </div>
  );
}