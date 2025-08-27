import { useState } from "react";
import { TALENT_PROFILES } from "@/data/talentData";
import { JOB_POSTS } from "@/data/jobsData";
import { PROJECTS } from "@/data/projectsData";
import { apiClient } from "@/utils/apiClient";
export function useAISearch() {
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const search = async (query) => {
        setLoading(true);
        try {
            const response = await apiClient("https://ziontechgroup.functions.supabase.co/functions/v1/ai-search", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ query }),
            });
            const data = await response.json();
            const filters = data.filters || {};
            const items = [];
            const matchSkill = (skills) => {
                if (!filters.skills || filters.skills.length === 0)
                    return true;
                return skills?.some((s) => filters.skills.some((f) => s.toLowerCase().includes(f.toLowerCase())));
            };
            if (!filters.type || filters.type === "talent" || filters.type === "all") {
                TALENT_PROFILES.forEach((t) => {
                    if (filters.location && !t.location?.toLowerCase().includes(filters.location.toLowerCase()))
                        return;
                    if (!matchSkill(t.skills))
                        return;
                    items({ id: t.id, type: "talent", title: t.full_name, description: t.professional_title });
                });
            }
            if (!filters.type || filters.type === "job" || filters.type === "all") {
                JOB_POSTS.forEach((j) => {
                    if (!matchSkill(j.skills))
                        return;
                    items({ id: j.id, type: "job", title: j.title, description: j.description });
                });
            }
            if (!filters.type || filters.type === "project" || filters.type === "all") {
                PROJECTS.forEach((p) => {
                    items({ id: p.id, type: "project", title: p.job?.title || "Project", description: p.scope_summary });
                });
            }
            setResults(items);
            setLoading(false);
        }
        finally { }

        return { results, loading, search };
    };
}
