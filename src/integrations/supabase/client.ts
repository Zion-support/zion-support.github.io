// Mock Supabase client for development
// In production, this would be the actual Supabase client
interface SupabaseClient {
  auth: {
    signUp: (credentials: any) => Promise<any>;
    signIn: (credentials: any) => Promise<any>;
    signOut: () => Promise<any>;
    user: () => any;
    onAuthStateChange: (callback: any) => any;
  };
  from: (table: string) => any;
  storage: {
    from: (bucket: string) => any;
  };
}
// Mock implementation
const createMockSupabaseClient = (): SupabaseClient => ({
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    storage: supabaseStorageAdapter,
  },
});
export const supabase = createMockSupabaseClient();
