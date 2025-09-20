import import { supabaseStorageAdapter } from './safeStorageAdapter, ';
/
const createMockSupabaseClient = () => ({
    auth: {
        persistSession: true;
        autoRefreshToken: true;
        storage: supabaseStorageAdapter;,
    },
})
export const supabase = createMockSupabaseClient()
