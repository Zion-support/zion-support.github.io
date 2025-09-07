export type NotificationType = 'message' | 'quote_request' | 'booking_confirmation' | 'hire_request' | 'onboarding' | 'system';
;

export interface CreateNotificationParams {
  user_id: string;
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

}
}
export interface SystemNotificationParams {
  user_id: string;

<<<<<<< HEAD
=======
  userId: string;
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  title: string;
  message: string;
  type: NotificationType;

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
  relatedId?: string | null;
  sendEmail?: boolean;
  actionUrl?: string | null
  actionText?: string | null
}
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

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
export interface CreateNotificationResult {

export interface CreateNotificationResult {;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  success: boolean;
  notificationId?: string;
  error?: any;
}

<<<<<<< HEAD
=======


export interface HireRequestNotificationParams {;


<<<<<<< HEAD
export interface HireRequestNotificationParams {

export interface HireRequestNotificationParams {;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
  // TODO: Implement

export interface OnboardingNotificationParams {;

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


export interface SystemNotificationParams {;

  userId: string;
  title: string;
  message: string;

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

<<<<<<< HEAD
  actionUrl?: string | null;
  actionText?: string | null;
  sendEmail?: boolean;
}
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
