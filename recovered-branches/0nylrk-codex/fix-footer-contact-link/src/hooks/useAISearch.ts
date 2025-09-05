

export interface SearchResult {_id: string;
  type: "talent" | "job" | "project";
  title: string;
  description: string;}

interface SearchFilters {_type?: string | null;
  skills?: string[] | null;
  location?: string | null;
  budget?: { min: number; max: number} | null;
  availability?: string | null;
}

export function useAISearch() {_const [results, _setResults] = useState<SearchResult[]>([]);
  const [loading, _setLoading] = useState(false);

  const _search = async (_query: string) => {
    setLoading(true);
    try {
      const _response = await fetch(
        "https://ziontechgroup.functions.supabase.co/functions/v1/ai-search", _{
          method: "POST", _headers: { "Content-Type": "application/json"},
          body: JSON.stringify({_query})}
      );
      const _data = await response.json();
      const filters: SearchFilters = data.filters || {};

      const items: SearchResult[] = [];
      const _matchSkill = (_skills: string[] | undefined) => {_if (!filters.skills || filters.skills.length === 0) return true;
        return skills?.some(_(s) =>
          filters.skills!.some(_(f) => s.toLowerCase().includes(f.toLowerCase()))
        );};

      if (!filters.type || filters.type === "talent" || filters.type === "all") {_TALENT_PROFILES.forEach(_(t) => {
          if (filters.location && !t.location?.toLowerCase().includes(filters.location.toLowerCase())) return;
          if (!matchSkill(t.skills)) return;
          items.push({ id: t.id, _type: "talent", _title: t.full_name, _description: t.professional_title});
        });
      }

      if (!filters.type || filters.type === "job" || filters.type === "all") {_JOB_POSTS.forEach(_(j) => {
          if (!matchSkill(j.skills)) return;
          items.push({ id: j.id, _type: "job", _title: j.title, _description: j.description});
        });
      }

      if (!filters.type || filters.type === "project" || filters.type === "all") {_PROJECTS.forEach(_(p) => {
          items.push({ id: p.id, _type: "project", _title: p.job?.title || "Project", _description: p.scope_summary});
        });
      }

      setResults(items);
    } catch (err) {_setResults([]);} finally {_setLoading(false);}
  };

  return {_results, _loading, _search};
}
