// Mock Supabase client for build
export const supabase = {

          error: null
        })
      })
    }),

    })
  }),
  auth: {
    signIn: () => Promise.resolve({
      data: { user: null },
      error: null
    }),
    signUp: () => Promise.resolve({
      data: { user: null },
      error: null
    }),
    signOut: () => Promise.resolve({
      error: null
    }),
    onAuthStateChange: () => ({
      data: { subscription: { unsubscribe: () => {} } }
    })
  }
};