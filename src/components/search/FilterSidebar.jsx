import React from 'react';
import { motion } from 'framer-motion';
import { Filter, X, ChevronDown, ChevronUp } from 'lucide-react';

export function FilterSidebar({ filters, onFilterChange, onClearFilters, isOpen, onToggle }) {
  const filterOptions = {
    category: [
      'AI & Machine Learning',
      'Cloud & DevOps',
      'Cybersecurity',
      'Data & Analytics',
      'IoT & Edge Computing',
      'Quantum Computing',
      'IT Infrastructure',
      'Business Solutions'
    ],
    priceRange: [
      'Under $100',
      '$100 - $500',
      '$500 - $1,000',
      '$1,000 - $5,000',
      'Over $5,000'
    ],
    rating: [
      '5 stars',
      '4+ stars',
      '3+ stars',
      'Any rating'
    ],
    availability: [
      'Available Now',
      'Available Soon',
      'Custom Order',
      'Out of Stock'
    ]
  };

  return (
    <motion.div
      initial={{ x: -300 }}
      animate={{ x: isOpen ? 0 : -300 }}
      transition={{ duration: 0.3 }}
      className={`fixed left-0 top-0 h-full w-80 bg-zion-slate-dark border-r border-zion-slate-light z-50 transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold text-white flex items-center gap-2">
            <Filter className="w-5 h-5" />
            Filters
          </h3>
          <button
            onClick={onToggle}
            className="text-zion-slate-light hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-6">
          {/* Category Filter */}
          <div>
            <h4 className="text-white font-medium mb-3">Category</h4>
            <div className="space-y-2">
              {filterOptions.category.map((category) => (
                <label key={category} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={filters.category?.includes(category) || false}
                    onChange={(e) => {
                      const newCategories = e.target.checked
                        ? [...(filters.category || []), category]
                        : (filters.category || []).filter(c => c !== category);
                      onFilterChange({ ...filters, category: newCategories });
                    }}
                    className="w-4 h-4 text-zion-cyan bg-zion-slate-light border-zion-slate-light rounded focus:ring-zion-cyan focus:ring-2"
                  />
                  <span className="text-zion-slate-light text-sm">{category}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Price Range Filter */}
          <div>
            <h4 className="text-white font-medium mb-3">Price Range</h4>
            <div className="space-y-2">
              {filterOptions.priceRange.map((range) => (
                <label key={range} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="priceRange"
                    checked={filters.priceRange === range}
                    onChange={(e) => onFilterChange({ ...filters, priceRange: e.target.value })}
                    className="w-4 h-4 text-zion-cyan bg-zion-slate-light border-zion-slate-light focus:ring-zion-cyan focus:ring-2"
                  />
                  <span className="text-zion-slate-light text-sm">{range}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Rating Filter */}
          <div>
            <h4 className="text-white font-medium mb-3">Rating</h4>
            <div className="space-y-2">
              {filterOptions.rating.map((rating) => (
                <label key={rating} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="rating"
                    checked={filters.rating === rating}
                    onChange={(e) => onFilterChange({ ...filters, rating: e.target.value })}
                    className="w-4 h-4 text-zion-cyan bg-zion-slate-light border-zion-slate-light focus:ring-zion-cyan focus:ring-2"
                  />
                  <span className="text-zion-slate-light text-sm">{rating}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Availability Filter */}
          <div>
            <h4 className="text-white font-medium mb-3">Availability</h4>
            <div className="space-y-2">
              {filterOptions.availability.map((availability) => (
                <label key={availability} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={filters.availability?.includes(availability) || false}
                    onChange={(e) => {
                      const newAvailability = e.target.checked
                        ? [...(filters.availability || []), availability]
                        : (filters.availability || []).filter(a => a !== availability);
                      onFilterChange({ ...filters, availability: newAvailability });
                    }}
                    className="w-4 h-4 text-zion-cyan bg-zion-slate-light border-zion-slate-light rounded focus:ring-zion-cyan focus:ring-2"
                  />
                  <span className="text-zion-slate-light text-sm">{availability}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-zion-slate-light">
          <button
            onClick={onClearFilters}
            className="w-full py-2 px-4 bg-zion-slate-light/20 text-zion-slate-light hover:bg-zion-slate-light/30 transition-colors rounded-lg"
          >
            Clear All Filters
          </button>
        </div>
      </div>
    </motion.div>
  );
}