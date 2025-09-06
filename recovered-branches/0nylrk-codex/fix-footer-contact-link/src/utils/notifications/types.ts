
<<<<<<< HEAD


=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
export type NotificationType = 'message' | 'quote_request' | 'booking_confirmation' | 'hire_request' | 'onboarding' | 'system';
;

export interface CreateNotificationParams {
export type NotificationType = 'message' | 'quote_request' | 'booking_confirmation' | 'hire_request' | 'onboarding' | 'system';

export interface CreateNotificationParams {;

<<<<<<< HEAD

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
  userId: string;
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  title: string;
  message: string;
  type: NotificationType;
<<<<<<< HEAD

  relatedId?: string | null;
  sendEmail?: boolean;
  actionUrl?: string | null
  actionText?: string | null
}


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======



export interface CreateNotificationResult {;


>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
  success: boolean;
  notificationId?: string
  error?: any
}

<<<<<<< HEAD
export interface HireRequestNotificationParams {

export interface HireRequestNotificationParams {;

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======


export interface HireRequestNotificationParams {;


>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
  talentId: string;
  adminId?: string;
  requesterName: string;
  requesterEmail: string;
  projectType?: string;
  projectSummary?: string
  hireRequestId: string
}
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

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

<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======

export interface OnboardingNotificationParams {;

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
  userId: string;
  missingMilestone: string
  userRole: 'talent' | 'client'
}

<<<<<<< HEAD
export interface SystemNotificationParams {

export interface SystemNotificationParams {;

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======

export interface SystemNotificationParams {;

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
  userId: string;
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  title: string;
  message: string;

<<<<<<< HEAD

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



>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
