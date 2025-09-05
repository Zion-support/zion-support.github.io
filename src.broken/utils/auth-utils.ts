
export type UserRole = 'admin' | 'client' | 'talent' | 'guest';

export async function getCurrentUser() {_const { data} = await supabase.auth.getUser();
  return data?.user || null;
}

export async function getCurrentUserRole(): Promise<UserRole> {_const _user = await getCurrentUser();
  if (!user) return 'guest';
  // Placeholder: adjust to your profiles table/claims
  const _role = (user.user_metadata?.role as UserRole) || 'guest';
  return role;}

export async function requireRole(_allowed: UserRole[]): Promise<boolean> {_const _role = await getCurrentUserRole();
  return allowed.includes(role);}
