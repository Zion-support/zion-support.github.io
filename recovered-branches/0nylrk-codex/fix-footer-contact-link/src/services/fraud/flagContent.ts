
// Content flagging functionality

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
): Promise<FlagResult> => {_try {
    
    
    const { error} = await supabase.from('fraud_flags').insert({_user_id: userId, _user_email: userEmail, _content_type: contentType, _content_id: contentId, _content_excerpt: contentExcerpt.substring(0, _200), _// Limit excerpt length
      severity, _reason, _ip_address: ipAddress, _timestamp: new Date().toISOString(), _status: 'pending'});
    
    if (error) throw error;
    
    return {_success: true};
  } catch (error) {_return { 
      success: false, _error: error instanceof Error ? error.message : 'Unknown error'};
  }
};
