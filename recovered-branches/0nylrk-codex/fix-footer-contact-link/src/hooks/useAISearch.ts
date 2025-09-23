
import { useState } from "react";
import { TALENT_PROFILES } from "@/data/talentData";
import { JOB_POSTS } from "@/data/jobsData";
import { PROJECTS } from "@/data/projectsData";

export interface SearchResult {
  id: string;
  type: "talent" | "job" | "project";
  title: string;
  description: string;
}

interface SearchFilters {
  type?: string | null;
  skills?: string[] | null;
  location?: string | null;
  budget?: { min: number; max: number } | null;
  availability?: string | null;
}

export function useAISearch() {
  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(false);

  const search = async (query: string) => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://ziontechgroup.functions.supabase.co/functions/v1/ai-search",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
