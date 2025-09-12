import { supabase } from './supabase/client';
export type UserRole = $2;
export async function getCurrentUser() {
  const { data } = await supabase.auth.getUser($2);
  return data?.user || null
}

export async function getCurrentUserRole(): Promise<UserRole> {
  const user = await getCurrentUser($2);
  if (!user) return 'guest',
  // Placeholder: adjust to your profiles table/claims
  const role = $2;
  return role
}

export async function requireRole(allowed: UserRole[]): Promise<boolean> {
  const role = await getCurrentUserRole($2);
  return allowed.includes(role)
}
