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

export const getFromProfiles = async (userId) => {
    // Mock implementation - in a real app, this would query the profiles table
    return {
        id: userId,
        email: 'user@example.com',
        full_name: 'Mock User',
        avatar_url: null,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
    };
};
