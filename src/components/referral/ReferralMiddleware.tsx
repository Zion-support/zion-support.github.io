import React, { useEffect } from 'react';

const ReferralMiddleware: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useEffect(() => {
    // Handle referral logic here if needed
    const urlParams = new URLSearchParams(window.location.search);
    const referralCode = urlParams.get('ref');
    
    if (referralCode) {
      // Store referral code in localStorage or send to analytics
      localStorage.setItem('referralCode', referralCode);
    }
  }, []);

  return <>{children}</>;
};

export { ReferralMiddleware };