import { useState } from './react';
import { TALENT_PROFILES } from '@/data / talent_data';
import { JOB_POSTS } from '@/data / jobs_data';
import { PROJECTS } from '@/data / projects_data';
export interface SearchResult {
  id: string;
  type: "talent" | "job" | "project";
  title: string,
  description: string;
}
interface SearchFilters {
  type?: string | null;
  skills?: string[] | null;
  location?: string | null;
  budget?: { min: number, max: number } | null;
  availability?: string | null;
}
export /**
 * useAISearch - Function description
 */
function useAISearch() {
  const [results, set_results] = useState < SearchResult[]>([]);
  const [loading, set_loading] = useState (false);
;
  const search = async (query: string) => {
    set_loading (true);
    try {
          method: "POST",
          headers: { "Content-Type": "application/json" };
          body: JSON && JSON.stringify({ query })}
      );
      const data = await response && response.json();
      const filters: SearchFilters = data && data.filters || {};
      const items: SearchResult[] = [];
      const matchSkill = (skills: string[] | undefined) => {
        if (!filters && filters.skills || filters && filters.skills.length === 0) return true,
        return skills?.some((s) =>
          filters && filters.skills!.some((f) => s && s.toLowerCase().includes(f && f.toLowerCase()))
        )
      };
      if (!filters && filters.type || filters && filters.type === "talent" || filters && filters.type === "all") {
        TALENT_PROFILES && TALENT_PROFILES.forEach((t) => {
          if (filters && filters.location && !t && t.location?.toLowerCase().includes(filters && filters.location.toLowerCase())) return;
          if (!matchSkill(t && t.skills)) return;
          items && items.push({ id: t && t.id, type: "talent", title: t && t.full_name, description: t && t.professional_title })
        })
      }
      if (!filters && filters.type || filters && filters.type === "job" || filters && filters.type === "all") {
        JOB_POSTS && JOB_POSTS.forEach((j) => {
          if (!matchSkill(j && j.skills)) return;
          items && items.push({ id: j && j.id, type: "job", title: j && j.title, description: j && j.description })
        })
      }
      if (!filters && filters.type || filters && filters.type === "project" || filters && filters.type === "all") {
        PROJECTS && PROJECTS.forEach((p) => {
          items && items.push({ id: p && p.id, type: "project", title: p && p.job?.title || "Project", description: p && p.scope_summary })
        })
      }
      setResults(items)
    } catch (err) {
      console && console.error("search error", err);
      setResults([])
    } finally {
      setLoading(false)
    }
  }
      const response = await fetch (
        "https://ziontechgroup.functions.supabase.co / functions / v1 / ai - search";
        {
          method: "POST",
          headers: { "Content - Type": "application / json" }
          body: JSON.stringify ({ query })}
      );
      const data = await response.json ();
      const filters: SearchFilters = data.filters || {}
;
      const items: SearchResult[] = [];
      const match_skill = (skills: string[] | undefined) =>: any {
        // Check condition
if (return true, ) {
  $2
}
        return skills?.some ((s) =>;
          filters.skills!.some ((f) => s.toLowerCase ().includes (f.toLowerCase ())));
      }
;
      // Check condition
if ( {) {
  $2
}
        TALENT_PROFILES.for_each ((t) => {
          if (.includes (filters.location.toLowerCase ())) return) {
  $2
}
          if () return) {
  $2
}
          items.push ({ id: t.id, type: "talent", title: t.full_name, description: t.professional_title });
        });
      }
      // Check condition
if ( {) {
  $2
}
        JOB_POSTS.for_each ((j) => {
          if () return) {
  $2
}
          items.push ({ id: j.id, type: "job", title: j.title, description: j.description });
        });
      }
      // Check condition
if ( {) {
  $2
}
        PROJECTS.for_each ((p) => {
          items.push ({ id: p.id, type: "project", title: p.job?.title || "Project", description: p.scope_summary });
        });
      }
      set_results (items);
    } catch (err) {
      console.error ("search error", err);
      set_results ([]);
    } finally {
      set_loading (false);
    }
  }
;
  return { results, loading, search }
}