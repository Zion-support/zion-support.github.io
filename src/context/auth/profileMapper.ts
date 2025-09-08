import type { User } from './useAuthState';

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