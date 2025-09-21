import { MapPin } from 'lucide-react'
import React from "react";

interface CountryPricing {
  name: string;
  code: string;
  country: string;
  pricePerIncident: number;
  responseTime: string;
  coverage: string;
}

interface PaymentSectionProps {
  selectedCountry: CountryPricing;
}

export function PaymentSection({ selectedCountry }: PaymentSectionProps) {
  // Handle successful payment
  return (
    <div className='text-center'>
      <p className='text-zion-slate-light mb-2'>Selected Country</p>
      <h4 className='text-xl font-bold text-white mb-2 flex items-center justify-center'>
        <MapPin className='mr-2 h-5 w-5 text-zion-purple' />
        {selectedCountry.country}
      </h4>
      <p className='text-2xl font-bold text-zion-cyan mb-6'>
        ${selectedCountry.pricePerIncident.toFixed(2)}
      </p>
      <button
        onClick={() => alert('Payment functionality would be implemented here')}
        className='bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white w-full py-6 rounded-lg font-semibold transition-all duration-300'
      >
        Pay for Service in {selectedCountry.country}
      </button>
      <p className='text-xs text-zion-slate-light mt-2'>
        Price includes transportation and first hour onsite. Additional hours,
billed separately.
      </p>
    </div>
  )
}