<<<<<<< HEAD
=======
export type NotificationType = 'message' | 'quote_request' | 'booking_confirmation' | 'hire_request' | 'onboarding' | 'system';
;

export interface CreateNotificationParams {
  user_id: string;
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

}
}
export interface SystemNotificationParams {
  user_id: string;

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
  userId: string;
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  title: string;
  message: string;
  type: NotificationType;

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
export type NotificationType = 'message' | 'quote_request' | 'booking_confirmation' | 'hire_request' | 'onboarding' | 'system';
export interface CreateNotificationParams {
export type NotificationType = 'message' | 'quote_request' | 'booking_confirmation' | 'hire_request' | 'onboarding' | 'system';

export interface CreateNotificationParams {;
  userId: string;
  title: string;
  message: string;
  type: NotificationType;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  relatedId?: string | null;
  sendEmail?: boolean;
  actionUrl?: string | null
  actionText?: string | null
}
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

  relatedId?: string | null;
  sendEmail?: boolean;
  actionUrl?: string | null;
  actionText?: string | null;
}

export interface CreateNotificationParams {;
  userId: string;
  title: string;
  message: string;
  type: NotificationType;

export interface CreateNotificationResult {;

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

<<<<<<< HEAD
export interface CreateNotificationResult {

export interface CreateNotificationResult {;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  success: boolean;
  notificationId?: string;
  error?: any;
}

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======


export interface HireRequestNotificationParams {;


<<<<<<< HEAD
export interface HireRequestNotificationParams {

export interface HireRequestNotificationParams {;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  talentId: string;
  adminId?: string;
  requesterName: string;
  requesterEmail: string;
  projectType?: string;
  projectSummary?: string;
  hireRequestId: string;

}
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  related_id?: string | null;
  send_email?: boolean;
  action_url?: string | null,
  action_text?: string | null;

  success: boolean;
  notification_id?: string,
  error?: any;
}

  talent_id: string;
  admin_id?: string;
  requester_name: string;,
  requester_email: string;
  project_type?: string;
  project_summary?: string,

  userId: string;
  missingMilestone: string;"
  userRole: "talent" | "client";
}

export interface OnboardingNotificationParams {
  // TODO: Implement
  user_id: string;,
  missing_milestone: string,
  user_role: 'talent' | 'client';
export interface SystemNotificationParams {
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  // TODO: Implement

export interface OnboardingNotificationParams {;

<<<<<<< HEAD
=======
=======
  user_id: string;


export interface OnboardingNotificationParams {;

<<<<<<< HEAD
export interface OnboardingNotificationParams {

export interface OnboardingNotificationParams {;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  userId: string;
  missingMilestone: string
  userRole: 'talent' | 'client'
}
<<<<<<< HEAD


>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
export interface SystemNotificationParams {;

  title: string;
  message: string;

<<<<<<< HEAD
  message: string;
  type: NotificationType;
=======
export interface SystemNotificationParams {

export interface SystemNotificationParams {;
  userId: string;
  title: string;
  message: string;
  actionUrl?: string | null;
  actionText?: string | null

  sendEmail?: boolean
}
export type NotificationType = 'message' | 'quote_request' | 'booking_confirmation' | 'hire_request' | 'onboarding' | 'system',;
export interface CreateNotificationParams {;
  userId: string,;
  title: string,;
  message: string,;
  type: NotificationType,;
  relatedId?: string | null,;
  sendEmail?: boolean,;
  actionUrl?: string | null,;
  actionText?: string | null;
}
;
export interface CreateNotificationResult {;
  success: boolean,;
  notificationId?: string,;
  error?: any;
}
;
export interface HireRequestNotificationParams {;
  talentId: string,;
  adminId?: string,;
  requesterName: string,;
  requesterEmail: string,;
  projectType?: string,;
  projectSummary?: string,;
  hireRequestId: string;
}
;
export interface OnboardingNotificationParams {;
  userId: string,;
  missingMilestone: string,;
  userRole: 'talent' | 'client';
}
;
export interface SystemNotificationParams {;
  userId: string,;
  title: string,;
  message: string,;
  actionUrl?: string | null,;
  actionText?: string | null;
  sendEmail?: boolean;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
}
;

=======


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
export interface SystemNotificationParams {;

  title: string;
  message: string;

  message: string;
  type: NotificationType;
}
export interface SystemNotificationParams {
  user_id: string;
  title: string;
  message: string;
}
>>>>>>> merged-prs-20250907-203621

<<<<<<< HEAD
  actionUrl?: string | null;
  actionText?: string | null;
  sendEmail?: boolean;
}
=======
<<<<<<< HEAD
  actionUrl?: string | null;
  actionText?: string | null;
  sendEmail?: boolean;
}
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
