import React from 'react';

interface SearchProps {
  className?: string;
}

const Search = React.memo(function Search({ className = '' }: SearchProps) {
<<<<<<< HEAD
  return(<div className={`bg-blue-100 p-4 rounded-lg ${className}`}>)
      <h3 className="text-lg font-semibold text-blue-800">Search</h3>)
      <p className="text-blue-600">This component is under development.</p>)
    </div>)
=======
  return (
    <div className={`bg-blue-100 p-4 rounded-lg ${className}`}></div>
      <h3 className="text-lg font-semibold text-blue-800">Search</h3>
      <p className="text-blue-600">This component is under development.</p>
    </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-2937
  );
});

export default Search;
