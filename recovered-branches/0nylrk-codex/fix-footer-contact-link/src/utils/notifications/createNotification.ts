
<<<<<<< HEAD
import { supabase } from "@/integrations/supabase/client";
import { CreateNotificationParams, CreateNotificationResult } from './types';
=======
import { supabase } from "@/integrations/supabase/client",
import { CreateNotificationParams, CreateNotificationResult } from './types',

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
/**
 * Creates a notification for a user and optionally sends an email notification
 */
export async function createNotification({
<<<<<<< HEAD
  userId;
  title;
  message;
  type;

  relatedId = null;
  sendEmail = false;
  actionUrl = null;
=======
  userId,
  title,
  message,
  type,
  relatedId = null,
  sendEmail = false,
  actionUrl = null,
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  actionText = null
}: CreateNotificationParams): Promise<CreateNotificationResult> {
  void actionUrl,
  void actionText,
  try {
    // Call the create_notification database function
    const { data, error } = await supabase.rpc('create_notification', {
<<<<<<< HEAD
      _user_id: userId;
      _title: title;
      _message: message;
      _type: type
      _related_id: relatedId
    });
    if (error) throw error;
=======
      _user_id: userId,
      _title: title,
      _message: message,
      _type: type,
      _related_id: relatedId
    }),
    
    if (error) throw error,
    
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
    // If sendEmail is true, call the edge function to send an email
    if (sendEmail && data) {
      const notificationId = data,
      await supabase.functions.invoke('send-notification-email', {
<<<<<<< HEAD
=======
import { supabase } from "@/integrations/supabase/client",;
import { CreateNotificationParams, CreateNotificationResult } from './types',;
/**;
 * Creates a notification for a user and optionally sends an email notification;
 */;
export async function createNotification({;
  userId,;
  title,;
  message,;
  type,;
  relatedId = null,;
  sendEmail = false,;
  actionUrl = null,;
  actionText = null;
}: CreateNotificationParams): Promise<CreateNotificationResult> {;
  void actionUrl,;
  void actionText,;
  try {;
    // Call the create_notification database function;
    const { data, error } = await supabase.rpc('create_notification', {;
      _user_id: userId,;
      _title: title,;
      _message: message,;
      _type: type,;
      _related_id: relatedId;
    }),;
    if (error) throw error,;
    // If sendEmail is true, call the edge function to send an email;
    if (sendEmail && data) {;
      const notificationId = data;
      await supabase.functions.invoke('send-notification-email', {;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
        body: { user_id: userId, notification_id: notificationId }
      })
    }
    return { success: true, notificationId: data }
<<<<<<< HEAD
  } catch (error) {
=======
  } catch (error) {;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
    console.error('Error creating notification:', error);

    return { success: false, error }
  }
<<<<<<< HEAD
}
=======
}
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
