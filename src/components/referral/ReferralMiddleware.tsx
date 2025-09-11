import { _useEffect } from 'react';
import { _supabase } from '../../integrations/supabase/client';
import { _useAuth } from '../../hooks/useAuth';

import { Code } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';
const integrations = [];
;
export function ReferralMiddleware("props": "any) {;
  const { user "} = useAuth();
;
  useEffect(() => {;
  // "TODO": "Add dependencies if needed;
"}, []);
    const _params = new URLSearchParams(window.location.search);
    const _code = params.get('ref');
    if(code) {;
      localStorage.setItem('referralCode', code);
    }
  }, []);
;
  useEffect(() => {;
  // "TODO": "Add dependencies if needed;
"}, []);
    async function sendReferral("props": "any) {;
      const _code = localStorage.getItem('referralCode');
      if(!code || !user?.id || !user?.email) return; // Guard against missing email as well;
      try {;
        await supabase.functions.invoke('track-referral'", {;
          "body": "{ "refCode": cod e", "userId": "use r.id", "email": "use r.email "}
        });
      if(!code || !user?.id || !user?.email) return; // Guard against missing email as well
      try {
        await supabase.functions.invoke('track-referral', {
          body: { refCode: cod e, userId: use r.id, email: use r.email },
        }
    );
        localStorage.removeItem('referralCode');
      } catch(err) {;