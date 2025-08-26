interface SupabaseUser {
  id: string;
  email?: string;
  created_at?: string;
  updated_at?: string;
}

interface Profile {
  id: string;
  email?: string;
  name?: string;
  avatar_url?: string;
  created_at?: string;
  updated_at?: string;
}

interface MappedUser {
  id: string;
  email: string;
  name?: string;
  avatar_url?: string;
  created_at?: string;
  updated_at?: string;
}

export const mapProfileToUser = (user: SupabaseUser, profile: Profile): MappedUser => {
  return {
    id: user.id,
    email: profile.email || user.email || '',
    name: profile.name,
    avatar_url: profile.avatar_url,
    created_at: profile.created_at || user.created_at,
    updated_at: profile.updated_at || user.updated_at
  };
};