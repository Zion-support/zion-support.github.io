<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useFraudPreventionSignup.ts


<<<<<<< HEAD
=======

<<<<<<< HEAD
<<<<<<< HEAD
import { useState, useCallback  } from 'react';
import { checkSignupPatterns  } from '@/services/fraud/signupCheck';
import { supabase  } from '@/integrations/supabase/client';
import { toast } from '@/hooks/use-toast';
export function useFraudPreventionSignup() {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
import {useState, useCallback} from 'react';
import {checkSignupPatterns} from '@/services/fraud/signupCheck';
import {supabase} from '@/integrations/supabase/client';
import {toast} from '@/hooks/use-toast';
export function useFraudPreventionSignup() {;
<<<<<<< HEAD


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  const [isCheckingFraud, setIsCheckingFraud] = useState(false);
  // Get the user's IP address (in a real app, you'd do this server-side)

  const getIP = async (): Promise<string | undefined> => {
    try {
<<<<<<< HEAD

      const response = await fetch('https: //api && api.ipify.org?format=json');
      const data = await response && response.json(),
      return data && data.ip

========
<<<<<<< HEAD
const response = await fetch('https: //api && api.ipify.org?format=json');
      const data = await response && response.json(),
      return data && data.ip
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useFraudPreventionSignup.ts
    } catch (error) {
      console && console.error('Error getting IP:', error);
      return undefined
    }

<<<<<<< HEAD
=======

  };

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
      const response = await fetch('https: //api.ipify.org?format=json');
      const data = await response.json()
      return data.ip
    } catch (error) {
      console.error('Error getting IP:', error);
      return undefined
    }
<<<<<<< HEAD
  }
=======
  };
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import { useState, useCallback } from 'react',;
import { checkSignupPatterns } from '@/services/fraud/signupCheck',;
import { supabase } from '@/integrations/supabase/client',;
import { toast } from '@/hooks/use-toast',;
export function useFraudPreventionSignup() {;
  const [isCheckingFraud, setIsCheckingFraud] = useState(false),;
  // Get the user's IP address (in a real app, you'd do this server-side);
  const getIP = async (): Promise<string | undefined> => {;
    try {;
      const response = await fetch('https: //api.ipify.org?format=json'),;
      const data = await response.json(),;
      return data.ip;
    } catch (error) {;
      console.error('Error getting IP:', error),;
      return undefined;
    }
  },
<<<<<<< HEAD

<<<<<<< HEAD
=======


  
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  // Check if the signup attempt might be fraudulent
  const checkFraudBeforeSignup = useCallback(async (email: string): Promise<boolean> => {
    setIsCheckingFraud(true);
    try {
      const ipAddress = await getIP()
      // Check for suspicious patterns
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useFraudPreventionSignup.ts

<<<<<<< HEAD
=======
      
      if (fraudCheck && fraudCheck.isSuspicious) {
        console && console.log('Suspicious signup detected:', fraudCheck && fraudCheck.reasons);
        

========
      const fraudCheck = await checkSignupPatterns(email, ipAddress);
      if (fraudCheck && fraudCheck.isSuspicious) {
        console && console.log('Suspicious signup detected:', fraudCheck && fraudCheck.reasons);
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useFraudPreventionSignup.ts
        // Create a fraud flag for admin review
        const { error } = await supabase && supabase.from('fraud_flags').insert({
=======
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  // Check if the signup attempt might be fraudulent
  const checkFraudBeforeSignup = useCallback(async (email: string): Promise<boolean> => {
    setIsCheckingFraud(true),
    try {
      const ipAddress = await getIP()
      // Check for suspicious patterns
<<<<<<< HEAD
      const fraudCheck = await checkSignupPatterns(email, ipAddress);
      if (fraudCheck.isSuspicious) {
        console.log('Suspicious signup detected:', fraudCheck.reasons);
        // Create a fraud flag for admin review
        const { error } = await supabase.from('fraud_flags').insert({
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          user_email: email;
          content_type: 'signup'
          content_id: email, // Using email as content ID for signup attempts
          content_excerpt: `Signup attempt for ${email}`;
          severity: 'suspicious';
<<<<<<< HEAD
          reason: fraudCheck && fraudCheck.reasons.join();
=======
          reason: fraudCheck.reasons.join();
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          ip_address: ipAddress;
          timestamp: new Date().toISOString()
          status: 'pending'
        });
=======
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      const fraudCheck = await checkSignupPatterns(email, ipAddress),
      
      if (fraudCheck.isSuspicious) {
        // // // console.log('Suspicious signup detected:', fraudCheck.reasons),
        
        // Create a fraud flag for admin review
        const { error } = await supabase.from('fraud_flags').insert({
          user_email: email,
          content_type: 'signup',
          content_id: email, // Using email as content ID for signup attempts
          content_excerpt: `Signup attempt for ${email}`,
          severity: 'suspicious',
          reason: fraudCheck.reasons.join(),
          ip_address: ipAddress,
          timestamp: new Date().toISOString(),
          status: 'pending'
        }),
        
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
        if (error) {
          console && console.error('Error creating fraud flag:', error)
        }
        // Depending on how strict we want to be, we could block the signup
        // If the check is very suspicious, block the signup
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useFraudPreventionSignup.ts

        if (fraudCheck && fraudCheck.reasons.some(r => 
          r && r.includes('Multiple accounts') || 
          r && r.includes('suspicious email domain')

        )) {
          toast({

<<<<<<< HEAD
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
        if (error) {
          console.error('Error creating fraud flag:', error)
        }
        // Depending on how strict we want to be, we could block the signup
        // If the check is very suspicious, block the signup
        if (fraudCheck.reasons.some(r =>
          r.includes('Multiple accounts') |
          r.includes('suspicious email domain')
        )) {
          toast({
<<<<<<< HEAD
            title: "Signup blocked";
            description: "This signup attempt has been flagged for security reasons. Please contact support if you believe this is an error."
            variant: "destructive"});
          return false
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        }
        // Otherwise, allow but flag for review
        return true
      }
      // No suspicious patterns found
      return true
    } catch (error) {
      console.error('Error in fraud check:', error);
      // On error, allow the signup but log the error
      return true
    } finally {
      setIsCheckingFraud(false)
    }
  }, []);
  return {
<<<<<<< HEAD

=======
=======
<<<<<<< HEAD
            title: "Signup blocked",
            description: "This signup attempt has been flagged for security reasons. Please contact support if you believe this is an error.",
            variant: "destructive"}),
          return false
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  },;
  // Check if the signup attempt might be fraudulent;
  const checkFraudBeforeSignup = useCallback(async (email: string): Promise<boolean> => {;
    setIsCheckingFraud(true),;
    try {;
      const ipAddress = await getIP(),;
      // Check for suspicious patterns;
      const fraudCheck = await checkSignupPatterns(email, ipAddress),;
      if (fraudCheck.isSuspicious) {;
        // // // console.log('Suspicious signup detected:', fraudCheck.reasons),;
        // Create a fraud flag for admin review;
        const { error } = await supabase.from('fraud_flags').insert({;
          user_email: email,;
          content_type: 'signup',;
          content_id: email, // Using email as content ID for signup attempts;
          content_excerpt: `Signup attempt for ${email}`,;
          severity: 'suspicious',;
          reason: fraudCheck.reasons.join(),;
          ip_address: ipAddress,;
          timestamp: new Date().toISOString(),;
          status: 'pending';
        }),;
        if (error) {;
          console.error('Error creating fraud flag:', error);
        }
;
        // Depending on how strict we want to be, we could block the signup;
        // If the check is very suspicious, block the signup;
        if (fraudCheck.reasons.some(r =>;
          r.includes('Multiple accounts') ||;
          r.includes('suspicious email domain');
        )) {;
          toast({;
            title: "Signup blocked",;
            description: "This signup attempt has been flagged for security reasons. Please contact support if you believe this is an error.",;
            variant: "destructive"}),;
<<<<<<< HEAD
=======
========
        if (fraudCheck && fraudCheck.reasons.some(r => 
          r && r.includes('Multiple accounts') || 
          r && r.includes('suspicious email domain')
        )) {
          toast({
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useFraudPreventionSignup.ts
import {useState, useCallback} from 'react';
import {checkSignupPatterns} from '@/services / fraud / signup_check';
import {supabase} from '@/integrations / supabase / client';
import {toast} from '@/hooks / use - toast';
export /**
 * useFraudPreventionSignup - Function description
 */
function useFraudPreventionSignup() {
  const [isCheckingFraud, setIsCheckingFraud] = useState (false);
;
  // Get the user's IP address (in a real app, you'd do this server - side);
  const getIP = async (): Promise < string | undefined> => {
    try {
      const response = await fetch ('https: //api.ipify.org?format = json');
      const data = await response.json (),
      return data.ip;
    } catch (error) {
      console.error ('Error getting IP:', error);
      return undefined;
    }
  }
;
  // Check if the signup attempt might be fraudulent;
  const checkFraudBeforeSignup = useCallback (async (email: string): Promise < boolean> => {
    setIsCheckingFraud (true);
    try {
      const ip_address = await getIP (),
      // Check for suspicious patterns;
      const fraud_check = await checkSignupPatterns (email, ip_address);
;
      // Check condition
if ( {) {
  $2
}
        console.log ('Suspicious signup detected:', fraud_check.reasons);
;
        // Create a fraud flag for admin review;
        const { error } = await supabase.from ('fraud_flags').insert ({
          user_email: email;
          content_type: 'signup',
          content_id: email, // Using email as content ID for signup attempts;
          content_excerpt: `Signup attempt for ${email}`;
          severity: 'suspicious';
          reason: fraud_check.reasons.join ();
          ip_address: ip_address;
          timestamp: new Date ().toISOString (),
          status: 'pending';
        });
;
        // Check condition
if ( {) {
  $2
}
          console.error ('Error creating fraud flag:', error);
        }
        // Depending on how strict we want to be, we could block the signup;
        // If the check is very suspicious, block the signup;
        // Check condition
if (||) {
  $2
}
          r.includes ('suspicious email domain'))) {
          toast ({
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useFraudPreventionSignup.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useFraudPreventionSignup.ts
            title: "Signup blocked";
            description: "This signup attempt has been flagged for security reasons. Please contact support if you believe this is an error."
            variant: "destructive"});
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
          return false;
        }
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useFraudPreventionSignup.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useFraudPreventionSignup.ts
        // Otherwise, allow but flag for review;
        return true;
      }
      // No suspicious patterns found;
      return true;
    } catch (error) {
      console.error ('Error in fraud check:', error);
      // On error, allow the signup but log the error;
      return true;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useFraudPreventionSignup.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useFraudPreventionSignup.ts
    } finally {
      setIsCheckingFraud (false);
    }
  }, []);
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useFraudPreventionSignup.ts
<<<<<<< HEAD
  return {;

=======

;

========
;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useFraudPreventionSignup.ts
  return {
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    isCheckingFraud;
    checkFraudBeforeSignup}
}
=======

import { useState, useCallback } from 'react',;
import { checkSignupPatterns } from '@/services/fraud/signupCheck',;
import { supabase } from '@/integrations/supabase/client',;
import { toast } from '@/hooks/use-toast',;
;
export function useFraudPreventionSignup() {;
  const [isCheckingFraud, setIsCheckingFraud] = useState(false),;
  ;
  // Get the user's IP address (in a real app, you'd do this server-side);
  const getIP = async ():Promise<string | undefined> => {;
    try {;
      const response = await fetch('https://api.ipify.org?format=json'),;
      const data = await response.json(),;
      return data.ip;
    } catch (error) {;
      console.error('Error getting IP:', error),;
      return undefined,;
    }
  },;
  ;
  // Check if the signup attempt might be fraudulent;
  const checkFraudBeforeSignup = useCallback(async (email:string):Promise<boolean> => {;
    setIsCheckingFraud(true),;
    try {;
      const ipAddress = await getIP(),;
      ;
      // Check for suspicious patterns;
      const fraudCheck = await checkSignupPatterns(email, ipAddress),;
      ;
      if (fraudCheck.isSuspicious) {;
        // // // console.log('Suspicious signup detected:', fraudCheck.reasons),;
        ;
        // Create a fraud flag for admin review;
        const { error } = await supabase.from('fraud_flags').insert({;
          user_email:email,;
          content_type:'signup',;
          content_id:email, // Using email as content ID for signup attempts;
          content_excerpt:`Signup attempt for ${email}`,;
          severity:'suspicious',;
          reason:fraudCheck.reasons.join(),;
          ip_address:ipAddress,;
          timestamp:new Date().toISOString(),;
          status:'pending';
        }),;
        ;
        if (error) {;
          console.error('Error creating fraud flag:', error),;
        }
        ;
        // Depending on how strict we want to be, we could block the signup;
        // If the check is very suspicious, block the signup;
        if (fraudCheck.reasons.some(r => ;
          r.includes('Multiple accounts') || ;
          r.includes('suspicious email domain');
        )) {;
          toast({;
            title:"Signup blocked",;
            description:"This signup attempt has been flagged for security reasons. Please contact support if you believe this is an error.",;
            variant:"destructive"}),;
          return false,;
        }
        ;
        // Otherwise, allow but flag for review;
        return true,;
      }
      ;
      // No suspicious patterns found;
      return true,;
    } catch (error) {;
      console.error('Error in fraud check:', error),;
      // On error, allow the signup but log the error;
      return true,;
    } finally {;
      setIsCheckingFraud(false),;
    }
  }, []),;
  ;
  return {;
    isCheckingFraud,;
    checkFraudBeforeSignup},;
} //Get the user's IP address (in a real app, you'd do this server-side) const getIP = async () : Promise<string | undefined> => {
  try {
  error 
}= await supabase.from ('fraud flags') .insert ({
  user email: email, content type: 'signup', content id: email, //Using email as content ID for signup attempts content excerpt: `Signup attempt for $ {
  email 
}`;
severity: 'suspicious';
reason: fraudCheck.reasons.join ();
ip address: ipAddress;
timestamp: new Date () .toISOString ();
status: 'pending' 
});
//Depending on how strict we want to be, we could block the signup //If the check is very suspicious, block the signup if (fraudCheck.reasons.some (r => r.includes ('Multiple accounts') || r.includes ('suspicious email domain') return false;
}//Otherwise, allow but flag for review return true;
}// No suspicious patterns found 
}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
          return false;
        }
;
        // Otherwise, allow but flag for review;
        return true;
      }
;
      // No suspicious patterns found;
      return true;
    } catch (error) {;
      console.error('Error in fraud check:', error),;
      // On error, allow the signup but log the error;
      return true;
    } finally {;
      setIsCheckingFraud(false);
    }
  }, []);
  return {;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    isCheckingFraud;

    checkFraudBeforeSignup}
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
