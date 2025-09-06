


import {supabase} from "@/integrations/supabase/client";
type NotificationType = 'message' | 'quote_request' | 'booking_confirmation' | 'hire_request' | 'onboarding' | 'system';
=======
import { supabase } from "@/integrations/supabase/client",
type NotificationType = 'message' | 'quote_request' | 'booking_confirmation' | 'hire_request' | 'onboarding' | 'system',


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
/**
 * Creates a notification for a user and optionally sends an email notification
 */

export async function createNotification({
  userId,
  title,
  message,
  type,
  relatedId = null,
  sendEmail = false,
  actionUrl = null,

  actionText = null
}: {

  userId: string,
  title: string,
  message: string,
  type: NotificationType,
  relatedId?: string | null,
  sendEmail?: boolean,
  actionUrl?: string | null,

  actionText?: string | null
}) {
  void actionUrl,
  void actionText,
  try {
    // Call the create_notification database function
    const { data, error } = await supabase.rpc('create_notification', {

      _user_id: userId,
      _title: title,
      _message: message,
      _type: type,
      _related_id: relatedId
    }),
    
    if (error) throw error,
    

    // If sendEmail is true, call the edge function to send an email
    if (sendEmail && data) {
      const notificationId = data,
      await supabase.functions.invoke('send-notification-email', {

import { supabase } from "@/integrations/supabase/client",;
type NotificationType = 'message' | 'quote_request' | 'booking_confirmation' | 'hire_request' | 'onboarding' | 'system',;
/**;
 * Creates a notification for a user and optionally sends an email notification;
 */;
export async function createNotification({;
  userId,;
  title,;
  message,;
  type,;
  relatedId = null,;
  sendEmail = false,;
  actionUrl = null,;
  actionText = null;
}: {;
  userId: string,;
  title: string,;
  message: string,;
  type: NotificationType,;
  relatedId?: string | null,;
  sendEmail?: boolean,;
  actionUrl?: string | null,;
  actionText?: string | null;
}) {;
  void actionUrl,;
  void actionText,;
  try {;
    // Call the create_notification database function;
    const { data, error } = await supabase.rpc('create_notification', {;
      _user_id: userId,;
      _title: title,;
      _message: message,;
      _type: type,;
      _related_id: relatedId;
    }),;
    if (error) throw error,;
    // If sendEmail is true, call the edge function to send an email;
    if (sendEmail && data) {;
      const notificationId = data,;
      await supabase.functions.invoke('send-notification-email', {;

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
        body: { user_id: userId, notification_id: notificationId }
      })
    }
    return { success: true, notificationId: data }

  } catch (error) {;
    console.error('Error creating notification:', error),;
=======
=======
  } catch (error) {;
    console.error('Error creating notification:', error),;

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    return { success: false, error }
  }
}

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
/**
 * Creates a hire request notification for admin and talent
 */

export async function createHireRequestNotifications({

    }
  }
  return {
    success: talentNotification.success
    talentNotification
  }
}



/**
 * Creates an onboarding notification for a user
 */
export async function createOnboardingNotification({;
  userId;
  missingMilestone;
  userRole
}: {
  userId: string;
  missingMilestone: string
  userRole: 'talent' | 'client'
}) {
  let title = '';
  let message = '';
  let actionUrl = '';
  let actionText = '';
  if (userRole === 'talent') {
    switch (missingMilestone) {
      case 'profile_completed':
        title = 'Complete your profile';
        message = 'Complete your profile to get discovered by clients';
        actionUrl = '/profile';
        actionText = 'Complete Profile';
        break;
      case 'skills_added':
        title = 'Add your skills';
        message = 'Add your skills to get better job matches';
        actionUrl = '/profile/skills';
        actionText = 'Add Skills';
        break;
      case 'availability_set':
        title = 'Set your availability';
        message = 'Set your availability to help clients know when you can work';
        actionUrl = '/profile/settings';
        actionText = 'Set Availability';
        break
    }
  } else {
    switch (missingMilestone) {
      case 'job_posted':
        title = 'Post your first job';
        message = 'Post your first job to start finding talent';
        actionUrl = '/post-job';
        actionText = 'Post Job';
        break;
      case 'match_viewed':
        title = 'View your AI matches';
        message = 'Check out your AI-matched talent suggestions';
        actionUrl = '/client-dashboard';
        actionText = 'View Matches';
        break;
      case 'talent_invited':
        title = 'Invite talent';
        message = 'Invite talent to speed up your hiring process';
        actionUrl = '/talent';
        actionText = 'Find Talent';
        break
    }
  }
  return createNotification({
    userId;
    title;
    message;
    type: 'onboarding';
    sendEmail: false;
    actionUrl
    actionText
  })
}
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
}: {
  userId: string;
  title: string;
  message: string;
  actionUrl?: string | null;
  actionText?: string | null
  sendEmail?: boolean
}) {
  return createNotification({
    userId;
    title;
    message;
    type: 'system';
    sendEmail;
    actionUrl
    actionText
  })
}
/**
 * Demo function to create test notifications for the current user
 */
export async function createTestNotification(userId: string) {;
  const types: NotificationType[] = ['messagequote_requestbooking_confirmationhire_requestonboardingsystem'];
  const randomType = types[Math.floor(Math.random() * types.length)]
  const titles = {
    'message': 'New Message Receivedquote_request': 'Quote Request Submittedbooking_confirmation': 'Booking Confirmedhire_request': 'New Hire Requestonboarding': 'Complete Your Profilesystem': 'System Update'
  }
  const messages = {
    'message': 'You have received a new message from a potential client.quote_request': 'A client has submitted a quote request for your services.booking_confirmation': 'Your booking has been confirmed and scheduled.hire_request': 'A client wants to hire you for a project. Check your dashboard for details.onboarding': 'Complete your profile to get more visibility and job matches.system': 'Our platform has been updated with new features. Check them out!'
  }
  const actions = {
    'message': { url: '/messages', text: 'View Messages' }
    'quote_request': { url: '/quotes', text: 'View Quote' }
    'booking_confirmation': { url: '/bookings', text: 'View Booking' }
    'hire_request': { url: '/dashboard', text: 'View Request' }
    'onboarding': { url: '/profile', text: 'Complete Profile' }
    'system': { url: '/dashboard', text: 'Learn More' }
  }
  return createNotification({
    userId;
    title: titles[randomType];
    message: messages[randomType];
    type: randomType;
    sendEmail: true;
    actionUrl: actions[randomType].url

    actionText: actions[randomType].text
  })


=======
;
/**;
 * Creates an onboarding notification for a user;
 */;
export async function createOnboardingNotification({;
  userId,;
  missingMilestone,;
  userRole;
}: {;
  userId: string,;
  missingMilestone: string,;
  userRole: 'talent' | 'client';
}) {;
  let title = '',;
  let message = '',;
  let actionUrl = '',;
  let actionText = '',;
  if (userRole === 'talent') {;
    switch (missingMilestone) {;
      case 'profile_completed':;
        title = 'Complete your profile',;
        message = 'Complete your profile to get discovered by clients',;
        actionUrl = '/profile',;
        actionText = 'Complete Profile',;
        break,;
      case 'skills_added':;
        title = 'Add your skills',;
        message = 'Add your skills to get better job matches',;
        actionUrl = '/profile/skills',;
        actionText = 'Add Skills',;
        break,;
      case 'availability_set':;
        title = 'Set your availability',;
        message = 'Set your availability to help clients know when you can work',;
        actionUrl = '/profile/settings',;
        actionText = 'Set Availability',;
        break;
    }
  } else {;
    switch (missingMilestone) {;
      case 'job_posted':;
        title = 'Post your first job',;
        message = 'Post your first job to start finding talent',;
        actionUrl = '/post-job',;
        actionText = 'Post Job',;
        break,;
      case 'match_viewed':;
        title = 'View your AI matches',;
        message = 'Check out your AI-matched talent suggestions',;
        actionUrl = '/client-dashboard',;
        actionText = 'View Matches',;
        break,;
      case 'talent_invited':;
        title = 'Invite talent',;
        message = 'Invite talent to speed up your hiring process',;
        actionUrl = '/talent',;
        actionText = 'Find Talent',;
        break;
    }
  }
;
  return createNotification({;
    userId,;
    title,;
    message,;
    type: 'onboarding',;
    sendEmail: false,;
    actionUrl,;
    actionText;
  });
}
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
}: {;
  userId: string,;
  title: string,;
  message: string,;
  actionUrl?: string | null,;
  actionText?: string | null,;
  sendEmail?: boolean;
}) {;
  return createNotification({;
    userId,;
    title,;
    message,;
    type: 'system',;
    sendEmail,;
    actionUrl,;
    actionText;
  });
}
;
/**;
 * Demo function to create test notifications for the current user;
 */;
export async function createTestNotification(userId: string) {;
  const types: NotificationType[] = ['messagequote_requestbooking_confirmationhire_requestonboardingsystem'],;
  const randomType = types[Math.floor(Math.random() * types.length)],;
  const titles = {;
    'message': 'New Message Receivedquote_request': 'Quote Request Submittedbooking_confirmation': 'Booking Confirmedhire_request': 'New Hire Requestonboarding': 'Complete Your Profilesystem': 'System Update';
  },;
  const messages = {;
    'message': 'You have received a new message from a potential client.quote_request': 'A client has submitted a quote request for your services.booking_confirmation': 'Your booking has been confirmed and scheduled.hire_request': 'A client wants to hire you for a project. Check your dashboard for details.onboarding': 'Complete your profile to get more visibility and job matches.system': 'Our platform has been updated with new features. Check them out!';
  },;
  const actions = {;
    'message': { url: '/messages', text: 'View Messages' },;
    'quote_request': { url: '/quotes', text: 'View Quote' },;
    'booking_confirmation': { url: '/bookings', text: 'View Booking' },;
    'hire_request': { url: '/dashboard', text: 'View Request' },;
    'onboarding': { url: '/profile', text: 'Complete Profile' },;
    'system': { url: '/dashboard', text: 'Learn More' }
  },;
  return createNotification({;
    userId,;
    title: titles[randomType],;
    message: messages[randomType],;
    type: randomType,;
    sendEmail: true;
    actionUrl: actions[randomType].url;
    actionText: actions[randomType].text;
  });


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
}
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
