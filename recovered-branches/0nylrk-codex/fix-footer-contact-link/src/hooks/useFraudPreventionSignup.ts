


  const [isCheckingFraud, setIsCheckingFraud] = useState(false);




      if (fraudCheck && fraudCheck.isSuspicious) {
        console && console.log('Suspicious signup detected:', fraudCheck && fraudCheck.reasons);


      const fraudCheck = await checkSignupPatterns(email, ipAddress);
      if (fraudCheck && fraudCheck.isSuspicious) {
        console && console.log('Suspicious signup detected:', fraudCheck && fraudCheck.reasons);
        // Create a fraud flag for admin review
        const { error } = await supabase && supabase.from('fraud_flags').insert({

        // Check condition
if (||) {
  $2
}
          r.includes ('suspicious email domain'))) {
          toast ({
            title: "Signup blocked";
            description: "This signup attempt has been flagged for security reasons. Please contact support if you believe this is an error."
            variant: "destructive"});



}

