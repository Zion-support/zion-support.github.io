
<<<<<<< HEAD
<<<<<<< HEAD
import { supabase } from "@/integrations/supabase/client",
import { CreateNotificationParams, CreateNotificationResult } from './types',
=======
import { supabase } from &quot;@/integrations/supabase/client&quot;;
import { CreateNotificationParams, CreateNotificationResult } from './types';
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

/**
 * Creates a notification for a user and optionally sends an email notification
 */
<<<<<<< HEAD
export async function createNotification({
  userId,
  title,
  message,
  type,
  relatedId = null,
  sendEmail = false,
  actionUrl = null,
  actionText = null
}: CreateNotificationParams): Promise<CreateNotificationResult> {
  void actionUrl,
  void actionText,
  try {
    // Call the create_notification database function
    const { data, error } = await supabase.rpc('create_notification', {
      _user_id: userId,
      _title: title,
      _message: message,
      _type: type,
      _related_id: relatedId
    }),
=======
export async function createNotification(_{_userId, _title, _message, _type, _relatedId = null, _sendEmail = false, _actionUrl = null, _actionText = null}: CreateNotificationParams): Promise<CreateNotificationResult> {_void actionUrl;
  void actionText;
  try {
    // Call the create_notification database function
    const { data, _error} = await supabase.rpc(_'create_notification', _{_user_id: userId, _title: title, _message: message, _type: type, _related_id: relatedId});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    
    if (error) throw error,
    
    // If sendEmail is true, call the edge function to send an email
<<<<<<< HEAD
    if (sendEmail && data) {
      const notificationId = data,
      await supabase.functions.invoke('send-notification-email', {
        body: { user_id: userId, notification_id: notificationId }
      })
    }
    
    return { success: true, notificationId: data }
  } catch (error) {
    console.error('Error creating notification:', error),
    return { success: false, error }
=======
    if (_sendEmail && data) {_const _notificationId = data;
      await supabase.functions.invoke('send-notification-email', _{
        body: { user_id: userId, _notification_id: notificationId}
      });
    }
    
    return {_success: true, _notificationId: data};
  } catch (error) {_return { success: false, _error};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  }
}
