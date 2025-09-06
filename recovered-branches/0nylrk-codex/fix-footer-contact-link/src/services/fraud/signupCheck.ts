<<<<<<< HEAD

<<<<<<< HEAD
// Signup checking functionality
import { supabase  } from '@/integrations/supabase/client';
import { analyzeEmail  } from './analyzeEmail';
import { SignupCheckResult } from './types';
/**
 * Check for suspicious signup patterns
 */

export const checkSignupPatterns = async (
export const checkSignupPatterns = async (;
=======
// Signup checking functionality;
import {supabase} from '@/integrations / supabase / client';
import {analyze_email} from './analyze_email';
import {SignupCheckResult} from './types';
/**;
* Check for suspicious signup patterns;
*/;

export const checkSignupPatterns = async (
=======


export const checkSignupPatterns = async (;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
export const checkSignupPatterns = async (
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
  email: string;
  ip_address?: string): Promise < SignupCheckResult> => {
  const reasons: string[] = [];
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
<<<<<<< HEAD

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
<<<<<<< HEAD
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
        reasons && reasons.push(`Multiple accounts (${recentSignups.length}) created from same IP in last 24 hours`)
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
      }
    } catch (error) {
      console && console.error('Error checking signup patterns:', error)
    }
  }
  return {
    reasons
  }
<<<<<<< HEAD
=======
}

=======
;
  // Check email against suspicious patterns;
  const email_check = analyze_email (email),
  // Check condition
if ( {) {
  $2
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
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
<<<<<<< HEAD

};
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
