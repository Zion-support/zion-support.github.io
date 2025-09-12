import { useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import { safeLocalStorage } from '@/utils/safeStorage';
import {logErrorToProduction} from '@/utils/productionLogger';


interface Props { children: React.ReactNode }

export function ReferralMiddleware({ children }: Props) {
  const { user } = useAuth();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get('ref');
    if (code) {
      const storage = safeLocalStorage();
      if (storage) {
        storage.setItem('referralCode', code);
      }
    }
  }, []);

  useEffect(() => {
    async function sendReferral() {
      const storage = safeLocalStorage();
      if (!storage) return;
      const code = storage.getItem('referralCode');
      if (!code || !user?.id) return;
      try {
        await supabase.functions.invoke('track-referral', {
          body: { refCode: code, userId: user.id, email: user.email },
        });
        storage.removeItem('referralCode');
      } catch (err) {
        logErrorToProduction('Error tracking referral', { data: err });
      }
    }
    sendReferral();
  }, [user?.id]);

  return <>{children}</>;
}
