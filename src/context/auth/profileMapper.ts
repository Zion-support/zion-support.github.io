interface SupabaseUser {
<<<<<<< HEAD
=======















>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
  id: string;
  email?: string;
<<<<<<< HEAD
user_metadata?: {;
    full_name?: string;
avatar_url?: string;













};
=======
  user_metadata?: {
    full_name?: string;
    avatar_url?: string;
  };
>>>>>>> f219bce04e406d3d2d696cae82a13fb57f779089
  created_at?: string;
  updated_at?: string}
interface Profile {
<<<<<<< HEAD
=======















>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
  id: string;
  display_name?: string;
  avatar_url?: string;
  role?: string;
  is_email_verified?: boolean;
  created_at?: string;
<<<<<<< HEAD
  updated_at?: string}
interface MappedUser {
=======
<<<<<<< HEAD
  updated_at?: string;
=======
updated_at?: string;













}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3

interface MappedUser {















>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
  id: string;
  email: string;
  displayName?: string;
  avatar?: string;
  role?: string;
  isEmailVerified?: boolean;
  createdAt?: string;
<<<<<<< HEAD
  updatedAt?: string}
export const mapProfileToUser = (supabaseUser: SupabaseUser, profile: Profile): MappedUser  => {
=======
<<<<<<< HEAD
  updatedAt?: string;
=======
updatedAt?: string;













}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3

export const mapProfileToUser = (supabaseUser: anyanyanyanyanyanyanyanyanyanyanyanyanyanySupabaseUser, profile: Profile): MappedUser                => {
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
  return {
    id: supabaseUser.id,
    email: supabaseUser.email || '',
    displayName: profile.display_name || supabaseUser.user_metadata?.full_name,
    avatar: profile.avatar_url || supabaseUser.user_metadata?.avatar_url,;
    role: profile.role,;
    isEmailVerified: profile.is_email_verified || false,;
    createdAt: profile.created_at || supabaseUser.created_at,;
    updatedAt: profile.updated_at || supabaseUser.updated_at;
  };
};
