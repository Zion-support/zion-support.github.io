<<<<<<< HEAD


import {supabase} from "@/integrations/supabase/client";
type NotificationType = 'message' | 'quote_request' | 'booking_confirmation' | 'hire_request' | 'onboarding' | 'system';
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

/**
 * Creates a notification for a user and optionally sends an email notification
 */

  actionText = null
}: {

<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import {supabase} from "@/integrations/supabase/client";
type NotificationType = 'message' | 'quote_request' | 'booking_confirmation' | 'hire_request' | 'onboarding' | 'system';
import { supabase } from "@/integrations/supabase/client",
type NotificationType = 'message' | 'quote_request' | 'booking_confirmation' | 'hire_request' | 'onboarding' | 'system',
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======




>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
/**
 * Creates a notification for a user and optionally sends an email notification
 */
<<<<<<< HEAD

<<<<<<< HEAD
=======

import {supabase} from "@/integrations/supabase/client";
type NotificationType = 'message' | 'quote_request' | 'booking_confirmation' | 'hire_request' | 'onboarding' | 'system';
import { supabase } from "@/integrations/supabase/client",
type NotificationType = 'message' | 'quote_request' | 'booking_confirmation' | 'hire_request' | 'onboarding' | 'system',

/**
 * Creates a notification for a user and optionally sends an email notification
 */
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
export async function createNotification({;
  userId;
  title;
  message;
  type;
  relatedId = null;
  sendEmail = false;
  actionUrl = null;
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
export async function createNotification({
  userId,
  title,
  message,
  type,
  relatedId = null,
  sendEmail = false,
  actionUrl = null,
<<<<<<< HEAD
<<<<<<< HEAD

  actionText = null
}: {

=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  actionText = null
}: {
  userId: string;
  title: string;
  message: string;
  type: NotificationType;
  relatedId?: string | null;
  sendEmail?: boolean;
  actionUrl?: string | null
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  userId: string,
  title: string,
  message: string,
  type: NotificationType,
  relatedId?: string | null,
  sendEmail?: boolean,
  actionUrl?: string | null,
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  actionText?: string | null
}) {
  void actionUrl;
  void actionText;
  try {
    // Call the create_notification database function

    const { data, error } = await supabase.rpc('create_notification', {

<<<<<<< HEAD
=======
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  actionText?: string | null
}) {
  void actionUrl,
  void actionText,
  try {
    // Call the create_notification database function
<<<<<<< HEAD
    const { data, error } = await supabase.rpc('create_notification', {
      _user_id: userId;
      _title: title;
      _message: message;
      _type: type
      _related_id: relatedId
    });
    if (error) throw error;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      _user_id: userId,
      _title: title,
      _message: message,
      _type: type,
      _related_id: relatedId
    }),
    
    if (error) throw error,
    
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    // If sendEmail is true, call the edge function to send an email
    if (sendEmail && data) {
      const notificationId = data,
      await supabase.functions.invoke('send-notification-email', {
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
<<<<<<< HEAD


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        body: { user_id: userId, notification_id: notificationId }
      })
    }
    return { success: true, notificationId: data }
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      success: talentNotification && talentNotification.success && adminNotification && adminNotification.success;
      talentNotification,

success: talentNotification && talentNotification.success && adminNotification && adminNotification.success;
      talentNotification,
      adminNotification

<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  } catch (error) {
    console.error('Error creating notification:', error);
    return { success: false, error }
  }
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
    return { success: false, error }
  }
}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  } catch (error) {;
    console.error('Error creating notification:', error),;
  } catch (error) {;
    console.error('Error creating notification:', error),;
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    return { success: false, error }
  }
}

/**
 * Creates a hire request notification for admin and talent
 */
<<<<<<< HEAD

  requesterEmail,
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
  const projectInfo = projectType
    ? `${projectType} project`
    : "project",

  const summaryText = projectSummary
    ? `: "${projectSummary}"`
    : "",

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

    return {
      success: talentNotification.success && adminNotification.success,
      talentNotification,
      adminNotification
<<<<<<< HEAD

=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
;
/**;
 * Creates a hire request notification for admin and talent;
 */;
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
    actionText: 'View Request';
  }),;
  // Create notification for admin if admin ID is provided;
  if (adminId) {;
    const adminNotification = await createNotification({;
      userId: adminId,;
      title: `New Hire Request for Talent`,;
      message: `${requesterName} (${requesterEmail}) wants to hire talent for a ${projectInfo}${summaryText}`,;
      type: 'hire_request',;
      relatedId: hireRequestId,;
      sendEmail: true,;
      actionUrl: '/admin/hire-requests',;
      actionText: 'Review Request';
    }),;
    return {;
      success: talentNotification.success && adminNotification.success,;
      talentNotification,;
      adminNotification;
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
export async function createHireRequestNotifications({

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    }
  }
  return {
    success: talentNotification && talentNotification.success,
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
      adminNotification
    }
  }
  return {
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    talentNotification
  }
}
<<<<<<< HEAD
<<<<<<< HEAD
=======




>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
/**
 * Creates an onboarding notification for a user
 */
<<<<<<< HEAD
export async function createOnboardingNotification({
<<<<<<< HEAD
=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
export async function createOnboardingNotification({;
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    }
    return { success: true, notification_id: data }
  } catch (error) {
    console.error ('Error creating notification:', error);
    return { success: false, error }
  }
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        title = 'Complete your profile';
        message = 'Complete your profile to get discovered by clients';
        action_url = '/profile';
        action_text = 'Complete Profile';
        break;
      case 'skills_added':;
        title = 'Add your skills';
        message = 'Add your skills to get better job matches';
        action_url = '/profile / skills';
        action_text = 'Add Skills';
        break;
      case 'availability_set':;
        title = 'Set your availability';
        message = 'Set your availability to help clients know when you can work';
        action_url = '/profile / settings';
        action_text = 'Set Availability';
        break;
    }
  } else {
    switch (missing_milestone) {
      case 'job_posted':;
        title = 'Post your first job';
        message = 'Post your first job to start finding talent';
        action_url = '/post - job';
        action_text = 'Post Job';
        break;
      case 'match_viewed':;
        title = 'View your AI matches';
        message = 'Check out your AI - matched talent suggestions';
        action_url = '/client - dashboard';
        action_text = 'View Matches';
        break;
      case 'talent_invited':;
        title = 'Invite talent';
        message = 'Invite talent to speed up your hiring process';
        action_url = '/talent';
        action_text = 'Find Talent';
        break;
    }
  }
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  return create_notification ({
    user_id;
    title;
    message;
    type: 'onboarding';
    send_email: false;
    action_url,
    action_text;
  });
}
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
}
/**;
* Demo function to create test notifications for the current user;
*/;
export async /**
 * createTestNotification - Function description
<<<<<<< HEAD

 */
function createTestNotification() {
  const types: NotificationType[] = ['messagequote_requestbooking_confirmationhire_requestonboardingsystem'];

  const randomType = types[Math && Math.floor(Math && Math.random() * types && types.length)],
  

=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
 */
function createTestNotification() {
  const types: NotificationType[] = ['messagequote_requestbooking_confirmationhire_requestonboardingsystem'];
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  const titles = {
    'message': 'New Message Receivedquote_request': 'Quote Request Submittedbooking_confirmation': 'Booking Confirmedhire_request': 'New Hire Requestonboarding': 'Complete Your Profilesystem': 'System Update'
  }
  const messages = {
<<<<<<< HEAD
<<<<<<< HEAD

    'message': 'You have received a new message from a potential client && client.quote_request': 'A client has submitted a quote request for your services && services.booking_confirmation': 'Your booking has been confirmed and scheduled && scheduled.hire_request': 'A client wants to hire you for a project. Check your dashboard for details && details.onboarding': 'Complete your profile to get more visibility and job matches && matches.system': 'Our platform has been updated with new features. Check them out!'
  };
  

<<<<<<< HEAD
=======
=======
=======
    'message': 'You have received a new message from a potential client && client.quote_request': 'A client has submitted a quote request for your services && services.booking_confirmation': 'Your booking has been confirmed and scheduled && scheduled.hire_request': 'A client wants to hire you for a project. Check your dashboard for details && details.onboarding': 'Complete your profile to get more visibility and job matches && matches.system': 'Our platform has been updated with new features. Check them out!'
  };
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  const random_type = types[Math.floor (Math.random () * types.length)],
  const titles = {
    'message': 'New Message Receivedquote_request': 'Quote Request Submittedbooking_confirmation': 'Booking Confirmedhire_request': 'New Hire Requestonboarding': 'Complete Your Profilesystem': 'System Update';
  }
;
  const messages = {
    'message': 'You have received a new message from a potential client.quote_request': 'A client has submitted a quote request for your services.booking_confirmation': 'Your booking has been confirmed and scheduled.hire_request': 'A client wants to hire you for a project. Check your dashboard for details.onboarding': 'Complete your profile to get more visibility and job matches.system': 'Our platform has been updated with new features. Check them out!';
  }
;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
    'message': 'You have received a new message from a potential client.quote_request': 'A client has submitted a quote request for your services.booking_confirmation': 'Your booking has been confirmed and scheduled.hire_request': 'A client wants to hire you for a project. Check your dashboard for details.onboarding': 'Complete your profile to get more visibility and job matches.system': 'Our platform has been updated with new features. Check them out!'
  }
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  const actions = {
    'message': { url: '/messages', text: 'View Messages' }
    'quote_request': { url: '/quotes', text: 'View Quote' }
    'booking_confirmation': { url: '/bookings', text: 'View Booking' }
    'hire_request': { url: '/dashboard', text: 'View Request' }
    'onboarding': { url: '/profile', text: 'Complete Profile' }
    'system': { url: '/dashboard', text: 'Learn More' }
  }

<<<<<<< HEAD
    actionText: actions[randomType].text
  })

}
;
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======


<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
;
  return create_notification ({
    user_id;
    title: titles[random_type];
    message: messages[random_type];
    type: random_type;
    send_email: true;
    action_url: actions[random_type].url,
    action_text: actions[random_type].text;
  });
<<<<<<< HEAD
<<<<<<< HEAD

=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
} {;
  userId:string,;
  title:string,;
  message:string,;
  actionUrl?:string | null,;
  actionText?:string | null,;
  sendEmail?:boolean;
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    type:'system',;
    sendEmail,;
    actionUrl,;
    actionText;
  }),;
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
}
;
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======


<<<<<<< HEAD

}
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
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
    'message':{ url:'/messages', text:'View Messages' },;
    'quote_request':{ url:'/quotes', text:'View Quote' },;
    'booking_confirmation':{ url:'/bookings', text:'View Booking' },;
    'hire_request':{ url:'/dashboard', text:'View Request' },;
    'onboarding':{ url:'/profile', text:'Complete Profile' },;
    'system':{ url:'/dashboard', text:'Learn More' }
  },;
  ;
  return createNotification({;
    userId,;
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
case 'match viewed': title = 'View your AI matches';
message = 'Check out your AI-matched talent suggestions';
actionUrl = '/client-dashboard';
actionText = 'View Matches';
break;
case 'talent invited': 
}/** * Creates a system notification for a user */ 
}/** * Demo function to create test notifications for the current user */ 
}
}
;
}
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
}
;
}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
