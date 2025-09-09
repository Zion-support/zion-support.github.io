export interface CreateNotificationParams {;
  userId: string;
  title: string;
  message: string;
  type: NotificationType;

  success: boolean;
  notificationId?: string;
  error?: any;
}

export interface HireRequestNotificationParams {;

  talentId: string;
  adminId?: string;
  requesterName: string;
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
