
<<<<<<< HEAD
<<<<<<< HEAD
import { createNotification  } from './createNotification';
import { SystemNotificationParams } from './types';
=======
import {createNotification} from './createNotification';
import {SystemNotificationParams} from './types';
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
/**
 * Creates a system notification for a user
 */
export async function createSystemNotification({;
  userId;
  title;
  message;

  actionUrl = null;
  actionText = null;
  sendEmail = false
}: SystemNotificationParams) {
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
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
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
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
}
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
