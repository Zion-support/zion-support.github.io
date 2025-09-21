import { Server, Clock, MapPin } from 'lucide-react'
import React from "react";

interface ServiceDetailsProps {
  country: string;
}

export function ServiceDetails({ country }: ServiceDetailsProps) {
  const getRegionalInstructions = (countryName: string) => {
    const instructions: { [key: string]: string } = {
      'United States': 'Our technicians operate during business hours (8AM-6PM EST). Response times are typically within 4 hours for metropolitan areas.',
      'Canada': 'Our technicians operate during business hours (8AM-6PM EST). Response times are typically within 6 hours for major cities.',
      'United Kingdom': 'Our technicians operate during business hours (8AM-6PM GMT). Response times are typically within 8 hours for London and major cities.',
    };
    return instructions[countryName] || `Our technicians operate during business hours. Response times vary by location.`;
  };

  const datacenters = ['Major Cities', 'Business Districts', 'Industrial Areas'];

  return (
    <div className="bg-gray-800 border border-gray-700 rounded-lg">
      <div className="p-6">
        <div className="flex items-center mb-4">
          <Server className="mr-2 h-5 w-5 text-blue-400" />
          <h3 className="text-xl font-semibold text-white">
            IT Onsite Service in {country}
          </h3>
        </div>
        
        <p className="text-gray-300 mb-6">
          Details about our service locations and capabilities in {country}
        </p>
        
        <div className="space-y-6">
          <div>
            <h4 className="text-lg font-medium text-white mb-3 flex items-center">
              <MapPin className="mr-2 h-4 w-4 text-purple-400" />
              Service Locations
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {datacenters.map((dc, idx) => (
                <div
                  key={idx}
                  className="bg-gray-700 p-2 rounded border border-gray-600 text-center text-gray-300"
                >
                  {dc}
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-medium text-white mb-3 flex items-center">
              <Clock className="mr-2 h-4 w-4 text-purple-400" />
              Service Instructions
            </h4>
            <p className="text-gray-300">
              {getRegionalInstructions(country)}
            </p>
          </div>
          
          <div className="bg-gray-700 rounded-lg p-4 border border-gray-600">
            <h4 className="text-lg font-medium text-white mb-3">
              What's Included
            </h4>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>Transportation to your site</li>
              <li>First hour of onsite technical support</li>
              <li>Basic hardware diagnosis</li>
              <li>Network connectivity troubleshooting</li>
              <li>Equipment installation assistance</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-6 pt-4 border-t border-gray-700">
          <p className="text-sm text-gray-400">
            For custom enterprise needs or multi-site services in {country},
            please contact our enterprise team for tailored pricing.
          </p>
        </div>
      </div>
    </div>
  );
}