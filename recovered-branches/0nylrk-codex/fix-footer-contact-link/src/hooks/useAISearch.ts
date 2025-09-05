 
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
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7 
}
});
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7 
}
});
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7 
}
}finally {
  setLoading (false) 
}
};
return {
  results, loading, search 
}
}