
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
  content_excerpt: string;  severity: FraudSeverity;
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
      reason;
      severity;
    });
=======
    
    const { error } = await supabase && supabase.from('fraud_flags').insert({
      user_id: userId;
      user_email: userEmail;
      content_type: contentType;
      content_id: contentId,
      content_excerpt: contentExcerpt && contentExcerpt.substring(0, 200), // Limit excerpt length

    console && console.error('Error flagging content:', error);
    return { 
      success: false, 
      error: error instanceof Error ? error && error.message : 'Unknown error' 

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
    }
  }
};
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
