<<<<<<< HEAD
import { Server, Clock, MapPin } from 'lucide-react';
=======
import { Server, Clock, MapPin } from 'lucide-react'
>>>>>>> pr-22753
import React from "react";

interface ServiceDetailsProps {
  country: string;
}

<<<<<<< HEAD
export function ServiceDetails({ country }: ServiceDetailsProps) {
  return (
    <div className="space-y-6">
      <div className="bg-slate-800 rounded-lg border border-slate-600 p-6">
        <h2 className="text-2xl font-bold text-white mb-4">
          IT Onsite Service - {country}
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          <div className="flex items-center space-x-3">
            <MapPin className="h-6 w-6 text-blue-400" />
            <div>
              <p className="text-sm text-gray-400">Service Location</p>
              <p className="text-white font-medium">{country}</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <Clock className="h-6 w-6 text-green-400" />
            <div>
              <p className="text-sm text-gray-400">Response Time</p>
              <p className="text-white font-medium">2-24 hours</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <Server className="h-6 w-6 text-purple-400" />
            <div>
              <p className="text-sm text-gray-400">Service Type</p>
              <p className="text-white font-medium">Onsite IT Support</p>
            </div>
          </div>
        </div>
        
        <div className="prose prose-invert max-w-none">
          <h3 className="text-xl font-semibold text-white mb-3">Service Overview</h3>
          <p className="text-gray-300 mb-4">
            Our professional IT technicians will come directly to your location in {country} 
            to provide comprehensive IT support services. We handle everything from hardware 
            installation to software configuration and troubleshooting.
          </p>
          
          <h4 className="text-lg font-medium text-white mb-2">What We Cover:</h4>
          <ul className="list-disc list-inside text-gray-300 space-y-1 mb-4">
            <li>Computer and server installation</li>
            <li>Network setup and configuration</li>
            <li>Software installation and updates</li>
            <li>Hardware troubleshooting and repair</li>
            <li>Data migration and backup</li>
            <li>Security implementation</li>
            <li>User training and documentation</li>
          </ul>
          
          <h4 className="text-lg font-medium text-white mb-2">Service Benefits:</h4>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            <li>Certified and experienced technicians</li>
            <li>Same-day or next-day service availability</li>
            <li>Comprehensive documentation and training</li>
            <li>Follow-up support and maintenance</li>
            <li>Transparent pricing with no hidden fees</li>
=======
// Component to show service details for the selected country
export function ServiceDetails({ country }: ServiceDetailsProps) {
  // Get datacenters for regions (simplified - in production this would come from a real database)
  return (
    <div className='bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6'>
      <div className='mb-6'>
        <h3 className='text-xl font-semibold text-white flex items-center mb-2'>
          <Server className='mr-2 h-5 w-5 text-zion-cyan' />
          IT Onsite Service in {country}
        </h3>
        <p className='text-zion-slate-light'>
          Details about our service locations and capabilities in {country}
        </p>
      </div>
      
      <div className='space-y-4'>
        <div className='overflow-hidden rounded-lg mb-4 relative h-48 bg-zion-blue-light'>
          <div className='absolute inset-0 flex items-center justify-center'>
            <span className='text-zion-slate-light'>Service Coverage Map</span>
          </div>
        </div>
        
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <div className='bg-zion-blue-light p-4 rounded-lg'>
            <div className='flex items-center mb-2'>
              <Clock className='h-5 w-5 text-zion-cyan mr-2' />
              <h4 className='text-white font-medium'>Response Time</h4>
            </div>
            <p className='text-zion-slate-light text-sm'>
              Average response time: 2-4 hours in major cities
            </p>
          </div>
          
          <div className='bg-zion-blue-light p-4 rounded-lg'>
            <div className='flex items-center mb-2'>
              <MapPin className='h-5 w-5 text-zion-cyan mr-2' />
              <h4 className='text-white font-medium'>Coverage Area</h4>
            </div>
            <p className='text-zion-slate-light text-sm'>
              Nationwide coverage with local technicians
            </p>
          </div>
        </div>
        
        <div className='bg-zion-blue-light p-4 rounded-lg'>
          <h4 className='text-white font-medium mb-3'>Service Capabilities</h4>
          <ul className='space-y-2 text-zion-slate-light text-sm'>
            <li>• Hardware diagnostics and repair</li>
            <li>• Network troubleshooting</li>
            <li>• Software installation and configuration</li>
            <li>• Data recovery services</li>
            <li>• System optimization</li>
            <li>• Preventive maintenance</li>
>>>>>>> pr-22753
          </ul>
        </div>
      </div>
    </div>
<<<<<<< HEAD
  );
=======
  )
>>>>>>> pr-22753
}