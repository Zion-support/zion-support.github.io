
import { useState } from &quot;react&quot;;
import { TALENT_PROFILES } from &quot;@/data/talentData&quot;;
import { JOB_POSTS } from &quot;@/data/jobsData&quot;;
import { PROJECTS } from &quot;@/data/projectsData&quot;;

export interface SearchResult {
  id: string;
  type: &quot;talent&quot; | &quot;job&quot; | &quot;project&quot;;
  title: string;
  description: string;
}

interface SearchFilters {
  type?: string | null;
  skills?: string[] | null;
  location?: string | null;
  budget?: { min: number; max: number } | null;
  availability?: string | null;
}

export function useAISearch() {
  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(false);

  const search = async (query: string) => {
    setLoading(true);
    try {
      const response = await fetch(
        &quot;https://ziontechgroup.functions.supabase.co/functions/v1/ai-search&quot;,
        {
          method: &quot;POST&quot;,
          headers: { &quot;Content-Type&quot;: &quot;application/json&quot; },
          body: JSON.stringify({ query })}
      );
      const data = await response.json();
      const filters: SearchFilters = data.filters || {};

      const items: SearchResult[] = [];
      const matchSkill = (skills: string[] | undefined) => {
        if (!filters.skills || filters.skills.length === 0) return true;
        return skills?.some((s) =>
          filters.skills!.some((f) => s.toLowerCase().includes(f.toLowerCase()))
        );
      };

      if (!filters.type || filters.type === &quot;talent&quot; || filters.type === &quot;all&quot;) {
        TALENT_PROFILES.forEach((t) => {
          if (filters.location && !t.location?.toLowerCase().includes(filters.location.toLowerCase())) return;
          if (!matchSkill(t.skills)) return;
          items.push({ id: t.id, type: &quot;talent&quot;, title: t.full_name, description: t.professional_title });
        });
      }

      if (!filters.type || filters.type === &quot;job&quot; || filters.type === &quot;all&quot;) {
        JOB_POSTS.forEach((j) => {
          if (!matchSkill(j.skills)) return;
          items.push({ id: j.id, type: &quot;job&quot;, title: j.title, description: j.description });
        });
      }

      if (!filters.type || filters.type === &quot;project&quot; || filters.type === &quot;all&quot;) {
        PROJECTS.forEach((p) => {
          items.push({ id: p.id, type: &quot;project&quot;, title: p.job?.title || &quot;Project&quot;, description: p.scope_summary });
        });
      }

      setResults(items);
    } catch (err) {
      console.error(&quot;search error&quot;, err);
      setResults([]);
    } finally {
      setLoading(false);
    }
  };

  return { results, loading, search };
}
