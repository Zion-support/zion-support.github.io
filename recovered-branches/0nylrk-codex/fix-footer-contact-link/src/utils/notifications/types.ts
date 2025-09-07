<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
export type NotificationType = 'message' | 'quote_request' | 'booking_confirmation' | 'hire_request' | 'onboarding' | 'system';
;
=======
export type NotificationType =
  | "message""
  | "quote_request""
  | "booking_confirmation""
  | "hire_request""
  | "onboarding"";
  | "system";
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8

<<<<<<< HEAD
=======
export type NotificationType = 'message' | 'quote_request' | 'booking_confirmation' | 'hire_request' | 'onboarding' | 'system';
;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
export interface CreateNotificationParams {
  user_id: string;
<<<<<<< HEAD
=======
<<<<<<< HEAD
  user_id: string;
<<<<<<< HEAD
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
export type NotificationType = 'message' | 'quote_request' | 'booking_confirmation' | 'hire_request' | 'onboarding' | 'system';
;
export interface CreateNotificationParams {
  user_id: string;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
export interface CreateNotificationParams {};
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
export type NotificationType =
  | "message"
  | "quote_request"
  | "booking_confirmation"
  | "hire_request"
  | "onboarding"
  | "system";
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

}
}
export interface SystemNotificationParams {
  user_id: string;
<<<<<<< HEAD

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
export interface CreateNotificationParams {;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

  userId: string;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  title: string;
  message: string;
  type: NotificationType;
<<<<<<< HEAD
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
=======
=======
  title: string;
  message: string;
  type: NotificationType;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  relatedId?: string | null;
  sendEmail?: boolean;
  actionUrl?: string | null;
  actionText?: string | null;
}
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8


export type NotificationType = 'message' | 'quote_request' | 'booking_confirmation' | 'hire_request' | 'onboarding' | 'system';
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

export type NotificationType = 'message' | 'quote_request' | 'booking_confirmation' | 'hire_request' | 'onboarding' | 'system';
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

export interface CreateNotificationParams {;
  userId: string;
  title: string;
  message: string;
  type: NotificationType;

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31


export interface CreateNotificationResult {;


<<<<<<< HEAD

<<<<<<< HEAD
export interface CreateNotificationResult {;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  success: boolean;
  notificationId?: string;
  error?: any;
}
<<<<<<< HEAD
export interface HireRequestNotificationParams {

<<<<<<< HEAD
export interface HireRequestNotificationParams {;
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======



export interface HireRequestNotificationParams {;

<<<<<<< HEAD
<<<<<<< HEAD


<<<<<<< HEAD
export interface HireRequestNotificationParams {;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
export interface HireRequestNotificationParams {;

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  talentId: string;
  adminId?: string;
  requesterName: string;
  requesterEmail: string;
  projectType?: string;
  projectSummary?: string;
  hireRequestId: string;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
  title: string;
  message: string;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
}
<<<<<<< HEAD
<<<<<<< HEAD
export interface OnboardingNotificationParams {


export interface OnboardingNotificationParams {;
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934


=======
}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

  related_id?: string | null;
  send_email?: boolean;
  action_url?: string | null,
  action_text?: string | null;
<<<<<<< HEAD
}
<<<<<<< HEAD
export interface CreateNotificationResult {};
=======
export interface CreateNotificationResult {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  success: boolean;
  notification_id?: string,
  error?: any;
}
<<<<<<< HEAD
export interface HireRequestNotificationParams {};
=======
export interface HireRequestNotificationParams {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
export interface CreateNotificationResult {
  // TODO: Implement
  notification_id?: string,
export interface HireRequestNotificationParams {
  // TODO: Implement
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  talent_id: string;
  admin_id?: string;
  requester_name: string;,
  requester_email: string;
  project_type?: string;
  project_summary?: string,
<<<<<<< HEAD
  hireRequestId: string;
}
<<<<<<< HEAD
export interface OnboardingNotificationParams {};
  user_id: string;
  missing_milestone: string,'
  user_role: 'talent' | 'client';

}
export interface SystemNotificationParams {};
  user_id: string;



<<<<<<< HEAD
<<<<<<< HEAD
=======
export interface OnboardingNotificationParams {

export interface OnboardingNotificationParams {;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  userId: string;
  missingMilestone: string;"
  userRole: "talent" | "client";
}
<<<<<<< HEAD
<<<<<<< HEAD
export interface SystemNotificationParams {

export interface SystemNotificationParams {;
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

=======
}  userId: string;
=======
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
export interface OnboardingNotificationParams {
  // TODO: Implement
  user_id: string;,
  missing_milestone: string,
  user_role: 'talent' | 'client';
export interface SystemNotificationParams {
  // TODO: Implement


export interface OnboardingNotificationParams {;

<<<<<<< HEAD
  userId: string;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  missingMilestone: string;
  userRole: "talent" | "client";
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2

export interface SystemNotificationParams {;

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  userId: string;
  title: string;
  message: string;
<<<<<<< HEAD
<<<<<<< HEAD

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

=======
}  userId: string;
  missingMilestone: string;
  userRole: "talent" | "client";
}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
  missingMilestone: string;
  userRole: "talent" | "client";"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a


export interface SystemNotificationParams {;

<<<<<<< HEAD
  userId: string;
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  title: string;
  message: string;
<<<<<<< HEAD

export interface CreateNotificationParams {
<<<<<<< HEAD
  user_id: string;
  title: string;
=======
  user_id: string;  title: string;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  message: string;
  type: NotificationType;
}
export interface SystemNotificationParams {
  user_id: string;
  title: string;
  message: string;
}
<<<<<<< HEAD
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
=======
=======

export interface CreateNotificationParams {
  user_id: string;  title: string;
  message: string;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  actionUrl?: string | null;
  actionText?: string | null;
  sendEmail?: boolean;
}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
export interface SystemNotificationParams {
  user_id: string;
  title: string;
  message: string;
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
  actionUrl?: string | null;
  actionText?: string | null;
  sendEmail?: boolean;
}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
  message: string;
pr-12325
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
