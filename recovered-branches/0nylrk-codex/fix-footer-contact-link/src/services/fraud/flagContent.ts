
// Content flagging functionality
import { supabase  } from '@/integrations/supabase/client';
import { FraudSeverity, FraudFlag  } from '@/types/fraud';
import { FlagResult } from './types';
import { supabase } from '@/integrations/supabase/client',
import { FraudSeverity, FraudFlag } from '@/types/fraud',
import { FlagResult } from './types',
/**
 * Flag content for review
 */


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
  reason: string
  userId: string,
  userEmail: string | undefined,
  contentType: FraudFlag['content_type'],
  contentId: string,
  contentExcerpt: string,
  severity: FraudSeverity,
  reason: string,
  ipAddress?: string
): Promise<FlagResult> => {
  try {
    // // // console.log('Flagging content for review:', {
      userId,
      contentType,
      contentId,
      reason,
      severity
    });

    
    const { error } = await supabase && supabase.from('fraud_flags').insert({
      user_id: userId;
      user_email: userEmail;
      content_type: contentType;
      content_id: contentId,
      content_excerpt: contentExcerpt && contentExcerpt.substring(0, 200), // Limit excerpt length

      severity;
      reason;
      ip_address: ipAddress;
      timestamp: new Date().toISOString()
      status: 'pending'
    });
    if (error) throw error;
    return { success: true }
  } catch (error) {

    console && console.error('Error flagging content:', error);
    return { 
      success: false, 
      error: error instanceof Error ? error && error.message : 'Unknown error' 

    }
  }
}

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
};
