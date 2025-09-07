
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


  const [params] = useSearchParams();
  const navigate = useNavigate();

  const [params] = useSearchParams();

  const navigate = useNavigate();

  const suggestions: SearchSuggestion[] = generateSearchSuggestions(),

import { useEffect, useState } from "react",
import { useNavigate, useSearchParams } from "react-router-dom",
import { EnhancedSearchInput } from "@/components/search/EnhancedSearchInput",
import { generateSearchSuggestions } from "@/data/marketplaceData",
import { SearchSuggestion } from "@/types/search",
import { useAISearch } from "@/hooks/useAISearch";

import { AppLayout } from "@/layout/AppLayout";
export default function SearchPage() {};
  const [params] = useSearchParams();

  const navigate = useNavigate();"
  const initial = params.get("q") |"";
  const [query, setQuery] = useState(initial);
  const { results, loading, search } = useAISearch();
  const suggestions: SearchSuggestion[] = generateSearchSuggestions()"
import { useAISearch } from "@/hooks/useAISearch","
import { AppLayout } from "@/layout/AppLayout",
export default function SearchPage() {}
  const [params] = useSearchParams(),
  const navigate = useNavigate(),"
  const initial = params.get("q") || "",
  const [query, setQuery] = useState(initial),

  const [params] = useSearchParams();

  const navigate = useNavigate();

  const suggestions: SearchSuggestion[] = generateSearchSuggestions(),


  }, [initial]),

  const handleSubmit = (e: React.FormEvent) => {}
    e.preventDefault(),
    navigate(`/search?q=${encodeURIComponent(query)}`),
    search(query)
  },

  return (

    <AppLayout>;
      <main className="container mx-auto px-4 py-8">;
        <form onSubmit={handleSubmit} className="mb-6">;


          <EnhancedSearchInput

            value={query}
            onChange={setQuery}
            searchSuggestions={suggestions}"
            placeholder="Search talent, jobs, and projects..."


  const { results, loading, search } = useAISearch(),;
  const suggestions: SearchSuggestion[] = generateSearchSuggestions(),;
  useEffect(() => {;
    if (initial) {;
      search(initial);
    }
  }, [initial]),;
  const handleSubmit = (e: React.FormEvent) => {;

    navigate(`/search?q=${encodeURIComponent(query)}`);
    search(query);
  };
  return (;

        <form onSubmit={handleSubmit} className="mb-6">;
          <EnhancedSearchInput;
            value={query}
            onChange={setQuery}

            placeholder="Search talent, jobs, and projects...";
          />;
        </form>;

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


  const initial = params.get ("q") || "";
  const [query, set_query] = useState (initial);
  const { results, loading, search } = useAISearch ();
  const suggestions: SearchSuggestion[] = generateSearchSuggestions (),

}
      search (initial);
    }
  }, [initial]);
;

    navigate (`/search?q=${encodeURIComponent (query)}`);
    search (query);
  }
;
  return (

        <form on_submit={handle_submit} className="mb - 6">;
          <EnhancedSearchInput;
            value={query}
    ;
      <main className="container mx - auto px - 4 py - 8">;"
        <form on_submit={handle_submit} className="mb - 6">;"
            on_change={set_query}

                <p className="text - zion - slate - light">{r.description}</p>;

              </div>))}
          </div>)}
      </main>;
    </AppLayout>);
}


  ),;}
 const suggestions: SearchSuggestion[] = generateSearchSuggestions ();
  loading && <p className="text-zion-slate-light">Searching...</p> 
}{
  !loading && results.length === 0 && (<p className="text-zion-slate-light">No results found.</p>) 
}{
  !loading && results.length > 0 && (<div className="space-y-4"> {
  results.map ( (r) => (<div key= {

    );"
  loading && <p className="text-zion-slate-light">Searching...</p>""
  !loading && results.length === 0 && (<p className="text-zion-slate-light">No results found.</p>)""
  !loading && results.length > 0 && (<div className="space-y-4"> {"
</div>)
  results.map ( (r) => (<div key= {`;
  `$ {
  r.type;
}-$ {
  r.id;`;
}` "
}className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-4" > <p className="text-xs uppercase text-zion-slate-light mb-1"> {"
}</p> <h3 className="text-lg font-bold text-white"> {"
</h3>"
}</h3> <p className="text-zion-slate-light"> {"
</p>)
}</p> </div>) ) 
}</div>) 
}</main> ) "
          <p className="text-zion-slate-light">No results found.</p>""
          <div className="space-y-4">"
                className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-4""
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
                <p className="text-xs uppercase text-zion-slate-light mb-1">"
                </p>"
                <h3 className="text-lg font-bold text-white">{r.title}</h3>""
                <p className="text-zion-slate-light">{r.description}</p>"
      </main>
    </AppLayout>
  )
}
}
