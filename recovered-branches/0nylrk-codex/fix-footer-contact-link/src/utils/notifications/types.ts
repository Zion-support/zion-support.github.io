export type NotificationType =
  | "message"
  | "quote_request"
  | "booking_confirmation"
  | "hire_request"
  | "onboarding"
  | "system";

export interface CreateNotificationParams {
  user_id: string;

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

}
}
export interface SystemNotificationParams {
  user_id: string;


<<<<<<< HEAD
  userId: string;


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  title: string;
  message: string;
  type: NotificationType;


<<<<<<< HEAD
=======
  relatedId?: string | null;
  sendEmail?: boolean;
  actionUrl?: string | null
  actionText?: string | null
}
>>>>>>> origin/cursor/delete-old-data-records-6bba


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


<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  success: boolean;
  notificationId?: string;
  error?: any;
}

<<<<<<< HEAD



export interface HireRequestNotificationParams {;



=======

>>>>>>> origin/cursor/delete-old-data-records-6bba
  talentId: string;
  adminId?: string;
  requesterName: string;
  requesterEmail: string;
  projectType?: string;
  projectSummary?: string;
  hireRequestId: string;

}

<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
<<<<<<< HEAD


export interface SystemNotificationParams {;

  userId: string;
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  title: string;
  message: string;
  actionUrl?: string | null;
  actionText?: string | null;
  sendEmail?: boolean;
}
