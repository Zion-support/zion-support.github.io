// Mock Supabase client for build
export const supabase = {
<<<<<<< HEAD
  from: (_table: string) => ({
    select: (_columns: string) => ({
      eq: (_column: string, _value: unknown) => ({
        order: (_column: string, _options: unknown) => ({
=======
  from: () => ({
    select: () => ({
      eq: () => ({
        order: () => ({
>>>>>>> origin/main
          data: [],
          error: null
        })
      })
    }),
<<<<<<< HEAD
    update: (_data: unknown) => ({
      eq: (_column: string, _value: unknown) => ({
        eq: (_column2: string, _value2: unknown) => ({
=======
    update: () => ({
      eq: () => ({
        eq: () => ({
>>>>>>> origin/main
          error: null
        })
      })
    }),
    delete: () => ({
<<<<<<< HEAD
      eq: (_column: string, _value: unknown) => ({
        eq: (_column2: string, _value2: unknown) => ({
=======
      eq: () => ({
        eq: () => ({
>>>>>>> origin/main
          error: null
        })
      })
    })
  })
};