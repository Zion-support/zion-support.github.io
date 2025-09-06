









import { useState } from './react';
import { TALENT_PROFILES } from '@/data / talent_data';
import { JOB_POSTS } from '@/data / jobs_data';
import { PROJECTS } from '@/data / projects_data';
export interface SearchResult {

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4


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

  availability?: string | null
}

import { JOB_POSTS } from "@/data/jobsData",
import { PROJECTS } from "@/data/projectsData",
export interface SearchResult {
  id: string,
  type: "talent" | "job" | "project",
  title: string,
  description: string
import { useState } from "react",;
import { TALENT_PROFILES } from "@/data/talentData",;
import { JOB_POSTS } from "@/data/jobsData",;
import { PROJECTS } from "@/data/projectsData",;
export interface SearchResult {;
  id: string,;
  type: "talent" | "job" | "project",;
  title: string,;
  description: string;
}
;
interface SearchFilters {;
  type?: string | null,;
  skills?: string[] | null,;
  location?: string | null,;
  budget?: { min: number, max: number } | null,;
  availability?: string | null;
}

export function useAISearch() {
  const [results, setResults] = useState<SearchResult[]>([]),
  const [loading, setLoading] = useState(false),


  const search = async (query: string) => {
    setLoading(true),
    try {
      const response = await fetch(
        "https://ziontechgroup.functions.supabase.co/functions/v1/ai-search",
        {

          method: "POST"
          headers: { "Content-Type": "application/json" }
          body: JSON.stringify({ query })}
      );
      const data = await response.json();
      const filters: SearchFilters = data.filters |{}
      const items: SearchResult[] = [];
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

      }
      if (!filters.type |filters.type === "talent" |filters.type === "all") {
      },

      if (!filters.type || filters.type === "talent" || filters.type === "all") {

        TALENT_PROFILES.forEach((t) => {
          if (filters.location && !t.location?.toLowerCase().includes(filters.location.toLowerCase())) return;
          if (!matchSkill(t.skills)) return;
          items.push({ id: t.id, type: "talent", title: t.full_name, description: t.professional_title })
        })
      }
      if (!filters.type |filters.type === "job" |filters.type === "all") {
        JOB_POSTS.forEach((j) => {
          if (!matchSkill(j.skills)) return;
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
      console && console.error("search error", err);
      setResults([])
    } finally {
      setLoading(false)


    }
  }




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

  };






>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba



  return { results, loading, search }
}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
;


