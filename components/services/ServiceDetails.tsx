import { Server, Clock, MapPin } from 'lucide-react';
import React from "react";

interface ServiceDetailsProps {
  country: string;
}

export function ServiceDetails({ country }: ServiceDetailsProps) {
  return (
    <div className="space-y-6">
      <div className="bg-slate-800 rounded-lg border border-slate-600 p-6">
        <h2 className="text-2xl font-bold text-white mb-4">
          IT Onsite Service - {country}
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          <div className="flex items-center space-x-3">
            <Server className="h-6 w-6 text-blue-400" />
            <div>
              <h3 className="text-lg font-semibold text-white">Hardware Setup</h3>
              <p className="text-gray-300 text-sm">Complete installation and configuration</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <Clock className="h-6 w-6 text-blue-400" />
            <div>
              <h3 className="text-lg font-semibold text-white">24/7 Support</h3>
              <p className="text-gray-300 text-sm">Round-the-clock technical assistance</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <MapPin className="h-6 w-6 text-blue-400" />
            <div>
              <h3 className="text-lg font-semibold text-white">Onsite Service</h3>
              <p className="text-gray-300 text-sm">Technicians visit your location</p>
            </div>
          </div>
        </div>
        
        <div className="bg-slate-700 rounded-lg p-4">
          <h4 className="text-lg font-medium text-white mb-3">Service Includes:</h4>
          <ul className="space-y-2 text-gray-300">
            <li>• Hardware installation and setup</li>
            <li>• Network configuration and optimization</li>
            <li>• Software installation and configuration</li>
            <li>• System troubleshooting and maintenance</li>
            <li>• Security implementation</li>
            <li>• User training and documentation</li>
          </ul>
        </div>
      </div>
    </div>
  );
}