
import { createNotification  } from './createNotification';
import { HireRequestNotificationParams } from './types';
/**
 * Creates a hire request notification for admin and talent
 */
export async function createHireRequestNotifications({
  talentId;
  adminId;
  requesterName;

  requesterEmail

  projectType;
  projectSummary;
  hireRequestId
}: HireRequestNotificationParams) {
<<<<<<< HEAD

  const projectInfo = projectType
    ? `${projectType} project`
=======
  try {
  const projectInfo = projectType 
    ? `${projectType} project` 
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    : "project";
  const summaryText = projectSummary
    ? `: "${projectSummary}"`
    : "";
  // Create notification for talent
  const talentNotification = await createNotification({
    userId: talentId
    title: `New Hire Request from ${requesterName}`;
    message: `${requesterName} (${requesterEmail}) wants to hire you for a ${projectInfo}${summaryText}`;
    type: 'hire_request';
    relatedId: hireRequestId;
    sendEmail: true;
    actionUrl: '/dashboard'
    actionText: 'View Request'
  });
  // Create notification for admin if admin ID is provided
  if (adminId) {
    const adminNotification = await createNotification({
      userId: adminId;
      title: `New Hire Request for Talent`
      message: `${requesterName} (${requesterEmail}) wants to hire talent for a ${projectInfo}${summaryText}`;
      type: 'hire_request';
      relatedId: hireRequestId;
      sendEmail: true;
      actionUrl: '/admin/hire-requests'
      actionText: 'Review Request'
    });
    return {
<<<<<<< HEAD
      success: talentNotification.success && adminNotification.success;
      talentNotification
=======
      success: talentNotification && talentNotification.success && adminNotification && adminNotification.success;
      talentNotification,
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      adminNotification
    }
  }
  return {
<<<<<<< HEAD
    success: talentNotification.success

=======
    success: talentNotification && talentNotification.success,
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    talentNotification
  }
}