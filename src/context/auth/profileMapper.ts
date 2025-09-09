
import type { UserProfile } from "@/types/auth";

// We cannot rely on the Supabase SDK types here because the project
// declares `@supabase/supabase-js` as an untyped external module. Define
// a minimal user shape that includes only the properties we actually use
// in this file.
export interface SupabaseUser {
  id: string;
  email?: string | null;
  email_confirmed_at?: string | null; // Added email_confirmed_at
}

/**
 * Maps Supabase profile data to our app's user model
 */
const userTypeMap = {
  creator: 'talent' as "talent",
  jobSeeker: 'talent' as "talent",
  employer: 'client' as "client",
  buyer: 'client' as "client",
  admin: 'admin' as "admin",
  null: null as null,
};

export function mapProfileToUser(user: SupabaseUser, profile: any): UserProfile {
  const userType = profile.user_type ? userTypeMap[profile.user_type as keyof typeof userTypeMap] : null;
  return {
    id: user.id,
    email: user.email || "",
    displayName: profile.display_name || "",
    userType: (profile.user_type as "creator" | "jobSeeker" | "employer" | "buyer" | "admin") || "buyer", // Default to "buyer"
    profileComplete: Boolean(profile.profile_complete),
    createdAt: new Date(profile.created_at).toISOString(),
    updatedAt: new Date(profile.updated_at).toISOString(),
    bio: profile.bio || undefined,
    headline: profile.headline || undefined,
    avatar_url: profile.avatar_url || undefined,
    avatarUrl: profile.avatar_url || undefined, // Add for compatibility
    role: profile.user_type || undefined, // Ensure null becomes undefined
    points: profile.points ?? 0,
    emailVerified: !!user.email_confirmed_at, // Map email_confirmed_at
  };
}
