import React from "react";
<<<<<<< HEAD
import { Clock, Map, DollarSign } from 'lucide-react';
=======
import { Clock, Map, DollarSign } from 'lucide-react'
>>>>>>> pr-22753

export function PageHero() {
  return (
    <div className='text-center mb-12'>
<<<<<<< HEAD
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
=======
      <h1 className='text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-purple mb-4'>
        Global IT Onsite Services
      </h1>
      <p className='text-xl text-zion-slate-light max-w-3xl mx-auto'>
        Professional IT onsite support services with transparent pricing across 190+ countries worldwide
      </p>
      
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-12'>
        <div className='bg-zion-blue-light p-6 rounded-lg border border-zion-purple/20 flex flex-col items-center text-center'>
          <div className='bg-zion-purple/20 p-3 rounded-full mb-4'>
            <Map className='h-8 w-8 text-zion-cyan' />
          </div>
          <h3 className='text-xl font-bold text-white mb-2'>Global Coverage</h3>
          <p className='text-zion-slate-light'>
            IT onsite services available in over 190 countries and territories worldwide
          </p>
        </div>
        
        <div className='bg-zion-blue-light p-6 rounded-lg border border-zion-purple/20 flex flex-col items-center text-center'>
          <div className='bg-zion-purple/20 p-3 rounded-full mb-4'>
            <Clock className='h-8 w-8 text-zion-cyan' />
          </div>
          <h3 className='text-xl font-bold text-white mb-2'>Rapid Response</h3>
          <p className='text-zion-slate-light'>
            Guaranteed 4-hour response time for critical issues in most major cities
          </p>
        </div>
        
        <div className='bg-zion-blue-light p-6 rounded-lg border border-zion-purple/20 flex flex-col items-center text-center'>
          <div className='bg-zion-purple/20 p-3 rounded-full mb-4'>
            <DollarSign className='h-8 w-8 text-zion-cyan' />
          </div>
          <h3 className='text-xl font-bold text-white mb-2'>Transparent Pricing</h3>
          <p className='text-zion-slate-light'>
            Clear per-incident pricing includes transportation and first hour onsite
          </p>
>>>>>>> pr-22753
        </div>
      </div>
    </div>
  );
}