

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  actionText = null
}: CreateNotificationParams): Promise<CreateNotificationResult> {
  void actionUrl;
  void actionText;
  try {
    // Call the create_notification database function

    const { data, error } = await supabase.rpc('create_notification', {

=======
      _user_id: userId,
      _title: title,
      _message: message,
      _type: type,
      _related_id: relatedId
    }),
    
    if (error) throw error,
    

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
    // If sendEmail is true, call the edge function to send an email
    if (sendEmail && data) {
      const notificationId = data,
      await supabase.functions.invoke('send-notification-email', {

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
        body: { user_id: userId, notification_id: notificationId }
      })
    }
    return { success: true, notificationId: data }

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
    console.error('Error creating notification:', error);

=======
import { supabase } from '@/integrations / supabase / client';
import {CreateNotificationParams, CreateNotificationResult} from './types';
/**;
* Creates a notification for a user and optionally sends an email notification;
*/;
export async function create_notification ({
  user_id;
  title;
  message;
  type;
  related_id = null;
  send_email = false;
  action_url = null;
  action_text = null;
}: CreateNotificationParams): Promise < CreateNotificationResult> {
  void action_url;
  void action_text;
  try {
    // Call the create_notification database function;
    const { data, error } = await supabase.rpc ('create_notification', {
      _user_id: user_id;
      _title: title;
      _message: message;
      _type: type,
      _related_id: related_id;
    });
;
    // Check condition
if (throw error) {
  $2
}
    // If send_email is true, call the edge function to send an email;
    // Check condition
if ( {) {
  $2
}
      const notification_id = data;
      await supabase.functions.invoke ('send - notification - email', {
        body: { user_id: user_id, notification_id: notification_id }
      });
    }
    return { success: true, notification_id: data }
  } catch (error) {
    console.error ('Error creating notification:', error);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
    return { success: false, error }
  }
<<<<<<< HEAD
=======


}
;


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
