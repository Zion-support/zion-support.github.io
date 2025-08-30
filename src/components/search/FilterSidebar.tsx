import React from 'react';
import { Filter, X } from 'lucide-react';

interface FilterOption {
  value: string;
  label: string;
  count?: number;
}

interface FilterGroup {
  title: string;
  key: string;
  options: FilterOption[];
  type: 'checkbox' | 'radio' | 'range';
}

interface FilterSidebarProps {
  filters: FilterGroup[];
  selectedFilters: Record<string, string[]>;
  onFilterChange: (key: string, value: string, checked: boolean) => void;
  onClearFilters: () => void;
  isOpen: boolean;
  onClose: () => void;
}

export function FilterSidebar({ 
  filters, 
  selectedFilters, 
  onFilterChange, 
  onClearFilters, 
  isOpen, 
  onClose 
}: FilterSidebarProps) {
  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <div className={`
        fixed lg:static inset-y-0 left-0 z-50 w-80 bg-zion-blue-dark/95 backdrop-blur-xl border-r border-zion-blue-light/20 transform transition-transform duration-300 lg:transform-none
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="flex items-center justify-between p-4 border-b border-zion-blue-light/20">
          <h3 className="text-lg font-semibold text-white flex items-center gap-2">
            <Filter className="w-5 h-5" />
            Filters
          </h3>
          <button
            onClick={onClose}
            className="lg:hidden p-2 hover:bg-zion-blue-light/20 rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-zion-slate-light" />
          </button>
        </div>
        
        <div className="p-4 space-y-6">
          {/* Clear all button */}
          <div className="flex justify-between items-center">
            <span className="text-sm text-zion-slate-light">Active filters</span>
            <button
              onClick={onClearFilters}
              className="text-sm text-zion-cyan hover:text-zion-cyan-light transition-colors underline"
            >
              Clear all
            </button>
          </div>
          
          {/* Filter groups */}
          {filters.map((group) => (
            <div key={group.key} className="space-y-3">
              <h4 className="font-medium text-white">{group.title}</h4>
              
              <div className="space-y-2">
                {group.options.map((option) => {
                  const isSelected = selectedFilters[group.key]?.includes(option.value) || false;
                  
                  return (
                    <label key={option.value} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type={group.type === 'radio' ? 'radio' : 'checkbox'}
                        name={group.key}
                        value={option.value}
                        checked={isSelected}
                        onChange={(e) => onFilterChange(group.key, option.value, e.target.checked)}
                        className="w-4 h-4 text-zion-cyan bg-zion-blue-dark border-zion-blue-light/30 rounded focus:ring-zion-cyan focus:ring-2"
                      />
                      <span className="text-sm text-zion-slate-light">
                        {option.label}
                        {option.count && (
                          <span className="ml-2 text-zion-slate-light/60">
                            ({option.count})
                          </span>
                        )}
                      </span>
                    </label>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}