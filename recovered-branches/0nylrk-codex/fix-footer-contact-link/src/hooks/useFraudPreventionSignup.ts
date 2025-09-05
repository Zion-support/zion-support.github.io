
<<<<<<< HEAD
import { useState, useCallback } from 'react',
import { checkSignupPatterns } from '@/services/fraud/signupCheck',
import { supabase } from '@/integrations/supabase/client',
import { toast } from '@/hooks/use-toast',
export function useFraudPreventionSignup() {
  const [isCheckingFraud, setIsCheckingFraud] = useState(false),
=======

export function useFraudPreventionSignup() {_const [isCheckingFraud, _setIsCheckingFraud] = useState(false);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  
  // Get the user's IP address (in a real app, _you'd do this server-side)
  const _getIP = async (): Promise<string | undefined> => {
    try {
<<<<<<< HEAD
      const response = await fetch('https: //api.ipify.org?format=json'),
      const data = await response.json(),
      return data.ip
    } catch (error) {
      console.error('Error getting IP:', error),
      return undefined
    }
  },
  
  // Check if the signup attempt might be fraudulent
  const checkFraudBeforeSignup = useCallback(async (email: string): Promise<boolean> => {
    setIsCheckingFraud(true),
    try {
      const ipAddress = await getIP(),
      
      // Check for suspicious patterns
      const fraudCheck = await checkSignupPatterns(email, ipAddress),
      
      if (fraudCheck.isSuspicious) {
<<<<<<< HEAD
        // // // console.log('Suspicious signup detected:', fraudCheck.reasons),
=======
        // console.log('Suspicious signup detected:', fraudCheck.reasons);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
      const _response = await fetch('https://api.ipify.org?format=json');
      const _data = await response.json();
      return data.ip;} catch (error) {_return undefined;}
  };
  
  // Check if the signup attempt might be fraudulent
  const _checkFraudBeforeSignup = useCallback(async (email: string): Promise<boolean> => {_setIsCheckingFraud(true);
    try {
      const _ipAddress = await getIP();
      
      // Check for suspicious patterns
      const _fraudCheck = await checkSignupPatterns(email, _ipAddress);
      
      if (fraudCheck.isSuspicious) {
        
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        
        // Create a fraud flag for admin review
        const { error} = await supabase.from('fraud_flags').insert({_user_email: email, _content_type: 'signup', _content_id: email, _// Using email as content ID for signup attempts
          content_excerpt: `Signup attempt for ${email}`,
          severity: 'suspicious',
          reason: fraudCheck.reasons.join(),
          ip_address: ipAddress,
          timestamp: new Date().toISOString(),
          status: 'pending'
        }),
        
<<<<<<< HEAD
        if (error) {
          console.error('Error creating fraud flag:', error)
        }
=======
        if (error) {}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        
        // Depending on how strict we want to be, we could block the signup
        // If the check is very suspicious, block the signup
        if (fraudCheck.reasons.some(r => 
          r.includes('Multiple accounts') || 
          r.includes('suspicious email domain')
<<<<<<< HEAD
        )) {
          toast({
<<<<<<< HEAD
            title: "Signup blocked",
            description: "This signup attempt has been flagged for security reasons. Please contact support if you believe this is an error.",
            variant: "destructive"}),
          return false
=======
            title: &quot;Signup blocked&quot;,
            description: &quot;This signup attempt has been flagged for security reasons. Please contact support if you believe this is an error.&quot;,
            variant: &quot;destructive&quot;});
=======
        )) {_toast({
            title: "Signup blocked", _description: "This signup attempt has been flagged for security reasons. Please contact support if you believe this is an error.", _variant: "destructive"});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          return false;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
        }
        
        // Otherwise, allow but flag for review
        return true
      }
      
      // No suspicious patterns found
<<<<<<< HEAD
      return true
    } catch (error) {
      console.error('Error in fraud check:', error),
      // On error, allow the signup but log the error
      return true
    } finally {
      setIsCheckingFraud(false)
    }
  }, []),
  
  return {
    isCheckingFraud,
    checkFraudBeforeSignup}
=======
      return true;
    } catch (error) {_// On error, _allow the signup but log the error
      return true;} finally {_setIsCheckingFraud(false);}
  }, []);
  
  return {_isCheckingFraud, _checkFraudBeforeSignup};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
}
