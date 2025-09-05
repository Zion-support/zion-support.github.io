

/**
 * Creates a hire request notification for admin and talent
 */
export async function createHireRequestNotifications(_{_talentId, _adminId, _requesterName, _requesterEmail, _projectType, _projectSummary, _hireRequestId}: HireRequestNotificationParams) {_const _projectInfo = projectType 
    ? `${projectType} project` 
    : "project";
  
  const _summaryText = projectSummary 
    ? `: "${_projectSummary}"` 
    : "";
  
  // Create notification for talent
  const _talentNotification = await createNotification({_userId: talentId, _title: `New Hire Request from ${requesterName}`,
    message: `${_requesterName} (${_requesterEmail}) wants to hire you for a ${_projectInfo}${_summaryText}`,
    type: 'hire_request',
    relatedId: hireRequestId,
    sendEmail: true,
    actionUrl: '/dashboard',
    actionText: 'View Request'
  });
  
  // Create notification for admin if admin ID is provided
  if (adminId) {_const _adminNotification = await createNotification({
      userId: adminId, _title: `New Hire Request for Talent`, _message: `${requesterName} (${_requesterEmail}) wants to hire talent for a ${_projectInfo}${_summaryText}`,
      type: 'hire_request',
      relatedId: hireRequestId,
      sendEmail: true,
      actionUrl: '/admin/hire-requests',
      actionText: 'Review Request'
    });
    
    return {_success: talentNotification.success && adminNotification.success, _talentNotification, _adminNotification};
  }
  
  return {_success: talentNotification.success, _talentNotification};
}
