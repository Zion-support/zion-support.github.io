// Mock Supabase client for build
export const supabase = {
  from: () => ({
    select: () => ({
      eq: () => ({
        order: () => ({
          data: [],
          error: null
        })
      })
    }),
    update: () => ({
      eq: () => ({
        eq: () => ({
          error: null
        })
      })
    }),
    delete: () => ({
      eq: () => ({
        eq: () => ({
          error: null
        })
      })
    })
  })
};