'use client';
import React, { useState } from 'react';
import { Search, X, ArrowRight } from 'lucide-react';;
import { ArrowRight } from 'lucide-react';

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      // Handle search logic here
      console.log('Searching for:', query);
    }
  };

  return (
    <div className="relative">
      <form onSubmit={handleSubmit} className="flex items-center">
        <div className="relative">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search..."
            className="w-64 px-4 py-2 pl-10 pr-4 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
        </div>
        <button
          type="submit"
          className="ml-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors duration-200"
        >
          Search
        </button>
      </form>
    </div>
  );
}
            Contact Us
            
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
;
  )}
    </div>
    </div>
    </div>
}