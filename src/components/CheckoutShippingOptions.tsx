import React, { useState } from 'react';

import { Check } from 'lucide-react';

interface ShippingOption {
  id: string;
  name: string;
  price: number;
  estimatedDays: string;
  description: string;
}

interface CheckoutShippingOptionsProps {
  onSelectShipping: (option: ShippingOption) => void;
  selectedShipping?: string;
}

const shippingOptions: ShippingOption[] = [
  {
    id: 'standard',
    name: 'Standard Shipping',
    price: 9.99,
    estimatedDays: '5-7 business days',
    description: 'Regular ground shipping'
  },
  {
    id: 'express',
    name: 'Express Shipping',
    price: 19.99,
    estimatedDays: '2-3 business days',
    description: 'Priority shipping for faster delivery'
  },
  {
    id: 'overnight',
    name: 'Overnight Shipping',
    price: 39.99,
    estimatedDays: '1 business day',
    description: 'Next business day delivery'
  }
];

export default function CheckoutShippingOptions({ 
  onSelectShipping, 
  selectedShipping 
}: CheckoutShippingOptionsProps) {
  const [selectedOption, setSelectedOption] = useState(selectedShipping || '');

  const _handleOptionChange = (option: ShippingOption) => {
    setSelectedOption(option.id);
    onSelectShipping(option);
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-900">Shipping Options</h3>
      <div className="space-y-3">
        {shippingOptions.map((option) => (
          <label
            key={option.id}
            className={`flex items-center p-4 border rounded-lg cursor-pointer transition-colors ${
              selectedOption === option.id
                ? 'border-blue-500 bg-blue-50'
                : 'border-gray-200 hover:border-gray-300'
            }`}
          >
            <input
              type="radio"
              name="shipping"
              value={option.id}
              checked={selectedOption === option.id}
              onChange={() => handleOptionChange(option)}
              className="mr-3 text-blue-600 focus:ring-blue-500"
            />
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <div>
                  <div className="font-medium text-gray-900">{option.name}</div>
                  <div className="text-sm text-gray-600">{option.description}</div>
                  <div className="text-sm text-gray-500">{option.estimatedDays}</div>
                </div>
                <div className="text-lg font-semibold text-gray-900">
                  ${option.price.toFixed(2)}
                </div>
              </div>
            </div>
          </label>
        ))}
      </div>
    </div>
  );
}