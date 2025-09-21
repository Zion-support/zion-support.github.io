import React from "react";
import { Clock, Map, DollarSign } from 'lucide-react';

export function PageHero() {
  return (
    <div className='text-center mb-12'>
      <h1 className='text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4'>
        Global IT Onsite Services
      </h1>
      <p className='text-xl text-gray-300 max-w-3xl mx-auto'>
        Professional IT onsite support services with transparent pricing across 190+ countries worldwide
      </p>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-12'>
        <div className='bg-blue-900/50 p-6 rounded-lg border border-blue-700 flex flex-col items-center text-center'>
          <div className='bg-purple-600/20 p-3 rounded-full mb-4'>
            <Map className='h-8 w-8 text-cyan-400' />
          </div>
          <h3 className='text-xl font-bold text-white mb-2'>Global Coverage</h3>
          <p className='text-gray-300'>
            IT onsite services available in over 190 countries and territories worldwide
          </p>
        </div>
        <div className='bg-blue-900/50 p-6 rounded-lg border border-blue-700 flex flex-col items-center text-center'>
          <div className='bg-purple-600/20 p-3 rounded-full mb-4'>
            <Clock className='h-8 w-8 text-cyan-400' />
          </div>
          <h3 className='text-xl font-bold text-white mb-2'>Rapid Response</h3>
          <p className='text-gray-300'>
            Guaranteed 4-hour response time for critical issues in most major cities
          </p>
        </div>
        <div className='bg-blue-900/50 p-6 rounded-lg border border-blue-700 flex flex-col items-center text-center'>
          <div className='bg-purple-600/20 p-3 rounded-full mb-4'>
            <DollarSign className='h-8 w-8 text-cyan-400' />
          </div>
          <h3 className='text-xl font-bold text-white mb-2'>Transparent Pricing</h3>
          <p className='text-gray-300'>
            Clear per-incident pricing includes transportation and first hour onsite
          </p>
        </div>
      </div>
    </div>
  )
}