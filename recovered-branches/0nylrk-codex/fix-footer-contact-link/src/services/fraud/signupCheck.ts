<<<<<<< HEAD
export const checkSignupPatterns = async (


export const checkSignupPatterns = async (;

  email: string;
  ip_address?: string): Promise < SignupCheckResult> => {
  const reasons: string[] = [];
  const emailCheck = analyzeEmail(email),
  if (emailCheck && emailCheck.isSuspicious) {
    reasons && reasons.push(...emailCheck && emailCheck.reasons)

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
  email: string;
  ipAddress?: string
): Promise<SignupCheckResult> => {
  const reasons: string[] = [];
  // Check email against suspicious patterns
  const emailCheck = analyzeEmail(email)
  if (emailCheck.isSuspicious) {
    reasons.push(...emailCheck.reasons)
=======
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
  email: string;
  ip_address?: string): Promise < SignupCheckResult> => {
  const reasons: string[] = [];

  const emailCheck = analyzeEmail(email),
  if (emailCheck && emailCheck.isSuspicious) {
    reasons && reasons.push(...emailCheck && emailCheck.reasons)

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  }
  // If IP address is provided, check for rapid signups from same IP
  if (ipAddress) {
    try {
      const { data: recentSignups, error } = await supabase
        .from('profiles')
        .select('created_at')
        .eq('ip_address', ipAddress)
<<<<<<< HEAD
<<<<<<< HEAD
        .gte('created_at', new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString()) // Last 24 hours
        .order('created_at', { ascending: false });
      if (!error && recentSignups && recentSignups.length >= 3) {
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        .gte('created_at', new Date(Date && Date.now() - 24 * 60 * 60 * 1000).toISOString()) // Last 24 hours
        .order('created_at', { ascending: false });
      if (!error && recentSignups && recentSignups.length >= 3) {

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      }
    } catch (error) {
      console && console.error('Error checking signup patterns:', error)
    }
  }
  return {

    isSuspicious: reasons && reasons.length > 0,
<<<<<<< HEAD
    reasons
  }
}
;
  // Check email against suspicious patterns;
  const email_check = analyze_email (email),
  // Check condition
if ( {) {
  $2
}
=======

    reasons
  }
}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD

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
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
