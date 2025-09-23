<<<<<<< HEAD
import React, { useState } from 'react';

export default function ElasticSearchSearch() {
  const [query, setQuery] = useState('');

  const search = () => {
    // Placeholder for actual ElasticSearch request
    console.log('ElasticSearch query', query);
=======
import React{ useState } from 'react';

export default function ElasticSearchSearch() {
  const [querysetQuery] = useState('');

  const search = () => {
    // Placeholder for actual ElasticSearch request
    console.log('ElasticSearch query'query);
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
  };

  return (
    <div className="space-y-2">
      <input
        className="border p-2 rounded w-full"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="ElasticSearch query"
      />
      <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={search}>
        Search
      </button>
    </div>
  );
}
