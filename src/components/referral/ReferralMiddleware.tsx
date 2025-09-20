interface Service {
  
id: string;
name: string;
}
}
}

import React from "react";
import { useEffect  } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
,
export function ReferralMiddleware("props": "any) {,
const { user "} = useAuth(),
,
useEffect(() => {,
}, []),;
,;
useEffect(() => {,;
// "TODO": "Add dependencies if needed,;
localStorage.removeItem("referralCode")
} catch(err) {,
console.error("Error tracking referral", err)}
}
sendReferral()
}, [user?.id; user?.email]), // Added user?.email;