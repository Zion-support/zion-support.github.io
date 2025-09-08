// Mock Supabase client for build
export const supabase = {
  from: (table: string) => ({
    select: () => ({
      eq: () => ({
        single: () => Promise.resolve({
          data: null,
          error: null
        }),
        data: Promise.resolve({
          data: [],
          error: null
        })
      })
    }),
    insert: () => ({
      select: () => Promise.resolve({
        data: null,
        error: null
      })
    }),
    update: () => ({
      eq: () => ({
        select: () => Promise.resolve({
          data: null,
          error: null
        })
      })
    }),
    delete: () => ({
      eq: () => Promise.resolve({
        data: null,
        error: null
      })
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