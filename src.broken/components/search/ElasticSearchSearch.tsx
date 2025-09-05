import React, { useState } from 'react';

export default function ElasticSearchSearch() {
  const [query, setQuery] = useState('');

  const search = () => {
    // Placeholder for actual ElasticSearch request
    // console.log('ElasticSearch query', query);
  };

  return (
    <div className=&quot;space-y-2&quot;>
      <input
        className=&quot;border p-2 rounded w-full&quot;
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder=&quot;ElasticSearch query&quot;
      />
      <button className=&quot;bg-blue-500 text-white px-4 py-2 rounded&quot; onClick={search}>
        Search
      </button>
    </div>
  );
}
