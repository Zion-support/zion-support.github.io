import React from "react";
import { Clock, Map, DollarSign } from 'lucide-react'

export function PageHero() {
  return (
    <div className='text-center mb-12'>
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
        </div>
      </div>
    </div>
  );
}