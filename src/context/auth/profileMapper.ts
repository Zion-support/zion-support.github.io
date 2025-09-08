import { User } from './AuthContext';

export const mapProfileToUser = (sessionUser: any, profile: any): User => {
  return {
    id: sessionUser.id,
    email: sessionUser.email || '',
    display_name: profile?.display_name || profile?.full_name || '',
    avatar_url: profile?.avatar_url || profile?.profile_image || '',
    created_at: profile?.created_at || sessionUser.created_at,
    updated_at: profile?.updated_at || sessionUser.updated_at,
    onboarding_step: profile?.onboarding_step || 0
  };
};