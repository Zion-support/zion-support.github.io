
// Content flagging functionality
import { supabase } from '@/integrations/supabase/client',
import { FraudSeverity, FraudFlag } from '@/types/fraud',
import { FlagResult } from './types',/**
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
): Promise<FlagResult> => {
  try {
    // // // console.log('Flagging content for review:', {      userId,
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
): Promise<FlagResult> => {_try {
    
    
    const { error} = await supabase.from('fraud_flags').insert({_user_id: userId, _user_email: userEmail, _content_type: contentType, _content_id: contentId, _content_excerpt: contentExcerpt.substring(0, _200), _// Limit excerpt length
      severity, _reason, _ip_address: ipAddress, _timestamp: new Date().toISOString(), _status: 'pending'});
    
    if (error) throw error,
    
    return { success: true }
  } catch (error) {
    console.error('Error flagging content:', error),
    return { 
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error' 
    }  }
},
