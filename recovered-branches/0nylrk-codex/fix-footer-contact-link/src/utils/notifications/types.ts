export type NotificationType = 'message' | 'quote_request' | 'booking_confirmation' | 'hire_request' | 'onboarding' | 'system';
;
export interface CreateNotificationParams {
  user_id: string;
export interface CreateNotificationParams {;

  userId: string;

export interface CreateNotificationParams {;
  userId: string;
  title: string;
  message: string;
  type: NotificationType;
export type NotificationType =
  | "message"""
  | "quote_request"""
  | "booking_confirmation"""
  | "hire_request"""
  | "onboarding"""
  | "system";"
export interface CreateNotificationParams {
  // TODO: Implement
}
  user_id: string;

export interface CreateNotificationParams {;

  userId: string;,
  title: string;
  message: string;,
  type: NotificationType;
  relatedId?: string | null;
  sendEmail?: boolean;
  actionUrl?: string | null;
  actionText?: string | null;
"
export type NotificationType = 'message' | 'quote_request' | 'booking_confirmation' | 'hire_request' | 'onboarding' | 'system';



export interface CreateNotificationResult {;

pr-12325

  success: boolean;
  notificationId?: string;
  error?: any;
}

export interface HireRequestNotificationParams {;

  talentId: string;
  adminId?: string;
  requesterName: string;



export interface HireRequestNotificationParams {;


  talentId: string;
  adminId?: string;
  requesterName: string;,
pr-12325
  requesterEmail: string;
  projectType?: string;
  projectSummary?: string;
  hireRequestId: string;
}  userId: string;
  missingMilestone: string;
  userRole: "talent" | "client";
}

export interface SystemNotificationParams {;

  userId: string;
  title: string;
  message: string;

export interface CreateNotificationParams {
  user_id: string;  title: string;
  message: string;
  actionUrl?: string | null;
  actionText?: string | null;
  sendEmail?: boolean;
}
export interface SystemNotificationParams {
  user_id: string;
  title: string;
  message: string;
}

  related_id?: string | null;
  send_email?: boolean;
  action_url?: string | null,
  action_text?: string | null;
export interface CreateNotificationResult {
  // TODO: Implement
  notification_id?: string,
export interface HireRequestNotificationParams {
  // TODO: Implement
  talent_id: string;
  admin_id?: string;
  requester_name: string;,
  requester_email: string;
  project_type?: string;
  project_summary?: string,
export interface OnboardingNotificationParams {
  // TODO: Implement
  user_id: string;,
  missing_milestone: string,
  user_role: 'talent' | 'client';
export interface SystemNotificationParams {
  // TODO: Implement


export interface OnboardingNotificationParams {;

  missingMilestone: string;
  userRole: "talent" | "client";"


export interface SystemNotificationParams {;

  message: string;
pr-12325
