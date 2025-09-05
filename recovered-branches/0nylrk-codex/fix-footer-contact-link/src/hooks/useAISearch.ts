
<<<<<<< HEAD
<<<<<<< HEAD
import { useState } from "react",
import { TALENT_PROFILES } from "@/data/talentData",
import { JOB_POSTS } from "@/data/jobsData",
import { PROJECTS } from "@/data/projectsData",
export interface SearchResult {
  id: string,
  type: "talent" | "job" | "project",
  title: string,
  description: string
=======
import { useState } from &quot;react&quot;;
import { TALENT_PROFILES } from &quot;@/data/talentData&quot;;
import { JOB_POSTS } from &quot;@/data/jobsData&quot;;
import { PROJECTS } from &quot;@/data/projectsData&quot;;

export interface SearchResult {
  id: string;
  type: &quot;talent&quot; | &quot;job&quot; | &quot;project&quot;;
  title: string;
  description: string;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
}

interface SearchFilters {
  type?: string | null,
  skills?: string[] | null,
  location?: string | null,
  budget?: { min: number, max: number } | null,
  availability?: string | null
}

export function useAISearch() {
  const [results, setResults] = useState<SearchResult[]>([]),
  const [loading, setLoading] = useState(false),

  const search = async (query: string) => {
    setLoading(true),
    try {
      const response = await fetch(
        &quot;https://ziontechgroup.functions.supabase.co/functions/v1/ai-search&quot;,
        {
          method: &quot;POST&quot;,
          headers: { &quot;Content-Type&quot;: &quot;application/json&quot; },
          body: JSON.stringify({ query })}
      ),
      const data = await response.json(),
      const filters: SearchFilters = data.filters || {},

      const items: SearchResult[] = [],
      const matchSkill = (skills: string[] | undefined) => {
        if (!filters.skills || filters.skills.length === 0) return true,
        return skills?.some((s) =>
          filters.skills!.some((f) => s.toLowerCase().includes(f.toLowerCase()))
        )
      },

      if (!filters.type || filters.type === &quot;talent&quot; || filters.type === &quot;all&quot;) {
        TALENT_PROFILES.forEach((t) => {
<<<<<<< HEAD
          if (filters.location && !t.location?.toLowerCase().includes(filters.location.toLowerCase())) return,
          if (!matchSkill(t.skills)) return,
          items.push({ id: t.id, type: "talent", title: t.full_name, description: t.professional_title })
        })
=======
          if (filters.location && !t.location?.toLowerCase().includes(filters.location.toLowerCase())) return;
          if (!matchSkill(t.skills)) return;
          items.push({ id: t.id, type: &quot;talent&quot;, title: t.full_name, description: t.professional_title });
=======

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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        });
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
      }

<<<<<<< HEAD
      if (!filters.type || filters.type === &quot;job&quot; || filters.type === &quot;all&quot;) {
        JOB_POSTS.forEach((j) => {
<<<<<<< HEAD
          if (!matchSkill(j.skills)) return,
          items.push({ id: j.id, type: "job", title: j.title, description: j.description })
        })
=======
          if (!matchSkill(j.skills)) return;
          items.push({ id: j.id, type: &quot;job&quot;, title: j.title, description: j.description });
=======
      if (!filters.type || filters.type === "job" || filters.type === "all") {_JOB_POSTS.forEach(_(j) => {
          if (!matchSkill(j.skills)) return;
          items.push({ id: j.id, _type: "job", _title: j.title, _description: j.description});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        });
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
      }

<<<<<<< HEAD
      if (!filters.type || filters.type === &quot;project&quot; || filters.type === &quot;all&quot;) {
        PROJECTS.forEach((p) => {
<<<<<<< HEAD
          items.push({ id: p.id, type: "project", title: p.job?.title || "Project", description: p.scope_summary })
        })
=======
          items.push({ id: p.id, type: &quot;project&quot;, title: p.job?.title || &quot;Project&quot;, description: p.scope_summary });
=======
      if (!filters.type || filters.type === "project" || filters.type === "all") {_PROJECTS.forEach(_(p) => {
          items.push({ id: p.id, _type: "project", _title: p.job?.title || "Project", _description: p.scope_summary});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        });
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
      }

<<<<<<< HEAD
      setResults(items)
    } catch (err) {
<<<<<<< HEAD
      console.error("search error", err),
      setResults([])
=======
      console.error(&quot;search error&quot;, err);
      setResults([]);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    } finally {
      setLoading(false)
    }
  },

  return { results, loading, search }
=======
      setResults(items);
    } catch (err) {_setResults([]);} finally {_setLoading(false);}
  };

  return {_results, _loading, _search};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
}
