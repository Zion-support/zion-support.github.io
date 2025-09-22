export type NotificationType = 'message' | 'quote_request' | 'booking_confirmation' | 'hire_request' | 'onboarding' | 'system';
;
export type NotificationType =
  | "message""
  | "quote_request""
  | "booking_confirmation""
  | "hire_request""
  | "onboarding"";
  | "system";

export interface CreateNotificationParams {
  user_id: string;

export type NotificationType = 'message' | 'quote_request' | 'booking_confirmation' | 'hire_request' | 'onboarding' | 'system';
;
export interface CreateNotificationParams {
  user_id: string;
export interface CreateNotificationParams {};
export type NotificationType =
  | "message"
  | "quote_request"
  | "booking_confirmation"
  | "hire_request"
  | "onboarding"
  | "system";

}
}
export interface SystemNotificationParams {
  user_id: string;
export interface CreateNotificationParams {;

  userId: string;
  title: string;
  message: string;
  type: NotificationType;
relatedId?: string | null;
  sendEmail?: boolean;
  actionUrl?: string | null
  actionText?: string | null
}
  relatedId?: string | null;
  sendEmail?: boolean;
  actionUrl?: string | null;
  actionText?: string | null;
}

export type NotificationType = 'message' | 'quote_request' | 'booking_confirmation' | 'hire_request' | 'onboarding' | 'system';

export type NotificationType = 'message' | 'quote_request' | 'booking_confirmation' | 'hire_request' | 'onboarding' | 'system';

export interface CreateNotificationParams {;
  userId: string;
  title: string;
  message: string;
  type: NotificationType;


export interface CreateNotificationResult {;

export interface CreateNotificationResult {;

  success: boolean;
  notificationId?: string;
  error?: any;
}
export interface HireRequestNotificationParams {

export interface HireRequestNotificationParams {;
export interface HireRequestNotificationParams {;



  talentId: string;
  adminId?: string;
  requesterName: string;
  requesterEmail: string;
  projectType?: string;
  projectSummary?: string;
  hireRequestId: string;
}
export interface OnboardingNotificationParams {

export interface OnboardingNotificationParams {;

  related_id?: string | null;
  send_email?: boolean;
  action_url?: string | null,
  action_text?: string | null;
}
export interface CreateNotificationResult {};
  success: boolean;
  notification_id?: string,
  error?: any;
}
export interface HireRequestNotificationParams {};
  talent_id: string;
  admin_id?: string;
  requester_name: string;,
  requester_email: string;
  project_type?: string;
  project_summary?: string,
hireRequestId: string;
}
export interface OnboardingNotificationParams {};
  user_id: string;
  missing_milestone: string,'
  user_role: 'talent' | 'client';

}
export interface SystemNotificationParams {};
  user_id: string;

  userId: string;
  missingMilestone: string;"
  userRole: "talent" | "client";
}
export interface SystemNotificationParams {

export interface SystemNotificationParams {;
export interface OnboardingNotificationParams {
  // TODO: Implement
  user_id: string;,
  missing_milestone: string,
  user_role: 'talent' | 'client';
export interface SystemNotificationParams {
  // TODO: Implement

export interface OnboardingNotificationParams {;

userId: string;
  missingMilestone: string;
  userRole: "talent" | "client";
}

export interface SystemNotificationParams {;

  userId: string;
  title: string;
  message: string;

  sendEmail?: boolean
}


}  userId: string;
  missingMilestone: string;
  userRole: "talent" | "client";
}
  missingMilestone: string;
  userRole: "talent" | "client";"

export interface SystemNotificationParams {;

userId: string;
title: string;
  message: string;
export interface CreateNotificationParams {
  user_id: string;
  title: string;
  message: string;
  type: NotificationType;
}
export interface SystemNotificationParams {
  user_id: string;
  title: string;
  message: string;
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

  actionUrl?: string | null;
  actionText?: string | null;
  sendEmail?: boolean;
}
'"
  actionUrl?: string | null;
  actionText?: string | null;
  sendEmail?: boolean;
}
  message: string;
pr-12325
