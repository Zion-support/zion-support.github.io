type SupabaseUser = {



  id: string;
  email?: string;
user_metadata?: {
    full_name?: string;
    avatar_url?: string;
  


};
  created_at?: string;
  updated_at?: string;
}

type Profile = {



  id: string;
  display_name?: string;
  avatar_url?: string;
  role?: string;
  is_email_verified?: boolean;
  created_at?: string;
  updated_at?: string;



}

export interface MappedUser {



  id: string;
  email: string;
  displayName?: string;
  avatar?: string;
  role?: string;
  isEmailVerified?: boolean;
  createdAt?: string;
  updatedAt?: string;



}

export const mapProfileToUser = (supabaseUser: anySupabaseUser, profile: Profile): MappedUser    => {
  return {
    id: profile.id,
    email: profile.email,
    name: profile.name,
    avatar_url: profile.avatar_url
  };
};