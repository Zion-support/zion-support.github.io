<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/SearchPage.tsx

<<<<<<< HEAD

import { useEffect, useState } from "react",
import { useNavigate, useSearchParams } from "react-router-dom",
import { EnhancedSearchInput } from "@/components/search/EnhancedSearchInput",
import { generateSearchSuggestions } from "@/data/marketplaceData",
import { SearchSuggestion } from "@/types/search",

  const suggestions: SearchSuggestion[] = generateSearchSuggestions(),

=======
========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/SearchPage.tsx
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

<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import {useEffect, useState} from "react";
import {useNavigate, useSearchParams} from "react-router-dom";
import {EnhancedSearchInput} from "@/components/search/EnhancedSearchInput";
import {generateSearchSuggestions} from "@/data/marketplaceData";
import {SearchSuggestion} from "@/types/search";
import {useAISearch} from "@/hooks/useAISearch";
import {AppLayout} from "@/layout/AppLayout";
export default function SearchPage() {;
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/SearchPage.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/SearchPage.tsx
  const [params] = useSearchParams();
  const navigate = useNavigate();
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/SearchPage.tsx



  const suggestions: SearchSuggestion[] = generateSearchSuggestions(),


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const initial = params.get("q") || "";
  const [query, setQuery] = useState(initial);
  const { results, loading, search } = useAISearch();
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
  const suggestions: SearchSuggestion[] = generateSearchSuggestions(),

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  useEffect(() => {
    if (initial) {
      search(initial)
    }
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/SearchPage.tsx
  const initial = params && params.get("q") || "";
  const [query, setQuery] = useState(initial);
  const { results, loading, search } = useAISearch();
  const suggestions: SearchSuggestion[] = generateSearchSuggestions(),;
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  useEffect(() => {;
    if (initial) {;
      search(initial);
    }
<<<<<<< HEAD
  }, [initial]);
  const handleSubmit = (e: React && React.FormEvent) => {;
    e && e.preventDefault(),;
    navigate(`/search?q=${encodeURIComponent(query)}`);
    search(query);
  };
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/SearchPage.tsx

=======

=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  }, [initial]);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    navigate(`/search?q=${encodeURIComponent(query)}`);
    search(query)
  }
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  }, [initial]),

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(),
    navigate(`/search?q=${encodeURIComponent(query)}`),
    search(query)
  },
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/SearchPage.tsx
  return (
    <AppLayout>;
      <main className="container mx-auto px-4 py-8">;
        <form onSubmit={handleSubmit} className="mb-6">;
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

  return (
    <AppLayout>
      <main className="container mx-auto px-4 py-8">
        <form onSubmit={handleSubmit} className="mb-6">
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          <EnhancedSearchInput
            value={query}
            onChange={setQuery}
            searchSuggestions={suggestions}
            placeholder="Search talent, jobs, and projects..."
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/SearchPage.tsx
<<<<<<< HEAD
          />
        </form>

=======

          />;
        </form>;


=======


=======
          />
        </form>

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
          />;
        </form>;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/SearchPage.tsx
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
          </div>;
        )}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/SearchPage.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/SearchPage.tsx
      </main>;
    </AppLayout>;
<<<<<<< HEAD
  );
}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/SearchPage.tsx

=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/SearchPage.tsx
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
