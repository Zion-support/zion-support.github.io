<<<<<<< HEAD
import { useState } from './react';
import { TALENT_PROFILES } from '@/data / talent_data';
import { JOB_POSTS } from '@/data / jobs_data';

import { PROJECTS } from '@/data / projects_data';
export interface SearchResult {};
  id: string;"
  type: "talent" | "job" | "project";
  title: string,
  description: string;

=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import { useState } from "react",
import { TALENT_PROFILES } from "@/data/talentData",
import { JOB_POSTS } from "@/data/jobsData";
import { PROJECTS } from "@/data/projectsData";
export interface SearchResult {
<<<<<<< HEAD
import {useState} from "react";
import {TALENT_PROFILES} from "@/data/talentData";
import {JOB_POSTS} from "@/data/jobsData";
import {PROJECTS} from "@/data/projectsData";
export interface SearchResult {;

  id: string;
  type: "talent" | "job" | "project";

}
interface SearchFilters {}

  type?: string | null;
  skills?: string[] | null;
  location?: string | null;
  budget?: { min: number, max: number } | null;

  availability?: string | null;
}

export function useAISearch() {;
  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(false);
import { useState } from "react",
import { TALENT_PROFILES } from "@/data/talentData",

import { JOB_POSTS } from "@/data/jobsData",

import { PROJECTS } from "@/data/projectsData",
export interface SearchResult {}
  id: string,"
  type: "talent" | "job" | "project",
  title: string,;
  description: string";
import { useState } from "react",;"
import { TALENT_PROFILES } from "@/data/talentData",;"
import { JOB_POSTS } from "@/data/jobsData",;"

import { PROJECTS } from "@/data/projectsData",;
export interface SearchResult {;
  id: string,;"
  type: "talent" | "job" | "project",;
  title: string,,
  description: string;
}
;
interface SearchFilters {;
  type?: string | null,;
  skills?: string[] | null,;
  location?: string | null,;
  budget?: { min: number, max: number } | null,;

export /**

=======
  id: string,
  type: "talent" | "job" | "project",
  title: string,
  description: string}
=======
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621

<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36




>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import { useState } from './react';
import { TALENT_PROFILES } from '@/data / talent_data';
import { JOB_POSTS } from '@/data / jobs_data';

import { PROJECTS } from '@/data / projects_data';
export interface SearchResult {};
  id: string;"
  type: "talent" | "job" | "project";
  title: string,
  description: string;
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

<<<<<<< HEAD
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

=======
<<<<<<< HEAD
  title: string

  description: string
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
}
interface SearchFilters {}

  type?: string | null;
  skills?: string[] | null;
  location?: string | null;
  budget?: { min: number, max: number } | null;
<<<<<<< HEAD

=======
<<<<<<< HEAD
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
<<<<<<< HEAD
  const [loading, setLoading] = useState($2);
  const search = async (query: string) => {
    setLoading($2);
    try {
      const response = $2;
        {
          method: "POST"
          headers: { "Content-Type": "application/json" }
          body: JSON.stringify({ query })}
      ),
      const data = await response.json($2);
      const filters: SearchFilters = $2;
      const items: SearchResult[] = [],
      const matchSkill = $2;
        return skills?.some((s) =>
          filters.skills!.some((f) => s.toLowerCase().includes(f.toLowerCase()))
        )
      },

      if (!filters.type || filters.type = $2;
          if (!matchSkill(t.skills)) return,
          items.push({ id: t.id, type: "talent", title: t.full_name, description: t.professional_title })
        })
      }

      if (!filters.type || filters.type = $2;
          items.push({ id: j.id, type: "job", title: j.title, description: j.description })
        })
      }
      if (!filters.type |filters.type === "project" |filters.type === "all") {
        PROJECTS.forEach((p) => {
          items.push({ id: p.id, type: "project", title: p.job?.title || "Project", description: p.scope_summary })
        })
      }

      setResults(items)
    } catch (err) {
      console.error($2);
      setResults([])
    } finally {
      setLoading(false)
    }
  },

  return { results, loading, search }
}
  return { results, loading, search }
}
;
=======
  const [loading, setLoading] = useState(false),

  const search = async (query: string) => {
    setLoading(true),
    try {
      const response = await fetch(
        "https://ziontechgroup.functions.supabase.co/functions/v1/ai-search",
        {
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  availability?: string | null;
}

export function useAISearch() {;
  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(false);
import { useState } from "react",
import { TALENT_PROFILES } from "@/data/talentData",

import { JOB_POSTS } from "@/data/jobsData",

<<<<<<< HEAD
import { PROJECTS } from "@/data/projectsData",
export interface SearchResult {}
  id: string,"
  type: "talent" | "job" | "project",
  title: string,;
  description: string";
import { useState } from "react",;"
import { TALENT_PROFILES } from "@/data/talentData",;"
import { JOB_POSTS } from "@/data/jobsData",;"

import { PROJECTS } from "@/data/projectsData",;
export interface SearchResult {;
  id: string,;"
  type: "talent" | "job" | "project",;
  title: string,,
  description: string;
}
;
interface SearchFilters {;
  type?: string | null,;
  skills?: string[] | null,;
  location?: string | null,;
  budget?: { min: number, max: number } | null,;
=======
export /**
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
 * useAISearch - Function description

 */
<<<<<<< HEAD

=======
function useAISearch() {
  const [results, set_results] = useState < SearchResult[]>([]);
  const [loading, set_loading] = useState (false);
;
  const search = async (query: string) => {
    set_loading (true);
    try {
<<<<<<< HEAD
          method: "POST"
          headers: { "Content-Type": "application/json" }
          body: JSON.stringify({ query })}
      );
      const data = await response.json();
      const filters: SearchFilters = data.filters |{}
      const items: SearchResult[] = [];
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

export /**

 * useAISearch - Function description

 */

<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          method: "POST",
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query })}
      ),
      const data = await response.json(),
      const filters: SearchFilters = data.filters || {},

      const items: SearchResult[] = [],
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======

      const matchSkill = (skills: string[] | undefined) => {
        if (!filters.skills |filters.skills.length === 0) return true
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          method: "POST",
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          headers: { "Content-Type": "application/json" };
          body: JSON && JSON.stringify({ query })});
      const data = await response && response.json();
<<<<<<< HEAD
      const "filters": SearchFilters = data && data.filters || {};
      const "items": SearchResult[] = [];
        }
=======
      const filters: SearchFilters = data && data.filters || {};
<<<<<<< HEAD

=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      const items: SearchResult[] = [];
      const matchSkill = (skills: string[] | undefined) => {}
>>>>>>> origin/chore/fix-lint-and-merge
        if (!filters && filters.skills || filters && filters.skills.length === 0) return true,
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

        return skills?.some((s) =>
          filters && filters.skills!.some((f) => s && s.toLowerCase().includes(f && f.toLowerCase()))
        )

      },

<<<<<<< HEAD
        TALENT_PROFILES.forEach((t) => {
          if (filters.location && !t.location?.toLowerCase().includes(filters.location.toLowerCase())) return;

          filters && filters.skills!.some((f) => s && s.toLowerCase().includes(f && f.toLowerCase()))
        )
        TALENT_PROFILES.forEach((t) => {}
          if (filters.location && !t.location?.toLowerCase().includes(filters.location.toLowerCase())) return,

=======
=======
        return skills?.some((s) =>
          filters && filters.skills!.some((f) => s && s.toLowerCase().includes(f && f.toLowerCase()))
        )
      const matchSkill = (skills: string[] | undefined) => {
        if (!filters.skills |filters.skills.length === 0) return true
        return skills?.some((s) =>
          filters.skills!.some((f) => s.toLowerCase().includes(f.toLowerCase()))
        )
      }
      if (!filters.type |filters.type === "talent" |filters.type === "all") {
      },

      if (!filters.type || filters.type === "talent" || filters.type === "all") {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        TALENT_PROFILES.forEach((t) => {
<<<<<<< HEAD
          if (filters.location && !t.location?.toLowerCase().includes(filters.location.toLowerCase())) return,
          if (!matchSkill(t.skills)) return,
=======
          if (filters.location && !t.location?.toLowerCase().includes(filters.location.toLowerCase())) return;
<<<<<<< HEAD

          filters && filters.skills!.some((f) => s && s.toLowerCase().includes(f && f.toLowerCase()))
        )
        TALENT_PROFILES.forEach((t) => {}
          if (filters.location && !t.location?.toLowerCase().includes(filters.location.toLowerCase())) return,

=======
          if (!matchSkill(t.skills)) return;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          items.push({ id: t.id, type: "talent", title: t.full_name, description: t.professional_title })
        })
      }
      if (!filters.type |filters.type === "job" |filters.type === "all") {
        JOB_POSTS.forEach((j) => {
<<<<<<< HEAD
          if (!matchSkill(j.skills)) return,
=======
          if (!matchSkill(j.skills)) return;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          items.push({ id: j.id, type: "job", title: j.title, description: j.description })
        })
      }
      if (!filters.type |filters.type === "project" |filters.type === "all") {
        PROJECTS.forEach((p) => {
          items.push({ id: p.id, type: "project", title: p.job?.title |"Project", description: p.scope_summary })
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      };
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      if (!filters && filters.type || filters && filters.type === "talent" || filters && filters.type === "all") {
        TALENT_PROFILES && TALENT_PROFILES.forEach((t) => {

          if (filters && filters.location && !t && t.location?.toLowerCase().includes(filters && filters.location.toLowerCase())) return;
          if (!matchSkill(t && t.skills)) return;"
          items && items.push({ id: t && t.id, type: "talent", title: t && t.full_name, description: t && t.professional_title })
        })
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      }"
      if (!filters && filters.type || filters && filters.type === "job" || filters && filters.type === "all") {}
        JOB_POSTS && JOB_POSTS.forEach((j) => {}
          if (!matchSkill(j && j.skills)) return;"
          items && items.push({ id: j && j.id, type: "job", title: j && j.title, description: j && j.description })
        })

        })
      }
      setResults(items)
    } catch (err) {}
<<<<<<< HEAD
=======
=======
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
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        })
      }
      setResults(items)
    } catch (err) {
<<<<<<< HEAD
    }
  }
=======
      console && console.error("search error", err);
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      setResults([])
    } finally {}
      setLoading(false)
    }
  }

<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      const response = await fetch (

        "https://ziontechgroup.functions.supabase.co / functions / v1 / ai - search";
        {"
          method: "POST","
          headers: { "Content - Type": "application / json" }
          body: JSON.stringify ({ query })});
      const data = await response.json ();
      const filters: SearchFilters = data.filters || {}
;
<<<<<<< HEAD
      const match_skill = ("skills": string[] | undefined) =>: any {
        // Check condition
}
if (return true, ) {
  $2
=======
      const items: SearchResult[] = [];
      const match_skill = (skills: string[] | undefined) =>: any {}
        // Check condition;
if (return true, ) {}
  $2;
>>>>>>> origin/chore/fix-lint-and-merge
}
        return skills?.some ((s) =>;
          filters.skills!.some ((f) => s.toLowerCase ().includes (f.toLowerCase ())));

<<<<<<< HEAD
=======

<<<<<<< HEAD
      console.error("search error", err),
      setResults([])
    } finally {
      setLoading(false)
    }
  }

  return { results, loading, search }
}
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
;
<<<<<<< HEAD
export function useAISearch() {;
  }
  const search = async ("query": string) => {;
    }
    setLoading(true),;
    try {;
      }
      const response = await fetch(;
        ""https"://ziontechgroup.functions.supabase.co/functions/v1/ai-search",;"
        {;
          }
          "method": "POST",;"
          "headers": { "Content-Type": "application/json" },;"
          "body": JSON.stringify({ query })}
      ),;
      const matchSkill = ("skills": string[] | undefined) => {;
        }
=======
export function useAISearch() { return null; }
          headers: { "Content-Type": "application/json" },;
          body: JSON.stringify({ query })}

      ),;
      const data = await response.json(),;
      const filters:SearchFilters = data.filters || {},;
;
      const items:SearchResult[] = [],;
      const matchSkill = (skills:string[] | undefined) => {;
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
        if (!filters.skills || filters.skills.length === 0) return true,;
        return skills?.some((s) =>;
          filters.skills!.some((f) => s.toLowerCase().includes(f.toLowerCase()));
        );
      },;"
      if (!filters.type || filters.type === "talent" || filters.type === "all") {;
        TALENT_PROFILES.forEach((t) => {;
          if (filters.location && !t.location?.toLowerCase().includes(filters.location.toLowerCase())) return,;

          items.push({ id: t.id, type: "talent", title: t.full_name, description: t.professional_title });

<<<<<<< HEAD

  return { results, loading, search }
}
;
  return { results, loading, search }
}
  return { results, loading, search }

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
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        if (!filters.skills || filters.skills.length === 0) return true,;
        return skills?.some((s) =>;
          filters.skills!.some((f) => s.toLowerCase().includes(f.toLowerCase()));
        );
<<<<<<< HEAD
      },;"
      if (!filters.type || filters.type === "talent" || filters.type === "all") {;
        TALENT_PROFILES.forEach((t) => {;
          if (filters.location && !t.location?.toLowerCase().includes(filters.location.toLowerCase())) return,;

          items.push({ id: t.id, type: "talent", title: t.full_name, description: t.professional_title });

=======
      },;
;
      if (!filters.type || filters.type === "talent" || filters.type === "all") {;
        TALENT_PROFILES.forEach((t) => {;
          if (filters.location && !t.location?.toLowerCase().includes(filters.location.toLowerCase())) return,;
          if (!matchSkill(t.skills)) return,;
          items.push({ id:t.id, type:"talent", title:t.full_name, description:t.professional_title }),;
        }),;
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
  return { results, loading, search }
}
;
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      }
;
      // Check condition;
if ( {) {}
  $2;
}
        TALENT_PROFILES.for_each ((t) => {}
          if (.includes (filters.location.toLowerCase ())) return) {}
  $2;
}
          if () return) {}
  $2;
}"
          items.push ({ id: t.id, type: "talent", title: t.full_name, description: t.professional_title });
        });
      }
      // Check condition;
if ( {) {}
  $2;
}
        JOB_POSTS.for_each ((j) => {}
          if () return) {}
  $2;
}"
          items.push ({ id: j.id, type: "job", title: j.title, description: j.description });
        });
      }
      // Check condition;
if ( {) {}
  $2;
}
        PROJECTS.for_each ((p) => {"
          items.push ({ id: p.id, type: "project", title: p.job?.title || "Project", description: p.scope_summary });
        });
      }
      set_results (items);
    } catch (err) {"
      console.error ("search error", err);
      set_results ([]);
    } finally {}
      set_loading (false);
    }

  return { results, loading, search }
}
  }
;

  return { results, loading, search }
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

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
  return { results, loading, search }
}
<<<<<<< HEAD
;
=======
;
=======
}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
