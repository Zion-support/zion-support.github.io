import React from "react";
<<<<<<< HEAD
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
=======
import { Clock, Map, DollarSign } from 'lucide-react'

export function PageHero() {
  return (
    <div className="text-center mb-12">
      <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
        Global IT Onsite Services
      </h1>
      <p className="text-xl text-gray-300 max-w-3xl mx-auto">
        Professional IT onsite support services with transparent pricing across 190+ countries worldwide
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 flex flex-col items-center text-center">
          <div className="bg-blue-600/20 p-3 rounded-full mb-4">
            <Map className="h-8 w-8 text-blue-400" />
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Global Coverage</h3>
          <p className="text-gray-300">
            IT onsite services available in over 190 countries and territories worldwide
          </p>
        </div>
        
        <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 flex flex-col items-center text-center">
          <div className="bg-blue-600/20 p-3 rounded-full mb-4">
            <Clock className="h-8 w-8 text-blue-400" />
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Rapid Response</h3>
          <p className="text-gray-300">
            Guaranteed 4-hour response time for critical issues in most major cities
          </p>
        </div>
        
        <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 flex flex-col items-center text-center">
          <div className="bg-blue-600/20 p-3 rounded-full mb-4">
            <DollarSign className="h-8 w-8 text-blue-400" />
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Transparent Pricing</h3>
          <p className="text-gray-300">
            Clear per-incident pricing includes transportation and first hour onsite
          </p>
>>>>>>> origin/main
        </div>
      </div>
    </div>
  );
}