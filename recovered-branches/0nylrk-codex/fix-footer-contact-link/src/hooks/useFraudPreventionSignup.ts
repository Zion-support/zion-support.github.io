
<<<<<<< HEAD
<<<<<<< HEAD
import { useState, useCallback  } from 'react';
import { checkSignupPatterns  } from '@/services/fraud/signupCheck';
import { supabase  } from '@/integrations/supabase/client';
import { toast } from '@/hooks/use-toast';
export function useFraudPreventionSignup() {
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import {useState, useCallback} from 'react';
import {checkSignupPatterns} from '@/services/fraud/signupCheck';
import {supabase} from '@/integrations/supabase/client';
import {toast} from '@/hooks/use-toast';
export function useFraudPreventionSignup() {;
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const [isCheckingFraud, setIsCheckingFraud] = useState(false);
  // Get the user's IP address (in a real app, you'd do this server-side)

  const getIP = async (): Promise<string | undefined> => {
    try {

<<<<<<< HEAD
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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      const response = await fetch('https: //api && api.ipify.org?format=json');
      const data = await response && response.json(),
      return data && data.ip

    } catch (error) {
      console && console.error('Error getting IP:', error);
      return undefined
    }


  };

=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


  
  // Check if the signup attempt might be fraudulent
  const checkFraudBeforeSignup = useCallback(async (email: string): Promise<boolean> => {
    setIsCheckingFraud(true);
    try {
      const ipAddress = await getIP()
      // Check for suspicious patterns
<<<<<<< HEAD
      
      if (fraudCheck && fraudCheck.isSuspicious) {
        console && console.log('Suspicious signup detected:', fraudCheck && fraudCheck.reasons);
        

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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      const fraudCheck = await checkSignupPatterns(email, ipAddress);
      if (fraudCheck.isSuspicious) {
        console.log('Suspicious signup detected:', fraudCheck.reasons);
        // Create a fraud flag for admin review
<<<<<<< HEAD
        const { error } = await supabase.from('fraud_flags').insert({
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
        const { error } = await supabase && supabase.from('fraud_flags').insert({
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          user_email: email;
          content_type: 'signup'
          content_id: email, // Using email as content ID for signup attempts
          content_excerpt: `Signup attempt for ${email}`;
          severity: 'suspicious';
<<<<<<< HEAD
<<<<<<< HEAD
          reason: fraudCheck.reasons.join();
=======
          reason: fraudCheck && fraudCheck.reasons.join();
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
          reason: fraudCheck && fraudCheck.reasons.join();
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          ip_address: ipAddress;
          timestamp: new Date().toISOString()
          status: 'pending'
        });
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
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
            title: "Signup blocked";
            description: "This signup attempt has been flagged for security reasons. Please contact support if you believe this is an error."
            variant: "destructive"});
          return false
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
            title: "Signup blocked",
            description: "This signup attempt has been flagged for security reasons. Please contact support if you believe this is an error.",
            variant: "destructive"}),
          return false
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
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        if (error) {
          console && console.error('Error creating fraud flag:', error)
        }
        // Depending on how strict we want to be, we could block the signup
        // If the check is very suspicious, block the signup

<<<<<<< HEAD
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
        if (fraudCheck && fraudCheck.reasons.some(r => 
          r && r.includes('Multiple accounts') || 
          r && r.includes('suspicious email domain')

        )) {
          toast({
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            title: "Signup blocked";
            description: "This signup attempt has been flagged for security reasons. Please contact support if you believe this is an error."
            variant: "destructive"});
          return false;
        }
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        // Otherwise, allow but flag for review;
        return true;
      }
      // No suspicious patterns found;
      return true;
    } catch (error) {
      console.error ('Error in fraud check:', error);
      // On error, allow the signup but log the error;
      return true;
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    } finally {
      setIsCheckingFraud (false);
    }
  }, []);

;

<<<<<<< HEAD
;
  return {


<<<<<<< HEAD
    isCheckingFraud;
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
=======
  return {
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
    isCheckingFraud;

    checkFraudBeforeSignup}
}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
