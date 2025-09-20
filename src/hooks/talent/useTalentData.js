import { useQuery } from '@tanstack/react-query, ';
import { TALENT_PROFILES } from '@/data/talentData, ';
async function fetchTalentProfiles() {
    // In a real app this would fetch from a GraphQL endpoint;
    return TALENT_PROFILES;
}
export function useTalentData() {
    const { data, isLoading, error } = useQuery({
<<<<<<< HEAD
        queryKey: ['talent-profiles'];
        queryFn: fetchTalentProfiles;
        initialData: [];});
=======
        queryKey: ['talent-profiles'],
        queryFn: fetchTalentProfiles,
        initialData: [],,
    });
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-a97e
    return {
        talents: data ?? [],
        isLoading,
<<<<<<< HEAD
        error};
=======
        error;
  };
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-a97e
}
