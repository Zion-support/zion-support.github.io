import React from 'react';
import { motion } from 'framer-motion';
import { X, Filter } from 'lucide-react';

export function ActiveFiltersBar({ 
  selectedProductTypes, 
  selectedLocations, 
  selectedAvailability, 
  selectedRating, 
  searchQuery,
  onClearFilter,
  onClearAll
}) {
  const hasActiveFilters = selectedProductTypes?.length > 0 || 
                          selectedLocations?.length > 0 || 
                          selectedAvailability?.length > 0 || 
                          selectedRating || 
                          searchQuery;

  if (!hasActiveFilters) {
    return null;
  }

  const renderFilterChip = (label, value, filterType) => (
    <motion.div
      key={`${filterType}-${value}`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      className="flex items-center gap-2 bg-zion-cyan/20 text-zion-cyan px-3 py-2 rounded-full border border-zion-cyan/30"
    >
      <span className="text-sm font-medium">{label}: {value}</span>
      <button
        onClick={() => onClearFilter(filterType, value)}
        className="text-zion-cyan hover:text-white transition-colors"
      >
        <X className="w-4 h-4" />
      </button>
    </motion.div>
  );

  return (
    <div className="bg-zion-slate-dark border border-zion-slate-light rounded-lg p-4 mb-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Filter className="w-5 h-5 text-zion-cyan" />
          <span className="text-white font-medium">Active Filters</span>
        </div>
        <button
          onClick={onClearAll}
          className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm"
        >
          Clear All
        </button>
      </div>

      <div className="flex flex-wrap gap-2">
        {searchQuery && renderFilterChip('Search', searchQuery, 'search')}
        
        {selectedProductTypes?.map(type => 
          renderFilterChip('Product Type', type, 'productType')
        )}
        
        {selectedLocations?.map(location => 
          renderFilterChip('Location', location, 'location')
        )}
        
        {selectedAvailability?.map(availability => 
          renderFilterChip('Availability', availability, 'availability')
        )}
        
        {selectedRating && renderFilterChip('Rating', `${selectedRating}+ stars`, 'rating')}
      </div>
    </div>
  );
}