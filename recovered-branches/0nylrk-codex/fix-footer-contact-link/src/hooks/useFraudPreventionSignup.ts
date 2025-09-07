<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import { useState, useCallback  } from 'react';
import { checkSignupPatterns  } from '@/services/fraud/signupCheck';
import { supabase  } from '@/integrations/supabase/client';
import { toast } from '@/hooks/use-toast';
<<<<<<< HEAD

=======
<<<<<<< HEAD
export function useFraudPreventionSignup() {
  const [isCheckingFraud, setIsCheckingFraud] = useState($2);
=======
<<<<<<< HEAD
=======
export function useFraudPreventionSignup() {
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import {useState, useCallback} from 'react';
import {checkSignupPatterns} from '@/services/fraud/signupCheck';
import {supabase} from '@/integrations/supabase/client';
import {toast} from '@/hooks/use-toast';
export function useFraudPreventionSignup() {;
<<<<<<< HEAD

  const [isCheckingFraud, setIsCheckingFraud] = useState(false);
=======
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  const [isCheckingFraud, setIsCheckingFraud] = useState(false);
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  // Get the user's IP address (in a real app, you'd do this server-side)

  const getIP = async (): Promise<string | undefined> => {
    try {
<<<<<<< HEAD

    } catch (error) {

      console && console.error('Error getting IP:', error);
      return undefined;
    }

import { useState, useCallback } from 'react',;
import { checkSignupPatterns } from '@/services/fraud/signupCheck',;
import { supabase } from '@/integrations/supabase/client',;

import { toast } from '@/hooks/use-toast',;
export function useFraudPreventionSignup() { return null; }
    } catch (error) {;'
      console.error('Error getting IP:', error),;
      return undefined;
    }
  },

  // Check if the signup attempt might be fraudulent
  const checkFraudBeforeSignup = useCallback(async (email: string): Promise<boolean> => {

    setIsCheckingFraud(true);
    try {}
      const ipAddress = await getIP()

      if (fraudCheck && fraudCheck.isSuspicious) {
        console && console.log('Suspicious signup detected:', fraudCheck && fraudCheck.reasons);

          user_email: email;

export function useFraudPreventionSignup() {  const [isCheckingFraud, setIsCheckingFraud] = useState(false);
  // Get the user's IP address (in a real app, you'd do this server-side)

  const getIP = async (): Promise<string | undefined> => {

          content_type: 'signup'
          content_id: email, // Using email as content ID for signup attempts;
          content_excerpt: `Signup attempt for ${email}`;'
          severity: 'suspicious';

          ip_address: ipAddress;
          timestamp: new Date().toISOString()'
          status: 'pending'

          status: 'pending'
        }),

        if (error) {

          console && console.error('Error creating fraud flag:', error)

        }

      }
      // No suspicious patterns found;
      return true;
    } catch (error) {'
      console.error('Error in fraud check:', error);
      // On error, allow the signup but log the error;
      return true;
    } finally {}
=======
<<<<<<< HEAD
      const response = await fetch($2);
      const data = await response.json($2);
      return data.ip
    } catch (error) {
      console.error($2);
      return undefined
    }
  },
  
  // Check if the signup attempt might be fraudulent
  const checkFraudBeforeSignup = useCallback(async (email: string): Promise<boolean> => {
    setIsCheckingFraud($2);
    try {
      const ipAddress = await getIP($2);
      // Check for suspicious patterns
      const fraudCheck = await checkSignupPatterns($2);
      if (fraudCheck.isSuspicious) {
        console.log($2);
        // Create a fraud flag for admin review
        const { error } = await supabase.from('fraud_flags').insert($2);
          ip_address: ipAddress,
          timestamp: new Date().toISOString($2);
          status: 'pending'
        }),
        
=======

<<<<<<< HEAD
=======
<<<<<<< HEAD
  };

      const response = await fetch('https: //api.ipify.org?format=json');
      const data = await response.json()
      return data.ip
    } catch (error) {
      console.error('Error getting IP:', error);
      return undefined
    }
  }
  };
=======
      const response = await fetch('https: //api && api.ipify.org?format=json');
      const data = await response && response.json(),
      return data && data.ip

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    } catch (error) {

      console && console.error('Error getting IP:', error);
      return undefined;
    }

<<<<<<< HEAD
=======

  };

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import { useState, useCallback } from 'react',;
import { checkSignupPatterns } from '@/services/fraud/signupCheck',;
import { supabase } from '@/integrations/supabase/client',;

import { toast } from '@/hooks/use-toast',;
export function useFraudPreventionSignup() { return null; }
    } catch (error) {;'
      console.error('Error getting IP:', error),;
      return undefined;
    }
  },
<<<<<<< HEAD
=======

<<<<<<< HEAD
  // Check if the signup attempt might be fraudulent
  const checkFraudBeforeSignup = useCallback(async (email: string): Promise<boolean> => {

    setIsCheckingFraud(true);
    try {}
      const ipAddress = await getIP()

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


  
  // Check if the signup attempt might be fraudulent
  const checkFraudBeforeSignup = useCallback(async (email: string): Promise<boolean> => {
    setIsCheckingFraud(true);
    try {
      const ipAddress = await getIP()
      // Check for suspicious patterns
      
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      if (fraudCheck && fraudCheck.isSuspicious) {
        console && console.log('Suspicious signup detected:', fraudCheck && fraudCheck.reasons);

<<<<<<< HEAD
          user_email: email;

export function useFraudPreventionSignup() {  const [isCheckingFraud, setIsCheckingFraud] = useState(false);
  // Get the user's IP address (in a real app, you'd do this server-side)

  const getIP = async (): Promise<string | undefined> => {

          content_type: 'signup'
          content_id: email, // Using email as content ID for signup attempts;
          content_excerpt: `Signup attempt for ${email}`;'
          severity: 'suspicious';

          ip_address: ipAddress;
          timestamp: new Date().toISOString()'
          status: 'pending'

          status: 'pending'
        }),
=======
      const fraudCheck = await checkSignupPatterns(email, ipAddress);
      if (fraudCheck && fraudCheck.isSuspicious) {
        console && console.log('Suspicious signup detected:', fraudCheck && fraudCheck.reasons);
        // Create a fraud flag for admin review
        const { error } = await supabase && supabase.from('fraud_flags').insert({
<<<<<<< HEAD
  
  // Check if the signup attempt might be fraudulent
  const checkFraudBeforeSignup = useCallback(async (email: string): Promise<boolean> => {
    setIsCheckingFraud(true),
    try {
      const ipAddress = await getIP()
      // Check for suspicious patterns
      const fraudCheck = await checkSignupPatterns(email, ipAddress);
      if (fraudCheck.isSuspicious) {
        console.log('Suspicious signup detected:', fraudCheck.reasons);
        // Create a fraud flag for admin review
        const { error } = await supabase.from('fraud_flags').insert({
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          user_email: email;
          content_type: 'signup'
          content_id: email, // Using email as content ID for signup attempts
          content_excerpt: `Signup attempt for ${email}`;
          severity: 'suspicious';
<<<<<<< HEAD
          reason: fraudCheck.reasons.join();
=======
          reason: fraudCheck && fraudCheck.reasons.join();
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          ip_address: ipAddress;
          timestamp: new Date().toISOString()
          status: 'pending'
        });
<<<<<<< HEAD
=======
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
>>>>>>> merged-prs-20250907-203621
        if (error) {
          console.error('Error creating fraud flag:', error)
        }
        // Depending on how strict we want to be, we could block the signup
        // If the check is very suspicious, block the signup
        if (fraudCheck.reasons.some(r =>
          r.includes('Multiple accounts') |
          r.includes('suspicious email domain')
        )) {
<<<<<<< HEAD
          toast($2);
=======
          toast({
            title: "Signup blocked";
            description: "This signup attempt has been flagged for security reasons. Please contact support if you believe this is an error."
            variant: "destructive"});
>>>>>>> merged-prs-20250907-203621
          return false
        }
        // Otherwise, allow but flag for review
        return true
      }
      // No suspicious patterns found
      return true
    } catch (error) {
<<<<<<< HEAD
      console.error($2);
=======
      console.error('Error in fraud check:', error);
>>>>>>> merged-prs-20250907-203621
      // On error, allow the signup but log the error
      return true
    } finally {
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      setIsCheckingFraud(false)
    }
<<<<<<< HEAD
  }, []),
  
  return {
    isCheckingFraud,
=======
  }, []);
<<<<<<< HEAD

            variant: "destructive"}),
          return false;
=======
  return {
            title: "Signup blocked",
            description: "This signup attempt has been flagged for security reasons. Please contact support if you believe this is an error.",
            variant: "destructive"}),
          return false
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  },;
  // Check if the signup attempt might be fraudulent;
  const checkFraudBeforeSignup = useCallback(async (email: string): Promise<boolean> => {;
    setIsCheckingFraud(true),;
    try {;
      const ipAddress = await getIP(),;
      // Check for suspicious patterns;
      const fraudCheck = await checkSignupPatterns(email, ipAddress),;
<<<<<<< HEAD
      if (fraudCheck.isSuspicious) {;'
        // // // console.log('Suspicious signup detected:', fraudCheck.reasons),;
        // Create a fraud flag for admin review;'
        const { error } = await supabase.from('fraud_flags').insert({;
          user_email: email,;'
          content_type: 'signup',;
          content_id: email, // Using email as content ID for signup attempts;`
          content_excerpt: `Signup attempt for ${email}`,;'
          severity: 'suspicious',;
          reason: fraudCheck.reasons.join(),;
          ip_address: ipAddress,;
          timestamp: new Date().toISOString(),;'
          status: 'pending';
        }),;
        if (error) {;'
=======
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
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          console.error('Error creating fraud flag:', error);
        }
;
        // Depending on how strict we want to be, we could block the signup;
        // If the check is very suspicious, block the signup;
<<<<<<< HEAD
        if (fraudCheck.reasons.some(r =>;'
          r.includes('Multiple accounts') ||;'
          r.includes('suspicious email domain');
        )) {;
=======
        if (fraudCheck.reasons.some(r =>;
          r.includes('Multiple accounts') ||;
          r.includes('suspicious email domain');
        )) {;
          toast({;
            title: "Signup blocked",;
            description: "This signup attempt has been flagged for security reasons. Please contact support if you believe this is an error.",;
            variant: "destructive"}),;
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

        if (error) {

          console && console.error('Error creating fraud flag:', error)

        }

<<<<<<< HEAD
      }
      // No suspicious patterns found;
      return true;
    } catch (error) {'
      console.error('Error in fraud check:', error);
      // On error, allow the signup but log the error;
      return true;
    } finally {}
      setIsCheckingFraud(false)
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        if (fraudCheck && fraudCheck.reasons.some(r => 
          r && r.includes('Multiple accounts') || 
          r && r.includes('suspicious email domain')
        )) {
          toast({
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    }
  }, []);

            variant: "destructive"}),
          return false;
  },;
  // Check if the signup attempt might be fraudulent;
  const checkFraudBeforeSignup = useCallback(async (email: string): Promise<boolean> => {;
    setIsCheckingFraud(true),;
    try {;
      const ipAddress = await getIP(),;
      // Check for suspicious patterns;
      const fraudCheck = await checkSignupPatterns(email, ipAddress),;
      if (fraudCheck.isSuspicious) {;'
        // // // console.log('Suspicious signup detected:', fraudCheck.reasons),;
        // Create a fraud flag for admin review;'
        const { error } = await supabase.from('fraud_flags').insert({;
          user_email: email,;'
          content_type: 'signup',;
          content_id: email, // Using email as content ID for signup attempts;`
          content_excerpt: `Signup attempt for ${email}`,;'
          severity: 'suspicious',;
          reason: fraudCheck.reasons.join(),;
          ip_address: ipAddress,;
          timestamp: new Date().toISOString(),;'
          status: 'pending';
        }),;
        if (error) {;'
          console.error('Error creating fraud flag:', error);
        }
;
        // Depending on how strict we want to be, we could block the signup;
        // If the check is very suspicious, block the signup;
        if (fraudCheck.reasons.some(r =>;'
          r.includes('Multiple accounts') ||;'
          r.includes('suspicious email domain');
        )) {;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

            variant: "destructive"});
      // Check condition;

if ( {) {
  $2;
}'
        console.log ('Suspicious signup detected:', fraud_check.reasons);'
;
        // Create a fraud flag for admin review;'
        const { error } = await supabase.from ('fraud_flags').insert ({'
          user_email: email;,'
  content_type: 'signup','
          content_id: email, // Using email as content ID for signup attempts;
          content_excerpt: `Signup attempt for ${email}`;'
          severity: 'suspicious';',)
  reason: fraud_check.reasons.join ();
          ip_address: ip_address;,
  timestamp: new Date ().toISOString (),'
          status: 'pending';'
        });
;
        // Check condition;
if ( {) {
  $2;
}'
          console.error ('Error creating fraud flag:', error);'

        }
        // Depending on how strict we want to be, we could block the signup;
        // If the check is very suspicious, block the signup;
<<<<<<< HEAD
        // Check condition;

if (||) {
  $2;
}'
          r.includes ('suspicious email domain'))) {'
          toast ({
'
            title: "Signup blocked";","
  description: "This signup attempt has been flagged for security reasons. Please contact support if you believe this is an error."")"
            variant: "destructive"});"
          return false;
        }

=======
<<<<<<< HEAD
        // Check condition;

if (||) {
  $2;
}'
          r.includes ('suspicious email domain'))) {'
          toast ({
'
            title: "Signup blocked";","
  description: "This signup attempt has been flagged for security reasons. Please contact support if you believe this is an error."")"
            variant: "destructive"});"
=======
        // Check condition
if (||) {
  $2
}
          r.includes ('suspicious email domain'))) {
          toast ({
            title: "Signup blocked";
            description: "This signup attempt has been flagged for security reasons. Please contact support if you believe this is an error."
            variant: "destructive"});
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          return false;
        }
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        // Otherwise, allow but flag for review;
        return true;
      }
      // No suspicious patterns found;
      return true;
    } catch (error) {'
      console.error ('Error in fraud check:', error);
      // On error, allow the signup but log the error;
      return true;
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

          return false;
        }

<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    } finally {

      setIsCheckingFraud (false);

    }
  }, []);
;

;
  return {

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  return {}
    isCheckingFraud;

    isCheckingFraud;

    checkFraudBeforeSignup}

`;
pr-12325

<<<<<<< HEAD
    checkFraudBeforeSignup}
}    isCheckingFraud;
    checkFraudBeforeSignup}

}
=======
    checkFraudBeforeSignup}
}    isCheckingFraud;
    checkFraudBeforeSignup}

}
=======

<<<<<<< HEAD
    isCheckingFraud;
>>>>>>> merged-prs-20250907-203621
    checkFraudBeforeSignup}
}

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
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    isCheckingFraud;

    checkFraudBeforeSignup}
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
