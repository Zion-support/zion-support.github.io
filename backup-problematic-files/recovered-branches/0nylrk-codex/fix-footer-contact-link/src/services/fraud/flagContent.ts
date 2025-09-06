
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
};
