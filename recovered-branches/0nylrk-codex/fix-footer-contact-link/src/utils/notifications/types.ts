
export type NotificationType =
  | "message"
  | "quote_request"
  | "booking_confirmation"
  | "hire_request"
  | "onboarding"
  | "system";



export interface CreateNotificationParams {




  success: boolean;

  notificationId?: string;
  error?: any;

}



export interface HireRequestNotificationParams {;



export interface HireRequestNotificationParams {

export interface HireRequestNotificationParams {;


  talentId: string;
  adminId?: string;
  requesterName: string;
  requesterEmail: string;
  projectType?: string;

  projectSummary?: string;
  hireRequestId: string;
}

