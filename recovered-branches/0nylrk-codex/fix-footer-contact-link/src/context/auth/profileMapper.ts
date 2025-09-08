




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
