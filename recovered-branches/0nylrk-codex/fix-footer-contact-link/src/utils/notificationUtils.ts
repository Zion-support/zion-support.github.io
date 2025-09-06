
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
import {supabase} from "@/integrations/supabase/client";
type NotificationType = 'message' | 'quote_request' | 'booking_confirmation' | 'hire_request' | 'onboarding' | 'system';
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import {supabase} from "@/integrations/supabase/client";
type NotificationType = 'message' | 'quote_request' | 'booking_confirmation' | 'hire_request' | 'onboarding' | 'system';

=======
import { supabase } from "@/integrations/supabase/client",
type NotificationType = 'message' | 'quote_request' | 'booking_confirmation' | 'hire_request' | 'onboarding' | 'system',
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
/**
 * Creates a notification for a user and optionally sends an email notification
 */
export async function createNotification({
  userId;
  title;
  message;
  type;
  relatedId = null;
  sendEmail = false;
  actionUrl = null;
  actionText = null
}: {
  userId: string;
  title: string;
  message: string;
  type: NotificationType;
  relatedId?: string | null;
  sendEmail?: boolean;
  actionUrl?: string | null
  actionText?: string | null
}) {
  void actionUrl;
  void actionText;
  try {
    // Call the create_notification database function
    const { data, error } = await supabase && supabase.rpc('create_notification', {
      _user_id: userId;
      _title: title;
      _message: message;
      _type: type
      _related_id: relatedId
    });
    if (error) throw error;
    // If sendEmail is true, call the edge function to send an email
    if (sendEmail && data) {
<<<<<<< HEAD
      const notificationId = data;
      await supabase && supabase.functions.invoke('send-notification-email', {
=======
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
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
        body: { user_id: userId, notification_id: notificationId }
      })
    }
    return { success: true, notificationId: data }
<<<<<<< HEAD
  } catch (error) {
    console && console.error('Error creating notification:', error);
=======
<<<<<<< HEAD
  } catch (error) {
    console.error('Error creating notification:', error);
<<<<<<< HEAD
    return { success: false, error }
  }
}
=======
  } catch (error) {;
    console.error('Error creating notification:', error),;
=======
=======
  } catch (error) {;
    console.error('Error creating notification:', error),;

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
    return { success: false, error }
  }
}
/**
 * Creates a hire request notification for admin and talent
 */
export async function createHireRequestNotifications({
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
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
<<<<<<< HEAD
=======
=======
  talentId,
  adminId,
  requesterName,
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
  requesterEmail, 
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
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
    }
  }
  return {
    success: talentNotification.success
    talentNotification
  }
}
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
/**
 * Creates an onboarding notification for a user
 */
export async function createOnboardingNotification({
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
    }
    return { success: true, notification_id: data }
  } catch (error) {
    console.error ('Error creating notification:', error);
    return { success: false, error }
  }
}
/**;
* Creates a hire request notification for admin and talent;
*/;
export async /**
 * createHireRequestNotifications - Function description
 */
function createHireRequestNotifications() {
  const project_info = project_type;
    ? `${project_type} project`;
    : "project";
;
  const summary_text = project_summary;
    ? `: "${project_summary}"`;
    : "";
;
  // Create notification for talent;
  const talent_notification = await create_notification ({
    user_id: talent_id,
    title: `New Hire Request from ${requester_name}`;
    message: `${requester_name} (${requester_email}) wants to hire you for a ${project_info}${summary_text}`;
    type: 'hire_request';
    related_id: hireRequestId;
    send_email: true;
    action_url: '/dashboard',
    action_text: 'View Request';
  });
;
  // Create notification for admin if admin ID is provided;
  // Check condition
if ( {) {
  $2
}
    const admin_notification = await create_notification ({
      user_id: admin_id;
      title: `New Hire Request for Talent`,
      message: `${requester_name} (${requester_email}) wants to hire talent for a ${project_info}${summary_text}`;
      type: 'hire_request';
      related_id: hireRequestId;
      send_email: true;
      action_url: '/admin / hire - requests',
      action_text: 'Review Request';
    });
;
    return {
      success: talent_notification.success && admin_notification.success;
      talent_notification,
      admin_notification;
    }
  }
  return {
    success: talent_notification.success,
    talent_notification;
  }
}
/**;
* Creates an onboarding notification for a user;
*/;
export async /**
 * createOnboardingNotification - Function description
 */
function createOnboardingNotification() {
  let title = '';
  let message = '';
  let action_url = '';
  let action_text = '';
;
  // Check condition
if ( {) {
  $2
}
    switch (missing_milestone) {
      case 'profile_completed':;
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
function createTestNotification() {
  const types: NotificationType[] = ['messagequote_requestbooking_confirmationhire_requestonboardingsystem'];
  const randomType = types[Math.floor(Math.random() * types.length)]
  const titles = {
    'message': 'New Message Receivedquote_request': 'Quote Request Submittedbooking_confirmation': 'Booking Confirmedhire_request': 'New Hire Requestonboarding': 'Complete Your Profilesystem': 'System Update'
  }
  const messages = {
    'message': 'You have received a new message from a potential client.quote_request': 'A client has submitted a quote request for your services.booking_confirmation': 'Your booking has been confirmed and scheduled.hire_request': 'A client wants to hire you for a project. Check your dashboard for details.onboarding': 'Complete your profile to get more visibility and job matches.system': 'Our platform has been updated with new features. Check them out!'
  }
  const random_type = types[Math.floor (Math.random () * types.length)],
  const titles = {
    'message': 'New Message Receivedquote_request': 'Quote Request Submittedbooking_confirmation': 'Booking Confirmedhire_request': 'New Hire Requestonboarding': 'Complete Your Profilesystem': 'System Update';
  }
;
  const messages = {
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
<<<<<<< HEAD
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
=======

    actionText: actions[randomType].text
  })
<<<<<<< HEAD
}
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
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
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
}
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
