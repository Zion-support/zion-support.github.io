

import { supabase } from '@/integrations/supabase/client',
import { FraudSeverity, FraudFlag } from '@/types/fraud',
import { FlagResult } from './types',


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
  reason: string,
  ip_address?: string): Promise < FlagResult> => {
  try {
    console.log ('Flagging content for review:', {
      user_id;
      content_type;
      content_id;

      reason;
      severity;
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

=======
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
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    }
  }
}
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
