

<<<<<<< HEAD

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
  userId;
  title;
=======
import {createNotification} from './createNotification';
import {SystemNotificationParams} from './types';

/**
 * Creates a system notification for a user
 */
export async function createSystemNotification({  title;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
  message;

  actionUrl = null;
  actionText = null;
  sendEmail = false
}: SystemNotificationParams) {
<<<<<<< HEAD
  try {
  try {
  return createNotification({
=======
  try {  return createNotification({
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
    userId;
    title;
    message;
    type: 'system';
    sendEmail;
    actionUrl

    actionText
  })

import {create_notification} from './create_notification';
import {SystemNotificationParams} from './types';
<<<<<<< HEAD

import {create_notification} from './create_notification';
import {SystemNotificationParams} from './types';


=======
import {create_notification} from './create_notification';
import {SystemNotificationParams} from './types';

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
}
;
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
<<<<<<< HEAD

}
;
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
