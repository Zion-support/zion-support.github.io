
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
<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
export const flagContent = async (;
  userId: string;
  userEmail: string | undefined;
  contentType: FraudFlag['content_type'];
  contentId: string;
  contentExcerpt: string;
  severity: FraudSeverity;
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
export const flagContent = async (
  userId: string;
  userEmail: string | undefined;
  contentType: FraudFlag['content_type'];
  contentId: string;
  contentExcerpt: string;
=======


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
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
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
    
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
<<<<<<< HEAD
    return { success: true }
  } catch (error) {
    console.error('Error flagging content:', error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error' 
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
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
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
    }
  }
};
