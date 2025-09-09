import React, { useState, useEffect } from 'react';
import { Slider } from '@/components/ui/slider';
import { Star } from 'lucide-react';

export default function DynamicListingPage() {
  const [priceRange, setPriceRange] = useState({ min: 0, max: 1000 });
  const [currentPriceFilter, setCurrentPriceFilter] = useState([0, 1000]);
  const [selectedRating, setSelectedRating] = useState(null);

  const handleSliderChange = (value) => {
    setCurrentPriceFilter(value);
  };

  const handleRatingChange = (rating) => {
    setSelectedRating(rating);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Dynamic Listings</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Filters Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-6">Filters</h2>
            
            {/* Price Range Filter */}
            <div className="mb-6">
              <label className="text-sm font-medium text-gray-700 block mb-2">
                Price Range
              </label>
              <div className="mt-6 px-2">
                <Slider 
                  aria-label="Price range" 
                  defaultValue={[0, priceRange.max]}
                  min={0} 
                  max={priceRange.max} 
                  step={priceRange.max / 100} 
                  value={currentPriceFilter} 
                  onValueChange={handleSliderChange} 
                  className="mb-4" 
                />
                <div className="flex justify-between text-sm text-gray-600">
                  <span>${currentPriceFilter[0].toLocaleString()}</span>
                  <span>${currentPriceFilter[1].toLocaleString()}</span>
                </div>
              </div>
            </div>
            
            {/* Rating Filter */}
            <div className="mb-6">
              <label className="text-sm font-medium text-gray-700 block mb-2">
                Minimum Rating
              </label>
              <div className="space-y-2">
                {[null, 1, 2, 3, 4, 5].map((rating) => (
                  <button
                    key={rating}
                    onClick={() => handleRatingChange(rating)}
                    className={`w-full text-left px-3 py-2 rounded-md border transition-colors ${
                      selectedRating === rating
                        ? "bg-purple-100 border-purple-500 text-purple-700"
                        : "border-gray-300 text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    {rating === null ? "Any" : (
                      <div className="flex items-center">
                        {[...Array(rating)].map((_, i) => (
                          <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        ))}
                        <span className="ml-1">& Up</span>
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="lg:col-span-3">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Listings</h2>
            <p className="text-gray-600">
              No listings found. This is a placeholder component.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}