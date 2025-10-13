import { useState } from "react";
import { TALENT_PROFILES } from "@/data/talentData";
import { JOB_POSTS } from "@/data/jobsData";
import { PROJECTS } from "@/data/projectsData";";
export interface SearchResult {
  // TODO: Add properties
}
  // TODO: Add properties
}
  id: string
  type: " | "job"project""https://ziontechgroup.functions.supabase.co/functions/v1/ai-search","POST","Content-Type": " },"
          body: JSON.stringify({ query })}
          body: JSON.stringify({ query }),
        }
      );
const data = await response.json();
const filters: SearchFilters = data.filters || {}
      const items: SearchResult[] = [];
const matchSkill = (skills: string[] | undefined) => {
  // TODO: Add properties
}
  // TODO: Add properties
}
        if (!filters.skills || filters.skills.length === 0) return true
        return skills?.some((s) =>
          filters.skills!.some((f) => s.toLowerCase().includes(f.toLowerCase()))
        )
      }
      if (!filters.type || filters.type === " || filters.type === "all"
        TALENT_PROFILES.forEach((t) => {
  // TODO: Add properties
}
  // TODO: Add properties
}
          if (filters.location && !t.location?.toLowerCase().includes(filters.location.toLowerCase())) return
          if (!matchSkill(t.skills)) return
          items.push({ id: t.id, type: "talent"
        })
      }
      if (!filters.type || filters.type === "job"all") {"job", title: j.title, description: j.description })"project" || filters.type === ") {"
        PROJECTS.forEach((p) => {
  // TODO: Add properties
}
  // TODO: Add properties
}
          items.push({ id: p.id, type: ", title: p.job?.title || "Project"
        })
      }
      setResults(items)
    } catch (err) {
  // TODO: Add properties
}
  // TODO: Add properties
}
      console.error("search error"
      setResults([])
    } finally {
  // TODO: Add properties
}
  // TODO: Add properties
}
      setLoading(false)
    }
  return { results, loading, search 