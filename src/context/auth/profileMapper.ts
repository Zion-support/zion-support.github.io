import { User } from './useAuthState';
export interface Profile {
  id: string;
  email: string;
  display_name?: string;
  created_at?: string;
  updated_at?: string;
  [key: string]: any;
}
export const mapProfileToUser = (supabaseUser: any, profile: Profile): User => {
  return {
    id: profile.id || supabaseUser.id,
    email: profile.email || supabaseUser.email,
    display_name: profile.display_name || supabaseUser.user_metadata?.display_name,
    created_at: profile.created_at || supabaseUser.created_at,
    updated_at: profile.updated_at || supabaseUser.updated_at
  };
};