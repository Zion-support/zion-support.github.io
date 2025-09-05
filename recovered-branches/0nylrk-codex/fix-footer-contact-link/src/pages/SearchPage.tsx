
<<<<<<< HEAD
<<<<<<< HEAD
import { useEffect, useState } from "react",
import { useNavigate, useSearchParams } from "react-router-dom",
import { EnhancedSearchInput } from "@/components/search/EnhancedSearchInput",
import { generateSearchSuggestions } from "@/data/marketplaceData",
import { SearchSuggestion } from "@/types/search",
import { useAISearch } from "@/hooks/useAISearch",
import { AppLayout } from "@/layout/AppLayout",
export default function SearchPage() {
  const [params] = useSearchParams(),
  const navigate = useNavigate(),
  const initial = params.get("q") || "",
  const [query, setQuery] = useState(initial),
  const { results, loading, search } = useAISearch(),
  const suggestions: SearchSuggestion[] = generateSearchSuggestions(),
=======
import { useEffect, useState } from &quot;react&quot;;
import { useNavigate, useSearchParams } from &quot;react-router-dom&quot;;
import { EnhancedSearchInput } from &quot;@/components/search/EnhancedSearchInput&quot;;
import { generateSearchSuggestions } from &quot;@/data/marketplaceData&quot;;
import { SearchSuggestion } from &quot;@/types/search&quot;;
import { useAISearch } from &quot;@/hooks/useAISearch&quot;;
import { AppLayout } from &quot;@/layout/AppLayout&quot;;

export default function SearchPage() {
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const initial = params.get(&quot;q&quot;) || "";
  const [query, setQuery] = useState(initial);
  const { results, loading, search } = useAISearch();
=======

export default function SearchPage() {_const [params] = useSearchParams();
  const _navigate = useNavigate();
  const _initial = params.get("q") || "";
  const [query, _setQuery] = useState(initial);
  const { results, _loading, _search} = useAISearch();
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  const suggestions: SearchSuggestion[] = generateSearchSuggestions();
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

<<<<<<< HEAD
  useEffect(() => {
    if (initial) {
      search(initial)
    }
  }, [initial]),

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(),
    navigate(`/search?q=${encodeURIComponent(query)}`),
    search(query)
  },
=======
  useEffect__(() => {_if (initial) {
      search(initial);}
  }, [initial]);

  const _handleSubmit = (_e: React.FormEvent) => {_e.preventDefault();
    navigate(`/search?q=${encodeURIComponent(query)}`);
    search(query);
  };
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  return (
    <AppLayout>
      <main className="container mx-auto px-4 py-8">
<<<<<<< HEAD
        <form onSubmit={handleSubmit} className="mb-6&quot;>
          <EnhancedSearchInput
            value={query}
            onChange={setQuery}
            searchSuggestions={suggestions}
            placeholder=&quot;Search talent, jobs, and projects..."
=======
        <form onSubmit={_handleSubmit} className="mb-6">
          <EnhancedSearchInput
            value={_query}
            onChange={_setQuery}
            searchSuggestions={_suggestions}
            placeholder="Search talent, jobs, and projects..."
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          />
        </form>

        {_loading && <p className="text-zion-slate-light">Searching...</p>}
        {_!loading && results.length === 0 && (
          <p className="text-zion-slate-light">No results found.</p>
        )}
        {_!loading && results.length > 0 && (_<div className="space-y-4">
            {results.map((r) => (
              <div
                key={`${r.type}-${_r.id}`}
                className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-4"
              >
                <p className="text-xs uppercase text-zion-slate-light mb-1">
                  {_r.type}
                </p>
                <h3 className="text-lg font-bold text-white">{_r.title}</h3>
                <p className="text-zion-slate-light">{_r.description}</p>
              </div>
            ))}
          </div>
        )}
      </main>
    </AppLayout>
  )
}
