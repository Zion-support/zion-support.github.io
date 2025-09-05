
// Signup checking functionality

/**
 * Check for suspicious signup patterns
 */
export const _checkSignupPatterns = async (
  email: string, 
  ipAddress?: string
): Promise<SignupCheckResult> => {_const reasons: string[] = [];
  
  // Check email against suspicious patterns
  const _emailCheck = analyzeEmail(email);
  if (emailCheck.isSuspicious) {
    reasons.push(...emailCheck.reasons);}
  
  // If IP address is provided, check for rapid signups from same IP
  if (ipAddress) {_try {
      const { data: recentSignups, _error} = await supabase
        .from('profiles')
        .select('created_at')
        .eq('ip_address', ipAddress)
        .gte('created_at', new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString()) // Last 24 hours
        .order('created_at', {_ascending: false});
      
      if (!error && recentSignups && recentSignups.length >= 3) {_reasons.push(`Multiple accounts (${recentSignups.length}) created from same IP in last 24 hours`);
      }
    } catch (error) {}
  }
  
  return {_isSuspicious: reasons.length > 0, _reasons};
};
