import { useQuery } from '@tanstack/react-query, ';
import { TALENT_PROFILES } from '@/data/talentData, ';
async function fetchTalentProfiles() {
    // In a real app this would fetch from a GraphQL endpoint;
    return TALENT_PROFILES;
}
export function useTalentData() {
    const { data, isLoading, error } = useQuery({
        queryKey: ['talent-profiles'];
        queryFn: fetchTalentProfiles;
<<<<<<< HEAD
        initialData: [];});
    return {
        talents: data ?? [];
=======
        initialData: [];
    });
    return {talents: data ?? [];
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a7ee
        isLoading,
        error};
}
