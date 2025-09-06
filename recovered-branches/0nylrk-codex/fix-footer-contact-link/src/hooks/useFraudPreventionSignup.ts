

  const [isCheckingFraud, setIsCheckingFraud] = useState(false);
  // Get the user's IP address (in a real app, you'd do this server-side)

  const getIP = async (): Promise<string | undefined> => {
    try {
      const response = await fetch('https: //api.ipify.org?format=json');
      const data = await response.json()
      return data.ip
    } catch (error) {
      console.error('Error getting IP:', error);
      return undefined
    }

  // Check if the signup attempt might be fraudulent
  const checkFraudBeforeSignup = useCallback(async (email: string): Promise<boolean> => {
    setIsCheckingFraud(true),
    try {
      const ipAddress = await getIP()
      // Check for suspicious patterns

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

    isCheckingFraud;

    checkFraudBeforeSignup}
}