
<<<<<<< HEAD
import { createNotification } from './createNotification',
import { HireRequestNotificationParams } from './types',
=======

>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
/**
 * Creates a hire request notification for admin and talent
 */
export async function createHireRequestNotifications(_{_talentId, _adminId, _requesterName, _requesterEmail, _projectType, _projectSummary, _hireRequestId}: HireRequestNotificationParams) {_const _projectInfo = projectType 
    ? `${projectType} project` 
<<<<<<< HEAD
    : "project",
  
<<<<<<< HEAD
  const summaryText = projectSummary 
    ? `: "${projectSummary}"` 
    : "",
=======
    : &quot;project&quot;;
  
  const summaryText = projectSummary 
    ? `: &quot;${projectSummary}&quot;` 
=======
  const _summaryText = projectSummary 
    ? `: "${_projectSummary}"` 
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    : "";
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
  
  // Create notification for talent
  const _talentNotification = await createNotification({_userId: talentId, _title: `New Hire Request from ${requesterName}`,
    message: `${_requesterName} (${_requesterEmail}) wants to hire you for a ${_projectInfo}${_summaryText}`,
    type: 'hire_request',
    relatedId: hireRequestId,
    sendEmail: true,
    actionUrl: '/dashboard',
    actionText: 'View Request'
  }),
  
  // Create notification for admin if admin ID is provided
  if (adminId) {_const _adminNotification = await createNotification({
      userId: adminId, _title: `New Hire Request for Talent`, _message: `${requesterName} (${_requesterEmail}) wants to hire talent for a ${_projectInfo}${_summaryText}`,
      type: 'hire_request',
      relatedId: hireRequestId,
      sendEmail: true,
      actionUrl: '/admin/hire-requests',
      actionText: 'Review Request'
    }),
    
<<<<<<< HEAD
    return {
      success: talentNotification.success && adminNotification.success,
      talentNotification,
      adminNotification
    }
  }
  
  return {
    success: talentNotification.success,
    talentNotification
  }
=======
    return {_success: talentNotification.success && adminNotification.success, _talentNotification, _adminNotification};
  }
  
  return {_success: talentNotification.success, _talentNotification};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
}
