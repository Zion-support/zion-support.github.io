// Mock Supabase client for development
export const supabase = {
  auth: {
    getUser: () => Promise.resolve({ data: { user: null }, error: null }),
    signInWithPassword: (credentials: any) => 
      Promise.resolve({ data: { user: null, session: null }, error: null }),
    signOut: () => Promise.resolve({ error: null }),
    onAuthStateChange: (callback: (event: string, session: any) => void) => ({
      data: { subscription: { unsubscribe: () => {} } }
    })
  },
  from: (table: string) => ({
    select: (columns: string = "*") => ({
      eq: (column: string, value: any) => ({
        single: () => Promise.resolve({ data: null, error: null }),
        then: (callback: (result: any) => any) =>
          callback({ data: [], error: null }),
      }),
    }),
    insert: (data: any) => ({
      select: (columns: string = "*") => ({
        single: () => Promise.resolve({ data: data, error: null }),
      }),
    }),
    update: (data: any) => ({
      eq: (column: string, value: any) => ({
        select: (columns: string = "*") => ({
          single: () => Promise.resolve({ data: data, error: null }),
        }),
      }),
    }),
    delete: () => ({
      eq: (column: string, value: any) => ({
        then: (callback: (result: any) => any) =>
          callback({ data: null, error: null }),
      }),
    }),
  }),
};

export function getFromProfiles(table: string) {
  return supabase.from(table);
}