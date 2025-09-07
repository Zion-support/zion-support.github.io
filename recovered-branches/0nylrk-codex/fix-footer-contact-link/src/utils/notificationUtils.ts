<<<<<<< HEAD
import {supabase} from "@/integrations/supabase/client";

=======
<<<<<<< HEAD

import { supabase } from "@/integrations/supabase/client";
type NotificationType = $2;
/**
 * Creates a notification for a user and optionally sends an email notification
 */
export async function createNotification({
=======
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import {supabase} from "@/integrations/supabase/client";

<<<<<<< HEAD
=======
import { supabase } from "@/integrations/supabase/client",
type NotificationType = 'message' | 'quote_request' | 'booking_confirmation' | 'hire_request' | 'onboarding' | 'system',




>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
/**
 * Creates a notification for a user and optionally sends an email notification
 */

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import {supabase} from "@/integrations/supabase/client";
type NotificationType = 'message' | 'quote_request' | 'booking_confirmation' | 'hire_request' | 'onboarding' | 'system';
import { supabase } from "@/integrations/supabase/client",

<<<<<<< HEAD
=======
=======
<<<<<<< HEAD

import {supabase} from "@/integrations/supabase/client";
type NotificationType = 'message' | 'quote_request' | 'booking_confirmation' | 'hire_request' | 'onboarding' | 'system';
import { supabase } from "@/integrations/supabase/client",
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
type NotificationType = 'message' | 'quote_request' | 'booking_confirmation' | 'hire_request' | 'onboarding' | 'system',

/**
 * Creates a notification for a user and optionally sends an email notification
<<<<<<< HEAD

 */

=======
<<<<<<< HEAD

 */

=======
 */
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
export async function createNotification({;
  userId;
  title;
  message;
  type;
  relatedId = null;
  sendEmail = false;
  actionUrl = null;
<<<<<<< HEAD

export async function createNotification({

=======
<<<<<<< HEAD

=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
export async function createNotification({

>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  userId,
  title,
  message,
  type,
<<<<<<< HEAD
  relatedId = null,
  sendEmail = false,
  actionUrl = null,
=======
<<<<<<< HEAD
  relatedId = $2;
  sendEmail = $2;
  actionUrl = $2;
  actionText = $2;
=======
  relatedId = null,
  sendEmail = false,
  actionUrl = null,
<<<<<<< HEAD
  actionText = null
}: {
  userId: string;
  title: string;
  message: string;
  type: NotificationType;
  relatedId?: string | null;
  sendEmail?: boolean;
  actionUrl?: string | null
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

  userId: string;
  title: string;
  message: string;
  type: NotificationType;
  relatedId?: string | null;
  sendEmail?: boolean;

<<<<<<< HEAD
  userId: string,
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  userId: string,
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  title: string,
  message: string,
  type: NotificationType,
  relatedId?: string | null,
  sendEmail?: boolean,
  actionUrl?: string | null,
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
  actionText?: string | null
}) {
  void actionUrl,
  void actionText,
  try {
    // Call the create_notification database function
    const { data, error } = await supabase.rpc('create_notification', {
      _user_id: userId;
      _title: title;
      _message: message;
      _type: type
      _related_id: relatedId
    });
    if (error) throw error;
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

  actionText?: string | null

}) {
  void actionUrl;
  void actionText;
  try {
    // Call the create_notification database function

    const { data, error } = await supabase.rpc('create_notification', {

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  actionText?: string | null
}) {
  void actionUrl,
  void actionText,
  try {
    // Call the create_notification database function
<<<<<<< HEAD
=======
<<<<<<< HEAD
    const { data, error } = await supabase.rpc($2);
    if (error) throw error,
    
    // If sendEmail is true, call the edge function to send an email
    if (sendEmail && data) {
      const notificationId = $2;
      await supabase.functions.invoke('send-notification-email', {
        body: { user_id: userId, notification_id: notificationId}
      })
    }
    
    return { success: true, notificationId: data}
  } catch (error) {
    console.error($2);
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

    const { data, error } = await supabase.rpc('create_notification', {
      _user_id: userId;
      _title: title;
      _message: message;
      _type: type
      _related_id: relatedId
    });
    if (error) throw error;

<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      _user_id: userId,
      _title: title,
      _message: message,
      _type: type,
      _related_id: relatedId
    }),
    
    if (error) throw error,
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
    
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    // If sendEmail is true, call the edge function to send an email
    if (sendEmail && data) {
      const notificationId = data,
      await supabase.functions.invoke('send-notification-email', {
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import { supabase } from "@/integrations/supabase/client",;

type NotificationType = 'message' | 'quote_request' | 'booking_confirmation' | 'hire_request' | 'onboarding' | 'system',;
/**;
 * Creates a notification for a user and optionally sends an email notification;
 */;
export async function createNotification() { return null; }
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
      const notificationId = data,;'
      await supabase.functions.invoke('send-notification-email', {;
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        body: { user_id: userId, notification_id: notificationId }
      })
    }
    return { success: true, notificationId: data }
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      success: talentNotification && talentNotification.success && adminNotification && adminNotification.success;

      talentNotification,

success: talentNotification && talentNotification.success && adminNotification && adminNotification.success;
      talentNotification,
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

  } catch (error) {
    console.error('Error creating notification:', error);
    return { success: false, error }
  }
}

<<<<<<< HEAD
=======
  } catch (error) {;
    console.error('Error creating notification:', error),;
  } catch (error) {;
    console.error('Error creating notification:', error),;

=======
      adminNotification

<<<<<<< HEAD
  } catch (error) {
    console.error('Error creating notification:', error);
    return { success: false, error }
  }
}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  } catch (error) {;
    console.error('Error creating notification:', error),;
  } catch (error) {;
    console.error('Error creating notification:', error),;
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    return { success: false, error }
  }
}

/**
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
 * Creates a hire request notification for admin and talent
 */
<<<<<<< HEAD
export async function createHireRequestNotifications({;
  talentId;
  adminId;
  requesterName;
export async function createHireRequestNotifications({
  talentId;
  adminId;
  requesterName;
  requesterEmail
  projectType;
  projectSummary;
  hireRequestId
}: {
  talentId: string;
  adminId?: string;
  requesterName: string;
  requesterEmail: string;
  projectType?: string;
  projectSummary?: string
  hireRequestId: string
}) {
  const projectInfo = projectType
    ? `${projectType} project`
    : "project";
  const summaryText = projectSummary
    ? `: "${projectSummary}"`
    : "";
  // Create notification for talent
  const talentNotification = await createNotification({
    userId: talentId
    title: `New Hire Request from ${requesterName}`;
    message: `${requesterName} (${requesterEmail}) wants to hire you for a ${projectInfo}${summaryText}`;
    type: 'hire_request';
    relatedId: hireRequestId;
    sendEmail: true;
    actionUrl: '/dashboard'
    actionText: 'View Request'
  });
  // Create notification for admin if admin ID is provided
  if (adminId) {
    const adminNotification = await createNotification({
      userId: adminId;
      title: `New Hire Request for Talent`
      message: `${requesterName} (${requesterEmail}) wants to hire talent for a ${projectInfo}${summaryText}`;
      type: 'hire_request';
      relatedId: hireRequestId;
      sendEmail: true;
      actionUrl: '/admin/hire-requests'
      actionText: 'Review Request'
    });
    return {
      success: talentNotification.success && adminNotification.success;
      talentNotification
      adminNotification
  talentId,
  adminId,
  requesterName,
  requesterEmail, 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  projectType,
  projectSummary,
  hireRequestId
}: {
  talentId: string,
  adminId?: string,
  requesterName: string,
  requesterEmail: string,
  projectType?: string,
  projectSummary?: string,
  hireRequestId: string
}) {
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  const projectInfo = projectType
    ? `${projectType} project`
    : "project",

  const summaryText = projectSummary
    ? `: "${projectSummary}"`
    : "",

<<<<<<< HEAD
=======
=======
  const projectInfo = projectType 
    ? `${projectType} project` 
    : "project",
  
  const summaryText = projectSummary 
    ? `: "${projectSummary}"` 
    : "",
  
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  // Create notification for talent
  const talentNotification = await createNotification({
    userId: talentId,
    title: `New Hire Request from ${requesterName}`,
    message: `${requesterName} (${requesterEmail}) wants to hire you for a ${projectInfo}${summaryText}`,
    type: 'hire_request',
    relatedId: hireRequestId,
    sendEmail: true,
    actionUrl: '/dashboard',
    actionText: 'View Request'
  }),
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
  
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  // Create notification for admin if admin ID is provided
  if (adminId) {
    const adminNotification = await createNotification({
      userId: adminId,
      title: `New Hire Request for Talent`,
      message: `${requesterName} (${requesterEmail}) wants to hire talent for a ${projectInfo}${summaryText}`,
      type: 'hire_request',
      relatedId: hireRequestId,
      sendEmail: true,
      actionUrl: '/admin/hire-requests',
      actionText: 'Review Request'
    }),
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
    
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    return {
      success: talentNotification.success && adminNotification.success,
      talentNotification,
      adminNotification
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
;
/**;
 * Creates a hire request notification for admin and talent;
 */;
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
export async function createHireRequestNotifications({;
  talentId,;
  adminId,;
  requesterName,;
  requesterEmail,;
  projectType,;
  projectSummary,;
  hireRequestId;
}: {;
  talentId: string,;
  adminId?: string,;
  requesterName: string,;
  requesterEmail: string,;
  projectType?: string,;
  projectSummary?: string,;
  hireRequestId: string;
}) {;
  const projectInfo = projectType;
    ? `${projectType} project`;
    : "project",;
  const summaryText = projectSummary;
    ? `: "${projectSummary}"`;
    : "",;
  // Create notification for talent;
  const talentNotification = await createNotification({;
    userId: talentId,;
    title: `New Hire Request from ${requesterName}`,;
    message: `${requesterName} (${requesterEmail}) wants to hire you for a ${projectInfo}${summaryText}`,;
    type: 'hire_request',;
    relatedId: hireRequestId,;
    sendEmail: true,;
    actionUrl: '/dashboard',;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    actionText: 'View Request';
  }),;
  // Create notification for admin if admin ID is provided;
  if (adminId) {;
    const adminNotification = await createNotification({;
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
      userId: adminId,;
      title: `New Hire Request for Talent`,;
      message: `${requesterName} (${requesterEmail}) wants to hire talent for a ${projectInfo}${summaryText}`,;
      type: 'hire_request',;
      relatedId: hireRequestId,;
      sendEmail: true,;
      actionUrl: '/admin/hire-requests',;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      actionText: 'Review Request';
    }),;
    return {;
      success: talentNotification.success && adminNotification.success,;
      talentNotification,;
      adminNotification;
<<<<<<< HEAD

export async function createHireRequestNotifications({

=======
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
export async function createHireRequestNotifications({

    }
  }
<<<<<<< HEAD
  return {}
    talentNotification;
  }
}

=======
  return {
    success: talentNotification && talentNotification.success,
    talentNotification
  }
}





/**
 * Creates an onboarding notification for a user
 */
export async function createOnboardingNotification({
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    }
  }
  return {}
    talentNotification;
  }
}

<<<<<<< HEAD
    }
    return { success: true, notification_id: data }
  } catch (error) {'
    console.error ('Error creating notification:', error);
    return { success: false, error }

        action_text = 'Complete Profile';
        break;'
      case 'skills_added':;'
        title = 'Add your skills';'
        message = 'Add your skills to get better job matches';'
        action_url = '/profile / skills';'
        action_text = 'Add Skills';
        break;'
      case 'availability_set':;'
        title = 'Set your availability';'
        message = 'Set your availability to help clients know when you can work';'
        action_url = '/profile / settings';'
        action_text = 'Set Availability';
        break;
    }
  } else {}
    switch (missing_milestone) {'
      case 'job_posted':;'
        title = 'Post your first job';'
        message = 'Post your first job to start finding talent';'
        action_url = '/post - job';'
        action_text = 'Post Job';
        break;'
      case 'match_viewed':;'
        title = 'View your AI matches';'
        message = 'Check out your AI - matched talent suggestions';'
        action_url = '/client - dashboard';'
        action_text = 'View Matches';
        break;'
      case 'talent_invited':;'
        title = 'Invite talent';'
        message = 'Invite talent to speed up your hiring process';'
        action_url = '/talent';'

        action_text = 'Find Talent';
        break;
    }
  }

    type: 'onboarding';
    send_email: false;
    action_url,
    action_text;
  });
}
/**;
* Creates a system notification for a user;
*/;

    type: 'system';
    send_email;
    action_url,
    action_text;
  });
}
/**;
* Demo function to create test notifications for the current user;
*/;

  const titles = {
    'message': 'New Message Receivedquote_request': 'Quote Request Submittedbooking_confirmation': 'Booking Confirmedhire_request': 'New Hire Requestonboarding': 'Complete Your Profilesystem': 'System Update'
  }
  const messages = {

  const random_type = types[Math.floor (Math.random () * types.length)],
  const titles = {'
    'message': 'New Message Receivedquote_request': 'Quote Request Submittedbooking_confirmation': 'Booking Confirmedhire_request': 'New Hire Requestonboarding': 'Complete Your Profilesystem': 'System Update';
  }
;
  const messages = {'
    'message': 'You have received a new message from a potential client.quote_request': 'A client has submitted a quote request for your services.booking_confirmation': 'Your booking has been confirmed and scheduled.hire_request': 'A client wants to hire you for a project. Check your dashboard for details.onboarding': 'Complete your profile to get more visibility and job matches.system': 'Our platform has been updated with new features. Check them out!';
  }
;

  const actions = {

    'message': { url: '/messages', text: 'View Messages' }
    'quote_request': { url: '/quotes', text: 'View Quote' }
    'booking_confirmation': { url: '/bookings', text: 'View Booking' }
    'hire_request': { url: '/dashboard', text: 'View Request' }
    'onboarding': { url: '/profile', text: 'Complete Profile' }

    'system': { url: '/dashboard', text: 'Learn More' }
  }

;

;
  return create_notification ({}
    user_id;
    title: titles[random_type];
    message: messages[random_type];
    type: random_type;
    send_email: true;
    action_url: actions[random_type].url,
    action_text: actions[random_type].text;

;
/**;
 * Creates a system notification for a user;
 */;

    sendEmail,;
    actionUrl,;
    actionText;
  }),;

}
;
/**;
 * Demo function to create test notifications for the current user;
 */;
export async function createTestNotification() { return null; }
  },;
  const messages = {;'
    'message': 'You have received a new message from a potential client.quote_request': 'A client has submitted a quote request for your services.booking_confirmation': 'Your booking has been confirmed and scheduled.hire_request': 'A client wants to hire you for a project. Check your dashboard for details.onboarding': 'Complete your profile to get more visibility and job matches.system': 'Our platform has been updated with new features. Check them out!';
  },;
  const actions = {;'
    'message': { url: '/messages', text: 'View Messages' },;'
    'quote_request': { url: '/quotes', text: 'View Quote' },;'
    'booking_confirmation': { url: '/bookings', text: 'View Booking' },;'
    'hire_request': { url: '/dashboard', text: 'View Request' },;'
    'onboarding': { url: '/profile', text: 'Complete Profile' },;'
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

}
;
}

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

}
;
}
;
export async function createTestNotification(userId:string) {;
  const types:NotificationType[] = ['messagequote_request', 'booking_confirmationhire_request', 'onboardingsystem'],;
  const randomType = types[Math.floor(Math.random() * types.length)],;
  ;
  const titles = {;
    'message':'New Message Receivedquote_request':'Quote Request Submittedbooking_confirmation':'Booking Confirmedhire_request':'New Hire Requestonboarding':'Complete Your Profilesystem':'System Update';
  },;
  ;
  const messages = {;
    'message':'You have received a new message from a potential client.quote_request':'A client has submitted a quote request for your services.booking_confirmation':'Your booking has been confirmed and scheduled.hire_request':'A client wants to hire you for a project. Check your dashboard for details.onboarding':'Complete your profile to get more visibility and job matches.system':'Our platform has been updated with new features. Check them out!';
  },;
  ;
  const actions = {;
  sendEmail?:boolean;)
/**;
 * Demo function to create test notifications for the current user;
 */;
export async function createTestNotification(userId: string) {;'
  const types: NotificationType[] = ['messagequote_requestbooking_confirmationhire_requestonboardingsystem'],;'
  const randomType = types[Math.floor(Math.random() * types.length)],;
  const titles = {;'
    'message': 'New Message Receivedquote_request': 'Quote Request Submittedbooking_confirmation': 'Booking Confirmedhire_request': 'New Hire Requestonboarding': 'Complete Your Profilesystem': 'System Update';'
  },;
  const messages = {;'
    'message': 'You have received a new message from a potential client.quote_request': 'A client has submitted a quote request for your services.booking_confirmation': 'Your booking has been confirmed and scheduled.hire_request': 'A client wants to hire you for a project. Check your dashboard for details.onboarding': 'Complete your profile to get more visibility and job matches.system': 'Our platform has been updated with new features. Check them out!';'
  },;
  const actions = {;'
    'message': { url: '/messages', text: 'View Messages' },;''
    'quote_request': { url: '/quotes', text: 'View Quote' },;''
    'booking_confirmation': { url: '/bookings', text: 'View Booking' },;''
    'hire_request': { url: '/dashboard', text: 'View Request' },;''
    'onboarding': { url: '/profile', text: 'Complete Profile' },;''
    'system': { url: '/dashboard', text: 'Learn More' }'
  },;
  return createNotification({;
    type: 'system',;
    sendEmail,;
    actionUrl,;
    actionText;)
    type:'system',;
    actionText;
/**;
export async function createTestNotification(userId: string) {;
  const types: NotificationType[] = ['messagequote_requestbooking_confirmationhire_requestonboardingsystem'],;
  const randomType = types[Math.floor(Math.random() * types.length)],;
  const titles = {;
  },;
  const messages = {;
  const actions = {;
    'message': { url: '/messages', text: 'View Messages' },;
    'quote_request': { url: '/quotes', text: 'View Quote' },;
    'booking_confirmation': { url: '/bookings', text: 'View Booking' },;
    'hire_request': { url: '/dashboard', text: 'View Request' },;
    'onboarding': { url: '/profile', text: 'Complete Profile' },;
    title: titles[randomType],;
    message: messages[randomType],;
    type: randomType,;
    sendEmail: true;,
  actionUrl: actions[randomType].url;
    actionText: actions[randomType].text;)

export async function createTestNotification(userId:string) {;
  const types:NotificationType[] = ['messagequote_request', 'booking_confirmationhire_request', 'onboardingsystem'],;
    'message':'New Message Receivedquote_request':'Quote Request Submittedbooking_confirmation':'Booking Confirmedhire_request':'New Hire Requestonboarding':'Complete Your Profilesystem':'System Update';
    'message':'You have received a new message from a potential client.quote_request':'A client has submitted a quote request for your services.booking_confirmation':'Your booking has been confirmed and scheduled.hire_request':'A client wants to hire you for a project. Check your dashboard for details.onboarding':'Complete your profile to get more visibility and job matches.system':'Our platform has been updated with new features. Check them out!';
pr-12325
    'message':{ url:'/messages', text:'View Messages' },;
    'quote_request':{ url:'/quotes', text:'View Quote' },;
    'booking_confirmation':{ url:'/bookings', text:'View Booking' },;
    'hire_request':{ url:'/dashboard', text:'View Request' },;
    'onboarding':{ url:'/profile', text:'Complete Profile' },;
    'system':{ url:'/dashboard', text:'Learn More' }
}
;
}
;
export async function createTestNotification(userId:string) {;'
  const types:NotificationType[] = ['messagequote_request', 'booking_confirmationhire_request', 'onboardingsystem'],;'
  const randomType = types[Math.floor(Math.random() * types.length)],;
  ;
  const titles = {;'
    'message':'New Message Receivedquote_request':'Quote Request Submittedbooking_confirmation':'Booking Confirmedhire_request':'New Hire Requestonboarding':'Complete Your Profilesystem':'System Update';'
  },;
  ;
  const messages = {;'
    'message':'You have received a new message from a potential client.quote_request':'A client has submitted a quote request for your services.booking_confirmation':'Your booking has been confirmed and scheduled.hire_request':'A client wants to hire you for a project. Check your dashboard for details.onboarding':'Complete your profile to get more visibility and job matches.system':'Our platform has been updated with new features. Check them out!';'
  },;
  ;
  const actions = {;'
    'message':{ url:'/messages', text:'View Messages' },;''
    'quote_request':{ url:'/quotes', text:'View Quote' },;''
    'booking_confirmation':{ url:'/bookings', text:'View Booking' },;''
    'hire_request':{ url:'/dashboard', text:'View Request' },;''
    'onboarding':{ url:'/profile', text:'Complete Profile' },;''
    'system':{ url:'/dashboard', text:'Learn More' }'

  },;
  ;
  return createNotification({;
    userId,;
pr-12325
    title:titles[randomType],;
    message:messages[randomType],;
    type:randomType,;
    sendEmail:true,;

    actionUrl:actions[randomType].url,;
    actionText:actions[randomType].text;
  }),;
} type NotificationType = 'message' | 'quote request' | 'booking confirmation' | 'hire request' | 'onboarding' | 'system';
//If sendEmail is true, call the edge function to send an email 
}
}/** * Creates a hire request notification for admin and talent */? `$ {
  projectType 
}project` : "";
  userId: talentId, title: `New Hire Request from $ {
  requesterName 
}`;
message: `$ {
  requesterName 
}($ {
  requesterEmail 
}) wants to hire you for a $ {
  projectInfo 
}$ {
  summaryText 
}`;
type: 'hire request';
relatedId: hireRequestId;
sendEmail: true;
actionUrl: '/dashboard';
actionText: 'View Request' 
    actionText:actions[randomType].text;)
  }),;'
} type NotificationType = 'message' | 'quote request' | 'booking confirmation' | 'hire request' | 'onboarding' | 'system';'
//If sendEmail is true, call the edge function to send an email;
}
}/** * Creates a hire request notification for admin and talent */? `$ {
  projectType;'
}project` : "";"
  userId: talentId, title: `New Hire Request from $ {
  requesterName;
}`;
message: `$ {
  requesterName;
}($ {
  requesterEmail;)
}) wants to hire you for a $ {
  projectInfo;
}$ {
  summaryText;
}`;"
type: 'hire request';',
  relatedId: hireRequestId;
sendEmail: true;,'
  actionUrl: '/dashboard';''
actionText: 'View Request''
});
//Create notification for admin if admin ID is provided if (adminId) {
  const adminNotification = await createNotification ({
  userId: adminId, title: `New Hire Request for Talent`, message: `$ {
  requesterName 
}($ {
  requesterEmail 
}) wants to hire talent for a $ {
  projectInfo 
}$ {
  summaryText 
}`;
type: 'hire request';
relatedId: hireRequestId;
sendEmail: true;
actionUrl: '/admin/hire-requests';
actionText: 'Review Request' 
});
}/** * Creates an onboarding notification for a user */if (userRole === 'talent') {
  switch (missingMilestone) {
  case 'profile completed': title = 'Complete your profile';
message = 'Complete your profile to get discovered by clients';
actionUrl = '/profile';
actionText = 'Complete Profile';
break;
case 'skills added': title = 'Add your skills';
message = 'Add your skills to get better job matches';
actionUrl = '/profile/skills';
actionText = 'Add Skills';
break;
case 'availability set': case 'job posted': title = 'Post your first job';
message = 'Post your first job to start finding talent';
actionUrl = '/post-job';
actionText = 'Post Job';
break;
    actionText:actions[randomType].text;)
} type NotificationType = 'message' | 'quote request' | 'booking confirmation' | 'hire request' | 'onboarding' | 'system';
//If sendEmail is true, call the edge function to send an email;
}`;
}/** * Creates a hire request notification for admin and talent */? `$ {
  projectType;`;
}project` : "";"`;
  userId: talentId, title: `New Hire Request from $ {
  requesterName;`;
}`;`;
message: `$ {
  requesterName;
}($ {
  requesterEmail;)
}) wants to hire you for a $ {
  projectInfo;
}$ {
  summaryText;`;
}`;"
type: 'hire request';',
  relatedId: hireRequestId;
  actionUrl: '/dashboard';
actionText: 'View Request
//Create notification for admin if admin ID is provided if (adminId) {
  const adminNotification = await createNotification ({`;
  userId: adminId, title: `New Hire Request for Talent`, message: `$ {
}) wants to hire talent for a $ {
  actionUrl: '/admin/hire-requests';
actionText: 'Review Request
}/** * Creates an onboarding notification for a user */if (userRole === 'talent') {
  case 'profile completed': title = 'Complete your profile';
actionUrl = '/profile';
actionText = 'Complete Profile';
case 'skills added': title = 'Add your skills';
actionUrl = '/profile/skills';
actionText = 'Add Skills';
case 'availability set': case 'job posted': title = 'Post your first job';
actionUrl = '/post-job';
actionText = 'Post Job';
pr-12325
case 'match viewed': title = 'View your AI matches';
message = 'Check out your AI-matched talent suggestions';
actionUrl = '/client-dashboard';
actionText = 'View Matches';
break;
case 'talent invited': 
  requesterName;
}($ {
  requesterEmail;)
}) wants to hire talent for a $ {
  projectInfo;
}$ {
  summaryText;
}`;'
type: 'hire request';',
  relatedId: hireRequestId;
sendEmail: true;,'
  actionUrl: '/admin/hire-requests';''
actionText: 'Review Request''
});'
}/** * Creates an onboarding notification for a user */if (userRole === 'talent') {'
  switch (missingMilestone) {'
  case 'profile completed': title = 'Complete your profile';''
message = 'Complete your profile to get discovered by clients';''
actionUrl = '/profile';''
actionText = 'Complete Profile';'
break;'
case 'skills added': title = 'Add your skills';''
message = 'Add your skills to get better job matches';''
actionUrl = '/profile/skills';''
actionText = 'Add Skills';'
break;'
case 'availability set': case 'job posted': title = 'Post your first job';''
message = 'Post your first job to start finding talent';''
actionUrl = '/post-job';''
actionText = 'Post Job';'
break;'
case 'match viewed': title = 'View your AI matches';''
message = 'Check out your AI-matched talent suggestions';''
actionUrl = '/client-dashboard';''
actionText = 'View Matches';'
break;'
case 'talent invited':'

}/** * Creates a system notification for a user */ 
}/** * Demo function to create test notifications for the current user */ 
}
}
;
}
;
}
;

}
=======
/**
 * Creates an onboarding notification for a user
 */
export async function createOnboardingNotification({;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  userId;
  missingMilestone;
  userRole
}: {
<<<<<<< HEAD
  userId: string,
  missingMilestone: string,
  userRole: 'talent' | 'client'
}) {
  let title = $2;
  let message = $2;
  let actionUrl = $2;
  let actionText = $2;
  if (userRole = $2;
        message = $2;
        actionUrl = $2;
        actionText = $2;
        break,
      case 'skills_added':
        title = $2;
        message = $2;
        actionUrl = $2;
        actionText = $2;
        break,
      case 'availability_set':
        title = $2;
        message = $2;
        actionUrl = $2;
        actionText = $2;
=======
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
<<<<<<< HEAD
=======
=======
import { supabase } from '@/integrations / supabase / client';
type NotificationType = 'message' | 'quote_request' | 'booking_confirmation' | 'hire_request' | 'onboarding' | 'system';
;
/**;
* Creates a notification for a user and optionally sends an email notification;
*/;
export async /**
 * create_notification - Function description
 */
function create_notification() {
  void action_url;
  void action_text;
  try {
    // Call the create_notification database function;
    const { data, error } = await supabase.rpc ('create_notification', {
      _user_id: user_id;
      _title: title;
      _message: message;
      _type: type,
      _related_id: related_id;
    });
;
    // Check condition
if (throw error) {
  $2
}
    // If send_email is true, call the edge function to send an email;
    // Check condition
if ( {) {
  $2
}
      const notification_id = data;
      await supabase.functions.invoke ('send - notification - email', {
        body: { user_id: user_id, notification_id: notification_id }
      });
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    }
    return { success: true, notification_id: data }
  } catch (error) {'
    console.error ('Error creating notification:', error);
    return { success: false, error }

        action_text = 'Complete Profile';
        break;'
      case 'skills_added':;'
        title = 'Add your skills';'
        message = 'Add your skills to get better job matches';'
        action_url = '/profile / skills';'
        action_text = 'Add Skills';
        break;'
      case 'availability_set':;'
        title = 'Set your availability';'
        message = 'Set your availability to help clients know when you can work';'
        action_url = '/profile / settings';'
        action_text = 'Set Availability';
        break;
    }
  } else {}
    switch (missing_milestone) {'
      case 'job_posted':;'
        title = 'Post your first job';'
        message = 'Post your first job to start finding talent';'
        action_url = '/post - job';'
        action_text = 'Post Job';
        break;'
      case 'match_viewed':;'
        title = 'View your AI matches';'
        message = 'Check out your AI - matched talent suggestions';'
        action_url = '/client - dashboard';'
        action_text = 'View Matches';
        break;'
      case 'talent_invited':;'
        title = 'Invite talent';'
        message = 'Invite talent to speed up your hiring process';'
        action_url = '/talent';'

        action_text = 'Find Talent';
        break;
    }
  }

<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  return create_notification ({
    user_id;
    title;
    message;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    type: 'onboarding';
    send_email: false;
    action_url,
    action_text;
  });
}
/**;
* Creates a system notification for a user;
*/;

    type: 'system';
    send_email;
    action_url,
    action_text;
  });
}
/**;
* Demo function to create test notifications for the current user;
*/;
<<<<<<< HEAD
=======
export async /**
 * createTestNotification - Function description
<<<<<<< HEAD
 */
function createTestNotification() {
  const types: NotificationType[] = ['messagequote_requestbooking_confirmationhire_requestonboardingsystem'];
  const randomType = types[Math && Math.floor(Math && Math.random() * types && types.length)],
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
>>>>>>> merged-prs-20250907-203621
        break
    }
  } else {
    switch (missingMilestone) {
      case 'job_posted':
<<<<<<< HEAD
        title = $2;
        message = $2;
        actionUrl = $2;
        actionText = $2;
        break,
      case 'match_viewed':
        title = $2;
        message = $2;
        actionUrl = $2;
        actionText = $2;
        break,
      case 'talent_invited':
        title = $2;
        message = $2;
        actionUrl = $2;
        actionText = $2;
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
export async function createSystemNotification({
  userId,
  title,
  message,
  actionUrl = $2;
  actionText = $2;
  sendEmail = $2;
  title: string,
  message: string,
  actionUrl?: string | null,
  actionText?: string | null,
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
export async function createTestNotification(userId: string) {
  const types: NotificationType[] = ['messagequote_requestbooking_confirmationhire_requestonboardingsystem'],
  const randomType = $2;
  const titles = $2;
  const messages = $2;
  const actions = {
    'message': { url: '/messages', text: 'View Messages' }
    'quote_request': { url: '/quotes', text: 'View Quote' }
    'booking_confirmation': { url: '/bookings', text: 'View Booking' }
    'hire_request': { url: '/dashboard', text: 'View Request' }
    'onboarding': { url: '/profile', text: 'Complete Profile' }
    'system': { url: '/dashboard', text: 'Learn More' }
  },
  
=======
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
=======

 */
function createTestNotification() {
  const types: NotificationType[] = ['messagequote_requestbooking_confirmationhire_requestonboardingsystem'];

  const randomType = types[Math && Math.floor(Math && Math.random() * types && types.length)],
  
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  const titles = {
    'message': 'New Message Receivedquote_request': 'Quote Request Submittedbooking_confirmation': 'Booking Confirmedhire_request': 'New Hire Requestonboarding': 'Complete Your Profilesystem': 'System Update'
  }
  const messages = {
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    'message': 'You have received a new message from a potential client && client.quote_request': 'A client has submitted a quote request for your services && services.booking_confirmation': 'Your booking has been confirmed and scheduled && scheduled.hire_request': 'A client wants to hire you for a project. Check your dashboard for details && details.onboarding': 'Complete your profile to get more visibility and job matches && matches.system': 'Our platform has been updated with new features. Check them out!'
  };
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  const random_type = types[Math.floor (Math.random () * types.length)],
  const titles = {'
    'message': 'New Message Receivedquote_request': 'Quote Request Submittedbooking_confirmation': 'Booking Confirmedhire_request': 'New Hire Requestonboarding': 'Complete Your Profilesystem': 'System Update';
  }
;
  const messages = {'
    'message': 'You have received a new message from a potential client.quote_request': 'A client has submitted a quote request for your services.booking_confirmation': 'Your booking has been confirmed and scheduled.hire_request': 'A client wants to hire you for a project. Check your dashboard for details.onboarding': 'Complete your profile to get more visibility and job matches.system': 'Our platform has been updated with new features. Check them out!';
  }
;
<<<<<<< HEAD

=======
<<<<<<< HEAD
    'message': 'You have received a new message from a potential client.quote_request': 'A client has submitted a quote request for your services.booking_confirmation': 'Your booking has been confirmed and scheduled.hire_request': 'A client wants to hire you for a project. Check your dashboard for details.onboarding': 'Complete your profile to get more visibility and job matches.system': 'Our platform has been updated with new features. Check them out!'
  }
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  const actions = {

    'message': { url: '/messages', text: 'View Messages' }
    'quote_request': { url: '/quotes', text: 'View Quote' }
    'booking_confirmation': { url: '/bookings', text: 'View Booking' }
    'hire_request': { url: '/dashboard', text: 'View Request' }
    'onboarding': { url: '/profile', text: 'Complete Profile' }

    'system': { url: '/dashboard', text: 'Learn More' }
  }

<<<<<<< HEAD
=======


<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
;

;
  return create_notification ({}
    user_id;
    title: titles[random_type];
    message: messages[random_type];
    type: random_type;
    send_email: true;
    action_url: actions[random_type].url,
    action_text: actions[random_type].text;
<<<<<<< HEAD

=======
  });
<<<<<<< HEAD
}

import { supabase } from "@/integrations/supabase/client",;
;
type NotificationType = 'message' | 'quote_request' | 'booking_confirmation' | 'hire_request' | 'onboarding' | 'system',;
;
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
} {;
  userId:string,;
  title:string,;
  message:string,;
  type:NotificationType,;
  relatedId?:string | null,;
  sendEmail?:boolean,;
  actionUrl?:string | null,;
  actionText?:string | null;
}) {;
  void actionUrl,;
  void actionText,;
  try {;
    // Call the create_notification database function;
    const { data, error } = await supabase.rpc('create_notification', {;
      _user_id:userId,;
      _title:title,;
      _message:message,;
      _type:type,;
      _related_id:relatedId;
    }),;
    ;
    if (error) throw error,;
    ;
    // If sendEmail is true, call the edge function to send an email;
    if (sendEmail && data) {;
      const notificationId = data,;
      await supabase.functions.invoke('send-notification-email', {;
        body:{ user_id:userId, notification_id:notificationId }
      }),;
    }
    ;
    return { success:true, notificationId:data },;
  } catch (error) {;
    console.error('Error creating notification:', error),;
    return { success:false, error },;
  }
}
;
/**;
 * Creates a hire request notification for admin and talent;
 */;
export async function createHireRequestNotifications({;
  talentId,;
  adminId,;
  requesterName,;
  requesterEmail, ;
  projectType,;
  projectSummary,;
  hireRequestId;
} {;
  talentId:string,;
  adminId?:string,;
  requesterName:string,;
  requesterEmail:string,;
  projectType?:string,;
  projectSummary?:string,;
  hireRequestId:string;
}) {;
  const projectInfo = projectType ;
    ? `${projectType} project` ;
    :"project",;
  ;
  const summaryText = projectSummary ;
    ? `:"${projectSummary}"` ;
    :"",;
  ;
  // Create notification for talent;
  const talentNotification = await createNotification({;
    userId:talentId,;
    title:`New Hire Request from ${requesterName}`,;
    message:`${requesterName} (${requesterEmail}) wants to hire you for a ${projectInfo}${summaryText}`,;
    type:'hire_request',;
    relatedId:hireRequestId,;
    sendEmail:true,;
    actionUrl:'/dashboard',;
    actionText:'View Request';
  }),;
  ;
  // Create notification for admin if admin ID is provided;
  if (adminId) {;
    const adminNotification = await createNotification({;
      userId:adminId,;
      title:`New Hire Request for Talent`,;
      message:`${requesterName} (${requesterEmail}) wants to hire talent for a ${projectInfo}${summaryText}`,;
      type:'hire_request',;
      relatedId:hireRequestId,;
      sendEmail:true,;
      actionUrl:'/admin/hire-requests',;
      actionText:'Review Request';
    }),;
    ;
    return {;
      success:talentNotification.success && adminNotification.success,;
      talentNotification,;
      adminNotification;
    },;
  }
  ;
  return {;
    success:talentNotification.success,;
    talentNotification;
  },;
}
>>>>>>> merged-prs-20250907-203621
  return createNotification({
    userId;
    title: titles[randomType];
    message: messages[randomType];
    type: randomType;
    sendEmail: true;
    actionUrl: actions[randomType].url

    actionText: actions[randomType].text
  })
}
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
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
;
/**;
 * Creates a system notification for a user;
 */;
<<<<<<< HEAD

=======
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
} {;
  userId:string,;
  title:string,;
  message:string,;
  actionUrl?:string | null,;
  actionText?:string | null,;
  sendEmail?:boolean;
}) {;
  return createNotification({;
    userId,;
    title,;
    message,;
    type: 'system',;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    sendEmail,;
    actionUrl,;
    actionText;
  }),;

}
<<<<<<< HEAD
;
=======
;
/**;
 * Demo function to create test notifications for the current user;
 */;
export async function createTestNotification() { return null; }
  },;
  const messages = {;'
    'message': 'You have received a new message from a potential client.quote_request': 'A client has submitted a quote request for your services.booking_confirmation': 'Your booking has been confirmed and scheduled.hire_request': 'A client wants to hire you for a project. Check your dashboard for details.onboarding': 'Complete your profile to get more visibility and job matches.system': 'Our platform has been updated with new features. Check them out!';
  },;
  const actions = {;'
    'message': { url: '/messages', text: 'View Messages' },;'
    'quote_request': { url: '/quotes', text: 'View Quote' },;'
    'booking_confirmation': { url: '/bookings', text: 'View Booking' },;'
    'hire_request': { url: '/dashboard', text: 'View Request' },;'
    'onboarding': { url: '/profile', text: 'Complete Profile' },;'
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
<<<<<<< HEAD

}
;
}

=======
    type:'system',;
    sendEmail,;
    actionUrl,;
    actionText;
  }),;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
<<<<<<< HEAD
=======

<<<<<<< HEAD
}
;
}
;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


}
;
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
export async function createTestNotification(userId:string) {;
  const types:NotificationType[] = ['messagequote_request', 'booking_confirmationhire_request', 'onboardingsystem'],;
  const randomType = types[Math.floor(Math.random() * types.length)],;
  ;
  const titles = {;
    'message':'New Message Receivedquote_request':'Quote Request Submittedbooking_confirmation':'Booking Confirmedhire_request':'New Hire Requestonboarding':'Complete Your Profilesystem':'System Update';
  },;
  ;
  const messages = {;
    'message':'You have received a new message from a potential client.quote_request':'A client has submitted a quote request for your services.booking_confirmation':'Your booking has been confirmed and scheduled.hire_request':'A client wants to hire you for a project. Check your dashboard for details.onboarding':'Complete your profile to get more visibility and job matches.system':'Our platform has been updated with new features. Check them out!';
  },;
  ;
  const actions = {;
<<<<<<< HEAD
  sendEmail?:boolean;)
/**;
 * Demo function to create test notifications for the current user;
 */;
export async function createTestNotification(userId: string) {;'
  const types: NotificationType[] = ['messagequote_requestbooking_confirmationhire_requestonboardingsystem'],;'
  const randomType = types[Math.floor(Math.random() * types.length)],;
  const titles = {;'
    'message': 'New Message Receivedquote_request': 'Quote Request Submittedbooking_confirmation': 'Booking Confirmedhire_request': 'New Hire Requestonboarding': 'Complete Your Profilesystem': 'System Update';'
  },;
  const messages = {;'
    'message': 'You have received a new message from a potential client.quote_request': 'A client has submitted a quote request for your services.booking_confirmation': 'Your booking has been confirmed and scheduled.hire_request': 'A client wants to hire you for a project. Check your dashboard for details.onboarding': 'Complete your profile to get more visibility and job matches.system': 'Our platform has been updated with new features. Check them out!';'
  },;
  const actions = {;'
    'message': { url: '/messages', text: 'View Messages' },;''
    'quote_request': { url: '/quotes', text: 'View Quote' },;''
    'booking_confirmation': { url: '/bookings', text: 'View Booking' },;''
    'hire_request': { url: '/dashboard', text: 'View Request' },;''
    'onboarding': { url: '/profile', text: 'Complete Profile' },;''
    'system': { url: '/dashboard', text: 'Learn More' }'
  },;
  return createNotification({;
    type: 'system',;
    sendEmail,;
    actionUrl,;
    actionText;)
    type:'system',;
    actionText;
/**;
export async function createTestNotification(userId: string) {;
  const types: NotificationType[] = ['messagequote_requestbooking_confirmationhire_requestonboardingsystem'],;
  const randomType = types[Math.floor(Math.random() * types.length)],;
  const titles = {;
  },;
  const messages = {;
  const actions = {;
    'message': { url: '/messages', text: 'View Messages' },;
    'quote_request': { url: '/quotes', text: 'View Quote' },;
    'booking_confirmation': { url: '/bookings', text: 'View Booking' },;
    'hire_request': { url: '/dashboard', text: 'View Request' },;
    'onboarding': { url: '/profile', text: 'Complete Profile' },;
    title: titles[randomType],;
    message: messages[randomType],;
    type: randomType,;
    sendEmail: true;,
  actionUrl: actions[randomType].url;
    actionText: actions[randomType].text;)

export async function createTestNotification(userId:string) {;
  const types:NotificationType[] = ['messagequote_request', 'booking_confirmationhire_request', 'onboardingsystem'],;
    'message':'New Message Receivedquote_request':'Quote Request Submittedbooking_confirmation':'Booking Confirmedhire_request':'New Hire Requestonboarding':'Complete Your Profilesystem':'System Update';
    'message':'You have received a new message from a potential client.quote_request':'A client has submitted a quote request for your services.booking_confirmation':'Your booking has been confirmed and scheduled.hire_request':'A client wants to hire you for a project. Check your dashboard for details.onboarding':'Complete your profile to get more visibility and job matches.system':'Our platform has been updated with new features. Check them out!';
pr-12325
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    'message':{ url:'/messages', text:'View Messages' },;
    'quote_request':{ url:'/quotes', text:'View Quote' },;
    'booking_confirmation':{ url:'/bookings', text:'View Booking' },;
    'hire_request':{ url:'/dashboard', text:'View Request' },;
    'onboarding':{ url:'/profile', text:'Complete Profile' },;
    'system':{ url:'/dashboard', text:'Learn More' }
<<<<<<< HEAD
}
;
}
;
export async function createTestNotification(userId:string) {;'
  const types:NotificationType[] = ['messagequote_request', 'booking_confirmationhire_request', 'onboardingsystem'],;'
  const randomType = types[Math.floor(Math.random() * types.length)],;
  ;
  const titles = {;'
    'message':'New Message Receivedquote_request':'Quote Request Submittedbooking_confirmation':'Booking Confirmedhire_request':'New Hire Requestonboarding':'Complete Your Profilesystem':'System Update';'
  },;
  ;
  const messages = {;'
    'message':'You have received a new message from a potential client.quote_request':'A client has submitted a quote request for your services.booking_confirmation':'Your booking has been confirmed and scheduled.hire_request':'A client wants to hire you for a project. Check your dashboard for details.onboarding':'Complete your profile to get more visibility and job matches.system':'Our platform has been updated with new features. Check them out!';'
  },;
  ;
  const actions = {;'
    'message':{ url:'/messages', text:'View Messages' },;''
    'quote_request':{ url:'/quotes', text:'View Quote' },;''
    'booking_confirmation':{ url:'/bookings', text:'View Booking' },;''
    'hire_request':{ url:'/dashboard', text:'View Request' },;''
    'onboarding':{ url:'/profile', text:'Complete Profile' },;''
    'system':{ url:'/dashboard', text:'Learn More' }'

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  },;
  ;
  return createNotification({;
    userId,;
<<<<<<< HEAD
pr-12325
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    title:titles[randomType],;
    message:messages[randomType],;
    type:randomType,;
    sendEmail:true,;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    actionUrl:actions[randomType].url,;
    actionText:actions[randomType].text;
  }),;
} type NotificationType = 'message' | 'quote request' | 'booking confirmation' | 'hire request' | 'onboarding' | 'system';
//If sendEmail is true, call the edge function to send an email 
}
}/** * Creates a hire request notification for admin and talent */? `$ {
  projectType 
}project` : "";
  userId: talentId, title: `New Hire Request from $ {
  requesterName 
}`;
message: `$ {
  requesterName 
}($ {
  requesterEmail 
}) wants to hire you for a $ {
  projectInfo 
}$ {
  summaryText 
}`;
type: 'hire request';
relatedId: hireRequestId;
sendEmail: true;
actionUrl: '/dashboard';
actionText: 'View Request' 
<<<<<<< HEAD
    actionText:actions[randomType].text;)
  }),;'
} type NotificationType = 'message' | 'quote request' | 'booking confirmation' | 'hire request' | 'onboarding' | 'system';'
//If sendEmail is true, call the edge function to send an email;
}
}/** * Creates a hire request notification for admin and talent */? `$ {
  projectType;'
}project` : "";"
  userId: talentId, title: `New Hire Request from $ {
  requesterName;
}`;
message: `$ {
  requesterName;
}($ {
  requesterEmail;)
}) wants to hire you for a $ {
  projectInfo;
}$ {
  summaryText;
}`;"
type: 'hire request';',
  relatedId: hireRequestId;
sendEmail: true;,'
  actionUrl: '/dashboard';''
actionText: 'View Request''
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
});
//Create notification for admin if admin ID is provided if (adminId) {
  const adminNotification = await createNotification ({
  userId: adminId, title: `New Hire Request for Talent`, message: `$ {
  requesterName 
}($ {
  requesterEmail 
}) wants to hire talent for a $ {
  projectInfo 
}$ {
  summaryText 
}`;
type: 'hire request';
relatedId: hireRequestId;
sendEmail: true;
actionUrl: '/admin/hire-requests';
actionText: 'Review Request' 
});
}/** * Creates an onboarding notification for a user */if (userRole === 'talent') {
  switch (missingMilestone) {
  case 'profile completed': title = 'Complete your profile';
message = 'Complete your profile to get discovered by clients';
actionUrl = '/profile';
actionText = 'Complete Profile';
break;
case 'skills added': title = 'Add your skills';
message = 'Add your skills to get better job matches';
actionUrl = '/profile/skills';
actionText = 'Add Skills';
break;
case 'availability set': case 'job posted': title = 'Post your first job';
message = 'Post your first job to start finding talent';
actionUrl = '/post-job';
actionText = 'Post Job';
break;
<<<<<<< HEAD
    actionText:actions[randomType].text;)
} type NotificationType = 'message' | 'quote request' | 'booking confirmation' | 'hire request' | 'onboarding' | 'system';
//If sendEmail is true, call the edge function to send an email;
}`;
}/** * Creates a hire request notification for admin and talent */? `$ {
  projectType;`;
}project` : "";"`;
  userId: talentId, title: `New Hire Request from $ {
  requesterName;`;
}`;`;
message: `$ {
  requesterName;
}($ {
  requesterEmail;)
}) wants to hire you for a $ {
  projectInfo;
}$ {
  summaryText;`;
}`;"
type: 'hire request';',
  relatedId: hireRequestId;
  actionUrl: '/dashboard';
actionText: 'View Request
//Create notification for admin if admin ID is provided if (adminId) {
  const adminNotification = await createNotification ({`;
  userId: adminId, title: `New Hire Request for Talent`, message: `$ {
}) wants to hire talent for a $ {
  actionUrl: '/admin/hire-requests';
actionText: 'Review Request
}/** * Creates an onboarding notification for a user */if (userRole === 'talent') {
  case 'profile completed': title = 'Complete your profile';
actionUrl = '/profile';
actionText = 'Complete Profile';
case 'skills added': title = 'Add your skills';
actionUrl = '/profile/skills';
actionText = 'Add Skills';
case 'availability set': case 'job posted': title = 'Post your first job';
actionUrl = '/post-job';
actionText = 'Post Job';
pr-12325
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
case 'match viewed': title = 'View your AI matches';
message = 'Check out your AI-matched talent suggestions';
actionUrl = '/client-dashboard';
actionText = 'View Matches';
break;
case 'talent invited': 
<<<<<<< HEAD
  requesterName;
}($ {
  requesterEmail;)
}) wants to hire talent for a $ {
  projectInfo;
}$ {
  summaryText;
}`;'
type: 'hire request';',
  relatedId: hireRequestId;
sendEmail: true;,'
  actionUrl: '/admin/hire-requests';''
actionText: 'Review Request''
});'
}/** * Creates an onboarding notification for a user */if (userRole === 'talent') {'
  switch (missingMilestone) {'
  case 'profile completed': title = 'Complete your profile';''
message = 'Complete your profile to get discovered by clients';''
actionUrl = '/profile';''
actionText = 'Complete Profile';'
break;'
case 'skills added': title = 'Add your skills';''
message = 'Add your skills to get better job matches';''
actionUrl = '/profile/skills';''
actionText = 'Add Skills';'
break;'
case 'availability set': case 'job posted': title = 'Post your first job';''
message = 'Post your first job to start finding talent';''
actionUrl = '/post-job';''
actionText = 'Post Job';'
break;'
case 'match viewed': title = 'View your AI matches';''
message = 'Check out your AI-matched talent suggestions';''
actionUrl = '/client-dashboard';''
actionText = 'View Matches';'
break;'
case 'talent invited':'

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
}/** * Creates a system notification for a user */ 
}/** * Demo function to create test notifications for the current user */ 
}
}
;
}
;
<<<<<<< HEAD
}
;

}
=======
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
