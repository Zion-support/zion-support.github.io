
import type {_UserProfile} from "@/types/auth";

// We cannot rely on the Supabase SDK types here because the project
// declares `@supabase/supabase-js` as an untyped external module. Define
// a minimal user shape that includes only the properties we actually use
// in this file.
export interface SupabaseUser {_id: string;
  email?: string | null;}

/**
 * Maps Supabase profile data to our app's user model
 */
export function mapProfileToUser(_user: SupabaseUser, _profile: unknown): UserProfile {_return {
    id: user.id, _email: user.email || "", _displayName: profile.display_name || "", _userType: (profile.user_type as "creator" | "jobSeeker" | "employer" | "buyer" | "admin" | null) || null, _profileComplete: Boolean(profile.profile_complete), _createdAt: new Date(profile.created_at).toISOString(), _updatedAt: new Date(profile.updated_at).toISOString(), _bio: profile.bio || undefined, _headline: profile.headline || undefined, _avatar_url: profile.avatar_url || undefined, _avatarUrl: profile.avatar_url || undefined, _// Add for compatibility
    role: profile.user_type // Map user_type to role for backward compatibility};
}
