



>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba


>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

  email: string;
  ip_address?: string): Promise < SignupCheckResult> => {
  const reasons: string[] = [];

  const emailCheck = analyzeEmail(email),
  if (emailCheck && emailCheck.isSuspicious) {
    reasons && reasons.push(...emailCheck && emailCheck.reasons)

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

        reasons.push(`Multiple accounts (${recentSignups.length}) created from same IP in last 24 hours`)


// Signup checking functionality;
import { supabase } from '@/integrations/supabase/client',;
import { analyzeEmail } from './analyzeEmail',;
import { SignupCheckResult } from './types',;
/**;
 * Check for suspicious signup patterns;
 */;
export const checkSignupPatterns = async (;
  email: string,;
  ipAddress?: string;
): Promise<SignupCheckResult> => {;
  const reasons: string[] = [],;
  // Check email against suspicious patterns;
  const emailCheck = analyzeEmail(email),;
  if (emailCheck.isSuspicious) {;
    reasons.push(...emailCheck.reasons);
  }
;
  // If IP address is provided, check for rapid signups from same IP;
  if (ipAddress) {;
    try {;
      const { data: recentSignups, error } = await supabase;
        .from('profiles');
        .select('created_at');
        .eq('ip_address', ipAddress);
        .gte('created_at', new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString()) // Last 24 hours;
        .order('created_at', { ascending: false }),;
      if (!error && recentSignups && recentSignups.length >= 3) {;
        reasons.push(`Multiple accounts (${recentSignups.length}) created from same IP in last 24 hours`);





>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

      }
    } catch (error) {
      console && console.error('Error checking signup patterns:', error)
    }
  }
  return {

    isSuspicious: reasons && reasons.length > 0,

    reasons
  }
}
    reasons.push (...email_check.reasons);
  }
  // If IP address is provided, check for rapid signups from same IP;
  // Check condition
if ( {) {
  $2
}
    try {
      const { data: recent_signups, error } = await supabase;
        .from ('profiles');
        .select ('created_at');
        .eq ('ip_address', ip_address);
        .gte ('created_at', new Date (Date.now () - 24 * 60 * 60 * 1000).toISOString ()) // Last 24 hours;
        .order ('created_at', { ascending: false });
;
      // Check condition
if ( {) {
  $2
}
        reasons.push (`Multiple accounts (${recent_signups.length}) created from same IP in last 24 hours`);
      }
    } catch (error) {
      console.error ('Error checking signup patterns:', error);
    }
  }
  return {
    is_suspicious: reasons.length > 0,
    reasons;
  }
}
;

};
