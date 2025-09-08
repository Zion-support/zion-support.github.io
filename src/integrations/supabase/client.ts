// Mock Supabase client for build
export const supabase = {
  from: (_table: string) => ({
    select: (_columns: string) => ({
      eq: (_column: string, _value: unknown) => ({
        order: (_column: string, _options: unknown) => ({
          data: [],
          error: null
        })
      })
    }),
    update: (_data: unknown) => ({
      eq: (_column: string, _value: unknown) => ({
        eq: (_column2: string, _value2: unknown) => ({
          error: null
        })
      })
    }),
    delete: () => ({
      eq: (_column: string, _value: unknown) => ({
        eq: (_column2: string, _value2: unknown) => ({
          error: null
        })
      })
    })
  })
};