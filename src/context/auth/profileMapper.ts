interface SupabaseUser {
  id: string;
  email?: string;
  user_metadata?: {
    full_name?: string;
    avatar_url?: string;
  };
  created_at?: string;
  updated_at?: string;
}

interface Profile {
  id: string;
  display_name?: string;
  avatar_url?: string;
  role?: string;
  is_email_verified?: boolean;
  created_at?: string;
  updated_at?: string;
}

interface MappedUser {
  id: string;
  email: string;
  displayName?: string;
  avatar?: string;
  role?: string;
  isEmailVerified?: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export const mapProfileToUser = (supabaseUser: SupabaseUser, profile: Profile): MappedUser => {
  return {
    id: supabaseUser.id,
    email: supabaseUser.email || '',
    displayName: profile.display_name || supabaseUser.user_metadata?.full_name,
    avatar: profile.avatar_url || supabaseUser.user_metadata?.avatar_url,
    role: profile.role,
    isEmailVerified: profile.is_email_verified || false,
    createdAt: profile.created_at || supabaseUser.created_at,
    updatedAt: profile.updated_at || supabaseUser.updated_at
  };
};