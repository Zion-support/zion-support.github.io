<<<<<<< HEAD
export type NotificationType =
  | "message"
  | "quote_request"
  | "booking_confirmation"
  | "hire_request"
  | "onboarding"
  | "system";

export interface CreateNotificationParams {
  user_id: string;

export interface CreateNotificationParams {;

  userId: string;
  title: string;
  message: string;
  type: NotificationType;
  relatedId?: string | null;
  sendEmail?: boolean;
  actionUrl?: string | null;
  actionText?: string | null;
}

export type NotificationType = 'message' | 'quote_request' | 'booking_confirmation' | 'hire_request' | 'onboarding' | 'system';
=======
export type NotificationType = 'message' | 'quote_request' | 'booking_confirmation' | 'hire_request' | 'onboarding' | 'system';
;
export interface CreateNotificationParams {
  user_id: string;
export interface CreateNotificationParams {;

  userId: string;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc

export interface CreateNotificationParams {;
  userId: string;
  title: string;
  message: string;
  type: NotificationType;

<<<<<<< HEAD


export interface CreateNotificationResult {;


=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
  success: boolean;
  notificationId?: string;
  error?: any;
}

<<<<<<< HEAD


export interface HireRequestNotificationParams {;


=======
export interface HireRequestNotificationParams {;

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
  talentId: string;
  adminId?: string;
  requesterName: string;
  requesterEmail: string;
  projectType?: string;
  projectSummary?: string;
  hireRequestId: string;
<<<<<<< HEAD
}

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


export interface OnboardingNotificationParams {;

  userId: string;
=======
}  userId: string;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
  missingMilestone: string;
  userRole: "talent" | "client";
}

<<<<<<< HEAD

=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
export interface SystemNotificationParams {;

  userId: string;
  title: string;
  message: string;
<<<<<<< HEAD
=======

export interface CreateNotificationParams {
  user_id: string;  title: string;
  message: string;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
  actionUrl?: string | null;
  actionText?: string | null;
  sendEmail?: boolean;
}
<<<<<<< HEAD
=======
export interface SystemNotificationParams {
  user_id: string;
  title: string;
  message: string;
}
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
