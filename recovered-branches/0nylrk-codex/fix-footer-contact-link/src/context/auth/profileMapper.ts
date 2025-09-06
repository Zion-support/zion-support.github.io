import type { UserProfile } from "@/types / auth";
// We cannot rely on the Supabase SDK types here because the project;
// declares `@supabase / supabase - js` as an untyped external module. Define;
// a minimal user shape that includes only the properties we actually use;
// in this file.;
export interface SupabaseUser {
  return {
=======
    email: user.email || "";
    display_name: profile.display_name || "";
    user_type: (profile.user_type as "creator" | "job_seeker" | "employer" | "buyer" | "admin" | null) || null;
    profile_complete: Boolean (profile.profile_complete);
    created_at: new Date (profile.created_at).toISOString ();
    updated_at: new Date (profile.updated_at).toISOString ();
    bio: profile.bio || undefined;
    headline: profile.headline || undefined;
    avatar_url: profile.avatar_url || undefined,
    avatar_url: profile.avatar_url || undefined, // Add for compatibility;
    role: profile.user_type // Map user_type to role for backward compatibility;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  }
}