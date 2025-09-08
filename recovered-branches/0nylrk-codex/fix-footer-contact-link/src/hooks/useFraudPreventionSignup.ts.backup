
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
import { useState, useCallback  } from 'react';
import { checkSignupPatterns  } from '@/services/fraud/signupCheck';
import { supabase  } from '@/integrations/supabase/client';
import { toast } from '@/hooks/use-toast';


import {useState, useCallback} from 'react';
import {checkSignupPatterns} from '@/services/fraud/signupCheck';
import {supabase} from '@/integrations/supabase/client';
import {toast} from '@/hooks/use-toast';
export function useFraudPreventionSignup() {;

<<<<<<< HEAD


  const [isCheckingFraud, setIsCheckingFraud] = useState(false);

=======
  const [isCheckingFraud, setIsCheckingFraud] = useState(false);
  const [isCheckingFraud, setIsCheckingFraud] = useState(false);
>>>>>>> origin/cursor/delete-old-data-records-6bba
  // Get the user's IP address (in a real app, you'd do this server-side)

  const getIP = async (): Promise<string | undefined> => {
    try {


<<<<<<< HEAD
=======
    } catch (error) {

      console && console.error('Error getting IP:', error);
      return undefined;
    }

>>>>>>> origin/cursor/delete-old-data-records-6bba

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



      if (fraudCheck && fraudCheck.isSuspicious) {
        console && console.log('Suspicious signup detected:', fraudCheck && fraudCheck.reasons);


      const fraudCheck = await checkSignupPatterns(email, ipAddress);
      if (fraudCheck && fraudCheck.isSuspicious) {
        console && console.log('Suspicious signup detected:', fraudCheck && fraudCheck.reasons);
        // Create a fraud flag for admin review
        const { error } = await supabase && supabase.from('fraud_flags').insert({
=======
  // Check if the signup attempt might be fraudulent
  const checkFraudBeforeSignup = useCallback(async (email: string): Promise<boolean> => {

    setIsCheckingFraud(true);
    try {}
      const ipAddress = await getIP()



  
  // Check if the signup attempt might be fraudulent
  const checkFraudBeforeSignup = useCallback(async (email: string): Promise<boolean> => {
    setIsCheckingFraud(true);
    try {
      const ipAddress = await getIP()
      // Check for suspicious patterns
      
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
          user_email: email;
          content_type: 'signup'
          content_id: email, // Using email as content ID for signup attempts
          content_excerpt: `Signup attempt for ${email}`;
          severity: 'suspicious';
          reason: fraudCheck.reasons.join();
          ip_address: ipAddress;
          timestamp: new Date().toISOString()
          status: 'pending'
        });
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
        
        if (error) {
          console.error('Error creating fraud flag:', error)
        }
        // Depending on how strict we want to be, we could block the signup
        // If the check is very suspicious, block the signup
        if (fraudCheck.reasons.some(r =>
          r.includes('Multiple accounts') |
          r.includes('suspicious email domain')
        )) {


        if (error) {

          console && console.error('Error creating fraud flag:', error)

        }

>>>>>>> origin/cursor/delete-old-data-records-6bba

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

        // Check condition
if (||) {
  $2
}
          r.includes ('suspicious email domain'))) {
          toast ({
            title: "Signup blocked";
            description: "This signup attempt has been flagged for security reasons. Please contact support if you believe this is an error."
            variant: "destructive"});

=======

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
>>>>>>> origin/cursor/delete-old-data-records-6bba
          return false;
        }
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

>>>>>>> origin/cursor/delete-old-data-records-6bba


<<<<<<< HEAD
=======

>>>>>>> origin/cursor/delete-old-data-records-6bba
    } finally {

      setIsCheckingFraud (false);

    }
  }, []);
;

;
  return {


<<<<<<< HEAD


=======
  return {}
    isCheckingFraud;
>>>>>>> origin/cursor/delete-old-data-records-6bba

    isCheckingFraud;

    checkFraudBeforeSignup}
<<<<<<< HEAD
}

=======

`;
pr-12325


    isCheckingFraud;

    checkFraudBeforeSignup}
}
}
>>>>>>> origin/cursor/delete-old-data-records-6bba
