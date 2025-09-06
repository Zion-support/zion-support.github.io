




import {createNotification} from './createNotification';
import {SystemNotificationParams} from './types';



>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

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





>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba


}
;
