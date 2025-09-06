<<<<<<< HEAD
import React, { useState } from 'react';

export default function ElasticSearchSearch() {
  const [query, setQuery] = useState('');

  const search = () => {
    // Placeholder for actual ElasticSearch request
    console.log('ElasticSearch query', query);
  };

  return (
    <div className='space-y-2'>
      <input
        className='border p-2 rounded w-full'
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder='ElasticSearch query'
      />
      <button
        className='bg-blue-500 text-white px-4 py-2 rounded'
        onClick={search}
      >
        Search
      </button>
    </div>
  );
}
=======
 return (<div className="space-y-2" > <input className="border p-2 rounded w-full" value= {
  query 
}onChange= {
  (e) => setQuery (e.target.value) 
}placeholder="ElasticSearch query" /> <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick= {
  search 
}> 
}
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
