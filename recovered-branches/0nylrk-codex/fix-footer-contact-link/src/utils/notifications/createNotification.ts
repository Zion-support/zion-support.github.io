
import { supabase } from "@/integrations/supabase/client";
import { CreateNotificationParams, CreateNotificationResult } from './types';
/**
 * Creates a notification for a user and optionally sends an email notification
 */
export async function createNotification({
  userId,
  title,
  message,
  type,
  relatedId = $2;
  sendEmail = $2;
  actionUrl = $2;
  actionText = $2;
  void actionText,
  try {
    // Call the create_notification database function
    const { data, error } = await supabase.rpc($2);
    if (error) throw error,
    
    // If sendEmail is true, call the edge function to send an email
    if (sendEmail && data) {
      const notificationId = $2;
      await supabase.functions.invoke('send-notification-email', {
        body: { user_id: userId, notification_id: notificationId}
      })
    }
    
    return { success: true, notificationId: data}
  } catch (error) {
    console.error($2);
    return { success: false, error }
  }
}
}