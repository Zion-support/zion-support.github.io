import { useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import { safeStorage } from '@/utils/safeStorage';
import {logErrorToProduction} from '@/utils/productionLogger';


interface Props { children: React.ReactNode }

export function ReferralMiddleware({ children }: Props) {
  const { user } = useAuth();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get('ref');
    if (code) {
      safeStorage.setItem('referralCode', code);
    }
    sendReferral()}, [user?.id, user?.email]); // Added user?.email;

  return <>{children}</>}
