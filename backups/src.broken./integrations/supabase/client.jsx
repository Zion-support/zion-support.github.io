import { supabaseStorageAdapter } from './safeStorageAdapter';
// Mock implementation
const createMockSupabaseClient = () => ({
    auth: {
        persistSession: true,
        autoRefreshToken: true,
        storage: supabaseStorageAdapter,
    },
});
export const supabase = createMockSupabaseClient();

// Mock function for getting profiles
export const getFromProfiles = async (userId) => {
    // Mock implementation - in a real app, this would query the profiles table
    return {
        id: userId,
        display_name: 'Mock User',
        avatar_url: null,
        bio: 'Mock user bio',
        created_at: new Date().toISOString()
    };
};
