// Mock Supabase client for build purposes
export const supabase = {
  from: (table: string) => ({
    select: () => ({
      eq: () => ({
        single: () => Promise.resolve({ data: null, error: null })
      })
    }),
    insert: () => ({
      select: () => Promise.resolve({ data: null, error: null })
    }),
    update: () => ({
      eq: () => ({
        select: () => Promise.resolve({ data: null, error: null })
      })
    }),
    delete: () => ({
      eq: () => Promise.resolve({ data: null, error: null })
    })
  })
};