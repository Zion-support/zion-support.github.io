// Mock Supabase client for build
export const supabase = {
<<<<<<< HEAD
<<<<<<< HEAD
  from: (_table: string) => ({
    select: (_columns: string) => ({
      eq: (_column: string, _value: unknown) => ({
        order: (_column: string, _options: unknown) => ({
=======
=======
>>>>>>> origin/main
  from: () => ({
    select: () => ({
      eq: () => ({
        order: () => ({
<<<<<<< HEAD
>>>>>>> origin/main
=======
>>>>>>> origin/main
          data: [],
          error: null
        })
      })
    }),
<<<<<<< HEAD
<<<<<<< HEAD
    update: (_data: unknown) => ({
      eq: (_column: string, _value: unknown) => ({
        eq: (_column2: string, _value2: unknown) => ({
=======
    update: () => ({
      eq: () => ({
        eq: () => ({
>>>>>>> origin/main
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
<<<<<<< HEAD
      eq: (_column: string, _value: unknown) => ({
        eq: (_column2: string, _value2: unknown) => ({
=======
      eq: () => ({
        eq: () => ({
>>>>>>> origin/main
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