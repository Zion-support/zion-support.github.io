
<<<<<<< HEAD
<<<<<<< HEAD
=======
export type NotificationType = 'message' | 'quote_request' | 'booking_confirmation' | 'hire_request' | 'onboarding' | 'system';
;

export interface CreateNotificationParams {
  user_id: string;
=======

export interface CreateNotificationParams {;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

  userId: string;
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  title: string;
  message: string;
  type: NotificationType;
<<<<<<< HEAD
=======
<<<<<<< HEAD

export type NotificationType = 'message' | 'quote_request' | 'booking_confirmation' | 'hire_request' | 'onboarding' | 'system';
export interface CreateNotificationParams {
=======
export type NotificationType = 'message' | 'quote_request' | 'booking_confirmation' | 'hire_request' | 'onboarding' | 'system';

export interface CreateNotificationParams {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  userId: string;
  title: string;
  message: string;
  type: NotificationType;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  relatedId?: string | null;
  sendEmail?: boolean;
  actionUrl?: string | null
  actionText?: string | null
}
<<<<<<< HEAD

=======



export interface CreateNotificationResult {;


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
export interface CreateNotificationResult {
=======

export interface CreateNotificationResult {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  success: boolean;
  notificationId?: string
  error?: any
}
<<<<<<< HEAD
<<<<<<< HEAD

=======



export interface HireRequestNotificationParams {;


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
export interface HireRequestNotificationParams {
=======

export interface HireRequestNotificationParams {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  talentId: string;
  adminId?: string;
  requesterName: string;
  requesterEmail: string;
  projectType?: string;
  projectSummary?: string
  hireRequestId: string
}
<<<<<<< HEAD

<<<<<<< HEAD
=======
  related_id?: string | null;
  send_email?: boolean;
  action_url?: string | null,
  action_text?: string | null;
}
export interface CreateNotificationResult {
  success: boolean;
  notification_id?: string,
  error?: any;
}
export interface HireRequestNotificationParams {
  talent_id: string;
  admin_id?: string;
  requester_name: string;
  requester_email: string;
  project_type?: string;
  project_summary?: string,
  hireRequestId: string;
}
export interface OnboardingNotificationParams {
  user_id: string;
  missing_milestone: string,
  user_role: 'talent' | 'client';

}
export interface SystemNotificationParams {
  user_id: string;
=======


export interface OnboardingNotificationParams {;

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
export interface OnboardingNotificationParams {
=======

export interface OnboardingNotificationParams {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  userId: string;
  missingMilestone: string
  userRole: 'talent' | 'client'
}
<<<<<<< HEAD
<<<<<<< HEAD

=======


export interface SystemNotificationParams {;

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  userId: string;
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  title: string;
  message: string;

<<<<<<< HEAD
  sendEmail?: boolean
}

=======
export interface SystemNotificationParams {
=======

export interface SystemNotificationParams {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  userId: string;
  title: string;
  message: string;
  actionUrl?: string | null;
  actionText?: string | null

  sendEmail?: boolean
}
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
