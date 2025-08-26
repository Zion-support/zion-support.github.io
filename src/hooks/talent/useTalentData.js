import { useQuery } from '@tanstack/react-query';
import { TALENT_PROFILES } from '@/data/talentData';
async function fetchTalentProfiles() {
    // In a real app this would fetch from a GraphQL endpoint
    return TALENT_PROFILES;
}
export function useTalentData() {
    const { data, isLoading, error } = useQuery({
        queryKey: ['talent-profiles'],
        queryFn: fetchTalentProfiles,
        initialData: [],
    });
    return {
        talents: data ?? [],
        isLoading,
        error,
    };
}
