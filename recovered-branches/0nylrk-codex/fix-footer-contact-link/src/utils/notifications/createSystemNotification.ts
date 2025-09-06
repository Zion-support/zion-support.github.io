<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import {createNotification} from './createNotification';
import {SystemNotificationParams} from './types';


/**
 * Creates a system notification for a user
 */
export async function createSystemNotification({
<<<<<<< HEAD

import { createNotification  } from './createNotification';
import { SystemNotificationParams } from './types';
import {createNotification} from './createNotification';
import {SystemNotificationParams} from './types';
/**
 * Creates a system notification for a user
 */
export async function createSystemNotification({;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  userId;
  title;
  message;

  actionUrl = null;
  actionText = null;
  sendEmail = false
}: SystemNotificationParams) {
<<<<<<< HEAD
=======
  try {
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
=======

import {create_notification} from './create_notification';
import {SystemNotificationParams} from './types';
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


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



}
;
<<<<<<< HEAD
}

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
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
