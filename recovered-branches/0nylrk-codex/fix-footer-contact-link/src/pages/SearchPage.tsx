

export default function SearchPage() {_const [params] = useSearchParams();
  const _navigate = useNavigate();
  const _initial = params.get("q") || "";
  const [query, _setQuery] = useState(initial);
  const { results, _loading, _search} = useAISearch();
  const suggestions: SearchSuggestion[] = generateSearchSuggestions();

  useEffect__(() => {_if (initial) {
      search(initial);}
  }, [initial]);

  const _handleSubmit = (_e: React.FormEvent) => {_e.preventDefault();
    navigate(`/search?q=${encodeURIComponent(query)}`);
    search(query);
  };

  return (
    <AppLayout>
      <main className="container mx-auto px-4 py-8">
        <form onSubmit={_handleSubmit} className="mb-6">
          <EnhancedSearchInput
            value={_query}
            onChange={_setQuery}
            searchSuggestions={_suggestions}
            placeholder="Search talent, jobs, and projects..."
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
  );
}
