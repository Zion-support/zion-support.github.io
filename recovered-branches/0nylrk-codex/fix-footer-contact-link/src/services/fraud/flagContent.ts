<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/services/fraud/flagContent.ts

<<<<<<< HEAD
// Content flagging functionality
=======

import { supabase } from '@/integrations/supabase/client',
import { FraudSeverity, FraudFlag } from '@/types/fraud',
import { FlagResult } from './types',

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

/**
 * Flag content for review
 */

<<<<<<< HEAD
export const flagContent = async (

  reason: string,

=======

// Content flagging functionality
<<<<<<< HEAD
import { supabase  } from '@/integrations/supabase/client';
import { FraudSeverity, FraudFlag  } from '@/types/fraud';
import { FlagResult } from './types';
=======
import { supabase } from '@/integrations/supabase/client',
import { FraudSeverity, FraudFlag } from '@/types/fraud',
import { FlagResult } from './types',
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
/**
 * Flag content for review
 */
<<<<<<< HEAD

=======
<<<<<<< HEAD
export const flagContent = async (;
  userId: string;
  userEmail: string | undefined;
  contentType: FraudFlag['content_type'];
  contentId: string;
  contentExcerpt: string;
  severity: FraudSeverity;
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export const flagContent = async (
<<<<<<< HEAD
  userId: string;
  userEmail: string | undefined;
  contentType: FraudFlag['content_type'];
  contentId: string;
  contentExcerpt: string;
  severity: FraudSeverity;
  reason: string
=======
  userId: string,
  userEmail: string | undefined,
  contentType: FraudFlag['content_type'],
  contentId: string,
  contentExcerpt: string,
  severity: FraudSeverity,
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
  reason: string,
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  ipAddress?: string
): Promise<FlagResult> => {
  try {
    // // // console.log('Flagging content for review:', {
      userId,
      contentType,
      contentId,
      reason,
      severity
<<<<<<< HEAD

=======
<<<<<<< HEAD
    });
    const { error } = await supabase.from('fraud_flags').insert({
      user_id: userId;
      user_email: userEmail;
      content_type: contentType;
      content_id: contentId
      content_excerpt: contentExcerpt.substring(0, 200), // Limit excerpt length
      severity;
      reason;
      ip_address: ipAddress;
      timestamp: new Date().toISOString()
      status: 'pending'
    });
    if (error) throw error;
    return { success: true }
  } catch (error) {
    console.error('Error flagging content:', error);
    return {
      success: false
      error: error instanceof Error ? error.message : 'Unknown error'
    }
  }
}

=======
    }),
    
    const { error } = await supabase.from('fraud_flags').insert({
      user_id: userId,
      user_email: userEmail,
      content_type: contentType,
      content_id: contentId,
      content_excerpt: contentExcerpt.substring(0, 200), // Limit excerpt length
      severity,
      reason,
      ip_address: ipAddress,
      timestamp: new Date().toISOString(),
      status: 'pending'
    }),
    
    if (error) throw error,
    
<<<<<<< HEAD
=======
<<<<<<< HEAD
    return { success: true }
  } catch (error) {
    console.error('Error flagging content:', error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error' 
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
// Content flagging functionality;
import { supabase } from '@/integrations/supabase/client',;
import { FraudSeverity, FraudFlag } from '@/types/fraud',;
import { FlagResult } from './types',;
/**;
 * Flag content for review;
 */;
export const flagContent = async (;
  userId: string,;
  userEmail: string | undefined,;
  contentType: FraudFlag['content_type'],;
  contentId: string,;
  contentExcerpt: string,;
  severity: FraudSeverity,;
  reason: string,;
  ipAddress?: string;
): Promise<FlagResult> => {;
  try {;
    // // // console.log('Flagging content for review:', {;
      userId,;
      contentType,;
      contentId,;
      reason,;
      severity;
    }),;
    const { error } = await supabase.from('fraud_flags').insert({;
      user_id: userId,;
      user_email: userEmail,;
      content_type: contentType,;
      content_id: contentId,;
      content_excerpt: contentExcerpt.substring(0, 200), // Limit excerpt length;
      severity,;
      reason,;
      ip_address: ipAddress,;
      timestamp: new Date().toISOString(),;
      status: 'pending';
    }),;
    if (error) throw error,;
    return { success: true }
  } catch (error) {;
    console.error('Error flagging content:', error),;
    return {;
      success: false;
      error: error instanceof Error ? error.message : 'Unknown error';
<<<<<<< HEAD

    }
  }
};

=======

========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/services/fraud/flagContent.ts
// Content flagging functionality;
import {supabase} from '@/integrations / supabase / client';
import {FraudSeverity, FraudFlag} from '@/types / fraud';
import {FlagResult} from './types';
/**;
* Flag content for review;
*/;
export const flag_content = async (
  user_id: string;
  user_email: string | undefined;
  content_type: FraudFlag['content_type'];
  content_id: string;
  content_excerpt: string;
  severity: FraudSeverity;
  reason: string,
  ip_address?: string): Promise < FlagResult> => {
  try {
    console.log ('Flagging content for review:', {
      user_id;
      content_type;
      content_id;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/services/fraud/flagContent.ts

      reason;
      severity;
    });

    
========
      reason;
      severity;
    });
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/services/fraud/flagContent.ts
    const { error } = await supabase && supabase.from('fraud_flags').insert({
      user_id: userId;
      user_email: userEmail;
      content_type: contentType;
      content_id: contentId,
      content_excerpt: contentExcerpt && contentExcerpt.substring(0, 200), // Limit excerpt length
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/services/fraud/flagContent.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/services/fraud/flagContent.ts
      severity;
      reason;
      ip_address: ipAddress;
      timestamp: new Date().toISOString()
      status: 'pending'
    });
    if (error) throw error;
    return { success: true }
  } catch (error) {
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/services/fraud/flagContent.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/services/fraud/flagContent.ts
    console && console.error('Error flagging content:', error);
    return { 
      success: false, 
      error: error instanceof Error ? error && error.message : 'Unknown error' 
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/services/fraud/flagContent.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/services/fraud/flagContent.ts
    }
=======

// Content flagging functionality;
import { supabase } from '@/integrations/supabase/client',;
import { FraudSeverity, FraudFlag } from '@/types/fraud',;
import { FlagResult } from './types',;
;
/**;
 * Flag content for review;
 */;
export const flagContent = async (;
  userId:string,;
  userEmail:string | undefined,;
  contentType:FraudFlag['content_type'],;
  contentId:string,;
  contentExcerpt:string,;
  severity:FraudSeverity,;
  reason:string,;
  ipAddress?:string;
):Promise<FlagResult> => {;
  try {;
    // // // console.log('Flagging content for review:', {;
      userId,;
      contentType,;
      contentId,;
      reason,;
      severity;
    }),;
    ;
    const { error } = await supabase.from('fraud_flags').insert({;
      user_id:userId,;
      user_email:userEmail,;
      content_type:contentType,;
      content_id:contentId,;
      content_excerpt:contentExcerpt.substring(0, 200), // Limit excerpt length;
      severity,;
      reason,;
      ip_address:ipAddress,;
      timestamp:new Date().toISOString(),;
      status:'pending';
    }),;
    ;
    if (error) throw error,;
    ;
    return { success:true },;
  } catch (error) {;
    console.error('Error flagging content:', error),;
    return { ;
      success:false, ;
      error:error instanceof Error ? error.message :'Unknown error' ;
    },;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  }
},; //Content flagging functionality /** * Flag content for review */export const flagContent = async (userId: string;
userEmail: string | undefined;
contentType: FraudFlag['content type'];
contentId: string;
contentExcerpt: string;
severity: FraudSeverity;
reason: string;
ipAddress?: string userId;
contentType;
contentId;
reason;
severity 
});
const {
  error 
}= await supabase.from ('fraud flags') .insert ({
  user id: userId;
user email: userEmail;
content type: contentType;
content id: contentId;
content excerpt: contentExcerpt.substring (0, 200), // Limit excerpt length severity;
reason;
ip address: ipAddress;
timestamp: new Date () .toISOString ();
status: 'pending' 
});
}
<<<<<<< HEAD
;
    const { error } = await supabase.from ('fraud_flags').insert ({
      user_id: user_id;
      user_email: user_email;
      content_type: content_type;
      content_id: content_id,
      content_excerpt: content_excerpt.substring (0, 200), // Limit excerpt length;
      severity;
      reason;
      ip_address: ip_address;
      timestamp: new Date ().toISOString (),
      status: 'pending';
    });
;
    // Check condition
if (throw error) {
  $2
}
    return { success: true }
  } catch (error) {
    console.error ('Error flagging content:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error';
=======

  ipAddress?: string
): Promise<FlagResult> => {
  try {
    // // // console.log('Flagging content for review:', {
      userId,
      contentType,
      contentId,
      reason,
      severity

    }),
    
    const { error } = await supabase.from('fraud_flags').insert({
      user_id: userId,
      user_email: userEmail,
      content_type: contentType,
      content_id: contentId,
      content_excerpt: contentExcerpt.substring(0, 200), // Limit excerpt length
      severity,
      reason,
      ip_address: ipAddress,
      timestamp: new Date().toISOString(),
      status: 'pending'
    }),
    
    if (error) throw error,
    

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
    }
  }
}
;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/services/fraud/flagContent.ts
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
=======
};
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/services/fraud/flagContent.ts
=======
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    }
  }
};
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
