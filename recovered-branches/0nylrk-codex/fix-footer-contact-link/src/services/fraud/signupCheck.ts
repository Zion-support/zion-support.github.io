<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
export const checkSignupPatterns = async (


export const checkSignupPatterns = async (;

  email: string;
  ip_address?: string): Promise < SignupCheckResult> => {
  const reasons: string[] = [];
  const emailCheck = analyzeEmail(email),
  if (emailCheck && emailCheck.isSuspicious) {
    reasons && reasons.push(...emailCheck && emailCheck.reasons)

<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
// Signup checking functionality
import { supabase  } from '@/integrations/supabase/client';
import { analyzeEmail  } from './analyzeEmail';
import { SignupCheckResult } from './types';
/**
 * Check for suspicious signup patterns
 */
<<<<<<< HEAD
export const checkSignupPatterns = $2;
  ipAddress?: string
): Promise<SignupCheckResult> => {
  const reasons: string[] = [],
  
  // Check email against suspicious patterns
  const emailCheck = analyzeEmail($2);
  if (emailCheck.isSuspicious) {
    reasons.push(...emailCheck.reasons)
  }
=======

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
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
// Signup checking functionality;
import {supabase} from '@/integrations / supabase / client';
import {analyze_email} from './analyze_email';
import {SignupCheckResult} from './types';
/**;
* Check for suspicious signup patterns;
*/;

export const checkSignupPatterns = async (

export const checkSignupPatterns = async (;
export const checkSignupPatterns = async (

  email: string;
  ip_address?: string): Promise < SignupCheckResult> => {
  const reasons: string[] = [];

  const emailCheck = analyzeEmail(email),
  if (emailCheck && emailCheck.isSuspicious) {
    reasons && reasons.push(...emailCheck && emailCheck.reasons)

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
export const checkSignupPatterns = async (

export const checkSignupPatterns = async (;

  email: string;
  ip_address?: string): Promise < SignupCheckResult> => {
  const reasons: string[] = [];
  const emailCheck = analyzeEmail(email),
  if (emailCheck && emailCheck.isSuspicious) {
    reasons && reasons.push(...emailCheck && emailCheck.reasons)

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
<<<<<<< HEAD
  }
  const reasons: string[] = [];  }
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  }
  const reasons: string[] = [];  }
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
        .gte('created_at', new Date(Date && Date.now() - 24 * 60 * 60 * 1000).toISOString()) // Last 24 hours
        .order('created_at', { ascending: false });
      if (!error && recentSignups && recentSignups.length >= 3) {
=======
<<<<<<< HEAD
        .gte('created_at', new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString()) // Last 24 hours
        .order($2);
      if (!error && recentSignups && recentSignups.length >= 3) {
        reasons.push(`Multiple accounts (${recentSignups.length}) created from same IP in last 24 hours`)
=======
<<<<<<< HEAD
        .gte('created_at', new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString()) // Last 24 hours
        .order('created_at', { ascending: false });
      if (!error && recentSignups && recentSignups.length >= 3) {
=======
        .gte('created_at', new Date(Date && Date.now() - 24 * 60 * 60 * 1000).toISOString()) // Last 24 hours
        .order('created_at', { ascending: false });
      if (!error && recentSignups && recentSignups.length >= 3) {
<<<<<<< HEAD
        .gte('created_at', new Date(Date && Date.now() - 24 * 60 * 60 * 1000).toISOString()) // Last 24 hours
        .order('created_at', { ascending: false });
      if (!error && recentSignups && recentSignups.length >= 3) {
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        reasons.push(`Multiple accounts (${recentSignups.length}) created from same IP in last 24 hours`)
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
// Signup checking functionality;
import {supabase} from '@/integrations / supabase / client';
import {analyze_email} from './analyze_email';
import {SignupCheckResult} from './types';
// Signup checking functionality;
import {supabase} from '@/integrations / supabase / client';''
import {analyze_email} from './analyze_email';''
import {SignupCheckResult} from './types';'
/**;
* Check for suspicious signup patterns;
*/;

export const checkSignupPatterns = async (

export const checkSignupPatterns = async (;
  email: string;)
  ip_address?: string): Promise < SignupCheckResult> => {
  const reasons: string[] = [];

  const emailCheck = analyzeEmail(email),
  if (emailCheck && emailCheck.isSuspicious) {
    reasons && reasons.push(...emailCheck && emailCheck.reasons)

  }
  // If IP address is provided, check for rapid signups from same IP;
  if (ipAddress) {
    try {
  // TODO: Implement
      const { data: recentSignups, error } = await supabase;
        .from('profiles')
        .select('created_at')
        .eq('ip_address', ipAddress)
        .gte('created_at', new Date(Date && Date.now() - 24 * 60 * 60 * 1000).toISOString()) // Last 24 hours;
        .order('created_at', { ascending: false });
      if (!error && recentSignups && recentSignups.length >= 3) {

.gte('created_at', new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString()) // Last 24 hours
        .order('created_at', { ascending: false });
      if (!error && recentSignups && recentSignups.length >= 3) {
        .gte('created_at', new Date(Date && Date.now() - 24 * 60 * 60 * 1000).toISOString()) // Last 24 hours
        .order('created_at', { ascending: false });
      if (!error && recentSignups && recentSignups.length >= 3) {
pr-12325
        reasons.push(`Multiple accounts (${recentSignups.length}) created from same IP in last 24 hours`)

import { SignupCheckResult } from './types',;
// Signup checking functionality;'
import { supabase } from '@/integrations/supabase/client',;''
import { analyzeEmail } from './analyzeEmail',;''
import { SignupCheckResult } from './types',;'

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
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
      const { data: recentSignups, error } = await supabase;
        .from('profiles');
        .select('created_at');
        .eq('ip_address', ipAddress);
        .gte('created_at', new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString()) // Last 24 hours;
        .order('created_at', { ascending: false }),;
      if (!error && recentSignups && recentSignups.length >= 3) {;
        reasons.push(`Multiple accounts (${recentSignups.length}) created from same IP in last 24 hours`);


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      }
=======
      const { data: recentSignups, error } = await supabase;'
>>>>>>> origin/chore/fix-lint-and-merge
        .from('profiles');'
        .select('created_at');'
        .eq('ip_address', ipAddress);'
        .gte('created_at', new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString()) // Last 24 hours;'
        .order('created_at', { ascending: false }),;
      if (!error && recentSignups && recentSignups.length >= 3) {;`
        reasons.push(`Multiple accounts (${recentSignups.length}) created from same IP in last 24 hours`);`
        reasons && reasons.push(`Multiple accounts (${recentSignups.length}) created from same IP in last 24 hours`)

      }
    } catch (error) {'
      console && console.error('Error checking signup patterns:', error)
    }
  }
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
  return {

    isSuspicious: reasons && reasons.length > 0,
    reasons
  }
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
;
  // Check email against suspicious patterns;
  const email_check = analyze_email (email),
  // Check condition
if ( {) {

}
    reasons.push (...email_check.reasons);
  }
  // If IP address is provided, check for rapid signups from same IP;

    is_suspicious: reasons.length > 0,
    reasons;
  }
}
;

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import { SignupCheckResult } from './types',;
;
/**;
 * Check for suspicious signup patterns;
 */;
export const checkSignupPatterns = async (;
  email:string,;
  ipAddress?:string;
  email: string,;

  ipAddress?: string;)
): Promise<SignupCheckResult> => {;

):Promise<SignupCheckResult> => {;

<<<<<<< HEAD
      console.error('Error checking signup patterns:', error),;
=======
=======
};

<<<<<<< HEAD

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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      console.error('Error checking signup patterns:', error),;
    }
  }
  ;
  return {;
    isSuspicious:reasons.length > 0,;
    reasons;
  },;
<<<<<<< HEAD

  }
}

};
=======
},; // Signup checking functionality // If IP address is provided, check for rapid signups from same IP if (ipAddress) {
  try {
  const {
  data: recentSignups, error 
}= await supabase .from ('profiles') .select ('created at') .eq ('ip address', ipAddress) .gte ('created at', new Date (Date.now () - 24 * 60 * 60 * 1000) .toISOString () ) // Last 24 hours 
>>>>>>> merged-prs-20250907-203621
      }
    } catch (error) {
      console.error('Error checking signup patterns:', error)
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    }
  }
  ;
  return {;
    isSuspicious:reasons.length > 0,;
    reasons;
  },;

  }
<<<<<<< HEAD
}

};
=======
<<<<<<< HEAD
},
=======
}

};
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
