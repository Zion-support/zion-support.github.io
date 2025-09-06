 // talent fields profile complete?: boolean;
skills added?: boolean;
availability set?: boolean;
first job applied?: boolean;
// client fields 
}catch {
  
}return null 
}export async function fetchOnboardingProgress (userId: string, role: 'talent' | 'client') : Promise<OnboardingRecord | null> {
  try {
  const {
  data, error 
}= await supabase .from ('onboarding progress') .select ('*') .eq ('user id', userId) .eq ('role', role) .maybeSingle ();
}