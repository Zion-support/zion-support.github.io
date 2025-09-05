<<<<<<< HEAD
import React, { useState } from 'react',;
;
export default function ElasticSearchSearch() {;
  const [query, setQuery] = useState(''),;
;
  const search = () => {;
    // Placeholder for actual ElasticSearch request;
    // // // console.log('ElasticSearch query', query),;
  },;
;
  return (;
    <div className="space-y-2">;
      <input;
        className="border p-2 rounded w-full";
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="ElasticSearch query";
      />;
      <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={search}>;
        Search;
      </button>;
    </div>;
  ),;
=======
import React, { useState } from 'react',

export default function ElasticSearchSearch() {
  const [query, setQuery] = useState(''),

  const search = () => {
    // Placeholder for actual ElasticSearch request
    // // // console.log('ElasticSearch query', query)
  },
  return (
    <div className=&quot;space-y-2&quot;>
      <input
        className=&quot;border p-2 rounded w-full&quot;
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder=&quot;ElasticSearch query&quot;
      />
      <button className=&quot;bg-blue-500 text-white px-4 py-2 rounded&quot; onClick={search}>
import React, {_useState} from 'react';

export default function ElasticSearchSearch() {_const [query, _setQuery] = useState('');

  const _search = () => {
    // Placeholder for actual ElasticSearch request};

  return (_<div className="space-y-2">
      <input
        className="border p-2 rounded w-full"
        value={_query}
        onChange={_(e) => setQuery(e.target.value)}
        placeholder="ElasticSearch query"
      />
      <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={_search}>
        Search
      </button>
    </div>
  )
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}
