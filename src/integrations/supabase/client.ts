// Mock Supabase client for build
export const supabase = {
<<<<<<< HEAD
=======
<<<<<<< HEAD
  from: (_table: string) => ({
    select: (_columns: string) => ({
      eq: (_column: string, _value: unknown) => ({
        order: (_column: string, _options: unknown) => ({
=======
>>>>>>> 97898c1e8ff6077b3b3a3ca38c9422c9b60de8e3
  from: () => ({
    select: () => ({
      eq: () => ({
        order: () => ({
<<<<<<< HEAD
=======
>>>>>>> origin/main
>>>>>>> 97898c1e8ff6077b3b3a3ca38c9422c9b60de8e3
          data: [],
          error: null
        })
      })
    }),
<<<<<<< HEAD
    update: () => ({
      eq: () => ({
        eq: () => ({
=======
<<<<<<< HEAD
    update: (_data: unknown) => ({
      eq: (_column: string, _value: unknown) => ({
        eq: (_column2: string, _value2: unknown) => ({
=======
    update: () => ({
      eq: () => ({
        eq: () => ({
>>>>>>> origin/main
>>>>>>> 97898c1e8ff6077b3b3a3ca38c9422c9b60de8e3
          error: null
        })
      })
    }),
    delete: () => ({
<<<<<<< HEAD
      eq: () => ({
        eq: () => ({
=======
<<<<<<< HEAD
      eq: (_column: string, _value: unknown) => ({
        eq: (_column2: string, _value2: unknown) => ({
=======
      eq: () => ({
        eq: () => ({
>>>>>>> origin/main
>>>>>>> 97898c1e8ff6077b3b3a3ca38c9422c9b60de8e3
          error: null
        })
      })
    })
  })
};