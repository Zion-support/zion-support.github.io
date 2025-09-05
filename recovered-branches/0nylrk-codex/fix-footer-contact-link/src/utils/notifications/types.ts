
export type NotificationType = 'message' | 'quote_request' | 'booking_confirmation' | 'hire_request' | 'onboarding' | 'system';

export interface CreateNotificationParams {_userId: string;
  title: string;
  message: string;
  type: NotificationType;
  relatedId?: string | null;
  sendEmail?: boolean;
  actionUrl?: string | null;
  actionText?: string | null;}

export interface CreateNotificationResult {_success: boolean;
  notificationId?: string;
  error?: unknown;}

export interface HireRequestNotificationParams {_talentId: string;
  adminId?: string;
  requesterName: string;
  requesterEmail: string;
  projectType?: string;
  projectSummary?: string;
  hireRequestId: string;}

export interface OnboardingNotificationParams {_userId: string;
  missingMilestone: string;
  userRole: 'talent' | 'client';}

export interface SystemNotificationParams {_userId: string;
  title: string;
  message: string;
  actionUrl?: string | null;
  actionText?: string | null;
  sendEmail?: boolean;}
