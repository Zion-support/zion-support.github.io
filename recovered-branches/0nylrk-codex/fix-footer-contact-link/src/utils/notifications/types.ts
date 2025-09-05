
export type NotificationType = 'message' | 'quote_request' | 'booking_confirmation' | 'hire_request' | 'onboarding' | 'system',;
;
export interface CreateNotificationParams {;
  userId:string,;
  title:string,;
  message:string,;
  type:NotificationType,;
  relatedId?:string | null,;
  sendEmail?:boolean,;
  actionUrl?:string | null,;
  actionText?:string | null;
}
;
export interface CreateNotificationResult {;
  success:boolean,;
  notificationId?:string,;
  error?:any;
}
;
export interface HireRequestNotificationParams {;
  talentId:string,;
  adminId?:string,;
  requesterName:string,;
  requesterEmail:string,;
  projectType?:string,;
  projectSummary?:string,;
  hireRequestId:string;
}
;
export interface OnboardingNotificationParams {;
  userId:string,;
  missingMilestone:string,;
  userRole:'talent' | 'client';
}
<<<<<<< HEAD
;
export interface SystemNotificationParams {;
  userId:string,;
  title:string,;
  message:string,;
  actionUrl?:string | null,;
  actionText?:string | null,;
  sendEmail?:boolean;
}
=======

export interface SystemNotificationParams {
  userId: string,
  title: string,
  message: string,
  actionUrl?: string | null,
  actionText?: string | null,
  sendEmail?: boolean
}
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
