<<<<<<< HEAD
import { Check } from 'lucide-react';

export function ServiceIncludes() {
  return (
    <div className='bg-slate-800 rounded-lg border border-slate-600 p-8 my-20'>
      <h2 className='text-2xl font-bold text-white mb-6 text-center'>
        What's Included in Our IT Onsite Service
      </h2>
      
      <div className='grid md:grid-cols-2 gap-6'>
        <div className='space-y-4'>
          <div className='flex items-start space-x-3'>
            <Check className='h-5 w-5 text-green-400 mt-1 flex-shrink-0' />
            <div>
              <h3 className='text-lg font-semibold text-white mb-1'>Hardware Installation</h3>
              <p className='text-gray-300'>Complete setup and installation of computers, servers, and networking equipment.</p>
            </div>
          </div>
          
          <div className='flex items-start space-x-3'>
            <Check className='h-5 w-5 text-green-400 mt-1 flex-shrink-0' />
            <div>
              <h3 className='text-lg font-semibold text-white mb-1'>Network Configuration</h3>
              <p className='text-gray-300'>Setup and optimization of your network infrastructure for optimal performance.</p>
            </div>
          </div>
          
          <div className='flex items-start space-x-3'>
            <Check className='h-5 w-5 text-green-400 mt-1 flex-shrink-0' />
            <div>
              <h3 className='text-lg font-semibold text-white mb-1'>Software Deployment</h3>
              <p className='text-gray-300'>Installation and configuration of business software and applications.</p>
=======
import { Check } from 'lucide-react'

export function ServiceIncludes() {
  return (
    <div className="bg-gray-800 rounded-lg border border-gray-700 p-8 my-20">
      <h2 className="text-2xl font-bold text-white text-center mb-8">
        What's Included in Every Service
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="flex items-start">
            <div className="mt-1 mr-4">
              <Check className="h-5 w-5 text-blue-400" />
            </div>
            <div>
              <h3 className="text-white font-medium">Transportation to Site</h3>
              <p className="text-gray-300">
                All travel costs to your location are included in the base price.
              </p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="mt-1 mr-4">
              <Check className="h-5 w-5 text-blue-400" />
            </div>
            <div>
              <h3 className="text-white font-medium">First Hour of Service</h3>
              <p className="text-gray-300">
                The first hour of technical work at your site is included.
              </p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="mt-1 mr-4">
              <Check className="h-5 w-5 text-blue-400" />
            </div>
            <div>
              <h3 className="text-white font-medium">Technical Assessment</h3>
              <p className="text-gray-300">
                Comprehensive evaluation of issues and required solutions.
              </p>
>>>>>>> origin/main
            </div>
          </div>
        </div>
        
<<<<<<< HEAD
        <div className='space-y-4'>
          <div className='flex items-start space-x-3'>
            <Check className='h-5 w-5 text-green-400 mt-1 flex-shrink-0' />
            <div>
              <h3 className='text-lg font-semibold text-white mb-1'>System Troubleshooting</h3>
              <p className='text-gray-300'>Diagnosis and resolution of hardware and software issues.</p>
            </div>
          </div>
          
          <div className='flex items-start space-x-3'>
            <Check className='h-5 w-5 text-green-400 mt-1 flex-shrink-0' />
            <div>
              <h3 className='text-lg font-semibold text-white mb-1'>Security Setup</h3>
              <p className='text-gray-300'>Implementation of security measures and best practices.</p>
            </div>
          </div>
          
          <div className='flex items-start space-x-3'>
            <Check className='h-5 w-5 text-green-400 mt-1 flex-shrink-0' />
            <div>
              <h3 className='text-lg font-semibold text-white mb-1'>Training & Support</h3>
              <p className='text-gray-300'>User training and ongoing technical support for your team.</p>
=======
        <div className="space-y-4">
          <div className="flex items-start">
            <div className="mt-1 mr-4">
              <Check className="h-5 w-5 text-blue-400" />
            </div>
            <div>
              <h3 className="text-white font-medium">Basic Hardware Diagnostics</h3>
              <p className="text-gray-300">
                Component testing and hardware issue identification.
              </p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="mt-1 mr-4">
              <Check className="h-5 w-5 text-blue-400" />
            </div>
            <div>
              <h3 className="text-white font-medium">Network Connectivity</h3>
              <p className="text-gray-300">
                Troubleshooting of basic network connectivity problems.
              </p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="mt-1 mr-4">
              <Check className="h-5 w-5 text-blue-400" />
            </div>
            <div>
              <h3 className="text-white font-medium">Service Documentation</h3>
              <p className="text-gray-300">
                Detailed report of work performed and recommendations.
              </p>
>>>>>>> origin/main
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}