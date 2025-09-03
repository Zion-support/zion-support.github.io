<<<<<<< HEAD
interface SupabaseUser {;
  id: string;
   email?: string;
   user_metadata?: { full_name?: string;
   avatar_url?: string} created_at?: string updated_at?: string} interface Profile {;
  id: string;
=======
interface SupabaseUser {id: string;
   email?: string;
   user_metadata?: {  full_name?: string
   avatar_url?: string} created_at?: string updated_at?: string} interface Profile {id: string;
>>>>>>> main
   display_name?: string;
   avatar_url?: string;
   role?: string;
   is_email_verified?: boolean;
   created_at?: string;
<<<<<<< HEAD
   updated_at?: string} interface MappedUser {;
  id: string;
<<<<<<< HEAD
   emai,
    l: string;
=======
=======
   updated_at?: string} interface MappedUser {id: string;
>>>>>>> main
   email: string;
>>>>>>> main
   displayName?: string;
   avatar?: string;
   role?: string;
   isEmailVerified?: boolean;
   createdAt?: string;
   updatedAt?: string}  export role: profile.role, isEmailVerified: profile.is_email_verified || false, createdAt: profile.created_at || supabaseUser.created_at, updatedAt: profile.updated_at || supabaseUser.updated_at}}
