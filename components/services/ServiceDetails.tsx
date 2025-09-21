import { Server, Clock, MapPin } from 'lucide-react'
import React from "react";

interface ServiceDetailsProps {
  country: string;
}

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
          </ul>
        </div>
      </div>
    </div>
  )
}