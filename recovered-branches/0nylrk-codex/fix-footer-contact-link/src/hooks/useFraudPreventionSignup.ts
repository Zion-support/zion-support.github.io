
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD

=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import { useState, useCallback  } from 'react';
import { checkSignupPatterns  } from '@/services/fraud/signupCheck';
import { supabase  } from '@/integrations/supabase/client';
import { toast } from '@/hooks/use-toast';
<<<<<<< HEAD
<<<<<<< HEAD
export function useFraudPreventionSignup() {
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import {useState, useCallback} from 'react';
import {checkSignupPatterns} from '@/services/fraud/signupCheck';
import {supabase} from '@/integrations/supabase/client';
import {toast} from '@/hooks/use-toast';
export function useFraudPreventionSignup() {;
<<<<<<< HEAD
=======


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD
<<<<<<< HEAD


=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  const [isCheckingFraud, setIsCheckingFraud] = useState(false);
  // Get the user's IP address (in a real app, you'd do this server-side)

  const getIP = async (): Promise<string | undefined> => {
    try {
<<<<<<< HEAD

<<<<<<< HEAD
      const response = await fetch('https: //api && api.ipify.org?format=json');
      const data = await response && response.json(),
      return data && data.ip

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    } catch (error) {
=======
import { useState, useCallback  } from 'react';'
import { checkSignupPatterns  } from '@/services/fraud/signupCheck';'
import { supabase  } from '@/integrations/supabase/client';'
import { toast } from '@/hooks/use-toast';
export function useFraudPreventionSignup() {}
';
import {useState, useCallback} from 'react';'
import {checkSignupPatterns} from '@/services/fraud/signupCheck';'
import {supabase} from '@/integrations/supabase/client';'
import {toast} from '@/hooks/use-toast';
export function useFraudPreventionSignup() { return null; }
  const getIP = async (): Promise<string | undefined> => {}
    try {}
    } catch (error) {'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      console && console.error('Error getting IP:', error);
      return undefined;
    }
<<<<<<< HEAD
  }
  };
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======


  };


<<<<<<< HEAD
      const response = await fetch('https: //api.ipify.org?format=json');
      const data = await response.json()
      return data.ip
    } catch (error) {
      console.error('Error getting IP:', error);
      return undefined
    }
  }
  };
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import { useState, useCallback } from 'react',;
import { checkSignupPatterns } from '@/services/fraud/signupCheck',;
import { supabase } from '@/integrations/supabase/client',;
=======

'
import { useState, useCallback } from 'react',;'
import { checkSignupPatterns } from '@/services/fraud/signupCheck',;'
import { supabase } from '@/integrations/supabase/client',;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { toast } from '@/hooks/use-toast',;
export function useFraudPreventionSignup() { return null; }
    } catch (error) {;'
      console.error('Error getting IP:', error),;
      return undefined;
    }
  },
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934





  
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
  }
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  // Check if the signup attempt might be fraudulent
  const checkFraudBeforeSignup = useCallback(async (email: string): Promise<boolean> => {
=======
  // Check if the signup attempt might be fraudulent;
  const checkFraudBeforeSignup = useCallback(async (email: string): Promise<boolean> => {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    setIsCheckingFraud(true);
    try {}
      const ipAddress = await getIP()
<<<<<<< HEAD
      // Check for suspicious patterns
<<<<<<< HEAD

=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      
      if (fraudCheck && fraudCheck.isSuspicious) {
        console && console.log('Suspicious signup detected:', fraudCheck && fraudCheck.reasons);
        

<<<<<<< HEAD
        // Create a fraud flag for admin review
        const { error } = await supabase && supabase.from('fraud_flags').insert({
=======
      const fraudCheck = await checkSignupPatterns(email, ipAddress);
      if (fraudCheck && fraudCheck.isSuspicious) {
        console && console.log('Suspicious signup detected:', fraudCheck && fraudCheck.reasons);
        // Create a fraud flag for admin review
        const { error } = await supabase && supabase.from('fraud_flags').insert({
  
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
        // Create a fraud flag for admin review
        const { error } = await supabase && supabase.from('fraud_flags').insert({
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
          user_email: email;
=======
export function useFraudPreventionSignup() {  const [isCheckingFraud, setIsCheckingFraud] = useState(false);
  // Get the user's IP address (in a real app, you'd do this server-side)

  const getIP = async (): Promise<string | undefined> => {
    try {          user_email: email;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
export function useFraudPreventionSignup() {  const [isCheckingFraud, setIsCheckingFraud] = useState(false);
  // Get the user's IP address (in a real app, you'd do this server-side)

  const getIP = async (): Promise<string | undefined> => {
    try {          user_email: email;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
      // Check for suspicious patterns;
      if (fraudCheck && fraudCheck.isSuspicious) {'
        console && console.log('Suspicious signup detected:', fraudCheck && fraudCheck.reasons);
        



        // Create a fraud flag for admin review'
        const { error } = await supabase && supabase.from('fraud_flags').insert({}
          user_email: email;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          content_type: 'signup'
          content_id: email, // Using email as content ID for signup attempts;
          content_excerpt: `Signup attempt for ${email}`;'
          severity: 'suspicious';
<<<<<<< HEAD
          reason: fraudCheck && fraudCheck.reasons.join();          reason: fraudCheck && fraudCheck.reasons.join();
=======


          reason: fraudCheck && fraudCheck.reasons.join();

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          ip_address: ipAddress;
          timestamp: new Date().toISOString()'
          status: 'pending'
<<<<<<< HEAD
<<<<<<< HEAD
        });

      const fraudCheck = await checkSignupPatterns(email, ipAddress),
      
      if (fraudCheck.isSuspicious) {'
        // // // console.log('Suspicious signup detected:', fraudCheck.reasons),
        
        // Create a fraud flag for admin review'
        const { error } = await supabase.from('fraud_flags').insert({}
          user_email: email,'
          content_type: 'signup',
          content_id: email, // Using email as content ID for signup attempts;`
          content_excerpt: `Signup attempt for ${email}`,'
          severity: 'suspicious',
          reason: fraudCheck.reasons.join(),
          ip_address: ipAddress,
          timestamp: new Date().toISOString(),'
          status: 'pending'
        }),
        

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        if (error) {
=======
        if (error) {'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          console && console.error('Error creating fraud flag:', error)
=======
        });          console && console.error('Error creating fraud flag:', error)
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
        });          console && console.error('Error creating fraud flag:', error)
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
        }
<<<<<<< HEAD
        // Depending on how strict we want to be, we could block the signup
        // If the check is very suspicious, block the signup

        if (fraudCheck && fraudCheck.reasons.some(r => 
          r && r.includes('Multiple accounts') || 
          r && r.includes('suspicious email domain')

        )) {
          toast({
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
=======
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
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
            title: "Signup blocked";
            description: "This signup attempt has been flagged for security reasons. Please contact support if you believe this is an error."
=======
            title: "Signup blocked",
  description: "This signup attempt has been flagged for security reasons. Please contact support if you believe this is an error."
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
            title: "Signup blocked",
  description: "This signup attempt has been flagged for security reasons. Please contact support if you believe this is an error."
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
        // Depending on how strict we want to be, we could block the signup;
        // If the check is very suspicious, block the signup;
            title: "Signup blocked";"
            description: "This signup attempt has been flagged for security reasons. Please contact support if you believe this is an error.""
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
            variant: "destructive"});
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        }
<<<<<<< HEAD
        // Otherwise, allow but flag for review
        return true
          return false;
        }

        // Otherwise, allow but flag for review;
        return true;
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
        // Otherwise, allow but flag for review;
        return true;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      }
      // No suspicious patterns found;
      return true;
    } catch (error) {'
      console.error('Error in fraud check:', error);
      // On error, allow the signup but log the error;
      return true;
    } finally {}
      setIsCheckingFraud(false)
    }
  }, []);
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
  return {
            title: "Signup blocked",
            description: "This signup attempt has been flagged for security reasons. Please contact support if you believe this is an error.",
=======
  return {"
            title: "Signup blocked","
            description: "This signup attempt has been flagged for security reasons. Please contact support if you believe this is an error.","
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
<<<<<<< HEAD
          toast({;
            title: "Signup blocked",,
  description: "This signup attempt has been flagged for security reasons. Please contact support if you believe this is an error.",;
            variant: "destructive"}),;
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
=======
          toast({;"
            title: "Signup blocked",;"
            description: "This signup attempt has been flagged for security reasons. Please contact support if you believe this is an error.",;"
            variant: "destructive"}),;
"
            title: "Signup blocked";"
            description: "This signup attempt has been flagged for security reasons. Please contact support if you believe this is an error.""
            variant: "destructive"});
          return false;
        }

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
    } finally {
=======


          return false;
        }

    } finally {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      setIsCheckingFraud (false);
    }
  }, []);

;

<<<<<<< HEAD
  return {
  return {  return {
<<<<<<< HEAD

<<<<<<< HEAD
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

  return {}
    isCheckingFraud;
<<<<<<< HEAD

    checkFraudBeforeSignup}
}    isCheckingFraud;

    checkFraudBeforeSignup}
}
<<<<<<< HEAD
=======
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
  return {
  return {
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    isCheckingFraud;

    checkFraudBeforeSignup}
}    isCheckingFraud;

    checkFraudBeforeSignup}
}
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
