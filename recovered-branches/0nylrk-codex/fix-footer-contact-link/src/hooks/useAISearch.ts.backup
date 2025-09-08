
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
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

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
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


<<<<<<< HEAD
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

=======

export /**

 * useAISearch - Function description

 */


>>>>>>> origin/cursor/delete-old-data-records-6bba
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query })}
      ),
      const data = await response.json(),
      const filters: SearchFilters = data.filters || {},

      const items: SearchResult[] = [],

<<<<<<< HEAD


          headers: { "Content-Type": "application/json" };
          body: JSON && JSON.stringify({ query })});
      const data = await response && response.json();

      const filters: SearchFilters = data && data.filters || {};
      const items: SearchResult[] = [];
      const matchSkill = (skills: string[] | undefined) => {}

        if (!filters && filters.skills || filters && filters.skills.length === 0) return true,
=======
          method: "POST",
          headers: { "Content-Type": "application/json" };
          body: JSON && JSON.stringify({ query })});
      const data = await response && response.json();
      const "filters": SearchFilters = data && data.filters || {};
      const "items": SearchResult[] = [];
        }
      const items: SearchResult[] = [];
      const matchSkill = (skills: string[] | undefined) => {}
        if (!filters && filters.skills || filters && filters.skills.length === 0) return true,

>>>>>>> origin/cursor/delete-old-data-records-6bba

        return skills?.some((s) =>
          filters && filters.skills!.some((f) => s && s.toLowerCase().includes(f && f.toLowerCase()))
        )
<<<<<<< HEAD
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

=======

      },


        TALENT_PROFILES.forEach((t) => {
          if (filters.location && !t.location?.toLowerCase().includes(filters.location.toLowerCase())) return,
          if (!matchSkill(t.skills)) return,

          filters && filters.skills!.some((f) => s && s.toLowerCase().includes(f && f.toLowerCase()))
        )
        TALENT_PROFILES.forEach((t) => {}
          if (filters.location && !t.location?.toLowerCase().includes(filters.location.toLowerCase())) return,

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
      };
>>>>>>> origin/cursor/delete-old-data-records-6bba
      if (!filters && filters.type || filters && filters.type === "talent" || filters && filters.type === "all") {
        TALENT_PROFILES && TALENT_PROFILES.forEach((t) => {

          if (filters && filters.location && !t && t.location?.toLowerCase().includes(filters && filters.location.toLowerCase())) return;
          if (!matchSkill(t && t.skills)) return;"
          items && items.push({ id: t && t.id, type: "talent", title: t && t.full_name, description: t && t.professional_title })
        })
<<<<<<< HEAD

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
=======

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
>>>>>>> origin/cursor/delete-old-data-records-6bba

      setResults([])
    } finally {}
      setLoading(false)
    }
  }

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
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

      const items: SearchResult[] = [];
      const match_skill = (skills: string[] | undefined) =>: any {}
        // Check condition;
if (return true, ) {}
  $2;

=======
      const match_skill = ("skills": string[] | undefined) =>: any {
        // Check condition
}
if (return true, ) {
  $2
>>>>>>> origin/cursor/delete-old-data-records-6bba
}
        return skills?.some ((s) =>;
          filters.skills!.some ((f) => s.toLowerCase ().includes (f.toLowerCase ())));


<<<<<<< HEAD


;

export function useAISearch() { return null; }
          headers: { "Content-Type": "application/json" },;
          body: JSON.stringify({ query })}

      ),;
      const data = await response.json(),;
      const filters:SearchFilters = data.filters || {},;
;
      const items:SearchResult[] = [],;
      const matchSkill = (skills:string[] | undefined) => {;

=======
;
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
>>>>>>> origin/cursor/delete-old-data-records-6bba
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

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
>>>>>>> origin/cursor/delete-old-data-records-6bba
