



  const search = async (query: string) => {
    setLoading(true),
    try {
      const response = await fetch(
        "https://ziontechgroup.functions.supabase.co/functions/v1/ai-search",
        {

          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query })}
      ),
      const data = await response.json(),
      const filters: SearchFilters = data.filters || {},

      const items: SearchResult[] = [],

      const matchSkill = (skills: string[] | undefined) => {
        if (!filters.skills |filters.skills.length === 0) return true
        return skills?.some((s) =>
          filters.skills!.some((f) => s.toLowerCase().includes(f.toLowerCase()))
        )

      },

      if (!filters.type || filters.type === "talent" || filters.type === "all") {

        TALENT_PROFILES.forEach((t) => {
          if (filters.location && !t.location?.toLowerCase().includes(filters.location.toLowerCase())) return,
          if (!matchSkill(t.skills)) return,
          items.push({ id: t.id, type: "talent", title: t.full_name, description: t.professional_title })
        })
      }
      if (!filters.type |filters.type === "job" |filters.type === "all") {
        JOB_POSTS.forEach((j) => {
          if (!matchSkill(j.skills)) return,
          items.push({ id: j.id, type: "job", title: j.title, description: j.description })
        })
      }
      if (!filters.type |filters.type === "project" |filters.type === "all") {
        PROJECTS.forEach((p) => {
          items.push({ id: p.id, type: "project", title: p.job?.title |"Project", description: p.scope_summary })
        })
      }
      setResults(items)
    } catch (err) {
      console.error("search error", err),
      setResults([])
    } finally {
      setLoading(false)


=======
;
export function useAISearch() {;
  const [results, setResults] = useState<SearchResult[]>([]),;
  const [loading, setLoading] = useState(false),;
  const search = async (query: string) => {;
    setLoading(true),;
    try {;
      const response = await fetch(;
        "https://ziontechgroup.functions.supabase.co/functions/v1/ai-search",;
        {;
          method: "POST",;
          headers: { "Content-Type": "application/json" },;
          body: JSON.stringify({ query })}
      ),;
      const data = await response.json(),;
      const filters: SearchFilters = data.filters || {},;
      const items: SearchResult[] = [],;
      const matchSkill = (skills: string[] | undefined) => {;
        if (!filters.skills || filters.skills.length === 0) return true,;
        return skills?.some((s) =>;
          filters.skills!.some((f) => s.toLowerCase().includes(f.toLowerCase()));
        );
      },;
      if (!filters.type || filters.type === "talent" || filters.type === "all") {;
        TALENT_PROFILES.forEach((t) => {;
          if (filters.location && !t.location?.toLowerCase().includes(filters.location.toLowerCase())) return,;
          if (!matchSkill(t.skills)) return,;
          items.push({ id: t.id, type: "talent", title: t.full_name, description: t.professional_title });
        });
      }
;
      if (!filters.type || filters.type === "job" || filters.type === "all") {;
        JOB_POSTS.forEach((j) => {;
          if (!matchSkill(j.skills)) return,;
          items.push({ id: j.id, type: "job", title: j.title, description: j.description });
        });
      }
;
      if (!filters.type || filters.type === "project" || filters.type === "all") {;
        PROJECTS.forEach((p) => {;
          items.push({ id: p.id, type: "project", title: p.job?.title || "Project", description: p.scope_summary });
        });
      }
;
      setResults(items);
    } catch (err) {;
      console.error("search error", err);
      setResults([]);
    } finally {;
      setLoading(false);
    }
  };


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  return { results, loading, search }
}
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
