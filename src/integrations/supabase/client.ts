// Mock Supabase client for build
export const supabase = {
  from: (table: string) => ({
    select: () => Promise.resolve({
      data: [],
      error: null
    }),
    insert: () => Promise.resolve({
      data: [],
      error: null
    }),
    update: () => Promise.resolve({
      data: [],
      error: null
    }),
    delete: () => Promise.resolve({
      data: [],
      error: null
    })
  }),
  auth: {
    signIn: () => Promise.resolve({
      data: { user: null },
      error: null
    }),
    signUp: () => Promise.resolve({
      data: { user: null },
      error: null
    }),
    signOut: () => Promise.resolve({
      error: null
    }),
    onAuthStateChange: () => ({
      data: { subscription: { unsubscribe: () => {} } }
    })
  }
};