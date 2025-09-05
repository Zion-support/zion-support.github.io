
<<<<<<< HEAD
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
  })
=======

/**
 * Creates a system notification for a user
 */
export async function createSystemNotification(_{_userId, _title, _message, _actionUrl = null, _actionText = null, _sendEmail = false}: SystemNotificationParams) {_return createNotification({
    userId, _title, _message, _type: 'system', _sendEmail, _actionUrl, _actionText});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
}
