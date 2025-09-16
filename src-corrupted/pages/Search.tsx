<<<<<<< HEAD
import React from 'react';
import { Helmet } from 'react-helmet-async';
=======
import React, { useState, useEffect } from 'react';
export default Search;

export default function Page(props: any) {
,
    { id: 'equipment', name: 'Equipment', count: 0 },
    { id: 'companies', name: 'Companies', count: 0 },
  ];
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-8b4d

const Search: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <Helmet>
        <title>Search | Zion Tech Group</title>
        <meta name="description" content="Search - Revolutionary technology solutions" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">Search</h1>
          <p className="text-xl text-gray-300">Revolutionary technology solutions</p>
        </div>
      </div>
    </div>
  );
};

export default Search;