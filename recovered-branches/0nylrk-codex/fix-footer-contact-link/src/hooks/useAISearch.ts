
<<<<<<< HEAD
<<<<<<< HEAD
import { useState } from "react",
import { TALENT_PROFILES } from "@/data/talentData",
<<<<<<< HEAD
import { JOB_POSTS } from "@/data/jobsData";
import { PROJECTS } from "@/data/projectsData";
export interface SearchResult {
=======
<<<<<<< HEAD
import {useState} from "react";
import {TALENT_PROFILES} from "@/data/talentData";
import {JOB_POSTS} from "@/data/jobsData";
import {PROJECTS} from "@/data/projectsData";
export interface SearchResult {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  id: string;
  type: "talent" | "job" | "project";

  title: string

  description: string
=======





import { useState } from './react';
import { TALENT_PROFILES } from '@/data / talent_data';
import { JOB_POSTS } from '@/data / jobs_data';
import { PROJECTS } from '@/data / projects_data';
export interface SearchResult {
  id: string;
  type: "talent" | "job" | "project";
  title: string,
  description: string;

>>>>>>> main
}
interface SearchFilters {
  type?: string | null;
  skills?: string[] | null;
  location?: string | null;
  budget?: { min: number, max: number } | null;
<<<<<<< HEAD
  availability?: string | null
}
<<<<<<< HEAD
export function useAISearch() {
  const [results, setResults] = useState<SearchResult[]>([]),
  const [loading, setLoading] = useState(false);
=======
=======

export function useAISearch() {;
  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(false);
=======
import { useState } from "react",
import { TALENT_PROFILES } from "@/data/talentData",
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

  const search = async (query: string) => {
    setLoading(true),
    try {
      const response = await fetch(
        "https://ziontechgroup.functions.supabase.co/functions/v1/ai-search",
        {
<<<<<<< HEAD
          method: "POST"
          headers: { "Content-Type": "application/json" }
          body: JSON.stringify({ query })}
      );
      const data = await response.json();
      const filters: SearchFilters = data.filters |{}
      const items: SearchResult[] = [];
=======
=======
  availability?: string | null;
}



=======
export /**
 * useAISearch - Function description
 */
function useAISearch() {
  const [results, set_results] = useState < SearchResult[]>([]);
  const [loading, set_loading] = useState (false);
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  const search = async (query: string) => {
    set_loading (true);
    try {


>>>>>>> main
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query })}
      ),
      const data = await response.json(),
      const filters: SearchFilters = data.filters || {},

      const items: SearchResult[] = [],
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
      const matchSkill = (skills: string[] | undefined) => {
        if (!filters.skills |filters.skills.length === 0) return true
        return skills?.some((s) =>
          filters.skills!.some((f) => s.toLowerCase().includes(f.toLowerCase()))
        )
<<<<<<< HEAD
      }
      if (!filters.type |filters.type === "talent" |filters.type === "all") {
=======
      },

      if (!filters.type || filters.type === "talent" || filters.type === "all") {
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
        TALENT_PROFILES.forEach((t) => {
          if (filters.location && !t.location?.toLowerCase().includes(filters.location.toLowerCase())) return,
          if (!matchSkill(t.skills)) return,
=======


      const matchSkill = (skills: string[] | undefined) => {
        if (!filters.skills |filters.skills.length === 0) return true
=======
          method: "POST",
          headers: { "Content-Type": "application/json" };
          body: JSON && JSON.stringify({ query })}
      );
      const data = await response && response.json();
      const filters: SearchFilters = data && data.filters || {};

      const items: SearchResult[] = [];
      const matchSkill = (skills: string[] | undefined) => {
        if (!filters && filters.skills || filters && filters.skills.length === 0) return true,
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
        return skills?.some((s) =>
          filters && filters.skills!.some((f) => s && s.toLowerCase().includes(f && f.toLowerCase()))
        )


      },

      if (!filters.type || filters.type === "talent" || filters.type === "all") {


        TALENT_PROFILES.forEach((t) => {
          if (filters.location && !t.location?.toLowerCase().includes(filters.location.toLowerCase())) return;
          if (!matchSkill(t.skills)) return;
>>>>>>> main
          items.push({ id: t.id, type: "talent", title: t.full_name, description: t.professional_title })
        })
      }
      if (!filters.type |filters.type === "job" |filters.type === "all") {
        JOB_POSTS.forEach((j) => {
<<<<<<< HEAD
          if (!matchSkill(j.skills)) return,
=======
          if (!matchSkill(j.skills)) return;
>>>>>>> main
          items.push({ id: j.id, type: "job", title: j.title, description: j.description })
        })
      }
      if (!filters.type |filters.type === "project" |filters.type === "all") {
        PROJECTS.forEach((p) => {
          items.push({ id: p.id, type: "project", title: p.job?.title |"Project", description: p.scope_summary })
<<<<<<< HEAD
=======
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> main
        })
      }
      setResults(items)
    } catch (err) {
<<<<<<< HEAD
      console.error("search error", err),
      setResults([])
    } finally {
      setLoading(false)
<<<<<<< HEAD
    }
  }

<<<<<<< HEAD
  return { results, loading, search }
}
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
      console && console.error("search error", err);
      setResults([])
    } finally {
      setLoading(false)

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
=======


>>>>>>> main
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
<<<<<<< HEAD
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
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  return { results, loading, search }
}
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======

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



  return { results, loading, search }
}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  return { results, loading, search }
}
>>>>>>> main
