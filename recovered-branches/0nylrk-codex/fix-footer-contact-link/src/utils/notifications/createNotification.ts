

/**
 * Creates a notification for a user and optionally sends an email notification
 */
export async function createNotification(_{_userId, _title, _message, _type, _relatedId = null, _sendEmail = false, _actionUrl = null, _actionText = null}: CreateNotificationParams): Promise<CreateNotificationResult> {_void actionUrl;
  void actionText;
  try {
    // Call the create_notification database function
    const { data, _error} = await supabase.rpc(_'create_notification', _{_user_id: userId, _title: title, _message: message, _type: type, _related_id: relatedId});
    
    if (error) throw error;
    
    // If sendEmail is true, call the edge function to send an email
    if (_sendEmail && data) {_const _notificationId = data;
      await supabase.functions.invoke('send-notification-email', _{
        body: { user_id: userId, _notification_id: notificationId}
      });
    }
    
    return {_success: true, _notificationId: data};
  } catch (error) {_return { success: false, _error};
  }
}
