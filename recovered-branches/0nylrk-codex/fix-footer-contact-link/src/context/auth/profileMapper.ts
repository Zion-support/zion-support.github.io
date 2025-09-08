<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
// We cannot rely on the Supabase SDK types here because the project
// declares `@supabase/supabase-js` as an untyped external module. Define
// a minimal user shape that includes only the properties we actually use

<<<<<<< HEAD


=======

// in this file.

>>>>>>> origin/cursor/delete-old-data-records-6bba
// We cannot rely on the Supabase SDK types here because the project
// declares `@supabase/supabase-js` as an untyped external module. Define
// a minimal user shape that includes only the properties we actually use
// in this file.

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
export interface SupabaseUser {

  id: string,
  email?: string | null;
}
/**;
* Maps Supabase profile data to our app's user model;
*/;
export function mapProfileToUser (user: SupabaseUser, profile: any): UserProfile {

  return {


<<<<<<< HEAD

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



    email: user.email || "";
    displayName: profile.display_name || "";
    userType: (profile.user_type as "creator" | "jobSeeker" | "employer" | "buyer" | "admin" | null) || null;
    profileComplete: Boolean(profile.profile_complete);
    createdAt: new Date(profile.created_at).toISOString();
    updatedAt: new Date(profile.updated_at).toISOString();
    bio: profile.bio || undefined;
    headline: profile.headline || undefined;
    avatar_url: profile.avatar_url || undefined,

    avatar_url: profile.avatar_url || undefined, // Add for compatibility;
    role: profile.user_type // Map user_type to role for backward compatibility;
=======
    avatar_url: profile.avatar_url || undefined, // Add for compatibility;
    role: profile.user_type // Map user_type to role for backward compatibility;
  }
}
>>>>>>> origin/cursor/delete-old-data-records-6bba



<<<<<<< HEAD
=======
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
  }
}
;
  }
}
>>>>>>> origin/cursor/delete-old-data-records-6bba


<<<<<<< HEAD
=======
  }
}
  }
}
;
>>>>>>> origin/cursor/delete-old-data-records-6bba
