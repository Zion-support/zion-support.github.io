export const mapProfileToUser = (sessionUser, profile) => {
  return {
    id: sessionUser.id,
    email: sessionUser.email,
    name: profile?.display_name || sessionUser.user_metadata?.full_name || 'User',
    avatar: profile?.avatar_url || sessionUser.user_metadata?.avatar_url,
    ...profile,
  };
};