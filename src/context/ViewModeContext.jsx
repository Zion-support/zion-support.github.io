import React, { createContext, useContext, useState } from 'react';

const ViewModeContext = createContext();

export const useViewMode = () => {
  const context = useContext(ViewModeContext);
  if (!context) {
    throw new Error('useViewMode must be used within a ViewModeProvider');
  }
  return context;
};

export const ViewModeProvider = ({ children }) => {
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'
  const [sortBy, setSortBy] = useState('newest'); // 'newest', 'oldest', 'name', 'price'
  const [filterCategory, setFilterCategory] = useState('all');

  const toggleViewMode = () => {
    setViewMode(prev => prev === 'grid' ? 'list' : 'grid');
  };

  const updateSortBy = (newSortBy) => {
    setSortBy(newSortBy);
  };

  const updateFilterCategory = (category) => {
    setFilterCategory(category);
  };

  const value = {
    viewMode,
    sortBy,
    filterCategory,
    toggleViewMode,
    updateSortBy,
    updateFilterCategory
  };

  return (
    <ViewModeContext.Provider value={value}>
      {children}
    </ViewModeContext.Provider>
  );
};