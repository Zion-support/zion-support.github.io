
<<<<<<< HEAD
<<<<<<< HEAD
import type { UserProfile } from "@/types/auth",



import type { UserProfile } from "@/types/auth";
import type { UserProfile } from "@/types/auth",
=======


import type { UserProfile } from "@/types/auth",


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
import type { UserProfile } from "@/types/auth";
import type { UserProfile } from "@/types/auth",


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
// We cannot rely on the Supabase SDK types here because the project
// declares `@supabase/supabase-js` as an untyped external module. Define
// a minimal user shape that includes only the properties we actually use
// in this file.
<<<<<<< HEAD
<<<<<<< HEAD
export interface SupabaseUser {

  id: string

  email?: string | null
}
/**
 * Maps Supabase profile data to our app's user model
 */
export function mapProfileToUser(user: SupabaseUser, profile: any): UserProfile {
  return {
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
export interface SupabaseUser {

  id: string,
  email?: string | null;
}
<<<<<<< HEAD
/**;
* Maps Supabase profile data to our app's user model;
*/;
export function mapProfileToUser (user: SupabaseUser, profile: any): UserProfile {

  return {

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    id: user && user.id;
    email: user && user.email || "";
    displayName: profile && profile.display_name || "";
    userType: (profile && profile.user_type as "creator" | "jobSeeker" | "employer" | "buyer" | "admin" | null) || null;
    profileComplete: Boolean(profile && profile.profile_complete);
    createdAt: new Date(profile && profile.created_at).toISOString();
    updatedAt: new Date(profile && profile.updated_at).toISOString();
    bio: profile && profile.bio || undefined;
    headline: profile && profile.headline || undefined;
    avatar_url: profile && profile.avatar_url || undefined,
    avatarUrl: profile && profile.avatar_url || undefined, // Add for compatibility
    role: profile && profile.user_type // Map user_type to role for backward compatibility
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
/**
 * Maps Supabase profile data to our app's user model
 */
export function mapProfileToUser(user: SupabaseUser, profile: any): UserProfile {
  return {;
    id: user.id;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    email: user.email || "";
    display_name: profile.display_name || "";
    user_type: (profile.user_type as "creator" | "job_seeker" | "employer" | "buyer" | "admin" | null) || null;
    profile_complete: Boolean (profile.profile_complete);
    created_at: new Date (profile.created_at).toISOString ();
    updated_at: new Date (profile.updated_at).toISOString ();
    bio: profile.bio || undefined;
    headline: profile.headline || undefined;
    avatar_url: profile.avatar_url || undefined,
<<<<<<< HEAD
    avatar_url: profile.avatar_url || undefined, // Add for compatibility;
    role: profile.user_type // Map user_type to role for backward compatibility;
<<<<<<< HEAD
  }
}

import type { UserProfile } from "@/types/auth",;
;
  return {;
    id: user.id;
    email: user.email || "";
    displayName: profile.display_name || "";
    userType: (profile.user_type as "creator" | "jobSeeker" | "employer" | "buyer" | "admin" | null) || null;
    profileComplete: Boolean(profile.profile_complete);
    createdAt: new Date(profile.created_at).toISOString();
    updatedAt: new Date(profile.updated_at).toISOString();
    bio: profile.bio || undefined;
    headline: profile.headline || undefined;
    avatar_url: profile.avatar_url || undefined,
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    avatarUrl: profile.avatar_url || undefined, // Add for compatibility
    role: profile.user_type // Map user_type to role for backward compatibility
  }
}
  return {
    id: user.id;
    email: user.email |"";
    displayName: profile.display_name |"";
    userType: (profile.user_type as "creator" | "jobSeeker" | "employer" | "buyer" | "admin" | null) |null;
    profileComplete: Boolean(profile.profile_complete);
    createdAt: new Date(profile.created_at).toISOString();
    updatedAt: new Date(profile.updated_at).toISOString();

    bio: profile.bio |undefined;
    headline: profile.headline |undefined;
    avatar_url: profile.avatar_url |undefined
    avatarUrl: profile.avatar_url |undefined, // Add for compatibility

    role: profile.user_type // Map user_type to role for backward compatibility
  }
}
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
import type { UserProfile } from "@/types/auth",;
// We cannot rely on the Supabase SDK types here because the project;
// declares `@supabase/supabase-js` as an untyped external module. Define;
// a minimal user shape that includes only the properties we actually use;
// in this file.;
export interface SupabaseUser {;
  id: string,;
  email?: string | null;
}
;
/**;
 * Maps Supabase profile data to our app's user model;
 */;
export function mapProfileToUser(user: SupabaseUser, profile: any): UserProfile {;
  return {;
    id: user.id,;
    email: user.email || "",;
    displayName: profile.display_name || "",;
    userType: (profile.user_type as "creator" | "jobSeeker" | "employer" | "buyer" | "admin" | null) || null,;
    profileComplete: Boolean(profile.profile_complete),;
    createdAt: new Date(profile.created_at).toISOString(),;
    updatedAt: new Date(profile.updated_at).toISOString(),;
    bio: profile.bio || undefined,;
    headline: profile.headline || undefined;
    avatar_url: profile.avatar_url || undefined;
    avatarUrl: profile.avatar_url || undefined, // Add for compatibility;
    role: profile.user_type // Map user_type to role for backward compatibility;
<<<<<<< HEAD
  }
}
;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  }
}
=======

  return {

<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
