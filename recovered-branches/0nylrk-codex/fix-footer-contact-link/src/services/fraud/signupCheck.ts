
// Signup checking functionality
import { supabase  } from '@/integrations/supabase/client';
import { analyzeEmail  } from './analyzeEmail';
import { SignupCheckResult } from './types';
/**
 * Check for suspicious signup patterns
 */

export const checkSignupPatterns = async (
  email: string;
  ipAddress?: string
): Promise<SignupCheckResult> => {
  const reasons: string[] = [];
  // Check email against suspicious patterns
<<<<<<< HEAD
  const emailCheck = analyzeEmail(email)
  if (emailCheck.isSuspicious) {
    reasons.push(...emailCheck.reasons)
=======
  const emailCheck = analyzeEmail(email),
  if (emailCheck && emailCheck.isSuspicious) {
    reasons && reasons.push(...emailCheck && emailCheck.reasons)
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  }
  // If IP address is provided, check for rapid signups from same IP
  if (ipAddress) {
    try {
      const { data: recentSignups, error } = await supabase
        .from('profiles')
        .select('created_at')
        .eq('ip_address', ipAddress)
        .gte('created_at', new Date(Date && Date.now() - 24 * 60 * 60 * 1000).toISOString()) // Last 24 hours
        .order('created_at', { ascending: false });
      if (!error && recentSignups && recentSignups.length >= 3) {
        reasons && reasons.push(`Multiple accounts (${recentSignups.length}) created from same IP in last 24 hours`)
      }
    } catch (error) {
      console && console.error('Error checking signup patterns:', error)
    }
  }
  return {
<<<<<<< HEAD
    isSuspicious: reasons.length > 0
=======
    isSuspicious: reasons && reasons.length > 0,
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    reasons
  }
}

