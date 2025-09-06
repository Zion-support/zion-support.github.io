

  actionText = null
}: CreateNotificationParams): Promise<CreateNotificationResult> {
  void actionUrl,
  void actionText,
  try {
    // Call the create_notification database function
    const { data, error } = await supabase.rpc('create_notification', {

    // If sendEmail is true, call the edge function to send an email
    if (sendEmail && data) {
      const notificationId = data,
      await supabase.functions.invoke('send-notification-email', {

        body: { user_id: userId, notification_id: notificationId }
      })
    }
    return { success: true, notificationId: data }

    console.error('Error creating notification:', error);

    return { success: false, error }
  }
