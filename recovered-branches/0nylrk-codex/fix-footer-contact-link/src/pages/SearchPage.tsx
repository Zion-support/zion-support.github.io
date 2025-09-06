<<<<<<< HEAD

<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
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

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import {useEffect, useState} from "react";
import {useNavigate, useSearchParams} from "react-router-dom";
import {EnhancedSearchInput} from "@/components/search/EnhancedSearchInput";
import {generateSearchSuggestions} from "@/data/marketplaceData";
import {SearchSuggestion} from "@/types/search";
import {useAISearch} from "@/hooks/useAISearch";
import {AppLayout} from "@/layout/AppLayout";
export default function SearchPage() {;
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  const [params] = useSearchParams();
  const navigate = useNavigate();
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  const [params] = useSearchParams();

  const navigate = useNavigate();
<<<<<<< HEAD



  const suggestions: SearchSuggestion[] = generateSearchSuggestions(),


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
  const initial = params.get("q") || "";
  const [query, setQuery] = useState(initial);
  const { results, loading, search } = useAISearch();
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import { useEffect, useState } from "react",
import { useNavigate, useSearchParams } from "react-router-dom",
import { EnhancedSearchInput } from "@/components/search/EnhancedSearchInput",
import { generateSearchSuggestions } from "@/data/marketplaceData",
import { SearchSuggestion } from "@/types/search",
import { useAISearch } from "@/hooks/useAISearch";
import { AppLayout } from "@/layout/AppLayout";
export default function SearchPage() {
  const [params] = useSearchParams();

  const navigate = useNavigate();
  const initial = params.get("q") |"";
  const [query, setQuery] = useState(initial);
  const { results, loading, search } = useAISearch();
  const suggestions: SearchSuggestion[] = generateSearchSuggestions()
import { useAISearch } from "@/hooks/useAISearch",
import { AppLayout } from "@/layout/AppLayout",
export default function SearchPage() {
  const [params] = useSearchParams(),
  const navigate = useNavigate(),
  const initial = params.get("q") || "",
  const [query, setQuery] = useState(initial),
  const { results, loading, search } = useAISearch(),

<<<<<<< HEAD
import { useEffect, useState } from "react",
import { useNavigate, useSearchParams } from "react-router-dom",
import { EnhancedSearchInput } from "@/components/search/EnhancedSearchInput",
import { generateSearchSuggestions } from "@/data/marketplaceData",
import { SearchSuggestion } from "@/types/search",

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  const suggestions: SearchSuggestion[] = generateSearchSuggestions(),

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
  const [params] = useSearchParams();

  const navigate = useNavigate();

  const suggestions: SearchSuggestion[] = generateSearchSuggestions(),

<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  useEffect(() => {
    if (initial) {
      search(initial)
    }
<<<<<<< HEAD

  const initial = params && params.get("q") || "";
  const [query, setQuery] = useState(initial);
  const { results, loading, search } = useAISearch();
  const suggestions: SearchSuggestion[] = generateSearchSuggestions(),;

<<<<<<< HEAD
=======
import { useEffect, useState } from "react",;
import { useNavigate, useSearchParams } from "react-router-dom",;
import { EnhancedSearchInput } from "@/components/search/EnhancedSearchInput",;
import { generateSearchSuggestions } from "@/data/marketplaceData",;
import { SearchSuggestion } from "@/types/search",;
import { useAISearch } from "@/hooks/useAISearch",;
import { AppLayout } from "@/layout/AppLayout",;
;
export default function SearchPage() {;
  const [params] = useSearchParams(),;
  const navigate = useNavigate(),;
  const initial = params.get("q") || "",;
  const [query, setQuery] = useState(initial),;
  const { results, loading, search } = useAISearch(),;
  const suggestions:SearchSuggestion[] = generateSearchSuggestions(),;
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  useEffect(() => {;
    if (initial) {;
      search(initial);
    }
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  }, [initial]);

  const handleSubmit = (e: React && React.FormEvent) => {;
    e && e.preventDefault(),;
    navigate(`/search?q=${encodeURIComponent(query)}`);
    search(query);
  };
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======

=======

=======

  }, [initial]);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    navigate(`/search?q=${encodeURIComponent(query)}`);
    search(query)
  }
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  }, [initial]),

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(),
    navigate(`/search?q=${encodeURIComponent(query)}`),
    search(query)
  },
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  return (
    <AppLayout>;
      <main className="container mx-auto px-4 py-8">;
        <form onSubmit={handleSubmit} className="mb-6">;
<<<<<<< HEAD
<<<<<<< HEAD
=======

  return (
    <AppLayout>
      <main className="container mx-auto px-4 py-8">
        <form onSubmit={handleSubmit} className="mb-6">
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
          <EnhancedSearchInput
            value={query}
            onChange={setQuery}
            searchSuggestions={suggestions}
            placeholder="Search talent, jobs, and projects..."

<<<<<<< HEAD
          />;
        </form>;


<<<<<<< HEAD
=======


=======


          />
        </form>

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import { useEffect, useState } from "react",;
import { useNavigate, useSearchParams } from "react-router-dom",;
import { EnhancedSearchInput } from "@/components/search/EnhancedSearchInput",;
import { generateSearchSuggestions } from "@/data/marketplaceData",;
import { SearchSuggestion } from "@/types/search",;
import { useAISearch } from "@/hooks/useAISearch",;
import { AppLayout } from "@/layout/AppLayout",;
export default function SearchPage() {;
  const [params] = useSearchParams(),;
  const navigate = useNavigate(),;
  const initial = params.get("q") || "",;
  const [query, setQuery] = useState(initial),;
  const { results, loading, search } = useAISearch(),;
  const suggestions: SearchSuggestion[] = generateSearchSuggestions(),;
  useEffect(() => {;
    if (initial) {;
      search(initial);
    }
  }, [initial]),;
  const handleSubmit = (e: React.FormEvent) => {;
    e.preventDefault(),;
    navigate(`/search?q=${encodeURIComponent(query)}`);
    search(query);
  };
  return (;
    <AppLayout>;
      <main className="container mx-auto px-4 py-8">;
        <form onSubmit={handleSubmit} className="mb-6">;
          <EnhancedSearchInput;
            value={query}
            onChange={setQuery}
            searchSuggestions={suggestions}
            placeholder="Search talent, jobs, and projects...";
          />;
        </form>;
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
          />;
        </form>;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        {loading && <p className="text-zion-slate-light">Searching...</p>}
        {!loading && results && results.length === 0 && (;
          <p className="text-zion-slate-light">No results found.</p>;
        )}
        {!loading && results && results.length > 0 && (;
          <div className="space-y-4">;
            {results && results.map((r) => (;
              <div
                key={`${r && r.type}-${r && r.id}`}
                className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-4">;
                <p className="text-xs uppercase text-zion-slate-light mb-1">;
                  {r && r.type}
                </p>;
                <h3 className="text-lg font-bold text-white">{r && r.title}</h3>;
                <p className="text-zion-slate-light">{r && r.description}</p>;
              </div>;
            ))}
<<<<<<< HEAD
<<<<<<< HEAD
          </div>;
        )}

      </main>;
    </AppLayout>;
  );
}

<<<<<<< HEAD
=======
=======
=======
  }, [initial]),;
;
  const handleSubmit = (e:React.FormEvent) => {;
    e.preventDefault(),;
    navigate(`/search?q=${encodeURIComponent(query)}`),;
    search(query),;
  },;
;
  return (;
    <AppLayout>;
      <main className="container mx-auto px-4 py-8">;
        <form onSubmit={handleSubmit} className="mb-6">;
          <EnhancedSearchInput;
            value={query}
            onChange={setQuery}
            searchSuggestions={suggestions}
            placeholder="Search talent, jobs, and projects...";
          />;
        </form>;
;
        {loading && <p className="text-zion-slate-light">Searching...</p>}
        {!loading && results.length === 0 && (;
          <p className="text-zion-slate-light">No results found.</p>;
        )}
        {!loading && results.length > 0 && (;
          <div className="space-y-4">;
            {results.map((r) => (;
              <div;
                key={`${r.type}-${r.id}`}
                className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-4";
              >;
                <p className="text-xs uppercase text-zion-slate-light mb-1">;
                  {r.type}
                </p>;
                <h3 className="text-lg font-bold text-white">{r.title}</h3>;
                <p className="text-zion-slate-light">{r.description}</p>;
              </div>;            ))}
          </div>;
        )}
      </main>;
    </AppLayout>;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import { useEffect, useState } from './react';
import { use_navigate, useSearchParams } from './react-router-dom';
import { EnhancedSearchInput } from '@/components / search / EnhancedSearchInput';
import { generateSearchSuggestions } from '@/data / marketplace_data';
import { SearchSuggestion } from '@/types / search';
import { useAISearch } from '@/hooks / useAISearch';
import { AppLayout } from '@/layout / AppLayout';
export default /**
 * SearchPage - Function description
 */
function SearchPage() {
  const [params] = useSearchParams ();
  const navigate = use_navigate ();
  const initial = params.get ("q") || "";
  const [query, set_query] = useState (initial);
  const { results, loading, search } = useAISearch ();
  const suggestions: SearchSuggestion[] = generateSearchSuggestions (),
  useEffect (() => {
    // Check condition
if ( {) {
  $2
}
      search (initial);
    }
  }, [initial]);
;
  const handle_submit = (e: React.FormEvent) =>: any {
    e.prevent_default (),
    navigate (`/search?q=${encodeURIComponent (query)}`);
    search (query);
  }
;
  return (
    <AppLayout>;
      <main className="container mx - auto px - 4 py - 8">;
        <form on_submit={handle_submit} className="mb - 6">;
          <EnhancedSearchInput;
            value={query}
            on_change={set_query}
            search_suggestions={suggestions}
            placeholder="Search talent, jobs, and projects...";
          />;
        </form>;
        {loading && <p className="text - zion - slate - light">Searching...</p>}
        {!loading && results.length === 0 && (
          <p className="text - zion - slate - light">No results found.</p>)}
        {!loading && results.length > 0 && (
          <div className="space - y-4">;
            {results.map ((r) => (
              <div;
                key={`${r.type}-${r.id}`}
                className="bg - zion - blue - dark border border - zion - blue - light rounded - lg p - 4";
              >;
                <p className="text - xs uppercase text - zion - slate - light mb - 1">;
                  {r.type}
                </p>;
                <h3 className="text - lg font - bold text - white">{r.title}</h3>;
                <p className="text - zion - slate - light">{r.description}</p>;
              </div>))}
          </div>)}
      </main>;
    </AppLayout>);
}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
  ),;}
 const suggestions: SearchSuggestion[] = generateSearchSuggestions ();
  loading && <p className="text-zion-slate-light">Searching...</p> 
}{
  !loading && results.length === 0 && (<p className="text-zion-slate-light">No results found.</p>) 
}{
  !loading && results.length > 0 && (<div className="space-y-4"> {
  results.map ( (r) => (<div key= {
  `$ {
  r.type 
}-$ {
  r.id 
}` 
}className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-4" > <p className="text-xs uppercase text-zion-slate-light mb-1"> {
  r.type 
}</p> <h3 className="text-lg font-bold text-white"> {
  r.title 
}</h3> <p className="text-zion-slate-light"> {
  r.description 
}</p> </div>) ) 
}</div>) 
}</main> </AppLayout>) 
}
        {loading && <p className="text-zion-slate-light">Searching...</p>}
        {!loading && results.length === 0 && (
          <p className="text-zion-slate-light">No results found.</p>
        )}
        {!loading && results.length > 0 && (
          <div className="space-y-4">
            {results.map((r) => (
              <div
                key={`${r.type}-${r.id}`}
                className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-4"
              >
                <p className="text-xs uppercase text-zion-slate-light mb-1">
                  {r.type}
                </p>
                <h3 className="text-lg font-bold text-white">{r.title}</h3>
                <p className="text-zion-slate-light">{r.description}</p>
              </div>
            ))}
          </div>
        )}
      </main>
    </AppLayout>
  )
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
