
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { EnhancedSearchInput } from "@/components/search/EnhancedSearchInput";
import { generateSearchSuggestions } from "@/data/marketplaceData";
import { SearchSuggestion } from "@/types/search";
import { useAISearch } from "@/hooks/useAISearch";
import { AppLayout } from "@/layout/AppLayout";
export default function SearchPage() {
  const [params] = useSearchParams($2);
  const navigate = useNavigate($2);
  const initial = $2;
  const [query, setQuery] = useState($2);
  const { results, loading, search } = useAISearch($2);
  const suggestions: SearchSuggestion[] = generateSearchSuggestions($2);
  useEffect(() => {
    if (initial) {
      search(initial)
    }
  }, [initial]),

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault($2);
    navigate(`/search?q = $2;
    search(query)
  },

  return (
    <AppLayout>
      <main className="container mx-auto px-4 py-8">
        <form onSubmit={handleSubmit} className="mb-6">
          <EnhancedSearchInput
            value={query}
            onChange={setQuery}
            searchSuggestions={suggestions}
            placeholder="Search talent, jobs, and projects..."
          />
        </form>

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
