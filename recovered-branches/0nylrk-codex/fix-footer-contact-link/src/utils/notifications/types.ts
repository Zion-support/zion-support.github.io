
}
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
