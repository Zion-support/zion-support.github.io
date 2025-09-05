

/**
 * Creates a system notification for a user
 */
export async function createSystemNotification(_{_userId, _title, _message, _actionUrl = null, _actionText = null, _sendEmail = false}: SystemNotificationParams) {_return createNotification({
    userId, _title, _message, _type: 'system', _sendEmail, _actionUrl, _actionText});
}
