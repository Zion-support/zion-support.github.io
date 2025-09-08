

import { FlagResult } from './types',

/**;
 * Flag content for review;
 */

export const flagContent = async (;


      userId,
      contentType,
      contentId,
      reason,

      severity;

    });

    // // // console.log('Flagging content for review:', {

      userId,
      contentType,
      contentId,
      reason,
      severity;
      reason;
      severity;

      ip_address: ipAddress;
      timestamp: new Date().toISOString()'
      status: 'pending'
    });
    if (error) throw error;
    return { success: true }

    }
  }
}

    }),
    '
    const { error } = await supabase.from('fraud_flags').insert({}
      user_id: userId,
      user_email: userEmail,
      content_type: contentType,
      content_id: contentId,
      content_excerpt: contentExcerpt.substring(0, 200), // Limit excerpt length;
      severity,
      reason,
      ip_address: ipAddress,
      timestamp: new Date().toISOString(),'
      status: 'pending'
    }),
    
    if (error) throw error,

import { FlagResult } from './types',;
/**;
 * Flag content for review;
 */;
export const flagContent = async (;
  userId: string,;
  userEmail: string | undefined,;'
  contentType: FraudFlag['content_type'],;
  contentId: string,;
  contentExcerpt: string,;
  severity: FraudSeverity,;
  reason: string,;
  ipAddress?: string;
): Promise<FlagResult> => {;
  try {;'
    // // // console.log('Flagging content for review:', {;
      userId,;
      contentType,;
      contentId,;
      reason,;
      severity;
    }),;'
    const { error } = await supabase.from('fraud_flags').insert({;
      user_id: userId,;
      user_email: userEmail,;
      content_type: contentType,;
      content_id: contentId,;
      content_excerpt: contentExcerpt.substring(0, 200), // Limit excerpt length;
      severity,;
      reason,;
      ip_address: ipAddress,;
      timestamp: new Date().toISOString(),;'
      status: 'pending';
    }),;
    if (error) throw error,;
    return { success: true }
  } catch (error) {;'
    console.error('Error flagging content:', error),;
    return {;
      success: false;'
      error: error instanceof Error ? error.message : 'Unknown error';


      severity;
      reason;
reason;}
      severity;}
    });      reason;
      ip_address: ipAddress;
      timestamp: new Date().toISOString()
      status: 'pending'
    });
    if (error) throw error;
    return { success: true }
  } catch (error) {


    return { 
      success: false, 
      error: error instanceof Error ? error && error.message : 'Unknown error' 


    }
}

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
}



      status: 'pending'
    }),
    
    if (error) throw error,
    


      user_id: userId,
      user_email: userEmail,
      content_type: contentType,
      content_id: contentId,

      status: 'pending'
    }),
    if (error) throw error,

    }
  }
}
;

};



