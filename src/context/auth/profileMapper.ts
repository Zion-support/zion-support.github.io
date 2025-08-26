interface User {
  id: string;
  email: string;
  name?: string;
  avatar?: string;
}

interface Profile {
  id: string;
  email: string;
  name?: string;
  avatar?: string;
}

export const mapProfileToUser = (user: any, profile: Profile): User => {
  return {
    id: profile.id || user.id,
    email: profile.email || user.email,
    name: profile.name || user.user_metadata?.full_name || user.email?.split('@')[0],
    avatar: profile.avatar || user.user_metadata?.avatar_url,
  };
};