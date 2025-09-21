import React from "react";
import { MapPin } from 'lucide-react'

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
          <div className="flex justify-between items-center">
            <span className="text-gray-300">Service Location:</span>
            <span className="text-white font-medium">{selectedCountry}</span>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-gray-300">Service Type:</span>
            <span className="text-white font-medium">IT Onsite Support</span>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-gray-300">Response Time:</span>
            <span className="text-white font-medium">2-24 hours</span>
          </div>
          
          <div className="border-t border-slate-600 pt-4">
            <div className="flex justify-between items-center text-lg">
              <span className="text-white font-semibold">Total Cost:</span>
              <span className="text-blue-400 font-bold">Contact for Quote</span>
            </div>
          </div>
          
          <button
            onClick={onPaymentClick}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors"
          >
            Get Quote & Schedule Service
          </button>
        </div>
      ) : (
        <div className="text-center py-8">
          <p className="text-gray-400 mb-4">
            Please select a country to see pricing and proceed with booking.
          </p>
        </div>
      )}
    </div>
  );
}