
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
/**
 * Creates a hire request notification for admin and talent
 */
export async function createHireRequestNotifications({
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  try {
  const projectInfo = projectType 
    ? `${projectType} project` 

  projectType;
  projectSummary;
  hireRequestId
}: HireRequestNotificationParams) {

  const projectInfo = projectType
    ? `${projectType} project`
==============

  try {
  const projectInfo = projectType 
    ? `${projectType} project` 
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
      success: talentNotification && talentNotification.success && adminNotification && adminNotification.success;
      talentNotification,

      adminNotification
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

    }
  }
  return {

    success: talentNotification && talentNotification.success,

    talentNotification
    talentNotification
=======>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  }
}