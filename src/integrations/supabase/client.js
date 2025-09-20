import { supabaseStorageAdapter } from './safeStorageAdapter, ';
// Mock implementation;
const createMockSupabaseClient = () => ({
    auth: {
        persistSession: true;
        autoRefreshToken: true;
<<<<<<< HEAD
        storage: supabaseStorageAdapter;}});
=======
        storage: supabaseStorageAdapter;
    },
});
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a7ee
export const supabase = createMockSupabaseClient();
