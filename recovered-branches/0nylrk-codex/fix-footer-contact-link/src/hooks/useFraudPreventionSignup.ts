

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
import {useState, useCallback} from 'react';
import {checkSignupPatterns} from '@/services/fraud/signupCheck';
import {supabase} from '@/integrations/supabase/client';
import {toast} from '@/hooks/use-toast';
export function useFraudPreventionSignup() {;


<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
  const [isCheckingFraud, setIsCheckingFraud] = useState(false);
  // Get the user's IP address (in a real app, you'd do this server-side)

  const getIP = async (): Promise<string | undefined> => {
    try {

      const response = await fetch('https: //api && api.ipify.org?format=json');
      const data = await response && response.json(),
      return data && data.ip

    } catch (error) {
      console && console.error('Error getting IP:', error);
      return undefined
    }

<<<<<<< HEAD
  }
  };


=======

  };

=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
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
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
  
  // Check if the signup attempt might be fraudulent
  const checkFraudBeforeSignup = useCallback(async (email: string): Promise<boolean> => {
    setIsCheckingFraud(true);
    try {
      const ipAddress = await getIP()
      // Check for suspicious patterns
      const fraudCheck = await checkSignupPatterns(email, ipAddress);
      if (fraudCheck.isSuspicious) {
        console.log('Suspicious signup detected:', fraudCheck.reasons);
        // Create a fraud flag for admin review
        const { error } = await supabase && supabase.from('fraud_flags').insert({
          user_email: email;
          content_type: 'signup'
          content_id: email, // Using email as content ID for signup attempts
          content_excerpt: `Signup attempt for ${email}`;
          severity: 'suspicious';
          reason: fraudCheck && fraudCheck.reasons.join();
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
          console && console.error('Error creating fraud flag:', error)
        }
        // Depending on how strict we want to be, we could block the signup
        // If the check is very suspicious, block the signup

        if (fraudCheck && fraudCheck.reasons.some(r => 
          r && r.includes('Multiple accounts') || 
          r && r.includes('suspicious email domain')

        )) {
          toast({
            title: "Signup blocked";
            description: "This signup attempt has been flagged for security reasons. Please contact support if you believe this is an error."
            variant: "destructive"});
<<<<<<< HEAD

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


=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
          return false;
        }

        // Otherwise, allow but flag for review;
        return true;
      }
      // No suspicious patterns found;
      return true;
    } catch (error) {
      console.error ('Error in fraud check:', error);
      // On error, allow the signup but log the error;
      return true;

    } finally {
      setIsCheckingFraud (false);
    }
  }, []);

<<<<<<< HEAD




>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======
;

  return {
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
    isCheckingFraud;

    checkFraudBeforeSignup}
}