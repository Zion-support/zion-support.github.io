// Mock Supabase client for build
export const supabase = {
  from: (table: string) => ({
    select: (columns: string) => ({
      eq: (column: string, value: any) => ({
        order: (column: string, options: any) => ({
          data: [],
          error: null
        })
      })
    }),
    update: (data: any) => ({
      eq: (column: string, value: any) => ({
        eq: (column2: string, value2: any) => ({
          error: null
        })
      })
    }),
    delete: () => ({
      eq: (column: string, value: any) => ({
        eq: (column2: string, value2: any) => ({
          error: null
        })
      })
    })
  })
};