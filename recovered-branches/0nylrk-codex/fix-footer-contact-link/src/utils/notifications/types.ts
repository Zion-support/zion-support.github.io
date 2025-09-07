
}
}
export interface SystemNotificationParams {
  user_id: string;


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

export interface CreateNotificationParams {;
  userId: string;
  title: string;
  message: string;
  type: NotificationType;

export interface CreateNotificationResult {;


  success: boolean;
  notificationId?: string;
  error?: any;
}


  talentId: string;
  adminId?: string;
  requesterName: string;
  requesterEmail: string;
  projectType?: string;
  projectSummary?: string;
  hireRequestId: string;

}

  related_id?: string | null;
  send_email?: boolean;
  action_url?: string | null,
  action_text?: string | null;

  success: boolean;
  notification_id?: string,
  error?: any;
}

  talent_id: string;
  admin_id?: string;
  requester_name: string;,
  requester_email: string;
  project_type?: string;
  project_summary?: string,

  userId: string;
  missingMilestone: string;"
  userRole: "talent" | "client";
}

export interface OnboardingNotificationParams {
  // TODO: Implement
  user_id: string;,
  missing_milestone: string,
  user_role: 'talent' | 'client';
export interface SystemNotificationParams {

  // TODO: Implement

export interface OnboardingNotificationParams {;




export interface SystemNotificationParams {;

  title: string;
  message: string;

  message: string;
  type: NotificationType;
}
export interface SystemNotificationParams {
  user_id: string;
  title: string;
  message: string;
}


  actionUrl?: string | null;
  actionText?: string | null;
  sendEmail?: boolean;
}
