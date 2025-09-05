
// Signup checking functionality
<<<<<<< HEAD
import { supabase } from '@/integrations/supabase/client',
import { analyzeEmail } from './analyzeEmail',
import { SignupCheckResult } from './types',
/**
 * Check for suspicious signup patterns
 */
export const checkSignupPatterns = async (
  email: string,
  ipAddress?: string
): Promise<SignupCheckResult> => {
  const reasons: string[] = [],
  
  // Check email against suspicious patterns
  const emailCheck = analyzeEmail(email),
  if (emailCheck.isSuspicious) {
    reasons.push(...emailCheck.reasons)
  }
=======

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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  
  // If IP address is provided, check for rapid signups from same IP
  if (ipAddress) {_try {
      const { data: recentSignups, _error} = await supabase
        .from('profiles')
        .select('created_at')
        .eq('ip_address', ipAddress)
        .gte('created_at', new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString()) // Last 24 hours
<<<<<<< HEAD
        .order('created_at', { ascending: false }),
      
      if (!error && recentSignups && recentSignups.length >= 3) {
        reasons.push(`Multiple accounts (${recentSignups.length}) created from same IP in last 24 hours`)
      }
    } catch (error) {
      console.error('Error checking signup patterns:', error)
    }
  }
  
  return {
    isSuspicious: reasons.length > 0,
    reasons
  }
},
=======
        .order('created_at', {_ascending: false});
      
      if (!error && recentSignups && recentSignups.length >= 3) {_reasons.push(`Multiple accounts (${recentSignups.length}) created from same IP in last 24 hours`);
      }
    } catch (error) {}
  }
  
  return {_isSuspicious: reasons.length > 0, _reasons};
};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
