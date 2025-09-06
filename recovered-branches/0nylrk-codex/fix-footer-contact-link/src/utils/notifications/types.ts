<<<<<<< HEAD

=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
export type NotificationType = 'message' | 'quote_request' | 'booking_confirmation' | 'hire_request' | 'onboarding' | 'system';
;

export interface CreateNotificationParams {
<<<<<<< HEAD
  user_id: string;
=======
<<<<<<< HEAD
  user_id: string;
<<<<<<< HEAD
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

export interface CreateNotificationParams {;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

  userId: string;
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  title: string;
  message: string;
  type: NotificationType;
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
  relatedId?: string | null;
  sendEmail?: boolean;
  actionUrl?: string | null
  actionText?: string | null
}
<<<<<<< HEAD

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======

<<<<<<< HEAD
=======
export type NotificationType = 'message' | 'quote_request' | 'booking_confirmation' | 'hire_request' | 'onboarding' | 'system';
export interface CreateNotificationParams {
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
export type NotificationType = 'message' | 'quote_request' | 'booking_confirmation' | 'hire_request' | 'onboarding' | 'system';

export interface CreateNotificationParams {;
  userId: string;
  title: string;
  message: string;
  type: NotificationType;

<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a


export interface CreateNotificationResult {;


<<<<<<< HEAD
<<<<<<< HEAD
=======
export interface CreateNotificationResult {

export interface CreateNotificationResult {;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  success: boolean;
  notificationId?: string
  error?: any
}
<<<<<<< HEAD
export interface HireRequestNotificationParams {

export interface HireRequestNotificationParams {;
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======



export interface HireRequestNotificationParams {;


<<<<<<< HEAD
<<<<<<< HEAD
=======
export interface HireRequestNotificationParams {

export interface HireRequestNotificationParams {;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  talentId: string;
  adminId?: string;
  requesterName: string;
  requesterEmail: string;
  projectType?: string;
  projectSummary?: string
  hireRequestId: string
}
<<<<<<< HEAD
export interface OnboardingNotificationParams {


export interface OnboardingNotificationParams {;
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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


export interface OnboardingNotificationParams {;

<<<<<<< HEAD
=======
export interface OnboardingNotificationParams {

export interface OnboardingNotificationParams {;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  userId: string;
  missingMilestone: string
  userRole: 'talent' | 'client'
}
<<<<<<< HEAD
export interface SystemNotificationParams {

export interface SystemNotificationParams {;
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
<<<<<<< HEAD


export interface SystemNotificationParams {;

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  userId: string;
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  title: string;
  message: string;

<<<<<<< HEAD
  sendEmail?: boolean
}

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a


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
<<<<<<< HEAD
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

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
