<<<<<<< HEAD
<<<<<<< HEAD


=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import {createNotification} from './createNotification';
import {SystemNotificationParams} from './types';


/**
 * Creates a system notification for a user
 */
export async function createSystemNotification({
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

import { createNotification  } from './createNotification';
import { SystemNotificationParams } from './types';
import {createNotification} from './createNotification';
import {SystemNotificationParams} from './types';
/**
 * Creates a system notification for a user
 */
export async function createSystemNotification({;
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  userId;
  title;
  message;

  actionUrl = null;
  actionText = null;
  sendEmail = false
}: SystemNotificationParams) {
<<<<<<< HEAD
<<<<<<< HEAD
  try {
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
  try {
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD

import {create_notification} from './create_notification';
import {SystemNotificationParams} from './types';
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

import {create_notification} from './create_notification';
import {SystemNotificationParams} from './types';
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a


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
<<<<<<< HEAD

}
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
}
;
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

}
;
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
