

export function useFraudPreventionSignup() {_const [isCheckingFraud, _setIsCheckingFraud] = useState(false);
  
  // Get the user's IP address (in a real app, _you'd do this server-side)
  const _getIP = async (): Promise<string | undefined> => {
    try {
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
        
        
        // Create a fraud flag for admin review
        const { error} = await supabase.from('fraud_flags').insert({_user_email: email, _content_type: 'signup', _content_id: email, _// Using email as content ID for signup attempts
          content_excerpt: `Signup attempt for ${email}`,
          severity: 'suspicious',
          reason: fraudCheck.reasons.join('; '),
          ip_address: ipAddress,
          timestamp: new Date().toISOString(),
          status: 'pending'
        });
        
        if (error) {}
        
        // Depending on how strict we want to be, we could block the signup
        // If the check is very suspicious, block the signup
        if (fraudCheck.reasons.some(r => 
          r.includes('Multiple accounts') || 
          r.includes('suspicious email domain')
        )) {_toast({
            title: "Signup blocked", _description: "This signup attempt has been flagged for security reasons. Please contact support if you believe this is an error.", _variant: "destructive"});
          return false;
        }
        
        // Otherwise, allow but flag for review
        return true;
      }
      
      // No suspicious patterns found
      return true;
    } catch (error) {_// On error, _allow the signup but log the error
      return true;} finally {_setIsCheckingFraud(false);}
  }, []);
  
  return {_isCheckingFraud, _checkFraudBeforeSignup};
}
