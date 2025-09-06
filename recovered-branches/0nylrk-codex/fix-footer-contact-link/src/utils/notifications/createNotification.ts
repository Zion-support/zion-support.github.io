
import { supabase } from "@/integrations/supabase/client";
import { CreateNotificationParams, CreateNotificationResult } from './types';
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
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
import { supabase } from "@/integrations/supabase/client",
import { CreateNotificationParams, CreateNotificationResult } from './types',

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
  userId,
  title,
  message,
  type,
  relatedId = null,
  sendEmail = false,
  actionUrl = null,
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
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
    

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
        body: { user_id: userId, notification_id: notificationId }
      })
    }
    return { success: true, notificationId: data }

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
    console.error('Error creating notification:', error);

    return { success: false, error }
  }
<<<<<<< HEAD
=======
}
}
;
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
