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
      
      <div className='bg-slate-800 rounded-xl p-6 max-w-4xl mx-auto'>
        <h2 className='text-2xl font-semibold text-white mb-4'>
          Why Choose Our Onsite IT Services?
        </h2>
        <div className='grid md:grid-cols-2 gap-6 text-left'>
          <div>
            <h3 className='text-lg font-medium text-blue-400 mb-2'>
              Immediate Response
            </h3>
            <p className='text-gray-300'>
              Get expert technicians on-site quickly to resolve critical IT issues 
              before they impact your business operations.
            </p>
          </div>
          <div>
            <h3 className='text-lg font-medium text-blue-400 mb-2'>
              Certified Professionals
            </h3>
            <p className='text-gray-300'>
              Our technicians are certified and experienced in the latest technologies 
              and industry best practices.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}