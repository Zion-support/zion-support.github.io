import React from 'react';

interface SearchComponentProps {
  className?: string;
}

const SearchComponent = React.memo(function SearchComponent({
  className = '',
}: SearchComponentProps) {
  return (
    <div className={`bg-blue-100 p-4 rounded-lg ${className}`}>
      <h3 className='text-lg font-semibold text-blue-800'>SearchComponent</h3>
      <p className='text-blue-600'>This component is under development.</p>
    </div>
  );
});

export default SearchComponent;
