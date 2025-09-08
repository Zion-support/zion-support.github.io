// Mock Supabase client for build
export const supabase = {
  from: (table: string) => ({
    select: () => ({
      eq: () => ({
        single: () => Promise.resolve({
          data: null,
          error: null
        })
      })
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
  })
};