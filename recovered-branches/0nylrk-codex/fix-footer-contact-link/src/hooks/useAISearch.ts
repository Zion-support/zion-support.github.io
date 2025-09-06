
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useAISearch.ts
=======




========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useAISearch.ts
import { useState } from './react';
import { TALENT_PROFILES } from '@/data / talent_data';
import { JOB_POSTS } from '@/data / jobs_data';
import { PROJECTS } from '@/data / projects_data';
export interface SearchResult {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  id: string;
  type: "talent" | "job" | "project";
  title: string,
  description: string;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useAISearch.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useAISearch.ts
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { useState } from "react",
import { TALENT_PROFILES } from "@/data/talentData",
import { JOB_POSTS } from "@/data/jobsData";
import { PROJECTS } from "@/data/projectsData";
export interface SearchResult {
import {useState} from "react";
import {TALENT_PROFILES} from "@/data/talentData";
import {JOB_POSTS} from "@/data/jobsData";
import {PROJECTS} from "@/data/projectsData";
export interface SearchResult {;
  id: string;
  type: "talent" | "job" | "project";

  title: string

  description: string
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
}
interface SearchFilters {
  type?: string | null;
  skills?: string[] | null;
  location?: string | null;
  budget?: { min: number, max: number } | null;
<<<<<<< HEAD
<<<<<<< HEAD
  availability?: string | null
}

=======
  availability?: string | null
}
export function useAISearch() {
  const [results, setResults] = useState<SearchResult[]>([]),
  const [loading, setLoading] = useState(false);

export function useAISearch() {;
  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(false);
import { useState } from "react",
import { TALENT_PROFILES } from "@/data/talentData",
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useAISearch.ts
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

export function useAISearch() {
  const [results, setResults] = useState<SearchResult[]>([]),
  const [loading, setLoading] = useState(false),
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

  const search = async (query: string) => {
    setLoading(true),
    try {
      const response = await fetch(
        "https://ziontechgroup.functions.supabase.co/functions/v1/ai-search",
        {
<<<<<<< HEAD
<<<<<<< HEAD

      const matchSkill = (skills: string[] | undefined) => {
        if (!filters.skills |filters.skills.length === 0) return true
        return skills?.some((s) =>
          filters.skills!.some((f) => s.toLowerCase().includes(f.toLowerCase()))
        )

=======
  availability?: string | null;
}



=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useAISearch.ts
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useAISearch.ts


=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
          method: "POST"
          headers: { "Content-Type": "application/json" }
          body: JSON.stringify({ query })}
      );
      const data = await response.json();
      const filters: SearchFilters = data.filters |{}
      const items: SearchResult[] = [];
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query })}
      ),
      const data = await response.json(),
      const filters: SearchFilters = data.filters || {},

      const items: SearchResult[] = [],
<<<<<<< HEAD
<<<<<<< HEAD


      const matchSkill = (skills: string[] | undefined) => {
        if (!filters.skills |filters.skills.length === 0) return true
=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useAISearch.ts
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useAISearch.ts


      },

      if (!filters.type || filters.type === "talent" || filters.type === "all") {


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
        TALENT_PROFILES.forEach((t) => {
          if (filters.location && !t.location?.toLowerCase().includes(filters.location.toLowerCase())) return;
          if (!matchSkill(t.skills)) return;
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
          if (filters.location && !t.location?.toLowerCase().includes(filters.location.toLowerCase())) return,
          if (!matchSkill(t.skills)) return,
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          items.push({ id: t.id, type: "talent", title: t.full_name, description: t.professional_title })
        })
      }
      if (!filters.type |filters.type === "job" |filters.type === "all") {
        JOB_POSTS.forEach((j) => {
<<<<<<< HEAD
          if (!matchSkill(j.skills)) return;
=======
          if (!matchSkill(j.skills)) return,
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          items.push({ id: j.id, type: "job", title: j.title, description: j.description })
        })
      }
      if (!filters.type |filters.type === "project" |filters.type === "all") {
        PROJECTS.forEach((p) => {
          items.push({ id: p.id, type: "project", title: p.job?.title |"Project", description: p.scope_summary })
<<<<<<< HEAD
=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useAISearch.ts
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
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        })
      }
      setResults(items)
    } catch (err) {
<<<<<<< HEAD
      console && console.error("search error", err);
      setResults([])
    } finally {
      setLoading(false)
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useAISearch.ts

<<<<<<< HEAD
=======
========
    }
  }
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useAISearch.ts
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


=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
      console.error("search error", err),
      setResults([])
    } finally {
      setLoading(false)
    }
  }

  return { results, loading, search }
}
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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

<<<<<<< HEAD
=======


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  return { results, loading, search }
}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useAISearch.ts
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  return { results, loading, search }
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
  return { results, loading, search }
=======

import { useState } from "react",;
import { TALENT_PROFILES } from "@/data/talentData",;
import { JOB_POSTS } from "@/data/jobsData",;
import { PROJECTS } from "@/data/projectsData",;
;
export interface SearchResult {;
  id:string,;
  type:"talent" | "job" | "project",;
  title:string,;
  description:string;
}
;
interface SearchFilters {;
  type?:string | null,;
  skills?:string[] | null,;
  location?:string | null,;
  budget?:{ min:number, max:number } | null,;
  availability?:string | null,;
}
;
export function useAISearch() {;
  const [results, setResults] = useState<SearchResult[]>([]),;
  const [loading, setLoading] = useState(false),;
;
  const search = async (query:string) => {;
    setLoading(true),;
    try {;
      const response = await fetch(;
        "https://ziontechgroup.functions.supabase.co/functions/v1/ai-search",;
        {;
          method:"POST",;
          headers:{ "Content-Type":"application/json" },;
          body:JSON.stringify({ query })}
      ),;
      const data = await response.json(),;
      const filters:SearchFilters = data.filters || {},;
;
      const items:SearchResult[] = [],;
      const matchSkill = (skills:string[] | undefined) => {;
        if (!filters.skills || filters.skills.length === 0) return true,;
        return skills?.some((s) =>;
          filters.skills!.some((f) => s.toLowerCase().includes(f.toLowerCase()));
        );
      },;
;
      if (!filters.type || filters.type === "talent" || filters.type === "all") {;
        TALENT_PROFILES.forEach((t) => {;
          if (filters.location && !t.location?.toLowerCase().includes(filters.location.toLowerCase())) return,;
          if (!matchSkill(t.skills)) return,;
          items.push({ id:t.id, type:"talent", title:t.full_name, description:t.professional_title }),;
        }),;
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      }
;
      if (!filters.type || filters.type === "job" || filters.type === "all") {;
        JOB_POSTS.forEach((j) => {;
          if (!matchSkill(j.skills)) return,;
<<<<<<< HEAD
          items.push({ id:j.id, type:"job", title:j.title, description:j.description }),;
        }),;
=======
          items.push({ id: j.id, type: "job", title: j.title, description: j.description });
        });
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      }
;
      if (!filters.type || filters.type === "project" || filters.type === "all") {;
        PROJECTS.forEach((p) => {;
<<<<<<< HEAD
          items.push({ id:p.id, type:"project", title:p.job?.title || "Project", description:p.scope_summary }),;
        }),;
      }
;
      setResults(items),;
    } catch (err) {;
      console.error("search error", err),;
      setResults([]),;
    } finally {;
      setLoading(false),;
    }
  },;
;
  return { results, loading, search },; 
}interface SearchFilters {
  type?: string | null;
skills?: string[] | null;
location?: string | null;
budget?: {
  min: number, max: number 
}| null;
availability?: string | null 
}export function useAISearch () {
  const [results, setResults] = useState<SearchResult[]> ([]);
const [loading, setLoading] = useState (false);
const search = async (query: string) => {
  setLoading (true);
try {
  const response = await fetch ("https://ziontechgroup.functions.supabase.co/functions/v1/ai-search";
{
  method: "POST";
headers: {
  "Content-Type" : "application/json" 
};
body: JSON.stringify ({
  query 
}) 
});
const data = await response.json ();
const filters: SearchFilters = data.filters || {
  
};
const items: SearchResult[] = [];
const matchSkill = (skills: string[] | undefined) => {
  if (!filters.skills || filters.skills.length === 0) return true;
return skills?.some ( (s) => filters.skills!.some ( (f) => s.toLowerCase () .includes (f.toLowerCase () ) ) ) 
};
if (!filters.type || filters.type === "talent" || filters.type === "all") {
  TALENT PROFILES.forEach ( (t) => {
  
});
}
});
}
});
}
}finally {
  setLoading (false) 
}
};
return {
  results, loading, search 
}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useAISearch.ts
=======
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
  return { results, loading, search }
}
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
