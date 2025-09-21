<<<<<<< HEAD
import { MapPin } from 'lucide-react';
import React from "react";

interface PaymentSectionProps {
  selectedCountry: string | null;
  onPaymentClick: () => void;
}

export function PaymentSection({ selectedCountry, onPaymentClick }: PaymentSectionProps) {
  return (
    <div className="bg-slate-800 rounded-lg border border-slate-600 p-6">
      <div className="flex items-center space-x-3 mb-4">
        <MapPin className="h-6 w-6 text-blue-400" />
        <h3 className="text-xl font-semibold text-white">
          {selectedCountry ? `IT Onsite Service - ${selectedCountry}` : 'Select a Country'}
        </h3>
      </div>
      
      {selectedCountry ? (
        <div className="space-y-4">
          <div className="bg-slate-700 rounded-lg p-4">
            <h4 className="text-lg font-medium text-white mb-2">Service Details</h4>
            <div className="space-y-2 text-gray-300">
              <p>• Onsite IT support and installation</p>
              <p>• 24/7 availability</p>
              <p>• Certified technicians</p>
              <p>• Complete setup and configuration</p>
            </div>
          </div>
          
          <button
            onClick={onPaymentClick}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            Proceed to Payment
          </button>
        </div>
      ) : (
        <p className="text-gray-400 text-center py-8">
          Please select a country to see pricing and proceed with payment.
        </p>
      )}
=======
import { MapPin } from 'lucide-react'
import React from "react";

interface CountryPricing {
  country: string;
  pricePerIncident: number;
  currency: string;
}

interface PaymentSectionProps {
  selectedCountry: CountryPricing;
}

export function PaymentSection({ selectedCountry }: PaymentSectionProps) {
  return (
    <div className="text-center">
      <div className="bg-gray-800 rounded-lg border border-gray-700 p-8 mb-8">
        <div className="flex items-center justify-center mb-4">
          <MapPin className="h-6 w-6 text-blue-400 mr-2" />
          <h3 className="text-xl font-semibold text-white">
            Service Location: {selectedCountry.country}
          </h3>
        </div>
        
        <div className="text-center">
          <p className="text-gray-300 mb-4">
            Base price for IT onsite service
          </p>
          <p className="text-4xl font-bold text-blue-400 mb-6">
            ${selectedCountry.pricePerIncident.toFixed(2)}
          </p>
          <p className="text-sm text-gray-400 mb-8">
            Includes transportation and first hour of service
          </p>
          
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-colors">
            Proceed to Payment
          </button>
        </div>
      </div>
>>>>>>> origin/main
    </div>
  );
}