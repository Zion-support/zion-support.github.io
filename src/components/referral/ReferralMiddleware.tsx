import { useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';

export function ReferralMiddleware() {

  const { user } = useAuth();

  useEffect(() => {
  // TODO: Add dependencies if needed;
}, []);
    const params = new URLSearchParams(window.location.search);
    const code = params.get('ref');
    if() {

      localStorage.setItem('referralCode', code);
    }
  }, []);

  useEffect(() => {
  // TODO: Add dependencies if needed;
}, []);
    async function sendReferral() {

      const code = localStorage.getItem('referralCode');
      if(!code || !user?.id || !user?.email) return; // Guard against missing email as well;
      try {
        await supabase.functions.invoke('track-referral', {
          body: { refCode: code, userId: user.id, email: user.email }
        });
        localStorage.removeItem('referralCode');
      } catch() {

        console.error('Error tracking referral', err);
      }
    }
    sendReferral();
  }, [user?.id, user?.email]); // Added user?.email;
  return <>{children}</>;
}
