
import { createNotification  } from './createNotification';
import { SystemNotificationParams } from './types';
/**
 * Creates a system notification for a user
 */
export async function createSystemNotification({
  userId;
  title;
  message;
<<<<<<< HEAD
  actionUrl;
=======
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
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
    actionText
  })
}