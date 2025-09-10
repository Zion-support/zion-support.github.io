// Mock Supabase client for development
export const supabase = {
  auth: {
    getUser: () => Promise.resolve({ data: { user: null }, error: null }),
    signInWithPassword: (credentials: unknown) => 
      Promise.resolve({ data: { user: null, session: null }, error: null }),
    signOut: () => Promise.resolve({ error: null }),
    onAuthStateChange: (callback: (event: string, session: unknown) => void) => ({
      data: { subscription: { unsubscribe: () => {} } }
    })
  },
  from: (table: string) => ({
    select: (columns: string = "*") => ({
      eq: (column: string, value: unknown) => ({
        single: () => Promise.resolve({ data: null, error: null }),
        then: (callback: (result: unknown) => any) =>
          callback({ data: [], error: null }),
      }),
    }),
    insert: (data: unknown) => ({
      select: (columns: string = "*") => ({
        single: () => Promise.resolve({ data: data, error: null }),
      }),
    }),
    update: (data: unknown) => ({
      eq: (column: string, value: unknown) => ({
        select: (columns: string = "*") => ({
          single: () => Promise.resolve({ data: data, error: null }),
        }),
      }),
    }),
    delete: () => ({
      eq: (column: string, value: unknown) => ({
        then: (callback: (result: unknown) => any) =>
          callback({ data: null, error: null }),
      }),
    }),
  }),
};

export function getFromProfiles(table: string) {
  return supabase.from(table);
}