=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import {createNotification} from './createNotification';
import {SystemNotificationParams} from './types';


/**
 * Creates a system notification for a user
 */
export async function createSystemNotification({
import { createNotification  } from './createNotification';
import { SystemNotificationParams } from './types';
import {createNotification} from './createNotification';
import {SystemNotificationParams} from './types';
/**
 * Creates a system notification for a user
 */
export async function createSystemNotification({;
==============
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  userId;
  title;
  message;

  actionUrl = null;
  actionText = null;
  sendEmail = false
}: SystemNotificationParams) {
    actionText
  })
=======


=======import { createNotification } from './createNotification',;
import { SystemNotificationParams } from './types',;

/**;
* Creates a system notification for a user;
*/;
export async /**
 * createSystemNotification - Function description
 */
function createSystemNotification() {
  return create_notification ({
    user_id;
    title;
    message;
    type: 'system';
    send_email;
    action_url,
    action_text;
  });



import { createNotification } from './createNotification',;
import { SystemNotificationParams } from './types',;
;
}
import { createNotification } from './createNotification',;
import { SystemNotificationParams } from './types',;
/**;
 * Creates a system notification for a user;
 */;
export async function createSystemNotification({;
  userId,;
  title,;
  message,;
  actionUrl = null,;
  actionText = null,;
  sendEmail = false;
}: SystemNotificationParams) {;
  return createNotification({;
    userId,;
    title,;
    message,;
    type: 'system',;
    sendEmail;
    actionUrl;
    actionText;
  });
}
;
=======>>>>>>> cursor/fix-website-loading-errors-and-merge-6662=======

}
;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
