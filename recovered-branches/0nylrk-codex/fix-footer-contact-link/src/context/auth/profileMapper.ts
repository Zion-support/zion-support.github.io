
<<<<<<< HEAD
<<<<<<< HEAD
import type { UserProfile } from "@/types/auth",
=======
import type { UserProfile } from &quot;@/types/auth&quot;;
=======
import type {_UserProfile} from "@/types/auth";
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
// We cannot rely on the Supabase SDK types here because the project
// declares `@supabase/supabase-js` as an untyped external module. Define
// a minimal user shape that includes only the properties we actually use
// in this file.
<<<<<<< HEAD
export interface SupabaseUser {
  id: string,
  email?: string | null
}
=======
export interface SupabaseUser {_id: string;
  email?: string | null;}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

/**
 * Maps Supabase profile data to our app's user model
 */
<<<<<<< HEAD
export function mapProfileToUser(user: SupabaseUser, profile: any): UserProfile {
  return {
    id: user.id,
    email: user.email || "&quot;,
    displayName: profile.display_name || "&quot;,
    userType: (profile.user_type as &quot;creator&quot; | &quot;jobSeeker&quot; | &quot;employer&quot; | &quot;buyer&quot; | &quot;admin&quot; | null) || null,
    profileComplete: Boolean(profile.profile_complete),
    createdAt: new Date(profile.created_at).toISOString(),
    updatedAt: new Date(profile.updated_at).toISOString(),
    bio: profile.bio || undefined,
    headline: profile.headline || undefined,
    avatar_url: profile.avatar_url || undefined,
    avatarUrl: profile.avatar_url || undefined, // Add for compatibility
    role: profile.user_type // Map user_type to role for backward compatibility
  }
=======
export function mapProfileToUser(_user: SupabaseUser, _profile: unknown): UserProfile {_return {
    id: user.id, _email: user.email || "", _displayName: profile.display_name || "", _userType: (profile.user_type as "creator" | "jobSeeker" | "employer" | "buyer" | "admin" | null) || null, _profileComplete: Boolean(profile.profile_complete), _createdAt: new Date(profile.created_at).toISOString(), _updatedAt: new Date(profile.updated_at).toISOString(), _bio: profile.bio || undefined, _headline: profile.headline || undefined, _avatar_url: profile.avatar_url || undefined, _avatarUrl: profile.avatar_url || undefined, _// Add for compatibility
    role: profile.user_type // Map user_type to role for backward compatibility};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
}
