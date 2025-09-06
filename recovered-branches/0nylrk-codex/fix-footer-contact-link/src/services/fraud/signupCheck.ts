<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/services/fraud/signupCheck.ts

<<<<<<< HEAD

=======
========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/services/fraud/signupCheck.ts
// Signup checking functionality;
import {supabase} from '@/integrations / supabase / client';
import {analyze_email} from './analyze_email';
import {SignupCheckResult} from './types';
/**;
* Check for suspicious signup patterns;
*/;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/services/fraud/signupCheck.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/services/fraud/signupCheck.ts
export const checkSignupPatterns = async (
=======


export const checkSignupPatterns = async (;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  email: string;
  ip_address?: string): Promise < SignupCheckResult> => {
  const reasons: string[] = [];
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/services/fraud/signupCheck.ts

  const emailCheck = analyzeEmail(email),
  if (emailCheck && emailCheck.isSuspicious) {
    reasons && reasons.push(...emailCheck && emailCheck.reasons)

========
  const emailCheck = analyzeEmail(email),
  if (emailCheck && emailCheck.isSuspicious) {
    reasons && reasons.push(...emailCheck && emailCheck.reasons)
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/services/fraud/signupCheck.ts
=======

// Signup checking functionality
import { supabase  } from '@/integrations/supabase/client';
import { analyzeEmail  } from './analyzeEmail';
import { SignupCheckResult } from './types';
/**
 * Check for suspicious signup patterns
 */

export const checkSignupPatterns = async (
export const checkSignupPatterns = async (;
  email: string;
  ipAddress?: string
): Promise<SignupCheckResult> => {
  const reasons: string[] = [];
  // Check email against suspicious patterns
  const emailCheck = analyzeEmail(email)
  if (emailCheck.isSuspicious) {
    reasons.push(...emailCheck.reasons)
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  }
  // If IP address is provided, check for rapid signups from same IP
  if (ipAddress) {
    try {
      const { data: recentSignups, error } = await supabase
        .from('profiles')
        .select('created_at')
        .eq('ip_address', ipAddress)
<<<<<<< HEAD
        .gte('created_at', new Date(Date && Date.now() - 24 * 60 * 60 * 1000).toISOString()) // Last 24 hours
        .order('created_at', { ascending: false });
      if (!error && recentSignups && recentSignups.length >= 3) {

        reasons.push(`Multiple accounts (${recentSignups.length}) created from same IP in last 24 hours`)

=======
        .gte('created_at', new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString()) // Last 24 hours
        .order('created_at', { ascending: false });
      if (!error && recentSignups && recentSignups.length >= 3) {
        reasons.push(`Multiple accounts (${recentSignups.length}) created from same IP in last 24 hours`)
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD

<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      }
    } catch (error) {
      console && console.error('Error checking signup patterns:', error)
    }
  }
  return {
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/services/fraud/signupCheck.ts

    isSuspicious: reasons && reasons.length > 0,

    reasons
  }
<<<<<<< HEAD

=======

========
    isSuspicious: reasons && reasons.length > 0,
    reasons
  }
}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/services/fraud/signupCheck.ts
;
  // Check email against suspicious patterns;
  const email_check = analyze_email (email),
  // Check condition
if ( {) {
  $2
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/services/fraud/signupCheck.ts

=======

};

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
=======

// Signup checking functionality;
import { supabase } from '@/integrations/supabase/client',;
import { analyzeEmail } from './analyzeEmail',;
import { SignupCheckResult } from './types',;
;
/**;
 * Check for suspicious signup patterns;
 */;
export const checkSignupPatterns = async (;
  email:string,;
  ipAddress?:string;
):Promise<SignupCheckResult> => {;
  const reasons:string[] = [],;
  ;
  // Check email against suspicious patterns;
  const emailCheck = analyzeEmail(email),;
  if (emailCheck.isSuspicious) {;
    reasons.push(...emailCheck.reasons);
  }
  ;
  // If IP address is provided, check for rapid signups from same IP;
  if (ipAddress) {;
    try {;
      const { data:recentSignups, error } = await supabase;
        .from('profiles');
        .select('created_at');
        .eq('ip_address', ipAddress);
        .gte('created_at', new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString()) // Last 24 hours;
        .order('created_at', { ascending:false }),;
      ;
      if (!error && recentSignups && recentSignups.length >= 3) {;
        reasons.push(`Multiple accounts (${recentSignups.length}) created from same IP in last 24 hours`),;
      }
    } catch (error) {;
      console.error('Error checking signup patterns:', error),;
    }
  }
  ;
  return {;
    isSuspicious:reasons.length > 0,;
    reasons;
  },;
},; // Signup checking functionality // If IP address is provided, check for rapid signups from same IP if (ipAddress) {
  try {
  const {
  data: recentSignups, error 
}= await supabase .from ('profiles') .select ('created at') .eq ('ip address', ipAddress) .gte ('created at', new Date (Date.now () - 24 * 60 * 60 * 1000) .toISOString () ) // Last 24 hours 
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/services/fraud/signupCheck.ts
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      }
    } catch (error) {
      console.error('Error checking signup patterns:', error)
    }
  }
  return {
    isSuspicious: reasons.length > 0
    reasons
  }
}

};
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
