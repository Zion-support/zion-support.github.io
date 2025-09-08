// Mock Supabase client for build
export const supabase = {
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 1306cdfc5ab0f8df8cd228e773bcfa58ba294204
<<<<<<< HEAD
  from: (_table: string) => ({
    select: (_columns: string) => ({
      eq: (_column: string, _value: unknown) => ({
        order: (_column: string, _options: unknown) => ({
=======
<<<<<<< HEAD
>>>>>>> 97898c1e8ff6077b3b3a3ca38c9422c9b60de8e3
=======
=======
>>>>>>> origin/main
>>>>>>> 1306cdfc5ab0f8df8cd228e773bcfa58ba294204
  from: () => ({
    select: () => ({
      eq: () => ({
        order: () => ({
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/main
>>>>>>> 97898c1e8ff6077b3b3a3ca38c9422c9b60de8e3
=======
>>>>>>> origin/main
=======
>>>>>>> origin/main
>>>>>>> 1306cdfc5ab0f8df8cd228e773bcfa58ba294204
          data: [],
          error: null
        })
      })
    }),
<<<<<<< HEAD
<<<<<<< HEAD
    update: () => ({
      eq: () => ({
        eq: () => ({
=======
=======
>>>>>>> 1306cdfc5ab0f8df8cd228e773bcfa58ba294204
<<<<<<< HEAD
    update: (_data: unknown) => ({
      eq: (_column: string, _value: unknown) => ({
        eq: (_column2: string, _value2: unknown) => ({
=======
    update: () => ({
      eq: () => ({
        eq: () => ({
>>>>>>> origin/main
<<<<<<< HEAD
>>>>>>> 97898c1e8ff6077b3b3a3ca38c9422c9b60de8e3
=======
=======
    update: () => ({
      eq: () => ({
        eq: () => ({
>>>>>>> origin/main
>>>>>>> 1306cdfc5ab0f8df8cd228e773bcfa58ba294204
          error: null
        })
      })
    }),
    delete: () => ({
<<<<<<< HEAD
<<<<<<< HEAD
      eq: () => ({
        eq: () => ({
=======
=======
>>>>>>> 1306cdfc5ab0f8df8cd228e773bcfa58ba294204
<<<<<<< HEAD
      eq: (_column: string, _value: unknown) => ({
        eq: (_column2: string, _value2: unknown) => ({
=======
      eq: () => ({
        eq: () => ({
>>>>>>> origin/main
<<<<<<< HEAD
>>>>>>> 97898c1e8ff6077b3b3a3ca38c9422c9b60de8e3
=======
=======
      eq: () => ({
        eq: () => ({
>>>>>>> origin/main
>>>>>>> 1306cdfc5ab0f8df8cd228e773bcfa58ba294204
          error: null
        })
      })
    })
  })
};