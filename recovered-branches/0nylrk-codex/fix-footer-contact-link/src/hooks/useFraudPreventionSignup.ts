
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
import { useState, useCallback  } from 'react';
import { checkSignupPatterns  } from '@/services/fraud/signupCheck';
import { supabase  } from '@/integrations/supabase/client';
import { toast } from '@/hooks/use-toast';
<<<<<<< HEAD
<<<<<<< HEAD
export function useFraudPreventionSignup() {
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
export function useFraudPreventionSignup() {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import {useState, useCallback} from 'react';
import {checkSignupPatterns} from '@/services/fraud/signupCheck';
import {supabase} from '@/integrations/supabase/client';
import {toast} from '@/hooks/use-toast';
export function useFraudPreventionSignup() {;

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  const [isCheckingFraud, setIsCheckingFraud] = useState(false);
  // Get the user's IP address (in a real app, you'd do this server-side)

  const getIP = async (): Promise<string | undefined> => {
    try {
const response = await fetch('https: //api && api.ipify.org?format=json');
      const data = await response && response.json(),
      return data && data.ip
    } catch (error) {
      console && console.error('Error getting IP:', error);
      return undefined;
    }
}
  };
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
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

=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
  // Check if the signup attempt might be fraudulent
  const checkFraudBeforeSignup = useCallback(async (email: string): Promise<boolean> => {
=======
  // Check if the signup attempt might be fraudulent;
  const checkFraudBeforeSignup = useCallback(async (email: string): Promise<boolean> => {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    setIsCheckingFraud(true);
    try {}
      const ipAddress = await getIP()
// Check for suspicious patterns
if (fraudCheck && fraudCheck.isSuspicious) {
        console && console.log('Suspicious signup detected:', fraudCheck && fraudCheck.reasons);

// Create a fraud flag for admin review
        const { error } = await supabase && supabase.from('fraud_flags').insert({
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
=======
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

export function useFraudPreventionSignup() {  const [isCheckingFraud, setIsCheckingFraud] = useState(false);
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

  };

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

  }
  // Check if the signup attempt might be fraudulent
  const checkFraudBeforeSignup = useCallback(async (email: string): Promise<boolean> => {
    setIsCheckingFraud(true);
    try {
      const ipAddress = await getIP()
      // Check for suspicious patterns

      if (fraudCheck && fraudCheck.isSuspicious) {
        console && console.log('Suspicious signup detected:', fraudCheck && fraudCheck.reasons);

        // Create a fraud flag for admin review
        const { error } = await supabase && supabase.from('fraud_flags').insert({
        // Create a fraud flag for admin review
        const { error } = await supabase && supabase.from('fraud_flags').insert({
          user_email: email;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          content_type: 'signup'
          content_id: email, // Using email as content ID for signup attempts;
          content_excerpt: `Signup attempt for ${email}`;'
          severity: 'suspicious';
reason: fraudCheck && fraudCheck.reasons.join();          reason: fraudCheck && fraudCheck.reasons.join();
          ip_address: ipAddress;
          timestamp: new Date().toISOString()'
          status: 'pending'
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        if (error) {
          console && console.error('Error creating fraud flag:', error)
=======
        });          console && console.error('Error creating fraud flag:', error)
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
        });          console && console.error('Error creating fraud flag:', error)
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
        if (error) {
          console && console.error('Error creating fraud flag:', error)
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        }
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
            title: "Signup blocked";
            description: "This signup attempt has been flagged for security reasons. Please contact support if you believe this is an error."
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
            title: "Signup blocked";
            description: "This signup attempt has been flagged for security reasons. Please contact support if you believe this is an error."
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            variant: "destructive"});
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        }
// Otherwise, allow but flag for review
        return true
          return false;
        }

        // Otherwise, allow but flag for review;
        return true;
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
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
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
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
export function useFraudPreventionSignup() {
import {useState, useCallback} from 'react';
import {checkSignupPatterns} from '@/services/fraud/signupCheck';
import {supabase} from '@/integrations/supabase/client';
import {toast} from '@/hooks/use-toast';
export function useFraudPreventionSignup() {;

  const [isCheckingFraud, setIsCheckingFraud] = useState(false);
  // Get the user's IP address (in a real app, you'd do this server-side)
  const getIP = async (): Promise<string | undefined> => {
</string>
  const getIP = async (): Promise<string | undefined> => {;
  const checkFraudBeforeSignup = useCallback(async (email: string): Promise<boolean> => {
</boolean>
  const checkFraudBeforeSignup = useCallback(async (email: string): Promise<boolean> => {;
  const getIP = async (): Promise < string | undefined> => {
    try {
  // TODO: Implement
}
pr-12325
      const response = await fetch ('https: //api.ipify.org?format = json');
      const data = await response.json (),
      return data.ip;
    } catch (error) {
      console.error ('Error getting IP:', error);

import { useState, useCallback  } from 'react';''
import { checkSignupPatterns  } from '@/services/fraud/signupCheck';''
import { supabase  } from '@/integrations/supabase/client';''
import { toast } from '@/hooks/use-toast';'
export function useFraudPreventionSignup() {'
import {useState, useCallback} from 'react';''
import {checkSignupPatterns} from '@/services/fraud/signupCheck';''
import {supabase} from '@/integrations/supabase/client';''
import {toast} from '@/hooks/use-toast';'
export function useFraudPreventionSignup() {;

  const [isCheckingFraud, setIsCheckingFraud] = useState(false);'
  // Get the user's IP address (in a real app, you'd do this server-side)'
  const getIP = async (): Promise<string | undefined> => {
</string>
  const getIP = async (): Promise<string | undefined> => {;
</string>
  const checkFraudBeforeSignup = useCallback(async (email: string): Promise<boolean> => {
</boolean>
  const checkFraudBeforeSignup = useCallback(async (email: string): Promise<boolean> => {;
</boolean>
  const getIP = async (): Promise < string | undefined> => {
    try {
  // TODO: Implement
}'
      const response = await fetch ('https: //api.ipify.org?format = json');'
      const data = await response.json (),
      return data.ip;
    } catch (error) {'
      console.error ('Error getting IP:', error);'
      return undefined;

    }
  }
pr-12325
;
  // Check if the signup attempt might be fraudulent;
  const checkFraudBeforeSignup = useCallback (async (email: string): Promise < boolean> => {
    setIsCheckingFraud (true);
    try {
  // TODO: Implement
}
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
<<<<<<< HEAD
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
<<<<<<< HEAD

          return false;
        }
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    } finally {
      setIsCheckingFraud (false);

    }
  }, []);
;

return {
return {  return {
<<<<<<< HEAD

<<<<<<< HEAD

  return {}
    isCheckingFraud;
checkFraudBeforeSignup}
}    isCheckingFraud;

    checkFraudBeforeSignup}
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
  return {
  // TODO: Implement
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    isCheckingFraud;

    checkFraudBeforeSignup}

`;
pr-12325

    checkFraudBeforeSignup}
}    isCheckingFraud;
    checkFraudBeforeSignup}

}

=======
'

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
