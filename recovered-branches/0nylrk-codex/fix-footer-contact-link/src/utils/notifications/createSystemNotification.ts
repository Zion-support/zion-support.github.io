<<<<<<< HEAD
import { createNotification } from './createNotification';
import { SystemNotificationParams } from './types';

/**
 * Creates a system notification for a user
 */
export async function createSystemNotification({
  userId,
  title,
  message,
  actionUrl = null,
  actionText = null,
  sendEmail = false,
}: SystemNotificationParams) {
  return createNotification({
    userId,
    title,
    message,
    type: 'system',
    sendEmail,
    actionUrl,
    actionText,
  });
}
=======
 
}
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
