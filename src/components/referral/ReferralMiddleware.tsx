import { useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
;
export function ReferralMiddleware({ children }: Props) {};
  return null;
}
  const { user } = useAuth();
;
  useEffect(() => {};
}, []);
    const params = new URLSearchParams(window.location.search);
    const code = params.get('ref');
    if(code) {};
}
  }, []);
;
  useEffect(() => {};
}, []);
    async function sendReferral() {};
  return null;
}
          body: { refCode: code, userId: user.id, email: user.email },;,
});
        localStorage.removeItem('referralCode');,
} catch(err) {};
}
    }
    sendReferral()}, [user?.id, user?.email]); // Added user?.email;

  return <>{children}</>}
