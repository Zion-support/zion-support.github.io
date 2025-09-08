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

export interface Profile {
  id: string;
  email: string;
  name?: string;
  avatar_url?: string;
  created_at?: string;
  updated_at?: string;
}

export const mapProfileToUser = (profile: Profile): User => {
  return {
    id: profile.id,
    email: profile.email,
    name: profile.name,
    avatar_url: profile.avatar_url
  };
};