
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
}
import React from 'react';
import {useEffect, useState} from "react";
import {useNavigate, useSearchParams} from "react-router-dom";
import {EnhancedSearchInput} from "@/components/search/EnhancedSearchInput";
import {generateSearchSuggestions} from "@/data/marketplaceData";
import {SearchSuggestion} from "@/types/search";
import {useAISearch} from "@/hooks/useAISearch";
import {AppLayout} from "@/layout/AppLayout";
export default function SearchPage() {;    if (initial) {
      search(initial)
    }  return (
    <AppLayout>;
      <main className="container mx-auto px-4 py-8">;
        <form onSubmit={handleSubmit} className="mb-6">;
          <EnhancedSearchInput

            value={query}
            onChange={setQuery}
            searchSuggestions={suggestions}"
            placeholder="Search talent, jobs, and projects..."
        {loading && <p className="text-zion-slate-light">Searching...</p>}
        {!loading && results && results.length === 0 && (;"
          <p className="text-zion-slate-light">No results found.</p>;
        )}
        {!loading && results && results.length > 0 && (;"
          <div className="space-y-4">;
            {results && results.map((r) => (;
              <div;`
                key={`${r && r.type}-${r && r.id}`}"
                className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-4">;"
                <p className="text-xs uppercase text-zion-slate-light mb-1">;
                  {r && r.type}
                </p>;"
                <h3 className="text-lg font-bold text-white">{r && r.title}</h3>;"
                <p className="text-zion-slate-light">{r && r.description}</p>;
              </div>;
            ))}
          </div>;
        )}

      </main>;
    </AppLayout>;
  );
}