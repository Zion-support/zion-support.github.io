interface SupabaseUser {
  id: string;
  email?: string;
user_metadata?: {

    full_name?: string;
    avatar_url?: string
};
  created_at?: string;
  updated_at?: string}

interface Profile {
  id: string;
  display_name?: string;
  avatar_url?: string;
  role?: string;
  is_email_verified?: boolean;
  created_at?: string;
  updated_at?: string
}

/**
 * Maps Supabase profile data to our app's user model
 */
export function mapProfileToUser(user: SupabaseUser, profile: any): UserProfile {
  return {
    id: user.id,
    email: user.email || "",
    displayName: profile.display_name || "",
    userType: (profile.user_type as "creator" | "jobSeeker" | "employer" | "buyer" | "admin" | null) || null,
    profileComplete: Boolean(profile.profile_complete),
    createdAt: new Date(profile.created_at).toISOString(),
    updatedAt: new Date(profile.updated_at).toISOString(),
    bio: profile.bio || undefined,
    headline: profile.headline || undefined,
    avatar_url: profile.avatar_url || undefined,
    avatarUrl: profile.avatar_url || undefined, // Add for compatibility
    role: profile.user_type // Map user_type to role for backward compatibility
  };
}
;
export 
    role: profile.role,;
    isEmailVerified: profile.is_email_verified || false,;
    createdAt: profile.created_at || supabaseUser.created_at,;
    updatedAt: profile.updated_at || supabaseUser.updated_at}};
