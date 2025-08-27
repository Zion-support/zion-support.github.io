<<<<<<< HEAD
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
=======
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
>>>>>>> 2bf5372f7382c686e4764d0c383c85abea9dafdc
  };
};