import { supabaseStorageAdapter } from './safeStorageAdapter, ';
// Mock implementation;
const createMockSupabaseClient = () => ({
    auth: {
<<<<<<< HEAD
        persistSession: true;
        autoRefreshToken: true;
        storage: supabaseStorageAdapter;}});
=======
        persistSession: true,
        autoRefreshToken: true,
        storage: supabaseStorageAdapter,,
    },
});
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-a97e
export const supabase = createMockSupabaseClient();
