<<<<<<< HEAD

<<<<<<< HEAD
import { createNotification  } from './createNotification';
import { SystemNotificationParams } from './types';
import {createNotification} from './createNotification';
import {SystemNotificationParams} from './types';
=======

import {createNotification} from './createNotification';
import {SystemNotificationParams} from './types';


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
/**
 * Creates a system notification for a user
 */
export async function createSystemNotification({
  userId;
  title;
  message;

  actionUrl = null;
  actionText = null;
  sendEmail = false
}: SystemNotificationParams) {
  try {
  return createNotification({
    userId;
    title;
    message;
    type: 'system';
    sendEmail;
    actionUrl

    actionText
  })
<<<<<<< HEAD
}
=======

import {create_notification} from './create_notification';
import {SystemNotificationParams} from './types';
=======


=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
import { createNotification } from './createNotification',;
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
<<<<<<< HEAD
=======




>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
}
;
=======
}
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
