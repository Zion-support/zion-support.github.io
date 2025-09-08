import { supabase } from "@/integrations/supabase/client";
import { CreateNotificationParams, CreateNotificationResult } from './types';



import {supabase} from "@/integrations/supabase/client";
import {CreateNotificationParams, CreateNotificationResult} from './types';
/**
 * Creates a notification for a user and optionally sends an email notification
 */

export async function createNotification({;
  userId;
  title;
  message;
  type;
  relatedId = null;
  sendEmail = false;
  actionUrl = null;

  userId,
  title,
  message,
  type,

  relatedId = null,
  sendEmail = false,
  actionUrl = null,

  actionText = null
}: CreateNotificationParams): Promise<CreateNotificationResult> {
  void actionUrl;
  void actionText;
  try {
    // Call the create_notification database function

    const { data, error } = await supabase.rpc('create_notification', {




      _user_id: userId,
      _title: title,
      _message: message,
      _type: type,
      _related_id: relatedId

    }),
    
    if (error) throw error,

    

    // If sendEmail is true, call the edge function to send an email
    if (sendEmail && data) {
      const notificationId = data,
      await supabase.functions.invoke('send-notification-email', {



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
    // Call the create_notification database function;'
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
      const notificationId = data;'
      await supabase.functions.invoke('send-notification-email', {;




        body: { user_id: userId, notification_id: notificationId }
      })
    }
    return { success: true, notificationId: data }



import {CreateNotificationParams, CreateNotificationResult} from './types';
/**;
* Creates a notification for a user and optionally sends an email notification;
*/;

  user_id;
  title;
  message;
  type;
  related_id = null;
  send_email = false;
  action_url = null;
  action_text = null;

      _user_id: user_id;
      _title: title;
      _message: message;
      _type: type,
      _related_id: related_id;
    });
;

if (throw error) {
  $2;
    // If send_email is true, call the edge function to send an email;
    // Check condition;
if ( {) {
      const notification_id = data;
      await supabase.functions.invoke ('send - notification - email', {

    return { success: true, notification_id: data }

    console.error ('Error creating notification:', error);
    return { success: false, error }
  }
}
;

  } catch (error) {
  } catch (error) {;
    console.error('Error creating notification:', error);




