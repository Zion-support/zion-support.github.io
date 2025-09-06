

=======
import {createNotification} from './createNotification';
import {SystemNotificationParams} from './types';


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
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
;
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
