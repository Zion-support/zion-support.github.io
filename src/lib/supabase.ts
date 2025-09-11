// Mock Supabase client
export const supabase = {
  auth: {
    signIn: async (credentials: any) => {
      console.log('Supabase signIn called with:', credentials);
      return {
        data: { user: { id: '1', email: credentials.email } },
        error: null,
      };
    },
    signUp: async (credentials: any) => {
      console.log('Supabase signUp called with:', credentials);
      return {
        data: { user: { id: '1', email: credentials.email } },
        error: null,
      };
    },
    signOut: async () => {
      console.log('Supabase signOut called');
      return { error: null };
    },
    onAuthStateChange: (callback: any) => {
      console.log('Supabase auth state change listener registered');
      return { data: { subscription: { unsubscribe: () => {} } } };
    },
  },
};

export const getFromProfiles = async (userId: string) => {
  console.log('getFromProfiles called with:', userId);
  return { data: { id: userId, name: 'User' }, error: null };
};
