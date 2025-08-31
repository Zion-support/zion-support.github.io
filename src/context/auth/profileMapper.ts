interface SupabaseUser {
  id: string;
  email?: string;
  user_metadata?: {
    full_name?: string;
    avatar_url?: string;
  };
  created_at?: string;
<<<<<<< HEAD
  updated_at?: string;
}

=======
  updated_at?: string}
>>>>>>> 0c99c864a5b3e9103e05fe2d2d18af9657a73b04
interface Profile {
  id: string;
  display_name?: string;
  avatar_url?: string;
  role?: string;
  is_email_verified?: boolean;
  created_at?: string;
<<<<<<< HEAD
  updated_at?: string;
}

=======
  updated_at?: string}
>>>>>>> 0c99c864a5b3e9103e05fe2d2d18af9657a73b04
interface MappedUser {
  id: string;
  email: string;
  displayName?: string;
  avatar?: string;
  role?: string;
  isEmailVerified?: boolean;
  createdAt?: string;
<<<<<<< HEAD
  updatedAt?: string;
}

export const mapProfileToUser = (supabaseUser: SupabaseUser, profile: Profile): MappedUser => {
=======
  updatedAt?: string}
export const mapProfileToUser = (supabaseUser: SupabaseUser, profile: Profile): MappedUser  => {
>>>>>>> 0c99c864a5b3e9103e05fe2d2d18af9657a73b04
  return {
    id: supabaseUser.id,
    email: supabaseUser.email || '',
    displayName: profile.display_name || supabaseUser.user_metadata?.full_name,
<<<<<<< HEAD
    avatar: profile.avatar_url || supabaseUser.user_metadata?.avatar_url,
    role: profile.role,
    isEmailVerified: profile.is_email_verified || false,
    createdAt: profile.created_at || supabaseUser.created_at,
    updatedAt: profile.updated_at || supabaseUser.updated_at,
=======
    avatar: profile.avatar_url || supabaseUser.user_metadata?.avatar_url,;
    role: profile.role,;
    isEmailVerified: profile.is_email_verified || false,;
    createdAt: profile.created_at || supabaseUser.created_at,;
    updatedAt: profile.updated_at || supabaseUser.updated_at;
>>>>>>> 0c99c864a5b3e9103e05fe2d2d18af9657a73b04
  };
};
