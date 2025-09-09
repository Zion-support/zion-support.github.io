interface SupabaseUser {
  id: string;
  email: string;
  user_metadata?: {
    name?: string;
    avatar_url?: string;
  };
}

interface Profile {
  id: string;
  name?: string;
  avatar?: string;
}

export const mapProfileToUser = (user: SupabaseUser, profile: Profile) => {
  return {
    id: user.id,
    email: user.email,
    name: profile.name || user.user_metadata?.name,
    avatar: profile.avatar || user.user_metadata?.avatar_url,
  };
};