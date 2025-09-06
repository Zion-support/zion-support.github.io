
=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
export type NotificationType = 'message' | 'quote_request' | 'booking_confirmation' | 'hire_request' | 'onboarding' | 'system';
;

export interface CreateNotificationParams {
  user_id: string;

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  userId: string;
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  title: string;
  message: string;
  type: NotificationType;
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
  success: boolean;
  notificationId?: string
  error?: any
}
export interface HireRequestNotificationParams {

export interface HireRequestNotificationParams {;
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
  talentId: string;
  adminId?: string;
  requesterName: string;
  requesterEmail: string;
  projectType?: string;
  projectSummary?: string
  hireRequestId: string
}
export interface OnboardingNotificationParams {


export interface OnboardingNotificationParams {;
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
  userId: string;
  missingMilestone: string
  userRole: 'talent' | 'client'
}
export interface SystemNotificationParams {

export interface SystemNotificationParams {;
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
  userId: string;
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  title: string;
  message: string;

  sendEmail?: boolean
}

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
