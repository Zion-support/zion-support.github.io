
<<<<<<< HEAD
import { createNotification } from './createNotification',;
import { SystemNotificationParams } from './types',;
;
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
} SystemNotificationParams) {;
  return createNotification({;
    userId,;
    title,;
    message,;
    type:'system',;
    sendEmail,;
    actionUrl,;
    actionText;
  }),;
}
=======
import { createNotification } from './createNotification',
import { SystemNotificationParams } from './types',
/**
 * Creates a system notification for a user
 */
export async function createSystemNotification({
  userId,
  title,
  message,
  actionUrl = null,
  actionText = null,
  sendEmail = false
}: SystemNotificationParams) {
  return createNotification({
    userId,
    title,
    message,
    type: 'system',
    sendEmail,
    actionUrl,
    actionText
  })}
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
