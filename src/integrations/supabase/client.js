import { supabaseStorageAdapter } from './safeStorageAdapter, ';
// Mock implementation;
const createMockSupabaseClient = () => ({
    auth: {
        persistSession: true;
        autoRefreshToken: true;
        storage: supabaseStorageAdapter;
    },
});
<<<<<<< HEAD
=======
        storage: supabaseStorageAdapter;}});
>>>>>>> 9d7313116a64aea01fdf8aaa2b42f67aaee4a840
export const supabase = createMockSupabaseClient();
