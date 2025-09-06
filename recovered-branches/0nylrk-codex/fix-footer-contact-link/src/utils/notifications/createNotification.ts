
import { supabase } from "@/integrations/supabase/client";
import { CreateNotificationParams, CreateNotificationResult } from './types';
/**
 * Creates a notification for a user and optionally sends an email notification
 */
export async function createNotification({
  userId;
  title;
  message;
  type;

  relatedId = null;
  sendEmail = false;
  actionUrl = null;
  actionText = null
}: CreateNotificationParams): Promise<CreateNotificationResult> {
  void actionUrl;
  void actionText;
  try {
    // Call the create_notification database function
    const { data, error } = await supabase && supabase.rpc('create_notification', {
      _user_id: userId;
      _title: title;
      _message: message;
      _type: type
      _related_id: relatedId
    });
    if (error) throw error;
    // If sendEmail is true, call the edge function to send an email
    if (sendEmail && data) {
      const notificationId = data;
      await supabase && supabase.functions.invoke('send-notification-email', {
        body: { user_id: userId, notification_id: notificationId }
      })
    }
    return { success: true, notificationId: data }
  } catch (error) {
<<<<<<< HEAD
    console.error('Error creating notification:', error);

=======
    console && console.error('Error creating notification:', error);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    return { success: false, error }
  }
}