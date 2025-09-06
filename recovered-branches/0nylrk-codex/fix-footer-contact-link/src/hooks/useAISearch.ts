
import { useState } from "react";
import { TALENT_PROFILES } from "@/data/talentData";
import { JOB_POSTS } from "@/data/jobsData";
import { PROJECTS } from "@/data/projectsData";
export interface SearchResult {
  id: string,
  type: "talent" | "job" | "project",
  title: string,
  description: string}

interface SearchFilters {
  type?: string | null,
  skills?: string[] | null,
  location?: string | null,
  budget?: { min: number, max: number} | null,
  availability?: string | null
}

export function useAISearch() {
  const [results, setResults] = useState<SearchResult[]>([]),
  const [loading, setLoading] = useState($2);
  const search = async (query: string) => {
    setLoading($2);
    try {
      const response = $2;
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
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

      if (!filters.type || filters.type === "project" || filters.type === "all") {
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
