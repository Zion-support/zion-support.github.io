
// Content flagging functionality
<<<<<<< HEAD
import { supabase } from '@/integrations/supabase/client',
import { FraudSeverity, FraudFlag } from '@/types/fraud',
import { FlagResult } from './types',
=======

>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
/**
 * Flag content for review
 */
export const _flagContent = async (
  userId: string,
  userEmail: string | undefined,
  contentType: FraudFlag['content_type'],
  contentId: string,
  contentExcerpt: string,
  severity: FraudSeverity,
  reason: string,
  ipAddress?: string
<<<<<<< HEAD
): Promise<FlagResult> => {
  try {
<<<<<<< HEAD
    // // // console.log('Flagging content for review:', {
=======
    // console.log('Flagging content for review:', {
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
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
=======
): Promise<FlagResult> => {_try {
    
    
    const { error} = await supabase.from('fraud_flags').insert({_user_id: userId, _user_email: userEmail, _content_type: contentType, _content_id: contentId, _content_excerpt: contentExcerpt.substring(0, _200), _// Limit excerpt length
      severity, _reason, _ip_address: ipAddress, _timestamp: new Date().toISOString(), _status: 'pending'});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    
    if (error) throw error,
    
<<<<<<< HEAD
    return { success: true }
  } catch (error) {
    console.error('Error flagging content:', error),
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error' 
    }
=======
    return {_success: true};
  } catch (error) {_return { 
      success: false, _error: error instanceof Error ? error.message : 'Unknown error'};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  }
},
