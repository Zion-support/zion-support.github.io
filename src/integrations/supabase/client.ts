// Mock Supabase client for build
export const isSupabaseConfigured = () => {
  return !!process.env.NEXT_PUBLIC_SUPABASE_URL && !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
};

export const supabase = {
  from: (table: string) => ({
    select: () => ({
      eq: (column: string, value: any) => ({
        single: () => Promise.resolve({
          data: null, // Mock data
          error: null
        }),
        limit: (count: number) => ({
          order: (column: string, options?: { ascending?: boolean }) => Promise.resolve({
            data: [], // Mock data
            error: null
          })
        })
      })
    }),
    insert: (data: any) => Promise.resolve({
      data: [], // Mock data
      error: null
    }),
    update: (data: any) => ({
      eq: (column: string, value: any) => Promise.resolve({
        data: [], // Mock data
        error: null
      })
    }),
    delete: () => ({
      eq: (column: string, value: any) => Promise.resolve({
        data: [], // Mock data
        error: null
      })
    })
  })
};