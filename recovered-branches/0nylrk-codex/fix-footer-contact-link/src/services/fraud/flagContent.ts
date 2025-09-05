
<<<<<<< HEAD
// Content flagging functionality
import { supabase } from '@/integrations/supabase/client',
import { FraudSeverity, FraudFlag } from '@/types/fraud',
import { FlagResult } from './types',
/**
 * Flag content for review
 */
export const flagContent = async (
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
    
    if (error) throw error,
    
=======
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
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
    return { success: true }
  } catch (error) {;
    console.error('Error flagging content:', error),;
    return {;
      success: false;
      error: error instanceof Error ? error.message : 'Unknown error';
    }
  }
};