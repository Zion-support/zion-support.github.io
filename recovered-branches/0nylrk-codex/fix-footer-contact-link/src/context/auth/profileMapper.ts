<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/context/auth/profileMapper.ts


<<<<<<< HEAD
=======

import type { UserProfile } from "@/types/auth",


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======

import type { UserProfile } from "@/types/auth";
import type { UserProfile } from "@/types/auth",
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
// We cannot rely on the Supabase SDK types here because the project
// declares `@supabase/supabase-js` as an untyped external module. Define
// a minimal user shape that includes only the properties we actually use
// in this file.
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
export interface SupabaseUser {

  id: string,
  email?: string | null;
}
<<<<<<< HEAD
=======
export interface SupabaseUser {

  id: string

  email?: string | null
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
/**
 * Maps Supabase profile data to our app's user model
 */
export function mapProfileToUser(user: SupabaseUser, profile: any): UserProfile {
<<<<<<< HEAD
<<<<<<< HEAD

=======
========
<<<<<<< HEAD
import type { UserProfile } from "@/types / auth";
// We cannot rely on the Supabase SDK types here because the project;
// declares `@supabase / supabase - js` as an untyped external module. Define;
// a minimal user shape that includes only the properties we actually use;
// in this file.;
export interface SupabaseUser {
  id: string,
  email?: string | null;
}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/context/auth/profileMapper.ts
/**;
* Maps Supabase profile data to our app's user model;
*/;
export function mapProfileToUser (user: SupabaseUser, profile: any): UserProfile {
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/context/auth/profileMapper.ts

  return {

========
  return {
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/context/auth/profileMapper.ts
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/context/auth/profileMapper.ts

=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/context/auth/profileMapper.ts
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
  }
}
=======

<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/context/auth/profileMapper.ts
  return {

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
import type { UserProfile } from "@/types/auth",;
;
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
// We cannot rely on the Supabase SDK types here because the project;
// declares `@supabase/supabase-js` as an untyped external module. Define;
// a minimal user shape that includes only the properties we actually use;
// in this file.;
export interface SupabaseUser {;
<<<<<<< HEAD
  id:string,;
  email?:string | null;
=======
  id: string,;
  email?: string | null;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
}
;
/**;
 * Maps Supabase profile data to our app's user model;
 */;
<<<<<<< HEAD
export function mapProfileToUser(user:SupabaseUser, profile:any):UserProfile {;
  return {;
    id:user.id,;
    email:user.email || "",;
    displayName:profile.display_name || "",;
    userType:(profile.user_type as "creator" | "jobSeeker" | "employer" | "buyer" | "admin" | null) || null,;
    profileComplete:Boolean(profile.profile_complete),;
    createdAt:new Date(profile.created_at).toISOString(),;
    updatedAt:new Date(profile.updated_at).toISOString(),;
    bio:profile.bio || undefined,;
    headline:profile.headline || undefined,;
    avatar_url:profile.avatar_url || undefined,;
    avatarUrl:profile.avatar_url || undefined, // Add for compatibility;
    role:profile.user_type // Map user_type to role for backward compatibility;
  },;
} }
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/context/auth/profileMapper.ts
=======
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
  }
}
;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
